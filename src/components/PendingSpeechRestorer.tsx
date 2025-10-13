'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

// Key for local storage
const PENDING_SPEECH_KEY = 'pending_speech_data';
const PAYMENT_SUCCESSFUL_KEY = 'payment_successful';
const PAYMENT_SESSION_ID_KEY = 'payment_session_id';

interface PendingSpeechRestorerProps {
  onRestored?: () => void;
}

export default function PendingSpeechRestorer({ onRestored }: PendingSpeechRestorerProps) {
  const [restored, setRestored] = useState(false);
  const { userId, isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only run after auth is loaded and user is signed in
    if (!isLoaded || !isSignedIn || !userId) return;

    const restorePendingSpeech = async () => {
      try {
        // Check if we have pending speech data and payment was successful
        const pendingSpeechData = localStorage.getItem(PENDING_SPEECH_KEY);
        const paymentSuccessful = localStorage.getItem(PAYMENT_SUCCESSFUL_KEY) === 'true';
        const paymentSessionId = localStorage.getItem(PAYMENT_SESSION_ID_KEY);

        // If we have both, we need to restore the speech
        if (pendingSpeechData && paymentSuccessful) {
          console.log('Found pending speech data after successful payment', {
            speechDataLength: pendingSpeechData.length,
            sessionId: paymentSessionId,
          });

          // Parse the speech data
          const speechData = JSON.parse(pendingSpeechData);

          // Save the speech to the database
          const response = await fetch('/api/speech', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: speechData.title || 'Untitled Speech',
              content: speechData.content || '',
              role: speechData.role || 'Unknown',
              formData: speechData.formData || {},
              tone: speechData.formData?.tone || 'balanced',
              length: speechData.formData?.lengthPreference || 'medium',
            }),
          });

          if (response.ok) {
            const result = await response.json();
            console.log('Successfully restored speech after payment', result);

            // Clear the pending speech data
            localStorage.removeItem(PENDING_SPEECH_KEY);
            localStorage.removeItem(PAYMENT_SUCCESSFUL_KEY);
            localStorage.removeItem(PAYMENT_SESSION_ID_KEY);

            setRestored(true);

            // Call the onRestored callback if provided
            if (onRestored) {
              onRestored();
            }

            // Navigate to the dashboard
            router.push('/dashboard?restored=true');
          } else {
            console.error('Failed to restore speech after payment', response.statusText);
          }
        }
      } catch (err) {
        console.error('Error restoring pending speech', err);
      }
    };

    restorePendingSpeech();
  }, [isLoaded, isSignedIn, userId, router, onRestored]);

  // This is an invisible component, it just performs the data restoration
  return null;
}
