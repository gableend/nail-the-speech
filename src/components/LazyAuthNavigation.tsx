"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthNavigation = dynamic(() => import("@/components/AuthNavigation"), {
  ssr: false,
  loading: () => (
    <>
      <Link href="/generator" aria-label="Get Started">
        <Button className="hidden md:block bg-[#c44578] hover:bg-[#b33c6c]/90 text-white rounded-full px-6 py-2 font-medium">
          Get Started
        </Button>
      </Link>
      <Link href="/sign-in" aria-label="Log in">
        <Button variant="outline" className="hidden md:block rounded-full border-[#c44578] bg-white text-[#181615] hover:border-[#b33c6c] hover:text-[#b33c6c] hover:bg-white focus:bg-white active:bg-white px-6 py-2 font-medium">
          Log in
        </Button>
      </Link>
    </>
  ),
});

export default function LazyAuthNavigation() {
  return <AuthNavigation />;
}
