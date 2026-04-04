'use client';

import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

interface PaymentSuccessBannerProps {
  sessionId: string;
}

export default function PaymentSuccessBanner({ sessionId }: PaymentSuccessBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState<{
    amount?: string;
    product?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Store that payment was successful in local storage
    try {
      localStorage.setItem('payment_successful', 'true');
      localStorage.setItem('payment_session_id', sessionId);
    } catch (err) {
      console.error('Failed to save payment status to localStorage', err);
    }

    // Optional: Fetch payment details from the server
    // This could be done via a secure API endpoint that verifies the session
    const getSessionDetails = async () => {
      setIsLoading(true);
      try {
        // For now, just simulate loading and show a generic message
        // In production, you'd fetch real data from your server
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPaymentDetails({
          product: 'Nail The Speech Pro'
        });
      } catch (error) {
        console.error('Error fetching payment details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getSessionDetails();
  }, [sessionId]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4 mb-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-300">
            <Check className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <div className="font-semibold text-green-800">Payment Successful!</div>
            <div className="text-sm text-green-700">
              {isLoading ? (
                <span className="inline-block w-32 h-4 bg-green-200 animate-pulse rounded"></span>
              ) : (
                <>
                  You've purchased <span className="font-medium">{paymentDetails.product}</span> for <span className="font-medium">{paymentDetails.amount}</span>.
                </>
              )}
            </div>
            <div className="text-sm text-green-600 mt-1">
              Complete your {sessionId ? 'account creation' : 'sign in'} to access all Pro features.
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-green-500 hover:text-green-700"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
