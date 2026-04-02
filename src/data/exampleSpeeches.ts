// ============================================================
// Example Speeches Data
// 60 speech categories with test data, will be replaced with
// spreadsheet import later.
// ============================================================

export interface ExampleSpeech {
  slug: string;
  title: string;
  category: string;        // matches SpeechCategory.slug
  tone: 'funny' | 'heartfelt' | 'balanced' | 'roast';
  durationMinutes: number; // estimated reading time
  wordCount: number;
  excerpt: string;         // first ~150 chars for previews
  content: string;         // full speech text
  authorName: string;      // fictional speaker name
  weddingRole: string;     // e.g. "Best Man"
  tags: string[];
}

export interface SpeechCategory {
  slug: string;
  name: string;
  description: string;       // SEO meta description
  shortDescription: string;  // Card-level description
  group: string;             // grouping for filters: "Bridal Party", "Family", "Friends", "Other"
  icon: string;              // emoji
}

// ── 60 Speech Categories ────────────────────────────────────

export const speechCategories: SpeechCategory[] = [
  // Bridal Party
  { slug: 'best-man-speech', name: 'Best Man Speech', description: 'Example best man speeches that are funny, heartfelt, and memorable. Get inspired for your best man toast.', shortDescription: 'Classic best man toasts that nail the laughs and the feels', group: 'Bridal Party', icon: '🤵' },
  { slug: 'maid-of-honor-speech', name: 'Maid of Honor Speech', description: 'Beautiful maid of honor speech examples full of love, humor, and sisterhood. Perfect inspiration for your toast.', shortDescription: 'Heartfelt and funny maid of honor toasts', group: 'Bridal Party', icon: '👗' },
  { slug: 'best-woman-speech', name: 'Best Woman Speech', description: 'Example speeches for when the groom\'s best friend is a woman. Unique, heartfelt, and authentic.', shortDescription: 'When the groom\'s best friend happens to be a woman', group: 'Bridal Party', icon: '💪' },
  { slug: 'man-of-honor-speech', name: 'Man of Honor Speech', description: 'Man of honor speech examples that break tradition beautifully. Funny, touching, and perfectly pitched.', shortDescription: 'Breaking tradition with style and heart', group: 'Bridal Party', icon: '🎩' },
  { slug: 'groomsman-speech', name: 'Groomsman Speech', description: 'Groomsman speech examples for when you\'re not the best man but still want to deliver something great.', shortDescription: 'Supporting role, starring performance', group: 'Bridal Party', icon: '🤝' },
  { slug: 'bridesmaid-speech', name: 'Bridesmaid Speech', description: 'Bridesmaid speech examples that celebrate friendship, love, and unforgettable memories.', shortDescription: 'Celebrating the bride from the heart', group: 'Bridal Party', icon: '💐' },

  // Family. Parents
  { slug: 'father-of-bride-speech', name: 'Father of the Bride Speech', description: 'Touching father of the bride speeches. From proud dad moments to tearful toasts, find your inspiration.', shortDescription: 'A father\'s pride on his daughter\'s big day', group: 'Family', icon: '👨‍👧' },
  { slug: 'mother-of-bride-speech', name: 'Mother of the Bride Speech', description: 'Mother of the bride speech examples full of love, wisdom, and joy. Celebrate your daughter\'s new chapter.', shortDescription: 'A mother\'s love and wisdom for her daughter', group: 'Family', icon: '👩‍👧' },
  { slug: 'father-of-groom-speech', name: 'Father of the Groom Speech', description: 'Father of the groom speeches that welcome new family, share wisdom, and celebrate your son.', shortDescription: 'Welcoming a new family member with pride', group: 'Family', icon: '👨‍👦' },
  { slug: 'mother-of-groom-speech', name: 'Mother of the Groom Speech', description: 'Heartfelt mother of the groom speeches. Share your love for your son and welcome your new daughter.', shortDescription: 'A mother\'s joy as her son starts a new journey', group: 'Family', icon: '👩‍👦' },
  { slug: 'stepfather-of-bride-speech', name: 'Stepfather of the Bride Speech', description: 'Stepfather of the bride speeches that honor blended families with grace, humor, and genuine love.', shortDescription: 'Honoring a special bond in a blended family', group: 'Family', icon: '🫂' },
  { slug: 'stepmother-of-bride-speech', name: 'Stepmother of the Bride Speech', description: 'Stepmother of the bride speech examples. Celebrate your unique relationship with warmth and authenticity.', shortDescription: 'A unique bond celebrated beautifully', group: 'Family', icon: '💝' },
  { slug: 'stepfather-of-groom-speech', name: 'Stepfather of the Groom Speech', description: 'Stepfather of the groom speeches that celebrate chosen family and lasting bonds.', shortDescription: 'Chosen family, genuine pride', group: 'Family', icon: '🤗' },
  { slug: 'stepmother-of-groom-speech', name: 'Stepmother of the Groom Speech', description: 'Stepmother of the groom speech examples full of warmth and celebration.', shortDescription: 'Welcoming with open arms', group: 'Family', icon: '🌸' },

  // Family. Siblings
  { slug: 'brother-of-bride-speech', name: 'Brother of the Bride Speech', description: 'Brother of the bride speeches, from protective big brother to hilarious little brother. Find your style.', shortDescription: 'Brotherly love meets wedding day magic', group: 'Family', icon: '👦' },
  { slug: 'sister-of-bride-speech', name: 'Sister of the Bride Speech', description: 'Sister of the bride speech examples that celebrate sisterhood, shared memories, and lifelong bonds.', shortDescription: 'Sisterhood at its finest', group: 'Family', icon: '👧' },
  { slug: 'brother-of-groom-speech', name: 'Brother of the Groom Speech', description: 'Brother of the groom speeches that blend humor, nostalgia, and genuine love.', shortDescription: 'Brotherhood and wedding day laughs', group: 'Family', icon: '🧑' },
  { slug: 'sister-of-groom-speech', name: 'Sister of the Groom Speech', description: 'Sister of the groom speech examples. Share your unique perspective on your brother and welcome his partner.', shortDescription: 'A sister\'s perspective on her brother\'s big day', group: 'Family', icon: '👱‍♀️' },
  { slug: 'twin-sibling-speech', name: 'Twin Sibling Speech', description: 'Twin sibling wedding speeches that celebrate that unbreakable twin bond on their wedding day.', shortDescription: 'The unbreakable twin connection', group: 'Family', icon: '👯' },

  // Family. Extended
  { slug: 'grandfather-speech', name: 'Grandfather Speech', description: 'Grandfather wedding speeches full of wisdom, memories, and blessings for the new couple.', shortDescription: 'Generations of wisdom and love', group: 'Family', icon: '👴' },
  { slug: 'grandmother-speech', name: 'Grandmother Speech', description: 'Grandmother wedding speeches that bring warmth, tradition, and heartfelt blessings.', shortDescription: 'Timeless love from grandmother', group: 'Family', icon: '👵' },
  { slug: 'uncle-speech', name: 'Uncle Speech', description: 'Uncle wedding speech examples, from the fun uncle to the wise mentor. Find your perfect approach.', shortDescription: 'The fun uncle takes the mic', group: 'Family', icon: '🧔' },
  { slug: 'aunt-speech', name: 'Aunt Speech', description: 'Aunt wedding speech examples full of family memories, love, and celebration.', shortDescription: 'An aunt\'s special warmth', group: 'Family', icon: '👩' },
  { slug: 'cousin-speech', name: 'Cousin Speech', description: 'Cousin wedding speech examples that celebrate growing up together and lifelong family bonds.', shortDescription: 'Cousins, confidants, and celebrations', group: 'Family', icon: '🤙' },
  { slug: 'niece-speech', name: 'Niece Speech', description: 'Niece wedding speech examples that are sweet, genuine, and celebrate a special family relationship.', shortDescription: 'Sweet words from a beloved niece', group: 'Family', icon: '🎀' },
  { slug: 'nephew-speech', name: 'Nephew Speech', description: 'Nephew wedding speech examples that honor your aunt or uncle with humor and heart.', shortDescription: 'A nephew\'s tribute', group: 'Family', icon: '⚡' },
  { slug: 'in-law-speech', name: 'In-Law Speech', description: 'In-law wedding speech examples. Welcome your new family member with grace and warmth.', shortDescription: 'Welcoming new family with open arms', group: 'Family', icon: '🏠' },

  // The Couple
  { slug: 'groom-speech', name: 'Groom Speech', description: 'Groom speech examples, thank your guests, honor your partner, and nail the perfect wedding toast.', shortDescription: 'The groom takes center stage', group: 'The Couple', icon: '🤵‍♂️' },
  { slug: 'bride-speech', name: 'Bride Speech', description: 'Bride speech examples that break tradition beautifully. Express your love, gratitude, and joy.', shortDescription: 'The bride speaks from the heart', group: 'The Couple', icon: '👰' },
  { slug: 'groom-to-bride-speech', name: 'Groom to Bride Speech', description: 'Groom to bride speech examples, personal love letters delivered as wedding speeches.', shortDescription: 'His words of love to her', group: 'The Couple', icon: '💌' },
  { slug: 'bride-to-groom-speech', name: 'Bride to Groom Speech', description: 'Bride to groom speech examples that are romantic, personal, and unforgettable.', shortDescription: 'Her words of love to him', group: 'The Couple', icon: '💕' },
  { slug: 'joint-couple-speech', name: 'Joint Couple Speech', description: 'Joint couple wedding speeches. Deliver a beautiful thank-you together as newlyweds.', shortDescription: 'Together at the mic, together in life', group: 'The Couple', icon: '💑' },

  // Friends
  { slug: 'childhood-friend-speech', name: 'Childhood Friend Speech', description: 'Childhood friend wedding speeches that take everyone back to where it all began.', shortDescription: 'From playground to wedding day', group: 'Friends', icon: '🧒' },
  { slug: 'college-friend-speech', name: 'College Friend Speech', description: 'College friend wedding speech examples full of memories, growth, and lifelong friendship.', shortDescription: 'From dorm rooms to dance floors', group: 'Friends', icon: '🎓' },
  { slug: 'work-friend-speech', name: 'Work Friend Speech', description: 'Work friend wedding speech examples, because some of the best friendships start at the office.', shortDescription: 'From colleagues to lifelong friends', group: 'Friends', icon: '💼' },
  { slug: 'roommate-speech', name: 'Roommate Speech', description: 'Roommate wedding speech examples. Share the hilarious and heartfelt moments of living together.', shortDescription: 'The roommate who saw it all', group: 'Friends', icon: '🏡' },
  { slug: 'close-friend-speech', name: 'Close Friend Speech', description: 'Close friend wedding speech examples. Not in the bridal party but still have something to say.', shortDescription: 'When a close friend takes the mic', group: 'Friends', icon: '🫶' },
  { slug: 'military-buddy-speech', name: 'Military Buddy Speech', description: 'Military buddy wedding speeches that honor service, brotherhood, and unbreakable bonds.', shortDescription: 'Brothers and sisters in arms', group: 'Friends', icon: '🎖️' },
  { slug: 'sports-teammate-speech', name: 'Sports Teammate Speech', description: 'Sports teammate wedding speech examples, team spirit meets wedding celebration.', shortDescription: 'From teammates to wedding toast', group: 'Friends', icon: '🏆' },
  { slug: 'travel-buddy-speech', name: 'Travel Buddy Speech', description: 'Travel buddy wedding speeches about adventures, misadventures, and finding home.', shortDescription: 'Adventures that led to the altar', group: 'Friends', icon: '✈️' },

  // Tone-Specific
  { slug: 'funny-wedding-speech', name: 'Funny Wedding Speech', description: 'Hilarious wedding speech examples that had guests in stitches. Master comedy at the reception.', shortDescription: 'Bring the house down with laughter', group: 'By Tone', icon: '😂' },
  { slug: 'emotional-wedding-speech', name: 'Emotional Wedding Speech', description: 'Emotional wedding speeches that move hearts. Not a dry eye in the house, guaranteed.', shortDescription: 'Not a dry eye in the house', group: 'By Tone', icon: '😭' },
  { slug: 'short-sweet-speech', name: 'Short & Sweet Speech', description: 'Short and sweet wedding speech examples. Prove that brevity is the soul of wit.', shortDescription: 'Brief, beautiful, and memorable', group: 'By Tone', icon: '✨' },
  { slug: 'roast-wedding-speech', name: 'Roast Wedding Speech', description: 'Wedding roast speech examples that tease without offense. The art of the loving roast.', shortDescription: 'Lovingly roasting the happy couple', group: 'By Tone', icon: '🔥' },
  { slug: 'sentimental-speech', name: 'Sentimental Speech', description: 'Sentimental wedding speeches dripping with love, nostalgia, and genuine feeling.', shortDescription: 'Pure sentiment and genuine feeling', group: 'By Tone', icon: '🥹' },
  { slug: 'lighthearted-speech', name: 'Lighthearted Speech', description: 'Lighthearted wedding speech examples, warm, breezy, and perfect for any celebration.', shortDescription: 'Easy-going and full of warmth', group: 'By Tone', icon: '☀️' },

  // Situational
  { slug: 'second-marriage-speech', name: 'Second Marriage Speech', description: 'Second marriage wedding speeches that honor new beginnings with tact and joy.', shortDescription: 'Celebrating love the second time around', group: 'Situational', icon: '🔄' },
  { slug: 'blended-family-speech', name: 'Blended Family Speech', description: 'Blended family wedding speeches that bring everyone together with grace and love.', shortDescription: 'Bringing families together beautifully', group: 'Situational', icon: '👨‍👩‍👧‍👦' },
  { slug: 'destination-wedding-speech', name: 'Destination Wedding Speech', description: 'Destination wedding speech examples that capture the magic of saying "I do" somewhere special.', shortDescription: 'Love stories in far-flung places', group: 'Situational', icon: '🌴' },
  { slug: 'interfaith-wedding-speech', name: 'Interfaith Wedding Speech', description: 'Interfaith wedding speech examples that celebrate love across cultures and traditions.', shortDescription: 'Love beyond boundaries', group: 'Situational', icon: '🕊️' },
  { slug: 'lgbtq-wedding-speech', name: 'LGBTQ+ Wedding Speech', description: 'LGBTQ+ wedding speech examples that celebrate love authentically and joyfully.', shortDescription: 'Love is love, celebrated beautifully', group: 'Situational', icon: '🏳️‍🌈' },
  { slug: 'elopement-reception-speech', name: 'Elopement Reception Speech', description: 'Elopement reception speech examples for celebrating after the couple already said "I do."', shortDescription: 'Celebrating after the secret "I do"', group: 'Situational', icon: '🤫' },
  { slug: 'covid-postponed-wedding-speech', name: 'Postponed Wedding Speech', description: 'Speeches for weddings that were worth the wait. Acknowledge the journey and celebrate the day.', shortDescription: 'Love that was worth the wait', group: 'Situational', icon: '⏳' },
  { slug: 'surprise-wedding-speech', name: 'Surprise Wedding Speech', description: 'Surprise wedding speech examples, when you didn\'t know you\'d be giving a toast.', shortDescription: 'When the mic lands in your hands unexpectedly', group: 'Situational', icon: '🎉' },
  { slug: 'renewal-of-vows-speech', name: 'Vow Renewal Speech', description: 'Vow renewal speech examples that celebrate enduring love and the choice to say "yes" again.', shortDescription: 'Saying "yes" all over again', group: 'Situational', icon: '💍' },
  { slug: 'engagement-party-speech', name: 'Engagement Party Speech', description: 'Engagement party speech examples, celebrate the beginning of the journey to "I do."', shortDescription: 'Kicking off the journey to the altar', group: 'Situational', icon: '🥂' },
  { slug: 'rehearsal-dinner-speech', name: 'Rehearsal Dinner Speech', description: 'Rehearsal dinner speech examples, more intimate, more relaxed, equally memorable.', shortDescription: 'The intimate toast before the big day', group: 'Situational', icon: '🍽️' },
  { slug: 'farewell-to-single-life-speech', name: 'Bachelor/Bachelorette Speech', description: 'Bachelor and bachelorette party speech examples to send them off in style.', shortDescription: 'Sending them off in style', group: 'Situational', icon: '🎊' },

  // Cultural
  { slug: 'indian-wedding-speech', name: 'Indian Wedding Speech', description: 'Indian wedding speech examples blending tradition, family values, and celebration.', shortDescription: 'Rich tradition meets modern celebration', group: 'Cultural', icon: '🪷' },
  { slug: 'jewish-wedding-speech', name: 'Jewish Wedding Speech', description: 'Jewish wedding speech examples incorporating tradition, humor, and mazal tov moments.', shortDescription: 'L\'chaim! To life and love', group: 'Cultural', icon: '✡️' },
  { slug: 'irish-wedding-speech', name: 'Irish Wedding Speech', description: 'Irish wedding speech examples full of wit, warmth, and traditional blessings.', shortDescription: 'Irish charm and blessings', group: 'Cultural', icon: '☘️' },
  { slug: 'african-wedding-speech', name: 'African Wedding Speech', description: 'African wedding speech examples honoring heritage, community, and ubuntu.', shortDescription: 'Celebrating community and heritage', group: 'Cultural', icon: '🌍' },
  { slug: 'latin-wedding-speech', name: 'Latin Wedding Speech', description: 'Latin wedding speech examples full of passion, family, and fiesta spirit.', shortDescription: 'Passion, family, and celebration', group: 'Cultural', icon: '💃' },
];

// ── Helper lookups ──────────────────────────────────────────

export function getCategoryBySlug(slug: string): SpeechCategory | undefined {
  return speechCategories.find(c => c.slug === slug);
}

export function getCategoriesByGroup(group: string): SpeechCategory[] {
  return speechCategories.filter(c => c.group === group);
}

export function getAllGroups(): string[] {
  return [...new Set(speechCategories.map(c => c.group))];
}

// ── Test speeches (will be replaced by spreadsheet data) ────

export const exampleSpeeches: ExampleSpeech[] = [
  // Best Man
  {
    slug: 'the-college-years-best-man',
    title: 'The College Years. A Best Man\'s Toast',
    category: 'best-man-speech',
    tone: 'funny',
    durationMinutes: 5,
    wordCount: 680,
    excerpt: 'I\'ve known Jake for fifteen years. And in that time, I\'ve watched him go from the guy who couldn\'t boil water to someone who now, and I\'m being generous here, occasionally overcooks pasta with confidence...',
    content: `I've known Jake for fifteen years. And in that time, I've watched him go from the guy who couldn't boil water to someone who now, and I'm being generous here, occasionally overcooks pasta with confidence.

We met freshman year at university. Jake was the first person I saw in the halls, carrying a mini fridge by himself because, and I quote, "asking for help is for people who skip leg day." The fridge won. He dropped it on his foot within thirty seconds. I helped him carry it the rest of the way, and that was the beginning of a friendship I wouldn't trade for anything.

Over the years, Jake became the person I called when things were good and when things were terrible. He's the friend who shows up, not with advice, because honestly his advice is usually terrible, but with a cold drink and the willingness to sit there until things feel less heavy. That's rare.

And then he met Sarah. I remember the first time he told me about her. We were watching football and he just goes, completely out of nowhere, "I met someone." I waited for the punchline. There wasn't one. Jake, the guy who once described his ideal relationship as "someone who tolerates my fantasy football obsession", had met someone who made him want to be better than that.

Sarah, you changed my best friend. And I don't mean that in a small way. I mean that the guy sitting next to you right now is kinder, more patient, and more thoughtful than the one I carried that fridge with. You didn't just meet Jake, you somehow found the best version of him and coaxed it out.

To Jake and Sarah, may your life together be filled with more laughter than overcooked pasta, more adventure than freshman year, and more love than any of us can put into words.

Cheers!`,
    authorName: 'Marcus Chen',
    weddingRole: 'Best Man',
    tags: ['funny', 'college friends', 'bromance'],
  },
  {
    slug: 'a-brothers-promise-best-man',
    title: 'A Brother\'s Promise. Best Man Speech',
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 4,
    wordCount: 580,
    excerpt: 'Growing up, my brother was the one who taught me that courage isn\'t about never being afraid. It\'s about being afraid and doing it anyway...',
    content: `Growing up, my brother was the one who taught me that courage isn't about never being afraid. It's about being afraid and doing it anyway. Whether it was the high dive at the community pool or asking Emma to dance at prom, he always went first so I'd know it was safe.

That's who Tom is. He goes first. He leads with his heart even when it's terrifying, and he makes it look effortless even when it's not.

I watched Tom fall in love with Rachel over the course of three years. It wasn't a lightning bolt moment, it was more like watching the sunrise. Slow, steady, and then suddenly everything was brighter. He started calling me less, which sounds sad but wasn't. It meant he'd found someone who understood him the way only family is supposed to.

Rachel, you should know that my brother doesn't let many people in. Not really in. He's charming and friendly and everyone loves him, but the real Tom, the one who worries about everything, who replays conversations in his head, who genuinely cares so deeply it sometimes keeps him up at night, that Tom is rare to see. And you see him. You see all of him, and you chose all of him.

Tom, I've looked up to you my entire life. Today, watching you marry the love of your life, I've never been prouder. You found someone who matches your courage, your kindness, and your heart.

To Tom and Rachel, the best is yet to come, and I'll be right here for every chapter.`,
    authorName: 'Daniel Morrison',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'brothers', 'emotional'],
  },

  // Maid of Honor
  {
    slug: 'my-person-maid-of-honor',
    title: 'My Person. Maid of Honor Toast',
    category: 'maid-of-honor-speech',
    tone: 'balanced',
    durationMinutes: 5,
    wordCount: 650,
    excerpt: 'When Lily asked me to be her maid of honor, I ugly cried. Not the cute single-tear kind. The full, mascara-destroying, can\'t-breathe kind...',
    content: `When Lily asked me to be her maid of honor, I ugly cried. Not the cute single-tear kind. The full, mascara-destroying, can't-breathe kind. Because being asked to stand beside your best friend on the most important day of her life is, and I don't use this word lightly, an honor.

Lily and I met in the ninth grade when we were assigned as lab partners in biology. She dissected the frog. I held the tray and tried not to faint. It was a perfect partnership from day one, she handles the brave stuff, I provide moral support and snacks.

Over the years, that dynamic hasn't really changed. Lily is the bravest person I know. She moved to a new city alone at twenty-two, started a business at twenty-five, and somehow still finds time to remember every single important date in my life. She texted me on the anniversary of my grandmother's passing. Who does that? Lily does.

And then along came James. I knew something was different when Lily called me after their third date and said, "I think I'm in trouble." In Lily-speak, "trouble" means she'd found someone she couldn't be casual about. Someone who saw through her "I'm fine" and actually cared about what was underneath.

James, you passed every test without knowing you were being tested. You showed up when it mattered. You learned her coffee order, the ridiculous one with the oat milk and the extra shot and the specific temperature. You remembered her mom's birthday. You held her hand during the hard parts and never once tried to fix things she didn't ask you to fix.

Lily, you deserve a love that doesn't make you smaller. And James, you gave her that. You gave her a love that made her more of who she already was.

To Lily and James, thank you for letting me be part of this. I love you both more than words.`,
    authorName: 'Sophie Williams',
    weddingRole: 'Maid of Honor',
    tags: ['balanced', 'best friends', 'emotional'],
  },

  // Father of the Bride
  {
    slug: 'letting-go-father-bride',
    title: 'Letting Go. Father of the Bride',
    category: 'father-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 4,
    wordCount: 540,
    excerpt: 'There\'s a moment every father dreads and dreams about in equal measure. The moment you realize your little girl doesn\'t need you to hold her hand anymore...',
    content: `There's a moment every father dreads and dreams about in equal measure. The moment you realize your little girl doesn't need you to hold her hand anymore, because someone else is holding it.

Emma, you were three years old the first time you told me you didn't need help crossing the street. You grabbed my hand anyway, "just in case," you said. I've been living for those "just in case" moments ever since.

Watching you grow into the woman you are today has been the single greatest privilege of my life. You have your mother's grace, your grandmother's stubbornness, and yes, unfortunately, my sense of humor. But you've also got something that's entirely your own: a quiet strength that makes everyone around you feel safe.

When you brought David home for the first time, I watched him. Not because I was suspicious, okay, maybe a little, but because I needed to know. I needed to know if this was the person who would treat your heart like the precious thing it is. And David, I'll be honest, you passed the test about six minutes in. When Emma spilled wine on the carpet and you laughed with her instead of panicking. I knew. Because that's what love looks like. It looks like laughing at the mess together.

David, I'm not losing a daughter today. I'm gaining the peace of mind that my daughter chose well. Take care of her. Not because she can't take care of herself, she absolutely can, but because she deserves someone who wants to anyway.

Emma, I love you more than any speech could say. Your mother and I are so incredibly proud.

To Emma and David.`,
    authorName: 'Robert Taylor',
    weddingRole: 'Father of the Bride',
    tags: ['heartfelt', 'emotional', 'father-daughter'],
  },

  // Mother of the Bride
  {
    slug: 'a-mothers-heart-mob',
    title: 'A Mother\'s Heart',
    category: 'mother-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 4,
    wordCount: 520,
    excerpt: 'From the moment they placed you in my arms, I made you a silent promise: I would spend my life making sure you knew how loved you were...',
    content: `From the moment they placed you in my arms, I made you a silent promise: I would spend my life making sure you knew how loved you were. And standing here today, watching you marry the person who makes your eyes light up. I think I kept that promise. But honestly, sweetheart, you made it easy.

Grace, you have always been the kind of person who makes a room better just by walking into it. Even as a little girl, you had this way of seeing people, really seeing them. You'd notice when someone was having a hard day before anyone else did. You'd share your lunch with the new kid without being asked. That empathy, that kindness, it's your superpower.

When you told me about Michael, it was the way you said his name that told me everything. There was a softness in your voice that I'd never heard before. Mothers notice these things. We catalog every new expression, every shift in tone, every unspoken feeling. And what I heard in your voice that day was someone who had found their home.

Michael, I want you to know something. Grace doesn't love easily. She loves deeply, completely, and forever, but not easily. The fact that she chose you tells me everything about your character. You earned the love of my daughter, and there is no higher compliment I can give.

To my beautiful girl and her wonderful husband, may your home be filled with laughter, your hearts with patience, and your lives with the kind of love that only grows.

I love you, Grace. Always and forever.`,
    authorName: 'Catherine Taylor',
    weddingRole: 'Mother of the Bride',
    tags: ['heartfelt', 'mother-daughter', 'emotional'],
  },

  // Groom
  {
    slug: 'thank-you-for-choosing-me',
    title: 'Thank You for Choosing Me. Groom\'s Speech',
    category: 'groom-speech',
    tone: 'balanced',
    durationMinutes: 5,
    wordCount: 620,
    excerpt: 'I\'ve been told the groom\'s speech should be short, sweet, and full of thank-yous. I\'ll do my best on two out of three. I make no promises about short...',
    content: `I've been told the groom's speech should be short, sweet, and full of thank-yous. I'll do my best on two out of three. I make no promises about short.

First, thank you to everyone here today. Some of you traveled across the country. Some of you traveled across the street. All of you chose to spend your Saturday watching me try not to cry, and I appreciate that.

To my parents. Mum, Dad, thank you for showing me what a good marriage looks like. Thirty-five years in and you still make each other laugh every single day. That's the blueprint. That's what I'm aiming for. Mum, thank you for teaching me that the right answer to "does this look okay?" is always "you look amazing." Dad, thank you for teaching me that showing up is the most important thing a man can do. I listened. Even when it looked like I wasn't.

To Laura's parents, John and Marie, thank you for raising the most incredible person I've ever met, and thank you for welcoming me into your family even after I accidentally reversed into your garden wall on our second visit. Your grace and generosity mean the world to me.

To our bridal party, you've been extraordinary. You've planned, organized, calmed nerves, and pretended to enjoy the seventeen different table arrangement options Laura and I debated. You're not just our friends, you're the people who make our lives better every day.

And Laura. I don't have the right words for you. I've been trying to write this part for three months and nothing comes close. So I'll just say this: before you, I was fine. Happy enough, getting by, doing alright. But "alright" isn't living. You showed me what living actually looks like. It looks like Sunday mornings doing nothing. It looks like arguing over what to watch and then watching neither. It looks like someone who believes in you louder than your own doubts.

Thank you for choosing me. I'll spend every day making sure you never regret it.

To all of you, raise your glasses. To love, to family, and to my beautiful wife.`,
    authorName: 'Tom Harris',
    weddingRole: 'Groom',
    tags: ['balanced', 'gratitude', 'romantic'],
  },

  // Funny
  {
    slug: 'the-roast-best-man',
    title: 'The Gentle Roast. Best Man Edition',
    category: 'funny-wedding-speech',
    tone: 'roast',
    durationMinutes: 5,
    wordCount: 660,
    excerpt: 'Before I start, I want to assure everyone that everything I\'m about to say is true, verified, and legally defensible. My lawyer is in the third row...',
    content: `Before I start, I want to assure everyone that everything I'm about to say is true, verified, and legally defensible. My lawyer is in the third row. Wave, Steve.

I've been asked to talk about what makes Chris a great man, a wonderful partner, and someone deserving of a woman as incredible as Jess. So this should be a very short speech.

I'm kidding. Mostly.

Chris and I have been friends since secondary school. And I want to paint an honest picture of the man you've all chosen to celebrate today. This is a man who once tried to iron a shirt while wearing it. This is a man who, at twenty-three, called his mother to ask how to boil an egg. This is a man who, and this is perhaps my favorite, once got lost in an IKEA for two and a half hours and had to be escorted out by staff. He bought a plant on the way out. The plant died within a week.

But here's the thing about Chris. Behind every ridiculous story, and trust me, I have dozens, is a man with one of the biggest hearts you'll ever meet. He's the friend who drove three hours in a snowstorm to pick me up when my car broke down. He's the guy who remembers your birthday, your dog's birthday, and somehow the anniversary of the day you got your braces off.

When Chris met Jess, something shifted. He stopped being the guy things happened to and became the guy who made things happen. He planned dates. He remembered things. He became, against all odds, thoughtful. Jess, I don't know what you did, but whatever it is, it's working.

Now, Jess, a few things you should know going forward. Chris cannot load a dishwasher correctly. I know he thinks he can. He can't. He will leave cabinet doors open. Not some of them. All of them. Every time. And he snores like a bear with a sinus infection.

But he will also leave you notes in your coat pocket. He will make you coffee exactly how you like it. And he will love you with everything he's got, which, after knowing him for twenty years, I can tell you is a lot.

To Chris and Jess, may your marriage be long, your arguments be short, and your dishwasher be loaded correctly at least fifty percent of the time.

Cheers!`,
    authorName: 'Ryan O\'Brien',
    weddingRole: 'Best Man',
    tags: ['funny', 'roast', 'best man'],
  },

  // Short & Sweet
  {
    slug: 'short-sweet-father-groom',
    title: 'A Father\'s Blessing. Short & Sweet',
    category: 'short-sweet-speech',
    tone: 'heartfelt',
    durationMinutes: 2,
    wordCount: 280,
    excerpt: 'I\'m not one for long speeches. Your mother will confirm this. So I\'ll keep this simple...',
    content: `I'm not one for long speeches. Your mother will confirm this. So I'll keep this simple.

Ben, you are the best thing I've ever been part of. Watching you grow from a boy who was afraid of thunderstorms into a man who runs toward them, that's been my life's work. And my life's joy.

Anna, thank you. Not just for loving my son, but for loving him honestly. You challenge him. You support him. You laugh at his terrible jokes, which frankly shows remarkable patience.

When Ben told me he was going to propose, I asked him one question: "Are you sure?" He didn't hesitate. He didn't think about it. He just smiled and said, "I've never been more sure about anything."

That was enough for me.

To Ben and Anna, be kind to each other. Every single day. That's the whole secret. There is no other secret. Just kindness, every day.

I love you both. Cheers.`,
    authorName: 'George Mitchell',
    weddingRole: 'Father of the Groom',
    tags: ['short', 'heartfelt', 'father'],
  },
];

// ── Lookup helpers ──────────────────────────────────────────

export function getSpeechesByCategory(categorySlug: string): ExampleSpeech[] {
  return exampleSpeeches.filter(s => s.category === categorySlug);
}

export function getSpeechBySlug(slug: string): ExampleSpeech | undefined {
  return exampleSpeeches.find(s => s.slug === slug);
}

export function getSpeechesByTone(tone: ExampleSpeech['tone']): ExampleSpeech[] {
  return exampleSpeeches.filter(s => s.tone === tone);
}

export function getSpeechesByDuration(minMinutes: number, maxMinutes: number): ExampleSpeech[] {
  return exampleSpeeches.filter(s => s.durationMinutes >= minMinutes && s.durationMinutes <= maxMinutes);
}

export function getFilteredSpeeches(filters: {
  category?: string;
  tone?: string;
  minDuration?: number;
  maxDuration?: number;
  search?: string;
}): ExampleSpeech[] {
  return exampleSpeeches.filter(s => {
    if (filters.category && s.category !== filters.category) return false;
    if (filters.tone && s.tone !== filters.tone) return false;
    if (filters.minDuration && s.durationMinutes < filters.minDuration) return false;
    if (filters.maxDuration && s.durationMinutes > filters.maxDuration) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      return s.title.toLowerCase().includes(q) ||
             s.content.toLowerCase().includes(q) ||
             s.tags.some(t => t.toLowerCase().includes(q));
    }
    return true;
  });
}
