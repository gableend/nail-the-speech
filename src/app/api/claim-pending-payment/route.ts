import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

/**
 * Called after a user signs up or signs in.
 * Checks if there's a pending payment for their email and upgrades them to Pro.
 */
export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();

    if (!email) {
      return NextResponse.json({ claimed: false, reason: "no_email" });
    }

    console.log(`🔍 [CLAIM PAYMENT] Checking pending payments for: ${email}`);

    // Find unclaimed pending payment for this email
    const pendingPayment = await prisma.pendingPayment.findFirst({
      where: {
        email: email,
        claimed: false,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!pendingPayment) {
      console.log(`ℹ️ [CLAIM PAYMENT] No pending payment found for: ${email}`);
      return NextResponse.json({ claimed: false, reason: "no_pending_payment" });
    }

    console.log(`💰 [CLAIM PAYMENT] Found pending payment for ${email}, upgrading to Pro`);

    // Upgrade user to Pro and mark payment as claimed
    await prisma.$transaction([
      prisma.user.upsert({
        where: { id: userId },
        create: {
          id: userId,
          email: email,
          isProUser: true,
          stripeCustomerId: pendingPayment.stripeCustomerId,
          stripeSessionId: pendingPayment.stripeSessionId,
        },
        update: {
          email: email,
          isProUser: true,
          stripeCustomerId: pendingPayment.stripeCustomerId,
          stripeSessionId: pendingPayment.stripeSessionId,
        },
      }),
      prisma.pendingPayment.update({
        where: { id: pendingPayment.id },
        data: {
          claimed: true,
          claimedByUserId: userId,
        },
      }),
    ]);

    console.log(`✅ [CLAIM PAYMENT] User ${userId} upgraded to Pro via pending payment`);

    return NextResponse.json({ claimed: true, isProUser: true });

  } catch (error: unknown) {
    console.error("💥 [CLAIM PAYMENT] Error:", error);
    return NextResponse.json(
      { error: "Failed to claim payment", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
