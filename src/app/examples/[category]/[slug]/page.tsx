import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Copy } from 'lucide-react';
import {
  speechCategories,
  exampleSpeeches,
  ExampleSpeech,
  SpeechCategory,
  getCategoryBySlug,
  getSpeechBySlug,
  getSpeechesByCategory,
} from '@/data/exampleSpeeches';
import SpeechCopyButton from '@/components/SpeechCopyButton';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

// ── SEO helpers ──────────────────────────────────────────────

const toneLabel: Record<string, string> = {
  funny: 'Funny',
  heartfelt: 'Heartfelt',
  balanced: 'Balanced',
  roast: 'Roast-Style',
};

const toneMeta: Record<string, string> = {
  funny: 'funny and lighthearted',
  heartfelt: 'heartfelt and emotional',
  balanced: 'balanced mix of humor and heart',
  roast: 'roast-style with affectionate humor',
};

function buildPageTitle(speech: ExampleSpeech, category: SpeechCategory): string {
  const tone = toneLabel[speech.tone] || 'Wedding';
  return `${tone} ${category.name} Example: ${speech.title}`;
}

function buildH1(speech: ExampleSpeech, category: SpeechCategory): string {
  const tone = toneLabel[speech.tone] || '';
  return `${speech.title}: A ${tone} ${category.name} (${speech.wordCount} Words)`;
}

function buildMetaDescription(speech: ExampleSpeech, category: SpeechCategory): string {
  const tone = toneMeta[speech.tone] || 'well-crafted';
  const maxLen = 90;
  const excerpt = speech.excerpt.length > maxLen
    ? speech.excerpt.substring(0, maxLen).replace(/\s+\S*$/, '') + '...'
    : speech.excerpt;
  return `${excerpt} A ${tone} ${category.name.toLowerCase()} example (${speech.wordCount} words).`;
}

function getWhyItWorks(speech: ExampleSpeech, category: SpeechCategory): string {
  const toneDesc: Record<string, string> = {
    funny: `This speech leads with humor — but it's warm humor, not stand-up comedy. The laughs create trust with the audience, which makes the sincere moments at the end hit harder.`,
    heartfelt: `This speech works because it's genuinely personal. It avoids generic praise and instead tells specific stories that show who the person really is. That specificity is what moves a room.`,
    balanced: `This speech balances light moments with real emotion. It doesn't try too hard to be funny or too earnest to be heavy. That balance is what keeps an audience engaged from start to finish.`,
    roast: `Roast speeches walk a fine line. This one works because every joke comes from a place of obvious affection. The audience laughs because they can feel the love underneath the teasing.`,
  };
  const structure = speech.wordCount < 400
    ? `At ${speech.wordCount} words, it proves you don't need length to make an impact. Every line earns its place.`
    : `At ${speech.wordCount} words (roughly ${speech.durationMinutes} minutes), it's well within the ideal range — long enough to say something meaningful, short enough to keep the room engaged.`;

  return `${toneDesc[speech.tone] || toneDesc.balanced}\n\n${structure}`;
}

function getHowToAdapt(speech: ExampleSpeech, category: SpeechCategory): string[] {
  const base = [
    `Replace all names and personal details with your own`,
    `Swap the stories for real moments from your relationship with the ${category.name === 'Groom Speech' || category.name === 'Bride Speech' ? 'couple' : speech.weddingRole.toLowerCase().includes('bride') ? 'bride' : speech.weddingRole.toLowerCase().includes('groom') ? 'groom' : 'couple'}`,
  ];
  const toneSpecific: Record<string, string> = {
    funny: `Adjust the humor to match your natural style — don't force jokes that don't sound like you`,
    heartfelt: `Keep the emotional moments but use your own words — sincerity can't be borrowed`,
    balanced: `Shift the ratio of humor to emotion based on your comfort level`,
    roast: `Calibrate the roast intensity for your audience — what works with close friends may not work with grandparents in the room`,
  };
  return [
    ...base,
    toneSpecific[speech.tone] || toneSpecific.balanced,
    `Read it out loud before the day — what looks good on paper doesn't always sound natural when spoken`,
  ];
}

function getDeliveryTips(speech: ExampleSpeech): string[] {
  const tips: Record<string, string[]> = {
    funny: [
      `Pause after punchlines — give the room time to laugh before you continue`,
      `Don't rush through the sincere parts at the end; the contrast is what makes them land`,
      `Make eye contact with the person you're speaking about during the genuine moments`,
    ],
    heartfelt: [
      `Slow down during emotional moments — if you feel something, the audience will too`,
      `It's OK to pause if you get emotional; the room will wait for you`,
      `Look at the couple when you say the most personal parts`,
    ],
    balanced: [
      `Let the transitions between funny and sincere happen naturally — don't announce them`,
      `Pace yourself; most people speak faster than they think when nervous`,
      `End on the couple, not on yourself — your last words should be about them`,
    ],
    roast: [
      `Read the room — if a joke doesn't land, move on quickly rather than doubling down`,
      `The affectionate pivot at the end is the most important part; don't rush it`,
      `Make sure the person you're roasting is laughing — check in with them visually`,
    ],
  };
  return tips[speech.tone] || tips.balanced;
}

// Generate all individual speech pages at build time
export function generateStaticParams() {
  return exampleSpeeches.map(s => ({
    category: s.category,
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const speech = getSpeechBySlug(slug);
  if (!speech) return { title: 'Not Found' };

  const category = getCategoryBySlug(speech.category);

  return {
    title: buildPageTitle(speech, category!),
    description: buildMetaDescription(speech, category!),
    keywords: [
      speech.weddingRole.toLowerCase(),
      `${speech.weddingRole.toLowerCase()} speech example`,
      `${speech.tone} wedding speech`,
      'wedding speech',
      ...speech.tags,
    ],
    alternates: {
      canonical: `/examples/${speech.category}/${slug}`,
    },
    openGraph: {
      title: buildPageTitle(speech, category!),
      description: buildMetaDescription(speech, category!),
      type: 'article',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function SpeechPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const speech = getSpeechBySlug(slug);
  if (!speech || speech.category !== categorySlug) notFound();

  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  // Related speeches (same category, different speech)
  const relatedSpeeches = getSpeechesByCategory(categorySlug)
    .filter(s => s.slug !== slug)
    .slice(0, 3);

  const toneBadgeMap: Record<string, { label: string; className: string }> = {
    funny: { label: '😂 Funny', className: 'bg-amber-50 text-amber-700' },
    heartfelt: { label: '💝 Heartfelt', className: 'bg-pink-50 text-pink-700' },
    balanced: { label: '⚖️ Balanced', className: 'bg-blue-50 text-blue-700' },
    roast: { label: '🔥 Roast', className: 'bg-orange-50 text-orange-700' },
  };
  const badge = toneBadgeMap[speech.tone] || toneBadgeMap.balanced;

  // JSON-LD Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: speech.title,
    description: speech.excerpt,
    author: { '@type': 'Person', name: speech.authorName },
    publisher: { '@type': 'Organization', name: 'Nail The Speech' },
    url: `https://www.nailthespeech.com/examples/${categorySlug}/${slug}`,
    articleSection: category.name,
    wordCount: speech.wordCount,
  };

  // Split content into paragraphs for styling
  const paragraphs = speech.content.split('\n\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs + Header */}
      <section className="bg-white border-b border-[#e8e1d8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#756c64] mb-6 flex-wrap">
            <Link href="/examples" className="hover:text-[#b33c6c] transition-colors">
              Examples
            </Link>
            <span>/</span>
            <Link href={`/examples/${categorySlug}`} className="hover:text-[#b33c6c] transition-colors">
              {category.icon} {category.name}
            </Link>
            <span>/</span>
            <span className="text-[#181615] font-medium truncate">{speech.title}</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold text-[#181615] mb-4">
            {buildH1(speech, category)}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badge.className}`}>
              {badge.label}
            </span>
            <span className="text-sm text-[#756c64] flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {speech.durationMinutes} min read
            </span>
            <span className="text-sm text-[#756c64]">{speech.wordCount} words</span>
            <span className="text-sm text-[#756c64]">{speech.weddingRole}</span>
          </div>
        </div>
      </section>

      {/* Speech Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white border border-[#e8e1d8] rounded-xl p-6 sm:p-8 shadow-sm">
          {/* Copy button */}
          <div className="flex justify-end mb-4">
            <SpeechCopyButton text={speech.content} />
          </div>

          {/* Speech text */}
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-[#181615] leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-[#e8e1d8] flex items-center gap-2 flex-wrap">
            {speech.tags.map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#faf7f4] text-[#756c64] border border-[#e8e1d8]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Why this speech works */}
        <div>
          <h2 className="text-lg font-bold text-[#181615] mb-3">Why this speech works</h2>
          {getWhyItWorks(speech, category).split('\n\n').map((p, i) => (
            <p key={i} className="text-sm text-[#4a4543] leading-relaxed mb-3 last:mb-0">{p}</p>
          ))}
        </div>

        {/* How to adapt */}
        <div>
          <h2 className="text-lg font-bold text-[#181615] mb-3">How to make this your own</h2>
          <ul className="space-y-2">
            {getHowToAdapt(speech, category).map((tip, i) => (
              <li key={i} className="text-sm text-[#4a4543] leading-relaxed flex items-start gap-2">
                <span className="text-[#c44578] mt-0.5 flex-shrink-0">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery tips */}
        <div>
          <h2 className="text-lg font-bold text-[#181615] mb-3">Delivery tips</h2>
          <ul className="space-y-2">
            {getDeliveryTips(speech).map((tip, i) => (
              <li key={i} className="text-sm text-[#4a4543] leading-relaxed flex items-start gap-2">
                <span className="text-[#c44578] mt-0.5 flex-shrink-0">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft product bridge */}
        <div className="bg-[#faf7f4] border border-[#e8e1d8] rounded-lg p-5">
          <p className="text-sm text-[#4a4543] leading-relaxed">
            If you&apos;re not sure how to start your own version, it&apos;s often easier to <Link href="/generator" className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2">talk your speech out first</Link> and shape it into a structured version. You can also explore our <Link href="/advice/how-to-write-a-wedding-speech" className="text-[#c44578] hover:text-[#b33c6c] underline underline-offset-2">guide to writing a wedding speech</Link> for a step-by-step approach.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-[#c44578]/10 to-[#c44578]/5 border border-[#c44578]/20 rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-[#181615] mb-2">
            Ready to write yours?
          </h2>
          <p className="text-sm text-[#756c64] mb-4">
            Talk through your stories and let Nail The Speech turn them into a {category.name.toLowerCase()} that sounds like you.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 bg-[#c44578] hover:bg-[#c4477a] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Create Your Speech →
          </Link>
        </div>
      </section>

      {/* Related */}
      {relatedSpeeches.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          <h2 className="text-lg font-bold text-[#181615] mb-4">More {category.name} Examples</h2>
          <div className="space-y-3">
            {relatedSpeeches.map(s => (
              <Link
                key={s.slug}
                href={`/examples/${categorySlug}/${s.slug}`}
                className="block bg-white border border-[#e8e1d8] rounded-lg p-4 hover:border-[#b33c6c] transition-colors"
              >
                <h3 className="font-semibold text-[#181615] text-sm">{s.title}</h3>
                <p className="text-xs text-[#756c64] mt-1 line-clamp-1">{s.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
