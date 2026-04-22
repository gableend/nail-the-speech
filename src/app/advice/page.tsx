import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles, getArticlesByCategory, getPublishedArticles } from '@/data/articles';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQ from '@/components/FAQ';
import { adviceFaqs } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'Wedding Speech Advice',
  description: 'Expert wedding speech advice: how to write, structure, and deliver the perfect toast. Guides for best man, maid of honor, father of the bride, and more.',
  keywords: [
    'wedding speech tips', 'wedding speech advice', 'how to write a wedding speech',
    'wedding speech help', 'wedding speech guide', 'best man speech tips',
    'maid of honor speech tips', 'wedding toast advice',
  ],
  alternates: {
    canonical: '/advice',
  },
  openGraph: {
    title: 'Wedding Speech Help & Advice | Nail The Speech',
    description: 'Expert guides for writing and delivering unforgettable wedding speeches.',
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

function AdviceJsonLd() {
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wedding Speech Help & Advice',
    description: 'Expert wedding speech advice covering writing tips, structure guides, and delivery practice.',
    url: 'https://www.nailthespeech.com/advice',
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
        url: `https://www.nailthespeech.com/advice/${article.slug}`,
      })),
    },
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: adviceFaqs.map(faq => ({
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

export default function AdvicePage() {
  const speechTips = getArticlesByCategory('Speech Tips');
  const practiceGuides = getArticlesByCategory('Practice Guide');
  const publishedArticles = getPublishedArticles();

  const categories = [
    {
      name: 'Speech Tips',
      description: 'How to write, structure, and perfect your wedding speech, from opening line to final toast.',
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
          <p className="text-lg text-[#756c64] max-w-3xl mx-auto mb-2">
            Everything you need to plan, shape, and deliver a wedding speech that sounds like you. Start with your ideas, talk them out, and turn them into a speech you can actually deliver.
          </p>
          <p className="text-sm text-[#c44578] font-medium">
            {articles.length}+ guides to help you prepare your wedding speech
          </p>
        </div>
      </section>

      {/* Start here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#181615] mb-6">Start here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/advice/how-to-write-a-wedding-speech"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0 bg-[#c44578]/10 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#c44578]">1</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">How to write your wedding speech</span>
          </Link>
          <Link
            href="/advice/wedding-speech-length-by-role"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0 bg-[#c44578]/10 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#c44578]">2</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">Wedding speech length guide</span>
          </Link>
          <Link
            href="/advice/how-to-practise-a-wedding-speech"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0 bg-[#c44578]/10 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#c44578]">3</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">How to practise your speech</span>
          </Link>
        </div>

        {/* Jump pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          <a href="#speech-tips" className="text-sm px-4 py-1.5 rounded-full bg-white border border-[#e8e1d8] text-[#756c64] hover:border-[#c44578] hover:text-[#c44578] transition-colors">Speech Tips</a>
          <a href="#practice-guide" className="text-sm px-4 py-1.5 rounded-full bg-white border border-[#e8e1d8] text-[#756c64] hover:border-[#c44578] hover:text-[#c44578] transition-colors">Practice Guides</a>
          <a href="#all-articles" className="text-sm px-4 py-1.5 rounded-full bg-white border border-[#e8e1d8] text-[#756c64] hover:border-[#c44578] hover:text-[#c44578] transition-colors">All Articles</a>
          <a href="#faq" className="text-sm px-4 py-1.5 rounded-full bg-white border border-[#e8e1d8] text-[#756c64] hover:border-[#c44578] hover:text-[#c44578] transition-colors">Help</a>
        </div>
      </section>

      {/* Category sections */}
      <section id="all-articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        {categories.map(category => (
          <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-28">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#181615] mb-2">
                {category.name}
              </h2>
              <p className="text-[#756c64] max-w-3xl">
                {category.description}
              </p>
              {category.name === 'Speech Tips' && (
                <p className="text-sm text-[#756c64] mt-2">
                  If you&apos;re starting from scratch, begin with <Link href="/advice/how-to-write-a-wedding-speech" className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2">how to write your wedding speech</Link>.
                </p>
              )}
              {category.name === 'Practice Guide' && (
                <p className="text-sm text-[#756c64] mt-2">
                  Got a draft? Start with <Link href="/advice/how-to-practise-a-wedding-speech" className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2">how to practise your speech step by step</Link>.
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.articles.map(article => {
                const isPublished = article.sections.length > 1 || article.sections[0]?.heading !== 'Coming Soon';
                return (
                  <Link
                    key={article.slug}
                    href={`/advice/${article.slug}`}
                    className="group bg-white border border-[#e8e1d8] rounded-xl p-5 hover:border-[#b33c6c] hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl flex-shrink-0">{article.icon}</span>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors leading-tight line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-[#756c64] line-clamp-2 mb-3">
                      {article.metaDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#756c64]">
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
      <div id="faq" className="scroll-mt-20">
        <FAQ items={adviceFaqs} title="Questions about wedding speeches" />
      </div>

      <SiteFooter />
    </div>
  );
}
