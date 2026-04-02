import { Metadata } from 'next';
import Link from 'next/link';
import { speechCategories, getAllGroups, exampleSpeeches } from '@/data/exampleSpeeches';
import ExamplesFilterClient from '@/components/ExamplesFilterClient';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Wedding Speech Examples — 60+ Types | Nail The Speech',
  description: 'Browse hundreds of real wedding speech examples across 60+ categories. Best man, maid of honor, father of the bride, and more. Find inspiration for your perfect toast.',
  keywords: [
    'wedding speech examples', 'best man speech examples', 'maid of honor speech examples',
    'father of bride speech', 'wedding toast examples', 'funny wedding speech',
    'heartfelt wedding speech', 'wedding speech inspiration',
  ],
  openGraph: {
    title: 'Wedding Speech Examples — 60+ Types | Nail The Speech',
    description: 'Browse hundreds of real wedding speech examples. Find the perfect inspiration for your toast.',
    type: 'website',
  },
};

// JSON-LD structured data for the examples hub
function ExamplesJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wedding Speech Examples',
    description: 'Browse hundreds of wedding speech examples across 60+ categories.',
    url: 'https://nailthespeech.com/examples',
    publisher: {
      '@type': 'Organization',
      name: 'Nail The Speech',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: speechCategories.length,
      itemListElement: speechCategories.map((cat, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: cat.name,
        url: `https://nailthespeech.com/examples/${cat.slug}`,
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ExamplesPage() {
  const groups = getAllGroups();

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <ExamplesJsonLd />
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#faf7f4] border-b border-[#e8e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#181615] mb-4">
            Wedding Speech Examples
          </h1>
          <p className="text-lg text-[#8f867e] max-w-2xl mx-auto mb-2">
            Browse real examples across {speechCategories.length} speech types.
            Find your inspiration, then create your own with AI.
          </p>
          <p className="text-sm text-[#8f867e]">
            {exampleSpeeches.length} speeches and counting
          </p>
        </div>
      </section>

      {/* Client-side filter + browse */}
      <ExamplesFilterClient />

      {/* Category grid by group — also rendered server-side for SEO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {groups.map(group => {
          const cats = speechCategories.filter(c => c.group === group);
          return (
            <div key={group} className="mb-12">
              <h2 className="text-2xl font-bold text-[#181615] mb-6">{group}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cats.map(cat => (
                  <Link
                    key={cat.slug}
                    href={`/examples/${cat.slug}`}
                    className="group bg-white border border-[#e8e1d8] rounded-xl p-4 hover:border-[#da5389] hover:shadow-md transition-all"
                  >
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h3 className="font-semibold text-sm text-[#181615] group-hover:text-[#da5389] transition-colors leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#8f867e] mt-1 line-clamp-2">
                      {cat.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-[#181615] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to write yours?</h2>
          <p className="text-[#8f867e] mb-8">
            Use our AI speech generator to create a personalized speech in minutes.
            Your first speech is free.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 bg-[#da5389] hover:bg-[#c4477a] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Create Your Speech →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
