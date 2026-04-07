import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { insightArticles } from "@/data/insightArticles";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/FAQ";
import { articlesFaqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Wedding Speech Articles",
  description:
    "Insights on why the best wedding speeches start with speaking, not writing. Explore the science, strategy, and practical tips behind talk-first speech writing.",
  alternates: {
    canonical: '/articles',
  },
  openGraph: {
    title: "Articles: Talk-First Speech Writing | Nail The Speech",
    description:
      "Insights on why the best wedding speeches start with speaking, not writing.",
    url: "https://www.nailthespeech.com/articles",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#faf8f5] to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c44578]/10 text-[#c44578] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Insights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181615] mb-4">
            Great speeches start with speaking,{" "}
            <span className="text-[#c44578]">not writing</span>
          </h1>
          <p className="text-lg text-[#756c64] max-w-3xl mx-auto">
            Explore the science, strategy, and practical tips behind talk-first
            speech writing. A better way to prepare your wedding speech — starting
            with your voice instead of a blank page.
          </p>
        </div>
      </section>

      {/* Start here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#181615] mb-6">Start here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/articles/science-of-talking-produces-better-speeches"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0 bg-[#c44578]/10 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#c44578]">1</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">Why speaking works better than writing</span>
          </Link>
          <Link
            href="/articles/voice-note-to-wedding-speech"
            className="group flex items-center gap-3 bg-white border-2 border-[#c44578]/20 rounded-xl p-5 hover:border-[#c44578] hover:shadow-md transition-all"
          >
            <span className="text-2xl flex-shrink-0 bg-[#c44578]/10 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#c44578]">2</span>
            <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">How to build a speech by talking it out</span>
          </Link>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col bg-white border border-[#e8e1d8] rounded-2xl overflow-hidden hover:border-[#b33c6c] hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-[#f5f0eb] overflow-hidden">
                  {article.heroImage ? (
                    <Image
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#c4bdb5] text-sm">
                      Image coming soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-[#756c64] mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readingTime} min read
                    </span>
                    {article.tags[0] && (
                      <span className="bg-[#f5f0eb] px-2 py-0.5 rounded-full">
                        {article.tags[0]}
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold text-[#181615] group-hover:text-[#b33c6c] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-[#756c64] leading-relaxed mb-4 flex-1">
                    {article.subtitle}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#c44578]">
                    Read article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Put this into practice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white border border-[#e8e1d8] rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#181615] mb-4">Put this into practice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/examples"
              className="group flex items-center gap-3 p-4 rounded-lg hover:bg-[#faf7f4] transition-colors"
            >
              <span className="text-2xl flex-shrink-0">📖</span>
              <div>
                <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">Browse speech examples</span>
                <p className="text-xs text-[#756c64] mt-0.5">See what great speeches look like for your role</p>
              </div>
            </Link>
            <Link
              href="/advice"
              className="group flex items-center gap-3 p-4 rounded-lg hover:bg-[#faf7f4] transition-colors"
            >
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <span className="font-semibold text-sm text-[#181615] group-hover:text-[#b33c6c] transition-colors">Learn how to write and practise your speech</span>
                <p className="text-xs text-[#756c64] mt-0.5">Step-by-step guides for every stage</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#faf8f5] to-[#f5f0eb]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181615] mb-4">
            Ready to try talk-first speech writing?
          </h2>
          <p className="text-[#756c64] mb-8 max-w-xl mx-auto">
            Talk through your memories and let Nail The Speech turn them into
            a speech that sounds like you.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#b33c6c] text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
          >
            Start Your Speech
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={articlesFaqs} title="Questions about talk-first speech writing" />

      <SiteFooter />
    </>
  );
}
