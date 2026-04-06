import { Metadata } from "next";
import { generatorFaqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Wedding Speech Generator | Create Your Speech | Nail The Speech",
  description: "Generate a personalized wedding speech in seconds. Best man, maid of honor, father of the bride, and more. AI-powered, heartfelt, and uniquely yours. Get started for free.",
  keywords: [
    "wedding speech generator", "AI speech writer", "best man speech maker",
    "create wedding speech", "wedding toast generator", "personalized wedding speech",
  ],
  openGraph: {
    title: "Wedding Speech Generator | Nail The Speech",
    description: "Generate a personalized wedding speech in seconds. Get started for free.",
    type: "website",
    url: "https://www.nailthespeech.com/generator",
  },
  alternates: {
    canonical: "/generator",
  },
};

function GeneratorJsonLd() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generatorFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
    />
  );
}

export default function GeneratorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GeneratorJsonLd />
      {children}
    </>
  );
}
