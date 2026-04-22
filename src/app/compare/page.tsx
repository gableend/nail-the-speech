import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { competitors, ntsFeatures } from "@/data/competitors";

export const metadata: Metadata = {
  title: { absolute: "Best AI Wedding Speech Generator: Nail The Speech vs Alternatives" },
  description:
    "Comparing AI wedding speech generators? See how Nail The Speech stacks up against ToastPal, ToastWiz, SpeechyAI, ChatGPT, and the rest of the category.",
  alternates: { canonical: "https://www.nailthespeech.com/compare" },
  openGraph: {
    title: "Best AI Wedding Speech Generator: Nail The Speech vs Alternatives",
    description:
      "Side-by-side comparisons of Nail The Speech and every major AI wedding speech tool.",
    type: "website",
    url: "https://www.nailthespeech.com/compare",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <SiteHeader />

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-[#e8e1d8] rounded-full px-4 py-2 mb-6">
            <Crown className="h-4 w-4 text-[#c44578]" />
            <span className="text-sm font-medium text-[#181615]">The comparison hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#181615] leading-[1.1] tracking-tight mb-6">
            Best AI wedding speech generator{" "}
            <span className="text-[#c44578]">alternatives</span>
          </h1>
          <p className="text-lg md:text-xl text-[#756c64] max-w-2xl mx-auto mb-8">
            We compared Nail The Speech head-to-head with every major AI wedding speech tool and the general-purpose alternatives people use. Honest side-by-sides on pricing, editing, voice input, and output quality.
          </p>
          <Link href="/generator">
            <Button className="bg-[#c44578] hover:bg-[#b33c6c] text-white px-10 py-5 text-lg font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              <Sparkles className="mr-2 h-5 w-5" />
              Try Nail The Speech Free
            </Button>
          </Link>
          <p className="text-sm text-[#756c64] mt-4">
            {ntsFeatures.price} · {ntsFeatures.priceDetail}
          </p>
        </div>
      </section>

      {/* What makes a good wedding speech generator */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181615] text-center mb-4">
            What actually matters in a wedding speech generator
          </h2>
          <p className="text-lg text-[#756c64] text-center max-w-2xl mx-auto mb-10">
            Most comparisons focus on price. These features matter more.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🎙️",
                title: "Voice input",
                description: "Generic forms produce generic speeches. Tools that let you talk through your stories produce speeches that sound like you.",
              },
              {
                icon: "🎭",
                title: "Role coverage",
                description: "Best man and maid of honor are easy. What about step-fathers, officiants, cousins, grandparents? Role depth matters.",
              },
              {
                icon: "🎨",
                title: "Tone nuance",
                description: "\"Funny\" and \"heartfelt\" aren't enough. Look for 10+ tone options including roast, nostalgic, witty, reflective.",
              },
              {
                icon: "✏️",
                title: "In-app editing",
                description: "Regenerating the whole speech is a crude edit. Paragraph-level editing with one-click AI refinements (\"shorter,\" \"funnier\") beats starting over.",
              },
              {
                icon: "🎧",
                title: "Audio rehearsal",
                description: "Text-to-speech and MP3 export let you rehearse hands-free in the car or on a walk. Rare in generic tools.",
              },
              {
                icon: "💰",
                title: "Pay after you try",
                description: "Watch out for tools that require payment before you see any output. A free preview of the full flow is the honest default.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#faf7f4] rounded-xl p-6 border border-[#e8e1d8]">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#181615] mb-2">{item.title}</h3>
                <p className="text-sm text-[#756c64] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons grid */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181615] text-center mb-4">
            Head-to-head comparisons
          </h2>
          <p className="text-lg text-[#756c64] text-center max-w-2xl mx-auto mb-10">
            Honest side-by-sides. We lead with the features, flag where the alternative may be the better choice, and answer the questions people actually search for.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {competitors.map((comp) => (
              <Link
                key={comp.slug}
                href={`/vs/${comp.slug}`}
                className="group bg-white rounded-xl p-6 border border-[#e8e1d8] hover:border-[#b33c6c] hover:shadow-lg transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold text-[#181615] mb-2 group-hover:text-[#b33c6c] transition-colors">
                  Nail The Speech vs {comp.name}
                </h3>
                <p className="text-sm text-[#756c64] leading-relaxed mb-4 flex-1">
                  {comp.tagline}
                </p>
                {comp.price && (
                  <div className="text-xs text-[#756c64] mb-3">
                    <span className="font-semibold text-[#181615]">{comp.name}:</span> {comp.price}
                  </div>
                )}
                <div className="inline-flex items-center gap-1 text-sm font-medium text-[#c44578] group-hover:gap-2 transition-all">
                  Read comparison
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why NTS summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181615] text-center mb-10">
            Why speakers choose Nail The Speech
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Voice-first workflow", description: "Speak your stories, don't fill in a form. Speeches built from how you actually talk about the couple." },
              { title: "Wedding-specific, not general", description: "Purpose-built for wedding speeches, with 44 roles and 14 tones — not a general-purpose chatbot adapted to the job." },
              { title: "Free to try before you pay", description: "Walk through the whole flow, see your draft, then decide. No upfront payment for a speech you haven't seen." },
              { title: "Paragraph-level editing", description: "Click to edit any sentence. One-click refinements make it shorter, funnier, or more heartfelt without starting over." },
              { title: "Rehearsal built in", description: "Text-to-speech with six voices, plus MP3 export. Practise hands-free on your commute before the big day." },
              { title: "Cheaper than rivals", description: `${ntsFeatures.price} as a one-time payment — less than most competitors and cheaper than a month of ChatGPT Plus.` },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c44578]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#c44578]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#181615] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#756c64] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181615] mb-4">
            Skip the comparison. Try it yourself.
          </h2>
          <p className="text-lg text-[#756c64] mb-8">
            Two minutes to get started. Free to try the full flow before you pay.
          </p>
          <Link href="/generator">
            <Button className="bg-[#c44578] hover:bg-[#b33c6c] text-white px-10 py-5 text-xl font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              <Sparkles className="mr-2 h-5 w-5" />
              Try Nail The Speech Free
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
