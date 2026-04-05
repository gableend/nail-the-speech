import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Users, Clock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import HomeCTALink from "@/components/HomeCTALink";
import HomeClient from "@/components/HomeClient";
import FAQ from "@/components/FAQ";
import { faqs } from "@/data/faqData";
import { majorRoles, getMinorRolesByCategory } from "@/data/speechRoles";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Nail The Speech — AI Wedding Speech Writer | Get Started Free",
  description: "Create unforgettable wedding speeches with AI. Best man, maid of honor, father of the bride and more. Personalized, heartfelt, and ready in seconds. Get started for free.",
  keywords: [
    "wedding speech writer", "AI wedding speech", "best man speech generator",
    "maid of honor speech", "father of bride speech", "wedding toast generator",
    "wedding speech generator", "wedding speech AI",
  ],
  openGraph: {
    title: "Nail The Speech — AI Wedding Speech Writer",
    description: "Create personalized wedding speeches in seconds with AI. Get started for free.",
    type: "website",
    url: "https://nailthespeech.com",
  },
};

function HomeJsonLd() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nail The Speech",
    url: "https://nailthespeech.com",
    logo: "https://nailthespeech.com/android-chrome-512x512.png",
    description: "AI-powered wedding speech writer that creates personalized, heartfelt speeches in seconds.",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nail The Speech",
    url: "https://nailthespeech.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nailthespeech.com/examples?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nail The Speech",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: "https://nailthespeech.com",
    description: "AI wedding speech generator. Create personalized best man, maid of honor, and family wedding speeches in seconds.",
    offers: {
      "@type": "Offer",
      price: "29.99",
      priceCurrency: "USD",
      description: "Get started for free",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <HomeJsonLd />
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#181615] leading-[1.1] tracking-tight">
                Nail your wedding speech.{" "}
                <span className="text-[#da5389]">No stress.</span>{" "}
                <span className="text-[#da5389]">Just magic.</span>
              </h1>

              {/* Get Started Button */}
              <div className="space-y-6">
                <HomeCTALink href="/generator" location="hero">
                  <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-10 py-5 text-xl font-semibold shadow-lg rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </HomeCTALink>
                <p className="text-lg text-[#8f867e] max-w-md leading-relaxed">
                  The only wedding speech generator that starts with your voice.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-[#e8e1d8]">
                  <div className="w-10 h-10 bg-[#da5389]/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#da5389]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#181615]">10,000+</div>
                    <div className="text-sm text-[#8f867e]">speeches created</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-[#e8e1d8]">
                  <div className="w-10 h-10 bg-[#da5389]/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[#da5389]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#181615]">Ready</div>
                    <div className="text-sm text-[#8f867e]">in seconds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Video */}
            <HomeClient />
          </div>
        </div>
      </section>

      {/* Find Speech Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
              Find speeches for every wedding role
            </h2>
            <p className="text-lg text-[#8f867e]">
              Discover AI-generated speeches for any role and every style.
            </p>
          </div>

          {/* Major Speech Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {majorRoles.map((role) => (
              <HomeCTALink key={role.slug} href={`/generator?role=${role.slug}`} location="role_card" className="group">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative">
                    <img
                      src={role.image!}
                      alt={role.label}
                      className="w-full h-72 object-cover"
                      style={{ objectPosition: role.objectPosition || 'top' }}
                      loading="lazy"
                    />
                    {role.popular && (
                      <span className="absolute top-3 right-3 bg-[#da5389] text-white text-sm px-3 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-[#da5389] rounded-full p-3">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#da5389] text-xl font-bold mb-2">{role.label}</h3>
                    <p className="text-[#6b5b73] text-sm leading-relaxed mb-4">{role.description}</p>
                    <div className="flex items-center text-[#da5389] font-medium">
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </HomeCTALink>
            ))}
          </div>

          {/* Minor Roles - Compact Grid */}
          <div id="all-roles" className="mt-16 max-w-5xl mx-auto scroll-mt-28">
            <h3 className="text-2xl font-bold text-[#181615] text-center mb-2">
              Speeches for every role
            </h3>
            <p className="text-[#8f867e] text-center mb-8">
              Giving a speech at a wedding? We've got you covered, whatever your role.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {getMinorRolesByCategory().map((group) => {
                const hiddenFromHomepage = ['cousin-of-bride', 'cousin-of-groom', 'niece-of-bride', 'niece-of-groom', 'nephew-of-bride', 'nephew-of-groom'];
                const visibleRoles = group.roles.filter(r => !hiddenFromHomepage.includes(r.slug));
                if (visibleRoles.length === 0) return null;
                return (
                <div key={group.category}>
                  <h4 className="text-xs font-semibold text-[#8f867e] uppercase tracking-wider mb-2">
                    {group.category}
                  </h4>
                  <ul className="space-y-1">
                    {visibleRoles.map((role) => (
                      <li key={role.slug}>
                        <Link
                          href={`/generator?role=${role.slug}`}
                          className="group/link flex items-center gap-2 py-1.5 text-[#181615] hover:text-[#da5389] transition-colors"
                        >
                          <span className="text-sm">{role.emoji}</span>
                          <span className="text-sm font-medium">{role.label}</span>
                          <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#da5389]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>

            {/* CTA below roles */}
            <div className="mt-12 text-center">
              <p className="text-[#8f867e] mb-4">Don't see your role? No problem.</p>
              <HomeCTALink href="/generator" location="custom">
                <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-8 py-3 text-base font-semibold shadow-lg">
                  ✍️ Create a Custom Speech
                </Button>
              </HomeCTALink>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] mb-4">
              We'll walk you through every part of speech writing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Your personal details",
                description: "Tell us about your role, the couple, and your relationship. Share your favorite memories and the tone you want."
              },
              {
                step: "2",
                title: "Your speech style",
                description: "Choose from heartfelt, funny, balanced, or formal tones. Select your preferred speech length and special moments to include."
              },
              {
                step: "3",
                title: "Your perfect speech",
                description: "Get your AI-generated speech instantly. Copy to clipboard, export to PDF, or edit to make it uniquely yours."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#da5389] text-white flex items-center justify-center font-bold text-lg mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#181615] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#8f867e]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/generator">
              <Button className="bg-[#da5389] hover:bg-[#c44578] text-white px-8 py-3 text-lg font-semibold rounded-full">
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#181615] mb-12">
            Wedding speakers love us (and we love them!)
          </h2>

          <div className="bg-[#faf7f4] rounded-lg p-8">
            <p className="text-lg text-[#181615] italic mb-6">
              "I really enjoyed using Nail The Speech and found it very useful right away. When I began writing my speech,
              I didn't know where to start. The AI guidance was super helpful and eased my mind when I felt overwhelmed.
              I delivered a speech that made everyone cry happy tears!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#da5389] flex items-center justify-center text-white font-semibold">
                JM
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#181615]">James & Maria</p>
                <p className="text-sm text-[#8f867e]">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <SiteFooter />
    </div>
  );
}
