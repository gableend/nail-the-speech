import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

const ANON_COOKIE_NAME = 'anonUserId';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function getOrCreateAnonymousUser(): Promise<string> {
  const cookieStore = await cookies();
  let anonUserId = cookieStore.get(ANON_COOKIE_NAME)?.value;

  if (!anonUserId) {
    // Create new anonymous user
    const anonymousUser = await prisma.anonymousUser.create({
      data: {}
    });

    anonUserId = anonymousUser.id;

    // Set cookie
    cookieStore.set(ANON_COOKIE_NAME, anonUserId, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
  }

  return anonUserId;
}

export async function getAnonymousUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(ANON_COOKIE_NAME)?.value || null;
}

export async function clearAnonymousUser(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ANON_COOKIE_NAME);
}

export async function migrateAnonymousUserData(anonUserId: string, clerkUserId: string): Promise<void> {
  try {
    // Update all speeches from anonymous user to authenticated user
    await prisma.speech.updateMany({
      where: {
        anonUserId: anonUserId
      },
      data: {
        userId: clerkUserId,
        anonUserId: null // Clear the anonymous user ID
      }
    });

    // Optionally delete the anonymous user record
    await prisma.anonymousUser.delete({
      where: {
        id: anonUserId
      }
    });

    console.log(`✅ [ANON-MIGRATION] Successfully migrated data from ${anonUserId} to ${clerkUserId}`);
  } catch (error) {
    console.error(`❌ [ANON-MIGRATION] Failed to migrate data from ${anonUserId} to ${clerkUserId}:`, error);
    throw error;
  }
}
