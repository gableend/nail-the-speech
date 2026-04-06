import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft } from 'lucide-react';
import {
  speechCategories,
  getCategoryBySlug,
  getSpeechesByCategory,
} from '@/data/exampleSpeeches';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

// Generate all 60 category pages at build time
export function generateStaticParams() {
  return speechCategories.map(cat => ({ category: cat.slug }));
}

// Dynamic SEO metadata per category
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: 'Not Found' };

  return {
    title: `${category.name} Examples: Wedding Speech Inspiration`,
    description: category.description,
    keywords: [
      category.name.toLowerCase(),
      `${category.name.toLowerCase()} examples`,
      `${category.name.toLowerCase()} template`,
      'wedding speech',
      'wedding toast',
    ],
    openGraph: {
      title: `${category.name} Examples | Nail The Speech`,
      description: category.description,
      type: 'website',
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

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const speeches = getSpeechesByCategory(categorySlug);

  // Find related categories (same group)
  const relatedCategories = speechCategories
    .filter(c => c.group === category.group && c.slug !== category.slug)
    .slice(0, 6);

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Examples`,
    description: category.description,
    url: `https://www.nailthespeech.com/examples/${category.slug}`,
    publisher: { '@type': 'Organization', name: 'Nail The Speech' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: speeches.length,
      itemListElement: speeches.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `https://www.nailthespeech.com/examples/${category.slug}/${s.slug}`,
      })),
    },
  };

  const toneBadge = (tone: string) => {
    const map: Record<string, { label: string; className: string }> = {
      funny: { label: '😂 Funny', className: 'bg-amber-50 text-amber-700' },
      heartfelt: { label: '💝 Heartfelt', className: 'bg-pink-50 text-pink-700' },
      balanced: { label: '⚖️ Balanced', className: 'bg-blue-50 text-blue-700' },
      roast: { label: '🔥 Roast', className: 'bg-orange-50 text-orange-700' },
    };
    return map[tone] || map.balanced;
  };

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#faf7f4] border-b border-[#e8e1d8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/examples"
            className="inline-flex items-center gap-1 text-sm text-[#756c64] hover:text-[#b33c6c] mb-4 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Examples
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#181615]">
                {category.name} Examples
              </h1>
              <p className="text-[#756c64] mt-1">{category.shortDescription}</p>
            </div>
          </div>
          <p className="text-[#756c64] max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Speeches */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {speeches.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#e8e1d8] rounded-xl">
            <p className="text-xl text-[#756c64] mb-2">Speeches coming soon!</p>
            <p className="text-sm text-[#756c64] mb-6">
              We&apos;re adding new {category.name.toLowerCase()} examples regularly.
            </p>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Create Your Own →
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {speeches.map(speech => {
              const badge = toneBadge(speech.tone);
              return (
                <Link
                  key={speech.slug}
                  href={`/examples/${categorySlug}/${speech.slug}`}
                  className="group block bg-white border border-[#e8e1d8] rounded-xl p-6 hover:border-[#b33c6c] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-lg font-semibold text-[#181615] group-hover:text-[#b33c6c] transition-colors">
                      {speech.title}
                    </h2>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-50 text-gray-600 font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {speech.durationMinutes} min
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#756c64] line-clamp-2 mb-3">
                    {speech.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#756c64]">
                    <span>{speech.wordCount} words</span>
                    <span>·</span>
                    <span>{speech.weddingRole}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-[#c44578]/10 to-[#c44578]/5 border border-[#c44578]/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#181615] mb-2">
            Ready to write your {category.name.toLowerCase()}?
          </h2>
          <p className="text-[#756c64] mb-6">
            Our AI generator creates a personalized speech in minutes. Get started for free.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Create Your Speech →
          </Link>
        </div>
      </section>

      {/* Related categories */}
      {relatedCategories.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          <h2 className="text-xl font-bold text-[#181615] mb-4">Related Speech Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedCategories.map(cat => (
              <Link
                key={cat.slug}
                href={`/examples/${cat.slug}`}
                className="flex items-center gap-2 bg-white border border-[#e8e1d8] rounded-lg p-3 hover:border-[#b33c6c] transition-colors"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-medium text-[#181615]">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
