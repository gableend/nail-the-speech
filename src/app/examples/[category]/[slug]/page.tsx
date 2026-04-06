import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Copy } from 'lucide-react';
import {
  speechCategories,
  exampleSpeeches,
  getCategoryBySlug,
  getSpeechBySlug,
  getSpeechesByCategory,
} from '@/data/exampleSpeeches';
import SpeechCopyButton from '@/components/SpeechCopyButton';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

// Generate all individual speech pages at build time
export function generateStaticParams() {
  return exampleSpeeches.map(s => ({
    category: s.category,
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const speech = getSpeechBySlug(slug);
  if (!speech) return { title: 'Not Found' };

  const category = getCategoryBySlug(speech.category);

  return {
    title: `${speech.title}: ${category?.name || 'Wedding Speech'} Example`,
    description: speech.excerpt,
    keywords: [
      speech.weddingRole.toLowerCase(),
      `${speech.weddingRole.toLowerCase()} speech example`,
      speech.tone,
      'wedding speech',
      ...speech.tags,
    ],
    openGraph: {
      title: `${speech.title} | Nail The Speech`,
      description: speech.excerpt,
      type: 'article',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function SpeechPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const speech = getSpeechBySlug(slug);
  if (!speech || speech.category !== categorySlug) notFound();

  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  // Related speeches (same category, different speech)
  const relatedSpeeches = getSpeechesByCategory(categorySlug)
    .filter(s => s.slug !== slug)
    .slice(0, 3);

  const toneBadgeMap: Record<string, { label: string; className: string }> = {
    funny: { label: '😂 Funny', className: 'bg-amber-50 text-amber-700' },
    heartfelt: { label: '💝 Heartfelt', className: 'bg-pink-50 text-pink-700' },
    balanced: { label: '⚖️ Balanced', className: 'bg-blue-50 text-blue-700' },
    roast: { label: '🔥 Roast', className: 'bg-orange-50 text-orange-700' },
  };
  const badge = toneBadgeMap[speech.tone] || toneBadgeMap.balanced;

  // JSON-LD Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: speech.title,
    description: speech.excerpt,
    author: { '@type': 'Person', name: speech.authorName },
    publisher: { '@type': 'Organization', name: 'Nail The Speech' },
    url: `https://www.nailthespeech.com/examples/${categorySlug}/${slug}`,
    articleSection: category.name,
    wordCount: speech.wordCount,
  };

  // Split content into paragraphs for styling
  const paragraphs = speech.content.split('\n\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs + Header */}
      <section className="bg-white border-b border-[#e8e1d8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#756c64] mb-6 flex-wrap">
            <Link href="/examples" className="hover:text-[#b33c6c] transition-colors">
              Examples
            </Link>
            <span>/</span>
            <Link href={`/examples/${categorySlug}`} className="hover:text-[#b33c6c] transition-colors">
              {category.icon} {category.name}
            </Link>
            <span>/</span>
            <span className="text-[#181615] font-medium truncate">{speech.title}</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold text-[#181615] mb-4">
            {speech.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badge.className}`}>
              {badge.label}
            </span>
            <span className="text-sm text-[#756c64] flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {speech.durationMinutes} min read
            </span>
            <span className="text-sm text-[#756c64]">{speech.wordCount} words</span>
            <span className="text-sm text-[#756c64]">{speech.weddingRole}</span>
          </div>
        </div>
      </section>

      {/* Speech Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white border border-[#e8e1d8] rounded-xl p-6 sm:p-8 shadow-sm">
          {/* Copy button */}
          <div className="flex justify-end mb-4">
            <SpeechCopyButton text={speech.content} />
          </div>

          {/* Speech text */}
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-[#181615] leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-[#e8e1d8] flex items-center gap-2 flex-wrap">
            {speech.tags.map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#faf7f4] text-[#756c64] border border-[#e8e1d8]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-[#c44578]/10 to-[#c44578]/5 border border-[#c44578]/20 rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-[#181615] mb-2">
            Like this speech? Create your own version.
          </h2>
          <p className="text-sm text-[#756c64] mb-4">
            Our AI takes your personal details and creates something just as good, but uniquely yours.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Create Your Speech →
          </Link>
        </div>
      </section>

      {/* Related */}
      {relatedSpeeches.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          <h2 className="text-lg font-bold text-[#181615] mb-4">More {category.name} Examples</h2>
          <div className="space-y-3">
            {relatedSpeeches.map(s => (
              <Link
                key={s.slug}
                href={`/examples/${categorySlug}/${s.slug}`}
                className="block bg-white border border-[#e8e1d8] rounded-lg p-4 hover:border-[#b33c6c] transition-colors"
              >
                <h3 className="font-semibold text-[#181615] text-sm">{s.title}</h3>
                <p className="text-xs text-[#756c64] mt-1 line-clamp-1">{s.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
