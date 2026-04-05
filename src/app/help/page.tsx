import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import HelpContactForm from "@/components/HelpContactForm";
import { helpCategories, helpArticles } from "@/data/helpArticles";

export const metadata: Metadata = {
  title: "Help Centre — FAQs, Speech Writing Tips & Product Guide | Nail The Speech",
  description:
    "Get answers to common questions about wedding speeches and the Nail The Speech generator. Speech writing tips, product help, and practical advice for every role.",
  keywords: [
    "wedding speech help",
    "AI speech generator help",
    "best man speech tips",
    "maid of honor speech tips",
    "wedding speech FAQ",
    "how to write a wedding speech",
    "wedding speech generator guide",
  ],
  openGraph: {
    title: "Help Centre — Nail The Speech",
    description:
      "Wedding speech FAQs, product guides, and practical advice for every role.",
    type: "website",
    url: "https://nailthespeech.com/help",
  },
  alternates: {
    canonical: "https://nailthespeech.com/help",
  },
};

function HelpJsonLd() {
  const faqItems = [
    {
      question: "How does Nail The Speech work?",
      answer:
        "Answer a few questions about the couple and your relationship, choose a tone and length, and our AI writes a complete speech. You can then edit, refine, and export.",
    },
    {
      question: "Can I edit my speech after it's generated?",
      answer:
        "Yes. Pro users can click any paragraph to edit directly, use AI refinements to adjust sections, or regenerate the whole speech with new instructions.",
    },
    {
      question: "How long should a best man speech be?",
      answer:
        "3 to 5 minutes (400–700 words). Long enough for a great story and a toast, short enough to keep everyone's attention.",
    },
    {
      question: "How long should a maid of honor speech be?",
      answer:
        "3 to 5 minutes (400–700 words). Enough to share a meaningful story and celebrate the bride without overstaying the spotlight.",
    },
    {
      question: "Will the speech sound like AI wrote it?",
      answer:
        "No — it uses your specific stories, names, and details. The more personal information you share, the more natural the result.",
    },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

// Featured questions for the hub
const featuredQuestions = [
  {
    question: "How does Nail The Speech work?",
    answer:
      "Answer a few questions about the couple, choose your tone and length, and the AI generates a complete speech in seconds. Then edit, refine, and export.",
    link: "/help/how-nailthespeech-works",
  },
  {
    question: "Can I edit the speech after generation?",
    answer:
      "Yes — click any paragraph to edit it directly. Use AI refinements to adjust tone or length. Your edits are preserved when you regenerate.",
    link: "/help/can-i-edit-my-speech-after-generation",
  },
  {
    question: "Will it sound like me, not a robot?",
    answer:
      "It uses your real stories, names, and details — not templates. The more specific you are in the questionnaire, the more personal the result.",
    link: "/help/can-ai-write-a-speech-that-sounds-like-me",
  },
  {
    question: "Why not just use ChatGPT?",
    answer:
      "ChatGPT is general-purpose. Nail The Speech is built for speeches — with structure, tone control, editing, version history, and export to PDF/Word/MP3.",
    link: "/help/why-use-nailthespeech-instead-of-chatgpt",
  },
  {
    question: "How long should a best man speech be?",
    answer:
      "3 to 5 minutes (400–700 words). The generator lets you set your preferred length so the AI structures it to fit your timing.",
    link: "/help/how-long-should-a-best-man-speech-be",
  },
  {
    question: "What if I hate public speaking?",
    answer:
      "Most wedding speakers are nervous — that's normal. Preparation is the best cure. Use text-to-speech to practise, keep it short, and trust that the audience is on your side.",
    link: "/help/what-if-i-hate-public-speaking",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <HelpJsonLd />
      <SiteHeader />

      {/* Hero */}
      <section className="py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#181615] leading-[1.1] tracking-tight mb-4">
            Help, FAQs, and speech-writing answers
          </h1>
          <p className="text-lg text-[#8f867e] max-w-2xl mx-auto">
            Whether you're figuring out the product or figuring out what to say
            in your speech — we've got you covered.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="pb-16 bg-[#faf7f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpCategories.map((cat) => {
              const categoryArticles = helpArticles.filter(
                (a) => a.category === cat.label
              );
              return (
                <div
                  key={cat.slug}
                  className="bg-white rounded-xl border border-[#e8e1d8] p-5 hover:border-[#da5389]/40 hover:shadow-sm transition-all"
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <h2 className="font-semibold text-[#181615] mb-1">
                    {cat.label}
                  </h2>
                  <p className="text-sm text-[#8f867e] mb-3">
                    {cat.description}
                  </p>
                  {categoryArticles.length > 0 && (
                    <ul className="space-y-1">
                      {categoryArticles.slice(0, 3).map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/help/${article.slug}`}
                            className="group flex items-center gap-1.5 text-sm text-[#4a4543] hover:text-[#da5389] transition-colors"
                          >
                            <ArrowRight className="h-3 w-3 text-[#da5389] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            <span className="line-clamp-1">
                              {article.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Search className="h-6 w-6 text-[#da5389] mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-[#181615] mb-2">
              Most-asked questions
            </h2>
            <p className="text-[#8f867e]">
              Quick answers to the questions we hear most often.
            </p>
          </div>

          <div className="space-y-4">
            {featuredQuestions.map((fq) => (
              <Link
                key={fq.link}
                href={fq.link}
                className="group block bg-[#faf7f4] border border-[#e8e1d8] rounded-xl p-5 hover:border-[#da5389]/40 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-[#181615] group-hover:text-[#da5389] transition-colors mb-1">
                  {fq.question}
                </h3>
                <p className="text-sm text-[#8f867e] leading-relaxed">
                  {fq.answer}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#da5389] mt-2">
                  Read more{" "}
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — visual explainer with screenshot placeholders */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#181615] mb-2">
              See how it works
            </h2>
            <p className="text-[#8f867e]">
              From your stories to a finished speech in three steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#da5389] text-white flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold text-[#181615] mb-2">
                Share your stories
              </h3>
              <p className="text-sm text-[#8f867e] mb-4">
                Tell us about the couple, your relationship, and your favourite
                memories. Takes about two minutes.
              </p>
              <ScreenshotPlaceholder
                subject="Generator input form"
                caption="The guided questionnaire captures your stories and details."
                annotation="Show role selector, name fields, and story input with example text."
              />
            </div>

            <div>
              <div className="w-10 h-10 rounded-full bg-[#da5389] text-white flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold text-[#181615] mb-2">
                Get your speech
              </h3>
              <p className="text-sm text-[#8f867e] mb-4">
                The AI generates a structured speech in seconds — opening,
                stories, tribute, and toast.
              </p>
              <ScreenshotPlaceholder
                subject="Generated speech output"
                caption="A complete speech ready to edit, refine, or export."
                annotation="Show the full speech with toolbar and export options visible."
              />
            </div>

            <div>
              <div className="w-10 h-10 rounded-full bg-[#da5389] text-white flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold text-[#181615] mb-2">
                Make it yours
              </h3>
              <p className="text-sm text-[#8f867e] mb-4">
                Edit any paragraph, use AI refinements, then export to PDF,
                Word, or MP3.
              </p>
              <ScreenshotPlaceholder
                subject="Inline editing experience"
                caption="Click any paragraph to edit — your changes are preserved."
                annotation="Show a paragraph being edited with the user-edit highlight."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick links to key pages */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#181615] text-center mb-10">
            Explore more
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Best Man Speeches",
                description: "Generator, examples, and tips for best men.",
                href: "/best-man-ai-speech-generator",
                icon: "🤵",
              },
              {
                label: "Maid of Honor Speeches",
                description: "Everything for the maid or matron of honor.",
                href: "/maid-of-honor-ai-speech-generator",
                icon: "👗",
              },
              {
                label: "Speech Examples",
                description: "Browse 340+ real speech examples.",
                href: "/examples",
                icon: "📖",
              },
              {
                label: "Compare Generators",
                description:
                  "See how we stack up against other AI speech tools.",
                href: "/best-ai-speech-generator",
                icon: "⚖️",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-[#faf7f4] border border-[#e8e1d8] rounded-xl p-5 hover:border-[#da5389]/40 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-[#181615] group-hover:text-[#da5389] transition-colors mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-[#8f867e]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#faf7f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#181615] mb-3">
            Ready to write your speech?
          </h2>
          <p className="text-[#8f867e] mb-6">
            Get started for free. Your speech is minutes away.
          </p>
          <Link href="/generator">
            <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-10 py-5 text-xl font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#181615] mb-2">
              Still have a question?
            </h2>
            <p className="text-sm text-[#8f867e]">
              Drop us a message and we'll get back to you as soon as we can.
            </p>
          </div>

          <div className="bg-[#faf7f4] border border-[#e8e1d8] rounded-xl p-6">
            <HelpContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
