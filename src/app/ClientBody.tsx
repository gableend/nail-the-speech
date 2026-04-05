"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import AuthSyncHandler from "@/components/AuthSyncHandler";
import { ToastContainer } from "@/components/ui/toast";
import { captureAttribution } from "@/lib/analytics";

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

  // Capture UTM attribution after page is idle
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => captureAttribution(), { timeout: 5000 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(captureAttribution, 2000);
      return () => clearTimeout(timer);
    }
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
