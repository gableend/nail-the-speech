export interface FAQItem {
  question: string;
  answer: string;
}

// ── Homepage FAQs ───────────────────────────────────────────
export const faqs: FAQItem[] = [
  {
    question: "How does Nail The Speech work?",
    answer:
      "You tell us about your role, the couple, and your favourite memories together. Our AI uses those personal details to craft a speech that sounds like you, not a robot. You get a full draft in seconds, ready to refine and make your own.",
  },
  {
    question: "Is my first speech really free?",
    answer:
      "Yes. You can generate one complete speech at no cost, no credit card required. If you want to regenerate, edit, or create additional speeches, you can upgrade to Pro.",
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
      "You choose. We offer short (1-2 minutes), medium (3-4 minutes), and long (5+ minutes) options. Most people go with medium: long enough to say something meaningful, short enough to keep the crowd engaged.",
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
      "Once your speech is finalised, export it to PDF or copy the text. Read it aloud a few times. Most people find 3-5 practice runs is enough to feel confident. Time yourself to make sure you're within your target length.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your stories and personal details are used only to generate your speech. We don't share your data with third parties or use it to train AI models.",
  },
];

// ── Generator page FAQs ─────────────────────────────────────
export const generatorFaqs: FAQItem[] = [
  {
    question: "How long does it take to generate a speech?",
    answer:
      "About 30 seconds. You answer a few quick questions about your role, the couple, and a story or memory, and the AI builds a full draft in real time. Most people have a complete speech within 2-3 minutes including their inputs.",
  },
  {
    question: "Do I need to know what I want to say before I start?",
    answer:
      "Not at all. The generator walks you through step by step. Even if you have no idea where to begin, the prompts and examples will help you surface the right stories and memories. That's kind of the whole point.",
  },
  {
    question: "Can I choose the tone of my speech?",
    answer:
      "Yes. You can pick from 14 different tones including light and funny, sentimental, balanced, clean roast, nostalgic, inspirational, and more. Pick the one that matches how you actually talk.",
  },
  {
    question: "What if I don't like the speech it generates?",
    answer:
      "Pro users can regenerate as many times as they like, tweak individual sections, or edit the text directly. Your first generation is free, so you can try it risk-free before deciding.",
  },
  {
    question: "Will it sound like me or like a robot?",
    answer:
      "The speech is built around your real stories and the details you provide. The more specific you are with your inputs, the more personal and authentic the output. Nobody will know you had help unless you tell them.",
  },
  {
    question: "What roles does the generator support?",
    answer:
      "Over 40 roles including Best Man, Maid of Honour, Father of the Bride, Mother of the Groom, siblings, grandparents, step-parents, in-laws, friends, and more. If your role isn't listed, there's a custom option where you can describe it.",
  },
  {
    question: "Is my first speech really free?",
    answer:
      "Yes. One full speech, no credit card required. If you want unlimited regenerations, editing tools, and export options, you can upgrade to Pro.",
  },
  {
    question: "Can I save my speech and come back to it later?",
    answer:
      "Yes. Your speech is saved to your account automatically. Come back any time to review, edit, or regenerate it. Pro users also get version history so you can compare drafts.",
  },
];

// ── Examples page FAQs ──────────────────────────────────────
export const examplesFaqs: FAQItem[] = [
  {
    question: "Are these real wedding speeches?",
    answer:
      "They're curated examples based on real wedding speech styles and structures. Names and places have been changed for privacy, but the tone, pacing, and emotional beats reflect genuine speeches that have been delivered at weddings.",
  },
  {
    question: "Can I copy one of these speeches word for word?",
    answer:
      "You could, but we wouldn't recommend it. The best speeches are personal. Use these as inspiration for structure, tone, and pacing, then add your own stories and details. Or use our generator to create something tailored to you from scratch.",
  },
  {
    question: "How do I find the right example for my role?",
    answer:
      "Use the filters at the top of the page to narrow by speech type, role, or tone. We have examples for over 60 categories including Best Man, Maid of Honour, Father of the Bride, step-parents, siblings, friends, and more.",
  },
  {
    question: "What's the ideal length for a wedding speech?",
    answer:
      "Most great speeches land between 3-5 minutes, which is roughly 400-650 words. Short enough to keep people engaged, long enough to say something meaningful. Our examples range from quick 1-minute toasts to longer 5+ minute speeches.",
  },
  {
    question: "Do you have funny speech examples?",
    answer:
      "Plenty. You can filter by tone to find funny, heartfelt, balanced, or roast-style speeches. We also have a dedicated Funny Wedding Speech category and a Roast Wedding Speech category if you want to bring the laughs.",
  },
  {
    question: "What if my role isn't listed?",
    answer:
      "We cover over 60 speech types from traditional roles to less common ones like twin sibling, military buddy, travel buddy, and cultural wedding speeches. If you still can't find yours, our generator has a custom role option.",
  },
  {
    question: "Can I use these examples to help write my own speech?",
    answer:
      "Absolutely. That's what they're here for. Read a few examples in your category, notice which openings, stories, and endings resonate with you, then use our speech generator to create something personal using your own details.",
  },
];

// ── Advice page FAQs ────────────────────────────────────────
export const adviceFaqs: FAQItem[] = [
  {
    question: "How far in advance should I start writing my speech?",
    answer:
      "At least 2-3 weeks before the wedding. This gives you time to write a first draft, sit with it, edit, and practice out loud a few times. Leaving it to the night before is the single most common regret people have.",
  },
  {
    question: "What's the best structure for a wedding speech?",
    answer:
      "Most great speeches follow a simple 5-part structure: a strong opening line, a brief introduction of who you are, 1-2 personal stories, an emotional pivot where you speak to the couple directly, and a toast to close. Our guides break each part down in detail.",
  },
  {
    question: "How do I deal with nerves before speaking?",
    answer:
      "Practice out loud at least 3-5 times. Practice in front of a mirror, then with a friend. Know your opening line cold so you can start confidently. Take a breath before you begin. And remember, the audience is on your side. They want you to do well.",
  },
  {
    question: "Is it OK to read from notes?",
    answer:
      "Yes. Most people do. Printed notes or index cards are better than a phone screen, which can look like you're texting. The key is to practice enough that you're looking up regularly, not reading word for word with your head down the whole time.",
  },
  {
    question: "What should I absolutely avoid in a wedding speech?",
    answer:
      "Inside jokes nobody else gets, mentioning exes, anything sexually explicit, backhanded compliments, and cliched openings like 'For those who don't know me' or the dictionary definition of marriage. Our tips guides cover all the common pitfalls.",
  },
  {
    question: "Should I try to be funny?",
    answer:
      "Only if you're naturally funny. Forced humour is worse than no humour. A warm, genuine speech with one or two natural laughs will always land better than a speech that tries to be a stand-up routine. Play to your strengths.",
  },
  {
    question: "How many times should I practise?",
    answer:
      "At least 3-5 full run-throughs out loud. Time yourself each time. Practice standing up, holding your notes, and making eye contact with imaginary guests. The more you practise, the more natural it feels on the day.",
  },
  {
    question: "Can AI help me write my speech?",
    answer:
      "Yes, and it's more common than you think. Our generator creates a personalised draft based on your real stories and relationship. You then edit, refine, and practise until it sounds like you. Think of it as a writing partner, not a replacement.",
  },
];
