import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles, getArticlesByCategory, getPublishedArticles } from '@/data/articles';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Wedding Speech Help & Advice — Tips, Guides & Practice',
  description: 'Expert wedding speech advice: how to write, structure, and deliver the perfect toast. Guides for best man, maid of honor, father of the bride, and more.',
  keywords: [
    'wedding speech tips', 'wedding speech advice', 'how to write a wedding speech',
    'wedding speech help', 'wedding speech guide', 'best man speech tips',
    'maid of honor speech tips', 'wedding toast advice',
  ],
  openGraph: {
    title: 'Wedding Speech Help & Advice | Nail The Speech',
    description: 'Expert guides for writing and delivering unforgettable wedding speeches.',
    type: 'website',
  },
};

function AdviceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wedding Speech Help & Advice',
    description: 'Expert wedding speech advice covering writing tips, structure guides, and delivery practice.',
    url: 'https://nailthespeech.com/advice',
    publisher: {
      '@type': 'Organization',
      name: 'Nail The Speech',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((article, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: article.title,
        url: `https://nailthespeech.com/advice/${article.slug}`,
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

export default function AdvicePage() {
  const speechTips = getArticlesByCategory('Speech Tips');
  const practiceGuides = getArticlesByCategory('Practice Guide');
  const publishedArticles = getPublishedArticles();

  const categories = [
    {
      name: 'Speech Tips',
      description: 'How to write, structure, and perfect your wedding speech — from opening line to final toast.',
      articles: speechTips,
    },
    {
      name: 'Practice Guide',
      description: 'Delivery, nerves, body language, and everything you need to nail the performance.',
      articles: practiceGuides,
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <AdviceJsonLd />
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#faf7f4] border-b border-[#e8e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#181615] mb-4">
            Help & Advice
          </h1>
          <p className="text-lg text-[#8f867e] max-w-2xl mx-auto mb-2">
            Everything you need to write and deliver a wedding speech people actually remember.
          </p>
          <p className="text-sm text-[#8f867e]">
            {articles.length} guides · {publishedArticles.length} published
          </p>
        </div>
      </section>

      {/* Category sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map(category => (
          <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-28">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#181615] mb-2">
                {category.name}
              </h2>
              <p className="text-[#8f867e] max-w-2xl">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.articles.map(article => {
                const isPublished = article.sections.length > 1 || article.sections[0]?.heading !== 'Coming Soon';
                return (
                  <Link
                    key={article.slug}
                    href={`/advice/${article.slug}`}
                    className="group bg-white border border-[#e8e1d8] rounded-xl p-5 hover:border-[#da5389] hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl flex-shrink-0">{article.icon}</span>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-[#181615] group-hover:text-[#da5389] transition-colors leading-tight line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-[#8f867e] line-clamp-2 mb-3">
                      {article.metaDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#8f867e]">
                        {article.readingTime} min read
                      </span>
                      {!isPublished && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
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
            Create Your Speech <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
