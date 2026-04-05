"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import AuthSyncHandler from "@/components/AuthSyncHandler";
import { ToastContainer } from "@/components/ui/toast";

const PurchaseTracker = dynamic(() => import("@/components/PurchaseTracker"), {
  ssr: false,
});

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased">
      <ToastContainer />
      <PurchaseTracker />
      <AuthSyncHandler>
        {children}
      </AuthSyncHandler>
    </div>
  );
}
