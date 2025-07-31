import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

interface ProStatus {
  isProUser: boolean;
  loading: boolean;
  error: string | null;
}

export function useProStatus(): ProStatus {
  const { user, isLoaded } = useUser();
  const [proStatus, setProStatus] = useState<ProStatus>({
    isProUser: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function checkProStatus() {
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
        setProStatus({
          isProUser: data.isProUser || false,
          loading: false,
          error: null,
        });
      } catch (error: unknown) {
        console.error('Error checking pro status:', error);
        setProStatus({
          isProUser: false,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    checkProStatus();
  }, [user, isLoaded]);

  return proStatus;
}
