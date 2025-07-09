import { Suspense } from 'react';
import Link from 'next/link';
import DashboardServerContent from '@/components/DashboardServerContent';

// Force dynamic rendering since this page uses Clerk auth
export const dynamic = 'force-dynamic';

// Loading component for suspense fallback
function DashboardLoading() {
  return (
    <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#da5389] mx-auto mb-4"></div>
        <p className="text-[#8f867e]">Loading dashboard...</p>
      </div>
    </div>
  );
}

// Error boundary component
function DashboardError() {
  return (
    <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#181615] mb-4">Dashboard Unavailable</h1>
        <p className="text-[#8f867e] mb-6">
          We're having trouble loading your dashboard. Please try signing in again.
        </p>
        <Link
          href="/sign-in"
          className="inline-block bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-6 py-2 font-medium"
        >
          Sign In Again
        </Link>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardServerContent />
    </Suspense>
  );
}
