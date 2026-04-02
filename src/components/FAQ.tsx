"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Nail The Speech work?",
    answer:
      "You tell us about your role, the couple, and your favourite memories together. Our AI uses those personal details to craft a speech that sounds like you — not a robot. You get a full draft in seconds, ready to refine and make your own.",
  },
  {
    question: "Is my first speech really free?",
    answer:
      "Yes. You can generate one complete speech at no cost — no credit card required. If you want to regenerate, edit, or create additional speeches, you can upgrade to Pro.",
  },
  {
    question: "What speech types do you support?",
    answer:
      "Best Man, Maid of Honour, Father of the Bride, Mother of the Bride, Groom, and Bride. Each type is tuned for the relationship and expectations that come with the role.",
  },
  {
    question: "Will the speech sound like it was written by AI?",
    answer:
      "That's exactly what we designed against. The speech is built around your real stories and memories, so it sounds personal and authentic. Pro users can also directly edit every paragraph to add their own voice.",
  },
  {
    question: "How long is the speech?",
    answer:
      "You choose. We offer short (1–2 minutes), medium (3–4 minutes), and long (5+ minutes) options. Most people go with medium — long enough to say something meaningful, short enough to keep the crowd engaged.",
  },
  {
    question: "Can I edit the speech after it's generated?",
    answer:
      "Pro users can edit every paragraph directly, regenerate sections with custom instructions, and track all changes with version history. Your personal edits are highlighted and preserved even when you regenerate the rest.",
  },
  {
    question: "What does Pro include?",
    answer:
      "Unlimited regenerations, direct text editing, version history with undo/redo, export to PDF and Word, and the ability to mark your speech as final when you're ready for the big day.",
  },
  {
    question: "How do I practise delivering my speech?",
    answer:
      "Once your speech is finalised, export it to PDF or copy the text. Read it aloud a few times — most people find 3–5 practice runs is enough to feel confident. Time yourself to make sure you're within your target length.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your stories and personal details are used only to generate your speech. We don't share your data with third parties or use it to train AI models.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#faf7f4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] text-center mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#e8e1d8] overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-[#181615] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#8f867e] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[#8f867e] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
