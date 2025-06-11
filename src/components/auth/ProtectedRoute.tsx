"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Lock } from "lucide-react";
import SocialSignupModal from "./SocialSignupModal";
import { useState } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  requirePremium?: boolean;
  fallbackPath?: string;
}

export default function ProtectedRoute({
  children,
  requirePremium = false,
  fallbackPath = "/"
}: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Show loading spinner while checking session
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
        <Card className="p-8">
          <CardContent className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-[#da5389]" />
            <p className="text-[#8f867e]">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show sign-in prompt if not authenticated
  if (status === "unauthenticated" || !session) {
    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#da5389]/10 rounded-full flex items-center justify-center mx-auto">
              <Lock className="h-8 w-8 text-[#da5389]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#181615] mb-2">
                Sign in required
              </h2>
              <p className="text-[#8f867e]">
                You need to be signed in to access this page.
              </p>
            </div>
            <div className="space-y-3">
              <Button
                onClick={() => setShowSignupModal(true)}
                className="w-full bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full"
              >
                Sign In
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push(fallbackPath)}
                className="w-full rounded-full"
              >
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>

        <SocialSignupModal
          isOpen={showSignupModal}
          onClose={() => setShowSignupModal(false)}
          redirectTo={window.location.pathname}
        />
      </div>
    );
  }

  // TODO: Check premium status when implementing Stripe
  if (requirePremium) {
    // For now, we'll just show a premium upgrade prompt
    // This will be replaced with actual Stripe subscription check
    const isPremium = false; // session.user.isPremium || false;

    if (!isPremium) {
      return (
        <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da5389] to-[#e9a41a] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">👑</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#181615] mb-2">
                  Premium Feature
                </h2>
                <p className="text-[#8f867e]">
                  This feature is available to premium subscribers only.
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => router.push('/pricing')}
                  className="w-full bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full"
                >
                  Upgrade to Premium
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push(fallbackPath)}
                  className="w-full rounded-full"
                >
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
  }

  // Render protected content if authenticated (and premium if required)
  return <>{children}</>;
}
