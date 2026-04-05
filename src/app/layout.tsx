import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ClerkProvider } from '@clerk/nextjs';
import PurchaseTracker from "@/components/PurchaseTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nailthespeech.com'),
  title: {
    default: "Nail The Speech — AI Wedding Speech Writer",
    template: "%s | Nail The Speech",
  },
  description: "Create unforgettable wedding speeches with AI that understands the heart of your message. Perfect for best man, maid of honor, and more.",
  keywords: ["wedding speeches", "AI speech writer", "best man speech", "maid of honor speech", "wedding speech generator"],
  authors: [{ name: "Nail The Speech" }],
  creator: "Nail The Speech",
  publisher: "Nail The Speech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Nail The Speech',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
        <head />
        <body suppressHydrationWarning className="antialiased">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-1DHZCRC9WG"
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1DHZCRC9WG');
            `}
          </Script>
          <Suspense fallback={null}><PurchaseTracker /></Suspense>
          <ClientBody>{children}</ClientBody>
        </body>
      </html>
    </ClerkProvider>
  );
}
