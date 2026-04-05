import { Metadata } from "next";
import VsComparisonPage from "@/components/VsComparisonPage";
import { getCompetitorBySlug } from "@/data/competitors";

const competitor = getCompetitorBySlug("toastwiz")!;

export const metadata: Metadata = {
  title: "Nail The Speech vs ToastWiz — AI Wedding Speech Generator Comparison",
  description:
    "Compare Nail The Speech and ToastWiz side by side. See how pricing, features, editing tools, and speech quality stack up. Try Nail The Speech free.",
  keywords: [
    "Nail The Speech vs ToastWiz",
    "ToastWiz alternative",
    "ToastWiz review",
    "best wedding speech generator",
    "AI wedding speech comparison",
    "ToastWiz pricing",
  ],
  openGraph: {
    title: "Nail The Speech vs ToastWiz — Which AI Speech Writer Wins?",
    description: "Feature-by-feature comparison of Nail The Speech and ToastWiz.",
    type: "website",
    url: "https://nailthespeech.com/nailthespeech-vs-toastwiz",
  },
  alternates: {
    canonical: "https://nailthespeech.com/nailthespeech-vs-toastwiz",
  },
};

export default function Page() {
  return <VsComparisonPage competitor={competitor} />;
}
