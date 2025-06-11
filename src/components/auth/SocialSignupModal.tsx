"use client";

import React, { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface SocialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string;
}

export default function SocialSignupModal({
  isOpen,
  onClose,
  redirectTo = "/generator"
}: SocialSignupModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSocialLogin = async (provider: string) => {
    try {
      setLoadingProvider(provider);
      setLoading(true);

      // For development without real OAuth credentials
      if (process.env.NODE_ENV === 'development') {
        alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login would work here with real OAuth credentials. For now, this is a demo.`);
        setLoading(false);
        setLoadingProvider(null);
        return;
      }

      const result = await signIn(provider, {
        callbackUrl: redirectTo,
        redirect: false,
      });

      if (result?.error) {
        console.error(`Error signing in with ${provider}:`, result.error);
        alert(`Failed to sign in with ${provider}. Please try again.`);
      } else if (result?.url) {
        // Redirect to the callback URL
        router.push(result.url);
        onClose();
      }
    } catch (error) {
      console.error(`Error during ${provider} authentication:`, error);
      alert(`Failed to sign in with ${provider}. Please try again.`);
    } finally {
      setLoading(false);
      setLoadingProvider(null);
    }
  };

  const handleEmailSignup = async () => {
    if (!email) return;

    try {
      setLoading(true);

      // For development without real email configuration
      if (process.env.NODE_ENV === 'development') {
        alert(`Magic link login would work here with real email configuration. For now, this is a demo using: ${email}`);
        setLoading(false);
        return;
      }

      const result = await signIn("email", {
        email,
        callbackUrl: redirectTo,
        redirect: false,
      });

      if (result?.error) {
        console.error("Error signing in with email:", result.error);
        alert("Failed to send magic link. Please try again.");
      } else {
        alert("Magic link sent! Check your email to sign in.");
        onClose();
      }
    } catch (error) {
      console.error("Error during email authentication:", error);
      alert("Failed to send magic link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-auto shadow-2xl">
        <CardHeader className="text-center relative">
          <button
            onClick={onClose}
            disabled={loading}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <X className="h-5 w-5" />
          </button>
          <CardTitle className="text-2xl text-[#181615] mb-2">
            Create your account
          </CardTitle>
          <p className="text-sm text-[#8f867e]">
            Choose how you'd like to sign up
          </p>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => handleSocialLogin('google')}
              disabled={loading}
              variant="outline"
              className="w-full h-12 border-2 border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loadingProvider === 'google' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </Button>

            <Button
              onClick={() => handleSocialLogin('facebook')}
              disabled={loading}
              variant="outline"
              className="w-full h-12 border-2 border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loadingProvider === 'facebook' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )}
              <span className="text-gray-700 font-medium">Continue with Facebook</span>
            </Button>

            <Button
              onClick={() => handleSocialLogin('twitter')}
              disabled={loading}
              variant="outline"
              className="w-full h-12 border-2 border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loadingProvider === 'twitter' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              )}
              <span className="text-gray-700 font-medium">Continue with X</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-[#8f867e]">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email Signup */}
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="h-12 rounded-full border-2 border-gray-200 focus:border-[#da5389] disabled:opacity-50"
            />
            <Button
              onClick={handleEmailSignup}
              disabled={!email || loading}
              className="w-full h-12 bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full font-medium disabled:opacity-50"
            >
              {loading && loadingProvider === null ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending magic link...
                </>
              ) : (
                "Continue with email"
              )}
            </Button>
          </div>

          {/* Terms */}
          <p className="text-xs text-[#8f867e] text-center mt-4">
            By signing up, you agree to our{" "}
            <button type="button" className="text-[#da5389] hover:underline">Terms of Service</button>{" "}
            and{" "}
            <button type="button" className="text-[#da5389] hover:underline">Privacy Policy</button>
          </p>

          {/* Login Link */}
          <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <p className="text-sm text-[#8f867e]">
              Already have an account?{" "}
              <button
                onClick={onClose}
                disabled={loading}
                className="text-[#da5389] hover:underline font-medium disabled:opacity-50"
              >
                Log in
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
