import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { competitors, ntsFeatures } from "@/data/competitors";

export const metadata: Metadata = {
  title: "Best AI Wedding Speech Generator",
  description:
    "Compare the best AI wedding speech generators side by side. Nail The Speech vs ToastPal vs ToastWiz vs SpeechyAI. Pricing, features, editing, and export compared.",
  keywords: [
    "best AI wedding speech generator",
    "AI speech writer comparison",
    "wedding speech generator review",
    "ToastPal alternative",
    "ToastWiz alternative",
    "SpeechyAI alternative",
    "wedding speech AI comparison",
    "best wedding speech writer",
  ],
  openGraph: {
    title: "Best AI Wedding Speech Generator 2026: Side-by-Side Comparison",
    description:
      "Compare top AI wedding speech generators. Features, pricing, and capabilities compared.",
    type: "website",
    url: "https://www.nailthespeech.com/best-speech-generator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.nailthespeech.com/best-speech-generator",
  },
};

function ComparisonJsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best AI Wedding Speech Generator 2026 Comparison",
    description:
      "Side-by-side comparison of the best AI wedding speech generators including Nail The Speech, ToastPal, ToastWiz, and SpeechyAI.",
    url: "https://www.nailthespeech.com/best-speech-generator",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Nail The Speech",
          applicationCategory: "LifestyleApplication",
          offers: { "@type": "Offer", price: "29.99", priceCurrency: "USD", description: "Get started for free" },
        },
        ...["toastpal", "toastwiz", "speechyai"]
          .map((slug) => competitors.find((c) => c.slug === slug))
          .filter((c): c is NonNullable<typeof c> => !!c && !!c.price)
          .map((c, i) => ({
            "@type": "SoftwareApplication",
            position: i + 2,
            name: c.name,
            applicationCategory: "LifestyleApplication",
            offers: { "@type": "Offer", price: c.price!.replace("$", ""), priceCurrency: "USD" },
          })),
      ],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-5 w-5 text-green-600 mx-auto" />;
  if (value === false) return <X className="h-5 w-5 text-gray-300 mx-auto" />;
  return <span>{value}</span>;
}

export default function BestAISpeechGeneratorPage() {
  // This legacy page does a head-to-head vs the three named paid alternatives
  // (toastpal, toastwiz, speechyai). The generic category pages (ai-speech-writer,
  // wedding-speech-generator) and ChatGPT live on /compare and /vs/[slug] but
  // don't fit the "top paid AI wedding speech writers" framing here.
  const headToHeadSlugs = ["toastpal", "toastwiz", "speechyai"] as const;
  const headToHead = headToHeadSlugs
    .map((slug) => competitors.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => !!c);

  // Build unified feature rows for the master comparison table
  const masterFeatures = [
    { name: "Price", nts: ntsFeatures.price, values: headToHead.map((c) => c.price ?? "") },
    { name: "Get started", nts: ntsFeatures.getStarted, values: headToHead.map(() => "Pay upfront") },
    { name: "Money-back guarantee", nts: "Contact us" as string | boolean, values: [false, "100% guarantee", false] as (string | boolean)[] },
    { name: "Wedding roles", nts: ntsFeatures.roles, values: ["~10", "~12", "~8"] },
    { name: "Tone options", nts: ntsFeatures.tones, values: ["4", "~4", "Limited"] },
    { name: "Speech length", nts: ntsFeatures.speechLength, values: headToHead.map((c) => c.speechLength ?? "") },
    { name: "Regenerations", nts: ntsFeatures.drafts, values: headToHead.map((c) => c.draftsGenerated ?? "") },
    { name: "In-app editor", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
    { name: "AI refinements", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
    { name: "Version history", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
    { name: "Export (PDF/Word/TXT)", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
    { name: "Voice input (talk to AI)", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
    { name: "Quick refinement prompts", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
    { name: "Text-to-speech", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
    { name: "MP3 audio export", nts: true as string | boolean, values: [false, false, false] as (string | boolean)[] },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <ComparisonJsonLd />
      <SiteHeader />

      {/* Hero */}
      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181615] leading-[1.1] tracking-tight mb-6">
            Best AI Wedding Speech Generator{" "}
            <span className="text-[#c44578]">2026</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#756c64] max-w-2xl mx-auto mb-8">
            We compared the top AI wedding speech writers so you don&apos;t have to. Features, pricing, and capabilities, side by side.
          </p>
          <Link href="/generator">
            <Button className="bg-[#c44578] hover:bg-[#b33c6c] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
              <Sparkles className="mr-2 h-5 w-5" />
              Try Nail The Speech Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Master Comparison Table */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#181615] text-center mb-10">
            Side-by-side comparison
          </h2>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b-2 border-[#e8e1d8]">
                  <th className="text-left py-4 px-3 font-semibold text-[#756c64] w-1/5">Feature</th>
                  <th className="py-4 px-3 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Crown className="h-5 w-5 text-[#c44578]" />
                      <span className="font-bold text-[#c44578]">Nail The Speech</span>
                    </div>
                  </th>
                  {headToHead.map((c) => (
                    <th key={c.slug} className="py-4 px-3 text-center font-semibold text-[#181615]">
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {masterFeatures.map((row, idx) => (
                  <tr key={row.name} className={idx % 2 === 0 ? "bg-[#faf7f4]/50" : ""}>
                    <td className="py-3 px-3 font-medium text-[#181615]">{row.name}</td>
                    <td className="py-3 px-3 text-center font-medium text-[#181615]">
                      <CellValue value={row.nts} />
                    </td>
                    {row.values.map((val, i) => (
                      <td key={i} className="py-3 px-3 text-center text-[#756c64]">
                        <CellValue value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Competitor Cards */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#181615] text-center mb-4">
            Detailed comparisons
          </h2>
          <p className="text-lg text-[#756c64] text-center mb-12">
            See how Nail The Speech stacks up against each competitor.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {headToHead.map((comp) => (
              <Link
                key={comp.slug}
                href={`/vs/${comp.slug}`}
                className="group bg-white rounded-xl p-6 border border-[#e8e1d8] hover:border-[#b33c6c] hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-[#181615] mb-2 group-hover:text-[#b33c6c] transition-colors">
                  Nail The Speech vs {comp.name}
                </h3>
                <p className="text-sm text-[#756c64] mb-4">{comp.tagline}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#756c64]">Their price</span>
                    <span className="font-medium text-[#181615]">{comp.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#756c64]">Our price</span>
                    <span className="font-medium text-[#c44578]">{ntsFeatures.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#756c64]">Get started</span>
                    <span className="font-medium text-green-600">Free to try</span>
                  </div>
                </div>

                <div className="flex items-center text-sm font-medium text-[#c44578]">
                  See full comparison
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why NTS Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#181615] mb-4">
            Why Nail The Speech wins
          </h2>
          <p className="text-lg text-[#756c64] mb-10">
            More features, half the price, and the only one that lets you try before you buy.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: "🆓",
                title: "Try before you commit",
                description: "Walk through the full speech creation flow before paying. See the AI in action with your stories before you upgrade.",
              },
              {
                icon: "💰",
                title: "Better value",
                description: `At ${ntsFeatures.price}, Nail The Speech costs less than competitors while offering more features, editing tools, and export options.`,
              },
              {
                icon: "✏️",
                title: "Real editing tools",
                description: "Click any paragraph to edit. Use AI to refine specific sections. Track versions. Competitors just email you a PDF.",
              },
              {
                icon: "🗣️",
                title: "Talk to the AI",
                description: "Use voice input to describe your stories naturally. The AI turns your words into a polished speech.",
              },
              {
                icon: "🎙️",
                title: "Hear & download your speech",
                description: "Text-to-speech with 6 voices plus MP3 export. Practice delivery anywhere, anytime.",
              },
              {
                icon: "⚡",
                title: "Quick refinement prompts",
                description: "One click to make it shorter, longer, funnier, or more heartfelt. Fine-tune without rewriting.",
              },
              {
                icon: "🎭",
                title: "44 roles, 14 tones",
                description: "From best man to step-parent to cousin, with tones from clean roast to sentimental. The broadest coverage available.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#faf7f4] rounded-xl p-5 border border-[#e8e1d8]">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#181615] mb-1">{item.title}</h3>
                <p className="text-sm text-[#756c64]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181615] mb-4">
            Ready to write your speech?
          </h2>
          <p className="text-lg text-[#756c64] mb-8">
            See why 10,000+ speakers chose Nail The Speech.
          </p>
          <Link href="/generator">
            <Button className="bg-[#c44578] hover:bg-[#b33c6c] text-white px-10 py-5 text-xl font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
