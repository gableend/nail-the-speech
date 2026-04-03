import { type NextRequest, NextResponse } from "next/server";
import { stripe, type Stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { clerkClient } from "@clerk/nextjs/server";

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
    let event: Stripe.Event;
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
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const customerEmail = session.customer_details?.email;

      if (!customerEmail) {
        console.error('❌ [STRIPE WEBHOOK] No customer email found');
        return NextResponse.json(
          { error: 'No customer email found' },
          { status: 400 }
        );
      }

      console.log(`💰 [STRIPE WEBHOOK] Payment completed for email: ${customerEmail}`);

      const stripeCustomerId = typeof session.customer === 'string'
        ? session.customer
        : (session.customer?.id ?? null);

      let finalUserId = userId;

      // If no userId in metadata, try to find existing Clerk user by email
      if (!userId || userId === '') {
        console.log(`🔍 [STRIPE WEBHOOK] No userId in metadata, checking Clerk for email: ${customerEmail}`);

        try {
          const client = await clerkClient();
          const users = await client.users.getUserList({
            emailAddress: [customerEmail]
          });

          if (users.data.length > 0) {
            finalUserId = users.data[0].id;
            console.log(`✅ [STRIPE WEBHOOK] Found existing Clerk user: ${finalUserId}`);
          } else {
            // User hasn't signed up yet — store as pending payment.
            // They'll be upgraded to Pro when they create their account.
            console.log(`📧 [STRIPE WEBHOOK] No Clerk user found. Storing pending payment for: ${customerEmail}`);

            await prisma.pendingPayment.create({
              data: {
                email: customerEmail.toLowerCase(),
                stripeCustomerId: stripeCustomerId,
                stripeSessionId: session.id,
              },
            });

            console.log(`✅ [STRIPE WEBHOOK] Pending payment stored for ${customerEmail}`);
            return NextResponse.json({ received: true });
          }
        } catch (clerkError: unknown) {
          console.error('❌ [STRIPE WEBHOOK] Clerk lookup error:', clerkError);

          // Fallback: store as pending payment so it's not lost
          try {
            await prisma.pendingPayment.create({
              data: {
                email: customerEmail.toLowerCase(),
                stripeCustomerId: stripeCustomerId,
                stripeSessionId: session.id,
              },
            });
            console.log(`✅ [STRIPE WEBHOOK] Fallback: pending payment stored for ${customerEmail}`);
          } catch (dbError) {
            console.error('❌ [STRIPE WEBHOOK] Failed to store pending payment:', dbError);
          }
          return NextResponse.json({ received: true });
        }
      }

      // We have a userId — upsert the user as Pro (90-day access)
      if (finalUserId) {
        const proExpiresAt = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);
        await prisma.user.upsert({
          where: { id: finalUserId },
          create: {
            id: finalUserId,
            email: customerEmail,
            isProUser: true,
            proExpiresAt,
            stripeCustomerId: stripeCustomerId,
            stripeSessionId: session.id,
          },
          update: {
            email: customerEmail,
            isProUser: true,
            proExpiresAt,
            stripeCustomerId: stripeCustomerId,
            stripeSessionId: session.id,
          },
        });

        console.log(`✅ [STRIPE WEBHOOK] User ${finalUserId} upgraded to Pro successfully`);
      }
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
