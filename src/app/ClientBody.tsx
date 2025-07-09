"use client";

import { useEffect } from "react";
import AuthSyncHandler from "@/components/AuthSyncHandler";

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
      <AuthSyncHandler>
        {children}
      </AuthSyncHandler>
    </div>
  );
}
