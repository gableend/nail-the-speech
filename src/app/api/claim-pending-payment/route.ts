import { type NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

/**
 * Called after a user signs up or signs in.
 * 1. Claims any pending payment for their email → upgrades to Pro
 * 2. Migrates anonymous speeches → links to user account
 *
 * There are TWO anonymous user systems (legacy):
 *   - Server-side: httpOnly cookie with cuid ID (used by generate-speech-stream)
 *   - Client-side: non-httpOnly cookie with uuid v4 (used by client code)
 * We try BOTH IDs to ensure speech migration works.
 */
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Read client-side anonUserId from request body
    let clientAnonUserId: string | null = null;
    try {
      const body = await request.json().catch(() => ({}));
      clientAnonUserId = body.clientAnonUserId || null;
    } catch {
      // No body — that's fine
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

    // --- 2. Migrate anonymous speeches ---
    // Collect all possible anonymous user IDs to try
    const anonIdsToTry: string[] = [];

    // Try httpOnly cookie (server-side cuid)
    try {
      const cookieStore = await cookies();
      const serverAnonId = cookieStore.get("anonUserId")?.value;
      if (serverAnonId) {
        anonIdsToTry.push(serverAnonId);
        console.log(`🔍 [CLAIM] Server cookie anonUserId: ${serverAnonId}`);
      }
    } catch {
      console.log('🔍 [CLAIM] Could not read server cookies');
    }

    // Try client-side anonUserId (uuid v4, passed in request body)
    if (clientAnonUserId && !anonIdsToTry.includes(clientAnonUserId)) {
      anonIdsToTry.push(clientAnonUserId);
      console.log(`🔍 [CLAIM] Client anonUserId: ${clientAnonUserId}`);
    }

    console.log(`🔍 [CLAIM] Trying ${anonIdsToTry.length} anonymous IDs for migration`);

    // Try each anonymous ID
    for (const anonId of anonIdsToTry) {
      try {
        const result = await prisma.speech.updateMany({
          where: { anonUserId: anonId },
          data: { userId, anonUserId: null },
        });

        if (result.count > 0) {
          speechesMigrated += result.count;
          console.log(`✅ [CLAIM] Migrated ${result.count} speeches from anonId: ${anonId}`);

          // Clean up anonymous user record
          try {
            await prisma.anonymousUser.delete({ where: { id: anonId } });
          } catch {
            // Record may not exist — that's fine
          }
        }
      } catch (err) {
        console.error(`⚠️ [CLAIM] Migration error for anonId ${anonId}:`, err);
      }
    }

    console.log(`📊 [CLAIM] Final: claimed=${claimed}, speechesMigrated=${speechesMigrated}`);

    // Build response — clear cookies
    const response = NextResponse.json({
      claimed,
      isProUser: claimed,
      speechesMigrated,
      anonIdsTried: anonIdsToTry,
    });

    // Clear the httpOnly anonymous cookie
    if (anonIdsToTry.length > 0) {
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
