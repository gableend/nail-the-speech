import Link from "next/link";
import { ArrowRight, Check, X, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Competitor, ntsFeatures } from "@/data/competitors";

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-5 w-5 text-green-600" />;
  if (value === false) return <X className="h-5 w-5 text-gray-300" />;
  return <span>{value}</span>;
}

export default function VsComparisonPage({ competitor }: { competitor: Competitor }) {
  const ntsWins = competitor.features.filter((f) => f.highlight).length;
  const heroH1 = competitor.heroH1 ?? `Nail The Speech vs ${competitor.name}`;
  const heroSubtitle = competitor.heroSubtitle ?? competitor.summary;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: competitor.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Link
              href="/compare"
              className="text-sm text-[#c44578] hover:text-[#b33c6c] font-medium inline-flex items-center gap-1 mb-4"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              All comparisons
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#181615] leading-[1.1] tracking-tight mb-4">
              {heroH1}
            </h1>
            <p className="text-lg text-[#756c64] max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
            <div className="mt-8">
              <Link href="/generator">
                <Button className="bg-[#c44578] hover:bg-[#b33c6c] text-white px-8 py-4 text-lg font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Try Nail The Speech Free
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-4 border border-[#e8e1d8] text-center">
              <div className="text-2xl font-bold text-[#c44578]">{ntsFeatures.price}</div>
              <div className="text-xs text-[#756c64]">Nail The Speech</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#e8e1d8] text-center">
              <div className="text-2xl font-bold text-[#181615]">{competitor.price ?? "—"}</div>
              <div className="text-xs text-[#756c64]">{competitor.name}</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#e8e1d8] text-center">
              <div className="text-2xl font-bold text-green-600">{ntsWins}</div>
              <div className="text-xs text-[#756c64]">NTS advantages</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#e8e1d8] text-center">
              <div className="text-2xl font-bold text-green-600">Free</div>
              <div className="text-xs text-[#756c64]">to get started</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#181615] text-center mb-10">
            Feature-by-feature comparison
          </h2>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b-2 border-[#e8e1d8]">
                  <th className="text-left py-4 px-4 font-semibold text-[#756c64]">Feature</th>
                  <th className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Crown className="h-4 w-4 text-[#c44578]" />
                      <span className="font-bold text-[#c44578]">Nail The Speech</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center font-semibold text-[#181615]">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitor.features.map((feature, idx) => (
                  <tr
                    key={feature.name}
                    className={`${idx % 2 === 0 ? "bg-[#faf7f4]/50" : ""} ${
                      feature.highlight ? "relative" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-medium text-[#181615]">{feature.name}</td>
                    <td className={`py-3 px-4 text-center font-medium ${feature.highlight ? "text-[#c44578]" : "text-[#181615]"}`}>
                      <div className="flex items-center justify-center">
                        <CellValue value={feature.nts} />
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-[#756c64]">
                      <div className="flex items-center justify-center">
                        <CellValue value={feature.competitor} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where They Fall Short */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#181615] text-center mb-4">
            Where {competitor.name} falls short
          </h2>
          <p className="text-lg text-[#756c64] text-center mb-10">
            Key areas where Nail The Speech has the edge.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {competitor.weaknesses.map((weakness, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-[#e8e1d8] flex items-start gap-3">
                <div className="w-6 h-6 bg-[#c44578]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#c44578]" />
                </div>
                <span className="text-sm text-[#181615]">{weakness}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NTS Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#181615] text-center mb-10">
            What you get with Nail The Speech
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🆓", title: "Get started for free", description: "Walk through the full experience before you pay." },
              { icon: "✏️", title: "In-app editing", description: "Click to edit any paragraph. Use AI to refine sections." },
              { icon: "🗣️", title: "Talk to the AI", description: "Use voice input to describe your stories and let AI turn them into a speech." },
              { icon: "⚡", title: "Quick refinements", description: "One-click prompts to make it shorter, longer, funnier, or more heartfelt." },
              { icon: "🎙️", title: "Audio preview & MP3", description: "Hear your speech read aloud and download it as an MP3 to practice anywhere." },
              { icon: "🎭", title: "44 roles, 14 tones", description: "The widest role and tone coverage of any AI speech writer." },
              { icon: "📥", title: "Export anywhere", description: "PDF, Word, plain text, or MP3. Copy to clipboard or email." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#181615] mb-1">{item.title}</h3>
                <p className="text-xs text-[#756c64]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When the alternative may be better */}
      {competitor.whenAlternativeIsBetter.length > 0 && (
        <section className="py-16 bg-[#faf7f4]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181615] text-center mb-4">
              When {competitor.name} may be the better choice
            </h2>
            <p className="text-lg text-[#756c64] text-center mb-10">
              We think Nail The Speech is the best option for most wedding speakers — but not all. Here's when we'd steer you elsewhere.
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {competitor.whenAlternativeIsBetter.map((item, idx) => (
                <li key={idx} className="bg-white rounded-lg p-4 border border-[#e8e1d8] flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-[#756c64] flex-shrink-0 mt-0.5" />
                  <span className="text-[#181615]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {competitor.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181615] text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {competitor.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#faf7f4] rounded-xl border border-[#e8e1d8] p-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-[#181615]">
                    <span>{faq.question}</span>
                    <span className="text-[#c44578] text-xl leading-none group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-[#3d3830] leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181615] mb-4">
            See the difference for yourself
          </h2>
          <p className="text-lg text-[#756c64] mb-8">
            Get started for free. No commitment required.
          </p>
          <Link href="/generator">
            <Button className="bg-[#c44578] hover:bg-[#b33c6c] text-white px-10 py-5 text-xl font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              <Sparkles className="mr-2 h-5 w-5" />
              Try Nail The Speech Free
            </Button>
          </Link>
          <p className="text-sm text-[#756c64] mt-4">
            Join 10,000+ speakers who chose Nail The Speech
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
