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
      { heading: 'Why Your Opening Line Matters More Than You Think', level: 2, content: "Your opening line sets the tone for everything that follows. Get it right, and the room is yours. Get it wrong, and you're fighting uphill for the next four minutes.\n\nHere's the uncomfortable truth: most wedding speeches start the same way. \"For those who don't know me, I'm...\" or \"I was told a best man speech should be like a mini-skirt, short enough to be interesting, long enough to cover the essentials.\" The crowd has heard these a thousand times. Their eyes glaze over before you've finished your first sentence.\n\nYou have about seven seconds to signal that your speech is worth listening to. That's not a lot. But it's enough." },
      { heading: '7 Openings That Actually Work', level: 2, content: "Each of these has been tested at real weddings. Pick the one that fits your personality and your relationship to the couple." },
      { heading: 'The Story Drop', level: 3, content: "Jump straight into a story without any preamble. No introduction, no throat-clearing. Just start.\n\n\"Three years ago, I got a phone call at 2am. It was Jake. He said, 'I think I've met the one.' I said, 'Mate, you're drunk.' He said, 'Yeah, but I'm also right.'\"\n\nThis works because it creates instant curiosity. The audience leans in because they want to know what happens next." },
      { heading: 'The Honest Confession', level: 3, content: "Admit something vulnerable right out of the gate. It's disarming and immediately human.\n\n\"I've been dreading this moment for about six months. I've written this speech eleven times. Deleted it twelve. So if this isn't perfect, just know, it was a lot worse.\"\n\nSelf-deprecation works because it lowers the stakes for everyone. The audience relaxes because you've given them permission to not expect perfection." },
      { heading: 'The One-Liner', level: 3, content: "A single, punchy sentence that gets a reaction, either a laugh or a raised eyebrow.\n\n\"Marriage is basically finding someone you want to annoy for the rest of your life, and Jake, you've found the perfect candidate.\"\n\nKeep it clean, keep it warm, and make sure the couple would laugh at it too." },
      { heading: 'The Unexpected Fact', level: 3, content: "Open with something the audience doesn't know. A surprising stat, an unknown detail about the couple, or a piece of trivia that ties into your speech.\n\n\"Did you know that the average person fears public speaking more than death? Which means right now, I'd technically rather be in the coffin than giving this speech.\"" },
      { heading: 'The Direct Address', level: 3, content: "Speak directly to the couple. Skip the audience entirely and make it intimate.\n\n\"Tom. Sarah. Before I say anything to this room, I want to say something to you. I have never seen my brother happier than he is right now. And Sarah, that's because of you.\"\n\nThis is powerful because it's personal. The room feels like they're witnessing a private moment." },
      { heading: 'The Callback', level: 3, content: "Reference something that just happened, a previous speech, a moment during the ceremony, or something from the day itself.\n\n\"After that beautiful ceremony, the vicar told me, 'Good luck following that.' So... thanks for the pressure, Father.\"\n\nCallbacks work because they're spontaneous. Even if you planned them, they feel in-the-moment." },
      { heading: 'The Quiet Start', level: 3, content: "Start soft and slow. No joke, no story, just a genuine, simple statement.\n\n\"I've thought about what to say today for a long time. And I keep coming back to one thing: I'm proud of you.\"\n\nSometimes the most powerful opening is the most understated one." },
      { heading: '3 Openings to Avoid at All Costs', level: 2, content: "**\"For those who don't know me...\"**, Everyone knows you're the best man. They can read the seating plan.\n\n**\"Webster's dictionary defines marriage as...\"**, No. Just no. This was tired in 2005.\n\n**\"I'm not very good at public speaking...\"**, This immediately tells the audience to lower their expectations. Why would you do that to yourself?\n\nThe goal is to start with confidence, personality, and something the audience hasn't heard before. You don't need to be a comedian. You just need to be you, from the very first line." },
      { heading: 'How to Match Your Opening to Your Role', level: 2, content: "Your role shapes your opening. A best man can get away with more humour. A father of the bride might open with something emotional. A groom should probably acknowledge the room.\n\n**Best Man:** Story drop or one-liner\n**Maid of Honor:** Honest confession or direct address\n**Father of the Bride:** Quiet start or direct address\n**Groom:** Direct address or callback\n\nPick the approach that feels natural. If you're not funny, don't try to be. If you're not emotional, don't force it. The best opening is the one that sounds like you." },
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
      { heading: 'Why Most Speeches Fall Apart in the Last 30 Seconds', level: 2, content: "You've been brilliant for four minutes. The stories landed, the jokes got laughs, even Auntie Margaret wiped away a tear. Then you hit the ending and... nothing. You mumble \"so yeah, cheers everyone\" and sit down while the room politely claps.\n\nThis happens because people spend 90% of their prep time on the opening and the middle. The ending gets written at midnight the night before. But here's the thing: the ending is what people remember. It's the last thing they hear. It's the emotional full stop.\n\nNail the landing and they'll talk about your speech for years. Fumble it and everything that came before gets diluted." },
      { heading: 'The 5 Best Ways to Close', level: 2, content: "Each of these creates a clear, satisfying ending. No trailing off, no awkward silence." },
      { heading: 'The Toast', level: 3, content: "The classic for a reason. Signal clearly that you're wrapping up, then raise your glass with a specific, heartfelt wish.\n\n\"So please, raise your glasses. To Tom and Sarah: may your love be modern enough to survive anything, and old-fashioned enough to last forever.\"\n\nThe key is the transition. Don't just suddenly say \"cheers.\" Build to it. \"Please raise your glasses\" is the universal signal that your speech is ending, and the room will follow your lead." },
      { heading: 'The Callback Close', level: 3, content: "Reference something from earlier in your speech. This creates a satisfying narrative loop that makes your speech feel intentional and crafted.\n\nIf you opened with a story about the groom being hopeless, end with: \"And that's the thing about Jake. He might not be able to cook, he might get lost in IKEA, but when it comes to loving Sarah, he's never been lost for a second.\"" },
      { heading: 'The Future Wish', level: 3, content: "Look forward instead of backward. Paint a picture of the couple's future that's specific and warm.\n\n\"I can already picture you two, Sunday mornings with terrible coffee, arguing about whose turn it is to walk the dog, building a life that's messy and beautiful and entirely yours.\"" },
      { heading: 'The Quiet Moment', level: 3, content: "Drop the volume. Say something simple and genuine directly to the couple.\n\n\"I love you both. And I'm so glad I get to be here for this.\"\n\nSometimes the most powerful ending is the shortest one." },
      { heading: 'The Group Invitation', level: 3, content: "Involve the whole room. Turn the ending into a shared moment rather than a solo performance.\n\n\"If you love these two, and I know you do, please stand up, raise your glasses, and join me in wishing them the happiest life together. To the bride and groom!\"" },
      { heading: 'Endings That Make People Cringe', level: 2, content: "**The Ramble:** \"So yeah, I think that's about it, I mean there's more I could say, but... anyway, cheers.\" Pick a stopping point and stop.\n\n**The Non-Ending:** When you just... stop talking and sit down without any signal. The room doesn't know whether to clap or wait.\n\n**The Quote Dump:** Ending with a long quote from someone famous. Unless you can deliver it with genuine conviction, it feels borrowed and impersonal.\n\n**The Double Toast:** Raising your glass, saying cheers, then remembering something else and starting again. One toast. That's it." },
      { heading: 'How Long Should Your Ending Be?', level: 2, content: "Your closing should be 30–60 seconds. That's 2–3 sentences of wrap-up, followed by the toast itself.\n\nPractice the ending more than any other part. It's the moment with the most emotional weight, and it's the moment you're most likely to rush through because you can see the finish line.\n\nSlow down. Let the words land. Then raise your glass like you mean it." },
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
      { heading: "Why Winging It Is a Terrible Idea", level: 2, content: "Let's get this out of the way: \"I'll just speak from the heart\" is not a plan. It's a gamble. And at a wedding, in front of 150 people, some of whom you've never met, with a microphone amplifying every awkward pause, it's a gamble that rarely pays off.\n\nThe best wedding speeches feel spontaneous, natural, and effortless. But behind every one of them is a structure. The audience doesn't see the scaffolding, but it's there, holding everything together.\n\nHere's the framework that works for any role, any tone, any length." },
      { heading: 'The 5-Part Framework', level: 2, content: "Every great wedding speech follows the same basic arc, whether it's two minutes or seven. The proportions change, but the structure doesn't." },
      { heading: '1. The Hook (10%)', level: 3, content: "Your first 15–30 seconds. Grab attention. This can be a joke, a story, a direct address, or a surprising statement. Whatever it is, make it something the audience hasn't heard at every other wedding.\n\nDon't waste this on introductions. If you're the best man, everyone already knows that. Start with something that earns their attention." },
      { heading: '2. The Context (15%)', level: 3, content: "Briefly establish who you are in relation to the couple and why you're standing here. This is where you earn the right to tell the stories that come next.\n\n\"Jake and I have been friends for 22 years. We met when we were both too young to know better and too stubborn to grow apart.\"\n\nKeep it short. One or two sentences. You're not telling your life story, you're giving the audience just enough context to care about what comes next." },
      { heading: '3. The Stories (50%)', level: 3, content: "This is the heart of your speech. One or two stories that reveal something genuine about the person or the couple.\n\nThe best stories aren't the funniest ones. They're the most specific ones. Details make a story feel real. Not \"we had a great holiday\" but \"we were stuck in a broken-down campervan outside Lisbon and he spent three hours trying to fix the engine with a YouTube tutorial and a butter knife.\"\n\nEach story should serve a purpose: it shows character, it illustrates the relationship, or it sets up the emotional turn." },
      { heading: '4. The Pivot (15%)', level: 3, content: "The pivot is where you shift from backward-looking to forward-looking. From stories about the past to feelings about the present and hopes for the future.\n\n\"But here's the thing about Jake. Behind every ridiculous story is a person with one of the biggest hearts I've ever known. And watching him with Sarah, I can see that heart is exactly where it's supposed to be.\"\n\nThis is the emotional gear change. If your speech has been funny, this is where it gets real. If it's been sentimental, this is where you bring it home." },
      { heading: '5. The Toast (10%)', level: 3, content: "A clear, confident close. Signal the end, deliver one final line, and raise your glass.\n\nDon't introduce new material here. Don't start a new story. The toast is the period at the end of the sentence. Short, specific, and delivered with conviction.\n\n\"To Jake and Sarah, may your life together be as good as you both deserve. Cheers.\"" },
      { heading: 'How to Adapt This for Any Role', level: 2, content: "The framework works universally, but the weight of each section shifts:\n\n**Best Man:** More time on stories (especially funny ones), shorter pivot\n**Maid of Honor:** Balance of stories and emotion, longer pivot\n**Father of the Bride:** Less story, more emotion, the pivot IS the speech\n**Groom:** More context (thanking people), shorter stories, heartfelt pivot to partner\n\nThe structure is a skeleton. You dress it up differently depending on who you are and what you want to say." },
      { heading: 'Common Structural Mistakes', level: 2, content: "**Too many stories:** Pick one or two. Not five. Each one dilutes the last.\n\n**No pivot:** If your speech is all jokes or all sentiment with no shift in gear, it feels flat. The pivot gives the audience an emotional journey.\n\n**No clear ending:** The audience should know when your speech is over. \"Please raise your glasses\" is the universal signal. Use it.\n\n**Front-loading:** If your best material is in the first minute, the speech gets worse as it goes. Save something good for the end." },
      { heading: 'How Long Should Each Section Be?', level: 2, content: "For a 4-minute speech (roughly 600 words):\n\n- **Hook:** 60 words (30 seconds)\n- **Context:** 90 words (45 seconds)\n- **Stories:** 300 words (2 minutes)\n- **Pivot:** 90 words (45 seconds)\n- **Toast:** 60 words (30 seconds)\n\nThese are guidelines, not rules. But if your stories section is 80% of the speech, something's off. And if your toast is 30 seconds, you're probably rambling into it instead of landing it cleanly." },
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
      { heading: 'The Golden Rule: 3–5 Minutes', level: 2, content: "Nobody has ever left a wedding saying, \"I wish that speech had been longer.\" Literally nobody. In the history of weddings, that sentence has never been uttered.\n\nThe sweet spot is 3–5 minutes. That's roughly 450–750 words. Long enough to say something meaningful, short enough to keep the room engaged. Anything under 2 minutes feels like you didn't try. Anything over 7 minutes and people are checking their phones.\n\nHere's the uncomfortable math: you're not the only person speaking. There are usually 3–5 speeches. If everyone goes 10 minutes, that's nearly an hour of speeches. The food gets cold. The bar stays closed. Guests start plotting an escape." },
      { heading: 'Ideal Length by Role', level: 2, content: "Not everyone gets the same amount of time, and that's fine." },
      { heading: 'Best Man: 4–5 minutes', level: 3, content: "The best man typically gets the most time because the speech is expected to be entertaining. You've got more stories to tell and more room for humor. But even here, aim for the lower end. A tight 4-minute best man speech beats a rambling 7-minute one every time." },
      { heading: 'Maid of Honor: 3–4 minutes', level: 3, content: "Similar to the best man, but maid of honor speeches tend to be more balanced between humor and emotion. The shorter end works beautifully here, it forces you to choose your best material." },
      { heading: 'Father of the Bride: 3–4 minutes', level: 3, content: "Fathers get emotional. And that's wonderful. But emotion without structure can turn into a ramble. Keep it tight. Three minutes of genuine feeling beats six minutes of trying to cover every memory from childhood." },
      { heading: 'Groom: 3–5 minutes', level: 3, content: "The groom has a lot of people to thank, which can inflate the speech. Be efficient with thank-yous (group them) and save the real time for what you want to say to your partner." },
      { heading: 'How to Tell If Your Speech Is Too Long', level: 2, content: "Read it out loud and time yourself. Not in your head, out loud, at the pace you'd actually deliver it. Most people read faster in their heads than they speak.\n\nIf you're over 5 minutes, you probably have:\n- Stories that could be tighter\n- Thank-yous that could be grouped\n- An introduction that's too long\n- An ending that rambles instead of landing" },
      { heading: 'How to Cut Without Losing the Good Stuff', level: 2, content: "**The Two-Story Maximum:** If you have three stories, cut the weakest one. Two great stories beat three good ones.\n\n**The \"Would They Miss It?\" Test:** Read each paragraph and ask: if I cut this, would the speech be worse? If the answer is \"not really,\" cut it.\n\n**Group Your Thank-Yous:** Instead of thanking 12 people individually, thank groups. \"To both families, to the bridal party, and to everyone who travelled to be here today, thank you.\"\n\n**Cut Your Preamble:** Most speeches spend 30–60 seconds on a preamble that adds nothing. \"For those who don't know me\", cut. \"I've been nervous about this\", cut. Just start." },
      { heading: 'The Word Count Cheat Sheet', level: 2, content: "| Duration | Word Count | Best For |\n|----------|-----------|----------|\n| 2 minutes | ~300 words | Short toast, engagement party |\n| 3 minutes | ~450 words | Father/mother speeches, concise best man |\n| 4 minutes | ~600 words | Standard best man, maid of honor |\n| 5 minutes | ~750 words | Extended best man with multiple stories |\n| 7+ minutes | ~1000+ words | Too long (probably) |\n\nWhen in doubt, go shorter. A 3-minute speech that's all killer, no filler will always outperform a 6-minute speech with padding." },
    ],
    ctaSupportingText: 'Get the perfect length on the first try',
    relatedExamples: ['short-sweet-speech', 'best-man-speech', 'father-of-bride-speech'],
    relatedArticles: ['wedding-speech-structure', 'how-to-write-a-wedding-speech', 'wedding-speech-dos-and-donts'],
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
      { heading: "Take a Breath, You've Got This", level: 2, content: "You've been asked to give a wedding speech. Maybe you volunteered. Maybe you were voluntold. Either way, you're here, staring at a blank page, and the wedding is getting closer.\n\nHere's the good news: you don't need to be a writer. You don't need to be funny. You don't need to be eloquent. You need to be genuine, prepared, and willing to put in about an hour of actual work.\n\nThat's it. One hour. Let's break it down." },
      { heading: 'Step 1: Brainstorm Before You Write', level: 2, content: "Don't start writing sentences yet. Start by dumping every relevant thought onto a page. No editing, no judgment, no structure." },
      { heading: 'The Memory Dump', level: 3, content: "Set a timer for 10 minutes. Write down every memory, moment, inside joke, or feeling you associate with the person or couple. Don't filter. Some of these will be unusable. That's fine. You're mining for gold, and gold is surrounded by dirt.\n\nThink about:\n- The first time you met them\n- A time they surprised you\n- Something they do that's uniquely them\n- A moment you were proud of them\n- Something funny that happened\n- How you felt when you learned about the relationship" },
      { heading: 'The 3-Word Exercise', level: 3, content: "Describe the person (or the couple) in exactly three words. Not adjectives you'd put on a CV, real words that capture who they actually are.\n\nNot \"kind, caring, generous\" (boring). Try \"stubborn, hilarious, loyal\" or \"quietly brave\" or \"terrible cook, incredible human.\"\n\nThese three words become the spine of your speech. Every story you tell should illustrate at least one of them." },
      { heading: 'Step 2: Pick Your Structure', level: 2, content: "Now that you have raw material, organize it. Use the 5-part framework:\n\n1. **Hook**, Start with a bang\n2. **Context**, Who are you, why are you here\n3. **Stories**, 1–2 stories that reveal character\n4. **Pivot**, The emotional turn\n5. **Toast**, Raise the glass\n\nSlot your best memories into the \"stories\" section. Pick the one that best sets up the emotional pivot." },
      { heading: 'Step 3: Write Ugly First', level: 2, content: "Write a complete first draft without stopping to edit. It will be bad. It's supposed to be bad. The goal of a first draft is to exist, not to be good.\n\nWrite like you're telling a friend over coffee. Don't try to sound impressive. Don't use words you wouldn't normally use. If it sounds like a university essay, you've gone wrong.\n\nThe most common mistake at this stage is trying to write and edit at the same time. That's how you end up staring at a blank page for three hours. Write first. Edit later." },
      { heading: 'Step 4: Edit Ruthlessly', level: 2, content: "Now make it good. Read through your draft and ask:\n\n- **Is this too long?** Cut anything that doesn't earn its place.\n- **Would this work for any couple?** If yes, it's too generic. Make it specific.\n- **Am I trying too hard to be funny?** If the humor doesn't come naturally, cut it. Sincerity is always better than forced jokes.\n- **Does it have a clear beginning, middle, and end?** If it feels like it's wandering, restructure.\n- **Would I be comfortable if this was recorded?** If not, tone it down.\n\nAim to cut 20% from your first draft. The speech that remains will be tighter, sharper, and better." },
      { heading: 'Step 5: Read It Out Loud', level: 2, content: "This is non-negotiable. Reading in your head and speaking out loud are completely different experiences. You'll catch:\n\n- Sentences that are too long to say in one breath\n- Transitions that feel clunky\n- Words that are hard to pronounce\n- Sections where the energy drops\n- The actual running time (probably longer than you think)\n\nRead it to a mirror first. Then read it to one trusted person. Not someone who'll tell you it's great no matter what, someone who'll tell you the truth." },
      { heading: 'What If You\'re Still Stuck?', level: 2, content: "If you've tried all of this and you're still staring at a blank page, you have two options:\n\n1. **Start with the toast and work backward.** Sometimes knowing where you're going makes it easier to figure out where to start.\n\n2. **Use AI to get a draft.** Seriously. Give it your memories, your tone, your relationship, and let it build a starting point. Then edit it until it sounds like you. That's exactly what our generator does. It's not cheating. It's a tool.\n\nThe only bad speech is the one you don't prepare. Everything else can be fixed with editing and practice." },
    ],
    ctaSupportingText: 'Go from blank page to finished speech',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'bride-speech'],
    relatedArticles: ['wedding-speech-structure', 'dont-know-what-to-say-wedding-speech', 'last-minute-wedding-speech'],
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
      { heading: 'The Rule of Safe Funny', level: 2, content: "Here's the rule: if the person you're talking about would laugh at the joke, it's probably safe. If they'd cringe, apologize to their partner later, or need therapy, cut it.\n\nWedding humor is a specific genre. You're not doing a stand-up set. You're not roasting your mate at a birthday party. There are children present. There are grandparents. There's at least one uncle who's already had too much champagne and doesn't need encouragement.\n\nThe good news: being funny at a wedding is easier than being funny in a comedy club. The audience wants to laugh. They're in a good mood. They've had a drink. The bar is lower than you think, you just can't go below it." },
      { heading: '5 Types of Wedding Humor That Work', level: 2, content: "These are proven, safe, and effective approaches to getting laughs." },
      { heading: 'Self-Deprecation', level: 3, content: "Making fun of yourself is the safest form of humor because the only person who could be offended is you.\n\n\"I've been practicing this speech in the mirror for three weeks. The mirror told me to give up, but here I am.\"\n\nIt's warm, it's relatable, and it makes the audience root for you." },
      { heading: 'Shared Absurdity', level: 3, content: "Reference a story where you and the groom/bride were both involved in something ridiculous. The humor comes from the situation, not from making anyone look bad.\n\n\"We decided to build a shelf together. Nine hours, four arguments, and one trip to A&E later, we had a shelf. It fell down within a week.\"" },
      { heading: 'The Unexpected Comparison', level: 3, content: "Compare the person to something unexpected. Not insulting, just surprising.\n\n\"Jake approaches romance the same way he approaches flat-pack furniture: with total confidence, zero instructions, and the assumption that somehow it'll just work out. And you know what? It usually does.\"" },
      { heading: 'The Rule of Three', level: 3, content: "Set up a pattern with two normal items, then break it with a third that's unexpected.\n\n\"Jake is many things. He's a loyal friend. He's a devoted partner. And he's the only person I know who has been banned from two separate branch of Nandos.\"" },
      { heading: 'The Callback', level: 3, content: "Reference a joke or moment from earlier in the speech (or from a previous speaker). Callbacks get bigger laughs because the audience feels smart for remembering.\n\nIf you mentioned the groom's terrible cooking in the opening, call it back in the toast: \"May your love last forever, and may your cooking improve.\"" },
      { heading: 'Topics That Are Never Funny', level: 2, content: "**Exes.** Don't mention them. Not even as a \"she was so much worse\" comparison. Just don't.\n\n**Bedroom stories.** The couple's parents are in the room. Their grandparents are in the room. Hard no.\n\n**Money.** How much the wedding cost, how much the groom earns, who paid for what. All off-limits.\n\n**Appearance.** Don't comment on weight, looks, or physical features. Not even as a compliment that's really a joke.\n\n**Anything that starts with \"I probably shouldn't say this but...\"** If you shouldn't say it, don't say it. The fact that you know it's inappropriate doesn't make it appropriate." },
      { heading: 'How to Test Your Jokes', level: 2, content: "Read them to someone who isn't your best mate from uni. Your drinking buddies will laugh at anything. That's not the test.\n\nRead it to someone who represents the wedding audience. A parent, a colleague, or a partner. If they wince, cut the joke. If they smile politely, consider cutting it. If they genuinely laugh, you're golden." },
      { heading: "What If You're Not Naturally Funny?", level: 2, content: "Then don't try to be. Seriously. A heartfelt speech with zero jokes will always land better than a speech with five jokes that don't work.\n\nHumor is a bonus, not a requirement. The audience wants to feel something, whether that's laughter, warmth, or a tear. You don't need to make them laugh to make an impact.\n\nIf you want to add a light touch without committing to full comedy, try one moment of self-deprecation and one gentle observation about the couple. That's enough." },
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
      { heading: "What's Actually Expected of You", level: 2, content: "Let's start with what the best man speech actually needs to do, because it's simpler than you think.\n\nYou need to: tell one or two good stories about the groom, say something genuinely nice about the couple, and raise a toast. That's it. Everything else is bonus.\n\nYou don't need to be a comedian. You don't need to make everyone cry. You don't need to mention every person in the room. You need to be personal, brief, and end with a glass in the air.\n\nThe biggest mistake best men make is thinking they need to put on a show. You don't. You need to be yourself, just the prepared, slightly more polished version." },
      { heading: 'The Ideal Structure', level: 2, content: "**Opening (30 seconds):** Hook them. A quick joke, a surprising opener, or jump straight into a story.\n\n**Who You Are (15 seconds):** One sentence about your relationship to the groom. \"Jake and I have been friends since we were 16. We met when...\" Keep it tight.\n\n**The Stories (2–3 minutes):** This is the main event. One funny story, one genuine one. Or one story that manages to be both. Keep them specific and personal.\n\n**The Bride (30 seconds):** This is non-negotiable. Acknowledge the bride. Say something warm and specific about how she's changed the groom for the better.\n\n**The Toast (30 seconds):** Land it. Signal the end clearly, deliver a final line, raise your glass.\n\nTotal: 4–5 minutes. That's all you need." },
      { heading: 'How to Be Funny Without Being Offensive', level: 2, content: "The best man speech has a reputation for being the funny one. That's fine, but funny doesn't mean crude, embarrassing, or at someone's expense.\n\nSafe targets: yourself, the groom's harmless quirks, shared experiences. Unsafe targets: the bride, exes, anything sexual, anything that happened in Vegas.\n\nOne solid joke that lands is worth more than ten that fall flat. If in doubt, cut the joke and tell a better story instead." },
      { heading: 'Stories That Work (and Stories That Don\'t)', level: 2, content: "**Stories that work:**\n- Ones where the groom shows his character\n- Shared adventures with a clear point\n- Moments that reveal why you're friends\n- The story of how you knew the bride was \"the one\" for him\n\n**Stories that don't:**\n- \"This one time we were so drunk...\" (no one cares)\n- Anything involving other women\n- Inside jokes no one else gets\n- Stories where the groom is the villain\n- Anything that requires a disclaimer (\"now don't kill me for this but...\")" },
      { heading: 'How to Mention the Bride', level: 2, content: "This is where most best men stumble. You spend 3 minutes talking about the groom, then awkwardly add \"and Sarah's great too\" at the end.\n\nInstead, weave the bride into the narrative. Talk about how the groom changed when he met her. Be specific: \"Before Sarah, Jake's idea of a home-cooked meal was toast. Now he makes actual risotto. From scratch. With a recipe he found on a food blog he follows voluntarily.\"\n\nThe bride doesn't need a separate section. She needs to be a genuine part of the story." },
      { heading: 'Timing and Length', level: 2, content: "**Target:** 4–5 minutes (600–750 words)\n**Maximum:** 6 minutes\n**Minimum:** 3 minutes\n\nIf you're at 7+ minutes, you're losing the room. Cut a story. Tighten the transitions. Your speech should leave people wanting slightly more, not checking their watches." },
      { heading: 'Best Man Speech Examples', level: 2, content: "Want to see how this looks in practice? Browse our best man speech examples, from funny roasts to heartfelt tributes, and see the structure in action." },
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
      { heading: "You're Not Alone (Seriously)", level: 2, content: "Public speaking consistently ranks as people's number one fear. Above spiders. Above heights. Above death, according to some surveys, which means, as Jerry Seinfeld once pointed out, most people at a funeral would rather be in the coffin than giving the eulogy.\n\nIf you hate public speaking and you've been asked to give a wedding speech, you're in the majority. Not the minority. Most people standing at that microphone are terrified. The ones who look calm? They're just better at hiding it.\n\nHere's what matters: you don't need to enjoy this. You need to get through it. And you can. Here's how." },
      { heading: 'Why a Wedding Speech Is Different', level: 2, content: "This isn't a presentation to hostile executives. This isn't a debate where someone's trying to catch you out. This is a room full of people who:\n\n- Already like you (you were invited)\n- Are in a great mood (it's a wedding)\n- Have had at least one drink\n- Are rooting for you to do well\n- Will clap no matter what\n\nThe bar is lower than you think. Nobody expects perfection. They expect warmth. And warmth doesn't require confidence, it requires honesty." },
      { heading: 'The Minimum Viable Speech', level: 2, content: "If the thought of 5 minutes at the microphone makes you ill, shrink the task. Here's the absolute minimum:\n\n1. **One sentence about your relationship to the couple** (5 seconds)\n2. **One short memory or quality you love about them** (30 seconds)\n3. **One wish for their future** (15 seconds)\n4. **Raise your glass** (5 seconds)\n\nThat's 60 seconds. One minute. You can do one minute. And a genuine 60-second speech is infinitely better than a tortured 5-minute one you hated every second of.\n\nIf you want to do more, great. But start here. Knowing you have a 60-second safety net takes the pressure off everything else." },
      { heading: 'Tricks to Calm Your Nerves', level: 2, content: "**Box breathing:** Breathe in for 4 counts, hold for 4, out for 4, hold for 4. Do this for 2 minutes before you stand up. It physically lowers your heart rate.\n\n**The power pose:** Sounds silly. Works anyway. Stand with your feet apart, hands on hips, chest open. Hold for 2 minutes before your speech. It changes your body chemistry.\n\n**Anchor to someone:** Pick one friendly face in the crowd, a partner, a friend, a parent. Talk to them. Not the whole room. Just them. It shrinks the audience to one person.\n\n**Reframe the nerves:** You're not scared. You're excited. The physical symptoms are identical. The difference is the story you tell yourself." },
      { heading: 'Reading from Notes Is Fine', level: 2, content: "Let's kill this myth right now: using notes during a wedding speech is not cheating. It's not a sign of weakness. It's smart.\n\nPrint your speech on index cards in a large font. Glance down when you need to. Nobody is judging you for having notes, they're focused on what you're saying, not how you're saying it.\n\nIn fact, having notes removes the single biggest source of anxiety: forgetting what you're going to say. That fear evaporates when you have a safety net in your hand." },
      { heading: "The Escape Plan (If You Really Can't)", level: 2, content: "If you genuinely cannot bring yourself to stand up and speak, and that's okay, it really is, here are alternatives:\n\n- **Write a letter** and have someone else read it\n- **Record a video** message that's played at the reception\n- **Do a joint speech** with someone else who can carry the delivery\n- **Keep it to 30 seconds**, stand, say three sentences, sit\n\nNobody will think less of you. The couple asked you because they love you, not because they need a TED Talk. Whatever you can give is enough." },
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
      { heading: "Don't Panic, You Need Less Than You Think", level: 2, content: "The wedding is tomorrow. Or tonight. Or in three hours. You haven't written a word. Your stomach is doing things it shouldn't be doing.\n\nTake a breath. You can absolutely write a good wedding speech in 30 minutes. Not a perfect one, but a genuine, warm, and memorable one. That's all you need.\n\nHere's your plan. Follow it exactly." },
      { heading: 'The 30-Minute Plan', level: 2, content: "This is a sprint. No perfectionism, no second-guessing. Trust the process." },
      { heading: 'Minutes 1–5: Brainstorm', level: 3, content: "Grab your phone or a piece of paper. Answer these three questions:\n\n1. What's one specific memory with this person that makes you smile?\n2. What's one quality they have that you genuinely admire?\n3. What do you wish for their future?\n\nDon't think too hard. First answers are usually the best ones. Write bullet points, not sentences." },
      { heading: 'Minutes 5–15: Write', level: 3, content: "Turn your answers into a speech using this template:\n\n**Opening:** Jump into your memory. No preamble. \"Three years ago, [name] called me at midnight to tell me...\"\n\n**Middle:** Connect the story to the quality you admire. \"That's who [name] is. Someone who [quality].\"\n\n**Pivot to the couple:** \"And watching them with [partner], I can see...\"\n\n**Toast:** \"Please raise your glasses. To [couple], [one-sentence wish].\"\n\nWrite it conversationally. Write it like you're talking to a friend. Don't try to be clever." },
      { heading: 'Minutes 15–25: Edit', level: 3, content: "Read it out loud once. Cut anything that:\n- Feels forced\n- Is longer than it needs to be\n- You wouldn't actually say out loud\n- Could offend anyone\n\nTighten it. Aim for 400–500 words (about 3 minutes)." },
      { heading: 'Minutes 25–30: Practice', level: 3, content: "Read it out loud twice more. Time yourself. Note where you stumble and smooth those lines out.\n\nPrint it or save it on your phone. You're done." },
      { heading: 'The Emergency Template', level: 2, content: "If even 30 minutes feels like too much, here's a speech you can adapt in 10 minutes:\n\n\"I've known [name] for [X years]. In that time, I've learned that they're [genuine quality], [genuine quality], and [unexpectedly funny quality].\n\n[One specific sentence about a memory.]\n\nWhen [name] met [partner], something changed. They became [observation about how they changed]. And standing here today, seeing them this happy, I couldn't be more proud.\n\nPlease raise your glasses, to [couple]. Here's to everything that comes next.\"\n\nFill in the blanks. Read it twice. You're done." },
      { heading: 'What to Skip When You\'re Short on Time', level: 2, content: "**Skip:** Long introductions, multiple stories, individual thank-yous, quotes from famous people, clever jokes you saw on Reddit.\n\n**Keep:** One real story, one genuine compliment, and a toast.\n\nThat's all you need. The audience doesn't know how long you spent on it. They only know how it makes them feel. And genuine always feels good." },
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
      { heading: "Why You're Nervous (and Why It's Good)", level: 2, content: "You're nervous because you care. That's not a weakness, it's the whole point. If you didn't care about the couple, you wouldn't be anxious. The nerves are proof that this matters to you.\n\nHere's what's actually happening: your body is dumping adrenaline because it thinks you're in danger. You're not. You're at a wedding. But your nervous system doesn't know the difference between a lion attack and a microphone.\n\nThe goal isn't to eliminate nerves. It's to manage them so they fuel you instead of freezing you." },
      { heading: 'The 30-Minute Pre-Speech Routine', level: 2, content: "Start this about 30 minutes before you're due to speak." },
      { heading: 'Breathing Techniques', level: 3, content: "Box breathing: 4 counts in, 4 counts hold, 4 counts out, 4 counts hold. Repeat for 3 minutes.\n\nThis isn't woo-woo. It activates your parasympathetic nervous system and physically lowers your heart rate. Navy SEALs use this before combat. You can use it before a toast." },
      { heading: 'Power Posing', level: 3, content: "Find a private spot, bathroom, corridor, behind the venue. Stand tall, feet apart, hands on hips. Hold for 2 minutes.\n\nResearch on power posing is debated, but the practical effect is real: it interrupts the \"small and scared\" body language that feeds anxiety. You're physically telling your body to take up space." },
      { heading: 'The Anchor Object', level: 3, content: "Hold something in your hand. Your notes, a pen, a coin. Having something physical to grip gives your nervous energy somewhere to go instead of turning into shaky hands and fidgeting." },
      { heading: 'What to Do 5 Minutes Before', level: 2, content: "- **Use the bathroom.** Seriously. Nerves do things to your body.\n- **Drink water.** Not alcohol. Water. Your mouth will be dry.\n- **Review your opening line.** Just the first sentence. If you know how to start, the rest follows.\n- **Smile.** It tricks your brain into thinking you're okay. Fake it until it's real.\n- **Remember:** everyone in this room is rooting for you." },
      { heading: 'What to Do If Nerves Hit Mid-Speech', level: 2, content: "It happens. Your voice shakes. You lose your place. Your mind goes blank.\n\n**Pause.** Take a breath. Look at your notes. The audience doesn't know you've forgotten, they think you're creating a dramatic pause.\n\n**Take a sip of water.** It gives you 3 seconds to reset.\n\n**Talk to one person.** Find a friendly face and deliver the next line directly to them. It shrinks the room.\n\n**Say it out loud:** \"Sorry, give me a moment.\" The audience will laugh warmly and give you all the time you need. Vulnerability is charming." },
      { heading: 'The Secret: Preparation Kills Anxiety', level: 2, content: "The single most effective way to manage wedding speech nerves is to be prepared. Not \"I read it once in my head\" prepared. Actually prepared.\n\n- Written and edited\n- Practiced out loud at least 3 times\n- Timed\n- Notes printed\n\nWhen you know your material, your brain has less to worry about. The nerves might still show up, but they won't have anything to grab onto.\n\nMost wedding speech anxiety isn't about public speaking. It's about being unprepared and hoping no one notices. Fix the preparation, and you fix most of the fear." },
    ],
    ctaSupportingText: "Feel confident with a speech that's ready",
    relatedExamples: ['short-sweet-speech', 'father-of-bride-speech'],
    relatedArticles: ['hate-public-speaking-wedding-speech', 'public-speaking-anxiety-wedding-speech', 'build-confidence-wedding-speech'],
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
          "Most wedding speeches die in the gaps. You nail a great joke, you tell a heartfelt story, and then you say 'So, um, anyway...' and the whole thing deflates like a pool float in October. Transitions are the connective tissue of a good speech. They tell your audience where you've been and where you're going. Master them and your speech will feel like a conversation, not a list of bullet points someone's reading off a napkin.",
      },
      {
        heading: 'Why Transitions Matter More Than You Think',
        level: 2,
        content:
          "A wedding speech without transitions is just a series of disconnected paragraphs. Your audience doesn't have a table of contents. They can't flip back a page. They're relying entirely on you to guide them through the emotional landscape of your speech. Good transitions do three things: they close the previous thought cleanly, they signal a shift is coming, and they open the next section with energy. Bad transitions do none of those things. They just... stop. And then start again somewhere else. Your audience feels the whiplash even if they can't name it.",
      },
      {
        heading: 'The Bridge Technique',
        level: 2,
        content:
          "The simplest transition is what we call the bridge: you take the last idea from one section and connect it directly to the first idea of the next. For example, if you just told a story about the groom's terrible cooking, you might say, 'And that's exactly the kind of fearlessness that made him propose to someone way out of his league.' You've closed the cooking story and opened the love story in one sentence. The audience doesn't feel a seam because there isn't one. The key is finding the emotional or thematic thread that connects two sections. There's almost always one hiding in there if you look.",
      },
      {
        heading: 'The Callback Transition',
        level: 2,
        content:
          "Callbacks are a comedian's best friend, and they work brilliantly in speeches. You reference something you said earlier and use it as a launchpad for your next point. If you opened with a joke about how nervous you are, you can circle back to it mid-speech: 'Remember when I said I was nervous? That was nothing compared to what Jake looked like the day he met Sarah's dad.' Callbacks reward your audience for paying attention. They create a feeling of cohesion, like the whole speech was planned rather than improvised. Which, ideally, it was.",
      },
      {
        heading: 'Time-Based Transitions',
        level: 2,
        content:
          "Chronological transitions are the training wheels of speechwriting, and there's no shame in using them. 'When I first met David...' into 'Fast forward five years...' into 'And now, standing here today...' is a perfectly serviceable structure. The trick is not to be too mechanical about it. Don't say 'And then in 2019...' unless the specific year matters. Instead, use softer time markers: 'A few years later,' 'Around the time they moved to Portland,' 'Right before the engagement.' These feel more like storytelling and less like a timeline presentation at a board meeting.",
      },
      {
        heading: 'The Emotional Pivot',
        level: 2,
        content:
          "Sometimes you need to shift from funny to serious, or vice versa. This is the hardest transition to pull off. The key is to acknowledge the shift. Something like, 'OK, I'm going to get serious for a moment' actually works. It gives the audience permission to change gears with you. The mistake people make is trying to slide from comedy to sincerity without any signal. The audience doesn't know where to put their face. Are we still laughing? Are we tearing up? Tell them. A brief pause before the pivot works wonders too. Silence is its own kind of transition.",
      },
      {
        heading: 'Transitions to Avoid',
        level: 2,
        content:
          "Certain transitions have been used so many times they've become invisible, and not in a good way. 'On a more serious note' is overcooked. 'But seriously, folks' makes you sound like a lounge act. 'Moving on' is what your GPS says when you miss a turn. 'Which brings me to my next point' is a PowerPoint slide, not a speech. And 'Anyway' is the verbal equivalent of giving up. If you catch yourself reaching for one of these, pause and ask: what's the actual connection between these two sections? Find that, and the transition writes itself.",
      },
      {
        heading: 'Practice the Seams',
        level: 2,
        content:
          "When you rehearse your speech, and you absolutely should rehearse it, pay special attention to the transitions. These are the places where most people stumble, lose their place, or speed up because they're uncomfortable. Practice each transition until it feels natural. Record yourself and listen back. If a transition sounds clunky on the recording, it'll sound worse live when adrenaline is running the show. The goal is for your speech to feel like one continuous thought, not seven thoughts stapled together. Smooth transitions are what separate a speech people endure from a speech people remember.",
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
          "People use 'toast' and 'speech' interchangeably, and it drives anyone who's ever planned a wedding timeline completely insane. They're different things with different lengths, different purposes, and different levels of preparation. Confusing the two is how you end up giving a seven-minute monologue when everyone just wanted you to raise a glass, or how you deliver a fifteen-second 'cheers' when you were supposed to be the main event. Let's sort this out.",
      },
      {
        heading: 'What Exactly Is a Wedding Toast?',
        level: 2,
        content:
          "A toast is short. We're talking 30 to 90 seconds. It's a brief statement that ends with everyone raising their glasses and drinking. That's it. A toast might include a quick sentiment, a one-liner, or a brief wish for the couple. It does not include your entire history with the bride. It does not include three anecdotes and a quote from Rumi. Think of a toast as the espresso shot of wedding remarks: concentrated, punchy, and over before anyone checks their phone. The format is simple: say something warm or funny, direct it at the couple, invite everyone to raise their glass, done.",
      },
      {
        heading: 'What Exactly Is a Wedding Speech?',
        level: 2,
        content:
          "A wedding speech is a longer, structured piece that typically runs three to five minutes. It has a beginning, middle, and end. It includes stories, humor, sincerity, and usually ends with a toast. The best man speech, maid of honor speech, father of the bride speech: these are speeches. They have arc and narrative. You prepare them in advance, ideally rehearse them multiple times, and deliver them with some level of craft. A speech is the full meal. It should leave people feeling something, not just holding a glass.",
      },
      {
        heading: 'The Length Difference Matters More Than You Think',
        level: 2,
        content:
          "Three minutes doesn't sound like much, but it's an eternity when you're standing in front of 150 people holding a microphone. And 60 seconds sounds like nothing, but it's plenty of time to say something genuinely moving if you've chosen your words carefully. The problem is when people split the difference. A two-minute sort-of-toast-sort-of-speech satisfies nobody. It's too long for a toast and too short for a speech. Know which one you've been asked to give and commit to it. If you're not sure, ask the couple or the wedding planner. They will be thrilled someone actually asked.",
      },
      {
        heading: 'When You Have Been Asked to Give a Toast',
        level: 2,
        content:
          "If you've been asked to give a toast, your job is to be brief and memorable. Write it out word for word. Yes, even though it's short. Especially because it's short. Every word has to earn its place. Open with one line that gets attention: a quick joke, a sweet observation, a surprising fact about the couple. Follow it with two or three sentences of genuine warmth. Then raise your glass and give the room a clear prompt: 'To Sarah and James.' Do not ramble. Do not tell a story that requires setup. Do not explain how you know the couple unless it's relevant in one sentence. Brevity is the entire point.",
      },
      {
        heading: 'When You Have Been Asked to Give a Speech',
        level: 2,
        content:
          "A speech gives you room to breathe. You can tell a story, develop a theme, build to an emotional crescendo. But that room is a trap if you're not careful, because more time means more opportunity to wander, repeat yourself, or overstay your welcome. Structure is your best friend. Open strong with something that hooks the room. Move into your main content: one or two stories, a few observations, maybe a lesson. Shift to the couple and their relationship. Close with a toast. Five minutes maximum. Seriously. Nobody in the history of weddings has complained that a speech was too short.",
      },
      {
        heading: 'Can a Speech End With a Toast? Should It?',
        level: 2,
        content:
          "Yes, and yes. Almost every great wedding speech ends with a toast. It gives you a clean, decisive ending. It gives the audience something to do. And it punctuates the entire speech with a moment of collective action. The toast at the end of a speech should be short: one or two sentences max. You've already done the heavy lifting. Now you're just putting a bow on it. 'Please raise your glasses to the two people who give me hope that love isn't just something that happens in movies. To Emma and Chris.' That's all you need.",
      },
      {
        heading: 'The Bottom Line',
        level: 2,
        content:
          "Know what you've been asked to deliver and deliver exactly that. If it's a toast, be the person who said something beautiful in under a minute and sat down like a legend. If it's a speech, be the person who held the room's attention, made them laugh, made them tear up, and ended with a glass in the air. Both are valuable. Both take preparation. And both are ruined by the same thing: not knowing which one you're supposed to be giving.",
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
          "The first ten seconds of your speech determine whether the room leans in or checks out. No pressure. The truth is, most wedding speech openings are terrible because people default to the same three moves: introduce yourself, say you're nervous, or open with a dictionary definition. All of these are fine if your goal is to be instantly forgettable. Instead, try one of these 15 openers. They're organized by vibe so you can pick the one that matches your personality and your relationship to the couple.",
      },
      {
        heading: 'The Funny Openers',
        level: 2,
        content:
          "1. 'I've been told I have five minutes up here. I've also been told that if I mention the Las Vegas trip, that gets cut to zero.' This works because it implies a story exists without telling it. The audience is immediately curious. Use it when you have a genuinely funny dynamic with the groom or bride. 2. 'For those who don't know me, I'm [name], and for those who do know me, I'm sorry about last night's rehearsal dinner.' Self-deprecating, warm, gets a quick laugh. 3. 'I Googled how to give a best man speech and the first result said to imagine everyone in their underwear. I tried that and now I can't make eye contact with the bride's grandmother.' Silly, harmless, and it acknowledges the awkwardness of public speaking without being a downer about it. 4. 'They say a good speech should be like a bride's dress: long enough to cover the essentials but short enough to keep things interesting.' A classic for a reason. It sets expectations about length and tone in one line. 5. 'I asked [groom/bride] if there was anything I shouldn't mention tonight. The list was four pages long. So this should be fun.'",
      },
      {
        heading: 'The Heartfelt Openers',
        level: 2,
        content:
          "6. 'I've known [name] for twenty years. In all that time, I've never seen them look at anything the way they looked at [partner] when they walked down that aisle today.' Simple and devastating. Works best when it's true, obviously. 7. 'When [name] called to tell me about the engagement, I didn't say congratulations first. I said: it's about time.' This implies a love story everyone saw coming, and it positions you as someone who's been watching it unfold. 8. 'There are 200 people in this room tonight, and every single one of you is here because [couple] made your life better in some way. That tells you everything you need to know about who they are.' This is generous and outward-facing. It makes the audience feel included from the start. 9. 'My [brother/sister/child] found someone who makes them braver, kinder, and happier. As their [relation], that's all I ever wanted.' Direct. Emotional. Gets right to the point without any preamble. 10. 'I wasn't nervous about this speech until I realized I have to put into words what [name] means to me. That's the hard part. Not the public speaking. The feeling.'",
      },
      {
        heading: 'The Unexpected Openers',
        level: 2,
        content:
          "11. 'I'm not going to start by telling you how we met. I'm going to start by telling you about the Tuesday afternoon that made me realize these two were going to end up right here.' Starting mid-story hooks people immediately. The specificity of 'Tuesday afternoon' makes it feel real and unrehearsed. 12. 'Raise your hand if [name] has ever texted you at 2 AM about something completely unhinged.' Audience participation gets energy up instantly. Just make sure enough people will raise their hands. 13. 'I wrote this speech six times. The first five were too long, too weird, or made the groom cry at the rehearsal. So here's version six. Fingers crossed.' Meta and charming. It shows you cared enough to revise. 14. 'Before I start, I need to say something to [partner]: thank you. Not for the obvious reasons. For the fact that [name] finally has someone else to call when their car makes a weird noise.' Specific, funny, and subtly affectionate. 15. '[Name] asked me to be their best man last year. I said yes immediately. Then I hung up the phone and thought: I have to give a speech, don't I. So here we are. Both of us keeping promises.'",
      },
      {
        heading: 'How to Choose the Right Opener for You',
        level: 2,
        content:
          "Pick the opener that sounds like something you'd actually say. If you're not naturally funny, don't force a joke. If you're not naturally sentimental, don't open with tears. The best opening line is one that the audience hears and thinks, 'That's so [your name].' It should also match the tone of the rest of your speech. A hilarious opener followed by five minutes of earnest sincerity creates tonal whiplash. A tender opener followed by a roast feels disjointed. Think of the opening as a promise to your audience about what kind of ride they're in for.",
      },
      {
        heading: 'What to Do Right After Your Opening Line',
        level: 2,
        content:
          "Your opener buys you about ten seconds of goodwill. Don't waste it. After your first line lands, move directly into your first story or your first point. Don't stop to introduce yourself unless you genuinely need to. Don't explain the opener. Don't say 'But seriously.' Just keep the momentum going. The worst thing you can do is nail a great first line and then stall. Think of your opener as the first step of a run: the second step should already be in motion before the first one lands.",
      },
      {
        heading: 'Openers to Avoid at All Costs',
        level: 2,
        content:
          "For the love of everything, do not open with: 'Webster's dictionary defines marriage as...' Nobody has ever been moved by a dictionary definition at a wedding. Also skip: 'I'm so nervous right now.' Everyone can see that. Saying it doesn't help you or them. Don't open with: 'Is this thing on?' unless you are literally checking the microphone and even then, wrap it up. And please don't start with: 'For those who don't know me, I'm the best man.' They know. There's a program. You're holding a microphone. Context clues are abundant.",
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
          "You've written the speech. You've told the stories. You've made them laugh, maybe even tear up. Now you need to land the plane. The ending of a wedding speech is where most people fumble because they didn't plan one. They just sort of... trail off and then say 'So yeah, cheers!' while awkwardly lifting a glass of champagne they almost knock over. Your ending is the last thing people will remember. Make it count. Here are 15 toast endings organized by tone, ready for you to customize and deliver.",
      },
      {
        heading: 'Classic and Warm',
        level: 2,
        content:
          "1. 'Please raise your glasses to [couple]. May your love be modern enough to survive anything and old-fashioned enough to last forever.' Clean, balanced, and sounds like you thought about it. 2. 'To [couple]: may you always be as happy as you look right now.' Simple and sincere. Works especially well if the couple is visibly glowing, which, at their own wedding, they probably are. 3. 'Here's to the couple who reminded everyone in this room that the real thing still exists. To [couple].' This one hits harder than you'd expect because it's generous to the audience too. 4. 'To [name] and [name]. I've never been more sure of anything than I am of you two.' Short, confident, and deeply personal. Best delivered by someone close to the couple.",
      },
      {
        heading: 'Funny and Light',
        level: 2,
        content:
          "5. 'To [couple]. May your wifi be strong, your coffee be hot, and your arguments be short.' Modern, practical, and gets a reliable laugh. 6. 'Please raise your glasses. To [couple]: may you love each other even when you don't like each other. Which, based on my experience, will be most Mondays.' Honest and funny. Best used by someone who's married themselves. 7. 'To the bride and groom. May the rest of your lives be as good as your wedding photographer is going to make today look.' A gentle dig at Instagram culture that always plays well. 8. 'To [couple]. I'd say don't go to bed angry, but honestly, sometimes sleep is more important. Just don't go to bed without saying I love you.' Funny with a warm landing.",
      },
      {
        heading: 'Sentimental and Poetic',
        level: 2,
        content:
          "9. 'To [couple]. You found each other in a world that makes it really hard to find anything. Don't ever take that for granted. We certainly won't.' This one lands with real emotional weight. Give it a beat before raising your glass. 10. 'Here's to the kind of love that makes everyone around it feel a little braver. To [couple].' Aspirational and generous. It elevates the couple without putting them on a pedestal. 11. 'To [name] and [name]. I watched one of you become better because of the other, and I'll spend the rest of my life grateful for that.' Deeply personal. Use it when you've witnessed real growth in someone you love. 12. 'Please raise your glasses to a love story that's just getting started. To [couple], and to every chapter that comes next.' Forward-looking and hopeful. A good one for younger couples.",
      },
      {
        heading: 'Bold and Memorable',
        level: 2,
        content:
          "13. 'To [couple]. If marriage is a journey, you two just got the best travel partner imaginable. Don't forget to enjoy the layovers.' A little unexpected, a little philosophical, and it sticks. 14. 'Everyone in this room has a version of [couple]'s story they love best. The first date story. The proposal story. The story about the IKEA trip that almost ended it all. But my favorite chapter is the one that starts tonight. To [couple].' This works because it's specific enough to feel real but universal enough that everyone connects to it. 15. 'To [couple]. You don't need my blessing, my advice, or my toast. But you have all three. Cheers.' Confident and a little cheeky. It's a strong closer for someone with swagger.",
      },
      {
        heading: 'How to Deliver the Toast Ending',
        level: 2,
        content:
          "Delivery matters as much as the words. Here's the sequence: finish your last line, pause for one full second, pick up your glass (or signal for others to do so), say 'Please raise your glasses' or 'If you'll join me,' then deliver your closing line, then say 'To [couple]' and raise your glass. The pause before the toast is critical. It tells the room: something important is about to happen. Don't rush it. Don't mumble it. Don't look at the floor. Look at the couple, or look at the room, and say it like you mean it. Because you do.",
      },
      {
        heading: 'Customizing These for Your Speech',
        level: 2,
        content:
          "These are templates, not tattoos. Change the words to fit your voice. If number 6 is your favorite but you're not married, tweak it. If number 11 resonates but you want to add a specific detail, do it. The best toast endings feel personal even when they're structured. Add names, add inside references, add a word or phrase that's specific to the couple. 'May your love be as strong as your matching opinions about pizza toppings' is better than any generic toast because it's theirs. The structure gets you 80% of the way there. The last 20% is you making it real.",
      },
      {
        heading: 'The One Rule You Cannot Break',
        level: 2,
        content:
          "End on the couple. Not on yourself, not on a joke about the bar, not on a rambling afterthought. The last words out of your mouth should be their names. Everything in your speech has been building to this moment. All the humor, all the stories, all the sincerity funnels down to two people and a raised glass. Make it about them. Always.",
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
          "Let's get this out of the way: most quotes in wedding speeches are a crutch. They're what people reach for when they don't trust their own words to carry the weight. And look, there's no shame in that instinct. Saying something meaningful about love is hard. But borrowing someone else's words to do it is almost always the wrong call. Almost. There are a few situations where a quote genuinely elevates a speech. The trick is knowing the difference between using a quote as a scalpel and using it as a crutch.",
      },
      {
        heading: 'When Quotes Actually Work',
        level: 2,
        content:
          "A quote works when it has a personal connection to the couple. If the bride's favorite book is Pride and Prejudice and you quote Darcy's letter, that's not lazy. That's a love letter to someone's personality. A quote also works when it sets up your own thought. Use it as a springboard, not a landing pad. 'Shakespeare said love is not love which alters when it alteration finds. I didn't understand that until I watched [name] care for [name] during the worst year of their life.' See? The quote is the setup. Your words are the payoff. Finally, quotes work when they're unexpected. Nobody needs to hear 'Love is patient, love is kind' again. But a well-placed line from a comedian, a song lyric that means something specific, or a quote from the couple's grandmother? That can be electric.",
      },
      {
        heading: 'When Quotes Are Lazy',
        level: 2,
        content:
          "If you're opening your speech with a Google search result for 'best love quotes,' stop. If the quote could apply to literally any couple on earth, it's not adding anything. If you're using a quote because you don't know what else to say, it will feel exactly like that: filler from someone who ran out of their own material. The worst offenders are: anything from a Hallmark card, generic Rumi translations that float around Pinterest, 'Where there is love there is life' (Gandhi probably didn't even say that in this context), and any quote that starts with 'They say.' Who says? Nobody knows. That's the problem.",
      },
      {
        heading: 'The Overused Quotes Hall of Shame',
        level: 2,
        content:
          "If you're considering any of these, reconsider. 'Love is patient, love is kind' from Corinthians: beautiful in church, wallpaper in a speech. 'To love and be loved is to feel the sun from both sides' attributed to David Viscott: sounds lovely, means almost nothing. 'A successful marriage requires falling in love many times, always with the same person' from Mignon McLaughlin: clever but so overused it's lost its punch. 'You know you're in love when you can't fall asleep because reality is finally better than your dreams' attributed to Dr. Seuss, who almost certainly never said it. If your quote shows up on the first page of Google results for 'wedding quotes,' it's been in approximately 40,000 speeches this year. Pick something else.",
      },
      {
        heading: 'How to Use a Quote Without Sounding Like a Greeting Card',
        level: 2,
        content:
          "Rule one: never let the quote be the emotional climax of your speech. That's your job. Rule two: introduce the quote with context. Don't just drop it in cold. Tell the room why this particular line matters to you or to the couple. 'There's a line in a song that [name] used to play on repeat during college, and I never understood why until tonight.' Now the quote has a frame. It belongs to someone. Rule three: keep it short. A full stanza of poetry is a poetry reading, not a wedding speech. One or two lines maximum. Rule four: transition out of the quote into your own words immediately. The quote opens a door. You walk through it.",
      },
      {
        heading: 'Better Alternatives to Famous Quotes',
        level: 2,
        content:
          "You know what's better than quoting a dead poet? Quoting the couple. If the bride once said something hilarious or profound about love, use that. If the groom texted you something unexpectedly sweet after the proposal, read it aloud (with permission). Quote their wedding vows back to them. Quote something their parents said. Quote something a kid at the wedding said during cocktail hour. These 'quotes' are a thousand times more powerful than anything from a book of quotations because they belong to the people in the room. They can't be Googled. They're real.",
      },
      {
        heading: 'The Verdict',
        level: 2,
        content:
          "Use a quote if it's personal, specific, and brief. Skip the quote if it's generic, Googleable, or doing the emotional heavy lifting your own words should be doing. When in doubt, leave it out. Your own clumsy, honest, imperfect words about someone you love will always land harder than the most polished line from someone who never met them. Trust yourself. You were asked to give this speech for a reason, and it wasn't because you're good at searching the internet for quotes.",
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
          "Every wedding speech guide gives you the same vague advice: be yourself, keep it short, don't mention exes. And that's fine as far as it goes, which is not very far. The reality is that wedding speeches fail in very specific, very preventable ways. This is the comprehensive list of dos and don'ts, drawn from hundreds of real speeches that went right and wrong. Pin this. Print it. Tape it to your bathroom mirror the week before the wedding.",
      },
      {
        heading: 'The Dos: What to Actually Do',
        level: 2,
        content:
          "Do write your speech out in full. Not bullet points, not an outline, the whole thing word for word. You can loosen it up when you deliver it, but write the tight version first. Do practice out loud at least three times. Reading silently doesn't count. You need to hear the rhythm, find the stumbles, and time it. Do keep it under five minutes. Three to four minutes is the sweet spot for most speeches. Do open with something that gets the room's attention: a joke, a surprising statement, a vivid image. Do include at least one specific story. Specifics are what make speeches memorable. Do address both halves of the couple, even if you only know one well. Do end with a clear toast. Give the audience a signal that you're done and something to do about it.",
      },
      {
        heading: "The Don'ts: What Will Ruin Everything",
        level: 2,
        content:
          "Don't mention exes. Ever. For any reason. There is no version of this that goes well. Don't make inside jokes that only two people in the room understand. If more than half the audience is confused, the joke has failed. Don't get drunk before your speech. Have one drink to take the edge off if you must, but save the celebration for after. Don't read your speech off your phone with your head down the entire time. Notes are fine. A hostage video is not. Don't go over five minutes. Don't wing it. Don't start with 'For those of you who don't know me.' Don't use the speech to settle scores, air grievances, or make passive-aggressive comments disguised as humor.",
      },
      {
        heading: 'The Subtle Dos Most People Miss',
        level: 2,
        content:
          "Do make eye contact with the couple during the emotional parts and with the audience during the funny parts. Do vary your pace: slow down for the sincere moments, speed up slightly for the humorous ones. Do acknowledge the other families. A single line welcoming the other side costs you nothing and means a lot. Do have a glass of water nearby. Dry mouth is real and it will find you at the worst possible moment. Do thank the hosts if appropriate. And do remember that your job is to make the couple look good. Not yourself. Every story, every joke, every observation should ultimately reflect well on them.",
      },
      {
        heading: "The Subtle Don'ts That Seem Harmless But Aren't",
        level: 2,
        content:
          "Don't apologize for your speech before you give it. 'I'm not great at public speaking' sets the bar at the floor and the audience's expectations follow it right down there. Don't try to make people cry. If tears happen, great. But engineering tears feels manipulative, and audiences can tell. Don't tell stories where you're the hero instead of the couple. Don't use your speech to audition for a comedy career. Two or three good laughs are plenty. Don't reference how attractive the bridesmaids or groomsmen are. It's creepy every time, even when it gets a nervous laugh. And don't propose, announce a pregnancy, or make any personal revelation during someone else's wedding speech. Read the room. This day is not about you.",
      },
      {
        heading: 'Dos and Don\'ts for Specific Situations',
        level: 2,
        content:
          "If you're speaking at a second wedding: do acknowledge that this is a fresh start and a celebration. Don't reference the first marriage. If there are children from previous relationships: do include them warmly. Don't ignore them or make it weird. If a close family member has recently passed: do mention them briefly and lovingly. Don't turn your speech into a eulogy. If the couple has been together for a very long time: do joke about how long it took. Don't imply the marriage is overdue or question why they waited. If you're speaking in a second language: do keep it simple and speak slowly. Don't apologize for your accent. Nobody cares about your accent. They care about your sincerity.",
      },
      {
        heading: 'The Golden Rule of Wedding Speeches',
        level: 2,
        content:
          "When in doubt, ask yourself: will this make the couple happy to hear? If the answer is anything other than an immediate yes, cut it. Your speech is a gift. Not a roast, not a therapy session, not a performance review. A gift. And the best gifts are the ones that show you paid attention, that you care, and that you put in the effort. Everything else is just technique.",
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
          "Here's an awkward situation nobody talks about: you've been asked to give a speech at a wedding and you don't really know one or both halves of the couple very well. Maybe you're the best man but you've drifted apart. Maybe you're the maid of honor for a college friend whose partner you've met exactly twice. Maybe you're a step-parent who entered the picture recently. Whatever the reason, you're standing in front of a crowd expected to say something personal about people you're not that personal with. Don't panic. This is more common than anyone admits, and there's a playbook for it.",
      },
      {
        heading: 'Do Your Homework',
        level: 2,
        content:
          "If you don't have enough material from personal experience, go get some. Call the couple's friends and family. Ask open-ended questions: what's a story about them that always makes you laugh? When did you know they were the one for each other? What's something most people don't know about them? You're not being lazy by asking for help. You're being thorough. Journalists do this for a living. You're essentially reporting on a love story. Three or four phone calls can give you more than enough material for a three-minute speech. And the couple will be genuinely touched that you went to the effort.",
      },
      {
        heading: 'Focus on What You Do Know',
        level: 2,
        content:
          "You know something. Even if it's not much, anchor your speech in whatever authentic connection you do have. Maybe you only have one great story about the bride, but it's a really good one. That's enough. One vivid, specific, well-told story beats five generic anecdotes every time. Maybe you don't know the couple's history, but you were there for the engagement party and watched them interact all night. Describe what you saw. Observations can be as powerful as shared memories. You don't need to pretend you have a deeper relationship than you do. Authenticity always wins.",
      },
      {
        heading: 'The Honesty Approach',
        level: 2,
        content:
          "There's a version of this speech that leans into the truth and works beautifully. Something like: 'I'll be honest. When [name] asked me to be their best man, I realized we hadn't had a proper conversation in about two years. So I called them. And that phone call lasted three hours. And by the end of it, I knew two things: I'd been a terrible friend, and [partner] was the best thing that ever happened to them.' This is disarming, genuine, and it turns a weakness into a strength. The audience respects honesty. They can smell fake intimacy from across the room.",
      },
      {
        heading: 'What to Do When You Only Know One Half',
        level: 2,
        content:
          "This is extremely common. You're the bride's best friend and you've met the groom maybe five times. Here's the move: speak from your expertise. You know the bride. You know what she was looking for, what she was afraid of, what makes her light up. Talk about the change you've seen in her since this person entered her life. You don't need to know the groom's childhood nickname. You need to know what he brought out in your friend. 'I don't know [partner] as well as I'd like. But I know [friend], and I know that whoever could make them this happy is someone I want in my life forever.' That's honest, generous, and it welcomes the partner without pretending you're close.",
      },
      {
        heading: 'Stories You Can Tell Without Deep Knowledge',
        level: 2,
        content:
          "You can always talk about: the moment you found out about the relationship and your reaction. The first time you met the partner and your first impression (if it was positive or funny). Something you observed about the couple's dynamic at a gathering. How the person you do know has changed since the relationship started. The engagement announcement and how it made you feel. The process of preparing for this speech and what you learned along the way. None of these require years of shared history. They just require paying attention and being willing to be genuine about what you noticed.",
      },
      {
        heading: 'The One Thing You Should Never Do',
        level: 2,
        content:
          "Never fake closeness. Don't pretend you and the groom are inseparable when everyone in the room knows you met last Thanksgiving. Don't invent a depth of relationship that doesn't exist. People will see right through it, and it will make your actual sincere moments ring hollow. The best speeches from people who don't know the couple well are the ones that are honest about the distance and bridge it with warmth, effort, and genuine good wishes. You don't have to be their closest friend to give a great speech. You just have to be honest about who you are to them and make that count.",
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
          "Being maid of honor means you've been handed a microphone and told to summarize why your favorite person chose their favorite person. No big deal. The MOH speech is one of the most anticipated moments of any reception, and it carries a specific set of expectations. You're expected to be funny but not a comedian, emotional but not a mess, personal but not exclusionary. It's a tightrope, and this guide is your balance pole.",
      },
      {
        heading: 'What the Audience Expects From You',
        level: 2,
        content:
          "The audience wants three things from a maid of honor speech: a window into who the bride really is, a story about the couple that makes them root for the relationship, and a moment of genuine emotion that makes the bride tear up in a good way. That's it. You don't need to be Shakespeare. You don't need to be a stand-up comic. You need to show up as the person who knows the bride best and prove it with specifics. The bar is actually pretty achievable if you prepare. The speeches that bomb are almost always the ones that weren't prepared.",
      },
      {
        heading: 'The Ideal Structure',
        level: 2,
        content:
          "Open with a hook: a funny line, a surprising statement, or a vivid moment. Then briefly establish who you are and your relationship to the bride. Move into your first story, which is usually about the bride. This is where you show the room who she is when the cameras aren't on. Transition to the couple: when you first knew this was different, what you've observed about their relationship, how the partner changed your friend for the better. Then shift to a direct address to the couple with your sincere wishes. Close with a toast. Total time: three to four minutes. Five is the absolute maximum.",
      },
      {
        heading: 'Finding Your Stories',
        level: 2,
        content:
          "The best MOH stories are small, specific, and revealing. You're not looking for the most dramatic thing that ever happened. You're looking for the moment that captures who this person really is. The time she drove three hours to bring you soup when you were sick. The way she talks about her partner when they're not in the room. The text she sent you at 1 AM after the first date that made you realize this one was different. Go through your text messages, your photos, your shared memories. The story that makes you smile the most is probably the one to tell. Just make sure it's appropriate for grandparents to hear.",
      },
      {
        heading: 'How to Talk About the Partner',
        level: 2,
        content:
          "This is where a lot of MOH speeches fall flat. You spend so much time on the bride that the partner becomes an afterthought. Remember: this speech is ultimately about a marriage, not just a person. You need to show the room why this particular partnership works. Talk about what you've noticed. How the bride is calmer around them. How they balance each other out. How you've never seen your friend laugh harder than when they're together. If you don't know the partner well, say so honestly and then pivot to what you do know: the effect they've had on someone you love. That's more than enough.",
      },
      {
        heading: 'Emotional Moments Without Losing It',
        level: 2,
        content:
          "You're probably going to get emotional. That's fine. A few tears are charming and show you mean what you're saying. Full-on sobbing is harder to recover from and can derail your speech. Here's the trick: practice the emotional parts more than any other section. The reason people cry during speeches is that they're feeling an emotion for the first time while speaking. If you've already felt it six times in rehearsal, it won't hit you as hard in the moment. If you do start to lose it, pause. Take a breath. Take a sip of water. The audience will wait. They're on your side.",
      },
      {
        heading: 'Common MOH Speech Mistakes',
        level: 2,
        content:
          "Don't turn it into a roast. A little gentle teasing is fine, but if your speech is 80% embarrassing stories, you've misjudged the assignment. Don't make it a chronicle of your friendship. 'And then in sophomore year... and then at that music festival... and then at your birthday...' is a timeline, not a speech. Pick one or two moments and go deep. Don't forget the partner entirely. Don't use inside jokes that exclude the room. Don't get so drunk beforehand that your delivery suffers. And don't read it entirely off your phone without ever looking up. Notes are fine. Eye contact is better.",
      },
      {
        heading: 'Your Secret Weapon',
        level: 2,
        content:
          "You have an advantage nobody else giving a speech tonight has: you know the bride better than almost anyone in the room. That's not just a fact. It's a superpower. Use it. Tell the room something they don't know. Show them a side of the bride they haven't seen. Make the bride feel seen in a way that only you can. That's what separates a good maid of honor speech from a great one. It's not about being the funniest or the most eloquent. It's about being the most real.",
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
          "The father of the bride speech is the one everyone secretly expects to be the most emotional moment of the reception. No pressure. This speech carries a unique weight because it represents a passage: you're publicly acknowledging that your child has built a life with someone else, and you're welcoming that person into your family. It's a lot to put into four minutes. But fathers have been doing this for centuries, and the good news is that the bar for sincerity is low because most people expect dads to be awkward up there. You just have to be genuine.",
      },
      {
        heading: 'The Traditional Role and How It Has Evolved',
        level: 2,
        content:
          "Traditionally, the father of the bride speaks first and sets the tone for the evening. He welcomes guests, thanks people for coming, and says something about his daughter and her new spouse. That structure still works, but it's not mandatory. Modern FOB speeches are less about performing a formal role and more about sharing a father's perspective. You can still welcome guests, but the heart of the speech should be personal, not procedural. Nobody remembers the logistics. Everyone remembers the moment a dad's voice cracked talking about his kid.",
      },
      {
        heading: 'What to Include',
        level: 2,
        content:
          "Start with a brief welcome. Thank the guests for being there and acknowledge anyone who traveled far. Then move into the personal stuff. A memory of your daughter that shows who she is. Not a generic 'she was always special' statement, but a specific moment. The time she stood up for a friend. The way she attacked every challenge with a plan. The phone call where she told you about this person and you could hear it in her voice. Then turn to the partner: welcome them, say something genuine about what they bring to your daughter's life. Close with your wishes for the couple and a toast.",
      },
      {
        heading: 'Finding the Right Story',
        level: 2,
        content:
          "The best father of the bride stories are the ones that reveal character, not just cuteness. Yes, she was adorable at age five. But what about age fifteen, when she did something that showed you the adult she was becoming? What about the moment you realized she didn't need you to solve her problems anymore? The most powerful FOB speech stories are about the transition from child to adult, because that's exactly what this day represents. Don't be afraid to go beyond the baby photos. The audience wants to see that you know your daughter as a person, not just as your little girl.",
      },
      {
        heading: 'Welcoming the New Family Member',
        level: 2,
        content:
          "This is the part a lot of fathers skip or phone in, and it's a mistake. Welcoming your child's partner into the family is one of the most meaningful things you can do in this speech. It doesn't have to be long. A few sentences about what you've observed, what you appreciate, and how glad you are that your daughter found them. If you have a genuine compliment or a brief story about the partner, include it. If you're not close to them yet, that's OK. Say something like: 'I'm still getting to know [name], but what I do know is that my daughter chose them. And that's always been good enough for me.'",
      },
      {
        heading: 'The Emotional Tightrope',
        level: 2,
        content:
          "Here's the deal: people expect you to get emotional. And you should. A father who tears up during his daughter's wedding speech is practically a requirement. But there's a difference between being moved and being unable to continue. Practice the parts that hit you hardest. Read them out loud to your partner, to the dog, to an empty room. The fifth time won't hit as hard as the first. If you do get choked up during the speech, pause. Nobody is timing you. Take a breath, take a sip of water, and keep going. The pause itself is powerful. It tells the room this is real.",
      },
      {
        heading: 'Common FOB Mistakes',
        level: 2,
        content:
          "Don't make the whole speech about you. Your feelings matter, but this is her day. Don't give the partner a warning or a threatening 'you'd better take care of her' line. It's not funny. It's controlling, and your daughter is not property being transferred. Don't list every accomplishment your daughter has ever achieved. It's a speech, not a resume. Don't forget to mention the partner. Don't go over five minutes. And don't wing it. Even if you're great at speaking off the cuff in business meetings, this is different. Write it down. Practice it. Honor the occasion with preparation.",
      },
      {
        heading: 'Why Your Speech Matters More Than You Think',
        level: 2,
        content:
          "Your daughter is going to remember this speech for the rest of her life. That's not an exaggeration. She's going to remember what you said, how you looked, and how you made her feel on this day. So say the thing you've been meaning to say. Tell her you're proud. Tell her you love who she's become. Tell her that watching her build a life with someone has been one of the great joys of yours. You don't need to be eloquent. You need to be honest. That's always been enough from a parent.",
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
          "For a long time, the mother of the bride didn't give a speech at all. The dad spoke, the best man spoke, and the MOB sat at the head table and smiled. That era is mercifully over. More mothers of the bride are speaking now than ever before, and the speeches are consistently some of the best of the night. Why? Because mothers tend to bring a combination of emotional intelligence, specific observation, and zero tolerance for nonsense that makes for incredibly compelling speeches. If you've been asked to speak, or if you've decided you're going to, this guide will help you do it brilliantly.",
      },
      {
        heading: 'Should You Give a Speech?',
        level: 2,
        content:
          "If your daughter asked you to, absolutely yes. If nobody asked you but you feel moved to, talk to the couple first. Some weddings have a tight timeline and every speech slot is accounted for. Some couples would be thrilled to have you speak and just didn't think to ask. The worst thing you can do is surprise everyone by grabbing the mic during dinner. Have the conversation. If the answer is yes, prepare properly. If the answer is 'we'd rather you didn't,' respect it gracefully. There may be other ways to share your words: a letter, a moment during the getting-ready photos, a private toast at the rehearsal dinner.",
      },
      {
        heading: 'What Makes an MOB Speech Different',
        level: 2,
        content:
          "The mother of the bride occupies a unique emotional position. You've known this person longer than anyone in the room. You've seen every version of them: the toddler, the teenager, the young adult figuring things out, and now the person standing next to their partner in wedding attire. Your perspective is irreplaceable. An MOB speech works best when it draws on that long view. You're not just telling a story from college. You're drawing a line from who she was to who she's become. That's a narrative arc nobody else at the wedding can offer.",
      },
      {
        heading: 'A Structure That Works',
        level: 2,
        content:
          "Open by addressing the room warmly. You can welcome guests, thank people who helped plan the wedding, or simply express how it feels to be standing here today. Move into a story or observation about your daughter. Choose something that reveals character. Then pivot to the relationship: when you first saw the two of them together, what you noticed, what gave you confidence this was the real thing. Address the partner directly with warmth and welcome. Close with your wishes and a toast. Aim for three to four minutes. If both parents are speaking separately, keep yours to three.",
      },
      {
        heading: 'The Stories Only You Can Tell',
        level: 2,
        content:
          "As a mother, you have access to stories nobody else has. The things she said as a child that turned out to be prophetic. The way she always needed the closet light on but insisted she wasn't afraid. The first time she came home from a date glowing and tried to play it cool. These small, specific memories are gold because they're intimate without being embarrassing. They show the room a private, tender side of someone they all love. The key is picking stories that connect to today. That little girl who was afraid of nothing is now brave enough to commit her life to another person. That's the thread.",
      },
      {
        heading: 'Handling Emotion During the Speech',
        level: 2,
        content:
          "You're going to feel a lot of things up there. Pride, joy, a little sadness, maybe the surreal feeling that time moved faster than you agreed to. That's all supposed to happen. Let it. A mother who gets emotional during her speech is not a problem. It's a gift to the room. The only risk is if the emotion prevents you from finishing. So practice the hard parts until they're not quite as hard. Mark the places in your speech where you know you'll get choked up. Practice pausing there. Have water nearby. And remember that the audience is pulling for you. They want you to get through it. They'll wait.",
      },
      {
        heading: 'What to Avoid',
        level: 2,
        content:
          "Don't compete with the father's speech. If you're both speaking, coordinate so you're not telling the same stories. Don't use the speech to process complicated feelings about your daughter growing up. That's what therapy and wine are for. Don't give unsolicited marriage advice unless it's brief and funny. Don't talk about yourself more than the couple. And don't apologize for being emotional. You're a mother watching your child get married. Emotions are literally the point.",
      },
      {
        heading: 'Make It Yours',
        level: 2,
        content:
          "The best MOB speeches sound like the person giving them. If you're funny, be funny. If you're poetic, be poetic. If you're the kind of mother who shows love through practical acts, talk about that. Your daughter didn't ask you to be someone else. She asked you to be her mom, standing in front of everyone, saying the things that matter. So say them. In your voice. In your way. It'll be perfect because it's real.",
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
          "Here's something nobody tells the groom: your speech might be the most important few minutes of the entire reception. Not because it needs to be the funniest or the most polished, but because every person in that room is watching to see how you talk about the person you just married. This is your chance to show them. Not with vows (those already happened), but with a speech that's part thank-you, part love letter, and part proof that you understand how lucky you are.",
      },
      {
        heading: 'What the Groom Speech Is Actually For',
        level: 2,
        content:
          "The groom's speech traditionally serves as a thank-you speech. You're thanking the guests for coming, the parents for their support, the wedding party for their help, and your new spouse for saying yes. That's the skeleton. But the best groom speeches layer genuine emotion and personality on top of those thank-yous. The thank-yous are the structure. The personal stuff is what makes it a speech people remember. Don't just tick boxes. Use the thank-yous as a framework and fill them with real moments.",
      },
      {
        heading: 'A Structure That Delivers',
        level: 2,
        content:
          "Open with a light moment: thank everyone for coming, make a quick joke about the day so far, or acknowledge how surreal it feels to be standing here. Then move through your thank-yous: parents (both sets), the wedding party, anyone who contributed significantly. Keep these genuine but brief. Nobody needs a five-name thank-you list delivered like an Oscar acceptance speech. Then shift to your spouse. This is the main event. Tell the room what they mean to you. Be specific. Be honest. Close with a toast to your new spouse or to everyone in the room. Three to five minutes total.",
      },
      {
        heading: 'Thanking the Parents',
        level: 2,
        content:
          "Thank both sets of parents. Mention them by name. If they helped pay for the wedding, acknowledge their generosity without getting into specifics. If they supported you in other ways, say so. This is also a good moment to welcome your new in-laws into the family. Even one line of genuine warmth directed at your partner's parents will mean the world to them. If you have a complicated family situation, keep it simple and gracious. You don't need to narrate every relationship dynamic. Just be kind and move on.",
      },
      {
        heading: 'Talking About Your Spouse',
        level: 2,
        content:
          "This is the part everyone's waiting for. Don't let them down by being vague. 'She's the most amazing person I've ever met' is a nice sentiment that tells the room absolutely nothing. Instead, show them. Talk about a specific moment that captured what you love about this person. The way they handled a crisis. The thing they said on a random Tuesday that made you realize you were in over your head. The quality they have that makes your life tangibly better. One specific, honest observation about your partner is worth a hundred generic compliments. Make the room see what you see.",
      },
      {
        heading: 'How Much Humor Is Right?',
        level: 2,
        content:
          "Enough to keep things light, not so much that it feels like you're avoiding sincerity. The groom's speech should lean more heartfelt than funny, but that doesn't mean it should be humorless. A self-deprecating joke about how long it took you to propose, a funny observation about wedding planning, a quick dig at the best man before he gives his speech: these all work. Just make sure the emotional center of your speech is genuine. Humor should frame the sincerity, not replace it. If your speech is all jokes, people will wonder whether you actually like your spouse.",
      },
      {
        heading: 'Common Groom Speech Mistakes',
        level: 2,
        content:
          "Don't turn your speech into a marathon thank-you list. Five minutes of 'I'd also like to thank...' is death. Don't forget to talk about your spouse. It sounds obvious, but nervous grooms often spend so long on thank-yous that they run out of time for the important part. Don't try to be someone you're not. If you're not naturally funny, don't force jokes. If you're not naturally emotional, don't force tears. Just be the version of yourself your spouse fell in love with. And for the love of everything, don't reference the wedding night. It's not as funny as you think it is, and at least three relatives will be uncomfortable.",
      },
      {
        heading: 'The Moment That Matters',
        level: 2,
        content:
          "At some point in your speech, look at your spouse and talk directly to them. Not to the crowd, not to the best man, not to the floor. To them. Tell them something real. Something the room gets to overhear but that's really just for them. This is the moment people will photograph. This is the moment people will remember. It doesn't have to be long. Three sentences is enough. But it has to be real. If you mean it, the room will feel it. And your spouse will carry those words with them long after the cake is gone and the DJ has packed up.",
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
          "Tradition says the bride doesn't give a speech. Tradition also said women couldn't own property or wear pants, so maybe tradition isn't the best guide for everything. More brides are speaking at their own weddings than ever before, and the results are consistently spectacular. Brides tend to give speeches that are more emotionally honest, more specific, and more memorable than anyone else on the lineup. If you want to speak at your wedding, speak at your wedding. This guide will help you do it on your terms.",
      },
      {
        heading: 'Why More Brides Are Choosing to Speak',
        level: 2,
        content:
          "Because it feels weird to sit silently while everyone else talks about you. Because you have things to say and you'd like to say them in your own words. Because the idea that the bride should be seen and not heard at her own celebration is, frankly, absurd. Some brides give solo speeches. Some speak jointly with their partner. Some replace the traditional lineup entirely and are the only one who speaks. There's no wrong approach. The only wrong choice is staying silent because someone told you it 'isn't done.' It is done. By thousands of brides every year. And the weddings are better for it.",
      },
      {
        heading: 'What to Include in Your Speech',
        level: 2,
        content:
          "The bride's speech can be whatever you want it to be. But a few elements tend to work well. Thank the people who made the day possible: parents, the wedding party, anyone who went above and beyond. Welcome your partner's family, especially if you haven't had a chance to do so publicly. Tell the room something about your partner that shows why you chose them. Not a list of adjectives. A moment. A story. A specific thing they did that made your heart do something unexpected. And if you want, share something about your own journey to this day. You have a perspective nobody else can offer.",
      },
      {
        heading: 'Finding Your Voice',
        level: 2,
        content:
          "The hardest part of giving a bride's speech is that there isn't a template. Best man speeches have a formula. Father of the bride speeches have a formula. Bride speeches are still being invented, which is both freeing and terrifying. Here's the good news: you don't have to follow anyone else's blueprint. Be funny if you're funny. Be sentimental if you're sentimental. Be brief if you're private. Be expansive if you're not. The audience has no preset expectations for your speech, which means anything genuine will land. That's a luxury the best man doesn't have.",
      },
      {
        heading: 'Addressing Your Partner',
        level: 2,
        content:
          "This is the centerpiece of your speech. Look at the person you married and tell them something true. Not the things you said in your vows, which were a commitment. This is different. This is a celebration. Tell them what you love about ordinary Wednesdays with them. Tell them about the moment you knew. Tell them about the quality they have that nobody else seems to notice but you can't stop noticing. The room disappears for a moment when you do this. It's just you and them. And every person watching will feel what it's like to be loved that specifically. That's the gift your speech gives the room.",
      },
      {
        heading: 'Navigating the Logistics',
        level: 2,
        content:
          "Talk to your wedding planner or MC about when your speech will happen. It can go anywhere in the traditional lineup. Some brides speak right after the groom. Some speak after all the other speeches as a final word. Some speak first to set the tone. If you're speaking jointly with your partner, plan who says what so you're not talking over each other. Decide in advance whether you want a microphone or not (hint: you want a microphone). And keep it to three to four minutes. You have an entire marriage to say everything. Tonight, pick the highlights.",
      },
      {
        heading: 'Dealing With Pushback',
        level: 2,
        content:
          "If someone tells you it's 'not traditional' for the bride to speak, smile and say, 'I know.' You do not owe anyone an explanation for wanting to use your voice at your own wedding. If your partner is supportive, that's all the permission you need. If a parent has concerns, hear them out and then do what you want. Most resistance comes from unfamiliarity, not malice. Once people hear your speech, they'll wonder why it was ever considered optional.",
      },
      {
        heading: 'You Deserve to Be Heard',
        level: 2,
        content:
          "This is your day too. Not just your partner's day, not just a day for the parents and the wedding party. Yours. And your voice, your words, your perspective on this relationship and this moment matter. Giving a speech at your own wedding isn't breaking tradition. It's creating a new one. One where the person at the center of the celebration gets to say how she feels about being there. That's not radical. That's just right.",
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
          "The father of the groom speech is the most underestimated speech at any wedding. It's shorter than the FOB speech, less expected than the best man's, and often treated as optional. That's actually an advantage. When expectations are low, even a decent speech feels like a revelation. And a great one? A great one steals the night. You have a window of two to three minutes to say something that your son, their partner, and the entire room will remember. Here's how to use it well.",
      },
      {
        heading: 'Your Role in the Lineup',
        level: 2,
        content:
          "At many weddings, the father of the groom doesn't speak at all. At others, he gives a brief toast, usually after the father of the bride. Your speech is typically shorter and lighter than the FOB speech, partly because of tradition and partly because the groom's family isn't usually the one hosting. But none of that limits what you can do with your moment. Think of it this way: you have the element of surprise. Nobody expects the father of the groom to deliver the emotional knockout of the evening. When you do, it hits harder because nobody saw it coming.",
      },
      {
        heading: 'What to Say in Two to Three Minutes',
        level: 2,
        content:
          "Keep it focused. You don't have time to cover everything, so pick one or two things and say them well. Welcome the guests briefly. Say something genuine about your son: a quality you're proud of, a moment that defined who he is. Welcome your new daughter- or son-in-law into the family with warmth and specificity. Share what you've observed about the couple together. Close with a toast. That's it. Two to three minutes of substance is infinitely better than five minutes of filler. Every word should earn its spot.",
      },
      {
        heading: 'Talking About Your Son',
        level: 2,
        content:
          "This is your chance to show the room who your son is when nobody's watching. Not the resume version. The real version. The kid who spent an entire summer building a treehouse that immediately fell down and started again the next morning. The teenager who called you from college not because he needed money but because he wanted your advice. The man who sat across from you at dinner and told you he'd found the person he wanted to spend his life with. Pick one story. Make it specific. Make it true. The room will see your son through your eyes, and that's a gift.",
      },
      {
        heading: 'Welcoming Your New Family Member',
        level: 2,
        content:
          "This part matters more than most fathers of the groom realize. Your son's partner is joining your family. Say so. Make it explicit and make it warm. You don't need a long speech about it. Even two or three sentences of genuine welcome can be deeply moving. 'When [name] first came to our house for dinner, they helped clear the table without being asked. I knew right then.' Specifics like that show you've been paying attention. And to someone joining a new family, being seen is everything.",
      },
      {
        heading: 'Coordinating With the Other Speeches',
        level: 2,
        content:
          "If the father of the bride is also speaking, talk to them beforehand. Not to script everything, but to make sure you're not telling the same stories or hitting the same beats. The FOB speech tends to focus on the bride and her childhood. Yours should focus on the groom and the couple. If the mother of the groom is also speaking, divide the material. Maybe she tells the emotional story and you do the funny one, or vice versa. The goal is for the evening to feel varied, not repetitive.",
      },
      {
        heading: 'Keep It Warm, Keep It Brief',
        level: 2,
        content:
          "The father of the groom speech is at its best when it's warm, genuine, and mercifully short. Don't try to compete with the longer speeches. Don't try to be the funniest person on the mic. Just be a father who's proud of his kid and happy about the family that's being built. Say something real about your son. Say something kind about their partner. Raise your glass. Sit down. And enjoy the fact that for two minutes, you held a room full of people in the palm of your hand and made them feel something. That's not a small thing. That's everything.",
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
          "Let's address the elephant in the room. The mother of the groom speech sometimes feels like the opening act nobody asked for. The bride's family gets the spotlight, the best man gets the laughs, and you get... a polite slot somewhere between the salad course and the cake cutting.\n\nBut here's the thing. You raised the person standing up there. You have stories nobody else has. You have a perspective on this marriage that is genuinely unique. A great mother of the groom speech isn't about competing for attention. It's about adding a layer of warmth and depth that only you can provide.\n\nThe key is knowing your lane and owning it completely.",
      },
      {
        heading: 'Do You Even Have to Give a Speech?',
        level: 2,
        content:
          "Traditionally, the mother of the groom doesn't give a formal toast at the reception. But traditions are changing fast, and plenty of modern weddings include a mother of the groom speech. If you've been asked to speak, congratulations. If you're wondering whether to volunteer, have a quiet conversation with the couple first. Don't just grab the mic after three glasses of champagne.\n\nSome weddings slot the mother of the groom into the rehearsal dinner instead, which is actually a fantastic option. The rehearsal dinner is typically hosted by the groom's family anyway, so you're on home turf. The crowd is smaller, the vibe is more relaxed, and you can speak a little longer without anyone checking their watch.",
      },
      {
        heading: 'What to Actually Say: The Core Structure',
        level: 2,
        content:
          "A strong mother of the groom speech hits four beats, in roughly this order:\n\n1. Welcome everyone and thank the hosts (if that's not you)\n2. Share a brief, warm story about your son\n3. Welcome your new daughter-in-law (or son-in-law) into the family\n4. Toast the couple\n\nThat's it. You don't need to deliver a TED Talk. You don't need to cover your son's entire life from birth to bachelor party. Pick one or two moments that reveal who he is, then pivot to how happy you are about this marriage.\n\nAim for three to five minutes. If your speech is under two minutes, it might feel rushed. Over six and you're testing everyone's patience, including your own.",
      },
      {
        heading: 'The Story That Makes It Personal',
        level: 3,
        content:
          "The best mother of the groom speeches include a story that shows your son's character in a way that connects to the marriage. Maybe it's the time he insisted on nursing a baby bird back to health (showing his caring nature). Maybe it's the way he always made sure his little sister got the bigger slice of cake.\n\nWhat you're NOT looking for: stories about ex-girlfriends, embarrassing bathroom incidents, or anything that requires the phrase \"you had to be there.\" You're also not looking for stories that are really about you. \"I remember when I taught him to ride a bike\" is about you. \"He fell off that bike fourteen times and got back on fifteen\" is about him.\n\nThe story should naturally lead into why this marriage makes sense. \"He's always been the kind of person who shows up for the people he loves, and I can see he's found someone who does the same.\"",
      },
      {
        heading: 'Welcoming the New Addition',
        level: 2,
        content:
          "This is the part a lot of mothers of the groom rush through, and it's actually the most important section of your speech. The audience wants to hear you genuinely embrace your child's partner.\n\nBe specific. \"We're so happy to welcome Sarah into the family\" is fine but forgettable. \"From the first time Jake brought Sarah home for Thanksgiving and she jumped right in to help with the dishes, then stayed up until midnight laughing with his dad about terrible action movies, I knew she was one of us\" is a hundred times better.\n\nIf your relationship with the partner is still developing, that's okay. You don't have to fake a deep bond. Focus on what you've observed about how they treat your child. \"I've watched my son become more confident, more adventurous, and somehow even kinder since meeting Alex\" is honest and generous without overselling.",
      },
      {
        heading: 'Emotional Landmines to Avoid',
        level: 2,
        content:
          "Weddings are emotional. Mother of the groom speeches are especially emotional. Here's what to steer clear of:\n\nDon't make it about losing your son. Phrases like \"I'm not losing a son, I'm gaining a daughter\" are so overused they've lost all meaning. And honestly, the subtext of \"losing a son\" is a little guilt-trippy, even when you don't mean it that way.\n\nDon't compare the partner to yourself. \"She reminds me so much of me when I was young\" makes the speech about you and puts weird pressure on the partner.\n\nDon't reference divorce, whether yours or anyone else's. Even if you're happily remarried and it all worked out great, today isn't the day.\n\nDon't give unsolicited marriage advice unless it's genuinely funny and self-deprecating. \"The secret to a happy marriage is separate bathrooms\" works. \"Never go to bed angry\" is a bumper sticker.\n\nDon't cry through the whole thing. A few tears are touching. Five straight minutes of sobbing while the audience shifts uncomfortably is not the vibe you want. Practice enough that you can get through the emotional parts. Pause, breathe, sip water, and keep going.",
      },
      {
        heading: 'If You Have a Complicated Relationship',
        level: 2,
        content:
          "Not every mother-son relationship is a Hallmark movie. Maybe you and your son went through a rough stretch. Maybe you weren't always present. Maybe the relationship is loving but not particularly close.\n\nYou can still give a beautiful speech. Focus on what's true right now. \"Watching the man Jake has become fills me with more pride than I can express\" works whether you were there for every baseball game or reconnected later in life. You don't have to narrate the complicated parts. The audience doesn't need the full backstory.\n\nIf co-parenting dynamics are tricky (your ex is there, step-parents are involved), keep it simple and gracious. Acknowledge the other parent briefly if appropriate. \"Jake is lucky to have so many people who love him\" covers a lot of ground without opening any cans of worms.",
      },
      {
        heading: 'A Simple Template to Get You Started',
        level: 2,
        content:
          "If you're staring at a blank page, try this framework:\n\nOpening (30 seconds): \"For those who don't know me, I'm [Name], Jake's mom. I want to thank [hosts] for this incredible evening and all of you for being here.\"\n\nThe story (90 seconds): One specific memory that reveals your son's character.\n\nThe bridge (30 seconds): Connect that character trait to the relationship. \"So it didn't surprise me at all when he found someone who [quality].\"\n\nWelcoming the partner (60 seconds): Specific, genuine words about your new family member.\n\nThe toast (30 seconds): \"Please raise your glasses to [couple]. May your life together be filled with [something specific and sincere, not generic].\"\n\nTotal: roughly four minutes. Perfect.",
      },
      {
        heading: 'Delivery Tips for the Big Moment',
        level: 2,
        content:
          "Print your speech in a large font, at least 16 point. Your hands might shake, and squinting at your phone in a dim reception hall is not ideal.\n\nPractice out loud at least five times. Practicing in your head doesn't count. You need to hear the words, feel where the pauses go, and figure out which parts make you emotional so you can prepare.\n\nSpeak slowly. Nerves make everyone speed up. What feels painfully slow to you sounds perfectly natural to the audience.\n\nMake eye contact with your son and his partner during the toast. Look at the audience during the stories. Don't read your speech word for word the entire time. Glance down, then look up.\n\nAnd finally, enjoy it. This isn't a performance review. It's a room full of people who want to hear you say something loving about your kid. The bar for success is lower than you think.",
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
          "Here's the secret nobody tells you about giving a bridesmaid speech: you have all the fun and none of the pressure. The maid of honor has to deliver. She's expected to make people laugh and cry in perfect proportion. You? You just have to be genuine and keep it under four minutes.\n\nBridesmaid speeches are increasingly common at modern weddings. If the bride has asked you to say a few words, it's because your friendship means something real to her and she wants that represented on her big day. Don't overthink it. You already have everything you need.",
      },
      {
        heading: 'When and Why Bridesmaids Give Speeches',
        level: 2,
        content:
          "Not every wedding includes a bridesmaid speech, so let's cover the common scenarios. Sometimes the bride wants multiple friends to speak instead of putting it all on one person. Sometimes there's no maid of honor and several bridesmaids share the spotlight. Sometimes you've been asked to speak at the rehearsal dinner instead of the reception.\n\nWhatever the setup, clarify the logistics early. How long should you speak? Who goes before and after you? Is there a microphone? Will you be standing or seated? Are other bridesmaids also speaking? That last one matters because you don't want four people telling the same \"remember that road trip\" story.\n\nIf multiple bridesmaids are speaking, coordinate loosely. You don't need to write your speeches together, but a quick \"I'm covering college years, what era are you taking?\" saves everyone from redundancy.",
      },
      {
        heading: 'What Makes a Bridesmaid Speech Different',
        level: 2,
        content:
          "A bridesmaid speech is shorter and more focused than a maid of honor speech. Think of it as a highlight reel, not a documentary. You're sharing one facet of who the bride is, not her complete biography.\n\nThe best bridesmaid speeches feel like a window into a specific part of the bride's life. Maybe you're her college roommate and you can speak to the late-night conversations that shaped who she is. Maybe you're her work friend and you watched her fall in love in real time over Monday morning coffee recaps. Maybe you've been friends since age six and you're the keeper of the embarrassing childhood stories.\n\nLean into whatever makes your friendship unique. The audience doesn't need another generic \"she's the most amazing person I know\" speech. They need your specific, irreplaceable perspective.",
      },
      {
        heading: 'A Simple Structure That Works Every Time',
        level: 2,
        content:
          "Keep it to three beats:\n\n1. Introduce yourself and your connection (15 seconds). \"Hi everyone, I'm Priya. I've had the privilege of being [Bride]'s cubicle neighbor, therapist, and lunch buddy for the past six years.\"\n\n2. Tell one story or share one observation (2 minutes). This is the meat. One great story beats three okay ones every time.\n\n3. Connect it to the couple and toast (45 seconds). Bring it back to the wedding, say something kind about the partner, raise your glass.\n\nTotal: under three and a half minutes. The audience will love you for your brevity, and the couple will love you for making their day a little brighter without eating into the dancing time.",
      },
      {
        heading: 'Picking the Right Story',
        level: 2,
        content:
          "The story you tell should pass three tests:\n\nDoes it make the bride look good? Not perfect, not boring, but fundamentally good. A story about her getting lost in a foreign city and charming locals into giving you directions shows her personality. A story about her getting blackout drunk on a Tuesday shows poor judgment.\n\nWould you tell it in front of her grandparents? Because they're probably sitting right there. This doesn't mean your speech has to be G-rated, but it should be grandparent-survivable.\n\nDoes it connect to the marriage in some way? The connection can be loose. A story about her loyalty, her sense of adventure, her terrible taste in movies that somehow her partner also shares. You just need a bridge sentence to get from your story to \"and that's why these two are perfect together.\"\n\nIf you can't find a single story that works, try a different approach: describe a moment when you realized something important about the bride. \"I knew exactly who [Bride] was the day she...\" is a strong opening that doesn't require a full narrative.",
      },
      {
        heading: "The Partner: What to Say When You Don't Know Them Well",
        level: 2,
        content:
          "Here's a common bridesmaid dilemma. You're close with the bride but barely know the partner. Maybe you live in different cities. Maybe they started dating after your friendship was already mostly text-based.\n\nDon't fake it. Don't pretend you and the partner are best friends if you've met them three times. Instead, focus on what you can speak to honestly:\n\nWhat the bride has told you about them. \"I've never heard [Bride] talk about anyone the way she talks about [Partner]. And trust me, I've heard her talk about a lot of people.\" (Gets a laugh, stays honest.)\n\nWhat you've observed. \"I spent five minutes with [Partner] at the engagement party and immediately understood why [Bride] is so happy.\"\n\nThe effect they've had. \"My friend has always been pretty great, but the version of her I've seen since meeting [Partner] is someone even more confident, more joyful, more herself.\"\n\nAny of these approaches works without requiring you to pretend you have a deep personal bond with someone you've shared one appetizer platter with.",
      },
      {
        heading: 'Common Bridesmaid Speech Mistakes',
        level: 2,
        content:
          "Starting with \"For those of you who don't know me...\" Every speech starts this way. Find literally any other opening.\n\nInside jokes with no context. If the story requires five minutes of setup for a punchline only three people will get, it's not a speech story. It's a group chat story.\n\nTurning it into your own love story. \"Watching [Bride] find love gives me hope that I'll find mine someday\" is a weird flex that makes people uncomfortable.\n\nApologizing for being nervous. The audience doesn't need a disclaimer. Just start talking.\n\nReading from your phone with your head down for four straight minutes. Print your notes. Or at least increase the font size so you're not hunched over a tiny screen.\n\nGoing off-script after too many cocktails. Have your drink after the speech, not before. One glass of champagne for courage is fine. Three glasses of wine and a tequila shot is how bad wedding speeches are born.",
      },
      {
        heading: 'Bridesmaid Speech Examples: Opening Lines That Work',
        level: 2,
        content:
          "Sometimes the hardest part is the first sentence. Here are some openers to steal or adapt:\n\n\"I've been trying to write this speech for three weeks, and I finally realized the problem: there's no way to sum up [Bride] in four minutes. So I'm not going to try. I'm just going to tell you about one Tuesday afternoon that explains everything.\"\n\n\"[Bride] told me that when she asked [Partner] about me, they said, 'Oh, you're the friend who always texts in all caps.' And honestly? That's fair.\"\n\n\"I met [Bride] on the first day of college when she knocked on my door and asked if I had a phone charger. I did not. She came in anyway. And that pretty much sums up our friendship.\"\n\n\"I want to start by saying that I'm not the maid of honor. Which means I have zero responsibility for the bachelorette party stories. You're welcome, [Bride].\"",
      },
      {
        heading: 'Delivery: Keep It Natural',
        level: 2,
        content:
          "You're not performing. You're talking to your friend in front of a bunch of people who are rooting for you. Smile. Make eye contact with the bride. Speak at a normal conversational pace, then slow down just a touch.\n\nIf you get emotional, pause. Take a breath. Nobody is judging you for feeling things at a wedding. Just don't let the tears take over completely. If you know a particular line is going to wreck you, practice saying it out loud twenty times until you can get through it.\n\nEnd strong. Don't trail off with \"so yeah, congratulations, I love you guys.\" Have a crisp closing line and a clear toast. \"To [Bride] and [Partner], and to love that's worth texting in all caps about.\" Then raise your glass, take a sip, and sit down like the absolute legend you are.",
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
          "So your guy best friend asked you to be his best woman, and you said yes before fully realizing you'd have to stand up in front of 150 people and deliver a speech. Cool. Totally fine. No panic necessary.\n\nThe best woman role is becoming more common, but it still catches some guests off guard. People expect a best man. They might not immediately know who you are or why you're giving this toast. That's actually an advantage. You've got curiosity on your side from the moment you stand up. Use it.\n\nA best woman speech follows roughly the same playbook as a best man speech, with a few important differences we'll get into. The biggest one? You can probably skip the stag party stories.",
      },
      {
        heading: "Addressing the 'Wait, Why Is a Woman Giving This Speech?' Thing",
        level: 2,
        content:
          "You don't owe anyone an explanation. But a brief, confident acknowledgment can win the room fast.\n\nSomething like: \"For anyone wondering why there's a woman standing where the best man usually goes, it's because [Groom] has excellent taste in friends.\" Quick laugh, moving on.\n\nOr: \"I know the program says 'best man speech,' and I want to assure you that [Groom] looked everywhere for a man who could do this job. He couldn't find one.\"\n\nOne or two lines is plenty. Don't spend a full minute justifying your existence in the role. The more comfortable you are with it, the more comfortable the room will be. Confidence is contagious.",
      },
      {
        heading: "What to Talk About: Your Unique Perspective",
        level: 2,
        content:
          "Here's where you have an edge over the traditional best man. A close female friend often has a different view of the groom. You've probably seen sides of him that his male friends haven't. Maybe you've been his sounding board for relationship advice. Maybe you've watched him grow up in ways he'd never admit to the guys.\n\nLean into that. You can speak to his emotional depth without it feeling forced. You can share the conversation where he first told you about his partner and his voice changed. You can talk about watching him become the kind of person who was ready for this commitment.\n\nTraditional best man speeches often revolve around pranks, drinking stories, and sports metaphors. You don't have to follow that template. You also don't have to avoid it. Be yourself. Your speech should sound like you, not like a best man speech or a maid of honor speech. It should sound like a best woman speech, which is whatever you make it.",
      },
      {
        heading: 'The Structure: Borrow What Works',
        level: 2,
        content:
          "The bones of a best woman speech are the same as any wedding toast:\n\n1. Open with who you are and how you know the groom (30 seconds)\n2. Share a story or two that reveals his character (2-3 minutes)\n3. Talk about the couple and what you've witnessed (1-2 minutes)\n4. Toast (30 seconds)\n\nTotal: four to six minutes. That's the sweet spot.\n\nThe story section is where your speech lives or dies. One great story is better than a timeline of your friendship. Pick the moment that best captures who the groom is when it matters. Then connect it to why this marriage makes sense.\n\nFor the couple section, if you're close with the partner too, share something about their dynamic. If you mostly know the groom, focus on the change you've seen in him. Both approaches work.",
      },
      {
        heading: 'Navigating the Tone',
        level: 2,
        content:
          "Best man speeches tend to go heavy on roasting. You can absolutely roast the groom. A cross-gender friendship often has some of the best material because you've seen him at his most ridiculous. The guy who called you at midnight to ask whether his text to his crush sounded \"too eager.\" The guy who wore cargo shorts to a cocktail bar and genuinely didn't understand the problem.\n\nBut here's a nuance worth noting. Some audiences might read a woman teasing a man differently than a man teasing a man. Unfair? Yes. Real? Also yes. It doesn't mean you pull your punches. It means you make sure the love underneath the teasing is obvious. Every roast should be bookended by genuine affection.\n\n\"[Groom] once asked me to help him pick out an outfit for his first date with [Partner]. He showed up in a Hawaiian shirt and khakis. The fact that [Partner] agreed to a second date tells you everything about the kind of person they are.\" That's a tease that lands because it's wrapped in warmth.",
      },
      {
        heading: "If You're Friends With the Partner Too",
        level: 2,
        content:
          "Sometimes the best woman is friends with both halves of the couple. Maybe you introduced them. Maybe you became friends with the partner independently. This is great material.\n\nIf you introduced them, that's a story the audience absolutely wants to hear. Keep it concise but give the good details. What made you think they'd work? Were you right immediately or did it take a while? Did either of them resist at first?\n\nIf you're close with both, you can speak to their relationship from both sides, something most speech-givers can't do. \"I've heard [Groom]'s version of their first date and [Partner]'s version, and let me tell you, they are not the same story.\" That's a fun setup that brings the audience in.",
      },
      {
        heading: 'Practical Stuff: Planning and Logistics',
        level: 2,
        content:
          "Coordinate with the other speakers. If there's also a best man, a maid of honor, and parents giving toasts, you want to know what everyone else is covering. Nothing kills a speech like the person before you telling the same story.\n\nAsk the groom if there's anything he specifically wants you to mention or avoid. Some grooms have strong feelings about this. Others will say \"just don't embarrass me too badly\" and leave it at that.\n\nIf you're also involved in planning the bachelor party or other pre-wedding events, don't reference anything that happened at those events unless you've cleared it with the groom. What happens at the bachelor party stays at the bachelor party. This isn't just a saying. It's a rule.\n\nFinally, practice your speech in front of someone who will give you honest feedback. Not your mom (who will say it's wonderful no matter what), but a friend who'll tell you that your second joke doesn't land and your ending needs work.",
      },
      {
        heading: 'Closing Strong',
        level: 2,
        content:
          "Your closing should accomplish two things: make the groom feel seen, and make the couple feel celebrated.\n\n\"[Groom], you have been my best friend for twelve years. You've talked me off ledges, made me laugh until I couldn't breathe, and showed me what real loyalty looks like. [Partner], thank you for loving him the way he deserves. And [Groom], thank you for finally finding someone who appreciates your terrible puns as much as I pretend not to.\"\n\nThen the toast. Make it specific. \"To [Couple]: may your life together be full of terrible puns, great adventures, and the kind of love that makes everyone in this room a little jealous.\" Raise glass. Drink. Sit down. Collect compliments for the rest of the night.",
      },
    ],
    ctaSupportingText: 'Own the role, your way',
    relatedExamples: ['best-woman-speech', 'funny-wedding-speech'],
    relatedArticles: ['best-man-speech-guide', 'how-to-be-funny-wedding-speech'],
    tags: ['best woman', 'guide'],
  },

  // ─── brother-of-bride-speech-guide ───
  {
    slug: 'brother-of-bride-speech-guide',
    title: "Brother of the Bride Speech: Brotherly Love Meets Open Mic",
    category: 'Speech Tips',
    targetKeyword: 'brother of the bride speech',
    metaDescription: "A guide for brothers giving a wedding speech. Funny, protective, and genuine.",
    searchIntent: 'Brother',
    icon: '👦',
    readingTime: 5,
    sections: [
      {
        heading: "Brother of the Bride: The Underrated Wedding Speech",
        level: 2,
        content:
          "Nobody talks about the brother of the bride speech. There are a million guides for the best man. The maid of honor has her own industry of speech templates. But the bride's brother? You're just kind of... there. Standing in a suit you didn't pick, holding a microphone someone handed you, expected to say something meaningful about the girl who used to steal your Halloween candy.\n\nHere's the good news. A brother of the bride speech, when done right, is one of the most memorable toasts of the night. You have a perspective nobody else in the room can match. You grew up with this person. You've seen her at her absolute worst and her absolute best, often in the same afternoon. That's powerful material.",
      },
      {
        heading: 'Should You Even Give a Speech?',
        level: 2,
        content:
          "Brothers of the bride aren't always on the speech schedule. If you've been asked, great. If you haven't been asked but want to speak, check with your sister first. And by \"check,\" I mean actually ask, not just assume she'll be thrilled.\n\nIf you're a groomsman or a member of the wedding party, you might be expected to say something brief. If you're just a guest who happens to share DNA with the bride, a speech isn't automatic. The rehearsal dinner is often a better venue for a sibling speech than the reception, especially if the reception toast lineup is already packed.\n\nHowever you end up with the mic, keep one thing in mind: this is about your sister, not about you. That sounds obvious, but you'd be surprised how many sibling speeches turn into a monologue about the speaker's own childhood.",
      },
      {
        heading: 'Finding the Right Tone: Funny vs. Sentimental',
        level: 2,
        content:
          "Brothers tend to default to humor. That's fine. Sibling humor is some of the best material you can draw from because it's rooted in decades of shared experience. The audience can feel the authenticity.\n\nBut here's the thing that separates a good brother speech from a great one: the emotional turn. You can spend three minutes making people laugh, but if you don't have at least thirty seconds of genuine, unguarded sincerity, you've missed the point.\n\nThink of it like a movie. The comedy sets up the emotion. \"My sister and I spent most of our childhood trying to destroy each other. We argued about everything: the TV remote, the front seat, whose turn it was to feed the dog. But when it actually mattered, when things were hard, she was always the first person I called.\" The humor makes the vulnerability land harder.\n\nIf you're not naturally funny, don't force it. A sincere, heartfelt speech from a brother is just as powerful. Maybe more so, because the audience isn't expecting it.",
      },
      {
        heading: 'Stories That Work (And Ones That Really Don\'t)',
        level: 2,
        content:
          "Good story territory for a brother of the bride speech:\n\nChildhood adventures that show her personality. The time she organized the neighborhood kids into a protest because someone cut down a tree. The way she always insisted on being the director when you made home movies.\n\nMoments of sibling loyalty. When she covered for you, or you covered for her. When she stood up for you at school. When you realized your annoying little sister (or older sister) had actually become someone you admired.\n\nThe moment you met the partner and formed an opinion. Brothers have a protective instinct, and audiences enjoy hearing about the first meeting from that angle.\n\nStories to avoid:\n\nAnything involving her dating history before this relationship. Zero exceptions.\n\nChildhood stories that are genuinely embarrassing (bedwetting, awkward phases, braces-era details she's worked hard to forget).\n\nStories where you come out looking like the hero and she's the sidekick. This is her day.\n\nAnything your parents told you in confidence about her. Just... no.",
      },
      {
        heading: 'Addressing the Partner: The Protective Brother Bit',
        level: 2,
        content:
          "There's a classic move in brother of the bride speeches where you do the fake-threatening thing to the partner. \"If you ever hurt her, you'll have me to deal with.\" Delivered with a wink and a smile.\n\nThis can work if you do it quickly and lightly. One line, maybe two. A brief flash of brotherly protectiveness followed immediately by warmth toward the partner.\n\nWhat doesn't work is leaning into it too hard. Extended threats, even joking ones, make the room uncomfortable and make the partner feel unwelcome. Remember, you're supposed to be gaining a sibling today, not intimidating a suspect.\n\nBetter approach: focus on what you appreciate about the partner. \"I've never seen my sister happier, and I've known her for thirty years, so that's saying something. [Partner], welcome to the family. You're going to need a strong Wi-Fi password because she will use all the bandwidth.\"",
      },
      {
        heading: 'If Your Relationship Is Complicated',
        level: 2,
        content:
          "Sibling relationships are messy. Maybe you and your sister aren't super close. Maybe there were years where you barely spoke. Maybe you're navigating blended family dynamics and you're technically a half-brother or step-brother.\n\nNone of that disqualifies you from giving a great speech. You don't have to pretend you're the world's closest siblings. You just have to find something true.\n\n\"My sister and I haven't always been close, but here's what I know for certain: she's one of the most determined people I've ever met, and when she decides to love someone, she does it with everything she has.\" That's honest, generous, and doesn't require you to fake a bond that isn't there.\n\nIf you're a step-brother or half-brother, a brief, warm acknowledgment of the family connection works. \"I didn't grow up with [Bride] from the beginning, but she made me feel like family from day one, and that tells you everything about who she is.\"",
      },
      {
        heading: 'Keeping It the Right Length',
        level: 2,
        content:
          "Three to four minutes is ideal for a brother of the bride speech. Shorter than the best man, shorter than the maid of honor, but long enough to make an impact.\n\nHere's a rough breakdown:\n\n30 seconds: introduce yourself (briefly, not everyone knows you're the brother)\n2 minutes: your story or stories\n1 minute: words about the partner and the couple\n30 seconds: the toast\n\nIf you're running long in practice, cut a story. Don't try to speed-talk your way through extra material. A tight three-minute speech beats a rambling five-minute one every time.",
      },
      {
        heading: 'The Toast: End With Feeling',
        level: 2,
        content:
          "Don't mumble your way to the finish line. The last thirty seconds of your speech should be the strongest part.\n\nLook at your sister when you deliver the emotional line. Look at the crowd when you raise the toast. And make the toast itself something real, not \"to love and happiness\" which means nothing.\n\n\"To my sister, who taught me that the person who steals your Halloween candy might also turn out to be your best friend. And to [Partner], who's brave enough to marry into this family. We're thrilled to have you.\"\n\nClear. Warm. Done. You crushed it.",
      },
    ],
    ctaSupportingText: 'Get the balance of funny and heartfelt',
    relatedExamples: ['brother-of-bride-speech', 'funny-wedding-speech', 'roast-wedding-speech'],
    relatedArticles: ['sister-of-bride-speech-guide', 'how-to-be-funny-wedding-speech'],
    tags: ['brother', 'guide'],
  },

  // ─── sister-of-bride-speech-guide ───
  {
    slug: 'sister-of-bride-speech-guide',
    title: "Sister of the Bride Speech: Celebrating the Bond Only Sisters Share",
    category: 'Speech Tips',
    targetKeyword: 'sister of the bride speech',
    metaDescription: "A guide for sisters of the bride. Celebrate your bond and make her cry (happy tears).",
    searchIntent: 'Sister, emotional',
    icon: '👧',
    readingTime: 5,
    sections: [
      {
        heading: 'The Sister Speech: Nobody Knows Her Like You Do',
        level: 2,
        content:
          "You shared a bathroom. You stole her clothes (or she stole yours). You've seen her ugly-cry over a bad haircut and rage-clean the apartment after a terrible date. You've been her cheerleader, her rival, her therapist, and her emergency contact. No one in that reception hall knows the bride quite like her sister.\n\nThat's what makes a sister of the bride speech so special, and so tricky. You have too much material. Twenty-five years of shared history is a lot to condense into four minutes. The challenge isn't finding something to say. It's choosing what to leave out.\n\nThe good news: the audience is already rooting for you. A sister speech has built-in emotional weight. You just need to channel it properly.",
      },
      {
        heading: 'Choosing Your Angle',
        level: 2,
        content:
          "You cannot cover everything, so pick one angle and commit to it.\n\nThe protector angle: If you're the older sister, you can speak to watching her grow up. The shift from feeling responsible for her to feeling proud of her.\n\nThe sidekick angle: If you're the younger sister, you can speak to looking up to her and what she taught you, whether she meant to or not.\n\nThe partner-in-crime angle: If you're close in age, you can lean into the \"we did everything together\" dynamic and what it means to watch her start this new chapter.\n\nThe reconciliation angle: If you weren't always close but found your way back to each other, that's a powerful story. People love a redemption arc.\n\nPick the angle that feels most true. Not the one that sounds best on paper, but the one that makes you feel something when you think about it. That's the one that'll resonate.",
      },
      {
        heading: 'The Childhood Story: Handle With Care',
        level: 2,
        content:
          "Every sister speech includes a childhood story. It's basically required. But not all childhood stories are created equal.\n\nGreat childhood stories are ones where the bride's personality is already fully formed in miniature. She was bossy at age seven? That's now called \"leadership.\" She insisted on directing every school play? \"Natural-born organizer.\" She cried when a character died in a movie? \"She's always had the biggest heart in the room.\"\n\nThe trick is reframing childhood quirks as adult strengths. You're not exposing her. You're showing the audience that the woman standing up there today is the same person she's always been, just more polished.\n\nAvoid stories that are genuinely humiliating. The line between \"funny embarrassing\" and \"actually embarrassing\" is different for every family. When in doubt, ask your sister. Seriously, just text her: \"Is the story about the school talent show fair game?\" She'll tell you.",
      },
      {
        heading: 'Talking About Her Partner',
        level: 2,
        content:
          "You've probably had a front-row seat to this entire relationship. The early giddiness, the first fight you heard about, the moment you realized this one was different.\n\nShare that realization. \"I've watched my sister date a lot of people. Some of them were great. Some of them were... educational. But [Partner] was the first one where I didn't have to ask how it was going. I could just tell.\"\n\nIf you genuinely love the partner, say it with specifics. Don't just say \"we love [Partner].\" Say why. \"[Partner] is the first person who can beat my sister at Scrabble, and the fact that she hasn't dumped them for it tells me this is real love.\"\n\nIf your relationship with the partner is still developing, focus on the effect they've had. You can always speak to what you see in your sister when she's with them, even if you don't know the partner deeply yourself.",
      },
      {
        heading: 'The Emotional Turn: Don\'t Fight the Tears (But Don\'t Drown In Them)',
        level: 2,
        content:
          "Sister speeches are emotional. There's no way around it. At some point during this toast, one or both of you is going to cry, and that's completely fine.\n\nBut you need to be able to finish the speech. So here's the strategy: know exactly which line is going to break you, and practice it fifty times. You can practice the rest of the speech five times, but that one line needs to be muscle memory.\n\nCommon tear-trigger moments: \"I'm so proud of you.\" \"You're not just my sister, you're my best friend.\" \"Mom would have loved this.\" (If applicable and appropriate.)\n\nWhen the tears come, pause. Breathe. Smile. The audience will wait. They're not impatient. They're moved. Take your moment, then finish strong. A speech that ends in tears is touching. A speech that dissolves into incoherent sobbing is uncomfortable for everyone.",
      },
      {
        heading: 'What Not to Say',
        level: 2,
        content:
          "Don't reference her exes. Not even vaguely. Not even the one everyone in the family hated. Today is about the person she married, full stop.\n\nDon't air family drama. \"As everyone knows, our family has been through a lot\" might seem like a meaningful setup, but it opens doors you can't close at a wedding reception.\n\nDon't make it competitive. \"She's always been the pretty one and I've been the smart one\" is uncomfortable even as a joke. Same goes for \"I can't believe she's getting married before me\" unless you can sell it as genuinely funny and not bitter.\n\nDon't give marriage advice. You're her sister, not her couples therapist. Unless you've been happily married for twenty years and have a genuinely funny, one-line observation, skip the advice section.\n\nDon't forget the partner. This one is surprisingly common in sister speeches. You get so caught up in your bond with the bride that the partner becomes an afterthought. Dedicate at least thirty seconds to welcoming them specifically.",
      },
      {
        heading: 'A Template to Start With',
        level: 2,
        content:
          "Opening (30 seconds): Who you are, a quick line that establishes the sister dynamic. \"Growing up with [Bride] was like living with a tiny, very opinionated CEO.\"\n\nChildhood story (90 seconds): One specific memory, reframed to show her character.\n\nTransition to the relationship (30 seconds): \"That's who my sister has always been. So when she met [Partner]...\"\n\nThe partner and the couple (60 seconds): What you've observed, what it means to you.\n\nEmotional closing (30-45 seconds): Direct address to your sister. This is the part that'll get people reaching for tissues.\n\nToast (15 seconds): Short, specific, raise the glass.\n\nTotal: four to five minutes. Perfect for a sister speech.",
      },
      {
        heading: 'Final Thought: This Is Your Gift',
        level: 2,
        content:
          "You probably spent weeks finding the perfect wedding gift. The right kitchen appliance, the experience voucher, the contribution to the honeymoon fund. But your speech is the gift people will remember.\n\nTwenty years from now, your sister won't remember the blender. She'll remember standing in that room, hearing her sister's voice crack just slightly while saying something that made her feel completely loved.\n\nSo take it seriously. Practice it. Time it. Get feedback. But also trust that the years of shared life between you two have already done most of the work. You just have to open your mouth and let it out.",
      },
    ],
    ctaSupportingText: 'Capture your sisterhood in words',
    relatedExamples: ['sister-of-bride-speech', 'emotional-wedding-speech'],
    relatedArticles: ['brother-of-bride-speech-guide', 'maid-of-honor-speech-guide'],
    tags: ['sister', 'guide'],
  },

  // ─── wedding-speech-second-marriage ───
  {
    slug: 'wedding-speech-second-marriage',
    title: 'How to Write a Wedding Speech for a Second Marriage',
    category: 'Speech Tips',
    targetKeyword: 'second marriage wedding speech',
    metaDescription: "Second marriages deserve great speeches too. Here's how to celebrate without tiptoeing.",
    searchIntent: 'Navigating sensitive topic',
    icon: '🔄',
    readingTime: 5,
    sections: [
      {
        heading: "Second Marriage, First-Rate Speech",
        level: 2,
        content:
          "Writing a wedding speech for a second marriage can feel like navigating a room full of invisible tripwires. Do you mention the first marriage? Do you ignore it? What about the kids? What if the ex is somehow in the audience?\n\nRelax. A second marriage wedding speech isn't that different from any other wedding speech. It just requires a little more awareness and a little more care with word choice. The couple has found love again (or for the first time, depending on how the first marriage felt), and that's worth celebrating without a bunch of caveats and awkward footnotes.\n\nThe fundamental rule: celebrate what's in front of you. This marriage, this couple, this day.",
      },
      {
        heading: 'The Elephant in the Room: Should You Mention the First Marriage?',
        level: 2,
        content:
          "Short answer: probably not directly.\n\nLonger answer: it depends on the circumstances and the couple's preferences. If the couple has openly discussed their previous marriages and is comfortable with it, a very brief, tasteful acknowledgment can work. \"Life doesn't always follow the plan, and sometimes the detours lead you somewhere better\" is about as close as you want to get.\n\nWhat you should absolutely never do:\n\nDon't name the ex. Don't reference the divorce. Don't make comparisons (\"This time it's going to work!\"). Don't use phrases like \"second time's the charm\" or \"practice makes perfect.\" These might seem lighthearted, but they minimize the previous relationship and make the current one sound like a consolation prize.\n\nIf you're the best man and you were also the best man at the first wedding, do NOT bring that up. Not even as a joke. Not even a little bit.",
      },
      {
        heading: 'When There Are Kids Involved',
        level: 2,
        content:
          "Many second marriages come with children from previous relationships, and acknowledging those kids in your speech is actually a lovely touch. The blending of families is a big part of what makes this day meaningful.\n\n\"Today isn't just about [Couple] finding each other. It's about [Child names] getting the family they deserve\" is generous and inclusive without being heavy-handed.\n\nIf you know the children well, you can share a brief observation about how the new relationship has affected them. \"I've watched [Child] go from cautiously optimistic to fully on board, and that tells me everything I need to know about [Partner].\"\n\nBe careful with language around step-parenting. Don't say \"new dad\" or \"new mom\" unless the family uses those terms. \"Bonus parent\" has become popular, but check with the couple first. Some blended families have their own vocabulary.",
      },
      {
        heading: 'Tone: Optimistic, Not Naive',
        level: 2,
        content:
          "The tricky thing about a second marriage speech is striking the right tone. Too optimistic and it sounds like you're overcompensating. Too reserved and it sounds like you have doubts.\n\nThe sweet spot is grounded optimism. You're celebrating a couple who knows what they want because they've lived enough life to figure it out. That's not a disadvantage. That's a superpower.\n\n\"[Couple] didn't stumble into this marriage. They chose it with open eyes, full hearts, and the kind of certainty that only comes from experience.\" That acknowledges the past without dwelling on it and frames the present as something earned, not just hoped for.\n\nAvoid phrases that sound like you're trying to convince everyone (including yourself) that this time will be different. Don't protest too much. Just celebrate.",
      },
      {
        heading: 'What to Focus On Instead',
        level: 2,
        content:
          "Focus on what's specific to this relationship. How did they meet? What changed in them when they found each other? What do they do together that brings them joy?\n\nSecond marriages often have great \"how they met\" stories because the couple wasn't looking for it in the same way. Maybe they met through their kids' school. Maybe they reconnected on social media after decades. Maybe a mutual friend set them up after swearing off matchmaking forever. These stories tend to be richer and more textured than the \"we matched on an app\" narratives.\n\nYou can also lean into the maturity angle without being condescending about it. \"I've known [Name] for twenty years, and I've never seen them more at peace than they are with [Partner].\" That's a compliment to both the person and the relationship.",
      },
      {
        heading: 'Navigating the Guest List Dynamics',
        level: 2,
        content:
          "Second weddings can have interesting social dynamics. The ex's family might still be close with the couple. The couple's friends might include people from both previous marriages. Some guests might be meeting for the first time.\n\nYour speech should unite the room, not divide it. Avoid in-jokes that only one \"era\" of friends will get. Avoid references that require knowing the full backstory. Keep the focus forward-looking.\n\n\"Everyone in this room is here because they love [Couple] and believe in what they're building together. That's all that matters today.\"\n\nIf the couple's parents have complicated feelings about the second marriage (it happens), your speech isn't the place to address it. Keep it warm, keep it positive, and let the champagne do the rest.",
      },
      {
        heading: 'Specific Lines and Phrases That Work',
        level: 2,
        content:
          "Here are some tested lines for second marriage speeches that strike the right tone:\n\n\"Some people wait a lifetime to find this kind of love. [Couple] just took the scenic route.\"\n\n\"What I love about [Couple] is that they didn't settle for 'good enough.' They held out for 'this is it.' And watching them together, it clearly is.\"\n\n\"The best love stories aren't always the simplest ones. Sometimes the best ones have a few chapters you didn't see coming.\"\n\n\"To [Couple], who prove that the best things in life are worth waiting for.\"\n\nNotice what these lines have in common: they acknowledge that life is complex without being specific about how. They're positive without being dismissive. They celebrate the present tense.",
      },
      {
        heading: 'The Toast: Forward-Looking and Warm',
        level: 2,
        content:
          "End your speech looking ahead. This is true for any wedding speech, but it's especially important for a second marriage. The couple and their guests want to feel the energy of a fresh start, not the weight of past chapters.\n\n\"To [Couple]: here's to the next adventure, the morning coffees, the inside jokes, the family dinners, and the life you're going to build together. It's going to be a good one.\"\n\nRaise your glass. Mean every word. And know that you just navigated one of the trickier speech scenarios in the wedding world with grace and class.",
      },
    ],
    ctaSupportingText: 'Celebrate new beginnings beautifully',
    relatedExamples: ['second-marriage-speech', 'blended-family-speech'],
    relatedArticles: ['stepparent-wedding-speech', 'wedding-speech-complicated-relationship'],
    tags: ['second marriage', 'situational'],
  },

  // ─── lgbtq-wedding-speech-guide ───
  {
    slug: 'lgbtq-wedding-speech-guide',
    title: "LGBTQ+ Wedding Speech Guide: Love Is Love, Your Speech Should Reflect That",
    category: 'Speech Tips',
    targetKeyword: 'LGBTQ wedding speech',
    metaDescription: 'A wedding speech guide for LGBTQ+ celebrations. Inclusive, authentic, and joyful.',
    searchIntent: 'LGBTQ+ wedding',
    icon: '🏳️‍🌈',
    readingTime: 5,
    sections: [
      {
        heading: 'Love Is Love. Your Speech Should Sound Like It.',
        level: 2,
        content:
          "If you're giving a speech at an LGBTQ+ wedding, the most important thing you can do is treat it like a wedding speech. Because that's what it is. A wedding speech. For a wedding. Between two people who love each other.\n\nThat said, pretending there's zero difference would be naive. LGBTQ+ couples may have navigated unique challenges to get to this day, and your speech can honor that without making the entire toast a political statement. The goal is authenticity. Celebrate the specific love story in front of you, acknowledge what makes it meaningful, and avoid both performative allyship and willful obliviousness.\n\nThis guide is for everyone: LGBTQ+ speakers, straight allies, family members who are still learning, and anyone who wants to give a speech that's genuine and respectful.",
      },
      {
        heading: 'Language Matters (But Don\'t Overthink It)',
        level: 2,
        content:
          "Use the language the couple uses. If they say \"wife and wife,\" you say \"wife and wife.\" If they say \"partner,\" say \"partner.\" If they say \"husband,\" say \"husband.\" This isn't complicated, but it matters.\n\nAvoid defaulting to gendered wedding speech clichés that don't fit. \"Behind every great man is a great woman\" doesn't work at a wedding with two grooms. \"The bride has never looked more beautiful\" gets awkward if neither person identifies as \"the bride.\"\n\nWhen in doubt, use names. \"[Name] and [Name]\" works in every context. \"The happy couple\" is always safe. \"The newlyweds\" is classic.\n\nOne more thing: don't announce the couple's identities as if it's news. \"As we all know, [Name] is gay\" is not a speech opener. The guests are at the wedding. They've figured it out.",
      },
      {
        heading: 'Acknowledging the Journey (If the Couple Wants You To)',
        level: 2,
        content:
          "Some LGBTQ+ couples want their wedding to acknowledge the road they've traveled. Coming out, fighting for legal recognition, overcoming family resistance, finding community. For these couples, a speech that nods to the significance of the moment can be deeply moving.\n\nOther couples want their wedding to feel as normal and unremarkable as any other wedding, because that's the whole point. For these couples, dwelling on the \"historic significance\" of their union feels patronizing.\n\nAsk the couple what they want. A simple \"Is there anything specific you'd like me to mention or avoid in my speech?\" solves this problem entirely.\n\nIf they do want acknowledgment, keep it honest and proportional. \"It took a lot for [Couple] to get to this day, and I don't just mean the seating chart\" is light and meaningful. You don't need to deliver a human rights lecture. A sentence or two of genuine recognition goes further than a paragraph of speechifying.",
      },
      {
        heading: 'Humor: Same Rules, Different Material',
        level: 2,
        content:
          "Funny wedding speeches are funny regardless of the couple's orientation. You're still drawing from the same well: the couple's quirks, their relationship dynamic, the absurd details of wedding planning.\n\nWhat's different is what counts as a landmine. A few things to avoid:\n\nJokes about \"who wears the pants\" or \"who's the wife\" in a same-sex relationship. These reinforce stereotypes and they're not funny. They were barely funny in straight marriages.\n\nJokes about the couple's sex life. This one applies to every wedding, but it's worth emphasizing. LGBTQ+ couples deal with enough sexualization from the outside world. Don't add to it from the podium.\n\nJokes about your own discomfort with LGBTQ+ relationships. \"This is a first for me\" delivered as a punchline makes the day about you, not the couple.\n\nWhat works great: jokes about the specific people in front of you. Their inability to agree on a restaurant. Their competitive board game nights. The fact that they both packed way too many shoes for every vacation. Specificity is always funnier than generality.",
      },
      {
        heading: 'For Family Members Who Are Still Learning',
        level: 2,
        content:
          "Maybe you're the parent who took some time to come around. Maybe you're the uncle who didn't fully understand but showed up anyway. If you're giving a speech and your acceptance of your loved one's identity has been a journey, there's a way to honor that honestly.\n\nDon't make the speech a confessional. \"I struggled with this at first\" is fine as a brief, honest beat in a larger speech. But the focus should be on where you are now, not where you were.\n\n\"When [Name] first told me about [Partner], I didn't know what to expect. What I found was someone who makes my [son/daughter/child] laugh harder than anyone I've ever seen, and that was all I needed to know.\"\n\nThat's real. It acknowledges growth without dwelling on the struggle. The audience will respect it.\n\nIf you're still actively working through your feelings, that's okay, but a wedding speech isn't the place to process them publicly. Keep it warm, keep it forward-looking, and save the complicated conversations for another time.",
      },
      {
        heading: 'Avoiding Performative Allyship',
        level: 2,
        content:
          "If you're a straight ally giving a speech, resist the urge to make it about how progressive you are. \"I'm so proud to be at my first gay wedding\" centers your experience, not the couple's. \"Love wins\" is a bumper sticker, not a toast.\n\nThe best allyship in a wedding speech is invisible. It sounds exactly like a speech you'd give at any wedding, with the same warmth, humor, and specificity. The fact that you treat the couple like any other couple is the statement. You don't need to narrate it.\n\nThat said, if you know the couple has faced opposition from family or community, a genuine \"I'm honored to be here celebrating your love\" carries real weight. Just let it be one sentence, not a theme.",
      },
      {
        heading: 'Structure: No Reinventing Needed',
        level: 2,
        content:
          "The structure of an LGBTQ+ wedding speech is the same as any wedding speech:\n\n1. Introduce yourself and your connection to the couple\n2. Share a story or observation\n3. Speak to the relationship\n4. Toast\n\nThat's it. You don't need a special framework. You need the same things every wedding speech needs: a good story, genuine emotion, and a strong finish.\n\nThe only structural consideration unique to LGBTQ+ weddings is that you might need to be more intentional about including both partners equally. In straight weddings, the best man talks mostly about the groom and the maid of honor talks mostly about the bride. At an LGBTQ+ wedding, the division might be less clear-cut. Make sure both partners feel seen in your remarks.",
      },
      {
        heading: 'Closing: Celebrate This Specific Love',
        level: 2,
        content:
          "The best LGBTQ+ wedding speech is the one that makes the couple feel like the two most important people in the room. Not symbols, not trailblazers, not representatives of a movement. Just two people who found each other and decided to make it official.\n\nYour toast should reflect their specific love story, their specific quirks, their specific future. \"To [Name] and [Name], who found each other in a world that doesn't always make that easy, and who make it look effortless anyway.\"\n\nOr, if the couple prefers a less weighty vibe: \"To [Name] and [Name], who finally have a legal excuse to argue about whose turn it is to do the dishes.\"\n\nRead the room. Know the couple. Speak from the heart. Same as every wedding, ever.",
      },
    ],
    ctaSupportingText: 'Create an authentic, joyful speech',
    relatedExamples: ['lgbtq-wedding-speech', 'emotional-wedding-speech'],
    relatedArticles: ['how-to-make-wedding-speech-personal', 'wedding-speech-dos-and-donts'],
    tags: ['LGBTQ+', 'inclusive'],
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
          "Destination weddings are a whole different vibe. The guests are sunburned, slightly jet-lagged, and three rum punches deep by the time the toasts start. The setting is stunning. Everyone's been together for days. And you've been trying to write your speech on a hotel balcony while your roommate snores in the next bed.\n\nGiving a speech at a destination wedding comes with unique advantages and unique challenges. The intimacy is different. The energy is different. The logistics are definitely different. Let's talk about how to nail it.",
      },
      {
        heading: 'The Vibe Is More Casual. Your Speech Should Match.',
        level: 2,
        content:
          "A beach wedding in Tulum doesn't call for the same formality as a ballroom wedding in Manhattan. Read the setting and adjust accordingly.\n\nThis doesn't mean your speech should be sloppy or unprepared. It means the tone can be lighter, more conversational, more relaxed. You can reference the trip itself. You can acknowledge the tan lines. You can mention that everyone in this room took time off work and maxed out a credit card to be here, which honestly says more about how much they love the couple than any Hallmark card ever could.\n\n\"The fact that all of you traveled to [Destination] to watch these two get married tells you everything about [Couple]. They're the kind of people you cross an ocean for.\" That's a destination-specific line that also works as a genuine compliment.",
      },
      {
        heading: 'Use the Setting (But Don\'t Let It Take Over)',
        level: 2,
        content:
          "A quick reference to the location adds color. \"We're standing on a beach in Costa Rica, and I can confidently say this is the most beautiful place I've ever given a speech. The bar was my friend's garage in 2019, so the competition wasn't stiff.\"\n\nBut don't turn your speech into a travel review. The audience didn't come to hear about the hotel pool. They came to hear about the couple. One or two location references max, then pivot to the real content.\n\nThe exception: if the location is meaningful to the couple's story. Maybe this is where they got engaged. Maybe they vacationed here every year. Maybe it's where one of them spent a college semester abroad and always dreamed of coming back. If the place is part of the love story, work it in. \"[Couple] always said they'd come back to this spot. I just didn't know they'd bring 80 of their closest friends when they did.\"",
      },
      {
        heading: 'Practical Logistics You Haven\'t Thought About',
        level: 2,
        content:
          "Outdoor destination weddings come with logistical challenges that indoor weddings don't.\n\nWind. Your printed speech will blow away. Use heavier cardstock or a small notecard holder. Don't rely on your phone, because glare from the sun can make your screen unreadable.\n\nSound. Beach ceremonies rarely have the acoustic setup of a ballroom. If there's no microphone, you need to project. If there is a microphone, test it beforehand. Outdoor sound systems can be unpredictable.\n\nTiming. If the ceremony is at sunset, the light is changing fast. Don't drag your speech out while the photographer is losing the golden hour. Be respectful of the timeline.\n\nHeat. If it's a tropical wedding and you're in a suit, you're going to sweat. That's fine. Everyone's sweating. Just keep your speech tight so you can get back to the shade and the open bar.",
      },
      {
        heading: 'The Audience Is Smaller (And That Changes Things)',
        level: 2,
        content:
          "Destination weddings typically have a smaller guest list because, well, not everyone can fly to Portugal on a random weekend. This works in your favor as a speaker.\n\nA smaller crowd means more intimacy. You can make eye contact with most of the room. You can reference specific people. You can be a little more personal and a little less performative.\n\nIt also means the audience probably knows each other better than a typical wedding crowd. They've been doing group dinners and pool hangs for two days. Inside jokes from the trip are fair game, as long as they're inclusive. \"I think we can all agree that the catamaran excursion yesterday was an experience\" works if everyone was there. It doesn't work if half the group missed it.\n\nThe flip side: a small audience means there's less cover if your joke doesn't land. In a crowd of 200, a flat joke just floats away. In a crowd of 40, there's an audible silence. Practice your material. Know what's going to work.",
      },
      {
        heading: 'Thank People for Being There (And Mean It)',
        level: 2,
        content:
          "At a local wedding, thanking guests for coming is polite. At a destination wedding, it's essential. These people spent money, took vacation days, arranged childcare, and possibly endured a 12-hour travel day to be in this room. That deserves real acknowledgment.\n\nWork it into your speech naturally. Don't just list logistics (\"I know some of you flew eight hours to get here\"). Connect it to the couple. \"Every person in this room made a real effort to be here today. That's not about a free vacation. That's about [Couple], and the kind of love and loyalty they inspire in the people around them.\"\n\nIf parents or family members made a particularly significant effort to attend (elderly grandparents who traveled internationally, for example), a brief mention is a classy touch.",
      },
      {
        heading: 'Write Your Speech Before You Leave Home',
        level: 2,
        content:
          "This is the biggest practical tip in this entire article. Do not plan to write your speech at the destination. You will not do it. You'll be too busy with welcome dinners, excursions, and trying to figure out the foreign outlets in your hotel room.\n\nWrite a solid draft before you travel. Print it out (remember, phone screens and sunshine don't mix). Practice it on the plane if you have to. Then, at most, do a light edit at the destination to incorporate any trip-specific references.\n\nThe people who show up to a destination wedding without a written speech are the same people who end up rambling for eight minutes about how \"this place is amazing\" while the sun sets behind them. Don't be that person.",
      },
      {
        heading: 'The Destination Wedding Toast',
        level: 2,
        content:
          "End with a toast that captures the spirit of the weekend, not just the ceremony. Destination weddings are multi-day events, and your toast can reflect that broader experience.\n\n\"To [Couple]: thank you for bringing us to this incredible place, for giving us an excuse to spend three days with the people we love most, and for reminding all of us what it looks like when two people choose each other with total confidence. Here's to your adventure, which started long before this trip and will last long after we've all gone home.\"\n\nThen clink glasses, take a sip of whatever tropical cocktail you've been handed, and go enjoy the rest of the party. You earned it.",
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
          "The rehearsal dinner is the wedding's opening act. It's more intimate, more relaxed, and way less structured than the reception. Which makes it the perfect setting for a speech that's too personal for the big day or too long for the toast lineup.\n\nRehearsal dinner speeches have a charm that reception toasts sometimes lack. The crowd is smaller, usually just close family and the wedding party. There's no DJ waiting to start the first dance. Nobody's checking the time. You can breathe. You can ramble a little. You can tell the story that needs a two-minute setup.\n\nIf you've been asked to speak at the rehearsal dinner, or if you want to volunteer, here's everything you need to know.",
      },
      {
        heading: 'Who Speaks at a Rehearsal Dinner?',
        level: 2,
        content:
          "Traditionally, the groom's parents host the rehearsal dinner and kick off the toasts. But modern rehearsal dinners are a free-for-all in the best possible way.\n\nCommon speakers include: parents of both the bride and groom, siblings, close friends who aren't giving speeches at the reception, grandparents, and sometimes the couple themselves.\n\nThe rehearsal dinner is also the ideal spot for people who want to speak but aren't on the reception schedule. If you're a college roommate, a cousin, a mentor, or a co-worker who wants to say something, this is your venue. The reception has a tight timeline. The rehearsal dinner has room.\n\nOne important note: if you're planning to speak at the rehearsal dinner, give the hosts a heads-up. Surprise speeches can throw off the evening's flow, and the hosts may already have a speaking order in mind.",
      },
      {
        heading: 'Tone: Warmer, More Personal, Less Polished',
        level: 2,
        content:
          "Reception speeches are performances. Rehearsal dinner speeches are conversations. That's the key difference.\n\nYou can be less polished at the rehearsal dinner. Glancing at notes is totally normal. Getting a little long is more forgivable. Tearing up is even more touching because the room is small enough that everyone can see your face.\n\nThe tone should feel like you're talking to friends at a dinner table, because you literally are. You don't need a big opening. You don't need a structured arc. You can start with \"I just want to say something about these two\" and go from there.\n\nThat said, \"less polished\" doesn't mean \"unprepared.\" Even a casual rehearsal dinner speech benefits from a few minutes of thought about what you want to say and how to say it. Winging it completely is how you end up telling a story that goes nowhere for six minutes.",
      },
      {
        heading: 'What to Actually Talk About',
        level: 2,
        content:
          "The rehearsal dinner is perfect for content that's too intimate for the reception:\n\nFamily stories. The reception crowd includes co-workers, distant relatives, and the couple's random college acquaintances. The rehearsal dinner is family and close friends. You can go deeper.\n\nThe longer version of a story. At the reception, you'd tell the two-minute version. At the rehearsal dinner, you can tell the five-minute version with all the good details.\n\nSentimental stuff that would feel too intense in a big room. A quiet \"I want you to know how proud I am of the person you've become\" hits differently when it's 30 people instead of 200.\n\nPractical well-wishes. The rehearsal dinner is a nice place for genuine advice from people who've been married a long time. Grandparents dropping wisdom at the rehearsal dinner is peak wedding content.\n\nWelcome-to-the-family speeches. If you're gaining a son-in-law or daughter-in-law, the rehearsal dinner is the perfect time to say \"you're one of us now\" in a warm, personal way.",
      },
      {
        heading: 'Length: How Long Is Too Long?',
        level: 2,
        content:
          "Rehearsal dinner speeches can be a bit longer than reception toasts. Three to seven minutes is the comfortable range. If there are many speakers, trend shorter. If you're one of two or three people talking, you have more room.\n\nBut here's the thing: longer doesn't mean better. A tight four-minute rehearsal dinner speech is still better than a rambling eight-minute one. The extra breathing room is for depth, not for filler.\n\nIf you're the host (typically the groom's parents), you might go a little longer because you're also doing the welcome and the thank-yous. Keep the logistics part brief and save your time for the personal stuff.\n\nOne more thing: be aware of how many people are planning to speak. If eight people each go five minutes, that's 40 minutes of speeches at a dinner that might only last two hours. Coordinate with the hosts to keep things reasonable.",
      },
      {
        heading: 'The Parent Speech: Hosting and Toasting',
        level: 3,
        content:
          "If you're the parent hosting the rehearsal dinner, your speech does double duty. You're welcoming everyone AND saying something meaningful about the couple.\n\nStructure it simply: welcome and thank-yous (1 minute), something personal about your child and their partner (2-3 minutes), toast (30 seconds).\n\nFor the personal section, the rehearsal dinner is where you can tell the stories that are too inside-baseball for the reception. The first time your kid mentioned this person. The phone call when they told you they'd found \"the one.\" The moment you knew it was serious.\n\nKeep the thank-yous sincere but brief. Thank the other family, thank the wedding party, thank anyone who traveled a long distance. Don't turn it into an Oscar acceptance speech where you list every person in the room.",
      },
      {
        heading: 'Avoiding the Pre-Wedding Roast Trap',
        level: 2,
        content:
          "The relaxed vibe of a rehearsal dinner sometimes leads people to go harder on the roasting than they should. The thinking is: \"It's casual, it's just close friends, I can push the envelope.\"\n\nBe careful with this. The rehearsal dinner often includes the couple's parents and grandparents. The rules for what's appropriate are looser than the reception, but they still exist.\n\nAlso, the couple is nervous. They're getting married tomorrow. This is not the night to tell the story that makes the groom question his life choices, even as a joke. Save the edgier material for the bachelor or bachelorette party, where it belongs.\n\nLight teasing is great. \"[Groom] was so nervous about proposing that he called me four times in one hour\" is sweet and funny. Going into detail about his most embarrassing moment in college is not the move the night before his wedding.",
      },
      {
        heading: 'Closing: Set the Tone for Tomorrow',
        level: 2,
        content:
          "Your rehearsal dinner speech has a unique opportunity: you get to set the emotional tone for the wedding itself. The last thing people hear the night before the big day sticks with them.\n\nEnd on a note that makes everyone excited for tomorrow. \"I've been looking forward to this wedding for months, and after spending tonight with all of you, I'm even more excited for tomorrow. [Couple], tomorrow is going to be the best day of your lives so far. And knowing you two, it's just the beginning.\"\n\nRaise your glass. Let the evening wind down naturally. And maybe don't stay out too late. You've got a wedding to attend in the morning.",
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
          "More and more couples are choosing to give a joint speech at their own wedding. It makes sense. You're both there. You both have people to thank. And frankly, making one person do all the talking while the other stands there nodding feels a little unbalanced.\n\nBut a joint couple speech has a specific challenge that solo speeches don't: coordination. Two people talking into the same microphone can be charming or chaotic, and the difference comes down to preparation.\n\nDone right, a joint couple's speech is the highlight of the evening. It's the one toast where the audience gets to see your actual dynamic as a couple. The way you interrupt each other, finish each other's sentences, disagree on the details. That's the good stuff.",
      },
      {
        heading: 'To Script or Not to Script',
        level: 2,
        content:
          "You have three options:\n\nFully scripted: You write the whole thing together, each person has assigned lines, and you practice it until the transitions are smooth. This is the safest option and works well for couples who get nervous speaking publicly.\n\nLoosely structured: You agree on the sections and who covers what, but you don't script every word. This feels more natural and allows for spontaneity, but requires more comfort with public speaking.\n\nFully improvised: You just... wing it. This works if you're both naturally funny and charming and have been doing improv comedy together for years. For everyone else, it's a recipe for talking over each other for seven awkward minutes.\n\nFor most couples, the loosely structured approach is the sweet spot. Plan the beats, know who says what, but leave room for the personality to come through.",
      },
      {
        heading: 'Dividing the Content',
        level: 2,
        content:
          "The easiest way to structure a joint speech is to divide it by audience. Each person thanks and addresses the people they're closest to.\n\nPerson A thanks their own family, talks about how they met from their perspective, and says something about Person B's family.\n\nPerson B thanks their own family, shares their side of the story, and says something about Person A's family.\n\nThen you come together for the shared sections: thanking the wedding party, thanking the guests, and delivering the final toast.\n\nThis structure is clean because it minimizes the back-and-forth. You're not ping-ponging between speakers every two sentences. Each person gets an uninterrupted stretch, with the transitions happening at natural breakpoints.\n\nAlternative approach: the \"you tell it / no, you tell it\" method. One person starts a story and the other jumps in to correct or add details. This is fun and funny but requires rehearsal. If you haven't practiced, you'll just be interrupting each other for real.",
      },
      {
        heading: 'The Handoffs: Making Transitions Smooth',
        level: 2,
        content:
          "The biggest technical challenge in a joint speech is the handoff between speakers. Awkward silence while one person finishes and the other figures out it's their turn will kill your momentum.\n\nHere are some clean transition techniques:\n\nThe direct pass: \"And on that note, I'll hand it over to [Partner].\" Simple, clear.\n\nThe disagreement pass: \"Now, [Partner] is going to tell you a completely different version of how we met, and I want to be on record that mine is the accurate one.\" Gets a laugh, makes the transition entertaining.\n\nThe tag-team pass: Person A tells the setup, Person B delivers the punchline. This requires practice but it's devastating when it works.\n\nThe natural break: Person A finishes their section, pauses, and Person B starts without any verbal handoff. This works if the sections are clearly different (\"my family\" vs. \"my family\") but can be confusing if the topics are related.\n\nPractice the transitions more than anything else. The individual sections you can handle. The handoffs are where joint speeches fall apart.",
      },
      {
        heading: 'What to Include: The Essential Beats',
        level: 2,
        content:
          "A joint couple speech should cover:\n\nThank the parents. Both sets. Be specific about what they've contributed, whether that's financial, emotional, or logistical. If parents have complicated relationships (divorced, remarried, estranged), navigate carefully and focus on gratitude.\n\nThank the wedding party. A group thank-you is fine, or you can each say a line about your own side. Don't go person by person for a 12-member wedding party or you'll be up there for 20 minutes.\n\nThank the guests. Especially anyone who traveled far.\n\nShare something about your relationship. This is the fun part. How you met, a turning point, the proposal, something that captures your dynamic.\n\nToast. End together, raising your glasses in unison.\n\nTotal time: five to eight minutes. That's enough to cover everything without losing the room.",
      },
      {
        heading: 'Humor: Play Off Each Other',
        level: 2,
        content:
          "The biggest advantage of a joint speech is the built-in comedic dynamic. You are literally a double act. Use it.\n\nContradict each other. \"I knew immediately that [Partner] was the one.\" \"That's funny, because you didn't text me back for three days.\" The audience loves seeing the real relationship peek through the polished exterior.\n\nCorrect each other's stories. \"We were at that Italian place downtown...\" \"It was Mexican.\" \"Was it?\" \"It was definitely Mexican.\" \"Okay, we were at the Mexican place.\" This kind of exchange feels authentic because it is.\n\nHave a running bit. One person keeps trying to say something sentimental and the other keeps undercutting it. Or one person is clearly more emotional than the other. Playing up your actual differences is funnier than scripted jokes.\n\nJust make sure both people get moments. If one person is always the punchline and the other is always the comedian, it starts to feel unbalanced. Share the laughs.",
      },
      {
        heading: 'The Microphone Situation',
        level: 2,
        content:
          "This is more practical than it sounds. If you're sharing one microphone, you need to physically pass it back and forth, which creates natural pauses. If you have two microphones, the transitions can be faster but you might talk over each other.\n\nBest setup: two microphones, each person at a slightly different position. You can look at each other, which makes the banter feel natural, and the audience can clearly see who's speaking.\n\nSecond best: one microphone on a stand between you. Nobody has to hold it, and you can each lean in when it's your turn.\n\nWorst setup: one handheld microphone being passed back and forth. It's clunky and slow. If this is your only option, minimize the transitions.\n\nAsk the venue or DJ about mic options during the rehearsal. This is a solvable problem, but only if you think about it before the day of.",
      },
      {
        heading: 'Ending Together',
        level: 2,
        content:
          "The final moment should feel unified. Both of you, looking at the room, delivering the toast in sync (or at least in harmony).\n\nOption 1: One person delivers the final line and the other raises their glass. Clean and simple.\n\nOption 2: You write one final sentence together and deliver it at the same time. \"To everyone in this room: thank you for being here. We love you.\" This takes practice to not sound weird, but when it works, it's a powerful closer.\n\nOption 3: One person gets sentimental, the other lightens the mood. \"We're so grateful for every person in this room.\" \"Now please drink heavily and dance terribly.\" Good cop, fun cop.\n\nWhatever you choose, end with confidence. Don't trail off. Don't add a \"so yeah, thanks.\" Hit the last line, raise the glasses, kiss each other, and sit down. You just pulled off one of the hardest speech formats in the wedding game.",
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
          "An engagement party speech is the appetizer before the wedding speech main course. It should be shorter, lighter, and less formal than what comes later. Think of it as a warm-up round where the stakes are lower and the vibes are higher.\n\nThe most common mistake people make with engagement party speeches is treating them like wedding speeches. They're not. The wedding hasn't happened yet. You don't need to give the full best man performance or the tearful maid of honor tribute. You just need to raise a glass and make the newly engaged couple feel celebrated.\n\nKeep it to two or three minutes. Four absolute maximum. If you're going longer than that at an engagement party, you're doing too much.",
      },
      {
        heading: 'Who Gives an Engagement Party Speech?',
        level: 2,
        content:
          "Typically, the host of the engagement party gives the main toast. That might be the parents of one or both partners, a close friend, a sibling, or the couple themselves.\n\nIf you're the host, a speech is expected. Keep it warm and welcoming. If you're not the host but want to say something, check with the host first. Multiple surprise speeches at an engagement party can derail the evening.\n\nThe couple may also want to say a few words, usually a thank-you to the host and the guests. If you're the engaged couple and you want to speak, keep it brief and gracious. This isn't the time to tell your entire love story. That's what the wedding is for.\n\nOne key difference from weddings: engagement parties are more casual about the speaking order. There's no program, no DJ announcing speakers. Someone taps a glass, the room quiets down, and you go.",
      },
      {
        heading: 'What to Say: The Engagement Party Formula',
        level: 2,
        content:
          "An engagement party speech has three ingredients:\n\n1. Welcome and context (20 seconds). \"Thank you all for coming tonight to celebrate [Couple]. For those who don't know me, I'm [Name], [Bride]'s college roommate and the person who has heard every detail of this relationship from day one.\"\n\n2. A quick story or observation (60-90 seconds). Something light, something fun, something that captures the couple's energy. This is not the time for the deep emotional story. Save that for the wedding.\n\n3. The toast (20 seconds). \"To [Couple], and to the adventure that's just getting started.\"\n\nThat's it. Two minutes. Everyone goes back to their drinks. Perfect.\n\nThe engagement party speech is the one time where being brief is actually better than being thorough. Nobody expects a keynote address. They expect a warm moment.",
      },
      {
        heading: 'Tone: Light, Fun, Forward-Looking',
        level: 2,
        content:
          "The engagement party is a celebration, not a ceremony. The tone should match.\n\nBe playful. Be excited. Be the friend who's genuinely thrilled about the news. If you were the first person they told, share what that moment felt like. If you watched the relationship develop from the beginning, share the moment you knew it was serious.\n\nAvoid anything too heavy. This isn't the venue for marriage advice, deep family history, or emotional speeches about mortality and the passage of time. There's a whole wedding for that.\n\nAlso avoid anything too roast-y. A little teasing is fine, but engagement parties often include people who are meeting the couple for the first time (new co-workers, extended family, the partner's friends you haven't met yet). Keep the humor accessible and kind.",
      },
      {
        heading: 'If You\'re Also Speaking at the Wedding',
        level: 2,
        content:
          "This is a common scenario. You're the maid of honor or best man, you're giving a speech at the engagement party, and you'll be giving another speech at the wedding. Don't blow your best material at the engagement party.\n\nThink of the engagement party speech as the trailer and the wedding speech as the movie. You can hint at the tone, share a different story, and give the audience a taste of your dynamic with the couple. But save the big story, the emotional punch, and the best jokes for the main event.\n\nA good strategy: at the engagement party, talk about the couple's future. At the wedding, talk about their past and present. This gives you completely different material for each speech and avoids the dreaded \"didn't they already tell this story?\" reaction.\n\nIf someone at the engagement party says \"that was amazing, you should say that at the wedding,\" smile and nod. You've got different plans for the wedding. Better ones.",
      },
      {
        heading: 'The Proposal Story: To Tell or Not to Tell',
        level: 2,
        content:
          "The engagement party is peak proposal-story territory. Guests want to hear it. But here's the thing: it's not your story to tell unless the couple wants you to tell it.\n\nIf you were involved in the proposal (maybe you helped plan it, or you were there when it happened), you can share your perspective. \"I've been holding this secret for three months and I'm so relieved it's finally over\" is a fun angle.\n\nBut if you're just recounting what they told you, let the couple tell their own story. Set them up for it instead. \"I know everyone wants to hear the proposal story, and I think it's best coming straight from the source. [Couple], the floor is yours.\" Then sit down and hand them the mic. The audience gets what they want, and you get credit for being a gracious speaker.",
      },
      {
        heading: 'Quick Examples to Steal',
        level: 2,
        content:
          "For parents hosting the party:\n\"When [Child] told us the news, [Spouse] and I looked at each other and had the same thought: finally. We've loved [Partner] since the first time they came to dinner and asked for seconds of my [Spouse]'s terrible lasagna. That's when we knew this was a person who truly loved our kid. To [Couple] and their incredible future.\"\n\nFor a close friend:\n\"I got the call on a Tuesday afternoon. [Friend] was trying to sound calm but was clearly screaming on the inside. 'We're engaged,' they said, like it was no big deal. Thirty minutes later, my phone was still blowing up with details. To [Couple]: you deserve every happiness. And to [Partner]: welcome to the group chat. There's no leaving.\"\n\nFor the couple:\n\"We just want to thank [Host] for putting this together, and all of you for being here tonight. Looking around this room, we see the people who've supported us, challenged us, and only mildly judged our apartment decor. We can't wait to celebrate with you again at the wedding. And yes, there will be an open bar.\"",
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
          "You want to roast the bride or groom in your speech. That's great. Roasting is one of the best tools in the wedding speech toolkit. A well-placed tease shows closeness, gets laughs, and keeps the speech from drowning in sentimentality.\n\nBut there's a reason you clicked on this article. You know that roasting at a wedding is different from roasting your friend at a bar. The audience includes grandparents, co-workers, and in-laws who've known the couple for about 45 minutes. One wrong joke and you go from \"hilarious best man\" to \"the guy who ruined the reception.\"\n\nSo let's talk about how to be funny without becoming a cautionary tale.",
      },
      {
        heading: 'The Golden Rule of Wedding Roasting',
        level: 2,
        content:
          "Every roast joke must come from a place of obvious love. If the audience can't feel the affection underneath the tease, you've crossed the line.\n\nHere's a test: after every roast line, ask yourself, \"Would the person I'm roasting laugh at this?\" Not \"would they tolerate it\" or \"would they forgive me eventually.\" Would they actually laugh? If the answer isn't a confident yes, cut it.\n\nAnother test: read the joke to someone who doesn't know the person you're roasting. If it sounds mean without context, it'll sound mean to half the audience, because half the audience doesn't have context.\n\nThe best wedding roasts are self-evidently loving. \"[Groom] is the most stubborn person I've ever met. He once argued with a GPS. The GPS was right. He still didn't turn.\" That's funny, affectionate, and clearly coming from someone who knows this person inside out.",
      },
      {
        heading: 'Topics That Are Safe to Roast',
        level: 2,
        content:
          "Harmless quirks and habits. Their obsession with fantasy football. Their inability to cook anything beyond pasta. Their inexplicable loyalty to a terrible sports team.\n\nFunny stories where they looked silly but nobody got hurt. Getting lost on a road trip. Overdressing for a casual event. Mispronouncing a word for years.\n\nTheir relationship dynamic (gently). \"[Bride] says [Groom] is in charge. [Groom] also says [Bride] is in charge. And that, friends, is the foundation of a great marriage.\"\n\nSelf-deprecating comparison. \"[Groom] was always the good-looking one in our friend group, and I say that as someone who has a mirror.\" Roasting yourself alongside the target softens everything.\n\nTheir reaction to the wedding planning. \"I asked [Bride] how wedding planning was going and she sent me a GIF of a building on fire. So... great, I think.\"",
      },
      {
        heading: 'Topics That Will Get You in Trouble',
        level: 2,
        content:
          "Exes. Full stop. Do not mention anyone the bride or groom has previously dated. Not by name, not by implication, not with a \"we all know who I'm talking about\" wink. This is the number one rule of wedding roasting and the one most frequently broken.\n\nAppearance and body. \"You look amazing tonight\" is fine. \"You've really lost weight for this\" is not. Any joke that touches on someone's physical appearance is a minefield.\n\nIntelligence. Calling someone dumb, even jokingly, doesn't land well at their wedding. \"He's not the sharpest tool\" might get a laugh, but it also makes the partner's family wonder what their kid is marrying into.\n\nFinancial situations. Don't joke about someone being cheap, broke, or rich. Money humor at weddings is almost always uncomfortable.\n\nAnything involving substances. \"Remember that time you got so drunk you...\" is a story for a private dinner, not a room that includes the couple's boss and grandmother.\n\nSexual history or innuendo. The audience includes children and elderly relatives. Keep it clean. You're not at a comedy club.",
      },
      {
        heading: 'The Ratio: How Much Roast Is Too Much',
        level: 2,
        content:
          "A wedding speech should be roughly 70% sincere and 30% roast. That's a guideline, not a rule, but it keeps you in safe territory.\n\nThink of it as a structure: you can open with a few roast jokes to get laughs and establish your personality, then transition into the genuine stuff. The roast is the setup. The sincerity is the payoff.\n\nHere's what this looks like in practice:\n\nMinutes 1-2: Funny stories, light teasing, establishing your relationship with the person.\n\nMinute 2-3: The turn. \"But seriously...\" or \"Here's the thing about [Name]...\" This is where you pivot from comedy to heart.\n\nMinutes 3-4: Genuine words about the person and the couple. The emotional core of the speech.\n\nMinute 4-5: Toast, possibly with one final light joke to end on a high.\n\nThis structure works because the humor makes the emotional moments hit harder. If you're sincere from start to finish, people tune out. If you're roasting from start to finish, people get uncomfortable. The contrast is everything.",
      },
      {
        heading: 'Delivery: Timing Makes or Breaks the Joke',
        level: 2,
        content:
          "The same joke can be hilarious or offensive depending on how you deliver it. Here's what matters:\n\nPause before the punchline. Let the audience catch up. Rushing through a joke kills it.\n\nSmile while you roast. Your facial expression tells the audience whether this is affectionate teasing or genuine criticism. If you're grinning, they know it's love.\n\nLook at the person you're roasting. Make eye contact. If you're teasing the groom and he's laughing, the audience has permission to laugh too. If you're staring at your notes and the groom looks uncomfortable, everything falls apart.\n\nDon't double down if a joke doesn't land. Move on. Saying \"oh come on, that was funny\" makes it worse. Just keep going.\n\nCommit to the bit. The worst roast delivery is the half-hearted one where you say something edgy, then immediately apologize. \"He's terrible with directions... I'm just kidding, he's fine.\" Either tell the joke with confidence or don't tell it at all.",
      },
      {
        heading: 'The Save: What to Do If You Go Too Far',
        level: 2,
        content:
          "Even with the best planning, sometimes a joke lands wrong. The room goes quiet. Someone gasps. You can feel the temperature drop.\n\nDon't panic. You have about three seconds to recover.\n\nOption 1: Acknowledge it lightly. \"Okay, that one was funnier in my head.\" Then move on immediately to your next point.\n\nOption 2: Pivot to sincerity. \"But in all seriousness...\" and go straight to something genuinely kind. The contrast will reset the room.\n\nOption 3: Self-deprecate. \"And this is why [Groom] is the funny one in this friendship.\" Turning the attention back on yourself defuses the tension.\n\nWhat you should NOT do: double down, explain the joke, or pretend nothing happened. The audience noticed. Acknowledge it gracefully and move forward.\n\nThe best insurance against going too far is preparation. Test your material on someone honest. If they wince, cut the joke. Better to lose a laugh than lose the room.",
      },
      {
        heading: 'Examples: Roast Lines That Work at Weddings',
        level: 2,
        content:
          "\"I've known [Groom] for 15 years, and in that time he's had roughly 40 different hairstyles. The fact that [Bride] agreed to marry him during this one suggests we should move quickly before he changes it again.\"\n\n\"[Bride] asked me to keep this speech short and clean. So I threw out my first draft. And my second draft. And honestly, most of my memories.\"\n\n\"[Groom] once texted me asking how to boil water. That was three years ago. [Bride], I want you to know what you're signing up for.\"\n\n\"[Bride] is the most organized person I know. She color-codes her closet. She has a spreadsheet for her groceries. And now she's married to a man who once wore two different shoes to work and didn't notice until lunch. I think they call that 'balance.'\"\n\n\"When [Groom] told me he was going to propose, I said, 'Are you sure she'll say yes?' He said, 'I've been practicing the speech for a month.' And I said, 'That's the most [Groom] thing you've ever said.'\"\n\nNotice what all these have in common: they're specific, they're clearly affectionate, and they don't punch down. That's the formula.",
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
          "Here's a hard truth: the average wedding speech story goes something like this. \"So there was this one time, at [location], and [person] did [thing], and it was so funny, and we all laughed, and yeah, that's just the kind of person they are.\"\n\nThe speaker is smiling. The audience is polite. Nobody remembers a word of it by dessert.\n\nStorytelling is the single most important skill in wedding speeches, and almost nobody does it well. A great story transforms a forgettable toast into something people talk about for years. A bad story turns three minutes into a hostage situation.\n\nThe good news: you don't need to be a natural storyteller. You just need to follow a few principles that separate stories people want to hear from stories people endure.",
      },
      {
        heading: 'Pick the Right Story (Most People Pick Wrong)',
        level: 2,
        content:
          "The most common mistake in wedding speech storytelling is choosing the wrong story. People pick stories based on how they felt in the moment, not how the story will sound to an audience.\n\n\"Oh, the camping trip was HILARIOUS. You had to be there.\" If you had to be there, it's not a speech story. It's a memory. Those are different things.\n\nA good wedding speech story meets three criteria:\n\nIt reveals something about the person's character. Not just what happened, but what it shows about who they are.\n\nIt's followable by strangers. The audience doesn't know the backstory, the inside jokes, or the geography of your college campus. The story needs to work without a 10-minute preamble.\n\nIt connects to the marriage. The connection can be subtle, but there needs to be a bridge from \"here's something that happened\" to \"here's why it matters today.\" Otherwise, why are you telling it?",
      },
      {
        heading: 'The Three-Part Structure Every Story Needs',
        level: 2,
        content:
          "Every great story, whether it's a novel or a 90-second wedding anecdote, has three parts:\n\nSetup: Establish the situation. Where are we? Who's involved? What's at stake? Keep this tight. Two or three sentences max. \"It was the summer after college. Five of us had rented a house in Maine for a week, and [Groom] had appointed himself the trip's official chef despite never having cooked anything more complicated than toast.\"\n\nConflict or tension: Something goes wrong, something unexpected happens, or someone does something surprising. This is the engine of the story. \"On night one, he attempted a full Thanksgiving dinner. In July. With groceries he bought entirely at a gas station.\" The audience leans in because they want to know what happened.\n\nResolution or punchline: The payoff. What happened, and what does it mean? \"The turkey was inedible. The pie was somehow worse. And [Groom] stood there, covered in flour, grinning, and said, 'Who wants seconds?' That's who he is. The guy who tries, fails spectacularly, and makes everyone love him more for it.\"\n\nSetup, tension, resolution. That's it. That's the formula.",
      },
      {
        heading: 'Show, Don\'t Tell (Yes, Like Your English Teacher Said)',
        level: 2,
        content:
          "\"[Bride] is the most generous person I know.\" That's telling. It's also boring. The audience has no reason to believe you because you haven't shown them anything.\n\n\"Last year, [Bride] found out that a co-worker was sleeping in her car because she couldn't afford first and last month's rent. Without telling anyone, [Bride] quietly covered the deposit. I only found out because the co-worker mentioned it months later.\" That's showing. Now the audience believes you because they've seen the evidence.\n\nEvery quality you want to attribute to the person should be illustrated, not stated. Don't say \"he's loyal.\" Tell the story that proves it. Don't say \"she's hilarious.\" Tell the story that makes the audience laugh and realize it themselves.\n\nThis is the difference between a speech that makes people nod politely and a speech that makes people feel something.",
      },
      {
        heading: 'Cut the Fat: Editing Your Story Down',
        level: 2,
        content:
          "The first draft of your story is always too long. Always. You include too many details, too many characters, and too many tangents because they all feel important to you.\n\nHere's how to trim:\n\nRemove characters who don't matter. If your story involves five friends but only one of them is relevant, cut the other four. \"A group of us were on a road trip\" works. You don't need to name and introduce each person.\n\nCut unnecessary setup. The audience doesn't need to know why you were in Denver, what hotel you stayed at, or what you had for lunch before the interesting part happened. Start as close to the action as possible.\n\nEliminate the phrase \"long story short.\" If you need this phrase, the long story isn't short enough yet. Cut more.\n\nRemove qualifiers. \"It was kind of funny\" and \"I think it was a Tuesday, or maybe a Wednesday\" add nothing. Be confident and specific, even if the details aren't perfectly accurate.\n\nTest the edited version: read it out loud and time it. If the story takes more than 90 seconds to tell, it's still too long for a wedding speech. Cut again.",
      },
      {
        heading: 'The Transition: Connecting the Story to the Couple',
        level: 2,
        content:
          "This is where most wedding speech stories fall apart. The speaker tells a great story, then says, \"Anyway, congratulations to the happy couple!\" The story floats in space, disconnected from the occasion.\n\nYou need a bridge. One or two sentences that connect the story to the marriage. And the bridge should feel natural, not forced.\n\nBad bridge: \"And that story reminds me of love because love is also about trying new things.\" (Too vague, too much of a stretch.)\n\nGood bridge: \"That's the thing about [Groom]. He's never been afraid to fail in front of the people he loves. And [Bride], you married someone who will always show up, give it everything, and grin even when the turkey is a disaster.\" (Specific, connects the story's theme to the marriage.)\n\nThe bridge doesn't have to be profound. It just has to close the loop. \"That's who [Name] is, and that's exactly why [Partner] said yes\" is a perfectly serviceable bridge for almost any story.",
      },
      {
        heading: 'Delivery: How to Tell the Story Out Loud',
        level: 2,
        content:
          "A story that reads well on paper can die on stage if the delivery is flat. Here's how to bring it to life:\n\nVary your pace. Slow down before the key moment. Speed up during the chaotic parts. A monotone delivery is the number one killer of wedding speech stories.\n\nUse pauses. Before a punchline, pause for a beat. After a big laugh, pause to let it land. Pauses are your best friend. Most speakers are terrified of silence, but silence is what makes the loud parts loud.\n\nDon't narrate the emotion. Don't say \"this next part is really funny\" or \"I still get emotional thinking about this.\" Just tell the story and let the audience feel what they feel.\n\nDon't read the story word for word. You should know it well enough to look up from your notes regularly. Eye contact is what makes storytelling feel personal rather than recited.\n\nAct out the dialogue slightly. If the groom said something in the story, deliver that line with a tiny bit of his energy. You don't need to do a full impression (please don't), but a hint of characterization brings the story to life.",
      },
      {
        heading: 'When to Use Multiple Stories (And When to Stick to One)',
        level: 2,
        content:
          "One great story is almost always better than three okay stories. If you have a story that perfectly captures the person and connects to the marriage, tell that one story and tell it well.\n\nMultiple stories work when:\n\nYou're showing different facets of the person. Story one shows their humor, story two shows their depth. This works if both stories are short (30-60 seconds each) and the contrast between them makes a point.\n\nYou're creating a pattern. \"The first time I knew [Bride] was special... the second time... and the third time, which was last Tuesday.\" A series of brief moments can build to an emotional cumulation that one longer story can't.\n\nYou're contrasting then and now. A short \"before\" story and a short \"after\" story can powerfully illustrate growth.\n\nMultiple stories DON'T work when you're just listing memories because you can't choose. \"And then there was the time... and another time... oh, and I can't forget...\" That's a highlight reel, not a speech. Pick the best one and commit.",
      },
      {
        heading: 'The Stories Nobody Wants to Hear',
        level: 2,
        content:
          "A few story types that consistently fall flat at weddings:\n\nThe drinking story. \"We were so wasted and then [Name] did [thing].\" Cool. Every friend group has these. They're not interesting to anyone outside the group and they make the speaker and subject both look questionable.\n\nThe \"you had to be there\" story. If you catch yourself saying this phrase at any point while drafting, that story doesn't work. Choose a different one.\n\nThe story that's really about you. \"One time, I was going through a really hard time, and [Name] was there for me.\" The intent is to show their character, but the focus is on your life. Reframe it so they're the protagonist, not you.\n\nThe story with no point. Things happened. They were funny at the time. There's no lesson, no character reveal, no connection to the wedding. Just events in sequence. This is the most common story problem and the easiest to fix: ask yourself \"what does this story show about this person?\" If you can't answer in one sentence, pick a different story.\n\nThe epic saga. Some stories are just too long and too complex for a wedding speech. If your story requires a cast of characters, multiple locations, and more than two minutes of setup, save it for the memoir. In a speech, simplicity wins every time.",
      },
      {
        heading: 'Putting It All Together',
        level: 2,
        content:
          "Here's a complete example of a well-structured wedding speech story:\n\n\"Two years ago, [Bride] called me at 11pm on a work night. She'd just had the worst day of her life. Her project fell through, her car broke down, and her apartment flooded. She was sitting in a parking lot, completely defeated.\"\n\n\"I started to give her the whole 'everything happens for a reason' pep talk, and she cut me off. She said, 'I don't need a pep talk. I already called [Partner]. They're on their way with towels and takeout. I just called you to complain.'\"\n\n\"And I remember thinking: she's going to be fine. Not because the day wasn't terrible. It was. But because she'd found the person she calls when things fall apart. The person who shows up with towels and takeout without being asked twice.\"\n\n\"That's what this marriage is. It's the person who shows up. And [Partner], you've been showing up for her since day one.\"\n\nSetup, tension, resolution, bridge. Specific details. Character revealed through action. Under 90 seconds. That's how you tell a story in a wedding speech.",
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
          "Here's the thing about wedding speech jokes: the graveyard of failed attempts is enormous. For every joke that kills, there are ten that make 200 people stare at their salads in collective discomfort.\n\nBut a good joke? It transforms a speech. It makes the room exhale. It tells people, \"Relax, this one's going to be fun.\" The trick isn't being the funniest person in the room. It's knowing which jokes actually land at weddings, and which ones only seem funny at 1am when you're drafting your speech alone.",
      },
      {
        heading: 'Why Most Wedding Speech Jokes Fail',
        level: 2,
        content:
          "Wedding crowds are weird. You've got the groom's college buddies sitting next to the bride's grandmother. The couple's boss is three tables from their childhood friends. It's basically the world's most uncomfortable comedy club.\n\nJokes fail at weddings for three reasons. First, they're inside jokes that only four people understand (leaving 196 people confused). Second, they punch down instead of up, making someone the butt of a joke who didn't sign up for it. Third, they require too much setup. Wedding attention spans are short. People are eyeing the bar, checking out the centerpieces, wondering if that's an open tab or not.\n\nThe jokes that work are quick, relatable, and make the couple look good even while being teased.",
      },
      {
        heading: 'Self-Deprecating Openers (The Safest Bet)',
        level: 2,
        content:
          "Starting with a joke about yourself is the lowest-risk, highest-reward move in wedding speeches. It signals confidence, puts the room at ease, and costs you nothing.\n\n1. \"For those who don't know me, I'm [Name]. For those who do know me... I'm sorry.\"\n\n2. \"[Groom] asked me to be his best man, which really says more about his lack of options than my qualifications.\"\n\n3. \"I've been told to keep this speech short, sweet, and not embarrassing. So I've already failed at two out of three.\"\n\n4. \"I spent weeks writing this speech. Then I lost it. So what you're about to hear is version two, which is either much better or much worse. We'll find out together.\"\n\n5. \"They say the best man's speech should last as long as the groom lasts in bed. So... goodnight everyone.\"\n\nThat last one is a classic for a reason. It's mildly risque but not graphic, and it lets you pretend to sit down before continuing. Just read the room. If Grandma is in the front row clutching her pearls, maybe start with number one instead.",
      },
      {
        heading: 'Jokes About the Couple That Actually Land',
        level: 2,
        content:
          "The best couple jokes highlight a real, recognizable dynamic. Everyone who knows them should be nodding.\n\n6. \"[Bride] and [Groom] are a perfect match. She's organized, ambitious, and detail-oriented. He... has a great personality.\"\n\n7. \"I knew [Groom] was serious about [Bride] when he started showering before dates. Previously, that was a special-occasion thing.\"\n\n8. \"They say opposites attract, and that's definitely true here. [Bride] is punctual. [Groom] thinks 'on time' means within the same hour.\"\n\n9. \"When [Groom] told me he was going to propose, I asked if he was nervous. He said, 'Why would I be nervous? She planned the whole thing.'\"\n\n10. \"[Bride] told me she fell in love with [Groom] because he makes her laugh every day. [Groom] told me he fell in love with [Bride] because she laughs at him every day. Same energy.\"\n\nNotice the pattern? The groom is the gentle target. The bride comes out looking smart and in charge. This is intentional. Roasting the bride too hard in a best man speech gets awkward fast. If you're the maid of honor, you can flip the dynamic and lovingly tease the bride while complimenting the groom.",
      },
      {
        heading: 'Marriage Jokes (The Classics, Updated)',
        level: 2,
        content:
          "Marriage jokes are the bread and butter of wedding toasts. The key is avoiding anything that sounds like a 1990s sitcom punchline about \"the old ball and chain.\"\n\n11. \"Marriage is basically a long conversation. On the bright side, you've found someone who'll let you talk during movies.\"\n\n12. \"The secret to a happy marriage? Two words: 'Yes, dear.' Actually, that works for this speech too.\"\n\n13. \"They say marriage is about compromise. For example, [Groom] wanted a destination wedding. [Bride] wanted this venue. And here we are... at this venue.\"\n\n14. \"I googled 'advice for newlyweds' and the top result was a divorce lawyer's website. So instead, I'll just say: be kind, be patient, and never go to bed angry. Stay up and argue like adults.\"\n\n15. \"Someone told me that in a good marriage, you fall in love many times, always with the same person. In [Groom]'s case, it helps that [Bride] changes her hair color every six months.\"\n\nThe trick with marriage jokes is keeping them light and modern. Anything that frames marriage as a prison sentence or one partner as a tyrant is going to land like a brick.",
      },
      {
        heading: 'Callback Jokes (For the Advanced Speaker)',
        level: 2,
        content:
          "A callback is when you reference something from earlier in the speech for a second laugh later. It makes you look like a comedic genius, and it's easier than you think.\n\n16. Early in your speech, mention a specific quirk: \"[Groom] is, to put it gently, the worst cook I've ever met. The man once burned cereal.\" Then, at the end: \"So please raise your glasses to the happy couple. May your love be strong, your days be long, and your smoke detectors fully charged.\"\n\n17. If someone spoke before you and got a big laugh, reference it: \"As [Father of the Bride] mentioned, [Groom] was a bit of a project. But I'd say the renovations are almost complete.\"\n\nCallbacks reward the audience for paying attention. They create a feeling of shared experience, which is exactly what a wedding is supposed to be about.",
      },
      {
        heading: 'Situational Jokes (Use What the Day Gives You)',
        level: 2,
        content:
          "Some of the biggest laughs come from acknowledging what's actually happening in the room. These can't be pre-written, but you can prepare frameworks.\n\n18. If the previous speech was long: \"I'll keep this shorter than [Previous Speaker]'s speech. Not that it wasn't great. But I could see the bartenders aging.\"\n\n19. If the weather was bad: \"They say rain on your wedding day is good luck. By that math, today's couple is basically set for eternity.\"\n\n20. If the food was amazing: \"Before I toast the couple, can we also toast the chef? Because I was considering proposing to that risotto.\"\n\nThese in-the-moment jokes feel spontaneous even when they're semi-planned. Keep a mental list of \"if X happens, I'll say Y\" scenarios and you'll always have something fresh.",
      },
      {
        heading: 'Jokes to Absolutely Avoid',
        level: 2,
        content:
          "Let's be clear about what doesn't work.\n\nEx-partner jokes. Never. Not even vaguely. Not even if the groom says it's fine. It's not fine.\n\nAnything about the wedding night. The \"wink wink\" bedroom humor that uncles love? Leave it to the uncles. Your speech should be better than that.\n\nJokes that require explaining. If you have to say \"get it?\" after, cut it.\n\nGeneric internet jokes with no personal connection. \"Marriage is a workshop where the husband works and the wife shops\" has been used at roughly 4 million weddings. Everyone's heard it. Everyone hates it.\n\nJokes at a guest's expense. Making fun of someone in the audience who didn't agree to be part of the show is a fast track to awkwardness.",
      },
      {
        heading: 'How to Deliver a Wedding Speech Joke',
        level: 2,
        content:
          "Delivery matters more than the joke itself. Here's how to not botch it.\n\nPause before the punchline. Just a beat. Let the setup land, then deliver. The pause tells the audience, \"Something funny is coming,\" and they'll be ready to laugh.\n\nDon't laugh at your own joke before you finish it. This is the number one amateur mistake. If you're giggling through the punchline, nobody can hear it.\n\nCommit to the bit. If you're going to tell a joke, own it. Half-hearted delivery with a mumbled \"haha, anyway\" afterward kills the momentum.\n\nHave a plan if it doesn't land. The recovery is simple: smile, take a breath, and move on to your next point. Don't say \"tough crowd\" or try to explain why it was funny. Just keep going. The audience will forget a flat joke in ten seconds, but they'll remember you spiraling about it for two minutes.",
      },
      {
        heading: 'Putting It All Together',
        level: 2,
        content:
          "A great wedding speech doesn't need ten jokes. It needs two or three that are well-placed and well-delivered. Open with a self-deprecating one to warm up the room. Drop one or two couple-specific jokes in the middle to keep things lively. Then close sincerely.\n\nThe formula is: funny, funny, heartfelt. The laughs earn you the right to be emotional at the end without it feeling forced. And when you raise that glass for the final toast, the whole room will be with you.\n\nNow go practice in front of a mirror. Yes, really. Your reflection doesn't judge. Much.",
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
          "Here's a brutal test for your wedding speech: could you swap in any other couple's names and have it still make sense? If the answer is yes, your speech is generic. And generic speeches are the reason people check their phones during toasts.\n\nA personal speech doesn't mean you need to bare your soul for fifteen minutes. It means every word clearly belongs to this couple, this day, this relationship. It means the audience thinks, \"Yes, that's exactly who they are.\" It's the difference between a Hallmark card and a handwritten letter.",
      },
      {
        heading: 'The Generic Speech Trap (And Why Smart People Fall Into It)',
        level: 2,
        content:
          "You sit down to write. You google \"wedding speech examples.\" You read fifteen of them. They all say things like \"from the moment they met, I knew it was special\" and \"they complete each other\" and \"here's to a lifetime of love.\"\n\nSo you write something similar. It sounds polished. It sounds... like a wedding speech. That's the problem. It sounds like a wedding speech instead of sounding like you, talking about people you actually know.\n\nGeneric speeches happen because people are scared. Scared of being too honest, too specific, too emotional, too funny. So they retreat to safe, bland territory. But safe and bland is exactly what makes a speech forgettable.\n\nThe irony? Specificity is what makes people feel things. \"She's the kindest person I know\" is generic. \"She once drove 40 minutes in a snowstorm to bring me soup when I had the flu, and she didn't even like me that much yet\" is a speech people will talk about at brunch the next day.",
      },
      {
        heading: 'Start With Stories, Not Statements',
        level: 2,
        content:
          "The single biggest upgrade you can make to any wedding speech is replacing statements with stories.\n\nStatement: \"Jake is the most loyal friend I've ever had.\"\nStory: \"When I got laid off in 2019, Jake showed up at my apartment with a whiteboard, three markers, and a six-pack. He said, 'We're rewriting your resume tonight.' We didn't finish the resume, but we did finish the beer, and honestly, that helped more.\"\n\nThe story proves the statement. It gives the audience a movie to watch in their heads instead of a platitude to nod at.\n\nEvery quality you want to highlight about the couple should be anchored to a specific moment. Not \"they're so great together\" but \"the time they spent three hours lost in Rome and came back laughing instead of fighting, and I thought, okay, these two are going to make it.\"",
      },
      {
        heading: 'The Five Senses Exercise',
        level: 2,
        content:
          "When you're trying to unlock personal details, go through your senses. It sounds weird, but it works.\n\nWhat do you see when you think of them? Not their faces. The specific things. The way he always wears those beat-up sneakers. The way she lights up a room before she even says anything. The way they look at each other when they think nobody's watching.\n\nWhat do you hear? Her laugh that you can pick out of any crowd. The way he says her name. The playlist they always put on at dinner parties.\n\nWhat about a smell, a taste, a feeling? The terrible cologne he wore in college. The cake she stress-bakes before every big decision. The feeling of being at their kitchen table at midnight, talking about everything and nothing.\n\nThese details are pure gold. They're impossible to fake, impossible to generic-ify, and they make people in the audience think, \"This person really knows them.\"",
      },
      {
        heading: 'Name the Moment You Knew',
        level: 2,
        content:
          "Every great personal speech has a \"moment I knew\" beat. This is when you tell the audience exactly when you realized this relationship was the real deal.\n\nMaybe it was the first time you saw them together and noticed your friend was different. Calmer. Happier. More themselves.\n\nMaybe it was a phone call where they talked about their partner for twenty minutes without realizing it.\n\nMaybe it was a crisis where their partner showed up in a way that surprised you.\n\nThe moment doesn't have to be dramatic. In fact, the smaller and more ordinary it is, the more powerful. \"I knew it was real when I called Sarah on a Tuesday night and she said she couldn't talk because they were doing a puzzle together. Sarah, who has never finished a puzzle in her life. That's when I knew Mike had changed the game.\"\n\nThis beat works because it's your genuine observation. Nobody else in the room has this exact perspective. That's what personal means.",
      },
      {
        heading: 'Use Their Language, Not Yours',
        level: 2,
        content:
          "If the couple has a phrase they always say, a nickname they use, or a running joke between them, work it in. This is an instant personalization hack.\n\nDoes the groom call the bride \"trouble\"? Use it. Does the couple have a catchphrase they picked up from a show they binge together? Reference it. Do they have a ridiculous argument they always have (pineapple on pizza, the correct way to load a dishwasher, whether Die Hard is a Christmas movie)?\n\nThese small nods to the couple's private world make the speech feel like an inside look at who they really are. The couple will be grinning, the audience will be charmed, and nobody will be checking their phone.\n\nA warning: inside jokes that only you and one other person understand don't count. The reference should be something that at least a decent portion of the room recognizes, or something you explain quickly for context.",
      },
      {
        heading: 'The Before and After',
        level: 2,
        content:
          "One of the most powerful structures for a personal speech is the before-and-after comparison. Who was this person before they met their partner, and who are they now?\n\nThis works for any speaker. Parents can talk about watching their child grow into someone ready for this kind of love. Best friends can talk about the glow-up (emotional, not physical, please). Siblings can talk about seeing a new side of their brother or sister.\n\n\"Before Emma, my brother's idea of a home-cooked meal was microwave popcorn. Now he makes risotto. Actual risotto. From scratch. With stock he made himself. Emma, I don't know what kind of witchcraft you're practicing, but it's working and we're all grateful.\"\n\nThe before-and-after shows growth without being preachy. It credits the partner for bringing out the best in someone, which is basically the highest compliment you can pay at a wedding.",
      },
      {
        heading: 'Things to Cut (The Generic Red Flags)',
        level: 2,
        content:
          "Go through your speech and cut anything that sounds like it belongs on a greeting card. Specifically:\n\n\"They were meant to be.\" Says nothing. Replace with the actual evidence that made you think so.\n\n\"I've never seen him so happy.\" Better, but still vague. When specifically? Doing what? What did that happiness look like?\n\n\"She's like a sister to me.\" Cool, but what does that actually mean in practice? What have you been through together that proves it?\n\n\"They bring out the best in each other.\" The laziest line in wedding speeches. What does \"the best\" look like? Show it.\n\nAny quote from the internet (Rumi, Dr. Seuss, that \"love is patient\" Bible verse). Unless the quote has genuine personal significance to your relationship with the couple, it's filler.\n\nEvery time you cut a generic line, replace it with a specific detail. Your speech will shrink and get better simultaneously.",
      },
      {
        heading: 'What If You Genuinely Don\'t Have Deep Stories?',
        level: 2,
        content:
          "Maybe you're the best man but you've drifted a bit. Maybe you're a parent who doesn't know the couple's day-to-day life. Maybe you were asked to speak and you're not sure why.\n\nFirst: do your homework. Call three people who are close to the couple and ask, \"What's a moment that really captures who they are together?\" You'll get material you never would have thought of.\n\nSecond: be honest about your vantage point. \"I don't get to see these two as often as I'd like, but every time I do...\" is a perfectly fine setup. It's authentic, and authenticity is the whole point.\n\nThird: lean into observation. You don't need years of shared history to notice how someone's face changes when they talk about the person they love. You just need to pay attention.\n\nA short, genuinely personal speech beats a long, generically polished one every single time.",
      },
      {
        heading: 'The Final Test',
        level: 2,
        content:
          "Before you finalize your speech, try this. Read it out loud. Every time you hear a line that could apply to literally any couple, highlight it. Then rewrite those lines with something only this couple would recognize.\n\nYour goal: a speech where, if a stranger read it, they'd feel like they already know the couple. Where the bride and groom look at each other during your toast and think, \"Yeah, that's us.\"\n\nThat's what personal means. Not perfect. Not poetic. Just real.",
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
          "Let's address the elephant in the room. You're the groom's best man. You're probably closer to the groom. Your instinct is to spend 95% of your speech talking about your buddy and then tack on a \"and welcome to the family, [Bride]!\" at the end.\n\nDon't do that. The bride is literally half the reason everyone is here. Ignoring her, or treating her like an afterthought, is one of the fastest ways to tank an otherwise solid speech.\n\nBut here's the tricky part. Talk about her too much and it gets weird. Too complimentary and it sounds like you're hitting on her. Too surface-level and it's obvious you don't actually know her. There's a sweet spot, and finding it is easier than you think.",
      },
      {
        heading: 'Why This Matters More Than You Think',
        level: 2,
        content:
          "The bride (and her family, and her friends) are listening to your speech closely. They want to hear that you see what makes her special. They want to know the groom's best friend approves. It's a bigger deal than most best men realize.\n\nI've seen best man speeches that spent ten minutes roasting the groom with zero mention of the bride until the very end. The groom's friends laughed. The bride's side of the room sat in polite silence, wondering if they were invisible.\n\nBalance matters. You don't need to split your speech 50/50, but the bride should be woven into the fabric of what you're saying, not stapled on as a postscript.",
      },
      {
        heading: 'What to Actually Say About Her',
        level: 3,
        content:
          "Focus on three things: what she means to your friend, what she's brought into his life, and what you personally appreciate about her. That's it. You don't need to give her biography.\n\n\"Since [Bride] came into the picture, [Groom] has become someone who actually returns phone calls. He irons shirts. He has opinions about throw pillows. I don't know how she did it, but she took a man who once wore the same jeans for two weeks straight and turned him into someone I'm genuinely proud of.\"\n\nSee how that mentions the bride through the lens of the groom? You're not pretending to know her innermost thoughts. You're speaking from your actual experience of watching your friend change for the better. That's authentic and appropriate.",
      },
      {
        heading: 'How to Talk About Her If You Know Her Well',
        level: 2,
        content:
          "If you're genuinely friends with the bride, you have more room to work with. Share a story that includes her directly.\n\n\"I remember the first time [Groom] brought [Bride] to our annual camping trip. We all expected her to last maybe one night before demanding a hotel. Instead, she caught more fish than any of us, roasted the best marshmallow I've ever seen, and beat [Groom] at poker so badly he still won't talk about it. That's when we all knew she was a keeper.\"\n\nThis kind of story works because it shows the bride being herself, not being defined by her relationship to the groom. She's a full person in this anecdote, and that respect comes through.",
      },
      {
        heading: 'How to Talk About Her If You Barely Know Her',
        level: 2,
        content:
          "This is where most best men find themselves, and it's totally fine. You don't need to fake a deep friendship. Honesty works better.\n\n\"I'll be straight with you all. I don't know [Bride] as well as I'd like to yet. But here's what I do know: I've never seen [Groom] this happy. I've never heard him talk about someone the way he talks about her. And that tells me everything I need to know.\"\n\nThat's genuine, warm, and doesn't overreach. You can also reference something you've observed firsthand, even if it's small.\n\n\"The first time I met [Bride], she laughed at [Groom]'s worst joke. The one about the penguin. You all know the one. And I thought, this woman either has terrible taste in humor or she's madly in love with him. Either way, she's perfect for him.\"\n\nYou're working with what you have. That's always more charming than pretending to have what you don't.",
      },
      {
        heading: 'The Compliment Sweet Spot',
        level: 2,
        content:
          "There's a line between \"warm and welcoming\" and \"dude, are you in love with the bride?\" Here's how to stay on the right side of it.\n\nGood: Complimenting her character, her effect on the groom, her energy, her humor, her strength.\nWeird: Commenting extensively on her appearance, saying she's \"the most beautiful woman in the room,\" or any variation of \"you're a lucky man\" repeated four times.\n\nOne mention of how stunning she looks today? Perfect. Normal. Expected. Dwelling on it or getting specific about how she looks in that dress? Now people are shifting in their seats.\n\nThe safest play: frame your compliments about the bride through the groom's eyes. \"I've never seen [Groom] look at anything the way he looked at [Bride] when she walked down that aisle. And I've seen him look at a steak.\" You're complimenting her by showing his reaction, which keeps it in your lane as his best friend.",
      },
      {
        heading: 'Where in Your Speech to Mention Her',
        level: 2,
        content:
          "Don't save the bride for the last thirty seconds. Ideally, she should come up naturally in the middle of your speech and again near the end.\n\nA solid structure looks like this:\n\nOpener about yourself or the groom (1-2 minutes). A story or two about the groom, possibly including when you first met the bride or first heard about her (2-3 minutes). A section specifically about what she's brought to his life and what you appreciate about her (1-2 minutes). A sincere close toasting both of them together (30 seconds).\n\nThis way, the bride isn't a footnote. She's a key part of the narrative. And the transition from \"roasting the groom\" to \"here's why this woman is the best thing that happened to him\" creates a natural emotional arc that the audience will love.",
      },
      {
        heading: 'Things to Never Say About the Bride',
        level: 2,
        content:
          "Let's make this crystal clear.\n\nNever compare her to the groom's exes. Not even favorably. \"She's so much better than the last one\" still brings up the last one, and nobody wants that.\n\nNever joke about her \"controlling\" the groom. The ball-and-chain humor is dead. Let it stay dead.\n\nNever comment on her family's money, her career in a backhanded way, or anything that could be read as a dig disguised as a compliment.\n\nNever reference private information she wouldn't want shared. If you're unsure, ask the groom. Better yet, ask her directly.\n\nAnd for the love of everything, never say anything sexual or suggestive about the bride. Not even a mild innuendo. It's her wedding day. Read the room.",
      },
      {
        heading: 'A Template You Can Steal',
        level: 2,
        content:
          "If you're stuck, here's a plug-and-play paragraph about the bride that you can customize:\n\n\"Now I have to talk about [Bride], and honestly, this is the easy part. Because [one genuine quality you've observed]. I remember [brief specific moment or observation]. And when I see the way [Groom] is around her... [what you've noticed about your friend when he's with her]. [Bride], thank you for making my best friend the happiest I've ever seen him. And thank you for [one slightly funny, slightly sincere thing].\"\n\nFill in those brackets with real details and you'll have a bride section that's genuine, appropriate, and memorable. No awkwardness required.",
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
          "Sometimes you don't need a whole bit. You just need one clean line that lands, gets a laugh or a smile, and lets you move on. That's the beauty of a good one-liner. It does the work of an entire paragraph in a single sentence.\n\nThese are designed to be dropped into any part of a wedding speech. Use them as openers, transitions, or closing zingers. Mix and match. Steal shamelessly. That's what they're here for.",
      },
      {
        heading: 'Openers That Set the Tone',
        level: 2,
        content:
          "1. \"I've been practicing this speech for weeks, and my dog has heard it so many times he leaves the room when I start talking.\"\n\n2. \"I was told to be funny, be brief, and not mention the stag do. So this will be a very short speech.\"\n\n3. \"I promised myself I wouldn't cry today, but then I saw the bar prices.\"\n\n4. \"For anyone worried this speech will go long... so am I.\"\n\n5. \"Being asked to give a wedding speech is a lot like being asked to kiss the ugly bridesmaid. You don't want to do it, but you know it's your duty.\" (Classic, and only use this if you ARE the one giving the speech. Never punch down at actual bridesmaids.)\n\nActually, scratch number five. It's outdated. Here's a better option:\n\n5. \"I asked [Groom] what he wanted me to say in this speech. He said, 'Just make me look good.' So this is a work of fiction.\"",
      },
      {
        heading: 'One-Liners About the Groom',
        level: 2,
        content:
          "6. \"[Groom] is the kind of guy who'd give you the shirt off his back. Mainly because he's got twelve of the same shirt.\"\n\n7. \"I've known [Groom] for [X] years, and I can honestly say he hasn't changed a bit. Which is either heartwarming or concerning.\"\n\n8. \"[Groom] has many great qualities. And I'm sure by the end of this marriage, [Bride] will have discovered at least one of them.\"\n\n9. \"They say behind every great man is a woman rolling her eyes. [Bride], welcome to a lifetime of cardio.\"\n\n10. \"[Groom] told me he's the luckiest man alive today. I agree. It's incredible she said yes.\"",
      },
      {
        heading: 'One-Liners About the Bride',
        level: 2,
        content:
          "11. \"[Bride], you look absolutely stunning today. [Groom], you also look like you tried.\"\n\n12. \"[Bride] is smart, beautiful, and kind. [Groom], I have no idea how you pulled this off.\"\n\n13. \"When [Bride] first started dating [Groom], her friends asked what she saw in him. She's still working on that answer.\"\n\nKeep bride-targeted one-liners lighter and more complimentary. The humor should make her look great while gently ribbing the groom. That dynamic always works.",
      },
      {
        heading: 'One-Liners About Marriage',
        level: 2,
        content:
          "14. \"Marriage is a relationship in which one person is always right, and the other person is the husband.\"\n\n15. \"The key to a successful marriage is simple: just do everything she says.\"\n\n16. \"Marriage is like a deck of cards. All you need in the beginning is two hearts and a diamond. By the end, you're looking for a club and a spade.\"\n\n17. \"Love is blind. Marriage is the eye-opener.\"\n\n18. \"A good marriage is like a good wine. It gets better with age and makes you want to stay in on a Friday night.\"\n\nThese are well-worn, so use them sparingly and confidently. One classic marriage quip is charming. Three in a row starts to feel like you're reading off a joke website. Which, to be fair, you might be. But the audience doesn't need to know that.",
      },
      {
        heading: 'Transition One-Liners',
        level: 2,
        content:
          "These are the unsung heroes. Use them to pivot between sections of your speech without losing momentum.\n\n19. \"But in all seriousness...\" (The classic gear shift from funny to sincere. Simple. Effective.)\n\n20. \"Now, I could stand here all night telling stories. But the bar is open and I have priorities.\"\n\n21. \"I could go on, but [Groom]'s lawyer has advised me not to.\"\n\n22. \"Before I get emotional, and I will get emotional, let me just say...\"\n\nTransition lines are underrated because they signal to the audience that you're in control of the speech. You know where you're going. That confidence is infectious.",
      },
      {
        heading: 'Closing One-Liners',
        level: 2,
        content:
          "23. \"Please raise your glasses. To love, to laughter, and to making it home in one piece tonight.\"\n\n24. \"Here's to the bride and groom. May your love be modern enough to survive the times, and old-fashioned enough to last forever.\"\n\n25. \"To [Bride] and [Groom]: may your wifi be strong, your coffee be hot, and your arguments be short. Cheers.\"\n\nA strong closing one-liner is the cherry on top. It gives people something to smile about as they clink glasses. Don't overthink it. Just make it warm, brief, and quotable.",
      },
      {
        heading: 'How to Actually Use These',
        level: 2,
        content:
          "A few practical tips for working one-liners into your speech.\n\nDon't stack them. One-liner, one-liner, one-liner in a row turns your toast into a stand-up set. Mix them between genuine, heartfelt content.\n\nCustomize them. Swap in real names, real details, real quirks. \"He'd give you the shirt off his back\" is fine. \"He'd give you the shirt off his back, specifically that terrible Hawaiian one from 2018\" is better.\n\nPractice the pause. One-liners live and die on timing. Say the line, pause, let the laugh come. Don't rush to the next sentence.\n\nAnd finally, if a one-liner doesn't land, just keep going. The audience won't remember the joke that fell flat. They'll remember whether you seemed confident and genuine. A smooth recovery is worth more than the perfect punchline.",
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
          "You've been given the mic, the mandate, and the expectation. As best man, people want you to be funny. The groom wants stories. The guests want to laugh. The bride wants you to be funny without being offensive. No pressure.\n\nHere's the good news: you don't need to be a comedian. You just need a structure, some real stories, and the sense to know where the line is. Let's build this thing step by step.",
      },
      {
        heading: 'Step 1: Accept That Funny Comes From Truth',
        level: 2,
        content:
          "The funniest moments in best man speeches are never the pre-written jokes. They're the real stories that make people think, \"That's so him.\"\n\nYour job isn't to be a stand-up comic. It's to be a storyteller who happens to be telling funny stories. And real stories are funnier than anything you'll find on the internet because the audience already knows the main character.\n\nWhen you say, \"Dave once tried to impress a date by cooking a three-course meal and set off the fire alarm during the appetizer,\" that's funny because it's TRUE. And if the audience knows Dave, it's even funnier because they can picture it perfectly.\n\nSo before you write a single word, spend some time remembering. Flip through old photos. Text mutual friends. Think about the dumbest, most endearing, most perfectly \"him\" moments you've shared. That's your raw material.",
      },
      {
        heading: 'Step 2: Pick 2-3 Stories (Not 7)',
        level: 2,
        content:
          "The biggest mistake in funny best man speeches is trying to cram in every good story you have. More stories doesn't mean more funny. It means less impact per story.\n\nPick two or three stories maximum. Choose them based on these criteria:\n\nIs it actually funny to people who weren't there? Some stories are \"you had to be there\" funny. Those don't work in speeches.\n\nDoes it make the groom look lovably ridiculous, not genuinely bad? There's a difference between \"he's a lovable idiot\" and \"he once did something actually terrible.\" You want the first one.\n\nCan you tell it in under two minutes? If a story needs five minutes of backstory, it's not a speech story. It's a memoir.\n\nDoes at least one story naturally lead into something about the bride or the relationship? You need that bridge from \"funny groom stories\" to \"sincere toast about the couple.\"",
      },
      {
        heading: 'Step 3: Structure Your Speech Like a Comedy Set',
        level: 2,
        content:
          "Professional comedians don't just tell random jokes. They build a set with an arc. Your speech needs the same thing.\n\nHere's the structure:\n\nThe Warm-Up (30 seconds). A quick, self-deprecating opener. Get the first laugh early and small. \"For those who don't know me, I'm [Name], and I'll be your entertainment while the bar restocks.\"\n\nThe Stories (3-4 minutes). Your two or three funniest stories about the groom, told with setup, detail, and punchlines. Arrange them from mildly funny to funniest. You want to build momentum.\n\nThe Turn (1 minute). This is where you pivot from funny to genuine. \"But jokes aside...\" or \"For all the grief I give him...\" This transition is crucial. It tells the audience the funny part is done and something real is coming.\n\nThe Heart (1-2 minutes). A sincere section about the couple, what the bride means to the groom, and your genuine happiness for them.\n\nThe Toast (15 seconds). Quick, warm, done.\n\nTotal time: 5-7 minutes. That's the sweet spot.",
      },
      {
        heading: 'Step 4: Write the Punchlines First',
        level: 2,
        content:
          "This is a trick from comedy writing. You know what the funny part of the story is. Write that first. Then build the setup around it.\n\nLet's say the funny moment is: your friend got so nervous on his first date with the bride that he walked into a glass door at the restaurant.\n\nThe punchline: \"He walked face-first into the glass door.\"\n\nNow build the setup: \"So Jake finally works up the courage to ask her out. He picks the nicest restaurant he can afford. He puts on a button-down shirt for the first time in months. He gets there early, looking like a man with a plan. She's already inside, waving at him through the window. He waves back, smiles, walks right up to the door, and...\" PAUSE. \"...walks face-first into the glass.\"\n\nSee how the setup creates anticipation? Each detail (nice restaurant, button-down, arriving early) builds up the image of someone trying to be smooth, which makes the failure funnier.\n\nThe pause before the punchline is everything. Let the audience feel it coming.",
      },
      {
        heading: 'Step 5: Read the Room (Before You\'re in It)',
        level: 2,
        content:
          "Funny is relative. What kills at a pub with your mates might die at a wedding with 200 guests aged 8 to 80.\n\nBefore finalizing your speech, consider the audience. Is the couple's family conservative or laid-back? Are there kids present? How boozy is the vibe likely to be by the time speeches happen?\n\nGeneral rule: if a joke requires alcohol to land, it's not a good wedding joke. Write for the sober version of the room, and if people happen to be a few drinks in, that's a bonus.\n\nAlso, run your speech past one trusted person who will actually tell you the truth. Not your best friend who laughs at everything. Someone who'll say, \"Yeah, that bit about Vegas... maybe cut that.\" You need an honest editor more than you need a yes-man.",
      },
      {
        heading: 'Step 6: Master the Delivery',
        level: 2,
        content:
          "Half of being funny is delivery. A mediocre joke told with confidence gets bigger laughs than a great joke mumbled into a champagne glass.\n\nSpeak slowly. Way slower than you think. Nervousness makes everyone speed up, so if you think you're going too slow, you're probably going the right speed.\n\nMake eye contact. Don't read your speech word for word from a phone. Glancing at notes is fine. Staring at a screen for five minutes is a TED talk, not a toast.\n\nWait for the laughs. This is hard because your instinct will be to fill silence. But when a joke lands, pause. Let people laugh. Let it breathe. Then continue. That pause makes you look like a pro even if your hands are shaking.\n\nAnd if something doesn't get a laugh? Just move on. No explanation, no \"get it?\", no nervous \"anyway...\" Just continue to your next point with the same energy. The audience will follow your lead.",
      },
      {
        heading: 'What Makes Something NOT Funny at a Wedding',
        level: 2,
        content:
          "Let's draw some lines.\n\nStories about exes. Doesn't matter how funny it was at the time. Bringing up the groom's past relationships on his wedding day is a guaranteed mood killer.\n\nStag do stories that involve illegal activity, cheating, or anything the bride doesn't know about. If the bride would learn something new and upsetting from your speech, that's not a joke. That's a betrayal.\n\nAnything that makes the bride the butt of the joke. Light teasing is fine. Actual roasting of the bride is not your job and will not go well.\n\nJokes that are only funny because they're shocking or crude. Shock humor works in comedy clubs with self-selecting audiences. Weddings are not that.\n\nAnything that makes the groom seem like a genuinely bad person. \"Remember when you ghosted that girl for three months?\" is not the charming anecdote you think it is.",
      },
      {
        heading: 'Funny Best Man Speech Example Structure',
        level: 2,
        content:
          "Here's a skeleton you can build on:\n\n\"Good evening everyone. I'm [Name], and I've had the questionable honor of being [Groom]'s best man. [Self-deprecating opener].\n\nNow, I've known [Groom] for [X] years, which means I've had a front-row seat to some truly spectacular decisions. [Story 1, the warm-up laugh].\n\nBut that wasn't even the best one. [Story 2, the bigger laugh].\n\nOf course, things changed when [Bride] came along. [Story about meeting the bride or observing the relationship, with humor built in].\n\nBut in all seriousness... [genuine transition]. [Sincere observations about the couple, what the bride means to the groom, a moment you witnessed that moved you].\n\nSo please raise your glasses. To [Bride] and [Groom]. [Short, warm closing line]. Cheers.\"\n\nThat's it. That's the whole formula. Funny, funny, heart, toast. Practice it ten times, and you'll be golden.",
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
          "Nobody sets out to give a bad wedding speech. Nobody wakes up on the morning of the wedding and thinks, \"You know what? I'm going to make 200 people cringe today.\" And yet. It happens. All the time.\n\nThe thing is, most wedding speech disasters aren't caused by bad intentions. They're caused by blind spots. Things that seemed fine when you were writing at midnight, things that got laughs from your roommate, things that \"sounded good in your head.\" Here are the ten most common mistakes, why they happen, and how to avoid them.",
      },
      {
        heading: '1. Going Way Too Long',
        level: 2,
        content:
          "This is the single most common mistake, and the one the audience feels the most. A good wedding speech is 4-6 minutes. That's it. Anything over 7 minutes and you're losing people, no matter how brilliant you are.\n\nThe problem is that when you're writing, 10 minutes of material doesn't feel long. But when you're standing in front of a crowd, and they're sitting in chairs that aren't that comfortable, and dinner is waiting, and the bar is calling... every extra minute feels like ten.\n\nEdit ruthlessly. If a story doesn't directly serve the speech, cut it. If you've made the same point twice, cut one. Your speech should feel too short when you read it to yourself. It'll feel just right when you deliver it.",
      },
      {
        heading: '2. Roasting Too Hard',
        level: 2,
        content:
          "There's a fine line between affectionate teasing and a public takedown. A lot of best men don't know where that line is.\n\nA good roast makes the audience laugh WITH the person being roasted. The groom should be laughing too. The moment his smile looks forced, you've gone too far.\n\nThe test: would you say this directly to the groom's face, in front of his mother, his boss, and his new in-laws? If the answer is no, it doesn't go in the speech.\n\nSpecifically avoid: stories that make the groom look genuinely stupid, mean, or irresponsible. Past romantic failures. Anything involving bodily functions. The stag do, unless the tamest possible version. You're not a roast comedian at a comedy club. You're a friend at a wedding.",
      },
      {
        heading: '3. Mentioning Exes',
        level: 2,
        content:
          "This should be obvious, but it comes up at weddings with alarming frequency. Mentioning the groom's ex, the bride's ex, or your own complicated history with either of them has zero upside and massive downside.\n\n\"She's so much better than the last one\" is not a compliment. It's a reminder that there was a last one, and now everyone's thinking about that person instead of celebrating the couple in front of them.\n\nEven vague references count. \"We all remember the dark times\" or \"before [Groom] finally got his act together\" carry the ghost of exes without naming them. Just don't go there. There are a million other things to talk about.",
      },
      {
        heading: '4. Reading Directly From Your Phone the Entire Time',
        level: 2,
        content:
          "Having notes is fine. Encouraged, even. But there's a difference between glancing at bullet points on a card and reading a speech verbatim from your phone screen for six minutes.\n\nWhen you read, you lose eye contact. You lose vocal variety. You lose connection with the room. The audience sees the top of your head and hears a monotone voice, and they mentally check out.\n\nThe fix: use note cards with key phrases, not full sentences. Practice enough that you know the shape of your speech by heart, even if the exact words change. Look up at the audience after every few lines. Talk to them, not at your screen.",
      },
      {
        heading: '5. Inside Jokes Nobody Gets',
        level: 2,
        content:
          "\"And then he said the thing! You know, THE thing! With the hat!\" Four people laugh. 196 people stare blankly.\n\nInside jokes are lazy. They make a small group feel included and everyone else feel excluded. And at a wedding, exclusion is the opposite of the goal.\n\nIf you want to reference a shared memory, give enough context that the whole room can appreciate it. Turn \"the thing with the hat\" into a full story with setup, details, and a punchline that works even if you weren't there. That's the difference between a private joke and a good speech.",
      },
      {
        heading: '6. Getting Too Drunk Before the Speech',
        level: 2,
        content:
          "Liquid courage is a myth. Liquid overconfidence, slurring, and poor judgment are very real.\n\nIf you're speaking, limit yourself to one drink before your speech. Not two. Not three. One. You might think you need more to calm the nerves, but what actually happens is you lose your timing, your filter, and your ability to read the room.\n\nEvery single \"wedding speech disaster\" story you've ever heard at a dinner party involved alcohol. Every. Single. One. Give your speech, nail it, and then drink to celebrate. That's the order of operations.",
      },
      {
        heading: '7. Making It About Yourself',
        level: 2,
        content:
          "Your speech is about the couple. Not about your friendship with the groom. Not about your feelings. Not about your own relationship status.\n\n\"I remember when Jake and I went backpacking through Thailand...\" is only relevant if it connects back to Jake's character or his relationship. If the Thailand story is really just you wanting to talk about Thailand, cut it.\n\nA quick test: count how many times you say \"I\" versus the couple's names. If \"I\" wins by a landslide, your speech needs rebalancing. You're the narrator, not the protagonist.",
      },
      {
        heading: '8. The Non-Apology Opening',
        level: 2,
        content:
          "\"I'm not really good at public speaking, so bear with me\" or \"I didn't really prepare anything\" or \"I'm probably going to mess this up.\"\n\nStop. These openings don't generate sympathy. They generate dread. The audience hears \"this is going to be painful\" and braces for impact.\n\nIf you're nervous, that's okay. Everyone will be able to tell and nobody will mind. But leading with an apology sets the bar at the floor before you even start. Instead, open with confidence, even if it's fake. A simple \"Good evening, I'm [Name], and I'm honored to be here\" is miles better than \"Sorry in advance.\"",
      },
      {
        heading: '9. Forgetting the Toast',
        level: 2,
        content:
          "You'd be amazed how many people deliver an entire speech and then just... stop. They say their last line, the room waits for the toast, and the speaker sits down in confused silence.\n\nThe toast is the whole point. It's the punctuation mark on your speech. It's the moment where the entire room raises a glass together and celebrates the couple.\n\nAlways, always end with a clear call to action. \"Please raise your glasses\" followed by a short, warm line about the couple. Don't wing it. Script it. Make it the one line you know by heart even if you forget everything else.",
      },
      {
        heading: '10. Not Practicing',
        level: 2,
        content:
          "This is the root cause of most other mistakes on this list. People who practice don't go too long (because they've timed themselves). They don't stumble over words (because they've said them out loud before). They don't rely on their phone (because they've internalized the flow).\n\nPractice doesn't mean reading it silently in your head. It means standing up, speaking out loud, at full volume, ideally in front of at least one other person. Do it three times minimum. Five is better. Ten and you'll feel bulletproof.\n\nThe speakers who look effortless at weddings aren't naturally gifted. They practiced. That's the whole secret.",
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
          "There's an invisible rulebook for wedding speeches, and nobody hands it to you when you agree to speak. You're just supposed to know. Don't mention exes. Don't get too drunk. Don't make that joke.\n\nBut the real minefield isn't the obvious stuff. It's the things that seem harmless in your head but land badly in a room full of the couple's family, friends, coworkers, and that one aunt who judges everything. Let's walk through all of it, obvious and not-so-obvious.",
      },
      {
        heading: 'Never Mention Past Relationships',
        level: 2,
        content:
          "This rule is absolute. No exceptions. No clever workarounds.\n\n\"He finally found the right one\" implies there were wrong ones. \"We all know [Groom] went through a... phase\" is even worse. Even complimenting the bride by contrasting her with predecessors (\"She's so much better for him\") summons ghosts that should stay buried.\n\nThe couple's romantic history before each other doesn't exist during this speech. As far as you're concerned, they appeared on this earth fully formed and in love.\n\nIf the groom's ex is literally in the room (it happens), this rule becomes ten times more important. No references, no glances, no coded language. Pretend this is the only relationship either of them has ever had.",
      },
      {
        heading: 'Avoid Backhanded Compliments',
        level: 2,
        content:
          "Backhanded compliments are sneaky because the person saying them often doesn't realize what they're doing.\n\n\"I never thought [Groom] would settle down\" sounds like a compliment about the bride's specialness, but what the audience hears is a question about the groom's commitment.\n\n\"[Bride], you're so brave for taking him on\" is meant to be funny but implies the groom is a burden.\n\n\"I didn't think [Groom] could do this well\" suggests surprise that he's capable of attracting a quality partner.\n\n\"She's definitely the one wearing the pants\" frames the relationship as a power struggle.\n\nEvery compliment should be able to stand on its own without a hidden dig. If you have to add \"I mean that in a good way,\" it's not landing in a good way.",
      },
      {
        heading: 'Don\'t Reference Money, Debt, or Financial Situations',
        level: 2,
        content:
          "It's tempting to joke about the cost of the wedding, the groom's student loans, or the bride's shopping habits. Don't.\n\nMoney talk at weddings makes people uncomfortable because you never know who paid for what, who's sensitive about what, or what financial dynamics exist in the family. The bride's parents might have stretched themselves thin for this day. The couple might be privately stressed about wedding costs.\n\nJokes about \"marrying rich\" or \"at least the food was expensive\" or \"this wedding cost more than my car\" feel lighthearted in theory but can sting in practice. Just leave finances out of it entirely.",
      },
      {
        heading: 'Skip the \"Ball and Chain\" Humor',
        level: 2,
        content:
          "Marriage jokes that frame one partner (usually the wife) as a nag, a boss, or a jailer are tired. Like, decades tired. They weren't funny in the '90s and they're actively cringey now.\n\n\"Say goodbye to your freedom\" ... \"Welcome to the end of fun\" ... \"Happy wife, happy life\" (said with a wink and a nudge) ... \"I'm losing my best drinking buddy.\"\n\nAll of these frame marriage as a loss rather than a gain. They suggest the speaker thinks marriage is a trap, which is a weird message to deliver at a celebration of marriage.\n\nModern wedding humor works better when it celebrates the relationship. \"I'm gaining a sister-in-law who actually knows how to cook, so honestly, I'm thrilled\" hits completely differently than \"well, there goes another one.\"",
      },
      {
        heading: 'Don\'t Share Secrets or Private Information',
        level: 2,
        content:
          "The couple's fertility plans. Their arguments. Their therapy. Their career drama. Their health issues. Off. Limits.\n\nEven well-intentioned mentions can go wrong. \"I know they've been trying for a while, so I hope tonight's the night\" will make the couple want to evaporate. \"They had a rough patch last year but look at them now\" airs dirty laundry nobody asked to see.\n\nIf you're unsure whether something is private, it's private. When in doubt, leave it out. You can always share that story privately over drinks. You can never un-say it in front of 200 people.",
      },
      {
        heading: 'Avoid Anything Sexually Explicit',
        level: 2,
        content:
          "A mild, tasteful reference to the wedding night? Sure, if it's genuinely clever. But there's a canyon of difference between a subtle wink and a graphic description.\n\n\"I'm sure they're looking forward to the honeymoon\" is fine. Anything about performance, positions, frequency, or specific acts is not fine. Ever. Under any circumstances.\n\nRemember: the couple's parents are in the room. Their grandparents might be. Their coworkers definitely are. Nobody wants to picture the couple's intimate life while eating chicken.\n\nThe fact that this needs to be said is itself evidence of how often it goes wrong.",
      },
      {
        heading: 'Don\'t Wing the Serious Parts',
        level: 2,
        content:
          "Some speakers have the funny parts nailed but try to improvise the sincere section. \"And, uh, I just think they're really great together and, um, yeah. Love is... good. Cheers.\"\n\nThe emotional parts of your speech deserve the same preparation as the funny parts. Maybe more. Because the sincere close is what people actually remember. It's the moment the couple tears up, the moment the room holds its breath, the moment that makes the whole speech worth it.\n\nWrite it out. Practice it. Know it cold. If you're going to wing anything, wing a joke. Never wing the heart.",
      },
      {
        heading: 'Other Things to Leave Out',
        level: 2,
        content:
          "A quick checklist of things that seem harmless but consistently cause problems:\n\nPolitics. Even if you think everyone agrees with you, they don't. And this isn't the time.\n\nReligion (unless it's genuinely central to the couple's relationship and you know the room). Tread very carefully.\n\nWeight, appearance, or body comments beyond \"you look beautiful/handsome today.\" Don't joke about diets, wedding dress sizes, or anyone \"letting themselves go.\"\n\nDivorce statistics. \"Fifty percent of marriages end in divorce, but...\" is never a good start to a toast. You're here to celebrate, not quote statistics.\n\nComplaints about being single. Your speech isn't therapy. Save the \"when will it be my turn\" energy for the group chat.\n\nAny story that starts with \"I probably shouldn't tell this one, but...\" If your instinct is to preface it with a disclaimer, that's your gut telling you to cut it. Listen to your gut.",
      },
      {
        heading: 'The Golden Rule',
        level: 2,
        content:
          "When in doubt, imagine the couple watching a video of your speech on their tenth anniversary. Would they smile? Would they cringe? Would they wish you'd left that part out?\n\nYour speech lives forever now. It'll be on someone's phone, maybe on a videographer's highlight reel, potentially on social media. Speak accordingly.\n\nEvery word should either make the couple laugh, make them feel loved, or make them glad they asked you to speak. If it doesn't do one of those three things, it doesn't belong in your speech.",
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
          "This is one of the hardest things you can do in a wedding speech. Acknowledging someone who should be there but isn't. A parent, a grandparent, a sibling, a close friend who didn't make it to this day.\n\nYou want to honor them. You don't want to derail the celebration. You want to acknowledge the loss without making the entire room spiral into sadness. It's a tightrope, and the fact that you're thinking carefully about how to walk it means you're already approaching it the right way.",
      },
      {
        heading: 'Should You Mention Them at All?',
        level: 2,
        content:
          "Yes. Almost always, yes.\n\nNot mentioning a significant loss can feel like a louder omission than mentioning it. If the bride lost her father, and nobody says a word about him all night, that silence can be deafening to the people who feel his absence.\n\nThat said, check with the couple first. Some people want their loved one acknowledged publicly. Others have already arranged a memorial table, a photo display, or a moment of silence and don't need it in the speeches too. Some are barely holding it together and know that hearing their mom's name will break the dam.\n\nA simple, private question: \"I'd like to mention [name] in my speech. Would that be okay with you, or would you prefer I didn't?\" That's all it takes. Respect whatever they say.",
      },
      {
        heading: 'Keep It Brief and Warm',
        level: 2,
        content:
          "The biggest risk is saying too much. A long, detailed tribute to the deceased can shift the entire energy of the room from celebration to grief, and it's very hard to bring it back.\n\nAim for 2-4 sentences. Enough to acknowledge, honor, and move forward. This isn't a eulogy. It's a moment of recognition inside a celebration.\n\nHere's a key principle: focus on how the person would feel about today, not on the sadness of their absence. Forward-looking, not backward-looking. Joy-centered, not grief-centered.",
      },
      {
        heading: 'What to Say: Examples That Work',
        level: 3,
        content:
          "\"I know [Bride]'s dad, [Name], is watching today with the biggest smile. He would have loved this. He would have loved [Groom]. And I know [Bride] feels him here.\"\n\n\"Before I toast the happy couple, I want to take a moment to remember [Name], who we all miss today. He always said [relevant quote or characteristic], and I think he'd be so proud of the person [Groom] has become.\"\n\n\"There's someone missing from this room who should be sitting right over there. [Name] would have been the first one on the dance floor tonight, and the last one to leave. We carry him with us today.\"\n\n\"I know [Bride] wishes her mother could see her today. And I believe, in some way, she can. [Mother's name] raised an incredible woman, and that legacy is everywhere in this room.\"\n\nNotice how each of these is brief, specific, and ends on warmth rather than sadness. They acknowledge the absence without dwelling in it.",
      },
      {
        heading: 'Where to Place It in Your Speech',
        level: 2,
        content:
          "Placement matters a lot. You have two good options.\n\nOption one: near the beginning, after your opening but before the main body of your speech. This gets it done early, lets the room feel the moment, and then allows you to transition into lighter content. \"Before I get into the stories and the jokes, I want to take a moment to remember...\"\n\nOption two: near the end, just before the toast. This works if you want the mention to be part of your emotional close. You'd move from your sincere section about the couple into the tribute, and then directly into the toast. \"And as we raise our glasses, let's also remember [Name], who is here in spirit...\"\n\nWhat to avoid: dropping it randomly in the middle of your speech between two funny stories. The tonal whiplash is jarring for everyone.",
      },
      {
        heading: 'How to Handle Your Own Emotions',
        level: 2,
        content:
          "If the person who passed was close to you too, this section of the speech might be the hardest to get through. That's okay. Here are some practical strategies.\n\nPractice this part more than any other. Say it out loud, alone, multiple times. The first few times will be rough. By the fifth or sixth time, you'll have more control.\n\nBreathe before you start this section. Take a visible, deliberate pause. The audience will understand.\n\nIf your voice breaks, let it. A brief moment of emotion is not a disaster. It's proof that you mean what you're saying. Take a breath, collect yourself, and continue.\n\nHave a backup plan. If you truly can't get through it, keep a simplified version in your head. Instead of four sentences, you can say one: \"We're all thinking of [Name] today.\" Then move on. That single line still honors them.\n\nAnd don't apologize for crying. \"Sorry, I told myself I wouldn't do this\" actually undercuts the sincerity of the moment. Just feel it, breathe, and keep going.",
      },
      {
        heading: 'What Not to Do',
        level: 2,
        content:
          "Don't go into detail about the death itself. The cause, the timeline, the illness. Everyone in the room already knows. Revisiting those details on a day of celebration serves no one.\n\nDon't use guilt-inducing language. \"It's so sad they can't be here\" or \"this day will never be complete without them\" puts an emotional weight on the couple that they don't need.\n\nDon't assume everyone in the room knows who you're talking about. A brief identifier helps: \"[Bride]'s father, [Name]\" rather than just the first name.\n\nDon't extend an invitation for the whole room to grieve. \"Let's all take a moment of silence\" might be appropriate at some weddings, but it can also make the couple uncomfortable if it wasn't planned. A mention in your speech is enough. The couple can decide if they want a formal moment separately.\n\nDon't mention the deceased as a way to fill time or because you think you should. If you didn't know them well and the couple hasn't asked you to mention them, it's okay to leave it to someone closer to the situation.",
      },
      {
        heading: 'If You\'re Speaking as the Person Who Lost Someone',
        level: 2,
        content:
          "If you're the bride speaking about your late father, or the groom honoring a deceased best friend, or a parent remembering a spouse who didn't make it to this day, the dynamic is different. It's more personal, more raw, and the room will give you more space.\n\nYou don't need to perform strength. You don't need to minimize your feelings to protect the mood. The guests understand. They're there for you.\n\nBut even here, brevity serves you. A few sentences from the heart will always be more powerful than a long passage you can barely get through. Say what you need to say. Let it land. Then let the celebration carry you forward, which is exactly what your loved one would have wanted.",
      },
      {
        heading: 'Connecting the Tribute to the Toast',
        level: 2,
        content:
          "If you mention the deceased near the end of your speech, you can fold them into the toast itself. This creates a beautiful, unified closing.\n\n\"So please raise your glasses. To [Bride] and [Groom], to this incredible day, and to [Name], who is celebrating right alongside us. Cheers.\"\n\nThis is simple, inclusive, and ends on a note of togetherness rather than loss. It says: they're not missing from today. They're part of it.\n\nAnd that, honestly, is the whole point.",
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
          "So you're the reason these two people are standing at the altar. You set them up, or you threw the party where they met, or you casually said \"you two should hang out\" and somehow that turned into a wedding. Congratulations. You're basically Cupid with a smartphone.\n\nBeing the matchmaker gives you a unique and powerful position for a wedding speech. You have a perspective nobody else has: you knew them both before they knew each other. You saw the beginning of a story that's now becoming a lifelong commitment. That's incredibly special, and your speech should lean into it.",
      },
      {
        heading: 'Lead With the Origin Story',
        level: 2,
        content:
          "This is your superpower. You have the origin story, and the audience wants to hear it. How did it happen? What made you think these two would click? Was it a deliberate setup or a happy accident?\n\nTell this story with detail and humor. The audience is hearing the creation myth of this relationship, and they want the full version.\n\n\"I'd like to take credit for this, and I absolutely will. It was July 2021. I was hosting a barbecue, and I had exactly one single friend who was a good person and one single friend who deserved a good person. So I put them next to each other at the table and waited. Within ten minutes, they were arguing about whether a hot dog is a sandwich. Within twenty minutes, they'd forgotten anyone else was there. Within a month, they were inseparable. And I was down two barbecue guests forever.\"\n\nThis kind of opener sets the stage, gets laughs, and establishes your unique authority on this couple.",
      },
      {
        heading: 'Why You Thought They\'d Work',
        level: 2,
        content:
          "After the origin story, tell the audience what you saw that made you think this match had potential. This is the part that separates your speech from everyone else's. Nobody else can explain why these two specific humans belong together from the matchmaker's perspective.\n\n\"I knew Sarah needed someone who could keep up with her brain and also make her slow down long enough to enjoy things. And I knew Tom needed someone who'd push him to stop playing it safe. The moment I put that together, it was obvious.\"\n\nThis section is powerful because it shows you understand both people as individuals, not just as a couple. And it validates the relationship from an outside, informed perspective, which is something the couple will genuinely appreciate hearing.",
      },
      {
        heading: 'The Aftermath: How You Watched It Unfold',
        level: 2,
        content:
          "You had front-row seats from day one. Share what that was like.\n\nWere you getting the play-by-play texts after every date? Did you have to pretend not to know things because one of them told you in confidence? Were you the first person both of them called when things got serious?\n\n\"For the first three months, I was essentially a double agent. Sarah would call me to debrief after every date, and then Tom would call me twenty minutes later asking if I thought she liked him. I've never felt so powerful or so exhausted.\"\n\nThis kind of behind-the-scenes view is gold. It's entertaining, it's personal, and it gives the audience a window into the early days of the relationship that even the couple might not fully appreciate.",
      },
      {
        heading: 'Address Both of Them (Not Just the One You\'re Closer To)',
        level: 2,
        content:
          "If you introduced them, you probably knew one of them first and better. That's natural. But your speech needs to honor both people, not just your original friend.\n\nTalk about what you've learned about the other person since the introduction. How they've become part of your life too. What you admire about them beyond just \"making my friend happy.\"\n\n\"Tom, I've known you for fifteen years. But [Bride], in the three years I've known you, you've become one of my closest friends too. That wasn't guaranteed when I set you up with my buddy. It was a bonus I didn't expect, and I'm grateful for it.\"\n\nThis balance shows maturity and makes both sides of the room feel included.",
      },
      {
        heading: 'The Humble Brag (Earned and Allowed)',
        level: 2,
        content:
          "Let's be honest. You're a little proud of yourself, and you should be. A well-placed humble brag is not only acceptable, it's expected and funny.\n\n\"I'm not saying I'm solely responsible for this wedding, but I'm also not NOT saying that. You're welcome.\"\n\n\"If anyone wants my matchmaking services, I'll be accepting consultations at the bar later tonight. My rates have gone up since this success.\"\n\n\"I take full credit for this relationship and zero responsibility for anything that happens from here.\"\n\nOne or two of these moments is charming. Ten of them is obnoxious. Use the brag sparingly and let the couple's story be the real star.",
      },
      {
        heading: 'What If the Couple Disagrees About How They Met?',
        level: 2,
        content:
          "This happens more than you'd think. You remember setting them up intentionally. They remember meeting \"organically\" at your party and give you no credit. Or one of them remembers it differently than the other.\n\nThis is actually comedy gold. Lean into it.\n\n\"Now, [Bride] will tell you they met by chance at my birthday party. [Groom] will tell you he noticed her across the room and made his move. I will tell you that I specifically seated them next to each other, texted them both to show up early, and hid in the kitchen watching it happen. Believe whoever you want, but I have the receipts.\"\n\nConflicting origin stories are relatable and funny. Play them for laughs rather than trying to win the argument.",
      },
      {
        heading: 'Closing: The Full Circle Moment',
        level: 2,
        content:
          "Your speech has a natural closing built in. You saw the very beginning. Now you're watching the biggest chapter yet. Connect those two moments.\n\n\"Three years ago, I watched two people meet at my kitchen table and wondered if anything would come of it. Today, I'm watching those same two people promise to spend their lives together. And I don't think I've ever been prouder of a kitchen table in my life.\"\n\nOr simply: \"I had a feeling about you two from the start. Turns out I was right. And standing here today, watching this, is one of the best feelings I've ever had.\"\n\nThe full-circle structure gives your speech a sense of completeness. It started with an introduction and ends with a marriage. That's a story people want to hear.",
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
          "You agreed to give a speech. Maybe you were honored. Maybe you felt obligated. Maybe you said yes before your brain caught up with your mouth. And now the wedding is approaching and you have... nothing. A blank document. A blinking cursor. A growing sense of dread.\n\nFirst: relax. This is normal. Most people who give great wedding speeches started exactly where you are right now. The blank page is not your enemy. You just need a way in. Let's find it.",
      },
      {
        heading: 'Why You\'re Stuck (It\'s Not Writer\'s Block)',
        level: 2,
        content:
          "You're probably not stuck because you have nothing to say. You're stuck because you have too much to say, or you're scared of saying the wrong thing, or you're comparing yourself to some perfect speech you saw on YouTube.\n\nThe pressure to be brilliant, funny, and moving all at once is paralyzing. So let's take that pressure off right now. Your speech doesn't need to be brilliant. It needs to be genuine. That's it.\n\nNobody at that wedding will care if your metaphors are mixed or your transitions aren't smooth. They'll care whether you meant it. And you do. Otherwise you wouldn't be stressing about it this much.",
      },
      {
        heading: 'Exercise 1: The Three Words',
        level: 2,
        content:
          "Grab a piece of paper. Write down three words that describe the person you're toasting (or the couple). Not fancy words. The first three that come to mind.\n\nMaybe it's: loyal, ridiculous, kind. Or: stubborn, brilliant, warm. Or: loud, generous, unstoppable.\n\nNow, for each word, write down one specific moment that proves it. Not a general statement. A moment. A day. A thing that happened.\n\n\"Loyal\" becomes: \"The time she drove four hours to sit with me in the emergency room even though it turned out to be a sprained ankle.\"\n\n\"Ridiculous\" becomes: \"The time he tried to build IKEA furniture without instructions and somehow ended up with a shelf that was also a hat.\"\n\nCongratulations. You now have three stories. That's the backbone of a speech.",
      },
      {
        heading: 'Exercise 2: The Phone Scroll',
        level: 2,
        content:
          "Open your text messages with the person. Scroll back. Look for moments that made you laugh, moments that moved you, moments that were just... them.\n\nCheck your photos too. Scroll through pictures of times you were together. Your brain stores memories visually, and seeing an image can unlock a story you'd forgotten.\n\nLook at your social media interactions. Old birthday posts, tagged photos, comment threads. There's material there.\n\nYou're not looking for the perfect anecdote. You're looking for a spark. Something that makes you think, \"Oh yeah, that's who they are.\" That spark is your starting point.",
      },
      {
        heading: 'Exercise 3: Call a Friend',
        level: 2,
        content:
          "If you're really stuck, call someone who knows the couple well and say, \"I'm writing a speech and I'm stuck. What's a story about [Name] that always makes you laugh? What's a moment that really shows who they are?\"\n\nYou'll get material you never would have thought of. Other people's perspectives can unlock your own memories, and you might hear a story so good it becomes the centerpiece of your speech.\n\nThis also works if you're giving a speech about someone you're not super close to. Crowd-source the good stuff. No shame in it.",
      },
      {
        heading: 'The Dead-Simple Template',
        level: 2,
        content:
          "If the exercises above gave you some material but you don't know how to organize it, here's the simplest possible structure. Fill in the blanks:\n\n\"Hi everyone, I'm [Name] and I'm [relationship to the couple]. When [they] asked me to speak today, I [honest reaction, can be funny].\n\nI've known [Person] for [time period], and if I had to describe them in one word, it would be [word]. Let me tell you why. [Story that proves the word].\n\nWhen [Person] met [Partner], I noticed [specific change or observation]. [Brief story or moment that shows the relationship].\n\nWhat I love about these two together is [genuine observation]. [One more specific detail or moment].\n\nSo please raise your glasses. To [Bride] and [Groom]. [One short, warm sentence]. Cheers.\"\n\nThat's a 3-4 minute speech that's personal, structured, and sincere. It's not flashy, but it's real, and real always wins.",
      },
      {
        heading: 'What If You Genuinely Don\'t Have Stories?',
        level: 2,
        content:
          "Maybe you're a newer friend. Maybe you're a relative who doesn't see the couple often. Maybe you were asked to speak for reasons you don't fully understand.\n\nYou can build a speech around observation instead of history.\n\n\"I haven't known [Couple] as long as some of you, but I can tell you what I see. I see two people who [observation]. I see someone who [specific thing about one partner]. And I see someone who [specific thing about the other].\"\n\nYou can also build around a single interaction that left an impression. One dinner, one conversation, one moment at a party where you thought, \"These two are something special.\" A speech built around one well-told moment is infinitely better than a speech built around vague platitudes.\n\nAnd it's always okay to be honest: \"I'll admit, when I was asked to give this speech, I wasn't sure what I'd say. But the more I thought about it, the more I realized that's because [Name] doesn't need a big speech. They need to know that the people in this room love them. And we do.\"",
      },
      {
        heading: 'The \"Just Start Writing\" Method',
        level: 2,
        content:
          "If none of the exercises above have worked, try this: set a timer for ten minutes and just write. Don't worry about quality, structure, or grammar. Write everything that comes to mind about the couple. Memories, observations, inside jokes, feelings, random facts.\n\nAfter ten minutes, stop. Read what you wrote. Somewhere in that mess of words will be one or two things that feel true and important. Highlight those. Build your speech around them.\n\nThe blank page is only scary because it's blank. Once you put anything on it, the fear shrinks. Even bad writing is better than no writing, because bad writing can be edited into good writing. Nothing can't be edited into anything.",
      },
      {
        heading: 'One Last Thing',
        level: 2,
        content:
          "The fact that you care enough to be stressed about this means you'll be fine. The people who give truly bad speeches are the ones who don't care at all, who wing it after six drinks with zero preparation.\n\nYou're not that person. You're someone who wants to do right by the people you love. That intention will carry you further than the perfect words ever could.\n\nStart with one true thing about the couple. Build from there. You've got this.",
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
          "Maybe you're the groom's college roommate who hasn't seen him in three years. Maybe you're a cousin who sees the couple at holidays and that's about it. Maybe you're a work friend who was unexpectedly asked to speak and you're thinking, \"Why me?\"\n\nWhatever the reason, you're standing on a stage talking about people you don't know as well as you probably should, and the pressure to sound like a lifelong confidant is real. Here's the good news: you don't have to fake closeness you don't have. Honesty, done well, is more charming than pretending.",
      },
      {
        heading: 'Don\'t Pretend to Be Closer Than You Are',
        level: 2,
        content:
          "The worst thing you can do is overcompensate. If you start with \"[Groom] is my absolute best friend in the entire world\" and everyone in the room knows you met two years ago at work, the speech loses credibility from the first sentence.\n\nAudiences can smell inauthenticity. And the couple knows the truth, so performing a deeper relationship than you have is awkward for everyone.\n\nInstead, own your position honestly. \"I've known [Groom] for a couple of years, but in that time...\" or \"I may not have the longest history with these two, but what I've seen has been pretty incredible.\" This sets honest expectations and makes everything that follows more believable.",
      },
      {
        heading: 'Focus on What You\'ve Observed, Not What You\'ve Shared',
        level: 2,
        content:
          "You might not have a decade of shared memories, but you have eyes. You've seen things. Lean into observation.\n\nHow does the couple interact when they're around you? What does the person you know better say about their partner when they're not around? What impression has the couple made on you, even from a distance?\n\n\"I haven't been there for the big milestones in [Groom]'s life. But I've been there for the Tuesday lunches where he lights up talking about [Bride]. I've seen the way his whole energy shifts when she texts him. And those small moments told me everything I needed to know.\"\n\nObservation-based speeches can be incredibly powerful because they offer a perspective the couple doesn't get from people who are around them all the time.",
      },
      {
        heading: 'Do Your Homework',
        level: 2,
        content:
          "This is the single most practical piece of advice for this situation. If you don't have deep personal material, go get some.\n\nCall or text 3-5 people who are close to the couple. Parents, siblings, best friends. Ask them:\n\n\"What's a story that really captures who [Name] is?\"\n\"What's the funniest thing about them as a couple?\"\n\"What moment made you realize they were the real deal?\"\n\nYou'll get stories you can weave into your speech with credit. \"[Bride]'s mother told me something that I think says it all...\" or \"I asked [Groom]'s best friend what I should know about these two, and he said...\"\n\nBorrowing stories is not cheating. It's research. And crediting the source makes it feel collaborative and inclusive rather than secondhand.",
      },
      {
        heading: 'The Quality Over Quantity Approach',
        level: 2,
        content:
          "You don't need five stories. You need one good one. One moment where you saw something genuine about the couple or the person you're toasting.\n\nMaybe it was a conversation at a dinner party. Maybe it was the way they handled a stressful situation at work. Maybe it was the first time you met the partner and something clicked.\n\nBuild your entire speech around that single moment. Set the scene. Describe what happened. Explain why it stuck with you. Then connect it to why you're happy to be standing here today.\n\nA speech built around one well-told story is infinitely more compelling than a speech stuffed with vague compliments trying to cover for a lack of material.",
      },
      {
        heading: 'Use Your Outsider Perspective as a Strength',
        level: 2,
        content:
          "Here's something most people don't realize: sometimes the people closest to the couple can't see them clearly. They're too deep in the daily details. But you, from your slight distance, might see things others miss.\n\n\"I think the people closest to [Bride] and [Groom] might take this for granted because they see it every day. But from where I stand, watching these two together is like watching two people who've figured out something the rest of us are still working on.\"\n\nFraming your distance as a different vantage point rather than a limitation is a confident, honest move. You're not apologizing for not being closer. You're offering a view that only your position allows.",
      },
      {
        heading: 'Keep It Short',
        level: 2,
        content:
          "If you're not close to the couple, brevity is your best friend. A tight 3-4 minute speech that's genuine and well-delivered will always beat a rambling 7-minute speech that's trying too hard to prove a bond that isn't there.\n\nHere's a lean structure that works:\n\nIntro and honest framing of your relationship (30 seconds). One story or observation (1-2 minutes). What you admire about the couple based on what you've seen (1 minute). Toast (15 seconds).\n\nThat's it. Nobody will think, \"Wow, that was too short.\" They'll think, \"That was really nice.\" And \"really nice\" is a win.",
      },
      {
        heading: 'What to Avoid',
        level: 2,
        content:
          "Don't fill space with generic marriage advice you found online. If you don't have a deep relationship with the couple, reciting proverbs about love feels hollow.\n\nDon't overuse the couple's names to compensate for lack of content. Saying their names 47 times doesn't make the speech more personal.\n\nDon't apologize repeatedly for not being close enough. One honest acknowledgment is enough. After that, it becomes self-pity, and the audience doesn't need that.\n\nDon't make it about your relationship with the person. \"I wish we were closer\" or \"we should hang out more\" turns the speech into a reflection on your friendship rather than a celebration of their marriage.\n\nJust be warm, be honest, be brief, and toast the couple. That formula works whether you've known them for twenty years or two.",
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
          "Being a stepparent giving a wedding speech puts you in a unique position. You love this person. You've helped raise them, supported them, been part of their story. But there's often an unspoken question hanging in the air: what's your role today? How much space do you take up? How do you honor the relationship without overstepping?\n\nLet's clear something up first: if you've been asked to speak, you belong at that microphone. The couple wants your voice in their day. So step up with confidence. Your perspective is different from a biological parent's, and that difference is a strength, not a limitation.",
      },
      {
        heading: 'Acknowledge the Relationship Honestly',
        level: 2,
        content:
          "Don't pretend the stepparent dynamic doesn't exist. Don't try to sound like a biological parent if that's not your role. And don't minimize your bond either.\n\nThe most powerful thing you can do is name the relationship clearly and warmly.\n\n\"I'm [Name]'s stepfather. I came into their life when they were [age], and from that moment, they changed mine.\"\n\n\"I didn't get to be there for [Name]'s first steps or first words. But I got to be there for first heartbreaks, first apartments, and first terrible cooking experiments. And honestly, I wouldn't trade that for anything.\"\n\n\"I didn't choose to become a parent. I chose to become [Name]'s parent. And it's the best choice I've ever made.\"\n\nThese openings are honest about the timeline while making clear that the love is real and chosen. Chosen love is incredibly powerful, and leaning into that is what makes a stepparent speech unique.",
      },
      {
        heading: 'Navigate the Other Parent With Grace',
        level: 2,
        content:
          "This is the part that keeps stepparents up at night. How do you give a speech without making the biological parent (who might be in the room, or absent, or deceased) feel displaced?\n\nIf the biological parent is present and also speaking: keep your speech focused on your own experience and relationship. Don't compete. Don't try to outdo them. Your speeches will naturally be different because your perspectives are different, and that's perfect.\n\nIf the biological parent is present but not speaking: you can briefly acknowledge them. \"I know [Name] is blessed to have [Parent] in their life, and I'm grateful to have been able to add to that.\" This is generous and classy.\n\nIf the biological parent is absent or deceased: tread carefully. A brief, respectful mention is appropriate if the couple wants it. \"I know [Name] carries their [mother/father] with them today, and I hope I've been able to add something good alongside that.\" But don't dwell on it unless you've discussed it with the couple first.\n\nThe goal is to be generous without being self-deprecating. You don't need to apologize for your presence or diminish your role. Just acknowledge the fuller picture with grace.",
      },
      {
        heading: 'Share Your Specific Story',
        level: 2,
        content:
          "Every stepparent relationship has a turning point. The moment the kid stopped seeing you as \"mom's boyfriend\" and started seeing you as family. The moment you realized you loved them like your own. The moment they let you in.\n\nFind that moment and tell it.\n\n\"For the first two years, [Name] called me by my first name and kept their bedroom door closed. I didn't push it. Then one night, they came downstairs while I was watching a movie, sat down next to me, and said, 'What are we watching?' That was it. That was the moment I knew we were going to be okay.\"\n\nThese stories are uniquely yours. A biological parent can't tell them. And they resonate because they're about the effort, the patience, and the eventual reward of building a relationship from scratch.\n\nThe audience will be moved because they can feel the work that went into this bond. It wasn't automatic. It was earned. And earned things are worth celebrating.",
      },
      {
        heading: 'What to Say About the Couple',
        level: 2,
        content:
          "Don't get so focused on the stepparent angle that you forget to talk about the actual couple. Your speech should follow the same basic structure as any parent's speech: stories about your stepchild, observations about the relationship, and a warm welcome to the new partner.\n\nTalk about watching them fall in love. Talk about the first time you met the partner and what you thought. Talk about what you see when they're together.\n\n\"When [Name] first brought [Partner] home, I did what any stepfather does. I pretended to be relaxed while quietly evaluating everything. And within about ten minutes, I was sold. Anyone who can make [Name] laugh that hard is alright in my book.\"\n\nWelcoming the new partner into the family is a big part of your speech. As a stepparent, you know what it's like to enter an existing family and earn your place. You can speak to that directly.\n\n\"[Partner], I know something about joining a family that was already in progress. It takes patience, humor, and a lot of showing up. And from what I've seen, you're a natural.\"",
      },
      {
        heading: 'Handling Complex Family Dynamics',
        level: 2,
        content:
          "Blended families are complicated. There might be tension, history, or relationships in the room that make this day emotionally loaded for reasons beyond the wedding itself.\n\nYour speech is not the place to address any of that. Not even obliquely. Not even to say \"we've had our challenges\" or \"it hasn't always been easy.\" The subtext will be felt by everyone in the room who knows the backstory, and it can make people uncomfortable.\n\nKeep your speech focused on love, gratitude, and celebration. Save the complex stuff for private conversations.\n\nIf the family dynamics are genuinely fraught and you're worried about how your speech will be received, talk to the couple beforehand. Ask what they want from your speech. Ask if there's anything they'd prefer you avoid. This isn't weakness. It's respect.",
      },
      {
        heading: 'A Template for the Stepparent Speech',
        level: 2,
        content:
          "Here's a framework you can customize:\n\n\"For those who don't know me, I'm [Name], [Stepchild]'s [stepmother/stepfather]. I've been part of [their] life for [X] years, and standing here today is one of the proudest moments of those years.\n\n[Story about your relationship: how it started, a turning point, or a moment that defined it].\n\nWatching [Stepchild] grow into the person standing here today has been [genuine emotion]. And watching them with [Partner] has been [specific observation about the relationship].\n\n[Partner], welcome to this family. You're getting someone incredible, and I know [Stepchild] is getting the same in you.\n\nPlease raise your glasses. To [Couple]. [Short, warm closing line].\"\n\nThis runs about 3-4 minutes, which is perfect. It's personal, honest, and avoids every potential minefield.",
      },
      {
        heading: 'You Belong Here',
        level: 2,
        content:
          "The most important thing to remember is this: you were asked to speak because you matter to the couple. Not because of biology. Because of relationship. Because of all the mornings and evenings and ordinary Tuesdays where you showed up and loved them.\n\nStepparents sometimes feel like they need permission to be emotional, to claim pride, to say \"I love you\" publicly. You don't need permission. You've earned this moment.\n\nSpeak from your heart. The room will feel it.",
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
          "Let's be honest. You're probably going to cry. Or at least get dangerously close. You're standing in front of everyone you love, talking about someone you love, on one of the most emotionally charged days of their life. The odds of getting through it with a completely steady voice are... not great.\n\nAnd here's the thing: that's okay. Actually, it's more than okay. A speaker who gets emotional during a wedding speech is a speaker who means what they're saying. Nobody has ever watched someone tear up at a wedding and thought, \"How embarrassing.\" They thought, \"That was beautiful.\"\n\nBut. There's a difference between a moment of emotion that adds to the speech and a complete breakdown that prevents you from finishing. Let's make sure you end up on the right side of that line.",
      },
      {
        heading: 'Why Wedding Speeches Make People Cry',
        level: 2,
        content:
          "It helps to understand what's happening so you can manage it.\n\nWedding speeches trigger emotions for multiple reasons at once. You're reliving memories as you tell them. You're experiencing the weight of the moment in real time. You're standing in front of a large group, which heightens every feeling. And you're looking directly at people you love while saying how much they mean to you, which is something most of us rarely do.\n\nOn top of that, the couple is probably already emotional, which is contagious. The room might be emotional from a previous speech, from the ceremony, from the champagne. You're walking into an emotional tinderbox with a match in your hand.\n\nKnowing this ahead of time helps. You can prepare for the specific moments in your speech that are likely to hit hardest.",
      },
      {
        heading: 'Identify Your Trigger Lines',
        level: 2,
        content:
          "Every speech has one or two lines that are going to be hard to say. You know which ones they are. They're the lines that made you tear up while writing them.\n\nMaybe it's: \"Watching you become the person you are today has been the greatest privilege of my life.\"\n\nMaybe it's: \"Dad would have loved this.\"\n\nMaybe it's: \"I'm not losing a daughter. I'm gaining... no, actually, I'm terrified of losing a daughter.\"\n\nIdentify those lines now. Mark them. Practice them more than anything else. The first time you say them out loud, you'll probably lose it. The fifth time, you'll have more control. By the tenth time, you'll be able to get through them with feeling but without falling apart.\n\nThis isn't about numbing yourself to the emotion. It's about being able to deliver the emotion to the audience instead of being overwhelmed by it.",
      },
      {
        heading: 'Practical Techniques for Staying Composed',
        level: 2,
        content:
          "These are real, tested strategies that speakers use to manage emotion in the moment.\n\nThe pause and breathe method. When you feel tears coming, stop talking. Take a slow, deep breath through your nose. Look down at your notes for a moment. Then look back up and continue. The audience will wait. They're not going anywhere.\n\nThe water trick. Keep a glass of water nearby. When you need a moment, take a sip. It gives you a physical action to focus on and a few seconds to reset. It also prevents dry mouth, which is a bonus.\n\nThe focal point technique. Pick a spot on the back wall, just above the heads of the audience. When the emotion surges, look at that spot instead of at the couple or the crowd. Eye contact intensifies emotion. Breaking it briefly gives you relief.\n\nThe physical anchor. Press your thumb and forefinger together, squeeze the podium, or press your feet firmly into the floor. A physical sensation gives your brain something concrete to focus on besides the emotional wave.\n\nThe mental reframe. When you feel the tears rising, think to yourself: \"I'm okay. This is a happy moment. I can do this.\" It sounds simple, but self-talk works.",
      },
      {
        heading: 'What to Do When the Tears Actually Come',
        level: 2,
        content:
          "Despite all the preparation, the tears might come anyway. Here's what to do in the moment.\n\nDon't apologize. \"Sorry, I told myself I wouldn't do this\" might feel natural, but it actually diminishes the moment. You're feeling something real. That doesn't require an apology.\n\nDon't fight it. Trying to force tears back by clenching your jaw or holding your breath makes you look like you're in pain. It's better to let the emotion pass through you naturally.\n\nPause. This is the most important thing. Just stop talking. Take a breath. The room will be silent and supportive. Someone might even start clapping or saying \"aww.\" Let that happen.\n\nSmile. Even through tears, a smile tells the audience this is a happy moment, not a sad one. It signals that you're okay and you're going to continue.\n\nContinue. Once you've taken your moment, pick up where you left off. You don't need to reference the tears. Just keep going. The audience will be more engaged, not less, because they've seen something genuine.",
      },
      {
        heading: 'The Backup Plan',
        level: 2,
        content:
          "For your hardest lines, have a simplified version ready. If the full version is: \"Growing up, you were my whole world, and watching you build a new world with someone who loves you this much is more than I ever hoped for...\"\n\nThe backup version is: \"I'm so proud of you both.\"\n\nSame sentiment. Fewer words. Easier to deliver if you're in the middle of an emotional wave.\n\nYou can also have someone on standby. Tell a trusted person (another bridesmaid, a sibling, a friend) that if you completely can't continue, they should come up and either finish the last paragraph for you or just stand next to you for support. This is a safety net you'll probably never need, but knowing it's there reduces anxiety.\n\nAnother option: if you have a particularly difficult passage, read it from your notes instead of trying to deliver it from memory. Reading gives you something external to focus on and can help you maintain composure through the hardest parts.",
      },
      {
        heading: 'How to Practice Without Desensitizing Yourself',
        level: 2,
        content:
          "There's a concern that practicing too much will drain the emotion from your speech, leaving you robotic on the day. This almost never happens. The live audience, the setting, the couple's faces... trust me, the emotion will be there regardless of how much you practice.\n\nThat said, here's how to practice smart:\n\nFirst three run-throughs: alone, out loud, letting the emotions come freely. Cry if you need to. Get it out of your system.\n\nNext three: focus on breathing through the hard parts. Practice the pause-and-breathe technique at your trigger points.\n\nFinal run-throughs: in front of one trusted person. This simulates the audience experience and lets you practice managing emotion with someone watching.\n\nOn the day itself, try to do one quiet run-through early in the morning before the event. Not the whole speech. Just the trigger lines. Give yourself a final practice at the hardest parts so they're fresh but familiar.",
      },
      {
        heading: 'A Note on Gender and Crying',
        level: 2,
        content:
          "Men, in particular, sometimes feel pressure to keep it together during speeches. There's still a lingering cultural expectation that dads and best men should be stoic and composed.\n\nForget that. A father crying during his daughter's wedding speech is one of the most moving things most guests will ever see. A best man getting choked up talking about his friend is a sign of a real friendship. A groom who tears up during his own toast is someone the whole room falls in love with.\n\nVulnerability at a wedding is not weakness. It's the whole point. The entire day is about love, and love makes people cry. Let it.",
      },
      {
        heading: 'After the Speech',
        level: 2,
        content:
          "You did it. You got through it. Maybe with tears, maybe without, but you did it.\n\nDon't spend the rest of the night replaying the speech in your head and judging yourself. Don't ask twelve people \"was it okay?\" Don't apologize to the couple for getting emotional.\n\nInstead: accept the hugs. Accept the \"that was beautiful\" comments. Have a drink. Hit the dance floor. You just did one of the bravest things a person can do at a social gathering: stand up in front of everyone and say something true.\n\nThe tears, if they came, are part of why people will remember your speech. Not as an embarrassment. As the realest moment of the night.",
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
          "So you've been asked to give a wedding speech, and your relationship with the bride or groom is... let's call it \"nuanced.\" Maybe you're the estranged parent who's only recently back in the picture. Maybe you're the sibling who spent most of your twenties not speaking to each other. Maybe you're the best friend who secretly thinks this marriage is a terrible idea.\n\nWhatever the complicated backstory, you said yes. And now you need to stand in front of 150 people and say something meaningful without triggering a family meltdown or a therapy session.\n\nHere's the good news: a wedding speech with a complicated relationship behind it can actually be more powerful than a generic \"we've always been best buddies\" speech. Authenticity hits different. The trick is knowing what to include, what to skip, and how to land somewhere honest without turning the reception into an episode of a reality TV show.",
      },
      {
        heading: 'Step 1: Figure Out What "Complicated" Actually Means Here',
        level: 2,
        content:
          "Before you write a single word, get honest with yourself about the nature of the complication. These are very different situations, and they require different approaches.\n\nIf you had a falling out but have genuinely reconciled, that's actually a beautiful speech arc. Conflict, growth, reunion. People eat that up.\n\nIf you're still in the middle of tension and things are fragile, your job is to be gracious and brief. This is not the moment to process your feelings publicly. Save that for therapy.\n\nIf you disapprove of the partner or the marriage itself, you need to either find something genuinely positive to say or seriously consider declining the speech. Giving a toast you don't believe in will come through in your delivery no matter how good the words are.\n\nIf there's family drama that everyone knows about (divorce, estrangement, addiction), you have to decide whether to acknowledge the elephant or ignore it. Both can work. Neither is automatically right.",
      },
      {
        heading: 'The Golden Rule: It Is Not About You',
        level: 2,
        content:
          "This is the single most important thing to remember when giving a wedding speech with a complicated relationship. The day belongs to the couple. Your complicated feelings, your unresolved issues, your need for closure... none of that gets airtime today.\n\nThat doesn't mean you have to be fake. It means you choose the angle that serves the couple, not the angle that serves your emotional processing.\n\nThink of it this way: you're not writing your memoir. You're writing a toast. A toast is a gift. Give a good one.",
      },
      {
        heading: 'How to Handle Specific Awkward Situations',
        level: 2,
        content:
          "Let's get practical with some common scenarios.",
      },
      {
        heading: "You're a Divorced Parent Giving a Speech",
        level: 3,
        content:
          "Do not mention the divorce unless it's to briefly acknowledge that the road wasn't always smooth. Do not make passive-aggressive comments about your ex, even veiled ones. Everyone will notice. Everyone.\n\nFocus on your child. Talk about who they are, what you admire about them, and how happy you are to see them with their partner. If your co-parent did a great job raising them during the years you weren't around, consider saying so. It costs you nothing and it will mean the world to your kid.\n\nA line like \"Raising you has been the greatest privilege of my life, and I know everyone who had a hand in that feels the same way\" is classy without being groveling.",
      },
      {
        heading: "You're the Sibling Who Wasn't Close Growing Up",
        level: 3,
        content:
          "Don't pretend you were inseparable if you weren't. People who know your family will see right through it, and the couple will feel the dishonesty.\n\nInstead, try honesty with a light touch: \"My brother and I weren't exactly best friends growing up. He was into sports, I was into books, and we were both into annoying each other. But watching him become the person he is today, watching him find someone who makes him this happy... I realize that the people you grow up with become part of you whether you like it or not. And I like it.\"\n\nThat's real. That's warm. And it doesn't require you to fabricate a closeness that didn't exist.",
      },
      {
        heading: "You Don't Really Like the Partner",
        level: 3,
        content:
          "This is the hardest one. If you genuinely think this marriage is a mistake, you had your chance to say so in private before the wedding. That window is closed.\n\nFocus your speech on the person you do love and know well. Talk about what they deserve in a partner (qualities you can frame positively), talk about how happy they seem, and keep it short. You don't need to rave about the partner specifically. A speech that celebrates your friend and wishes the couple well is perfectly fine.\n\nWhatever you do, do not get drunk and let the truth slip out during the reception. That story never ends well for anyone.",
      },
      {
        heading: 'What to Leave Out (No Matter What)',
        level: 2,
        content:
          "Some things are always off-limits in a wedding speech with complicated dynamics:\n\nSpecific grievances. \"I know we've had our differences\" is fine. \"I know you stole $5,000 from me in 2019\" is not.\n\nBlame. Even if someone was clearly in the wrong, a wedding speech is not the venue for accountability.\n\nBackhanded compliments. \"I never thought you'd find someone willing to put up with you\" sounds like a joke but lands like a grenade when the relationship is already tense.\n\nInside references to the drama. If half the room knows about the family feud, referencing it, even obliquely, forces everyone to pick sides. Don't do it.\n\nApologies. If you owe someone an apology, give it in private, before the wedding. A public apology in a toast makes the moment about your guilt, not their joy.",
      },
      {
        heading: 'A Framework for the Speech Itself',
        level: 2,
        content:
          "Here's a structure that works beautifully for complicated relationships:\n\nOpen with a brief, honest acknowledgment of your connection. Not the complications, just the bond. \"I'm Sarah's older sister, and I've had the privilege of watching her grow into the incredible woman standing here today.\"\n\nShare one specific, positive memory. Pick something that shows who this person really is. It doesn't have to be a memory of the two of you together. It can be something you observed or heard about.\n\nSay something genuine about the couple. What do you see when you watch them together? Even if your relationship with one of them is complicated, you can usually find something authentic to say about their partnership.\n\nEnd with a wish or a toast. Keep it simple, keep it warm, keep it forward-looking.\n\nThe whole thing can be three to four minutes. Short speeches from people with complicated relationships are almost always better than long ones.",
      },
      {
        heading: 'The Secret Power of a Complicated Speech',
        level: 2,
        content:
          "Here's something nobody tells you: when someone with a complicated relationship gives a gracious, warm, genuine wedding speech, it hits harder than any other toast at the table. Because everyone in the room knows the backstory. They know this wasn't easy. And seeing you show up with grace and generosity says more about love, forgiveness, and family than any rehearsed anecdote ever could.\n\nYou don't have to pretend everything is perfect. You just have to show up with your best self for three minutes. That's all anyone is asking.\n\nAnd honestly? Sometimes giving that speech is the thing that actually starts healing the relationship. Not because of the words you say, but because of what it means that you said them at all.",
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
          "Someone just tapped you on the shoulder at a wedding reception and said the words: \"Hey, would you mind saying a few words?\" Or maybe the best man is too drunk to stand, and suddenly you're the backup plan. Or the couple themselves just blindsided you with a smile and a microphone.\n\nYour heart is racing. Your palms are sweating. Your brain is doing that thing where it simultaneously goes completely blank and runs through every embarrassing thing you've ever said in public.\n\nBreathe. You can do this. An impromptu wedding speech doesn't need to be polished. It needs to be short, warm, and real. That's it. And you've got about 60 seconds to pull it together.",
      },
      {
        heading: 'The 60-Second Survival Framework',
        level: 2,
        content:
          "Here's your cheat code. Memorize this structure and you can give a passable wedding speech with zero preparation at literally any wedding for the rest of your life.\n\nSentence 1: Say who you are and your connection to the couple. \"I'm Mike, I've been friends with Jake since college.\"\n\nSentence 2-3: Share one specific thing you love or admire about the person you know best. Not generic. Specific. \"Jake is the kind of guy who will drive three hours in a snowstorm to help you move apartments and then refuse to let you buy him dinner.\"\n\nSentence 3-4: Say something about the couple together. What you've seen, how they are. \"Watching him with Emma, I see a version of Jake I didn't know existed. She makes him calmer, funnier, and somehow even more generous.\"\n\nSentence 5: The toast. \"To Jake and Emma. May you always bring out the best in each other.\"\n\nThat's it. Sixty to ninety seconds. Sit down to applause. Nobody will know you had zero prep time.",
      },
      {
        heading: 'What to Do in the First 30 Seconds After Being Asked',
        level: 2,
        content:
          "The moment between being asked and standing up is critical. Here's how to use it.\n\nFirst, buy yourself time. \"I'd love to, give me just a minute to collect my thoughts.\" Nobody will deny you this. Step away from the table if you can, even just to the edge of the room.\n\nSecond, pick ONE story or quality. Don't try to plan an entire speech. Just pick one thing. One memory, one quality, one moment. Build everything around that single anchor.\n\nThird, figure out how you'll end. The ending matters more than the beginning. Even if the middle is messy, if you end with a clean toast, people will remember it as a good speech. Decide on your last line before you decide on your first.\n\nFourth, grab a drink (for the toast, not your nerves). You'll need something to raise at the end.",
      },
      {
        heading: 'Easy Anchors When Your Mind Goes Blank',
        level: 2,
        content:
          "If you can't think of a specific story, use one of these reliable anchors:\n\nThe first impression. \"The first time I met David, he...\" First meetings are vivid memories and they usually contain something funny or revealing.\n\nThe moment you knew the couple was right for each other. Even if you have to slightly embellish the drama of the realization, this always works as a speech center.\n\nSomething that happened today. \"I was watching them during the ceremony and I noticed...\" This is incredibly effective because it's fresh and everyone in the room experienced the same event.\n\nA quality the person is known for. Everyone has a defining trait their friends can speak to. Generosity, humor, loyalty, stubbornness. Pick it and give one example.\n\nA running joke from your friendship. If there's something you always tease them about (that's wedding-appropriate), it can carry a short speech easily.",
      },
      {
        heading: 'The Stuff That Will Save You',
        level: 2,
        content:
          "Keep it under two minutes. Seriously. An impromptu speech that goes long is painful for everyone, especially you. Nobody expects a surprise speaker to deliver a TED Talk. Short and sweet wins every time.\n\nSlow down. When you're nervous, you speed up. Consciously pace yourself. Pause between thoughts. A pause reads as confidence, even when internally you're scrambling for your next sentence.\n\nLook at the couple. Not the crowd. This takes the pressure off dramatically and makes whatever you say feel more intimate and genuine.\n\nIt's okay to acknowledge you weren't prepared. \"I wasn't expecting to be up here, so forgive me if this isn't the most polished toast you've heard tonight\" is endearing and buys you goodwill.",
      },
      {
        heading: 'The Stuff That Will Sink You',
        level: 2,
        content:
          "Do not try to be too funny. Humor under pressure, without preparation, in front of a crowd... that's professional comedian territory. One light line is fine. Don't go for three.\n\nDo not wing a story you only half-remember. If you're fuzzy on the details, pick a different story. Getting the details wrong in front of people who were actually there is embarrassing.\n\nDo not mention exes, inside jokes that exclude 90% of the room, or anything that requires context the audience doesn't have.\n\nDo not fill silence with \"um\" and \"so, yeah.\" If you lose your place, just pause. Take a breath. Look at the couple and smile. The audience will wait.\n\nDo not apologize more than once for being unprepared. One acknowledgment is charming. Repeated apologies become the speech.",
      },
      {
        heading: 'Sample Impromptu Speeches You Can Steal',
        level: 2,
        content:
          "Here's one for a close friend: \"I'm Alex, and I've known Chris for almost fifteen years. I wasn't expecting to give a speech tonight, but I'm glad I get to, because someone needs to tell you all that the person you see up there is exactly who they are when nobody's watching. Chris is the most genuinely kind person I know. Not 'nice.' Kind. There's a difference. And watching them find someone in Jordan who matches that kindness... it's been one of the best things I've ever gotten to witness. To Chris and Jordan.\"\n\nHere's one for a colleague or more distant friend: \"I'm Sam from work, and I just want to say that every Monday for the past two years, Rachel has come into the office glowing after her weekends with Tom. The rest of us are dragging in with coffee and complaints, and Rachel is just... lit up. That's how you know it's real. To Rachel and Tom, and to many more Monday morning glows.\"\n\nBoth of those are under a minute. Both are genuine. Both work.",
      },
      {
        heading: 'After You Sit Down',
        level: 2,
        content:
          "You did it. It's over. You survived an impromptu wedding speech. Now take a deep breath and enjoy the fact that everyone is impressed because they know that was unplanned.\n\nDon't spend the rest of the night replaying what you said and critiquing yourself. The audience has already moved on to the next course. You should too.\n\nAnd for future reference: if you're attending a wedding where you're close to the couple, it's not a bad idea to spend five minutes the night before thinking about what you'd say if asked. Think of it like insurance. You'll probably never need it. But if you do, you'll be glad you have it.",
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
          "Let's get something straight: every person who has bombed a wedding speech thought they'd be fine without practice. Every single one. They figured they'd just feel the moment, ride the vibe, let the emotions carry them. And then they stood up, looked at 150 faces, and their brain turned into television static.\n\nPracticing a wedding speech isn't about memorizing a script and delivering it like a robot. It's about getting comfortable enough with your material that you can be present in the moment instead of drowning in it.\n\nThe good news? Practicing a speech is not complicated. You don't need a vocal coach or a mirror pep talk montage. You need a plan, some repetition, and about a week of low-effort practice sessions. Here's how to do it right.",
      },
      {
        heading: 'When to Start Practicing',
        level: 2,
        content:
          "Finish writing your speech at least 10 days before the wedding. Not the morning of. Not the night before in the hotel room after three drinks. Ten days minimum.\n\nDays 1-3: Read through it a few times. Make edits. Let it breathe.\n\nDays 4-7: Start practicing out loud. This is where the real work happens.\n\nDays 8-10: Polish and refine. Practice in conditions that simulate the real thing.\n\nDay of: One or two light run-throughs. No more. You want to be fresh, not rehearsed into the ground.",
      },
      {
        heading: 'The Single Most Important Practice Rule',
        level: 2,
        content:
          "Practice out loud. Not in your head. Not by reading silently. Out loud, with your actual mouth, at the volume you'll actually use.\n\nThis matters more than anything else in this article, so let me say it again: say the words out loud.\n\nA speech that reads beautifully on paper can sound completely wrong when spoken. You'll find sentences that are too long to say in one breath. You'll discover that a word you love in writing is awkward to pronounce. You'll realize that a joke lands differently when you hear it versus when you read it.\n\nThe gap between written language and spoken language is enormous. You can only close it by actually speaking.",
      },
      {
        heading: 'The Four-Stage Practice Method',
        level: 2,
        content:
          "Here's a structured approach that works whether you're naturally comfortable speaking or terrified of it.",
      },
      {
        heading: 'Stage 1: Read It Out Loud (Alone)',
        level: 3,
        content:
          "Find a private space. Your car, your bedroom, an empty conference room. Read your speech out loud, start to finish, three to five times. Don't try to perform it. Just read it naturally, like you're telling someone the story.\n\nDuring these read-throughs, pay attention to:\n\nWhere you stumble over words. Rewrite those parts to be simpler.\n\nWhere you naturally speed up. Those are sections you're nervous about or that lack confidence. Either cut them or practice them more.\n\nWhere the energy drops. If even you're bored saying it, the audience will be bored hearing it. Cut or rewrite.\n\nTime yourself. If you're over five minutes, start trimming. Most people speak faster during practice than they do at the actual event (nerves slow you down), so add about 20% to your practice time for a realistic estimate.",
      },
      {
        heading: 'Stage 2: Record Yourself',
        level: 3,
        content:
          "Nobody likes doing this. Do it anyway.\n\nRecord yourself on your phone giving the speech. Then watch it back. Yes, it will be painful. Yes, you'll hate the sound of your own voice. Get over it.\n\nWhat you're looking for: Do you sound natural or robotic? Are you rushing? Are there moments that land well and moments that fall flat? Do your transitions between sections feel smooth or abrupt?\n\nDo this two or three times over the course of your practice week. You'll be surprised how much your delivery improves just from the awareness of being recorded.\n\nPro tip: watch the recording without sound first. Just observe your body language. Are you stiff? Do you look like you're reading a legal document? Or do you look like someone telling a story they care about?",
      },
      {
        heading: 'Stage 3: Practice in Front of Someone',
        level: 3,
        content:
          "Pick one or two trusted people and deliver the speech to them. Ideally, someone who will be honest with you, not just your mom who thinks everything you do is wonderful.\n\nThe person you practice with should NOT be someone attending the wedding if possible. You want fresh reactions at the actual event, especially for jokes and emotional moments.\n\nAsk your practice audience for specific feedback: Was any part confusing? Did anything feel too long? Were there moments where their attention wandered? Did the ending feel satisfying?\n\nThis stage is also where you'll get a feel for the adrenaline of performing. Even practicing in front of one person adds pressure that solo practice doesn't. That's the point. You want to feel a little nervous now so you're less nervous later.",
      },
      {
        heading: 'Stage 4: Simulate the Real Conditions',
        level: 3,
        content:
          "At least once before the wedding, practice under conditions as close to the real thing as possible.\n\nStand up. Hold your notes in one hand and a glass in the other (yes, really, because you might be holding both on the day). Practice at full volume. If you'll have a microphone, practice holding something in your hand to simulate it.\n\nIf you can visit the venue beforehand, do a quick run-through in the actual space. This isn't always possible, but if it is, it's incredibly valuable for calming nerves.\n\nIf you can't visit the venue, stand in your living room, pick a spot across the room to be \"the couple,\" and deliver the speech while making eye contact with that spot.\n\nThe goal of simulation is to eliminate surprises. The more familiar the physical experience of giving the speech feels, the less your body will freak out when it's time for the real thing.",
      },
      {
        heading: 'Practice Traps to Avoid',
        level: 2,
        content:
          "Over-rehearsing. If you practice so much that you've memorized every word and pause, your delivery will sound canned. You want to know your material well enough to be flexible, not so well that you're on autopilot.\n\nOnly practicing the beginning. Everyone does this. You run through the first two paragraphs twenty times and barely touch the ending. Force yourself to practice the whole speech, or start from the middle sometimes.\n\nPracticing in a whisper. If you mumble through your speech at half volume in your bedroom, you are not preparing for what it actually feels like to project your voice in a banquet hall. Volume matters.\n\nPracticing while looking at your phone. If your speech is on your phone, hold it at chest height while you practice, not face-down in your lap. Train yourself to glance at notes and look up, not to read from a screen.",
      },
      {
        heading: 'The Day-Of Routine',
        level: 2,
        content:
          "On the wedding day, do one relaxed read-through in the morning. That's it. Don't obsessively rehearse all day. You'll drain the spontaneity and show up sounding exhausted.\n\nBefore your speech, do some physical warm-ups: stretch your jaw, hum to warm up your voice, take five deep breaths. This sounds silly. It works.\n\nAnd remember: the goal of all this practice was never perfection. It was comfort. You practiced so that when you stand up, your material is familiar enough that you can focus on the people in front of you instead of the words on your page. That's what separates a speech that lands from one that just gets through.",
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
          "I know. The article is about how to memorize a wedding speech. But here's the truth most people learn the hard way: a fully memorized speech is a fragile speech. One lost word, one distraction, one emotional moment, and the whole thing can collapse like a house of cards.\n\nWhat you actually want is to memorize the structure and key moments while leaving room for natural delivery. Think of it less like memorizing a script and more like knowing a route. You know where you're starting, where you're ending, and the major turns along the way. But you're not reciting GPS directions word for word.\n\nThat said, there are absolutely parts of your speech you should have locked down cold. And there are memorization techniques that work far better than just reading the thing over and over. Let's get into it.",
      },
      {
        heading: 'What to Memorize vs. What to Approximate',
        level: 2,
        content:
          "Memorize these word-for-word:\n\nYour opening line. The first thing out of your mouth sets the tone. Have it locked.\n\nYour closing line and toast. This is the last impression you leave. Don't fumble it.\n\nThe punchlines of any jokes. Comedy depends on exact word choice and timing. Close enough isn't good enough.\n\nAny quotes you're including. Getting a quote slightly wrong is worse than not using it at all.\n\nApproximate everything else. For the stories, the transitions, the reflective parts, know what you want to say and trust yourself to find the words in the moment. You'll sound more natural, and if you lose a sentence, you can just move to the next point without the audience ever knowing.",
      },
      {
        heading: 'The Chunking Method',
        level: 2,
        content:
          "Your brain is terrible at memorizing a continuous four-minute monologue. It's very good at memorizing five to seven small chunks.\n\nBreak your speech into distinct sections. Give each section a one-word label: \"Opening,\" \"College Story,\" \"Character,\" \"Partner,\" \"Couple,\" \"Toast.\" Now you've got a roadmap of six chunks instead of a wall of text.\n\nMemorize each chunk independently. Get comfortable with \"College Story\" on its own before worrying about how it connects to \"Character.\" Once you know each section, practice the transitions between them.\n\nThis is how actors memorize long monologues, and it works because your brain processes structured information exponentially better than unstructured information.",
      },
      {
        heading: 'The Memory Palace Technique (Less Weird Than It Sounds)',
        level: 2,
        content:
          "Here's a technique that's been used since ancient Greece, and it's genuinely effective for speeches.\n\nPick a physical space you know well. Your apartment, your childhood home, your daily walking route. Now assign each section of your speech to a specific location in that space.\n\nFor example: your opening is the front door. The funny college story is the kitchen. The part about the couple is the living room. Your toast is the backyard.\n\nAs you practice, mentally walk through the space. When you \"arrive\" at each location, deliver that section of the speech. The physical locations act as memory anchors.\n\nThis sounds gimmicky, but studies consistently show that spatial memory is one of the strongest types of memory we have. People who use this technique report significantly better recall than those who just rehearse linearly. Try it. You'll be surprised.",
      },
      {
        heading: 'Spaced Repetition (The Study Hack That Actually Works)',
        level: 2,
        content:
          "If you've got 10 days before the wedding, don't spend an hour practicing on one day and then nothing for three days. Spread it out.\n\nDay 1: Read through the full speech three times. Day 2: Practice from memory, checking your notes when stuck. Day 3: Skip a day entirely and let your brain consolidate. Day 4: Practice again, you'll be surprised how much stuck. Day 5: Practice just the sections you keep forgetting. Day 6: Full run-through. Day 7: Skip. Day 8: Full run-through. Day 9: Light review of key moments. Day 10 (wedding day): One morning run-through.\n\nThe breaks between practice sessions are not wasted time. That's when your brain actually moves information from short-term to long-term memory. Cramming the night before is the worst possible strategy for retention.",
      },
      {
        heading: 'Use Physical Cues',
        level: 2,
        content:
          "Your body can help your brain remember. This is why pacing while studying works, and why you can sometimes remember a conversation by remembering where you were standing.\n\nWhen you practice, try adding a subtle physical anchor to each section transition. Maybe you shift your weight, or take a sip of water, or look from the crowd to the couple. These micro-movements become cues that trigger the next section of your speech.\n\nYou can also practice specific sections in specific places. Practice your opening in the kitchen and your toast in the bedroom. When you're at the venue, mentally cycling through those locations can help trigger the associated content.\n\nThis isn't magic. It's just giving your brain more hooks to retrieve the information from.",
      },
      {
        heading: 'The Safety Net: Notes Done Right',
        level: 2,
        content:
          "Even if you've memorized your speech thoroughly, bring notes. Not as a crutch, but as a safety net. Knowing the notes are there reduces anxiety, and reduced anxiety improves recall. It's a beautiful feedback loop.\n\nYour notes should be a stripped-down outline, not a full transcript. Bullet points with key phrases from each section. Maybe the first three words of each chunk to trigger the rest. Definitely the exact wording of your quotes, jokes, and toast.\n\nWrite them on a single card or a small piece of paper. Not your phone (it'll lock on you at the worst moment). Not a full sheet of paper (it'll shake and everyone will see your hands trembling).\n\nThe goal: if your memory fails at any point, you glance down, see a trigger word, and you're back on track within two seconds.",
      },
      {
        heading: 'What to Do When Your Brain Goes Blank',
        level: 2,
        content:
          "Even with perfect preparation, there's a chance you'll blank out for a moment. It happens to professional speakers. It will definitely happen to someone giving a speech at a wedding while emotional and probably a little tipsy.\n\nHere's the save: pause, breathe, glance at your notes. That's it. The audience reads a pause as confidence or emotion. They don't know you've forgotten what comes next. You have way more time than you think.\n\nIf you truly can't find your place, skip to the next section you remember. Nobody has a copy of your speech. Nobody knows you skipped the middle paragraph about the camping trip. Just bridge to the next thing and keep going.\n\nThe worst thing you can do is panic visibly, say \"sorry, I forgot,\" and start flipping through pages. Stay calm. The moment will pass.",
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
          "Let's kill this myth right now: using notes during a wedding speech is not cheating, it's not unprofessional, and it's not a sign of weakness. It's smart. Professional speakers use notes. Politicians use teleprompters. Stand-up comedians have set lists.\n\nYou're giving a toast at a wedding, not performing a one-person show on Broadway. Nobody in that room is judging whether you memorized your speech. They're listening to what you're saying and watching how you say it.\n\nIn fact, the only time anyone notices notes is when someone clearly needs them but doesn't have them, fumbling through a forgotten speech, repeating themselves, trailing off mid-sentence. That's what the audience remembers. Not the small card in your hand.",
      },
      {
        heading: 'The Best Note Format: Cue Cards',
        level: 2,
        content:
          "A single index card (or two, max) is the gold standard for wedding speech notes. Here's why.\n\nThey're small enough to hold discreetly. Unlike a full sheet of paper, a card doesn't flap around when your hands shake. And your hands might shake. That's okay.\n\nThey force you to be concise. You can't fit your entire speech on a 3x5 card, which means you have to distill it to key phrases and triggers. This is actually better for your delivery because it prevents you from reading word-for-word.\n\nThey're rigid. Paper trembles. Cards don't. This is a bigger deal than you think when adrenaline hits.\n\nUse one card per major section of your speech if needed, but honestly, one card with a solid outline is usually plenty for a three-to-five-minute toast.",
      },
      {
        heading: 'What to Write on Your Notes',
        level: 2,
        content:
          "This is where most people go wrong. They write out the entire speech in tiny handwriting and then squint at it under dim reception lighting. Useless.\n\nInstead, write only:\n\nThe first few words of each section. These are trigger phrases. \"When I first met Dan...\" is enough to launch you into a story you've practiced. You don't need the whole story written down.\n\nExact wording for quotes or jokes. Punchlines depend on precision. Write these out fully.\n\nYour closing toast, word for word. You want to end strong, and this is the part most likely to evaporate from your brain due to adrenaline and emotion.\n\nTransition cues. A simple arrow or the word \"PAUSE\" between sections can keep your pacing on track.\n\nWrite in large, clear handwriting or print. Use a bold marker, not a ballpoint pen. You'll be reading this in ambient lighting from about 18 inches away while slightly nervous. Make it easy on yourself.",
      },
      {
        heading: 'What NOT to Use as Notes',
        level: 2,
        content:
          "Your phone. It will lock on you. The screen will dim. You'll accidentally swipe to your text messages. And you'll look like you're checking Instagram during a wedding speech. Leave the phone in your pocket.\n\nA full printed transcript. If you have the whole speech in front of you, you will read it. You won't mean to, but you will. And reading a speech is death. It kills eye contact, flattens your delivery, and disconnects you from the room.\n\nMultiple pages. Shuffling through pages is distracting and makes you look unprepared, which is ironic since you clearly prepared too much material. Condense.\n\nNapkins, receipts, or the back of the program. This isn't a romcom. Write your notes on something you can actually read.",
      },
      {
        heading: 'How to Hold Your Notes',
        level: 2,
        content:
          "Hold the card in your non-dominant hand, roughly at chest or waist height. Your dominant hand stays free for gestures and for holding your glass when it's time to toast.\n\nDon't hide the card behind your back or in your pocket. Having to fish it out when you need it is way more distracting than just holding it openly.\n\nDon't hold the card up at face level and read from it. The card should be a glance-down reference, not a barrier between you and the audience.\n\nThe rhythm you want is: look at audience, speak, glance at card for your next cue, look back at audience, speak. Natural, easy, nobody notices.",
      },
      {
        heading: 'The Glance-and-Go Technique',
        level: 2,
        content:
          "The key to using notes well is this: never talk while looking at your notes. Always look up before you speak.\n\nHere's the sequence: Pause. Glance down. Find your next point. Look up. Deliver it.\n\nThis takes practice, but it completely changes how your speech comes across. When you talk while looking down, you seem like you're reading. When you pause, glance, and look up to deliver, you seem like you're gathering your thoughts. One looks prepared. The other looks like you wrote the speech in the car.\n\nPractice this technique at home. It'll feel awkward at first, but by the fifth run-through, it becomes second nature.",
      },
      {
        heading: 'Backup Plan: The Second Card',
        level: 2,
        content:
          "Here's a pro move: prepare a second, more detailed card and leave it in your jacket pocket or at your seat. Your primary card is the streamlined outline. Your backup card has more detail, maybe the full text of a tricky middle section.\n\nYou probably won't need it. But knowing it's there does wonders for your confidence. And if you do completely blank out, you can pull it out, say \"Bear with me for a second,\" find your place, and continue. Nobody will care. In fact, the brief moment of vulnerability usually makes the audience like you more.",
      },
      {
        heading: 'A Note About Notes and Emotion',
        level: 2,
        content:
          "Wedding speeches get emotional. You might start crying, your voice might crack, you might lose your place because your eyes are blurry with tears.\n\nNotes save you here. When emotion hits, you can pause, take a breath, glance at your card, and pick up exactly where you left off. Without notes, an emotional moment can completely derail your speech because you lose track of where you were.\n\nSome people even write themselves little reminders in the margins: \"Breathe here\" or \"Take a moment.\" It sounds silly, but in the heat of the moment, that tiny cue can be the difference between composing yourself and completely falling apart.\n\nBring the notes. Use the notes. Nobody has ever left a wedding saying, \"Great speech, shame about the index card.\"",
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
          "If there's one thing that separates a wedding speech that lands from one that doesn't, it's not the words. It's the pacing. Specifically, almost everyone speaks way too fast.\n\nAnd it makes sense. You're nervous, you're standing in front of a crowd, your body is pumping adrenaline, and every instinct is screaming at you to get through this as quickly as possible and sit down. So you rush. You steamroll through your carefully crafted stories. You blow past the punchline of your best joke. You sprint through the emotional climax like you're trying to catch a bus.\n\nThe audience can't keep up. The jokes don't land because there's no setup time. The emotional moments don't hit because they're over before anyone can feel them. And the whole speech becomes a blur.\n\nThe fix is simple, but it requires conscious effort: slow down. Way more than you think.",
      },
      {
        heading: 'Why Your Brain Lies to You About Speed',
        level: 2,
        content:
          "Here's something wild: when you're nervous, what feels like a normal speaking pace to you sounds like an auctioneer to your audience. Your internal clock speeds up with your heart rate. A pause that feels like five seconds to you is actually about one and a half seconds.\n\nThis means that when you consciously try to slow down, it will feel ridiculously, painfully slow. Like you're talking to a toddler. Like everyone must be bored out of their minds.\n\nThey're not. They're following along perfectly. They're actually hearing what you're saying. This is what normal pace sounds like from the outside, even though it feels glacial from the inside.\n\nTrust the slow. It's your friend.",
      },
      {
        heading: 'The Power of the Pause',
        level: 2,
        content:
          "The most powerful tool in your pacing arsenal isn't a word. It's silence.\n\nA well-timed pause does several things at once. It gives the audience time to process what you just said. It signals that something important is coming next. It lets a joke land. It lets an emotional moment breathe. And it makes you look confident, even if inside you're terrified.\n\nHere's where to pause:\n\nAfter your opening line. Let the room settle. Let people shift their attention to you.\n\nBefore and after a joke. The pause before creates anticipation. The pause after gives people time to laugh. If you rush into your next line, you'll step on the laughter and kill the moment.\n\nDuring an emotional shift. If you're transitioning from a funny story to a sincere moment, pause. Give the room permission to change gears with you.\n\nBefore your toast. This is the climax of your speech. Let a beat of silence build the moment before you raise your glass.",
      },
      {
        heading: 'How to Practice Pacing',
        level: 2,
        content:
          "Record yourself giving the speech at what feels like your normal pace. Then record it again at what feels embarrassingly slow. Play them both back.\n\nI guarantee the \"embarrassingly slow\" version sounds better. Clearer, more confident, more engaging. The \"normal pace\" version sounds rushed.\n\nAnother technique: write \"PAUSE\" in your notes at every point where you want to take a beat. When you see it, stop talking for a full two seconds. Count them in your head if you have to. One Mississippi. Two Mississippi. Then continue.\n\nYou can also practice with a metronome app set to about 120 BPM and try to land roughly one word per beat. This is slower than conversational speech, and it's approximately the sweet spot for public speaking. You won't stick to it exactly during the real speech, but it calibrates your internal sense of pace.",
      },
      {
        heading: 'Vary Your Speed (Not Everything Should Be Slow)',
        level: 2,
        content:
          "Okay, so I've spent this whole article telling you to slow down. But here's the nuance: a great speech has variation. Not everything should be delivered at the same deliberate pace.\n\nSlow down for: emotional moments, important points, your toast, the punchline of a joke, and the first and last sentences of your speech.\n\nSpeed up slightly for: the middle of a funny story (building momentum), listing things (\"He's kind, he's funny, he's the worst fantasy football player I've ever seen\"), and transitional sentences that bridge sections.\n\nThe contrast between fast and slow is what keeps people engaged. A speech delivered entirely in slow, measured tones is boring. A speech delivered at consistent high speed is exhausting. Mix it up. Let the content dictate the pace.",
      },
      {
        heading: 'How to Recover When You Realize You Are Rushing',
        level: 2,
        content:
          "You're in the middle of your speech, and suddenly you become aware that you're talking too fast. It happens. Here's how to reset.\n\nTake a sip of water or champagne. This forces a natural pause and gives you a moment to recalibrate. Nobody thinks anything of it.\n\nDeliberately slow your next sentence to an almost uncomfortable degree. This resets your internal speedometer. After one slow sentence, your natural pace will settle at something more reasonable.\n\nLook at the couple and smile. This creates a natural pause and reconnects you to the emotional core of the speech, which often calms the nervous energy driving the rush.\n\nThe audience doesn't know your intended pace. They don't know you skipped ahead or rushed through a section. All they experience is what's happening now. So if you catch yourself and correct, they'll only remember the corrected version.",
      },
      {
        heading: 'One Simple Trick That Changes Everything',
        level: 2,
        content:
          "Breathe at the end of sentences. Sounds obvious, right? But most nervous speakers don't. They inhale mid-sentence, or they chain sentences together without any break, turning a three-minute speech into one continuous breathless paragraph.\n\nEnd a sentence. Close your mouth. Breathe in through your nose. Start the next sentence.\n\nThis automatically slows your pace, improves your projection, steadies your nerves, and makes your speech easier to follow. It's the single highest-leverage pacing habit you can develop.\n\nPractice it a few times before the wedding and it'll be second nature by speech time. Your audience will thank you. Your lungs will thank you. And your speech will actually land the way you wrote it to.",
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
          "You could have the most beautifully written wedding speech in history. The jokes could be perfect, the stories could be moving, the toast could bring tears. But if the people in the back row can't hear you, none of it matters.\n\nVoice projection is the most overlooked aspect of wedding speeches. People spend hours writing and rewriting their words, and then deliver them in a volume that barely reaches the second table. The result: half the room is straining to listen, a quarter has given up and is talking among themselves, and the whole speech dies a quiet death.\n\nThe good news? You don't need a naturally booming voice. Projection isn't about volume. It's about technique. And you can learn it in a few practice sessions.",
      },
      {
        heading: "Projection vs. Shouting (They're Not the Same)",
        level: 2,
        content:
          "The first thing to understand: projecting your voice is not the same as being loud. Shouting means pushing more air through your throat, which strains your voice, sounds aggressive, and actually becomes harder to understand at a distance.\n\nProjection means directing sound outward using your diaphragm, posture, and resonance. A projected voice carries across a room clearly without sounding strained. Think of the difference between a teacher yelling at students to be quiet (shouting) and a stage actor delivering a monologue to the back row (projecting).\n\nYou want to be the actor, not the teacher.",
      },
      {
        heading: 'The Diaphragm: Your Secret Weapon',
        level: 2,
        content:
          "Most people breathe and speak from their chest, using shallow breaths that produce thin, quiet sound. To project, you need to breathe from your diaphragm, the muscle below your lungs that controls deep breathing.\n\nHere's a quick way to find it: put your hand on your stomach. Breathe in and try to push your hand outward with your breath. That's diaphragmatic breathing. Your chest shouldn't move much. Your belly expands.\n\nWhen you speak from this deeper breath, your voice naturally has more body, more resonance, and more carry. You'll feel the sound coming from your core rather than your throat.\n\nPractice this: take a deep diaphragm breath, then say \"To the happy couple\" while focusing on pushing the sound from your stomach rather than your throat. You'll immediately hear the difference. It's fuller, richer, and louder without any strain.",
      },
      {
        heading: 'Posture Matters More Than You Think',
        level: 2,
        content:
          "Stand up straight. Shoulders back. Head level, not tilted down toward your notes. Feet shoulder-width apart.\n\nThis isn't just about looking confident (though that helps). When you hunch or slouch, you physically compress your diaphragm and restrict your airflow. Your voice literally cannot project well if your posture is working against it.\n\nThink of your body as a speaker system. Your diaphragm is the amplifier, your throat and mouth are the speaker cone, and your posture is the speaker housing. If the housing is collapsed, the sound quality suffers no matter how good the components are.\n\nOne practical tip: if you're holding notes, hold them at chest height, not down at your waist. This keeps your head up and your airway open. Looking down to read closes your throat and directs your voice toward the floor.",
      },
      {
        heading: 'Aim for the Back Wall',
        level: 2,
        content:
          "Here's the simplest projection technique there is: speak to the back of the room.\n\nDon't speak to the front row. Don't speak to the couple. Speak past them, to the people at the farthest table. Aim your voice at the back wall.\n\nThis doesn't mean you stare at the back wall the entire time. You still make eye contact around the room. But your vocal intention should be to reach the farthest person. When you aim for the back, the front and middle take care of themselves.\n\nIf you aim for the couple's table three feet away, your voice dies by the fifth row. If you aim for the back wall, everyone in between hears you clearly.\n\nThis is the single easiest adjustment you can make, and it has the biggest impact. Try it right now: say a sentence as if you're talking to someone across the table, then say the same sentence as if you're talking to someone across a large room. Feel the difference? That's projection.",
      },
      {
        heading: 'Dealing with Tough Acoustics',
        level: 2,
        content:
          "Wedding venues are acoustically chaotic. You might be in a barn with echo. A tent with no walls where sound escapes in every direction. A garden where wind eats your words. A ballroom where the clinking glasses and kitchen noise create a constant hum.\n\nFor echoey spaces: slow down. Echo turns fast speech into mush. Give each sentence room to bounce and settle before starting the next one.\n\nFor open-air venues: increase your volume by about 30% and speak more slowly. Sound dissipates outdoors with no walls to reflect it. If there's no microphone, face the majority of the audience and accept that people behind you might miss a few words.\n\nFor noisy venues: don't try to compete with background noise during a lull. Wait for the noise to drop, then begin. If there's constant noise (a nearby band, a generator, traffic), you need a microphone. Period. No amount of projection beats a jet engine.",
      },
      {
        heading: 'Warm Up Your Voice (Yes, Really)',
        level: 2,
        content:
          "Professional singers warm up before performing. You should too, even if it's just for five minutes before your speech.\n\nHum at different pitches for a minute. This warms up your vocal cords and resonance chambers.\n\nDo some lip trills (the \"brrrr\" sound with your lips vibrating). This relaxes tension in your face and throat.\n\nSay some tongue twisters at full projection volume. \"Red leather, yellow leather\" or \"unique New York\" will loosen up your articulation.\n\nTake five deep diaphragm breaths. This oxygenates your body and activates your core support.\n\nDo this in the bathroom, in the car, anywhere private. You'll walk up to give your speech with a voice that's ready to work, not cold and thin from hours of quiet sitting.",
      },
      {
        heading: 'When in Doubt, Use a Microphone',
        level: 2,
        content:
          "There's no shame in using a mic. If one is available, use it. If one isn't available and the venue holds more than 40 people, ask if one can be provided.\n\nSome people refuse microphones because they think it'll look too formal or they're worried about feedback. These are both solvable problems. A microphone can be used casually, and a basic sound check prevents feedback.\n\nWhat's not solvable is half the room missing your speech because they couldn't hear you. Nobody has ever complained that a wedding speech was too audible. Plenty of people have complained that they couldn't hear a word.\n\nYour speech is worth hearing. Make sure it can be.",
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
          "A microphone at a wedding is a gift. It means you don't have to worry about projection, you can speak at a natural conversational volume, and everyone in the room will hear you clearly. In theory.\n\nIn practice, most people have never used a microphone outside of karaoke night, and it shows. They hold it wrong, stand too close, stand too far, pop their P's, create feedback that makes dogs howl, and generally turn a simple amplification device into a source of anxiety.\n\nIt doesn't have to be this way. Using a microphone is easy once you know the basics. Five minutes of knowledge will save you from every common mic mistake.",
      },
      {
        heading: 'Handheld Microphones: How to Hold Them',
        level: 2,
        content:
          "If you're handed a wireless handheld mic (the most common type at weddings), here's exactly what to do.\n\nGrip it in the middle of the handle, not at the top near the head. Holding it near the top cups the microphone element and causes feedback and muffled sound. Imagine you're holding an ice cream cone, not choking a small animal.\n\nHold it about two to three inches from your mouth, slightly below your chin, angled upward at about 45 degrees. Not touching your lips (that's how you get those lovely popping sounds on every P and B). Not at arm's length (that's how you get inaudible).\n\nKeep the distance consistent. The most common amateur mistake is waving the mic around while talking, bringing it close for some words and far for others. This creates wild volume swings that are incredibly distracting for the audience. Once you find your sweet spot, keep it there.\n\nHold it in your non-dominant hand so your dominant hand is free for gestures and holding your notes or glass.",
      },
      {
        heading: 'Microphone on a Stand: The Setup',
        level: 2,
        content:
          "If the mic is on a stand, adjust the height before you start speaking. This is not optional. A microphone stand set for a six-foot groomsman will be completely wrong for a five-foot-four maid of honor.\n\nThe mic should be at chin height, slightly below your mouth. Most stands have a simple clutch mechanism: loosen, adjust, tighten. Practice this adjustment before people are watching if possible.\n\nDon't lean into the mic. Stand at a comfortable distance (about a hand's width away) and speak across it, not into it. Your goal is to let the microphone do the work while you stand naturally.\n\nHere's a pro tip: if you want to take the mic off the stand to move around, that's fine. But commit to one or the other. Don't keep putting it back and taking it off. And if you take it off, move the empty stand to the side so you're not awkwardly positioned next to a pole.",
      },
      {
        heading: 'Lapel and Clip-On Microphones',
        level: 2,
        content:
          "If the venue has a lapel mic (the small ones that clip to your collar), congratulations. You've won the microphone lottery. These are hands-free, unobtrusive, and require almost zero technique.\n\nClip it to your lapel, collar, or neckline, about six to eight inches below your chin. The sound engineer will handle the placement if there is one. If it's DIY, just make sure the mic is pointing up toward your mouth and isn't rubbing against fabric or jewelry, which creates scratching sounds.\n\nThe one thing to watch: don't turn your head dramatically while speaking. Lapel mics have a narrow pickup pattern, so if you turn far to the left or right, your voice will drop out. Gentle head turns are fine. Full 90-degree turns are not.\n\nAlso, remember the mic is live. That whispered aside to the maid of honor about how drunk Uncle Steve is? The whole room just heard it.",
      },
      {
        heading: 'How to Avoid Feedback',
        level: 2,
        content:
          "Feedback is that horrible screeching sound that happens when the microphone picks up its own output from the speakers. It's the most common microphone disaster at weddings, and it's almost always preventable.\n\nRule number one: never point the microphone at a speaker. This is the primary cause of feedback. Know where the speakers are in the room and keep the mic aimed away from them.\n\nRule number two: don't cup the mic head with your hand. This changes the pickup pattern and makes feedback far more likely.\n\nRule number three: if you hear feedback starting (a low hum or whine that's building), move. Step away from the speakers, lower the microphone slightly, or angle your body differently. Don't just stand there while the sound builds to a screech.\n\nRule number four: if possible, ask for a sound check before the speeches start. Say a few words into the mic at your normal speaking volume while someone listens from the back of the room. Two minutes of testing prevents twenty seconds of ear-splitting feedback.",
      },
      {
        heading: 'Common Microphone Mistakes and Fixes',
        level: 2,
        content:
          "Tapping the mic and saying \"Is this thing on?\" Please don't. Just start speaking. If the mic is on, people will hear you. If it isn't, someone will let you know.\n\nBlowing into the mic to test it. This can actually damage some microphones and always sounds terrible. Just speak normally.\n\nHolding the mic too close, causing popping on P, B, and T sounds. If you keep hearing those plosive pops, move the mic an inch further from your mouth or angle it slightly to the side so your breath doesn't hit the element directly.\n\nForgetting the mic amplifies everything. Clearing your throat, sighing, that little \"um\" between sentences... it's all louder now. Be mindful of every sound you make.\n\nDropping the mic at the end. This is not a rap battle. Wedding microphones are expensive. Place it gently back on the stand or hand it to someone.",
      },
      {
        heading: 'What If There Is No Microphone?',
        level: 2,
        content:
          "Some weddings, especially smaller or outdoor ones, won't have any sound system. In this case, you need to project naturally.\n\nAsk the coordinator if a mic can be provided. Seriously. Even at a 50-person wedding, a mic makes a huge difference, especially outdoors.\n\nIf truly no mic is available, ask guests to gather closer before you begin. \"Hey everyone, come in a bit, no mic tonight\" is a perfectly fine way to start. It actually creates a nice intimate feeling.\n\nSpeak from your diaphragm, aim for the back of the group, slow your pace, and over-enunciate slightly. This is the one situation where you'll need real vocal projection technique.\n\nKeep it shorter than you would with a mic. Projecting your voice for five minutes without amplification is exhausting. Three minutes is your sweet spot.\n\nPosition yourself so you're facing the majority of the crowd, with a wall or solid surface behind you if possible. Walls reflect sound back toward the audience. Open space behind you means your voice disappears.",
      },
      {
        heading: 'The Sound Check That Takes Two Minutes',
        level: 2,
        content:
          "If you can grab two minutes with the mic before speeches start (during cocktail hour setup, while guests are getting drinks), do this quick check:\n\nTurn the mic on and hold it where you plan to hold it during your speech. Say your opening line at your natural speaking volume. Have a friend stand at the farthest table and give you a thumbs up or down on volume.\n\nAdjust your distance from the mic until the volume is right. You want it loud enough to be heard clearly in the back, but not so loud that the front row is wincing.\n\nSay a few P-heavy words (\"Peter Piper picked a peck\") to check for popping. If you hear pops, angle the mic slightly off-axis from your mouth.\n\nNow you know your setup works. That's one less thing to worry about when you stand up for the real thing.",
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
          "Eye contact during a wedding speech does something almost magical: it turns a monologue into a conversation. It makes 150 people feel like you're talking to each of them personally. It communicates confidence, sincerity, and warmth in ways that words alone never can.\n\nAnd most people are terrible at it during speeches.\n\nThe common failure modes: staring at your notes the entire time, fixating on one person (usually the couple) while the rest of the room feels invisible, looking over everyone's heads at the back wall, or doing the nervous scan where your eyes dart around like a rabbit in headlights.\n\nGood eye contact isn't about staring people down. It's about connecting with the room, and there's a simple technique for doing it well.",
      },
      {
        heading: 'The Lighthouse Technique',
        level: 2,
        content:
          "Imagine you're a lighthouse, slowly sweeping your beam across the room. That's the foundational technique for eye contact during a speech.\n\nDivide the room into three to five zones: far left, center left, center, center right, far right. As you speak, slowly rotate your gaze through these zones, spending about one sentence or thought in each zone before moving on.\n\nYou don't need to make eye contact with every single person. That's impossible and would look manic. Instead, pick one person in each zone and speak to them for a sentence. Then move to a different person in the next zone. The people sitting near the person you're looking at will feel included too. It's a peripheral vision trick.\n\nThe \"sweep\" should feel natural and unhurried. Don't whip your head back and forth like you're watching tennis. Let your gaze drift gradually as you speak.",
      },
      {
        heading: 'When to Look at the Couple vs. the Crowd',
        level: 2,
        content:
          "This is a question almost nobody thinks about, but it makes a huge difference.\n\nLook at the couple when you're speaking directly to them or about their relationship. \"You two are the most annoyingly perfect couple I've ever met\" should be directed at the couple with a smile.\n\nLook at the crowd when you're telling a story, making a joke, or sharing context. \"Let me tell you about the time Dave tried to impress Lisa by cooking a five-course dinner\" is for the audience.\n\nLook at the couple for the toast. When you raise your glass and say the final words, bring your eyes to the bride and groom. This creates a powerful intimate moment that bookends the speech.\n\nThe ratio should be roughly 70% audience, 30% couple. The speech is for the couple, but it's performed for the audience. They need your attention to stay engaged.\n\nOne exception: if you're getting emotional, it's natural and endearing to look directly at the couple and speak to them. The room will lean in, not check out.",
      },
      {
        heading: "How to Make Eye Contact When You're Nervous",
        level: 2,
        content:
          "Eye contact is hard when you're anxious because looking at faces triggers your fight-or-flight response. Your brain interprets all those watching eyes as evaluation, and it wants to escape.\n\nHere are some workarounds.\n\nLook at foreheads instead of eyes. From more than about six feet away, nobody can tell you're looking at their forehead instead of their eyes. It reads as eye contact without the intimacy that makes you uncomfortable.\n\nFind three to five \"anchor faces,\" friendly people scattered around the room who you know will smile back at you. These are your safe harbors. When you need a confidence boost, return to an anchor face.\n\nStart with the couple. Looking at someone you love is easier than looking at strangers. Begin your speech directed at them while you settle your nerves, then gradually widen to the room.\n\nGive yourself permission to look at your notes. Glancing at your notes is a natural break from eye contact. It gives your nervous system a brief rest. Just make sure you look back up before you start speaking again.",
      },
      {
        heading: 'Eye Contact Mistakes That Make Things Weird',
        level: 2,
        content:
          "Staring. Making eye contact with one person for too long (more than about five seconds) stops being connective and starts being intense. Move your gaze before it gets weird.\n\nAvoiding the couple entirely. Some speakers are so focused on \"working the room\" that they never look at the people the speech is actually about. This reads as oddly detached.\n\nLocking onto the videographer. The camera lens feels safer than human faces, but staring at the camera makes you look like you're filming a confession video rather than giving a toast.\n\nLooking at the floor when you get emotional. I know the instinct is to look down when tears come, but looking at the couple or even upward is more powerful and helps you maintain your composure.\n\nThe death stare during a joke. If you deliver a joke with intense, unblinking eye contact, it reads as threatening rather than funny. Humor works better with lighter, more playful eye contact, eyebrows up, slight smile.",
      },
      {
        heading: 'Practicing Eye Contact at Home',
        level: 2,
        content:
          "This is one of those skills that feels awkward to practice but pays off enormously. Here are a few methods.\n\nThe stuffed animal method. Line up a few objects on chairs around your living room. Practice delivering your speech while rotating your gaze between them. Yes, you will feel ridiculous talking to a row of throw pillows. Do it anyway.\n\nThe video method. Record yourself giving the speech. Watch it back and observe where your eyes go. Are you looking at the camera (the audience) or down at your notes? Most people are shocked to discover how much time they spend looking down.\n\nThe friend method. Practice in front of two or three friends seated at different spots in the room. Ask them afterward if they felt included or ignored. Their feedback will be more honest than your self-assessment.\n\nThe goal isn't to have perfect eye contact. It's to have natural, warm, inclusive eye contact that makes the room feel connected to you and to the moment. That comes from awareness and practice, not perfection.",
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
          "It's the moment every wedding speaker dreads. You're mid-sentence, the room is watching, and suddenly... nothing. The words are gone. Your brain is a loading screen with no progress bar.\n\nFirst, the reassurance: this happens to professional speakers, actors, politicians, comedians, and basically every human who has ever spoken in front of a group. You are not the first person to forget their wedding speech mid-way through, and you won't be the last.\n\nSecond, the good news: the audience almost never realizes you've forgotten. To them, a pause is just a pause. They don't have a copy of your script. They don't know what was supposed to come next. You have way more recovery time than you think.\n\nHere's exactly what to do.",
      },
      {
        heading: 'The First Five Seconds: Stay Calm',
        level: 2,
        content:
          "The biggest danger isn't the blank itself. It's the panic that follows. Panic makes you do stupid things: blurting \"I forgot my speech,\" apologizing profusely, visibly scrambling through notes, or just standing in frozen silence with a look of pure terror.\n\nInstead, do this: close your mouth, take a breath, and smile. That's it. For the first two to three seconds, just exist calmly.\n\nTo the audience, this looks like a thoughtful pause. Like you're collecting yourself before an emotional moment. Like you're taking a beat for dramatic effect. They will project meaning onto your silence that works in your favor, as long as you don't break the illusion by panicking.\n\nYou have a solid five to seven seconds of silence before anyone starts to wonder if something is wrong. That's a lot of time. Use it.",
      },
      {
        heading: 'Recovery Technique 1: Check Your Notes',
        level: 2,
        content:
          "This is why you brought notes. This exact moment.\n\nGlance down at your cue card. Find the keyword or phrase that triggers your next section. Look up. Continue. Total interruption: three seconds. The audience barely notices.\n\nIf your notes are a full transcript, you might have trouble finding your place quickly. This is one of many reasons why bullet-point notes are better than full scripts. A short list of keywords is scannable at a glance. A wall of text is not.\n\nIf you don't have notes (why don't you have notes?), move to the next technique.",
      },
      {
        heading: 'Recovery Technique 2: Skip Ahead',
        level: 2,
        content:
          "You've forgotten the middle of a story or the next section of your speech. Here's the secret: skip it.\n\nJump to the next part you do remember. Bridge with a transitional phrase like \"But what I really want to say is...\" or \"More importantly...\" and launch into whatever comes next in your memory.\n\nNobody knows you skipped a section. There's no audience member sitting there thinking, \"Wait, they were supposed to talk about the fishing trip before the college anecdote.\" The only person who knows the speech was supposed to go differently is you.\n\nThis is actually the most important recovery technique to internalize: you can always skip ahead. The speech doesn't have to be delivered perfectly or in order. It just has to end well.",
      },
      {
        heading: 'Recovery Technique 3: Repeat and Riff',
        level: 2,
        content:
          "If you've just made a point and can't remember what comes next, you can buy time by expanding on what you just said.\n\n\"Jake has always been the most loyal friend I've ever had.\" [Brain goes blank.] \"I mean that seriously. In a world where people come and go, Jake shows up. He showed up for me more times than I can count, and I know he'll show up for Sarah every single day.\"\n\nYou just riffed on your last point for fifteen seconds, which gave your brain time to reboot and find the next section. The audience didn't hear filler. They heard emphasis.\n\nThis technique works especially well for emotional content. Repeating and expanding on a heartfelt sentiment reads as genuine emotion, not as a memory failure.",
      },
      {
        heading: 'Recovery Technique 4: Acknowledge It (Lightly)',
        level: 2,
        content:
          "If the blank goes on long enough that the audience starts to notice (we're talking ten-plus seconds of visible searching), it's okay to acknowledge it with humor.\n\n\"And this is why they tell you not to drink before the speeches.\" (Gets a laugh, buys you time.)\n\n\"I promised myself I wouldn't cry... I didn't promise I wouldn't forget my own speech.\" (Gets a sympathetic laugh.)\n\n\"Bear with me, I've been thinking about this moment for weeks and now it's all hitting me at once.\"\n\nThe key is to acknowledge it lightly and briefly, then move on. Don't dwell on it. Don't apologize three times. One quip, one glance at your notes, and back to business.",
      },
      {
        heading: 'The Emergency Exit: Go Straight to the Toast',
        level: 2,
        content:
          "If everything fails and you truly cannot remember anything beyond what you've already said, go to your toast. You did memorize your toast, right? (Please say you memorized your toast.)\n\nBridge to it naturally: \"I could go on, but I think the best thing I can do right now is raise a glass...\" and deliver your closing toast.\n\nA speech that ends early but ends well is infinitely better than a speech that stumbles through another five painful minutes. The audience will remember the warm toast. They won't go home talking about how the speech was shorter than expected.\n\nThink of your toast as a ripcord. No matter what happens in the speech, you can always pull it and land safely.",
      },
      {
        heading: 'Prevention: How to Minimize the Risk',
        level: 2,
        content:
          "The best way to handle forgetting your speech is to make it less likely in the first place.\n\nBring notes. Always. Even if you've memorized every word. The safety net reduces anxiety, and less anxiety means better recall.\n\nMemorize the structure, not the script. If you know the five sections of your speech and the key point of each, you can always find your way even if the exact wording escapes you.\n\nPractice transitions between sections. The most common place to blank out is at the seam between one section and the next. Practice those bridges specifically.\n\nLimit alcohol before your speech. One drink to calm nerves is fine. Three drinks is how you end up staring blankly at a room full of people with no idea what country you're in.\n\nAnd remember: even if you do forget, even if you skip half the speech, even if you have to pull the emergency toast ripcord, nobody will hold it against you. You stood up. You tried. You showed up for the couple. That's what people remember.",
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
          "You've written the speech. You've practiced the speech. You're delivering the speech. And then... a baby screams. A glass shatters. Your drunk uncle yells something from the back. The DJ accidentally plays music. A groomsman heckles you. A phone goes off at maximum volume.\n\nWelcome to live performance at a wedding. Things will go wrong. The question isn't whether you'll be interrupted, but how you'll handle it when it happens.\n\nThe good news: handling an interruption well can actually make your speech better and more memorable. The audience is rooting for you. They want to see you navigate the moment with grace or humor. Rise to it and you'll get more goodwill than a flawless delivery ever could.",
      },
      {
        heading: 'The Universal Rule: Pause, Acknowledge, Continue',
        level: 2,
        content:
          "No matter what the interruption is, the basic framework is the same.\n\nPause. Stop talking. Don't try to power through. Competing with a crying baby or a dropped tray of glasses is a losing battle. You'll just raise your voice while nobody hears you.\n\nAcknowledge. Give the interruption a brief nod, either with a look, a smile, or a quick comment. This shows the audience you're aware and in control, not oblivious or rattled.\n\nContinue. Once the moment has passed, pick up where you left off. If you can't remember where you were, check your notes or just bridge forward: \"So, as I was saying...\"\n\nThe entire interruption handling should take five to fifteen seconds. Anything longer and the interruption is winning.",
      },
      {
        heading: 'Handling the Drunk Heckler',
        level: 2,
        content:
          "Every wedding has one. The guy who's been hitting the open bar since the ceremony and now thinks he's the co-host. He'll shout things like \"THAT'S NOT HOW IT HAPPENED\" or \"TELL THEM ABOUT VEGAS\" or just incomprehensible enthusiasm.\n\nFirst response: smile, give a light laugh, and say something like, \"I see someone got a head start on the champagne\" or \"Easy there, you'll get your turn.\" The audience will laugh because they've all been watching the same person all night.\n\nIf they continue: look at them directly, smile, and say with warmth, \"I love the enthusiasm, but let me finish and then we can swap.\" Direct but not aggressive.\n\nIf they still won't stop: don't engage further. Look at the best man, maid of honor, or the heckler's table and make eye contact that says, \"Handle this, please.\" Then continue your speech directed at the other side of the room. Someone will usually intervene.\n\nThe critical thing: never get visibly angry. Never snap at them. Never insult them. The moment you lose your cool, the vibe shifts from \"funny interruption\" to \"uncomfortable confrontation.\" Stay warm. Stay in control. The room is on your side.",
      },
      {
        heading: 'Handling a Crying Baby',
        level: 2,
        content:
          "Babies cry at weddings. It's what they do. And the parent is already mortified, so whatever you do, don't make them feel worse.\n\nIf it's a quick cry and stops: just pause for a beat and continue. No acknowledgment needed.\n\nIf it goes on: pause, smile, and say something warm. \"Someone agrees with me\" or \"Toughest critic in the room\" or \"I feel the same way, buddy.\" The parent will almost certainly be heading for the exit at this point. Give them a warm look and continue.\n\nNever, under any circumstances, make a comment that could be read as annoyed or critical of the parent or child. Even a joke like \"Can someone handle that?\" sounds hostile. Parents at weddings already feel guilty when their kid makes noise. Be gracious.",
      },
      {
        heading: 'Handling Technical Issues',
        level: 2,
        content:
          "The microphone cuts out. The speaker system pops. The spotlight blinds you. The music starts playing randomly.\n\nFor mic failure: project your voice and keep going while someone sorts it out. Say \"Looks like we're going acoustic\" and continue at higher volume. If the mic comes back, smoothly transition back to it.\n\nFor feedback (that screeching sound): stop talking, step away from the speakers, and wait for someone to adjust the sound. You can fill the silence with, \"And I thought my singing voice was bad.\"\n\nFor random music: laugh. Everyone will laugh. It's genuinely funny. Wait for it to stop, then say something like, \"Great, now I've got a soundtrack.\" If it doesn't stop quickly, gesture to the DJ or AV person.\n\nFor any technical problem, your best asset is patience and humor. These things happen. They're no one's fault. The audience just wants to see you handle it without melting down.",
      },
      {
        heading: 'Handling Unexpected Emotions (Yours or Others\')',
        level: 2,
        content:
          "Sometimes the \"interruption\" isn't external. It's you, suddenly crying when you didn't expect to. Or the bride bursting into tears. Or the groom's mom sobbing loud enough to hear.\n\nIf you start crying: pause, take a breath, smile through it. Say, \"Give me a second\" or \"I promised myself I wouldn't do this.\" The audience will wait. They'll even love you more for it. Take your time, find your composure, and continue. If you can't stop, that's okay too. A teary speech delivered with love is better than a polished speech delivered with detachment.\n\nIf someone in the audience is having a visible emotional reaction: acknowledge it gently if it feels right. \"I see I'm not the only one feeling this\" creates a beautiful shared moment. Or just let it be and continue.\n\nEmotional interruptions are actually the easiest to handle because the audience is already with you. Nobody judges a speaker for crying at a wedding. They judge them for being cold.",
      },
      {
        heading: 'The One Type of Interruption You Should Worry About',
        level: 2,
        content:
          "The only truly dangerous interruption is someone revealing information that shouldn't be public. A heckler mentioning an ex, someone making a comment about family drama, or a drunk guest saying something genuinely inappropriate.\n\nIf this happens: do not engage with the content. Do not repeat it. Do not make a joke about it. Simply say, \"Moving on...\" with a smile and continue your speech as if it didn't happen. The faster you move past it, the faster the room moves past it.\n\nIf the interruption is truly offensive or the person won't stop, it's okay to pause and wait for someone to address it. You don't have to be the bouncer. Look to the wedding party or a member of the family to step in. Your job is to give a speech, not manage crowd control.\n\nRemember: the vast majority of interruptions are harmless, funny, and completely manageable. A baby crying, a glass breaking, an enthusiastic uncle... these are the textures of a real celebration. Roll with them. The speech that handles a messy moment with grace is the one people talk about for years.",
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
          "Here's a bizarre phenomenon that only happens during public speaking: you suddenly become aware of your hands. These appendages that you've used successfully for your entire life without a single conscious thought suddenly feel like alien attachments. Where do they go? What are they doing? Why are they so sweaty?\n\nYou're not alone. \"What do I do with my hands?\" is one of the most common wedding speech anxieties, right up there with \"what if I forget everything\" and \"what if I cry.\" And it makes sense. When you're standing in front of a crowd with all eyes on you, every part of your body feels amplified.\n\nThe good news: there are simple, natural solutions. And the even better news: nobody is watching your hands as closely as you think they are.",
      },
      {
        heading: 'The Default Position: One Hand Occupied, One Hand Free',
        level: 2,
        content:
          "The easiest way to solve the hand problem is to give one of them a job.\n\nHold your notes in one hand. This immediately solves 50% of the problem. Your non-dominant hand holds the card, your dominant hand is free for gestures and, eventually, raising your glass.\n\nIf you don't have notes, hold your glass. Same principle. One hand is occupied, one hand is free.\n\nIf you have neither notes nor a glass, hold the microphone. If there's no microphone either, well, you've got two unemployed hands. Rest your dominant hand naturally at your side or on the podium if there is one, and let it gesture naturally as you speak.\n\nThe key word here is \"naturally.\" You gesture when you talk to friends at dinner. You gesture when you tell stories at the bar. Your body knows what to do with your hands when you're not overthinking it. The goal is to get close enough to that natural state that your hands do their thing without your conscious interference.",
      },
      {
        heading: "What NOT to Do (The Hall of Shame)",
        level: 2,
        content:
          "Let's cover the classic hand positions that scream \"I'm uncomfortable.\"\n\nThe fig leaf. Both hands clasped in front of your groin. It's the universal pose of discomfort and it looks exactly as awkward as it sounds.\n\nThe reverse fig leaf. Hands clasped behind your back. This makes you look like you're being interrogated or standing at military attention.\n\nHands in pockets. One hand in a pocket can look casual and relaxed. Both hands deep in your pockets looks like you'd rather be anywhere else.\n\nThe death grip. Clutching the podium, your notes, or the microphone with white-knuckle intensity. It telegraphs panic.\n\nThe prayer. Pressing your palms together in front of your chest. Unless you're actually praying, this reads as pleading.\n\nThe fidget. Playing with a ring, twisting a button, clicking a pen, touching your face repeatedly. Fidgeting is distracting and communicates nervousness more than anything else you could do.\n\nThe T-Rex. Arms tight against your body, hands up near your chest, making tiny restricted movements. This happens when you're trying not to gesture but your body wants to.",
      },
      {
        heading: 'How to Gesture Like a Normal Human',
        level: 2,
        content:
          "Good gestures during a speech are the same gestures you use in everyday conversation, just slightly larger.\n\nOpen palms. When you're making a point or sharing something sincere, open palms facing the audience communicate honesty and warmth.\n\nCounting gestures. \"There are three things I love about Sarah...\" and you hold up one, two, three fingers. Simple, effective, gives structure.\n\nDirectional gestures. Pointing (gently, not aggressively) toward the couple when you reference them. Gesturing toward a table when you mention family. These orient the audience.\n\nSize and scope gestures. Indicating something big, something small, something far away. These add visual dimension to your stories.\n\nThe general rule: gesture from the elbow, not the wrist. Small, wristy gestures look timid and are invisible past the third row. Movement from the elbow and shoulder reads clearly even at a distance.\n\nBut here's the most important thing: don't choreograph your gestures. Planned gestures look robotic and weird. Just practice your speech out loud a few times and let your hands do what they naturally do. Then, if you notice yourself doing something distracting (like the fidget or the fig leaf), consciously correct that one thing. Don't try to add gestures. Try to remove bad habits.",
      },
      {
        heading: 'The Glass Problem',
        level: 2,
        content:
          "At some point during your speech, you'll need to hold a glass for the toast. But managing a glass, notes, and a microphone with only two hands is a genuine logistical challenge.\n\nHere's the solve: don't hold the glass for the entire speech. Keep it on the table next to you or have someone nearby ready to hand it to you when you get to the toast. When you're ready, put your notes in your pocket (or set them down), pick up the glass, deliver the toast, drink, done.\n\nIf you must hold the glass throughout, hold it low in your non-dominant hand (same hand as your notes, if you can manage both). Don't gesture with the hand holding the glass. Champagne sloshing is not the vibe.\n\nAnd for the love of all that is holy, don't take nervous sips throughout the speech. One sip for a strategic pause is fine. Draining your champagne over the course of four minutes tells the audience you need liquid courage to get through this.",
      },
      {
        heading: 'If You Have a Podium',
        level: 2,
        content:
          "Some wedding venues have a podium or lectern for speeches. This changes the hand equation entirely.\n\nYou can rest one or both hands lightly on the sides of the podium. This is a natural, confident position. Don't grip the edges, just rest.\n\nYou can set your notes on the podium surface, freeing both hands. This is actually ideal because you can gesture freely and glance at your notes without holding anything.\n\nDon't hide behind the podium. Stand close enough to use it, but don't hunch over it or lean on it like it's holding you up. It's a shelf for your notes, not a shield from the audience.\n\nDo step to the side of the podium occasionally if the moment calls for it. When you're telling a personal story to the couple, stepping out from behind the podium creates intimacy. When you're addressing the room with a joke, being behind it is fine.",
      },
      {
        heading: 'The Honest Truth About Hands',
        level: 2,
        content:
          "Here's what nobody tells you about wedding speech body language: the audience is barely looking at your hands. They're looking at your face. They're listening to your words. They're watching the couple's reaction.\n\nYour hands only become noticeable when they're doing something distracting. Fidgeting, gripping, trembling visibly, or being unnaturally still. As long as you avoid the obvious pitfalls and let your hands move somewhat naturally, nobody will give them a second thought.\n\nSo the real advice is this: stop worrying about your hands. Give one of them a job (notes, mic, glass). Let the other one gesture naturally. And put your mental energy toward the things that actually matter: your words, your pacing, your eye contact, and your connection to the couple.\n\nYour hands will figure themselves out. They always do.",
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
          "Let's start by flipping the narrative that's probably been running through your head: \"My English isn't good enough. People won't understand me. I'll sound stupid.\"\n\nStop. Here's the truth: giving a wedding speech in a language that isn't your native tongue is an act of incredible effort and love. Every single person in that room will recognize that, and they'll respect you for it before you've even opened your mouth.\n\nYour accent isn't a flaw to hide. It's a part of who you are, and it adds texture and authenticity to everything you say. A heartfelt toast delivered with a French accent, a Brazilian accent, a Korean accent... that's beautiful. That's the sound of a real person sharing real emotion. It's a hundred times more compelling than a polished speech from a native speaker who's clearly just going through the motions.\n\nSo take a breath. You belong up there. Now let's talk about practical ways to make this easier.",
      },
      {
        heading: 'Write the Speech in Your Native Language First',
        level: 2,
        content:
          "If you're struggling to write the speech in English, start in your native language. Get the feelings, the stories, the structure right in the language where your thoughts flow naturally.\n\nThen translate. Not word for word, because idioms and phrases rarely translate directly. Instead, capture the meaning and emotion of each section and express it in simple, clear English.\n\nThis approach has a huge advantage: the emotional core of your speech stays authentic. When you try to write directly in English, you might reach for words that sound impressive but don't feel like you. When you start in your language and translate the heart of it, the result sounds genuine.\n\nIf you're bilingual enough to write directly in English, go for it. But keep the vocabulary simple and the sentences short. This isn't the time to show off your English skills. It's the time to connect with people.",
      },
      {
        heading: 'Simple English Is Better English (For Speeches)',
        level: 2,
        content:
          "Even native English speakers should use simple language in wedding speeches, but this is especially true for non-native speakers. Short sentences are easier to deliver, easier to understand, and actually more powerful.\n\nCompare these:\n\n\"It has been an extraordinarily remarkable privilege to have borne witness to the blossoming of their relationship over the course of the preceding several years.\"\n\nvs.\n\n\"I have watched these two fall in love. And it has been one of the best things I have ever seen.\"\n\nThe second version is clearer, more emotional, and much easier to say if English isn't your first language. Short sentences also give you natural pause points, which help with pacing and nerves.\n\nAvoid idioms and slang that might trip you up. \"They really hit it off\" or \"she swept him off his feet\" are landmines if you're not confident with the pronunciation. Say what you mean directly: \"They liked each other immediately\" or \"He fell completely in love with her.\"",
      },
      {
        heading: 'Pronunciation: Focus on the Key Words',
        level: 2,
        content:
          "You don't need to pronounce every word perfectly. You need to pronounce the important words clearly. Names, places, and emotional keywords.\n\nIf there are English words in your speech that you find difficult to pronounce, practice them specifically. Say them out loud twenty times. Ask a native speaker to say them for you so you can hear the correct pronunciation.\n\nOr, here's a simple hack: replace the hard word with an easier synonym. If \"extraordinary\" ties your tongue in knots, say \"amazing\" instead. If \"aisle\" keeps coming out wrong, say \"walked up to the altar.\" There's always a simpler way to say something.\n\nPractice the names of anyone you mention in the speech. The couple's names, family members, places. Getting a name wrong or stumbling over it is distracting for everyone. Getting names right shows effort and respect.",
      },
      {
        heading: 'Use Your Native Language as a Secret Weapon',
        level: 2,
        content:
          "One of the most powerful moves in a wedding speech is including a phrase, a toast, or a blessing in your native language. It's a moment that only you can provide, and it makes the speech uniquely yours.\n\nYou could open or close with a traditional blessing or proverb from your culture. Say it in your language first, then translate it for the audience. \"In my country, we say... which means...\"\n\nYou could describe the couple using a word from your language that has no direct English translation. Every language has words like this, concepts about love, family, or connection that don't quite exist in English. Sharing one of these is a gift to the room.\n\nYou could even deliver a short section of the speech in your language (with a brief English summary after) if many guests share your language. This is particularly powerful at multicultural weddings where both families are present.\n\nThese moments get huge reactions because they're genuine, cultural, and personal. Don't hide where you come from. Feature it.",
      },
      {
        heading: 'Pace Yourself (Slower Than You Think)',
        level: 2,
        content:
          "Every wedding speaker should slow down, but this is doubly important when English isn't your first language. A moderate accent delivered slowly is perfectly understandable. The same accent at high speed becomes very hard to follow.\n\nPause between sentences. This gives the audience time to adjust to your accent and rhythm, which they will do very quickly. Most people need about ten seconds to \"tune in\" to a new accent. After that, they follow along fine.\n\nIf you notice confused faces in the audience, slow down even further. Don't speak louder. Speaking louder with an accent doesn't help anyone. Speaking slower does.\n\nPractice with a timer. If your speech reads as a three-minute piece on paper, plan for it to take four to four and a half minutes. The extra time accounts for the slower pace and any pauses you need to take.",
      },
      {
        heading: 'Practice with a Native Speaker',
        level: 2,
        content:
          "If possible, practice your speech in front of a native English speaker and ask them for honest feedback.\n\nNot feedback on your accent. Feedback on comprehension. Ask them: \"Could you understand everything? Were there words that were unclear? Did any sentence confuse you?\"\n\nThis kind of practice session is incredibly valuable because it tells you exactly which parts of your speech might need adjustment. Maybe one specific word is hard to catch. Maybe a sentence is too long and loses clarity. These are easy fixes once you know about them.\n\nIf you don't have a native speaker available, record yourself and listen back. Pretend you're hearing the speech for the first time. Are there moments where you can't quite make out what you're saying? Those are the spots to work on.",
      },
      {
        heading: 'Handling the Nerves of Speaking in a Second Language',
        level: 2,
        content:
          "Public speaking anxiety is bad enough. Public speaking anxiety in a language you're not fully comfortable in is next level. Here are some specific strategies.\n\nMemorize your opening and closing lines completely. If you can start strong and end strong, the middle takes care of itself. Knowing exactly how you'll begin removes the scariest moment, that first sentence.\n\nBring detailed notes. This isn't the time for minimalist bullet points. If having more text on your card makes you feel safer, write more. It's better to glance at notes frequently than to freeze because you can't find the right English word.\n\nGive yourself permission to be imperfect. If you stumble on a word, just say it again. \"They are... the most... dedicated... dedicated people I know.\" Nobody cares about the stutter. They care about the sentiment.\n\nRemember that the audience is on your side. They know you're making an extra effort. They know this is harder for you than it would be for a native speaker. That knowledge creates automatic goodwill. You start with the audience already rooting for you.",
      },
      {
        heading: 'You Have Something Nobody Else in the Room Has',
        level: 2,
        content:
          "Here's the thing nobody mentions: by speaking at this wedding in English when it's not your native language, you're doing something that most of the native English speakers in the room could never do in reverse. Could they give a speech in your language? Almost certainly not.\n\nYou're brave. You're making an effort that goes beyond what's comfortable because you love the couple enough to stand up and speak in their world, on their terms.\n\nThat effort is the speech. The words matter, sure. But the act of standing up there, accent and all, searching for the right English words to express what's in your heart... that's the most eloquent thing anyone could do.\n\nKeep it short, keep it simple, keep it sincere, and let your personality, your culture, and your love for the couple carry it. You'll do great.",
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
          "You wrote the speech. You practiced it in the shower. You even timed it while your dog stared at you. But the day itself? That's a different beast entirely.\n\nThe hours between waking up and walking to that microphone are weirdly important. What you eat, when you practice, how much champagne you sip during cocktail hour... all of it matters more than you think. This is your wedding speech day-of game plan, hour by hour, so you can stop spiraling and start executing.",
      },
      {
        heading: 'Morning: The Calm Before the Storm',
        level: 3,
        content:
          "Read through your speech once. Just once. Not seventeen times while hyperventilating into your coffee. You want to refresh your memory, not cram like it's finals week.\n\nEat a real breakfast. Eggs, toast, something with substance. An empty stomach plus nerves plus champagne later equals disaster. Your body needs fuel, and \"I'll just grab something later\" is a lie you're telling yourself.\n\nDo something physical. A walk, a quick workout, even just stretching. Nervous energy needs somewhere to go, and your body will thank you when you're standing at the mic with steady hands instead of trembling ones.",
      },
      {
        heading: 'Afternoon: Final Prep Without Overdoing It',
        level: 3,
        content:
          "If the ceremony is in the evening, you've got a dangerous window of free time in the afternoon. Do not spend it rewriting your speech. Whatever you have is what you're going with.\n\nPrint a fresh copy of your speech (or make sure your phone version is accessible offline, with the screen set to stay on). Tuck it into whatever you're wearing. Jacket pocket, clutch, the waistband of your pants if that's what it takes.\n\nDo one final read-through out loud. Stand up. Project your voice. If you're at the venue, find a quiet corner and do it there. Hearing the words in the actual space does something for your confidence that bedroom practice can't match.\n\nCharge your phone to 100% if you're reading from it. This sounds obvious until you're at 12% during cocktail hour.",
      },
      {
        heading: 'One Hour Before: Get Your Head Right',
        level: 3,
        content:
          "This is the danger zone. Guests are arriving, drinks are flowing, and someone's aunt is going to corner you and say, \"Oh, are you giving a speech? I LOVE speeches!\" Smile. Nod. Excuse yourself.\n\nFind five minutes alone. Bathroom stall, your car, behind a tree. Do some deep breathing. Box breathing works well: inhale for four counts, hold for four, exhale for four, hold for four. Do it five times. You'll feel like a different person.\n\nDo NOT start your drinking for the day during this window. I know it's tempting. One drink maximum, and only if it genuinely calms you without making you sloppy. Water is the real move here.\n\nKnow where the microphone is. Know where you'll be standing. Know who's introducing you (or if you're just supposed to stand up and go). Eliminating surprises eliminates anxiety.",
      },
      {
        heading: '30 Minutes Before: Lock It In',
        level: 3,
        content:
          "Stop reading your speech. Seriously, put it away. You know it. If you don't know it by now, reading it one more time won't help. What will help is being present and enjoying the event.\n\nHit the bathroom. Not because you necessarily need to, but because you definitely don't want to need to mid-speech.\n\nCheck your appearance. Food in teeth? Tie straight? Hair doing the thing it's supposed to do? Collar flat? You're about to have a lot of eyes on you.\n\nText or tell the DJ/MC/coordinator that you're ready. If there's a specific cue for when you speak, confirm it now. \"After the salad is cleared\" is a lot more useful than \"sometime during dinner.\"",
      },
      {
        heading: '5 Minutes Before: The Final Countdown',
        level: 3,
        content:
          "Take three slow, deep breaths. Shake out your hands. Roll your shoulders back. Unclench your jaw. (You didn't realize it was clenched, did you?)\n\nGet your speech out and ready. If it's on paper, unfold it. If it's on your phone, open the note, scroll to the top, and bump up the font size one more notch.\n\nRemind yourself of your opening line. Just the first sentence. That's the hardest part. Once you're past it, momentum takes over.\n\nLook at the couple. Remember why you're doing this. It's not a performance review. It's a gift.",
      },
      {
        heading: 'The Quick-Reference Pocket Checklist',
        level: 2,
        content:
          "Print this out and stick it in your pocket:\n\nMorning: Read speech once. Eat breakfast. Move your body.\n\nAfternoon: Print backup copy. One read-through out loud. Charge phone.\n\nOne hour before: Five minutes alone. Deep breathing. Locate the mic. One drink max.\n\n30 minutes before: Stop reading. Bathroom. Appearance check. Confirm your cue.\n\n5 minutes before: Three deep breaths. Open your notes. Remember your first line. Look at the couple.\n\nYou've got this. The hard work is already done. Today is just delivery.",
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
          "Let's be clear about something upfront: there's a difference between normal nervousness and clinical-level public speaking anxiety. Normal nervousness means your hands shake a little and you talk too fast. Public speaking anxiety means you've been losing sleep for weeks, your chest tightens at the thought of it, and you've genuinely considered faking a medical emergency to get out of it.\n\nIf you're in that second camp, this article is for you. Not the \"just picture everyone in their underwear\" crowd. The real, practical, sometimes-you-need-professional-help crowd. You agreed to give this speech because you love someone, and your anxiety doesn't get to take that away from you.",
      },
      {
        heading: 'Understanding What Your Body Is Actually Doing',
        level: 2,
        content:
          "Public speaking anxiety is a fear response. Your brain perceives standing in front of a crowd as a genuine threat, and it fires up the same fight-or-flight system that would activate if a bear walked into the room. Adrenaline floods your system. Your heart races. Your mouth goes dry. Your hands tremble. Your voice shakes.\n\nHere's the important part: this is not a character flaw. It's not weakness. It's your nervous system doing exactly what it was designed to do, just in the wrong context. Understanding this won't cure you, but it takes away some of the shame, which is half the battle.\n\nThe physical symptoms feed the mental ones. You notice your hands shaking, which makes you more anxious, which makes them shake more. Breaking that loop is the goal.",
      },
      {
        heading: 'Talk to Your Doctor (Seriously)',
        level: 2,
        content:
          "If your anxiety is severe enough that it's affecting your daily life in the weeks leading up to the wedding, talk to your doctor. This isn't dramatic. This is practical.\n\nBeta-blockers like propranolol are commonly prescribed for performance anxiety. They don't sedate you or make you feel drugged. They block the physical symptoms of adrenaline, meaning your heart stays calm, your hands stay steady, and your voice stays even. Your brain still works perfectly. Many professional musicians, surgeons, and public speakers use them.\n\nYour doctor might also discuss short-acting anti-anxiety medications for the day of. These are stronger and do affect cognition, so they're not always the right call for a speech. But your doctor knows your situation better than the internet does.\n\nThe key is to have this conversation weeks before the wedding, not the morning of. You want time to try any medication in a low-stakes setting first.",
      },
      {
        heading: 'Cognitive Behavioral Techniques That Actually Work',
        level: 2,
        content:
          "CBT is the gold standard for anxiety treatment, and you can use some of its techniques on your own. The core idea: your thoughts create your feelings, and you can challenge your thoughts.\n\nWhen your brain says, \"Everyone will judge me if I mess up,\" challenge it. Has anyone ever judged you for being nervous at a wedding? Have you ever judged someone else? The answer is almost certainly no. Wedding guests are the most forgiving audience on the planet.\n\nCatastrophizing is the big one. Your brain jumps to the worst possible outcome and treats it as inevitable. \"I'll freeze up, forget everything, stand there in silence, and ruin the wedding.\" Walk through that scenario logically. Even if you froze (unlikely), someone would step in, the moment would pass, and the wedding would continue. It wouldn't be ruined. It wouldn't even be the thing people remember most.\n\nWrite down your anxious thoughts and then write the rational response next to each one. It feels silly. It works anyway.",
      },
      {
        heading: 'Desensitization: Practice in Progressively Scarier Settings',
        level: 2,
        content:
          "Exposure therapy is the other evidence-based approach for phobias, and you can do a DIY version. The idea is to gradually expose yourself to the feared situation, starting small.\n\nWeek one: Read your speech alone in your room. Out loud, standing up.\n\nWeek two: Read it to one person you trust completely. Your partner, your best friend, your mom.\n\nWeek three: Read it to a small group. Three or four people. Maybe over video call if that's easier.\n\nWeek four: Read it to a slightly bigger group. Or at the rehearsal dinner if there is one.\n\nEach time, your brain learns that the feared outcome doesn't happen. You survive. You might even enjoy it a little. The anxiety decreases incrementally, and by the wedding day, you've already done this enough times that it's familiar.",
      },
      {
        heading: 'Day-Of Strategies for Managing Symptoms',
        level: 2,
        content:
          "Even with preparation, the day itself will bring anxiety. That's okay. Here's how to manage it.\n\nBreathing is your best tool. Slow, diaphragmatic breathing activates your parasympathetic nervous system, which is the one that calms you down. Before your speech, find a quiet spot and do five minutes of slow breathing. Inhale for four counts through your nose, exhale for six counts through your mouth. The longer exhale is the key.\n\nCold water on your wrists or the back of your neck triggers the dive reflex, which slows your heart rate. It sounds like an old wives' tale, but it's actually backed by research.\n\nHave a glass of water at the podium. Taking a sip gives you a natural pause, buys time if you lose your place, and helps with the dry mouth that anxiety causes.\n\nAccept that your voice might shake for the first few sentences. It almost always steadies out. If you can push through those first 15 seconds, the rest gets dramatically easier.",
      },
      {
        heading: 'Give Yourself Permission to Make It Short',
        level: 2,
        content:
          "Here's something nobody with anxiety wants to hear but needs to: a short speech is a great speech. Two minutes is plenty. One minute is fine. If standing up and saying, \"I love you both, and I'm so happy for you\" is all you can manage, that's a beautiful toast.\n\nYou don't have to be funny. You don't have to tell a long story. You don't have to perform. You just have to show up and say something genuine. The bar is so much lower than your anxiety is telling you it is.\n\nWrite a speech that's comfortable for you, not one that meets some imaginary standard. If three paragraphs is your limit, that's your speech. Nobody in that room is timing you.",
      },
      {
        heading: 'When to Consider Not Giving the Speech',
        level: 2,
        content:
          "This might be controversial, but it needs to be said: if your anxiety is so severe that giving this speech would be genuinely traumatic, it's okay to have an honest conversation with the couple about it.\n\nMost couples would rather you be happy and present at their wedding than suffering through a panic attack at the microphone. There are alternatives. You could write a letter they read privately. You could give a joint toast with someone else. You could record a video message in advance.\n\nThis isn't giving up. It's knowing yourself and being honest. The couple asked you because they love you, not because they need content for their reception. Whatever form your words take, they'll be meaningful.\n\nThat said, most people with anxiety are capable of more than they think. The anxiety tells you that you can't do it. It's almost always wrong. Get the support you need, prepare thoroughly, and give yourself a real chance before you decide it's not possible.",
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
          "First things first: crying during a wedding speech is not a failure. It's not embarrassing. Half the room is probably already crying, and you haven't even started yet. But if you want to get through your speech with dry eyes and a steady voice, that's a completely valid goal, and there are real techniques that help.\n\nMaybe you're the parent who knows they'll lose it at \"I'm so proud of you.\" Maybe you're the best friend who can't talk about the bride without getting choked up. Maybe you just want to deliver the jokes properly without your voice cracking. Whatever your reason, let's get practical.",
      },
      {
        heading: 'Why We Cry During Speeches (The Science Bit)',
        level: 2,
        content:
          "Crying during emotional moments is triggered by your autonomic nervous system. When you feel a strong emotion, your brain signals the lacrimal glands, and tears happen. The trigger is usually a specific thought or memory, not the general situation.\n\nThis matters because it means you can identify your crying triggers in advance. It's not the whole speech that'll get you. It's that one line about your dad. It's the moment you look at the bride and remember her at age five. It's a specific sentence or image that tips you over.\n\nOnce you know your triggers, you can prepare for them. That's the entire strategy in a nutshell: know where the landmines are and have a plan for each one.",
      },
      {
        heading: 'Practice the Emotional Parts Until They Bore You',
        level: 2,
        content:
          "This is the single most effective technique. Read your speech out loud over and over, especially the emotional sections. The first time you read that heartfelt paragraph, you'll cry. The fifth time, you'll get misty. The fifteenth time, you'll feel almost nothing.\n\nThis isn't because you've stopped caring. It's because your brain has habituated to the emotional stimulus. The words become familiar, and familiar things don't trigger the same intensity of response. Professional actors use this principle all the time.\n\nThe catch: you need to practice with full voice and full emotion. Mumbling through it in your head doesn't count. Stand up, project, and say the words like you mean them. Your body needs to rehearse the physical act of speaking those sentences without crying, not just reading them silently.",
      },
      {
        heading: 'Physical Tricks That Actually Work in the Moment',
        level: 3,
        content:
          "When you feel tears coming, you need to interrupt the physical process. Here are techniques that actually work, not just old wives' tales.\n\nPress your tongue hard against the roof of your mouth. This activates a different set of nerves and can short-circuit the crying reflex. It's subtle enough that nobody will notice.\n\nTake a slow sip of water. This forces you to swallow, which is physically incompatible with the lump-in-throat feeling that precedes tears. Keep a glass at the podium.\n\nLook up slightly. Not dramatically, just shift your gaze from your notes to a spot on the back wall. Looking upward makes it physically harder for tears to form and flow. Plus it looks like you're gathering your thoughts, which is totally natural.\n\nClench your toes inside your shoes. This redirects your brain's attention to a physical sensation and can break the emotional spiral. Nobody can see it, and it works surprisingly well.\n\nBreathe out slowly through your mouth. The urge to cry usually comes with held breath or shallow breathing. A long, controlled exhale resets your system.",
      },
      {
        heading: 'Restructure Your Speech to Defuse the Bombs',
        level: 2,
        content:
          "If there's a line that makes you cry every single time in practice, you have options beyond just powering through it.\n\nReword it. Sometimes a slight rephrasing removes the emotional punch just enough that you can say it without breaking down. \"Dad would have loved this\" hits different than \"I know Dad is watching.\" Same sentiment, different emotional charge.\n\nMove the emotional peak. If the most tear-inducing moment is at the end (which is where most people put it), consider restructuring so it comes earlier, when your adrenaline is still high and keeping tears at bay. Or put a joke right before the emotional part so you're transitioning from laughter, which is harder to cry from.\n\nUse a bridge sentence. Before the emotional section, insert a practical or factual sentence that gives your brain a moment to shift gears. Something like, \"I want to share something that means a lot to me.\" It's a signal to yourself to brace, and it gives you a beat to compose yourself.",
      },
      {
        heading: 'The \"Pressure Valve\" Technique',
        level: 2,
        content:
          "Here's a counterintuitive approach: acknowledge the emotion before it overwhelms you. If you feel tears coming, pause and say something like, \"Okay, I promised myself I wouldn't do this\" or \"Give me a second.\" The audience laughs, you get a moment to breathe, and the pressure releases.\n\nThis works because crying often comes from trying to suppress emotion. When you name it and give yourself permission to feel it, the urgency decreases. It's like opening a valve before the pressure gets too high.\n\nPlenty of incredible wedding speeches include a moment where the speaker pauses to collect themselves. It's not a flaw. It's proof that you mean every word. But if your goal is to keep it together, naming the emotion paradoxically gives you more control over it.",
      },
      {
        heading: 'What If You Cry Anyway?',
        level: 2,
        content:
          "You might. Even with all these techniques, you might hit that one line and the tears come. And you know what? The speech will still be wonderful.\n\nIf it happens, pause. Take a breath. Take a sip of water. Look at your notes. The room will wait. Nobody is going to rush you off stage. Most people will be reaching for their own tissues.\n\nThen keep going. Your voice might be wobbly for a sentence or two, and then it'll steady out. The audience isn't judging you. They're feeling it with you.\n\nThe goal isn't perfection. The goal is showing up and saying something real. Whether your eyes are dry or streaming, you're giving someone you love a gift they'll remember forever. Tears or no tears, that's a win.",
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
          "Being an introvert doesn't mean you're bad at public speaking. It means social situations drain your energy instead of fueling it. Big difference. Some of the best speechwriters and speakers in history were introverts. They just needed to recharge in a dark room afterward.\n\nThe challenge isn't that you can't give a great speech. It's that the entire wedding context, the socializing, the small talk, the being \"on\" for hours, is exhausting. And then, somewhere in the middle of all that, you have to stand up and address everyone. The key is energy management, not personality transformation.",
      },
      {
        heading: 'Your Introvert Superpowers (Yes, Really)',
        level: 2,
        content:
          "Introverts tend to be better writers than off-the-cuff speakers. This is actually a huge advantage for wedding speeches, because the writing is 90% of the work. If you can craft a thoughtful, genuine speech on paper, you're already ahead of the extrovert who's planning to \"just wing it.\"\n\nYou're also more likely to be observational and specific. While the extrovert tells a generic story about \"all the good times,\" you'll notice and describe the small, real moments that make everyone tear up. The way the groom's voice changes when he talks about the bride. The specific Tuesday night that changed everything. That's your zone.\n\nYou also probably hate filler and fluff, which means your speech will be tight. No rambling, no padding, no \"I could go on and on\" (please don't). Short and meaningful beats long and generic every single time.",
      },
      {
        heading: 'Plan Your Energy Like a Resource',
        level: 2,
        content:
          "Here's the most important thing: treat your social energy like a battery on wedding day. You know it's finite. Plan accordingly.\n\nIf your speech is during dinner, conserve energy during the ceremony and cocktail hour. You don't have to work the room. Find one or two people you're comfortable with and stick with them. Or disappear for 15 minutes. Nobody's taking attendance.\n\nBuild in alone time before your speech. Even five minutes in a bathroom stall or sitting in your car can make a massive difference. Put in earbuds and listen to a song that calms you down. The goal is to arrive at the microphone with a full-enough battery to get through three minutes of speaking.\n\nAfter your speech, give yourself permission to decompress. You just did a hard thing. You don't owe anyone small talk for the next hour.",
      },
      {
        heading: 'Write for Spoken Word, Not for a Page',
        level: 2,
        content:
          "Introverts often write beautifully but in a way that reads better on paper than it sounds out loud. Wedding speeches need to be conversational, even if that feels less polished to you.\n\nRead your speech out loud as you write it. If any sentence feels like something you'd write in an email but would never actually say, rewrite it. \"It is with great pleasure that I...\" becomes \"I'm really happy to...\" Natural language always wins.\n\nUse short sentences. They're easier to deliver, easier to remember, and easier for the audience to follow. A long, complex sentence that sounds elegant on paper becomes a tongue-twisting marathon at a microphone.\n\nWrite transitions that feel natural for how you actually talk. If you'd normally say, \"So anyway,\" or \"But here's the thing,\" those are perfect speech transitions. Don't try to sound like someone else.",
      },
      {
        heading: 'You Don\'t Have to Be the Entertainer',
        level: 2,
        content:
          "Extroverts often give speech-as-performance. Big energy, lots of jokes, playing to the crowd. That's their style, and it works for them. It doesn't have to be yours.\n\nA quiet, sincere, heartfelt speech can be the most powerful thing anyone hears all night. You don't need punchlines. You don't need crowd work. You need honesty and specificity.\n\nTell one real story. Say one thing that's genuinely true about the couple. Wish them well. That's a complete speech. The room doesn't need you to be a comedian. They need you to be you.\n\nIn fact, some of the most memorable wedding speeches I've ever seen were from people who were clearly nervous, clearly not performers, but clearly meant every word. That authenticity is worth more than any practiced joke.",
      },
      {
        heading: 'Use Notes. Don\'t Apologize for It.',
        level: 2,
        content:
          "Some introverts feel pressure to memorize their speech because reading from notes seems \"less impressive.\" Forget that. Notes are your safety net, and safety nets reduce anxiety.\n\nPrint your speech in a large, readable font. 16-point minimum. Double-spaced. One side of the paper only. You want to be able to glance down and find your place instantly.\n\nDon't read it word for word like a hostage statement. Glance at your notes for the next thought, then look up and deliver it to real people. Down, up, speak. Down, up, speak. This looks natural and confident, and it gives you the security of knowing your next line is right there.\n\nNobody in the audience cares that you have notes. Literally nobody. They're too busy listening to what you're saying.",
      },
      {
        heading: 'A Note on Alcohol',
        level: 2,
        content:
          "Introverts are especially susceptible to the \"liquid courage\" trap. One drink to loosen up, then another because the first one helped, and suddenly you're giving a speech that's looser than you intended.\n\nIf you drink, have one. Truly one. Before your speech. Then switch to water until you're done. The goal is to take the edge off, not to become a different person.\n\nOr don't drink at all. Plenty of great speeches have been given by completely sober people. There's no rule that says you need alcohol to be personable. You're already personable. You just save it for the people who matter.",
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
          "Confidence for public speaking isn't something you either have or you don't. It's something you build, deliberately, over time. And the good news is you have time. Whether the wedding is six months away or two weeks out, you can measurably increase your confidence before you reach that microphone.\n\nThe bad news? There are no shortcuts. You can't manifest confidence. You can't buy it. You can't fake it convincingly enough. But you can build it through preparation, practice, and a few mindset shifts that actually hold up under pressure.",
      },
      {
        heading: 'Confidence Comes from Preparation, Not Personality',
        level: 2,
        content:
          "The most confident speakers you've ever seen aren't confident because they're naturally bold. They're confident because they've done the work. They know their material cold. They've practiced until the words feel automatic. They've anticipated what could go wrong and made a plan.\n\nThis is great news for you, because it means confidence is just a preparation problem. And preparation is something you can control.\n\nStart by finishing your speech early. Not the night before. Not the week before. As early as possible. A finished speech sitting in your notes app for three weeks does more for your confidence than a perfect speech written at 2 AM the night before. Time is your secret weapon.",
      },
      {
        heading: 'The Practice Ladder',
        level: 2,
        content:
          "Practice, but do it in stages. Each stage builds on the last, and by the time you're at the top, speaking in front of 150 people feels like a manageable step, not a terrifying leap.\n\nStage 1: Read it silently. Just familiarize yourself with the flow.\n\nStage 2: Read it out loud, alone. Stand up. Use your normal speaking voice. Time it.\n\nStage 3: Read it out loud while recording yourself on your phone. Play it back. Cringe. Then notice that it's actually... fine? Maybe even good?\n\nStage 4: Deliver it to one person. Someone safe. Ask for honest feedback, but also ask them to tell you what worked.\n\nStage 5: Deliver it to a small group. Three to five people. This simulates the pressure of an audience while keeping it manageable.\n\nStage 6: If possible, deliver it at the rehearsal dinner or in the actual venue space. The familiarity of the physical space matters more than you think.\n\nEach stage teaches your brain that speaking these words out loud is safe. By the wedding, you've already survived the speech multiple times.",
      },
      {
        heading: 'Record Yourself and Actually Watch It',
        level: 2,
        content:
          "Nobody likes watching themselves on video. Do it anyway.\n\nSet up your phone, deliver your speech, and watch it back. Your first reaction will be, \"I look weird and my voice sounds wrong.\" That's just what everyone thinks when they see themselves on video. Push past it.\n\nWhat you'll actually notice is that you look way more composed than you feel. The nervousness that feels enormous on the inside is barely visible on the outside. Your hands might shake a little. Your voice might waver for a second. But you don't look like a disaster. You look like a normal person giving a speech.\n\nThis gap between how nervous you feel and how nervous you look is one of the most confidence-building discoveries you can make. Once you see it, you stop worrying about visible anxiety because you know it's mostly invisible.",
      },
      {
        heading: 'Reframe the Stakes',
        level: 2,
        content:
          "Your brain is telling you this speech has to be perfect. It's lying.\n\nHere's the truth about wedding speeches: the bar is on the floor. Say something genuine about the couple, don't insult anyone, keep it under five minutes, and you've succeeded. That's it. You're not being graded. There's no wedding speech committee reviewing your performance.\n\nThe couple asked you because they love you, not because they expect a TED Talk. Your aunt doesn't care about your comedic timing. The groomsmen aren't going to roast you for a shaky voice. Everyone in that room is rooting for you.\n\nWhen you lower the stakes in your mind, your confidence rises automatically. You're not performing brain surgery. You're saying nice things about people you love. You're already qualified.",
      },
      {
        heading: 'Build a Strong Opening',
        level: 2,
        content:
          "Confidence in the first ten seconds creates momentum for the rest. If your opening is solid, the rest of the speech carries itself. If your opening is shaky, you spend the whole speech trying to recover.\n\nMemorize your first two sentences. Not the whole speech, just the opening. You want to be able to look up, make eye contact, and deliver those lines without glancing at your notes. This projects confidence immediately, even if your hands are shaking behind the podium.\n\nChoose an opening that's comfortable for you. If humor isn't your thing, don't start with a joke. Start with something genuine: \"For those who don't know me, I'm Sarah's oldest friend. We've known each other since we were seven.\" Simple, personal, true. That's confidence.",
      },
      {
        heading: 'Visualization (The Kind That Actually Works)',
        level: 2,
        content:
          "There's a version of visualization that's garbage: sitting on a yoga mat imagining the crowd cheering while you nail every line like a movie montage. That doesn't work.\n\nHere's the version that works: close your eyes and walk through the actual experience in realistic detail. You stand up. Your heart is beating fast. You walk to the microphone. You look at your notes. You start speaking. Your voice is a little shaky at first. Then it steadies. You get a laugh at the joke. You see the bride tearing up. You finish. People clap. You sit down and exhale.\n\nNotice how that includes the nervousness? That's the key. Effective visualization includes the discomfort and your ability to handle it. You're not imagining perfection. You're imagining competence despite imperfection. That's realistic, and your brain believes it.",
      },
      {
        heading: 'The Day-Of Confidence Boost',
        level: 2,
        content:
          "On the wedding day itself, a few quick wins can give your confidence one last bump.\n\nWear something you feel great in. Not just appropriate, but genuinely confident-making. If your jacket fits perfectly and you look good, you'll stand taller.\n\nDo a power pose in private. Yes, the research on power posing is debated. But standing in a bathroom with your arms up for two minutes at least gets you breathing, loosened up, and smiling at how ridiculous you look. That smile helps.\n\nTalk to someone encouraging right before. Not someone who'll say \"don't be nervous!\" (useless), but someone who'll say, \"You're going to be great, and I'm excited to hear it.\" Borrow their confidence for a minute.\n\nRemember: you've practiced. You've prepared. You know your material. The rest is just showing up and delivering. And you can do that.",
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
          "There's a specific kind of pain that comes with celebrating someone's happiest day while carrying grief for someone who should have been there. Maybe you're the best man and the groom's father passed away last year. Maybe you're the maid of honor and the bride lost a sibling. Maybe the loss is your own, and you're standing up to speak while wishing someone was sitting in the front row.\n\nThis article won't pretend to make that easy. It isn't easy. But it can be navigated with thoughtfulness, and your speech can honor both the joy of the day and the weight of the absence. Those two things can coexist. They have to, because that's what love looks like sometimes.",
      },
      {
        heading: 'Talk to the Couple First',
        level: 2,
        content:
          "Before you write a single word, have a conversation with the couple about how they want the loss acknowledged. This isn't a decision you should make alone.\n\nSome couples want the person mentioned by name. They want that moment of acknowledgment because pretending they're not missing someone feels worse than the sadness. Other couples have already planned their own tribute, a reserved seat, a photo at the table, a moment of silence, and they'd prefer the speeches to focus on celebration.\n\nThere's no wrong answer, but it's their wedding, and their grief, and their call. Ask them directly: \"Would you like me to mention [name] in my speech, or would you prefer I keep it focused on the two of you?\" They'll be grateful you asked instead of guessing.",
      },
      {
        heading: 'How to Mention the Loss Without Derailing the Joy',
        level: 2,
        content:
          "If the couple wants the loss acknowledged, the goal is to honor the person's memory while keeping the overall tone of the speech warm and forward-looking. This is a needle to thread, but it can be done beautifully.\n\nKeep the mention brief and specific. One to three sentences is usually right. Enough to be meaningful, not so much that it becomes a eulogy. This is still a wedding speech.\n\nAnchor it in something positive. Instead of dwelling on the absence, connect the person's memory to the joy of the day. \"Tom's dad would have been the first one on the dance floor tonight, and I know he'd be incredibly proud\" does two things at once: it acknowledges who's missing and imagines them in the celebration.\n\nAvoid euphemisms if the couple is comfortable with directness. \"Since we lost David\" is often more respectful than \"since David went to a better place.\" But again, follow the couple's lead on language.",
      },
      {
        heading: 'Where to Place the Mention in Your Speech',
        level: 2,
        content:
          "Placement matters more than you'd think.\n\nEarly in the speech works well because it gets the emotional moment out of the way before the stories and toasts. You acknowledge the loss, give the room a moment, and then transition into the celebration. Something like, \"Before I get into the embarrassing stories, I want to take a moment to remember someone who's very much with us in spirit today.\"\n\nNear the end, just before the toast, also works. It becomes the emotional peak before you raise your glass. \"As we celebrate tonight, I know there's someone watching who couldn't be prouder. To [person's name], and to the beautiful couple.\"\n\nAvoid putting it in the middle of a lighthearted section. The tonal whiplash from a funny story to a grief mention and back to humor is jarring for everyone, including you.",
      },
      {
        heading: 'Managing Your Own Emotions',
        level: 2,
        content:
          "If the loss is personal to you, speaking about it in front of a crowd is going to be hard. Give yourself permission for that.\n\nPractice the section about the loss more than any other part of your speech. Read it out loud, alone, over and over until you can get through it without breaking down. Repetition dulls the sharpness of the emotional trigger. It doesn't eliminate it, but it makes it manageable.\n\nHave a plan for if you do get emotional. A pause, a sip of water, a deep breath. The room will wait. Nobody is judging you for feeling something real.\n\nConsider having a backup reader. If you truly can't get through that section, arrange for a friend to be ready to step in and read those specific lines for you. There's no shame in that. It's actually a beautiful act of vulnerability and planning.",
      },
      {
        heading: 'When the Loss Is Very Recent',
        level: 2,
        content:
          "If the loss happened in the weeks or months immediately before the wedding, everything is amplified. The grief is raw, the couple is navigating an impossible emotional landscape, and the wedding itself might feel surreal.\n\nIn this situation, less is often more. A brief, honest acknowledgment may be all anyone can handle. \"I know this day has a bittersweet edge to it. We all feel it. But I also know that [person] would want nothing more than to see these two happy, and that's exactly what we're here to do.\"\n\nCheck in with the couple close to the wedding day, not just weeks before. Their feelings about how to handle the loss in speeches may have evolved as the day approaches.\n\nBe prepared for the possibility that the couple decides they don't want it mentioned at all. Fresh grief is unpredictable, and they may need the speeches to be a pure escape. Respect that completely.",
      },
      {
        heading: 'Sample Language You Can Adapt',
        level: 2,
        content:
          "Sometimes having a starting point makes all the difference. Here are a few approaches you can modify for your situation.\n\nThe warm acknowledgment: \"I want to take a moment to remember [name], who would have loved every minute of today. [He/She/They] had a way of making every room brighter, and I think we can all feel that presence here tonight.\"\n\nThe quality connection: \"[Bride/Groom] gets [his/her/their] kindness from [parent's name]. And if you've ever been on the receiving end of that kindness, you know exactly what I mean. That legacy is very much alive in this room.\"\n\nThe brief and direct: \"We're missing someone important today. We all know that. But I think [name] would tell us to stop being sad and start dancing. So that's what we're going to do.\"\n\nThe toast inclusion: \"I'd like to raise my glass to the couple, to everyone who made today possible, and to those who are here in spirit. We love you all.\"",
      },
      {
        heading: 'Be Gentle with Yourself',
        level: 2,
        content:
          "Giving a wedding speech while grieving is one of the hardest things a person can do. You're holding two enormous emotions at the same time and trying to articulate both of them in front of a crowd.\n\nYou don't have to do it perfectly. You don't have to be strong. You just have to be honest. If your voice cracks, that's okay. If you cry, that's okay. If you need to stop and breathe, that's okay.\n\nThe person you're missing would be proud of you for showing up. The couple will be grateful you tried. And the room will hold you in that moment, because that's what people do at weddings when love and loss occupy the same space.\n\nYou've got this. And you're not carrying it alone.",
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
          "So you're the quiet one. The one who listens more than talks. The one who'd rather text than call. And somehow, you agreed to stand in front of everyone at a wedding and speak into a microphone. What were you thinking?\n\nYou were thinking that you love someone enough to say yes even though it terrifies you. And honestly, that's the most beautiful reason to give a speech. The couple didn't pick you because you're a natural performer. They picked you because you matter to them. Let's work with what you've got.",
      },
      {
        heading: 'Shy and Bad at Public Speaking Are Not the Same Thing',
        level: 2,
        content:
          "Let's clear this up immediately. Being shy means you're reserved in social situations. It says nothing about your ability to prepare and deliver a three-minute speech you've written in advance.\n\nShy people can be phenomenal speakers precisely because they take it seriously. You're not going to wing it. You're not going to ramble. You're going to prepare thoroughly, say what you mean, and sit down. That's a better speech than 80% of what happens at weddings.\n\nThe challenge isn't the speech itself. It's the anxiety leading up to it and the energy it takes. Both of those are manageable with the right approach.",
      },
      {
        heading: 'Write It Like a Letter',
        level: 2,
        content:
          "If the thought of \"giving a speech\" paralyzes you, don't write a speech. Write a letter to the couple. Grab a pen (or open your notes app) and just... talk to them on paper.\n\n\"Dear [Couple], I've been trying to figure out what to say today, and the truth is...\"\n\nThat framing takes the performance pressure away. You're not crafting rhetoric. You're telling your friends how you feel. And when you deliver it, you can even frame it that way: \"I wrote this as a letter because that felt more me.\" The audience will love that honesty.\n\nSome of the most moving speeches I've ever heard started with, \"I'm not great at this stuff, so I wrote this down.\" Instant audience sympathy, instant authenticity, and the bar drops to \"just be real,\" which is something you can absolutely clear.",
      },
      {
        heading: 'Keep It Short (Seriously)',
        level: 2,
        content:
          "A shy person's ideal speech is 90 seconds to two minutes. That's four to six paragraphs. That's one story and one heartfelt statement. That's it.\n\nNo one has ever left a wedding saying, \"The shy person's speech was too short.\" They've said, \"That was so sweet and genuine.\" Short speeches get more credit than long ones because people are impressed by brevity.\n\nHere's a formula that works:\n\nParagraph 1: Who you are and your relationship to the couple.\nParagraph 2: One specific memory or quality that shows who the couple really is.\nParagraph 3: What you've noticed since they got together.\nParagraph 4: Your wish for their future.\n\nDone. That's a complete, beautiful speech. You can write that. You can deliver that.",
      },
      {
        heading: 'Tricks to Feel Less Exposed',
        level: 2,
        content:
          "The worst part of being shy at a microphone is the feeling that everyone is staring at you. Here's how to reduce that.\n\nDon't scan the crowd. Pick three or four friendly faces and alternate between them. Your best friend. Your partner. The bride's mom who's already crying. Speaking to specific people feels like conversation. Scanning a crowd feels like being on trial.\n\nHold something. Your speech, a glass, the podium. Shy people often don't know what to do with their hands, and having something to hold solves that problem.\n\nStand near the couple if possible. Having familiar people next to you changes the energy completely. You're not alone up there. You're with your people.\n\nIf there's a podium or lectern, use it. It's a physical barrier between you and the audience, and that barrier is psychologically comforting. If there isn't one, standing near a table or any piece of furniture helps more than you'd think.",
      },
      {
        heading: 'The Power of Admitting You\'re Nervous',
        level: 2,
        content:
          "Here's a secret: saying \"I'm nervous\" out loud is like a cheat code. The moment you admit it, half the pressure evaporates.\n\n\"Anyone who knows me knows that speaking in front of a crowd is not exactly my thing. But some people are worth being uncomfortable for, and [name] is definitely one of those people.\"\n\nThat opening accomplishes three things. It explains your nerves. It makes the audience root for you. And it transitions into why you're there, which is love for the couple. You've turned your biggest weakness into your strongest moment, and you're only two sentences in.\n\nThe audience doesn't want perfection. They want realness. And a shy person pushing through their comfort zone to honor a friendship is about as real as it gets.",
      },
      {
        heading: 'After the Speech: How to Recover',
        level: 2,
        content:
          "The moment you finish speaking, a wave of relief is going to wash over you like nothing you've felt before. Enjoy it. You earned it.\n\nPeople are going to come up to you and say, \"That was so great!\" Resist the urge to deflect with, \"Oh, it was nothing\" or \"I was so nervous.\" Just say, \"Thank you.\" Accept the compliment. You did something hard.\n\nGive yourself permission to retreat for a bit. Go to the bathroom, step outside, find a quiet table in the corner. You just burned a lot of social energy, and you need to recharge. The party will still be there when you're ready.\n\nAnd then, at some point during the night, you'll realize you actually did it. And that feeling, the quiet pride of a shy person who showed up and spoke from the heart, is something nobody can take from you.",
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
          "Ah, the eternal question. Right up there with \"is it okay to wear white\" and \"do I really have to do the chicken dance.\" Except this one actually matters, because the line between \"pleasantly loosened up\" and \"slurring through a story about the groom's ex\" is thinner than you think.\n\nLet's get real about alcohol and wedding speeches. Not preachy. Not judgmental. Just honest about what works, what doesn't, and where the sweet spot is.",
      },
      {
        heading: 'The One-Drink Rule (And Why It Exists)',
        level: 2,
        content:
          "The conventional wisdom is one drink before your speech. And for once, conventional wisdom is actually right.\n\nOne drink, consumed 20 to 30 minutes before you speak, takes the edge off without dulling your mind. Your hands are a little steadier. Your social anxiety drops a notch. You feel more like \"relaxed you\" instead of \"terrified you.\" That's the sweet spot.\n\nThe problem is that one drink at a wedding is incredibly hard to stick to. The champagne is flowing during the ceremony. There's an open bar at cocktail hour. Your buddy keeps handing you drinks. And anxiety makes you reach for the glass more often.\n\nThis is why you need a plan, not just willpower. Decide in advance: \"I will have one drink at cocktail hour, and then water until after my speech.\" Tell someone to hold you to it. Willpower is a muscle, and it's weakest when you're nervous.",
      },
      {
        heading: 'What Two Drinks Does',
        level: 3,
        content:
          "Two drinks feels great going in. You're warm, social, funny. You can feel your anxiety melting. You think, \"This is the version of me that should give a speech.\"\n\nBut two drinks also slows your reaction time, subtly slurs your speech (even if you can't hear it, the audience can), makes you speak faster than you realize, and, most importantly, impairs your judgment about whether you're impaired.\n\nTwo drinks is the zone where you start ad-libbing. Adding jokes that weren't in the script. Going off on tangents. Saying the thing you decided not to say. It feels spontaneous and fun to you. It often comes across as scattered and slightly too much to the audience.\n\nCan some people handle two drinks and give a great speech? Sure. But \"some people\" is not a risk management strategy.",
      },
      {
        heading: 'What Three-Plus Drinks Does',
        level: 3,
        content:
          "No. Just no.\n\nThree drinks before a wedding speech is how you end up in a viral video you didn't consent to. It's how inside jokes that are only funny to two people get explained at length to a room of 150. It's how the bride's grandmother learns about that time in Cancun.\n\nIf you've had three drinks, you're not giving a speech. You're performing an improvised one-person show with no filter. The content might be hilarious to you in the moment. It will not be hilarious in the cold light of morning.\n\nIf you've already passed the two-drink mark before your speech and there's still time, switch to water immediately. Eat something. Delay if you can. But if you're reading this before the wedding (which you hopefully are), just... don't let it happen.",
      },
      {
        heading: 'The Zero-Drink Option',
        level: 2,
        content:
          "Completely valid. Underrated, even.\n\nPlenty of people don't drink, and they give wonderful speeches. The nervousness you feel without alcohol is actually useful. It sharpens your focus, keeps you on script, and gives your delivery a raw, genuine energy that tipsy speakers can't replicate.\n\nIf you don't drink, don't let anyone pressure you into it \"for courage.\" And if you do drink but want to skip it for this particular event, that's smart, not boring.\n\nHave a non-alcoholic drink in your hand so people stop asking. A club soda with lime looks exactly like a gin and tonic. Nobody needs to know, and nobody will ask.",
      },
      {
        heading: 'Timing Your Drinking',
        level: 2,
        content:
          "If you're going with the one-drink approach, timing matters.\n\nDon't drink too early. A drink at noon for a 6 PM speech does nothing for your nerves. It just means you drank at noon.\n\nDon't drink right before. You want the alcohol to be in your system, not hitting you mid-speech. Twenty to thirty minutes before is ideal.\n\nAvoid shots. I know someone offered. I know it seemed like a good bonding moment. Shots hit differently than a glass of wine or a beer. They spike your blood alcohol fast and impair you faster. A slow sip of something is always better than a quick shot of something.\n\nEat before you drink. An empty-stomach drink at a wedding, where lunch was \"half a granola bar because I was too nervous to eat,\" hits like a truck. Eat real food. Then have your one drink. Then speak.",
      },
      {
        heading: 'The Real Talk',
        level: 2,
        content:
          "Here's the uncomfortable truth: if you need more than one drink to give a speech, the alcohol isn't solving your problem. It's masking it. The underlying issue is anxiety, and there are better tools for that. Practice, preparation, breathing techniques, or even a conversation with your doctor about beta-blockers.\n\nAlcohol is a depressant that temporarily lowers inhibitions. It doesn't make you better at speaking. It makes you care less about being bad at it. That's a meaningful difference.\n\nThe best version of your speech is the one you deliver with full control of your faculties, full memory of the moment, and full ability to absorb the reactions of the people you love. One drink won't take that away. Three might.",
      },
      {
        heading: 'After the Speech',
        level: 2,
        content:
          "Once your speech is done? Go wild. Well, within reason. It's still someone's wedding.\n\nBut seriously, the relief of finishing your speech is the best drink you'll have all night. Follow it up with an actual drink, hit the dance floor, and enjoy the rest of the evening knowing you did the thing.\n\nThe post-speech drink tastes better than the pre-speech drink ever could. That's the reward. Earn it sober, enjoy it after.",
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
          "The content of your speech matters. But so does when you deliver it. Give a great speech at the wrong time, and people are distracted, hungry, or three sheets to the wind. Give a decent speech at the right time, and the room is yours.\n\nThe timing of wedding speeches varies wildly depending on culture, venue, and the couple's preferences. But there are some universal principles about when people are most receptive and when you're setting yourself up for failure.",
      },
      {
        heading: 'The Most Common Timing Options',
        level: 2,
        content:
          "There are basically four windows for wedding speeches at a typical reception, and each has pros and cons.\n\nBefore dinner (during cocktail hour or right as guests sit down). During dinner (between courses). After dinner (before dancing starts). During the party (later in the evening, often with a DJ intro).\n\nLet's break down each one so you can advocate for the best slot if you have any say in the matter.",
      },
      {
        heading: 'Before Dinner: The Early Bird Slot',
        level: 3,
        content:
          "Speeches before dinner, usually right after the couple is introduced and everyone sits down, are increasingly popular and for good reason.\n\nPros: People are sober, attentive, and seated. The energy is high because the party just started. You get it over with early, which means you can actually enjoy your meal instead of pushing food around your plate while rehearsing in your head. The couple gets to hear the speeches while they're still fully present and not exhausted from hours of celebration.\n\nCons: People might be hungry and slightly antsy. If there are a lot of speakers, you risk delaying dinner too long. Some guests are still settling in during the first few minutes.\n\nBest for: Nervous speakers who want to get it over with, weddings with multiple speeches, and couples who want to be present for every word.",
      },
      {
        heading: 'During Dinner: The Classic Approach',
        level: 3,
        content:
          "The traditional model is speeches between courses. First course served, first speech. Second course served, second speech. And so on.\n\nPros: Built-in breaks between speakers so the audience doesn't get speech fatigue. People have food in front of them, which keeps them happy. It gives the event a structured, flowing feel.\n\nCons: You're competing with food. When the entree arrives, people's attention splits between your heartfelt words and the salmon. The kitchen is on a schedule, and sometimes your speech gets rushed or delayed because the next course is ready. Also, the clinking of silverware is a real thing.\n\nBest for: Weddings with two or three speakers max, sit-down dinners with clear courses, and couples who want a traditional feel.",
      },
      {
        heading: 'After Dinner: The Sweet Spot',
        level: 3,
        content:
          "Speeches after dinner but before the party kicks into high gear is many wedding planners' preferred slot, and it's easy to see why.\n\nPros: People are fed, comfortable, and settled in. They're not distracted by food or hungry stomachs. The energy in the room is warm and receptive. There's a natural transition from \"dinner\" to \"speeches\" to \"party\" that feels right.\n\nCons: Some guests have had quite a bit to drink by this point, which can mean a louder, more restless audience. If dinner ran long, people are ready to dance and might be antsy through a long speech.\n\nBest for: Most weddings, honestly. It's the safest, most reliable slot. If you have a choice, this is usually the one to pick.",
      },
      {
        heading: 'During the Party: Proceed with Caution',
        level: 3,
        content:
          "Some weddings have speeches later in the evening, sometimes between songs, sometimes as a \"surprise\" moment. This is risky.\n\nPros: The energy is high, people are in a good mood, and there's a party atmosphere that can make speeches feel celebratory.\n\nCons: People are drunk. The dance floor is competing with the microphone. The couple is tired. Guests are scattered around the venue instead of seated and attentive. Getting people to be quiet is like herding cats.\n\nIf your speech is scheduled for late in the evening, keep it very short. Two minutes max. The audience's attention span has been drinking right along with them.\n\nBest for: Very short, very funny toasts. Not for anything heartfelt or nuanced.",
      },
      {
        heading: 'How to Influence the Timing',
        level: 2,
        content:
          "If you're a key speaker (best man, maid of honor, parent), you usually have some input on timing. Here's how to advocate for yourself without being difficult.\n\nTalk to the couple or the wedding planner early. Say something like, \"I want to make sure my speech lands well. Is there flexibility in when we do toasts?\" Most planners are happy to discuss options.\n\nIf you're nervous and want to go first, say so. Going first is actually easier in many ways because you set the tone instead of trying to follow someone else. Plus, once you're done, you're done. The rest of the night is yours.\n\nIf there are multiple speakers, suggest going in order of relationship: parents, then wedding party, then anyone else. This creates a natural flow and ensures the most important speeches happen when people are most attentive.",
      },
      {
        heading: 'The Universal Rule',
        level: 2,
        content:
          "Regardless of when your speech falls, there's one rule that always applies: don't speak while people are being served, standing in a buffet line, or transitioning between activities. Wait until butts are in seats and plates are on tables. Five minutes of patience can be the difference between a captive audience and a distracted one.\n\nAnd if you're the couple reading this, do your speakers a favor and give them a real moment. Don't squeeze speeches between the buffet and the first dance while the caterer is clearing plates. Give them a slot, make sure the DJ gets the room quiet, and let them shine. They wrote something for you. The least you can do is give them a room that's paying attention.",
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
          "You've written the speech. You've practiced it. Now you need to put it on paper so you can actually read it at the microphone without squinting, losing your place, or shuffling through a novel-length document.\n\nPrinting your speech sounds simple, but there's a difference between \"I printed it\" and \"I printed it in a way that actually helps me deliver it well.\" The formatting choices you make now will directly affect your confidence and composure at the microphone. Let's get this right.",
      },
      {
        heading: 'Font and Size: Bigger Than You Think',
        level: 2,
        content:
          "Here's the number one mistake: printing your speech in 12-point Times New Roman like it's a college essay. You're not submitting it for a grade. You're reading it in a dimly lit venue, possibly with shaking hands, while 150 people watch.\n\nMinimum 16-point font. Honestly, 18 is better. You should be able to glance down and find your place instantly, not search for it.\n\nUse a clean, sans-serif font. Arial, Helvetica, or Calibri all work well. They're easier to read quickly than serif fonts like Times New Roman. This isn't about aesthetics. It's about readability under pressure.\n\nBold key words or phrases that anchor each paragraph. When you glance down, your eyes will land on the bold text first, which helps you find your place and remember what comes next.",
      },
      {
        heading: 'Spacing and Layout',
        level: 2,
        content:
          "Double-space the entire thing. Minimum. Some people triple-space and it's not overkill. You need white space so your eyes can track easily from line to line.\n\nUse one-inch margins on all sides. Don't try to cram everything onto one page by shrinking the margins. It's okay to use multiple pages.\n\nLeft-align everything. Don't justify the text (where both edges are perfectly straight). Justified text creates uneven word spacing that makes it harder to read quickly.\n\nStart each new thought or paragraph with a clear line break. When you pause in your speech, you should be able to see the next section starting clearly on the page.\n\nPrint on one side only. You don't want to be flipping pages and reading the back while the audience sees you fumbling with paper.",
      },
      {
        heading: 'Paper Choices That Actually Matter',
        level: 2,
        content:
          "Regular printer paper works fine, but if you want to level up, use a slightly heavier cardstock. Something in the 24 to 32 lb range. It doesn't flop around, it doesn't shake visibly when your hands tremble, and it feels more substantial in your hands.\n\nMatte paper, not glossy. Glossy paper catches light and can create glare that makes it hard to read, especially under venue lighting.\n\nIf you're printing on multiple pages, number them. In the bottom right corner, in a smaller font: \"1 of 3,\" \"2 of 3,\" etc. If you drop your papers (it happens), you'll be able to reassemble them instantly.\n\nDo NOT staple the pages together. You want to slide the finished page behind the stack smoothly, not flip pages like a book. The slide is silent and subtle. The stapled flip is visible and distracting.",
      },
      {
        heading: 'Mark Up Your Printed Copy',
        level: 2,
        content:
          "Once it's printed, grab a pen and annotate it. This is your performance copy, not a clean document.\n\nDraw a slash (/) where you want to pause briefly. Draw a double slash (//) where you want a longer pause, like after an emotional moment or before a punchline.\n\nUnderline words you want to emphasize. Circle the spots where you need to look up at the audience.\n\nWrite \"SLOW DOWN\" at the top of the first page. Because you will talk too fast. Everyone does. Having it written there is a physical reminder.\n\nIf there's a word you always stumble on, write the phonetic pronunciation next to it. No shame in that. Better to see \"juh-NAIR-us\" on the page than to stumble over \"generous\" for the third time.",
      },
      {
        heading: 'The Phone Backup (Because Technology)',
        level: 2,
        content:
          "Always have a digital backup on your phone. Open it in a notes app (not a PDF, which requires pinch-zooming). Increase the font size. Set your screen timeout to \"never\" so it doesn't lock mid-speech.\n\nBut think of your phone as the backup, not the primary. Reading from a phone looks less polished than reading from paper. The screen glare can be distracting. And there's always the risk of a notification popping up mid-sentence. Nothing kills a heartfelt moment like a DoorDash alert.\n\nIf you must read from your phone, hold it at chest height, not down at your waist. Waist-level reading means you're talking into your shoes instead of projecting to the room.",
      },
      {
        heading: 'Print Two Copies',
        level: 2,
        content:
          "One for your jacket pocket. One for your bag, your car, or with a trusted friend. If one gets lost, stained, or trampled during cocktail hour, you have a backup.\n\nThis sounds paranoid. It's not. It's the same reason you bring a phone charger. Redundancy is the enemy of anxiety.\n\nGive the couple a clean copy after the wedding if they'd like one. Some couples love having the written speeches as a keepsake. Print a nice version for them on good paper, no annotations. That's a thoughtful touch.",
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
          "You're going to stand in front of everyone the couple knows and speak into a microphone. For those few minutes, you're the center of attention. What you're wearing matters, not because people are judging your outfit, but because what you wear directly affects how you feel, how you move, and how you carry yourself.\n\nThis isn't about fashion. It's about function. The right outfit makes you more confident and less distracted. The wrong one gives you one more thing to worry about at the worst possible time.",
      },
      {
        heading: 'The Number One Rule: Wear Something You\'ve Worn Before',
        level: 2,
        content:
          "A wedding speech is not the time to debut a new outfit. That brand-new suit might fit differently than you expected. Those new shoes might pinch after an hour. That dress might ride up when you raise your arm to toast.\n\nWear something you know works. Something you've sat in, stood in, walked in, and felt good in. Something where you're not going to be tugging, adjusting, or wondering if you look okay. You need your brain focused on your speech, not on your outfit.\n\nIf you did buy something new for the wedding, wear it around the house for a few hours first. Sit in it. Stand in it. Practice your speech in it. Find the problems before 150 people are watching you discover them.",
      },
      {
        heading: 'Pockets: Where to Put Your Speech',
        level: 2,
        content:
          "If you're reading from printed notes (which you should), you need somewhere to keep them. This is surprisingly important.\n\nFor suits and sport coats: the inside breast pocket is ideal. Your speech is hidden, accessible, and you can pull it out in one smooth motion. Practice the pull. Seriously.\n\nFor dresses without pockets (most of them, annoyingly): have a small clutch at your table, or tuck the speech under your napkin or plate until you're called up. Or, radical idea, have a friend hold it and hand it to you as you walk up.\n\nDo not put your speech in your back pocket and sit on it all through dinner. You'll pull out a crumpled, sweaty mess. That's not the vibe.\n\nIf you're reading from your phone, this is simpler. But make sure your outfit actually has accessible pockets. There's nothing graceful about fishing a phone out of a tiny jacket pocket while a room watches.",
      },
      {
        heading: 'What to Avoid (From People Who Learned the Hard Way)',
        level: 2,
        content:
          "Anything that makes noise. Bangly bracelets, jangly earrings, or chains that clink when you gesture. The microphone picks up everything, and your dramatic hand gesture becomes a percussion solo.\n\nAnything you'll fidget with. If you know you play with rings, buttons, or necklaces when you're nervous, simplify your accessories. Remove the fidget bait.\n\nAnything that requires constant adjustment. Strapless dresses that you need to tug up. Ties that won't stay centered. Shirts that untuck. Anything that pulls your attention away from speaking and toward managing your clothes.\n\nBrand-new shoes. Your feet will hate you within an hour, and standing at a mic with foot pain is a special kind of distraction. If new shoes are non-negotiable, break them in first. Really break them in. Not just \"wore them around the store.\"",
      },
      {
        heading: 'Colors and Patterns: Don\'t Upstage the Couple',
        level: 2,
        content:
          "You're going to be photographed and filmed. A lot. During your speech, you're the most photographed person in the room after the couple.\n\nStick to solid colors or subtle patterns. Bold prints look great in person but can be distracting on camera and in photos. You want the focus to be on your face and your words, not on your neon geometric shirt.\n\nAvoid white or ivory (unless you want to become a cautionary tale). Avoid anything that's so attention-grabbing it takes away from the couple. This is their day. You're a supporting character, and your outfit should reflect that.\n\nThat said, don't be so subdued that you feel like a boring version of yourself. Wear something that makes you feel good. A color that suits you. A style that's \"you.\" Confidence comes from feeling like yourself, not from wearing a costume.",
      },
      {
        heading: 'The Final Check: What to Look For Before You Walk Up',
        level: 2,
        content:
          "Right before your speech, do a quick scan.\n\nTeeth: Nothing stuck? Good.\n\nHair: Doing what it's supposed to? Good.\n\nCollar/lapels: Lying flat? Good.\n\nShirt tucked in properly (if applicable)? Good.\n\nFly. Yes, check it. Don't learn this lesson publicly.\n\nSpeech in hand or pocket? Good.\n\nNothing in your other hand? Put down the drink. Both hands should be free (or one holding your speech, one free for gesturing).\n\nYou look great. Go give your speech.",
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
          "Every wedding speech guide tells you to \"be yourself\" and \"speak from the heart.\" Great advice, but it leaves out the part where \"being yourself\" includes knowing the unwritten rules that separate a great speech from an accidentally offensive one.\n\nThese aren't in any wedding planning book. They're the things you only learn after watching someone break them and seeing the bride's face fall. Consider this your cheat sheet for not being that person.",
      },
      {
        heading: 'The Ex Rule',
        level: 2,
        content:
          "Do not mention exes. Not the groom's ex-girlfriend. Not the bride's ex-husband. Not even as a joke. Not even if the couple brings it up themselves. Not even if the ex is actually at the wedding (it happens).\n\n\"I knew they were meant to be because after dating [ex's name], anyone would look good.\" No. Absolutely not.\n\nThe only acceptable reference to previous relationships is something incredibly vague, like, \"I watched [bride] go through some tough times before she found [groom].\" Even that's pushing it. When in doubt, leave it out.",
      },
      {
        heading: 'The Time Rule',
        level: 2,
        content:
          "Five minutes. That's your maximum. Three is ideal. Two is perfectly fine.\n\nI know you have so much you want to say. I know every story feels essential. It's not. The couple and guests will enjoy a focused three-minute speech infinitely more than a meandering seven-minute one.\n\nHere's the thing about going long: you never realize you're doing it. The room gets restless, people start checking their phones, and the bride is smiling politely while internally calculating when you'll stop. Time your speech during practice, and if it's over five minutes, cut it. Ruthlessly.\n\nNobody has ever complained that a wedding speech was too short. Literally nobody in the history of weddings.",
      },
      {
        heading: 'The \"Roast\" Boundaries',
        level: 2,
        content:
          "Some gentle teasing is great. A funny story that the couple will laugh at is perfect. But there's a very clear line between a roast and a humiliation, and weddings are not the place to find it.\n\nStories that are funny to tell should also be funny for the couple to hear. If the story makes the groom look stupid, immature, or like someone you wouldn't want to marry, it doesn't belong in the speech. Even if he laughed about it last week.\n\nAvoid embarrassing stories about the couple's early relationship, especially anything involving other people, bad decisions, or behavior they've outgrown. What was funny at 22 is not necessarily funny at 32, and definitely not funny in front of grandma.\n\nThe test: Would the couple be happy for their boss to hear this story? If no, cut it.",
      },
      {
        heading: 'The Alcohol and Drug References Rule',
        level: 2,
        content:
          "\"We were so wasted that night\" is not a charming story at a wedding. I don't care how legendary the night was. The audience includes the couple's parents, grandparents, coworkers, and possibly children. Read the room.\n\nYou can reference a fun night out without detailing how many shots were consumed. \"The night we all went out in Vegas and ended up at that terrible karaoke bar\" is fine. \"The night we did shots until 4 AM and [groom] threw up in a planter\" is not.\n\nSame goes for any substance references. Even in states or countries where certain things are legal, a wedding speech isn't the platform. Save those stories for the bachelor party or a private dinner.",
      },
      {
        heading: 'The Inside Joke Problem',
        level: 2,
        content:
          "Inside jokes are a trap. They feel amazing to deliver because the three people who get it will laugh hysterically. The other 147 people in the room will sit in confused silence.\n\nIf you want to include an inside joke, you have to set it up so the audience understands it too. \"[Bride] and I have this thing where we...\" and then explain the context. If the explanation takes too long or the joke isn't funny once explained, it shouldn't be in the speech.\n\nThe best wedding speeches tell stories that everyone can connect with, even if they don't know the couple well. Love, friendship, growth, loyalty... these are universal. \"Remember that thing with the hamster\" is not.",
      },
      {
        heading: 'Don\'t Make It About You',
        level: 2,
        content:
          "Your speech is about the couple. Not about you. Not about your friendship journey. Not about how hard it was to write this speech.\n\nYes, you're the one speaking. Yes, your perspective matters. But the lens should always be on the couple. \"I've known Sarah for 15 years\" is a fine setup. Spending three minutes on your shared history before mentioning the groom is not.\n\nA good rule of thumb: the couple's names should appear in your speech more than your own name. If you say \"I\" more than you say their names, rewrite.\n\nAnd please, please, do not use the speech as an opportunity to announce your own engagement, pregnancy, or life news. This happens more than you'd think, and it's breathtakingly self-centered.",
      },
      {
        heading: 'The Toast Is Not Optional',
        level: 2,
        content:
          "Every speech ends with a toast. Every single one. It's not a suggestion. It's the signal that your speech is over, and it gives the audience something to do (raise their glasses and drink).\n\nMake it clear. \"Please raise your glass to [couple].\" Don't make it fancy. Don't make it complicated. Don't make people guess whether they should be drinking.\n\nWait for people to actually raise their glasses before you deliver the toast line. A quick \"Everyone got a drink?\" works fine. Then deliver the toast, take a sip, and sit down.\n\nThe toast is your landing. A speech without a toast is a runway without a touchdown. People just... sit there, unsure if you're done. Don't do that to them.",
      },
      {
        heading: 'The Stuff Nobody Says Out Loud',
        level: 2,
        content:
          "Don't reference the cost of the wedding, even jokingly. Don't comment on how much anyone has been drinking. Don't mention divorce statistics. Don't make jokes about marriage being a ball and chain. Those jokes were tired in 1985.\n\nDon't address audience members who might be recently divorced, single, or struggling. \"Don't worry, you'll find someone too\" to a table of single guests is not the kindness you think it is.\n\nDon't wing it. Even if you're confident and charismatic, have something prepared. Impromptu speeches at weddings go wrong more often than they go right.\n\nAnd finally: when in doubt, default to kindness. If you're not sure whether something is appropriate, it probably isn't. The couple's wedding day is not the time to push boundaries. Be generous, be warm, and leave the edgy material for the afterparty.",
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
          "Let's skip the part where we pretend this is a controversial question. It's 2026. AI can write wedding speeches. It can write them quickly, it can write them well, and millions of people are already using it to do exactly that.\n\nThe real question isn't whether AI can write your speech. It's whether the result will actually sound like you, feel personal, and make the couple cry for the right reasons. And the answer is: it depends entirely on how you use it.",
      },
      {
        heading: 'What AI Does Really Well',
        level: 2,
        content:
          "Structure. AI is incredible at structure. It knows that a wedding speech needs an opening, a body, and a toast. It knows the best man speech has different expectations than the father of the bride speech. It knows how to pace a story, set up a joke, and land an emotional moment.\n\nIf you're staring at a blank page with no idea how to organize your thoughts, AI turns \"I have 12 random memories and a lot of feelings\" into a coherent, well-structured speech in minutes. That alone is worth the price of admission.\n\nAI is also great at getting you past the dreaded blank page. The hardest part of writing anything is starting, and AI eliminates that obstacle completely. Even if you rewrite every word, having a draft to react to is infinitely easier than creating from nothing.\n\nTone is another strength. A good AI speech tool knows the difference between a heartfelt maid of honor speech and a funny best man roast. It adjusts vocabulary, humor level, and emotional intensity based on what the occasion calls for.",
      },
      {
        heading: 'What AI Can\'t Do (Without Your Help)',
        level: 2,
        content:
          "AI doesn't know your stories. It can write a beautiful generic paragraph about friendship, but it can't write about the time the bride called you crying from that gas station in New Mexico at 2 AM because her car broke down and you drove four hours to get her. That's your material, and it's the stuff that makes a speech unforgettable.\n\nAI also doesn't automatically know your voice. If you naturally speak in short, punchy sentences, and the AI gives you long, flowing paragraphs, it won't sound like you. The audience knows you. The couple definitely knows you. If your speech sounds like it was written by a committee, people will feel it, even if they can't pinpoint why.\n\nThat's why the best approach isn't \"let AI write my speech\" but rather \"use AI to help me write my speech.\" The distinction matters.",
      },
      {
        heading: 'How to Actually Use AI for Your Wedding Speech',
        level: 2,
        content:
          "Here's the process that works.\n\nStep 1: Brain dump. Write down everything you might want to include. Stories, memories, qualities you love about the couple, inside jokes, the moment you knew they were right for each other. Don't organize it. Just get it out.\n\nStep 2: Feed it to the AI. Give it your raw material, tell it who you are (best man, maid of honor, parent, etc.), and let it create a first draft. The more specific details you provide, the more personal the result.\n\nStep 3: Rewrite aggressively. The AI gives you structure and flow. You give it your voice and your truth. Change any sentence that doesn't sound like something you'd actually say. Add details the AI couldn't know. Remove anything that feels generic.\n\nStep 4: Practice it out loud. This is where you'll catch the sentences that look good on screen but don't feel natural when spoken. Rewrite those in real time.\n\nThe result is a speech that has professional-level structure with your authentic voice. That's the sweet spot.",
      },
      {
        heading: 'The \"Is It Cheating?\" Question',
        level: 2,
        content:
          "No. Next question.\n\nOkay, fine. Let's actually address this. Using AI to write a wedding speech is exactly as much \"cheating\" as using Google to research a paper, using spellcheck on an email, or using a recipe to cook dinner. It's a tool. The intention, the love, and the effort are still yours.\n\nThe couple didn't ask you to speak because they wanted to test your unassisted writing ability. They asked because they want to hear from you on their big day. If AI helps you say what you mean more clearly, more concisely, and more beautifully than you could alone, that's a better outcome for everyone.\n\nProfessional speechwriters have existed for centuries. Hiring one would cost you hundreds of dollars and nobody would bat an eye. AI is just a more accessible version of the same thing.\n\nThat said, a fully AI-generated speech that you didn't personalize is not great. Not because it's cheating, but because it won't have the specific, real details that make a speech land. Put in the effort to make it yours.",
      },
      {
        heading: 'What to Look for in an AI Speech Tool',
        level: 2,
        content:
          "Not all AI writing tools are created equal. A general-purpose chatbot can write you a speech, but a purpose-built wedding speech tool will do it better. Here's what to look for.\n\nCustomization. The tool should ask you questions about your relationship to the couple, specific stories, the tone you want, and details about the wedding. The more it asks, the more personal the output.\n\nTone control. You should be able to specify whether you want funny, heartfelt, short, long, formal, or casual. A good tool doesn't give you one-size-fits-all output.\n\nEditing guidance. The best tools don't just generate a speech and call it done. They help you refine, restructure, and polish. Think of it as a writing partner, not a vending machine.\n\nSpeech-specific knowledge. A tool built for wedding speeches understands the conventions: how long they should be, what topics to avoid, when to use humor versus sincerity, and how to end with a toast. A generic AI might not.",
      },
      {
        heading: 'How Nail The Speech Handles This',
        level: 2,
        content:
          "Full transparency: you're on our website, so yes, we're going to tell you about our tool. But here's why it's worth mentioning.\n\nNail The Speech is built specifically for wedding speeches. We ask you targeted questions about your relationship to the couple, the specific stories and memories you want to include, and the tone you're going for. Then we generate a personalized first draft that sounds like a real speech, not a generic template.\n\nBut here's the part we're most proud of: we don't just hand you a draft and disappear. The tool helps you refine and edit, so the final product is genuinely yours. Your stories, your voice, your emotions, just better organized and more polished than you might have managed at 2 AM the night before.\n\nWe built this because we've all been there. Staring at a blank page, three weeks before the wedding, knowing we want to say something meaningful but having no idea where to start. AI doesn't replace the love behind your words. It just helps you get them out.",
      },
      {
        heading: 'The Bottom Line',
        level: 2,
        content:
          "AI can write your wedding speech. But the best version of that speech is a collaboration between AI and you. Let the technology handle the structure, the pacing, and the polish. You bring the stories, the love, and the truth that only you can provide.\n\nThe result? A speech that sounds like you on your best day. Thoughtful, structured, personal, and delivered with confidence because you know the words are solid.\n\nThat's not cheating. That's being smart. And the couple will never know or care how you got there. They'll just know it meant the world to hear you say those words.",
      },
    ],
    ctaSupportingText: 'Try it yourself, first speech free',
    relatedExamples: ['best-man-speech', 'maid-of-honor-speech', 'father-of-bride-speech'],
    relatedArticles: ['how-to-write-a-wedding-speech', 'how-to-make-wedding-speech-personal'],
    tags: ['AI', 'product', 'bottom-of-funnel'],
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
