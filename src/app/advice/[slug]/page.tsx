import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from '@/data/articles';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import React from 'react';

// ── Content renderer with markdown-like formatting ──────────
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, k) => {
    if (part.startsWith('**') && part.endsWith('**')) {
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
  // Split on double newlines into blocks
  const blocks = content.split('\n\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const block of blocks) {
    const lines = block.split('\n');

    // Separate any leading prose from list items within the same block
    const proseLines: string[] = [];
    const bulletItems: string[] = [];
    const numberedItems: string[] = [];

    for (const line of lines) {
      if (line.startsWith('- ')) {
        bulletItems.push(line.slice(2));
      } else if (/^\d+\.\s/.test(line)) {
        numberedItems.push(line.replace(/^\d+\.\s/, ''));
      } else if (line.trim() !== '') {
        proseLines.push(line);
      }
    }

    // Render leading prose as a paragraph
    if (proseLines.length > 0) {
      elements.push(
        <p key={key++} className="text-[#4a4543] leading-relaxed">
          {renderInline(proseLines.join(' '))}
        </p>
      );
    }

    // Render bullet list
    if (bulletItems.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc pl-6 space-y-1.5 text-[#4a4543] leading-relaxed">
          {bulletItems.map((item, k) => (
            <li key={k}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }

    // Render numbered list
    if (numberedItems.length > 0) {
      elements.push(
        <ol key={key++} className="list-decimal pl-6 space-y-1.5 text-[#4a4543] leading-relaxed">
          {numberedItems.map((item, k) => (
            <li key={k}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    }
  }

  return <div className="space-y-4">{elements}</div>;
}

// Generate all article pages at build time
export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

// Dynamic SEO metadata per article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Not Found' };

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: [
      article.targetKeyword,
      ...article.tags,
      'wedding speech',
      'wedding toast',
    ],
    openGraph: {
      title: `${article.title} | Nail The Speech`,
      description: article.metaDescription,
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(slug, 3);
  const isComingSoon = article.sections.length === 1 && article.sections[0]?.heading === 'Coming Soon';

  // JSON-LD Article schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    url: `https://nailthespeech.com/advice/${article.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Nail The Speech',
      url: 'https://nailthespeech.com',
      logo: 'https://nailthespeech.com/android-chrome-512x512.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nailthespeech.com/advice/${article.slug}`,
    },
    articleSection: article.category,
    keywords: [article.targetKeyword, ...article.tags].join(', '),
  };

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* Breadcrumb + header */}
      <section className="bg-gradient-to-b from-white to-[#faf7f4] border-b border-[#e8e1d8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/advice"
            className="inline-flex items-center gap-1 text-sm text-[#756c64] hover:text-[#b33c6c] mb-6 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Advice
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
            {article.icon} {article.title}
          </h1>

          <p className="text-[#756c64] text-lg">
            {article.metaDescription}
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {isComingSoon ? (
          <div className="text-center py-16 bg-white border border-[#e8e1d8] rounded-xl">
            <BookOpen className="h-12 w-12 text-[#c44578] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#181615] mb-2">This article is being written</h2>
            <p className="text-[#756c64] mb-6 max-w-md mx-auto">
              We&apos;re working on this guide. In the meantime, our AI can help you create your speech right now.
            </p>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Create Your Speech <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
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
              </div>
            ))}
          </div>
        )}

        {/* CTA box */}
        <div className="mt-12 bg-gradient-to-r from-[#c44578]/10 to-[#c44578]/5 border border-[#c44578]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#181615] mb-2">
            {article.ctaSupportingText}
          </h2>
          <p className="text-[#756c64] mb-6">
            Our AI generator creates a personalized speech in minutes. Get started for free.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Create Your Speech <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Related examples */}
        {article.relatedExamples.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#181615] mb-4">Related Speech Examples</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {article.relatedExamples.map(exSlug => (
                <Link
                  key={exSlug}
                  href={`/examples/${exSlug}`}
                  className="bg-white border border-[#e8e1d8] rounded-lg p-3 hover:border-[#b33c6c] transition-colors text-sm font-medium text-[#181615] hover:text-[#b33c6c]"
                >
                  {exSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#181615] mb-4">Related Articles</h2>
            <div className="space-y-3">
              {relatedArticles.map(related => (
                <Link
                  key={related.slug}
                  href={`/advice/${related.slug}`}
                  className="group flex items-start gap-3 bg-white border border-[#e8e1d8] rounded-xl p-4 hover:border-[#b33c6c] hover:shadow-md transition-all"
                >
                  <span className="text-2xl flex-shrink-0">{related.icon}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors leading-tight">
                      {related.title}
                    </h3>
                    <p className="text-xs text-[#756c64] mt-1 line-clamp-1">
                      {related.metaDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#e8e1d8]">
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
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
