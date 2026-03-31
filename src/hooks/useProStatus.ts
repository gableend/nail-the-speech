import { useState, useEffect, useCallback, useRef } from 'react';
import { useUser } from '@clerk/nextjs';

interface ProStatus {
  isProUser: boolean;
  loading: boolean;
  error: string | null;
}

interface UseProStatusOptions {
  /** Poll interval in ms. Set to enable polling (e.g. 2000 for post-payment verification). */
  pollInterval?: number;
}

export function useProStatus(options?: UseProStatusOptions): ProStatus {
  const { user, isLoaded } = useUser();
  const [proStatus, setProStatus] = useState<ProStatus>({
    isProUser: false,
    loading: true,
    error: null,
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const checkProStatus = useCallback(async () => {
    if (!isLoaded) return;

    if (!user) {
      setProStatus({
        isProUser: false,
        loading: false,
        error: null,
      });
      return;
    }

    try {
      const response = await fetch('/api/user-pro-status');
      if (!response.ok) {
        throw new Error('Failed to fetch pro status');
      }

      const data = await response.json();
      const isPro = data.isProUser || false;

      setProStatus({
        isProUser: isPro,
        loading: false,
        error: null,
      });

      // Stop polling once user is confirmed Pro
      if (isPro && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } catch (error: unknown) {
      console.error('Error checking pro status:', error);
      setProStatus({
        isProUser: false,
        loading: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }, [user, isLoaded]);

  useEffect(() => {
    checkProStatus();
  }, [checkProStatus]);

  // Polling for post-payment verification
  useEffect(() => {
    if (!options?.pollInterval || proStatus.isProUser) return;

    intervalRef.current = setInterval(checkProStatus, options.pollInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [options?.pollInterval, proStatus.isProUser, checkProStatus]);

  return proStatus;
}
