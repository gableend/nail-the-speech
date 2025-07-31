import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 [STRIPE WEBHOOK] Received webhook request...');

    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    if (!signature) {
      console.error('❌ [STRIPE WEBHOOK] No signature provided');
      return NextResponse.json(
        { error: 'No signature provided' },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ [STRIPE WEBHOOK] No webhook secret configured');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    // Verify webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (error: unknown) {
      console.error('❌ [STRIPE WEBHOOK] Signature verification failed:', error);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    console.log(`📧 [STRIPE WEBHOOK] Event type: ${event.type}`);

    // Handle successful payment
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      const userId = session.metadata?.userId;

      if (!userId) {
        console.error('❌ [STRIPE WEBHOOK] No userId in session metadata');
        return NextResponse.json(
          { error: 'No userId found' },
          { status: 400 }
        );
      }

      console.log(`💰 [STRIPE WEBHOOK] Payment completed for user: ${userId}`);

      // Update user to pro status
      await prisma.user.upsert({
        where: { id: userId },
        create: {
          id: userId,
          isProUser: true,
          stripeCustomerId: session.customer,
          stripeSessionId: session.id,
        },
        update: {
          isProUser: true,
          stripeCustomerId: session.customer,
          stripeSessionId: session.id,
        },
      });

      console.log(`✅ [STRIPE WEBHOOK] User ${userId} upgraded to Pro successfully`);
    }

    return NextResponse.json({ received: true });

  } catch (error: unknown) {
    console.error('💥 [STRIPE WEBHOOK] Error processing webhook:', error);
    return NextResponse.json(
      {
        error: 'Webhook processing failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
