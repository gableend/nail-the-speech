'use client';

import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PaymentSuccessBanner from '@/components/PaymentSuccessBanner';

export default function Page() {
  const searchParams = useSearchParams();
  const paymentSuccess = searchParams.get('success') === 'true';
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f4] via-[#fdfcfa] to-[#f8f4f0]">
      {/* Header with brand */}
      <div className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl">🎤</span>
          <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
        </Link>
        <Link href="/sign-in" className="text-[#8f867e] hover:text-[#da5389] font-medium">
          Already have an account? <span className="text-[#da5389]">Log in</span>
        </Link>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center px-4 py-2 lg:py-4">
        <div className="max-w-2xl w-full">
          {/* Payment success banner */}
          {paymentSuccess && sessionId && (
            <div className="mb-6">
              <PaymentSuccessBanner sessionId={sessionId} />
            </div>
          )}

          <div className="flex justify-center">
            <ClerkLoading>
              <div className="w-full max-w-[400px] bg-white rounded-xl border border-[#e8e1d8] p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#da5389] mx-auto mb-4" />
                <p className="text-[#8f867e]">Loading sign up...</p>
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <SignUp
                fallbackRedirectUrl="/dashboard"
                forceRedirectUrl="/dashboard"
                signInUrl="/sign-in"
              />
            </ClerkLoaded>
          </div>

          {/* Trust indicators */}
          <div className="mt-4 lg:mt-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm text-[#8f867e]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#da5389] rounded-full flex-shrink-0"></span>
                <span className="font-medium">Get started for free</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#da5389] rounded-full flex-shrink-0"></span>
                <span className="font-medium">AI-powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#8f867e] rounded-full flex-shrink-0"></span>
                <span className="font-medium">10k+ speeches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
