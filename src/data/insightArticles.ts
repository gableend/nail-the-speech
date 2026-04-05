export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  targetKeyword: string;
  readingTime: number;
  publishedDate: string;
  heroImage: string;        // path to hero/card image
  heroImageAlt: string;
  /** Markdown content — populated when .md files are ready */
  content?: string;
  /** Mid-article CTA prompt, e.g. "Try this: talk for 2 minutes about how you met them" */
  midCta?: string;
  tags: string[];
  relatedSlugs: string[];
}

export const insightArticles: InsightArticle[] = [
  {
    slug: 'why-writing-your-wedding-speech-is-the-hardest-way',
    title: 'Why Writing Your Wedding Speech Is the Hardest Way to Do It',
    subtitle: 'Writing forces structure too early. There\'s a better way to start.',
    metaDescription: 'Blank pages kill momentum. Discover why speaking your ideas first produces a more authentic, personal wedding speech than writing ever could.',
    targetKeyword: 'wedding speech writing tips',
    readingTime: 7,
    publishedDate: '2026-04-05',
    heroImage: '/images/articles/why-writing-is-hardest.jpg',
    heroImageAlt: 'Person staring at a blank page trying to write a wedding speech',
    midCta: 'Try this: instead of writing, talk for 2 minutes about your favourite memory with them. You\'ll say things you\'d never think to type.',
    tags: ['talk-first speech writing', 'wedding speech tips', 'authenticity', 'voice input'],
    relatedSlugs: [
      'science-of-talking-produces-better-speeches',
      'turn-rambling-story-into-great-wedding-speech',
    ],
  },
  {
    slug: 'science-of-talking-produces-better-speeches',
    title: 'The Science of Why Talking Produces Better Speeches Than Writing',
    subtitle: 'Speaking uses different cognitive pathways — and they\'re better suited to speeches.',
    metaDescription: 'Research shows speaking activates more emotional, story-driven recall than writing. Learn why talk-first speech writing produces more authentic wedding speeches.',
    targetKeyword: 'talk first speech writing',
    readingTime: 8,
    publishedDate: '2026-04-05',
    heroImage: '/images/articles/science-of-talking.jpg',
    heroImageAlt: 'Brain illustration showing speech and language pathways',
    midCta: 'Try this: record yourself telling the story of how you met the couple. Listen back — you\'ll hear your real voice come through.',
    tags: ['talk-first speech writing', 'science', 'cognitive pathways', 'authenticity'],
    relatedSlugs: [
      'why-writing-your-wedding-speech-is-the-hardest-way',
      'voice-note-to-wedding-speech',
    ],
  },
  {
    slug: 'turn-rambling-story-into-great-wedding-speech',
    title: 'How to Turn a Rambling Story Into a Great Wedding Speech (Without Writing It)',
    subtitle: 'Four steps from messy memories to structured speech — no blank page required.',
    metaDescription: 'Learn how to turn your scattered memories and stories into a structured, heartfelt wedding speech using talk-first speech writing — no writing block required.',
    targetKeyword: 'how to write a wedding speech',
    readingTime: 6,
    publishedDate: '2026-04-05',
    heroImage: '/images/articles/rambling-to-great-speech.jpg',
    heroImageAlt: 'Scattered notes transforming into a polished wedding speech',
    midCta: 'Try this: talk through 3 memories you have with the couple. Don\'t filter — just talk. That\'s your raw material.',
    tags: ['talk-first speech writing', 'wedding speech structure', 'practical guide', 'step by step'],
    relatedSlugs: [
      'why-writing-your-wedding-speech-is-the-hardest-way',
      'why-most-ai-wedding-speeches-feel-generic',
    ],
  },
  {
    slug: 'why-most-ai-wedding-speeches-feel-generic',
    title: 'Why Most AI Wedding Speeches Feel Generic (And How to Avoid It)',
    subtitle: 'The problem isn\'t AI. It\'s how you feed it.',
    metaDescription: 'AI wedding speeches sound generic because the inputs are generic. Learn why voice-based input creates speeches that actually sound like you.',
    targetKeyword: 'AI wedding speech generator',
    readingTime: 6,
    publishedDate: '2026-04-05',
    heroImage: '/images/articles/ai-speeches-generic.jpg',
    heroImageAlt: 'Comparison of generic vs personal AI-generated wedding speech',
    midCta: 'Try this: instead of typing "say something nice about the bride", speak about a specific moment that changed your friendship. The difference is night and day.',
    tags: ['talk-first speech writing', 'AI wedding speech', 'personalisation', 'voice input'],
    relatedSlugs: [
      'science-of-talking-produces-better-speeches',
      'voice-note-to-wedding-speech',
    ],
  },
  {
    slug: 'voice-note-to-wedding-speech',
    title: 'From Voice Note to Wedding Speech: A Better Way to Prepare',
    subtitle: 'Record. Structure. Listen. Rehearse. A new workflow for speech prep.',
    metaDescription: 'Turn a simple voice note into a polished wedding speech. Learn the talk-first workflow that helps you write, hear, and rehearse your speech.',
    targetKeyword: 'wedding speech preparation',
    readingTime: 5,
    publishedDate: '2026-04-05',
    heroImage: '/images/articles/voice-note-to-speech.jpg',
    heroImageAlt: 'Phone recording a voice note that becomes a wedding speech',
    midCta: 'Try this: open your phone\'s voice recorder and talk for 2 minutes about what you admire most about the couple. That\'s your starting point.',
    tags: ['talk-first speech writing', 'voice notes', 'audio', 'MP3 export', 'rehearsal'],
    relatedSlugs: [
      'turn-rambling-story-into-great-wedding-speech',
      'why-most-ai-wedding-speeches-feel-generic',
    ],
  },
];

// ── Helpers ─────────────────────────────────────────────────

export function getInsightArticleBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find(a => a.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insightArticles.map(a => a.slug);
}
