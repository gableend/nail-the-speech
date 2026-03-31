import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

/**
 * Called after a user signs up or signs in.
 * 1. Claims any pending payment for their email → upgrades to Pro
 * 2. Migrates anonymous speeches (httpOnly cookie) → links to user account
 */
export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();

    let claimed = false;
    let speechesMigrated = 0;

    // --- 1. Claim pending payment ---
    if (email) {
      console.log(`🔍 [CLAIM] Checking pending payments for: ${email}`);

      const pendingPayment = await prisma.pendingPayment.findFirst({
        where: { email, claimed: false },
        orderBy: { createdAt: "desc" },
      });

      if (pendingPayment) {
        console.log(`💰 [CLAIM] Found pending payment for ${email}, upgrading to Pro`);

        await prisma.$transaction([
          prisma.user.upsert({
            where: { id: userId },
            create: {
              id: userId,
              email,
              isProUser: true,
              stripeCustomerId: pendingPayment.stripeCustomerId,
              stripeSessionId: pendingPayment.stripeSessionId,
            },
            update: {
              email,
              isProUser: true,
              stripeCustomerId: pendingPayment.stripeCustomerId,
              stripeSessionId: pendingPayment.stripeSessionId,
            },
          }),
          prisma.pendingPayment.update({
            where: { id: pendingPayment.id },
            data: { claimed: true, claimedByUserId: userId },
          }),
        ]);

        claimed = true;
        console.log(`✅ [CLAIM] User ${userId} upgraded to Pro via pending payment`);
      }
    }

    // --- 2. Migrate anonymous speeches (server-side, reads httpOnly cookie) ---
    let anonUserIdFound: string | null = null;
    try {
      const cookieStore = await cookies();
      anonUserIdFound = cookieStore.get("anonUserId")?.value ?? null;
      console.log(`🔍 [CLAIM] Anonymous cookie value: ${anonUserIdFound || 'not found'}`);

      if (anonUserIdFound) {
        console.log(`🔄 [CLAIM] Migrating anonymous speeches from ${anonUserIdFound} to ${userId}`);

        const result = await prisma.speech.updateMany({
          where: { anonUserId: anonUserIdFound },
          data: { userId, anonUserId: null },
        });

        speechesMigrated = result.count;
        console.log(`✅ [CLAIM] Migrated ${speechesMigrated} speeches`);

        // Clean up anonymous user record
        try {
          await prisma.anonymousUser.delete({ where: { id: anonUserIdFound } });
        } catch {
          // Anonymous user record may not exist — that's fine
        }
      }
    } catch (migrationError) {
      console.error("⚠️ [CLAIM] Speech migration error (non-fatal):", migrationError);
    }

    // Build response — clear the anonymous cookie via Set-Cookie header
    const response = NextResponse.json({
      claimed,
      isProUser: claimed,
      speechesMigrated,
      anonUserIdFound: anonUserIdFound ?? null,
    });

    // Clear anonymous cookie via response header (safer than cookies().delete() in Route Handlers)
    if (anonUserIdFound) {
      response.cookies.set("anonUserId", "", {
        maxAge: 0,
        path: "/",
        httpOnly: true,
      });
    }

    return response;

  } catch (error: unknown) {
    console.error("💥 [CLAIM] Error:", error);
    return NextResponse.json(
      { error: "Failed to process claim", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
