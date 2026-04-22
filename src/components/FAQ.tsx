import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FAQItem, faqs as homeFaqs } from "@/data/faqData";

interface FAQProps {
  items?: FAQItem[];
  title?: string;
}

/**
 * Parse inline markdown-style links [text](url) into React elements.
 * Internal links use Next.js <Link>, external links use <a>.
 */
function renderTextWithLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    // Text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");
    parts.push(
      isInternal ? (
        <Link key={match.index} href={href} className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2">
          {label}
        </Link>
      ) : (
        <a key={match.index} href={href} className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )
    );
    lastIndex = match.index + match[0].length;
  }

  // Remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Render an FAQ answer that may contain paragraphs (\n\n),
 * bullet points (lines starting with •), and inline links [text](url).
 */
function FAQAnswer({ text }: { text: string }) {
  const blocks = text.split("\n\n");

  return (
    <div className="text-[#756c64] leading-relaxed space-y-3">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        const bulletLines = lines.filter((l) => l.startsWith("•"));

        if (bulletLines.length > 0) {
          // Block contains bullet points
          const intro = lines.filter((l) => !l.startsWith("•")).join(" ").trim();
          return (
            <div key={i}>
              {intro && <p>{renderTextWithLinks(intro)}</p>}
              <ul className="list-disc list-inside space-y-1 mt-1">
                {bulletLines.map((line, j) => (
                  <li key={j}>{renderTextWithLinks(line.replace(/^•\s*/, ""))}</li>
                ))}
              </ul>
            </div>
          );
        }

        return <p key={i}>{renderTextWithLinks(block)}</p>;
      })}
    </div>
  );
}

export default function FAQ({ items, title = "Frequently asked questions" }: FAQProps) {
  const faqItems = items || homeFaqs;

  return (
    <section className="py-16 bg-[#faf7f4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#181615] text-center mb-12">
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
                <FAQAnswer text={faq.answer} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
