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

      let finalUserId = userId;

      // If no userId in metadata, check if user exists by email in Clerk
      if (!userId || userId === '') {
        console.log(`🔍 [STRIPE WEBHOOK] No userId in metadata, checking Clerk for email: ${customerEmail}`);
        
        try {
          const client = await clerkClient();
          const users = await client.users.getUserList({
            emailAddress: [customerEmail]
          });

          if (users.data.length > 0) {
            // User exists in Clerk
            finalUserId = users.data[0].id;
            console.log(`✅ [STRIPE WEBHOOK] Found existing Clerk user: ${finalUserId}`);
          } else {
            // Create new Clerk user
            console.log(`🆕 [STRIPE WEBHOOK] Creating new Clerk user for: ${customerEmail}`);
            const newUser = await client.users.createUser({
              emailAddress: [customerEmail],
              skipPasswordRequirement: true, // They'll set password when they sign up
              skipPasswordChecks: true,
            });
            finalUserId = newUser.id;
            console.log(`✅ [STRIPE WEBHOOK] Created new Clerk user: ${finalUserId}`);
          }
        } catch (clerkError: unknown) {
          console.error('❌ [STRIPE WEBHOOK] Clerk error:', clerkError);
          // Continue anyway - we'll store in database with email
        }
      }

      // Update/create user in database with pro status
      const stripeCustomerId = typeof session.customer === 'string' 
        ? session.customer 
        : (session.customer?.id ?? null);

      if (finalUserId) {
        await prisma.user.upsert({
          where: { id: finalUserId },
          create: {
            id: finalUserId,
            email: customerEmail,
            isProUser: true,
            stripeCustomerId: stripeCustomerId,
            stripeSessionId: session.id,
          },
          update: {
            email: customerEmail,
            isProUser: true,
            stripeCustomerId: stripeCustomerId,
            stripeSessionId: session.id,
          },
        });

        console.log(`✅ [STRIPE WEBHOOK] User ${finalUserId} upgraded to Pro successfully`);
      } else {
        console.log(`⚠️ [STRIPE WEBHOOK] Could not create/find user, but payment successful for ${customerEmail}`);
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
