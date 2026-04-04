import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe, STRIPE_CONFIG, CURRENCY_CONFIGS, DEFAULT_CURRENCY, type CurrencyConfig } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    console.log('🔍 [CHECKOUT SESSION] Starting checkout session creation...');

    // Get data from request body
    const body = await request.json().catch(() => ({}));
    const prefillEmail = body.email;
    const speechMetadata = body.speechMetadata || null;
    const returnUrl = body.returnUrl || null;
    const currencyKey = body.currency || 'USD';
    const currencyConfig: CurrencyConfig = CURRENCY_CONFIGS[currencyKey] || DEFAULT_CURRENCY;

    // Check if user is already authenticated (optional)
    const { userId } = await auth();

    // If authenticated, check if already pro
    if (userId) {
      const existingUser = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (existingUser?.isProUser) {
        return NextResponse.json(
          { error: "You are already a Pro member" },
          { status: 400 }
        );
      }
    }

    console.log(`💳 [CHECKOUT SESSION] Creating session${userId ? ` for user: ${userId}` : ' (anonymous)'}`);

    // Prepare metadata with any speech data
    const metadata: Record<string, string> = {
      userId: userId || '',
      source: 'pro_upgrade',
    };

    // Include speech metadata if available
    if (speechMetadata) {
      console.log('📝 [CHECKOUT SESSION] Including speech metadata');
      metadata.hasSpeechData = 'true';
      metadata.speechTitle = speechMetadata.title || 'Untitled Speech';
      metadata.speechRole = speechMetadata.role || 'Unknown';
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: STRIPE_CONFIG.mode,
      line_items: [
        {
          price_data: {
            currency: currencyConfig.code,
            product_data: {
              name: STRIPE_CONFIG.productName,
              description: STRIPE_CONFIG.productDescription,
            },
            unit_amount: currencyConfig.amount,
          },
          quantity: 1,
        },
      ],
      ...(prefillEmail ? { customer_email: prefillEmail } : {}), // Pre-fill if provided
      billing_address_collection: 'auto',
      customer_creation: 'always', // Always create a Stripe customer
      metadata,
      success_url: userId && returnUrl
        ? `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.nailthespeech.com'}${returnUrl}?success=true&session_id={CHECKOUT_SESSION_ID}`
        : `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.nailthespeech.com'}/sign-up?success=true&session_id={CHECKOUT_SESSION_ID}${returnUrl ? `&returnUrl=${encodeURIComponent(returnUrl)}` : ''}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.nailthespeech.com'}${returnUrl || '/generator'}?canceled=true`,
    });

    console.log(`✅ [CHECKOUT SESSION] Created session: ${session.id}`);

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    });

  } catch (error: unknown) {
    console.error("💥 [CHECKOUT SESSION] Error creating checkout session:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const stripeError = (error as { type?: string; code?: string })?.type || '';
    console.error("💥 [CHECKOUT SESSION] Error details:", errorMessage, "Type:", stripeError);
    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        details: errorMessage,
        stripeErrorType: stripeError,
      },
      { status: 500 }
    );
  }
}
// trigger: redeploy Wed Nov 26 13:58:30 UTC 2025
