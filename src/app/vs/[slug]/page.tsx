import { Metadata } from "next";
import { notFound } from "next/navigation";
import VsComparisonPage from "@/components/VsComparisonPage";
import { competitors, getCompetitorBySlug } from "@/data/competitors";

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const competitor = getCompetitorBySlug(slug);
  if (!competitor) return {};

  const url = `https://www.nailthespeech.com/vs/${slug}`;

  return {
    title: { absolute: competitor.metaTitle },
    description: competitor.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: competitor.metaTitle,
      description: competitor.metaDescription,
      type: "website",
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: competitor.metaTitle,
      description: competitor.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competitor = getCompetitorBySlug(slug);
  if (!competitor) notFound();

  return <VsComparisonPage competitor={competitor} />;
}
