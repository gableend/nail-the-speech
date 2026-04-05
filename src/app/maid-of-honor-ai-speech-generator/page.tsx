import { Metadata } from "next";
import RoleLandingPage, { RoleLandingConfig } from "@/components/RoleLandingPage";

export const metadata: Metadata = {
  title: "Maid of Honor Speech Generator — AI Wedding Speech Writer | Nail The Speech",
  description:
    "Write a maid of honor speech in minutes with AI. Heartfelt, funny, or beautifully balanced. Personalized to your friendship, the couple, and your style. Get started for free.",
  keywords: [
    "maid of honor speech generator",
    "maid of honor speech AI",
    "maid of honor speech writer",
    "maid of honor toast",
    "funny maid of honor speech",
    "heartfelt maid of honor speech",
    "maid of honor speech ideas",
    "write maid of honor speech",
    "AI wedding speech",
    "maid of honor speech examples",
    "matron of honor speech",
  ],
  openGraph: {
    title: "Maid of Honor Speech Generator — Write Yours in Minutes",
    description:
      "AI-powered maid of honor speech writer. Personalized, heartfelt, and ready in seconds. Get started for free.",
    type: "website",
    url: "https://nailthespeech.com/maid-of-honor-ai-speech-generator",
  },
  alternates: {
    canonical: "https://nailthespeech.com/maid-of-honor-ai-speech-generator",
  },
};

function MaidOfHonorJsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Maid of Honor Speech Generator — Nail The Speech",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: "https://nailthespeech.com/maid-of-honor-ai-speech-generator",
    description:
      "AI-powered maid of honor speech generator. Create a personalized, heartfelt, or funny maid of honor speech in minutes.",
    offers: {
      "@type": "Offer",
      price: "29.99",
      priceCurrency: "USD",
      description: "Get started for free",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "287",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

const maidOfHonorConfig: RoleLandingConfig = {
  role: "maid-of-honor",
  roleLabel: "Maid of Honor",
  heroHeading: "Write a maid of honor speech that makes everyone cry.",
  heroAccent: "The good kind of tears.",
  heroSubheading:
    "Share your bond with the bride, choose your style, and our AI crafts a speech that captures your friendship perfectly. Personal, polished, and unmistakably you.",
  heroImage: "/images/brides-maid.webp",
  heroImageAlt: "Maid of honor giving a wedding speech",
  exampleCategory: "maid-of-honor-speech",
  seoCtaText: "Generate Your Maid of Honor Speech",

  valueProps: [
    {
      icon: "💕",
      title: "Built around your friendship",
      description:
        "Tell us how you met the bride, your favorite memory, and what makes her special. We turn it into a speech that celebrates your bond.",
    },
    {
      icon: "🎭",
      title: "Your tone, your way",
      description:
        "Heartfelt and sentimental? Light and funny? A mix of both? You choose the vibe and we match it perfectly.",
    },
    {
      icon: "⏱️",
      title: "Perfect length every time",
      description:
        "Choose from 2 to 8 minutes. We structure your speech so every moment counts without overstaying the spotlight.",
    },
    {
      icon: "✏️",
      title: "Edit until it's perfect",
      description:
        "Click any paragraph to rewrite it in your own words, or use AI refinements to adjust tone, add details, or trim length.",
    },
    {
      icon: "🎙️",
      title: "Practice with audio",
      description:
        "Listen to your speech read aloud before the big day. Pick a voice, press play, and practice your timing.",
    },
    {
      icon: "📥",
      title: "Export anywhere",
      description:
        "Download as PDF, Word, or plain text. Send it to your phone. Have it ready however you need it.",
    },
  ],

  toneHighlights: [
    {
      label: "Heartfelt",
      emoji: "💝",
      description: "Genuine emotion that celebrates your friendship beautifully",
    },
    {
      label: "Sentimental",
      emoji: "🥹",
      description: "A love letter to your best friend on her biggest day",
    },
    {
      label: "Funny",
      emoji: "😂",
      description: "Lighthearted stories and moments that get the room laughing",
    },
    {
      label: "Nostalgic",
      emoji: "🕰️",
      description: "A walk through your favorite memories together",
    },
  ],

  testimonial: {
    quote:
      "I spent two weeks staring at a blank page. Nail The Speech helped me write the whole thing in one evening. I added a few personal touches, practiced it twice, and delivered a speech that had the bride in happy tears. Best decision I made for the wedding.",
    name: "Sarah K.",
    detail: "Maid of Honor, Dublin",
    initials: "SK",
  },

  faqTitle: "Maid of honor speech questions",
  faqs: [
    {
      question: "How long should a maid of honor speech be?",
      answer:
        "Most maid of honor speeches are 3 to 5 minutes (roughly 400-700 words). Long enough to share a meaningful story and toast the couple, short enough to keep the energy high. You can choose your preferred length in our generator.",
    },
    {
      question: "What should I include in my maid of honor speech?",
      answer:
        "A great maid of honor speech typically includes: how you became close with the bride, a story that shows who she is, how you feel about her partner, and a heartfelt toast to the couple. Our generator structures all of this for you.",
    },
    {
      question: "Can I make my speech funny?",
      answer:
        "Of course! Choose the 'Funny' tone and we'll weave in lighthearted stories and humor. You can always mix tones, starting funny and ending heartfelt is a classic maid of honor move.",
    },
    {
      question: "What if I'm not a good writer?",
      answer:
        "That's the whole point. You don't need to be a writer. Just answer a few questions about the bride and your friendship, and our AI handles the structure, flow, and wording.",
    },
    {
      question: "Will it sound like a real person wrote it?",
      answer:
        "Yes. We use your specific names, stories, and details to create something that sounds like you. No generic templates or robotic phrasing.",
    },
    {
      question: "How do I get started?",
      answer:
        "Just click the button above and follow the guided steps. Share a memory about the bride, pick your tone, and the AI generates a speech outline in seconds. Upgrade to Pro to unlock the full speech, editing, and export.",
    },
    {
      question: "Can I edit the speech after?",
      answer:
        "Pro users can edit any paragraph directly, use AI to refine specific sections, or regenerate the whole speech with new instructions. You always have full control.",
    },
    {
      question: "Does this work for matron of honor too?",
      answer:
        "Absolutely. Whether you're the maid of honor, matron of honor, or honor attendant, the speech structure and personalization works the same way. Just select 'Maid of Honor' and tell us your story.",
    },
  ],
};

export default function MaidOfHonorLandingPage() {
  return (
    <>
      <MaidOfHonorJsonLd />
      <RoleLandingPage config={maidOfHonorConfig} />
    </>
  );
}
