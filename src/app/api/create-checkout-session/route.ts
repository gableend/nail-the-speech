import { type NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    const user = await currentUser();
    
    if (!userId || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { priceId, successUrl, cancelUrl } = await request.json();

    // For development - check if we have real Stripe credentials
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY?.includes('placeholder')) {
      return NextResponse.json({
        error: "Stripe not configured",
        message: "Stripe checkout would be created here with real credentials"
      }, { status: 501 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-11-20.acacia",
    });

    // Create Stripe checkout session with Clerk user information
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: user.emailAddresses[0]?.emailAddress,
      metadata: {
        userId: userId,
        userEmail: user.emailAddresses[0]?.emailAddress || '',
      },
      success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      subscription_data: {
        metadata: {
          userId: userId,
        },
      },
    });

    return NextResponse.json({ 
      sessionId: checkoutSession.id,
      url: checkoutSession.url 
    });

  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
EOF  
cd /home/project && cd nail-the-speech && cat > src/app/api/create-checkout-session/route.ts << 'EOF'
import { type NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    const user = await currentUser();
    
    if (!userId || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { priceId, successUrl, cancelUrl } = await request.json();

    // For development - check if we have real Stripe credentials
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY?.includes('placeholder')) {
      return NextResponse.json({
        error: "Stripe not configured",
        message: "Stripe checkout would be created here with real credentials"
      }, { status: 501 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-11-20.acacia",
    });

    // Create Stripe checkout session with Clerk user information
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: user.emailAddresses[0]?.emailAddress,
      metadata: {
        userId: userId,
        userEmail: user.emailAddresses[0]?.emailAddress || '',
      },
      success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      subscription_data: {
        metadata: {
          userId: userId,
        },
      },
    });

    return NextResponse.json({ 
      sessionId: checkoutSession.id,
      url: checkoutSession.url 
    });

  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
