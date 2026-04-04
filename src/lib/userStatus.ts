import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getUserProStatus(): Promise<{
  isAuthenticated: boolean;
  isProUser: boolean;
  proExpired: boolean;
  userId: string | null;
}> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        isAuthenticated: false,
        isProUser: false,
        proExpired: false,
        userId: null,
      };
    }

    // Check pro status in database (respects 90-day expiry)
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { isProUser: true, proExpiresAt: true },
    });

    const isProActive = user?.isProUser === true &&
      (!user.proExpiresAt || user.proExpiresAt > new Date());

    const proExpired = user?.isProUser === true &&
      !!user.proExpiresAt && user.proExpiresAt <= new Date();

    return {
      isAuthenticated: true,
      isProUser: isProActive,
      proExpired,
      userId,
    };
  } catch (error: unknown) {
    console.error('Error checking user pro status:', error);
    return {
      isAuthenticated: false,
      isProUser: false,
      proExpired: false,
      userId: null,
    };
  }
}

/**
 * Check Pro status for a request where we already have userId/anonUserId.
 * Used in API routes that handle both authenticated and anonymous users.
 */
// Short-lived cache for pro status checks (avoids DB hit on rapid successive calls e.g. TTS chunks)
const proStatusCache = new Map<string, { isPro: boolean; expiresAt: number }>();
const PRO_CACHE_TTL_MS = 30_000; // 30 seconds

export async function checkProStatusForRequest(
  userId: string | null,
  anonUserId: string | null
): Promise<boolean> {
  if (!userId) return false;

  // Check cache first
  const cached = proStatusCache.get(userId);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.isPro;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { isProUser: true, proExpiresAt: true },
    });
    const isPro = user?.isProUser === true &&
      (!user.proExpiresAt || user.proExpiresAt > new Date());

    // Cache result
    proStatusCache.set(userId, { isPro, expiresAt: Date.now() + PRO_CACHE_TTL_MS });

    return isPro;
  } catch (error) {
    console.error('Error checking pro status for request:', error);
    return false;
  }
}

/**
 * Count speeches for a user (authenticated or anonymous).
 */
export async function countUserSpeeches(
  userId: string | null,
  anonUserId: string | null
): Promise<number> {
  try {
    if (userId) {
      return await prisma.speech.count({ where: { userId } });
    }
    if (anonUserId) {
      return await prisma.speech.count({ where: { anonUserId } });
    }
    return 0;
  } catch (error) {
    console.error('Error counting user speeches:', error);
    return 0;
  }
}

export async function requireProUser() {
  const { isProUser, isAuthenticated } = await getUserProStatus();

  if (!isAuthenticated) {
    throw new Error('Authentication required');
  }

  if (!isProUser) {
    throw new Error('Pro subscription required');
  }

  return true;
}
