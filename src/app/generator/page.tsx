import { Mic, PenLine, Sparkles } from "lucide-react";
import GeneratorClient from "./GeneratorClient";
import FAQ from "@/components/FAQ";
import { generatorFaqs } from "@/data/faqData";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function GeneratorPage() {
  return (
    <>
      <SiteHeader />

      {/* Speech Generator label bar */}
      <div className="bg-[#faf7f4] border-b border-[#e8e1d8]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 text-sm text-[#756c64] bg-white border border-[#e8e1d8] px-3 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" />
            Speech Generator
          </span>
        </div>
      </div>

      {/* Server-rendered intro — gives Google indexable content */}
      <section className="bg-[#faf7f4] pt-6 pb-4">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#181615] mb-3">
            Wedding Speech Generator
          </h1>
          <p className="text-[#756c64] text-base sm:text-lg leading-relaxed">
            Great speeches start with speaking, not writing. Share your memories
            using voice or text, and our AI turns your real stories into a speech
            that sounds like you.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-[#756c64]">
            <span className="flex items-center gap-1.5">
              <Mic className="h-4 w-4 text-[#c44578]" />
              Voice input
            </span>
            <span className="flex items-center gap-1.5">
              <PenLine className="h-4 w-4 text-[#c44578]" />
              Or type it out
            </span>
          </div>
        </div>
      </section>

      <GeneratorClient />

      {/* Server-rendered FAQ — indexable by search engines */}
      <FAQ items={generatorFaqs} title="Questions about the generator" />

      <SiteFooter />
    </>
  );
}
