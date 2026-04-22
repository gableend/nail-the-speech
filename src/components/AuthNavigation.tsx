"use client";

import { SignedIn, SignedOut, UserButton, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users } from 'lucide-react';

export default function AuthNavigation({ isGeneratorPage = false }: { isGeneratorPage?: boolean }) {
  const primaryLink = isGeneratorPage ? "/" : "/generator";
  const primaryLabel = isGeneratorPage ? "Home" : "Start Your Speech";

  return (
    <>
      {/* While Clerk is loading, show default buttons */}
      <ClerkLoading>
        <Link href={primaryLink} aria-label={primaryLabel}>
          <Button className="hidden md:block bg-[#c44578] hover:bg-[#b33c6c]/90 text-white rounded-full px-6 py-2 font-medium">
            {primaryLabel}
          </Button>
        </Link>
        <Link href="/sign-in" aria-label="Log in">
          <Button variant="outline" className="hidden md:block rounded-full border-[#c44578] bg-white text-[#181615] hover:border-[#b33c6c] hover:text-[#b33c6c] hover:bg-white focus:bg-white active:bg-white px-6 py-2 font-medium">
            Log in
          </Button>
        </Link>
      </ClerkLoading>

      {/* Once Clerk is loaded, show the appropriate state */}
      <ClerkLoaded>
        <SignedOut>
          <Link href={primaryLink} aria-label={primaryLabel}>
            <Button className="hidden md:block bg-[#c44578] hover:bg-[#b33c6c]/90 text-white rounded-full px-6 py-2 font-medium">
              {primaryLabel}
            </Button>
          </Link>
          <Link href="/sign-in" aria-label="Log in">
            <Button variant="outline" className="hidden md:block rounded-full border-[#c44578] bg-white text-[#181615] hover:border-[#b33c6c] hover:text-[#b33c6c] hover:bg-white focus:bg-white active:bg-white px-6 py-2 font-medium">
              Log in
            </Button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard">
            <Button className="hidden md:flex bg-[#c44578] hover:bg-[#b33c6c]/90 text-white rounded-full px-8 py-2 font-medium min-w-[150px] items-center justify-center whitespace-nowrap">
              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
              Dashboard
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
        </SignedIn>
      </ClerkLoaded>
    </>
  );
}
