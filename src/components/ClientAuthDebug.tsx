'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function ClientAuthDebug() {
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    console.log('🔍 [DASHBOARD-CLIENT] Auth state on dashboard page:', {
      isLoaded,
      isSignedIn,
      hasUser: !!user,
      userId: user?.id,
      userEmail: user?.emailAddresses?.[0]?.emailAddress,
      pathname: typeof window !== 'undefined' ? window.location.pathname : 'unknown'
    });
  }, [user, isLoaded, isSignedIn]);

  return null; // This component only logs, doesn't render anything
}
