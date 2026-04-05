export interface ComparisonFeature {
  name: string;
  category: 'pricing' | 'generation' | 'editing' | 'output' | 'experience';
  nts: string | boolean;
  competitor: string | boolean;
  highlight?: boolean; // true = NTS wins on this row
}

export interface Competitor {
  slug: string;            // used in URL: nailthespeech-vs-{slug}
  name: string;
  tagline: string;         // one-line description
  price: string;           // e.g. "$39.99"
  priceDetail: string;     // e.g. "One-time payment"
  website: string;         // domain only, no link
  draftsGenerated: string; // e.g. "4 drafts"
  speechLength: string;    // e.g. "150-500 words"
  summary: string;         // 2-3 sentence neutral description
  weaknesses: string[];    // key areas where NTS wins
  features: ComparisonFeature[];
}

export const ntsFeatures = {
  price: "$29.99",
  priceDetail: "One-time payment (50% launch discount)",
  getStarted: "Get started for free",
  roles: "44 wedding roles",
  tones: "14 tone options",
  editing: "In-app paragraph editing + AI refinements",
  export: "PDF, Word, TXT",
  audio: "Text-to-speech with 6 voices",
  versionHistory: true,
  speechLength: "Custom length (1-10 minutes)",
  drafts: "Unlimited regenerations (Pro)",
  delivery: "Instant in-app + export",
};

export const competitors: Competitor[] = [
  {
    slug: "toastpal",
    name: "ToastPal",
    tagline: "AI wedding speech writer with multiple draft options",
    price: "$39.99",
    priceDetail: "One-time payment",
    website: "toastpal.com",
    draftsGenerated: "4 drafts",
    speechLength: "150-500 words",
    summary:
      "ToastPal generates four unique speech drafts with varying tones from a questionnaire-based input. It covers common wedding roles and delivers speeches via email with delivery tips included.",
    weaknesses: [
      "You pay before seeing any output",
      "No in-app editing — speeches delivered via email only",
      "Limited speech length (max ~500 words / 5 minutes)",
      "No audio preview or text-to-speech",
      "No version history or refinement tools",
      "More expensive than Nail The Speech",
    ],
    features: [
      { name: "Price", category: "pricing", nts: "$29.99", competitor: "$39.99", highlight: true },
      { name: "Get started", category: "pricing", nts: "Free to try", competitor: "Pay upfront", highlight: true },
      { name: "Money-back guarantee", category: "pricing", nts: false, competitor: false },
      { name: "Wedding roles", category: "generation", nts: "44 roles", competitor: "~10 roles", highlight: true },
      { name: "Tone options", category: "generation", nts: "14 tones", competitor: "4 tones", highlight: true },
      { name: "Speech length control", category: "generation", nts: "Custom (1-10 min)", competitor: "150-500 words", highlight: true },
      { name: "Drafts per generation", category: "generation", nts: "Unlimited regenerations", competitor: "4 drafts" },
      { name: "In-app speech editor", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "AI refinements", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "Version history", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "Export to PDF", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Export to Word", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Text-to-speech audio", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Email delivery", category: "output", nts: true, competitor: true },
      { name: "Delivery tips", category: "experience", nts: false, competitor: true },
      { name: "Example speech library", category: "experience", nts: "340+ examples", competitor: false, highlight: true },
      { name: "Advice articles", category: "experience", nts: "75+ articles", competitor: false, highlight: true },
    ],
  },
  {
    slug: "toastwiz",
    name: "ToastWiz",
    tagline: "GPT-4 powered wedding speech generator",
    price: "$39.90",
    priceDetail: "One-time payment",
    website: "toastwiz.com",
    draftsGenerated: "4 drafts",
    speechLength: "350-600 words",
    summary:
      "ToastWiz uses a fine-tuned GPT-4 model to generate four unique wedding speech drafts from a detailed questionnaire. Speeches are emailed within minutes and cover standard wedding party roles.",
    weaknesses: [
      "Pay upfront with no preview of the experience",
      "Speeches delivered via email only, no in-app experience",
      "No editing tools — what you get is what you get",
      "No audio preview or export options",
      "Limited to ~600 words maximum",
      "More expensive than Nail The Speech",
    ],
    features: [
      { name: "Price", category: "pricing", nts: "$29.99", competitor: "$39.90", highlight: true },
      { name: "Get started", category: "pricing", nts: "Free to try", competitor: "Pay upfront", highlight: true },
      { name: "Money-back guarantee", category: "pricing", nts: false, competitor: "100% guarantee" },
      { name: "Wedding roles", category: "generation", nts: "44 roles", competitor: "~12 roles", highlight: true },
      { name: "Tone options", category: "generation", nts: "14 tones", competitor: "~4 tones", highlight: true },
      { name: "Speech length control", category: "generation", nts: "Custom (1-10 min)", competitor: "350-600 words", highlight: true },
      { name: "Drafts per generation", category: "generation", nts: "Unlimited regenerations", competitor: "4 drafts" },
      { name: "AI model", category: "generation", nts: "GPT-4o", competitor: "Fine-tuned GPT-4" },
      { name: "In-app speech editor", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "AI refinements", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "Version history", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "Export to PDF", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Export to Word", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Text-to-speech audio", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Email delivery", category: "output", nts: true, competitor: true },
      { name: "Example speech library", category: "experience", nts: "340+ examples", competitor: false, highlight: true },
      { name: "Advice articles", category: "experience", nts: "75+ articles", competitor: false, highlight: true },
    ],
  },
  {
    slug: "speechyai",
    name: "SpeechyAI",
    tagline: "Premium AI speech writer built by professional speechwriters",
    price: "$65",
    priceDetail: "Per speech",
    website: "speechy.com",
    draftsGenerated: "3 drafts",
    speechLength: "700-1,300 words",
    summary:
      "SpeechyAI is the premium option, built by Speechy's team of professional speechwriters with a decade of wedding speech experience. It uses GPT-4 with a built-in clich\u00e9 filter and generates longer speeches from a detailed questionnaire.",
    weaknesses: [
      "Most expensive option at $65 per speech (3x Nail The Speech)",
      "Significant upfront commitment at $65 per speech",
      "Questionnaire takes 45-60 minutes to complete",
      "Only 3 drafts generated (fewest of the three competitors)",
      "No in-app editing or refinement tools",
      "No audio preview feature",
    ],
    features: [
      { name: "Price", category: "pricing", nts: "$29.99", competitor: "$65", highlight: true },
      { name: "Get started", category: "pricing", nts: "Free to try", competitor: "Pay upfront", highlight: true },
      { name: "Built by speechwriters", category: "generation", nts: false, competitor: true },
      { name: "Clich\u00e9 filter", category: "generation", nts: false, competitor: true },
      { name: "Wedding roles", category: "generation", nts: "44 roles", competitor: "~8 roles", highlight: true },
      { name: "Tone options", category: "generation", nts: "14 tones", competitor: "Limited", highlight: true },
      { name: "Speech length", category: "generation", nts: "Custom (1-10 min)", competitor: "700-1,300 words" },
      { name: "Drafts per generation", category: "generation", nts: "Unlimited regenerations", competitor: "3 drafts", highlight: true },
      { name: "Setup time", category: "experience", nts: "~2 minutes", competitor: "45-60 minutes", highlight: true },
      { name: "In-app speech editor", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "AI refinements", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "Version history", category: "editing", nts: true, competitor: false, highlight: true },
      { name: "Export to PDF", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Export to Word", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Text-to-speech audio", category: "output", nts: true, competitor: false, highlight: true },
      { name: "Example speech library", category: "experience", nts: "340+ examples", competitor: false, highlight: true },
      { name: "Advice articles", category: "experience", nts: "75+ articles", competitor: false, highlight: true },
    ],
  },
];

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
