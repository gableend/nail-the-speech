// ============================================================
// Help & Advice Articles, 75 SEO-optimized articles
// Full content for top articles, structured outlines for rest
// ============================================================

export type ArticleCategory = 'Speech Tips' | 'Practice Guide';

export interface ArticleSection {
  heading: string;       // H2 or H3
  level: 2 | 3;
  content: string;       // Markdown-ish plain text (paragraphs separated by \n\n)
}

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  targetKeyword: string;
  metaDescription: string;
  searchIntent: string;
  icon: string;
  readingTime: number;        // minutes
  sections: ArticleSection[];
  ctaSupportingText: string;
  relatedExamples: string[];  // slugs from exampleSpeeches categories
  relatedArticles: string[];  // slugs of other articles
  tags: string[];
}

// ── All 75 articles ─────────────────────────────────────────

export const articles: Article[] = [
  // ─── 1. How to Start a Wedding Speech ───────────────────
  {
    slug: 'how-to-start-a-wedding-speech',
    title: "How to Start a Wedding Speech (Without Saying \"For Those Who Don't Know Me\")",
    category: 'Speech Tips',
    targetKeyword: 'how to start a wedding speech',
    metaDescription: 'Learn 7 proven wedding speech openings that grab attention from the first line. Skip the clichés, start strong.',
    searchIntent: 'Nervous beginner, blank page',
    icon: '🎬',
    readingTime: 6,
    sections: [
      { heading: 'Why Your Opening Line Matters More Than You Think', level: 2, content: "Your opening line decides whether people listen or zone out. Nail it, and you own the room. Blow it, and you spend the next four minutes trying to win back attention you already lost.\n\nMost wedding speeches open identically. \"For those who don't know me, I'm...\" or \"I was told a best man speech should be like a mini-skirt, short enough to be interesting, long enough to cover the essentials.\" Every guest in that room has heard both of those at least three times. Their eyes glaze before you finish your first sentence.\n\nYou get about seven seconds to prove your speech is different. Seven seconds. That's barely a sentence. But one good sentence is all it takes." },
      { heading: '7 Openings That Actually Work', level: 2, content: "All of these have been road-tested at real weddings. Pick the one that matches how you actually talk, not how you think a speech should sound." },
      { heading: 'The Story Drop', level: 3, content: "Skip the throat-clearing. No preamble, no introduction, no \"so, where do I begin.\" Just launch straight into a story.\n\n\"Three years ago, I got a phone call at 2am. It was Jake. He said, 'I think I've met the one.' I said, 'Mate, you're drunk.' He said, 'Yeah, but I'm also right.'\"\n\nThis works because people are hardwired to follow stories. The audience leans forward because they need to know what happened next." },
      { heading: 'The Honest Confession', level: 3, content: "Open with something vulnerable. It disarms the room instantly.\n\n\"I've been dreading this moment for about six months. I've written this speech eleven times. Deleted it twelve. So if this isn't perfect, just know, it was a lot worse.\"\n\nSelf-deprecation works because it lowers the stakes for everyone. The audience relaxes. You've told them perfection isn't coming, and that's a relief for both sides." },
      { heading: 'The One-Liner', level: 3, content: "One punchy sentence. Get a laugh or a raised eyebrow, then keep moving.\n\n\"Marriage is basically finding someone you want to annoy for the rest of your life, and Jake, you've found the perfect candidate.\"\n\nKeep it clean, keep it warm. If the couple wouldn't laugh at it over dinner, cut it." },
      { heading: 'The Unexpected Fact', level: 3, content: "Lead with something the audience doesn't know. A surprising stat, an unknown detail about the couple, a piece of trivia that ties into your speech.\n\n\"Did you know that the average person fears public speaking more than death? Which means right now, I'd technically rather be in the coffin than giving this speech.\"" },
      { heading: 'The Direct Address', level: 3, content: "Ignore the audience entirely. Speak straight to the couple.\n\n\"Tom. Sarah. Before I say anything to this room, I want to say something to you. I have never seen my brother happier than he is right now. And Sarah, that's because of you.\"\n\nThis lands because it feels private. The room senses they're witnessing something that wasn't meant for them, and they lean in harder because of it." },
      { heading: 'The Callback', level: 3, content: "Reference something that just happened: a previous speech, a moment from the ceremony, something from earlier in the day.\n\n\"After that beautiful ceremony, the vicar told me, 'Good luck following that.' So... thanks for the pressure, Father.\"\n\nCallbacks feel spontaneous even when they're planned. That's what makes them effective." },
      { heading: 'The Quiet Start', level: 3, content: "No joke. No story. Just a simple, genuine statement delivered softly.\n\n\"I've thought about what to say today for a long time. And I keep coming back to one thing: I'm proud of you.\"\n\nSometimes the most powerful opening is the one with the least decoration." },
      { heading: '3 Openings to Avoid at All Costs', level: 2, content: "**\"For those who don't know me...\"**, Everyone knows you're the best man. They can read the seating plan.\n\n**\"Webster's dictionary defines marriage as...\"**, No. This was tired in 2005.\n\n**\"I'm not very good at public speaking...\"**, You've just told 150 people to expect the worst. Why sabotage yourself before the first story?\n\nStart with confidence, personality, and something that doesn't sound recycled from a YouTube compilation. You don't need to be a comedian. You just need to sound like yourself from the very first line." },
      { heading: 'How to Match Your Opening to Your Role', level: 2, content: "Your role shapes what you can get away with. A best man has more room for comedy. A father of the bride can open with pure emotion. A groom should probably acknowledge the room before turning to their partner.\n\n**Best Man:** Story drop or one-liner\n**Maid of Honor:** Honest confession or direct address\n**Father of the Bride:** Quiet start or direct address\n**Groom:** Direct address or callback\n\nPick the approach that sounds like something you'd actually say at a pub. If you're not funny, don't force funny. If you're not emotional, don't manufacture tears. The best opening is the one that sounds like you on a good day." },
    ],
    ctaSupportingText: 'Start with a line they\'ll remember',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'groom-speech'],
    relatedArticles: ['how-to-end-a-wedding-speech', 'wedding-speech-structure', 'best-wedding-speech-opening-lines'],
    tags: ['structure', 'opening', 'beginners'],
  },

  // ─── 2. How to End a Wedding Speech ─────────────────────
  {
    slug: 'how-to-end-a-wedding-speech',
    title: 'How to End a Wedding Speech (And Actually Nail the Landing)',
    category: 'Speech Tips',
    targetKeyword: 'how to end a wedding speech',
    metaDescription: "Don't let a great speech fizzle out. Here's how to close with a toast they'll remember.",
    searchIntent: 'Improving draft, stuck on ending',
    icon: '🥂',
    readingTime: 5,
    sections: [
      { heading: 'Why Most Speeches Fall Apart in the Last 30 Seconds', level: 2, content: "You've been brilliant for four minutes. The stories landed, the jokes got laughs, even Auntie Margaret wiped away a tear. Then you hit the ending and... nothing. You mumble \"so yeah, cheers everyone\" and sit down while the room politely claps.\n\nThis happens because people burn 90% of their prep time on the opening and the middle. The ending gets scribbled at midnight the night before, if it gets written at all. But the ending is what sticks. It's the last thing they hear. It's the emotional full stop.\n\nA strong landing makes the whole speech feel better than it was. A weak one dilutes everything that came before." },
      { heading: 'The 5 Best Ways to Close', level: 2, content: "Each of these gives you a clean, decisive ending. No trailing off. No awkward silence where the room isn't sure if you're done." },
      { heading: 'The Toast', level: 3, content: "Classic for a reason. Signal clearly that you're wrapping up, raise your glass, and deliver a specific wish.\n\n\"So please, raise your glasses. To Tom and Sarah: may your love be modern enough to survive anything, and old-fashioned enough to last forever.\"\n\nThe transition matters. Don't just blurt \"cheers\" out of nowhere. \"Please raise your glasses\" is the universal signal that your speech is ending. The room will follow." },
      { heading: 'The Callback Close', level: 3, content: "Reference something from earlier in your speech. This creates a satisfying loop that makes the whole thing feel intentional.\n\nIf you opened with a story about the groom being hopeless, close with: \"And that's the thing about Jake. He might not be able to cook, he might get lost in IKEA, but when it comes to loving Sarah, he's never been lost for a second.\"" },
      { heading: 'The Future Wish', level: 3, content: "Look forward instead of backward. Paint a picture of their future that's specific, not generic.\n\n\"I can already picture you two. Sunday mornings with terrible coffee, arguing about whose turn it is to walk the dog, building a life that's messy and beautiful and entirely yours.\"" },
      { heading: 'The Quiet Moment', level: 3, content: "Drop the volume. Say something simple directly to the couple.\n\n\"I love you both. And I'm so glad I get to be here for this.\"\n\nSometimes the shortest ending carries the most weight." },
      { heading: 'The Group Invitation', level: 3, content: "Turn the ending into a collective moment instead of a solo act.\n\n\"If you love these two, and I know you do, please stand up, raise your glasses, and join me in wishing them the happiest life together. To the bride and groom!\"" },
      { heading: 'Endings That Make People Cringe', level: 2, content: "**The Ramble:** \"So yeah, I think that's about it, I mean there's more I could say, but... anyway, cheers.\" Pick a stopping point. Stop.\n\n**The Non-Ending:** When you just... stop talking and sit down with no signal. The room doesn't know if you're done or if you've had a stroke.\n\n**The Quote Dump:** Ending with a long quote from someone famous. Unless you can deliver it with genuine conviction, it sounds borrowed and hollow.\n\n**The Double Toast:** Raising your glass, saying cheers, then remembering something else and starting again. One toast. Commit to it." },
      { heading: 'How Long Should Your Ending Be?', level: 2, content: "Thirty to sixty seconds. That's two or three sentences of wrap-up, followed by the toast itself.\n\nPractice the ending more than any other part. It carries the most emotional weight, and it's the part you're most likely to rush because you can see the finish line. Your brain starts sprinting when it should be slowing down.\n\nResist that. Let the words land. Then raise your glass like you mean it." },
    ],
    ctaSupportingText: 'End on a high, automatically',
    relatedExamples: ['father-of-bride-speech', 'emotional-wedding-speech', 'groom-speech'],
    relatedArticles: ['how-to-start-a-wedding-speech', 'wedding-speech-toast-ending', 'wedding-speech-structure'],
    tags: ['structure', 'ending', 'toast'],
  },

  // ─── 3. Wedding Speech Structure ────────────────────────
  {
    slug: 'wedding-speech-structure',
    title: 'Wedding Speech Structure: The Only Framework You Need',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech structure',
    metaDescription: "A simple 5-part structure that works for any wedding speech. No filler, no fluff, just a clear plan.",
    searchIntent: 'Blank page, needs framework',
    icon: '🏗️',
    readingTime: 7,
    sections: [
      { heading: "Why Winging It Is a Terrible Idea", level: 2, content: "\"I'll just speak from the heart\" is not a plan. It's a gamble. And in front of 150 people, some of whom you've never met, with a microphone turning every awkward pause into a canyon, it's a gamble that almost never pays off.\n\nThe best wedding speeches sound spontaneous, natural, effortless. Every single one of them has a structure underneath. The audience never sees the scaffolding, but it's holding everything together.\n\nThis is the framework. It works for any role, any tone, any length." },
      { heading: 'The 5-Part Framework', level: 2, content: "Every great wedding speech follows the same basic arc, whether it runs two minutes or seven. The proportions shift, but the bones stay the same." },
      { heading: '1. The Hook (10%)', level: 3, content: "Your first 15 to 30 seconds. Grab attention. A joke, a story, a direct address, a surprising statement. Whatever it is, make it something that hasn't been said at every other wedding this summer.\n\nDon't burn this on introductions. If you're the best man, everyone already knows. Start with something that earns their attention instead of explaining your job title." },
      { heading: '2. The Context (15%)', level: 3, content: "Briefly establish who you are in relation to the couple and why you're the one holding the mic. This earns you the right to tell the stories that come next.\n\n\"Jake and I have been friends for 22 years. We met when we were both too young to know better and too stubborn to grow apart.\"\n\nOne or two sentences. You're not narrating your autobiography, you're giving the audience just enough background to care about what follows." },
      { heading: '3. The Stories (50%)', level: 3, content: "The heart of your speech. One or two stories that reveal something genuine about the person or the couple.\n\nThe best stories are not necessarily the funniest. They're the most specific. Details are what make a story feel real. Not \"we had a great holiday\" but \"we were stuck in a broken-down campervan outside Lisbon and he spent three hours trying to fix the engine with a YouTube tutorial and a butter knife.\"\n\nEvery story should earn its place: it shows character, it illustrates the relationship, or it sets up the emotional turn that's coming." },
      { heading: '4. The Pivot (15%)', level: 3, content: "The pivot is where you shift from past to present. From stories about what happened to feelings about what's happening now and hopes for what comes next.\n\n\"But behind every ridiculous story is a person with one of the biggest hearts I've ever known. And watching him with Sarah, I can see that heart is exactly where it's supposed to be.\"\n\nThis is the emotional gear change. If your speech has been funny up to this point, this is where it gets real. If it's been sentimental, this is where you bring it home." },
      { heading: '5. The Toast (10%)', level: 3, content: "A clear, confident close. Signal the end, deliver one final line, raise your glass.\n\nDon't introduce new material here. Don't start another story. The toast is the period at the end of the sentence. Short, specific, delivered with conviction.\n\n\"To Jake and Sarah, may your life together be as good as you both deserve. Cheers.\"" },
      { heading: 'How to Adapt This for Any Role', level: 2, content: "The framework is universal, but the weight of each section shifts depending on who you are:\n\n**Best Man:** More time on stories (especially funny ones), shorter pivot\n**Maid of Honor:** Balance of stories and emotion, longer pivot\n**Father of the Bride:** Less story, more emotion. The pivot IS the speech.\n**Groom:** More context (thanking people), shorter stories, heartfelt pivot to partner\n\nThink of the structure as a skeleton. You dress it up differently depending on your role and what you want to say." },
      { heading: 'Common Structural Mistakes', level: 2, content: "**Too many stories:** Pick one or two. Not five. Each additional one dilutes the last.\n\n**No pivot:** If your speech is all jokes or all sentiment without a shift in gear, it feels flat. The pivot gives the audience a journey.\n\n**No clear ending:** The audience should know when your speech is over. \"Please raise your glasses\" is the universal signal. Use it.\n\n**Front-loading:** If your best material is in the first minute, the speech gets progressively worse. Save something strong for the end." },
      { heading: 'How Long Should Each Section Be?', level: 2, content: "For a 4-minute speech (roughly 600 words):\n\n- **Hook:** 60 words (30 seconds)\n- **Context:** 90 words (45 seconds)\n- **Stories:** 300 words (2 minutes)\n- **Pivot:** 90 words (45 seconds)\n- **Toast:** 60 words (30 seconds)\n\nThese are guidelines, not commandments. But if your stories section accounts for 80% of the speech, something is off. And if your toast runs 30 seconds, you're probably rambling into it instead of landing it clean." },
    ],
    ctaSupportingText: 'Build your speech in minutes',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'father-of-bride-speech'],
    relatedArticles: ['how-to-start-a-wedding-speech', 'how-to-end-a-wedding-speech', 'how-long-should-a-wedding-speech-be'],
    tags: ['structure', 'framework', 'beginners'],
  },

  // ─── 4. How Long Should a Wedding Speech Be ────────────
  {
    slug: 'how-long-should-a-wedding-speech-be',
    title: 'How Long Should a Wedding Speech Be? (Hint: Shorter Than You Think)',
    category: 'Speech Tips',
    targetKeyword: 'how long should a wedding speech be',
    metaDescription: 'The ideal wedding speech length by role, plus how to cut without losing heart. 3–5 minutes is the sweet spot.',
    searchIntent: 'Planning stage, unsure on length',
    icon: '⏱️',
    readingTime: 5,
    sections: [
      { heading: 'The Golden Rule: 3–5 Minutes', level: 2, content: "Nobody has ever left a wedding saying, \"I wish that speech had been longer.\" That sentence has never been spoken. Not once. Not in the entire history of wedding receptions.\n\nThe sweet spot is 3 to 5 minutes. That's roughly 450 to 750 words. Long enough to say something that matters, short enough to keep the room with you. Under 2 minutes feels like you didn't bother. Over 7 and people start checking their phones, quietly calculating how long until the bar opens.\n\nRemember, you're not the only one speaking. Three to five speeches at 10 minutes each is nearly an hour of speeches. The food gets cold. The band gets restless. Guests start eyeing the exits." },
      { heading: 'Ideal Length by Role', level: 2, content: "Different roles get different amounts of time, and that's completely fine. Think of it as a rough budget, not a strict allocation." },
      { heading: 'Best Man: 4–5 minutes', level: 3, content: "You typically get the most airtime because the audience expects entertainment. More stories, more room for humor. But even here, lean toward the shorter end. A tight 4-minute best man speech will always outperform a rambling 7-minute one. Always." },
      { heading: 'Maid of Honor: 3–4 minutes', level: 3, content: "Similar to the best man, but MOH speeches tend to balance humor and emotion more evenly. Keeping it on the shorter side works in your favor: it forces you to pick only your strongest material and leave the rest behind." },
      { heading: 'Father of the Bride: 3–4 minutes', level: 3, content: "Fathers get emotional, and that's wonderful. But emotion without structure becomes a ramble before you realize it's happening. Three minutes of genuine feeling will land harder than six minutes of trying to cover every memory from childhood to university to first job." },
      { heading: 'Groom: 3–5 minutes', level: 3, content: "The groom often has a long list of people to thank, which inflates things quickly. Be efficient with the thank-yous (group them together) and save the real time for what you want to say to your partner. That's the part people will remember." },
      { heading: 'How to Tell If Your Speech Is Too Long', level: 2, content: "Read it out loud and time yourself. Not in your head. Out loud, at the pace you'd actually use in front of people. Most people read silently about 30% faster than they speak.\n\nIf you're over 5 minutes, you probably have:\n- Stories that need tightening\n- Thank-yous that could be grouped into one sentence\n- An introduction that takes too long to get going\n- An ending that wanders instead of landing" },
      { heading: 'How to Cut Without Losing the Good Stuff', level: 2, content: "**The Two-Story Maximum:** Three stories? Cut the weakest one. Two great stories beat three decent ones every time.\n\n**The \"Would They Miss It?\" Test:** Read each paragraph and ask: if this disappeared, would the speech suffer? If the answer is \"not really,\" it goes.\n\n**Group Your Thank-Yous:** Instead of thanking 12 people individually, thank groups. \"To both families, to the bridal party, and to everyone who travelled to be here today, thank you.\"\n\n**Cut Your Preamble:** Most speeches spend 30 to 60 seconds on a preamble that contributes nothing. \"For those who don't know me,\" cut. \"I've been nervous about this,\" cut. Just start." },
      { heading: 'The Word Count Cheat Sheet', level: 2, content: "| Duration | Word Count | Best For |\n|----------|-----------|----------|\n| 2 minutes | ~300 words | Short toast, engagement party |\n| 3 minutes | ~450 words | Father/mother speeches, concise best man |\n| 4 minutes | ~600 words | Standard best man, maid of honor |\n| 5 minutes | ~750 words | Extended best man with multiple stories |\n| 7+ minutes | ~1000+ words | Too long (probably) |\n\nWhen in doubt, go shorter. A 3-minute speech that's all killer, no filler will always outperform a 6-minute one with padding. Your audience will thank you, even if they never say so." },
    ],
    ctaSupportingText: 'Get the perfect length on the first try',
    relatedExamples: ['short-sweet-speech', 'best-man-speech', 'father-of-bride-speech'],
    relatedArticles: ['wedding-speech-length-by-role', 'wedding-speech-structure', 'how-to-write-a-wedding-speech'],
    tags: ['length', 'timing', 'planning'],
  },

  // ─── 5. How to Write a Wedding Speech ──────────────────
  {
    slug: 'how-to-write-a-wedding-speech',
    title: 'How to Write a Wedding Speech When You Have No Idea Where to Start',
    category: 'Speech Tips',
    targetKeyword: 'how to write a wedding speech',
    metaDescription: "Stuck staring at a blank page? Here's a step-by-step guide to writing a wedding speech from scratch.",
    searchIntent: 'Total beginner, overwhelmed',
    icon: '✍️',
    readingTime: 7,
    sections: [
      { heading: "Take a Breath, You've Got This", level: 2, content: "You've been asked to give a wedding speech. Maybe you volunteered. Maybe someone volunteered you and you found out via group chat. Either way, you're staring at a blank page and the wedding is getting closer by the day.\n\nThe good news: you don't need to be a writer. You don't need to be funny. You don't need to sound like you swallowed a poetry anthology. You need to be genuine, prepared, and willing to sit down for about an hour.\n\nOne hour of focused work. That's the real cost of a good wedding speech. Let's walk through it." },
      { heading: 'Step 1: Brainstorm Before You Write', level: 2, content: "Don't start writing sentences. Start by getting everything out of your head and onto a page. No editing, no judgment, no structure yet." },
      { heading: 'The Memory Dump', level: 3, content: "Set a timer for 10 minutes. Write down every memory, moment, inside joke, or feeling connected to the person or couple. Don't filter anything. Some of these will be unusable. That's expected. You're mining for the one or two moments that actually matter, and those are usually buried under a pile of half-memories.\n\nThink about:\n- The first time you met them\n- A time they surprised you\n- Something they do that's uniquely them\n- A moment you were proud of them\n- Something funny that happened\n- How you felt when you learned about the relationship" },
      { heading: 'The 3-Word Exercise', level: 3, content: "Describe the person (or the couple) in exactly three words. Not safe adjectives you'd put on a LinkedIn profile. Real words that capture who they actually are.\n\nNot \"kind, caring, generous\" (that describes everyone). Try \"stubborn, hilarious, loyal\" or \"quietly brave\" or \"terrible cook, incredible human.\"\n\nThese three words become the spine of your speech. Every story you tell should illustrate at least one of them." },
      { heading: 'Step 2: Pick Your Structure', level: 2, content: "Now that you have raw material, organize it. Use the 5-part framework:\n\n1. **Hook**, Start with a bang\n2. **Context**, Who are you, why are you here\n3. **Stories**, 1–2 stories that reveal character\n4. **Pivot**, The emotional turn\n5. **Toast**, Raise the glass\n\nSlot your best memories into the \"stories\" section. Pick the one that best sets up the emotional pivot." },
      { heading: 'Step 3: Write Ugly First', level: 2, content: "Write a complete first draft without stopping to fix anything. It will be bad. It's supposed to be bad. A first draft only needs to exist, not impress anyone.\n\nWrite like you're telling a friend about this over coffee. Don't try to sound impressive. Don't reach for words you wouldn't normally use. If it reads like a university essay, you've gone in the wrong direction.\n\nThe biggest trap at this stage is writing and editing simultaneously. That's how you end up with three hours of staring at a blank screen and two usable sentences. Write now. Fix later." },
      { heading: 'Step 4: Edit Ruthlessly', level: 2, content: "Now make it good. Read through your draft and ask:\n\n- **Is this too long?** Cut anything that doesn't earn its place.\n- **Would this work for any couple?** If yes, it's too generic. Make it specific to these two people.\n- **Am I trying too hard to be funny?** If the humor doesn't come naturally, cut it. Sincerity always beats a forced punchline.\n- **Does it have a clear beginning, middle, and end?** If it wanders, restructure.\n- **Would I be comfortable if this was recorded?** If not, tone it down.\n\nAim to cut 20% from your first draft. The speech that remains will be tighter and sharper. Every cut makes the remaining words stronger." },
      { heading: 'Step 5: Read It Out Loud', level: 2, content: "Non-negotiable. Reading in your head and speaking out loud are completely different experiences. When you read aloud, you'll catch:\n\n- Sentences that are too long to say in one breath\n- Transitions that sound clunky when spoken\n- Words that trip up your tongue\n- Sections where the energy drops\n- The actual running time (almost always longer than you expected)\n\nRead it to a mirror first. Then read it to one trusted person. Not someone who'll tell you it's brilliant regardless, someone who'll tell you where they got bored." },
      { heading: 'What If You\'re Still Stuck?', level: 2, content: "If you've tried all of this and you're still staring at a blank page, two options:\n\n1. **Start with the toast and work backward.** Knowing where you're headed often makes it easier to figure out where to begin.\n\n2. **Use AI to get a first draft.** Give it your memories, your tone, your relationship details, and let it build a starting point. Then edit until it sounds like you. That's what our generator does. Using a tool to get started isn't cheating. Staring at a blank page for three weeks is just suffering.\n\nThe only bad speech is the one you never prepare. Everything else can be fixed with editing and a few read-throughs." },
    ],
    ctaSupportingText: 'Go from blank page to finished speech',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'bride-speech'],
    relatedArticles: ['wedding-speech-structure', 'ai-wedding-speech-writer', 'wedding-speech-for-a-friend'],
    tags: ['writing', 'beginners', 'step-by-step'],
  },

  // ─── 6. How to Be Funny ────────────────────────────────
  {
    slug: 'how-to-be-funny-wedding-speech',
    title: 'How to Be Funny in a Wedding Speech (Without Ruining the Day)',
    category: 'Speech Tips',
    targetKeyword: 'funny wedding speech tips',
    metaDescription: "Yes, you can be funny. No, you can't tell that story. Here's how to get genuine laughs safely.",
    searchIntent: 'Wants to be funny, scared of crossing line',
    icon: '😂',
    readingTime: 6,
    sections: [
      { heading: 'The Rule of Safe Funny', level: 2, content: "If the person you're talking about would laugh at the joke, it's probably safe. If they'd cringe, need to apologize to their partner later, or require a follow-up conversation with a therapist, cut it.\n\nWedding humor is its own category. You're not doing a stand-up set. You're not roasting your mate at a stag do. There are children present. There are grandparents. There's at least one uncle who's already had too much champagne and doesn't need encouragement.\n\nThe good news: being funny at a wedding is easier than being funny in a comedy club. Everyone is in a good mood. They've had a drink. They want to laugh. The bar is genuinely low. You just can't go beneath it." },
      { heading: '5 Types of Wedding Humor That Work', level: 2, content: "These approaches have been tested at hundreds of weddings. They're safe, they're reliable, and they don't require comedic training." },
      { heading: 'Self-Deprecation', level: 3, content: "Making fun of yourself is the safest form of humor because the only possible target is you.\n\n\"I've been practicing this speech in the mirror for three weeks. The mirror told me to give up, but here I am.\"\n\nIt's warm, it's relatable, and it makes the audience want you to succeed." },
      { heading: 'Shared Absurdity', level: 3, content: "Tell a story where you and the person were both involved in something ridiculous. The humor comes from the situation, not from making anyone look bad.\n\n\"We decided to build a shelf together. Nine hours, four arguments, and one trip to A&E later, we had a shelf. It fell down within a week.\"" },
      { heading: 'The Unexpected Comparison', level: 3, content: "Compare the person to something unexpected. Not insulting, just surprising.\n\n\"Jake approaches romance the same way he approaches flat-pack furniture: with total confidence, zero instructions, and the assumption that somehow it'll just work out. And you know what? It usually does.\"" },
      { heading: 'The Rule of Three', level: 3, content: "Set up a pattern with two normal items, then break it with a third.\n\n\"Jake is many things. He's a loyal friend. He's a devoted partner. And he's the only person I know who has been banned from two separate branches of Nandos.\"" },
      { heading: 'The Callback', level: 3, content: "Reference a joke or moment from earlier in your speech, or from a previous speaker's speech. Callbacks get bigger laughs because the audience feels clever for catching the reference.\n\nIf you mentioned the groom's terrible cooking earlier, call it back in the toast: \"May your love last forever, and may your cooking improve.\"" },
      { heading: 'Topics That Are Never Funny', level: 2, content: "**Exes.** Don't mention them. Not even as a favorable comparison. Just don't.\n\n**Bedroom stories.** The couple's parents are in the room. Their grandparents are in the room. This is never the audience for that material.\n\n**Money.** How much the wedding cost, how much the groom earns, who paid for what. Off-limits, every time.\n\n**Appearance.** Don't comment on weight, looks, or physical features. Not even as a \"compliment\" that's really a joke.\n\n**Anything prefaced with \"I probably shouldn't say this but...\"** You're right, you shouldn't. The disclaimer doesn't make it appropriate. It just proves you knew better." },
      { heading: 'How to Test Your Jokes', level: 2, content: "Read them to someone who isn't your best mate from uni. Your drinking buddies will laugh at anything. That's not the test.\n\nRead your material to someone who represents the actual wedding audience. A parent, a colleague, a partner. If they wince, cut the joke. If they smile politely, it's borderline. If they genuinely laugh out loud, you're safe." },
      { heading: "What If You're Not Naturally Funny?", level: 2, content: "Then don't force it. A heartfelt speech with zero jokes will always land better than a speech with five punchlines that miss.\n\nHumor is a bonus. It's not a requirement. The audience wants to feel something, whether that's laughter, warmth, or a lump in their throat. You don't need to be funny to make an impact.\n\nIf you want a light touch without committing to full comedy, try one moment of self-deprecation and one gentle observation about the couple. That's plenty." },
    ],
    ctaSupportingText: "Make it funny without crossing the line",
    relatedExamples: ['funny-wedding-speech', 'roast-wedding-speech', 'best-man-speech'],
    relatedArticles: ['wedding-speech-roast-guide', 'wedding-speech-jokes', 'wedding-speech-mistakes'],
    tags: ['humor', 'funny', 'tone'],
  },

  // ─── 7. Best Man Speech Guide ──────────────────────────
  {
    slug: 'best-man-speech-guide',
    title: "Best Man Speech: The Complete Guide to Not Messing It Up",
    category: 'Speech Tips',
    targetKeyword: 'best man speech',
    metaDescription: "The definitive best man speech guide. Structure, timing, humor, stories, everything you need.",
    searchIntent: 'Best man, starting from zero',
    icon: '🤵',
    readingTime: 8,
    sections: [
      { heading: "What's Actually Expected of You", level: 2, content: "The best man speech sounds intimidating until you realize what it actually requires. You need to: tell one or two good stories about the groom, say something genuinely warm about the couple, and raise a toast. That's the whole job description.\n\nYou don't need to do 20 minutes of material. You don't need to make the grandmother cry and the lads from five-a-side laugh simultaneously. You need to be personal, brief, and end with a glass in the air.\n\nThe biggest trap best men fall into is thinking they need to put on a show. You're not performing. You're just you, except you prepared and you're not winging it at the mic." },
      { heading: 'The Ideal Structure', level: 2, content: "**Opening (30 seconds):** Hook the room. A quick joke, something unexpected, or jump straight into a story. No throat-clearing.\n\n**Who You Are (15 seconds):** One sentence. \"Jake and I have been mates since sixth form. We met when...\" Keep it moving.\n\n**The Stories (2–3 minutes):** The main event. One funny story, one genuine one. Or one story that manages to be both. The more specific and personal, the better.\n\n**The Bride (30 seconds):** Non-negotiable. Acknowledge the bride. Say something specific about how she's changed the groom for the better. Not just \"she's lovely.\" What has she actually done to him?\n\n**The Toast (30 seconds):** Land it. Signal the end, deliver a final line, raise your glass.\n\nTotal: 4 to 5 minutes. That's genuinely all you need." },
      { heading: 'How to Be Funny Without Being Offensive', level: 2, content: "The best man speech has a reputation for being the funny one. Fine. But funny doesn't mean crude, mortifying, or at someone else's expense.\n\nSafe targets: yourself, the groom's harmless habits, shared experiences where you both looked ridiculous. Unsafe targets: the bride, exes, anything sexual, anything involving law enforcement.\n\nOne solid joke that actually lands is worth more than ten that get nervous silence. If a joke needs a disclaimer before you tell it (\"now don't kill me for this...\"), that's your answer. Cut it." },
      { heading: 'Stories That Work (and Stories That Don\'t)', level: 2, content: "**Stories that work:**\n- Ones where the groom shows his real character\n- Shared adventures with a clear point or punchline\n- Moments that reveal why your friendship has lasted\n- The story of when you knew the bride was \"the one\" for him\n\n**Stories that don't:**\n- \"This one time we were so drunk...\" (nobody cares, and it's never as funny as you think)\n- Anything involving other women\n- Inside jokes that only two people in the room understand\n- Stories where the groom is genuinely the villain\n- Anything requiring a disclaimer (if your story needs a full backstory, it's probably not the one)" },
      { heading: 'How to Mention the Bride', level: 2, content: "Most best men spend 4 minutes on the groom, then bolt on \"and Sarah's great too\" like an afterthought. The audience notices.\n\nInstead, weave the bride into the narrative. Talk about how the groom changed when she showed up. Be specific: \"Before Sarah, Jake's idea of a home-cooked meal was toast. Now he makes actual risotto. From scratch. With a recipe he found on a food blog he follows voluntarily.\"\n\nThe bride doesn't need her own section. She needs to be a real part of the story you're already telling." },
      { heading: 'Timing and Length', level: 2, content: "**Target:** 4–5 minutes (600–750 words)\n**Maximum:** 6 minutes\n**Minimum:** 3 minutes\n\nIf you're pushing past 7 minutes, you're losing the room. Doesn't matter how good the material is. Cut a story, tighten the transitions, kill a tangent. Your speech should leave people wanting slightly more, not subtly checking their watches under the table." },
      { heading: 'Best Man Speech Examples', level: 2, content: "Want to see how this looks when it's actually written? Browse our best man speech examples, from funny roasts to heartfelt tributes, and see the structure in action." },
    ],
    ctaSupportingText: 'Build your best man speech in minutes',
    relatedExamples: ['best-man-speech', 'funny-wedding-speech', 'roast-wedding-speech'],
    relatedArticles: ['funny-best-man-speech', 'mention-bride-best-man-speech', 'how-to-be-funny-wedding-speech'],
    tags: ['best man', 'guide', 'role-specific'],
  },

  // ─── 8. I Hate Public Speaking ─────────────────────────
  {
    slug: 'hate-public-speaking-wedding-speech',
    title: 'I Hate Public Speaking But I Have to Give a Wedding Speech',
    category: 'Speech Tips',
    targetKeyword: 'hate public speaking wedding speech',
    metaDescription: "You hate speaking in public. You've been asked to give a wedding speech. Here's how to survive and shine.",
    searchIntent: 'Anxiety-driven, reluctant speaker',
    icon: '😰',
    readingTime: 6,
    sections: [
      { heading: "You're Not Alone (Seriously)", level: 2, content: "Public speaking consistently ranks as people's number one fear. Above spiders. Above heights. Above death itself in some surveys, which means, as Jerry Seinfeld pointed out, most people at a funeral would rather be in the coffin than giving the eulogy.\n\nIf you hate public speaking and you've been asked to give a wedding speech, congratulations: you're in the majority. Most people standing at that microphone are terrified. The ones who look calm? They've just rehearsed more than you have.\n\nYou don't need to enjoy this. You need to get through it. And getting through it is entirely doable. The fact that your hands are shaking right now just reading this? That's normal. Let's work with it." },
      { heading: 'Why a Wedding Speech Is Different', level: 2, content: "This isn't a quarterly presentation to a skeptical board. Nobody is trying to catch you out or poke holes in your argument. This is a room full of people who:\n\n- Already like you (you were invited)\n- Are in a genuinely great mood (it's a wedding)\n- Have had at least one drink\n- Are actively rooting for you to do well\n- Will clap warmly no matter what happens\n\nThe bar is lower than your anxiety is telling you. Nobody expects polished oratory. They expect warmth. And warmth doesn't require confidence. It requires honesty." },
      { heading: 'The Minimum Viable Speech', level: 2, content: "If the thought of 5 minutes at the microphone makes you feel physically ill, shrink the task. Here's the absolute minimum:\n\n1. **One sentence about your relationship to the couple** (5 seconds)\n2. **One short memory or quality you love about them** (30 seconds)\n3. **One wish for their future** (15 seconds)\n4. **Raise your glass** (5 seconds)\n\nThat's 60 seconds. One single minute. You can do one minute. And a genuine 60-second speech is infinitely better than a tortured 5-minute one you hated every second of.\n\nWant to do more? Great. But start here. Knowing you have a 60-second safety net takes enormous pressure off the rest." },
      { heading: 'Tricks to Calm Your Nerves', level: 2, content: "**Box breathing:** Breathe in for 4 counts, hold for 4, out for 4, hold for 4. Do this for 2 minutes before you stand up. It physically lowers your heart rate. This isn't a meditation gimmick. Navy SEALs use this before high-pressure situations.\n\n**The power pose:** Sounds ridiculous. Works anyway. Stand with your feet apart, hands on hips, chest open. Hold for 2 minutes in a bathroom stall before your speech. Your body sends signals to your brain, not just the other way around.\n\n**Anchor to someone:** Pick one friendly face in the crowd. A partner, a friend, a parent. Talk to them. Not the whole room. Just them. The audience of 150 becomes an audience of one.\n\n**Reframe the feeling:** You're not scared. You're amped up. The physical symptoms of fear and excitement are identical. The only difference is the label you put on them." },
      { heading: 'Reading from Notes Is Fine', level: 2, content: "Let's put this myth to rest: reading from notes during a wedding speech is not cheating. Nobody is judging you for glancing at a card. They're listening to what you're saying.\n\nPrint your speech on index cards in a large font. Glance down when you need to. Look up when you can. That's it.\n\nHaving notes removes the single biggest source of anxiety: the fear of going blank. That nightmare scenario where your mind empties and 150 people stare at you in silence? It evaporates when the words are right there in your hand." },
      { heading: "The Escape Plan (If You Really Can't)", level: 2, content: "If you genuinely cannot bring yourself to stand up and speak, that's OK. Really. Here are alternatives that still let you contribute:\n\n- **Write a letter** and have someone else read it on your behalf\n- **Record a video** message that's played at the reception\n- **Do a joint speech** with someone else who can carry the delivery\n- **Keep it to 30 seconds**, stand, say three sentences, raise your glass, sit\n\nNobody will think less of you. The couple asked you because they love you, not because they need a keynote speaker. Whatever you can give, given honestly, is enough." },
    ],
    ctaSupportingText: "Get a speech you'll feel confident delivering",
    relatedExamples: ['short-sweet-speech', 'father-of-bride-speech', 'sentimental-speech'],
    relatedArticles: ['introvert-wedding-speech', 'wedding-speech-nerves', 'public-speaking-anxiety-wedding-speech'],
    tags: ['anxiety', 'public speaking', 'confidence'],
  },

  // ─── 9. Last-Minute Wedding Speech ─────────────────────
  {
    slug: 'last-minute-wedding-speech',
    title: 'Last-Minute Wedding Speech: How to Write One in 30 Minutes',
    category: 'Speech Tips',
    targetKeyword: 'last minute wedding speech',
    metaDescription: "The wedding is tomorrow and you haven't started. Here's how to write a solid speech in 30 minutes flat.",
    searchIntent: 'Panic, no time',
    icon: '⚡',
    readingTime: 5,
    sections: [
      { heading: "Don't Panic, You Need Less Than You Think", level: 2, content: "The wedding is tomorrow. Or tonight. Or in three hours and you just realized you haven't written a single word. Your stomach has opinions about this.\n\nBreathe. You can write a genuinely good wedding speech in 30 minutes. Not a perfect one, but a warm, real, memorable one. Perfect was never the goal anyway.\n\nFollow this plan exactly. No detours, no second-guessing, no opening a new browser tab to \"look for inspiration.\"" },
      { heading: 'The 30-Minute Plan', level: 2, content: "This is a sprint. Perfectionism is banned. Trust the process and keep moving." },
      { heading: 'Minutes 1–5: Brainstorm', level: 3, content: "Grab your phone or a scrap of paper. Answer these three questions:\n\n1. What's one specific memory with this person that makes you smile?\n2. What's one quality they have that you genuinely admire?\n3. What do you wish for their future?\n\nDon't overthink it. The first answers that pop into your head are usually the right ones. Write bullet points, not paragraphs." },
      { heading: 'Minutes 5–15: Write', level: 3, content: "Turn your bullets into a speech using this skeleton:\n\n**Opening:** Jump straight into your memory. No preamble. \"Three years ago, [name] called me at midnight to tell me...\"\n\n**Middle:** Connect the story to the quality you admire. \"That's who [name] is. Someone who [quality].\"\n\n**Pivot to the couple:** \"And watching them with [partner], I can see...\"\n\n**Toast:** \"Please raise your glasses. To [couple], [one-sentence wish].\"\n\nWrite it the way you'd tell it to a mate. Don't try to be eloquent. Eloquence is overrated when you're on a deadline." },
      { heading: 'Minutes 15–25: Edit', level: 3, content: "Read it out loud once. Cut anything that:\n- Feels forced or phony\n- Takes longer than it needs to\n- You wouldn't actually say out loud to another human\n- Could offend anyone in the room\n\nTighten everything. Aim for 400 to 500 words, which gives you roughly 3 minutes." },
      { heading: 'Minutes 25–30: Practice', level: 3, content: "Read it out loud twice more. Time yourself. Note where you stumble and smooth those lines.\n\nPrint it or save it on your phone in large text. You're done. Go put on your suit." },
      { heading: 'The Emergency Template', level: 2, content: "If even 30 minutes feels like too much, here's a speech you can fill in and deliver in 10 minutes:\n\n\"I've known [name] for [X years]. In that time, I've learned that they're [genuine quality], [genuine quality], and [unexpectedly funny quality].\n\n[One specific sentence about a memory.]\n\nWhen [name] met [partner], something changed. They became [observation about how they changed]. And standing here today, seeing them this happy, I couldn't be more proud.\n\nPlease raise your glasses, to [couple]. Here's to everything that comes next.\"\n\nFill in the blanks. Read it through twice. Done." },
      { heading: 'What to Skip When You\'re Short on Time', level: 2, content: "**Skip:** Long introductions, multiple stories, individual thank-yous, quotes from famous people, jokes you found on Reddit at 1am.\n\n**Keep:** One real story, one genuine compliment, and a toast.\n\nThat's all anyone needs. The audience has no idea how long you spent on it. They only know how it makes them feel. And genuine warmth always feels good, even when it was written in a panic." },
    ],
    ctaSupportingText: 'Go from nothing to ready in minutes',
    relatedExamples: ['short-sweet-speech', 'best-man-speech', 'maid-of-honor-speech'],
    relatedArticles: ['how-to-write-a-wedding-speech', 'dont-know-what-to-say-wedding-speech', 'surprise-wedding-speech'],
    tags: ['last minute', 'emergency', 'quick'],
  },

  // ─── 10. Wedding Speech Nerves ─────────────────────────
  {
    slug: 'wedding-speech-nerves',
    title: 'Wedding Speech Nerves: How to Calm Down Before You Speak',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech nerves',
    metaDescription: "Your hands are shaking and the mic is waiting. Here's how to calm your nerves before a wedding speech.",
    searchIntent: 'Anxious, dreading it',
    icon: '🧘',
    readingTime: 5,
    sections: [
      { heading: "Why You're Nervous (and Why It's Good)", level: 2, content: "You're nervous because you care about these people. Full stop. If the couple meant nothing to you, you'd feel nothing. The nerves are evidence that this matters.\n\nWhat's happening in your body: adrenaline is flooding your system because your brain has flagged \"150 people staring at you\" as a threat. It's not a threat. It's a wedding. But your nervous system can't tell the difference between a predator and a microphone.\n\nThe goal isn't to eliminate the nerves. That's not possible and not even desirable. The goal is to channel them so they sharpen you instead of shutting you down." },
      { heading: 'The 30-Minute Pre-Speech Routine', level: 2, content: "Start this about 30 minutes before you're scheduled to speak. Not five minutes before. Not when they call your name. Thirty minutes." },
      { heading: 'Breathing Techniques', level: 3, content: "Box breathing: 4 counts in, 4 counts hold, 4 counts out, 4 counts hold. Repeat for 3 minutes.\n\nThis physically activates your parasympathetic nervous system and lowers your heart rate. Navy SEALs use this before missions. It works in combat zones. It will work in a marquee in Gloucestershire." },
      { heading: 'Power Posing', level: 3, content: "Find a private spot: bathroom, corridor, behind the DJ booth. Stand tall, feet apart, hands on hips. Hold for 2 minutes.\n\nThe research on power posing is contested in academic circles, but the practical effect is straightforward: it interrupts the hunched, small posture that feeds anxiety. You're physically telling your body to take up space instead of shrinking." },
      { heading: 'The Anchor Object', level: 3, content: "Hold something in your hand. Your notes, a pen, a coin. Nervous energy needs somewhere to go. Give it a physical outlet instead of letting it turn into shaky hands, fidgeting, or that thing where you keep adjusting your tie." },
      { heading: 'What to Do 5 Minutes Before', level: 2, content: "- **Use the bathroom.** Not optional. Nerves do things to your body that you don't want happening at a microphone.\n- **Drink water.** Not champagne. Water. Your mouth will be a desert.\n- **Review your opening line.** Just the first sentence. If you know how to start, momentum carries the rest.\n- **Smile.** Even a fake smile sends signals to your brain that reduce cortisol. Weird, but documented.\n- **Remember:** every person in that room wants you to succeed." },
      { heading: 'What to Do If Nerves Hit Mid-Speech', level: 2, content: "This happens to experienced speakers too. Your voice shakes. You lose your place. Your mind goes completely blank.\n\n**Pause.** Take a breath. Look at your notes. The audience doesn't know you've forgotten anything. They think you're pausing for effect.\n\n**Take a sip of water.** It buys you 3 seconds to reset your brain.\n\n**Talk to one person.** Find a friendly face and deliver the next line straight to them. The room shrinks.\n\n**Say it out loud:** \"Bear with me a moment.\" The audience will smile warmly and give you all the time you need. Showing that you're human isn't a weakness in a wedding speech. It's an asset." },
      { heading: 'The Secret: Preparation Kills Anxiety', level: 2, content: "The single most effective anti-anxiety tool is preparation. Not \"I read it once in the car\" preparation. Real preparation.\n\n- Written and edited\n- Practiced out loud at least 3 times\n- Timed\n- Notes printed in large font\n\nWhen you know your material cold, your brain has less to panic about. The nerves may still show up, but they won't have anything to grab onto. They become background noise instead of a five-alarm fire.\n\nMost wedding speech anxiety is actually preparation anxiety in disguise. Fix the preparation, and you fix most of the fear." },
    ],
    ctaSupportingText: "Feel confident with a speech that's ready",
    relatedExamples: ['short-sweet-speech', 'father-of-bride-speech'],
    relatedArticles: ['how-to-practise-a-wedding-speech', 'hate-public-speaking-wedding-speech', 'wedding-speech-checklist'],
    tags: ['nerves', 'anxiety', 'delivery', 'confidence'],
  },


  // ─── wedding-speech-transitions ───
  {
    slug: 'wedding-speech-transitions',
    title: 'Wedding Speech Transitions: How to Move Between Sections Without It Feeling Weird',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech transitions',
    metaDescription: 'Smooth transitions make your speech feel natural. Here are 10 bridge phrases that actually work.',
    searchIntent: 'Improving draft',
    icon: '🔗',
    readingTime: 5,
    sections: [
      {
        heading: 'Wedding Speech Transitions: How to Move Between Sections Without Sounding Like a Robot',
        level: 2,
        content:
          "Most wedding speeches die in the gaps between sections. You nail a great joke, tell a moving story, and then say \"So, um, anyway...\" and the whole thing deflates like a paddling pool in November. Transitions are the connective tissue. They tell your audience where you've been and where you're going next. Get them right and your speech sounds like a conversation. Get them wrong and it sounds like someone reading bullet points off a napkin they found in their jacket pocket.",
      },
      {
        heading: 'Why Transitions Matter More Than You Think',
        level: 2,
        content:
          "A wedding speech without transitions is a stack of disconnected paragraphs. Your audience doesn't have a table of contents. They can't flip back a page to check what you said two minutes ago. They're completely relying on you to guide them. Good transitions close the previous thought cleanly, signal that a shift is coming, and open the next section with fresh energy. Bad transitions just... stop. And then restart somewhere else entirely. Your audience feels the whiplash even if they can't put a name on why your speech felt choppy.",
      },
      {
        heading: 'The Bridge Technique',
        level: 2,
        content:
          "The simplest transition takes the last idea from one section and connects it directly to the first idea of the next. If you just told a story about the groom's catastrophic attempt at Thai green curry, you might say: \"And that's exactly the kind of reckless confidence that made him propose to someone way out of his league.\" You've closed the cooking disaster and opened the love story in one sentence. No seam. No \"moving on.\" The key is finding the emotional or thematic thread between two sections. There's almost always one hiding in there if you look for it.",
      },
      {
        heading: 'The Callback Transition',
        level: 2,
        content:
          "Callbacks are a comedian's favourite tool, and they translate perfectly to speeches. You reference something you said earlier and use it as a launchpad for your next point. If you opened with a joke about your nerves, you can circle back mid-speech: \"Remember when I said I was terrified? That was nothing compared to what Jake looked like the day he met Sarah's dad for the first time.\" Callbacks reward your audience for paying attention. They create a sense of cohesion, like the whole speech was planned rather than assembled from sticky notes at 2am. Even if it was.",
      },
      {
        heading: 'Time-Based Transitions',
        level: 2,
        content:
          "Chronological transitions are the training wheels of speechwriting, and there's absolutely no shame in using them. \"When I first met David...\" into \"Fast forward five years...\" into \"And now, standing here today...\" is a perfectly solid structure. The trick is avoiding mechanical precision. Don't say \"And then in 2019...\" unless the specific year actually matters. Use softer time markers instead: \"A few years later,\" \"Around the time they moved to Portland,\" \"Right before the engagement.\" These sound like storytelling. \"In Q3 of 2021\" sounds like a board meeting.",
      },
      {
        heading: 'The Emotional Pivot',
        level: 2,
        content:
          "Sometimes you need to shift from funny to serious, or the other way around. This is the hardest transition in any speech. The key: acknowledge the shift. \"OK, I'm going to be serious for a moment\" genuinely works. It gives the audience permission to change gears with you. The mistake is trying to slide from comedy to sincerity with no signal at all. The audience gets confused. Are we still laughing? Are we tearing up? Should I put my drink down? Tell them what's coming. A pause before the pivot works wonders too. Two seconds of silence is its own transition.",
      },
      {
        heading: 'Transitions to Avoid',
        level: 2,
        content:
          "Some transitions have been used so many times they've become invisible, and not in a helpful way. \"On a more serious note\" is overcooked. \"But seriously, folks\" makes you sound like you're performing in a cruise ship lounge. \"Moving on\" is what your GPS says when you've missed the turn. \"Which brings me to my next point\" is a PowerPoint slide in disguise. And \"Anyway\" is the verbal equivalent of throwing your hands up. If you catch yourself reaching for any of these, stop and ask: what actually connects these two sections? Find that connection and the transition writes itself.",
      },
      {
        heading: 'Practice the Seams',
        level: 2,
        content:
          "When you rehearse, and you absolutely should rehearse, pay extra attention to the transitions. These are where people stumble, lose their place, or speed up because the gap between sections feels uncomfortable. Practice each transition until it sounds natural coming out of your mouth. Record yourself and listen back. If it sounds clunky on the recording, it will sound worse live when your heart rate is 120 and your hands are doing their own thing. The goal: your speech should feel like one continuous thought, not seven separate paragraphs stapled together in a panic.",
      },
    ],
    ctaSupportingText: 'Get a speech that flows naturally',
    relatedExamples: ['balanced-wedding-speech', 'lighthearted-speech'],
    relatedArticles: ['wedding-speech-structure', 'how-to-write-a-wedding-speech'],
    tags: ['structure', 'transitions'],
  },

  // ─── wedding-toast-vs-wedding-speech ───
  {
    slug: 'wedding-toast-vs-wedding-speech',
    title: "How to Write a Wedding Toast vs. a Wedding Speech (Yes, They're Different)",
    category: 'Speech Tips',
    targetKeyword: 'wedding toast vs speech',
    metaDescription: 'A wedding toast is 60 seconds. A wedding speech is 3–5 minutes. Here\'s how to nail either one.',
    searchIntent: 'Confused about format',
    icon: '🍷',
    readingTime: 5,
    sections: [
      {
        heading: 'Wedding Toast vs. Wedding Speech: They Are Not the Same Thing',
        level: 2,
        content:
          "People use \"toast\" and \"speech\" interchangeably, which drives every wedding planner on the planet quietly insane. They're different things. Different lengths, different purposes, different amounts of preparation. Mix them up and you end up delivering a seven-minute monologue when everyone just wanted you to raise a glass, or a fifteen-second \"cheers\" when you were supposed to be the main event. Let's clear this up before someone makes a scheduling error they can't take back.",
      },
      {
        heading: 'What Exactly Is a Wedding Toast?',
        level: 2,
        content:
          "A toast is short. We're talking 30 to 90 seconds. It's a brief statement that ends with everyone raising their glasses and drinking. Full stop. A toast might include a quick sentiment, a one-liner, or a simple wish for the couple. It does not include your entire history with the bride. It does not include three anecdotes and a passage from Khalil Gibran. Think of a toast as an espresso: concentrated, punchy, and finished before anyone has time to check their phone. The format: say something warm or funny, aim it at the couple, invite the room to raise their glasses. Sit down.",
      },
      {
        heading: 'What Exactly Is a Wedding Speech?',
        level: 2,
        content:
          "A wedding speech runs three to five minutes and has actual structure: beginning, middle, end. It includes stories, observations, sincerity, and usually finishes with a toast. Best man speech, maid of honor speech, father of the bride speech: these are speeches. They have narrative arc. You write them in advance, rehearse them multiple times, and deliver them with at least a passing attempt at craft. A speech is the full meal. It should leave people feeling something genuine, not just holding a glass and wondering if that was it.",
      },
      {
        heading: 'The Length Difference Matters More Than You Think',
        level: 2,
        content:
          "Three minutes doesn't sound like much until you're standing in front of 150 people with a microphone and sweaty palms. And 60 seconds sounds like nothing until you realize it's plenty of time to say something genuinely moving, if you've chosen your words carefully. The problem comes when people split the difference. A two-minute sort-of-toast-sort-of-speech satisfies nobody. Too long for a toast. Too short for a speech. Know which one you've been asked to give and commit fully. If you're unsure, ask the couple or the planner. They will be relieved someone actually asked instead of just guessing.",
      },
      {
        heading: 'When You Have Been Asked to Give a Toast',
        level: 2,
        content:
          "If you've been asked for a toast, your assignment is brevity and impact. Write it out word for word. Yes, even though it's only 60 seconds. Especially because it's only 60 seconds. Every single word has to earn its spot. Open with one line that gets attention: a quick joke, a warm observation, a surprising detail about the couple. Follow it with two or three sentences of genuine feeling. Then raise your glass with a clear prompt: \"To Sarah and James.\" Do not ramble. Do not tell a story that requires setup and context. Do not explain how you know the couple unless it's relevant in one sentence. The entire point of a toast is brevity.",
      },
      {
        heading: 'When You Have Been Asked to Give a Speech',
        level: 2,
        content:
          "A speech gives you room to breathe. You can tell a story, develop a theme, build to something emotional. But that room is a trap if you're not disciplined, because more time means more opportunity to wander, repeat yourself, or outstay your welcome. Structure saves you. Open with something that hooks the room. Move into your main content: one or two stories, a few observations, maybe something you've noticed about the couple that nobody else has said. Shift to the relationship. Close with a toast. Five minutes maximum. Nobody has ever stood up at a wedding and said, \"Shame that speech was so short.\" Not once.",
      },
      {
        heading: 'Can a Speech End With a Toast? Should It?',
        level: 2,
        content:
          "Yes, and absolutely yes. Nearly every great wedding speech ends with a toast. It gives you a clean, decisive ending. It gives the audience something physical to do. And it punctuates the whole speech with a moment of collective action, which is a satisfying way to close. The toast at the end of a speech should be brief: one or two sentences max. You've done the heavy lifting already. Now you're putting a bow on it. \"Please raise your glasses to the two people who make me believe the good ones still find each other. To Emma and Chris.\" That's all you need.",
      },
      {
        heading: 'The Bottom Line',
        level: 2,
        content:
          "Know what you've been asked to deliver and deliver exactly that. If it's a toast, be the person who said something beautiful in under a minute and sat down like a legend. If it's a speech, be the person who held the room, made them laugh, made them feel something, and ended with a glass in the air. Both formats take preparation. And both are ruined by the same mistake: not knowing which one you were supposed to be giving.",
      },
    ],
    ctaSupportingText: 'Build a toast or a speech, your call',
    relatedExamples: ['short-sweet-speech', 'rehearsal-dinner-speech', 'engagement-party-speech'],
    relatedArticles: ['how-long-should-a-wedding-speech-be', 'wedding-speech-toast-ending'],
    tags: ['toast', 'format'],
  },

  // ─── best-wedding-speech-opening-lines ───
  {
    slug: 'best-wedding-speech-opening-lines',
    title: 'The Best Wedding Speech Opening Lines (Steal These)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech opening lines',
    metaDescription: '15 wedding speech opening lines that actually work, tested by real speakers.',
    searchIntent: 'Looking for examples',
    icon: '💬',
    readingTime: 5,
    sections: [
      {
        heading: '15 Wedding Speech Opening Lines That Actually Work',
        level: 2,
        content:
          "The first ten seconds of your speech determine whether 150 people lean in or start thinking about the canapés. No pressure. Most wedding speech openings fall flat because people default to the same three moves: introduce yourself, announce your nerves, or crack open a dictionary. All three are fine if your goal is to be instantly forgettable. These 15 openers are organized by tone so you can pick the one that matches your personality and your relationship to the couple.",
      },
      {
        heading: 'The Funny Openers',
        level: 2,
        content:
          "1. \"I've been told I have five minutes up here. I've also been told that if I mention the Las Vegas trip, that gets cut to zero.\" This works because it implies a story exists without telling it. Instant curiosity. 2. \"For those who don't know me, I'm [name], and for those who do know me, I'm sorry about last night's rehearsal dinner.\" Self-deprecating, warm, quick laugh. Gets the room on your side. 3. \"I Googled how to give a best man speech and the first result said to imagine everyone in their underwear. I tried that and now I can't make eye contact with the bride's grandmother.\" Silly and harmless. It acknowledges the awkwardness of public speaking without wallowing in it. 4. \"They say a good speech should be like a bride's dress: long enough to cover the essentials but short enough to keep things interesting.\" An old favourite. Sets expectations about length and tone in one go. 5. \"I asked [groom/bride] if there was anything I shouldn't mention tonight. The list was four pages long. So this should be fun.\"",
      },
      {
        heading: 'The Heartfelt Openers',
        level: 2,
        content:
          "6. \"I've known [name] for twenty years. In all that time, I've never seen them look at anything the way they looked at [partner] walking down that aisle today.\" Simple. Devastating. Only works if it's true, but when it is, nothing beats it. 7. \"When [name] called to tell me about the engagement, I didn't say congratulations first. I said: it's about time.\" This positions the love story as something everyone saw coming, and it puts you in the middle of it. 8. \"There are 200 people in this room tonight, and every single one of you is here because [couple] made your life better in some way. That tells you everything about who they are.\" Generous and outward-facing. Makes the whole room feel included from the first sentence. 9. \"My [brother/sister/child] found someone who makes them braver, kinder, and happier. As their [relation], that's all I ever wanted.\" Direct. Emotional. Zero preamble needed. 10. \"I wasn't nervous about this speech until I realized I have to put into words what [name] means to me. That's the hard part. Not the public speaking. The feeling.\"",
      },
      {
        heading: 'The Unexpected Openers',
        level: 2,
        content:
          "11. \"I'm not going to start by telling you how we met. I'm going to start by telling you about the Tuesday afternoon that made me realize these two were going to end up right here.\" Starting mid-story hooks people instantly. The specificity of \"Tuesday afternoon\" makes it feel unrehearsed even when it isn't. 12. \"Raise your hand if [name] has ever texted you at 2 AM about something completely unhinged.\" Audience participation gets energy up fast. Just make sure enough people will actually raise their hands. 13. \"I wrote this speech six times. The first five were too long, too weird, or made the groom cry at the rehearsal. So here's version six. Fingers crossed.\" Meta and charming. Shows you cared enough to revise, which is its own compliment. 14. \"Before I start, I need to say something to [partner]: thank you. Not for the obvious reasons. For the fact that [name] finally has someone else to call when their car makes a weird noise.\" Specific, funny, and quietly affectionate underneath. 15. \"[Name] asked me to be their best man last year. I said yes immediately. Then I hung up the phone and thought: I have to give a speech, don't I. So here we are. Both of us keeping promises.\"",
      },
      {
        heading: 'How to Choose the Right Opener for You',
        level: 2,
        content:
          "Pick the one that sounds like something you'd actually say out loud to people you know. If you're not naturally funny, don't force the comedy opener. If you don't cry at films, don't lead with raw emotion. The best opening line is the one where people in the audience hear it and think, \"That's so [your name].\" Your opener should also match the tone of the rest of your speech. A hilarious first line followed by five minutes of earnest sincerity creates whiplash. A tearful opener followed by a savage roast feels disjointed. Think of the opening as a promise about the ride they're about to go on.",
      },
      {
        heading: 'What to Do Right After Your Opening Line',
        level: 2,
        content:
          "Your opener buys you about ten seconds of goodwill. Spend them wisely. After your first line lands, move directly into your first story or your first real point. Don't stop to introduce yourself unless you genuinely must. Don't explain the joke. Don't pause to say \"But seriously.\" Keep the momentum rolling. The worst thing you can do is deliver a great first line and then stall out. Think of your opener as the first step in a run: the second step should already be in motion before the first one hits the ground.",
      },
      {
        heading: 'Openers to Avoid at All Costs',
        level: 2,
        content:
          "Please, do not open with: \"Webster's dictionary defines marriage as...\" Nobody has ever been moved by a dictionary definition at a wedding reception. Skip: \"I'm so nervous right now.\" Everyone can already see that. Saying it out loud doesn't help either of you. Avoid: \"Is this thing on?\" unless the microphone is genuinely not working, and even then, wrap it up quickly. And don't start with: \"For those who don't know me, I'm the best man.\" They know. There's a programme. You're the one holding the microphone. The context clues are abundant.",
      },
    ],
    ctaSupportingText: 'Start with the perfect line',
    relatedExamples: ['funny-wedding-speech', 'emotional-wedding-speech', 'roast-wedding-speech'],
    relatedArticles: ['how-to-start-a-wedding-speech', 'wedding-speech-jokes'],
    tags: ['opening', 'examples'],
  },

  // ─── wedding-speech-toast-ending ───
  {
    slug: 'wedding-speech-toast-ending',
    title: 'How to End a Wedding Speech with a Toast (Word-for-Word Examples)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech toast ending',
    metaDescription: "Not sure what to say when you raise the glass? Here are 10 toast endings you can use word-for-word.",
    searchIntent: 'Needs specific toast wording',
    icon: '🥂',
    readingTime: 5,
    sections: [
      {
        heading: '15 Wedding Speech Toast Endings You Can Absolutely Steal',
        level: 2,
        content:
          "You've written the speech. You've told the stories. You got the laughs, maybe even a few tears. Now you need to land it. The ending is where most people fumble because they didn't actually plan one. They just sort of... trail off, then blurt \"So yeah, cheers!\" while almost knocking over their champagne glass. Your ending is the last thing anyone hears. It's what they'll actually remember tomorrow. Here are 15 toast endings sorted by tone, ready for you to customize and deliver with your glass in the air.",
      },
      {
        heading: 'Classic and Warm',
        level: 2,
        content:
          "1. \"Please raise your glasses to [couple]. May your love be modern enough to survive anything and old-fashioned enough to last forever.\" Clean, balanced, sounds like you put thought into it. 2. \"To [couple]: may you always be as happy as you look right now.\" Simple and sincere. Works especially well when the couple is visibly glowing, which at their own wedding, they will be. 3. \"Here's to the couple who reminded everyone in this room that the real thing still exists. To [couple].\" This one hits harder than expected because it gives something to the audience too. 4. \"To [name] and [name]. I've never been more sure of anything than I am of you two.\" Short, confident, deeply personal. Best delivered by someone genuinely close to the couple.",
      },
      {
        heading: 'Funny and Light',
        level: 2,
        content:
          "5. \"To [couple]. May your wifi be strong, your coffee be hot, and your arguments be short.\" Modern, practical, gets a reliable laugh. 6. \"Please raise your glasses. To [couple]: may you love each other even when you don't like each other. Which, based on my experience, will be most Mondays.\" Honest and funny. Works best if you're married yourself and can sell it with the right look. 7. \"To the bride and groom. May the rest of your lives be as good as your wedding photographer is going to make today look.\" A gentle dig at Instagram culture that plays well across generations. 8. \"To [couple]. I'd say don't go to bed angry, but honestly, sometimes sleep is more important. Just don't go to bed without saying I love you.\" Funny with a warm landing. Gets a laugh, then a quiet \"aww.\"",
      },
      {
        heading: 'Sentimental and Poetic',
        level: 2,
        content:
          "9. \"To [couple]. You found each other in a world that makes it really hard to find anything. Don't ever take that for granted. We certainly won't.\" This carries real emotional weight. Give it a beat before you raise your glass. 10. \"Here's to the kind of love that makes everyone around it feel a little braver. To [couple].\" Aspirational without being saccharine. It elevates the couple without making it sound like a Hallmark card. 11. \"To [name] and [name]. I watched one of you become better because of the other, and I'll spend the rest of my life grateful for that.\" Deeply personal. Save this one for when you've genuinely witnessed someone grow. 12. \"Please raise your glasses to a love story that's just getting started. To [couple], and to every chapter that comes next.\" Forward-looking and hopeful. Works well for younger couples especially.",
      },
      {
        heading: 'Bold and Memorable',
        level: 2,
        content:
          "13. \"To [couple]. If marriage is a journey, you two just got the best travel partner imaginable. Don't forget to enjoy the layovers.\" A little unexpected, a little philosophical. It sticks with people. 14. \"Everyone in this room has a version of [couple]'s story they love best. The first date story. The proposal story. The story about the IKEA trip that almost ended it all. But my favourite chapter is the one that starts tonight. To [couple].\" Specific enough to feel real, universal enough that everyone connects. 15. \"To [couple]. You don't need my blessing, my advice, or my toast. But you have all three. Cheers.\" Confident and a little cheeky. A strong closer for someone who can deliver it with a grin.",
      },
      {
        heading: 'How to Deliver the Toast Ending',
        level: 2,
        content:
          "Delivery matters as much as the words themselves. The sequence: finish your last line. Pause for one full second. Pick up your glass or signal for others to do the same. Say \"Please raise your glasses\" or \"If you'll join me.\" Deliver your closing line. Say \"To [couple]\" and raise your glass high. The pause before the toast is everything. It tells the room something meaningful is about to happen. Don't rush through it. Don't mumble. Don't stare at the floor. Look at the couple, or look at the room, and say it like it means something to you. Because it does.",
      },
      {
        heading: 'Customizing These for Your Speech',
        level: 2,
        content:
          "These are starting points, not gospel. Change the words to fit how you actually talk. If number 6 resonates but you're not married, tweak it. If number 11 is close but you want to add a specific detail, go for it. The best toast endings feel personal even when they follow a template. Add names, add references only these people would get, add a detail that belongs to this specific couple. \"May your love be as strong as your matching opinions about pizza toppings\" will always land harder than any generic wish, because it belongs to them. The template gets you 80% there. You make the last 20% real.",
      },
      {
        heading: 'The One Rule You Cannot Break',
        level: 2,
        content:
          "End on the couple. Not on yourself, not on a joke about the bar, not on a meandering afterthought you just remembered. The last words out of your mouth should be their names. Everything in your speech has been building toward this moment. All the humor, the stories, the sincerity, it all funnels down to two people and a raised glass. Make it about them. Always.",
      },
    ],
    ctaSupportingText: 'Get a speech with the perfect ending built in',
    relatedExamples: ['groom-speech', 'father-of-bride-speech', 'joint-couple-speech'],
    relatedArticles: ['how-to-end-a-wedding-speech', 'wedding-toast-vs-wedding-speech'],
    tags: ['toast', 'ending', 'examples'],
  },

  // ─── quotes-in-wedding-speech ───
  {
    slug: 'quotes-in-wedding-speech',
    title: 'How to Quote Someone in a Wedding Speech (Without Being Cringe)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech quotes',
    metaDescription: 'Quotes can elevate a wedding speech or make it feel lazy. Here\'s how to use them well.',
    searchIntent: 'Adding polish',
    icon: '📜',
    readingTime: 5,
    sections: [
      {
        heading: 'Quotes in Wedding Speeches: When They Work and When They Are Lazy',
        level: 2,
        content:
          "Most quotes in wedding speeches are a crutch. They're what people reach for when they don't trust their own words to carry the moment. And that instinct makes sense. Saying something meaningful about love is hard. But borrowing someone else's words to do it is almost always the wrong move. Almost. There are a handful of situations where a quote genuinely elevates a speech. The trick is knowing when you're using a quote as a scalpel versus leaning on it as a walking stick.",
      },
      {
        heading: 'When Quotes Actually Work',
        level: 2,
        content:
          "A quote works when it has a personal connection to the couple. If the bride's favourite book is Pride and Prejudice and you quote Darcy's letter, that's not lazy. That's a love letter to her personality. A quote also works when it sets up your own thought. Use it as a springboard, not a destination. \"Shakespeare wrote that love is not love which alters when it alteration finds. I never understood that line until I watched [name] care for [name] through the worst year of their life.\" The quote opens the door. Your words walk through it. Finally, quotes work when they're unexpected. Nobody needs to hear \"Love is patient, love is kind\" one more time. But a line from a comedian the couple loves, a song lyric with a specific story behind it, or something their grandmother said at Christmas dinner? That can be electric.",
      },
      {
        heading: 'When Quotes Are Lazy',
        level: 2,
        content:
          "If you're opening your speech with the first Google result for \"best love quotes,\" stop. If the quote applies to literally any couple who has ever existed, it's adding nothing. If you're using it because you ran out of your own material, the audience will feel that gap. It reads as filler from someone who hit a wall. The worst offenders: anything from a Hallmark card, generic Rumi translations that circulate on Pinterest, \"Where there is love there is life\" (Gandhi probably didn't say this in the context people think), and any quote that starts with \"They say.\" Who says? Nobody can tell you. That's the problem.",
      },
      {
        heading: 'The Overused Quotes Hall of Shame',
        level: 2,
        content:
          "If you're considering any of these, reconsider immediately. \"Love is patient, love is kind\" from Corinthians: beautiful in a church ceremony, wallpaper in a reception speech. \"To love and be loved is to feel the sun from both sides,\" attributed to David Viscott: sounds lovely, means almost nothing when you examine it. \"A successful marriage requires falling in love many times, always with the same person\" from Mignon McLaughlin: clever the first time, but it's been in roughly 40,000 speeches this year alone. \"You know you're in love when you can't fall asleep because reality is finally better than your dreams,\" attributed to Dr. Seuss, who almost certainly never said it. If your quote appears on the first page of Google, it's been everywhere. Find something else.",
      },
      {
        heading: 'How to Use a Quote Without Sounding Like a Greeting Card',
        level: 2,
        content:
          "Rule one: the quote should never be the emotional climax of your speech. That job belongs to your own words. Rule two: introduce it with context. Don't drop it in cold. Tell the room why this particular line matters. \"There's a lyric from a song [name] used to play on repeat in college, and I never understood why until tonight.\" Now the quote belongs to someone specific. It has a frame. Rule three: keep it short. Two lines maximum. A full stanza is a poetry recital, not a wedding speech. Rule four: transition out of the quote into your own words immediately. The quote opens a door. You walk through it and keep going.",
      },
      {
        heading: 'Better Alternatives to Famous Quotes',
        level: 2,
        content:
          "You know what's better than quoting a dead poet? Quoting the couple. If the bride once said something hilarious or unexpectedly profound about love, use that. If the groom texted you something uncharacteristically sweet after the proposal, read it out (with permission). Quote their vows back to them. Quote something their parents said at dinner. Quote something a kid at the wedding said during cocktail hour. These quotes are a thousand times more powerful than anything from a book of quotations because they belong to the people in the room. They can't be Googled. They're real, and real always wins.",
      },
      {
        heading: 'The Verdict',
        level: 2,
        content:
          "Use a quote if it's personal, specific, and brief. Skip it if it's generic, Googleable, or doing the emotional work your own words should be doing. When in doubt, leave it out. Your own clumsy, honest, imperfect words about someone you love will always land harder than the most polished line from a stranger who never met them. You were asked to give this speech because of who you are to the couple, not because of your ability to search the internet for poetry.",
      },
    ],
    ctaSupportingText: 'Make it personal, not Pinterest',
    relatedExamples: ['sentimental-speech', 'mother-of-bride-speech'],
    relatedArticles: ['how-to-make-wedding-speech-personal', 'wedding-speech-dos-and-donts'],
    tags: ['quotes', 'polish'],
  },
  // ─── wedding-toast-vs-wedding-speech ───
  {
    slug: 'wedding-toast-vs-wedding-speech',
    title: "How to Write a Wedding Toast vs. a Wedding Speech (Yes, They're Different)",
    category: 'Speech Tips',
    targetKeyword: 'wedding toast vs speech',
    metaDescription: 'A wedding toast is 60 seconds. A wedding speech is 3–5 minutes. Here\'s how to nail either one.',
    searchIntent: 'Confused about format',
    icon: '🍷',
    readingTime: 5,
    sections: [
      {
        heading: 'Wedding Toast vs. Wedding Speech: They Are Not the Same Thing',
        level: 2,
        content:
          "People use 'toast' and 'speech' like they mean the same thing, and wedding planners everywhere are grinding their teeth about it. They have different lengths. Different purposes. Different prep. Mixing them up is how you end up giving a seven-minute soliloquy when the MC just wanted you to raise a glass, or how you deliver a rushed 'cheers!' when you were supposed to be telling stories about the bride for four minutes. So let's untangle this before you commit to the wrong one.",
      },
      {
        heading: 'What Exactly Is a Wedding Toast?',
        level: 2,
        content:
          "A toast is short. Thirty to ninety seconds. You say something warm or funny, you point it at the couple, everyone raises their glass and drinks. That's the whole thing. A toast might include a quick sentiment, a one-liner, or a brief wish. It does not include your entire history with the bride. It does not include three anecdotes and a quote from Rumi. It's the espresso shot of wedding remarks: concentrated, done before anyone checks their phone. Format: one or two lines of genuine feeling directed at the couple, an invitation to raise glasses, the word 'cheers.' Sit down.",
      },
      {
        heading: 'What Exactly Is a Wedding Speech?',
        level: 2,
        content:
          "A speech runs three to five minutes and has actual structure. Beginning, middle, end. Stories, a joke or two, some sincerity, and usually a toast at the finish. Best man speech, maid of honor speech, father of the bride speech: those are speeches. They have narrative. You write them in advance, you rehearse them multiple times (or at least you should), and you deliver them with some care. A speech is the full meal. People should feel something by the end, not just be holding a glass.",
      },
      {
        heading: 'The Length Difference Matters More Than You Think',
        level: 2,
        content:
          "Three minutes doesn't sound like much until you're standing in front of 150 people holding a mic that's feeding back. And sixty seconds sounds like nothing until you try to say something genuinely moving in that window and realize it's plenty of time, if you've chosen your words carefully. The problem is when people split the difference. A two-minute sort-of-toast-sort-of-speech satisfies nobody. Too long for a toast. Too short for a speech. Commit to one. If you're not sure which you've been asked to give, ask the couple or the wedding planner. They will be genuinely relieved that someone thought to check.",
      },
      {
        heading: 'When You Have Been Asked to Give a Toast',
        level: 2,
        content:
          "Your job: be brief and memorable. Write it out word for word. Yes, even though it's short. Especially because it's short. Every word has to earn its place. Open with one line that catches attention: a quick joke, a sweet observation, a surprising fact about the couple. Follow with two or three sentences of genuine warmth. Then raise your glass and give the room a clear cue: 'To Sarah and James.' Do not ramble. Do not tell a story that needs setup. Do not spend forty-five seconds explaining how you know the couple unless it's relevant in a single sentence. Brevity is literally the entire point.",
      },
      {
        heading: 'When You Have Been Asked to Give a Speech',
        level: 2,
        content:
          "A speech gives you room to breathe. You can tell a story, develop a theme, build toward an emotional high point. But that room is a trap if you're not careful, because more time just means more opportunity to wander, repeat yourself, or overstay your welcome. You need structure. Open strong with something that hooks the room. Move into your main content: one or two stories, a few observations. Shift to the couple and their relationship. Close with a toast. Five minutes maximum. No one in the history of weddings has complained that a speech was too short. Plenty have complained about the opposite.",
      },
      {
        heading: 'Can a Speech End With a Toast? Should It?',
        level: 2,
        content:
          "Yes, and absolutely yes. Almost every great wedding speech ends with a toast. It gives you a clean finish. It gives the audience something to do with their hands. And it turns the whole room into one collective moment. The toast at the end of a speech should be one or two sentences max. You've already done the heavy lifting. You're just putting a neat ending on it. 'Please raise your glasses to the two people who convinced me that love isn't just something that happens in movies. To Emma and Chris.' That's all it takes.",
      },
      {
        heading: 'The Bottom Line',
        level: 2,
        content:
          "Figure out what you've been asked to deliver and deliver exactly that. If it's a toast, be the person who said something beautiful in under a minute and sat down like a legend. If it's a speech, be the person who held the room, got a few laughs, maybe drew a tear, and ended with a glass in the air. Both are valuable. Both take real preparation. And both are ruined by the same thing: not knowing which one you're supposed to be giving.",
      },
    ],
    ctaSupportingText: 'Build a toast or a speech, your call',
    relatedExamples: ['short-sweet-speech', 'rehearsal-dinner-speech', 'engagement-party-speech'],
    relatedArticles: ['how-long-should-a-wedding-speech-be', 'wedding-speech-toast-ending'],
    tags: ['toast', 'format'],
  },

  // ─── best-wedding-speech-opening-lines ───
  {
    slug: 'best-wedding-speech-opening-lines',
    title: 'The Best Wedding Speech Opening Lines (Steal These)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech opening lines',
    metaDescription: '15 wedding speech opening lines that actually work, tested by real speakers.',
    searchIntent: 'Looking for examples',
    icon: '💬',
    readingTime: 5,
    sections: [
      {
        heading: '15 Wedding Speech Opening Lines That Actually Work',
        level: 2,
        content:
          "You get about ten seconds before the room decides whether to lean in or start whispering to the person next to them. That's it. And most wedding speech openings blow it because people default to the same three moves: introduce yourself, announce that you're nervous, or crack open a dictionary definition. All perfectly forgettable. These 15 openers have been tested in actual rooms with actual humans. They're sorted by vibe so you can match one to your personality and your relationship to the couple.",
      },
      {
        heading: 'The Funny Openers',
        level: 2,
        content:
          "1. 'I've been told I have five minutes up here. I've also been told that if I mention the Las Vegas trip, that gets cut to zero.' This works because it implies a story without telling it. Instant curiosity. Use it when you genuinely have a funny dynamic with the groom or bride. 2. 'For those who don't know me, I'm [name], and for those who do know me, I'm sorry about last night's rehearsal dinner.' Self-deprecating, warm, quick laugh. 3. 'I Googled how to give a best man speech and the first result said to imagine everyone in their underwear. I tried that and now I can't make eye contact with the bride's grandmother.' Silly, harmless, and it names the awkwardness of public speaking without wallowing in it. 4. 'They say a good speech should be like a bride's dress: long enough to cover the essentials but short enough to keep things interesting.' A classic for a reason. Sets expectations for length and tone in one line. 5. 'I asked [groom/bride] if there was anything I shouldn't mention tonight. The list was four pages long. So this should be fun.'",
      },
      {
        heading: 'The Heartfelt Openers',
        level: 2,
        content:
          "6. 'I've known [name] for twenty years. In all that time, I've never seen them look at anything the way they looked at [partner] walking down that aisle today.' Simple and devastating. Only works if it's actually true, obviously. 7. 'When [name] called to tell me about the engagement, I didn't say congratulations first. I said: it's about time.' Implies a love story everyone saw coming, positions you as someone who's been watching it unfold. 8. 'There are 200 people in this room tonight, and every single one of you is here because [couple] made your life better in some way. That tells you everything you need to know about who they are.' Generous and outward-facing. Makes the audience feel included from the jump. 9. 'My [brother/sister/child] found someone who makes them braver, kinder, and happier. As their [relation], that's all I ever wanted.' Direct. Emotional. No preamble needed. 10. 'I wasn't nervous about this speech until I realized I have to put into words what [name] means to me. That's the hard part. Not the public speaking. The feeling.'",
      },
      {
        heading: 'The Unexpected Openers',
        level: 2,
        content:
          "11. 'I'm not going to start by telling you how we met. I'm going to start by telling you about the Tuesday afternoon that made me realize these two were going to end up right here.' Starting mid-story hooks people immediately. The specificity of 'Tuesday afternoon' makes it sound unrehearsed even when it's not. 12. 'Raise your hand if [name] has ever texted you at 2 AM about something completely unhinged.' Audience participation gets the energy up fast. Just make sure enough people will actually raise their hands, or it dies. 13. 'I wrote this speech six times. The first five were too long, too weird, or made the groom cry at the rehearsal. So here's version six. Fingers crossed.' Meta and charming. Shows you cared enough to revise. 14. 'Before I start, I need to say something to [partner]: thank you. Not for the obvious reasons. For the fact that [name] finally has someone else to call when their car makes a weird noise.' Specific, funny, subtly affectionate. 15. '[Name] asked me to be their best man last year. I said yes immediately. Then I hung up the phone and thought: I have to give a speech, don't I. So here we are. Both of us keeping promises.'",
      },
      {
        heading: 'How to Choose the Right Opener for You',
        level: 2,
        content:
          "Pick the opener that sounds like something you'd actually say out loud. If you're not naturally funny, don't force a joke. If you're not naturally sentimental, don't open with tears. You want the audience to hear your first line and think, 'That's so [your name].' It should also match the rest of your speech tonally. A hilarious opener followed by five minutes of earnest sincerity creates whiplash. A tender opener followed by a roast feels jarring. Your opening line is a promise to the room about what kind of ride they're in for. Keep that promise.",
      },
      {
        heading: 'What to Do Right After Your Opening Line',
        level: 2,
        content:
          "Your opener buys you about ten seconds of goodwill. Use them. After your first line lands, move directly into your first story or your first point. Don't stop to introduce yourself unless you genuinely need to. Don't explain the opener. Don't say 'But seriously.' Just keep the momentum going. The worst thing you can do is nail a great first line and then stall while you figure out what comes next. Your second sentence should already be loaded and ready before the first one leaves your mouth.",
      },
      {
        heading: 'Openers to Avoid at All Costs',
        level: 2,
        content:
          "Do not open with: 'Webster's dictionary defines marriage as...' Nobody in the history of wedding receptions has been moved by a dictionary definition. Also skip: 'I'm so nervous right now.' Everyone can already see that. Saying it out loud doesn't help you or them. Don't open with: 'Is this thing on?' unless the microphone is genuinely broken, and even then, wrap it up. And please don't start with: 'For those who don't know me, I'm the best man.' They know. There's a program. You're holding a microphone. Context clues are doing the heavy lifting already.",
      },
    ],
    ctaSupportingText: 'Start with the perfect line',
    relatedExamples: ['funny-wedding-speech', 'emotional-wedding-speech', 'roast-wedding-speech'],
    relatedArticles: ['how-to-start-a-wedding-speech', 'wedding-speech-jokes'],
    tags: ['opening', 'examples'],
  },

  // ─── wedding-speech-toast-ending ───
  {
    slug: 'wedding-speech-toast-ending',
    title: 'How to End a Wedding Speech with a Toast (Word-for-Word Examples)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech toast ending',
    metaDescription: "Not sure what to say when you raise the glass? Here are 10 toast endings you can use word-for-word.",
    searchIntent: 'Needs specific toast wording',
    icon: '🥂',
    readingTime: 5,
    sections: [
      {
        heading: '15 Wedding Speech Toast Endings You Can Absolutely Steal',
        level: 2,
        content:
          "You've written the speech. You've told the stories. You got a laugh, maybe even a few wet eyes. Now you need to land it. And this is where most people fumble, because they never actually planned an ending. They just sort of... trail off and then mutter 'So yeah, cheers!' while lifting a champagne glass they nearly knock over. Your ending is the last thing people remember. It deserves more than an improvised afterthought. Here are 15 toast endings sorted by tone, ready for you to customize.",
      },
      {
        heading: 'Classic and Warm',
        level: 2,
        content:
          "1. 'Please raise your glasses to [couple]. May your love be modern enough to survive anything and old-fashioned enough to last forever.' Clean, balanced, sounds like you actually thought about it. 2. 'To [couple]: may you always be as happy as you look right now.' Simple and sincere. Works especially well when the couple is visibly glowing, which, at their own wedding, they probably are. 3. 'Here's to the couple who reminded everyone in this room that the real thing still exists. To [couple].' This one lands harder than you'd expect because it's generous to the audience too. 4. 'To [name] and [name]. I've never been more sure of anything than I am of you two.' Short, confident, deeply personal. Best delivered by someone who's genuinely close to them.",
      },
      {
        heading: 'Funny and Light',
        level: 2,
        content:
          "5. 'To [couple]. May your wifi be strong, your coffee be hot, and your arguments be short.' Modern, practical, reliable laugh. 6. 'Please raise your glasses. To [couple]: may you love each other even when you don't like each other. Which, based on my experience, will be most Mondays.' Honest and funny. Best delivered by someone who's actually married. 7. 'To the bride and groom. May the rest of your lives be as good as your wedding photographer is going to make today look.' A gentle dig at social media culture that consistently plays well. 8. 'To [couple]. I'd say don't go to bed angry, but honestly, sometimes sleep is more important. Just don't go to bed without saying I love you.' Funny with a warm landing. That contrast is what makes it stick.",
      },
      {
        heading: 'Sentimental and Poetic',
        level: 2,
        content:
          "9. 'To [couple]. You found each other in a world that makes it really hard to find anything. Don't ever take that for granted. We certainly won't.' This one carries real emotional weight. Give it a beat before you raise your glass. 10. 'Here's to the kind of love that makes everyone around it feel a little braver. To [couple].' Aspirational and generous. Elevates the couple without turning them into a greeting card. 11. 'To [name] and [name]. I watched one of you become better because of the other, and I'll spend the rest of my life grateful for that.' Deeply personal. Use it when you've genuinely witnessed growth in someone you love. 12. 'Please raise your glasses to a love story that's just getting started. To [couple], and to every chapter that comes next.' Forward-looking, hopeful. Works particularly well for younger couples.",
      },
      {
        heading: 'Bold and Memorable',
        level: 2,
        content:
          "13. 'To [couple]. If marriage is a journey, you two just got the best travel partner imaginable. Don't forget to enjoy the layovers.' Slightly unexpected, a little philosophical, and it sticks. 14. 'Everyone in this room has a version of [couple]'s story they love best. The first date story. The proposal story. The story about the IKEA trip that almost ended it all. But my favorite chapter is the one that starts tonight. To [couple].' Specific enough to feel real, universal enough that everyone connects. 15. 'To [couple]. You don't need my blessing, my advice, or my toast. But you have all three. Cheers.' Confident and a little cheeky. Strong closer for someone with natural swagger.",
      },
      {
        heading: 'How to Deliver the Toast Ending',
        level: 2,
        content:
          "Delivery matters as much as the words. Here's the sequence: finish your last line, pause for a full second, pick up your glass (or signal for others to do so), say 'Please raise your glasses' or 'If you'll join me,' then deliver your closing line, then say 'To [couple]' and raise your glass. That pause before the toast is critical. It tells the room something important is about to happen. Don't rush it. Don't mumble it. Don't stare at the tablecloth. Look at the couple, or look at the room, and say it like you mean it. You do mean it. Let that show.",
      },
      {
        heading: 'Customizing These for Your Speech',
        level: 2,
        content:
          "These are starting points, not scripts carved in stone. Change the words to fit your voice. If number 6 is your favorite but you're not married, tweak it. If number 11 resonates but you want to add a specific detail, go for it. The best toast endings feel personal even when they follow a template. Add names, add inside references, add a word or phrase that belongs to the couple. 'May your love be as strong as your matching opinions about pizza toppings' beats any generic toast because it's theirs. The structure gets you most of the way there. The last stretch is you making it real.",
      },
      {
        heading: 'The One Rule You Cannot Break',
        level: 2,
        content:
          "End on the couple. Not on yourself, not on a joke about the open bar, not on a rambling afterthought you forgot to cut. The last words out of your mouth should be their names. Every story, every joke, every sincere line has been building to this. Two people and a raised glass. That's where it all points. Make it about them. Always.",
      },
    ],
    ctaSupportingText: 'Get a speech with the perfect ending built in',
    relatedExamples: ['groom-speech', 'father-of-bride-speech', 'joint-couple-speech'],
    relatedArticles: ['how-to-end-a-wedding-speech', 'wedding-toast-vs-wedding-speech'],
    tags: ['toast', 'ending', 'examples'],
  },

  // ─── quotes-in-wedding-speech ───
  {
    slug: 'quotes-in-wedding-speech',
    title: 'How to Quote Someone in a Wedding Speech (Without Being Cringe)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech quotes',
    metaDescription: 'Quotes can elevate a wedding speech or make it feel lazy. Here\'s how to use them well.',
    searchIntent: 'Adding polish',
    icon: '📜',
    readingTime: 5,
    sections: [
      {
        heading: 'Quotes in Wedding Speeches: When They Work and When They Are Lazy',
        level: 2,
        content:
          "Straight up: most quotes in wedding speeches are a crutch. They're what people reach for when they don't trust their own words to carry the moment. And fair enough. Saying something meaningful about love is genuinely hard. But borrowing someone else's words is almost always the wrong move. Almost. There are a few situations where a quote genuinely elevates a speech. The trick is knowing whether you're using it as a scalpel or leaning on it because you ran out of things to say.",
      },
      {
        heading: 'When Quotes Actually Work',
        level: 2,
        content:
          "A quote works when it has a personal connection to the couple. If the bride's favorite book is Pride and Prejudice and you quote Darcy's letter, that's not lazy. That's a love letter to her personality. A quote also works as a springboard for your own thought. Use it as a setup, not a destination. 'Shakespeare said love is not love which alters when it alteration finds. I didn't understand that line until I watched [name] sit beside [name] every single day during the worst year of their life.' The quote opens the door. Your words walk through it. Quotes also work when they're unexpected. Nobody needs to hear 'Love is patient, love is kind' for the 400th time. But a well-placed line from a comedian, a song lyric with specific meaning, or something the couple's grandmother once said at Sunday dinner? That can be electric.",
      },
      {
        heading: 'When Quotes Are Lazy',
        level: 2,
        content:
          "If your process was Googling 'best love quotes' and picking one from the first page, stop right there. If the quote could apply to literally any couple who has ever existed, it's not adding anything. If you're reaching for someone else's words because you've run out of your own, it will feel exactly like that: filler. The worst offenders: anything from a Hallmark card, those generic Rumi translations that circulate on Pinterest, 'Where there is love there is life' (Gandhi probably didn't even say that in context), and any quote that starts with 'They say.' Who says? Nobody knows. That's the problem.",
      },
      {
        heading: 'The Overused Quotes Hall of Shame',
        level: 2,
        content:
          "If you're considering any of these, think again. 'Love is patient, love is kind' from Corinthians: beautiful in church, wallpaper in a speech. 'To love and be loved is to feel the sun from both sides' attributed to David Viscott: sounds lovely, means almost nothing when you actually sit with it. 'A successful marriage requires falling in love many times, always with the same person' from Mignon McLaughlin: clever but so overused the punch is gone. 'You know you're in love when you can't fall asleep because reality is finally better than your dreams' attributed to Dr. Seuss, who almost certainly never said it. If your quote appears on the first page of Google for 'wedding quotes,' it's been in roughly 40,000 speeches this year alone. Find something else.",
      },
      {
        heading: 'How to Use a Quote Without Sounding Like a Greeting Card',
        level: 2,
        content:
          "Rule one: never let the quote be the emotional climax of your speech. That job belongs to you. Rule two: introduce the quote with context. Don't just drop it in cold. Tell the room why this particular line matters to you or to the couple. 'There's a line in a song that [name] used to play on repeat during college, and I never understood why until tonight.' Now the quote has a frame. It belongs to someone. Rule three: keep it short. A full stanza of poetry turns your speech into a poetry recital. One or two lines, maximum. Rule four: transition out of the quote into your own words immediately. The quote opens a door. You walk through it.",
      },
      {
        heading: 'Better Alternatives to Famous Quotes',
        level: 2,
        content:
          "You know what lands harder than quoting a dead poet? Quoting the couple. If the bride once said something hilarious or unexpectedly profound about love, use that. If the groom texted you something uncharacteristically sweet after the proposal, read it out loud (with permission). Quote their vows back to them. Quote something their parents said at the engagement dinner. Quote something a four-year-old flower girl said during cocktail hour. These 'quotes' are a thousand times more powerful than anything from a book of quotations because they belong to the people in the room. They can't be Googled. They're unrepeatable.",
      },
      {
        heading: 'The Verdict',
        level: 2,
        content:
          "Use a quote if it's personal, specific, and brief. Skip it if it's generic, Googleable, or doing emotional work your own words should be handling. When in doubt, leave it out. Your own clumsy, honest, imperfect words about someone you love will always hit harder than the most polished line from someone who never met them. You were asked to give this speech for a reason, and it wasn't your talent for internet research.",
      },
    ],
    ctaSupportingText: 'Make it personal, not Pinterest',
    relatedExamples: ['sentimental-speech', 'mother-of-bride-speech'],
    relatedArticles: ['how-to-make-wedding-speech-personal', 'wedding-speech-dos-and-donts'],
    tags: ['quotes', 'polish'],
  },

  // ─── wedding-speech-dos-and-donts ───
  {
    slug: 'wedding-speech-dos-and-donts',
    title: 'Wedding Speech Dos and Don\'ts: The Complete Checklist',
    category: 'Speech Tips',
    targetKeyword: "wedding speech dos and don't",
    metaDescription: 'Everything you should and shouldn\'t do in a wedding speech. Print this list before you write a word.',
    searchIntent: 'General guidance',
    icon: '✅',
    readingTime: 5,
    sections: [
      {
        heading: "Wedding Speech Dos and Don'ts: The Complete List",
        level: 2,
        content:
          "Every wedding speech guide tells you the same things: be yourself, keep it short, don't mention exes. Great. Not very useful. Wedding speeches fail in very specific, very preventable ways, and vague advice doesn't stop any of them. This is the full list of dos and don'ts, pulled from hundreds of real speeches that went right and wrong. Save it. Print it. Tape it to your bathroom mirror the week before.",
      },
      {
        heading: 'The Dos: What to Actually Do',
        level: 2,
        content:
          "Write your speech out in full. Not bullet points, not a rough outline. The whole thing, word for word. You can loosen it when you deliver it, but write the tight version first. Practice out loud at least three times. Reading silently in your head doesn't count. You need to hear the rhythm, catch the stumbles, and actually time it. Keep it under five minutes. Three to four is the sweet spot for most speeches. Open with something that gets the room's attention: a joke, a surprising statement, a vivid image. Include at least one specific story, because specifics are what make a speech stick in people's memory. Address both halves of the couple, even if you only know one of them well. End with a clear toast. Give the audience a signal that you're done and something to do about it.",
      },
      {
        heading: "The Don'ts: What Will Ruin Everything",
        level: 2,
        content:
          "Don't mention exes. Ever. For any reason. There is no version of this that goes well. Don't make inside jokes that only two people understand. If more than half the room looks confused, the joke has failed. Don't get drunk before your speech. One drink to take the edge off, fine. Save the celebrating for after. Don't read off your phone with your head buried the entire time. Notes are fine. A hostage video is not. Don't go over five minutes. Don't wing it. Don't open with 'For those of you who don't know me.' And don't use the speech to settle scores, air grievances, or deliver passive-aggressive comments dressed up as humor.",
      },
      {
        heading: 'The Subtle Dos Most People Miss',
        level: 2,
        content:
          "Make eye contact with the couple during the emotional parts and with the audience during the funny parts. Vary your pace: slow down for sincere moments, speed up slightly for the lighter stuff. Acknowledge the other families. A single line welcoming the other side costs nothing and means a lot. Have a glass of water nearby. Dry mouth is real and it will absolutely find you at the worst possible moment. Thank the hosts if appropriate. And remember your job: make the couple look good. Not yourself. Every story, every joke, every observation should ultimately reflect well on them.",
      },
      {
        heading: "The Subtle Don'ts That Seem Harmless But Aren't",
        level: 2,
        content:
          "Don't apologize for your speech before you give it. 'I'm not great at public speaking' sets the bar on the floor and the audience's expectations follow it right down there. Don't try to engineer tears. If they happen naturally, wonderful. But manufacturing emotion feels manipulative and audiences can tell. Don't tell stories where you're the hero instead of the couple. Don't turn your speech into a stand-up audition. Two or three solid laughs is plenty. Don't comment on how attractive the bridesmaids or groomsmen are. It's creepy every single time, even when it gets a nervous laugh. And don't propose, announce a pregnancy, or drop any personal bombshell during someone else's wedding speech. This day is not about you.",
      },
      {
        heading: 'Dos and Don\'ts for Specific Situations',
        level: 2,
        content:
          "Speaking at a second wedding: acknowledge this as a fresh start and a celebration. Don't reference the first marriage. If there are children from previous relationships: include them warmly. Don't ignore them or make things awkward. If a close family member has recently passed: mention them briefly and lovingly. Don't turn the speech into a eulogy. If the couple has been together for years: joke about how long it took. Don't imply the marriage is overdue or question why they waited. Speaking in a second language: keep it simple and speak slowly. Don't apologize for your accent. Nobody cares about your accent. They care about your sincerity.",
      },
      {
        heading: 'The Golden Rule of Wedding Speeches',
        level: 2,
        content:
          "When in doubt, ask yourself: will this make the couple happy to hear? If the answer is anything other than an immediate yes, cut it. Your speech is a gift. Not a roast, not a therapy session, not a performance review. A gift. The best gifts show you paid attention, that you care, and that you put in effort. Everything beyond that is just technique.",
      },
    ],
    ctaSupportingText: 'Avoid the pitfalls automatically',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'bridesmaid-speech'],
    relatedArticles: ['wedding-speech-mistakes', 'what-not-to-say-wedding-speech'],
    tags: ['checklist', 'guidance'],
  },

  // ─── wedding-speech-dont-know-well ───
  {
    slug: 'wedding-speech-dont-know-well',
    title: "How to Write a Wedding Speech for Someone You Don't Know That Well",
    category: 'Speech Tips',
    targetKeyword: "wedding speech don't know well",
    metaDescription: "Asked to speak at a wedding for someone you barely know? It happens. Here's how to make it genuine.",
    searchIntent: 'Awkward situation',
    icon: '🤔',
    readingTime: 5,
    sections: [
      {
        heading: "How to Write a Wedding Speech When You Barely Know the Couple",
        level: 2,
        content:
          "Nobody talks about this, but it happens all the time: you've been asked to give a speech at a wedding and you don't really know one or both halves of the couple. Maybe you're the best man but you've drifted apart over the last few years. Maybe you're maid of honor for a college friend whose partner you've met exactly twice. Maybe you're a step-parent who came into the picture fairly recently. Whatever the reason, you're standing in front of a crowd expected to say something personal about people you're not that personal with. This is more common than anyone admits, and there's a solid approach for handling it.",
      },
      {
        heading: 'Do Your Homework',
        level: 2,
        content:
          "If you don't have enough material from personal experience, go get some. Call the couple's friends and family. Ask open-ended questions: what's a story about them that always makes you laugh? When did you know they were right for each other? What's something most people don't realize about them? This isn't laziness. It's thoroughness. Journalists do this professionally. You're essentially reporting on a love story. Three or four phone calls will give you more than enough for a three-minute speech. And the couple will be genuinely touched that you went to the effort.",
      },
      {
        heading: 'Focus on What You Do Know',
        level: 2,
        content:
          "You know something. Even if it's not much, anchor your speech in whatever authentic connection you actually have. Maybe you only have one good story about the bride, but it's a really good one. That's enough. One vivid, well-told story beats five thin anecdotes every time. Maybe you don't know the couple's full history, but you were at the engagement party and watched them interact all evening. Describe what you saw. Observations can be just as powerful as shared memories. You don't need to pretend you have a deeper relationship than you do. People can spot that from across the room.",
      },
      {
        heading: 'The Honesty Approach',
        level: 2,
        content:
          "There's a version of this speech that leans directly into the truth and works beautifully. Something like: 'I'll be honest. When [name] asked me to be their best man, I realized we hadn't properly talked in about two years. So I called them. That phone call lasted three hours. And by the end of it, I knew two things: I'd been a terrible friend, and [partner] was the best thing that ever happened to them.' Disarming, genuine, and it turns a weakness into a strength. The audience respects honesty. They can smell fake intimacy immediately.",
      },
      {
        heading: 'What to Do When You Only Know One Half',
        level: 2,
        content:
          "Extremely common situation. You're the bride's best friend and you've met the groom maybe five times. Here's the move: speak from your expertise. You know the bride. You know what she was looking for, what she was afraid of, what makes her light up. Talk about the change you've seen in her since this person entered her life. You don't need to know the groom's childhood nickname. You need to know what he brought out in your friend. 'I don't know [partner] as well as I'd like. But I know [friend], and whoever could make them this happy is someone I want in my life forever.' That's honest, generous, and it welcomes the partner without pretending you're best mates.",
      },
      {
        heading: 'Stories You Can Tell Without Deep Knowledge',
        level: 2,
        content:
          "You can always talk about: the moment you found out about the relationship and your reaction. The first time you met the partner and your first impression (if it was positive or funny). Something you observed about the couple at a gathering. How the person you do know has changed since the relationship started. The engagement announcement and how it hit you. The process of preparing for this speech and what you learned along the way. None of these need years of shared history. They just require paying attention and being willing to be honest about what you noticed.",
      },
      {
        heading: 'The One Thing You Should Never Do',
        level: 2,
        content:
          "Don't fake closeness. Don't pretend you and the groom are inseparable when everyone in the room knows you met last Thanksgiving. Don't invent a depth of relationship that isn't there. People will see right through it, and the fakeness will make your genuinely sincere moments ring hollow. The best speeches from people who don't know the couple well are the ones that are honest about the distance and bridge it with warmth, effort, and genuine good wishes. You don't have to be their closest friend to give a great speech. You just have to be honest about who you are to them and make that count.",
      },
    ],
    ctaSupportingText: 'Get a genuine speech even without deep history',
    relatedExamples: ['close-friend-speech', 'work-friend-speech', 'groomsman-speech'],
    relatedArticles: ['wedding-speech-not-close-to-couple', 'how-to-make-wedding-speech-personal'],
    tags: ['situational', 'awkward'],
  },

  // ─── maid-of-honor-speech-guide ───
  {
    slug: 'maid-of-honor-speech-guide',
    title: 'Maid of Honor Speech: How to Be Heartfelt Without Being Basic',
    category: 'Speech Tips',
    targetKeyword: 'maid of honor speech',
    metaDescription: 'A practical guide to writing a maid of honor speech that\'s personal, memorable, and not a cliché fest.',
    searchIntent: 'MOH, wants to stand out',
    icon: '👗',
    readingTime: 5,
    sections: [
      {
        heading: 'The Complete Maid of Honor Speech Guide',
        level: 2,
        content:
          "You've been handed a microphone and asked to explain, in front of everyone your best friend has ever known, why her favorite person is the right person. Totally normal Tuesday. The maid of honor speech is one of the most anticipated moments of any reception. You're supposed to be funny but not a comedian, emotional but not a wreck, personal but not exclusionary. It's a lot. This guide will help you figure out how to get through it without spiraling.",
      },
      {
        heading: 'What the Audience Expects From You',
        level: 2,
        content:
          "People want three things from a maid of honor speech: a window into who the bride really is when the camera's off, a story that makes them root for the relationship, and a moment of genuine emotion that makes the bride tear up in the good way. That's it. You don't need to be Shakespeare. You don't need a comedy set. You need to show up as the person who knows the bride best and prove it with specifics. The bar is actually achievable if you prepare. The speeches that bomb are almost always the ones that weren't written until the night before.",
      },
      {
        heading: 'The Ideal Structure',
        level: 2,
        content:
          "Open with a hook: a funny line, a surprising statement, a vivid moment. Then briefly establish who you are and your relationship to the bride. Move into your first story, which is usually about the bride. This is where you show the room who she is when nobody's watching. Transition to the couple: when you first knew this was different, what you've observed, how the partner changed your friend. Shift to a direct address to the couple with your sincere wishes. Close with a toast. Total time: three to four minutes. Five is the absolute ceiling. No one wants a twelve-minute speech, even if it's good.",
      },
      {
        heading: 'Finding Your Stories',
        level: 2,
        content:
          "The best maid of honor stories are small, specific, and revealing. You're not looking for the most dramatic event ever. You're looking for the moment that captures who this person really is. The time she drove three hours to bring you soup when you were sick. The way she talks about her partner when they're not in the room, like she still can't believe her luck. The text she sent you at 1 AM after the first date that was just six exclamation points and a photo of a cocktail napkin. Go through your texts, your photos, your shared memories. The story that makes you smile the most is probably the one to tell. Just make sure it's something grandparents can hear without requiring a stiff drink.",
      },
      {
        heading: 'How to Talk About the Partner',
        level: 2,
        content:
          "This is where a lot of maid of honor speeches quietly fall apart. You spend so long on the bride that the partner becomes a footnote. But this speech is about a marriage, not just a person. You need to show the room why this particular partnership works. Talk about what you've noticed. How the bride is calmer around them. How they balance each other. How you've never seen your friend laugh harder than when they're together, the kind of laughing where she can't breathe and her mascara's running. If you don't know the partner well, say so honestly, then pivot to what you do know: the effect they've had on someone you love. That's more than enough.",
      },
      {
        heading: 'Emotional Moments Without Losing It',
        level: 2,
        content:
          "You're probably going to get emotional. That's fine. A few tears are charming and show you mean it. Full-on sobbing is harder to come back from and can derail everything. The trick: practice the emotional parts more than any other section. People cry during speeches because they're feeling something for the first time while speaking. If you've already felt it six times in rehearsal, it won't hit as hard at the mic. If you do start to lose it, pause. Breathe. Take a sip of water. The room will wait. They're on your side. Nobody is timing you with a stopwatch.",
      },
      {
        heading: 'Common MOH Speech Mistakes',
        level: 2,
        content:
          "Don't turn it into a roast. A little gentle teasing is fine, but if 80% of your speech is embarrassing stories, you've misjudged the assignment. Don't make it a friendship chronicle. 'And then in sophomore year... and then at that music festival... and then at your birthday...' is a timeline, not a speech. Pick one or two moments and go deep. Don't forget the partner. Don't drop inside jokes that leave the room confused. Don't get so many pre-speech drinks that your delivery suffers. And don't read the whole thing off your phone without ever making eye contact. Notes are fine. A dramatic reading from a tiny screen is not.",
      },
      {
        heading: 'Your Secret Weapon',
        level: 2,
        content:
          "You have an advantage nobody else giving a speech tonight has: you know the bride better than almost anyone in that room. That's not just a fact, it's a superpower. Use it. Tell the room something they don't know. Show them a side of the bride they haven't seen. Make her feel seen in a way only you can. That's what separates a solid maid of honor speech from one people talk about in the car on the way home. It's not about being the funniest or the most polished. It's about being the most real.",
      },
    ],
    ctaSupportingText: 'Make it heartfelt, without the clichés',
    relatedExamples: ['maid-of-honor-speech', 'emotional-wedding-speech', 'bridesmaid-speech'],
    relatedArticles: ['bridesmaid-speech-guide', 'how-to-make-wedding-speech-personal'],
    tags: ['maid of honor', 'guide', 'role-specific'],
  },

  // ─── father-of-bride-speech-guide ───
  {
    slug: 'father-of-bride-speech-guide',
    title: 'Father of the Bride Speech: What to Say When Words Aren\'t Enough',
    category: 'Speech Tips',
    targetKeyword: 'father of the bride speech',
    metaDescription: "A father of the bride speech guide for dads who'd rather do anything than public speaking.",
    searchIntent: 'Father, emotional, unsure',
    icon: '👨‍👧',
    readingTime: 5,
    sections: [
      {
        heading: 'The Complete Father of the Bride Speech Guide',
        level: 2,
        content:
          "Everyone secretly expects the father of the bride speech to be the most emotional moment of the reception. You probably didn't ask for that pressure, but here it is. This speech carries a unique weight because it marks a passage: you're publicly acknowledging that your child has built a life with someone, and you're welcoming that person into your family. That's a lot for four minutes. But fathers have been doing this for a long time, and the reality is that the bar for sincerity is lower than you think. Most people expect dads to be a bit awkward up there. All you have to do is be genuine.",
      },
      {
        heading: 'The Traditional Role and How It Has Evolved',
        level: 2,
        content:
          "Traditionally, the father of the bride speaks first and sets the tone for the evening. He welcomes guests, thanks people for coming, and says something about his daughter and her new spouse. That structure still works perfectly well, but it's not mandatory anymore. Modern father of the bride speeches are less about performing a formal role and more about sharing a father's perspective honestly. You can still welcome guests, but the heart of it should be personal, not procedural. Nobody remembers the logistics. Everyone remembers the moment a dad's voice cracked talking about his kid.",
      },
      {
        heading: 'What to Include',
        level: 2,
        content:
          "Start with a brief welcome. Thank the guests for being there and acknowledge anyone who traveled far or made a real effort to be present. Then get into the personal stuff. A memory of your daughter that shows who she is. Not a generic 'she was always special,' but a specific moment. The time she stood up for a friend at school and came home furious. The way she attacked every new challenge with a plan she'd written on the back of an envelope. The phone call where she told you about this person and you could hear it in her voice before she'd even said the words. Then turn to the partner: welcome them, say something honest about what they bring to your daughter's life. Close with your wishes and a toast.",
      },
      {
        heading: 'Finding the Right Story',
        level: 2,
        content:
          "The best father of the bride stories reveal character, not just cuteness. Yes, she was adorable at five. But what about fifteen, when she did something that showed you the adult she was becoming? What about the moment you realized she didn't need you to fix things for her anymore? The most powerful stories in a father of the bride speech are about the transition from child to adult, because that's exactly what this day represents. Don't be afraid to move beyond the baby photos. The room wants to see that you know your daughter as a person, not just as your little girl.",
      },
      {
        heading: 'Welcoming the New Family Member',
        level: 2,
        content:
          "A lot of fathers rush through this part or skip it entirely, and it's a real missed opportunity. Welcoming your child's partner into the family is one of the most meaningful things you can do in this speech. It doesn't need to be long. A few sentences about what you've observed, what you appreciate, how glad you are that your daughter found them. If you have a genuine compliment or a brief story about the partner, include it. If you're not close to them yet, that's completely fine. Say something like: 'I'm still getting to know [name], but what I do know is that my daughter chose them. And her judgment has always been better than mine.'",
      },
      {
        heading: 'The Emotional Tightrope',
        level: 2,
        content:
          "People expect you to get emotional. And you should. A father who tears up during his daughter's wedding speech is practically a universal experience. But there's a difference between being moved and being unable to continue. Practice the parts that hit you hardest. Read them out loud to your partner, to the dog, to an empty kitchen. The fifth time won't hit as hard as the first. If you do get choked up during the speech, just pause. Nobody is timing you. Take a breath, sip some water, keep going. The pause itself tells the room this is real. That's not a flaw. That's the whole point.",
      },
      {
        heading: 'Common FOB Mistakes',
        level: 2,
        content:
          "Don't make the whole speech about you and your feelings. Your feelings matter, but this is her day. Don't give the partner a threatening 'you'd better take care of her' line. It's not funny. It's controlling, and your daughter is not property being handed over. Don't list every accomplishment she's ever achieved. It's a speech, not a CV. Don't forget to mention the partner. Don't go over five minutes. And don't wing it. Even if you're brilliant at speaking off the cuff in business meetings, this is different. Write it down. Practice it. Honor the occasion with preparation.",
      },
      {
        heading: 'Why Your Speech Matters More Than You Think',
        level: 2,
        content:
          "Your daughter is going to remember this speech for the rest of her life. That's not an exaggeration. She'll remember what you said, how you looked when you said it, and how you made her feel. So say the thing you've been meaning to say. Tell her you're proud. Tell her you love who she's become. Tell her that watching her build a life with someone has been one of the great joys of yours. You don't need to be eloquent. You need to be honest. From a parent, that has always been enough.",
      },
    ],
    ctaSupportingText: 'Get the words your daughter deserves',
    relatedExamples: ['father-of-bride-speech', 'emotional-wedding-speech', 'sentimental-speech'],
    relatedArticles: ['crying-during-wedding-speech', 'hate-public-speaking-wedding-speech'],
    tags: ['father of bride', 'guide', 'role-specific'],
  },

  // ─── mother-of-bride-speech-guide ───
  {
    slug: 'mother-of-bride-speech-guide',
    title: 'Mother of the Bride Speech: A Guide for Mums Who Want to Get It Right',
    category: 'Speech Tips',
    targetKeyword: 'mother of the bride speech',
    metaDescription: 'Your guide to a beautiful mother of the bride speech. Personal, warm, and genuinely memorable.',
    searchIntent: 'Mother, wants to contribute',
    icon: '👩‍👧',
    readingTime: 5,
    sections: [
      {
        heading: 'The Complete Mother of the Bride Speech Guide',
        level: 2,
        content:
          "For a long time, the mother of the bride didn't give a speech at all. The dad spoke, the best man spoke, and the mother sat at the head table and smiled. That era is thankfully over. More mothers are speaking now than ever before, and their speeches are consistently some of the best of the night. Mothers tend to bring a combination of emotional intelligence, sharp observation, and zero tolerance for nonsense that makes for genuinely compelling listening. If you've been asked to speak, or you've decided you're going to, this guide will help you do it well.",
      },
      {
        heading: 'Should You Give a Speech?',
        level: 2,
        content:
          "If your daughter asked you to, absolutely yes. If nobody asked but you feel moved to, talk to the couple first. Some weddings have a tight timeline where every speech slot is accounted for. Some couples would be thrilled to have you speak and just didn't think to ask. The worst thing you can do is surprise everyone by grabbing the mic during dinner. Have the conversation early. If the answer is yes, prepare properly. If it's 'we'd rather you didn't,' respect it. There are other ways to share your words: a letter tucked into her getting-ready bag, a quiet moment during photos, a private toast at the rehearsal dinner.",
      },
      {
        heading: 'What Makes an MOB Speech Different',
        level: 2,
        content:
          "You occupy a unique emotional position. You've known this person longer than anyone else in the room. You've seen every version of them: the toddler who wouldn't eat vegetables, the teenager who slammed doors, the young adult figuring things out, and now the person standing next to their partner in wedding attire. Your perspective is irreplaceable. A mother of the bride speech works best when it draws on that long view. You're not just telling a story from college. You're drawing a line from who she was to who she's become. That's a narrative arc nobody else at this wedding can offer.",
      },
      {
        heading: 'A Structure That Works',
        level: 2,
        content:
          "Open by addressing the room warmly. You can welcome guests, thank people who helped plan the wedding, or simply express how it feels to stand here today. Move into a story or observation about your daughter. Choose something that reveals character, not just something cute. Then pivot to the relationship: when you first saw the two of them together, what you noticed, what made you feel confident this was something real. Address the partner directly with warmth and welcome. Close with wishes and a toast. Three to four minutes is ideal. If both parents are speaking separately, keep yours to three.",
      },
      {
        heading: 'The Stories Only You Can Tell',
        level: 2,
        content:
          "You have access to memories nobody else has. The things she said as a child that turned out to be strangely prophetic. The way she always needed the cupboard light on but insisted she wasn't scared. The first time she came home from a date practically glowing and tried so hard to play it cool. These small, specific memories are gold because they're intimate without being embarrassing. They show the room a private, tender side of someone they all love. Pick stories that connect to today. That little girl who was afraid of nothing is now brave enough to commit her life to another person. That's the thread.",
      },
      {
        heading: 'Handling Emotion During the Speech',
        level: 2,
        content:
          "You're going to feel a lot up there. Pride, joy, a little sadness, maybe the surreal feeling that time moved faster than you agreed to. That's all supposed to happen. Let it. A mother who gets emotional during her speech is not a problem. It's a gift to the room. The only risk is if emotion prevents you from finishing. So practice the hard parts until they're not quite as hard. Mark the places where you know you'll get choked up. Practice pausing there. Have water nearby. And remember that the room is pulling for you. They want you to get through it. They'll wait as long as you need.",
      },
      {
        heading: 'What to Avoid',
        level: 2,
        content:
          "Don't compete with the father's speech. If you're both speaking, coordinate so you're not telling the same stories or covering the same ground. Don't use the speech to process complicated feelings about your daughter growing up. That's what phone calls with your sister and a glass of wine are for. Don't give unsolicited marriage advice unless it's brief and genuinely funny. Don't talk about yourself more than the couple. And don't apologize for being emotional. You're a mother watching your child get married. Emotions are literally the entire point.",
      },
      {
        heading: 'Make It Yours',
        level: 2,
        content:
          "The best mother of the bride speeches sound like the person giving them. If you're funny, be funny. If you're poetic, be poetic. If you're the kind of mother who shows love by making sure everyone's eaten, talk about that. Your daughter didn't ask you to be someone else up there. She asked you to be her mum, standing in front of everyone, saying the things that matter. So say them. In your voice. In your way. It'll be right because it's real.",
      },
    ],
    ctaSupportingText: 'Say what\'s in your heart, beautifully',
    relatedExamples: ['mother-of-bride-speech', 'emotional-wedding-speech', 'sentimental-speech'],
    relatedArticles: ['father-of-bride-speech-guide', 'crying-during-wedding-speech'],
    tags: ['mother of bride', 'guide', 'role-specific'],
  },

  // ─── groom-speech-guide ───
  {
    slug: 'groom-speech-guide',
    title: "Groom's Speech: How to Thank Everyone Without Boring Anyone",
    category: 'Speech Tips',
    targetKeyword: 'groom speech',
    metaDescription: "A groom's speech is part thank-you, part love letter, part performance. Here's how to balance all three.",
    searchIntent: 'Groom, needs structure',
    icon: '🤵‍♂️',
    readingTime: 5,
    sections: [
      {
        heading: 'The Complete Groom Speech Guide',
        level: 2,
        content:
          "Nobody really warns the groom about this: your speech might be the most important few minutes of the whole reception. Not because it has to be the funniest or the most polished, but because every person in that room is watching to see how you talk about the person you just married. Your vows already happened. This is different. This is part thank-you, part love letter, and part proof that you understand exactly how lucky you are. And you've got about four minutes to pull it off.",
      },
      {
        heading: 'What the Groom Speech Is Actually For',
        level: 2,
        content:
          "Traditionally, the groom's speech is a thank-you speech. You're thanking guests for coming, parents for their support (financial and otherwise), the wedding party for showing up, and your new spouse for saying yes. That's the skeleton. But the groom speeches people actually remember layer genuine emotion and personality on top of those thank-yous. The thank-yous are the framework. The personal stuff is what makes it a speech rather than an acceptance speech at a work awards dinner. Don't just tick boxes. Fill them with real moments.",
      },
      {
        heading: 'A Structure That Delivers',
        level: 2,
        content:
          "Open light: thank everyone for coming, crack a quick joke about how the day has gone so far, or acknowledge how surreal it feels to be standing here in this suit. Then move through your thank-yous. Parents (both sets), the wedding party, anyone who contributed in a meaningful way. Keep these genuine but brief. Nobody wants a five-name thank-you list delivered like you're accepting an Oscar. Then shift to your spouse. This is the main event. Tell the room what they mean to you. Be specific. Be honest. Close with a toast. Three to five minutes total. Under four is even better.",
      },
      {
        heading: 'Thanking the Parents',
        level: 2,
        content:
          "Thank both sets of parents. Mention them by name. If they helped pay for the wedding, acknowledge their generosity without getting into figures. If they supported you in other ways, say so. This is also a natural moment to welcome your new in-laws. Even one line of genuine warmth directed at your partner's parents will mean the world to them. If your family situation is complicated, keep it simple and gracious. You don't need to narrate every dynamic in the room. Just be kind and move on.",
      },
      {
        heading: 'Talking About Your Spouse',
        level: 2,
        content:
          "This is what everyone's waiting for. Don't blow it by being vague. 'She's the most amazing person I've ever met' is a nice sentiment that tells the room absolutely nothing. Show them instead. Talk about a specific moment that captured what you love about this person. The way they handled a crisis. Something they said on a random Wednesday that stopped you in your tracks. The quality they have that makes your life concretely, measurably better. One specific, honest observation about your partner is worth a hundred generic compliments. Make the room see what you see.",
      },
      {
        heading: 'How Much Humor Is Right?',
        level: 2,
        content:
          "Enough to keep the room breathing, not so much that it feels like you're dodging sincerity. The groom's speech should lean heartfelt, but that doesn't mean humourless. A self-deprecating joke about how long it took you to propose. A funny observation about wedding planning. A preemptive dig at the best man before he gets up. These all work. Just make sure the emotional center is genuine. Humour should frame the sincerity, not replace it. If your whole speech is jokes, people will start to wonder whether you actually like your spouse.",
      },
      {
        heading: 'Common Groom Speech Mistakes',
        level: 2,
        content:
          "Don't turn it into a marathon thank-you list. Five straight minutes of 'I'd also like to thank...' is slow death for the room. Don't forget to talk about your spouse. It sounds obvious, but nervous grooms routinely spend so long on thank-yous that they run out of time for the bit that actually matters. Don't try to be someone you're not. If you're not naturally funny, don't force jokes. If you're not naturally emotional, don't force tears. Just be the version of yourself your spouse fell in love with. And, genuinely, do not reference the wedding night. It's not as funny as you think it is, and at least three relatives will be visibly uncomfortable.",
      },
      {
        heading: 'The Moment That Matters',
        level: 2,
        content:
          "At some point in your speech, look at your spouse and talk directly to them. Not to the crowd, not to the best man, not to the floor. To them. Tell them something real. Something the room gets to overhear but that's really just for the two of you. This is the moment people will photograph. This is the moment people will remember. Three sentences is enough. But they have to be real. If you mean it, the room will feel it. And your spouse will carry those words long after the flowers have wilted and the DJ has packed up.",
      },
    ],
    ctaSupportingText: 'Build a speech that says it all',
    relatedExamples: ['groom-speech', 'groom-to-bride-speech', 'balanced-wedding-speech'],
    relatedArticles: ['bride-speech-guide', 'joint-couple-speech-guide'],
    tags: ['groom', 'guide', 'role-specific'],
  },

  // ─── bride-speech-guide ───
  {
    slug: 'bride-speech-guide',
    title: "Bride's Speech: Breaking Tradition Beautifully",
    category: 'Speech Tips',
    targetKeyword: 'bride speech',
    metaDescription: "More brides are giving speeches, and stealing the show. Here's your guide to doing it your way.",
    searchIntent: 'Bride, wants to speak',
    icon: '👰',
    readingTime: 5,
    sections: [
      {
        heading: 'The Bride Speech Guide: Breaking Tradition and Owning the Mic',
        level: 2,
        content:
          "Tradition says the bride doesn't give a speech. Tradition also said women couldn't vote or wear trousers, so maybe tradition isn't the final word on everything. More brides are speaking at their own weddings than ever, and the results are consistently spectacular. Brides tend to give speeches that are more emotionally honest, more specific, and more memorable than anyone else in the lineup. If you want to speak at your wedding, speak. This guide will help you do it on your terms.",
      },
      {
        heading: 'Why More Brides Are Choosing to Speak',
        level: 2,
        content:
          "Because sitting silently while everyone else talks about you feels bizarre. Because you have things to say and you'd rather say them yourself. Because the idea that the bride should be decorative and quiet at her own celebration is, frankly, ridiculous. Some brides give solo speeches. Some speak jointly with their partner. Some replace the traditional lineup entirely and are the only person who speaks. There's no wrong approach. The only wrong choice is staying silent because someone told you it 'isn't done.' It is done. By thousands of brides every year. And the weddings are better for it.",
      },
      {
        heading: 'What to Include in Your Speech',
        level: 2,
        content:
          "A bride's speech can be whatever you want it to be. But a few elements tend to work well. Thank the people who made the day possible: parents, the wedding party, anyone who went properly above and beyond. Welcome your partner's family, especially if you haven't had a chance to do so publicly yet. Tell the room something about your partner that shows why you chose them. Not a list of adjectives. A moment. A story. A specific thing they did that caught you completely off guard. And if you want, share something about your own journey to this day. You have a perspective nobody else in that room can offer.",
      },
      {
        heading: 'Finding Your Voice',
        level: 2,
        content:
          "The hardest part of a bride's speech is that there's no established template. Best man speeches have a formula. Father of the bride speeches have a formula. Bride speeches are still being invented, which is both freeing and slightly terrifying. You don't have to follow anyone's blueprint. Be funny if you're funny. Be sentimental if that's who you are. Be brief if you're a private person. Be expansive if you're not. The audience has no preset expectations for your speech, which means anything genuine will land. That's a luxury the best man doesn't have.",
      },
      {
        heading: 'Addressing Your Partner',
        level: 2,
        content:
          "This is the centerpiece. Look at the person you married and tell them something true. Not what you said in your vows, which were a commitment. This is different. This is a celebration. Tell them what you love about ordinary Wednesdays. Tell them about the moment you knew. Tell them about the quality they have that nobody else seems to notice but you can't stop noticing. The room disappears for a moment when you do this. It's just the two of you. And every person watching gets to feel what it's like to be loved that specifically. That's the gift your speech gives the room.",
      },
      {
        heading: 'Navigating the Logistics',
        level: 2,
        content:
          "Talk to your wedding planner or MC about timing. Your speech can slot in anywhere. Some brides speak right after the groom. Some speak last as a final word. Some go first to set the tone. If you're speaking jointly with your partner, figure out who says what beforehand so you're not talking over each other or covering the same ground. Decide in advance about the microphone (you want one, trust me, even if you think your voice carries). And keep it to three to four minutes. You have an entire marriage to say everything. Tonight, pick the highlights.",
      },
      {
        heading: 'Dealing With Pushback',
        level: 2,
        content:
          "If someone tells you it's 'not traditional' for the bride to speak, smile and say 'I know.' You do not owe anyone an explanation for wanting to use your own voice at your own wedding. If your partner is supportive, that's all the permission you need. If a parent has concerns, listen to them and then do what you want. Most resistance comes from unfamiliarity, not bad intentions. Once people hear your speech, they'll wonder why it was ever considered optional.",
      },
      {
        heading: 'You Deserve to Be Heard',
        level: 2,
        content:
          "This is your day too. Not just your partner's day, not just a day for parents and the wedding party. Yours. Your voice, your words, your take on this relationship and this moment matter. Giving a speech at your own wedding isn't breaking tradition. It's making a new one. One where the person at the center of the celebration gets to say how she feels about being there. That's not radical. That's just right.",
      },
    ],
    ctaSupportingText: 'Create something uniquely yours',
    relatedExamples: ['bride-speech', 'bride-to-groom-speech', 'joint-couple-speech'],
    relatedArticles: ['groom-speech-guide', 'joint-couple-speech-guide'],
    tags: ['bride', 'guide', 'role-specific'],
  },

  // ─── father-of-groom-speech-guide ───
  {
    slug: 'father-of-groom-speech-guide',
    title: "Father of the Groom Speech: Your Turn to Shine (Briefly)",
    category: 'Speech Tips',
    targetKeyword: 'father of the groom speech',
    metaDescription: "The father of the groom speech is short, warm, and welcoming. Here's exactly what to say.",
    searchIntent: 'FOG, unsure',
    icon: '👨‍👦',
    readingTime: 5,
    sections: [
      {
        heading: 'The Father of the Groom Speech Guide: Short, Warm, and Meaningful',
        level: 2,
        content:
          "The father of the groom speech is the most underestimated speech at any wedding. Shorter than the father of the bride's, less expected than the best man's, often treated as optional. That's actually an advantage. When nobody expects much, even a decent speech feels like a revelation. And a great one? A great one quietly steals the night. You've got a window of two to three minutes. Here's how to fill it with something your son and his partner will remember for years.",
      },
      {
        heading: 'Your Role in the Lineup',
        level: 2,
        content:
          "At a lot of weddings, the father of the groom doesn't speak at all. At others, he gives a brief toast, usually after the father of the bride. Your speech is typically shorter and lighter, partly because of tradition and partly because the groom's family isn't usually the one hosting. None of that limits what you can do with your moment. You've got the element of surprise working in your favour. Nobody expects the father of the groom to deliver the emotional knockout of the evening. When you do, it lands harder because nobody saw it coming.",
      },
      {
        heading: 'What to Say in Two to Three Minutes',
        level: 2,
        content:
          "Stay focused. You don't have time to cover everything, so pick one or two things and say them well. Welcome the guests briefly. Say something genuine about your son: a quality you're proud of, a moment that shaped who he became. Welcome your new daughter-in-law or son-in-law into the family with warmth and specificity, not just a generic 'welcome to the family.' Share what you've observed about the couple together. Close with a toast. Two to three minutes of substance beats five minutes of filler every single time. Every word should earn its place.",
      },
      {
        heading: 'Talking About Your Son',
        level: 2,
        content:
          "This is your chance to show the room who your son really is when nobody's watching. Not the LinkedIn version. The real one. The kid who spent an entire summer building a treehouse that collapsed on day one, and started over the next morning without a word. The teenager who called from university not because he needed money but because he wanted your opinion on something. The man who sat across from you at dinner and told you he'd found the person. Pick one story. Make it specific. Make it true. The room will see your son through your eyes for a moment, and that's a gift worth giving.",
      },
      {
        heading: 'Welcoming Your New Family Member',
        level: 2,
        content:
          "This part matters more than most fathers of the groom realize. Your son's partner is joining your family today. Say so out loud. Make it warm. It doesn't have to be long. Even two or three sentences of genuine welcome can be deeply moving. 'When [name] first came to our house for dinner, they offered to wash up without being asked. I knew right then this was someone who'd fit.' Specifics like that show you've been paying attention. And to someone joining a new family, being noticed is everything.",
      },
      {
        heading: 'Coordinating With the Other Speeches',
        level: 2,
        content:
          "If the father of the bride is also speaking, have a quick chat beforehand. Not to script everything together, but to make sure you're not both telling the same story or hitting the exact same emotional beats. The father of the bride speech tends to focus on the bride and her childhood. Yours should lean toward the groom and the couple. If the mother of the groom is also speaking, split the material. Maybe she does the emotional story and you take the funny one, or the other way around. The goal is variety across the evening, not repetition.",
      },
      {
        heading: 'Keep It Warm, Keep It Brief',
        level: 2,
        content:
          "The father of the groom speech is at its best when it's warm, genuine, and mercifully short. Don't try to compete with the longer speeches. Don't try to be the funniest person who touches the microphone. Just be a father who's proud of his kid and glad about the family taking shape. Say something real about your son. Say something kind about their partner. Raise your glass. Sit down. And enjoy the fact that for two minutes, you held a room full of people and made them feel something. That's not a small thing.",
      },
    ],
    ctaSupportingText: 'Welcome the new family, in style',
    relatedExamples: ['father-of-groom-speech', 'short-sweet-speech'],
    relatedArticles: ['father-of-bride-speech-guide', 'how-long-should-a-wedding-speech-be'],
    tags: ['father of groom', 'guide'],
  },

  // ─── mother-of-groom-speech-guide ───
  {
    slug: 'mother-of-groom-speech-guide',
    title: "Mother of the Groom Speech: Speak from the Heart Without Stealing the Spotlight",
    category: 'Speech Tips',
    targetKeyword: 'mother of the groom speech',
    metaDescription: "A guide for mothers of the groom who want to say something meaningful without overshadowing the day.",
    searchIntent: 'MOG',
    icon: '👩‍👦',
    readingTime: 5,
    sections: [
      {
        heading: 'The Mother of the Groom Speech: Your Moment (Yes, Really)',
        level: 2,
        content:
          "Let's get this out of the way. The mother of the groom speech can feel like the opening act nobody booked. The bride's family gets the spotlight, the best man gets the laughs, and you get a polite slot somewhere between the starter and the cake cutting.\n\nBut you raised the person standing up there. You have stories nobody else has. You have a perspective on this marriage that is genuinely one of a kind. A great mother of the groom speech isn't about fighting for attention. It's about adding a layer of warmth and depth that only you can provide.\n\nKnow your lane and own it completely.",
      },
      {
        heading: 'Do You Even Have to Give a Speech?',
        level: 2,
        content:
          "Traditionally, the mother of the groom doesn't give a formal toast at the reception. But traditions are shifting quickly, and plenty of modern weddings include one. If you've been asked, wonderful. If you're wondering whether to volunteer, have a quiet word with the couple first. Don't just grab the mic after three glasses of champagne and wing it.\n\nSome weddings slot the mother of the groom into the rehearsal dinner instead, which is honestly a great option. The rehearsal dinner is typically hosted by the groom's family, so you're on home turf. Smaller crowd, more relaxed vibe, and you can speak a bit longer without anyone shifting in their seat.",
      },
      {
        heading: 'What to Actually Say: The Core Structure',
        level: 2,
        content:
          "A solid mother of the groom speech hits four beats, roughly in this order:\n\n1. Welcome everyone and thank the hosts (if that's not you)\n2. Share a brief, warm story about your son\n3. Welcome your new daughter-in-law (or son-in-law) into the family\n4. Toast the couple\n\nThat's the whole thing. You don't need to deliver a TED Talk. You don't need to narrate your son's life from his first steps to his bachelor party. Pick one or two moments that show who he is, then pivot to how happy you are about this marriage.\n\nThree to five minutes is the range. Under two feels rushed. Over six and you're testing everyone's patience, yours included.",
      },
      {
        heading: 'The Story That Makes It Personal',
        level: 3,
        content:
          "The best mother of the groom speeches include a story that shows your son's character in a way that connects naturally to the marriage. Maybe it's the summer he insisted on nursing a baby bird back to health and checked on it every two hours. Maybe it's how he always made sure his little sister got the bigger piece of cake, every single time, without being asked.\n\nWhat you're NOT looking for: stories about ex-girlfriends (obviously), embarrassing bathroom incidents, or anything that requires the phrase 'you had to be there.' Also skip stories that are really about you. 'I remember when I taught him to ride a bike' is about you. 'He fell off that bike fourteen times and got back on fifteen' is about him.\n\nThe story should lead naturally into why this marriage makes sense. 'He's always been the kind of person who shows up for the people he loves, and I can see he's found someone who does exactly the same.'",
      },
      {
        heading: 'Welcoming the New Addition',
        level: 2,
        content:
          "This is the section a lot of mothers of the groom rush through, and it's actually the most important part. The room wants to hear you genuinely embrace your child's partner.\n\nBe specific. 'We're so happy to welcome Sarah into the family' is fine but forgettable. 'The first time Jake brought Sarah home for Christmas and she jumped straight in to help with the cooking, then stayed up past midnight with his dad arguing about terrible action films, I knew she was one of us.' That's a hundred times better.\n\nIf your relationship with the partner is still developing, that's perfectly fine. You don't need to pretend you've been close for years. Focus on what you've noticed about how they treat your child. 'I've watched my son become more confident, more adventurous, and somehow even kinder since meeting Alex' is honest and generous without overselling anything.",
      },
      {
        heading: 'Emotional Landmines to Avoid',
        level: 2,
        content:
          "Weddings are emotional. Mother of the groom speeches especially so. Here's what to steer clear of:\n\nDon't make it about losing your son. 'I'm not losing a son, I'm gaining a daughter' is so worn out it's lost all meaning. And the subtext of 'losing a son' is a little guilt-trippy, even when you don't intend it that way.\n\nDon't compare the partner to yourself. 'She reminds me so much of me when I was young' makes the speech about you and puts odd pressure on the partner.\n\nDon't bring up divorce, yours or anyone else's. Even if you're happily remarried and everything worked out. Today isn't the day.\n\nDon't dispense unsolicited marriage advice unless it's genuinely funny and self-deprecating. 'The secret to a happy marriage is separate bathrooms' works. 'Never go to bed angry' is a bumper sticker.\n\nDon't cry through the whole thing. A few tears are touching. Five solid minutes of sobbing while the room shifts uncomfortably is not what you're going for. Practice enough that you can get through the emotional parts. Pause, breathe, sip water, keep going.",
      },
      {
        heading: 'If You Have a Complicated Relationship',
        level: 2,
        content:
          "Not every mother-son relationship is a greeting card. Maybe you and your son went through a rough stretch. Maybe you weren't always present. Maybe things are loving but not especially close.\n\nYou can still give a beautiful speech. Focus on what's true right now. 'Watching the man Jake has become fills me with more pride than I can express' works whether you were at every football match or reconnected later in life. You don't need to narrate the complicated parts. The room doesn't need the full backstory.\n\nIf co-parenting dynamics are tricky (your ex is there, step-parents are in the mix), keep it simple and gracious. Acknowledge the other parent briefly if it feels right. 'Jake is lucky to have so many people who love him' covers a lot of ground without opening anything complicated.",
      },
      {
        heading: 'A Simple Template to Get You Started',
        level: 2,
        content:
          "If you're staring at a blank page and nothing's coming, try this framework:\n\nOpening (30 seconds): 'For those who don't know me, I'm [Name], Jake's mum. I want to thank [hosts] for this incredible evening and all of you for being here.'\n\nThe story (90 seconds): One specific memory that reveals your son's character.\n\nThe bridge (30 seconds): Connect that character trait to the relationship. 'So it didn't surprise me at all when he found someone who [quality].'\n\nWelcoming the partner (60 seconds): Specific, genuine words about your new family member.\n\nThe toast (30 seconds): 'Please raise your glasses to [couple]. May your life together be filled with [something specific and sincere, not a phrase you'd find on a fridge magnet].'\n\nTotal: roughly four minutes. Just right.",
      },
      {
        heading: 'Delivery Tips for the Big Moment',
        level: 2,
        content:
          "Print your speech in a large font, at least 16 point. Your hands might shake, and squinting at your phone in a dimly lit reception hall while everyone watches is nobody's idea of a good time.\n\nPractice out loud at least five times. Practicing in your head does not count. You need to hear the words, feel where the pauses belong, and figure out which parts trigger the tears so you can prepare for them.\n\nSpeak slowly. Nerves speed everyone up. What feels painfully slow to you sounds perfectly natural to the audience.\n\nMake eye contact with your son and his partner during the toast. Look at the audience during the stories. Don't read word for word the whole time. Glance down, then look up.\n\nAnd enjoy it. This isn't an exam. It's a room full of people who want to hear you say something loving about your kid. You'll be fine.",
      },
    ],
    ctaSupportingText: 'Share your love, perfectly pitched',
    relatedExamples: ['mother-of-groom-speech', 'sentimental-speech'],
    relatedArticles: ['mother-of-bride-speech-guide', 'how-long-should-a-wedding-speech-be'],
    tags: ['mother of groom', 'guide'],
  },

  // ─── bridesmaid-speech-guide ───
  {
    slug: 'bridesmaid-speech-guide',
    title: "Bridesmaid Speech: What to Say When You're Not the Maid of Honor",
    category: 'Speech Tips',
    targetKeyword: 'bridesmaid speech',
    metaDescription: "A bridesmaid speech guide for when you're not the MOH but still want to deliver something great.",
    searchIntent: 'Bridesmaid',
    icon: '💐',
    readingTime: 5,
    sections: [
      {
        heading: "You're Not the Maid of Honor. That's Actually Great.",
        level: 2,
        content:
          "Nobody tells you this, but the bridesmaid speech is the best slot on the card. All the fun, none of the weight. The maid of honor has to deliver. She's expected to make people laugh and cry in exactly the right proportions. You? You just have to be genuine and keep it under four minutes.\n\nBridesmaid speeches are increasingly common at modern weddings. If the bride asked you to say a few words, it's because your friendship means something real to her and she wants that in the room. Don't overthink it. You already have everything you need.",
      },
      {
        heading: 'When and Why Bridesmaids Give Speeches',
        level: 2,
        content:
          "Not every wedding includes a bridesmaid speech, so here are the common setups. Sometimes the bride wants several friends to speak rather than putting it all on one person. Sometimes there's no maid of honor and the bridesmaids share the spotlight. Sometimes you've been asked to speak at the rehearsal dinner instead of the reception.\n\nWhatever the arrangement, sort the logistics early. How long should you go? Who speaks before and after you? Microphone or no microphone? Are other bridesmaids also speaking? That last one matters, because you do not want four people telling the same road trip story.\n\nIf several bridesmaids are speaking, coordinate loosely. You don't need to co-write your speeches, but a quick 'I'm doing the university years, what are you covering?' saves everyone from hearing the same anecdote three times.",
      },
      {
        heading: 'What Makes a Bridesmaid Speech Different',
        level: 2,
        content:
          "A bridesmaid speech is shorter and more focused than a maid of honor speech. It's a highlight, not a documentary. You're sharing one facet of who the bride is, not her entire biography.\n\nThe best bridesmaid speeches feel like a window into a specific part of the bride's life. Maybe you're her college roommate and you can speak to the 2 AM conversations that shaped who she became. Maybe you're her work friend and you watched her fall in love in real time over Monday morning coffee. Maybe you've known each other since primary school and you're the keeper of every embarrassing childhood story.\n\nLean into whatever makes your friendship unique. The room doesn't need another 'she's the most amazing person I know.' They need your specific, irreplaceable angle.",
      },
      {
        heading: 'A Simple Structure That Works Every Time',
        level: 2,
        content:
          "Keep it to three beats:\n\n1. Introduce yourself and your connection (15 seconds). 'Hi everyone, I'm Priya. I've had the privilege of being [Bride]'s desk neighbour, unofficial therapist, and lunch companion for the past six years.'\n\n2. Tell one story or share one observation (2 minutes). This is the heart of it. One great story beats three average ones every time.\n\n3. Connect it to the couple and toast (45 seconds). Bring it back to the wedding, say something kind about the partner, raise your glass.\n\nTotal: under three and a half minutes. The audience will love you for the brevity, and the couple will love you for making their day brighter without eating into the dancing.",
      },
      {
        heading: 'Picking the Right Story',
        level: 2,
        content:
          "The story should pass three tests:\n\nDoes it make the bride look good? Not perfect, not saintly, but fundamentally good. A story about her getting lost in a foreign city and somehow charming locals into giving directions shows personality. A story about her getting hammered on a Tuesday shows poor judgment.\n\nWould you tell it in front of her grandparents? Because they're probably sitting about three metres away. This doesn't mean your speech has to be completely tame, but it needs to be grandparent-survivable.\n\nDoes it connect to the marriage in some way? The connection can be loose. Her loyalty. Her sense of adventure. Her terrible taste in films that her partner somehow shares. You just need one bridge sentence to get from your story to 'and that's why these two are perfect together.'\n\nIf no single story works, try a different angle: describe a moment when you realized something important about the bride. 'I knew exactly who [Bride] was the day she...' is a strong opener that doesn't require a full narrative arc.",
      },
      {
        heading: "The Partner: What to Say When You Don't Know Them Well",
        level: 2,
        content:
          "Common bridesmaid problem. You're close with the bride but you've met the partner a handful of times. Maybe you live in different cities. Maybe they started dating after your friendship had already gone mostly digital.\n\nDon't fake it. Don't pretend you're best mates if you've met three times. Focus on what you can honestly speak to:\n\nWhat the bride has told you about them. 'I've never heard [Bride] talk about anyone the way she talks about [Partner]. And believe me, I've heard her talk about a lot of people.' Gets a laugh, stays honest.\n\nWhat you've observed. 'I spent five minutes with [Partner] at the engagement party and immediately understood why [Bride] is so happy.'\n\nThe effect they've had. 'My friend has always been pretty great, but the version of her I've seen since [Partner] came along is someone more confident, more joyful, more herself.'\n\nAny of these works without requiring you to pretend you have a deep bond with someone you've shared one appetiser platter with.",
      },
      {
        heading: 'Common Bridesmaid Speech Mistakes',
        level: 2,
        content:
          "Opening with 'For those of you who don't know me...' Every speech starts this way. Find literally any other opening.\n\nInside jokes with no context. If the story needs five minutes of setup for a punchline only three people will understand, it's not a speech story. It's a group chat story. Save it.\n\nTurning it into your own love story. 'Watching [Bride] find love gives me hope that I'll find mine someday' is a strange detour that makes people uncomfortable.\n\nApologizing for being nervous. The audience doesn't need a disclaimer. Just start.\n\nReading from your phone with your head down for the entire thing. Print your notes. Or at least bump the font size so you're not hunched over a tiny screen like you're reading terms and conditions.\n\nGoing off-script after too many cocktails. Have your drink after the speech, not before. One glass for courage is fine. Three wines and a shot is how bad wedding speeches get born.",
      },
      {
        heading: 'Bridesmaid Speech Examples: Opening Lines That Work',
        level: 2,
        content:
          "Sometimes the hardest part is just the first sentence. Here are some openers to steal or adapt:\n\n'I've been trying to write this speech for three weeks, and I finally realized the problem: there's no way to sum up [Bride] in four minutes. So I'm not going to try. I'm just going to tell you about one Tuesday afternoon that explains everything.'\n\n'[Bride] told me that when she asked [Partner] about me, they said, \"Oh, you're the friend who always texts in all caps.\" And honestly? That's fair.'\n\n'I met [Bride] on the first day of university when she knocked on my door and asked if I had a phone charger. I did not. She came in anyway. That pretty much sums up our entire friendship.'\n\n'I want to start by saying that I'm not the maid of honor. Which means I have zero responsibility for the hen party stories. You're welcome, [Bride].'",
      },
      {
        heading: 'Delivery: Keep It Natural',
        level: 2,
        content:
          "You're not performing Shakespeare. You're talking to your friend in front of a bunch of people who are rooting for you. Smile. Look at the bride. Speak at a normal pace, then slow down just a touch.\n\nIf you get emotional, pause. Take a breath. Nobody is judging you for having feelings at a wedding. Just don't let the tears completely take over. If you know a particular line is going to wreck you, practice saying it out loud twenty times until you can get through it without dissolving.\n\nEnd strong. Don't trail off with 'so yeah, congratulations, I love you guys.' Have a crisp closing line and a clear toast. 'To [Bride] and [Partner], and to love that's worth texting in all caps about.' Then raise your glass, take a sip, and sit down knowing you absolutely nailed it.",
      },
    ],
    ctaSupportingText: "Say something she'll never forget",
    relatedExamples: ['bridesmaid-speech', 'close-friend-speech', 'lighthearted-speech'],
    relatedArticles: ['maid-of-honor-speech-guide', 'short-sweet-speech'],
    tags: ['bridesmaid', 'guide'],
  },

  // ─── best-woman-speech-guide ───
  {
    slug: 'best-woman-speech-guide',
    title: "Best Woman Speech: A Guide for the Groom's Female Best Friend",
    category: 'Speech Tips',
    targetKeyword: 'best woman speech',
    metaDescription: "You're not the best man, you're the best woman. Here's how to own the role.",
    searchIntent: 'Best woman',
    icon: '💪',
    readingTime: 5,
    sections: [
      {
        heading: "You're the Best Woman. Now What?",
        level: 2,
        content:
          "Your guy best friend asked you to be his best woman, and you said yes before it fully sank in that you'd be standing in front of 150 people delivering a speech. Great. Totally fine. Deep breaths.\n\nThe best woman role is more common now, but it still catches some guests off guard. People expect a best man. They might not immediately clock who you are or why you're giving this toast. That's actually working in your favour. You've got curiosity on your side from the second you stand up.\n\nA best woman speech follows roughly the same structure as a best man speech, with a few differences worth thinking about. The biggest one? You can probably leave out the stag do stories entirely.",
      },
      {
        heading: "Addressing the 'Wait, Why Is a Woman Giving This Speech?' Thing",
        level: 2,
        content:
          "You don't owe anyone an explanation. But a brief, confident acknowledgment can win the room quickly.\n\nSomething like: 'For anyone wondering why there's a woman standing where the best man usually goes, it's because [Groom] has excellent taste in friends.' Quick laugh, moving on.\n\nOr: 'I know the programme says \"best man speech,\" and I want to assure you that [Groom] searched everywhere for a man who could handle this job. He couldn't find one.'\n\nOne or two lines is all you need. Don't spend a full minute justifying your presence. The more relaxed you are about it, the more relaxed the room will be. Confidence spreads fast.",
      },
      {
        heading: "What to Talk About: Your Unique Perspective",
        level: 2,
        content:
          "You have a genuine edge over the traditional best man. A close female friend often has a different view of the groom. You've probably seen sides of him his male friends haven't. Maybe you've been his sounding board for relationship crises since sixth form. Maybe you've watched him grow up in ways he'd never admit to the lads.\n\nLean into that. You can speak to his emotional depth without it feeling forced. You can share the conversation where he first mentioned his partner and his voice went different. You can talk about watching him become the kind of person who was ready for this.\n\nTraditional best man speeches often revolve around pranks, drinking stories, and sports metaphors. You don't have to follow that template. You also don't have to avoid it if it's genuinely your dynamic. Be yourself. Your speech should sound like a best woman speech, which is whatever you decide it is.",
      },
      {
        heading: 'The Structure: Borrow What Works',
        level: 2,
        content:
          "The bones of a best woman speech are the same as any wedding toast:\n\n1. Open with who you are and how you know the groom (30 seconds)\n2. Share a story or two that reveals his character (2-3 minutes)\n3. Talk about the couple and what you've witnessed (1-2 minutes)\n4. Toast (30 seconds)\n\nTotal: four to six minutes. That's the range.\n\nThe story section is where your speech lives or dies. One great story beats a timeline of your friendship. Pick the moment that best captures who the groom is when it counts. Then connect it to why this marriage makes sense.\n\nFor the couple section, if you know the partner well, share something about their dynamic. If you mostly know the groom, focus on the change you've seen in him. Both work.",
      },
      {
        heading: 'Navigating the Tone',
        level: 2,
        content:
          "Best man speeches tend to lean hard on roasting. You can absolutely roast the groom. Cross-gender friendships often produce some of the best material because you've seen him at peak ridiculousness. The guy who called you at midnight asking whether his text to his crush sounded 'too eager.' The guy who wore cargo shorts to a cocktail bar and genuinely couldn't understand the problem.\n\nBut there's a nuance worth noting. Some audiences might read a woman teasing a man differently than a man teasing a man. Unfair? Yes. Real? Also yes. It doesn't mean you pull your punches. It means you make sure the affection underneath is obvious. Every roast should be bookended by genuine warmth.\n\n'[Groom] once asked me to help him pick an outfit for his first date with [Partner]. He showed up in a Hawaiian shirt and khakis. The fact that [Partner] agreed to a second date tells you everything about the kind of person they are.' That's a tease that lands because it's wrapped in love.",
      },
      {
        heading: "If You're Friends With the Partner Too",
        level: 2,
        content:
          "Sometimes the best woman knows both halves of the couple. Maybe you introduced them. Maybe you became friends with the partner independently. This is brilliant material.\n\nIf you set them up, that's a story the room absolutely wants to hear. Keep it concise but include the good details. What made you think they'd click? Were you right straight away or did it take a while? Did either of them resist at first?\n\nIf you're close with both, you can speak to the relationship from two sides, something most speakers can't do. 'I've heard [Groom]'s version of their first date and [Partner]'s version, and let me tell you, they are not the same story.' That's a fun setup that pulls the whole audience in.",
      },
      {
        heading: 'Practical Stuff: Planning and Logistics',
        level: 2,
        content:
          "Coordinate with the other speakers. If there's also a best man, a maid of honor, and parents giving toasts, you need to know what everyone else is covering. Nothing kills a speech like the person before you telling the exact same story.\n\nAsk the groom if there's anything he specifically wants mentioned or avoided. Some grooms have strong opinions. Others will say 'just don't embarrass me too badly' and leave it there.\n\nIf you were involved in planning the stag do or other pre-wedding events, don't reference what happened unless you've cleared it. What happens at the stag stays at the stag. This isn't just a saying. It's a rule.\n\nPractice your speech in front of someone who'll give you honest feedback. Not your mum (who will say it's wonderful regardless), but a friend who'll tell you the second joke doesn't work and your ending needs tightening.",
      },
      {
        heading: 'Closing Strong',
        level: 2,
        content:
          "Your closing should do two things: make the groom feel seen, and make the couple feel celebrated.\n\n'[Groom], you've been my best friend for twelve years. You've talked me off ledges, made me laugh until I couldn't breathe, and shown me what real loyalty looks like. [Partner], thank you for loving him the way he deserves. And [Groom], thank you for finally finding someone who appreciates your terrible puns as much as I pretend not to.'\n\nThen the toast. Make it specific. 'To [Couple]: may your life together be full of terrible puns, great adventures, and the kind of love that makes everyone in this room a little jealous.' Raise glass. Drink. Sit down. Spend the rest of the night accepting compliments.",
      },
    ],
    ctaSupportingText: 'Own the role, your way',
    relatedExamples: ['best-woman-speech', 'funny-wedding-speech'],
    relatedArticles: ['best-man-speech-guide', 'how-to-be-funny-wedding-speech'],
    tags: ['best woman', 'guide'],
  },
  // ─── destination-wedding-speech ───
  {
    slug: 'destination-wedding-speech',
    title: 'How to Give a Speech at a Destination Wedding',
    category: 'Speech Tips',
    targetKeyword: 'destination wedding speech',
    metaDescription: "Destination weddings change the vibe. Here's how to match your speech to the setting.",
    searchIntent: 'Specific situation',
    icon: '🌴',
    readingTime: 5,
    sections: [
      {
        heading: "You Flew Somewhere Beautiful. Now You Have to Give a Speech.",
        level: 2,
        content:
          "The guests are sunburned. Half of them are jet-lagged. The other half are three rum punches deep and wondering if the toasts are going to cut into sunset cocktail hour. Meanwhile, you have been trying to write your speech on a hotel balcony while your roommate snores through a wall that might as well be made of paper.\n\nDestination weddings run on a completely different frequency. The intimacy is different because people have been eating breakfast together for two days. The energy is looser. The logistics are a mess in ways you will not anticipate until you are standing on a beach trying to read your phone screen in direct sunlight. All of this changes how you approach the speech, and most of it changes things for the better.",
      },
      {
        heading: 'The Vibe Is More Casual. Your Speech Should Match.',
        level: 2,
        content:
          "A beach ceremony in Tulum does not call for the same formality as a ballroom in Manhattan. Read the setting. Adjust.\n\nCasual does not mean sloppy or unprepared. It means lighter tone, more conversational rhythm, more room to breathe. You can reference the trip. You can acknowledge the tan lines. You can point out that every single person in this room took time off work and probably maxed out a credit card to be here, which says more about how much they love the couple than any card ever could.\n\nTry something like: \"The fact that all of you traveled to [Destination] to watch these two get married tells you everything about [Couple]. They are the kind of people you cross an ocean for.\" That line works because it is specific to the setting and doubles as a genuine compliment. If you forget a line or stumble over a word, nobody cares. People are relaxed. Use that to your advantage.",
      },
      {
        heading: 'Use the Setting (But Don\'t Let It Take Over)',
        level: 2,
        content:
          "A quick location reference adds color. Something like: \"We are standing on a beach in Costa Rica, and I can confidently say this is the most beautiful place I have ever given a speech. The previous record holder was my friend\'s garage in 2019, so the bar was low.\"\n\nBut do not turn your speech into a travel review. The audience did not come to hear about the hotel pool or the snorkeling excursion. They came to hear about the couple. One or two location references, then pivot to the real content.\n\nThe exception is when the place is genuinely part of the love story. Maybe this is where they got engaged. Maybe they vacationed here every year. Maybe one of them spent a semester abroad here and always dreamed of coming back. If the destination means something, work it in. \"[Couple] always said they would return to this spot. I just did not realize they would bring 80 of their closest friends when they did.\"",
      },
      {
        heading: 'Practical Logistics You Haven\'t Thought About',
        level: 2,
        content:
          "Outdoor destination weddings come with logistical problems that indoor weddings simply do not have.\n\nWind. Your printed speech will blow away. Use heavier cardstock or a small notecard holder. Do not rely on your phone because glare from the sun can make the screen completely unreadable. One best man at a beach wedding in Mexico spent his entire speech squinting and tilting his phone at different angles. Do not be that person.\n\nSound. Beach ceremonies rarely have the acoustic setup of a ballroom. If there is no microphone, you need to project. If there is one, test it beforehand. Outdoor sound systems have a way of cutting out at the worst possible moment.\n\nTiming. If the ceremony is at sunset, the light is changing fast. Do not drag your speech out while the photographer loses the golden hour. Be respectful of the timeline.\n\nHeat. If it is a tropical wedding and you are in a suit, you are going to sweat. Everyone is sweating. Keep your speech tight so you can get back to the shade and the open bar before you melt.",
      },
      {
        heading: 'The Audience Is Smaller (And That Changes Things)',
        level: 2,
        content:
          "Destination weddings typically have a smaller guest list because not everyone can fly to Portugal on a random weekend. This works in your favor.\n\nA smaller crowd means more intimacy. You can make eye contact with most of the room. You can reference specific people without having to explain who they are. You can be more personal and less performative.\n\nThe guests probably know each other better than a typical wedding crowd, too. They have been doing group dinners and pool hangs for two days. Inside jokes from the trip are fair game, as long as they are inclusive. \"I think we can all agree that the catamaran excursion yesterday was an experience\" works if everyone was there. It does not work if half the group missed it.\n\nThe flip side: a small audience means there is less cover if your joke does not land. In a crowd of 200, a flat joke floats away. In a crowd of 40, there is an audible silence. You will feel it. Practice your material so you know what is going to work, and have a smooth transition ready for the bits you are less sure about.",
      },
      {
        heading: 'Thank People for Being There (And Mean It)',
        level: 2,
        content:
          "At a local wedding, thanking guests for coming is polite. At a destination wedding, it is essential. These people spent money, burned vacation days, arranged childcare, and possibly endured a twelve-hour travel day to be in this room. That deserves real acknowledgment, not a passing mention.\n\nWork it into your speech naturally. Do not just list logistics. Connect it to the couple. \"Every person in this room made a real effort to be here today. That is not about a free vacation. That is about [Couple], and the kind of love and loyalty they inspire in the people around them.\"\n\nIf parents or family members made a particularly significant effort to attend, like elderly grandparents who traveled internationally, a brief mention is a classy touch that the couple will remember long after the trip.",
      },
      {
        heading: 'Write Your Speech Before You Leave Home',
        level: 2,
        content:
          "This is the single most important practical tip in this entire article. Do not plan to write your speech at the destination. You will not do it. You will be too busy with welcome dinners, beach excursions, and trying to figure out the foreign electrical outlets in your hotel room.\n\nWrite a solid draft before you travel. Print it on cardstock. Practice it on the plane if you have to. Then, at most, do a light edit at the destination to work in any trip-specific references that come up organically.\n\nThe people who show up without a written speech are the ones who end up rambling for eight minutes about how \"this place is amazing\" while the sun sets behind them. No one wants to be on the receiving end of that, and no one wants to deliver it either.",
      },
      {
        heading: 'The Destination Wedding Toast',
        level: 2,
        content:
          "End with a toast that captures the spirit of the whole weekend, not just the ceremony. Destination weddings are multi-day events and your toast can reflect that broader experience.\n\n\"To [Couple]: thank you for bringing us to this incredible place, for giving us an excuse to spend three days with the people we love most, and for reminding all of us what it looks like when two people choose each other with total confidence. Here is to your adventure, which started long before this trip and will last long after we have all gone home.\"\n\nThen clink glasses, take a sip of whatever tropical thing you have been handed, and go enjoy the rest of the party. You earned it.",
      },
    ],
    ctaSupportingText: 'Match your speech to the moment',
    relatedExamples: ['destination-wedding-speech', 'lighthearted-speech'],
    relatedArticles: ['how-long-should-a-wedding-speech-be', 'wedding-speech-etiquette'],
    tags: ['destination', 'situational'],
  },

  // ─── rehearsal-dinner-speech-guide ───
  {
    slug: 'rehearsal-dinner-speech-guide',
    title: 'Rehearsal Dinner Speech: The Intimate Toast Before the Big Day',
    category: 'Speech Tips',
    targetKeyword: 'rehearsal dinner speech',
    metaDescription: 'Rehearsal dinner speeches are more relaxed, more personal, and often more fun.',
    searchIntent: 'Rehearsal dinner',
    icon: '🍽️',
    readingTime: 5,
    sections: [
      {
        heading: 'The Rehearsal Dinner Speech: Low-Key, High-Impact',
        level: 2,
        content:
          "The rehearsal dinner is the opening act. Smaller crowd, looser structure, no DJ waiting to cue the first dance. Which makes it the perfect setting for a speech that is too personal for the big room or too long for the reception toast lineup.\n\nRehearsal dinner speeches have a warmth that reception toasts sometimes lose in the production. You are talking to maybe 30 people, most of them family and close friends. Nobody is checking the time. You can breathe. You can tell the story that needs a two-minute setup because the five-minute version is actually better than the two-minute version here.\n\nThat said, \"relaxed\" does not mean you can just stand up and free-associate for ten minutes. People have tried. It goes badly. If you have been asked to speak, or you want to volunteer, a few minutes of preparation will separate a memorable moment from a forgettable ramble.",
      },
      {
        heading: 'Who Speaks at a Rehearsal Dinner?',
        level: 2,
        content:
          "Traditionally, the groom\'s parents host the rehearsal dinner and kick off the toasts. But modern rehearsal dinners are more open.\n\nCommon speakers include parents of both partners, siblings, close friends who are not giving speeches at the reception, grandparents, and sometimes the couple themselves.\n\nThe rehearsal dinner is the ideal spot for people who want to speak but are not on the reception schedule. If you are a college roommate, a cousin, a mentor, or a co-worker who has something to say, this is your venue. The reception timeline is tight. The rehearsal dinner has room.\n\nOne thing worth noting: if you are planning to speak, give the hosts a heads-up. Surprise speeches can throw off the evening and the hosts may already have a speaking order in mind. Showing up and tapping your glass unannounced is a gamble that rarely pays off.",
      },
      {
        heading: 'Tone: Warmer, More Personal, Less Polished',
        level: 2,
        content:
          "Reception speeches are performances. Rehearsal dinner speeches are conversations. That is the key difference.\n\nYou can be less polished here. Glancing at notes is completely normal. Getting a little long is more forgivable. Tearing up hits differently because the room is small enough that everyone can see your face and they are probably tearing up too.\n\nThe tone should feel like you are talking to friends at a dinner table, because you literally are. You do not need a big opening or a structured arc. You can start with \"I just want to say something about these two\" and go from there.\n\nBut less polished does not mean unprepared. Even a casual speech benefits from thinking through what you want to say and roughly how you want to say it. Winging it completely is how you end up telling a story that goes nowhere for six minutes while everyone stares at their plates. At minimum, know your opening line and your closing line. The middle will take care of itself.",
      },
      {
        heading: 'What to Actually Talk About',
        level: 2,
        content:
          "The rehearsal dinner is built for content that is too intimate for the reception.\n\nFamily stories. The reception crowd includes co-workers, distant relatives, and the couple\'s random acquaintances from various life stages. The rehearsal dinner is family and close friends. You can go deeper.\n\nThe longer version of a story. At the reception, you would tell the two-minute version. Here, you can tell the five-minute version with all the good details.\n\nSentimental stuff that would feel too intense in a big room. A quiet \"I want you to know how proud I am of the person you have become\" hits differently when it is 30 people instead of 200.\n\nPractical well-wishes. The rehearsal dinner is a natural place for genuine advice from people who have been married a long time. Grandparents sharing what they have learned over 50 years of marriage is the kind of content people remember from these evenings.\n\nWelcome-to-the-family speeches. If you are gaining a son-in-law or daughter-in-law, the rehearsal dinner is the right moment to say \"you are one of us now\" in a way that feels personal rather than performative.",
      },
      {
        heading: 'Length: How Long Is Too Long?',
        level: 2,
        content:
          "Rehearsal dinner speeches can run a bit longer than reception toasts. Three to seven minutes is the comfortable range. If there are many speakers, trend shorter. If you are one of two or three people talking, you have more room.\n\nBut longer does not mean better. A tight four-minute speech is still better than a rambling eight-minute one. No one wants an eight-minute speech, even if it is good. The extra breathing room is for depth, not filler.\n\nIf you are the host, typically the groom\'s parents, you might go a little longer because you are also doing the welcome and the thank-yous. Keep the logistics brief and save your time for the personal stuff.\n\nAlso be aware of how many people are planning to speak. If eight people each go five minutes, that is 40 minutes of speeches at a dinner that might only last two hours. Coordinate with the hosts. This is one of those situations where a quick text beforehand saves everyone.",
      },
      {
        heading: 'The Parent Speech: Hosting and Toasting',
        level: 3,
        content:
          "If you are the parent hosting the rehearsal dinner, your speech does double duty. You are welcoming everyone and saying something meaningful about the couple.\n\nStructure it simply: welcome and thank-yous (one minute), something personal about your child and their partner (two to three minutes), toast (30 seconds).\n\nFor the personal section, the rehearsal dinner is where you can tell the stories that are too specific for the reception. The first time your kid mentioned this person. The phone call when they told you they had found the one. The moment you realized it was serious.\n\nKeep the thank-yous sincere but brief. Thank the other family, thank the wedding party, thank anyone who traveled a long distance. Do not turn it into an award show acceptance speech where you list every person in the room by name. That road has no end.",
      },
      {
        heading: 'Avoiding the Pre-Wedding Roast Trap',
        level: 2,
        content:
          "The relaxed vibe of a rehearsal dinner sometimes gives people the idea that they can push the envelope harder than they should. The thinking goes: it is casual, it is just close friends and family, the rules are looser.\n\nBe careful. The rehearsal dinner still includes the couple\'s parents and grandparents. The boundaries are wider than the reception, but they still exist.\n\nAlso, the couple is nervous. They are getting married tomorrow. This is not the night to tell the story that makes the groom question his life choices, even as a joke. If you have edgier material, that is what the bachelor or bachelorette party was for.\n\nLight teasing works well here. \"[Groom] was so nervous about proposing that he called me four times in one hour\" is sweet and funny. Going into detail about his most embarrassing college moment is not the right move the night before his wedding. Read the room, and when in doubt, save it for the pub.",
      },
      {
        heading: 'Closing: Set the Tone for Tomorrow',
        level: 2,
        content:
          "Your rehearsal dinner speech has a unique opportunity: you get to set the emotional tone for the wedding itself. The last thing people hear the night before the big day tends to stick.\n\nEnd on something that makes everyone excited for tomorrow. \"I have been looking forward to this wedding for months, and after spending tonight with all of you, I am even more excited for tomorrow. [Couple], tomorrow is going to be the best day of your lives so far. And knowing you two, it is just the beginning.\"\n\nRaise your glass. Let the evening wind down naturally. And maybe do not stay out too late. You have a wedding to attend in the morning and you will want to remember it.",
      },
    ],
    ctaSupportingText: 'Nail the warm-up round',
    relatedExamples: ['rehearsal-dinner-speech', 'short-sweet-speech', 'lighthearted-speech'],
    relatedArticles: ['engagement-party-speech-guide', 'wedding-toast-vs-wedding-speech'],
    tags: ['rehearsal dinner', 'format'],
  },

  // ─── joint-couple-speech-guide ───
  {
    slug: 'joint-couple-speech-guide',
    title: "How to Write a Joint Couple's Speech (Without Talking Over Each Other)",
    category: 'Speech Tips',
    targetKeyword: 'joint couple speech',
    metaDescription: "A guide to writing and delivering a joint speech as newlyweds.",
    searchIntent: 'Couple speaking together',
    icon: '💑',
    readingTime: 5,
    sections: [
      {
        heading: "Two Voices, One Speech: The Joint Couple's Toast",
        level: 2,
        content:
          "More and more couples are giving a joint speech at their own wedding, and it makes sense. You are both standing there. You both have people to thank. Making one person do all the talking while the other stands beside them nodding feels oddly lopsided.\n\nThe challenge is coordination. Two people talking into the same microphone can be charming or chaotic, and the gap between those two outcomes is entirely about preparation. Unplanned, it sounds like two people interrupting each other while the audience tries to figure out who to look at.\n\nPlanned well, a joint speech is the highlight of the evening. It is the one toast where the audience gets to see your actual dynamic. The way you correct each other, finish each other\'s sentences, disagree on who said what first. That is the good stuff. That is what people came for.",
      },
      {
        heading: 'To Script or Not to Script',
        level: 2,
        content:
          "You have three options.\n\nFully scripted: write the whole thing together, assign every line, and practice until the transitions are smooth. This is the safest choice, especially if either of you gets nervous in front of a crowd.\n\nLoosely structured: agree on the sections and who covers what, but leave the exact wording flexible. This feels more natural and allows for spontaneity. It also requires more comfort with public speaking and a willingness to trust each other not to go rogue.\n\nFully improvised: you just wing it. This works if you are both naturally funny, comfortable with a microphone, and have somehow never talked over each other in the history of your relationship. For everyone else, it is seven minutes of crosstalk and confusion.\n\nFor most couples, the loosely structured approach is the sweet spot. Plan the beats, know who says what, but leave room for your actual personalities to come through. If one of you blanks on a line, the other can pick it up. Built-in safety net.",
      },
      {
        heading: 'Dividing the Content',
        level: 2,
        content:
          "The easiest way to divide a joint speech is by audience. Each person addresses the people they are closest to.\n\nPerson A thanks their own family, talks about how they met from their perspective, and says something about Person B\'s family.\n\nPerson B thanks their own family, shares their side of the story, and says something about Person A\'s family.\n\nThen you come together for the shared sections: thanking the wedding party, thanking the guests, and delivering the final toast.\n\nThis structure works because it minimizes the back-and-forth. You are not ping-ponging between speakers every two sentences. Each person gets an uninterrupted stretch and the transitions happen at natural breakpoints.\n\nAlternative approach: the \"you tell it, no you tell it\" method. One person starts a story and the other jumps in to correct or add details. This is fun and gets laughs, but it requires rehearsal. Without practice, you are just genuinely interrupting each other and the audience cannot tell the difference.",
      },
      {
        heading: 'The Handoffs: Making Transitions Smooth',
        level: 2,
        content:
          "The biggest technical challenge in a joint speech is the handoff. Awkward silence while one person finishes and the other figures out it is their turn will kill your momentum.\n\nSome clean transition techniques:\n\nThe direct pass: \"And on that note, I will hand it over to [Partner].\" Simple. Clear. Hard to mess up.\n\nThe disagreement pass: \"Now, [Partner] is going to tell you a completely different version of how we met, and I want to be on record that mine is the accurate one.\" Gets a laugh and makes the transition entertaining.\n\nThe tag-team pass: Person A tells the setup, Person B delivers the punchline. This requires practice but it lands hard when it works.\n\nThe natural break: Person A finishes their section, pauses, and Person B starts without any verbal handoff. This works if the sections are clearly different but can be confusing if the topics overlap.\n\nPractice the transitions more than anything else. The individual sections you can handle on your own. The handoffs are where joint speeches fall apart, and they are the part most couples skip in rehearsal.",
      },
      {
        heading: 'What to Include: The Essential Beats',
        level: 2,
        content:
          "A joint couple speech should cover:\n\nThank the parents. Both sets. Be specific about what they have contributed, whether financial, emotional, or logistical. If parents have complicated relationships, navigate carefully and focus on gratitude rather than detail.\n\nThank the wedding party. A group thank-you works fine, or each of you can say a line about your own side. Do not go person by person for a twelve-member wedding party unless you want to be standing up there for 20 minutes while people\'s eyes glaze over.\n\nThank the guests. Especially anyone who traveled far or made a significant effort to be there.\n\nShare something about your relationship. How you met, a turning point, the proposal, something that captures your dynamic as a couple. This is where the speech gets fun.\n\nToast. End together, raising your glasses in unison.\n\nTotal time: five to eight minutes. Enough to cover everything without losing the room.",
      },
      {
        heading: 'Humor: Play Off Each Other',
        level: 2,
        content:
          "The biggest advantage of a joint speech is the built-in comedic dynamic. You are literally a double act.\n\nContradict each other. \"I knew immediately that [Partner] was the one.\" \"That is funny, because you did not text me back for three days.\" The audience loves seeing the real relationship peek through.\n\nCorrect each other\'s stories. \"We were at that Italian place downtown...\" \"It was Mexican.\" \"Was it?\" \"It was definitely Mexican.\" \"Okay, we were at the Mexican place.\" This kind of exchange feels authentic because it is. You do not even need to rehearse it much because it will probably happen naturally.\n\nHave a running bit. One person keeps trying to say something sentimental and the other keeps undercutting it. Or one person is clearly more emotional than the other and you play that up.\n\nJust make sure both people get moments. If one partner is always the punchline and the other is always the comedian, it starts to feel unbalanced. Share the laughs and the sincerity both.",
      },
      {
        heading: 'The Microphone Situation',
        level: 2,
        content:
          "This is more practical than it sounds. If you are sharing one microphone, you need to physically pass it back and forth, which creates natural pauses but also creates fumbling. If you have two microphones, the transitions can be faster but you run a real risk of talking over each other.\n\nBest setup: two microphones, each person at a slightly different position. You can look at each other, which makes the banter feel natural, and the audience can clearly see who is speaking.\n\nSecond best: one microphone on a stand between you. Nobody has to hold it and you can each lean in when it is your turn.\n\nWorst setup: one handheld microphone being passed back and forth. It is clunky and slow and someone will drop it or fumble the handoff at the worst possible moment. If this is your only option, minimize the transitions.\n\nAsk the venue or DJ about mic options during the rehearsal. This is a completely solvable problem, but only if you think about it before the day of.",
      },
      {
        heading: 'Ending Together',
        level: 2,
        content:
          "The final moment should feel unified. Both of you, looking at the room, delivering the toast together.\n\nOption 1: One person delivers the final line and the other raises their glass. Clean and simple. Almost impossible to mess up.\n\nOption 2: You write one final sentence together and deliver it at the same time. \"To everyone in this room: thank you for being here. We love you.\" This takes practice to not sound like a weird chant, but when it clicks, it is a powerful closer.\n\nOption 3: One person gets sentimental, the other lightens the mood. \"We are so grateful for every person in this room.\" \"Now please drink heavily and dance terribly.\" Good cop, fun cop.\n\nWhatever you choose, end with confidence. Do not trail off. Do not add a \"so yeah, thanks\" at the end. Hit the last line, raise the glasses, kiss each other, and sit down. You just pulled off one of the trickier speech formats in the wedding game.",
      },
    ],
    ctaSupportingText: 'Write your speech together, effortlessly',
    relatedExamples: ['joint-couple-speech', 'groom-speech', 'bride-speech'],
    relatedArticles: ['groom-speech-guide', 'bride-speech-guide'],
    tags: ['joint', 'couple'],
  },

  // ─── engagement-party-speech-guide ───
  {
    slug: 'engagement-party-speech-guide',
    title: 'How to Give a Speech at an Engagement Party',
    category: 'Speech Tips',
    targetKeyword: 'engagement party speech',
    metaDescription: "Engagement party speeches are shorter, lighter, and less pressure.",
    searchIntent: 'Engagement party',
    icon: '🥂',
    readingTime: 5,
    sections: [
      {
        heading: "The Engagement Party Speech: It's a Toast, Not a TED Talk",
        level: 2,
        content:
          "Think of the engagement party speech as the appetizer. It should be shorter, lighter, and significantly less formal than whatever comes at the wedding. The stakes are lower. The vibes are higher. Nobody is expecting a performance.\n\nThe most common problem with engagement party speeches is that people treat them like wedding speeches. They pull out the tearful maid of honor tribute or the full best man routine, and suddenly a casual cocktail party has turned into something that feels like a dress rehearsal nobody asked for. The wedding has not happened yet. You do not need to give the keynote.\n\nTwo to three minutes. Four at the absolute maximum. If you are going longer than that at an engagement party, you are doing too much. And if you lose your place midway through, just skip ahead to the toast. Nobody will know what you cut.",
      },
      {
        heading: 'Who Gives an Engagement Party Speech?',
        level: 2,
        content:
          "Typically, the host gives the main toast. That might be the parents of one or both partners, a close friend, a sibling, or the couple themselves.\n\nIf you are the host, a speech is expected. Keep it warm and welcoming. If you are not the host but want to say something, check with the host first. Multiple surprise speeches at an engagement party can derail the evening fast, and the host may already have a plan.\n\nThe couple may also want to say a few words, usually a thank-you to the host and the guests. If you are the engaged couple and you want to speak, keep it brief and gracious. Save the full love story for the wedding.\n\nOne difference from weddings: engagement parties are more casual about speaking order. There is no program, no DJ announcing names. Someone taps a glass, the room quiets down, and you go. Which also means if your opening line does not land, you can just plow ahead. The informality is forgiving.",
      },
      {
        heading: 'What to Say: The Engagement Party Formula',
        level: 2,
        content:
          "An engagement party speech has three ingredients:\n\n1. Welcome and context (20 seconds). \"Thank you all for coming tonight to celebrate [Couple]. For those who do not know me, I am [Name], [Bride]\'s college roommate and the person who has heard every detail of this relationship from day one.\"\n\n2. A quick story or observation (60 to 90 seconds). Something light, something fun, something that captures the couple\'s energy. Save the deep emotional material for the wedding.\n\n3. The toast (20 seconds). \"To [Couple], and to the adventure that is just getting started.\"\n\nThat is it. Two minutes. Everyone goes back to their drinks. Perfect.\n\nThe engagement party speech is the one time where being brief is genuinely better than being thorough. Nobody expects a keynote. They expect a warm moment and then another glass of wine.",
      },
      {
        heading: 'Tone: Light, Fun, Forward-Looking',
        level: 2,
        content:
          "The engagement party is a celebration, not a ceremony. Match the tone.\n\nBe playful. Be excited. Be the friend who is genuinely thrilled about the news. If you were the first person they told, share what that moment felt like. If you watched the relationship develop from the beginning, share the moment you knew it was serious.\n\nAvoid anything too heavy. This is not the venue for marriage advice, deep family history, or speeches about mortality and the passage of time. There is a whole wedding coming for that.\n\nAlso avoid anything too roast-heavy. A little teasing is fine, but engagement parties often include people who are meeting the couple for the first time. New co-workers, extended family, the partner\'s friends you have not met yet. Keep the humor accessible and kind. If a joke requires backstory to be funny rather than mean, it is the wrong joke for this room.",
      },
      {
        heading: 'If You\'re Also Speaking at the Wedding',
        level: 2,
        content:
          "Common scenario. You are the maid of honor or best man, you are giving a speech tonight, and you will be giving another one at the wedding. Do not use your best material at the engagement party.\n\nThink of the engagement party speech as the trailer and the wedding speech as the movie. You can hint at the tone, share a different story, give the audience a taste of your relationship with the couple. But save the big story, the emotional punch, and the best jokes for the main event.\n\nA good strategy: at the engagement party, talk about the couple\'s future. At the wedding, talk about their past and present. This gives you completely different material for each speech and avoids the dreaded \"did they not already tell this story?\" reaction from the guests who were at both events.\n\nIf someone at the engagement party says \"that was amazing, you should say that at the wedding,\" just smile. You have different plans for the wedding. Better ones.",
      },
      {
        heading: 'The Proposal Story: To Tell or Not to Tell',
        level: 2,
        content:
          "The engagement party is peak proposal-story territory. Guests want to hear it. But here is the thing: it is not your story to tell unless the couple wants you to tell it.\n\nIf you were involved in the proposal, maybe you helped plan it or you were there when it happened, you can share your perspective. \"I have been holding this secret for three months and I am so relieved it is finally over\" is a fun angle that keeps the focus on your experience rather than narrating their moment.\n\nBut if you are just recounting what they told you, let the couple tell their own story. Set them up for it instead. \"I know everyone wants to hear the proposal story, and I think it is best coming straight from the source. [Couple], the floor is yours.\" Then sit down and hand them the mic. The audience gets what they want, and you get credit for being a gracious speaker. Everyone wins.",
      },
      {
        heading: 'Quick Examples to Steal',
        level: 2,
        content:
          "For parents hosting the party:\n\"When [Child] told us the news, [Spouse] and I looked at each other and had the same thought: finally. We have loved [Partner] since the first time they came to dinner and asked for seconds of my [Spouse]\'s terrible lasagna. That is when we knew this was a person who truly loved our kid. To [Couple] and their incredible future.\"\n\nFor a close friend:\n\"I got the call on a Tuesday afternoon. [Friend] was trying to sound calm but was clearly screaming on the inside. \'We are engaged,\' they said, like it was no big deal. Thirty minutes later, my phone was still blowing up with details. To [Couple]: you deserve every happiness. And to [Partner]: welcome to the group chat. There is no leaving.\"\n\nFor the couple:\n\"We just want to thank [Host] for putting this together, and all of you for being here tonight. Looking around this room, we see the people who have supported us, challenged us, and only mildly judged our apartment decor. We cannot wait to celebrate with you again at the wedding. And yes, there will be an open bar.\"",
      },
    ],
    ctaSupportingText: 'Start the celebration right',
    relatedExamples: ['engagement-party-speech', 'short-sweet-speech'],
    relatedArticles: ['rehearsal-dinner-speech-guide', 'wedding-toast-vs-wedding-speech'],
    tags: ['engagement', 'format'],
  },

  // ─── wedding-speech-roast-guide ───
  {
    slug: 'wedding-speech-roast-guide',
    title: 'Wedding Speech Roast: How to Tease Without Offending',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech roast',
    metaDescription: 'A wedding roast done right is legendary. Done wrong, it\'s a disaster.',
    searchIntent: 'Wants to roast',
    icon: '🔥',
    readingTime: 5,
    sections: [
      {
        heading: 'The Wedding Roast: Walking the Line Between Funny and Fired',
        level: 2,
        content:
          "So you want to roast the bride or groom in your speech. Good. Roasting is one of the best tools you have. A well-placed tease shows closeness, gets laughs, and keeps the whole thing from drowning in sentimentality.\n\nBut you already know that wedding roasting is different from roasting your friend at a bar. The audience includes grandparents, co-workers, and in-laws who met the couple about 45 minutes ago. One wrong joke and you go from \"hilarious best man\" to \"the person who made everyone uncomfortable during the entree.\"\n\nThe line between those two outcomes is thinner than you think. And the consequences of getting it wrong last longer than the speech does.",
      },
      {
        heading: 'The Golden Rule of Wedding Roasting',
        level: 2,
        content:
          "Every roast joke must come from a place of obvious love. If the audience cannot feel the affection underneath the tease, you have crossed the line.\n\nHere is a test: after every roast line, ask yourself, \"Would the person I am roasting actually laugh at this?\" Not tolerate it. Not forgive you eventually. Actually laugh. If the answer is not a confident yes, cut it.\n\nAnother test: read the joke to someone who does not know the person you are roasting. If it sounds mean without context, it will sound mean to half the audience, because half the audience does not have context.\n\nThe best wedding roasts are self-evidently loving. \"[Groom] is the most stubborn person I have ever met. He once argued with a GPS. The GPS was right. He still did not turn.\" That is funny, affectionate, and clearly coming from someone who knows this person inside and out. Nobody hears that and worries about the groom\'s feelings.",
      },
      {
        heading: 'Topics That Are Safe to Roast',
        level: 2,
        content:
          "Harmless quirks and habits. Their obsession with fantasy football. Their inability to cook anything beyond pasta. Their inexplicable loyalty to a terrible sports team that has not won anything since before they were born.\n\nFunny stories where they looked silly but nobody got hurt. Getting lost on a road trip. Overdressing for a casual event. Mispronouncing a word for years and getting genuinely annoyed when corrected.\n\nTheir relationship dynamic, gently. \"[Bride] says [Groom] is in charge. [Groom] also says [Bride] is in charge. And that, friends, is the foundation of a great marriage.\"\n\nSelf-deprecating comparison. \"[Groom] was always the good-looking one in our friend group, and I say that as someone who owns a mirror.\" Roasting yourself alongside the target softens everything.\n\nTheir reaction to the wedding planning. \"I asked [Bride] how planning was going and she sent me a GIF of a building on fire. So... great, I think.\"",
      },
      {
        heading: 'Topics That Will Get You in Trouble',
        level: 2,
        content:
          "Exes. Full stop. Do not mention anyone the bride or groom has previously dated. Not by name, not by implication, not with a \"we all know who I am talking about\" wink. This is the number one rule of wedding roasting and the one most frequently broken by people who think they are the exception.\n\nAppearance and body. \"You look amazing tonight\" is fine. \"You have really lost weight for this\" is not. Any joke that touches on physical appearance is a minefield with no safe path through it.\n\nIntelligence. Calling someone dumb, even jokingly, does not land well at their wedding. \"He is not the sharpest tool\" might get a nervous laugh, but it also makes the partner\'s family wonder what their kid is marrying into.\n\nFinancial situations. Do not joke about someone being cheap, broke, or rich. Money humor at weddings is almost always uncomfortable for someone in the room.\n\nAnything involving substances. \"Remember that time you got so drunk you...\" is a story for a private dinner, not a room that includes the couple\'s boss and grandmother.\n\nSexual history or innuendo. Keep it clean. You are not performing at a comedy club with a two-drink minimum.",
      },
      {
        heading: 'The Ratio: How Much Roast Is Too Much',
        level: 2,
        content:
          "Aim for roughly 70% sincere and 30% roast. That is a guideline, not a formula, but it keeps you in safe territory.\n\nThink of it as structure: open with a few roast jokes to get laughs and show your personality, then transition into the genuine material. The roast is the setup. The sincerity is the payoff.\n\nIn practice, that looks like this:\n\nMinutes one to two: Funny stories, light teasing, establishing your relationship with the person you are roasting.\n\nMinute two to three: The turn. \"But seriously...\" or \"Here is the thing about [Name]...\" This is where you pivot from comedy to heart.\n\nMinutes three to four: Genuine words about the person and the couple. The emotional core.\n\nMinute four to five: Toast, possibly with one final light joke to end on a high.\n\nThis structure works because the humor makes the emotional moments hit harder. Sincere from start to finish and people tune out. Roasting from start to finish and people get uncomfortable. The contrast is what makes both parts land.",
      },
      {
        heading: 'Delivery: Timing Makes or Breaks the Joke',
        level: 2,
        content:
          "The same joke can be hilarious or offensive depending entirely on how you deliver it.\n\nPause before the punchline. Let the audience catch up. Rushing through a joke kills it every time.\n\nSmile while you roast. Your facial expression tells the audience whether this is affectionate teasing or actual criticism. If you are grinning, they know it is love.\n\nLook at the person you are roasting. Make eye contact. If you are teasing the groom and he is laughing, the audience has permission to laugh too. If you are staring at your notes and the groom looks uncomfortable, the whole thing falls apart.\n\nDo not double down if a joke does not land. Just move on. Saying \"oh come on, that was funny\" makes it worse. Every time. The audience will forget a flat joke in ten seconds. They will not forget you arguing with them about whether it was funny.\n\nCommit to the bit. The worst roast delivery is the half-hearted one where you say something edgy and then immediately apologize. \"He is terrible with directions... I am just kidding, he is fine.\" Either tell the joke with confidence or cut it from the speech entirely.",
      },
      {
        heading: 'The Save: What to Do If You Go Too Far',
        level: 2,
        content:
          "Even with preparation, sometimes a joke lands wrong. The room goes quiet. Someone shifts in their seat. You can feel the temperature drop.\n\nDo not panic. You have about three seconds to recover, which is more time than it sounds like.\n\nOption 1: Acknowledge it lightly. \"Okay, that one was funnier in my head.\" Then move on immediately to your next point.\n\nOption 2: Pivot to sincerity. \"But in all seriousness...\" and go straight to something genuinely kind. The contrast will reset the room faster than you expect.\n\nOption 3: Self-deprecate. \"And this is why [Groom] is the funny one in this friendship.\" Turning the attention back on yourself defuses the tension.\n\nWhat you should not do: double down, explain the joke, or pretend nothing happened. The audience noticed. Acknowledge it gracefully and move forward. The speech is not over just because one line missed.\n\nThe best insurance against going too far is testing your material beforehand. Read it to someone honest. If they wince, cut the joke. Better to lose a laugh than lose the room.",
      },
      {
        heading: 'Examples: Roast Lines That Work at Weddings',
        level: 2,
        content:
          "\"I have known [Groom] for 15 years, and in that time he has had roughly 40 different hairstyles. The fact that [Bride] agreed to marry him during this one suggests we should move quickly before he changes it again.\"\n\n\"[Bride] asked me to keep this speech short and clean. So I threw out my first draft. And my second draft. And honestly, most of my memories.\"\n\n\"[Groom] once texted me asking how to boil water. That was three years ago. [Bride], I want you to know what you are signing up for.\"\n\n\"[Bride] is the most organized person I know. She color-codes her closet. She has a spreadsheet for her groceries. And now she is married to a man who once wore two different shoes to work and did not notice until lunch. I think they call that balance.\"\n\n\"When [Groom] told me he was going to propose, I said, \'Are you sure she will say yes?\' He said, \'I have been practicing the speech for a month.\' And I said, \'That is the most [Groom] thing you have ever said.\'\"\n\nWhat all of these have in common: they are specific, they are clearly affectionate, and they do not punch down. That is the formula. Steal the structure, swap in your own details.",
      },
    ],
    ctaSupportingText: "Roast them lovingly, we'll help",
    relatedExamples: ['roast-wedding-speech', 'funny-wedding-speech', 'best-man-speech'],
    relatedArticles: ['how-to-be-funny-wedding-speech', 'what-not-to-say-wedding-speech'],
    tags: ['roast', 'humor'],
  },

  // ─── how-to-tell-story-wedding-speech ───
  {
    slug: 'how-to-tell-story-wedding-speech',
    title: 'How to Tell a Story in a Wedding Speech (That People Actually Want to Hear)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech story',
    metaDescription: 'The secret to a great wedding speech is one great story, told well.',
    searchIntent: 'Has stories, needs technique',
    icon: '📖',
    readingTime: 5,
    sections: [
      {
        heading: 'Most Wedding Speech Stories Are Boring. Yours Doesn\'t Have to Be.',
        level: 2,
        content:
          "The average wedding speech story goes something like this: \"So there was this one time, at [location], and [person] did [thing], and it was so funny, and we all laughed, and yeah, that is just the kind of person they are.\"\n\nThe speaker is smiling. The audience is polite. Nobody remembers a word of it by dessert.\n\nStorytelling is the single most valuable skill in wedding speeches, and almost nobody does it well. A great story transforms a forgettable toast into something people bring up for years. A bad story turns three minutes into something everyone endures while staring at the centerpiece.\n\nYou do not need to be a natural storyteller to pull this off. You just need to understand the difference between a story people want to hear and a story people sit through. The principles are simple. Most speakers just skip them.",
      },
      {
        heading: 'Pick the Right Story (Most People Pick Wrong)',
        level: 2,
        content:
          "The most common mistake is choosing a story based on how you felt in the moment rather than how it will sound to a room full of strangers.\n\n\"Oh, the camping trip was hilarious. You had to be there.\" If you had to be there, it is not a speech story. It is a memory. Those are different things.\n\nA good wedding speech story meets three criteria:\n\nIt reveals something about the person\'s character. Not just what happened, but what it shows about who they are.\n\nIt is followable by strangers. The audience does not know the backstory, the inside jokes, or the geography of your college campus. If your story needs a full backstory, it is probably not the one.\n\nIt connects to the marriage. The connection can be subtle, but there needs to be a bridge from \"here is something that happened\" to \"here is why it matters today.\" Without that bridge, you are just telling an anecdote at someone\'s wedding.",
      },
      {
        heading: 'The Three-Part Structure Every Story Needs',
        level: 2,
        content:
          "Every great story, whether it is a novel or a 90-second wedding anecdote, has three parts.\n\nSetup: Where are we? Who is involved? What is at stake? Keep this tight. Two or three sentences max. \"It was the summer after college. Five of us had rented a house in Maine for a week, and [Groom] had appointed himself the trip\'s official chef despite never having cooked anything more complicated than toast.\"\n\nConflict or tension: Something goes wrong, something unexpected happens, or someone does something surprising. This is the engine. \"On night one, he attempted a full Thanksgiving dinner. In July. With groceries he bought entirely at a gas station.\" The audience leans in because they want to know what happened next.\n\nResolution or punchline: The payoff. What happened, and what does it mean? \"The turkey was inedible. The pie was somehow worse. And [Groom] stood there, covered in flour, grinning, and said, \'Who wants seconds?\' That is who he is. The guy who tries, fails spectacularly, and makes everyone love him more for it.\"\n\nSetup, tension, resolution. That is the whole formula. If your story does not have all three parts, it is not ready for the speech yet.",
      },
      {
        heading: 'Show, Don\'t Tell (Yes, Like Your English Teacher Said)',
        level: 2,
        content:
          "\"[Bride] is the most generous person I know.\" That is telling. It is also boring. The audience has no reason to believe you.\n\n\"Last year, [Bride] found out that a co-worker was sleeping in her car because she could not afford first and last month\'s rent. Without telling anyone, [Bride] quietly covered the deposit. I only found out because the co-worker mentioned it months later.\" That is showing. Now the audience believes you because they have seen the evidence with their own ears.\n\nEvery quality you want to attribute to the person should be illustrated, not stated. Do not say \"he is loyal.\" Tell the story that proves it. Do not say \"she is hilarious.\" Tell the story that makes the audience laugh and realize it themselves.\n\nThis is the difference between a speech that makes people nod politely and one that makes the whole room go quiet for the right reasons.",
      },
      {
        heading: 'Cut the Fat: Editing Your Story Down',
        level: 2,
        content:
          "Your first draft is too long. It always is. You include too many details, too many characters, and too many tangents because they all feel important to you. They are not important to the audience.\n\nHere is how to trim:\n\nRemove characters who do not matter to the punchline. If the story involves five friends but only one is relevant, cut the other four. \"A group of us were on a road trip\" works fine.\n\nCut unnecessary setup. The audience does not need to know why you were in Denver, what hotel you stayed at, or what you ate before the interesting part happened. Start as close to the action as possible.\n\nEliminate the phrase \"long story short.\" If you need that phrase, the story is not short enough yet.\n\nRemove qualifiers. \"It was kind of funny\" and \"I think it was a Tuesday, or maybe Wednesday\" add nothing. Be confident and specific. Nobody is going to fact-check your wedding speech.\n\nTest the edited version by reading it out loud and timing it. If the story takes more than 90 seconds, it is still too long. No one wants a 12-minute speech, even if it is good. Cut again.",
      },
      {
        heading: 'The Transition: Connecting the Story to the Couple',
        level: 2,
        content:
          "This is where most wedding speech stories fall apart. The speaker tells a great story, then says, \"Anyway, congratulations to the happy couple!\" and sits down. The story just floats there, disconnected from the occasion.\n\nYou need a bridge. One or two sentences that connect the story to the marriage. And the bridge should feel natural, not like a stretch.\n\nBad bridge: \"And that story reminds me of love because love is also about trying new things.\" Too vague. The audience can feel you reaching.\n\nGood bridge: \"That is the thing about [Groom]. He has never been afraid to fail in front of the people he loves. And [Bride], you married someone who will always show up, give it everything, and grin even when the turkey is a disaster.\" Specific, connects the story directly to the marriage.\n\nThe bridge does not need to be profound. \"That is who [Name] is, and that is exactly why [Partner] said yes\" is a perfectly good bridge for almost any story. Close the loop and move on.",
      },
      {
        heading: 'Delivery: How to Tell the Story Out Loud',
        level: 2,
        content:
          "A story that reads well on paper can die on stage if the delivery is flat. Here is how to bring it to life.\n\nVary your pace. Slow down before the key moment. Speed up during the chaotic parts. A monotone delivery is the fastest way to lose a room that was paying attention.\n\nUse pauses. Before a punchline, pause for a beat. After a big laugh, pause and let it land. Most speakers are terrified of silence, but silence is what makes the loud parts loud.\n\nDo not narrate the emotion. Do not say \"this next part is really funny\" or \"I still get emotional thinking about this.\" Just tell the story. Let the audience feel what they feel on their own.\n\nDo not read the story word for word. Know it well enough to look up from your notes regularly. Eye contact is what makes storytelling feel personal rather than recited. If you lose your place for a second, that is fine. Take a breath, find your line, keep going. The audience is more forgiving than you think.\n\nAct out the dialogue slightly. If the groom said something in the story, deliver that line with a hint of his energy. You do not need a full impression. Please do not do a full impression. But a touch of characterization brings the story to life.",
      },
      {
        heading: 'When to Use Multiple Stories (And When to Stick to One)',
        level: 2,
        content:
          "One great story is almost always better than three okay stories. If you have a story that perfectly captures the person and connects to the marriage, tell that one and tell it well.\n\nMultiple stories work when:\n\nYou are showing different facets of the person. Story one shows their humor, story two shows their depth. This works if both stories are short, 30 to 60 seconds each, and the contrast makes a point.\n\nYou are creating a pattern. \"The first time I knew [Bride] was special... the second time... and the third time, which was last Tuesday.\" A series of brief moments can build to an emotional payoff that one longer story cannot reach.\n\nYou are contrasting then and now. A short \"before\" story and a short \"after\" story can powerfully illustrate growth.\n\nMultiple stories do not work when you are just listing memories because you cannot choose. \"And then there was the time... and another time... oh, and I cannot forget...\" That is a highlight reel, not a speech. Pick the best one and commit. If you are torn between two stories, ask yourself which one a stranger would find more interesting. That is your answer.",
      },
      {
        heading: 'The Stories Nobody Wants to Hear',
        level: 2,
        content:
          "A few story types that consistently fall flat at weddings:\n\nThe drinking story. \"We were so wasted and then [Name] did [thing].\" Every friend group has these. They are not interesting to anyone outside the group and they make both the speaker and subject look questionable.\n\nThe \"you had to be there\" story. If you catch yourself saying that phrase at any point while drafting, the story does not work. Choose a different one.\n\nThe story that is really about you. \"One time, I was going through a really hard time, and [Name] was there for me.\" The intent is to show their character, but the focus is on your life. Reframe it so they are the protagonist, not you.\n\nThe story with no point. Things happened. They were funny at the time. There is no lesson, no character reveal, no connection to the wedding. Just events in sequence. This is the most common problem and the easiest to fix: ask yourself \"what does this story show about this person?\" If you cannot answer in one sentence, pick a different story.\n\nThe epic saga. Some stories are just too long and too complicated for a wedding speech. If your story requires a cast of characters, multiple locations, and more than two minutes of setup, save it for the memoir. Simplicity wins every time in this format.",
      },
      {
        heading: 'Putting It All Together',
        level: 2,
        content:
          "Here is a complete example of a well-structured wedding speech story:\n\n\"Two years ago, [Bride] called me at 11pm on a work night. She had just had the worst day of her life. Her project fell through, her car broke down, and her apartment flooded. She was sitting in a parking lot, completely defeated.\"\n\n\"I started to give her the whole \'everything happens for a reason\' pep talk, and she cut me off. She said, \'I do not need a pep talk. I already called [Partner]. They are on their way with towels and takeout. I just called you to complain.\'\"\n\n\"And I remember thinking: she is going to be fine. Not because the day was not terrible. It was. But because she had found the person she calls when things fall apart. The person who shows up with towels and takeout without being asked twice.\"\n\n\"That is what this marriage is. It is the person who shows up. And [Partner], you have been showing up for her since day one.\"\n\nSetup, tension, resolution, bridge. Specific details. Character revealed through action. Under 90 seconds. That is how it is done.",
      },
    ],
    ctaSupportingText: 'Get a speech built around your best story',
    relatedExamples: ['best-man-speech', 'childhood-friend-speech', 'college-friend-speech'],
    relatedArticles: ['how-to-make-wedding-speech-personal', 'wedding-speech-structure'],
    tags: ['storytelling', 'technique'],
  },

  // ─── wedding-speech-jokes ───
  {
    slug: 'wedding-speech-jokes',
    title: 'Wedding Speech Jokes That Actually Work (With Examples)',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech jokes',
    metaDescription: '20 wedding speech jokes tested at real weddings. Steal them, adapt them, deliver them.',
    searchIntent: 'Looking for specific jokes',
    icon: '🎭',
    readingTime: 5,
    sections: [
      {
        heading: 'Wedding Speech Jokes That Actually Work (With Examples)',
        level: 2,
        content:
          "The graveyard of failed wedding speech jokes is enormous. For every joke that kills, there are ten that make 200 people stare at their salads in collective discomfort.\n\nBut a good joke transforms a speech. It makes the room exhale. It tells people, \"Relax, this one is going to be fun.\" The trick is not being the funniest person in the room. It is knowing which jokes actually land at weddings and which ones only seem funny at 1am when you are alone with your laptop, convinced you are a comedic genius.",
      },
      {
        heading: 'Why Most Wedding Speech Jokes Fail',
        level: 2,
        content:
          "Wedding crowds are a strange audience. You have the groom\'s college buddies sitting next to the bride\'s grandmother. The couple\'s boss is three tables from their childhood friends. It is the world\'s most uncomfortable comedy club, and there is no two-drink minimum to loosen people up.\n\nJokes fail at weddings for three main reasons. First, they are inside jokes that only four people in the room understand, which leaves 196 people confused. Second, they punch down, making someone the target of something they did not agree to. Third, they take too long to set up. Wedding attention spans are short. People are eyeing the bar. They are wondering about the dessert situation. You have maybe 15 seconds to get to the funny part before they drift.\n\nThe jokes that work are quick, relatable, and make the couple look good even while being teased.",
      },
      {
        heading: 'Self-Deprecating Openers (The Safest Bet)',
        level: 2,
        content:
          "Starting with a joke about yourself is the lowest-risk, highest-reward move in wedding speeches. It signals confidence, puts the room at ease, and costs you nothing.\n\n1. \"For those who do not know me, I am [Name]. For those who do know me... I am sorry.\"\n\n2. \"[Groom] asked me to be his best man, which really says more about his lack of options than my qualifications.\"\n\n3. \"I have been told to keep this speech short, sweet, and not embarrassing. So I have already failed at two out of three.\"\n\n4. \"I spent weeks writing this speech. Then I lost it. So what you are about to hear is version two, which is either much better or much worse. We will find out together.\"\n\n5. \"I asked [Groom] what he wanted me to say in this speech. He said, \'Just make me look good.\' So this is a work of fiction.\"\n\nIf your opener does not get the laugh you expected, do not stop or comment on it. Just keep going. The room will warm up. First jokes are the hardest to land because the audience is still settling in.",
      },
      {
        heading: 'Jokes About the Couple That Actually Land',
        level: 2,
        content:
          "The best couple jokes highlight a real, recognizable dynamic. Everyone who knows them should be nodding.\n\n6. \"[Bride] and [Groom] are a perfect match. She is organized, ambitious, and detail-oriented. He... has a great personality.\"\n\n7. \"I knew [Groom] was serious about [Bride] when he started showering before dates. Previously, that was a special-occasion thing.\"\n\n8. \"They say opposites attract, and that is definitely true here. [Bride] is punctual. [Groom] thinks \'on time\' means within the same hour.\"\n\n9. \"When [Groom] told me he was going to propose, I asked if he was nervous. He said, \'Why would I be nervous? She planned the whole thing.\'\"\n\n10. \"[Bride] told me she fell in love with [Groom] because he makes her laugh every day. [Groom] told me he fell in love with [Bride] because she laughs at him every day. Same energy.\"\n\nNotice the pattern. The groom is the gentle target. The bride comes out looking smart and in charge. This is intentional. Roasting the bride too hard in a best man speech gets uncomfortable fast. If you are the maid of honor, flip the dynamic and lovingly tease the bride while complimenting the groom.",
      },
      {
        heading: 'Marriage Jokes (The Classics, Updated)',
        level: 2,
        content:
          "Marriage jokes are the bread and butter of wedding toasts. The key is avoiding anything that sounds like a 1990s sitcom punchline about \"the old ball and chain.\"\n\n11. \"Marriage is basically a long conversation. On the bright side, you have found someone who will let you talk during movies.\"\n\n12. \"The secret to a happy marriage? Two words: \'Yes, dear.\' Actually, that works for this speech too.\"\n\n13. \"They say marriage is about compromise. For example, [Groom] wanted a destination wedding. [Bride] wanted this venue. And here we are... at this venue.\"\n\n14. \"I googled \'advice for newlyweds\' and the top result was a divorce lawyer\'s website. So instead, I will just say: be kind, be patient, and never go to bed angry. Stay up and argue like adults.\"\n\n15. \"Someone told me that in a good marriage, you fall in love many times, always with the same person. In [Groom]\'s case, it helps that [Bride] changes her hair color every six months.\"\n\nUse these sparingly. One classic marriage quip is charming. Three in a row starts to feel like you are reading off a joke website. Which you might be. But the audience does not need to know that.",
      },
      {
        heading: 'Callback Jokes (For the Advanced Speaker)',
        level: 2,
        content:
          "A callback is when you reference something from earlier in your speech for a second laugh later. It makes you look like you know what you are doing, and it is easier than it sounds.\n\n16. Early in your speech, mention a specific quirk: \"[Groom] is, to put it gently, the worst cook I have ever met. The man once burned cereal.\" Then, at the end: \"So please raise your glasses to the happy couple. May your love be strong, your days be long, and your smoke detectors fully charged.\"\n\n17. If someone spoke before you and got a big laugh, reference it: \"As [Father of the Bride] mentioned, [Groom] was a bit of a project. But I would say the renovations are almost complete.\"\n\nCallbacks reward the audience for paying attention. They create a feeling of shared experience, which is exactly what a wedding is supposed to be about. They also give you a safety net: if your other jokes are not landing, a good callback almost always gets a reaction because the audience already did the work of laughing at the original line.",
      },
      {
        heading: 'Situational Jokes (Use What the Day Gives You)',
        level: 2,
        content:
          "Some of the biggest laughs come from acknowledging what is actually happening in the room. These cannot be fully pre-written, but you can prepare frameworks and fill them in on the day.\n\n18. If the previous speech was long: \"I will keep this shorter than [Previous Speaker]\'s speech. Not that it was not great. But I could see the bartenders aging.\"\n\n19. If the weather was bad: \"They say rain on your wedding day is good luck. By that math, today\'s couple is basically set for eternity.\"\n\n20. If the food was amazing: \"Before I toast the couple, can we also toast the chef? Because I was considering proposing to that risotto.\"\n\nThese in-the-moment jokes feel spontaneous even when they are semi-planned. Keep a mental list of \"if this happens, I will say that\" scenarios. Even if you do not use them, having them ready gives you confidence that you have options if the room needs a pick-me-up.",
      },
      {
        heading: 'Jokes to Absolutely Avoid',
        level: 2,
        content:
          "Let us be specific about what does not work.\n\nEx-partner jokes. Never. Not even vaguely. Not even if the groom says it is fine. It is not fine.\n\nAnything about the wedding night. The \"wink wink\" bedroom humor that certain uncles love? Leave it to the uncles. Your speech should be better than that.\n\nJokes that require explaining. If you have to say \"get it?\" after the punchline, cut it.\n\nGeneric internet jokes with no personal connection. \"Marriage is a workshop where the husband works and the wife shops\" has been used at roughly four million weddings. Everyone has heard it. Everyone is tired of it.\n\nJokes at a guest\'s expense. Making fun of someone in the audience who did not agree to be part of the show is a guaranteed way to create an awkward moment that follows you to the bar afterward.",
      },
      {
        heading: 'How to Deliver a Wedding Speech Joke',
        level: 2,
        content:
          "Delivery matters more than the joke itself. Here is how to not botch it.\n\nPause before the punchline. Just a beat. Let the setup land, then deliver. The pause tells the audience something funny is coming and they will be ready.\n\nDo not laugh at your own joke before you finish it. This is the number one amateur mistake. If you are giggling through the punchline, nobody can hear it and the timing is gone.\n\nCommit. If you are going to tell a joke, own it. Half-hearted delivery with a mumbled \"haha, anyway\" afterward kills everything.\n\nHave a plan for when it does not land. Because at least one joke probably will not. The recovery is simple: smile, take a breath, and move on to your next point. Do not say \"tough crowd.\" Do not try to explain why it was funny. Just keep going. The audience will forget a flat joke in ten seconds, but they will remember you spiraling about it for two minutes.",
      },
      {
        heading: 'Putting It All Together',
        level: 2,
        content:
          "A great wedding speech does not need ten jokes. It needs two or three that are well-placed and well-delivered. Open with a self-deprecating one to warm up the room. Drop one or two couple-specific jokes in the middle to keep energy up. Then close sincerely.\n\nThe formula: funny, funny, heartfelt. The laughs earn you the right to be emotional at the end without it feeling forced. And when you raise that glass for the final toast, the whole room will be with you.\n\nNow go practice in front of a mirror. Yes, really. Time yourself while you are at it. If you are running past five minutes, start cutting. Your reflection will not judge you, but the wedding guests will check their watches.",
      },
    ],
    ctaSupportingText: 'Get humor baked into your speech',
    relatedExamples: ['funny-wedding-speech', 'best-man-speech', 'lighthearted-speech'],
    relatedArticles: ['how-to-be-funny-wedding-speech', 'wedding-speech-one-liners'],
    tags: ['jokes', 'humor', 'examples'],
  },

  // ─── how-to-make-wedding-speech-personal ───
  {
    slug: 'how-to-make-wedding-speech-personal',
    title: 'How to Make a Wedding Speech Personal (Not Generic)',
    category: 'Speech Tips',
    targetKeyword: 'personal wedding speech',
    metaDescription: "If your speech could be about any couple, it's not personal enough.",
    searchIntent: 'Draft feels generic',
    icon: '💝',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Make a Wedding Speech Personal (Not Generic)',
        level: 2,
        content:
          "Here is a brutal test for your wedding speech: could you swap in any other couple\'s names and have it still make sense? If yes, your speech is generic. And generic speeches are the reason people check their phones during toasts.\n\nA personal speech does not require baring your soul for fifteen minutes. It means every line clearly belongs to this couple, this day, this relationship. It means the audience thinks, \"Yes, that is exactly who they are.\" A Hallmark card versus a handwritten letter. The difference is obvious and the second one always wins.",
      },
      {
        heading: 'The Generic Speech Trap (And Why Smart People Fall Into It)',
        level: 2,
        content:
          "You sit down to write. You search for wedding speech examples online. You read fifteen of them. They all say things like \"from the moment they met, I knew it was special\" and \"they complete each other\" and \"here is to a lifetime of love.\"\n\nSo you write something similar. It sounds polished. It sounds like a wedding speech. And that is exactly the problem. It sounds like a wedding speech instead of sounding like you, talking about people you actually know.\n\nGeneric speeches happen because people are scared. Scared of being too honest, too specific, too emotional, too funny. So they retreat to safe, bland territory where nothing offends and nothing resonates either.\n\nThe fix is specificity. \"She is the kindest person I know\" is generic. \"She once drove 40 minutes in a snowstorm to bring me soup when I had the flu, and she did not even like me that much yet\" is a speech people will bring up at brunch the next day. Specificity is what makes people feel things. Generality is what makes people reach for their phones.",
      },
      {
        heading: 'Start With Stories, Not Statements',
        level: 2,
        content:
          "The single biggest upgrade you can make to any wedding speech is replacing statements with stories.\n\nStatement: \"Jake is the most loyal friend I have ever had.\"\nStory: \"When I got laid off in 2019, Jake showed up at my apartment with a whiteboard, three markers, and a six-pack. He said, \'We are rewriting your resume tonight.\' We did not finish the resume, but we did finish the beer, and honestly, that helped more.\"\n\nThe story proves the statement. It gives the audience something to picture instead of a platitude to nod at.\n\nEvery quality you want to highlight about the couple should be anchored to a specific moment. Not \"they are so great together\" but \"the time they spent three hours lost in Rome and came back laughing instead of fighting, and I thought, okay, these two are going to make it.\" If you catch yourself writing a sentence that starts with \"[Name] is the kind of person who...\" stop and ask: what is the story that proves it?",
      },
      {
        heading: 'The Five Senses Exercise',
        level: 2,
        content:
          "When you are trying to unlock personal details, go through your senses. It sounds odd, but it works.\n\nWhat do you see when you think of them? Not their faces. The specific things. The way he always wears those beat-up sneakers. The way she lights up a room before she even says anything. The way they look at each other when they think nobody is watching.\n\nWhat do you hear? Her laugh that you can pick out of any crowd. The way he says her name. The playlist they always put on at dinner parties.\n\nWhat about a smell, a taste, a feeling? The terrible cologne he wore in college that he was weirdly proud of. The cake she stress-bakes before every big decision. The feeling of sitting at their kitchen table at midnight, talking about everything and nothing.\n\nThese details are gold. They are impossible to fake, impossible to make generic, and they make people in the audience think, \"This person really knows them.\" Even one or two sensory details can elevate a speech from forgettable to memorable.",
      },
      {
        heading: 'Name the Moment You Knew',
        level: 2,
        content:
          "Every great personal speech has a \"moment I knew\" beat. This is when you tell the audience exactly when you realized this relationship was real.\n\nMaybe it was the first time you saw them together and noticed your friend was different. Calmer. Happier. More themselves.\n\nMaybe it was a phone call where they talked about their partner for twenty straight minutes without realizing it.\n\nMaybe it was a crisis where their partner showed up in a way that surprised you.\n\nThe moment does not have to be dramatic. In fact, the smaller and more ordinary, the more powerful. \"I knew it was real when I called Sarah on a Tuesday night and she said she could not talk because they were doing a puzzle together. Sarah, who has never finished a puzzle in her life. That is when I knew Mike had changed the game.\"\n\nThis beat works because it is your genuine observation. Nobody else in the room has this exact perspective. And if you get a little choked up telling it, that is fine. But if you lose your train of thought mid-sentence, just pause, take a breath, and pick up where you were. The audience will wait for you.",
      },
      {
        heading: 'Use Their Language, Not Yours',
        level: 2,
        content:
          "If the couple has a phrase they always say, a nickname they use, or a running joke between them, work it in. This is the fastest way to make a speech feel personal.\n\nDoes the groom call the bride \"trouble\"? Use it. Does the couple have a catchphrase from a show they binged together? Reference it. Do they have a ridiculous ongoing argument like pineapple on pizza, the correct way to load a dishwasher, or whether Die Hard is a Christmas movie?\n\nThese small nods to the couple\'s private world make the speech feel like a genuine look at who they really are. The couple will be grinning, the audience will be charmed, and nobody will be checking their phone.\n\nOne caveat: inside jokes that only you and one other person understand do not count here. The reference should be something a decent portion of the room recognizes, or something you explain quickly with enough context for it to land. If the joke requires a five-minute preamble, it is not worth the detour.",
      },
      {
        heading: 'The Before and After',
        level: 2,
        content:
          "One of the most powerful structures for a personal speech is the before-and-after comparison. Who was this person before they met their partner, and who are they now?\n\nThis works for any speaker. Parents can talk about watching their child grow into someone ready for this kind of commitment. Best friends can talk about the transformation. Siblings can talk about seeing a new side of their brother or sister.\n\n\"Before Emma, my brother\'s idea of a home-cooked meal was microwave popcorn. Now he makes risotto. Actual risotto. From scratch. With stock he made himself. Emma, I do not know what kind of witchcraft you are practicing, but it is working and we are all grateful.\"\n\nThe before-and-after shows growth without being preachy. It credits the partner for bringing out the best in someone, which is basically the highest compliment you can pay at a wedding. Just make sure the \"before\" is lovably flawed, not genuinely embarrassing. You are illustrating growth, not exposing someone.",
      },
      {
        heading: 'Things to Cut (The Generic Red Flags)',
        level: 2,
        content:
          "Go through your speech and cut anything that sounds like it could appear on a greeting card. Specifically:\n\n\"They were meant to be.\" Says nothing. Replace with the actual evidence that made you think so.\n\n\"I have never seen him so happy.\" Better, but still vague. When specifically? Doing what? What did that happiness look like from the outside?\n\n\"She is like a sister to me.\" What does that actually mean in practice? What have you been through together that proves it?\n\n\"They bring out the best in each other.\" The laziest line in wedding speeches. What does \"the best\" look like? Show it with a specific example.\n\nAny quote from the internet unless it has genuine personal significance to your relationship with the couple. If you Googled it fifteen minutes ago, the audience can tell.\n\nEvery time you cut a generic line, replace it with a specific detail. Your speech will get shorter and better at the same time. That is not a trade-off. That is just editing.",
      },
      {
        heading: 'What If You Genuinely Don\'t Have Deep Stories?',
        level: 2,
        content:
          "Maybe you are the best man but you have drifted apart a bit. Maybe you are a parent who does not know the couple\'s day-to-day life. Maybe you were asked to speak and you are not entirely sure why.\n\nFirst: do your homework. Call three people who are close to the couple and ask, \"What is a moment that really captures who they are together?\" You will get material you never would have thought of on your own.\n\nSecond: be honest about your vantage point. \"I do not get to see these two as often as I would like, but every time I do...\" is a perfectly fine setup. It is authentic, and authenticity is the whole point of a personal speech.\n\nThird: lean into observation. You do not need years of shared history to notice how someone\'s face changes when they talk about the person they love. You just need to pay attention. Sometimes the best personal detail comes from watching rather than remembering.\n\nA short, genuinely personal speech beats a long, generically polished one every time. If you only have two minutes of real material, give two great minutes and sit down.",
      },
      {
        heading: 'The Final Test',
        level: 2,
        content:
          "Before you finalize your speech, read it out loud. Every time you hear a line that could apply to any couple on earth, highlight it. Then rewrite those lines with something only this couple would recognize.\n\nYour goal: a speech where, if a stranger read it, they would feel like they already knew the couple. Where the bride and groom look at each other during your toast and think, \"Yeah, that is us.\"\n\nThat is what personal means. Not perfect. Not poetic. Just real. And if you stumble over a word or skip a paragraph by accident, nobody will care as long as what you did say was clearly, specifically about them.",
      },
    ],
    ctaSupportingText: 'Turn your details into a personal speech',
    relatedExamples: ['emotional-wedding-speech', 'sentimental-speech', 'close-friend-speech'],
    relatedArticles: ['how-to-tell-story-wedding-speech', 'wedding-speech-dont-know-well'],
    tags: ['personal', 'authenticity'],
  },

  // ─── mention-bride-best-man-speech ───
  {
    slug: 'mention-bride-best-man-speech',
    title: 'How to Mention the Bride in a Best Man Speech (Without Being Weird)',
    category: 'Speech Tips',
    targetKeyword: 'best man speech mention bride',
    metaDescription: 'Every best man speech needs to mention the bride. Here\'s how to do it naturally.',
    searchIntent: 'Best man, unsure how to include bride',
    icon: '👰',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Mention the Bride in a Best Man Speech (Without Being Weird)',
        level: 2,
        content:
          "You are the groom\'s best man. You are closer to the groom. Your instinct is to spend 95% of your speech talking about your buddy and then tack on a \"and welcome to the family, [Bride]!\" at the end like a P.S. on a letter.\n\nThat is a mistake. The bride is literally half the reason everyone is in this room. Ignoring her, or treating her like an afterthought, is one of the fastest ways to undercut an otherwise solid speech. Her side of the room will notice. Her family will notice. She will notice.\n\nBut the tricky part is real. Talk about her too much and it gets strange. Go too heavy on the compliments and it sounds like you are hitting on her at her own wedding. Stay too surface-level and everyone can tell you are just checking a box. There is a sweet spot, and it is not as hard to find as you might think.",
      },
      {
        heading: 'Why This Matters More Than You Think',
        level: 2,
        content:
          "The bride, her family, and her friends are listening to your speech closely. They want to hear that you see what makes her special. They want to know the groom\'s best friend approves. It matters more than most best men realize.\n\nI have seen best man speeches that spent ten minutes roasting the groom with zero mention of the bride until the final sentence. The groom\'s friends laughed. The bride\'s side of the room sat in polite silence, wondering if they were invisible. That is a room split in half, and you do not want to be the one who split it.\n\nYou do not need to divide your speech 50/50. But the bride should be woven into the fabric of what you are saying, not stapled on as an afterthought. Even two or three well-placed mentions change the entire feel of the speech.",
      },
      {
        heading: 'What to Actually Say About Her',
        level: 3,
        content:
          "Focus on three things: what she means to your friend, what she has brought into his life, and what you personally appreciate about her. That covers it. You do not need to give her biography.\n\n\"Since [Bride] came into the picture, [Groom] has become someone who actually returns phone calls. He irons shirts. He has opinions about throw pillows. I do not know how she did it, but she took a man who once wore the same jeans for two weeks straight and turned him into someone I am genuinely proud of.\"\n\nSee how that mentions the bride through the lens of the groom? You are not pretending to know her innermost thoughts. You are speaking from your actual experience of watching your friend change for the better. That is authentic and it stays in your lane as his best friend.\n\nIf you blank on what to say about her during the speech, just go to: \"I have never seen [Groom] this happy.\" Simple, true, hard to mess up.",
      },
      {
        heading: 'How to Talk About Her If You Know Her Well',
        level: 2,
        content:
          "If you are genuinely friends with the bride, you have more room. Share a story that includes her directly.\n\n\"I remember the first time [Groom] brought [Bride] to our annual camping trip. We all expected her to last maybe one night before demanding a hotel. Instead, she caught more fish than any of us, roasted the best marshmallow I have ever seen, and beat [Groom] at poker so badly he still will not talk about it. That is when we all knew she was a keeper.\"\n\nThis kind of story works because it shows the bride being herself, not being defined by her relationship to the groom. She is a full person in this anecdote. That respect comes through clearly, and her side of the room will appreciate it.",
      },
      {
        heading: 'How to Talk About Her If You Barely Know Her',
        level: 2,
        content:
          "This is where most best men actually find themselves, and it is completely fine. You do not need to fake a deep friendship. Honesty is more charming than pretending.\n\n\"I will be straight with you all. I do not know [Bride] as well as I would like to yet. But here is what I do know: I have never seen [Groom] this happy. I have never heard him talk about someone the way he talks about her. And that tells me everything I need to know.\"\n\nThat is genuine, warm, and does not overreach. You can also reference something small you have observed firsthand.\n\n\"The first time I met [Bride], she laughed at [Groom]\'s worst joke. The one about the penguin. You all know the one. And I thought, this woman either has terrible taste in humor or she is madly in love with him. Either way, she is perfect for him.\"\n\nWork with what you have. That is always more charming than pretending to have more. And if you trip over her name because you are nervous, just laugh it off. It happens more often than you think.",
      },
      {
        heading: 'The Compliment Sweet Spot',
        level: 2,
        content:
          "There is a line between \"warm and welcoming\" and \"dude, are you in love with the bride?\" Here is how to stay on the right side.\n\nGood: Complimenting her character, her effect on the groom, her energy, her humor, her strength.\nAwkward: Commenting extensively on her appearance, calling her \"the most beautiful woman in the room,\" or repeating some version of \"you are a lucky man\" four separate times.\n\nOne mention of how great she looks today is normal. Expected, even. Dwelling on it or getting specific about the dress? Now people are shifting in their seats.\n\nThe safest approach: frame your compliments about the bride through the groom\'s eyes. \"I have never seen [Groom] look at anything the way he looked at [Bride] when she walked down that aisle. And I have seen him look at a steak.\" You are complimenting her by showing his reaction, which keeps it squarely in your territory as his best friend.",
      },
      {
        heading: 'Where in Your Speech to Mention Her',
        level: 2,
        content:
          "Do not save the bride for the last thirty seconds. Ideally, she should come up naturally in the middle of your speech and again near the end.\n\nA solid structure:\n\nOpener about yourself or the groom (one to two minutes). A story or two about the groom, possibly including when you first met the bride or first heard about her (two to three minutes). A section specifically about what she has brought to his life and what you appreciate about her (one to two minutes). A sincere close toasting both of them together (30 seconds).\n\nThis way, the bride is not a footnote. She is a key part of the narrative. And the transition from roasting the groom to explaining why this woman is the best thing that happened to him creates a natural emotional arc that works every time.\n\nIf you realize during the speech that you have been talking for three minutes without mentioning her, find a natural bridge. It does not have to be graceful. \"But enough about [Groom]\" works perfectly well.",
      },
      {
        heading: 'Things to Never Say About the Bride',
        level: 2,
        content:
          "Let us be specific.\n\nNever compare her to the groom\'s exes. Not even favorably. \"She is so much better than the last one\" still brings up the last one, and absolutely nobody in the room wants that.\n\nNever joke about her \"controlling\" the groom. The ball-and-chain humor is dead. Let it stay buried.\n\nNever comment on her family\'s money, her career in a backhanded way, or anything that could be read as a dig dressed up as a compliment.\n\nNever reference private information she would not want shared publicly. If you are unsure, ask the groom. Better yet, ask her directly.\n\nAnd never say anything sexual or suggestive about the bride. Not even a mild innuendo. Not even if you think it is clever. It is her wedding day. Read the room.",
      },
      {
        heading: 'A Template You Can Steal',
        level: 2,
        content:
          "If you are stuck, here is a plug-and-play paragraph about the bride that you can customize with real details:\n\n\"Now I have to talk about [Bride], and honestly, this is the easy part. Because [one genuine quality you have observed]. I remember [brief specific moment or observation]. And when I see the way [Groom] is around her... [what you have noticed about your friend when he is with her]. [Bride], thank you for making my best friend the happiest I have ever seen him. And thank you for [one slightly funny, slightly sincere thing].\"\n\nFill in those brackets with real details and you will have a bride section that is genuine, appropriate, and memorable. No awkwardness required. And if you cannot think of what to put in one of the brackets, call the groom and ask him to tell you his favorite thing about her. He will not shut up, and you will have more material than you need.",
      },
    ],
    ctaSupportingText: 'Include everyone, effortlessly',
    relatedExamples: ['best-man-speech', 'balanced-wedding-speech'],
    relatedArticles: ['best-man-speech-guide', 'wedding-speech-dos-and-donts'],
    tags: ['best man', 'bride', 'technique'],
  },

  // ─── wedding-speech-one-liners ───
  {
    slug: 'wedding-speech-one-liners',
    title: 'Wedding Speech One-Liners: Short, Punchy, and Perfect',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech one-liners',
    metaDescription: '25 wedding speech one-liners you can drop into any toast.',
    searchIntent: 'Looking for quick wins',
    icon: '⚡',
    readingTime: 5,
    sections: [
      {
        heading: 'Wedding Speech One-Liners: Short, Punchy, and Perfect',
        level: 2,
        content:
          "Sometimes you do not need a whole bit. You just need one clean line that lands, gets a laugh or a smile, and lets you move on. That is the beauty of a good one-liner. It does the work of an entire paragraph in a single sentence.\n\nThese are designed to slot into any part of a wedding speech. Openers, transitions, closing zingers. Mix and match. Steal shamelessly. That is what they are here for. And if one does not land when you deliver it, just keep moving. One-liners are disposable by design.",
      },
      {
        heading: 'Openers That Set the Tone',
        level: 2,
        content:
          "1. \"I have been practicing this speech for weeks, and my dog has heard it so many times he leaves the room when I start talking.\"\n\n2. \"I was told to be funny, be brief, and not mention the stag do. So this will be a very short speech.\"\n\n3. \"I promised myself I would not cry today, but then I saw the bar prices.\"\n\n4. \"For anyone worried this speech will go long... so am I.\"\n\n5. \"I asked [Groom] what he wanted me to say in this speech. He said, \'Just make me look good.\' So this is a work of fiction.\"\n\nIf your opener gets a lukewarm response, do not panic. First lines are the hardest to land because the room is still settling. Just keep going with the same energy and the audience will come to you.",
      },
      {
        heading: 'One-Liners About the Groom',
        level: 2,
        content:
          "6. \"[Groom] is the kind of guy who would give you the shirt off his back. Mainly because he has got twelve of the same shirt.\"\n\n7. \"I have known [Groom] for [X] years, and I can honestly say he has not changed a bit. Which is either heartwarming or concerning.\"\n\n8. \"[Groom] has many great qualities. And I am sure by the end of this marriage, [Bride] will have discovered at least one of them.\"\n\n9. \"They say behind every great man is a woman rolling her eyes. [Bride], welcome to a lifetime of cardio.\"\n\n10. \"[Groom] told me he is the luckiest man alive today. I agree. It is incredible she said yes.\"\n\nCustomize these with real details. \"He has got twelve of the same shirt\" is fine. \"He has got twelve of the same grey crew-neck\" is better because it is specific and the audience can picture it.",
      },
      {
        heading: 'One-Liners About the Bride',
        level: 2,
        content:
          "11. \"[Bride], you look absolutely stunning today. [Groom], you also look like you tried.\"\n\n12. \"[Bride] is smart, beautiful, and kind. [Groom], I have no idea how you pulled this off.\"\n\n13. \"When [Bride] first started dating [Groom], her friends asked what she saw in him. She is still working on that answer.\"\n\nKeep bride-targeted one-liners lighter and more complimentary. The humor should make her look great while gently ribbing the groom. That dynamic works with every audience because the bride comes out on top and nobody gets uncomfortable.",
      },
      {
        heading: 'One-Liners About Marriage',
        level: 2,
        content:
          "14. \"Marriage is a relationship in which one person is always right, and the other person is the husband.\"\n\n15. \"The key to a successful marriage is simple: just do everything she says.\"\n\n16. \"Marriage is like a deck of cards. All you need in the beginning is two hearts and a diamond. By the end, you are looking for a club and a spade.\"\n\n17. \"Love is blind. Marriage is the eye-opener.\"\n\n18. \"A good marriage is like a good wine. It gets better with age and makes you want to stay in on a Friday night.\"\n\nThese are well-worn, so use them sparingly and with confidence. One classic marriage quip is charming. Three in a row and it starts to sound like you are scrolling through a list on your phone, which to be fair, you might be. But the audience does not need to see the seams.",
      },
      {
        heading: 'Transition One-Liners',
        level: 2,
        content:
          "These are the unsung heroes of a wedding speech. Use them to pivot between sections without losing momentum.\n\n19. \"But in all seriousness...\" The classic gear shift from funny to sincere. Simple. Never fails.\n\n20. \"Now, I could stand here all night telling stories. But the bar is open and I have priorities.\"\n\n21. \"I could go on, but [Groom]\'s lawyer has advised me not to.\"\n\n22. \"Before I get emotional, and I will get emotional, let me just say...\"\n\nTransition lines are underrated because they signal that you are in control of the speech. You know where you are going. That confidence is infectious and it buys you goodwill for whatever comes next, whether that is a joke or a sentimental moment.",
      },
      {
        heading: 'Closing One-Liners',
        level: 2,
        content:
          "23. \"Please raise your glasses. To love, to laughter, and to making it home in one piece tonight.\"\n\n24. \"Here is to the bride and groom. May your love be modern enough to survive the times, and old-fashioned enough to last forever.\"\n\n25. \"To [Bride] and [Groom]: may your wifi be strong, your coffee be hot, and your arguments be short. Cheers.\"\n\nA strong closing one-liner gives people something to smile about as they clink glasses. Do not overthink it. Warm, brief, and quotable. That is all it needs to be. And if you forget your planned closing line, just say \"To [Bride] and [Groom]\" and raise your glass. Nobody needs to know you had something fancier prepared.",
      },
      {
        heading: 'How to Actually Use These',
        level: 2,
        content:
          "A few practical tips for working one-liners into your speech.\n\nDo not stack them. One-liner after one-liner after one-liner turns your toast into a stand-up set and the audience starts bracing for the next punchline instead of listening. Mix them between genuine, heartfelt content.\n\nCustomize them. Swap in real names, real details, real quirks. \"He would give you the shirt off his back\" is fine. \"He would give you the shirt off his back, specifically that terrible Hawaiian one from 2018\" is better.\n\nPractice the pause. One-liners live and die on timing. Say the line. Pause. Let the laugh come. Do not rush to the next sentence.\n\nAnd if one does not land, just keep going. The audience will not remember the joke that fell flat. They will remember whether you seemed confident and comfortable up there. A smooth recovery after a missed joke is actually more impressive than a joke that lands perfectly, because it shows you are in control even when things go sideways.",
      },
    ],
    ctaSupportingText: 'Get lines that land every time',
    relatedExamples: ['funny-wedding-speech', 'short-sweet-speech', 'roast-wedding-speech'],
    relatedArticles: ['wedding-speech-jokes', 'best-wedding-speech-opening-lines'],
    tags: ['one-liners', 'humor'],
  },

  // ─── funny-best-man-speech ───
  {
    slug: 'funny-best-man-speech',
    title: 'How to Write a Funny Best Man Speech (Step by Step)',
    category: 'Speech Tips',
    targetKeyword: 'funny best man speech',
    metaDescription: "A step-by-step guide to writing a best man speech that's genuinely funny.",
    searchIntent: 'Best man, wants laughs',
    icon: '😂',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Write a Funny Best Man Speech (Step by Step)',
        level: 2,
        content:
          "You have been given the mic, the mandate, and the expectation. People want you to be funny. The groom wants stories. The guests want to laugh. The bride wants you to be funny without crossing any lines. That is a lot of people wanting a lot of different things from one speech.\n\nBut here is what actually matters: you do not need to be a comedian. You need a structure, some real stories, and enough sense to know when a joke is going to land and when it is going to make the room go quiet. Let us build this thing step by step.",
      },
      {
        heading: 'Step 1: Accept That Funny Comes From Truth',
        level: 2,
        content:
          "The funniest moments in best man speeches are never the pre-written jokes you found online. They are the real stories that make people think, \"That is so him.\"\n\nYour job is not stand-up comedy. It is storytelling that happens to be funny. And real stories are funnier than anything from the internet because the audience already knows the main character. When you say, \"Dave once tried to impress a date by cooking a three-course meal and set off the fire alarm during the appetizer,\" that works because it is true. If the audience knows Dave, it is even funnier because they can picture it perfectly.\n\nSo before you write a single word, spend some time remembering. Flip through old photos. Text mutual friends. Think about the dumbest, most endearing, most perfectly \"him\" moments you have shared. That is your raw material. Everything else is just structure.",
      },
      {
        heading: 'Step 2: Pick 2-3 Stories (Not 7)',
        level: 2,
        content:
          "The biggest mistake in funny best man speeches is trying to cram in every good story. More stories does not mean more funny. It means less impact per story and a speech that runs long enough for people to start checking the time.\n\nPick two or three stories maximum. Choose them based on these criteria:\n\nIs it actually funny to people who were not there? Some stories are \"you had to be there\" funny. Those do not work in speeches. If your story needs a full backstory, it is probably not the one.\n\nDoes it make the groom look lovably ridiculous, not genuinely bad? There is a difference between \"he is a lovable idiot\" and \"he once did something actually terrible.\" You want the first one.\n\nCan you tell it in under two minutes? If a story needs five minutes of setup, it is not a speech story. It is a memoir.\n\nDoes at least one story naturally lead into something about the bride or the relationship? You need that bridge from \"funny groom stories\" to \"sincere toast about the couple.\" Without it, the emotional ending feels bolted on.",
      },
      {
        heading: 'Step 3: Structure Your Speech Like a Comedy Set',
        level: 2,
        content:
          "Professional comedians do not tell random jokes. They build a set with an arc. Your speech needs the same approach.\n\nThe Warm-Up (30 seconds). A quick, self-deprecating opener. Get the first laugh early and keep it small. \"For those who do not know me, I am [Name], and I will be your entertainment while the bar restocks.\"\n\nThe Stories (three to four minutes). Your two or three funniest stories about the groom, told with setup, detail, and punchlines. Arrange them from mildly funny to funniest. Build momentum.\n\nThe Turn (one minute). Pivot from funny to genuine. \"But jokes aside...\" or \"For all the grief I give him...\" This transition tells the audience the comedy section is done and something real is coming.\n\nThe Heart (one to two minutes). Sincere words about the couple, what the bride means to the groom, your genuine happiness for them.\n\nThe Toast (15 seconds). Quick, warm, done.\n\nTotal time: five to seven minutes. That is the sweet spot. Go past seven and you are testing the room. Go past ten and you are losing it.",
      },
      {
        heading: 'Step 4: Write the Punchlines First',
        level: 2,
        content:
          "This is a trick from comedy writing. You know what the funny part of the story is. Write that first. Then build the setup around it.\n\nSay the funny moment is: your friend got so nervous on his first date with the bride that he walked into a glass door at the restaurant.\n\nThe punchline: \"He walked face-first into the glass door.\"\n\nNow build the setup: \"So Jake finally works up the courage to ask her out. He picks the nicest restaurant he can afford. He puts on a button-down shirt for the first time in months. He gets there early, looking like a man with a plan. She is already inside, waving at him through the window. He waves back, smiles, walks right up to the door, and...\" Pause. \"...walks face-first into the glass.\"\n\nEach detail in the setup (nice restaurant, button-down, arriving early) builds the image of someone trying to be smooth, which makes the failure funnier. The pause before the punchline is everything. Let the audience feel it coming. If you rush past it, you kill the laugh.",
      },
      {
        heading: 'Step 5: Read the Room (Before You\'re in It)',
        level: 2,
        content:
          "Funny is relative. What kills at a pub with your mates might die at a wedding with 200 guests ranging from age 8 to 80.\n\nBefore you finalize your speech, think about the audience. Is the couple\'s family conservative or laid-back? Will there be kids? How many drinks deep will people be by the time speeches start?\n\nGeneral rule: if a joke requires the audience to be drunk to land, it is not a good wedding joke. Write for the sober version of the room. If people happen to be a few drinks in, that is a bonus, not a requirement.\n\nAlso, run your speech past one person who will actually tell you the truth. Not your best friend who laughs at everything you say. Someone who will look you in the eye and say, \"Yeah, that bit about Vegas... cut that.\" You need an honest editor more than you need a yes-man. If you do not have someone like that, read the speech to your most judgmental family member. They will not hold back.",
      },
      {
        heading: 'Step 6: Master the Delivery',
        level: 2,
        content:
          "Half of being funny is delivery. A mediocre joke told with confidence gets bigger laughs than a great joke mumbled into a champagne glass.\n\nSpeak slowly. Slower than you think you should. Nervousness makes everyone speed up, so if you feel like you are going too slow, you are probably going the right speed.\n\nMake eye contact. Do not read your speech word for word from a phone. Glancing at notes is fine. Staring at a screen for five minutes is a TED talk, not a toast.\n\nWait for the laughs. This is hard because your instinct will be to fill any silence. But when a joke lands, pause. Let people laugh. Let it breathe. Then continue. That pause makes you look like you know what you are doing even if your hands are shaking under the table.\n\nAnd when something does not get a laugh, because at least one thing will not, just move on. No explanation. No nervous \"anyway.\" Same energy, next sentence. The audience follows your lead. If you act like everything is fine, they believe you.",
      },
      {
        heading: 'What Makes Something NOT Funny at a Wedding',
        level: 2,
        content:
          "Some clear lines.\n\nStories about exes. Does not matter how funny it was at the time. Bringing up past relationships on his wedding day is a guaranteed mood killer.\n\nStag do stories that involve illegal activity, cheating, or anything the bride does not know about. If the bride would learn something new and upsetting from your speech, that is not a joke. That is a betrayal wrapped in a toast.\n\nAnything that makes the bride the butt of the joke. Light teasing is fine. Actual roasting of the bride is not your job and will not go well. Her family is right there.\n\nJokes that only work because they are shocking or crude. Shock humor relies on a self-selecting audience. A wedding is not that.\n\nAnything that makes the groom seem like a genuinely bad person. \"Remember when you ghosted that girl for three months?\" is not the charming anecdote you think it is. It is the thing the bride\'s mother will bring up at Christmas.",
      },
      {
        heading: 'Funny Best Man Speech Example Structure',
        level: 2,
        content:
          "Here is a skeleton you can build on:\n\n\"Good evening everyone. I am [Name], and I have had the questionable honor of being [Groom]\'s best man. [Self-deprecating opener].\n\nNow, I have known [Groom] for [X] years, which means I have had a front-row seat to some truly spectacular decisions. [Story 1, the warm-up laugh].\n\nBut that was not even the best one. [Story 2, the bigger laugh].\n\nOf course, things changed when [Bride] came along. [Story about meeting the bride or observing the relationship, with humor built in].\n\nBut in all seriousness... [genuine transition]. [Sincere observations about the couple, what the bride means to the groom, a moment you witnessed that moved you].\n\nSo please raise your glasses. To [Bride] and [Groom]. [Short, warm closing line]. Cheers.\"\n\nFunny, funny, heart, toast. That is the whole formula. Practice it ten times out loud, time it, cut anything over seven minutes, and you will be golden. The groom picked you for a reason. Trust that, and trust the preparation.",
      },
    ],
    ctaSupportingText: 'Be the best man who brought the laughs',
    relatedExamples: ['best-man-speech', 'funny-wedding-speech', 'roast-wedding-speech'],
    relatedArticles: ['best-man-speech-guide', 'how-to-be-funny-wedding-speech'],
    tags: ['best man', 'funny', 'step-by-step'],
  },
  // ─── wedding-speech-mistakes ───
  {
    slug: 'wedding-speech-mistakes',
    title: '10 Wedding Speech Mistakes That Make Everyone Uncomfortable',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech mistakes',
    metaDescription: 'The 10 most common wedding speech mistakes, and exactly how to avoid each one.',
    searchIntent: 'Wants to avoid embarrassment',
    icon: '🚫',
    readingTime: 5,
    sections: [
      {
        heading: '10 Wedding Speech Mistakes That Make Everyone Uncomfortable',
        level: 2,
        content:
          'Nobody plans to make 200 people uncomfortable. And yet, at roughly every third wedding, someone does exactly that. They stand up, they open their mouth, and somewhere between the opening line and the toast, things go sideways.\n\nMost wedding speech disasters come from blind spots, not bad intentions. The joke that killed with your flatmate at midnight. The story that "sounded good in your head." The speech that was definitely only five minutes when you timed it (it was nine). Here are the ten mistakes that keep showing up, why they happen, and how to dodge them.',
      },
      {
        heading: '1. Going Way Too Long',
        level: 2,
        content:
          'No one wants a 12-minute speech, even if it\'s good. A wedding speech should be 4-6 minutes. Full stop. Anything past 7 minutes and people are mentally queuing for the bar, no matter how charming you think you are.\n\nThe trap is that 10 minutes of material doesn\'t feel long when you\'re writing it at your kitchen table. But factor in a warm room, hard chairs, and guests who haven\'t eaten in two hours, and every extra minute feels like a small eternity.\n\nEdit ruthlessly. If a story doesn\'t serve the speech directly, cut it. If you\'ve made the same point twice, pick the better version and bin the other. Your speech should feel almost too short when you read it to yourself. It\'ll feel exactly right when you deliver it.',
      },
      {
        heading: '2. Roasting Too Hard',
        level: 2,
        content:
          'There\'s a gap between affectionate teasing and a public takedown, and a lot of best men find it by falling straight through it.\n\nA good roast makes the audience laugh with the person being roasted. The groom should be laughing genuinely, not doing that tight-lipped smile that means he\'s planning to kill you later.\n\nHere\'s a useful filter: would you say this directly to the groom\'s face, in front of his mother, his boss, and his new in-laws? If the answer is no, it doesn\'t go in the speech.\n\nSteer clear of: stories that make the groom look genuinely stupid or irresponsible. Past romantic failures. Anything involving bodily functions. The stag do, unless the tamest possible version. You\'re a friend at a wedding, not a comedian at a roast battle.',
      },
      {
        heading: '3. Mentioning Exes',
        level: 2,
        content:
          'This should be obvious. It is not obvious enough, apparently, because it happens at weddings with alarming frequency.\n\n"She\'s so much better than the last one" is not a compliment. It\'s a reminder that there was a last one, and now 200 people are picturing that person instead of celebrating the couple standing right in front of them.\n\nEven vague references count. "We all remember the dark times" or "before he finally got his act together" carry the ghost of exes without naming them. There are a million other things to talk about. Talk about those.',
      },
      {
        heading: '4. Reading Directly From Your Phone the Entire Time',
        level: 2,
        content:
          'Having notes is fine. Encouraged, even. But there\'s a canyon between glancing at bullet points on a card and reading a speech verbatim from your phone screen for six straight minutes while everyone stares at the top of your head.\n\nWhen you read, you lose eye contact. You lose vocal variety. You lose the room. The audience mentally checks out, and you can actually feel it happening, which makes you read even harder from the screen. Vicious cycle.\n\nThe fix: use note cards with key phrases, not full sentences. Practice enough that you know the shape of your speech even if the exact words shift. Look up every few lines. Talk to people, not at a screen. And if your phone auto-locks mid-speech, well, that\'s a special kind of panic you don\'t need.',
      },
      {
        heading: '5. Inside Jokes Nobody Gets',
        level: 2,
        content:
          '"And then he said the thing! You know, THE thing! With the hat!" Four people laugh. 196 people stare blankly. One person checks their phone.\n\nInside jokes are lazy shortcuts. They make a small group feel included and everyone else feel like they wandered into the wrong party.\n\nIf you want to reference a shared memory, give enough context that the whole room can appreciate it. Turn "the thing with the hat" into a full story with setup, details, and a punchline that works even if you weren\'t there. That\'s the difference between a private joke and a good speech.',
      },
      {
        heading: '6. Getting Too Drunk Before the Speech',
        level: 2,
        content:
          'Liquid courage is a myth. Liquid overconfidence, slurring, and poor judgment are very real.\n\nIf you\'re speaking, limit yourself to one drink before your speech. One. You might think you need two or three to settle the nerves, but what actually happens is you lose your timing, your filter, and your ability to read the room. You also lose the ability to tell that you\'ve lost those things, which is the really dangerous part.\n\nEvery "wedding speech disaster" story you\'ve ever heard at a dinner party involved alcohol. Give your speech first, nail it, then drink to celebrate. That\'s the correct order of operations.',
      },
      {
        heading: '7. Making It About Yourself',
        level: 2,
        content:
          'Your speech is about the couple. Not about your friendship. Not about your feelings. Not about your gap year.\n\n"I remember when Jake and I went backpacking through Thailand..." is only relevant if it connects to Jake\'s character or his relationship. If the Thailand story is really just you wanting to talk about Thailand, cut it. If your story needs a full backstory to make sense, it\'s probably not the one.\n\nQuick test: count how many times you say "I" versus the couple\'s names. If "I" wins by a landslide, your speech needs rebalancing. You\'re the narrator, not the protagonist.',
      },
      {
        heading: '8. The Non-Apology Opening',
        level: 2,
        content:
          '"I\'m not really good at public speaking, so bear with me." "I didn\'t really prepare anything." "I\'m probably going to mess this up."\n\nThese openings don\'t generate sympathy. They generate dread. The audience hears "this is going to be painful" and braces for impact.\n\nIf you\'re nervous, everyone will be able to tell and nobody will mind. But leading with an apology puts the bar on the floor before you\'ve said a single real thing. A simple "Good evening, I\'m [Name], and I\'m honored to be here" is miles ahead of "Sorry in advance." Save the self-deprecation for after you\'ve earned some goodwill.',
      },
      {
        heading: '9. Forgetting the Toast',
        level: 2,
        content:
          'You would be amazed how many people deliver an entire speech and then just... sit down. They say their last line, the room waits for the toast, and the speaker returns to their seat in confused silence. Glasses half-raised, slowly lowering.\n\nThe toast is the punctuation mark. It\'s the moment the entire room comes together and celebrates as one.\n\nAlways end with a clear "Please raise your glasses" followed by a short, warm line about the couple. Script it. Make it the one line you know by heart even if you forget everything else. Which you might. That happens too.',
      },
      {
        heading: '10. Not Practicing',
        level: 2,
        content:
          'This is the root cause of most other mistakes on this list. People who practice don\'t go too long, because they\'ve timed themselves. They don\'t stumble over words, because they\'ve said them out loud before. They don\'t rely on their phone, because they\'ve internalized the flow.\n\nPractice does not mean reading the speech silently in your head. It means standing up, speaking at full volume, ideally in front of at least one other person who will be honest with you. Do it three times minimum. Five is better. Ten and you\'ll feel nearly bulletproof.\n\nThe speakers who look effortless at weddings aren\'t naturally gifted. They rehearsed. That\'s the whole secret.',
      },
    ],
    ctaSupportingText: 'Avoid every pitfall automatically',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'father-of-bride-speech'],
    relatedArticles: ['what-not-to-say-wedding-speech', 'wedding-speech-dos-and-donts'],
    tags: ['mistakes', 'pitfalls'],
  },

  // ─── what-not-to-say-wedding-speech ───
  {
    slug: 'what-not-to-say-wedding-speech',
    title: 'What NOT to Say in a Wedding Speech (The Unwritten Rules)',
    category: 'Speech Tips',
    targetKeyword: 'what not to say in a wedding speech',
    metaDescription: 'There are things you absolutely cannot say in a wedding speech. Here\'s the complete list.',
    searchIntent: 'Safety check',
    icon: '🤐',
    readingTime: 5,
    sections: [
      {
        heading: 'What NOT to Say in a Wedding Speech (The Unwritten Rules)',
        level: 2,
        content:
          'Nobody hands you a rulebook when you agree to give a wedding speech. You\'re just supposed to know. Don\'t mention exes. Don\'t get too drunk. Don\'t make that joke about Magaluf.\n\nBut the real minefield isn\'t the obvious stuff. It\'s the things that seem perfectly harmless in your head but land badly in a room full of family, friends, coworkers, and that one aunt who is already composing her review of the evening. Let\'s walk through the full list, both the obvious and the ones that catch people off guard.',
      },
      {
        heading: 'Never Mention Past Relationships',
        level: 2,
        content:
          'This rule is absolute. No exceptions. No clever workarounds. No "but it\'s funny."\n\n"He finally found the right one" implies there were wrong ones. "We all know he went through a... phase" is worse. Even complimenting the bride by contrasting her with predecessors ("She\'s so much better for him") summons ghosts that should stay buried.\n\nAs far as your speech is concerned, the couple appeared on this earth fully formed and in love. Their romantic history before each other does not exist during these five minutes.\n\nIf the groom\'s ex happens to be in the room (it happens more than you\'d think), this rule becomes ten times more critical. No references, no glances, no coded language.',
      },
      {
        heading: 'Avoid Backhanded Compliments',
        level: 2,
        content:
          'Backhanded compliments are sneaky because the person saying them genuinely doesn\'t realize they\'re doing it.\n\n"I never thought he\'d settle down" sounds like praise for the bride\'s specialness, but the audience hears a question about the groom\'s commitment.\n\n"She\'s so brave for taking him on" is meant as a joke but implies the groom is a burden.\n\n"I didn\'t think he could do this well" suggests surprise that he\'s capable of attracting a quality partner.\n\n"She\'s definitely the one wearing the pants" frames the relationship as a power struggle.\n\nEvery compliment should be able to stand on its own without a hidden dig underneath. If you have to add "I mean that in a good way," it\'s not landing in a good way.',
      },
      {
        heading: 'Don\'t Reference Money, Debt, or Financial Situations',
        level: 2,
        content:
          'Jokes about the cost of the wedding, the groom\'s student loans, or the bride\'s shopping habits feel lighthearted in your head. In the room, they land differently.\n\nMoney talk at weddings makes people uncomfortable because you never know who paid for what, who stretched themselves thin, or what financial dynamics exist in the family. The bride\'s parents might have taken on debt for this day. The couple might be privately stressed about costs.\n\n"Marrying rich," "at least the food was expensive," "this wedding cost more than my car." Leave all of it out. Finances are a conversational landmine with no upside.',
      },
      {
        heading: 'Skip the "Ball and Chain" Humor',
        level: 2,
        content:
          'Marriage jokes that frame one partner as a nag, a boss, or a jailer are decades past their expiration date. They were tired in the \'90s. Now they\'re actively painful.\n\n"Say goodbye to your freedom." "Welcome to the end of fun." "Happy wife, happy life" said with a wink and a nudge. "I\'m losing my best drinking buddy."\n\nAll of these frame marriage as a loss. Which is a genuinely weird message to deliver at a celebration of marriage, if you think about it for more than two seconds.\n\nModern wedding humor works better when it celebrates the relationship. "I\'m gaining a sister-in-law who actually knows how to cook, so honestly, I\'m thrilled" hits completely differently than "well, there goes another one."',
      },
      {
        heading: 'Don\'t Share Secrets or Private Information',
        level: 2,
        content:
          'The couple\'s fertility plans. Their arguments. Their therapy. Their career drama. Their health issues. Off limits. All of it.\n\nEven well-intentioned mentions go wrong. "I know they\'ve been trying for a while, so I hope tonight\'s the night" will make the couple want to evaporate. "They had a rough patch last year but look at them now" airs dirty laundry nobody asked to see.\n\nIf you\'re unsure whether something is private, it\'s private. You can always share that story over drinks at the bar later. You can never un-say it in front of 200 people. And trust me, someone will have it on video.',
      },
      {
        heading: 'Avoid Anything Sexually Explicit',
        level: 2,
        content:
          'A mild, tasteful nod to the wedding night? Fine, if it\'s genuinely clever. But there is a canyon between a subtle wink and a graphic description, and too many speakers happily leap into that canyon.\n\n"I\'m sure they\'re looking forward to the honeymoon" is fine. Anything about performance, positions, or specific acts is not fine. Under any circumstances.\n\nThe couple\'s parents are in the room. Their grandparents might be. Their coworkers definitely are. Nobody wants to picture the couple\'s intimate life while eating chicken.\n\nThe fact that this needs to be spelled out should tell you how often it goes wrong.',
      },
      {
        heading: 'Don\'t Wing the Serious Parts',
        level: 2,
        content:
          'Some speakers have the funny parts nailed but try to improvise the sincere section. The result sounds like: "And, uh, I just think they\'re really great together and, um, yeah. Love is... good. Cheers."\n\nThe emotional close is what people actually remember. It\'s the moment the couple tears up, the moment the room holds its breath, the moment that makes the speech worth giving. Fumbling through it because you only rehearsed the jokes is like training for a marathon and walking the last mile.\n\nWrite it out. Practice it. Know it cold. If you\'re going to wing anything, wing a joke in the middle. Never wing the heart of the speech.',
      },
      {
        heading: 'Other Things to Leave Out',
        level: 2,
        content:
          'A quick checklist of things that seem harmless but consistently cause problems:\n\nPolitics. Even if you think everyone agrees with you, they don\'t. And this is not the venue.\n\nReligion, unless it\'s genuinely central to the couple\'s relationship and you know the room well. Tread carefully.\n\nWeight, appearance, or body comments beyond "you look beautiful today." Don\'t joke about diets, wedding dress sizes, or anyone "letting themselves go."\n\nDivorce statistics. "Fifty percent of marriages end in divorce, but..." is never a good start to a toast. Nobody came here for data.\n\nComplaints about being single. Your speech is not group therapy. Save the "when will it be my turn" energy for the group chat.\n\nAny story that starts with "I probably shouldn\'t tell this one, but..." If your instinct is to preface it with a disclaimer, your gut is telling you to cut it. Listen to your gut.',
      },
      {
        heading: 'The Golden Rule',
        level: 2,
        content:
          'When in doubt, imagine the couple watching a video of your speech on their tenth anniversary. Would they smile? Would they cringe? Would they wish you\'d left that part out?\n\nYour speech lives forever now. Someone will have it on their phone, maybe on a videographer\'s highlight reel, possibly on social media by Monday morning. Speak accordingly.\n\nEvery word should either make the couple laugh, make them feel loved, or make them glad they asked you to speak. If it doesn\'t do one of those three things, it doesn\'t belong in your speech.',
      },
    ],
    ctaSupportingText: 'Get a speech that\'s safe and great',
    relatedExamples: ['best-man-speech', 'roast-wedding-speech', 'bridesmaid-speech'],
    relatedArticles: ['wedding-speech-mistakes', 'wedding-speech-dos-and-donts'],
    tags: ['taboo', 'safety'],
  },

  // ─── mention-deceased-loved-one-wedding-speech ───
  {
    slug: 'mention-deceased-loved-one-wedding-speech',
    title: 'How to Include a Deceased Loved One in a Wedding Speech',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech deceased loved one',
    metaDescription: "Mentioning someone who's missing is one of the hardest, and most meaningful, things you can do.",
    searchIntent: 'Sensitive, emotional',
    icon: '🕊️',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Include a Deceased Loved One in a Wedding Speech',
        level: 2,
        content:
          'Acknowledging someone who should be in the room but isn\'t. A parent, a grandparent, a sibling, a close friend who didn\'t make it to this day. There\'s no easy way to do it.\n\nYou want to honor them without derailing the celebration. You want to acknowledge the loss without tipping the entire room into sadness for the rest of the evening. It\'s a genuine tightrope, and there\'s a real chance your voice will break halfway through. That\'s okay. The fact that you\'re thinking carefully about how to handle it means you\'re already approaching it well.',
      },
      {
        heading: 'Should You Mention Them at All?',
        level: 2,
        content:
          'Yes. Almost always, yes.\n\nNot mentioning a significant loss can feel like a louder omission than mentioning it. If the bride lost her father, and nobody says a word about him all night, that silence can be deafening to the people who feel his absence most.\n\nThat said, check with the couple first. Some people want their loved one acknowledged publicly. Others have already arranged a memorial table or a photo display and don\'t want it revisited in the speeches. Some are barely holding it together and know that hearing their mum\'s name will break the dam.\n\nA simple, private question beforehand: "I\'d like to mention [name] in my speech. Would that be okay, or would you prefer I didn\'t?" That\'s all it takes. Respect whatever they say, even if it surprises you.',
      },
      {
        heading: 'Keep It Brief and Warm',
        level: 2,
        content:
          'The biggest risk is saying too much. A long, detailed tribute can shift the entire room from celebration to grief, and it is very hard to bring the energy back once that happens. You\'ll feel it in the room, and so will everyone else.\n\nAim for 2-4 sentences. Enough to acknowledge, honor, and move forward. This is not a eulogy. It\'s a moment of recognition inside a celebration.\n\nA good guiding principle: focus on how the person would feel about today, not on the sadness of their absence. Forward-looking, not backward-looking. Joy-centered, not grief-centered.',
      },
      {
        heading: 'What to Say: Examples That Work',
        level: 3,
        content:
          '"I know [Bride]\'s dad, [Name], is watching today with the biggest smile. He would have loved this. He would have loved [Groom]. And I know [Bride] feels him here."\n\n"Before I toast the happy couple, I want to take a moment to remember [Name], who we all miss today. He always said [relevant quote or characteristic], and I think he\'d be so proud of the person [Groom] has become."\n\n"There\'s someone missing from this room who should be sitting right over there. [Name] would have been the first one on the dance floor tonight, and the last one to leave. We carry him with us today."\n\n"I know [Bride] wishes her mother could see her today. And I believe she can. [Mother\'s name] raised an incredible woman, and that legacy is everywhere in this room."\n\nNotice how each of these is brief, specific, and ends on warmth rather than sadness. They acknowledge the absence without dwelling in it.',
      },
      {
        heading: 'Where to Place It in Your Speech',
        level: 2,
        content:
          'Placement matters more than people realize. You have two good options.\n\nOption one: near the beginning, after your opening but before the main body. This gets it done early, lets the room feel the moment, then allows you to transition into lighter material. "Before I get into the stories, I want to take a moment to remember..."\n\nOption two: near the end, just before the toast. This works if you want the mention to be part of your emotional close. You\'d move from your sincere section into the tribute, then directly into the toast. "And as we raise our glasses, let\'s also remember [Name], who is here in spirit..."\n\nWhat to avoid: dropping it randomly between two funny stories in the middle of your speech. The tonal whiplash is jarring, and it\'s nearly impossible to pivot from "remember, they\'re dead" back to "anyway, here\'s another hilarious anecdote."',
      },
      {
        heading: 'How to Handle Your Own Emotions',
        level: 2,
        content:
          'If the person who passed was close to you too, this section of the speech might be the hardest to get through. Here are some practical strategies.\n\nPractice this part more than any other. Say it out loud, alone, multiple times. The first few attempts will be rough. By the fifth or sixth time, you\'ll have more control. Not total control, necessarily, but enough.\n\nBreathe before you start this section. Take a visible, deliberate pause. The audience will understand.\n\nIf your voice breaks, let it. A brief moment of emotion is not a disaster. Take a breath, collect yourself, and continue. Nobody will think less of you. Most people will think more.\n\nHave a backup plan. If you truly cannot get through it, keep a simplified version ready. Instead of four sentences, say one: "We\'re all thinking of [Name] today." Then move on. That single line still honors them.\n\nAnd don\'t apologize for crying. "Sorry, I told myself I wouldn\'t do this" actually undercuts the sincerity of the moment. Just feel it, breathe, and keep going.',
      },
      {
        heading: 'What Not to Do',
        level: 2,
        content:
          'Don\'t go into detail about the death itself. The cause, the timeline, the illness. Everyone in the room already knows. Revisiting those details on a day of celebration serves no one.\n\nDon\'t use guilt-inducing language. "It\'s so sad they can\'t be here" or "this day will never be complete without them" puts an emotional weight on the couple they don\'t need to carry right now.\n\nDon\'t assume everyone in the room knows who you\'re talking about. A brief identifier helps: "[Bride]\'s father, [Name]" rather than just the first name.\n\nDon\'t extend an open invitation for the whole room to grieve. "Let\'s all take a moment of silence" might suit some weddings, but it can make the couple uncomfortable if it wasn\'t planned. A mention in your speech is enough.\n\nDon\'t bring up the deceased just to fill time or because you feel obligated. If you didn\'t know them well and the couple hasn\'t asked you to mention them, leave it to someone closer to the situation.',
      },
      {
        heading: 'If You\'re Speaking as the Person Who Lost Someone',
        level: 2,
        content:
          'If you\'re the bride speaking about your late father, or the groom honoring a deceased best friend, or a parent remembering a spouse who didn\'t make it to this day, the dynamic shifts. It\'s more personal, more raw, and the room will give you more space.\n\nYou don\'t need to perform strength. You don\'t need to minimize your feelings to protect the mood. The guests understand.\n\nBut even here, brevity serves you well. A few sentences from the heart will always land harder than a long passage you can barely get through. Say what you need to say. Let it land. Then let the celebration carry you forward, which is exactly what your loved one would have wanted.',
      },
      {
        heading: 'Connecting the Tribute to the Toast',
        level: 2,
        content:
          'If you mention the deceased near the end of your speech, you can fold them into the toast itself. This creates a unified, beautiful closing.\n\n"So please raise your glasses. To [Bride] and [Groom], to this incredible day, and to [Name], who is celebrating right alongside us. Cheers."\n\nSimple, inclusive, and it ends on togetherness rather than loss. It says: they\'re not missing from today. They\'re part of it.\n\nAnd that, honestly, is the whole point.',
      },
    ],
    ctaSupportingText: 'Handle the hard moments with grace',
    relatedExamples: ['emotional-wedding-speech', 'father-of-bride-speech', 'sentimental-speech'],
    relatedArticles: ['crying-during-wedding-speech', 'wedding-speech-after-loss'],
    tags: ['deceased', 'emotional', 'sensitive'],
  },

  // ─── wedding-speech-couple-you-introduced ───
  {
    slug: 'wedding-speech-couple-you-introduced',
    title: 'How to Write a Wedding Speech About a Couple You Introduced',
    category: 'Speech Tips',
    targetKeyword: 'speech for couple you introduced',
    metaDescription: "You literally made this happen. Here's how to tell the story without being smug.",
    searchIntent: 'Unique angle',
    icon: '💘',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Write a Wedding Speech About a Couple You Introduced',
        level: 2,
        content:
          'You\'re the reason these two are standing at the altar. You set them up, or threw the party, or casually said "you two should hang out" and somehow that turned into a wedding. You\'re basically Cupid with better Wi-Fi.\n\nBeing the matchmaker gives you a genuinely unique position for a wedding speech. You knew them both before they knew each other. You saw the very beginning of a story that\'s now becoming a lifelong commitment. That said, the line between "charmingly taking credit" and "making their love story about you" is thinner than you think. Let\'s stay on the right side of it.',
      },
      {
        heading: 'Lead With the Origin Story',
        level: 2,
        content:
          'You have the origin story, and the audience wants to hear it. How did it happen? What made you think these two would click? Was it a deliberate setup or a happy accident?\n\nTell this story with detail and humor. The audience is hearing the creation myth of this relationship, and they want specifics.\n\n"I\'d like to take credit for this, and I absolutely will. It was July 2021. I was hosting a barbecue and I had one single friend who was a good person and one single friend who deserved a good person. So I put them next to each other at the table and waited. Within ten minutes, they were arguing about whether a hot dog is a sandwich. Within twenty minutes, they\'d forgotten anyone else existed. Within a month, they were inseparable. And I was down two barbecue guests forever."\n\nThat kind of opener sets the stage, gets laughs, and establishes your authority on this particular couple. Just make sure the story is tight. If it needs a five-minute setup to make sense, trim it down or pick a different moment.',
      },
      {
        heading: 'Why You Thought They\'d Work',
        level: 2,
        content:
          'After the origin story, tell the audience what you saw that made you think this match had potential. Nobody else at the wedding can offer this perspective, which is what makes your speech different from everyone else\'s.\n\n"I knew Sarah needed someone who could keep up with her brain and also make her slow down long enough to enjoy things. And I knew Tom needed someone who\'d push him to stop playing it safe. The moment I put that together, it was obvious."\n\nThis section works because it shows you understand both people as individuals, not just as a unit. And it validates the relationship from an outside, informed perspective, which is something the couple will genuinely appreciate hearing.',
      },
      {
        heading: 'The Aftermath: How You Watched It Unfold',
        level: 2,
        content:
          'You had front-row seats from day one. Share what that was like, briefly.\n\nWere you getting the play-by-play texts after every date? Did you have to pretend not to know things because one of them told you in confidence? Were you the first person both of them called when things got serious?\n\n"For the first three months, I was essentially a double agent. Sarah would call me to debrief after every date, and then Tom would call twenty minutes later asking if I thought she liked him. I\'ve never felt so powerful or so exhausted."\n\nThis kind of behind-the-scenes view is gold. But keep it to one or two good moments. You could talk about those early months for ten minutes. Don\'t. Pick the best anecdote and move on.',
      },
      {
        heading: 'Address Both of Them (Not Just the One You\'re Closer To)',
        level: 2,
        content:
          'If you introduced them, you probably knew one of them first. That\'s natural. But your speech needs to honor both people, not just your original friend.\n\nTalk about what you\'ve learned about the other person since the introduction. How they\'ve become part of your life too. What you admire about them beyond just "making my friend happy."\n\n"Tom, I\'ve known you for fifteen years. But [Bride], in the three years I\'ve known you, you\'ve become one of my closest friends too. That wasn\'t guaranteed when I set you up with my buddy. It was a bonus I didn\'t expect, and I\'m grateful for it."\n\nThis balance matters. If you only talk about one half of the couple, the other half\'s family will notice, and so will the couple.',
      },
      {
        heading: 'The Humble Brag (Earned and Allowed)',
        level: 2,
        content:
          'Let\'s be honest. You\'re a little proud of yourself, and you should be. A well-placed humble brag is expected and gets laughs.\n\n"I\'m not saying I\'m solely responsible for this wedding, but I\'m also not NOT saying that. You\'re welcome."\n\n"If anyone wants my matchmaking services, I\'ll be accepting consultations at the bar later tonight. My rates have gone up since this success."\n\n"I take full credit for this relationship and zero responsibility for anything that happens from here."\n\nOne or two of these moments is charming. Ten of them is obnoxious. Your one joke about being Cupid got the laugh. Now let the couple\'s story be the real star.',
      },
      {
        heading: 'What If the Couple Disagrees About How They Met?',
        level: 2,
        content:
          'This happens more than you\'d think. You remember setting them up intentionally. They remember meeting "organically" at your party and give you no credit.\n\nThis is actually comedy gold. Lean into it.\n\n"Now, [Bride] will tell you they met by chance at my birthday party. [Groom] will tell you he noticed her across the room and made his move. I will tell you that I specifically seated them next to each other, texted them both to show up early, and hid in the kitchen watching it happen. Believe whoever you want, but I have the receipts."\n\nConflicting origin stories are relatable and funny. Play them for laughs rather than trying to win the argument.',
      },
      {
        heading: 'Closing: The Full Circle Moment',
        level: 2,
        content:
          'Your speech has a natural closing built in. You saw the very beginning. Now you\'re watching the biggest chapter yet. Connect those two moments.\n\n"Three years ago, I watched two people meet at my kitchen table and wondered if anything would come of it. Today, I\'m watching those same two people promise to spend their lives together. And I don\'t think I\'ve ever been prouder of a kitchen table in my life."\n\nOr: "I had a feeling about you two from the start. Turns out I was right. And standing here today, watching this, is one of the best feelings I\'ve ever had."\n\nThe full-circle structure gives your speech a sense of completeness. It started with an introduction and ends with a marriage. That\'s a story people want to hear.',
      },
    ],
    ctaSupportingText: 'Tell the origin story perfectly',
    relatedExamples: ['childhood-friend-speech', 'close-friend-speech', 'roommate-speech'],
    relatedArticles: ['how-to-tell-story-wedding-speech', 'how-to-make-wedding-speech-personal'],
    tags: ['matchmaker', 'unique'],
  },

  // ─── dont-know-what-to-say-wedding-speech ───
  {
    slug: 'dont-know-what-to-say-wedding-speech',
    title: '"I Don\'t Know What to Say", Wedding Speech Help for the Completely Stuck',
    category: 'Speech Tips',
    targetKeyword: "I don't know what to say wedding speech",
    metaDescription: "Blank page? Brain freeze? Here are prompts that unlock what you actually want to say.",
    searchIntent: 'Stuck, emotional block',
    icon: '🧠',
    readingTime: 5,
    sections: [
      {
        heading: "'I Don't Know What to Say': Wedding Speech Help for the Completely Stuck",
        level: 2,
        content:
          'You agreed to give a speech. Maybe you were honored. Maybe you felt obligated. Maybe you said yes before your brain caught up with your mouth. And now the wedding is approaching and you have a blank document, a blinking cursor, and a growing sense of dread.\n\nThis is normal. Genuinely, embarrassingly normal. Most people who end up giving great wedding speeches started exactly where you are. The blank page is not the problem. You just need a way in.',
      },
      {
        heading: 'Why You\'re Stuck (It\'s Not Writer\'s Block)',
        level: 2,
        content:
          'You\'re probably not stuck because you have nothing to say. You\'re stuck because you have too much to say, or you\'re terrified of saying the wrong thing, or you watched a viral wedding speech on YouTube and now nothing you write feels good enough.\n\nThe pressure to be brilliant, funny, and moving all at once is paralyzing. So let\'s take that pressure off. Your speech needs to be genuine. That\'s the bar. Not brilliant, not viral, not something people will talk about for years. Genuine.\n\nNobody at that wedding will care if your metaphors are mixed or your transitions are clunky. They\'ll care whether you meant it. And you do, otherwise you wouldn\'t be stressing about it this much.',
      },
      {
        heading: 'Exercise 1: The Three Words',
        level: 2,
        content:
          'Grab a piece of paper. Write down three words that describe the person you\'re toasting, or the couple. Not fancy words. The first three that come to mind.\n\nMaybe: loyal, ridiculous, kind. Or: stubborn, brilliant, warm. Or: loud, generous, unstoppable.\n\nNow, for each word, write down one specific moment that proves it. Not a general statement. A moment. A day. A thing that happened.\n\n"Loyal" becomes: "The time she drove four hours to sit with me in the emergency room even though it turned out to be a sprained ankle."\n\n"Ridiculous" becomes: "The time he tried to build IKEA furniture without instructions and somehow ended up with a shelf that was also a hat."\n\nYou now have three stories. That\'s the backbone of a speech. You\'re not stuck anymore, even if it doesn\'t feel like it yet.',
      },
      {
        heading: 'Exercise 2: The Phone Scroll',
        level: 2,
        content:
          'Open your text messages with the person. Scroll back. Look for moments that made you laugh, moments that moved you, moments that were just... them.\n\nCheck your photos too. Scroll through pictures of times you were together. Your brain stores memories visually, and seeing an old image from a random Tuesday can unlock a story you\'d completely forgotten.\n\nLook at your social media interactions. Old birthday posts, tagged photos, comment threads.\n\nYou\'re not looking for the perfect anecdote. You\'re looking for a spark, something that makes you think, "Oh yeah, that\'s who they are." That spark is your starting point.',
      },
      {
        heading: 'Exercise 3: Call a Friend',
        level: 2,
        content:
          'If you\'re really stuck, call someone who knows the couple and say, "I\'m writing a speech and I\'m stuck. What\'s a story about [Name] that always makes you laugh? What\'s a moment that really shows who they are?"\n\nYou\'ll get material you never would have thought of on your own. Other people\'s perspectives can jar loose your own memories, and you might hear a story so good it becomes the centerpiece of your whole speech.\n\nThis also works if you\'re giving a speech about someone you\'re not super close to. Crowd-sourcing the good stuff is not cheating. It\'s research.',
      },
      {
        heading: 'The Dead-Simple Template',
        level: 2,
        content:
          'If the exercises above gave you material but you don\'t know how to organize it, here\'s the simplest possible structure. Fill in the blanks:\n\n"Hi everyone, I\'m [Name] and I\'m [relationship to the couple]. When [they] asked me to speak today, I [honest reaction, can be funny].\n\nI\'ve known [Person] for [time period], and if I had to describe them in one word, it would be [word]. Let me tell you why. [Story that proves the word].\n\nWhen [Person] met [Partner], I noticed [specific change or observation]. [Brief story or moment that shows the relationship].\n\nWhat I love about these two together is [genuine observation]. [One more specific detail or moment].\n\nSo please raise your glasses. To [Bride] and [Groom]. [One short, warm sentence]. Cheers."\n\nThat\'s 3-4 minutes, personal, and sincere. It won\'t win any awards for literary innovation. It doesn\'t need to.',
      },
      {
        heading: 'What If You Genuinely Don\'t Have Stories?',
        level: 2,
        content:
          'Maybe you\'re a newer friend. Maybe you\'re a relative who sees the couple at holidays and that\'s about it. Maybe you were asked to speak for reasons you don\'t fully understand.\n\nYou can build a speech around observation instead of history.\n\n"I haven\'t known [Couple] as long as some of you, but I can tell you what I see. I see two people who [observation]. I see someone who [specific thing about one partner]. And I see someone who [specific thing about the other]."\n\nYou can also build around a single interaction that left an impression. One dinner, one conversation, one moment at a party where you thought, "These two are the real deal." A speech built around one well-told moment beats a speech built around vague platitudes every single time.\n\nAnd it\'s always okay to be honest: "When I was asked to give this speech, I wasn\'t sure what I\'d say. But the more I thought about it, the more I realized that\'s because [Name] doesn\'t need a big speech. They just need to know the people in this room love them. And we do."',
      },
      {
        heading: 'The "Just Start Writing" Method',
        level: 2,
        content:
          'If none of the above has worked, try this: set a timer for ten minutes and just write. Don\'t worry about quality, structure, or grammar. Write everything that comes to mind about the couple. Memories, observations, inside jokes, feelings, random facts. Don\'t stop typing.\n\nAfter ten minutes, read what you wrote. Somewhere in that mess of words will be one or two things that feel true and important. Highlight those. Build your speech around them.\n\nThe blank page is only scary because it\'s blank. Once you put anything on it, the fear shrinks. Bad writing can be edited into good writing. A blank page can\'t be edited into anything.',
      },
      {
        heading: 'One Last Thing',
        level: 2,
        content:
          'The people who give truly bad speeches are the ones who don\'t care at all, who wing it after six drinks with zero preparation. You\'re not that person. You\'re someone who has been staring at a blank page for days because you want to do right by the people you love.\n\nThat intention will carry you further than perfect words ever could. Start with one true thing about the couple. Build from there.',
      },
    ],
    ctaSupportingText: "Answer a few questions, we'll write the speech",
    relatedExamples: ['emotional-wedding-speech', 'sentimental-speech', 'best-man-speech'],
    relatedArticles: ['how-to-write-a-wedding-speech', 'last-minute-wedding-speech'],
    tags: ['stuck', 'prompts', 'help'],
  },

  // ─── wedding-speech-not-close-to-couple ───
  {
    slug: 'wedding-speech-not-close-to-couple',
    title: "How to Write a Wedding Speech When You're Not Close to the Couple",
    category: 'Speech Tips',
    targetKeyword: 'wedding speech not close to couple',
    metaDescription: "Been asked to speak where you're not in the inner circle? More common than you think.",
    searchIntent: 'Obligation, awkward',
    icon: '👋',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Write a Wedding Speech When You\'re Not Close to the Couple',
        level: 2,
        content:
          'Maybe you\'re the groom\'s college roommate who hasn\'t seen him in three years. Maybe you\'re a cousin who sees the couple at Christmas and that\'s about it. Maybe you\'re a work friend who was unexpectedly asked to speak and you\'re privately thinking, "Why me?"\n\nWhatever the reason, you need to stand in front of people and say something meaningful about someone you don\'t know as well as the speech slot implies. Here\'s the thing though: you don\'t have to fake closeness you don\'t have. Honesty, done well, is more charming than pretending.',
      },
      {
        heading: 'Don\'t Pretend to Be Closer Than You Are',
        level: 2,
        content:
          'The worst approach is overcompensating. If you open with "[Groom] is my absolute best friend in the entire world" and everyone in the room knows you met two years ago at work, your speech loses credibility from sentence one.\n\nAudiences can smell inauthenticity. And the couple knows the truth, so performing a deeper relationship than you have is uncomfortable for everyone, especially them.\n\nOwn your position honestly. "I\'ve known [Groom] for a couple of years, but in that time..." or "I may not have the longest history with these two, but what I\'ve seen has been pretty remarkable." This sets real expectations and makes everything that follows more believable.',
      },
      {
        heading: 'Focus on What You\'ve Observed, Not What You\'ve Shared',
        level: 2,
        content:
          'You might not have a decade of shared memories, but you have eyes. You\'ve noticed things. Lean into observation.\n\nHow does the couple interact when they\'re around you? What does the person you know better say about their partner when they\'re not there? What impression has the couple made on you, even from a distance?\n\n"I haven\'t been there for the big milestones in [Groom]\'s life. But I\'ve been there for the Tuesday lunches where he lights up talking about [Bride]. I\'ve seen the way his whole energy shifts when she texts him. And those small moments told me everything I needed to know."\n\nObservation-based speeches can be surprisingly powerful because they offer a perspective the couple doesn\'t get from people who see them every day.',
      },
      {
        heading: 'Do Your Homework',
        level: 2,
        content:
          'This is the most practical piece of advice for this situation. If you don\'t have deep personal material, go collect some.\n\nCall or text 3-5 people who are close to the couple. Parents, siblings, best friends. Ask them:\n\n"What\'s a story that really captures who [Name] is?"\n"What\'s the funniest thing about them as a couple?"\n"What moment made you realize they were the real deal?"\n\nYou\'ll get stories you can weave into your speech with credit. "[Bride]\'s mother told me something that I think says it all..." or "I asked [Groom]\'s best friend what I should know about these two, and he said..."\n\nBorrowing stories is not cheating. Crediting the source makes it feel collaborative rather than secondhand. And nobody will judge you for doing your research. They\'ll judge you if you clearly didn\'t.',
      },
      {
        heading: 'The Quality Over Quantity Approach',
        level: 2,
        content:
          'You don\'t need five stories. You need one good one. One moment where you saw something genuine about the couple or the person you\'re toasting.\n\nMaybe it was a conversation at a dinner party. Maybe it was how they handled a stressful situation at work. Maybe it was the first time you met the partner and something clicked.\n\nBuild your entire speech around that single moment. Set the scene. Describe what happened. Explain why it stuck with you. Then connect it to why you\'re happy to be standing here today.\n\nA speech built around one well-told story beats a speech stuffed with vague compliments trying to cover for a lack of material. Every time.',
      },
      {
        heading: 'Use Your Outsider Perspective as a Strength',
        level: 2,
        content:
          'Sometimes the people closest to the couple can\'t see them clearly. They\'re too deep in the daily details. But you, from your slight distance, might notice things others take for granted.\n\n"I think the people closest to [Bride] and [Groom] might not see it anymore because they see it every day. But from where I stand, watching these two together is like watching two people who\'ve figured out something the rest of us are still working on."\n\nFraming your distance as a different vantage point rather than a limitation is a confident, honest move. You\'re not apologizing for not being closer. You\'re offering a view that only your position allows.',
      },
      {
        heading: 'Keep It Short',
        level: 2,
        content:
          'If you\'re not close to the couple, brevity is your best friend. A tight 3-4 minute speech that\'s genuine and well-delivered will always beat a rambling 7-minute one that\'s trying too hard to prove a bond that isn\'t there.\n\nHere\'s a lean structure:\n\nIntro and honest framing of your relationship (30 seconds). One story or observation (1-2 minutes). What you admire about the couple based on what you\'ve seen (1 minute). Toast (15 seconds).\n\nNobody will think, "That was too short." They\'ll think, "That was really nice." And "really nice" from someone who isn\'t the closest friend? That\'s a win.',
      },
      {
        heading: 'What to Avoid',
        level: 2,
        content:
          'Don\'t fill space with generic marriage advice you found online. If you don\'t have a deep relationship with the couple, reciting proverbs about love feels hollow and everyone can tell.\n\nDon\'t overuse the couple\'s names to compensate for lack of content. Saying their names 47 times doesn\'t make the speech more personal.\n\nDon\'t apologize repeatedly for not being close enough. One honest acknowledgment is enough. After that, it becomes self-pity.\n\nDon\'t turn the speech into a reflection on your own friendship. "I wish we were closer" or "we should hang out more" makes it about you, not about their marriage.\n\nBe warm, be honest, be brief, and toast the couple. That formula works whether you\'ve known them for twenty years or two.',
      },
    ],
    ctaSupportingText: 'Create something genuine, even without years of history',
    relatedExamples: ['work-friend-speech', 'groomsman-speech', 'close-friend-speech'],
    relatedArticles: ['wedding-speech-dont-know-well', 'how-to-make-wedding-speech-personal'],
    tags: ['awkward', 'obligation'],
  },

  // ─── stepparent-wedding-speech ───
  {
    slug: 'stepparent-wedding-speech',
    title: 'How to Write a Wedding Speech as a Stepparent',
    category: 'Speech Tips',
    targetKeyword: 'stepparent wedding speech',
    metaDescription: "Stepparent speeches walk a beautiful tightrope. Here's how to honor the bond.",
    searchIntent: 'Stepparent, navigating',
    icon: '🫂',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Write a Wedding Speech as a Stepparent',
        level: 2,
        content:
          'Being a stepparent at the microphone puts you in a specific position. You love this person. You\'ve helped raise them, supported them, been part of their story. But there\'s often an unspoken question hanging in the air: what\'s your role today? How much space do you take up?\n\nLet\'s get something straight: if you\'ve been asked to speak, you belong at that microphone. The couple wants your voice in their day. Your perspective is different from a biological parent\'s, and that difference is a strength, not a limitation. Own it.',
      },
      {
        heading: 'Acknowledge the Relationship Honestly',
        level: 2,
        content:
          'Don\'t pretend the stepparent dynamic doesn\'t exist. Don\'t try to sound like a biological parent if that\'s not your role. And don\'t minimize your bond either.\n\nThe most powerful thing you can do is name the relationship clearly and warmly.\n\n"I\'m [Name]\'s stepfather. I came into their life when they were [age], and from that moment, they changed mine."\n\n"I didn\'t get to be there for [Name]\'s first steps or first words. But I was there for first heartbreaks, first apartments, and first terrible cooking experiments. I wouldn\'t trade that for anything."\n\n"I didn\'t choose to become a parent. I chose to become [Name]\'s parent. Best choice I\'ve ever made."\n\nThese openings are honest about the timeline while making clear the love is real and chosen. Chosen love is a powerful thing to speak to, and it\'s what makes a stepparent speech unlike any other speech at the wedding.',
      },
      {
        heading: 'Navigate the Other Parent With Grace',
        level: 2,
        content:
          'This is the part that keeps stepparents up the night before. How do you give a speech without making the biological parent feel displaced?\n\nIf the biological parent is present and also speaking: keep your speech focused on your own experience. Don\'t compete. Your speeches will naturally be different because your perspectives are different, and that\'s perfect.\n\nIf the biological parent is present but not speaking: you can briefly acknowledge them. "I know [Name] is blessed to have [Parent] in their life, and I\'m grateful to have been able to add to that." Generous and classy.\n\nIf the biological parent is absent or deceased: tread carefully. A brief, respectful mention works if the couple wants it. "I know [Name] carries their [mother/father] with them today, and I hope I\'ve been able to add something good alongside that." But don\'t dwell on it unless you\'ve discussed it with the couple first.\n\nThe goal is generosity without self-deprecation. You don\'t need to apologize for being there. Just acknowledge the fuller picture with grace.',
      },
      {
        heading: 'Share Your Specific Story',
        level: 2,
        content:
          'Every stepparent relationship has a turning point. The moment the kid stopped seeing you as "mum\'s boyfriend" and started seeing you as family. The moment you realized you loved them like your own. The moment they let you in.\n\nFind that moment and tell it.\n\n"For the first two years, [Name] called me by my first name and kept their bedroom door closed. I didn\'t push it. Then one night, they came downstairs while I was watching a movie, sat down next to me, and said, \'What are we watching?\' That was it. That was the moment I knew we were going to be okay."\n\nThese stories are uniquely yours. A biological parent can\'t tell them. They resonate because they\'re about the effort, the patience, and the eventual reward of building a relationship from scratch.\n\nFair warning: this is the part of your speech where your voice is most likely to crack. Practice it more than anything else. And if the emotion comes anyway, let it. The room will be with you.',
      },
      {
        heading: 'What to Say About the Couple',
        level: 2,
        content:
          'Don\'t get so focused on the stepparent angle that you forget to talk about the couple getting married. Your speech should follow the same basic arc as any parent\'s speech: stories about your stepchild, observations about the relationship, and a warm welcome to the new partner.\n\nTalk about watching them fall in love. Talk about the first time you met the partner and what you thought.\n\n"When [Name] first brought [Partner] home, I did what any stepfather does. I pretended to be relaxed while quietly evaluating everything. And within about ten minutes, I was sold. Anyone who can make [Name] laugh that hard is alright in my book."\n\nWelcoming the new partner into the family is a big part of your speech. As a stepparent, you know what it\'s like to enter an existing family and find your place. You can speak to that directly.\n\n"[Partner], I know something about joining a family that was already in progress. It takes patience, humor, and a lot of showing up. From what I\'ve seen, you\'re a natural."',
      },
      {
        heading: 'Handling Complex Family Dynamics',
        level: 2,
        content:
          'Blended families are complicated. There might be tension, history, or relationships in the room that make this day emotionally loaded for reasons beyond the wedding itself.\n\nYour speech is not the place to address any of that. Not even obliquely. Not even to say "we\'ve had our challenges" or "it hasn\'t always been easy." The subtext will be felt by everyone who knows the backstory, and it can make people deeply uncomfortable.\n\nKeep your speech focused on love, gratitude, and celebration. Save the complex stuff for private conversations.\n\nIf the family dynamics are genuinely fraught and you\'re worried about how your speech will be received, talk to the couple beforehand. Ask what they want. Ask if there\'s anything they\'d prefer you avoid. That\'s not weakness. That\'s respect.',
      },
      {
        heading: 'A Template for the Stepparent Speech',
        level: 2,
        content:
          'Here\'s a framework you can customize:\n\n"For those who don\'t know me, I\'m [Name], [Stepchild]\'s [stepmother/stepfather]. I\'ve been part of [their] life for [X] years, and standing here today is one of the proudest moments of those years.\n\n[Story about your relationship: how it started, a turning point, or a moment that defined it].\n\nWatching [Stepchild] grow into the person standing here today has been [genuine emotion]. And watching them with [Partner] has been [specific observation about the relationship].\n\n[Partner], welcome to this family. You\'re getting someone incredible, and I know [Stepchild] is getting the same in you.\n\nPlease raise your glasses. To [Couple]. [Short, warm closing line]."\n\nThat runs about 3-4 minutes. Personal, honest, and avoids every potential minefield. If you forget a line in the middle, you can always jump to the toast. Nobody will know you skipped a section.',
      },
      {
        heading: 'You Belong Here',
        level: 2,
        content:
          'You were asked to speak because you matter to the couple. Not because of biology. Because of all the mornings and evenings and ordinary Tuesdays where you showed up and loved them.\n\nStepparents sometimes feel like they need permission to be emotional, to claim pride, to say "I love you" publicly. You don\'t need permission. You\'ve earned this moment.\n\nSpeak from your heart. The room will feel it.',
      },
    ],
    ctaSupportingText: 'Honor the bond beautifully',
    relatedExamples: ['stepfather-of-bride-speech', 'stepmother-of-bride-speech', 'blended-family-speech'],
    relatedArticles: ['wedding-speech-second-marriage', 'wedding-speech-complicated-relationship'],
    tags: ['stepparent', 'blended family'],
  },

  // ─── crying-during-wedding-speech ───
  {
    slug: 'crying-during-wedding-speech',
    title: 'How to Handle Crying During Your Wedding Speech',
    category: 'Speech Tips',
    targetKeyword: 'crying during wedding speech',
    metaDescription: "Planning to cry during your speech? Probably. Here's how to handle it.",
    searchIntent: 'Worried about crying',
    icon: '😢',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Handle Crying During Your Wedding Speech',
        level: 2,
        content:
          'You\'re probably going to cry. Or at least get dangerously close. You\'re standing in front of everyone you love, talking about someone you love, on one of the most emotionally charged days of their life. The odds of a completely steady voice are not in your favor.\n\nHere\'s what you should know: nobody has ever watched someone tear up during a wedding speech and thought, "How embarrassing." They thought, "That was beautiful." A moment of emotion adds something to a speech that polished delivery never can.\n\nBut there is a difference between a moment of emotion and a complete breakdown that prevents you from finishing. Let\'s make sure you stay on the right side of that line.',
      },
      {
        heading: 'Why Wedding Speeches Make People Cry',
        level: 2,
        content:
          'It helps to understand what\'s actually happening so you can manage it.\n\nWedding speeches trigger emotions from multiple directions at once. You\'re reliving memories as you tell them. You\'re experiencing the weight of the moment in real time. You\'re standing in front of a large group, which heightens every feeling. And you\'re looking directly at people you love while saying how much they mean to you, which is something most of us almost never do in daily life.\n\nOn top of that, the couple is probably already emotional, which is contagious. The room might be emotional from a previous speech, from the ceremony, from the champagne. You\'re walking into a charged room with the most sentimental material of the evening.\n\nKnowing this ahead of time helps. You can prepare for the specific moments in your speech that are most likely to hit you.',
      },
      {
        heading: 'Identify Your Trigger Lines',
        level: 2,
        content:
          'Every speech has one or two lines that are going to be hard to say. You know which ones they are. They\'re the lines that made you tear up while writing them.\n\nMaybe: "Watching you become the person you are today has been the greatest privilege of my life."\n\nMaybe: "Dad would have loved this."\n\nMaybe: "I\'m not losing a daughter. I\'m gaining... no, actually, I\'m terrified of losing a daughter."\n\nIdentify those lines now. Mark them in your notes. Practice them more than anything else in the speech. The first time you say them out loud, you\'ll probably lose it. The fifth time, you\'ll have more control. By the tenth, you can get through them with feeling but without falling apart.\n\nThis is not about numbing yourself. It\'s about being able to deliver the emotion to the audience instead of being overwhelmed by it.',
      },
      {
        heading: 'Practical Techniques for Staying Composed',
        level: 2,
        content:
          'These are real strategies that speakers actually use.\n\nThe pause and breathe method. When you feel tears coming, stop talking. Take a slow, deep breath through your nose. Look down at your notes for a moment. Then look back up and continue. The audience will wait.\n\nThe water trick. Keep a glass of water nearby. When you need a moment, take a sip. It gives you a physical action to focus on and a few seconds to reset.\n\nThe focal point technique. Pick a spot on the back wall, just above the heads of the audience. When the emotion surges, look at that spot instead of at the couple. Eye contact intensifies emotion. Breaking it briefly gives you relief.\n\nThe physical anchor. Press your thumb and forefinger together, squeeze the podium, or press your feet firmly into the floor. A physical sensation gives your brain something concrete to focus on besides the emotional wave.\n\nThe mental reframe. When you feel the tears rising, think: "I\'m okay. This is a happy moment. I can do this." Sounds basic. It works.',
      },
      {
        heading: 'What to Do When the Tears Actually Come',
        level: 2,
        content:
          'Despite all the preparation, the tears might come anyway. Here\'s what to do.\n\nDon\'t apologize. "Sorry, I told myself I wouldn\'t do this" feels natural but actually diminishes the moment. You\'re feeling something real. That doesn\'t need an apology.\n\nDon\'t fight it. Trying to force tears back by clenching your jaw or holding your breath makes you look like you\'re in pain. Let the emotion pass through naturally.\n\nPause. Just stop talking. Take a breath. The room will be silent and supportive. Someone might clap or say "aww." Let that happen.\n\nSmile. Even through tears, a smile tells the audience this is a happy moment. It signals you\'re okay and you\'re going to continue.\n\nContinue. Pick up where you left off. You don\'t need to reference the tears. Just keep going. The audience will be more engaged, not less, because they just saw something real.',
      },
      {
        heading: 'The Backup Plan',
        level: 2,
        content:
          'For your hardest lines, have a simplified version ready. If the full version is: "Growing up, you were my whole world, and watching you build a new world with someone who loves you this much is more than I ever hoped for..."\n\nThe backup version is: "I\'m so proud of you both."\n\nSame sentiment. Fewer words. Much easier to deliver when you\'re mid-emotional wave.\n\nYou can also have someone on standby. Tell a trusted person that if you completely cannot continue, they should come up and either finish the last paragraph or just stand next to you. This is a safety net you\'ll probably never use, but knowing it\'s there reduces anxiety significantly.\n\nAnother option: if you have a particularly difficult passage, read it from your notes instead of delivering it from memory. Reading gives you something external to focus on and can help you maintain composure through the hardest parts.',
      },
      {
        heading: 'How to Practice Without Desensitizing Yourself',
        level: 2,
        content:
          'There\'s a concern that practicing too much will drain the emotion from your speech and leave you robotic on the day. This almost never happens. The live audience, the setting, the couple\'s faces... the emotion will be there regardless of how much you rehearse.\n\nThat said, here\'s how to practice smart:\n\nFirst three run-throughs: alone, out loud, letting the emotions come freely. Cry if you need to. Get it out.\n\nNext three: focus on breathing through the hard parts. Practice the pause-and-breathe technique at your trigger points.\n\nFinal run-throughs: in front of one trusted person. This simulates the audience experience and lets you practice managing emotion while someone is watching you.\n\nOn the day, try one quiet run-through early in the morning. Not the whole speech. Just the trigger lines. Familiar but fresh.',
      },
      {
        heading: 'A Note on Gender and Crying',
        level: 2,
        content:
          'Men, in particular, sometimes feel pressure to keep it together during speeches. There\'s a lingering cultural expectation that dads and best men should be stoic.\n\nForget that. A father crying during his daughter\'s wedding speech is one of the most moving things most guests will ever witness. A best man getting choked up about his friend is a sign of genuine friendship. A groom who tears up during his own toast is someone the whole room falls in love with.\n\nVulnerability at a wedding is not weakness. The entire day is about love, and love makes people cry. Let it.',
      },
      {
        heading: 'After the Speech',
        level: 2,
        content:
          'You did it. Maybe with tears, maybe without, but you did it.\n\nDon\'t spend the rest of the night replaying the speech in your head and grading yourself. Don\'t ask twelve people "was it okay?" Don\'t apologize to the couple for getting emotional.\n\nAccept the hugs. Accept the "that was beautiful" comments. Have a drink. Hit the dance floor. You just stood up in front of everyone and said something true, which is braver than most people realize.\n\nThe tears, if they came, are part of why people will remember your speech. Not as an embarrassment. As the realest moment of the night.',
      },
    ],
    ctaSupportingText: 'Get a speech you can deliver, tears and all',
    relatedExamples: ['father-of-bride-speech', 'mother-of-bride-speech', 'emotional-wedding-speech'],
    relatedArticles: ['wedding-speech-without-crying', 'wedding-speech-nerves'],
    tags: ['crying', 'emotion'],
  },

  // ─── wedding-speech-complicated-relationship ───
  {
    slug: 'wedding-speech-complicated-relationship',
    title: "How to Write a Wedding Speech When You've Got a Complicated Relationship",
    category: 'Speech Tips',
    targetKeyword: 'wedding speech complicated relationship',
    metaDescription: 'Giving a speech when the relationship is complicated takes courage and tact.',
    searchIntent: 'Navigating family tension',
    icon: '🌊',
    readingTime: 5,
    sections: [
      {
        heading: 'The Elephant in the Ballroom',
        level: 2,
        content:
          'You\'ve been asked to give a wedding speech and your relationship with the bride or groom is, to put it diplomatically, complicated. Maybe you\'re the estranged parent who\'s only recently back in the picture. Maybe you\'re the sibling who spent most of your twenties not talking. Maybe you\'re the best friend who privately thinks this whole thing is a mistake.\n\nWhatever the backstory, you said yes. And now you need to stand in front of 150 people and say something meaningful without triggering a family incident.\n\nHere\'s the thing most people don\'t expect: a wedding speech with a complicated relationship behind it can actually hit harder than a straightforward "we\'ve always been best mates" speech. Authenticity resonates. The trick is knowing what to include, what to leave alone, and how to land somewhere honest without turning the reception into a confessional.',
      },
      {
        heading: 'Step 1: Figure Out What "Complicated" Actually Means Here',
        level: 2,
        content:
          'Before you write anything, get honest with yourself about the nature of the complication. These are very different situations, and they need different approaches.\n\nIf you had a falling out but have genuinely reconciled, that\'s actually a beautiful speech arc. Conflict, growth, reunion. People respond to that.\n\nIf you\'re still in the middle of tension and things are fragile, your job is to be gracious and brief. A wedding speech is not the moment to process your feelings publicly. Three minutes of warmth, then sit down.\n\nIf you disapprove of the partner or the marriage, you need to either find something genuinely positive to say or seriously consider declining the speech. Giving a toast you don\'t believe in will come through in your delivery no matter how good the words are.\n\nIf there\'s family drama everyone knows about, you have to decide whether to acknowledge the elephant or walk past it. Both can work. Neither is automatically right.',
      },
      {
        heading: 'The Golden Rule: It Is Not About You',
        level: 2,
        content:
          'The day belongs to the couple. Your complicated feelings, your unresolved issues, your need for closure: none of that gets airtime today.\n\nThat doesn\'t mean you have to be fake. It means you choose the angle that serves the couple, not the angle that serves your emotional processing.\n\nThink of it this way: you\'re not writing your memoir. You\'re writing a toast. A toast is a gift. Give a good one.',
      },
      {
        heading: 'How to Handle Specific Awkward Situations',
        level: 2,
        content:
          'Let\'s get practical with some common scenarios.',
      },
      {
        heading: "You're a Divorced Parent Giving a Speech",
        level: 3,
        content:
          'Do not mention the divorce unless it\'s to briefly acknowledge that the road wasn\'t always smooth. Do not make passive-aggressive comments about your ex, even veiled ones. Everyone will notice. Everyone.\n\nFocus on your child. Talk about who they are, what you admire, and how happy you are to see them with their partner. If your co-parent did a great job raising them during years you weren\'t around, consider saying so. It costs you nothing and it will mean the world to your kid.\n\n"Raising you has been the greatest privilege of my life, and I know everyone who had a hand in that feels the same way." Classy without groveling.',
      },
      {
        heading: "You're the Sibling Who Wasn't Close Growing Up",
        level: 3,
        content:
          'Don\'t pretend you were inseparable if you weren\'t. People who know your family will see through it immediately, and the couple will feel the dishonesty.\n\nTry honesty with a light touch instead: "My brother and I weren\'t exactly best friends growing up. He was into sports, I was into books, and we were both into annoying each other. But watching him become the person he is today, watching him find someone who makes him this happy... I realize the people you grow up with become part of you whether you like it or not. And I like it."\n\nThat\'s real, warm, and doesn\'t require fabricating a closeness that didn\'t exist. If your voice wavers on the last line, so be it. That just makes it land harder.',
      },
      {
        heading: "You Don't Really Like the Partner",
        level: 3,
        content:
          'This is the hardest one. If you genuinely think the marriage is a mistake, you had your chance to say so privately before the wedding. That window is closed.\n\nFocus your speech on the person you do love and know well. Talk about what they deserve in a partner, framed positively. Talk about how happy they seem. Keep it short. You don\'t need to rave about the partner specifically. A speech that celebrates your friend and wishes the couple well is perfectly fine.\n\nWhatever you do, do not get drunk and let the truth slip out later at the bar. That story never ends well for anyone involved.',
      },
      {
        heading: 'What to Leave Out (No Matter What)',
        level: 2,
        content:
          'Some things are always off-limits in a wedding speech with complicated dynamics:\n\nSpecific grievances. "I know we\'ve had our differences" is fine. "I know you stole $5,000 from me in 2019" is not.\n\nBlame. Even if someone was clearly in the wrong, a wedding speech is not the venue for accountability.\n\nBackhanded compliments. "I never thought you\'d find someone willing to put up with you" sounds like a joke but lands like a grenade when the relationship is already tense.\n\nInside references to the drama. If half the room knows about the family feud, referencing it forces everyone to pick sides. Don\'t do it.\n\nApologies. If you owe someone an apology, give it in private, before the wedding. A public apology in a toast makes the moment about your guilt, not their joy.',
      },
      {
        heading: 'A Framework for the Speech Itself',
        level: 2,
        content:
          'Here\'s a structure that works well for complicated relationships:\n\nOpen with a brief, honest acknowledgment of your connection. Not the complications, just the bond. "I\'m Sarah\'s older sister, and I\'ve had the privilege of watching her grow into the incredible woman standing here today."\n\nShare one specific, positive memory. It doesn\'t have to be a memory of the two of you together. It can be something you observed.\n\nSay something genuine about the couple. What do you see when you watch them together? Even if your relationship with one of them is complicated, you can usually find something authentic to say about their partnership.\n\nEnd with a wish or a toast. Simple, warm, forward-looking.\n\nThe whole thing can be three to four minutes. Short speeches from people with complicated relationships are almost always better than long ones. Less time means less opportunity for things to go sideways.',
      },
      {
        heading: 'The Secret Power of a Complicated Speech',
        level: 2,
        content:
          'Nobody tells you this, but when someone with a complicated relationship gives a gracious, warm, genuine toast, it hits harder than any other speech at the table. Because everyone in the room knows the backstory. They know this wasn\'t easy. And seeing you show up with grace says more about love and family than any polished anecdote ever could.\n\nYou don\'t have to pretend everything is perfect. You just have to show up with your best self for three minutes.\n\nAnd sometimes giving that speech is the thing that starts healing the relationship. Not because of the words you say, but because of what it means that you said them at all.',
      },
    ],
    ctaSupportingText: "Find the right words, even when it's complicated",
    relatedExamples: ['blended-family-speech', 'in-law-speech', 'stepfather-of-groom-speech'],
    relatedArticles: ['stepparent-wedding-speech', 'wedding-speech-second-marriage'],
    tags: ['complicated', 'family'],
  },

  // ─── surprise-wedding-speech ───
  {
    slug: 'surprise-wedding-speech',
    title: "Surprise! You've Been Asked to Give a Wedding Speech (Right Now)",
    category: 'Speech Tips',
    targetKeyword: 'impromptu wedding speech',
    metaDescription: "The mic just got handed to you. Here's your 60-second survival guide.",
    searchIntent: 'Ambushed',
    icon: '🎉',
    readingTime: 5,
    sections: [
      {
        heading: "Don't Panic (But Also, Wow, This Is Really Happening)",
        level: 2,
        content:
          'Someone just tapped you on the shoulder and said, "Hey, would you mind saying a few words?" Or the best man is too drunk to stand and suddenly you\'re the backup plan. Or the couple themselves just handed you a microphone with a smile that says "good luck."\n\nYour heart is racing. Your palms are sweating. Your brain is simultaneously blank and running through every embarrassing thing you\'ve ever said out loud.\n\nTake a breath. An impromptu wedding speech does not need to be polished. It needs to be short, warm, and real. You have about 60 seconds to pull something together. Here\'s exactly how to use them.',
      },
      {
        heading: 'The 60-Second Survival Framework',
        level: 2,
        content:
          'Memorize this structure and you can give a passable wedding speech with zero preparation at literally any wedding for the rest of your life.\n\nSentence 1: Who you are and your connection to the couple. "I\'m Mike, I\'ve been friends with Jake since college."\n\nSentences 2-3: One specific thing you love or admire about the person you know best. Not generic. Specific. "Jake is the kind of guy who will drive three hours in a snowstorm to help you move flats and then refuse to let you buy him dinner."\n\nSentences 3-4: Something about the couple together. "Watching him with Emma, I see a version of Jake I didn\'t know existed. She makes him calmer, funnier, and somehow even more generous."\n\nSentence 5: The toast. "To Jake and Emma. May you always bring out the best in each other."\n\nSixty to ninety seconds. Sit down to applause. Nobody will know you had zero prep.',
      },
      {
        heading: 'What to Do in the First 30 Seconds After Being Asked',
        level: 2,
        content:
          'The moment between being asked and standing up is critical.\n\nFirst, buy yourself time. "I\'d love to. Give me just a minute to collect my thoughts." Nobody will deny you this. Step away from the table if you can.\n\nSecond, pick ONE thing. One memory, one quality, one moment. Don\'t try to plan an entire speech. Just pick one anchor and build around it.\n\nThird, figure out your ending. The ending matters more than the beginning. Even if the middle is messy, a clean toast makes people remember a good speech. Decide your last line before your first.\n\nFourth, grab a drink for the toast, not your nerves. You\'ll need something to raise.',
      },
      {
        heading: 'Easy Anchors When Your Mind Goes Blank',
        level: 2,
        content:
          'If you genuinely cannot think of a specific story, use one of these reliable anchors:\n\nThe first impression. "The first time I met David, he..." First meetings are vivid and usually contain something funny or revealing.\n\nThe moment you knew the couple was right for each other. Even if you embellish the drama of the realization slightly, this always works.\n\nSomething that happened today. "I was watching them during the ceremony and I noticed..." Fresh and shared by everyone in the room.\n\nA defining quality. Everyone has a trait their friends can speak to. Generosity, humor, loyalty, stubbornness. Pick it and give one example.\n\nA running joke from your friendship, as long as it\'s wedding-appropriate and doesn\'t require three minutes of context nobody has.',
      },
      {
        heading: 'The Stuff That Will Save You',
        level: 2,
        content:
          'Keep it under two minutes. Seriously. An impromptu speech that goes long is painful for everyone, especially you. Nobody expects a surprise speaker to deliver a keynote.\n\nSlow down. When you\'re nervous, you speed up. Consciously pace yourself. A pause reads as confidence, even when internally you\'re scrambling for your next sentence.\n\nLook at the couple, not the crowd. This takes the pressure off and makes whatever you say feel more intimate.\n\nAcknowledge you weren\'t prepared, once. "I wasn\'t expecting to be up here, so forgive me if this isn\'t the most polished toast tonight" is endearing and buys you goodwill. Don\'t say it again after that.',
      },
      {
        heading: 'The Stuff That Will Sink You',
        level: 2,
        content:
          'Don\'t try to be too funny. Humor under pressure, without preparation, in front of a crowd is professional comedian territory. One light line is fine. Don\'t push for three and get zero laughs.\n\nDon\'t wing a story you only half-remember. If you\'re fuzzy on the details, pick a different story. Getting details wrong in front of people who were actually there is a specific kind of embarrassing.\n\nDon\'t mention exes, inside jokes that exclude the room, or anything requiring context nobody has.\n\nDon\'t fill silence with "um" and "so, yeah." If you lose your place, just pause. Take a breath. Look at the couple and smile. The audience will wait.\n\nDon\'t apologize more than once for being unprepared. One acknowledgment is charming. Repeated apologies become the whole speech.',
      },
      {
        heading: 'Sample Impromptu Speeches You Can Steal',
        level: 2,
        content:
          'For a close friend: "I\'m Alex, and I\'ve known Chris for almost fifteen years. I wasn\'t expecting to give a speech tonight, but I\'m glad I get to, because someone needs to tell you all that the person you see up there is exactly who they are when nobody\'s watching. Chris is the most genuinely kind person I know. Not nice. Kind. There\'s a difference. And watching them find someone in Jordan who matches that kindness has been one of the best things I\'ve gotten to see. To Chris and Jordan."\n\nFor a colleague or more distant friend: "I\'m Sam from work, and I just want to say that every Monday for the past two years, Rachel has come into the office glowing after her weekends with Tom. The rest of us drag in with coffee and complaints, and Rachel is just lit up. That\'s how you know it\'s real. To Rachel and Tom, and to many more Monday morning glows."\n\nBoth under a minute. Both genuine. Both work.',
      },
      {
        heading: 'After You Sit Down',
        level: 2,
        content:
          'It\'s over. You survived an impromptu wedding speech. Take a breath and enjoy the fact that everyone is impressed precisely because they know that was unplanned.\n\nDon\'t spend the rest of the night replaying what you said. The audience has already moved on to the next course. You should too.\n\nAnd for future reference: if you\'re attending a wedding where you\'re close to the couple, spend five minutes the night before thinking about what you\'d say if asked. Think of it as insurance. You\'ll probably never need it. But if you do, you\'ll be very glad you have it.',
      },
    ],
    ctaSupportingText: 'Next time, be prepared in advance',
    relatedExamples: ['surprise-wedding-speech', 'short-sweet-speech'],
    relatedArticles: ['last-minute-wedding-speech', 'dont-know-what-to-say-wedding-speech'],
    tags: ['impromptu', 'emergency'],
  },

  // ─── how-to-practice-wedding-speech ───
  {
    slug: 'how-to-practice-wedding-speech',
    title: 'How to Practice a Wedding Speech (The Right Way)',
    category: 'Practice Guide',
    targetKeyword: 'how to practice a wedding speech',
    metaDescription: "Writing is half the battle. Here's how to rehearse so you deliver it well.",
    searchIntent: 'Has draft, needs to rehearse',
    icon: '🎯',
    readingTime: 5,
    sections: [
      {
        heading: "Why \"I'll Just Wing It\" Is a Terrible Plan",
        level: 2,
        content:
          'Every person who has bombed a wedding speech thought they\'d be fine without practice. Every single one. They figured they\'d feel the moment, ride the vibe, let the emotions carry them. Then they stood up, saw 150 faces, and their brain turned into static.\n\nPracticing a wedding speech is not about memorizing a script and delivering it like a newsreader. It\'s about getting comfortable enough with your material that you can actually be present in the moment instead of drowning in it.\n\nYou don\'t need a vocal coach. You need a plan, some repetition, and about a week of low-effort practice sessions. Here\'s how.',
      },
      {
        heading: 'When to Start Practicing',
        level: 2,
        content:
          'Finish writing your speech at least 10 days before the wedding. Not the morning of. Not the night before in the hotel room after three drinks. Ten days.\n\nDays 1-3: Read it through a few times. Make edits. Let it breathe.\n\nDays 4-7: Start practicing out loud. This is where the real work happens.\n\nDays 8-10: Polish and refine. Practice in conditions that simulate the real thing.\n\nDay of: One or two light run-throughs in the morning. No more. You want to be fresh, not rehearsed into the ground.',
      },
      {
        heading: 'The Single Most Important Practice Rule',
        level: 2,
        content:
          'Practice out loud. Not in your head. Not silently at your desk. Out loud, at the volume you\'ll actually use, with your actual mouth.\n\nA speech that reads beautifully on paper can sound completely wrong when spoken. You\'ll find sentences that are too long for one breath. You\'ll discover words that are awkward to pronounce at speed. You\'ll realize a joke lands differently when you hear it versus when you read it.\n\nThe gap between written language and spoken language is enormous. You can only close it by actually speaking. There is no shortcut here.',
      },
      {
        heading: 'The Four-Stage Practice Method',
        level: 2,
        content:
          'A structured approach that works whether you\'re naturally comfortable speaking or genuinely terrified.',
      },
      {
        heading: 'Stage 1: Read It Out Loud (Alone)',
        level: 3,
        content:
          'Find a private space. Your car, your bedroom, an empty meeting room. Read your speech out loud, start to finish, three to five times. Don\'t perform it. Just read it naturally, like you\'re telling a friend the story.\n\nDuring these read-throughs, pay attention to:\n\nWhere you stumble over words. Rewrite those parts to be simpler.\n\nWhere you naturally speed up. Those are sections you\'re nervous about. Either cut them or practice them more.\n\nWhere the energy drops. If even you are bored saying it, the audience will be bored hearing it.\n\nTime yourself. If you\'re over five minutes, start trimming. Most people speak faster in practice than they do at the actual event because nerves slow you down. Add about 20% to your practice time for a realistic estimate.',
      },
      {
        heading: 'Stage 2: Record Yourself',
        level: 3,
        content:
          'Nobody likes doing this. Do it anyway.\n\nRecord yourself on your phone giving the speech. Then watch it back. Yes, it will be uncomfortable. Yes, you\'ll hate the sound of your own voice. Push through.\n\nWhat you\'re looking for: Do you sound natural or robotic? Are you rushing? Are there moments that land and moments that fall flat? Do your transitions feel smooth?\n\nDo this two or three times over your practice week. You\'ll be surprised how much your delivery improves just from the awareness of being recorded.\n\nBonus: watch the recording without sound first. Just observe your body language. Do you look like you\'re reading a legal document? Or do you look like someone telling a story they care about?',
      },
      {
        heading: 'Stage 3: Practice in Front of Someone',
        level: 3,
        content:
          'Pick one or two trusted people and deliver the speech to them. Ideally, someone who will be honest with you, not just your mum who thinks everything you do is wonderful.\n\nThe person should NOT be someone attending the wedding if possible. You want fresh reactions at the actual event, especially for jokes.\n\nAsk for specific feedback: Was any part confusing? Did anything feel too long? Were there moments their attention wandered? Did the ending feel satisfying?\n\nPracticing in front of even one person adds pressure that solo practice doesn\'t. That\'s the point. You want to feel a little nervous now so you\'re less blindsided later.',
      },
      {
        heading: 'Stage 4: Simulate the Real Conditions',
        level: 3,
        content:
          'At least once, practice under conditions as close to the real thing as possible.\n\nStand up. Hold your notes in one hand and a glass in the other (yes, really, because you might be holding both on the day). Practice at full volume. If you\'ll have a microphone, hold something in your hand to simulate it.\n\nIf you can visit the venue beforehand, do a quick run-through in the actual space. Not always possible, but if it is, it\'s incredibly effective for calming nerves.\n\nIf you can\'t visit the venue, stand in your living room, pick a spot across the room to be "the couple," and deliver the speech while making eye contact with that spot.\n\nThe goal is to eliminate surprises. The more familiar the physical experience feels, the less your body will panic when it\'s time for the real thing.',
      },
      {
        heading: 'Practice Traps to Avoid',
        level: 2,
        content:
          'Over-rehearsing. If you practice so much that you\'ve memorized every word and pause, your delivery will sound canned. You want to know the material well enough to be flexible, not so well that you\'re on autopilot.\n\nOnly practicing the beginning. Everyone does this. You run through the first two paragraphs twenty times and barely touch the ending. Force yourself to start from the middle sometimes.\n\nPracticing in a whisper. If you mumble through your speech at half volume in your bedroom, you\'re not preparing for what it actually feels like to project in a banquet hall. Volume matters.\n\nPracticing while looking at your phone in your lap. If your notes are on your phone, hold it at chest height. Train yourself to glance at notes and look up, not to read from a screen with your head down.',
      },
      {
        heading: 'The Day-Of Routine',
        level: 2,
        content:
          'On the wedding day, do one relaxed read-through in the morning. That\'s it. Don\'t obsessively rehearse all day. You\'ll drain the spontaneity and show up sounding exhausted.\n\nBefore your speech, do some physical warm-ups: stretch your jaw, hum to warm up your voice, take five deep breaths. It sounds silly. It works.\n\nAnd remember: the goal of all this practice was never perfection. It was comfort. You practiced so that when you stand up, your material is familiar enough that you can focus on the people in front of you instead of the words on your page. That\'s what separates a speech that actually lands from one that just gets through.',
      },
    ],
    ctaSupportingText: 'Get a speech worth rehearsing',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech'],
    relatedArticles: ['wedding-speech-nerves', 'how-to-memorize-wedding-speech'],
    tags: ['practice', 'rehearsal'],
  },

  // ─── how-to-memorize-wedding-speech ───
  {
    slug: 'how-to-memorize-wedding-speech',
    title: 'How to Memorize a Wedding Speech (Without Going Full Robot)',
    category: 'Practice Guide',
    targetKeyword: 'how to memorize a wedding speech',
    metaDescription: "You don't need to memorize every word. Here's a smarter approach.",
    searchIntent: 'Wants to go without notes',
    icon: '🧠',
    readingTime: 5,
    sections: [
      {
        heading: "Let's Start with a Controversial Take: Don't Fully Memorize It",
        level: 2,
        content:
          'The article is about memorizing a wedding speech, and the first piece of advice is: don\'t fully memorize it. Here\'s why. A word-perfect memorized speech is a fragile speech. One lost word, one distraction, one emotional moment, and the whole thing can collapse. You blank on sentence three and suddenly you can\'t remember anything that comes after it.\n\nWhat you actually want is to memorize the structure and key moments while leaving room for natural delivery. Think of it less like memorizing a script and more like knowing a route. You know where you\'re starting, where you\'re ending, and the major turns. But you\'re not reciting turn-by-turn directions word for word.\n\nThat said, there are absolutely parts you should have locked down cold. And there are memorization techniques that work far better than just reading the thing over and over.',
      },
      {
        heading: 'What to Memorize vs. What to Approximate',
        level: 2,
        content:
          'Memorize these word-for-word:\n\nYour opening line. The first thing out of your mouth sets the tone. Have it locked.\n\nYour closing line and toast. The last impression you leave. Don\'t fumble it.\n\nThe punchlines of any jokes. Comedy depends on exact word choice and timing. Close enough is not good enough.\n\nAny quotes you\'re including. Getting a quote slightly wrong is worse than not using it.\n\nApproximate everything else. For the stories, the transitions, the reflective parts, know what you want to say and trust yourself to find the words in the moment. You\'ll sound more natural, and if you lose a sentence, you can move to the next point without anyone ever knowing.',
      },
      {
        heading: 'The Chunking Method',
        level: 2,
        content:
          'Your brain is terrible at memorizing a continuous four-minute monologue. It is very good at memorizing five to seven small chunks.\n\nBreak your speech into distinct sections. Give each one a one-word label: "Opening," "College Story," "Character," "Partner," "Couple," "Toast." Now you have a roadmap of six chunks instead of a wall of text.\n\nMemorize each chunk independently. Get comfortable with "College Story" on its own before worrying about how it connects to "Character." Once each section is solid, practice the transitions between them.\n\nThis is how actors memorize long monologues. It works because your brain processes structured information exponentially better than unstructured information.',
      },
      {
        heading: 'The Memory Palace Technique (Less Weird Than It Sounds)',
        level: 2,
        content:
          'A technique that has been around since ancient Greece, and it genuinely works for speeches.\n\nPick a physical space you know well. Your flat, your childhood home, your daily walking route. Assign each section of your speech to a specific location in that space.\n\nYour opening is the front door. The funny college story is the kitchen. The part about the couple is the living room. Your toast is the back garden.\n\nAs you practice, mentally walk through the space. When you arrive at each location, deliver that section. The physical locations act as memory anchors.\n\nThis sounds gimmicky. Studies consistently show that spatial memory is one of the strongest types of memory we have. People who use this technique report significantly better recall than those who just rehearse linearly. Try it once before dismissing it.',
      },
      {
        heading: 'Spaced Repetition (The Study Hack That Actually Works)',
        level: 2,
        content:
          'If you have 10 days before the wedding, don\'t spend an hour practicing on one day and then nothing for three. Spread it out.\n\nDay 1: Read through the full speech three times. Day 2: Practice from memory, checking notes when stuck. Day 3: Skip entirely and let your brain consolidate. Day 4: Practice again. You\'ll be surprised how much stuck. Day 5: Practice just the sections you keep forgetting. Day 6: Full run-through. Day 7: Skip. Day 8: Full run-through. Day 9: Light review of key moments. Day 10, wedding day: One morning run-through.\n\nThe breaks between sessions are not wasted time. That\'s when your brain actually moves information from short-term to long-term memory. Cramming the night before is the worst possible strategy for retention.',
      },
      {
        heading: 'Use Physical Cues',
        level: 2,
        content:
          'Your body can help your brain remember. This is why pacing while studying works, and why you can sometimes recall a conversation by remembering where you were standing when it happened.\n\nWhen you practice, try adding a subtle physical anchor to each section transition. Shift your weight, take a sip of water, look from the crowd to the couple. These micro-movements become cues that trigger the next section.\n\nYou can also practice specific sections in specific locations. Practice your opening in the kitchen and your toast in the bedroom. When you\'re at the venue, mentally cycling through those locations can help trigger the associated content.\n\nNot magic. Just giving your brain more hooks to retrieve information from.',
      },
      {
        heading: 'The Safety Net: Notes Done Right',
        level: 2,
        content:
          'Even if you\'ve memorized your speech thoroughly, bring notes. Not as a crutch, but as a safety net. Knowing the notes are there reduces anxiety, and reduced anxiety improves recall. Beautiful feedback loop.\n\nYour notes should be a stripped-down outline, not a full transcript. Bullet points with key phrases from each section. Maybe the first three words of each chunk to trigger the rest. Definitely the exact wording of your quotes, jokes, and toast.\n\nWrite them on a single card or a small piece of paper. Not your phone, which will lock at the worst moment. Not a full sheet, which will shake visibly when your hands tremble. And your hands might tremble. That\'s normal.\n\nThe goal: if your memory fails at any point, you glance down, see a trigger word, and you\'re back on track within two seconds.',
      },
      {
        heading: 'What to Do When Your Brain Goes Blank',
        level: 2,
        content:
          'Even with solid preparation, there is a real chance you\'ll blank out for a moment. It happens to professional speakers. It will happen to someone giving a wedding speech while emotional and probably a little nervous.\n\nHere\'s the save: pause, breathe, glance at your notes. That\'s it. The audience reads a pause as confidence or emotion. They don\'t know you\'ve forgotten what comes next. You have more time than you think.\n\nIf you truly cannot find your place, skip to the next section you remember. Nobody has a copy of your speech. Nobody knows you skipped the paragraph about the camping trip. Just bridge to the next thing and keep going.\n\nThe worst move is to panic visibly, say "sorry, I forgot," and start flipping through pages. Stay calm. The moment will pass.',
      },
    ],
    ctaSupportingText: 'Get a speech with a natural flow built in',
    relatedExamples: ['best-man-speech', 'groom-speech'],
    relatedArticles: ['wedding-speech-notes', 'how-to-practice-wedding-speech'],
    tags: ['memorize', 'delivery'],
  },

  // ─── wedding-speech-notes ───
  {
    slug: 'wedding-speech-notes',
    title: 'Should You Use Notes for a Wedding Speech? (Yes. Here\'s How.)',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech notes',
    metaDescription: "Using notes isn't cheating, it's smart. Here's how to do it elegantly.",
    searchIntent: 'Unsure about using notes',
    icon: '📋',
    readingTime: 5,
    sections: [
      {
        heading: 'Yes, Use Notes. Please.',
        level: 2,
        content:
          'Using notes during a wedding speech is not cheating. Professional speakers use notes. Politicians use teleprompters. Stand-up comedians have set lists taped to the stage.\n\nYou\'re giving a toast at a wedding, not performing a one-person show. Nobody in that room is scoring you on memorization. They\'re listening to what you say and watching how you say it.\n\nThe only time anyone notices notes is when someone clearly needs them and doesn\'t have them. Fumbling through a forgotten speech, repeating themselves, trailing off mid-sentence. That\'s what people remember. Not the small card in your hand.',
      },
      {
        heading: 'The Best Note Format: Cue Cards',
        level: 2,
        content:
          'A single index card, two at most, is the gold standard. Here\'s why.\n\nThey\'re small enough to hold discreetly. Unlike a full sheet of paper, a card doesn\'t flap around when your hands shake. And your hands might shake.\n\nThey force conciseness. You cannot fit your entire speech on a 3x5 card, which means you have to distill it to key phrases and triggers. This actually improves your delivery because it prevents word-for-word reading.\n\nThey\'re rigid. Paper trembles. Cards don\'t. This matters more than you\'d think when adrenaline hits.\n\nUse one card per major section if you need to, but honestly, one card with a solid outline usually covers a 3-5 minute toast.',
      },
      {
        heading: 'What to Write on Your Notes',
        level: 2,
        content:
          'Most people get this wrong. They write out the entire speech in tiny handwriting and then squint at it under dim reception lighting. Useless.\n\nInstead, write only:\n\nThe first few words of each section. These are trigger phrases. "When I first met Dan..." is enough to launch you into a story you\'ve practiced.\n\nExact wording for quotes or jokes. Punchlines depend on precision. Write these out fully.\n\nYour closing toast, word for word. You want to end strong, and this is the part most likely to evaporate from your brain due to adrenaline.\n\nTransition cues. A simple arrow or the word "PAUSE" between sections keeps your pacing on track.\n\nWrite in large, clear handwriting or print. Bold marker, not ballpoint pen. You\'ll be reading this in ambient lighting from about 18 inches away while slightly nervous. Make it easy on yourself.',
      },
      {
        heading: 'What NOT to Use as Notes',
        level: 2,
        content:
          'Your phone. It will lock on you. The screen will dim. You\'ll accidentally swipe to your text messages. And you\'ll look like you\'re checking your notifications during a wedding speech. Leave it in your pocket.\n\nA full printed transcript. If you have the whole speech in front of you, you will read it. You won\'t mean to, but you will. And reading a speech kills eye contact, flattens your delivery, and disconnects you from the room.\n\nMultiple pages. Shuffling through pages is distracting and makes you look less prepared, not more. Condense.\n\nNapkins, receipts, or the back of the program. Write your notes on something you can actually read under dim lighting without squinting.',
      },
      {
        heading: 'How to Hold Your Notes',
        level: 2,
        content:
          'Hold the card in your non-dominant hand, roughly at chest or waist height. Your dominant hand stays free for gestures and for holding your glass when it\'s time to toast.\n\nDon\'t hide the card behind your back or in your pocket. Having to fish it out when you need it is far more distracting than just holding it openly from the start.\n\nDon\'t hold the card at face level and read from it like a legal document. The card is a glance-down reference, not a barrier between you and the audience.\n\nThe rhythm: look at audience, speak, glance at card for the next cue, look back up, speak. Natural, easy, nobody notices.',
      },
      {
        heading: 'The Glance-and-Go Technique',
        level: 2,
        content:
          'The key to using notes well: never talk while looking at your notes. Always look up before you speak.\n\nThe sequence: Pause. Glance down. Find your next point. Look up. Deliver it.\n\nThis takes practice, but it completely changes how your speech comes across. Talking while looking down seems like reading. Pausing, glancing, and looking up to deliver seems like gathering your thoughts. One looks prepared. The other looks like you wrote the speech in the car park.\n\nPractice this at home. It feels awkward at first. By the fifth run-through, it becomes second nature.',
      },
      {
        heading: 'Backup Plan: The Second Card',
        level: 2,
        content:
          'A good move: prepare a second, more detailed card and leave it in your jacket pocket or at your seat. Your primary card is the streamlined outline. Your backup has more detail, maybe the full text of a tricky middle section.\n\nYou probably won\'t need it. But knowing it\'s there does wonders for your confidence. If you do blank out completely, you can pull it out, say "Bear with me for a second," find your place, and continue. Nobody will care. The brief vulnerability usually makes the audience like you more.\n\nHaving a backup plan for forgetting your lines is not pessimism. It\'s how you make sure a blank moment stays a small moment instead of becoming the whole story.',
      },
      {
        heading: 'A Note About Notes and Emotion',
        level: 2,
        content:
          'Wedding speeches get emotional. You might start crying, your voice might crack, you might lose your place because your eyes are blurry with tears.\n\nNotes save you here. When emotion hits, you can pause, take a breath, glance at your card, and pick up exactly where you left off. Without notes, an emotional moment can completely derail your speech because you lose track of where you were.\n\nSome people write themselves little reminders in the margins: "Breathe here" or "Take a moment." In the heat of the moment, that tiny cue can be the difference between composing yourself and completely falling apart.\n\nBring the notes. Use the notes. Nobody has ever left a wedding saying, "Great speech, shame about the index card."',
      },
    ],
    ctaSupportingText: 'Export your speech as perfect cue cards',
    relatedExamples: ['father-of-bride-speech', 'mother-of-groom-speech'],
    relatedArticles: ['how-to-memorize-wedding-speech', 'forget-wedding-speech'],
    tags: ['notes', 'delivery'],
  },

  // ─── wedding-speech-pacing ───
  {
    slug: 'wedding-speech-pacing',
    title: 'Wedding Speech Pacing: How to Slow Down and Let It Land',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech pacing',
    metaDescription: "Speaking too fast is the #1 delivery mistake. Here's how to find the right pace.",
    searchIntent: 'Improving delivery',
    icon: '🐢',
    readingTime: 5,
    sections: [
      {
        heading: 'The Number One Delivery Mistake (And Everyone Makes It)',
        level: 2,
        content:
          'Almost everyone speaks too fast during a wedding speech. Almost everyone.\n\nIt makes sense. You\'re nervous, you\'re in front of a crowd, your body is pumping adrenaline, and every instinct is telling you to get through this and sit down. So you rush. You steamroll through your stories. You blow past the punchline of your best joke before the room has processed the setup. You sprint through the emotional climax like you\'re trying to catch a train.\n\nThe audience can\'t keep up. The jokes don\'t land because there\'s no breathing room. The emotional moments don\'t hit because they\'re over before anyone can feel them. The whole speech becomes a blur that people vaguely remember as "nice but fast."\n\nThe fix is simple but requires conscious effort: slow down. More than you think you need to.',
      },
      {
        heading: 'Why Your Brain Lies to You About Speed',
        level: 2,
        content:
          'When you\'re nervous, what feels like a normal speaking pace to you sounds like an auctioneer to everyone else. Your internal clock speeds up with your heart rate. A pause that feels like five seconds to you is actually about one and a half.\n\nThis means that when you deliberately try to slow down, it will feel ridiculous. Like you\'re talking to a toddler. Like everyone must be bored out of their minds.\n\nThey\'re not. They\'re following along perfectly. They\'re actually hearing what you\'re saying for the first time all speech. This is what normal pace sounds like from the outside, even though it feels glacial from the inside.\n\nTrust the slow.',
      },
      {
        heading: 'The Power of the Pause',
        level: 2,
        content:
          'The most powerful tool in your pacing arsenal is not a word. It\'s silence.\n\nA well-timed pause gives the audience time to process what you just said. It signals something important is coming next. It lets a joke land. It lets an emotional moment breathe. And it makes you look confident, even if inside you\'re terrified.\n\nWhere to pause:\n\nAfter your opening line. Let the room settle and shift attention to you.\n\nBefore and after a joke. The pause before creates anticipation. The pause after gives people time to laugh. Rush into your next line and you\'ll step on the laughter and kill the moment.\n\nDuring an emotional shift. Moving from a funny story to a sincere moment? Pause. Give the room permission to change gears with you.\n\nBefore your toast. This is the climax. Let a beat of silence build before you raise your glass.',
      },
      {
        heading: 'How to Practice Pacing',
        level: 2,
        content:
          'Record yourself at what feels like your normal pace. Then record again at what feels embarrassingly slow. Play both back.\n\nThe "embarrassingly slow" version will sound better. Clearer, more confident, more engaging. The "normal pace" version will sound rushed. This is a consistent finding. Everyone is surprised by it.\n\nAnother technique: write "PAUSE" in your notes at every point where you want a beat. When you see it, stop talking for a full two seconds. Count in your head. One Mississippi. Two Mississippi. Then continue.\n\nYou can also try a metronome app set to about 120 BPM and land roughly one word per beat. Slower than conversation. Approximately the sweet spot for speaking to a room. You won\'t stick to it during the actual speech, but it recalibrates your internal sense of what "slow enough" really sounds like.',
      },
      {
        heading: 'Vary Your Speed (Not Everything Should Be Slow)',
        level: 2,
        content:
          'A great speech has variation. Not everything should be delivered at the same deliberate pace, or you\'ll sound like you\'re narrating a nature documentary.\n\nSlow down for: emotional moments, important points, your toast, the punchline of a joke, and the first and last sentences of your speech.\n\nSpeed up slightly for: the middle of a funny story where you\'re building momentum, listing things ("He\'s kind, he\'s funny, he\'s the worst fantasy football player I\'ve ever seen"), and transitional sentences that bridge sections.\n\nThe contrast between fast and slow keeps people engaged. A speech at consistent slow speed is dull. A speech at consistent high speed is exhausting. Vary it. Let the content dictate the pace.',
      },
      {
        heading: 'How to Recover When You Realize You Are Rushing',
        level: 2,
        content:
          'You\'re mid-speech and you suddenly become aware you\'re talking too fast. It happens. Here\'s how to reset without anyone noticing.\n\nTake a sip of water or champagne. Forces a natural pause and gives you a moment to recalibrate.\n\nDeliberately slow your next sentence to an almost uncomfortable degree. This resets your internal speedometer. After one slow sentence, your pace will settle somewhere more reasonable.\n\nLook at the couple and smile. Creates a natural pause and reconnects you to the emotional core, which often calms the nervous energy driving the rush.\n\nThe audience does not know your intended pace. They don\'t know you skipped ahead or rushed a section. All they experience is what\'s happening now. Correct course and they\'ll only remember the corrected version.',
      },
      {
        heading: 'One Simple Trick That Changes Everything',
        level: 2,
        content:
          'Breathe at the end of sentences.\n\nSounds obvious. Most nervous speakers don\'t do it. They inhale mid-sentence or chain sentences together without any break, turning a three-minute speech into one continuous breathless paragraph.\n\nEnd a sentence. Close your mouth. Breathe in through your nose. Start the next sentence.\n\nThis automatically slows your pace, improves your projection, steadies your nerves, and makes your speech easier to follow. It is the single highest-leverage pacing habit you can develop.\n\nPractice it a few times before the wedding and it\'ll be second nature by speech time. Your audience will thank you. Your lungs will thank you. And your speech will actually land the way you wrote it to.',
      },
    ],
    ctaSupportingText: 'Get a speech timed to perfection',
    relatedExamples: ['emotional-wedding-speech', 'sentimental-speech'],
    relatedArticles: ['how-to-practice-wedding-speech', 'wedding-speech-nerves'],
    tags: ['pacing', 'delivery'],
  },
  // ─── project-voice-wedding-speech ───
  {
    slug: 'project-voice-wedding-speech',
    title: 'How to Project Your Voice During a Wedding Speech',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech voice projection',
    metaDescription: "If they can't hear you, it doesn't matter how good your speech is.",
    searchIntent: 'Soft-spoken',
    icon: '📢',
    readingTime: 5,
    sections: [
      {
        heading: "If They Can't Hear You, Nothing Else Matters",
        level: 2,
        content:
          "Imagine spending three weeks writing the perfect speech, nailing every joke in practice, getting the emotional beat exactly right. Then you stand up, and the back half of the room catches maybe every fourth word. The rest of them are whispering to each other: \"What did he say?\"\n\nThat happens constantly. People obsess over what to say and completely forget that saying it loud enough is a separate skill. The result is a speech that dies somewhere around table six while the last three rows give up and start talking about the canapes.\n\nProjection is not about being loud. It is a technique, and a learnable one. Even if you have a naturally quiet voice, a few focused practice sessions will change how you carry sound across a room.",
      },
      {
        heading: "Projection vs. Shouting (They're Not the Same)",
        level: 2,
        content:
          "Shouting pushes air through your throat. It strains your voice, sounds aggressive, and weirdly becomes harder to understand at a distance. Projection directs sound outward using your diaphragm, posture, and resonance.\n\nThink about the difference between a teacher yelling at a class to be quiet and a stage actor delivering lines to the back row of a 300-seat theatre. One sounds strained and frantic. The other sounds clear from every seat in the house.\n\nYou want to be the actor. If you find yourself going hoarse during practice, you are shouting, not projecting.",
      },
      {
        heading: 'The Diaphragm: Your Secret Weapon',
        level: 2,
        content:
          "Most people speak from their chest using shallow breaths. That produces a thin, quiet sound that fades fast. To project, you breathe from your diaphragm, the muscle below your lungs that controls deep breathing.\n\nPut your hand on your stomach. Breathe in and push your hand outward with your breath. Your chest should barely move. Your belly expands. That is diaphragmatic breathing.\n\nWhen you speak from that deeper breath, your voice has more body and more carry. Try it now: take a deep diaphragm breath and say \"To the happy couple\" while pushing the sound from your core. You will hear the difference immediately. Fuller, richer, louder, zero strain.\n\nIf you feel silly doing this, good. That means you are actually trying it instead of just reading about it.",
      },
      {
        heading: 'Posture Matters More Than You Think',
        level: 2,
        content:
          "Stand straight. Shoulders back. Head level, not tilted down at your notes. Feet shoulder-width apart.\n\nWhen you hunch or slouch, you physically compress your diaphragm and restrict airflow. Your voice cannot project well if your body is working against it. Think of your body as a speaker system: diaphragm is the amplifier, throat and mouth are the speaker cone, posture is the housing. Collapse the housing and the sound suffers regardless of everything else.\n\nOne thing that catches people out: holding notes down at waist level. That pulls your head down, closes your throat, and aims your voice at the floor. Hold your notes at chest height. It keeps your airway open and your chin up.",
      },
      {
        heading: 'Aim for the Back Wall',
        level: 2,
        content:
          "Speak to the back of the room. Not to the front row. Not to the couple. Past them, to the people at the farthest table.\n\nThis does not mean you stare at the back wall the entire time. You still make eye contact around the room. But your vocal intention should be to reach the farthest person. When you aim for the back, the front and middle take care of themselves.\n\nAim for the couple three feet away and your voice dies by the fifth row. Aim for the back wall and everyone in between hears you clearly. Try it right now: say a sentence as if talking to someone across a table, then say the same sentence as if talking to someone across a large room. That difference is projection. It is the single easiest fix you can make.",
      },
      {
        heading: 'Dealing with Tough Acoustics',
        level: 2,
        content:
          "Wedding venues are acoustically chaotic. Barns echo. Tents have no walls, so sound escapes in every direction. Gardens let the wind eat your words. Ballrooms hum with clinking glasses and kitchen noise.\n\nFor echoey spaces: slow down significantly. Echo turns fast speech into mush. Let each sentence bounce and settle before you start the next one.\n\nFor open-air venues: increase your volume about 30% and speak more slowly. Sound disappears outdoors with nothing to reflect off. If there is no microphone, face the majority of the audience and accept that people behind you will miss a few words.\n\nFor noisy venues: do not try to power through background noise. Wait for a lull, then start. If there is constant noise from a band, generator, or traffic, you need a microphone. No technique in the world beats competing with a diesel engine.",
      },
      {
        heading: 'Warm Up Your Voice (Yes, Really)',
        level: 2,
        content:
          "Singers warm up before performing. You should spend five minutes doing the same before your speech.\n\nHum at different pitches for a minute to warm your vocal cords. Do some lip trills, the \"brrrr\" sound with your lips vibrating, to relax tension in your face and throat. Run through a few tongue twisters at full volume. \"Red leather, yellow leather\" or \"unique New York\" will loosen your articulation. Then take five deep diaphragm breaths.\n\nDo this in the bathroom, the car, or behind a hedge. Anywhere private. You will walk up to the mic with a voice that is warmed up and ready to carry, not cold and thin from hours of quiet sitting.\n\nSkip the warm-up and your first few sentences will sound noticeably weaker than the rest. That is the worst possible time to sound weak.",
      },
      {
        heading: 'When in Doubt, Use a Microphone',
        level: 2,
        content:
          "If a mic is available, use it. If one is not available and the venue holds more than 40 people, ask if one can be provided.\n\nSome people refuse microphones because they think it will look too formal or they are worried about feedback. Both are solvable. A mic can be used casually. A basic sound check prevents feedback.\n\nWhat is not solvable is half the room missing your speech because they could not hear you. Nobody has ever complained that a wedding speech was too audible. Plenty of people have sat through speeches where they caught maybe 20% of the words and just clapped politely at the end.\n\nYour speech is worth hearing. Do not let pride about going mic-free be the reason it is not.",
      },
    ],
    ctaSupportingText: "Get a speech that's worth hearing",
    relatedExamples: ['groom-speech', 'best-man-speech'],
    relatedArticles: ['how-to-use-microphone-wedding-speech', 'wedding-speech-pacing'],
    tags: ['voice', 'projection'],
  },

  // ─── how-to-use-microphone-wedding-speech ───
  {
    slug: 'how-to-use-microphone-wedding-speech',
    title: 'How to Use a Microphone for a Wedding Speech (Without Feedback Hell)',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech microphone',
    metaDescription: 'Microphone 101 for wedding speakers. How to hold it, where to stand, and how to avoid feedback.',
    searchIntent: 'Practical, never used a mic',
    icon: '🎤',
    readingTime: 5,
    sections: [
      {
        heading: "The Microphone Is Your Friend (If You Know How to Use It)",
        level: 2,
        content:
          "A microphone means you can speak at a normal volume and still reach every table. That is the entire point. It takes projection off your plate so you can focus on the actual words.\n\nThe problem is that most people have never held a mic outside of karaoke, and it shows. They hold it wrong, stand too close, pop every P like a small explosion, and create feedback that makes the entire room flinch. One groomsman at a wedding last year held the mic against his chin like a phone call. The sound engineer looked like he was watching a car crash in slow motion.\n\nFive minutes of knowledge prevents all of this. A microphone is simple technology. You just need to know the basics.",
      },
      {
        heading: 'Handheld Microphones: How to Hold Them',
        level: 2,
        content:
          "Grip the middle of the handle, not near the top. Holding it near the head cups the microphone element, which causes feedback and muffled sound. Think ice cream cone, not strangling a small animal.\n\nHold it two to three inches from your mouth, slightly below your chin, angled upward at about 45 degrees. Not touching your lips (that is how you get those popping sounds on every P and B). Not at arm\'s length (that is how you become inaudible).\n\nThe most common mistake is waving the mic around while talking. Close for some words, far for others. This creates wild volume swings that are incredibly distracting. Find the right distance and keep it there.\n\nHold it in your non-dominant hand so your dominant hand stays free for gestures and for holding your notes or eventually your glass.",
      },
      {
        heading: 'Microphone on a Stand: The Setup',
        level: 2,
        content:
          "Adjust the height before you start speaking. A mic stand set for a six-foot groomsman will be completely wrong for a five-foot-four maid of honor. Most stands have a clutch mechanism: loosen, adjust, tighten. Figure this out before people are watching if you can.\n\nThe mic should sit at chin height, slightly below your mouth. Stand about a hand\'s width away and speak across it, not directly into it. Let the microphone do the work while you stand naturally.\n\nIf you want to take the mic off the stand to move around, commit to that. Do not keep putting it back and taking it off. And if you take it off, move the empty stand to the side so you are not awkwardly positioned next to a metal pole for three minutes.",
      },
      {
        heading: 'Lapel and Clip-On Microphones',
        level: 2,
        content:
          "If the venue has a lapel mic, you have won the microphone lottery. Hands-free, unobtrusive, almost zero technique required.\n\nClip it about six to eight inches below your chin on your lapel, collar, or neckline. Make sure it points up toward your mouth and is not rubbing against fabric or jewelry. Fabric scratching on a lapel mic sounds like someone crumpling a paper bag directly into the speaker system.\n\nDo not turn your head dramatically while speaking. Lapel mics have a narrow pickup pattern, so a full 90-degree turn means your voice drops out entirely. Gentle head turns are fine.\n\nAlso, remember the mic is always live. That whispered comment to the best man about Uncle Steve\'s third trip to the bar? Everyone just heard it.",
      },
      {
        heading: 'How to Avoid Feedback',
        level: 2,
        content:
          "Feedback is that horrible screech that happens when the mic picks up its own output from the speakers. It is the most common mic disaster at weddings and almost always preventable.\n\nNever point the microphone at a speaker. That is the primary cause. Know where the speakers are and keep the mic aimed away from them.\n\nDo not cup the mic head with your hand. This changes the pickup pattern and makes feedback much more likely.\n\nIf you hear feedback starting, a low hum or whine that is building, move. Step away from the speakers, lower the mic slightly, or angle your body differently. Standing frozen while the sound escalates to a screech is the one thing you should not do.\n\nAsk for a sound check before speeches start. Two minutes of testing prevents that twenty-second moment where everyone covers their ears and the videographer\'s audio is ruined.",
      },
      {
        heading: 'Common Microphone Mistakes and Fixes',
        level: 2,
        content:
          "Tapping the mic and saying \"Is this thing on?\" Just start speaking. If it works, people will hear you. If it does not, someone will wave at you.\n\nBlowing into the mic to test it. This can damage some microphones and always sounds terrible through speakers.\n\nHolding it too close and popping on P, B, and T sounds. If you hear plosive pops, move the mic an inch further or angle it slightly so your breath does not hit the element directly.\n\nForgetting the mic amplifies everything. Clearing your throat, sighing, muttering \"oh god\" under your breath between paragraphs. It is all louder now.\n\nDropping the mic at the end. This is not a rap battle. Wedding microphones are rented equipment. Place it back on the stand or hand it to someone. The couple does not need a damage charge on top of everything else.",
      },
      {
        heading: 'What If There Is No Microphone?',
        level: 2,
        content:
          "Ask the coordinator if one can be provided. Even at a 50-person wedding, a mic makes a real difference, especially outdoors where sound vanishes into open air.\n\nIf truly no mic is available, ask guests to move closer before you begin. \"Hey everyone, come in a bit, no mic tonight\" works perfectly and actually creates a nice intimate feel.\n\nSpeak from your diaphragm, aim for the back of the group, slow your pace, and over-enunciate slightly. And keep it shorter than you would with a mic. Projecting without amplification for five minutes is genuinely exhausting. Three minutes is your realistic limit before your voice starts to fade.\n\nPosition yourself facing the majority of the crowd with a wall or solid surface behind you if possible. Walls reflect sound back toward the audience. Open space behind you means your voice just disappears.",
      },
      {
        heading: 'The Sound Check That Takes Two Minutes',
        level: 2,
        content:
          "Grab the mic during cocktail hour setup, before speeches begin. Say your opening line at your normal speaking volume. Have a friend stand at the farthest table and signal thumbs up or down.\n\nAdjust your distance from the mic until the volume is right. Loud enough for the back row, not so loud the front row is wincing.\n\nSay a few P-heavy words to check for popping. \"Peter Piper picked a peck\" is the classic. If you hear pops, angle the mic slightly off-axis.\n\nThat is it. Two minutes. Now you know your setup works, and that is one less thing to spiral about when you stand up for real.",
      },
    ],
    ctaSupportingText: "Focus on the words, we'll help with those",
    relatedExamples: ['best-man-speech', 'groom-speech'],
    relatedArticles: ['project-voice-wedding-speech', 'wedding-speech-day-of-checklist'],
    tags: ['microphone', 'logistics'],
  },

  // ─── eye-contact-wedding-speech ───
  {
    slug: 'eye-contact-wedding-speech',
    title: 'How to Make Eye Contact During a Wedding Speech',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech eye contact',
    metaDescription: "Looking at the floor? Here's how to make genuine eye contact during your speech.",
    searchIntent: 'Delivery improvement',
    icon: '👀',
    readingTime: 5,
    sections: [
      {
        heading: 'The Eyes Have It (And So Does Your Speech)',
        level: 2,
        content:
          "Eye contact turns a monologue into a conversation. It makes a room of 150 people feel like you are talking to each of them. It communicates sincerity in ways that words alone cannot.\n\nMost people are terrible at it during speeches. They stare at their notes the entire time. Or they fixate on the couple while the rest of the room feels invisible. Or they do the nervous scan, eyes darting around like they are looking for the exit.\n\nOne best man spent his entire speech looking at a spot on the ceiling about two feet above the bride\'s head. Afterward he said it \"felt like eye contact.\" It did not look like it.\n\nGood eye contact is not about staring people down. It is about connecting with the room. And there is a straightforward technique for doing it well.",
      },
      {
        heading: 'The Lighthouse Technique',
        level: 2,
        content:
          "Divide the room into three to five zones: far left, center left, center, center right, far right. As you speak, slowly rotate your gaze through these zones, spending about one sentence in each before moving on.\n\nYou do not need to make eye contact with every person. That would look manic. Pick one person in each zone and speak directly to them for a sentence. Then move to someone in the next zone. The people near whoever you are looking at will feel included too. Peripheral vision does the work.\n\nThe sweep should feel unhurried. Do not whip your head back and forth like you are watching a tennis match. Let your gaze drift naturally. Think lighthouse beam, not searchlight.",
      },
      {
        heading: 'When to Look at the Couple vs. the Crowd',
        level: 2,
        content:
          "Look at the couple when you are speaking directly to them or about their relationship. \"You two are the most annoyingly perfect couple I have ever met\" goes to the couple with a smile.\n\nLook at the crowd when telling a story, making a joke, or sharing context. \"Let me tell you about the time Dave tried to impress Lisa by cooking a five-course dinner\" is for the audience.\n\nLook at the couple for the toast. When you raise your glass and say the final words, bring your eyes to the bride and groom. That creates a powerful moment that bookends the speech.\n\nThe ratio should be roughly 70% audience, 30% couple. The speech is for the couple, but it is performed for the audience. They need your attention to stay engaged. One exception: if you are getting emotional, looking directly at the couple and speaking to them is completely natural. The room will lean in, not check out.",
      },
      {
        heading: "How to Make Eye Contact When You're Nervous",
        level: 2,
        content:
          "Anxiety makes eye contact hard because looking at faces triggers your fight-or-flight response. Your brain reads all those watching eyes as evaluation, and it wants to escape. So work around it.\n\nLook at foreheads instead of eyes. From more than six feet away, nobody can tell the difference. It reads as eye contact without the intensity.\n\nFind three to five anchor faces. Friendly people scattered around the room who you know will smile back. Your partner. Your college roommate. The bride\'s mom who has been crying since the ceremony. These are your safe harbors when you need a confidence boost.\n\nStart with the couple. Looking at someone you love is easier than looking at strangers. Begin your speech directed at them while you settle your nerves, then gradually widen to the room.\n\nGlancing at your notes is a natural break. It gives your nervous system a brief rest. Just make sure you look back up before you start speaking the next line, not while your head is still down.",
      },
      {
        heading: 'Eye Contact Mistakes That Make Things Weird',
        level: 2,
        content:
          "Staring at one person for more than five seconds. That stops being connective and starts being intense. Move your gaze before it gets uncomfortable.\n\nAvoiding the couple entirely. Some speakers are so focused on working the room that they never look at the people the speech is actually about. That reads as oddly detached.\n\nLocking onto the videographer. The camera lens feels safer than faces, but staring at the camera makes you look like you are filming a confession video.\n\nLooking at the floor when you get emotional. The instinct is to look down when tears come, but looking at the couple or even slightly upward helps you maintain composure and is more powerful to watch.\n\nThe death stare during a joke. Intense, unblinking eye contact while delivering a punchline reads as threatening. Humor works better with lighter eye contact, eyebrows up, slight smile.",
      },
      {
        heading: 'Practicing Eye Contact at Home',
        level: 2,
        content:
          "Line up a few objects on chairs around your living room. Practice delivering your speech while rotating your gaze between them. You will feel ridiculous talking to a row of throw pillows. Do it anyway.\n\nRecord yourself. Watch it back and notice where your eyes go. Most people are surprised by how much time they spend looking down. That awareness alone changes your behavior.\n\nPractice in front of two or three friends seated at different spots. Ask them afterward if they felt included or ignored. Their feedback will be more useful than your own self-assessment.\n\nThe goal is not perfect eye contact. It is natural, warm, inclusive eye contact that makes the room feel connected to you. If you blank on a line and lose your place, that is fine. Glance at your notes, find the thread, look up, and keep going. Nobody remembers one lost moment. They remember how you made them feel.",
      },
    ],
    ctaSupportingText: "Deliver a speech you're proud to give",
    relatedExamples: ['father-of-bride-speech', 'maid-of-honor-speech'],
    relatedArticles: ['wedding-speech-pacing', 'what-to-do-with-hands-wedding-speech'],
    tags: ['eye contact', 'delivery'],
  },

  // ─── forget-wedding-speech ───
  {
    slug: 'forget-wedding-speech',
    title: 'What to Do If You Forget Your Wedding Speech Mid-Way Through',
    category: 'Practice Guide',
    targetKeyword: 'forgot wedding speech',
    metaDescription: "You blanked. The room is staring. Here's exactly how to recover.",
    searchIntent: 'Fear of blanking',
    icon: '😶',
    readingTime: 5,
    sections: [
      {
        heading: "Your Brain Just Went Blank. Now What?",
        level: 2,
        content:
          "You are mid-sentence. The room is quiet. A hundred faces are looking at you. And your brain has decided this is the perfect moment to completely empty itself of all useful information. Just gone. Like someone pulled the plug on a hard drive.\n\nWelcome to the club. This has happened to professional speakers, actors, politicians, and every best man who has ever held a champagne flute while pretending to be calm. You are not special in this regard. That is actually the good news.\n\nThe other good news: the audience has no idea what you were going to say next. They do not have a copy of your script. To them, a pause is just a pause. You have more recovery time than your panicking brain is telling you.",
      },
      {
        heading: 'The First Five Seconds: Stay Calm',
        level: 2,
        content:
          "The blank itself is not the problem. The panic that follows is the problem. Panic makes you blurt \"I forgot my speech,\" apologize repeatedly, visibly scramble through notes, or just freeze with a look of pure terror while the groom\'s mother reaches for her wine.\n\nInstead: close your mouth, take a breath, and smile. For two to three seconds, just exist calmly. To the audience, this looks like a thoughtful pause. Like you are collecting yourself before an emotional moment. They will project meaning onto your silence that works in your favor, as long as you do not shatter the illusion by panicking.\n\nYou have five to seven seconds of comfortable silence before anyone starts to wonder. That is plenty of time. Use it.",
      },
      {
        heading: 'Recovery Technique 1: Check Your Notes',
        level: 2,
        content:
          "This is why you brought notes. This exact moment.\n\nGlance down at your card. Find the keyword that triggers the next section. Look up. Continue. Total interruption: three seconds. The audience barely registers it.\n\nIf your notes are a full transcript, finding your place quickly might be hard. This is one reason bullet-point notes beat full scripts. A short list of keywords is scannable at a glance. A wall of text is not.\n\nIf you somehow do not have notes, move to the next technique. And next time, bring notes. There is no award for memorizing the whole thing.",
      },
      {
        heading: 'Recovery Technique 2: Skip Ahead',
        level: 2,
        content:
          "You have forgotten the middle of a story or the next section. The solution is surprisingly simple: skip it.\n\nJump to the next part you do remember. Bridge with \"But what I really want to say is...\" or \"More importantly...\" and launch into whatever comes next.\n\nNobody knows you skipped a section. There is no audience member thinking, \"Wait, they were supposed to talk about the fishing trip before the college story.\" The only person who knows the plan changed is you.\n\nThis is the most important thing to internalize: you can always skip ahead. The speech does not have to be delivered perfectly or in order. It just has to end well. If you land the toast, nobody will reconstruct the timeline of your anecdotes.",
      },
      {
        heading: 'Recovery Technique 3: Repeat and Riff',
        level: 2,
        content:
          "If you just made a point and cannot remember what follows, buy time by expanding on what you just said.\n\n\"Jake has always been the most loyal friend I have ever had.\" [Brain goes blank.] \"I mean that seriously. In a world where people come and go, Jake shows up. He showed up for me more times than I can count, and I know he will show up for Sarah every single day.\"\n\nYou just riffed for fifteen seconds while your brain rebooted. The audience did not hear filler. They heard emphasis. This works especially well for emotional content. Repeating a heartfelt sentiment reads as genuine feeling, not as a memory failure.\n\nJust do not riff on the same point for two minutes. That is when people start to notice.",
      },
      {
        heading: 'Recovery Technique 4: Acknowledge It (Lightly)',
        level: 2,
        content:
          "If the blank stretches past ten seconds and the audience is starting to shift in their seats, acknowledge it with humor.\n\n\"And this is why they tell you not to drink before the speeches.\"\n\n\"I promised myself I would not cry... I did not promise I would not forget my own speech.\"\n\n\"Bear with me, I have been thinking about this moment for weeks and now it is all hitting me at once.\"\n\nOne quip. One glance at your notes. Back to business. Do not dwell on it. Do not apologize three times. The room laughs, you get a reset, everyone moves on.",
      },
      {
        heading: 'The Emergency Exit: Go Straight to the Toast',
        level: 2,
        content:
          "If everything fails and you truly cannot remember anything beyond what you have already said, go to your toast. You did memorize your toast, right?\n\nBridge to it: \"I could go on, but I think the best thing I can do right now is raise a glass...\" and deliver your closing.\n\nA speech that ends early but ends well beats a speech that stumbles through five more painful minutes every single time. The audience will remember the warm toast. They will not go home discussing whether the speech was shorter than expected.\n\nThink of your toast as a ripcord. No matter what happens, you can always pull it and land safely. That safety net alone should reduce half the anxiety about forgetting.",
      },
      {
        heading: 'Prevention: How to Minimize the Risk',
        level: 2,
        content:
          "Bring notes. Always. Even if you have memorized every word. The safety net reduces anxiety, and less anxiety means better recall.\n\nMemorize the structure, not the script. If you know the five sections and the key point of each, you can find your way even when exact wording escapes you.\n\nPractice the transitions between sections specifically. The most common place to blank is at the seam between one part and the next. Those bridges are where your memory is weakest.\n\nLimit alcohol before your speech. One drink for nerves is fine. Three drinks is how you end up staring blankly at a room full of people with no idea what paragraph you are on.\n\nAnd remember: even if you blank, even if you skip half the speech, even if you pull the emergency toast ripcord, nobody will hold it against you. People remember that you stood up. They remember that you tried. They do not remember that you paused for eight seconds in the middle.",
      },
    ],
    ctaSupportingText: "Get a speech that's easy to remember",
    relatedExamples: ['short-sweet-speech', 'lighthearted-speech'],
    relatedArticles: ['wedding-speech-notes', 'how-to-memorize-wedding-speech'],
    tags: ['blanking', 'recovery'],
  },

  // ─── handle-interruptions-wedding-speech ───
  {
    slug: 'handle-interruptions-wedding-speech',
    title: 'How to Handle Hecklers and Interruptions During a Wedding Speech',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech hecklers',
    metaDescription: "Drunk uncle yelling? Baby crying? Here's how to handle interruptions.",
    searchIntent: 'Worst-case planning',
    icon: '🛡️',
    readingTime: 5,
    sections: [
      {
        heading: "It's Not a Speech Until Something Goes Wrong",
        level: 2,
        content:
          "A baby will scream. A glass will shatter at the exact wrong moment. Someone\'s uncle, the one everyone warned you about, will yell something from the back table. The DJ will accidentally play \"Sweet Caroline\" over your emotional peak.\n\nThis is live performance at a wedding. Something will go sideways. The question is never whether you will be interrupted. It is whether you will handle it like someone who expected it or someone who did not.\n\nHandling an interruption well can actually improve your speech. The audience is rooting for you. They want to see you navigate the moment with humor or grace. Nail it and you get more goodwill than a flawless delivery ever would. Freeze up and stare at the interruption like a deer in headlights, and that is the story people tell about your speech.",
      },
      {
        heading: 'The Universal Rule: Pause, Acknowledge, Continue',
        level: 2,
        content:
          "No matter what the interruption is, the framework is the same.\n\nPause. Stop talking. Do not try to power through. Competing with a crying baby or a dropped tray of glassware is a losing proposition. You just raise your voice while nobody hears you anyway.\n\nAcknowledge. Give the interruption a brief nod. A look, a smile, a quick comment. This shows the room you are aware and in control, not oblivious.\n\nContinue. Once the moment passes, pick up where you left off. If you cannot remember your place, check your notes or bridge with \"So, as I was saying...\"\n\nThe entire thing should take five to fifteen seconds. Anything longer and the interruption is running the show instead of you.",
      },
      {
        heading: 'Handling the Drunk Heckler',
        level: 2,
        content:
          "Every wedding has a candidate. The person who has been at the open bar since the ceremony and now fancies themselves co-host. They shout things like \"THAT\'S NOT HOW IT HAPPENED\" or \"TELL THEM ABOUT VEGAS\" or just enthusiastic noises.\n\nFirst response: smile, give a light laugh. \"I see someone got a head start on the champagne.\" The room laughs because they have all been watching this person all night.\n\nIf they continue: look at them directly, smile, and say with warmth, \"I love the enthusiasm, but let me finish and then we can swap.\" Direct but not aggressive.\n\nIf they still will not stop: do not engage further. Make eye contact with someone at their table that communicates \"please handle this.\" Then continue your speech directed at the other side of the room. Someone usually intervenes.\n\nNever lose your cool. Never snap. The moment you get visibly angry, the vibe shifts from \"funny interruption\" to \"uncomfortable confrontation.\" You lose the room even if you are right.",
      },
      {
        heading: 'Handling a Crying Baby',
        level: 2,
        content:
          "Babies cry at weddings. That is the entirety of their job description. And the parent is already mortified, so do not make it worse.\n\nQuick cry that stops on its own: just pause for a beat and continue. No acknowledgment needed.\n\nExtended crying: pause, smile, deliver something warm. \"Someone agrees with me\" or \"Toughest critic in the room\" or \"I feel the same way, buddy.\" The parent will almost certainly be heading for the door already. Give them a kind look and continue.\n\nDo not, under any circumstances, say anything that could sound annoyed. Even a joke like \"Can someone handle that?\" lands as hostile. Every parent in the room will tense up. Be gracious and move on quickly.",
      },
      {
        heading: 'Handling Technical Issues',
        level: 2,
        content:
          "Mic cuts out: project your voice and keep going. \"Looks like we are going acoustic\" buys time while someone sorts the equipment.\n\nFeedback screech: stop talking, step away from the speakers, and wait. \"And I thought my singing voice was bad\" fills the silence if you need it.\n\nRandom music starts playing: laugh. It is genuinely funny. Everyone will laugh with you. Wait for it to stop. \"Great, now I have got a soundtrack.\" If it does not stop quickly, gesture to the DJ.\n\nFor any technical problem, patience and humor are your best tools. These things are nobody\'s fault. The audience just wants to see you handle it without melting down. The maid of honor at a wedding I attended lost her mic, shrugged, and just shouted the rest. Standing ovation. Sometimes the disruption becomes the best part.",
      },
      {
        heading: 'Handling Unexpected Emotions (Yours or Others\')',
        level: 2,
        content:
          "Sometimes the interruption is internal. You start crying when you did not expect to. Or the bride bursts into tears. Or the groom\'s mum is sobbing loudly enough that it catches you off guard.\n\nIf you start crying: pause, breathe, smile through it. \"Give me a second\" or \"I promised myself I would not do this.\" The room will wait. They will love you more for it. Take your time and continue. A teary speech delivered with love beats a polished speech delivered with detachment.\n\nIf someone in the audience is visibly emotional: acknowledge it gently if the moment calls for it. \"I see I am not the only one feeling this\" creates a shared moment.\n\nEmotional interruptions are the easiest to navigate because the audience is already with you. Nobody judges tears at a wedding. They judge you for being cold.",
      },
      {
        heading: 'The One Type of Interruption You Should Worry About',
        level: 2,
        content:
          "The only genuinely dangerous interruption is someone revealing information that should not be public. A heckler mentioning an ex. A comment about family drama. A drunk guest saying something actually inappropriate.\n\nDo not engage with the content. Do not repeat it. Do not joke about it. Say \"Moving on...\" with a smile and continue as if it did not happen. The faster you move past it, the faster the room does too.\n\nIf it is truly offensive or the person will not stop, pause and let someone else handle it. You are not the bouncer. Look to the wedding party to step in.\n\nMost interruptions are harmless. A baby, a glass, an enthusiastic uncle. These are the textures of a real celebration, not a rehearsed production. The speech that handles a messy moment with humor is the one people bring up for years.",
      },
    ],
    ctaSupportingText: 'Be prepared for anything',
    relatedExamples: ['funny-wedding-speech', 'best-man-speech'],
    relatedArticles: ['forget-wedding-speech', 'wedding-speech-nerves'],
    tags: ['interruptions', 'hecklers'],
  },

  // ─── what-to-do-with-hands-wedding-speech ───
  {
    slug: 'what-to-do-with-hands-wedding-speech',
    title: 'What to Do with Your Hands During a Wedding Speech',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech body language hands',
    metaDescription: "Your hands are doing something weird. Here's what to do with them.",
    searchIntent: 'Awkward about body language',
    icon: '🤲',
    readingTime: 5,
    sections: [
      {
        heading: 'The Hand Panic Is Real',
        level: 2,
        content:
          "You have used your hands successfully every day of your life without a single conscious thought. Then you stand up to give a wedding speech and suddenly they feel like they belong to someone else. Where do they go? Why are they so sweaty? Are they always this big?\n\nThis ranks right up there with \"what if I forget everything\" and \"what if I cry\" on the list of wedding speech anxieties. It makes sense. When every eye in the room is on you, every part of your body feels amplified. Especially the parts you cannot hide.\n\nThe honest truth, though, is that nobody is watching your hands as closely as you think. They only become noticeable when they are doing something distracting. So the goal is less about doing the right thing and more about not doing the wrong thing.",
      },
      {
        heading: 'The Default Position: One Hand Occupied, One Hand Free',
        level: 2,
        content:
          "Give one hand a job and the problem is half solved.\n\nHold your notes in one hand. Your non-dominant hand holds the card, your dominant hand stays free for gestures and eventually raising your glass. If you do not have notes, hold your glass. Same principle.\n\nIf you have neither notes nor a glass, hold the microphone. If there is no microphone either, you have two unemployed hands. Rest one at your side or on the podium and let it gesture as you speak.\n\nThe key word is \"naturally.\" You gesture when you talk to friends at dinner. You gesture when you tell stories at a bar. Your body knows what to do with your hands when you are not overthinking it. The goal is to get close enough to that natural state that your hands operate without conscious interference. Which, ironically, means thinking about them less, not more.",
      },
      {
        heading: "What NOT to Do (The Hall of Shame)",
        level: 2,
        content:
          "The fig leaf. Both hands clasped in front of your groin. The universal pose of discomfort. It looks exactly as awkward as it sounds.\n\nThe reverse fig leaf. Hands clasped behind your back. Makes you look like you are being interrogated or awaiting sentencing.\n\nBoth hands in pockets. One hand in a pocket can look casual. Both hands deep in your pockets says you would rather be literally anywhere else.\n\nThe death grip. Clutching the podium, your notes, or the microphone with white-knuckle intensity. Everyone can see the tension radiating from your fingers.\n\nThe prayer. Palms pressed together in front of your chest. Reads as pleading, which is not the energy you want.\n\nThe fidget. Playing with a ring, twisting a button, clicking a pen, touching your face. Fidgeting is distracting and broadcasts nervousness louder than anything else.\n\nThe T-Rex. Arms pinned to your sides, hands up near your chest, making tiny restricted movements. This happens when you are trying not to gesture but your body wants to. Let it.",
      },
      {
        heading: 'How to Gesture Like a Normal Human',
        level: 2,
        content:
          "Good speech gestures are the same ones you use in conversation, just slightly bigger so they read past the third row.\n\nOpen palms facing the audience when making a sincere point. Counting on your fingers when listing things. \"There are three things I love about Sarah\" with fingers to match. Pointing gently toward the couple when referencing them. Indicating size or distance to add visual dimension to a story.\n\nGesture from the elbow, not the wrist. Wrist-only movements look timid and are invisible from ten feet away. Movement from the elbow and shoulder reads clearly at a distance.\n\nBut do not choreograph your gestures. Planned hand movements look robotic and weird. Just practice your speech out loud a few times and let your hands do whatever they naturally do. If you notice a bad habit, like the fidget or the fig leaf, correct that specific thing. Do not try to add gestures. Try to remove the distracting ones.\n\nAnd if your hands shake, they shake. Most people in the audience will not notice. The few who do will feel sympathetic, not judgmental.",
      },
      {
        heading: 'The Glass Problem',
        level: 2,
        content:
          "At some point you need a glass for the toast. Managing a glass, notes, and a microphone with only two hands is a genuine logistics puzzle.\n\nThe solution: do not hold the glass for the entire speech. Keep it on the table next to you or have someone ready to hand it to you when you reach the toast. When that moment comes, put your notes in your pocket or set them down, pick up the glass, deliver the toast, drink, done.\n\nIf you must hold the glass throughout, keep it low in your non-dominant hand. Do not gesture with the hand holding the glass. Champagne sloshing is not the atmosphere you are going for.\n\nAnd do not take nervous sips throughout the speech. One sip for a strategic pause is fine. Steadily draining your glass over four minutes tells the audience this is harder for you than it should be.",
      },
      {
        heading: 'If You Have a Podium',
        level: 2,
        content:
          "A podium changes the equation. You can rest one or both hands lightly on the sides. Natural, confident, no thought required. Do not grip the edges. Just rest.\n\nYou can set your notes on the surface, freeing both hands completely. This is actually ideal for gesturing.\n\nDo not hide behind it. Stand close enough to use it but do not hunch over it like it is the only thing keeping you upright. It is a shelf for your notes, not a shield.\n\nStepping to the side of the podium for a personal moment creates intimacy. Staying behind it for a joke or a broader point works fine. But do not pace back and forth between the two. Pick your spot and own it.",
      },
      {
        heading: 'The Honest Truth About Hands',
        level: 2,
        content:
          "The audience is looking at your face. They are listening to your words. They are watching the couple react. Your hands are background noise unless they are doing something distracting.\n\nSo the real advice is this: stop worrying about your hands. Give one of them a job. Let the other one move naturally. Put your mental energy toward the things that actually determine whether a speech lands: your words, your pacing, your eye contact, and your connection to the couple.\n\nYour hands will figure themselves out. They have been doing it your whole life. They are not going to forget how at a wedding.",
      },
    ],
    ctaSupportingText: "Get your speech sorted, hands will follow",
    relatedExamples: ['groom-speech', 'best-man-speech'],
    relatedArticles: ['eye-contact-wedding-speech', 'wedding-speech-nerves'],
    tags: ['body language', 'hands'],
  },

  // ─── wedding-speech-english-second-language ───
  {
    slug: 'wedding-speech-english-second-language',
    title: "How to Deliver a Wedding Speech If English Isn't Your First Language",
    category: 'Practice Guide',
    targetKeyword: 'wedding speech English second language',
    metaDescription: "Giving a speech in your second language? Your accent is an asset.",
    searchIntent: 'ESL speaker',
    icon: '🌍',
    readingTime: 5,
    sections: [
      {
        heading: "Your Accent Is Not a Problem. It's an Advantage.",
        level: 2,
        content:
          "If you have been telling yourself your English is not good enough, that people will not understand you, or that you will sound foolish, take a breath. Giving a wedding speech in a language that is not your native tongue is one of the most generous things a person can do. Every single person in the room will recognise that effort before you have even finished your first sentence.\n\nYour accent is part of who you are. It adds texture and authenticity that a polished native speaker cannot replicate. A heartfelt toast delivered with a French accent, a Brazilian accent, a Korean accent, that is the sound of someone showing up fully for the people they love. It is more compelling than a technically perfect speech from someone who is clearly on autopilot.\n\nYou belong up there. Now let us make the practical side easier.",
      },
      {
        heading: 'Write the Speech in Your Native Language First',
        level: 2,
        content:
          "If writing directly in English feels like pushing through mud, start in your native language. Get the feelings, the stories, and the structure right in the language where your thoughts flow naturally.\n\nThen translate. Not word for word, because idioms and phrases rarely survive direct translation. Capture the meaning and emotion of each section and express it in simple, clear English.\n\nThis approach keeps the emotional core authentic. When you try to write directly in English, you might reach for words that sound impressive but do not feel like you. When you start in your language and translate the heart of it, the result sounds genuine.\n\nIf you are bilingual enough to write in English from the start, go for it. But keep the vocabulary simple and the sentences short. You are not here to demonstrate your English skills. You are here to connect with people.",
      },
      {
        heading: 'Simple English Is Better English (For Speeches)',
        level: 2,
        content:
          "Even native speakers should use simple language in speeches. For non-native speakers, this matters even more. Short sentences are easier to deliver, easier to understand, and honestly more powerful.\n\nCompare: \"It has been an extraordinarily remarkable privilege to have borne witness to the blossoming of their relationship over the course of the preceding several years.\"\n\nWith: \"I have watched these two fall in love. And it has been one of the best things I have ever seen.\"\n\nThe second version is clearer, more emotional, and much easier to say. Short sentences also create natural pause points, which help with pacing and nerves.\n\nAvoid idioms that might trip you up. \"They really hit it off\" or \"she swept him off his feet\" are pronunciation landmines. Say what you mean directly: \"They liked each other immediately\" or \"He fell completely in love with her.\" Direct language is almost always better language, regardless of what your first tongue is.",
      },
      {
        heading: 'Pronunciation: Focus on the Key Words',
        level: 2,
        content:
          "You do not need every word to be perfectly pronounced. You need the important words to be clear: names, places, and emotional keywords.\n\nIf there are English words in your speech that give you trouble, practice them specifically. Say them out loud twenty times. Ask a native speaker to say them so you can hear the correct pronunciation.\n\nOr replace the difficult word with an easier synonym. If \"extraordinary\" ties your tongue in knots, say \"amazing.\" If \"aisle\" keeps coming out wrong, say \"walked up to the altar.\" There is always a simpler option.\n\nPractice the names of everyone you mention. The couple, family members, places. Stumbling over a name is noticeable. Getting names right shows care and respect. If a name is genuinely difficult in your accent, ask the person how they prefer it said. They will appreciate that you asked.",
      },
      {
        heading: 'Use Your Native Language as a Secret Weapon',
        level: 2,
        content:
          "One of the most powerful things you can do is include a phrase, toast, or blessing in your native language. It is a moment that only you can provide.\n\nOpen or close with a traditional blessing or proverb from your culture. Say it in your language first, then translate. \"In my country, we say... which means...\"\n\nDescribe the couple using a word from your language that has no direct English equivalent. Every language has concepts about love, family, or connection that do not quite exist in English. Sharing one of these is a genuine gift to the room.\n\nYou could deliver a short section in your language, with an English summary after, especially at multicultural weddings where both families are present.\n\nThese moments get enormous reactions because they are genuine, cultural, and personal. Do not hide where you come from. Feature it. It is the thing nobody else in the room can offer.",
      },
      {
        heading: 'Pace Yourself (Slower Than You Think)',
        level: 2,
        content:
          "Every speaker should slow down. For non-native speakers, this is doubly true. A moderate accent delivered slowly is perfectly understandable. The same accent at speed becomes very hard to follow.\n\nPause between sentences. Most people need about ten seconds to tune into a new accent. After that, they follow along easily. Give them that adjustment time at the start.\n\nIf you see confused faces, slow down more. Do not speak louder. Speaking louder with an accent does not help comprehension. Speaking slower does.\n\nPractice with a timer. If your speech reads as three minutes on paper, plan for four to four and a half minutes spoken. The extra time accounts for a slower pace and the pauses you will naturally take. If you lose your place or stumble on a word, the slower pace gives you room to recover without the audience even noticing.",
      },
      {
        heading: 'Practice with a Native Speaker',
        level: 2,
        content:
          "If possible, deliver your speech to a native English speaker and ask for honest feedback. Not about your accent. About comprehension.\n\n\"Could you understand everything? Were there words that were unclear? Did any sentence confuse you?\"\n\nThis tells you exactly which parts need adjustment. Maybe one word is hard to catch. Maybe a sentence runs too long and loses clarity. Those are straightforward fixes once you know about them.\n\nIf you do not have a native speaker available, record yourself and listen back. Pretend you are hearing it for the first time. The spots where you cannot quite make out what you said are the spots to rework.",
      },
      {
        heading: 'Handling the Nerves of Speaking in a Second Language',
        level: 2,
        content:
          "Public speaking anxiety is hard enough in your own language. In a second language it is another level entirely. A few things that help.\n\nMemorize your opening and closing lines completely. If you start strong and end strong, the middle carries itself. Knowing your first sentence cold removes the scariest moment.\n\nBring detailed notes. This is not the time for minimal bullet points. If having more text on your card makes you feel safer, write more. Better to glance at notes frequently than to freeze because you cannot find the right English word mid-sentence.\n\nIf you stumble on a word, just say it again. \"They are... the most... dedicated... dedicated people I know.\" Nobody cares about the stutter. They care about the feeling behind it.\n\nAnd remember that the audience is already rooting for you. They can see the effort. That creates automatic goodwill before you have said a word.",
      },
      {
        heading: 'You Have Something Nobody Else in the Room Has',
        level: 2,
        content:
          "By speaking at this wedding in English when it is not your native language, you are doing something most of the native speakers in the room could never do in reverse. Could they give a speech in your language? Almost certainly not.\n\nYou are making an effort that goes beyond comfort because you love the couple enough to stand up and speak in their world, on their terms. That effort is the speech. The words matter, yes. But the act of standing up there, accent and all, searching for the right words to express what is in your heart, that is as eloquent as it gets.\n\nKeep it short, keep it simple, keep it sincere. Let your personality and your love for the couple carry the rest.",
      },
    ],
    ctaSupportingText: 'Get a speech that sounds like you',
    relatedExamples: ['indian-wedding-speech', 'irish-wedding-speech', 'latin-wedding-speech'],
    relatedArticles: ['wedding-speech-pacing', 'wedding-speech-notes'],
    tags: ['ESL', 'language'],
  },

  // ─── wedding-speech-day-of-checklist ───
  {
    slug: 'wedding-speech-day-of-checklist',
    title: 'The Day-Of Checklist: What to Do Before Your Wedding Speech',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech day of',
    metaDescription: "It's wedding day. Here's your hour-by-hour checklist from morning to microphone.",
    searchIntent: 'Day-of logistics',
    icon: '📝',
    readingTime: 5,
    sections: [
      {
        heading: 'The Day-Of Checklist: What to Do Before Your Wedding Speech',
        level: 2,
        content:
          "The speech is written. You have practiced it in the shower, in your car, and once at 1 AM to a very patient cat. But the day itself brings its own set of variables. What you eat, when you do your last read-through, how many glasses of champagne you accept during cocktail hour. All of it affects how you feel at the microphone.\n\nThis is the hour-by-hour plan. Follow it and you will arrive at the mic fed, sober enough, and as calm as anyone can reasonably expect to be on a day like this.",
      },
      {
        heading: 'Morning: The Calm Before the Storm',
        level: 3,
        content:
          "Read through your speech once. Once. Not seventeen times while stress-breathing into your coffee. You are refreshing your memory, not cramming for an exam you have already studied for.\n\nEat a real breakfast. Eggs, toast, something with substance. An empty stomach plus nerves plus champagne later is a recipe for disaster. \"I will grab something later\" is a lie and you know it.\n\nDo something physical. A walk, a quick workout, stretching. Nervous energy needs somewhere to go. Your body will thank you later when you are standing at the mic with steady hands instead of visibly trembling ones.",
      },
      {
        heading: 'Afternoon: Final Prep Without Overdoing It',
        level: 3,
        content:
          "If the ceremony is in the evening, the afternoon is a dangerous stretch of free time. Do not spend it rewriting your speech. Whatever you have is what you are going with. Last-minute rewrites create more anxiety than they solve.\n\nPrint a fresh copy of your speech or confirm your phone version works offline with the screen set to stay awake. Tuck it into whatever you are wearing. Jacket pocket, clutch, wherever it is accessible without a scavenger hunt.\n\nDo one final read-through out loud, standing up, at full volume. If you are at the venue, find a quiet corner and do it there. Hearing the words in the actual space does something for your confidence that bedroom practice cannot replicate.\n\nCharge your phone to 100% if you are reading from it. This sounds obvious until you are at 12% during cocktail hour and your speech is three apps deep.",
      },
      {
        heading: 'One Hour Before: Get Your Head Right',
        level: 3,
        content:
          "Guests are arriving. Drinks are circulating. Someone\'s aunt will corner you and say, \"Oh, are you giving a speech? I LOVE speeches!\" Smile. Nod. Escape.\n\nFind five minutes alone. Bathroom stall, your car, behind a tree. Box breathing works well: inhale four counts, hold four, exhale four, hold four. Do it five times. It sounds like nothing. It works like something.\n\nDo not start drinking during this window. One drink maximum, and only if it genuinely calms you without making you loose. Water is the smarter move. You can celebrate properly once the mic is back on the stand.\n\nKnow where the microphone is. Know where you will stand. Know who is introducing you or whether you are supposed to just stand up and go. Eliminating surprises eliminates a surprising amount of anxiety.",
      },
      {
        heading: '30 Minutes Before: Lock It In',
        level: 3,
        content:
          "Stop reading your speech. Put it away. You know it. If you do not know it by now, one more read will not change that. What will help is being present and enjoying the event for a few minutes like a normal guest.\n\nUse the bathroom. Not because you necessarily need to, but because you definitely do not want to need to mid-speech.\n\nCheck your appearance. Food in teeth? Tie straight? Hair cooperating? Collar lying flat? You are about to have a lot of eyes on you and a lot of cameras pointed your way.\n\nConfirm the timing with the DJ, MC, or coordinator. \"After the salad is cleared\" is a lot more useful than \"sometime during dinner.\" Knowing exactly when you are up removes one more unknown.",
      },
      {
        heading: '5 Minutes Before: The Final Countdown',
        level: 3,
        content:
          "Three slow, deep breaths. Shake out your hands. Roll your shoulders back. Unclench your jaw. You did not realise it was clenched. It was.\n\nGet your speech out and ready. Paper unfolded. Phone unlocked, note open, scrolled to the top, font bumped up one more size.\n\nRemind yourself of your opening line. Just the first sentence. That is the hardest part. Once you are past it, momentum takes over.\n\nLook at the couple. Remember why you are doing this. It is not a performance review. It is not a test. It is a gift. And you have already done the hard work to make it a good one.",
      },
      {
        heading: 'The Quick-Reference Pocket Checklist',
        level: 2,
        content:
          "Print this out and stick it in your pocket:\n\nMorning: Read speech once. Eat breakfast. Move your body.\n\nAfternoon: Print backup copy. One read-through out loud. Charge phone.\n\nOne hour before: Five minutes alone. Deep breathing. Locate the mic. One drink max.\n\n30 minutes before: Stop reading. Bathroom. Appearance check. Confirm your cue.\n\n5 minutes before: Three deep breaths. Open your notes. Remember your first line. Look at the couple.\n\nThe hard work is already done. Today is just delivery.",
      },
    ],
    ctaSupportingText: "Arrive prepared with a speech that's ready",
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech'],
    relatedArticles: ['wedding-speech-nerves', 'drinking-before-wedding-speech'],
    tags: ['checklist', 'day-of'],
  },

  // ─── public-speaking-anxiety-wedding-speech ───
  {
    slug: 'public-speaking-anxiety-wedding-speech',
    title: 'Public Speaking Anxiety and Wedding Speeches: A Practical Guide',
    category: 'Practice Guide',
    targetKeyword: 'public speaking anxiety wedding',
    metaDescription: 'Wedding speech anxiety is real. Here\'s a practical guide for anyone who finds it genuinely hard.',
    searchIntent: 'Clinical-level anxiety',
    icon: '💭',
    readingTime: 5,
    sections: [
      {
        heading: 'Public Speaking Anxiety and Wedding Speeches: A Practical Guide',
        level: 2,
        content:
          "There is a meaningful difference between normal nervousness and the kind of anxiety that wakes you up at 3 AM four weeks before the wedding. Normal nervousness means shaky hands and talking too fast. Real public speaking anxiety means your chest tightens at the thought of it, you have genuinely considered faking an illness, and you cannot eat properly the week before.\n\nIf you are in that second category, this is for you. Not the \"just picture everyone in their underwear\" advice. The practical, sometimes-clinical, here-is-what-actually-works kind. You agreed to give this speech because you love someone. Your anxiety does not get the final word.",
      },
      {
        heading: 'Understanding What Your Body Is Actually Doing',
        level: 2,
        content:
          "Public speaking anxiety is a fear response. Your brain treats standing in front of a crowd as a genuine physical threat and activates the same fight-or-flight system that would fire if something dangerous walked through the door. Adrenaline floods your system. Heart races. Mouth dries. Hands tremble. Voice shakes.\n\nThis is not a character flaw or a weakness. It is your nervous system doing what it was built to do, just in the wrong context. Understanding that does not cure anything, but it removes some of the shame. And shame makes everything worse.\n\nThe physical symptoms feed the mental ones. You notice your hands shaking, which increases your anxiety, which makes them shake harder. Breaking that loop is the practical goal.",
      },
      {
        heading: 'Talk to Your Doctor (Seriously)',
        level: 2,
        content:
          "If your anxiety is severe enough to affect your daily life in the weeks before the wedding, talk to your doctor. This is not dramatic. It is straightforward.\n\nBeta-blockers like propranolol are commonly prescribed for performance anxiety. They block the physical symptoms of adrenaline, so your heart stays calm, your hands stay steady, and your voice stays even. Your brain works perfectly. You are not sedated. Many professional musicians, surgeons, and speakers use them routinely.\n\nYour doctor might also discuss short-acting anti-anxiety medication for the day itself. These are stronger and do affect cognition, so they are not always right for a speech. Your doctor knows your situation better than any article does.\n\nHave this conversation weeks before the wedding. You want time to try any medication in a low-stakes setting first. Discovering a new medication\'s effects at the reception is not a good plan.",
      },
      {
        heading: 'Cognitive Behavioral Techniques That Actually Work',
        level: 2,
        content:
          "CBT is the gold standard for anxiety treatment, and some techniques work on your own. The core idea: your thoughts create your feelings, and you can challenge your thoughts.\n\nWhen your brain says \"everyone will judge me if I mess up,\" challenge it. Have you ever actually judged someone for being nervous at a wedding? Has anyone? The answer is almost certainly no. Wedding audiences are the most forgiving crowd you will ever face.\n\nCatastrophising is the big one. Your brain jumps to the worst possible outcome and treats it as certain. \"I will freeze, forget everything, stand in silence, and ruin the wedding.\" Walk through that scenario honestly. Even if you froze (unlikely), someone would step in, the moment would pass, and the wedding would continue. It would not be ruined. It would not even be what people remember most.\n\nWrite your anxious thoughts down and write the rational response next to each one. It feels silly doing it. It works anyway. That is sort of the whole deal with CBT.",
      },
      {
        heading: 'Desensitization: Practice in Progressively Scarier Settings',
        level: 2,
        content:
          "Exposure therapy is the other evidence-based approach, and you can do a version of it yourself.\n\nWeek one: read your speech alone in your room. Out loud, standing up.\n\nWeek two: read it to one person you trust completely. Your partner, your best friend, your mum.\n\nWeek three: read it to a small group. Three or four people. Video call works if that is easier.\n\nWeek four: read it to a slightly bigger group. Or at the rehearsal dinner if there is one.\n\nEach time, your brain learns that the feared outcome does not happen. You survive. You might even enjoy a moment of it. The anxiety decreases gradually, and by the wedding day you have already delivered this speech multiple times. It is familiar. Familiar is the opposite of terrifying.",
      },
      {
        heading: 'Day-Of Strategies for Managing Symptoms',
        level: 2,
        content:
          "Even with preparation, the day will bring anxiety. That is expected. Here is how to manage it in the moment.\n\nSlow breathing is your best tool. Before your speech, find a quiet spot and do five minutes of diaphragmatic breathing. Inhale for four counts through your nose, exhale for six counts through your mouth. The longer exhale is the key. It activates your parasympathetic nervous system, which is the calming one.\n\nCold water on your wrists or the back of your neck triggers the dive reflex, which slows your heart rate. It sounds like folklore but it is backed by research.\n\nHave a glass of water at the podium. Sipping buys a natural pause, helps with dry mouth, and gives you something to do with your hands if you blank for a moment.\n\nYour voice might shake for the first few sentences. It almost always steadies out. If you can push through those first 15 seconds, the rest gets noticeably easier. That first sentence is the summit. Everything after is downhill.",
      },
      {
        heading: 'Give Yourself Permission to Make It Short',
        level: 2,
        content:
          "A short speech is a great speech. Two minutes is plenty. One minute is fine. If standing up and saying \"I love you both, and I am so happy for you\" is what you can manage, that is a beautiful toast.\n\nYou do not have to be funny. You do not have to tell a long story. You do not have to perform. You have to show up and say something genuine. The bar is so much lower than your anxiety is telling you.\n\nWrite a speech that is comfortable for your limits, not one that meets some imaginary standard. If three paragraphs is your maximum, that is your speech. No one in the room is timing you. No one will go home wishing it had been longer.",
      },
      {
        heading: 'When to Consider Not Giving the Speech',
        level: 2,
        content:
          "If your anxiety is severe enough that giving this speech would be genuinely traumatic, it is okay to have an honest conversation with the couple.\n\nMost couples would rather you be happy and present at their wedding than suffering through a panic attack at the microphone. There are alternatives. Write a letter they read privately. Give a joint toast with someone else. Record a video message in advance.\n\nThis is not giving up. It is knowing yourself and being honest about it. The couple asked you because they love you, not because they need a performance.\n\nThat said, most people with anxiety are capable of more than they believe. The anxiety says you cannot do it. It is almost always wrong. Get the support you need, prepare thoroughly, and give yourself a real chance before deciding it is not possible. You might surprise yourself. And if you do not, the alternatives are still there.",
      },
    ],
    ctaSupportingText: 'Get a speech that takes the pressure off',
    relatedExamples: ['short-sweet-speech', 'father-of-bride-speech'],
    relatedArticles: ['hate-public-speaking-wedding-speech', 'wedding-speech-nerves'],
    tags: ['anxiety', 'mental health'],
  },

  // ─── wedding-speech-without-crying ───
  {
    slug: 'wedding-speech-without-crying',
    title: "How to Give a Wedding Speech Without Crying (If That's What You Want)",
    category: 'Practice Guide',
    targetKeyword: 'how to give wedding speech without crying',
    metaDescription: "Some want to cry. Others don't. Here's how to stay composed.",
    searchIntent: 'Wants to maintain composure',
    icon: '😌',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Give a Wedding Speech Without Crying (If That\'s What You Want)',
        level: 2,
        content:
          "Crying during a speech is not a failure. Half the room is probably already in tears before you start. But if you want to get through yours with dry eyes and a steady voice, that is a legitimate goal and there are real techniques for it.\n\nMaybe you are the parent who knows you will lose it at \"I am so proud of you.\" Maybe you are the friend who cannot talk about the bride without your voice cracking. Maybe you just want to land the jokes without sounding like you are reading them through a windscreen in the rain. Whatever the reason, here is what actually works.",
      },
      {
        heading: 'Why We Cry During Speeches (The Science Bit)',
        level: 2,
        content:
          "Crying is triggered by your autonomic nervous system. Strong emotion signals the lacrimal glands and tears happen. The trigger is usually a specific thought or memory, not the general situation.\n\nThat matters. It means you can identify your crying triggers in advance. It is not the whole speech that will get you. It is that one line about your dad. The moment you look at the bride and remember her at age five. A specific sentence or image that tips you over the edge.\n\nOnce you know where the landmines are, you can prepare for each one. That is the entire strategy. No tricks, no gimmicks. Just preparation targeted at the specific moments that will break you.",
      },
      {
        heading: 'Practice the Emotional Parts Until They Bore You',
        level: 2,
        content:
          "This is the most effective technique by a wide margin. Read your speech out loud over and over, especially the emotional sections. The first time, you will cry. The fifth time, you will get misty. The fifteenth time, you will feel almost nothing.\n\nYour brain habituates to the emotional stimulus. The words become familiar, and familiar things do not trigger the same intensity. Professional actors use this principle constantly.\n\nThe catch: you need to practice at full voice and full emotion. Mumbling through it in your head does not count. Stand up, project, say the words like you mean them. Your body needs to rehearse the physical act of speaking those sentences without crying. Silent reading does not train that.\n\nIf you are still getting emotional after twenty read-throughs of a particular line, that line might need rewording. More on that below.",
      },
      {
        heading: 'Physical Tricks That Actually Work in the Moment',
        level: 3,
        content:
          "When tears are approaching, you need to interrupt the physical process.\n\nPress your tongue hard against the roof of your mouth. This activates different nerves and can short-circuit the crying reflex. Nobody will notice you doing it.\n\nTake a slow sip of water. Swallowing is physically incompatible with the lump-in-throat feeling. Keep a glass at the podium for exactly this purpose.\n\nLook up slightly. Shifting your gaze from your notes to a spot on the back wall makes it physically harder for tears to form. It also looks like you are gathering your thoughts.\n\nClench your toes inside your shoes. This redirects your brain to a physical sensation and breaks the emotional spiral. Invisible. Surprisingly effective.\n\nBreathe out slowly through your mouth. The urge to cry usually comes with held breath. A long, controlled exhale resets your system. If you feel tears building, exhale before doing anything else.",
      },
      {
        heading: 'Restructure Your Speech to Defuse the Bombs',
        level: 2,
        content:
          "If a line makes you cry every time in practice, you have options beyond powering through it.\n\nReword it. A slight rephrasing can remove just enough emotional punch. \"Dad would have loved this\" hits differently than \"I know Dad is watching.\" Same sentiment, different charge.\n\nMove the emotional peak. If the most tear-inducing moment is at the end, consider putting it earlier, when adrenaline is high and keeping tears at bay. Or put a joke right before the emotional section so you are transitioning from laughter, which is a harder state to cry from.\n\nInsert a bridge sentence before the emotional part. \"I want to share something that means a lot to me.\" It signals your brain to brace. It gives you a beat to set your composure. It is a small thing that makes a real difference.\n\nAnd if none of this works for one particular line, consider whether that line needs to be spoken at all. Sometimes the most emotional thing is better written in a card they read privately.",
      },
      {
        heading: 'The \"Pressure Valve\" Technique',
        level: 2,
        content:
          "This one is counterintuitive: acknowledge the emotion before it overwhelms you. If you feel tears building, pause and say \"Okay, I promised myself I would not do this\" or \"Give me a second.\" The audience laughs. You get a moment to breathe. The pressure releases.\n\nCrying often escalates from trying to suppress it. When you name the emotion and give yourself permission to feel it, the urgency decreases. Like opening a valve before the pressure gets dangerous.\n\nPlenty of great speeches include a moment where the speaker pauses to collect themselves. It is not a flaw. It is proof that the words mean something. But if staying composed is your goal, naming the emotion paradoxically gives you more control over it, not less.",
      },
      {
        heading: 'What If You Cry Anyway?',
        level: 2,
        content:
          "You might. Even with every technique in this article, you might hit that one line and the tears come.\n\nIf it happens: pause. Breathe. Sip water. Look at your notes. The room will wait. Most of them will be reaching for their own tissues.\n\nThen keep going. Your voice might wobble for a sentence or two, then it will steady out. The audience is not judging you. They are feeling it with you.\n\nA speech delivered with tears is still a speech delivered. Whether your eyes are dry or streaming, you showed up and said something real. The couple is not going to remember your composure score. They are going to remember that you stood up for them.",
      },
    ],
    ctaSupportingText: "Practice a speech you've already perfected",
    relatedExamples: ['mother-of-bride-speech', 'father-of-bride-speech', 'emotional-wedding-speech'],
    relatedArticles: ['crying-during-wedding-speech', 'wedding-speech-nerves'],
    tags: ['crying', 'composure'],
  },

  // ─── introvert-wedding-speech ───
  {
    slug: 'introvert-wedding-speech',
    title: "How to Give a Wedding Speech If You're an Introvert",
    category: 'Practice Guide',
    targetKeyword: 'introvert wedding speech',
    metaDescription: "Introverts give some of the best speeches, because they mean every word.",
    searchIntent: 'Introverted',
    icon: '🤫',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Give a Wedding Speech If You\'re an Introvert',
        level: 2,
        content:
          "Being an introvert does not mean you are bad at public speaking. It means social situations drain your energy instead of fuelling it. Those are very different things. Some of the best speechwriters in history were introverts. They just needed a dark room and twelve hours of silence afterward.\n\nThe challenge is not that you cannot give a great speech. It is that the whole wedding context, the socialising, the small talk, the being \"on\" for hours, is exhausting. Then somewhere in the middle of all that, you have to stand up and address everyone. The solution is energy management, not personality transplant.",
      },
      {
        heading: 'Your Introvert Superpowers (Yes, Really)',
        level: 2,
        content:
          "Introverts tend to write better than they improvise. That is a massive advantage for wedding speeches, because writing is 90% of the work. If you can craft a thoughtful, genuine speech on paper, you are already ahead of the extrovert who is planning to \"just wing it.\" That person is going to ramble for eight minutes and think it went great.\n\nYou are also more likely to be observational and specific. While the extrovert tells a generic story about \"all the good times,\" you notice the small, real moments. The way the groom's voice changes when he talks about the bride. The specific Tuesday night that changed everything. That is where the tears come from.\n\nYou probably also hate filler and fluff. Good. Your speech will be tight. No rambling, no padding, no \"I could go on and on\" followed by going on and on. No one wants a 12-minute speech, even if it is good. Short and meaningful beats long and generic every time.",
      },
      {
        heading: 'Plan Your Energy Like a Resource',
        level: 2,
        content:
          "Treat your social energy like a phone battery on wedding day. You know it is finite. Plan accordingly.\n\nIf your speech is during dinner, conserve during the ceremony and cocktail hour. You do not have to work the room. Find one or two people you are comfortable with and stick with them. Or disappear for 15 minutes. Nobody is taking attendance at cocktail hour.\n\nBuild in alone time before your speech. Even five minutes in a bathroom stall or sitting in your car with earbuds in makes a real difference. The goal is to arrive at the microphone with enough battery for three minutes of speaking.\n\nAfter your speech, give yourself permission to decompress. You just did a hard thing. You do not owe anyone small talk for the next hour. If someone wants to congratulate you, say thanks and move on.",
      },
      {
        heading: 'Write for Spoken Word, Not for a Page',
        level: 2,
        content:
          "Introverts often write beautifully in a way that reads better on paper than it sounds out loud. Wedding speeches need to be conversational, even if that feels less polished.\n\nRead your speech out loud as you write it. If any sentence feels like something you would put in an email but never actually say, rewrite it. \"It is with great pleasure that I\" becomes \"I am really happy to.\" Natural language wins.\n\nUse short sentences. They are easier to deliver, easier to remember, and easier for the audience to follow. A long, complex sentence that looks elegant on the page becomes a tongue-twisting marathon at a microphone, especially if your nerves are up.\n\nWrite transitions the way you actually talk. If you would normally say \"So anyway\" or \"But here is the thing,\" those are perfectly good speech transitions. Do not try to sound like someone else. The audience knows you. Sound like you.",
      },
      {
        heading: 'You Don\'t Have to Be the Entertainer',
        level: 2,
        content:
          "Extroverts give speech-as-performance. Big energy, lots of jokes, playing to the crowd. That works for them. It does not have to be your approach.\n\nA quiet, sincere speech can be the most powerful thing anyone hears all night. You do not need punchlines. You do not need crowd work. You need honesty and specificity.\n\nTell one real story. Say one true thing about the couple. Wish them well. That is a complete speech. The room does not need you to be a comedian. They need you to be you.\n\nSome of the most memorable speeches happen when someone who is clearly nervous and clearly not a performer delivers something that clearly comes from the heart. That authenticity outweighs any practised joke. If your voice shakes a little, it just makes it more real.",
      },
      {
        heading: 'Use Notes. Don\'t Apologize for It.',
        level: 2,
        content:
          "Some introverts feel pressure to memorise their speech because reading from notes seems lesser. Forget that. Notes are your safety net, and safety nets reduce anxiety, which is the entire point.\n\nPrint your speech in 16-point minimum, double-spaced, one side of the paper. You want to glance down and find your place instantly, not squint at a wall of tiny text while 100 people watch you search.\n\nDo not read it word for word like a hostage statement. Glance down for the next thought, look up, deliver it to actual people. Down, up, speak. Down, up, speak. This looks natural and gives you the security of knowing your next line is always right there.\n\nLiterally nobody in the audience cares that you have notes. They are too busy listening to what you are saying to critique your format.",
      },
      {
        heading: 'A Note on Alcohol',
        level: 2,
        content:
          "Introverts are especially vulnerable to the liquid courage trap. One drink to loosen up, then another because the first helped, and suddenly you are giving a speech that is looser than you planned.\n\nIf you drink, have one. Actually one. Before your speech. Then water until you are done.\n\nOr do not drink at all. Plenty of great speeches have been given stone sober. There is no rule that says alcohol makes you more personable. You are already personable. You just save it for the people who matter.\n\nThe post-speech drink is the one that counts anyway. That is the one you actually enjoy, because the hard part is behind you and you can finally stop thinking about it.",
      },
    ],
    ctaSupportingText: 'Get a speech that suits your style',
    relatedExamples: ['short-sweet-speech', 'sentimental-speech', 'father-of-groom-speech'],
    relatedArticles: ['hate-public-speaking-wedding-speech', 'wedding-speech-nerves'],
    tags: ['introvert', 'personality'],
  },

  // ─── build-confidence-wedding-speech ───
  {
    slug: 'build-confidence-wedding-speech',
    title: 'How to Build Confidence for Your Wedding Speech (Starting Now)',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech confidence',
    metaDescription: "Confidence isn't something you have or don't. Here's how to build it.",
    searchIntent: 'Weeks out, building up',
    icon: '💪',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Build Confidence for Your Wedding Speech (Starting Now)',
        level: 2,
        content:
          "Confidence is not a personality trait you either have or lack. It is a thing you build, deliberately, through repetition. Whether the wedding is six months away or two weeks out, you can measurably increase your confidence before you reach that microphone.\n\nThere are no shortcuts. You cannot manifest it. You cannot buy it. You cannot fake it well enough for it to matter. But you can build it through preparation, practice, and a few mindset shifts that hold up when the room gets quiet and everyone looks at you.",
      },
      {
        heading: 'Confidence Comes from Preparation, Not Personality',
        level: 2,
        content:
          "The most confident speakers you have seen are not confident because they are naturally bold. They are confident because they did the work. They know their material cold. They have practised until the words feel automatic. They have thought about what could go wrong and have a plan for each scenario.\n\nThis means confidence is a preparation problem. And preparation is something you control.\n\nFinish your speech early. Not the night before. Not the week of. As early as possible. A finished speech sitting in your notes app for three weeks does more for your confidence than a perfect speech written at 2 AM the night before. A joke that does not land because you are reading it for the first time? That is a preparation failure, not a talent issue.",
      },
      {
        heading: 'The Practice Ladder',
        level: 2,
        content:
          "Practice in stages. Each one builds on the last, and by the top, speaking in front of 150 people feels like a manageable step instead of a cliff.\n\nStage 1: Read it silently. Familiarise yourself with the flow.\n\nStage 2: Read it out loud, alone. Stand up. Normal speaking voice. Time it.\n\nStage 3: Record yourself on your phone. Play it back. Cringe. Then notice it is actually fine. Maybe even good.\n\nStage 4: Deliver it to one person. Someone safe. Ask for honest feedback but also ask what worked.\n\nStage 5: Deliver it to three to five people. This simulates real pressure while keeping it manageable.\n\nStage 6: Deliver it at the rehearsal dinner or in the actual venue if possible. The physical space matters more than you would expect.\n\nEach stage teaches your brain that saying these words out loud is survivable. By the wedding, you have already survived the speech multiple times. The actual event is just one more.",
      },
      {
        heading: 'Record Yourself and Actually Watch It',
        level: 2,
        content:
          "Nobody enjoys watching themselves on video. Do it anyway.\n\nSet up your phone, deliver your speech, watch it back. Your first reaction will be \"I look weird and my voice sounds wrong.\" That is just what everyone thinks. Push past it.\n\nWhat you will actually notice is that you look far more composed than you felt. The nervousness that feels enormous inside is barely visible outside. Your hands might shake a little. Your voice might waver for a moment. But you do not look like a disaster. You look like a normal person giving a speech.\n\nThat gap between how nervous you feel and how nervous you look is one of the most confidence-building discoveries available to you. Once you see it, you stop worrying about visible anxiety because you know it is mostly invisible. If you forget a line during the recording, even better. Watch yourself recover. You will see it is not the catastrophe your brain predicted.",
      },
      {
        heading: 'Reframe the Stakes',
        level: 2,
        content:
          "Your brain is telling you this speech has to be perfect. Your brain is wrong.\n\nThe bar for wedding speeches is remarkably low. Say something genuine about the couple. Do not insult anyone. Keep it under five minutes. Finish with a toast. That is success. You are not being graded. There is no wedding speech review committee.\n\nThe couple asked you because they love you, not because they expect a TED Talk. Your aunt does not care about your comedic timing. The groomsmen are not going to critique your pacing. Everyone in the room is on your side before you open your mouth.\n\nWhen you lower the stakes in your mind, confidence rises automatically. You are not performing surgery. You are saying nice things about people you love while holding a glass of champagne. You are already qualified for this.",
      },
      {
        heading: 'Build a Strong Opening',
        level: 2,
        content:
          "If the first ten seconds go well, momentum carries the rest. If they are shaky, you spend the whole speech trying to recover.\n\nMemorise your first two sentences. Not the whole speech. Just the opening. You want to look up, make eye contact, and deliver those lines without glancing at notes. This projects confidence immediately, even if your hands are shaking.\n\nChoose an opening that is comfortable for you. If humour is not your strength, do not start with a joke. Start with something genuine: \"For those who do not know me, I am Sarah's oldest friend. We have known each other since we were seven.\" Simple. Personal. True. That is confidence. You do not need a comedy set. You need a clean start.",
      },
      {
        heading: 'Visualization (The Kind That Actually Works)',
        level: 2,
        content:
          "There is a version of visualisation that is useless: sitting on a yoga mat imagining a standing ovation while you nail every line. That is not preparation. That is daydreaming.\n\nHere is the version that works: close your eyes and walk through the actual experience in realistic detail. You stand up. Your heart is beating fast. You walk to the mic. You look at your notes. You start speaking. Your voice shakes slightly. Then it steadies. You get a laugh at the joke. You see the bride tearing up. You finish. People clap. You sit down and exhale.\n\nNotice the nervousness in that scenario? That is the key. Effective visualisation includes the discomfort and your ability to handle it. You are imagining competence despite imperfection. That is realistic, and your brain believes realistic.",
      },
      {
        heading: 'The Day-Of Confidence Boost',
        level: 2,
        content:
          "On the day itself, a few quick wins give your confidence one last push.\n\nWear something you feel good in. Not just appropriate. Genuinely confidence-making. If your outfit fits well and you look sharp, you will stand taller without trying.\n\nDo a power pose in private. The research is debated. But standing in a bathroom with your arms up for two minutes at least gets you breathing, loosened up, and smiling at how absurd you look. That smile helps more than the pose.\n\nTalk to someone encouraging right before. Not someone who says \"do not be nervous\" (useless). Someone who says \"you are going to be great and I am excited to hear it.\" Borrow their confidence for a minute.\n\nYou have practised. You have prepared. You know the material. The rest is just standing up and delivering. And if you blank on a line or your voice cracks on the emotional bit, that is not failure. That is a human being giving a speech at a wedding. Which is exactly what you were asked to do.",
      },
    ],
    ctaSupportingText: 'Start building confidence right now',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech'],
    relatedArticles: ['wedding-speech-nerves', 'how-to-practice-wedding-speech'],
    tags: ['confidence', 'preparation'],
  },

  // ─── wedding-speech-after-loss ───
  {
    slug: 'wedding-speech-after-loss',
    title: 'Giving a Wedding Speech After Loss: When Grief and Joy Collide',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech grief loss',
    metaDescription: "Giving a speech when you're grieving is incredibly hard. Here's how to honor both.",
    searchIntent: 'Grieving speaker',
    icon: '🕊️',
    readingTime: 5,
    sections: [
      {
        heading: 'Giving a Wedding Speech After Loss: When Grief and Joy Collide',
        level: 2,
        content:
          "There is a specific kind of ache that comes with celebrating someone's happiest day while carrying grief for someone who should have been there. Maybe the groom's father passed away last year and you are the best man. Maybe the bride lost a sibling. Maybe the loss is your own, and you are standing up to speak while wishing someone was in the front row.\n\nThis will not pretend to make that easy. It is not easy. But your speech can honour both the joy of the day and the weight of the absence. Those two things can coexist. They have to, because that is what love looks like sometimes.",
      },
      {
        heading: 'Talk to the Couple First',
        level: 2,
        content:
          "Before you write anything, ask the couple how they want the loss acknowledged. This is not your decision to make alone.\n\nSome couples want the person mentioned by name. Pretending they are not missing someone feels worse than the sadness. Other couples have planned their own tribute, a reserved seat, a photo, a moment of silence, and prefer the speeches to focus on celebration.\n\nThere is no wrong answer, but it is their wedding and their grief and their call. Ask directly: \"Would you like me to mention [name] in my speech, or would you prefer I keep it focused on the two of you?\" They will be grateful you asked instead of guessing. Getting this wrong, in either direction, can make a hard day harder.",
      },
      {
        heading: 'How to Mention the Loss Without Derailing the Joy',
        level: 2,
        content:
          "If the couple wants the loss acknowledged, keep it brief and specific. One to three sentences. Enough to be meaningful, not so much that it becomes a eulogy. This is still a wedding speech.\n\nAnchor it in something positive. Instead of dwelling on the absence, connect the person to the joy. \"Tom's dad would have been the first one on the dance floor tonight, and I know he would be incredibly proud\" does two things at once: it names who is missing and imagines them in the celebration.\n\nAvoid euphemisms if the couple is comfortable with directness. \"Since we lost David\" is often more honest than \"since David went to a better place.\" Follow the couple's lead on language.\n\nIf your voice cracks during this part, that is okay. The room will hold that moment with you. If you cannot get through it at all, that is okay too. Pause, breathe, and either continue or skip to the next section. Nobody will think less of you.",
      },
      {
        heading: 'Where to Place the Mention in Your Speech',
        level: 2,
        content:
          "Placement matters more than you would think.\n\nEarly in the speech works well. It gets the emotional moment out of the way before stories and toasts. You acknowledge the loss, give the room a beat, then transition into celebration. \"Before I get into the embarrassing stories, I want to take a moment to remember someone who is very much with us in spirit today.\"\n\nNear the end, just before the toast, also works. It becomes the emotional peak before you raise your glass. \"As we celebrate tonight, I know there is someone watching who could not be prouder. To [name], and to the beautiful couple.\"\n\nAvoid placing it in the middle of a lighthearted section. Going from a funny story to a grief mention and back to humour creates tonal whiplash that is jarring for the audience and very difficult for you to navigate.",
      },
      {
        heading: 'Managing Your Own Emotions',
        level: 2,
        content:
          "If the loss is personal to you, speaking about it in front of a crowd is going to be hard. Allow for that.\n\nPractise the section about the loss more than any other part. Read it out loud, alone, over and over until you can get through it without breaking down. Repetition dulls the sharpness of the emotional trigger. It does not eliminate it, but it makes it manageable.\n\nHave a plan for if you do get emotional. A pause. A sip of water. A deep breath. The room will wait.\n\nConsider having a backup reader. If you truly cannot get through that section, arrange for a friend to step in and read those specific lines. There is no shame in that. It is actually one of the more thoughtful things you can plan for.",
      },
      {
        heading: 'When the Loss Is Very Recent',
        level: 2,
        content:
          "If the loss happened in the weeks or months immediately before the wedding, everything is amplified. The grief is raw. The couple is navigating an impossible emotional landscape. The wedding itself might feel surreal.\n\nIn this situation, less is more. A brief, honest acknowledgment may be all anyone can handle. \"I know this day has a bittersweet edge to it. We all feel it. But I also know that [name] would want nothing more than to see these two happy, and that is exactly what we are here to do.\"\n\nCheck in with the couple close to the wedding day, not just weeks before. Their feelings about how to handle the loss may have shifted as the day approaches.\n\nBe prepared for the possibility that they decide they do not want it mentioned at all. Fresh grief is unpredictable. They may need the speeches to be pure escape. Respect that completely, even if you had a beautiful passage prepared.",
      },
      {
        heading: 'Sample Language You Can Adapt',
        level: 2,
        content:
          "Sometimes a starting point makes all the difference.\n\nThe warm acknowledgment: \"I want to take a moment to remember [name], who would have loved every minute of today. [He/She/They] had a way of making every room brighter, and I think we can all feel that presence here tonight.\"\n\nThe quality connection: \"[Bride/Groom] gets [his/her/their] kindness from [parent's name]. And if you have ever been on the receiving end of that kindness, you know exactly what I mean. That legacy is very much alive in this room.\"\n\nThe brief and direct: \"We are missing someone important today. We all know that. But I think [name] would tell us to stop being sad and start dancing. So that is what we are going to do.\"\n\nThe toast inclusion: \"I would like to raise my glass to the couple, to everyone who made today possible, and to those who are here in spirit. We love you all.\"",
      },
      {
        heading: 'Be Gentle with Yourself',
        level: 2,
        content:
          "Giving a wedding speech while grieving is one of the hardest things a person can do. You are holding two enormous emotions at the same time and trying to articulate both in front of a crowd.\n\nYou do not have to do it perfectly. You do not have to be strong. You just have to be honest. If your voice cracks, that is fine. If you cry, that is fine. If you need to stop and breathe, that is fine too.\n\nThe person you are missing would be proud of you for showing up. The couple will be grateful you tried. And the room will hold you in that moment, because that is what people do at weddings when love and loss share the same space.",
      },
    ],
    ctaSupportingText: 'Get help putting it into words',
    relatedExamples: ['emotional-wedding-speech', 'father-of-bride-speech', 'sentimental-speech'],
    relatedArticles: ['mention-deceased-loved-one-wedding-speech', 'crying-during-wedding-speech'],
    tags: ['grief', 'loss', 'emotional'],
  },

  // ─── shy-person-wedding-speech ───
  {
    slug: 'shy-person-wedding-speech',
    title: "How to Give a Wedding Speech When You're the Shy One",
    category: 'Practice Guide',
    targetKeyword: 'shy wedding speech',
    metaDescription: "Being shy doesn't mean you can't give a beautiful speech.",
    searchIntent: 'Extremely shy',
    icon: '🙈',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Give a Wedding Speech When You\'re the Shy One',
        level: 2,
        content:
          "You are the quiet one. The one who listens more than talks. The one who would rather text than call. And somehow you agreed to speak into a microphone in front of everyone the couple has ever met.\n\nYou said yes because you love someone enough to do something that terrifies you. The couple did not pick you because you are a natural performer. They picked you because you matter to them. So let us work with what you have got, not what you wish you had.",
      },
      {
        heading: 'Shy and Bad at Public Speaking Are Not the Same Thing',
        level: 2,
        content:
          "Being shy means you are reserved in social situations. It says nothing about your ability to prepare and deliver a three-minute speech you have written in advance.\n\nShy people can be phenomenal speakers precisely because they take it seriously. You are not going to wing it. You are not going to ramble for ten minutes about nothing. You are going to prepare, say what you mean, and sit down. That already puts you ahead of most wedding speakers.\n\nThe challenge is the anxiety leading up to it and the energy it costs. Both are manageable. The actual standing-and-speaking part is the smallest piece of the puzzle.",
      },
      {
        heading: 'Write It Like a Letter',
        level: 2,
        content:
          "If \"giving a speech\" paralyses you, do not write a speech. Write a letter to the couple.\n\n\"Dear [Couple], I have been trying to figure out what to say today, and the truth is...\"\n\nThat framing removes the performance pressure. You are not crafting rhetoric. You are telling your friends how you feel. When you deliver it, you can even frame it that way: \"I wrote this as a letter because that felt more like me.\" The audience will love the honesty.\n\nSome of the most moving wedding speeches start with \"I am not great at this, so I wrote it down.\" Instant sympathy. Instant authenticity. The bar drops to \"just be real,\" and that is a bar you can clear without breaking a sweat.",
      },
      {
        heading: 'Keep It Short (Seriously)',
        level: 2,
        content:
          "A shy person's ideal speech is 90 seconds to two minutes. Four to six paragraphs. One story. One heartfelt statement. Done.\n\nNo one has ever left a wedding saying the shy person's speech was too short. They say \"that was so sweet and genuine.\" Short speeches get more credit than long ones because people respect brevity.\n\nA formula that works:\n\nParagraph 1: Who you are and your relationship to the couple.\nParagraph 2: One specific memory or quality.\nParagraph 3: What you have noticed since they got together.\nParagraph 4: Your wish for their future.\n\nThat is a complete, beautiful speech. You can write that. You can deliver that. And if you lose your place in paragraph 3, skip to paragraph 4 and nobody will know.",
      },
      {
        heading: 'Tricks to Feel Less Exposed',
        level: 2,
        content:
          "The worst part of being shy at a microphone is the feeling that everyone is staring at you. A few things reduce that feeling.\n\nDo not scan the crowd. Pick three or four friendly faces and alternate between them. Your best friend. Your partner. The bride's mum who is already crying. Speaking to specific people feels like conversation. Scanning feels like being on trial.\n\nHold something. Your speech, a glass, the podium edge. Having something in your hands solves the \"what do I do with my hands\" problem that shy people always face.\n\nStand near the couple if possible. Having familiar people next to you changes the energy completely. You are not alone up there.\n\nIf there is a podium, use it. The physical barrier between you and the audience is genuinely comforting. If there is no podium, standing near a table or any piece of furniture helps more than you would expect.",
      },
      {
        heading: 'The Power of Admitting You\'re Nervous',
        level: 2,
        content:
          "Saying \"I am nervous\" out loud is a cheat code. Half the pressure evaporates the moment you name it.\n\n\"Anyone who knows me knows that speaking in front of a crowd is not exactly my thing. But some people are worth being uncomfortable for, and [name] is definitely one of those people.\"\n\nTwo sentences. You have explained your nerves, made the audience root for you, and transitioned into why you are there. Your biggest weakness just became your strongest opening.\n\nThe audience does not want polish. They want realness. A shy person pushing through discomfort to honour a friendship is about as real as it gets. If your hands shake while you read, people will feel for you, not judge you.",
      },
      {
        heading: 'After the Speech: How to Recover',
        level: 2,
        content:
          "The moment you finish, relief will wash over you like nothing you have felt before.\n\nPeople will come up and say \"That was so great.\" Resist the urge to deflect with \"Oh, it was nothing\" or \"I was so nervous.\" Just say \"Thank you.\" Accept the compliment. You did something hard and you did it well.\n\nGive yourself permission to disappear for a bit. Bathroom, outside, quiet corner. You just burned a lot of social energy and you need to recharge. The party will still be there.\n\nAt some point during the night, you will realise you actually did it. That quiet pride, the kind a shy person feels after showing up and speaking from the heart, is something nobody can take from you. Enjoy the rest of the evening. You earned it.",
      },
    ],
    ctaSupportingText: 'Get a speech you can deliver comfortably',
    relatedExamples: ['short-sweet-speech', 'lighthearted-speech'],
    relatedArticles: ['introvert-wedding-speech', 'hate-public-speaking-wedding-speech'],
    tags: ['shy', 'personality'],
  },

  // ─── drinking-before-wedding-speech ───
  {
    slug: 'drinking-before-wedding-speech',
    title: 'How Much Should You Drink Before Your Wedding Speech?',
    category: 'Practice Guide',
    targetKeyword: 'drinking before wedding speech',
    metaDescription: "One drink to take the edge off? Fine. Three? You're a liability.",
    searchIntent: 'Needs liquid courage guidance',
    icon: '🍺',
    readingTime: 5,
    sections: [
      {
        heading: 'How Much Should You Drink Before Your Wedding Speech?',
        level: 2,
        content:
          "The line between \"pleasantly loosened up\" and \"slurring through a story about the groom's ex\" is thinner than anyone wants to admit. One drink and you are charming. Two and you think you are charming. Three and the videographer is capturing something that will haunt you.\n\nHere is what actually works, what does not, and where the line is.",
      },
      {
        heading: 'The One-Drink Rule (And Why It Exists)',
        level: 2,
        content:
          "One drink, consumed 20 to 30 minutes before your speech, takes the edge off without dulling your mind. Hands a little steadier. Social anxiety down a notch. You feel like relaxed you instead of terrified you. That is the sweet spot.\n\nThe problem is that one drink at a wedding is incredibly hard to maintain. Champagne flows during the ceremony. The bar is open at cocktail hour. Someone keeps handing you glasses. And anxiety makes you reach for the drink more often than you realise.\n\nThis is why you need a plan, not just willpower. Decide in advance: \"I will have one drink at cocktail hour, then water until after my speech.\" Tell someone to enforce it. Willpower is weakest when you are nervous, which is exactly when you need it most.",
      },
      {
        heading: 'What Two Drinks Does',
        level: 3,
        content:
          "Two drinks feels great. Warm, social, funny. You can feel anxiety melting. You think, \"This is the version of me that should give a speech.\"\n\nTwo drinks also slows your reactions, subtly slurs your words (even if you cannot hear it, the audience can), makes you speak faster than you realise, and impairs your judgment about whether you are impaired.\n\nTwo drinks is the zone where you start ad-libbing. Adding jokes that were not in the script. Going on tangents. Saying the thing you specifically decided not to say. It feels spontaneous and fun to you. To the audience it comes across as scattered and slightly too much.\n\nSome people handle two drinks and deliver a fine speech. But \"some people\" is not a risk management strategy. If you are reading an article about how much to drink before a speech, you are probably not one of those people.",
      },
      {
        heading: 'What Three-Plus Drinks Does',
        level: 3,
        content:
          "No.\n\nThree drinks before a wedding speech is how you end up in a video you did not consent to going viral. It is how inside jokes that are funny to two people get explained at length to 150. It is how the bride's grandmother learns about Cancun.\n\nAt three drinks you are not giving a speech. You are performing an improvised one-person show with no filter and no editor. It might be hilarious to you in the moment. It will not be in the morning.\n\nIf you have already passed two drinks and your speech is still coming, switch to water immediately. Eat something. Delay if you can. The stakes are too high to wing it buzzed.",
      },
      {
        heading: 'The Zero-Drink Option',
        level: 2,
        content:
          "Completely valid. Underrated.\n\nThe nervousness you feel without alcohol sharpens your focus, keeps you on script, and gives your delivery a raw, genuine energy that tipsy speakers cannot match. Plenty of people do not drink and give wonderful speeches.\n\nIf you do not drink, do not let anyone pressure you into it \"for courage.\" If you do drink but want to skip it for this one event, that is smart, not boring.\n\nHave a non-alcoholic drink in your hand so people stop asking. Club soda with lime looks like a gin and tonic. Nobody needs to know.",
      },
      {
        heading: 'Timing Your Drinking',
        level: 2,
        content:
          "If you are having one drink, timing matters.\n\nDo not drink too early. A drink at noon for a 6 PM speech does nothing for your nerves. It just means you drank at noon.\n\nDo not drink right before. You want the alcohol in your system, not hitting you mid-speech. Twenty to thirty minutes before is the window.\n\nAvoid shots. Someone will offer. It will seem like a fun bonding moment. Shots spike your blood alcohol fast and impair you faster than a slow glass of something. Always choose the slow option.\n\nEat before you drink. An empty-stomach drink at a wedding, where lunch was \"half a granola bar because I was too nervous,\" hits like a freight train. Eat real food first. Then your one drink. Then speak.",
      },
      {
        heading: 'The Real Talk',
        level: 2,
        content:
          "If you need more than one drink to give a speech, alcohol is not solving your problem. It is masking it. The real issue is anxiety, and there are better tools: practice, preparation, breathing techniques, or a conversation with your doctor about beta-blockers.\n\nAlcohol is a depressant that temporarily lowers inhibitions. It does not make you a better speaker. It makes you care less about being a bad one. That is a meaningful difference.\n\nThe best version of your speech is the one you deliver with full control of your faculties, full memory of the moment, and full ability to absorb the reactions of the people you love. One drink will not take that away. Three might. And the worst part of overdoing it is not the speech itself. It is waking up the next day and not being sure what you said.",
      },
      {
        heading: 'After the Speech',
        level: 2,
        content:
          "Once your speech is done, celebrate. It is a wedding. That is the point.\n\nThe relief of finishing your speech is the best feeling you will have all night. Follow it up with an actual drink, hit the dance floor, enjoy the evening knowing you did the hard thing.\n\nThe post-speech drink always tastes better than the pre-speech drink. That is the reward. Earn it sober.",
      },
    ],
    ctaSupportingText: 'Deliver sober, celebrate after',
    relatedExamples: ['funny-wedding-speech', 'best-man-speech'],
    relatedArticles: ['wedding-speech-nerves', 'wedding-speech-day-of-checklist'],
    tags: ['alcohol', 'practical'],
  },

  // ─── when-to-give-wedding-speech ───
  {
    slug: 'when-to-give-wedding-speech',
    title: 'When Should You Give Your Wedding Speech? (Timing Guide)',
    category: 'Practice Guide',
    targetKeyword: 'when to give wedding speech',
    metaDescription: "Before dinner? After cake? Here's when each person should speak.",
    searchIntent: 'Logistics',
    icon: '🕐',
    readingTime: 5,
    sections: [
      {
        heading: 'When Should You Give Your Wedding Speech? (Timing Guide)',
        level: 2,
        content:
          "A great speech at the wrong time dies quietly. Give it while the buffet line is forming and half the room is standing. Give it at 10 PM when everyone has been drinking for four hours and the dance floor is competing with you. The words barely matter if the timing is off.\n\nWhen you deliver matters almost as much as what you deliver. The good news is you can usually influence it, and knowing the options helps you advocate for the slot that sets you up to succeed.",
      },
      {
        heading: 'The Most Common Timing Options',
        level: 2,
        content:
          "There are four main windows for speeches at a typical reception.\n\nBefore dinner, during cocktail hour or as guests sit down. During dinner, between courses. After dinner, before the dancing starts. During the party, later in the evening.\n\nEach has trade-offs. Here is what actually happens in each slot so you can push for the one that works.",
      },
      {
        heading: 'Before Dinner: The Early Bird Slot',
        level: 3,
        content:
          "Speeches before dinner are increasingly popular, and for good reason.\n\nPeople are sober, attentive, and seated. Energy is high because the party just started. You get it over with early, which means you can actually enjoy your meal instead of pushing food around your plate while mentally rehearsing.\n\nThe downside: people might be hungry and a bit restless. If there are many speakers, you risk delaying dinner long enough that the goodwill evaporates. Hungry guests are not forgiving guests.\n\nBest for nervous speakers who want it done, weddings with multiple toasts, and couples who want to be fully present for the words instead of exhausted from five hours of celebration.",
      },
      {
        heading: 'During Dinner: The Classic Approach',
        level: 3,
        content:
          "The traditional model: first course served, first speech. Second course, second speech. Built-in breaks between speakers prevent fatigue.\n\nThe problem is you are competing with food. When the entree arrives, attention splits between your heartfelt words and the salmon. The kitchen is on a schedule, and sometimes your speech gets rushed or awkwardly delayed because the next course is ready. Silverware clinking is genuinely distracting.\n\nBest for weddings with two or three speakers maximum, sit-down dinners with clear courses, and couples who want a traditional structure.",
      },
      {
        heading: 'After Dinner: The Sweet Spot',
        level: 3,
        content:
          "Speeches after dinner but before the party kicks off is what most wedding planners recommend.\n\nPeople are fed, comfortable, and settled. They are not distracted by food or empty stomachs. The room is warm and receptive. There is a natural flow from dinner to speeches to dancing that just works.\n\nThe downside: some guests have had quite a bit to drink by this point, so the audience might be louder and more restless. If dinner ran long, people are ready to move and a lengthy speech will test their patience.\n\nBest for most weddings. If you have a choice and no strong reason to pick another slot, this is usually the one.",
      },
      {
        heading: 'During the Party: Proceed with Caution',
        level: 3,
        content:
          "Speeches later in the evening, between songs or as a surprise moment, are risky.\n\nThe energy is high and the mood is celebratory, which sounds good in theory. In practice, people are drunk. The dance floor is competing with the microphone. The couple is tired. Guests are scattered around the venue instead of seated. Getting people to be quiet feels like herding cats at a fireworks show.\n\nIf your speech is scheduled late, keep it under two minutes. The audience attention span has been drinking right along with them.\n\nBest for very short, very funny toasts. Not for anything heartfelt or nuanced. If your speech has a quiet emotional moment, it will get swallowed by the noise.",
      },
      {
        heading: 'How to Influence the Timing',
        level: 2,
        content:
          "If you are a key speaker, you usually have some input. Talk to the couple or the planner early: \"I want to make sure my speech lands well. Is there flexibility on when we do toasts?\" Most planners are happy to discuss it.\n\nIf you are nervous and want to go first, say so. Going first is actually easier because you set the tone instead of following someone else. Once you are done, the rest of the night is yours.\n\nIf there are multiple speakers, suggest going in order of relationship: parents, then wedding party, then others. This creates a natural flow and puts the most important speeches in front of the most attentive audience.",
      },
      {
        heading: 'The Universal Rule',
        level: 2,
        content:
          "Regardless of slot, never speak while people are being served, standing in a buffet line, or moving between activities. Wait until everyone is seated with plates on tables. Five minutes of patience can be the difference between a captive audience and 150 people wondering whether they should sit down or get more bread.\n\nAnd if you are the couple reading this: give your speakers a real moment. Do not squeeze speeches between the buffet and the first dance while caterers clear plates. Give them a slot. Get the DJ to quiet the room. They wrote something for you. The least you can do is give them an audience that is actually paying attention.",
      },
    ],
    ctaSupportingText: 'Get yours ready ahead of time',
    relatedExamples: ['rehearsal-dinner-speech', 'engagement-party-speech'],
    relatedArticles: ['wedding-speech-etiquette', 'wedding-speech-day-of-checklist'],
    tags: ['timing', 'logistics'],
  },

  // ─── how-to-print-wedding-speech ───
  {
    slug: 'how-to-print-wedding-speech',
    title: 'How to Print Your Wedding Speech (Format, Font, and Pro Tips)',
    category: 'Practice Guide',
    targetKeyword: 'print wedding speech',
    metaDescription: "Format your speech so you can read it under dim lighting with shaky hands.",
    searchIntent: 'Has draft, preparing',
    icon: '🖨️',
    readingTime: 5,
    sections: [
      {
        heading: 'How to Print Your Wedding Speech (Format, Font, and Pro Tips)',
        level: 2,
        content:
          "Printing your speech sounds like the simplest part of the process. It is not. There is a real difference between printing a speech and printing a speech you can actually read at a dimly lit venue with shaking hands while 150 people watch.\n\nThe formatting decisions you make now directly affect your composure at the microphone. A few minutes of thought here saves you from squinting, losing your place, or shuffling through pages like you are looking for a missing receipt.",
      },
      {
        heading: 'Font and Size: Bigger Than You Think',
        level: 2,
        content:
          "The number one mistake: printing in 12-point Times New Roman like a college essay. You are not submitting this for a grade. You are reading it under mood lighting with trembling hands.\n\nMinimum 16-point font. Honestly, 18 is better. You should be able to glance down and find your place instantly.\n\nUse a clean sans-serif font. Arial, Helvetica, Calibri. They are easier to read quickly than serif fonts. This is about readability under pressure, not typography preferences.\n\nBold key words or phrases that anchor each paragraph. When you glance down, your eyes land on the bold text first, which helps you find your place and remember what comes next. If you lose your spot mid-paragraph, a bolded anchor word gets you back in two seconds instead of ten.",
      },
      {
        heading: 'Spacing and Layout',
        level: 2,
        content:
          "Double-space the entire thing. Minimum. Some people triple-space and that is not overkill. You need white space so your eyes can track easily from line to line.\n\nOne-inch margins on all sides. Do not cram everything onto one page by shrinking margins. Multiple pages are fine.\n\nLeft-align everything. Do not justify the text. Justified alignment creates uneven word spacing that makes quick scanning harder.\n\nStart each new thought with a clear line break. When you pause in your speech, you should see the next section starting clearly on the page.\n\nPrint on one side only. Flipping pages to read the back while the audience watches you fumble with paper is not the look you want.",
      },
      {
        heading: 'Paper Choices That Actually Matter',
        level: 2,
        content:
          "Regular printer paper works fine. If you want to level up, use slightly heavier cardstock in the 24 to 32 lb range. It does not flop, it does not shake visibly when your hands tremble, and it feels more substantial.\n\nMatte, not glossy. Glossy catches light and creates glare under venue lighting. You will end up tilting the page back and forth trying to read through the reflection.\n\nNumber the pages in the bottom right corner: \"1 of 3,\" \"2 of 3.\" If you drop your papers (it happens more than you would think), you can reassemble them instantly instead of staring at three identical-looking sheets.\n\nDo not staple the pages. You want to slide the finished page behind the stack smoothly and silently. Stapled pages force a visible flip that distracts both you and the audience.",
      },
      {
        heading: 'Mark Up Your Printed Copy',
        level: 2,
        content:
          "Once printed, grab a pen and annotate. This is your performance copy, not a clean document.\n\nDraw a slash (/) for a brief pause. Double slash (//) for a longer pause, like after an emotional moment or before a punchline.\n\nUnderline words to emphasise. Circle spots where you need to look up at the audience.\n\nWrite \"SLOW DOWN\" at the top of the first page. You will talk too fast. Everyone does. Having it written there is a physical reminder every time you glance at your notes.\n\nIf there is a word you always stumble on, write the phonetic pronunciation next to it. Better to see \"juh-NAIR-us\" than to trip over \"generous\" for the third time while the room waits.",
      },
      {
        heading: 'The Phone Backup (Because Technology)',
        level: 2,
        content:
          "Always have a digital backup on your phone. Open it in a notes app, not a PDF that requires pinch-zooming. Increase the font size. Set screen timeout to never.\n\nBut treat the phone as backup, not primary. Reading from a phone looks less polished. Screen glare is distracting. And there is always the risk of a notification appearing mid-sentence. Nothing kills a heartfelt moment like a food delivery alert sliding across your screen.\n\nIf you must read from your phone, hold it at chest height. Waist-level reading means you are projecting your voice at the floor instead of the room.",
      },
      {
        heading: 'Print Two Copies',
        level: 2,
        content:
          "One for your pocket. One with a trusted friend or in your bag or car. If one gets lost, stained, or crushed during cocktail hour, you have a backup.\n\nThis is not paranoia. It is the same logic as bringing a phone charger. Redundancy is the enemy of anxiety.\n\nPrint a clean, unannotated copy for the couple afterward if they would like one. Some couples love having the written speeches as a keepsake. Nice paper, no scribbled notes. That is a thoughtful touch that costs nothing.",
      },
    ],
    ctaSupportingText: 'Export your speech as a print-ready PDF',
    relatedExamples: ['father-of-bride-speech', 'mother-of-bride-speech'],
    relatedArticles: ['wedding-speech-notes', 'wedding-speech-day-of-checklist'],
    tags: ['printing', 'format'],
  },

  // ─── what-to-wear-wedding-speech ───
  {
    slug: 'what-to-wear-wedding-speech',
    title: 'What to Wear While Giving a Wedding Speech (Practical Tips)',
    category: 'Practice Guide',
    targetKeyword: 'what to wear wedding speech',
    metaDescription: 'What you wear affects how you feel at the mic. A few practical tips.',
    searchIntent: 'Day-of prep',
    icon: '👔',
    readingTime: 5,
    sections: [
      {
        heading: 'What to Wear While Giving a Wedding Speech (Practical Tips)',
        level: 2,
        content:
          "For those few minutes at the microphone, you are the centre of attention. What you are wearing matters, not because people are judging your outfit, but because it directly affects how you feel, how you move, and how much of your brain is occupied by adjusting your clothes instead of delivering your speech.\n\nThis is not fashion advice. It is function advice. The right outfit lets you forget about your body and focus on your words. The wrong one gives you one more thing to worry about at the worst possible time.",
      },
      {
        heading: 'The Number One Rule: Wear Something You\'ve Worn Before',
        level: 2,
        content:
          "A wedding speech is not the time to debut a new outfit. That new suit might fit differently than expected. Those new shoes might pinch after an hour. That dress might ride up when you raise your arm to toast.\n\nWear something you know. Something you have sat in, stood in, and felt good in. Something that does not require tugging, adjusting, or wondering whether you look okay. Your brain needs to be on your speech, not on your collar.\n\nIf you did buy something new, wear it around the house for a few hours first. Sit in it. Stand in it. Practice your speech in it. Find the problems before 150 people watch you discover them. That suit jacket that looked great in the shop but restricts your arm movement? Better to know now.",
      },
      {
        heading: 'Pockets: Where to Put Your Speech',
        level: 2,
        content:
          "If you are reading from printed notes, you need somewhere to keep them. This matters more than it seems.\n\nSuits and sport coats: inside breast pocket. Hidden, accessible, one smooth pull to retrieve. Practice the pull.\n\nDresses without pockets: have a clutch at your table, or tuck the speech under your napkin until you are called up. Or have a friend hold it and hand it to you as you walk up. All fine options.\n\nDo not put your speech in your back pocket and sit on it through dinner. You will pull out a crumpled, damp mess. That is not confidence-inspiring.\n\nIf reading from your phone, make sure your outfit has accessible pockets. Fishing a phone out of a tiny jacket pocket while a room watches is not the smooth start you want.",
      },
      {
        heading: 'What to Avoid (From People Who Learned the Hard Way)',
        level: 2,
        content:
          "Anything that makes noise. Bangly bracelets, jangly earrings, chains that clink when you gesture. The microphone picks up everything, and your heartfelt moment becomes a percussion solo.\n\nAnything you will fidget with. If you play with rings, buttons, or necklaces when nervous, remove the fidget bait before you stand up.\n\nAnything requiring constant adjustment. Strapless tops that need tugging. Ties that will not stay centred. Shirts that untuck. Every adjustment pulls your focus from speaking to wardrobe management.\n\nNew shoes. Your feet will hurt within an hour, and standing at a mic with foot pain is a specific kind of misery. If new shoes are non-negotiable, break them in properly first. Walking around the shop for five minutes does not count.",
      },
      {
        heading: 'Colors and Patterns: Don\'t Upstage the Couple',
        level: 2,
        content:
          "During your speech you are the most photographed person after the couple. Stick to solid colours or subtle patterns. Bold prints look fine in person but can be distracting on camera and in photos. You want attention on your face and your words.\n\nAvoid white or ivory unless you want to become a cautionary tale people tell at other weddings. Avoid anything so attention-grabbing it pulls focus from the couple.\n\nThat said, do not be so subdued you feel like a dull version of yourself. Wear a colour that suits you. A style that feels like you. Confidence comes from feeling like yourself, not from wearing a costume. If you feel good, you stand taller. If you stand taller, you project better. The outfit is part of the delivery.",
      },
      {
        heading: 'The Final Check: What to Look For Before You Walk Up',
        level: 2,
        content:
          "Quick scan before you stand up.\n\nTeeth: nothing stuck.\nHair: cooperating.\nCollar and lapels: lying flat.\nShirt tucked properly if applicable.\nFly: check it. Learn this lesson privately.\nSpeech in hand or pocket.\nOther hand empty. Put down the drink. You need one hand for your speech and one free for gesturing and eventually raising a glass.\n\nYou look fine. Go give your speech.",
      },
    ],
    ctaSupportingText: 'Look good, sound better',
    relatedExamples: ['groom-speech', 'bride-speech'],
    relatedArticles: ['wedding-speech-day-of-checklist', 'wedding-speech-etiquette'],
    tags: ['outfit', 'practical'],
  },

  // ─── wedding-speech-etiquette ───
  {
    slug: 'wedding-speech-etiquette',
    title: 'Wedding Speech Etiquette: The Unwritten Rules Nobody Tells You',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech etiquette',
    metaDescription: "There are unwritten rules to wedding speeches. Here they are, written down.",
    searchIntent: 'Wants to follow protocol',
    icon: '📖',
    readingTime: 5,
    sections: [
      {
        heading: 'Wedding Speech Etiquette: The Unwritten Rules Nobody Tells You',
        level: 2,
        content:
          "Every guide says \"be yourself\" and \"speak from the heart.\" That leaves out the part where being yourself accidentally includes a story that makes the bride's mother leave the room. There are unwritten rules. You only learn them by watching someone break them and seeing the couple's faces change.\n\nHere they are, written down, so you are not that person.",
      },
      {
        heading: 'The Ex Rule',
        level: 2,
        content:
          "Do not mention exes. Not the groom's ex-girlfriend. Not the bride's ex-husband. Not as a joke. Not even if the couple brings it up themselves. Not even if the ex is at the wedding.\n\n\"I knew they were meant to be because after dating [ex], anyone would look good.\" No. Absolutely not.\n\nThe only acceptable reference to previous relationships is something extremely vague: \"I watched [bride] go through some tough times before she found [groom].\" And even that is pushing it. If your story needs a full backstory involving someone's ex, it is probably not the right story.",
      },
      {
        heading: 'The Time Rule',
        level: 2,
        content:
          "Five minutes maximum. Three is ideal. Two is fine.\n\nEvery story feels essential when you are writing. It is not. The couple and guests will enjoy a focused three-minute speech far more than a wandering seven-minute one. No one wants a 12-minute speech, even if it is good.\n\nThe problem with going long: you never realise you are doing it. The room gets restless, phones come out, and the bride is smiling politely while internally calculating when you will stop. Time your speech during practice. If it is over five minutes, cut. Ruthlessly.\n\nNobody in the history of weddings has complained that a speech was too short.",
      },
      {
        heading: 'The \"Roast\" Boundaries',
        level: 2,
        content:
          "Gentle teasing is great. A funny story the couple will laugh at is perfect. But there is a clear line between a roast and a humiliation, and a wedding is not the place to find out where it is.\n\nStories that are funny to tell should also be funny for the couple to hear. If the story makes the groom look stupid, immature, or like someone you would not want to marry, it does not belong in the speech. Even if he laughed about it last week over drinks.\n\nAvoid anything involving other people, bad decisions, or behaviour they have outgrown. What was funny at 22 is not necessarily funny at 32, and definitely not funny in front of grandma.\n\nThe test: would the couple be comfortable with their boss hearing this? If not, cut it. If you are not sure, cut it. The risk-reward ratio on edgy wedding material is terrible.",
      },
      {
        heading: 'The Alcohol and Drug References Rule',
        level: 2,
        content:
          "\"We were so wasted that night\" is not a charming wedding story. The audience includes parents, grandparents, coworkers, and possibly children. Read the room before you open your mouth.\n\nYou can reference a fun night out without itemising consumption. \"The night we all went out in Vegas and ended up at that terrible karaoke bar\" is fine. \"The night we did shots until 4 AM and [groom] threw up in a planter\" is not.\n\nSame goes for any substance references. A wedding speech is not the platform, regardless of legality. Save those stories for a private dinner. The videographer is recording and grandparents are listening.",
      },
      {
        heading: 'The Inside Joke Problem',
        level: 2,
        content:
          "Inside jokes are a trap. The three people who get it will laugh. The other 147 will sit in confused silence wondering what they missed.\n\nIf you want to include one, you have to set it up so the whole room understands. \"[Bride] and I have this thing where we...\" and then explain the context. If the explanation takes too long or the joke stops being funny once explained, it should not be in the speech.\n\nThe best speeches tell stories everyone can connect with, even guests who barely know the couple. Love, friendship, growth, loyalty. These are universal. \"Remember that thing with the hamster\" is not. If it requires more than one sentence of setup to make sense to a stranger, leave it out.",
      },
      {
        heading: 'Don\'t Make It About You',
        level: 2,
        content:
          "Your speech is about the couple. Not about your friendship journey. Not about how hard it was to write this speech. Not about your feelings about marriage in general.\n\nYour perspective matters, but the lens stays on the couple. \"I have known Sarah for 15 years\" is a fine setup. Spending three minutes on your shared history before mentioning the groom is not.\n\nA good rule: the couple's names should appear more often than yours. If you say \"I\" more than their names, rewrite.\n\nAnd do not use the speech to announce your own engagement, pregnancy, or life news. This happens more than you would believe. It is breathtakingly self-centred. If your story needs your backstory to make sense, it is probably not the right story for this moment.",
      },
      {
        heading: 'The Toast Is Not Optional',
        level: 2,
        content:
          "Every speech ends with a toast. Every one. It signals your speech is over and gives the audience something to do.\n\n\"Please raise your glass to [couple].\" Clear. Simple. Do not make it elaborate. Do not make people guess whether they should be drinking.\n\nWait for people to actually raise their glasses before delivering the final line. \"Everyone got a drink?\" is fine. Then the toast, a sip, and sit down.\n\nA speech without a toast is a runway without a landing. People just sit there, unsure if you are done, clapping hesitantly. Do not do that to them. Or to yourself.",
      },
      {
        heading: 'The Stuff Nobody Says Out Loud',
        level: 2,
        content:
          "Do not reference the cost of the wedding. Do not comment on how much anyone has been drinking. Do not mention divorce statistics. Do not make jokes about marriage being a ball and chain. Those jokes were tired in 1985.\n\nDo not address single guests with \"your turn will come\" energy. That is not the kindness you think it is.\n\nDo not wing it. Even confident, charismatic people should have something prepared. Impromptu wedding speeches go wrong more often than they go right. The person who says \"I will just speak from the heart\" is usually the person whose speech goes eight minutes too long and includes at least one moment everyone wishes they could forget.\n\nWhen in doubt, default to kindness. If you are not sure whether something is appropriate, it probably is not. Be generous, be warm, and leave the edgy material for the afterparty where there are no microphones and no grandmothers.",
      },
    ],
    ctaSupportingText: 'Get the etiquette handled automatically',
    relatedExamples: ['best-man-speech', 'groom-speech', 'father-of-bride-speech'],
    relatedArticles: ['wedding-speech-dos-and-donts', 'when-to-give-wedding-speech'],
    tags: ['etiquette', 'protocol'],
  },

  // ─── can-ai-write-wedding-speech ───
  {
    slug: 'can-ai-write-wedding-speech',
    title: 'Can AI Write a Wedding Speech? (Honestly, Yes, Here\'s How)',
    category: 'Speech Tips',
    targetKeyword: 'AI wedding speech',
    metaDescription: "Can AI write a good wedding speech? Honestly, yes, if you give it the right inputs.",
    searchIntent: 'Curious about AI, bottom-of-funnel',
    icon: '🤖',
    readingTime: 5,
    sections: [
      {
        heading: 'Can AI Write a Wedding Speech? (Honestly, Yes. Here\'s How)',
        level: 2,
        content:
          "Skip the part where we pretend this is controversial. It is 2026. AI writes wedding speeches. It writes them quickly, it writes them well, and millions of people are already using it.\n\nThe actual question is whether the result sounds like you, feels personal, and makes the couple react for the right reasons. That depends entirely on how you use it.",
      },
      {
        heading: 'What AI Does Really Well',
        level: 2,
        content:
          "Structure. AI is excellent at structure. It knows a speech needs an opening, a body, and a toast. It knows best man speeches have different expectations than father of the bride speeches. It knows how to pace a story, set up a joke, and land an emotional beat.\n\nIf you are staring at a blank page with 12 random memories and a lot of feelings, AI turns that into a coherent, well-paced speech in minutes. That alone justifies using it.\n\nAI also eliminates the blank page problem. The hardest part of writing anything is starting, and AI removes that obstacle completely. Even if you rewrite every word, having a draft to react to is infinitely easier than creating from nothing.\n\nTone is another strength. A good AI speech tool knows the difference between a heartfelt maid of honour speech and a funny best man roast. It adjusts vocabulary, humour level, and emotional intensity based on what the situation calls for.",
      },
      {
        heading: 'What AI Can\'t Do (Without Your Help)',
        level: 2,
        content:
          "AI does not know your stories. It can write a beautiful paragraph about friendship, but it cannot write about the time the bride called you from a petrol station in New Mexico at 2 AM because her car broke down and you drove four hours to get her. That is your material. That is what makes a speech unforgettable.\n\nAI also does not automatically capture your voice. If you naturally speak in short, punchy sentences and the AI gives you long, flowing paragraphs, it will not sound like you. The couple knows how you talk. If your speech sounds like it was written by a committee, people feel it even if they cannot name why.\n\nThe distinction that matters: \"let AI write my speech\" versus \"use AI to help me write my speech.\" The second approach produces something personal. The first produces something that sounds like every other AI-generated speech, which is increasingly a thing audiences can detect.",
      },
      {
        heading: 'How to Actually Use AI for Your Wedding Speech',
        level: 2,
        content:
          "The process that works.\n\nStep 1: Brain dump. Write down everything you might include. Stories, memories, qualities you admire, the moment you knew they were right for each other. Do not organise it. Just get it out of your head and onto a screen.\n\nStep 2: Feed it to the AI. Give it your raw material. Tell it who you are, best man, maid of honour, parent. Let it create a first draft. The more specific your inputs, the more personal the output.\n\nStep 3: Rewrite aggressively. The AI gives you structure and flow. You give it your voice. Change any sentence that does not sound like something you would actually say. Add details the AI could not know. Cut anything that feels generic or like it could be about any couple.\n\nStep 4: Practice out loud. This catches sentences that look fine on screen but feel unnatural spoken. Rewrite those in real time.\n\nThe result is a speech with professional structure and your authentic voice. If a joke does not land when you say it out loud, cut it regardless of how good it reads. The spoken version is the only one that matters.",
      },
      {
        heading: 'The \"Is It Cheating?\" Question',
        level: 2,
        content:
          "No.\n\nUsing AI to write a wedding speech is exactly as much \"cheating\" as using spellcheck on an email or following a recipe when cooking dinner. It is a tool. The intention, the love, and the effort are still yours.\n\nThe couple asked you to speak because they want to hear from you on their day. If AI helps you say what you mean more clearly and more concisely than you could alone, that is a better outcome for everyone.\n\nProfessional speechwriters have existed for centuries. Hiring one costs hundreds of dollars and nobody blinks. AI is a more accessible version of the same thing.\n\nA fully AI-generated speech that you did not personalise is not great, though. Not because it is cheating, but because it will lack the specific, real details that make a speech land. Put in the work to make it yours. The AI gives you clay. You still have to shape it.",
      },
      {
        heading: 'What to Look for in an AI Speech Tool',
        level: 2,
        content:
          "Not all tools are equal. A general chatbot can write a speech, but a purpose-built wedding speech tool does it better.\n\nCustomisation. The tool should ask about your relationship to the couple, specific stories, the tone you want, and details about the wedding. The more it asks, the more personal the output.\n\nTone control. You should be able to choose funny, heartfelt, short, long, formal, casual. One-size-fits-all output is a red flag.\n\nEditing support. The best tools help you refine, restructure, and polish after the first draft. A writing partner, not a vending machine.\n\nSpeech-specific knowledge. A tool built for wedding speeches understands conventions: length, topics to avoid, when to use humour versus sincerity, how to close with a toast. A generic AI might produce something that reads well but breaks three etiquette rules and runs nine minutes.",
      },
      {
        heading: 'How Nail The Speech Handles This',
        level: 2,
        content:
          "Full transparency: you are on our site, so yes, we are going to mention our tool.\n\nNail The Speech is built specifically for wedding speeches. We ask targeted questions about your relationship to the couple, the stories you want to include, and the tone you are after. Then we generate a personalised first draft that sounds like a real speech, not a template with names swapped in.\n\nThe part we think matters most: we do not just hand you a draft and disappear. The tool helps you refine and edit, so the final product is genuinely yours. Your stories, your voice, your emotions, just better organised and more polished than you might have managed alone at 2 AM the night before.\n\nWe built this because we have been there. Staring at a blank page, three weeks out, knowing we want to say something meaningful and having no idea where to start. AI does not replace the love behind your words. It helps you get them out.",
      },
      {
        heading: 'The Bottom Line',
        level: 2,
        content:
          "AI can write your wedding speech. The best version is a collaboration between AI and you. The technology handles structure, pacing, and polish. You bring the stories, the love, and the specific truths that only you know.\n\nThe result is a speech that sounds like you on your best day. Thoughtful, structured, personal. Delivered with confidence because you know the words are solid and the stories are real.\n\nThe couple will not know or care how you got there. They will just know it meant the world to hear you say those words. And you will actually remember saying them, which is more than can be said for the best man who had four drinks and winged it.",
      },
    ],
    ctaSupportingText: 'Try it yourself. Get started for free',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'father-of-bride-speech'],
    relatedArticles: ['how-to-write-a-wedding-speech', 'how-to-make-wedding-speech-personal'],
    tags: ['AI', 'product', 'bottom-of-funnel'],
  },

  // ─── how-to-practise-a-wedding-speech ───
  {
    slug: 'how-to-practise-a-wedding-speech',
    title: 'How to Practise a Wedding Speech (Step by Step)',
    category: 'Practice Guide',
    targetKeyword: 'how to practise a wedding speech',
    metaDescription: 'A step-by-step guide to practising your wedding speech out loud. Build confidence, nail your timing, and deliver it naturally on the day.',
    searchIntent: 'Has a draft, needs to prepare for delivery',
    icon: '🎙️',
    readingTime: 6,
    sections: [
      {
        heading: 'Why Practising Out Loud Changes Everything',
        level: 2,
        content:
          "Reading your speech silently is not practising. It feels like it is, but it is not.\n\nWhen you read silently, you skip over awkward phrasing, gloss past transitions, and imagine a smooth delivery that does not match reality. Speaking out loud is where you discover what actually works.\n\nYou will find sentences that look fine on paper but feel strange to say. You will notice where you naturally pause and where you rush. You will hear which stories land and which ones drag.\n\nThe goal is not to memorise every word. It is to get comfortable enough that you can look up, make eye contact, and sound like yourself.",
      },
      {
        heading: 'Step 1: Read It Through Once, Quietly',
        level: 2,
        content:
          "Before you start speaking, read your speech once to yourself. Just familiarise yourself with the flow.\n\nMark any words or phrases that feel clunky. If something reads awkwardly, it will sound worse out loud. Simplify it now.",
      },
      {
        heading: 'Step 2: Read It Out Loud, Alone',
        level: 2,
        content:
          "Find a private space. Close the door. Read your speech out loud from start to finish.\n\nDo not stop to correct things on the first pass. Just get through it. Notice how long it takes. A good wedding speech is usually 3 to 5 minutes. If yours runs over 7 minutes, it is too long.\n\nAfter the first read-through, go back and adjust anything that felt off. Shorten sentences that made you run out of breath. Cut lines that felt flat when spoken.",
      },
      {
        heading: 'Step 3: Time Yourself',
        level: 2,
        content:
          "Use a timer on your phone. Read at a natural pace, not too fast, not too slow.\n\nMost people speak at roughly 130 to 150 words per minute during a speech. A 4-minute speech is about 500 to 600 words.\n\nIf you are running long, cut content rather than speaking faster. A rushed delivery is worse than a shorter speech.",
      },
      {
        heading: 'Step 4: Practise Standing Up',
        level: 2,
        content:
          "This matters more than you think. Speaking while seated and speaking while standing feel completely different.\n\nStand up. Hold your notes or phone at a comfortable height. Practise looking up from your notes every few sentences. You do not need to memorise the speech, but you should know it well enough to glance up regularly.\n\nIf you will be holding a microphone, practise with something in one hand so you get used to managing notes and a mic at the same time.",
      },
      {
        heading: 'Step 5: Practise in Front of Someone',
        level: 2,
        content:
          "Once you have done 2 to 3 solo run-throughs, practise in front of one person you trust. A partner, a friend, a sibling.\n\nAsk them for honest feedback:\n\n- Did any part drag or feel slow?\n- Was the tone right?\n- Did the stories make sense?\n- Could they hear you clearly?\n\nThis is the closest you will get to simulating the real thing. It will feel awkward. That is the point. The awkwardness fades with repetition.",
      },
      {
        heading: 'Step 6: Listen Back',
        level: 2,
        content:
          "Record yourself on your phone and listen back. You will hear things you cannot catch in the moment.\n\nPay attention to pace, volume, and filler words. If you say \"um\" or \"like\" frequently, slow down and add deliberate pauses instead. A pause is always better than a filler word.\n\nNail The Speech includes a listen-back feature that lets you hear your speech read aloud, which helps you catch awkward phrasing before you practise.",
      },
      {
        heading: 'Step 7: Do 3 to 5 Full Run-Throughs',
        level: 2,
        content:
          "You do not need to practise 20 times. Three to five full run-throughs is enough for most people.\n\n- Run 1: Get familiar with the flow\n- Run 2: Focus on timing and pace\n- Run 3: Practise with notes and standing\n- Runs 4 to 5: Polish delivery and eye contact\n\nAfter 5 runs, you will know your speech well enough to deliver it confidently without reading every word.",
      },
      {
        heading: 'On the Day',
        level: 2,
        content:
          "Bring printed notes or index cards. A phone screen is fine but printed notes look better and do not run out of battery.\n\nTake a breath before you start. Look at the couple. Smile. Then begin.\n\nThe audience is on your side. They want you to do well. If you lose your place, pause, find your line, and carry on. Nobody will notice.",
      },
    ],
    ctaSupportingText: 'Get your speech ready to practise',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'father-of-bride-speech'],
    relatedArticles: ['wedding-speech-nerves', 'hate-public-speaking-wedding-speech', 'how-long-should-a-wedding-speech-be'],
    tags: ['practice', 'delivery', 'confidence', 'beginners'],
  },

  // ─── wedding-speech-checklist ───
  {
    slug: 'wedding-speech-checklist',
    title: 'Wedding Speech Checklist: Everything to Prepare Before the Big Day',
    category: 'Practice Guide',
    targetKeyword: 'wedding speech checklist',
    metaDescription: 'A complete wedding speech checklist covering writing, editing, practising, and day-of preparation. Everything you need before you stand up and speak.',
    searchIntent: 'Wants a simple checklist to make sure nothing is missed',
    icon: '✅',
    readingTime: 5,
    sections: [
      {
        heading: 'Why You Need a Checklist',
        level: 2,
        content:
          "Wedding speeches fail for one reason more than any other: lack of preparation.\n\nNot lack of talent. Not lack of stories. Lack of preparation. People leave it too late, skip the editing, never practise out loud, and then wonder why it felt off.\n\nThis checklist covers everything from first draft to the moment you stand up. Work through it and you will feel ready.",
      },
      {
        heading: '2 to 4 Weeks Before: Writing',
        level: 2,
        content:
          "- Decide on your role and what kind of speech you want to give\n- Gather your stories, memories, and key moments\n- Choose your tone: heartfelt, funny, balanced, or something else\n- Write or generate your first draft\n- Keep it between 3 and 5 minutes (roughly 400 to 650 words)\n- Include a clear opening, 1 to 2 stories, a message to the couple, and a toast\n- Remove anything that could embarrass or offend (exes, inside jokes, sensitive topics)",
      },
      {
        heading: '1 to 2 Weeks Before: Editing',
        level: 2,
        content:
          "- Read your speech out loud at least once\n- Cut anything that feels flat, repetitive, or too long\n- Check your speech makes sense to someone who does not know the couple well\n- Make sure your opening grabs attention\n- Make sure your ending is clear and lands with a toast\n- Get feedback from one trusted person\n- Finalise your draft and stop making changes",
      },
      {
        heading: '3 to 5 Days Before: Practising',
        level: 2,
        content:
          "- Do 3 to 5 full run-throughs out loud\n- Time yourself each time\n- Practise standing up and holding your notes\n- Record yourself and listen back at least once\n- Practise looking up from your notes every few sentences\n- If using a microphone, practise holding something in one hand",
      },
      {
        heading: 'The Day Before',
        level: 2,
        content:
          "- Print your speech or write it on index cards\n- Bring a backup copy on your phone\n- Do one final read-through, out loud, at a relaxed pace\n- Lay out your outfit and put your notes in your jacket pocket or bag\n- Get a good night of sleep\n- Limit alcohol at the rehearsal dinner",
      },
      {
        heading: 'On the Day',
        level: 2,
        content:
          "- Eat something before the reception\n- Stay hydrated\n- Limit drinks before your speech\n- Check the microphone works if there is one\n- Take a breath before you start\n- Look at the couple. Smile. Begin.\n- If you lose your place, pause and find your line. Nobody will notice\n- After you finish, raise your glass and sit down. You did it.",
      },
      {
        heading: 'Quick Reference',
        level: 2,
        content:
          "- Length: 3 to 5 minutes\n- Practice runs: 3 to 5 minimum\n- Notes format: printed or index cards (not phone if possible)\n- Key elements: opening, stories, message to couple, toast\n- Things to avoid: exes, inside jokes, anything that needs explaining",
      },
    ],
    ctaSupportingText: 'Start your speech and check it off the list',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'short-sweet-speech'],
    relatedArticles: ['how-to-practise-a-wedding-speech', 'wedding-speech-nerves', 'last-minute-wedding-speech'],
    tags: ['preparation', 'checklist', 'delivery', 'beginners'],
  },

  // ─── wedding-speech-for-a-friend ───
  {
    slug: 'wedding-speech-for-a-friend',
    title: 'How to Write a Wedding Speech for a Friend',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech for a friend',
    metaDescription: 'How to write a wedding speech for a friend, whether you are the best man, maid of honor, or just a close friend who has been asked to speak.',
    searchIntent: 'Friend giving a speech, may or may not be in wedding party',
    icon: '🫶',
    readingTime: 6,
    sections: [
      {
        heading: 'The Friend Speech Is Underrated',
        level: 2,
        content:
          "Friend speeches are some of the best speeches at any wedding. Why? Because you chose each other.\n\nFamily speeches carry expectation and tradition. Friend speeches carry something different: proof that someone outside the family thinks this person is worth celebrating. That carries real weight.\n\nWhether you are the best man, maid of honor, or a close friend who has been asked to say a few words, the approach is the same. Make it personal, keep it focused, and say something only you could say.",
      },
      {
        heading: 'Start With How You Met',
        level: 2,
        content:
          "The best opening for a friend speech is almost always the origin story. How did you become friends?\n\nThis does not need to be dramatic. \"We sat next to each other in biology class and bonded over both being terrible at it\" is a great opening. It is specific, visual, and immediately tells the audience who you are.\n\nAvoid generic openings like \"We've been friends for 15 years.\" That is a fact, not a story. Give the audience a scene they can picture.",
      },
      {
        heading: 'Pick One or Two Stories',
        level: 2,
        content:
          "You probably have hundreds of memories. Pick one or two that show who your friend really is.\n\nThe best stories reveal character. Not just \"we had a great time in Barcelona\" but \"when I lost my passport in Barcelona, she spent three hours on the phone to the embassy while I panicked, then bought me dinner and said it would make a great story one day.\"\n\nThat story tells the audience your friend is calm, generous, and loyal. It shows rather than tells.\n\nAvoid stories that:\n\n- Require five minutes of context to understand\n- Involve exes or dating history\n- Would embarrass the couple in front of family\n- Only make sense if you were there",
      },
      {
        heading: 'Talk About Their Partner',
        level: 2,
        content:
          "This is where friend speeches often fall short. You spend the whole speech talking about your friend and barely mention the person they are marrying.\n\nYou do not need to know their partner well to say something meaningful. Focus on what you have observed:\n\n- How your friend changed when they met this person\n- A specific moment you saw them together and thought \"this is the one\"\n- What their partner brings out in your friend\n\nEven a simple line like \"I have never seen her laugh the way she laughs around you\" says more than any grand statement about love.",
      },
      {
        heading: 'Close With Something Direct',
        level: 2,
        content:
          "End by speaking directly to the couple. Drop the performance and say something real.\n\nSomething like: \"You two are brilliant together. I am so glad you found each other. And I am so proud to be standing here today.\"\n\nThen raise your glass, propose a toast, and sit down. Clean ending. No rambling.",
      },
      {
        heading: 'If You Are Not in the Wedding Party',
        level: 2,
        content:
          "Being asked to speak as a friend outside the bridal party is a genuine honour. Keep it shorter than a best man or maid of honor speech. Two to three minutes is perfect.\n\nYou have more freedom because there is less expectation. You do not need to follow a traditional structure. Just speak honestly about your friend, acknowledge the couple, and raise a glass.",
      },
      {
        heading: 'Structure for a Friend Speech',
        level: 2,
        content:
          "1. Introduce yourself and your connection (1 to 2 sentences)\n2. Share how you became friends (the origin story)\n3. Tell one story that shows who they are\n4. Say something about their partner or their relationship\n5. A direct, sincere message to the couple\n6. Toast",
      },
    ],
    ctaSupportingText: 'Start your friend speech now',
    relatedExamples: ['childhood-friend-speech', 'college-friend-speech', 'close-friend-speech', 'work-friend-speech'],
    relatedArticles: ['how-to-write-a-wedding-speech', 'how-to-tell-story-wedding-speech', 'how-to-make-wedding-speech-personal'],
    tags: ['friends', 'role-specific', 'structure', 'beginners'],
  },

  // ─── ai-wedding-speech-writer ───
  {
    slug: 'ai-wedding-speech-writer',
    title: 'How to Use AI to Write a Wedding Speech (Without It Sounding Generic)',
    category: 'Speech Tips',
    targetKeyword: 'AI wedding speech writer',
    metaDescription: 'How to use AI to write a wedding speech that sounds personal and authentic. Tips for getting the best results from an AI speech generator.',
    searchIntent: 'Considering using AI, wants to know how to do it well',
    icon: '🤖',
    readingTime: 6,
    sections: [
      {
        heading: 'AI Can Write Your Speech. The Question Is How.',
        level: 2,
        content:
          "Typing \"write me a best man speech\" into ChatGPT will give you a speech. It will be grammatically correct, well structured, and completely forgettable.\n\nThe problem is not that AI cannot write. It is that AI without your input writes something generic. It fills in the blanks with safe, predictable content because it does not know your stories, your voice, or the couple.\n\nThe solution is not to avoid AI. It is to use it differently.",
      },
      {
        heading: 'Start With Your Stories, Not a Prompt',
        level: 2,
        content:
          "The single biggest mistake people make with AI speech tools is starting with a prompt instead of starting with their own material.\n\nBefore you touch any tool, spend 5 minutes answering these questions:\n\n- How did you meet the person you are speaking about?\n- What is one story that shows who they really are?\n- What changed when they met their partner?\n- What do you genuinely wish for them?\n\nThese answers are the raw material. Without them, any AI tool will produce filler. With them, it can produce something genuinely personal.",
      },
      {
        heading: 'Why Speaking First Works Better Than Writing',
        level: 2,
        content:
          "Most people find it easier to talk about someone they love than to write about them.\n\nWhen you write, you edit yourself in real time. You second-guess every sentence. When you speak, you relax. Stories come out more naturally. Details you had forgotten resurface.\n\nThis is why Nail The Speech starts with voice input. You talk through your memories and thoughts, and the AI structures them into a speech. The result sounds like you because it started with you.",
      },
      {
        heading: 'What Good AI Speech Tools Do Differently',
        level: 2,
        content:
          "Not all AI tools are the same. A good wedding speech tool should:\n\n- Ask specific questions about your role, the couple, and your relationship\n- Let you choose tone, length, and style\n- Use your actual stories and details in the output\n- Let you edit, refine, and regenerate sections\n- Produce a speech that follows wedding speech conventions (opening, stories, message, toast)\n\nA generic chatbot does none of these things. It gives you a template with names swapped in. A purpose-built tool gives you a personalised first draft you can actually work with.",
      },
      {
        heading: 'How to Edit an AI-Generated Speech',
        level: 2,
        content:
          "The first draft is never the final draft. After the AI generates your speech, read it out loud.\n\nLook for:\n\n- Sentences that sound too formal or too generic. Replace them with how you would actually say it.\n- Missing details. If the AI wrote \"we have had so many great times together,\" replace it with a specific example.\n- Tone mismatches. If something feels too sentimental or too casual, adjust it.\n- Length. Cut anything that feels like filler.\n\nThe goal is a speech that sounds like you on your best day. Structured, polished, and personal.",
      },
      {
        heading: 'The \"Is It Cheating?\" Question',
        level: 2,
        content:
          "No.\n\nUsing AI to help write a wedding speech is exactly as much \"cheating\" as using a recipe to cook dinner. It is a tool. The love, the stories, and the effort are still yours.\n\nProfessional speechwriters have existed for centuries. AI is a more accessible version of the same thing.\n\nThe couple asked you to speak because they want to hear from you. If AI helps you say what you mean more clearly, that is a better outcome for everyone.",
      },
    ],
    ctaSupportingText: 'Try the speech generator for free',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'father-of-bride-speech'],
    relatedArticles: ['how-to-write-a-wedding-speech', 'how-to-make-wedding-speech-personal', 'wedding-speech-structure'],
    tags: ['AI', 'product', 'bottom-of-funnel', 'beginners'],
  },

  // ─── wedding-speech-length-by-role ───
  {
    slug: 'wedding-speech-length-by-role',
    title: 'Wedding Speech Length Guide by Role',
    category: 'Speech Tips',
    targetKeyword: 'wedding speech length by role',
    metaDescription: 'How long should a wedding speech be for each role? Best man, maid of honor, father of the bride, and more. Ideal lengths with word counts.',
    searchIntent: 'Wants to know the right length for their specific role',
    icon: '⏱️',
    readingTime: 5,
    sections: [
      {
        heading: 'Length Matters More Than You Think',
        level: 2,
        content:
          "The number one complaint about wedding speeches is that they go on too long.\n\nNobody has ever left a wedding saying \"I wish the speeches were longer.\" Plenty of people have said the opposite.\n\nThe right length depends on your role, the couple's preferences, and the event format. Here is a practical guide for every common role.",
      },
      {
        heading: 'Best Man: 4 to 6 Minutes',
        level: 2,
        content:
          "The best man speech is usually the longest and most anticipated. You have the most room to tell stories and get laughs.\n\n- Word count: 500 to 800 words\n- Sweet spot: 5 minutes\n- Upper limit: 7 minutes (and that is pushing it)\n\nThe best man speech typically includes an introduction, one or two stories about the groom, a mention of the bride, and a toast. Five minutes gives you enough space for all of that without dragging.",
      },
      {
        heading: 'Maid of Honor: 3 to 5 Minutes',
        level: 2,
        content:
          "The maid of honor speech is typically a little shorter and more emotional than the best man speech.\n\n- Word count: 400 to 650 words\n- Sweet spot: 4 minutes\n- Upper limit: 6 minutes\n\nFocus on your friendship with the bride, one meaningful story, something about the couple together, and a heartfelt close. You do not need to match the best man's length.",
      },
      {
        heading: 'Father of the Bride: 3 to 5 Minutes',
        level: 2,
        content:
          "The father of the bride speech is traditionally one of the more emotional speeches. Keep it focused and sincere.\n\n- Word count: 400 to 650 words\n- Sweet spot: 4 minutes\n- Upper limit: 5 minutes\n\nWelcome the guests, share a memory of your daughter, say something about the couple, and close with a toast. Resist the urge to tell her entire life story.",
      },
      {
        heading: 'Father of the Groom: 2 to 4 Minutes',
        level: 2,
        content:
          "The father of the groom speech is usually shorter and less expected, which works in your favour.\n\n- Word count: 300 to 500 words\n- Sweet spot: 3 minutes\n- Upper limit: 4 minutes\n\nWelcome the bride to the family, share a brief story about your son, and close with a warm toast. Short and genuine always wins.",
      },
      {
        heading: 'Mother of the Bride or Groom: 2 to 4 Minutes',
        level: 2,
        content:
          "Mother speeches are becoming more common and they are almost always lovely. Keep them on the shorter side.\n\n- Word count: 300 to 500 words\n- Sweet spot: 3 minutes\n- Upper limit: 4 minutes\n\nSpeak from the heart about your child, welcome their partner, and keep it personal. You do not need to cover everything. One genuine moment is enough.",
      },
      {
        heading: 'Groom or Bride: 3 to 5 Minutes',
        level: 2,
        content:
          "If you are the bride or groom giving a speech, you are usually thanking people and saying something about your partner.\n\n- Word count: 400 to 650 words\n- Sweet spot: 4 minutes\n- Upper limit: 5 minutes\n\nThank your guests, your parents, the wedding party, and say something personal about your partner. Do not try to thank every individual person by name unless the guest list is small.",
      },
      {
        heading: 'Friends, Siblings, and Other Roles: 2 to 3 Minutes',
        level: 2,
        content:
          "If you are a friend, sibling, or other family member giving a speech, keep it short and focused.\n\n- Word count: 250 to 400 words\n- Sweet spot: 2 to 3 minutes\n- Upper limit: 4 minutes\n\nYou do not have the same platform as the best man or maid of honor. That is fine. A short, genuine speech is better than a long, rambling one. Tell one story, say something kind, raise your glass.",
      },
      {
        heading: 'The General Rule',
        level: 2,
        content:
          "When in doubt, go shorter. A 3-minute speech that is tight and personal will always beat a 7-minute speech that wanders.\n\nMost people speak at about 130 to 150 words per minute. Use that to calculate your target word count. And always, always time yourself when you practise.",
      },
    ],
    ctaSupportingText: 'Generate a speech at the right length',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'father-of-bride-speech', 'short-sweet-speech'],
    relatedArticles: ['how-long-should-a-wedding-speech-be', 'wedding-speech-structure', 'how-to-practise-a-wedding-speech'],
    tags: ['length', 'timing', 'role-specific', 'structure'],
  },

];

// ── Helpers ─────────────────────────────────────────────────

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter(a => a.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter(a => a.tags.includes(tag));
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.relatedArticles
    .map(s => getArticleBySlug(s))
    .filter((a): a is Article => a !== undefined)
    .slice(0, limit);
}

export function getPublishedArticles(): Article[] {
  return articles.filter(a => a.sections.length > 1 || a.sections[0]?.heading !== 'Coming Soon');
}

export function getAllArticleSlugs(): string[] {
  return articles.map(a => a.slug);
}
