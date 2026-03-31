import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getUserProStatus(): Promise<{
  isAuthenticated: boolean;
  isProUser: boolean;
  userId: string | null;
}> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        isAuthenticated: false,
        isProUser: false,
        userId: null,
      };
    }

    // Check pro status in database
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { isProUser: true },
    });

    return {
      isAuthenticated: true,
      isProUser: user?.isProUser ?? false,
      userId,
    };
  } catch (error: unknown) {
    console.error('Error checking user pro status:', error);
    return {
      isAuthenticated: false,
      isProUser: false,
      userId: null,
    };
  }
}

/**
 * Check Pro status for a request where we already have userId/anonUserId.
 * Used in API routes that handle both authenticated and anonymous users.
 */
export async function checkProStatusForRequest(
  userId: string | null,
  anonUserId: string | null
): Promise<boolean> {
  if (!userId) return false;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { isProUser: true },
    });
    return user?.isProUser ?? false;
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
