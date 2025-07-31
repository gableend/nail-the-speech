import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe, STRIPE_CONFIG } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    console.log('🔍 [CHECKOUT SESSION] Starting checkout session creation...');

    // Check auth
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log(`💳 [CHECKOUT SESSION] Creating session for user: ${userId}`);

    // Check if user is already pro
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (existingUser?.isProUser) {
      return NextResponse.json(
        { error: "User is already a Pro member" },
        { status: 400 }
      );
    }

    // Get user email from Clerk if available
    let customerEmail: string | undefined;
    try {
      // In a real implementation, you might want to get email from Clerk
      // For now, we'll let Stripe collect it during checkout
    } catch (error: unknown) {
      console.log('⚠️ [CHECKOUT SESSION] Could not get user email:', error);
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: STRIPE_CONFIG.mode,
      line_items: [
        {
          price_data: {
            currency: STRIPE_CONFIG.currency,
            product_data: {
              name: STRIPE_CONFIG.productName,
              description: STRIPE_CONFIG.productDescription,
            },
            unit_amount: STRIPE_CONFIG.priceAmount,
          },
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        userId: userId,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.nailthespeech.com'}/generator?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.nailthespeech.com'}/generator?canceled=true`,
    });

    console.log(`✅ [CHECKOUT SESSION] Created session: ${session.id}`);

    // Store session ID for future reference
    await prisma.user.upsert({
      where: { id: userId },
      create: {
        id: userId,
        email: customerEmail,
        stripeSessionId: session.id,
      },
      update: {
        stripeSessionId: session.id,
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    });

  } catch (error: unknown) {
    console.error("💥 [CHECKOUT SESSION] Error creating checkout session:", error);
    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
