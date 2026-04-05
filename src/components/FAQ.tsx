import { ChevronDown } from "lucide-react";
import { FAQItem, faqs as homeFaqs } from "@/data/faqData";

interface FAQProps {
  items?: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Frequently asked questions" }: FAQProps) {
  const faqItems = items || homeFaqs;

  return (
    <section className="py-16 bg-[#faf7f4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#181615] text-center mb-12">
          {title}
        </h2>

        <div className="space-y-3">
          {faqItems.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-[#e8e1d8] overflow-hidden transition-shadow hover:shadow-sm"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-[#181615] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className="h-5 w-5 text-[#756c64] flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-5">
                <p className="text-[#756c64] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
