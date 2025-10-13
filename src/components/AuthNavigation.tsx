"use client";

import { useUser, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users } from 'lucide-react';

export default function AuthNavigation() {
  return (
    <>
      <SignedOut>
        <Link href="/sign-in">
          <Button variant="outline" className="hidden md:block rounded-full border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-transparent focus:bg-transparent active:bg-transparent px-6 py-2 font-medium">
            Log in
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="hidden md:block bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-6 py-2 font-medium">
            Sign up
          </Button>
        </Link>
      </SignedOut>

      <SignedIn>
        <Link href="/dashboard">
          <Button className="hidden md:flex bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-8 py-2 font-medium min-w-[150px] items-center justify-center whitespace-nowrap">
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
    </>
  );
}
