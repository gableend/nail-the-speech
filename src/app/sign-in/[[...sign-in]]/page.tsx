'use client';

import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PaymentSuccessBanner from '@/components/PaymentSuccessBanner';

export default function Page() {
  const searchParams = useSearchParams();
  const paymentSuccess = searchParams.get('success') === 'true';
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f4] via-[#fdfcfa] to-[#f8f4f0]">
      <div className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl">🎤</span>
          <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
        </Link>
        <Link href="/sign-up" className="text-[#8f867e] hover:text-[#da5389] font-medium">
          Need an account? <span className="text-[#da5389]">Sign up</span>
        </Link>
      </div>

      <div className="flex items-center justify-center px-4 py-2 lg:py-4">
        <div className="max-w-2xl w-full">
          {paymentSuccess && sessionId && (
            <div className="mb-6">
              <PaymentSuccessBanner sessionId={sessionId} />
            </div>
          )}

          <div className="flex justify-center">
            <ClerkLoading>
              <div className="w-full max-w-[400px] bg-white rounded-xl border border-[#e8e1d8] p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#da5389] mx-auto mb-4" />
                <p className="text-[#8f867e]">Loading sign in...</p>
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <SignIn
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
                redirectUrl="/dashboard"
              />
            </ClerkLoaded>
          </div>

          <div className="mt-4 lg:mt-6 text-center">
            <p className="text-sm text-[#8f867e] mb-4 font-medium">Access your personalized dashboard with:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm text-[#8f867e]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#da5389] rounded-full flex-shrink-0"></span>
                <span className="font-medium">Speech history</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#da5389] rounded-full flex-shrink-0"></span>
                <span className="font-medium">Draft management</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#8f867e] rounded-full flex-shrink-0"></span>
                <span className="font-medium">Quick access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
