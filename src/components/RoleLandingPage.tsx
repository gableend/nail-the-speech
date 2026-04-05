import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Clock, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/FAQ";
import { FAQItem } from "@/data/faqData";
import { exampleSpeeches, speechCategories } from "@/data/exampleSpeeches";

export interface RoleLandingConfig {
  role: string;            // e.g. "best-man"
  roleLabel: string;       // e.g. "Best Man"
  heroHeading: string;     // Main H1
  heroAccent: string;      // Pink-highlighted portion
  heroSubheading: string;  // Below H1
  heroImage: string;       // /images/best-man.webp
  heroImageAlt: string;
  exampleCategory: string; // e.g. "best-man-speech"
  valueProps: { icon: string; title: string; description: string }[];
  toneHighlights: { label: string; emoji: string; description: string }[];
  faqs: FAQItem[];
  faqTitle: string;
  testimonial: { quote: string; name: string; detail: string; initials: string };
  seoCtaText: string;      // e.g. "Generate Your Best Man Speech"
}

export default function RoleLandingPage({ config }: { config: RoleLandingConfig }) {
  const examples = exampleSpeeches
    .filter((s) => s.category === config.exampleCategory)
    .slice(0, 3);

  const category = speechCategories.find((c) => c.slug === config.exampleCategory);

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181615] leading-[1.1] tracking-tight">
                {config.heroHeading}{" "}
                <span className="text-[#da5389]">{config.heroAccent}</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#8f867e] max-w-lg leading-relaxed">
                {config.heroSubheading}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/generator?role=${config.role}`}>
                  <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 sm:px-10 py-5 text-lg font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto">
                    <Sparkles className="mr-2 h-5 w-5" />
                    {config.seoCtaText}
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#8f867e]">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  First speech free
                </div>
                <div className="flex items-center gap-2 text-sm text-[#8f867e]">
                  <Clock className="h-4 w-4 text-[#da5389]" />
                  Ready in 30 seconds
                </div>
                <div className="flex items-center gap-2 text-sm text-[#8f867e]">
                  <Users className="h-4 w-4 text-[#da5389]" />
                  10,000+ speeches created
                </div>
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={config.heroImage}
                  alt={config.heroImageAlt}
                  className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-[#e8e1d8] px-4 py-3 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[#181615]">Loved by wedding speakers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
              Why speakers choose Nail The Speech
            </h2>
            <p className="text-lg text-[#8f867e] max-w-2xl mx-auto">
              Everything you need to write a {config.roleLabel.toLowerCase()} speech that gets the room on their feet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {config.valueProps.map((prop, idx) => (
              <div key={idx} className="bg-[#faf7f4] rounded-xl p-6 border border-[#e8e1d8] hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{prop.icon}</div>
                <h3 className="text-lg font-semibold text-[#181615] mb-2">{prop.title}</h3>
                <p className="text-[#8f867e] text-sm leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tone Options */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
              Choose the perfect tone
            </h2>
            <p className="text-lg text-[#8f867e]">
              Your speech, your style. Pick the tone that feels right for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {config.toneHighlights.map((tone, idx) => (
              <Link
                key={idx}
                href={`/generator?role=${config.role}`}
                className="group bg-white rounded-xl p-5 border border-[#e8e1d8] hover:border-[#da5389] hover:shadow-md transition-all text-center"
              >
                <div className="text-4xl mb-3">{tone.emoji}</div>
                <h3 className="font-semibold text-[#181615] mb-1 group-hover:text-[#da5389] transition-colors">{tone.label}</h3>
                <p className="text-xs text-[#8f867e]">{tone.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
              How it works
            </h2>
            <p className="text-lg text-[#8f867e]">
              Three steps to a speech everyone remembers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Tell us about you",
                description: `Share your relationship with the ${config.role === 'best-man' ? 'groom' : 'bride'}, a favorite memory, and the tone you want. Takes about 2 minutes.`,
              },
              {
                step: "2",
                title: "AI writes your speech",
                description: "Our AI crafts a personalized speech using your stories and style preferences. Ready in seconds, not hours.",
              },
              {
                step: "3",
                title: "Refine and deliver",
                description: "Edit any paragraph, refine the tone, export to PDF or listen to an audio preview. Make it yours.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#da5389] text-white flex items-center justify-center font-bold text-lg mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#181615] mb-3">{item.title}</h3>
                <p className="text-[#8f867e]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/generator?role=${config.role}`}>
              <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg">
                Start Writing Your Speech
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Example Speeches */}
      {examples.length > 0 && (
        <section className="py-16 bg-[#faf7f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
                {config.roleLabel} speech examples
              </h2>
              <p className="text-lg text-[#8f867e]">
                Get inspired by real examples before you start.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {examples.map((speech) => (
                <Link
                  key={speech.slug}
                  href={`/examples/${config.exampleCategory}/${speech.slug}`}
                  className="group bg-white rounded-xl p-5 border border-[#e8e1d8] hover:border-[#da5389] hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      speech.tone === 'funny' ? 'bg-amber-50 text-amber-700' :
                      speech.tone === 'heartfelt' ? 'bg-pink-50 text-pink-700' :
                      speech.tone === 'roast' ? 'bg-orange-50 text-orange-700' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {speech.tone === 'funny' ? '😂' : speech.tone === 'heartfelt' ? '💝' : speech.tone === 'roast' ? '🔥' : '⚖️'} {speech.tone.charAt(0).toUpperCase() + speech.tone.slice(1)}
                    </span>
                    <span className="text-xs text-[#8f867e]">{speech.wordCount} words</span>
                  </div>
                  <h3 className="font-semibold text-[#181615] group-hover:text-[#da5389] transition-colors mb-2 line-clamp-2">
                    {speech.title}
                  </h3>
                  <p className="text-sm text-[#8f867e] line-clamp-3 flex-1">{speech.excerpt}</p>
                  <div className="mt-3 flex items-center text-sm font-medium text-[#da5389]">
                    Read full speech <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>

            {category && (
              <div className="text-center mt-8">
                <Link
                  href={`/examples/${config.exampleCategory}`}
                  className="text-[#da5389] hover:text-[#c44578] font-medium inline-flex items-center gap-1"
                >
                  View all {config.roleLabel.toLowerCase()} speech examples
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#181615] mb-12">
            Hear from real wedding speakers
          </h2>

          <div className="bg-[#faf7f4] rounded-xl p-6 sm:p-8">
            <p className="text-lg text-[#181615] italic mb-6">
              &ldquo;{config.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#da5389] flex items-center justify-center text-white font-semibold">
                {config.testimonial.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#181615]">{config.testimonial.name}</p>
                <p className="text-sm text-[#8f867e]">{config.testimonial.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={config.faqs} title={config.faqTitle} />

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
            Ready to nail your {config.roleLabel.toLowerCase()} speech?
          </h2>
          <p className="text-lg text-[#8f867e] mb-8">
            Your first speech is free. No credit card required.
          </p>
          <Link href={`/generator?role=${config.role}`}>
            <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-10 py-5 text-xl font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
              <Sparkles className="mr-2 h-5 w-5" />
              {config.seoCtaText}
            </Button>
          </Link>
          <p className="text-sm text-[#8f867e] mt-4">
            Join 10,000+ wedding speakers who used Nail The Speech
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
