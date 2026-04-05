export interface HelpScreenshot {
  subject: string;
  caption: string;
  annotation?: string;
}

export interface HelpSection {
  heading: string;
  level: 2 | 3;
  content: string;
  screenshotAfter?: HelpScreenshot;
}

export interface HelpInternalLink {
  href: string;
  label: string;
}

export interface HelpArticle {
  slug: string;
  title: string;
  category: HelpCategory;
  targetKeyword: string;
  metaDescription: string;
  shortAnswer: string;
  readingTime: number;
  sections: HelpSection[];
  internalLinks: HelpInternalLink[];
  ctaText: string;
  ctaHref: string;
  tags: string[];
}

export type HelpCategory =
  | "Getting Started"
  | "Editing & Refining"
  | "Speech Writing"
  | "Best Man"
  | "Maid of Honor"
  | "Delivery & Practice"
  | "Pricing";

export const helpCategories: {
  slug: string;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    slug: "getting-started",
    label: "Getting Started",
    description: "How the generator works, what to expect, and how to get your first speech.",
    icon: "🚀",
  },
  {
    slug: "editing-refining",
    label: "Editing & Refining",
    description: "Editing paragraphs, using AI refinements, regenerating, and making it yours.",
    icon: "✏️",
  },
  {
    slug: "speech-writing",
    label: "Speech Writing Basics",
    description: "Structure, openings, closings, humour, and what to avoid.",
    icon: "📝",
  },
  {
    slug: "best-man",
    label: "Best Man Speeches",
    description: "Length, tone, roasts, and how to nail the best man speech.",
    icon: "🤵",
  },
  {
    slug: "maid-of-honor",
    label: "Maid of Honor Speeches",
    description: "Timing, emotion, funny stories, and how to celebrate the bride.",
    icon: "👗",
  },
  {
    slug: "delivery-practice",
    label: "Delivery & Practice",
    description: "Nerves, practice tips, reading from notes, and sounding natural.",
    icon: "🎙️",
  },
];

export const helpArticles: HelpArticle[] = [
  // ─── GETTING STARTED ──────────────────────────────────────
  {
    slug: "how-nailthespeech-works",
    title: "How Nail The Speech Works",
    category: "Getting Started",
    targetKeyword: "how AI wedding speech generator works",
    metaDescription:
      "See how Nail The Speech turns your stories and memories into a personalised wedding speech in minutes. Step-by-step walkthrough.",
    shortAnswer:
      "You answer a few questions about the couple and your relationship, choose a tone and length, and our AI writes a complete speech draft. You can then edit any paragraph, refine with AI, and export to PDF, Word, or audio.",
    readingTime: 3,
    sections: [
      {
        heading: "Step 1 — Tell us about you and the couple",
        level: 2,
        content:
          "Start by selecting your role (best man, maid of honor, father of the bride, or any of our 44 supported roles). Then share a few details: the couple's names, how you know them, a favourite memory, and anything you'd like to mention.\n\nThis takes about two minutes. You don't need to be a writer — just answer naturally. The more specific you are, the more personal the result.",
        screenshotAfter: {
          subject: "Generator input form",
          caption:
            "The guided questionnaire — share your stories and details in your own words.",
          annotation:
            "Show the role selector and story input fields with example text filled in.",
        },
      },
      {
        heading: "Step 2 — Choose your tone and length",
        level: 2,
        content:
          "Pick from 14 tone options — heartfelt, funny, clean roast, nostalgic, sentimental, balanced, and more. You can also set the speech length anywhere from 1 to 10 minutes.\n\nThe tone shapes the language, humour level, and emotional arc of your speech. If you're not sure, start with \"balanced\" and adjust later.",
      },
      {
        heading: "Step 3 — Get your speech",
        level: 2,
        content:
          "The AI generates a complete, structured speech in seconds. You'll see it organised into clear paragraphs — opening, stories, compliments to the couple, and a closing toast.\n\nFrom here you can edit any paragraph directly, use AI refinements to adjust sections, listen with text-to-speech, or export to PDF, Word, or MP3.",
        screenshotAfter: {
          subject: "Generated speech output",
          caption:
            "A complete, structured speech ready to edit, refine, or export.",
          annotation:
            "Show the full speech output with the editing toolbar and export buttons visible.",
        },
      },
      {
        heading: "What happens next",
        level: 2,
        content:
          "Most people spend 10–20 minutes personalising their speech after generation. You might swap out a phrase, add an inside joke, or use the AI to make a section funnier or shorter.\n\nWhen you're happy, export it however you need — PDF for printing, Word for further editing, plain text for your phone, or MP3 to practise listening back.",
      },
    ],
    internalLinks: [
      { href: "/generator", label: "Try the speech generator" },
      { href: "/help/can-i-edit-my-speech-after-generation", label: "How editing works" },
      { href: "/best-ai-speech-generator", label: "Compare AI speech generators" },
      { href: "/advice/how-to-write-a-wedding-speech", label: "How to write a wedding speech" },
    ],
    ctaText: "Ready to try it?",
    ctaHref: "/generator",
    tags: ["getting started", "how it works", "AI speech generator", "walkthrough"],
  },
  {
    slug: "can-i-edit-my-speech-after-generation",
    title: "Can I Edit My Speech After Generation?",
    category: "Editing & Refining",
    targetKeyword: "edit AI generated wedding speech",
    metaDescription:
      "Yes — click any paragraph to edit it directly, use AI refinements, or regenerate sections. Full control over every word.",
    shortAnswer:
      "Yes. Pro users can click any paragraph to edit it directly in the app. You can also use AI-powered refinements to adjust tone, length, or detail on specific sections — or regenerate the whole speech with new instructions.",
    readingTime: 3,
    sections: [
      {
        heading: "Direct paragraph editing",
        level: 2,
        content:
          "Click any paragraph in your speech to edit it. Type your own words, fix a name, add a personal detail, or rewrite a section entirely. Your edits are saved automatically.\n\nThis is the fastest way to add those small personal touches that make a speech feel like you wrote every word.",
        screenshotAfter: {
          subject: "Inline editing experience",
          caption:
            "Click any paragraph to edit it directly — your changes are highlighted and preserved.",
          annotation:
            "Show a paragraph in edit mode with the cursor active and user-edited text visible.",
        },
      },
      {
        heading: "AI refinements",
        level: 2,
        content:
          "Don't want to rewrite from scratch? Use the quick refinement prompts to adjust a section with one click:\n\n- Make it shorter\n- Make it longer\n- Make it funnier\n- Make it more heartfelt\n- Add more detail\n\nYou can also type a custom instruction like \"mention the time we went camping\" and the AI will rework that section.",
      },
      {
        heading: "Regenerating the full speech",
        level: 2,
        content:
          "If you want a completely fresh take, you can regenerate the entire speech. Add new instructions or change the tone, and the AI will produce a new draft.\n\nWhen you regenerate, any paragraphs you've personally edited are preserved — the AI only rewrites the parts it generated. This means your personal touches survive even when you ask for a fresh version.",
        screenshotAfter: {
          subject: "Regenerate / refine controls",
          caption:
            "Regenerate with new instructions while preserving your edits.",
          annotation:
            "Show the refinement panel with preset prompts and the custom instruction input.",
        },
      },
      {
        heading: "Version history",
        level: 2,
        content:
          "Every change creates a new version. You can step back through your version history at any time — so there's no risk to experimenting. Try a different tone, undo it if you don't like it, and keep going.",
      },
    ],
    internalLinks: [
      { href: "/help/what-happens-when-i-regenerate-a-speech", label: "What happens when you regenerate" },
      { href: "/help/how-nailthespeech-works", label: "How the generator works" },
      { href: "/generator", label: "Try the speech generator" },
      { href: "/advice/how-to-personalise-an-ai-wedding-speech", label: "Tips for personalising your speech" },
    ],
    ctaText: "Write your speech and make it yours",
    ctaHref: "/generator",
    tags: ["editing", "AI refinements", "version history", "personalisation"],
  },
  {
    slug: "can-ai-write-a-speech-that-sounds-like-me",
    title: "Can AI Write a Speech That Sounds Like Me?",
    category: "Getting Started",
    targetKeyword: "does AI wedding speech sound natural",
    metaDescription:
      "AI speeches sound like you because they use your real stories, names, and details. Here's how Nail The Speech avoids generic AI phrasing.",
    shortAnswer:
      "Yes — because the speech is built from your specific stories, names, and memories. It doesn't use generic templates. The more detail you share in the questionnaire, the more personal and natural the result sounds.",
    readingTime: 3,
    sections: [
      {
        heading: "Your details are the foundation",
        level: 2,
        content:
          "The speech isn't pulled from a library of templates. It's generated fresh from what you tell us — the couple's names, how you met, your favourite memory, the little details that only you know.\n\nThat's what makes it sound like you, not a chatbot. A story about burning dinner at a caravan in Wales is never going to sound generic.",
      },
      {
        heading: "Tone matching",
        level: 2,
        content:
          "You choose the tone before generation. If you pick \"funny\", the speech leans into humour. If you pick \"heartfelt\", it leans into genuine emotion. If you pick \"clean roast\", it finds the sweet spot between teasing and affection.\n\nThis isn't just a label — it shapes the vocabulary, sentence structure, and emotional arc of the whole speech.",
      },
      {
        heading: "It's a starting point, not a finished product",
        level: 2,
        content:
          "The best AI-generated speeches are the ones people edit. Swap out a word, add an inside joke, tweak the closing line. A few small changes are all it takes to make it unmistakably yours.\n\nThat's why we built direct paragraph editing into the app — so you can adjust anything without starting over.",
      },
      {
        heading: "How it compares to ChatGPT",
        level: 2,
        content:
          "A general chatbot like ChatGPT has no understanding of wedding speech structure, timing, or tone. It will give you something that reads like an essay, not something you'd deliver at a wedding.\n\nNail The Speech is purpose-built for speeches. It knows how openings, stories, transitions, and toasts should flow. It knows what works at 3 minutes versus 7. It's the difference between a tool built for the job and a tool that can do a bit of everything.",
      },
    ],
    internalLinks: [
      { href: "/help/why-use-nailthespeech-instead-of-chatgpt", label: "NailTheSpeech vs ChatGPT" },
      { href: "/help/can-i-edit-my-speech-after-generation", label: "How to edit and personalise" },
      { href: "/generator", label: "Try the generator" },
      { href: "/examples", label: "Browse example speeches" },
    ],
    ctaText: "See for yourself — try it with your own stories",
    ctaHref: "/generator",
    tags: ["AI quality", "personalisation", "natural sounding", "tone"],
  },
  {
    slug: "why-use-nailthespeech-instead-of-chatgpt",
    title: "Why Use Nail The Speech Instead of ChatGPT?",
    category: "Getting Started",
    targetKeyword: "wedding speech generator vs ChatGPT",
    metaDescription:
      "ChatGPT is a general chatbot. Nail The Speech is purpose-built for wedding speeches — with structure, tone control, editing, and export.",
    shortAnswer:
      "ChatGPT can generate text, but it doesn't understand wedding speech structure, timing, or delivery. Nail The Speech is built specifically for speeches — with guided input, tone control, inline editing, version history, and export to PDF, Word, or audio.",
    readingTime: 3,
    sections: [
      {
        heading: "Structure matters",
        level: 2,
        content:
          "A good wedding speech has a specific flow: a warm opening, personal stories, a tribute to the couple, and a closing toast. ChatGPT doesn't know this structure unless you engineer the prompt yourself.\n\nNail The Speech handles the structure automatically. You share your stories, and the AI organises them into a speech that flows naturally from start to finish.",
        screenshotAfter: {
          subject: "Structured speech workflow",
          caption:
            "Purpose-built speech structure — not a blank chatbot prompt.",
          annotation:
            "Show the generated speech with clear paragraph structure: opening, stories, tribute, toast.",
        },
      },
      {
        heading: "Tone control you can trust",
        level: 2,
        content:
          "Telling ChatGPT to \"be funny\" is a gamble. Sometimes you get cringe. With Nail The Speech, you choose from 14 tested tones — funny, heartfelt, clean roast, nostalgic, and more. Each one is calibrated for wedding speech delivery.",
      },
      {
        heading: "Real editing tools",
        level: 2,
        content:
          "ChatGPT gives you a wall of text. If you want to change one paragraph, you have to re-prompt the whole thing and hope the rest stays the same.\n\nWith Nail The Speech, you click a paragraph and edit it. Use AI refinements on a single section. Preserve your personal edits when you regenerate. Track versions so you never lose a draft you liked.",
      },
      {
        heading: "Export and practice",
        level: 2,
        content:
          "ChatGPT gives you text in a chat window. Nail The Speech exports to PDF (for printing), Word (for further editing), plain text (for your phone), and MP3 audio (for practising delivery).\n\nYou can also use the built-in text-to-speech to hear your speech read aloud — helpful for catching awkward phrasing and timing your delivery.",
      },
      {
        heading: "Built for this one job",
        level: 2,
        content:
          "ChatGPT is a general-purpose tool. It writes emails, code, essays, and tweets. Nail The Speech does one thing: help you write and deliver a great wedding speech. Every feature — from the questionnaire to the export options — is designed for that single purpose.\n\nThat focus is why the output is better.",
      },
    ],
    internalLinks: [
      { href: "/best-ai-speech-generator", label: "Compare all AI speech generators" },
      { href: "/help/how-nailthespeech-works", label: "How Nail The Speech works" },
      { href: "/generator", label: "Try the generator" },
      { href: "/advice/can-ai-write-a-good-wedding-speech", label: "Can AI write a good wedding speech?" },
    ],
    ctaText: "Try the purpose-built approach",
    ctaHref: "/generator",
    tags: ["ChatGPT", "comparison", "AI speech generator", "wedding speech tool"],
  },
  {
    slug: "what-happens-when-i-regenerate-a-speech",
    title: "What Happens When I Regenerate a Speech?",
    category: "Editing & Refining",
    targetKeyword: "regenerate AI wedding speech",
    metaDescription:
      "When you regenerate, the AI writes a fresh draft while preserving any paragraphs you've personally edited. Your changes are never lost.",
    shortAnswer:
      "The AI generates a completely fresh speech based on your original details and any new instructions you provide. Paragraphs you've personally edited are preserved — the AI only rewrites the sections it generated.",
    readingTime: 2,
    sections: [
      {
        heading: "Fresh draft, same details",
        level: 2,
        content:
          "Regeneration creates a new speech from your original questionnaire answers. If you've added new instructions (like \"make it funnier\" or \"mention the dog\"), those are included too.\n\nEach regeneration produces a genuinely different speech — not just a reshuffled version of the same text.",
      },
      {
        heading: "Your edits are preserved",
        level: 2,
        content:
          "If you've edited any paragraphs directly — adding personal touches, inside jokes, or rewriting a section — those changes are preserved during regeneration. The AI only replaces the paragraphs it wrote.\n\nThis means you can experiment freely. Regenerate for a different opening, keep the closing you already perfected, and build your speech iteratively.",
        screenshotAfter: {
          subject: "Preserved user edits after refinement",
          caption:
            "User-edited paragraphs are preserved when the AI regenerates the rest.",
          annotation:
            "Show a speech where some paragraphs have the user-edit indicator and others have been freshly regenerated.",
        },
      },
      {
        heading: "Version history has your back",
        level: 2,
        content:
          "Every regeneration creates a new version. If you prefer the previous draft, you can step back to it with one click. There's no risk to trying a new approach — you can always go back.",
      },
    ],
    internalLinks: [
      { href: "/help/can-i-edit-my-speech-after-generation", label: "How to edit your speech" },
      { href: "/help/how-nailthespeech-works", label: "How the generator works" },
      { href: "/generator", label: "Try the speech generator" },
    ],
    ctaText: "Generate your first speech",
    ctaHref: "/generator",
    tags: ["regeneration", "editing", "version history", "AI refinements"],
  },

  // ─── SPEECH WRITING ────────────────────────────────────────
  {
    slug: "how-long-should-a-best-man-speech-be",
    title: "How Long Should a Best Man Speech Be?",
    category: "Best Man",
    targetKeyword: "best man speech length",
    metaDescription:
      "A best man speech should be 3 to 5 minutes (400–700 words). Here's how to get the length right and keep the room engaged.",
    shortAnswer:
      "Aim for 3 to 5 minutes — roughly 400 to 700 words. That's long enough to tell a great story and raise a proper toast, short enough to keep everyone's attention before dessert arrives.",
    readingTime: 3,
    sections: [
      {
        heading: "The sweet spot: 3 to 5 minutes",
        level: 2,
        content:
          "Wedding coordinators, experienced speakers, and the guests who've sat through too-long speeches all agree: 3 to 5 minutes is ideal for a best man speech.\n\nAt 3 minutes, you have time for a quick introduction, one strong story, a compliment to the couple, and a toast. At 5 minutes, you can fit two stories and a more detailed tribute. Beyond 5 minutes, you're competing with the open bar.",
      },
      {
        heading: "Word count as a guide",
        level: 2,
        content:
          "Most people speak at roughly 130–150 words per minute. That means:\n\n- **3 minutes:** ~400–450 words\n- **4 minutes:** ~530–600 words\n- **5 minutes:** ~650–750 words\n\nNail The Speech lets you set your preferred length before generation, so the AI structures the speech to fit your timing naturally — no cutting or padding needed.",
      },
      {
        heading: "Why shorter is usually better",
        level: 2,
        content:
          "A tight, well-structured 3-minute speech will get a better reaction than a rambling 8-minute one. The audience remembers how you made them feel, not how many stories you told.\n\nIf you have a lot to say, pick your two strongest stories and save the rest for the dance floor.",
      },
      {
        heading: "How to check your timing",
        level: 2,
        content:
          "Read your speech aloud at a natural pace. Time it. Then add 10–15 seconds for laughs and pauses. If it's running long, use the \"make it shorter\" refinement in Nail The Speech to tighten it up without losing the good parts.",
      },
    ],
    internalLinks: [
      { href: "/best-man-ai-speech-generator", label: "Best man speech generator" },
      { href: "/generator?role=best-man", label: "Generate a best man speech" },
      { href: "/examples/best-man-speech", label: "Best man speech examples" },
      { href: "/advice/best-man-speech-length-guide", label: "Detailed length guide" },
    ],
    ctaText: "Generate a best man speech at the perfect length",
    ctaHref: "/generator?role=best-man",
    tags: ["best man", "speech length", "timing", "word count"],
  },
  {
    slug: "how-long-should-a-maid-of-honor-speech-be",
    title: "How Long Should a Maid of Honor Speech Be?",
    category: "Maid of Honor",
    targetKeyword: "maid of honor speech length",
    metaDescription:
      "A maid of honor speech should be 3 to 5 minutes (400–700 words). Tips on timing, structure, and keeping the emotion just right.",
    shortAnswer:
      "3 to 5 minutes is ideal — around 400 to 700 words. Long enough to share a meaningful story and celebrate the bride, short enough to keep the room with you from start to finish.",
    readingTime: 3,
    sections: [
      {
        heading: "3 to 5 minutes is the sweet spot",
        level: 2,
        content:
          "A maid of honor speech has the same timing goal as a best man speech: 3 to 5 minutes. That gives you room for an opening, a personal story about the bride, a warm word about the couple, and a toast.\n\nIf you're worried about crying (it happens), factor in a few seconds of pause. The audience will wait — they're rooting for you.",
      },
      {
        heading: "Structuring for the right length",
        level: 2,
        content:
          "A common structure that works well at 4 minutes:\n\n1. Introduction — who you are and how you know the bride (30 seconds)\n2. A story that shows who the bride is (60–90 seconds)\n3. How you feel about her partner (30–60 seconds)\n4. A message to the couple and a toast (30–60 seconds)\n\nNail The Speech builds this structure automatically when you select your role and preferred length.",
      },
      {
        heading: "When to go longer",
        level: 2,
        content:
          "If you're the only person giving a speech (not uncommon at smaller weddings), you might go to 6 or 7 minutes. In that case, you have room for two stories instead of one, and a longer tribute to the couple.\n\nOur generator supports speeches up to 10 minutes, but for most maid of honor speeches, less is more.",
      },
    ],
    internalLinks: [
      { href: "/maid-of-honor-ai-speech-generator", label: "Maid of honor speech generator" },
      { href: "/generator?role=maid-of-honor", label: "Generate a maid of honor speech" },
      { href: "/examples/maid-of-honor-speech", label: "Maid of honor speech examples" },
      { href: "/advice/maid-of-honor-speech-length-guide", label: "Detailed length guide" },
    ],
    ctaText: "Generate a maid of honor speech at the perfect length",
    ctaHref: "/generator?role=maid-of-honor",
    tags: ["maid of honor", "speech length", "timing", "structure"],
  },
  {
    slug: "what-not-to-say-in-a-wedding-speech",
    title: "What Should You Not Say in a Wedding Speech?",
    category: "Speech Writing",
    targetKeyword: "what not to say in a wedding speech",
    metaDescription:
      "Avoid ex-partners, embarrassing stories, inside jokes nobody gets, and backhanded compliments. Here's the full list of wedding speech mistakes to avoid.",
    shortAnswer:
      "Avoid mentioning ex-partners, telling stories that embarrass more than they entertain, making inside jokes the room won't get, and anything that makes the speech about you instead of the couple.",
    readingTime: 3,
    sections: [
      {
        heading: "The big no-go topics",
        level: 2,
        content:
          "Some things seem obvious in hindsight but come up surprisingly often:\n\n- **Ex-partners.** Never mention them. Not even as a joke. Not even \"we all knew they weren't the one.\"\n- **Stag or hen night stories.** What happened there should stay there.\n- **Embarrassing stories the subject hasn't approved.** If in doubt, ask them first.\n- **Anything about the cost of the wedding.** Just don't.\n- **Divorce statistics.** Not funny. Not clever. Not welcome.",
      },
      {
        heading: "Subtler mistakes",
        level: 2,
        content:
          "These are the ones that don't seem wrong until you're halfway through:\n\n- **Inside jokes with no context.** If fewer than half the room will understand it, cut it or set it up properly.\n- **Making the speech about yourself.** You're the messenger, not the main character.\n- **Backhanded compliments.** \"I never thought he'd settle down\" isn't as charming as it sounds.\n- **Going on too long.** The room's goodwill has a timer. Respect it.\n- **Reading the room wrong.** A clean roast works with some crowds, not all. Know your audience.",
      },
      {
        heading: "How to test your speech",
        level: 2,
        content:
          "Read it to someone who knows the couple but isn't in the wedding party. If they wince at any point, cut that part. The \"would I say this if the couple's grandparents were listening\" test catches most problems.\n\nNail The Speech is calibrated to avoid these pitfalls — but it's always worth a final read-through with fresh eyes.",
      },
    ],
    internalLinks: [
      { href: "/help/how-to-make-a-wedding-speech-funny", label: "How to be funny without overdoing it" },
      { href: "/help/how-to-end-a-wedding-speech", label: "How to end a wedding speech" },
      { href: "/generator", label: "Generate a speech" },
      { href: "/advice/wedding-speech-mistakes-to-avoid", label: "Full guide to speech mistakes" },
    ],
    ctaText: "Generate a speech that hits the right notes",
    ctaHref: "/generator",
    tags: ["wedding speech mistakes", "what to avoid", "speech etiquette", "tips"],
  },
  {
    slug: "how-to-make-a-wedding-speech-funny",
    title: "How to Make a Wedding Speech Funny Without Overdoing It",
    category: "Speech Writing",
    targetKeyword: "funny wedding speech tips",
    metaDescription:
      "Get laughs without cringe. Practical tips for adding humour to a wedding speech — from storytelling to timing to knowing when to stop.",
    shortAnswer:
      "The best wedding speech humour comes from real stories, not rehearsed jokes. Pick a genuine moment that's naturally funny, tell it simply, and move on before you oversell it. One good laugh beats five forced ones.",
    readingTime: 3,
    sections: [
      {
        heading: "Stories are funnier than jokes",
        level: 2,
        content:
          "Stand-up comedians write jokes. You're not a stand-up comedian (probably). What you are is someone with real stories about the couple — and real stories told well are genuinely funnier than setup-punchline jokes in a wedding speech.\n\nThe funniest moments at weddings are always specific. \"Remember when James tried to cook Christmas dinner and set off every smoke alarm in the building\" lands because it's real and visual. Generic jokes about marriage don't land because everyone's heard them.",
      },
      {
        heading: "The rule of one",
        level: 2,
        content:
          "One well-told funny story is worth more than five quick gags. Pick your best one and give it room to breathe. Set the scene, build the detail, let the room picture it, and deliver the payoff.\n\nIf you try to pack in too much humour, the speech turns into a roast — which is fun at a stag do, risky at a wedding.",
      },
      {
        heading: "Know when to pivot",
        level: 2,
        content:
          "The most effective pattern in wedding speeches is funny-then-sincere. Get the room laughing with a story, then follow it with something genuinely warm about the person or the couple.\n\nThis contrast is what makes people tear up after laughing — it's the emotional range that makes a speech memorable.\n\nNail The Speech supports this pattern with tone options like \"balanced\" (warm with humour) and \"clean roast\" (playful but affectionate). You can also mix tones by editing individual paragraphs.",
      },
      {
        heading: "What to avoid",
        level: 2,
        content:
          "- Jokes that only work if you're already laughing (inside jokes with no setup)\n- Humour at someone's expense who hasn't agreed to it\n- Self-deprecating humour that goes on too long (one line is endearing, three is uncomfortable)\n- Anything that requires the preamble \"I probably shouldn't say this, but...\"",
      },
    ],
    internalLinks: [
      { href: "/help/what-not-to-say-in-a-wedding-speech", label: "What to avoid in a wedding speech" },
      { href: "/help/how-long-should-a-best-man-speech-be", label: "Best man speech length" },
      { href: "/generator", label: "Generate a speech with the right tone" },
      { href: "/advice/how-to-add-humour-to-a-wedding-speech", label: "Full humour guide" },
    ],
    ctaText: "Create a funny speech that actually lands",
    ctaHref: "/generator",
    tags: ["funny speech", "humour", "wedding speech tips", "tone"],
  },
  {
    slug: "how-to-end-a-wedding-speech",
    title: "How to End a Wedding Speech",
    category: "Speech Writing",
    targetKeyword: "how to end a wedding speech",
    metaDescription:
      "End your wedding speech with a toast, a heartfelt wish, or a callback to your story. Simple, proven closing strategies that work.",
    shortAnswer:
      "End with a toast to the couple. The simplest and most effective close is: finish your last thought, invite the room to raise their glasses, say something warm and specific about the couple's future, and say \"to [their names].\"",
    readingTime: 2,
    sections: [
      {
        heading: "The classic toast",
        level: 2,
        content:
          "The reason most speeches end with a toast is that it gives the room a clear signal: the speech is over, and here's what to do next. No awkward silence, no trailing off.\n\nA strong toast is short and specific. \"To Sarah and James — may your life together be as full of laughter as your kitchen is full of smoke alarms\" works because it's personal. \"To love and happiness\" works but is forgettable.",
      },
      {
        heading: "The callback close",
        level: 2,
        content:
          "If you told a story earlier in the speech, reference it at the end. This creates a satisfying loop that makes the whole speech feel intentional.\n\nFor example, if your story was about the groom being terrible at directions, your close might be: \"James, you've never been great at finding your way — but with Sarah, I think you've finally ended up exactly where you're supposed to be.\"",
      },
      {
        heading: "The heartfelt wish",
        level: 2,
        content:
          "If a toast feels too formal for your style, end with a genuine wish. Look at the couple, say what you hope for them, and sit down. No grand performance needed.\n\n\"I'm so proud of you both. Here's to everything that comes next.\" Simple. Sincere. Done.",
      },
      {
        heading: "What not to do",
        level: 2,
        content:
          "- Don't end with \"and that's it\" or \"I think that's everything\" — it deflates the moment.\n- Don't end with a joke unless you're very confident it will land.\n- Don't end with a long quote from the internet. The room came to hear from you.\n- Don't forget to actually raise your glass. It cues the audience.",
      },
    ],
    internalLinks: [
      { href: "/help/how-to-start-a-wedding-speech", label: "How to start a wedding speech" },
      { href: "/help/what-not-to-say-in-a-wedding-speech", label: "What to avoid in a speech" },
      { href: "/generator", label: "Generate a speech with a strong ending" },
      { href: "/advice/how-to-end-a-wedding-speech", label: "Full guide to speech endings" },
    ],
    ctaText: "Generate a speech with a perfect closing",
    ctaHref: "/generator",
    tags: ["speech ending", "toast", "closing", "wedding speech structure"],
  },
  {
    slug: "how-to-start-a-wedding-speech",
    title: "How to Start a Wedding Speech",
    category: "Speech Writing",
    targetKeyword: "how to start a wedding speech",
    metaDescription:
      "Skip the clichés. Start with a story, a warm observation, or a simple thank you. Practical opening strategies for any wedding role.",
    shortAnswer:
      "Start by saying who you are, how you know the couple, and then go straight into your first story or observation. Skip the dictionary definitions and generic quotes. The room already wants to hear from you — just begin.",
    readingTime: 3,
    sections: [
      {
        heading: "Keep the introduction short",
        level: 2,
        content:
          "\"Hi, I'm Alex, and I've been James's best friend since university\" — that's all you need. The MC has already introduced you. The room knows why you're standing up. Get through the preamble quickly so you can get to the good stuff.",
      },
      {
        heading: "Three openings that work",
        level: 2,
        content:
          "**Start with a story.** Jump straight into a specific moment: \"The first time I met Sarah, she was arguing with a vending machine in the office kitchen.\" This hooks the room immediately.\n\n**Start with an observation.** Something warm and true: \"I've known James for twenty years, and I've never seen him smile the way he does when Sarah walks into a room.\"\n\n**Start with a thank you.** Brief and genuine: \"Thank you for trusting me with this. It means more than you know.\" Then move on.",
      },
      {
        heading: "What to avoid at the start",
        level: 2,
        content:
          "- \"Webster's dictionary defines marriage as...\" — please don't.\n- \"I'm not very good at public speaking\" — the room doesn't need to know you're nervous. You'll be fine.\n- Long preambles thanking every person in the room individually.\n- Reading a quote from the internet that you found this morning.\n\nThe first 30 seconds set the tone. Make them count by being yourself, not performing.",
      },
      {
        heading: "How Nail The Speech handles openings",
        level: 2,
        content:
          "When you generate a speech, the AI creates an opening based on your role and the details you shared. If you don't love it, you can edit it directly or use the regenerate option to try a different approach.\n\nMany users generate the speech, then spend a minute or two tweaking just the opening — because getting the start right makes the rest feel easy.",
      },
    ],
    internalLinks: [
      { href: "/help/how-to-end-a-wedding-speech", label: "How to end a wedding speech" },
      { href: "/help/how-to-make-a-wedding-speech-funny", label: "How to add humour" },
      { href: "/generator", label: "Generate a speech with a strong opening" },
      { href: "/advice/how-to-start-a-wedding-speech", label: "Full guide to opening lines" },
    ],
    ctaText: "Generate a speech that starts strong",
    ctaHref: "/generator",
    tags: ["speech opening", "introduction", "first lines", "wedding speech structure"],
  },
  {
    slug: "what-if-i-hate-public-speaking",
    title: "What If I Hate Public Speaking?",
    category: "Delivery & Practice",
    targetKeyword: "nervous about wedding speech",
    metaDescription:
      "You don't need to be a confident speaker to give a great wedding speech. Practical tips for managing nerves and delivering with heart.",
    shortAnswer:
      "Most people giving a wedding speech are nervous — that's completely normal. The audience is on your side, the bar for \"great\" is lower than you think, and preparation is the single best cure for nerves. You don't need to perform. You just need to be genuine.",
    readingTime: 3,
    sections: [
      {
        heading: "The audience wants you to succeed",
        level: 2,
        content:
          "This is the most important thing to remember: the people in that room are rooting for you. They're not critics. They're wedding guests who've had champagne and are feeling sentimental. A sincere, slightly shaky speech gets a standing ovation at a wedding.\n\nYou don't need to be polished. You need to be real.",
      },
      {
        heading: "Preparation beats confidence",
        level: 2,
        content:
          "Nervous speakers who prepare well consistently outperform confident speakers who wing it. Here's a simple preparation routine:\n\n1. Have your speech written and finalised at least a week before\n2. Read it aloud five times (not in your head — aloud)\n3. Time yourself at least twice\n4. Practise in front of one person you trust\n5. On the day, read from notes — nobody expects you to memorise it",
      },
      {
        heading: "Keep it short",
        level: 2,
        content:
          "The less comfortable you are speaking, the shorter your speech should be. A heartfelt 2-minute speech is better than a nervous 6-minute one. Set the generator to a shorter length, and you'll have fewer words to worry about.\n\nNobody has ever complained that a wedding speech was too short.",
      },
      {
        heading: "Use tools that reduce the pressure",
        level: 2,
        content:
          "Nail The Speech can help in a few practical ways:\n\n- **Voice input:** Talk through your stories instead of typing — it's more natural and less intimidating.\n- **Text-to-speech:** Listen to your speech read aloud so you can hear the rhythm before you deliver it.\n- **MP3 export:** Download the audio and listen on repeat to build familiarity.\n- **PDF export:** Print it in a format that's easy to read from a podium or cue cards.\n\nPreparation tools exist so you don't have to rely on confidence alone.",
      },
    ],
    internalLinks: [
      { href: "/help/how-to-start-a-wedding-speech", label: "How to start a wedding speech" },
      { href: "/generator", label: "Generate a speech at your preferred length" },
      { href: "/advice/how-to-calm-nerves-before-a-wedding-speech", label: "Full guide to managing nerves" },
      { href: "/advice/how-to-practise-a-wedding-speech", label: "Practice tips" },
    ],
    ctaText: "Write your speech and start practising early",
    ctaHref: "/generator",
    tags: ["public speaking", "nerves", "anxiety", "delivery", "practice"],
  },
];

// ── Helpers ──────────────────────────────────────────────────

export function getHelpArticleBySlug(slug: string): HelpArticle | undefined {
  return helpArticles.find((a) => a.slug === slug);
}

export function getHelpArticlesByCategory(category: HelpCategory): HelpArticle[] {
  return helpArticles.filter((a) => a.category === category);
}

export function getAllHelpSlugs(): string[] {
  return helpArticles.map((a) => a.slug);
}
