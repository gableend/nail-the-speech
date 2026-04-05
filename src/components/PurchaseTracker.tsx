"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { track, getAttribution } from "@/lib/analytics";
import { useCurrency } from "@/hooks/useCurrency";

/**
 * Fires purchase_completed GA4 event on any page that loads with ?success=true.
 * Deduplicated by Stripe session_id via sessionStorage.
 * Mount once in root layout.
 */
export default function PurchaseTracker() {
  const searchParams = useSearchParams();
  const { currency } = useCurrency();
  const tracked = useRef(false);

  const paymentSuccess = searchParams.get("success") === "true";
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!paymentSuccess || !sessionId || tracked.current) return;

    const key = `nts_purchase_tracked_${sessionId}`;
    if (sessionStorage.getItem(key)) return;

    const attr = getAttribution();
    track("purchase_completed", {
      value: currency.amount / 100,
      currency: currency.code,
      plan: "pro",
      session_id: sessionId,
      ...attr,
    });

    tracked.current = true;
    sessionStorage.setItem(key, "1");
  }, [paymentSuccess, sessionId, currency.amount, currency.code]);

  return null;
}
