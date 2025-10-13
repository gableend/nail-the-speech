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
