import { Metadata } from "next";
import VsComparisonPage from "@/components/VsComparisonPage";
import { getCompetitorBySlug } from "@/data/competitors";

const competitor = getCompetitorBySlug("speechyai")!;

export const metadata: Metadata = {
  title: { absolute: "Nail The Speech vs SpeechyAI | AI Wedding Speech Generator Comparison" },
  description:
    "Compare Nail The Speech and SpeechyAI side by side. See how pricing, features, editing tools, and speech quality stack up.",
  keywords: [
    "Nail The Speech vs SpeechyAI",
    "SpeechyAI alternative",
    "Speechy review",
    "best wedding speech generator",
    "AI wedding speech comparison",
    "SpeechyAI pricing",
  ],
  openGraph: {
    title: "Nail The Speech vs SpeechyAI: Which AI Speech Writer Wins?",
    description: "Feature-by-feature comparison of Nail The Speech and SpeechyAI.",
    type: "website",
    url: "https://www.nailthespeech.com/nailthespeech-vs-speechyai",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.nailthespeech.com/nailthespeech-vs-speechyai",
  },
};

export default function Page() {
  return <VsComparisonPage competitor={competitor} />;
}
