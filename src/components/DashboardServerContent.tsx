import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import DashboardClient from '@/components/DashboardClient';

export default async function DashboardServerContent() {
  try {
    const { userId } = await auth();

    if (!userId) {
      redirect('/sign-in');
    }

    let user = null;
    try {
      user = await currentUser();
    } catch (error) {
      console.error('Failed to fetch current user:', error);
      // Continue with null user - component will handle gracefully
    }

    return (
      <div className="min-h-screen bg-[#faf7f4]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-[#e8e1d8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-3xl">🎤</span>
                  <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
                </Link>
                <Badge className="bg-[#fffaf7] text-[#e9a41a] border-[#e9a41a]">
                  <Users className="h-4 w-4 mr-1" />
                  Dashboard
                </Badge>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/generator">
                  <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-6 py-2 font-medium">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Speech
                  </Button>
                </Link>
                <UserButton
                  showName={false}
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                      userButtonTrigger: "focus:shadow-none"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#181615] mb-2">
              Welcome back{user?.firstName ? `, ${user.firstName}` : ''}! 👋
            </h1>
            <p className="text-lg text-[#8f867e]">
              Manage your speeches and create new ones for any wedding role.
            </p>
          </div>

          {/* Dashboard Content */}
          <DashboardClient />
        </main>
      </div>
    );
  } catch (error) {
    console.error('Dashboard server content error:', error);

    // Check if this is a specific auth error
    const isAuthError = error instanceof Error && (
      error.message.includes('auth') ||
      error.message.includes('session') ||
      error.message.includes('clerk')
    );

    // Return error UI with more specific information
    return (
      <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-[#181615] mb-4">
            {isAuthError ? 'Authentication Sync Issue' : 'Dashboard Error'}
          </h1>
          <p className="text-[#8f867e] mb-6">
            {isAuthError
              ? 'Your account was created successfully, but there\'s a brief sync delay. Please try signing in again.'
              : 'There was an issue loading your dashboard. Please sign in again.'
            }
          </p>
          <div className="space-y-3">
            <Link
              href="/sign-in"
              className="block bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-6 py-2 font-medium"
            >
              Sign In Again
            </Link>
            <Link
              href="/"
              className="block text-[#8f867e] hover:text-[#da5389] text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
