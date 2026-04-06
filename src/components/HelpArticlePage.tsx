import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import type { HelpArticle } from "@/data/helpArticles";
import React from "react";

// ── Inline markdown bold rendering ──────────
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, k) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={k} className="font-semibold text-[#181615]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={k}>{part}</span>;
  });
}

function ContentRenderer({ content }: { content: string }) {
  const blocks = content.split("\n\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const block of blocks) {
    const lines = block.split("\n");
    const proseLines: string[] = [];
    const bulletItems: string[] = [];
    const numberedItems: string[] = [];

    for (const line of lines) {
      if (line.startsWith("- ")) {
        bulletItems.push(line.slice(2));
      } else if (/^\d+\.\s/.test(line)) {
        numberedItems.push(line.replace(/^\d+\.\s/, ""));
      } else if (line.trim() !== "") {
        proseLines.push(line);
      }
    }

    if (proseLines.length > 0) {
      elements.push(
        <p key={key++} className="text-[#4a4543] leading-relaxed">
          {renderInline(proseLines.join(" "))}
        </p>
      );
    }

    if (bulletItems.length > 0) {
      elements.push(
        <ul
          key={key++}
          className="list-disc pl-6 space-y-1.5 text-[#4a4543] leading-relaxed"
        >
          {bulletItems.map((item, k) => (
            <li key={k}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }

    if (numberedItems.length > 0) {
      elements.push(
        <ol
          key={key++}
          className="list-decimal pl-6 space-y-1.5 text-[#4a4543] leading-relaxed"
        >
          {numberedItems.map((item, k) => (
            <li key={k}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    }
  }

  return <div className="space-y-4">{elements}</div>;
}

export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url: `https://www.nailthespeech.com/help/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Nail The Speech",
      url: "https://www.nailthespeech.com",
      logo: "https://www.nailthespeech.com/android-chrome-512x512.png",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.nailthespeech.com/help/${article.slug}`,
    },
    articleSection: article.category,
    keywords: [article.targetKeyword, ...article.tags].join(", "),
  };

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* Header */}
      <section className="bg-gradient-to-b from-white to-[#faf7f4] border-b border-[#e8e1d8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/help"
            className="inline-flex items-center gap-1 text-sm text-[#756c64] hover:text-[#b33c6c] mb-6 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Help Centre
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#c44578]/10 text-[#c44578] font-medium">
              {article.category}
            </span>
            <span className="text-xs text-[#756c64] flex items-center gap-1">
              <Clock className="h-3 w-3" /> {article.readingTime} min read
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#181615] leading-tight mb-4">
            {article.title}
          </h1>

          {/* Short answer at top */}
          <div className="bg-white border border-[#e8e1d8] rounded-xl p-5 mt-6">
            <p className="text-[#181615] font-medium leading-relaxed">
              {article.shortAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          {article.sections.map((section, i) => (
            <div key={i}>
              {section.level === 2 ? (
                <h2 className="text-2xl font-bold text-[#181615] mb-4">
                  {section.heading}
                </h2>
              ) : (
                <h3 className="text-xl font-semibold text-[#181615] mb-3">
                  {section.heading}
                </h3>
              )}
              <ContentRenderer content={section.content} />

              {/* Screenshot placeholder after this section if specified */}
              {section.screenshotAfter && (
                <ScreenshotPlaceholder
                  subject={section.screenshotAfter.subject}
                  caption={section.screenshotAfter.caption}
                  annotation={section.screenshotAfter.annotation}
                  src={section.screenshotAfter.src}
                  alt={section.screenshotAfter.alt}
                />
              )}
            </div>
          ))}
        </div>

        {/* Internal links */}
        {article.internalLinks.length > 0 && (
          <div className="mt-10 bg-white border border-[#e8e1d8] rounded-xl p-6">
            <h3 className="font-semibold text-[#181615] mb-3">Related</h3>
            <div className="space-y-2">
              {article.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-[#4a4543] hover:text-[#b33c6c] transition-colors"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-[#c44578] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#c44578]/10 to-[#c44578]/5 border border-[#c44578]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#181615] mb-2">
            {article.ctaText}
          </h2>
          <p className="text-[#756c64] mb-6">
            Our AI creates a personalized speech in minutes. Get started for free.
          </p>
          <Link
            href={article.ctaHref}
            className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Create Your Speech <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#e8e1d8]">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-[#756c64]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      <SiteFooter />
    </div>
  );
}
