"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

interface HomeCTALinkProps {
  href: string;
  location: "hero" | "role_card" | "custom" | "minor_role";
  className?: string;
  children: React.ReactNode;
}

export default function HomeCTALink({ href, location, className, children }: HomeCTALinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track("generate_cta_click", { location })}
    >
      {children}
    </Link>
  );
}
