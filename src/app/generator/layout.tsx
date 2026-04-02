import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Speech Generator — Create Your Speech | Nail The Speech",
  description: "Generate a personalized wedding speech in seconds. Best man, maid of honor, father of the bride, and more. AI-powered, heartfelt, and uniquely yours. First speech free.",
  keywords: [
    "wedding speech generator", "AI speech writer", "best man speech maker",
    "create wedding speech", "wedding toast generator", "personalized wedding speech",
  ],
  openGraph: {
    title: "Wedding Speech Generator | Nail The Speech",
    description: "Generate a personalized wedding speech in seconds. First speech free.",
    type: "website",
  },
};

export default function GeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
