import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { marked } from "marked";
import {
  insightArticles,
  getInsightArticleBySlug,
  getAllInsightSlugs,
} from "@/data/insightArticles";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// ── Markdown config ──────────────────────────────────────────

// Open external links in new tab, keep internal links normal
const renderer = new marked.Renderer();
renderer.link = ({ href, text }: { href: string; text: string }) => {
  const isExternal =
    href.startsWith("http://") || href.startsWith("https://");
  if (isExternal) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  }
  return `<a href="${href}">${text}</a>`;
};

marked.setOptions({ renderer });

function getArticleHtml(slug: string): string | null {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "articles",
    `${slug}.md`
  );
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    // Strip the h1 title (first line) since the template renders it
    const withoutTitle = raw.replace(/^# .+\n+/, "");
    return marked.parse(withoutTitle) as string;
  } catch {
    return null;
  }
}

// ── Static params ────────────────────────────────────────────

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

// ── Metadata ─────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Nail The Speech`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.nailthespeech.com/articles/${article.slug}`,
      images: article.heroImage ? [{ url: article.heroImage }] : undefined,
      type: "article",
    },
  };
}

// ── Page ─────────────────────────────────────────────────────

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);
  if (!article) notFound();

  const html = getArticleHtml(slug);

  const related = article.relatedSlugs
    .map((s) => insightArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const formattedDate = new Date(article.publishedDate).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <>
      <SiteHeader />

      <article className="pb-16">
        {/* Hero */}
        <div className="bg-gradient-to-b from-[#faf8f5] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
            {/* Breadcrumb */}
            <Link
              href="/articles"
              className="inline-flex items-center gap-1 text-sm text-[#756c64] hover:text-[#b33c6c] transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Articles
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#756c64] mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readingTime} min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181615] leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-lg text-[#756c64] max-w-2xl">
              {article.subtitle}
            </p>
          </div>

          {/* Hero image */}
          {article.heroImage && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-[#f5f0eb]">
                <Image
                  src={article.heroImage}
                  alt={article.heroImageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {html ? (
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-[#181615] prose-headings:font-bold
                prose-p:text-[#3d3830] prose-p:leading-relaxed
                prose-a:text-[#c44578] prose-a:underline hover:prose-a:text-[#c44578]
                prose-strong:text-[#181615]
                prose-blockquote:border-l-[#c44578] prose-blockquote:bg-[#faf8f5] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-li:text-[#3d3830]
                prose-img:rounded-xl
                prose-hr:border-[#e8e1d8]
                prose-em:text-[#3d3830]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <div className="text-center py-20">
              <div className="bg-[#faf8f5] rounded-2xl p-10 max-w-lg mx-auto">
                <p className="text-5xl mb-4">📝</p>
                <h2 className="text-xl font-semibold text-[#181615] mb-2">
                  Coming Soon
                </h2>
                <p className="text-[#756c64]">
                  This article is being written and will be published shortly.
                  Check back soon!
                </p>
              </div>
            </div>
          )}

          {/* CTA after article body */}
          <div className="my-10 bg-gradient-to-r from-[#c44578]/10 to-[#c44578]/5 border border-[#c44578]/20 rounded-2xl p-6 sm:p-8">
            <p className="text-[#181615] font-semibold text-lg mb-2">
              Ready to try talk-first speech writing?
            </p>
            <p className="text-[#3d3830] leading-relaxed mb-4">
              Skip the blank page. Speak your memories and Nail The Speech will
              turn them into a speech that sounds like you.
            </p>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#b33c6c] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Start Your Speech
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[#e8e1d8]">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f5f0eb] text-[#756c64] text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold text-[#181615] mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map(
                (r) =>
                  r && (
                    <Link
                      key={r.slug}
                      href={`/articles/${r.slug}`}
                      className="group flex flex-col bg-white border border-[#e8e1d8] rounded-2xl overflow-hidden hover:border-[#b33c6c] hover:shadow-lg transition-all"
                    >
                      <div className="relative aspect-[16/10] bg-[#f5f0eb] overflow-hidden">
                        {r.heroImage && (
                          <Image
                            src={r.heroImage}
                            alt={r.heroImageAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-[#181615] group-hover:text-[#b33c6c] transition-colors leading-snug">
                          {r.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-sm text-[#c44578] mt-2">
                          Read article
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-[#181615] rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Great speeches start with speaking
            </h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              The only wedding speech generator that starts with your voice.
              Talk through your memories and get a speech you&apos;re proud to
              deliver.
            </p>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#b33c6c] text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Start Your Speech
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
