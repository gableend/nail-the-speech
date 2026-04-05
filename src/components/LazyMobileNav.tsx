"use client";

import dynamic from "next/dynamic";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNav = dynamic(() => import("@/components/MobileNav"), {
  ssr: false,
  loading: () => (
    <div className="md:hidden">
      <Button
        variant="ghost"
        className="rounded-full min-h-[44px] min-w-[44px] p-2"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  ),
});

export default function LazyMobileNav() {
  return <MobileNav />;
}
