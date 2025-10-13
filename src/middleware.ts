import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/profile(.*)',
  '/speeches(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    // Protect routes that require authentication
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  } catch (error) {
    // Log middleware errors but don't break the request
    console.error('⚠️ [MIDDLEWARE] Clerk middleware error:', error);
    // Allow the request to continue - graceful degradation
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
