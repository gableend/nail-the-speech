"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import UserDropdown from "@/components/auth/UserDropdown";
import SocialSignupModal from "@/components/auth/SocialSignupModal";

export default function PricingPage() {
  const { data: session, status } = useSession();
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!session) {
      setShowSignupModal(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_premium_monthly', // Replace with actual Stripe Price ID
          successUrl: `${window.location.origin}/dashboard?upgraded=true`,
          cancelUrl: `${window.location.origin}/pricing`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.sessionId) {
        // Redirect to Stripe Checkout
        const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
        if (!stripeKey) {
          alert('Stripe is not configured');
          return;
        }

        const stripe = await import('@stripe/stripe-js').then(m =>
          m.loadStripe(stripeKey)
        );

        if (stripe) {
          await stripe.redirectToCheckout({ sessionId: data.sessionId });
        }
      } else {
        // Handle development mode or Stripe not configured
        alert(data.message || "Stripe checkout would redirect here with real credentials. For now, this is a demo.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Error creating checkout session. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const features = {
    free: [
      "1 speech per month",
      "Basic speech templates",
      "Standard export (text copy)",
      "Community support",
    ],
    premium: [
      "Unlimited speeches",
      "Advanced customization options",
      "Premium export formats (PDF, DOCX)",
      "Extended speech lengths (up to 10 minutes)",
      "Priority customer support",
      "Early access to new features",
      "Speech version history",
      "Advanced AI personalization",
    ]
  };

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e8e1d8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎤</span>
              <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
            </Link>
            <div className="flex items-center space-x-4">
              {status === "loading" ? (
                <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
              ) : session ? (
                <UserDropdown />
              ) : (
                <>
                  <Button
                    onClick={() => setShowSignupModal(true)}
                    className="hidden md:block bg-black hover:bg-black/90 text-white rounded-full"
                  >
                    Log in
                  </Button>
                  <Button
                    onClick={() => setShowSignupModal(true)}
                    className="hidden md:block bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full"
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#181615] mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-[#8f867e] max-w-3xl mx-auto">
            Start free and upgrade anytime. Create perfect wedding speeches with AI that understands the heart of your message.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 border-[#e8e1d8] relative">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-[#da5389]" />
                <CardTitle className="text-2xl text-[#181615]">Free Plan</CardTitle>
              </div>
              <div className="text-4xl font-bold text-[#181615] mb-2">
                $0
                <span className="text-lg font-normal text-[#8f867e]">/month</span>
              </div>
              <p className="text-[#8f867e]">Perfect for trying out our service</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.free.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[#181615]">{feature}</span>
                  </li>
                ))}
              </ul>

              {session ? (
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2"
                  disabled
                >
                  Current Plan
                </Button>
              ) : (
                <Button
                  onClick={() => setShowSignupModal(true)}
                  variant="outline"
                  className="w-full rounded-full border-2 border-[#da5389] text-[#da5389] hover:bg-[#da5389] hover:text-white"
                >
                  Get Started Free
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="border-2 border-[#da5389] relative shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#da5389] text-white px-4 py-2 text-sm font-semibold">
                <Crown className="h-4 w-4 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="h-6 w-6 text-[#da5389]" />
                <CardTitle className="text-2xl text-[#181615]">Premium Plan</CardTitle>
              </div>
              <div className="text-4xl font-bold text-[#181615] mb-2">
                $9.99
                <span className="text-lg font-normal text-[#8f867e]">/month</span>
              </div>
              <p className="text-[#8f867e]">Everything you need for perfect speeches</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.premium.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-[#181615]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full text-lg py-6"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Crown className="h-5 w-5 mr-2" />
                    Upgrade to Premium
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-[#8f867e]">
                Cancel anytime. No hidden fees.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-[#181615] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-[#181615] mb-3">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-[#8f867e]">
                Yes! You can cancel your premium subscription at any time. You'll continue to have access to premium features until the end of your billing period.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#181615] mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-[#8f867e]">
                We accept all major credit cards, debit cards, and PayPal through our secure Stripe payment processing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#181615] mb-3">
                Is there a free trial for Premium?
              </h3>
              <p className="text-[#8f867e]">
                The free plan allows you to try our core features. You can upgrade to Premium anytime to unlock advanced features.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#181615] mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-[#8f867e]">
                We offer a 30-day money-back guarantee. If you're not satisfied with your premium subscription, contact us for a full refund.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#da5389]/10 to-[#e9a41a]/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#181615] mb-4">
              Ready to create your perfect speech?
            </h2>
            <p className="text-xl text-[#8f867e] mb-8 max-w-2xl mx-auto">
              Join thousands of wedding speakers who've created memorable speeches with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/generator">
                <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-8 py-3">
                  Start Creating Free
                </Button>
              </Link>
              <Button
                onClick={handleSubscribe}
                variant="outline"
                className="rounded-full px-8 py-3 border-2 border-[#da5389] text-[#da5389] hover:bg-[#da5389] hover:text-white"
              >
                Go Premium
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      <SocialSignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        redirectTo="/pricing"
      />
    </div>
  );
}
