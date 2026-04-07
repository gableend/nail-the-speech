import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { speechCategories, getAllGroups, exampleSpeeches } from '@/data/exampleSpeeches';
import ExamplesFilterClient from '@/components/ExamplesFilterClient';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQ from '@/components/FAQ';
import { examplesFaqs } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'Wedding Speech Examples',
  description: 'Browse hundreds of real wedding speech examples across 60+ categories. Best man, maid of honor, father of the bride, and more. Find inspiration for your perfect toast.',
  keywords: [
    'wedding speech examples', 'best man speech examples', 'maid of honor speech examples',
    'father of bride speech', 'wedding toast examples', 'funny wedding speech',
    'heartfelt wedding speech', 'wedding speech inspiration',
  ],
  alternates: {
    canonical: '/examples',
  },
  openGraph: {
    title: 'Wedding Speech Examples: 60+ Types | Nail The Speech',
    description: 'Browse hundreds of real wedding speech examples. Find the perfect inspiration for your toast.',
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

// JSON-LD structured data for the examples hub
function ExamplesJsonLd() {
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wedding Speech Examples',
    description: 'Browse hundreds of wedding speech examples across 60+ categories.',
    url: 'https://www.nailthespeech.com/examples',
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
        url: `https://www.nailthespeech.com/examples/${cat.slug}`,
      })),
    },
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: examplesFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
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
          <p className="text-lg text-[#756c64] max-w-3xl mx-auto mb-2">
            Find examples that match your role, tone, and style. Then turn your own stories into a speech that sounds like you.
          </p>
          <p className="text-sm text-[#c44578] font-medium">
            {exampleSpeeches.length}+ speeches to inspire yours
          </p>
        </div>
      </section>

      {/* Start here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#181615] mb-6">Start here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/examples/best-man-speech"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0">🤵</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">Best man speeches</span>
          </Link>
          <Link
            href="/examples/maid-of-honor-speech"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0">💐</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">Maid of honor speeches</span>
          </Link>
          <Link
            href="/examples/father-of-bride-speech"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0">👨‍👧</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">Father of the bride speeches</span>
          </Link>
        </div>
      </section>

      {/* How to use these examples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="bg-white border border-[#e8e1d8] rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#181615] mb-3">How to use these examples</h2>
          <p className="text-[#4a4543] leading-relaxed mb-3">
            Don&apos;t copy a speech word for word. Use examples to understand structure, tone, and what works — then make it your own. For guidance on building your speech, see our <Link href="/advice/how-to-write-a-wedding-speech" className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2">wedding speech writing guide</Link>.
          </p>
          <p className="text-[#4a4543] leading-relaxed">
            If you&apos;re not sure how to start, you can <Link href="/generator" className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2">talk your speech out first</Link> and shape it into a structured version.
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
                    className="group bg-white border border-[#e8e1d8] rounded-xl p-4 hover:border-[#b33c6c] hover:shadow-md transition-all"
                  >
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h3 className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#756c64] mt-1 line-clamp-2">
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
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#181615] mb-4">Ready to write yours?</h2>
          <p className="text-[#756c64] mb-8">
            Start by talking your speech out. Turn your ideas into a structured speech in minutes.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Create Your Speech <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={examplesFaqs} title="Questions about speech examples" />

      <SiteFooter />
    </div>
  );
}
