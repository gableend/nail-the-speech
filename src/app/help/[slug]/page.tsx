import { Metadata } from "next";
import { notFound } from "next/navigation";
import { helpArticles, getHelpArticleBySlug } from "@/data/helpArticles";
import HelpArticlePage from "@/components/HelpArticlePage";

export function generateStaticParams() {
  return helpArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getHelpArticleBySlug(slug);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: [
      article.targetKeyword,
      ...article.tags,
      "wedding speech",
      "Nail The Speech",
    ],
    openGraph: {
      title: `${article.title} | Nail The Speech`,
      description: article.metaDescription,
      type: "article",
      url: `https://www.nailthespeech.com/help/${article.slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://www.nailthespeech.com/help/${article.slug}`,
    },
  };
}

export default async function HelpSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getHelpArticleBySlug(slug);
  if (!article) notFound();

  return <HelpArticlePage article={article} />;
}
