import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ClerkProvider } from '@clerk/nextjs';

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
  metadataBase: new URL('https://www.nailthespeech.com'),
  title: {
    default: "Nail The Speech | AI Wedding Speech Writer",
    template: "%s | Nail The Speech",
  },
  description: "You don't need to write your wedding speech. Just talk it out.",
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
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Nail The Speech',
    description: "You don't need to write your wedding speech. Just talk it out.",
    url: 'https://www.nailthespeech.com',
    siteName: 'Nail The Speech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nail The Speech',
    description: "You don't need to write your wedding speech. Just talk it out.",
    images: ['/og-image.png'],
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
          <ClientBody>{children}</ClientBody>
        </body>
      </html>
    </ClerkProvider>
  );
}
