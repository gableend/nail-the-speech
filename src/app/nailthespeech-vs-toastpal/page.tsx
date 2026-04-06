import { Metadata } from "next";
import VsComparisonPage from "@/components/VsComparisonPage";
import { getCompetitorBySlug } from "@/data/competitors";

const competitor = getCompetitorBySlug("toastpal")!;

export const metadata: Metadata = {
  title: "Nail The Speech vs ToastPal | AI Wedding Speech Generator Comparison",
  description:
    "Compare Nail The Speech and ToastPal side by side. See how pricing, features, editing tools, and speech quality stack up.",
  keywords: [
    "Nail The Speech vs ToastPal",
    "ToastPal alternative",
    "ToastPal review",
    "best wedding speech generator",
    "AI wedding speech comparison",
    "ToastPal pricing",
  ],
  openGraph: {
    title: "Nail The Speech vs ToastPal: Which AI Speech Writer Wins?",
    description: "Feature-by-feature comparison of Nail The Speech and ToastPal.",
    type: "website",
    url: "https://nailthespeech.com/nailthespeech-vs-toastpal",
  },
  alternates: {
    canonical: "https://nailthespeech.com/nailthespeech-vs-toastpal",
  },
};

export default function Page() {
  return <VsComparisonPage competitor={competitor} />;
}
