import { Metadata } from "next";
import RoleLandingPage, { RoleLandingConfig } from "@/components/RoleLandingPage";

export const metadata: Metadata = {
  title: "Best Man Speech Generator | AI Wedding Speech Writer",
  description:
    "Write a best man speech in minutes with AI. Funny, heartfelt, or a perfect mix. Personalized to your friendship, the couple, and your style. Get started for free.",
  keywords: [
    "best man speech generator",
    "best man speech AI",
    "best man speech writer",
    "best man toast",
    "funny best man speech",
    "heartfelt best man speech",
    "best man speech ideas",
    "write best man speech",
    "AI wedding speech",
    "best man speech examples",
  ],
  openGraph: {
    title: "Best Man Speech Generator: Write Yours in Minutes",
    description:
      "AI-powered best man speech writer. Personalized, funny, heartfelt, and ready in seconds. Get started for free.",
    type: "website",
    url: "https://www.nailthespeech.com/best-man-speech-generator",
  },
  alternates: {
    canonical: "https://www.nailthespeech.com/best-man-speech-generator",
  },
};

function BestManJsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Best Man Speech Generator | Nail The Speech",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: "https://www.nailthespeech.com/best-man-speech-generator",
    description:
      "AI-powered best man speech generator. Create a personalized, funny, or heartfelt best man speech in minutes.",
    offers: {
      "@type": "Offer",
      price: "29.99",
      priceCurrency: "USD",
      description: "Get started for free",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "312",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

const bestManConfig: RoleLandingConfig = {
  role: "best-man",
  roleLabel: "Best Man",
  heroHeading: "Write a best man speech they'll talk about for years.",
  heroAccent: "No writer's block. Just you.",
  heroSubheading:
    "Tell us about your friendship with the groom, pick your tone, and our AI writes a speech that sounds like you. Not a robot.",
  heroImage: "/images/best-man.webp",
  heroImageAlt: "Best man giving a wedding speech",
  exampleCategory: "best-man-speech",
  seoCtaText: "Generate Your Best Man Speech",

  valueProps: [
    {
      icon: "🎯",
      title: "Personalized to your friendship",
      description:
        "Share your best stories about the groom and we weave them into a speech that feels authentic and personal.",
    },
    {
      icon: "😂",
      title: "Funny without the cringe",
      description:
        "Our AI knows the difference between a great joke and a best man horror story. Get laughs, not awkward silence.",
    },
    {
      icon: "⏱️",
      title: "Perfect length every time",
      description:
        "Choose from 2 to 8 minutes. We structure your speech so you hit every beat without rambling or rushing.",
    },
    {
      icon: "✏️",
      title: "Edit until it's perfect",
      description:
        "Click any paragraph to tweak the wording, or use AI refinements to adjust tone, add stories, or cut length.",
    },
    {
      icon: "🎙️",
      title: "Practice with audio",
      description:
        "Listen to your speech read aloud with our text-to-speech feature. Practice delivery before the big day.",
    },
    {
      icon: "📥",
      title: "Export anywhere",
      description:
        "Download as PDF, Word, or plain text. Copy to your phone notes. Take it however you need it.",
    },
  ],

  toneHighlights: [
    {
      label: "Funny",
      emoji: "😂",
      description: "Roasts, callbacks, and perfectly-timed punchlines",
    },
    {
      label: "Heartfelt",
      emoji: "💝",
      description: "Genuine emotion that hits the room right in the feels",
    },
    {
      label: "Nostalgic",
      emoji: "🕰️",
      description: "A trip down memory lane through your best moments",
    },
    {
      label: "Clean Roast",
      emoji: "🔥",
      description: "Playful ribbing that makes the groom laugh, not cringe",
    },
  ],

  testimonial: {
    quote:
      "I was dreading writing my best man speech for months. Nail The Speech gave me a killer first draft in under a minute. I tweaked a few lines, added one inside joke, and the room was in stitches. The groom said it was the highlight of the night.",
    name: "Tom R.",
    detail: "Best Man, London",
    initials: "TR",
  },

  faqTitle: "Best man speech questions",
  faqs: [
    {
      question: "How long should a best man speech be?",
      answer:
        "Most best man speeches are 3 to 5 minutes (roughly 400-700 words). That's long enough to tell a great story and raise a toast, but short enough to keep everyone's attention. Our generator lets you choose your preferred length.",
    },
    {
      question: "Can I make my best man speech funny?",
      answer:
        "Absolutely. Choose the 'Funny' or 'Clean Roast' tone and our AI will write jokes, callbacks, and stories that land. You can always dial it back or turn it up with one click.",
    },
    {
      question: "What if I don't know what to say?",
      answer:
        "That's exactly what we're here for. We ask you a few simple questions about your friendship with the groom, your favorite memory together, and how you'd describe the couple. The AI does the rest.",
    },
    {
      question: "Will the speech sound like AI wrote it?",
      answer:
        "No. Our speeches are designed to sound like you, not a chatbot. We use your specific stories, names, and details to create something personal. Most people can't tell it's AI-assisted.",
    },
    {
      question: "How do I get started?",
      answer:
        "Just click the button above and follow the guided steps. Share a story about the groom, pick your tone, and the AI generates a speech outline in seconds. Upgrade to Pro to unlock the full speech, editing, and export.",
    },
    {
      question: "Can I edit the speech after it's generated?",
      answer:
        "Pro users can click any paragraph to edit it directly, use AI refinements to adjust specific sections, or regenerate the entire speech with new instructions. You're always in control.",
    },
    {
      question: "What should I include in a best man speech?",
      answer:
        "A great best man speech typically includes: how you know the groom, a funny or meaningful story, a compliment to the couple, and a toast. Our generator structures all of this for you automatically.",
    },
    {
      question: "Can I practice reading the speech?",
      answer:
        "Yes. Pro users can listen to their speech read aloud using our text-to-speech feature with multiple voice options. You can also export to PDF or your phone for practice.",
    },
  ],
};

export default function BestManLandingPage() {
  return (
    <>
      <BestManJsonLd />
      <RoleLandingPage config={bestManConfig} />
    </>
  );
}
