import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/generator(.*)',
  '/result(.*)',
  '/api/speeches(.*)',
  '/api/generate-speech(.*)',
  '/api/create-checkout-session(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  // If the route is protected and user is not signed in, redirect to sign-in
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
EOF  
cd /home/project && cd nail-the-speech && cat > middleware.ts << 'EOF'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/generator(.*)',
  '/result(.*)',
  '/api/speeches(.*)',
  '/api/generate-speech(.*)',
  '/api/create-checkout-session(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  // If the route is protected and user is not signed in, redirect to sign-in
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
