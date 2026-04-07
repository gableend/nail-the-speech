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
  { slug: 'latin-wedding-speech', name: 'Latin Wedding Speech', description: 'Latin wedding speech examples full of passion, family, and fiesta spirit.', shortDescription: 'Passion, family, and celebration', group: 'Cultural', icon: '💃' }
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


// ── 165 Example Speeches (imported from curated spreadsheet) ────

export const exampleSpeeches: ExampleSpeech[] = [
  {
    slug: 'classic-best-man-speech-0',
    title: `Classic best man speech`,
    category: 'best-man-speech',
    tone: 'funny',
    durationMinutes: 1.4,
    wordCount: 179,
    excerpt: `Hello, hello, hello everyone. Is everyone having a good time? My name is [Your name] and I have the great privilege of being [Groom's name]'s best man. Now, let's start by saying...`,
    content: `Hello, hello, hello everyone. Is everyone having a good time? My name is [Your name] and I have the great privilege of being [Groom's name]'s best man.

Now, let's start by saying, being [Groom's name]'s best man is no small honour - it's huge. I mean, ordinarily I'd be stood here telling you all the embarrassing stories. Sorry to mate!

[Groom's name] and I go way back. We met when we were 5, and from the very beginning, I knew he was special. When we were about 10, [Groom's name] was absolutely convinced he could teach me how to backflip into the pool.

Spoiler alert: he couldn't, and I ended up with a black eye! As we grew older, I watched [Groom's name] become the person he is now. He's a loyal friend, a generous person, and someone who genuinely cares about the people around him.

So, everyone, please will you join me in a toast to [Bride's name] and [Groom's name]. May your love continue to grow stronger with each passing year. To love, laughter, and happily ever after! Cheers!`,
    authorName: 'Ben Ellis',
    weddingRole: 'Best Man',
    tags: ['funny', 'best man'],
  },
  {
    slug: 'funny-best-man-speech-1',
    title: `Funny Best Man Speech`,
    category: 'best-man-speech',
    tone: 'funny',
    durationMinutes: 1.1,
    wordCount: 144,
    excerpt: `Hi everyone, buenas noches! Today we celebrate Aidan and Marco – two grooms, two legends, and two men who somehow decided Playa Blanca was the perfect spot to make it official. For...`,
    content: `Hi everyone, buenas noches! Today we celebrate Aidan and Marco – two grooms, two legends, and two men who somehow decided Playa Blanca was the perfect spot to make it official. I've been friends with Aidan since university, which means I've witnessed every questionable haircut, every failed attempt at salsa dancing, and every regrettable tequila shot.

When he met Marco, I thought, 'Finally – someone patient enough to deal with him.' Marco is charming, stylish, and has an actual skincare routine. Aidan thinks SPF is a personality type. But together, they just work – Aidan provides the chaos, Marco brings the calm, and Playa Blanca provides the rum.

So let's raise a glass – to Aidan and Marco, who prove that true love is about balance, compromise, and occasionally letting your partner pick the holiday destination. To the grooms!`,
    authorName: 'Harry Coleman',
    weddingRole: 'Best Man',
    tags: ['funny', 'best man'],
  },
  {
    slug: 'funny-best-man-speech-2',
    title: `Funny best man speech`,
    category: 'best-man-speech',
    tone: 'funny',
    durationMinutes: 1.7,
    wordCount: 219,
    excerpt: `Hi everyone. [Your name] here, ready to deliver a blinding best man speech. Let's get the formalities out of the way. I've known [Groom's name] for 17 years, can you believe it...`,
    content: `Hi everyone. [Your name] here, ready to deliver a blinding best man speech. Let's get the formalities out of the way.

I've known [Groom's name] for 17 years, can you believe it? And in that time, he's provided me with some absolute corkers of stories. There was the time he decided to dye his hair bright green for a university pub crawl.

Equally, there was the time he decided he could master DIY after watching a couple of YouTube videos. Let's just say his attempt to fit a new kitchen sink resulted in a flooded kitchen and a very angry landlord! But that's the thing about [Groom's name].

Even when his plans go sideways - and they often do - he somehow always lands on his feet. And then along came [Bride's name]. Now, I'll admit, I wasn't sure how she'd fit into this whirlwind of chaos.

But she doesn't just fit in - she thrives. And what's even more impressive is that you haven't tried to change him. You love him for exactly who he is - chaotic, well-meaning, and occasionally disastrous!

So, let's raise a glass to [Bride's name] and [Groom's name], the perfect team. [Bride's name], thank you for taking on this wonderful madman. So here's to a marriage full of love, laughter, and maybe a few more dodgy DIY projects along the way. Cheers!`,
    authorName: 'Thomas Brooks',
    weddingRole: 'Best Man',
    tags: ['funny', 'best man'],
  },
  {
    slug: 'short-best-man-speech-3',
    title: `Short Best Man Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 0.7,
    wordCount: 87,
    excerpt: `Good evening. I was told to keep this short, so I'll do my best. If I start rambling, someone throw a bread roll. So here's my attempt...`,
    content: `Good evening. I was told to keep this short, so I'll do my best. If I start rambling, someone throw a bread roll.

So here's my attempt. Dave is one of the funniest, clumsiest, and most loyal men I know. He doesn't just fall down stairs – he falls head over heels for the right woman.

And here she is. To Dave and Orla – proof that love can survive pratfalls, broken shoes, and one best mate with dodgy jokes. To the newlyweds.`,
    authorName: 'Lucy Gibson',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'short', 'best man'],
  },
  {
    slug: 'short-and-sweet-best-man-speech-4',
    title: `Short and sweet best man speech`,
    category: 'best-man-speech',
    tone: 'funny',
    durationMinutes: 1.1,
    wordCount: 138,
    excerpt: `Hey everyone. My name is [Your name], and I have the incredible privilege of being [Groom's name]'s best man. I've known [Groom's name] for 9 years, and in that time, we've been...`,
    content: `Hey everyone. My name is [Your name], and I have the incredible privilege of being [Groom's name]'s best man. I've known [Groom's name] for 9 years, and in that time, we've been through it all - dodgy haircuts, questionable fashion choices, and an embarrassing number of failed relationships.

Some of those dates, I'm happy to report, were so bad they're still a running joke between us. But that's when he met [Bride's name]. When I first met [Bride's name], my immediate thought was, "She's way too good for him." And, let's be honest, I was right!

[Bride's name], you've done what I genuinely thought was impossible: you've made [Groom's name] a better person. [Bride's name], thank you for putting up with him, and [Groom's name], thank you for being the best friend anyone could ask for. To the happy couple!`,
    authorName: 'Olivia Fletcher',
    weddingRole: 'Best Man',
    tags: ['funny', 'best man'],
  },
  {
    slug: 'the-advice-focused-speech-5',
    title: `The Advice-Focused Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 1.4,
    wordCount: 176,
    excerpt: `Good evening! I'm David, [Groom's name]'s best man and someone who's been married for ten years. [Groom's name], you asked me for marriage advice, so here it is: The secret to a...`,
    content: `Good evening! I'm David, [Groom's name]'s best man and someone who's been married for ten years. [Groom's name], you asked me for marriage advice, so here it is: The secret to a happy marriage is simple – always remember that you're on the same team.

When challenges come up, and they will, face them together. [Bride's name], you're getting a good one. [Groom's name] is loyal, funny, and the kind of person who will drive across town at midnight because you need ice cream.

Trust me, I've been the emergency contact for these missions. Here's what I've learned about marriage: It's not about finding someone you can live with, it's about finding someone you can't live without. And watching you two together, it's clear you've both found that person.

My advice for your marriage: Keep laughing together, never go to bed angry, and remember that "being right" is never as important as being kind to each other. To [Bride's name] and [Groom's name] – may your love continue to grow stronger with each passing year. Congratulations!`,
    authorName: 'Alice Shaw',
    weddingRole: 'Best Man',
    tags: ['inspirational', 'best man'],
  },
  {
    slug: 'the-advice-focused-speech-6',
    title: `The Advice-Focused Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 1.4,
    wordCount: 176,
    excerpt: `Good evening! I'm David, [Groom's name]'s best man and someone who's been married for ten years. [Groom's name], you asked me for marriage advice, so here it is: The secret to a...`,
    content: `Good evening! I'm David, [Groom's name]'s best man and someone who's been married for ten years. [Groom's name], you asked me for marriage advice, so here it is: The secret to a happy marriage is simple – always remember that you're on the same team.

When challenges come up, and they will, face them together. [Bride's name], you're getting a good one. [Groom's name] is loyal, funny, and the kind of person who will drive across town at midnight because you need ice cream.

Trust me, I've been the emergency contact for these missions. Here's what I've learned about marriage: It's not about finding someone you can live with, it's about finding someone you can't live without. And watching you two together, it's clear you've both found that person.

My advice for your marriage: Keep laughing together, never go to bed angry, and remember that "being right" is never as important as being kind to each other. To [Bride's name] and [Groom's name] – may your love continue to grow stronger with each passing year. Congratulations!`,
    authorName: 'James Hughes',
    weddingRole: 'Best Man',
    tags: ['inspirational', 'best man'],
  },
  {
    slug: 'the-funny-friend-speech-7',
    title: `The Funny Friend Speech`,
    category: 'best-man-speech',
    tone: 'funny',
    durationMinutes: 1.4,
    wordCount: 182,
    excerpt: `Hi everyone! I'm Mike, and I'm [Groom's name]'s best man, which means I'm legally required to embarrass him today. I've known [Groom's name] since high school, where he was voted...`,
    content: `Hi everyone! I'm Mike, and I'm [Groom's name]'s best man, which means I'm legally required to embarrass him today. I've known [Groom's name] since high school, where he was voted "Most Likely to Marry His Xbox." Well, congratulations [Groom's name] – you've upgraded from a gaming console to an actual human being.

That's what I call personal growth. [Bride's name], thank you for teaching [Groom's name] that there are other forms of entertainment besides video games and pizza. Though I have to ask – how did you fall for a guy whose idea of dressing up was wearing his lucky underwear?

But in all seriousness, I've watched [Groom's name] become a better person because of you. He now knows the difference between salmon and coral, he can navigate IKEA without having a breakdown, and he's even learned to put the toilet seat down. Miracles do happen! So so here's to [Bride's name] and [Groom's name] – may your WiFi always be strong, your coffee always be hot, and may [Groom's name] finally beat that boss level he's been stuck on for three years!`,
    authorName: 'Chris Mitchell',
    weddingRole: 'Best Man',
    tags: ['funny', 'best man'],
  },
  {
    slug: 'the-funny-friend-speech-8',
    title: `The Funny Friend Speech`,
    category: 'best-man-speech',
    tone: 'funny',
    durationMinutes: 1.4,
    wordCount: 182,
    excerpt: `Hi everyone! I'm Mike, and I'm [Groom's name]'s best man, which means I'm legally required to embarrass him today. I've known [Groom's name] since high school, where he was voted...`,
    content: `Hi everyone! I'm Mike, and I'm [Groom's name]'s best man, which means I'm legally required to embarrass him today. I've known [Groom's name] since high school, where he was voted "Most Likely to Marry His Xbox." Well, congratulations [Groom's name] – you've upgraded from a gaming console to an actual human being.

That's what I call personal growth. [Bride's name], thank you for teaching [Groom's name] that there are other forms of entertainment besides video games and pizza. Though I have to ask – how did you fall for a guy whose idea of dressing up was wearing his lucky underwear?

But in all seriousness, I've watched [Groom's name] become a better person because of you. He now knows the difference between salmon and coral, he can navigate IKEA without having a breakdown, and he's even learned to put the toilet seat down. Miracles do happen! So so here's to [Bride's name] and [Groom's name] – may your WiFi always be strong, your coffee always be hot, and may [Groom's name] finally beat that boss level he's been stuck on for three years!`,
    authorName: 'Chris Sullivan',
    weddingRole: 'Best Man',
    tags: ['funny', 'best man'],
  },
  {
    slug: 'the-heartfelt-brotherhood-speech-9',
    title: `The Heartfelt Brotherhood Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 1.4,
    wordCount: 177,
    excerpt: `Good evening, everyone! I'm Jake, and I've had the privilege of being [Groom's name]'s best friend for over fifteen years. When [Groom's name] first told me about [Bride's name]...`,
    content: `Good evening, everyone! I'm Jake, and I've had the privilege of being [Groom's name]'s best friend for over fifteen years. When [Groom's name] first told me about [Bride's name], I knew something was different.

He'd text me at 2 AM just to tell me about their conversations, and honestly, I thought he'd lost his mind. But then I met [Bride's name], and I understood. [Bride's name], you brought out a side of [Groom's name] I'd never seen before – the guy who remembers anniversaries, who actually listens during romantic comedies, and who somehow learned to fold fitted sheets properly.

That's true love right there. [Groom's name], you've been my brother in every way that matters. From our college adventures to career changes, you've always been there with terrible advice and even worse jokes.

But today, I see you becoming the man you were always meant to be. To [Bride's name] and [Groom's name], may your love story continue to inspire everyone around you. So here's to a lifetime of laughter, adventure, and fitted sheets that actually stay folded!`,
    authorName: 'Grace Morgan',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'best man'],
  },
  {
    slug: 'the-heartfelt-brotherhood-speech-10',
    title: `The Heartfelt Brotherhood Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 1.4,
    wordCount: 177,
    excerpt: `Good evening, everyone! I'm Jake, and I've had the privilege of being [Groom's name]'s best friend for over fifteen years. When [Groom's name] first told me about [Bride's name]...`,
    content: `Good evening, everyone! I'm Jake, and I've had the privilege of being [Groom's name]'s best friend for over fifteen years. When [Groom's name] first told me about [Bride's name], I knew something was different.

He'd text me at 2 AM just to tell me about their conversations, and honestly, I thought he'd lost his mind. But then I met [Bride's name], and I understood. [Bride's name], you brought out a side of [Groom's name] I'd never seen before – the guy who remembers anniversaries, who actually listens during romantic comedies, and who somehow learned to fold fitted sheets properly.

That's true love right there. [Groom's name], you've been my brother in every way that matters. From our college adventures to career changes, you've always been there with terrible advice and even worse jokes.

But today, I see you becoming the man you were always meant to be. To [Bride's name] and [Groom's name], may your love story continue to inspire everyone around you. So here's to a lifetime of laughter, adventure, and fitted sheets that actually stay folded!`,
    authorName: 'Adam Dixon',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'best man'],
  },
  {
    slug: 'the-personal-journey-speech-11',
    title: `The Personal Journey Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 1.5,
    wordCount: 196,
    excerpt: `Hi everyone, I'm Alex, and I'm honored to stand here as [Groom's name]'s best man. [Groom's name] and I have been through everything together – from studying abroad in college to...`,
    content: `Hi everyone, I'm Alex, and I'm honored to stand here as [Groom's name]'s best man. [Groom's name] and I have been through everything together – from studying abroad in college to navigating our first jobs to questioning every major life decision. But I've never seen him as confident and happy as he is with [Bride's name].

I remember when [Groom's name] first mentioned [Bride's name]. He was nervous about their first date – I mean, really nervous. He changed his shirt three times and asked me to review his text messages.

But when he came back that night, he had this smile I'd never seen before. [Bride's name], you've brought out the best in my best friend. You've encouraged his dreams, supported his goals, and somehow convinced him that karaoke nights are actually fun.

For that alone, we all owe you a debt of gratitude. [Groom's name], watching you with [Bride's name] has taught me what real partnership looks like. You two don't just love each other – you make each other better people.

So here's to [Bride's name] and [Groom's name], and to finding the person who makes you want to be your best self. Cheers!`,
    authorName: 'Adam Carter',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'best man'],
  },
  {
    slug: 'the-personal-journey-speech-12',
    title: `The Personal Journey Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 1.5,
    wordCount: 196,
    excerpt: `Hi everyone, I'm Alex, and I'm honored to stand here as [Groom's name]'s best man. [Groom's name] and I have been through everything together – from studying abroad in college to...`,
    content: `Hi everyone, I'm Alex, and I'm honored to stand here as [Groom's name]'s best man. [Groom's name] and I have been through everything together – from studying abroad in college to navigating our first jobs to questioning every major life decision. But I've never seen him as confident and happy as he is with [Bride's name].

I remember when [Groom's name] first mentioned [Bride's name]. He was nervous about their first date – I mean, really nervous. He changed his shirt three times and asked me to review his text messages.

But when he came back that night, he had this smile I'd never seen before. [Bride's name], you've brought out the best in my best friend. You've encouraged his dreams, supported his goals, and somehow convinced him that karaoke nights are actually fun.

For that alone, we all owe you a debt of gratitude. [Groom's name], watching you with [Bride's name] has taught me what real partnership looks like. You two don't just love each other – you make each other better people.

So here's to [Bride's name] and [Groom's name], and to finding the person who makes you want to be your best self. Cheers!`,
    authorName: 'Grace Hayes',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'best man'],
  },
  {
    slug: 'the-short-and-sweet-speech-13',
    title: `The Short and Sweet Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 0.8,
    wordCount: 100,
    excerpt: `Good evening! I'm Aidan, [Groom's name]'s best man and oldest friend. They say you can judge a person by the company they keep. If that's true, then [Groom's name] must be pretty...`,
    content: `Good evening! I'm Aidan, [Groom's name]'s best man and oldest friend. They say you can judge a person by the company they keep.

If that's true, then [Groom's name] must be pretty amazing, because he somehow convinced [Bride's name] to marry him. I've watched these two together, and what strikes me most is how they make each other laugh. Even during stressful moments – like wedding planning – they find reasons to smile.

[Groom's name], you found your perfect match. [Bride's name], you found yours too, though I'm still not sure how. To love, laughter, and happily ever after. Cheers!`,
    authorName: 'Fiona Hayes',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'short', 'best man'],
  },
  {
    slug: 'the-short-and-sweet-speech-14',
    title: `The Short and Sweet Speech`,
    category: 'best-man-speech',
    tone: 'heartfelt',
    durationMinutes: 0.8,
    wordCount: 100,
    excerpt: `Good evening! I'm Aidan, [Groom's name]'s best man and oldest friend. They say you can judge a person by the company they keep. If that's true, then [Groom's name] must be pretty...`,
    content: `Good evening! I'm Aidan, [Groom's name]'s best man and oldest friend. They say you can judge a person by the company they keep.

If that's true, then [Groom's name] must be pretty amazing, because he somehow convinced [Bride's name] to marry him. I've watched these two together, and what strikes me most is how they make each other laugh. Even during stressful moments – like wedding planning – they find reasons to smile.

[Groom's name], you found your perfect match. [Bride's name], you found yours too, though I'm still not sure how. To love, laughter, and happily ever after. Cheers!`,
    authorName: 'Fiona Rhodes',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'short', 'best man'],
  },
  {
    slug: 'childhood-friend-maid-of-honour-speech-15',
    title: `Childhood friend maid of honour speech`,
    category: 'maid-of-honor-speech',
    tone: 'funny',
    durationMinutes: 1.7,
    wordCount: 219,
    excerpt: `Everyone, welcome. Welcome to the wedding of the year - the marriage of [Bride's name] and [Groom's name]. It's been such a blessing to be beside you during this exciting process...`,
    content: `Everyone, welcome. Welcome to the wedding of the year - the marriage of [Bride's name] and [Groom's name]. It's been such a blessing to be beside you during this exciting process.

I know just how much this day means to you. But look at us now: the day has finally arrived for you to don a real wedding dress - with no pillowcase in sight - and for me to stand by your side, just as we've always imagined. [Groom's name], I hope you know what you've got yourself into here.

When you marry [Bride's name], you're also marrying me, our little troop of best friends, bless your heart! Our little troop is now your little troop. But I promise, we're mostly harmless - especially once we've had our morning cuppa.

But, of course, you know that from the proposal. We all had to be involved, right down to [Bride's name]'s mum. So now that the ring's firmly on [Bride's name]'s finger (and not down the dog's throat!), you're embarking on the most amazing adventure.

So, if everyone would kindly raise their glasses (or mugs - no judgement here!), I'd like to propose a toast to the new Mr and Mrs [Surname]. To love, laughter, and a lifetime of adventure. And to this beautiful friendship that brought us all here. Cheers - and welcome to the madness, [Groom's name]!`,
    authorName: 'Claire Morgan',
    weddingRole: 'Maid of Honor',
    tags: ['funny', 'maid of honor'],
  },
  {
    slug: 'lifelong-friend-maid-of-honour-speech-16',
    title: `Lifelong friend maid of honour speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.9,
    wordCount: 245,
    excerpt: `Hello, everyone. Welcome to the wedding of [Bride's name] and [Groom's name]. You may have seen me everywhere today - probably because I've been panicking in the background! Now...`,
    content: `Hello, everyone. Welcome to the wedding of [Bride's name] and [Groom's name]. You may have seen me everywhere today - probably because I've been panicking in the background!

Now, I know a maid of honour speech isn't very traditional, but our girl [Bride's name] isn't very traditional either. [Bride's name] has always had this way of making people feel at home, whether that's in her childhood bedroom with questionable boy band posters, or in her grown-up home where she's perfected the art of a cuppa and a chat. She's a natural caregiver, a loyal friend, and she lights up every room she walks into.

And that's why I know [Groom's name] is the luckiest man in the world. Because he's married someone who would do anything for the people she loves. And I was able to play a part in the proposal!

[Bride's name] doesn't know this yet, but I was in on the secret. This close to cracking so many times, but seeing the joy and surprise on her face when [Groom's name] finally popped the question was absolutely magical. Now, I'm not married, and I don't pretend to know loads about love.

But what I do know is this - love is showing up when it's inconvenient, laughing at the same terrible jokes for years, and choosing someone again every single morning. And if there's one person who embodies all of that, it's [Bride's name]. So, let's raise a glass to [Bride's name] and [Groom's name]. So here's to a lifetime of love, laughter, and adventures together.`,
    authorName: 'Claire Chambers',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'maid-of-honour-speech-17',
    title: `Maid of Honour Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.0,
    wordCount: 128,
    excerpt: `I've known Niamh since she was six years old. Back then, she was the girl who insisted on dressing like a Spice Girl, even on school photo day. Since then, she's been my...`,
    content: `I've known Niamh since she was six years old. Back then, she was the girl who insisted on dressing like a Spice Girl, even on school photo day. Since then, she's been my partner-in-crime, my therapist, and the sister I chose.

Being her maid of honour today is an honour in every sense – because I've seen her at her best and her worst, and I've never seen her as happy as she is with Callum. He may not know all the words to 'Wannabe', but he makes her laugh like nobody else, and that's what matters. So let's raise a glass to Niamh and Callum – may their life together be as full of laughter, karaoke, and questionable outfits as our childhood was. To Niamh and Callum.`,
    authorName: 'Chris Chambers',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'short-and-sweet-maid-of-honour-speech-18',
    title: `Short and sweet maid of honour speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.1,
    wordCount: 139,
    excerpt: `Hi, everyone. My name is [Your name], and I have the great honour of being the maid of honour today! [Bride's name] is my absolute rock, my partner-in-chaos, and the very reason I...`,
    content: `Hi, everyone. My name is [Your name], and I have the great honour of being the maid of honour today! [Bride's name] is my absolute rock, my partner-in-chaos, and the very reason I can't stay quiet today.

True devotion means showing up, and she does that every single day. When she met [Groom's name], I saw her face light up in a way it never had before. He matched her kindness, her energy, and her zest for life.

I don't pretend to be an expert on love, but I am an expert on [Bride's name], and if I can share something I've learned from her, it's that love is about showing up. So [Groom's name], keep showing up for her. Right, that's enough out of me.

Let's raise our glasses to our lovely bride and groom. Cheers, you two!`,
    authorName: 'Chloe Chapman',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-college-memories-speech-19',
    title: `The College Memories Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.8,
    wordCount: 228,
    excerpt: `Good evening! I'm Amanda, and I've had the privilege of being [Bride's name]'s roommate, study buddy, and partner in crime since our freshman year of college. College was where I...`,
    content: `Good evening! I'm Amanda, and I've had the privilege of being [Bride's name]'s roommate, study buddy, and partner in crime since our freshman year of college. College was where I really got to know [Bride's name] – through late-night study sessions, terrible cafeteria food, and way too many episodes of reality TV.

But it was also where I learned that [Bride's name] is the most loyal, caring person I've ever met. I remember when [Bride's name] first mentioned [Groom's name]. We were supposed to be studying for finals, but instead, she spent three hours telling me about this amazing guy she'd met.

I'd never seen her so excited about someone, and honestly, I was a little worried she'd fail her exams because she couldn't stop smiling long enough to read her textbook. But then I met [Groom's name], and I understood. He's not just [Bride's name]'s boyfriend – he's her best friend, her biggest supporter, and the person who makes her laugh until she snorts.

Yes, [Bride's name], I'm sharing the snorting thing. Watching you two together has taught me what real partnership looks like. You balance each other perfectly – [Bride's name]'s spontaneity and [Groom's name]'s practicality, [Bride's name]'s optimism and [Groom's name]'s thoughtfulness.

So here's to [Bride's name] and [Groom's name], and to finding the person who makes even studying for finals feel like an adventure. Cheers!`,
    authorName: 'Sarah Mitchell',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-college-memories-speech-20',
    title: `The College Memories Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.8,
    wordCount: 228,
    excerpt: `Good evening! I'm Amanda, and I've had the privilege of being [Bride's name]'s roommate, study buddy, and partner in crime since our freshman year of college. College was where I...`,
    content: `Good evening! I'm Amanda, and I've had the privilege of being [Bride's name]'s roommate, study buddy, and partner in crime since our freshman year of college. College was where I really got to know [Bride's name] – through late-night study sessions, terrible cafeteria food, and way too many episodes of reality TV.

But it was also where I learned that [Bride's name] is the most loyal, caring person I've ever met. I remember when [Bride's name] first mentioned [Groom's name]. We were supposed to be studying for finals, but instead, she spent three hours telling me about this amazing guy she'd met.

I'd never seen her so excited about someone, and honestly, I was a little worried she'd fail her exams because she couldn't stop smiling long enough to read her textbook. But then I met [Groom's name], and I understood. He's not just [Bride's name]'s boyfriend – he's her best friend, her biggest supporter, and the person who makes her laugh until she snorts.

Yes, [Bride's name], I'm sharing the snorting thing. Watching you two together has taught me what real partnership looks like. You balance each other perfectly – [Bride's name]'s spontaneity and [Groom's name]'s practicality, [Bride's name]'s optimism and [Groom's name]'s thoughtfulness.

So here's to [Bride's name] and [Groom's name], and to finding the person who makes even studying for finals feel like an adventure. Cheers!`,
    authorName: 'Amy Dixon',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-funny-best-friend-speech-21',
    title: `The Funny Best Friend Speech`,
    category: 'maid-of-honor-speech',
    tone: 'funny',
    durationMinutes: 1.7,
    wordCount: 224,
    excerpt: `Hi everyone! I'm Jessica, [Bride's name]'s maid of honor and the person who's been waiting for this day so I could finally share all her embarrassing stories legally. I've known...`,
    content: `Hi everyone! I'm Jessica, [Bride's name]'s maid of honor and the person who's been waiting for this day so I could finally share all her embarrassing stories legally. I've known [Bride's name] for eight years, and in that time, she's taught me so much – like how to contour my cheekbones, why you should never text your ex, and that it's completely normal to cry during dog food commercials.

[Bride's name] is the kind of friend who will drive two hours to bring you soup when you're sick, even though she can barely make toast without burning it. She's also the person who convinced me that wearing Crocs to a wedding was a "fashion statement." Spoiler alert: it wasn't. [Groom's name], you should know what you're getting into.

[Bride's name] will steal your hoodies, cry at every Disney movie, and somehow use all the hot water in a five-minute shower. But she'll also love you fiercely, support your dreams, and make you laugh until your sides hurt. [Bride's name], I'm so happy you found someone who thinks your weird laugh is cute and who doesn't judge you for eating cereal for dinner.

That's true love right there. To [Bride's name] and [Groom's name] – may your love story be filled with laughter, adventure, and an endless supply of hoodies for [Bride's name] to steal!`,
    authorName: 'Michael Foster',
    weddingRole: 'Maid of Honor',
    tags: ['funny', 'maid of honor'],
  },
  {
    slug: 'the-funny-best-friend-speech-22',
    title: `The Funny Best Friend Speech`,
    category: 'maid-of-honor-speech',
    tone: 'funny',
    durationMinutes: 1.7,
    wordCount: 224,
    excerpt: `Hi everyone! I'm Jessica, [Bride's name]'s maid of honor and the person who's been waiting for this day so I could finally share all her embarrassing stories legally. I've known...`,
    content: `Hi everyone! I'm Jessica, [Bride's name]'s maid of honor and the person who's been waiting for this day so I could finally share all her embarrassing stories legally. I've known [Bride's name] for eight years, and in that time, she's taught me so much – like how to contour my cheekbones, why you should never text your ex, and that it's completely normal to cry during dog food commercials.

[Bride's name] is the kind of friend who will drive two hours to bring you soup when you're sick, even though she can barely make toast without burning it. She's also the person who convinced me that wearing Crocs to a wedding was a "fashion statement." Spoiler alert: it wasn't. [Groom's name], you should know what you're getting into.

[Bride's name] will steal your hoodies, cry at every Disney movie, and somehow use all the hot water in a five-minute shower. But she'll also love you fiercely, support your dreams, and make you laugh until your sides hurt. [Bride's name], I'm so happy you found someone who thinks your weird laugh is cute and who doesn't judge you for eating cereal for dinner.

That's true love right there. To [Bride's name] and [Groom's name] – may your love story be filled with laughter, adventure, and an endless supply of hoodies for [Bride's name] to steal!`,
    authorName: 'Chloe Phillips',
    weddingRole: 'Maid of Honor',
    tags: ['funny', 'maid of honor'],
  },
  {
    slug: 'the-short-and-heartfelt-speech-23',
    title: `The Short and Heartfelt Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.1,
    wordCount: 141,
    excerpt: `Hi everyone! I'm Rosie, [Bride's name]'s maid of honor and lifelong friend. When [Bride's name] asked me to be her maid of honor, I was thrilled but also terrified. How do you sum...`,
    content: `Hi everyone! I'm Rosie, [Bride's name]'s maid of honor and lifelong friend. When [Bride's name] asked me to be her maid of honor, I was thrilled but also terrified.

How do you sum up years of friendship and love in just a few minutes? The truth is, [Bride's name] is one of those rare people who makes everyone around her better. She's kind, generous, and has this amazing ability to find joy in the smallest moments.

[Groom's name], from the moment [Bride's name] started talking about you, I could see the change in her. She glowed in a way I'd never seen before. You make her happy in a way that's beautiful to witness.

[Bride's name] and [Groom's name], your love gives me hope and reminds me that fairy tales do exist. So here's to love, laughter, and happily ever after. Cheers!`,
    authorName: 'Zoe Fletcher',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-short-and-heartfelt-speech-24',
    title: `The Short and Heartfelt Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.1,
    wordCount: 141,
    excerpt: `Hi everyone! I'm Rosie, [Bride's name]'s maid of honor and lifelong friend. When [Bride's name] asked me to be her maid of honor, I was thrilled but also terrified. How do you sum...`,
    content: `Hi everyone! I'm Rosie, [Bride's name]'s maid of honor and lifelong friend. When [Bride's name] asked me to be her maid of honor, I was thrilled but also terrified.

How do you sum up years of friendship and love in just a few minutes? The truth is, [Bride's name] is one of those rare people who makes everyone around her better. She's kind, generous, and has this amazing ability to find joy in the smallest moments.

[Groom's name], from the moment [Bride's name] started talking about you, I could see the change in her. She glowed in a way I'd never seen before. You make her happy in a way that's beautiful to witness.

[Bride's name] and [Groom's name], your love gives me hope and reminds me that fairy tales do exist. So here's to love, laughter, and happily ever after. Cheers!`,
    authorName: 'Chris Stewart',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-sisterhood-bond-speech-25',
    title: `The Sisterhood Bond Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 224,
    excerpt: `Good evening, beautiful people! I'm Orla, and I have the incredible honor of being [Bride's name]'s maid of honor and sister from another mister. [Bride's name] and I have been...`,
    content: `Good evening, beautiful people! I'm Orla, and I have the incredible honor of being [Bride's name]'s maid of honor and sister from another mister. [Bride's name] and I have been best friends since we bonded over our mutual hatred of math class in seventh grade.

From that moment, I knew she was my person – the one who would laugh at my terrible jokes, cry with me during romantic movies, and always tell me when my outfit was a disaster. I've watched [Bride's name] grow into this amazing woman who lights up every room she enters. She's the friend who shows up with ice cream when you're heartbroken, who remembers every important date, and who somehow always knows exactly what to say.

Then [Groom's name] came along, and I'll be honest – I was protective. Nobody was good enough for my best friend. But watching them together, I realized that [Groom's name] doesn't just love [Bride's name]; he sees her the way I see her – as the incredible, beautiful soul she is.

[Groom's name], thank you for loving my best friend the way she deserves to be loved. And [Bride's name], thank you for showing me what true love looks like. So here's to a lifetime of adventures, inside jokes, and the kind of love that makes everyone around you believe in fairy tales!`,
    authorName: 'Richard Kelly',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-sisterhood-bond-speech-26',
    title: `The Sisterhood Bond Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 224,
    excerpt: `Good evening, beautiful people! I'm Orla, and I have the incredible honor of being [Bride's name]'s maid of honor and sister from another mister. [Bride's name] and I have been...`,
    content: `Good evening, beautiful people! I'm Orla, and I have the incredible honor of being [Bride's name]'s maid of honor and sister from another mister. [Bride's name] and I have been best friends since we bonded over our mutual hatred of math class in seventh grade.

From that moment, I knew she was my person – the one who would laugh at my terrible jokes, cry with me during romantic movies, and always tell me when my outfit was a disaster. I've watched [Bride's name] grow into this amazing woman who lights up every room she enters. She's the friend who shows up with ice cream when you're heartbroken, who remembers every important date, and who somehow always knows exactly what to say.

Then [Groom's name] came along, and I'll be honest – I was protective. Nobody was good enough for my best friend. But watching them together, I realized that [Groom's name] doesn't just love [Bride's name]; he sees her the way I see her – as the incredible, beautiful soul she is.

[Groom's name], thank you for loving my best friend the way she deserves to be loved. And [Bride's name], thank you for showing me what true love looks like. So here's to a lifetime of adventures, inside jokes, and the kind of love that makes everyone around you believe in fairy tales!`,
    authorName: 'Kate Murphy',
    weddingRole: 'Maid of Honor',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-wisdom-and-advice-speech-27',
    title: `The Wisdom and Advice Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 221,
    excerpt: `Hi everyone! I'm Lisa, [Bride's name]'s maid of honor and someone who's been happily married for seven years. [Bride's name], you asked me for marriage advice, and while I'm still...`,
    content: `Hi everyone! I'm Lisa, [Bride's name]'s maid of honor and someone who's been happily married for seven years. [Bride's name], you asked me for marriage advice, and while I'm still figuring it out myself, here's what I've learned: Marriage isn't just about loving someone on their best days – it's about choosing to love them especially on their worst days.

I've watched you and [Groom's name] navigate challenges together, and what I admire most is how you face everything as a team. You don't just love each other; you like each other, which is actually harder to find than you might think. [Groom's name], you're getting an wonderful woman.

[Bride's name] is the friend who remembers your birthday, sends encouraging texts during tough times, and somehow always knows when you need chocolate. She's also stubborn, terrible at directions, and will rearrange your furniture without asking. But trust me, life is never boring with her.

My advice for your marriage: Always choose kindness over being right, never underestimate the power of a good laugh, and remember that the strongest couples are the ones who can weather storms together and still find reasons to dance. To [Bride's name] and [Groom's name] – may your marriage be filled with endless adventures, deep conversations, and the kind of love that inspires everyone around you. Congratulations!`,
    authorName: 'Chloe Dixon',
    weddingRole: 'Maid of Honor',
    tags: ['inspirational', 'maid of honor'],
  },
  {
    slug: 'the-wisdom-and-advice-speech-28',
    title: `The Wisdom and Advice Speech`,
    category: 'maid-of-honor-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 221,
    excerpt: `Hi everyone! I'm Lisa, [Bride's name]'s maid of honor and someone who's been happily married for seven years. [Bride's name], you asked me for marriage advice, and while I'm still...`,
    content: `Hi everyone! I'm Lisa, [Bride's name]'s maid of honor and someone who's been happily married for seven years. [Bride's name], you asked me for marriage advice, and while I'm still figuring it out myself, here's what I've learned: Marriage isn't just about loving someone on their best days – it's about choosing to love them especially on their worst days.

I've watched you and [Groom's name] navigate challenges together, and what I admire most is how you face everything as a team. You don't just love each other; you like each other, which is actually harder to find than you might think. [Groom's name], you're getting an wonderful woman.

[Bride's name] is the friend who remembers your birthday, sends encouraging texts during tough times, and somehow always knows when you need chocolate. She's also stubborn, terrible at directions, and will rearrange your furniture without asking. But trust me, life is never boring with her.

My advice for your marriage: Always choose kindness over being right, never underestimate the power of a good laugh, and remember that the strongest couples are the ones who can weather storms together and still find reasons to dance. To [Bride's name] and [Groom's name] – may your marriage be filled with endless adventures, deep conversations, and the kind of love that inspires everyone around you. Congratulations!`,
    authorName: 'Claire Reid',
    weddingRole: 'Maid of Honor',
    tags: ['inspirational', 'maid of honor'],
  },
  {
    slug: 'sentimental-father-of-the-bride-29',
    title: `Sentimental Father of the Bride`,
    category: 'father-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.0,
    wordCount: 131,
    excerpt: `When Freya was little, she was… let's say, energetic. Some dads dream of quiet, studious daughters. I got fireworks. At school plays, she was the child who improvised her lines...`,
    content: `When Freya was little, she was… let's say, energetic. Some dads dream of quiet, studious daughters. I got fireworks.

At school plays, she was the child who improvised her lines. At sports day, she was the one who started a conga line instead of running the race. And at home, she was the one who painted the dog pink 'because Barbie needed a pony'.

She's always been spirited, bold, and utterly impossible to ignore. Watching her grow into the person she is now – still spirited, still bold, but also wise and kind – has been the greatest joy of my life. So let's raise a glass to Freya – my firecracker, my daughter, and now, a wife.

May her spirit keep lighting up every room she walks into. To Freya.`,
    authorName: 'Jennifer Rhodes',
    weddingRole: 'Father of the Bride',
    tags: ['heartfelt', 'father'],
  },
  {
    slug: 'short-father-of-the-bride-speech-30',
    title: `Short Father of the Bride Speech`,
    category: 'father-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 0.6,
    wordCount: 80,
    excerpt: `I'll keep this short – because when I tried practising a longer version, my dog fell asleep. My daughter has been my pride since the day she was born. I've been proud of her as a...`,
    content: `I'll keep this short – because when I tried practising a longer version, my dog fell asleep. My daughter has been my pride since the day she was born. I've been proud of her as a child, proud of her as a woman, and today, I'm proud to see her as a wife.

To my daughter, who will always be the brightest part of my life. To love, to family, and to her new husband who better look after her.`,
    authorName: 'Sophie Hayes',
    weddingRole: 'Father of the Bride',
    tags: ['heartfelt', 'short', 'father'],
  },
  {
    slug: 'the-humorous-father-speech-31',
    title: `The Humorous Father Speech`,
    category: 'father-of-bride-speech',
    tone: 'funny',
    durationMinutes: 1.9,
    wordCount: 245,
    excerpt: `Hi everyone! I'm David, [Bride's name]'s father, and I've been looking forward to this day for years – not just because I'm gaining a wonderful son-in-law, but because I finally...`,
    content: `Hi everyone! I'm David, [Bride's name]'s father, and I've been looking forward to this day for years – not just because I'm gaining a wonderful son-in-law, but because I finally have someone else to help me understand [Bride's name]'s shopping habits! [Bride's name], my dear daughter, you've always been... let's say "spirited." You were the child who would negotiate bedtime like a lawyer, organize elaborate tea parties for your stuffed animals, and somehow convince your mother that dessert was a food group.

I remember when you were sixteen and wanted to learn to drive. You said, "Dad, it's easy – you just point the car where you want to go!" Well, that's exactly how you've approached life, and somehow, it's worked out perfectly. [Groom's name], I hope you're prepared for what you've gotten yourself into.

[Bride's name] will rearrange your furniture without asking, she takes longer to get ready than it takes to plan a vacation, and she will definitely steal your french fries. But she'll also be your biggest supporter, your most loyal friend, and the person who makes every day an adventure. I've watched you two together, and what I love most is how you complement each other.

[Groom's name], you're the calm to her storm, and [Bride's name], you're the excitement to his steady nature. So here's to [Bride's name] and [Groom's name] – may your marriage be filled with laughter, love, and someone else to blame when the dishes don't get done!`,
    authorName: 'Luke Crawford',
    weddingRole: 'Father of the Bride',
    tags: ['funny', 'father'],
  },
  {
    slug: 'the-memory-filled-father-speech-32',
    title: `The Memory-Filled Father Speech`,
    category: 'father-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 258,
    excerpt: `Good evening, friends and family. I'm Callum, [Bride's name]'s father, and I want to share some memories that show you exactly who my daughter is. When [Bride's name] was seven, we...`,
    content: `Good evening, friends and family. I'm Callum, [Bride's name]'s father, and I want to share some memories that show you exactly who my daughter is. When [Bride's name] was seven, we were at the park when she noticed a little boy crying because he'd lost his toy car.

Without hesitation, she spent the next hour helping him look for it. We never found that car, but [Bride's name] gave him one of her own toys and said, "Now you have something even better – a new friend." That's [Bride's name] – always thinking of others, always ready to help, always finding ways to make the world a little brighter. I remember her high school graduation, when she thanked me in her speech for "teaching her to be brave enough to chase her dreams." What she didn't know is that she taught me what true courage looks like – the courage to be kind, to stand up for what's right, and to love unconditionally.

When [Bride's name] introduced us to [Groom's name], I knew immediately that he was special. Not just because of how he treated her, but because of how she changed when she was with him. She became even more confident, more joyful, more herself.

[Groom's name], thank you for seeing my daughter for the amazing person she is. Thank you for encouraging her dreams and being her partner in every sense of the word. To [Bride's name] and [Groom's name], may your marriage be filled with the same kindness, joy, and love that brought you together.`,
    authorName: 'Michael Brooks',
    weddingRole: 'Father of the Bride',
    tags: ['heartfelt', 'father'],
  },
  {
    slug: 'the-proud-father-speech-33',
    title: `The Proud Father Speech`,
    category: 'father-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.6,
    wordCount: 208,
    excerpt: `Good evening, everyone! I'm Robert, [Bride's name]'s father, and I couldn't be prouder to be standing here today. Twenty-five years ago, [Bride's name] came into our lives and...`,
    content: `Good evening, everyone! I'm Robert, [Bride's name]'s father, and I couldn't be prouder to be standing here today. Twenty-five years ago, [Bride's name] came into our lives and turned our world upside down – in the most wonderful way possible.

From her first steps to her first day of school, from her graduation to her career achievements, she has filled our lives with joy, laughter, and immense pride. [Bride's name], you've always been my little girl, but watching you grow into the wonderful woman you are today has been the greatest privilege of my life. You're kind, intelligent, determined, and have a heart bigger than anyone I know.

[Groom's name], when [Bride's name] first told me about you, I saw a light in her eyes that I'd never seen before. You make my daughter happy, and that means everything to me. Thank you for loving her, supporting her dreams, and being the partner she deserves.

As you begin this new chapter together, remember that marriage is a journey of partnership, understanding, and endless love. May your days be filled with laughter, your hearts with joy, and your home with happiness. To [Bride's name] and [Groom's name] – so here's to a lifetime of love and beautiful memories together.`,
    authorName: 'Mark Parker',
    weddingRole: 'Father of the Bride',
    tags: ['heartfelt', 'father'],
  },
  {
    slug: 'the-short-and-sweet-father-speech-34',
    title: `The Short and Sweet Father Speech`,
    category: 'father-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.0,
    wordCount: 126,
    excerpt: `Good evening! I'm Michael, [Bride's name]'s father. As fathers, we spend years protecting our daughters, teaching them, and preparing them for the world. But the greatest joy...`,
    content: `Good evening! I'm Michael, [Bride's name]'s father. As fathers, we spend years protecting our daughters, teaching them, and preparing them for the world.

But the greatest joy comes when we see them find someone who loves them as much as we do. [Groom's name], you are that person for [Bride's name]. I see how you look at her, how you support her dreams, and how you make her laugh.

You have my respect, my gratitude, and my blessing. [Bride's name], you will always be my little girl, but today I'm proud to watch you become [Groom's name]'s wife. You deserve all the happiness in the world.

May your marriage be blessed with love, laughter, and a lifetime of beautiful moments together. Cheers to the happy couple!`,
    authorName: 'Jack Stewart',
    weddingRole: 'Father of the Bride',
    tags: ['heartfelt', 'father'],
  },
  {
    slug: 'the-wisdom-filled-father-speech-35',
    title: `The Wisdom-Filled Father Speech`,
    category: 'father-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.8,
    wordCount: 237,
    excerpt: `Hi everyone! I'm William, [Bride's name]'s father, and someone who's been happily married for thirty years. [Bride's name], from the moment you were born, you've been teaching me...`,
    content: `Hi everyone! I'm William, [Bride's name]'s father, and someone who's been happily married for thirty years. [Bride's name], from the moment you were born, you've been teaching me about love, patience, and the incredible joy of being a father.

Watching you grow into the remarkable woman you are today has been my greatest accomplishment. [Groom's name], you're not just gaining a wife – you're gaining a best friend, a partner, and someone who will love you unconditionally. Treat that gift with the respect and care it deserves.

Let me share some wisdom about marriage: Love is not just a feeling – it's a choice you make every single day. There will be easy days and challenging days, but if you choose to love each other through both, you'll build something beautiful and lasting. Always communicate openly and honestly.

Listen not just to respond, but to understand. Be generous with your appreciation and patient with each other's flaws. Remember that you're on the same team, facing life's challenges together.

Most importantly, never forget to laugh together. The couples who stay happily married are those who can find joy in the ordinary moments and humor in life's unexpected turns. [Bride's name] and [Groom's name], as you begin this amazing journey together, know that you have our love, our support, and our prayers for a lifetime of happiness. So here's to a marriage filled with love, laughter, and endless adventures together!`,
    authorName: 'Claire Walsh',
    weddingRole: 'Father of the Bride',
    tags: ['inspirational', 'father'],
  },
  {
    slug: 'heartfelt-mother-of-the-bride-speech-36',
    title: `Heartfelt mother of the bride speech`,
    category: 'mother-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.5,
    wordCount: 200,
    excerpt: `Everyone, thank you so much for being here today. For those of you who don't know, my name is [Your name] and I'm [Bride's name]'s very proud mum. I know it's a little...`,
    content: `Everyone, thank you so much for being here today. For those of you who don't know, my name is [Your name] and I'm [Bride's name]'s very proud mum. I know it's a little untraditional for the mother of the bride to make a speech.

But, when your daughter asks you to say a few words, you don't say no! It only feels like yesterday I brought her home from the hospital, and I swear just a few minutes ago she was asking me to help her pick out her first school uniform. Now, here she is, getting married to the love of her life.

That's how I know [Groom's name] is the luckiest man in the world. Because he's marrying someone truly special. I'll tell you today what my mother told me on my wedding day - "you need to choose each other.

Every day. Life isn't going to be sunshine and roses. Sometimes things get tough, and you need to choose to keep fighting for each other." And with that, please join me in raising a glass to the new Mr and Mrs [Surname].

May your life together be filled with love, laughter, and a lifetime of happiness. Cheers!`,
    authorName: 'Richard Hughes',
    weddingRole: 'Mother of the Bride',
    tags: ['heartfelt', 'mother'],
  },
  {
    slug: 'playful-mother-of-the-bride-speech-37',
    title: `Playful mother of the bride speech`,
    category: 'mother-of-bride-speech',
    tone: 'funny',
    durationMinutes: 2.0,
    wordCount: 254,
    excerpt: `Hello my darlings! Don't you all look fabulous? I'm sure you all know me by now, but for those of you I haven't had the pleasure of cornering at the drinks table yet, my name is...`,
    content: `Hello my darlings! Don't you all look fabulous? I'm sure you all know me by now, but for those of you I haven't had the pleasure of cornering at the drinks table yet, my name is [Your name] and I'm [Bride's name]'s very proud mum.

Standing here today, in front of all the friends, family, and colleagues of my beautiful girl, I couldn't be prouder. (And yes, I'm taking all the credit for that, can I?). Honestly, [Bride's name] has been a joy from the moment she arrived in this world. From insisting on wearing a tiara to school at age five - because "a princess always needs her crown" - to choosing her wedding dress like she was selecting the Crown Jewels, she's always known exactly what she wants.

And then, along came [Groom's name]. Now, I'll admit, as her mum, I had high standards - some might even say impossible ones! But when I saw the way he looked at [Bride's name], I knew he was the one.

Now, a little advice from someone who's been married a fair few years (and survived to tell the tale!). [Bride's name], try not to leave all the cupboard doors open (yes, I've noticed), and [Groom's name], learn where the kitchen is! So, let's raise our glasses to my fabulous daughter and her new husband.

[Bride's name], you've always been my greatest joy, and seeing you this happy makes my heart full. So here's to a lifetime of love, laughter, and maybe a bit of chaos - because where's the fun without it?`,
    authorName: 'Charlotte Campbell',
    weddingRole: 'Mother of the Bride',
    tags: ['funny', 'mother'],
  },
  {
    slug: 'short-and-sweet-mother-of-the-bride-speech-38',
    title: `Short and sweet mother of the bride speech`,
    category: 'mother-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 0.9,
    wordCount: 114,
    excerpt: `Friends, family… people who've wandered in off the street, welcome! My name is [Your name], and I'm [Bride's name]'s mum. Now, where do I start? [Bride's name], my lovely girl...`,
    content: `Friends, family… people who've wandered in off the street, welcome! My name is [Your name], and I'm [Bride's name]'s mum. Now, where do I start?

[Bride's name], my lovely girl. You're the greatest gift I could have asked for in this world. Watching you grow into the amazing woman you are today has been the honour of my life.

And you, [Groom's name], you made it all possible. You love my girl the way she deserves to be loved, and for that, I'll be eternally grateful. So, let's raise a glass to [Bride's name] and [Groom's name].

May your life together be filled with love, laughter, and all the happiness in the world. Cheers!`,
    authorName: 'Alex Phillips',
    weddingRole: 'Mother of the Bride',
    tags: ['heartfelt', 'mother'],
  },
  {
    slug: 'emotional-groom-speech-39',
    title: `Emotional groom speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 256,
    excerpt: `I'm going to do my best to get through this without crying, but I can't promise anything. You've already seen me tear up during the vows, so let's just accept that emotions are...`,
    content: `I'm going to do my best to get through this without crying, but I can't promise anything. You've already seen me tear up during the vows, so let's just accept that emotions are running high! I want to start by thanking the people who got me here - not just to this day, but to this moment in life.

To my parents, you gave me a foundation built on love, resilience, and the courage to dream big. To my new family, [Bride's name]'s parents, you raised an extraordinary woman, and I know that didn't happen by accident. To our wedding party, you've been more than just our backup dancers today - you've been our champions, our supporters, and our friends.

To our wonderful guests, whether you travelled from far or popped 10 minutes down the road, your presence means everything. For the wonderful teams working today, thank you. People don't say this enough, but you are as much a part of this day as anyone standing up here.

And now, the person who's the reason we're all here - [Bride's name]. When I look at you, I see my entire world. You are everything to me.

From the freckles on your arms to the way you laugh at my terrible jokes, I love every single part of you. I promise to support you in every dream you have, no matter how wild or ambitious. So now, let's raise a glass - not just to today, but to the journey ahead.

To my wife, my soulmate, and the love of my life, [Bride's name]. Cheers.`,
    authorName: 'Harry Page',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'funny-groom-speech-40',
    title: `Funny Groom Speech`,
    category: 'groom-speech',
    tone: 'funny',
    durationMinutes: 1.2,
    wordCount: 162,
    excerpt: `Good evening, everyone. When I first met Maisie, I knew she was clever, kind, and beautiful. What I didn't know was that she was also a bigger nerd than me – and that's saying...`,
    content: `Good evening, everyone. When I first met Maisie, I knew she was clever, kind, and beautiful. What I didn't know was that she was also a bigger nerd than me – and that's saying something.

On our second date she beat me at Scrabble using the word 'quizzify'… which I still maintain is made up. On our third, she corrected my pronunciation of Tolkien characters. By the fourth, she had somehow convinced me that Star Trek captains make great role models for relationships.

I should have run. But instead, I bought a replica lightsaber and knew I was done for. Today, as I look at her, I realise she's the only person who could love me enough to tolerate my Star Wars vs Star Trek debates, and still want to marry me.

So let's raise a glass to Maisie – the nerd who out-nerded me, the love of my life, and the woman who will always win our board games. To Maisie!`,
    authorName: 'Owen Bennett',
    weddingRole: 'Groom',
    tags: ['funny', 'groom'],
  },
  {
    slug: 'funny-groom-speech-example-41',
    title: `Funny Groom Speech Example`,
    category: 'groom-speech',
    tone: 'funny',
    durationMinutes: 9.6,
    wordCount: 1242,
    excerpt: `Distinguished guests, guests of no particular distinction, relatives young and old, friends, freeloaders, hangers on, gypsies, tramps, thieves and anyone else who may have...`,
    content: `Distinguished guests, guests of no particular distinction, relatives young and old, friends, freeloaders, hangers on, gypsies, tramps, thieves and anyone else who may have wandered in, you are all about to witness a unique event in history. The very first and very last time that my wife is going to let me speak on behalf of both of us. However, it is a privilege and an honour to do so.

I just hope that, so soon into our married life, I don't let Pam down. I'll try to keep this moving along, but I make no promises! To be honest I didn't really know where to start so I thought I'd trawl the internet.

After a couple of hours I'd found some really, really good stuff. But then I remembered that I was supposed to be writing a speech. Before I start, there will be plenty of toasts over the next few minutes so please make sure that your glasses are charged.

Firstly, we'd like to thank Arthur for his kind words and good wishes. And to thank him for paying for this lovely reception …(pause and look at him) What? I thought you said…….No I'm only joking – you don't need to find the key for the padlock on your wallet!

It's lovely to see so many of our family and friends here today to help us celebrate the happiest day of our lives. I know that some of you have travelled a long way to be here and that means a lot to us. It really wouldn't be the same without you all.

It'd be a darned sight cheaper, but that's not the point. Thank you all for your very generous gifts, and a special thanks to those of you who have given cheques. No, we really are grateful for those, especially as we'll be using the details on the cheques to set up direct debits paying our bills for years to come.

Who said that identity fraud is a bad idea? Unfortunately, it's not been possible to have everyone we love here with us today, but we know they're here with us in spirit and they're not only in our thoughts today, but more importantly they're with us in our hearts. So, with them in mind, would you please all stand, raise your glasses, and join me in a toast to absent family & friends.

I'd also like to sincerely thank Pam's mum and dad, Val and Graham, for making me feel like the son they never wanted – sorry, the son they never had, right from day two. Day one was a bit rough, but I *think* they're over it now. Her brothers, too, have never made me feel anything other than welcome and I thank them for that.

It can be very difficult when two families come together but we have been extremely lucky. Pam's children, Arthur and Rosie, have welcomed me into their family and my children, Molly and Maisie, have welcomed Pam into theirs. We all get on so well, and that is a rare thing indeed.

And something that has been made possible by all of our children. So I'd like to propose a toast to Arthur, Rosie, Molly and Maisie. My Dad has helped me enormously over the years and has seen me through everything life has thrown at them.

Mainly thick, if I'm being honest but he's been there for me and I hope that I have done him proud. I really couldn't have asked for a better father and I thank you for everything that you have done, not just for me but for me and my wife. Thank you.

There is an unwritten rule of wedding etiquette that states that nobody should look more handsome than the groom and I'd like to thank our ushers Declan and Graham for sticking to that rule to the letter. They have both lent an air of 'nightclub bouncer respectability' to their roles and I particularly admired the way they searched the ladies' handbags and frisked the men as they came in with such discretion and subtlety. I'm not quite sure that saying "You'll sit where you're ruddy well put" was really in the spirit of the day, but we'll let that pass.

Thanks to both of you. I have known Malcolm, my Best Man, for nearly seventeen years now and throughout that time he has been there for me when it matters and is always ready with an encouraging word, and a welcome bottle of Rioja when things are going badly. And, if I'm being honest, when things are going well.

I'd like to thank him for all his help in organizing the stag do, and for creating the table plan for us. But, most importantly I'd like to thank him for being a true friend. However, there is something that I need to make you aware of.

Rich suffers from a strange condition that occasionally causes him to drift in and out of weird, strange flights of fantasy. He has been known to make up fanciful stories, absolutely believing them to be true. Anyway, it's only right that I advise you all of this ahead of his speech.

As I say, he is a true friend and I wouldn't want you to go upsetting him, so if you could bear with him, even join with him on his journey of make believe, I would appreciate it. Apart from my wife, there are three other beautiful ladies here today. Pam's daughter Rosie and my daughters, Molly and Maisie.

We'd like to thank them very much for being such wonderful bridesmaids. So, please stand and join me in a toast to the bridesmaids. Finally, I would like to thank my wife – I think I'm going to enjoy getting used to saying that – for agreeing to marry me and for making me the happiest man in the world.

I think you'll agree that she looks absolutely gorgeous today and when she walked up the aisle, she took my breath away. I didn't know I was missing something until Pam showed me what it felt like to have it, and I think that sums us up perfectly. Now if I had to single out one thing about why I love Pam so much, it would be the fact that she makes me happier than I ever dreamed I could be.

And I intend to spend the rest of my life making sure that the reverse is also true. I know that Pam has put a huge amount of effort into making today perfect and I think that she has done that, and more. Having lived with Pam for a couple of years now, I have learned a valuable lesson – when I'm wrong, admit it.

When I'm right, keep quiet! Seriously though, I never have a problem finding the words to express my love for Pam, but if I start then I probably won't be able to stop. Suffice to say that, Pam, I love you so much and I can't wait to grow old with you.

Everyone, please stand and raise your glasses to my wife, Pam. Now, I'm not going to stand here all afternoon and bore you all with a load of stale old jokes. That's the Best Man's job! So, with that said, I'd like to hand over to Malcolm.`,
    authorName: 'Alex Hughes',
    weddingRole: 'Groom',
    tags: ['funny', 'groom'],
  },
  {
    slug: 'funny-groom-speech-42',
    title: `Funny groom speech`,
    category: 'groom-speech',
    tone: 'funny',
    durationMinutes: 2.0,
    wordCount: 266,
    excerpt: `Everyone, boys and girls - it's time for the main event. I'm joking of course, we all know the food is the main event! In all seriousness, thank you all for being here today. For...`,
    content: `Everyone, boys and girls - it's time for the main event. I'm joking of course, we all know the food is the main event! In all seriousness, thank you all for being here today.

For those of you who don't know me - and if you don't by now, I'm not sure you will - my name is [Your name]. I'm reminded every day of how lucky I am. Not only for my beautiful new bride, but also for the family and friends who've supported us.

To my new in-laws, thank you for welcoming me into your family. From the first time I met you, you made me feel like part of something special. To the wedding party - you're absolute legends.

You've kept today ticking along, even when things inevitably went wrong. To the groomsmen, well, what can I say? Thanks for showing up on time and in matching suits - it's more than I expected!

To our wonderful guests, thank you for being here today. For travelling far and wide, and for smiling politely at all our terrible jokes. To the teams that made today possible, thank you.

From the chefs to the servers to the wedding coordinator, you've been brilliant. And now, the main event: [Bride's name]. My wife.

You are the most incredible person I've ever met. You've brought so much joy, laughter, and love into my life. People often say you marry someone who makes you a better person, and I think that's true.

I can't promise I'll be perfect, but I can promise to always try. So here's to the new Mrs [Surname], the woman who changed everything. Cheers!`,
    authorName: 'Sam Lane',
    weddingRole: 'Groom',
    tags: ['funny', 'groom'],
  },
  {
    slug: 'heartfelt-groom-speech-43',
    title: `Heartfelt groom speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 215,
    excerpt: `Can you believe today is already here? It only feels like yesterday that I popped the question to my beautiful bride. I want to take this opportunity to say something I know I...`,
    content: `Can you believe today is already here? It only feels like yesterday that I popped the question to my beautiful bride. I want to take this opportunity to say something I know I don't say enough - thank you!

Thank you to my parents for raising me, supporting me through the good times and the bad, and for being there every single step of the way. To my new family - [Bride's name]'s parents and siblings - you've welcomed me with open arms, a full plate of food, and total acceptance. I'm so grateful to have you in my corner.

To the wonderful wedding party - thank you. You've held everything together today. To the bridesmaids, thank you for looking absolutely stunning and for supporting my beautiful wife.

And to my groomsmen, you've been the unsung heroes. And now, the part I've been most excited about: my wife. (Pause for effect, because that still feels surreal to say!) You make me laugh, you make me think, and occasionally, you make me clean the oven. And honestly, I wouldn't have it any other way.

To everyone here today - thank you for celebrating with us, for your love, your laughter, and for not running away when you heard some of the stories about me from school! So here's to love, laughter, and a lifetime of happiness. Cheers!`,
    authorName: 'Andrew Webster',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'short-best-groom-speech-44',
    title: `Short Best Groom Speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 3.1,
    wordCount: 399,
    excerpt: `Firstly, I would like to say thank you to Frank and Diane. Thank you for you beautiful daughter Beth. Your contribution to today has been amazing. I want to thank you for taking me...`,
    content: `Firstly, I would like to say thank you to Frank and Diane. Thank you for you beautiful daughter Beth. Your contribution to today has been amazing.

I want to thank you for taking me into his family, it really has meant a lot to me. Most importantly, thank you for raising such an amazing and beautiful woman. Doesn't my wife look amazing today.

Wow, called Beth my wife. Feels weird. Secondly, I'd like to thank all of you for coming today.

It is amazing to feel all this love and friendship. Thank you for your good wishes and for joining us in our celebration. Also thank you for your gifts, I am sure all of these will help us in our new life together, so thank you.

Also thank you to the bridesmaids, you all look amazing. Today wouldn't have been the same without you helping my beautiful bride through today. So thank you.

Finally, to my wife. I just want to say a massive thank-you for always being here for me, making me happy, and marrying me. I love you.

For those of you who don't know, us men do have dreams of our wedding day when we are younger. They may not be about the same as you women, about dresses and big churches, but nevertheless we do have the dreams. When I was younger, my dream was to marry a beautiful woman, and be happy for the rest of our lives, have a family and to have a nice home.

This is what I wanted from a marriage. When I met Beth I knew that she was different. She made me laugh in different ways, and the feeling of happiness I get when I am around her cannot be described.

Wife is more than I could ever have hoped for. I love you honey. There are so many good times that Beth and I have enjoyed together, days out, holidays and nights out with friends and family.

But like all couples we have had lows. Fallings out, family bereavements and arguments between ourselves. But all these factors have made us who we are today.

A strong couple, who work brilliantly together. Finally, I would like to say thank you again to all of you for celebrating with us today. And could you all please join me in raising your glasses to my beautiful wife, the one I love, Beth.`,
    authorName: 'Rebecca Brooks',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'short', 'groom'],
  },
  {
    slug: 'sweet-groom-speech-with-step-daughter-45',
    title: `Sweet Groom Speech with Step-daughter`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 1.0,
    wordCount: 126,
    excerpt: `When I first met Isla, I thought she was amazing. When I discovered she had a daughter, I thought, 'Right, step up, this matters.' And when I saw the two of them together – the...`,
    content: `When I first met Isla, I thought she was amazing. When I discovered she had a daughter, I thought, 'Right, step up, this matters.' And when I saw the two of them together – the way she laughed at bedtime stories, the way her daughter snuck into bed for cuddles – I knew I wasn't just falling for one person, but two. Isla isn't just the love of my life – she's the best mum I've ever seen, and today I feel like the luckiest man alive to become part of their little team.

So let's raise a glass – to Isla, and to the daughter who's already taught me more about love, patience and glitter than I thought possible. To family, to love, to Isla.`,
    authorName: 'Sarah Phillips',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'the-funny-groom-speech-46',
    title: `The Funny Groom Speech`,
    category: 'groom-speech',
    tone: 'funny',
    durationMinutes: 2.8,
    wordCount: 366,
    excerpt: `Good evening, everyone! Thank you all for being here, and thank you for not running away when you saw my dance moves during the father-daughter dance rehearsal. First, I want to...`,
    content: `Good evening, everyone! Thank you all for being here, and thank you for not running away when you saw my dance moves during the father-daughter dance rehearsal. First, I want to thank my parents for everything they've done for me, including not disowning me when I decided to major in philosophy and then change my mind six months later.

Your patience and support have been incredible, even when I made questionable life choices like that time I thought I could fix the sink myself. To [Bride's name]'s parents – thank you for raising such an amazing daughter and for only slightly intimidating me when I asked for your blessing. I promise to take good care of her, even though she's probably going to end up taking better care of me.

[Bride's name], when we first met, I was convinced you were way out of my league. You were smart, beautiful, funny, and you actually knew how to cook real food. I was a guy who considered cereal a food group and thought doing laundry meant wearing the same shirt inside out.

But somehow, you saw something in me worth keeping. Maybe it was my charming personality, my devastating good looks, or the fact that I could reach things on high shelves. Whatever it was, I'm grateful every day that you took a chance on me.

You've been incredibly patient with my quirks – like my insistence on organizing the bookshelf by color instead of author, my tendency to quote movies at inappropriate times, and my belief that asking for directions is a sign of weakness. In return, I've learned to appreciate your quirks too – like how you need exactly seven minutes to get ready but somehow it always takes forty-five, how you cry at every commercial with animals, and how you have strong opinions about which way the toilet paper should hang. For the record, you're right about that one.

You make me laugh every day, you make me want to be a better person, and you make even my worst dad jokes seem funny. That's true love right there. So here's to a lifetime of laughter, love, and me pretending to understand your skincare routine!`,
    authorName: 'Claire Gibson',
    weddingRole: 'Groom',
    tags: ['funny', 'groom'],
  },
  {
    slug: 'the-gratitude-focused-groom-speech-47',
    title: `The Gratitude-Focused Groom Speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 3.3,
    wordCount: 429,
    excerpt: `Good evening, everyone! Standing here tonight, surrounded by all of you, I'm overwhelmed with gratitude. I want to start by thanking my parents. You've been my foundation, my...`,
    content: `Good evening, everyone! Standing here tonight, surrounded by all of you, I'm overwhelmed with gratitude. I want to start by thanking my parents.

You've been my foundation, my guides, and my greatest examples of love and commitment. You taught me the importance of integrity, hard work, and treating others with kindness. You showed me what a strong marriage looks like through your own example, and you've supported me every step of the way.

Thank you for everything you've given me and for raising me to be the man [Bride's name] deserves. To my siblings – thank you for being my first friends, my biggest supporters, and for keeping me humble throughout my life! You've been there through every milestone and challenge, and I'm so grateful to have you in my life.

To my groomsmen – you are my chosen brothers. Thank you for the years of friendship, for celebrating my victories, for supporting me through difficult times, and for making me laugh until my sides hurt. You've enriched my life in countless ways.

To [Bride's name]'s family – thank you for welcoming me with such open hearts and for raising the wonderful woman I'm lucky enough to call my wife. You've made me feel like part of your family from day one, and I'm so grateful for your love and acceptance. To all our friends and extended family – thank you for the role you've played in our lives.

You've supported us, encouraged us, and celebrated with us. Your presence here tonight means more than you know. [Bride's name] – you are my greatest blessing.

You've shown me what it means to be truly loved and cherished. You believe in me even when I doubt myself, you support my dreams even when they seem impossible, and you love me not despite my flaws, but as a complete person. You've made me a better man just by being in my life.

You've taught me patience, compassion, and the importance of really listening. You've shown me that love is both a feeling and a choice, and I choose you every single day. I promise to love you, honor you, and support you for all the days of my life.

I promise to be your partner in every adventure, your comfort in difficult times, and your biggest cheerleader in everything you do. Thank you all for being here to witness our love and for being part of our journey. We are genuinely lucky to have all of you in our lives. So here's to love, family, and the beautiful community that surrounds us!`,
    authorName: 'Charlotte Hart',
    weddingRole: 'Groom',
    tags: ['groom'],
  },
  {
    slug: 'the-heartfelt-groom-speech-48',
    title: `The Heartfelt Groom Speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.7,
    wordCount: 351,
    excerpt: `Good evening, everyone! Thank you all for being here to celebrate this incredible day with [Bride's name] and me. Looking out at all of you – our family, our friends, the people...`,
    content: `Good evening, everyone! Thank you all for being here to celebrate this incredible day with [Bride's name] and me. Looking out at all of you – our family, our friends, the people who have shaped our lives – I'm overwhelmed with gratitude.

You've traveled near and far to be here with us, and that means more than you know. First, I want to thank my parents. You've given me everything – your love, your guidance, your example of what a strong marriage looks like.

You taught me to be honest, to work hard, and to treat others with respect. Most importantly, you showed me what it means to love someone unconditionally. Thank you for raising me to recognize real love when I found it.

To [Bride's name]'s parents – thank you for raising such an incredible daughter and for welcoming me into your family with such warmth. I promise to love and cherish her always, and to be the man she deserves. To our wedding party – thank you for standing by our sides today and for all the support you've shown us.

You've made this entire journey so much more meaningful. And to my beautiful wife – yes, I can finally say that! [Bride's name], two years ago, you walked into my life and changed everything.

You've made me a better man just by loving me. You believe in me when I don't believe in myself, you make me laugh every single day, and you've shown me what it means to have a true partner in life. I love your kindness, your strength, your sense of humor, and the way you see the best in everyone around you.

I love how you make our house feel like home, how you remember every important detail, and how you can make even the most ordinary day feel special. I promise to love you through all of life's adventures, to support your dreams as you support mine, and to choose you every single day for the rest of our lives. Thank you all for being here to witness our love. Now let's celebrate!`,
    authorName: 'Nathan Gibson',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'the-just-one-story-speech-49',
    title: `The Just-One-Story Speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 0.8,
    wordCount: 101,
    excerpt: `I could stand here and give you a list of reasons why I love Orla. But instead, I want to tell you one story. Two years ago, we got caught in a storm hiking in Wales. My umbrella...`,
    content: `I could stand here and give you a list of reasons why I love Orla. But instead, I want to tell you one story. Two years ago, we got caught in a storm hiking in Wales.

My umbrella flipped, my shoes gave up, and I was about to lose it. Orla? She just laughed, sang 'Singing in the Rain,' and kept going.

That's when I knew – I didn't just want her in the sunshine, I wanted her in every storm too. To Orla – the woman who makes bad weather feel like the best day of my life. To Orla.`,
    authorName: 'David Murphy',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'the-short-and-sweet-groom-speech-50',
    title: `The Short and Sweet Groom Speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 1.1,
    wordCount: 137,
    excerpt: `Good evening, everyone! I'll keep this brief because I know you're all eager to see if I can actually dance without stepping on [Bride's name]'s dress. Thank you all for being...`,
    content: `Good evening, everyone! I'll keep this brief because I know you're all eager to see if I can actually dance without stepping on [Bride's name]'s dress. Thank you all for being here to celebrate with us.

Having everyone we love in one room is the greatest gift we could ask for. To our families – thank you for your love, your support, and for raising us to find each other. [Bride's name] – you are my best friend, my greatest love, and my perfect partner.

You've made me the happiest man in the world, and I can't wait to spend the rest of my life making you as happy as you make me. I promise to love you, laugh with you, and support you through all of life's adventures. Now let's eat, dance, and celebrate love! Cheers!`,
    authorName: 'Ryan Morgan',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'the-story-telling-groom-speech-51',
    title: `The Story-Telling Groom Speech`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.5,
    wordCount: 330,
    excerpt: `Good evening, everyone! I want to tell you about the moment I knew [Bride's name] was "the one." We'd been dating for about eight months when we decided to take a weekend trip to...`,
    content: `Good evening, everyone! I want to tell you about the moment I knew [Bride's name] was "the one." We'd been dating for about eight months when we decided to take a weekend trip to the mountains. I had planned this elaborate hiking adventure, complete with a picnic lunch and what I thought would be a romantic sunset view.

Everything that could go wrong, did go wrong. It rained, we got lost, I forgot the can opener for our lunch, and by the time we found our way back to the car, we were both soaked, hungry, and covered in mud. I was mortified.

I thought I'd ruined everything and that [Bride's name] would never want to go anywhere with me again. But as we sat in the car, dripping wet and eating granola bars we found in the glove compartment, she started laughing. Not just a polite laugh, but a real, genuine, belly laugh.

And then she said, "This is the best worst date ever. We're definitely going to laugh about this for years." That's when I knew. Not because she was perfect, but because she could find joy and humor in imperfection.

Not because our relationship would always be easy, but because she was someone I wanted to navigate life's challenges with. [Bride's name], you've shown me that love isn't about having perfect moments – it's about finding someone who makes even the imperfect moments beautiful. You've taught me to laugh at myself, to embrace adventure even when it doesn't go as planned, and to find happiness in the journey, not just the destination.

You've been my partner in every sense of the word – celebrating victories, weathering storms, and turning ordinary days into extraordinary memories. To everyone here – thank you for being part of our love story. Your friendship and support have shaped who we are as individuals and as a couple. So here's to a lifetime of adventures, both planned and unplanned, with the woman I love!`,
    authorName: 'Natalie Mitchell',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'traditional-groom-sample-speech-52',
    title: `Traditional Groom Sample Speech`,
    category: 'groom-speech',
    tone: 'balanced',
    durationMinutes: 3.9,
    wordCount: 510,
    excerpt: `On behalf of my wife and I, we'd like to thank you all for coming here today and sharing our special day with us. There are times when it's good to be surrounded by people who are...`,
    content: `On behalf of my wife and I, we'd like to thank you all for coming here today and sharing our special day with us. There are times when it's good to be surrounded by people who are important to you, and for us this is one of those occasions. We hope that you're enjoying it every bit as much as we are and we'd like to thank you for your kind wishes cards, presents and support.

We must say we've been really impressed by the number of people that have rallied round to help us in preparation for today, if you're not mentioned by name and that's most of you, please be assured that Nell and I are very grateful. David and Nora, thank you not only for your hospitality this evening and your kindness, but for also giving me your very beautiful daughter. I promise I'll take good care of her and of course do everything she tells me to, even if it involves golf!

I must confess I did actually try it a while ago, and during one lesson with the local pro I asked him whether he had seen any improvement since my last lesson. And he said "er… yup, that's a much better haircut". So Nora, we have a present here for you.

I also want to say thank you to my parents who put up with me for all these years, you have both been there for me when I've needed you and given me a wonderful start in life and I'm very fortunate and proud to have you as my mum and dad. I've a present for you here Mum, as a thank you. I can imagine that Rupert, my best man is getting impatient to make his speech soon.

Now many people don't know that Rupert suffers from a rare medical condition which causes him to invent fanciful stories. He really does believe these stories to be true and I thank you for humouring him during his speech. I am absolutely delighted to be able stand here today with Nell, I never knew what was missing in my life before I met her.

Nell has been a source of friendship, support and love. Of course I've no doubt that she is going to tell me afterwards that the only thing missing in my life at the moment is golf, although I am still waiting for her to explain the attraction to a game that consists of a lot of walking, broken up by disappointment and bad arithmetic. And finally, the bridesmaids, thanks for calming Nell nerves and helping in her preparation today.

I'd also like thank you for getting her to the church in one piece and on time, you've done a brilliant job. We have a small gift for each of you as a token of our appreciation. Well, that's it from me for now, but, before I pass you over to my best man, Ladies and Gentlemen, please stand and lift your glasses and join me in a toast to bridesmaids.`,
    authorName: 'Robert Mitchell',
    weddingRole: 'Groom',
    tags: ['groom'],
  },
  {
    slug: 'traditional-groom-speech-example-53',
    title: `Traditional Groom Speech Example`,
    category: 'groom-speech',
    tone: 'balanced',
    durationMinutes: 2.6,
    wordCount: 334,
    excerpt: `Ladies and Gentlemen: I would like to thank Declan for those sincere words and both Frankbie and Declan for the love that they have both shown me, not only in preparation for today...`,
    content: `Ladies and Gentlemen: I would like to thank Declan for those sincere words and both Frankbie and Declan for the love that they have both shown me, not only in preparation for today, but from the first moment that we met some two and a half years ago. I don't know who was more surprised that first night when Marcella brought me home without warning, when they were sitting there all ready for bed in their satin bath robes and Declan in his Snoopy slippers. Anyway, quickly moving on, I did have a speech all worked out for this occasion, but, of course, now that I'm a married man, Marcella has insisted that I read from the one that she has written for me.

So here goes: On behalf of my wife and I…I suppose I'm going to have to get used to that, I would like to start by thanking everyone here today for sharing our very special day with us. Thank-you for all the wonderful gifts and cards that you have given us, we are very touched at your generosity. I'm certainly looking forward to seeing how Declan has managed to gift-wrap the Wheelbarrow!

We have both been very nervous about today and it means a great deal to us that you are sharing our day with us, and we hope that you are enjoying the occasion every bit as much as we are. Most people on their wedding day describe it as the happiest day of their lives. That worries me because it implies that as from tomorrow there's a lifelong decline ahead, so I'm making the most of today.

However, I'm so happy today that even days less happy would still be blissful. I would like to say a special thank-you to those of you that have travelled some distance to be here today. It is quite a humbling experience to realise that you have friends and family that care so much for you. And I do genuinely mean that.`,
    authorName: 'Laura Campbell',
    weddingRole: 'Groom',
    tags: ['groom'],
  },
  {
    slug: 'very-short-groom-speech-examples-54',
    title: `Very Short Groom Speech Examples`,
    category: 'groom-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 220,
    excerpt: `Ladies and Gentlemen, friends and family on behalf of my beautiful wife and myself, thank you very much for being here today. I can safely say it wouldn't have been the same...`,
    content: `Ladies and Gentlemen, friends and family on behalf of my beautiful wife and myself, thank you very much for being here today. I can safely say it wouldn't have been the same without you all…although it would have been cheaper. More specifically, I'd like to thank Jerry, my new father-in-law for all the kind words and wishes.

In addition, I'd like to thank both Jerry and Val for all their kindness in the last 2 years and for keeping a straight face when they heard I had proposed to their daughter. I've always chosen to assume those were tears of joy, Val. I would also like to thank mom and dad, Beth and Ewan, for all their love and support growing up.

If it wasn't for them, I wouldn't be standing here now. Thanks for the ride, guys. Thanks to Kieran my best man who's been a speech is, we might even stay friends.

I'd also like to thank Jen's bridesmaids, Grace and Tara, for keeping her calm over the last 24 hours or so and of course for being such good friends to her all this time. Which blove, support, friendship, trust and a million other things. Basically, thank you for being you. So with no further ado and depsite my better judgement, I'll hand you over to Kieran.`,
    authorName: 'Chloe Murphy',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'short', 'groom'],
  },
  {
    slug: 'adventure-loving-bride-speech-55',
    title: `Adventure-loving bride speech`,
    category: 'bride-speech',
    tone: 'balanced',
    durationMinutes: 1.1,
    wordCount: 137,
    excerpt: `Welcome, everyone. I know, I know - another speech, right? But don't worry, I promise to keep it short. First off, let me just say how absolutely chuffed we are to have you all...`,
    content: `Welcome, everyone. I know, I know - another speech, right? But don't worry, I promise to keep it short.

First off, let me just say how absolutely chuffed we are to have you all here. Whether you've travelled across the world or popped 10 minutes down the road, your presence means everything. [Groom's name], you are, without a doubt, my greatest adventure.

I thought I'd seen the world, but you've shown me that the greatest adventure is finding someone to explore it with. And to my fabulous besties, where would I be without you? You've been there for every Bridezilla moment - and trust me, there were many!

So, before I start crying, please join me in a toast to my new groom. [Groom's name], you are my home, my heart, and my adventure. So here's to a lifetime of adventures together!`,
    authorName: 'Zoe Shaw',
    weddingRole: 'Bride',
    tags: ['bride'],
  },
  {
    slug: 'classic-bride-speech-56',
    title: `Classic bride speech`,
    category: 'bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.3,
    wordCount: 167,
    excerpt: `Friends, family, generally loved relatives I can never remember the names of… welcome. Welcome to our beautiful day. I couldn't be more grateful to all of you for making the...`,
    content: `Friends, family, generally loved relatives I can never remember the names of… welcome. Welcome to our beautiful day. I couldn't be more grateful to all of you for making the effort to be here today.

I know we all have a million things going on in our lives. Or, indeed, without me! I love [Groom's name] with all my heart, but I don't think he had a clue about planning.

But really, seeing everything come together today, I know every little decision was worth it. And, if I do say so myself, I did a pretty good job. And to my girls, my gorgeous bridal party, thank you.

Thank you for your endless love, support, and for keeping me sane throughout this whole process. Finally, I'd like to thank myself [pause for laughter] for all the work I've put into today. [Groom's name] did some stuff too. And so, with that said, that's the end of the speeches, and the start of the rest of our lives.`,
    authorName: 'Peter Bennett',
    weddingRole: 'Bride',
    tags: ['heartfelt', 'bride'],
  },
  {
    slug: 'destination-wedding-bride-speech-57',
    title: `Destination wedding bride speech`,
    category: 'bride-speech',
    tone: 'funny',
    durationMinutes: 1.9,
    wordCount: 242,
    excerpt: `Ladies, gentlemen, and non-binary friends - welcome. Welcome to our beautiful, tropical wedding day! It only feels like yesterday that we were browsing Pinterest boards at 2am...`,
    content: `Ladies, gentlemen, and non-binary friends - welcome. Welcome to our beautiful, tropical wedding day! It only feels like yesterday that we were browsing Pinterest boards at 2am trying to decide what shade of white the flowers should be.

It goes without saying, but I'll say it anyway, I'm so unbelievably grateful to all of you for coming. It's not every day that we get to celebrate something as special as this, and the fact that we get to do it in this gorgeous location with all our favourite people is just incredible. Don't get me wrong, planning this beach wedding hasn't been a walk in the park (or a swim in the sea, for that matter!).

There's only so much you can communicate with emojis and Google Translate. And let me tell you, there's nothing quite like trying to decide what shade of white the flowers should be when I'm miles away from the venue! But somehow, we've made it happen.

I honestly don't think I could've pulled it off without [Groom's name]'s steady hand. Genuinely, thank you. And, of course, a huge thank you to my girls.

You've been absolute legends throughout this whole process. And finally, a quick bit of acknowledgement from me. I've had a lot of help planning this, but women - we're good at multitasking, aren't we? As a final note, please join me in toasting to the newly minted Mr & Mrs [Surname] I hope your hangover is worth it!`,
    authorName: 'Lucy Bennett',
    weddingRole: 'Bride',
    tags: ['funny', 'bride'],
  },
  {
    slug: 'funny-bride-speech-58',
    title: `Funny Bride Speech`,
    category: 'bride-speech',
    tone: 'funny',
    durationMinutes: 1.2,
    wordCount: 153,
    excerpt: `Hi everyone – it's so good to see you. I mean it, because for the last year I've basically been in hibernation. In case you missed the updates – I had a baby, moved house, and...`,
    content: `Hi everyone – it's so good to see you. I mean it, because for the last year I've basically been in hibernation. In case you missed the updates – I had a baby, moved house, and planned a wedding.

It's been like starring in my own reality TV show, except without the glam squad or sponsorship deals. So forgive me if I seem a little overexcited tonight – I haven't seen this many adults in one room for about 18 months. The only conversations I've had recently are with estate agents, Amazon delivery drivers, and a very small person who thinks peekaboo is the height of comedy.

Tonight, I'm thrilled to be surrounded by grown-ups – and one very patient husband. So let's raise a glass to new beginnings – the baby, the house, the wedding – and the man who didn't run away when all three hit at once. To my husband!`,
    authorName: 'Patrick Chambers',
    weddingRole: 'Bride',
    tags: ['funny', 'bride'],
  },
  {
    slug: 'funny-bride-speech-59',
    title: `Funny bride speech`,
    category: 'bride-speech',
    tone: 'funny',
    durationMinutes: 1.4,
    wordCount: 177,
    excerpt: `Well, they've left the best 'till last, haven't they? Welcome, everyone. Welcome to our special day. Thank you all so much for being here today. I know it's no small feat to get...`,
    content: `Well, they've left the best 'till last, haven't they? Welcome, everyone. Welcome to our special day.

Thank you all so much for being here today. I know it's no small feat to get dressed up, travel, and sit through a bunch of speeches. I've actually loved the process of wedding planning.

Although it hasn't all been smooth sailing, it's been such a joy to plan this day with [Groom's name]. Then there was the cake tasting. Now, that was something [Groom's name] took very seriously.

I've never seen a man so passionate about sponge finger biscuits! To my amazing bridesmaids - thank you. You're the absolute best.

From helping me choose the dress to dealing with my emotional breakdowns and my mother's suggestions (bless her), you've been there. And finally, a little thank you to me. Pulling this day together wasn't easy, but it was so worth it to have you all here with us and to celebrate with [Groom's name]. So, will you please join me in a toast - so here's to love, laughter, and a lifetime of questionable decisions.`,
    authorName: 'James Grant',
    weddingRole: 'Bride',
    tags: ['funny', 'bride'],
  },
  {
    slug: 'short-bride-speech-60',
    title: `Short Bride Speech`,
    category: 'bride-speech',
    tone: 'heartfelt',
    durationMinutes: 0.6,
    wordCount: 83,
    excerpt: `I promised myself I'd keep this short. Mainly because our caterer warned me dessert is waiting and no one wants to delay pudding. So here's the truth: I've never been happier than...`,
    content: `I promised myself I'd keep this short. Mainly because our caterer warned me dessert is waiting and no one wants to delay pudding. So here's the truth: I've never been happier than I am today.

Not because of the flowers, or the dress, or the Pinterest boards – but because of Alex. He makes me laugh, he makes me brave, and he makes me certain about the future. To Alex, the man who makes my today wonderful and my tomorrow exciting. To Alex.`,
    authorName: 'Kate Fletcher',
    weddingRole: 'Bride',
    tags: ['heartfelt', 'short', 'bride'],
  },
  {
    slug: 'the-funny-bride-speech-61',
    title: `The Funny Bride Speech`,
    category: 'bride-speech',
    tone: 'funny',
    durationMinutes: 2.5,
    wordCount: 326,
    excerpt: `Hi everyone! I'm so excited to finally be Mrs. [Last name]! I've been practicing my signature for months, and I think I've finally got it down. First, I want to thank everyone for...`,
    content: `Hi everyone! I'm so excited to finally be Mrs. [Last name]!

I've been practicing my signature for months, and I think I've finally got it down. First, I want to thank everyone for being here today. I know some of you traveled really far, and I appreciate you making the effort – especially my college friends who somehow managed to coordinate outfits despite living in different time zones!

I also want to thank my parents for this beautiful wedding and for not completely losing their minds when I changed my mind about the flowers... three times. Dad, I promise this is the last time you'll have to pay for my indecisiveness. Well, maybe.

To my bridesmaids – thank you for pretending to be excited about dress shopping, for telling me I looked beautiful even when I clearly didn't, and for not murdering me during the planning process. You're the real MVPs. [Groom's name], when we first met, I thought you were way too good to be true.

You were handsome, funny, kind, and you actually listened when I talked. I kept waiting for the catch – like maybe you collected creepy dolls or still lived with your mother. Turns out the only catch was that you're obsessed with organizing everything by color and you have very strong opinions about the correct way to load a dishwasher.

I can live with that. You've been incredibly patient with my wedding planning stress, my tendency to cry at commercials, and my insistence that we need at least seventeen throw pillows on our couch. You make me feel beautiful, loved, and slightly less crazy than I actually am.

I love how you make me laugh, how you always know exactly what to say when I'm upset, and how you've never once complained about my extensive skincare routine that takes up half the bathroom. So here's to a lifetime of love, laughter, and you pretending to care about my stories from work!`,
    authorName: 'Grace Crawford',
    weddingRole: 'Bride',
    tags: ['funny', 'bride'],
  },
  {
    slug: 'the-gratitude-focused-bride-speech-62',
    title: `The Gratitude-Focused Bride Speech`,
    category: 'bride-speech',
    tone: 'heartfelt',
    durationMinutes: 2.7,
    wordCount: 355,
    excerpt: `Good evening, everyone! My heart is so full looking at all of you here tonight. I want to start by thanking my parents. You've been my biggest supporters, my wisest advisors, and...`,
    content: `Good evening, everyone! My heart is so full looking at all of you here tonight. I want to start by thanking my parents.

You've been my biggest supporters, my wisest advisors, and my greatest examples of what love looks like. You taught me to be strong, independent, and kind. You showed me that I should never settle for anything less than someone who loves and respects me completely.

Thank you for everything you've given me and for raising me to believe in love. To my siblings – thank you for being my first friends, my built-in support system, and for always keeping me humble! You've been there through every milestone, every heartbreak, and every triumph.

I'm so grateful to have you in my life. To my bridesmaids – you are my chosen family. Thank you for the years of friendship, for celebrating my victories, for comforting me through challenges, and for making me laugh until my stomach hurts.

You've made my life so much richer. To [Groom's name]'s family – thank you for welcoming me with such open hearts. You've made me feel like I've always been part of your family, and I'm so grateful for your love and acceptance.

To all our friends and extended family – thank you for the role you've played in our lives. You've supported us, encouraged us, and celebrated with us. Your presence here tonight means more than you know.

[Groom's name] – you are my greatest blessing. You've shown me what it means to be truly loved and cherished. You believe in me even when I don't believe in myself.

You make me laugh every day, you comfort me when I'm sad, and you celebrate every success with me. You've made me a better person just by loving me. I promise to love you, support you, and choose you every single day for the rest of our lives.

Thank you all for being here to witness our love and for being part of our journey. We are so blessed to have all of you in our lives. So here's to love, family, and the beautiful community that surrounds us!`,
    authorName: 'James Barrett',
    weddingRole: 'Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-heartfelt-bride-speech-63',
    title: `The Heartfelt Bride Speech`,
    category: 'bride-speech',
    tone: 'heartfelt',
    durationMinutes: 2.4,
    wordCount: 312,
    excerpt: `Good evening, everyone! I can't believe this day is finally here, and I'm so grateful to see all your beautiful faces. When I was a little girl, I dreamed about my wedding day...`,
    content: `Good evening, everyone! I can't believe this day is finally here, and I'm so grateful to see all your beautiful faces. When I was a little girl, I dreamed about my wedding day, but I never imagined it would be this perfect or that I'd be surrounded by so many people I love.

First, I want to thank my parents. Mum and Dad, you've given me everything – your love, your support, your wisdom, and most importantly, your example of what a strong, loving marriage looks like. You taught me to be independent, to follow my dreams, and to never settle for anything less than true love.

Thank you for raising me to believe I deserved someone who would love me exactly as I am. To my bridesmaids – you've been my cheerleaders, my voice of reason, and my partners in crime. Thank you for standing by my side today and for all the laughter, tears, and memories we've shared.

I'm so lucky to have friends like you. To my new in-laws – thank you for welcoming me into your family with such open arms. You raised an wonderful man, and I promise to love and cherish him always.

And to my husband – yes, I can finally say that! [Groom's name], you are my best friend, my greatest love, and my perfect match. You make me laugh every single day, you support my wildest dreams, and you love me even when I'm hangry or stressed about wedding planning.

You've shown me what it means to be truly loved and accepted. With you, I'm the best version of myself. I can't wait to spend the rest of my life laughing with you, traveling with you, and building our dreams together.

Thank you all for being here to celebrate with us. Your love and support mean the world to us. Now let's dance!`,
    authorName: 'Jennifer Dixon',
    weddingRole: 'Bride',
    tags: ['heartfelt', 'bride'],
  },
  {
    slug: 'the-short-and-sweet-bride-speech-64',
    title: `The Short and Sweet Bride Speech`,
    category: 'bride-speech',
    tone: 'heartfelt',
    durationMinutes: 0.8,
    wordCount: 104,
    excerpt: `Hi everyone! I'll keep this short because I know you're all eager to dance and celebrate! Thank you all for being here on the most important day of my life. Seeing all of you here...`,
    content: `Hi everyone! I'll keep this short because I know you're all eager to dance and celebrate! Thank you all for being here on the most important day of my life.

Seeing all of you here means everything to us. To my family – thank you for your endless love and support. You've made me who I am today.

To our friends – thank you for the laughter, the memories, and for always being there when we need you. [Groom's name] – you are my heart, my home, and my happily ever after. I love you more than words can say.

Now let's celebrate! Cheers!`,
    authorName: 'Laura Murphy',
    weddingRole: 'Bride',
    tags: ['heartfelt', 'bride'],
  },
  {
    slug: 'the-story-telling-bride-speech-65',
    title: `The Story-Telling Bride Speech`,
    category: 'bride-speech',
    tone: 'heartfelt',
    durationMinutes: 2.3,
    wordCount: 301,
    excerpt: `Good evening, everyone! I want to tell you the story of how I knew [Groom's name] was "the one." We'd been dating for about six months when I got food poisoning from that...`,
    content: `Good evening, everyone! I want to tell you the story of how I knew [Groom's name] was "the one." We'd been dating for about six months when I got food poisoning from that questionable sushi place downtown. I was absolutely miserable – I looked terrible, felt worse, and was definitely not at my most attractive.

[Groom's name] showed up at my apartment with soup, ginger ale, and every season of The Office. He spent the entire weekend taking care of me, holding my hair back, and never once making me feel gross or embarrassed. But here's the moment I knew: on Sunday night, when I was finally feeling better, I caught him quietly doing my dishes and folding my laundry.

When I asked him why, he said, "Because you'd do the same for me, and that's what people who love each other do." That's when I knew I was going to marry this man. Not because he took care of me when I was sick – although that was pretty great – but because he understood that love is shown in the small, everyday moments just as much as the big romantic gestures. [Groom's name], you've shown me that kind of love every single day since.

You make my coffee in the morning, you listen to my work stories even when they're boring, and you always save me the last bite of dessert. You've taught me that love isn't just a feeling – it's a choice you make every day to put someone else's happiness alongside your own. To everyone here – thank you for being part of our love story.

Your friendship and support have shaped who we are as individuals and as a couple. So here's to a lifetime of small moments that add up to a beautiful love story!`,
    authorName: 'Ben Bennett',
    weddingRole: 'Bride',
    tags: ['heartfelt', 'bride'],
  },
  {
    slug: 'the-humorous-father-speech-66',
    title: `The Humorous Father Speech`,
    category: 'father-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.5,
    wordCount: 331,
    excerpt: `Hi everyone! I'm Bill, [Groom's name]'s father, and I've been looking forward to this moment for years – not just because I'm gaining a wonderful daughter-in-law, but because I...`,
    content: `Hi everyone! I'm Bill, [Groom's name]'s father, and I've been looking forward to this moment for years – not just because I'm gaining a wonderful daughter-in-law, but because I finally have someone else to explain why [Groom's name] still brings his laundry home every weekend! [Groom's name], my son, you've always been... let's say "unique." You were the child who would take apart every electronic device in the house just to see how it worked.

Your mother and I spent a fortune on replacement remotes, radios, and that unfortunate incident with the microwave. I remember when you were sixteen and decided to "fix" our car because you thought you could do it better than the mechanic. Three hours later, we had to call a tow truck, and the mechanic said he'd never seen anyone install windshield wipers on the inside of the car.

Your creativity has always been... impressive. But here's what I've learned about [Groom's name] over the years: his curiosity and determination to understand how things work extends to people too. He studies them, learns what makes them happy, and then does everything he can to support them.

It's a beautiful quality. [Bride's name], I hope you're prepared for what you've gotten yourself into. [Groom's name] will try to "optimize" everything in your house, he'll have strong opinions about the most efficient route to take anywhere, and he will definitely reorganize your kitchen cabinets.

But he'll also be your most devoted supporter, your most reliable partner, and the person who will remember every detail about what makes you happy. I've watched you two together, and what I love most is how you balance each other. [Bride's name], you're the one who reminds him to slow down and enjoy the moment, and [Groom's name], you're the one who helps her tackle any challenge with confidence. So here's to [Groom's name] and [Bride's name] – may your marriage be filled with love, laughter, and someone to appreciate your perfectly organized tool shed!`,
    authorName: 'Alex Shaw',
    weddingRole: 'Father of the Groom',
    tags: ['father'],
  },
  {
    slug: 'the-memory-filled-father-speech-67',
    title: `The Memory-Filled Father Speech`,
    category: 'father-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.2,
    wordCount: 287,
    excerpt: `Good evening, friends and family. I'm Michael, [Groom's name]'s father, and I want to share some memories that show you exactly who my son is. When [Groom's name] was ten, we were...`,
    content: `Good evening, friends and family. I'm Michael, [Groom's name]'s father, and I want to share some memories that show you exactly who my son is. When [Groom's name] was ten, we were at the park when he noticed a little girl crying because she'd lost her toy.

Without being asked, he spent the next hour helping her look for it. When we finally found it stuck in a tree, he climbed up to get it down. When she tried to give him her candy as a thank you, he politely declined and said, "I just wanted to help you feel better." That's [Groom's name] – always thinking of others, always ready to lend a helping hand, always finding ways to make the world a little bit better.

I remember his high school graduation, when he thanked me in his speech for "teaching him that success means nothing if you don't have people to share it with." What he didn't realize is that he taught me that true success is raising a child who cares more about others than himself. When [Groom's name] introduced us to [Bride's name], I knew immediately that she was special. Not just because of how wonderful she is, but because of how [Groom's name] changed when he was with her.

He became even more confident, more joyful, more himself. [Bride's name], thank you for seeing my son for the incredible person he is. Thank you for supporting his dreams, celebrating his victories, and being his partner in every sense of the word.

To [Groom's name] and [Bride's name], may your marriage be filled with the same kindness, joy, and love that brought you together. So here's to a lifetime of happiness and beautiful memories!`,
    authorName: 'Owen Hardy',
    weddingRole: 'Father of the Groom',
    tags: ['father'],
  },
  {
    slug: 'the-proud-father-speech-68',
    title: `The Proud Father Speech`,
    category: 'father-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.4,
    wordCount: 317,
    excerpt: `Good evening, everyone! I'm Robert, [Groom's name]'s father, and I couldn't be prouder to be standing here tonight. Twenty-eight years ago, [Groom's name] came into our lives and...`,
    content: `Good evening, everyone! I'm Robert, [Groom's name]'s father, and I couldn't be prouder to be standing here tonight. Twenty-eight years ago, [Groom's name] came into our lives and changed everything.

From his first steps to his first day of school, from his graduation to watching him build his career, he has consistently shown integrity, kindness, and determination that make me proud to call him my son. [Groom's name], you've grown into an exceptional man. You're hardworking, compassionate, loyal, and you have a heart that's always ready to help others.

Watching you navigate life's challenges with grace and perseverance has been one of my greatest joys as your father. I remember when you were young, you once asked me what it meant to be a good man. I told you it meant being honest, treating others with respect, and always doing what's right even when no one is watching.

You've embodied these values every single day, and I'm so proud of the man you've become. [Bride's name], when [Groom's name] first told me about you, I could see something special in his eyes. There was a happiness, a completeness that I'd never seen before.

You brought out the very best in my son, and for that, I will be forever grateful. Thank you for loving him, supporting his dreams, and making him the happiest I've ever seen him. As you begin this beautiful journey together, remember that marriage is built on love, trust, and partnership.

Support each other's dreams, be patient with each other's imperfections, and never forget to laugh together through all of life's adventures. [Groom's name], you will always be my son, and [Bride's name], today I'm honored to call you my daughter. Welcome to our family with all my love.

To [Groom's name] and [Bride's name] – may your marriage be filled with endless love, laughter, and happiness. So here's to your beautiful future together!`,
    authorName: 'Lucy Crawford',
    weddingRole: 'Father of the Groom',
    tags: ['father'],
  },
  {
    slug: 'the-short-and-sweet-father-speech-69',
    title: `The Short and Sweet Father Speech`,
    category: 'father-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 0.9,
    wordCount: 116,
    excerpt: `Good evening! I'm Aidan, [Groom's name]'s father. As fathers, we raise our sons hoping they'll find someone who sees their worth and loves them for exactly who they are. [Bride's...`,
    content: `Good evening! I'm Aidan, [Groom's name]'s father. As fathers, we raise our sons hoping they'll find someone who sees their worth and loves them for exactly who they are.

[Bride's name], you are that person for [Groom's name]. I see how you look at him, how you support his dreams, and how you make him smile. You have my respect, my gratitude, and my blessing.

[Groom's name], you've grown into a man I'm incredibly proud to call my son. Today, I'm thrilled to watch you marry the woman of your dreams. May your marriage be blessed with love, understanding, and a lifetime of happiness together.

Welcome to the family, [Bride's name]! Cheers to the happy couple!`,
    authorName: 'Alex Phillips',
    weddingRole: 'Father of the Groom',
    tags: ['father'],
  },
  {
    slug: 'the-wisdom-filled-father-speech-70',
    title: `The Wisdom-Filled Father Speech`,
    category: 'father-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 261,
    excerpt: `Hi everyone! I'm David, [Groom's name]'s father, and someone who's been happily married for thirty-two years. [Groom's name], from the moment you were born, you've been teaching...`,
    content: `Hi everyone! I'm David, [Groom's name]'s father, and someone who's been happily married for thirty-two years. [Groom's name], from the moment you were born, you've been teaching me about patience, love, and the incredible joy of being a father.

Watching you grow into the remarkable man you are today has been my greatest privilege and joy. [Bride's name], you're not just gaining a husband – you're gaining a best friend, a partner, and someone who will love you unconditionally. I know because I've watched him love his family, his friends, and now you with that same unwavering devotion.

Let me share some wisdom about marriage that I've learned over the years: Marriage isn't about finding someone you can live with – it's about finding someone you can't live without. It's about choosing to love each other every single day, especially on the days when it's not easy. Always communicate with honesty and kindness.

Listen not just to respond, but to truly understand each other. Be generous with your appreciation and patient with each other's imperfections. Remember that you're teammates facing life's challenges together, not opponents.

Most importantly, never stop being friends. The couples who stay happily married for decades are those who genuinely enjoy each other's company, who can laugh together, and who continue to choose each other every single day. [Groom's name] and [Bride's name], as you begin this amazing journey together, know that you have our love, our support, and our prayers for a lifetime of happiness. So here's to a marriage filled with love, laughter, and endless adventures together!`,
    authorName: 'Lucy Chambers',
    weddingRole: 'Father of the Groom',
    tags: ['father'],
  },
  {
    slug: 'the-humorous-mother-speech-71',
    title: `The Humorous Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.3,
    wordCount: 301,
    excerpt: `Hi everyone! I'm Carol, [Groom's name]'s mother, and I've been looking forward to this day for years – not just because I'm gaining a wonderful daughter-in-law, but because I...`,
    content: `Hi everyone! I'm Carol, [Groom's name]'s mother, and I've been looking forward to this day for years – not just because I'm gaining a wonderful daughter-in-law, but because I finally have someone else to explain why [Groom's name] keeps every box from every electronic device he's ever bought! [Groom's name], my dear son, you've always been... let's say "particular." You were the child who would organize his toys by color and size, who insisted on reading the instruction manual before assembling anything, and who once created a spreadsheet to track his Halloween candy consumption – yes, at age eight!

I remember when you were twelve and decided to "help" with dinner. You measured every ingredient to the exact gram, timed everything with a stopwatch, and then presented me with a detailed report on how we could "optimize our kitchen efficiency." Your father and I realized then that you were going to be either a very successful engineer or a very demanding husband – thankfully, [Bride's name] seems to appreciate both! [Bride's name], I hope you're prepared for what you've gotten yourself into.

[Groom's name] will label everything in your house, he takes longer to research a restaurant than it takes to actually eat there, and he will definitely reorganize your spice rack alphabetically. But he'll also be your most devoted supporter, your most reliable partner, and the person who remembers every important date and anniversary better than any calendar. I've watched you two together, and what I love most is how you balance each other.

[Bride's name], you're the spontaneous one who keeps life exciting, and [Groom's name], you're the planner who keeps everything running smoothly. So here's to [Groom's name] and [Bride's name] – may your marriage be filled with love, laughter, and someone to appreciate your perfectly organized sock drawer!`,
    authorName: 'Helen Barrett',
    weddingRole: 'Mother of the Groom',
    tags: ['mother'],
  },
  {
    slug: 'the-humorous-mother-speech-72',
    title: `The Humorous Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'funny',
    durationMinutes: 2.3,
    wordCount: 301,
    excerpt: `Hi everyone! I'm Carol, [Groom's name]'s mother, and I've been looking forward to this day for years – not just because I'm gaining a wonderful daughter-in-law, but because I...`,
    content: `Hi everyone! I'm Carol, [Groom's name]'s mother, and I've been looking forward to this day for years – not just because I'm gaining a wonderful daughter-in-law, but because I finally have someone else to explain why [Groom's name] keeps every box from every electronic device he's ever bought! [Groom's name], my dear son, you've always been... let's say "particular." You were the child who would organize his toys by color and size, who insisted on reading the instruction manual before assembling anything, and who once created a spreadsheet to track his Halloween candy consumption – yes, at age eight!

I remember when you were twelve and decided to "help" with dinner. You measured every ingredient to the exact gram, timed everything with a stopwatch, and then presented me with a detailed report on how we could "optimize our kitchen efficiency." Your father and I realized then that you were going to be either a very successful engineer or a very demanding husband – thankfully, [Bride's name] seems to appreciate both! [Bride's name], I hope you're prepared for what you've gotten yourself into.

[Groom's name] will label everything in your house, he takes longer to research a restaurant than it takes to actually eat there, and he will definitely reorganize your spice rack alphabetically. But he'll also be your most devoted supporter, your most reliable partner, and the person who remembers every important date and anniversary better than any calendar. I've watched you two together, and what I love most is how you balance each other.

[Bride's name], you're the spontaneous one who keeps life exciting, and [Groom's name], you're the planner who keeps everything running smoothly. So here's to [Groom's name] and [Bride's name] – may your marriage be filled with love, laughter, and someone to appreciate your perfectly organized sock drawer!`,
    authorName: 'Thomas Crawford',
    weddingRole: 'Mother of the Groom',
    tags: ['funny', 'mother'],
  },
  {
    slug: 'the-memory-filled-mother-speech-73',
    title: `The Memory-Filled Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.1,
    wordCount: 279,
    excerpt: `Good evening, friends and family. I'm Margaret, [Groom's name]'s mother, and I want to share some memories that show you exactly who my son is. When [Groom's name] was nine, we...`,
    content: `Good evening, friends and family. I'm Margaret, [Groom's name]'s mother, and I want to share some memories that show you exactly who my son is. When [Groom's name] was nine, we were at the grocery store when he noticed an elderly woman struggling with her heavy bags.

Without being asked, he walked over and offered to help carry them to her car. When she tried to give him a dollar for his help, he politely declined and said, "My mom taught me that helping people isn't a job, it's just what good people do." That's [Groom's name] – always thinking of others, always ready to lend a helping hand, always finding ways to make the world a little bit better. I remember his college graduation, when he thanked me in his speech for "teaching him that success means nothing if you don't have people to share it with." What he didn't realize is that he taught me that true success is raising a child who cares more about others than himself.

When [Groom's name] introduced us to [Bride's name], I knew immediately that she was special. Not just because of how wonderful she is, but because of how [Groom's name] changed when he was with her. He became even more confident, more joyful, more himself.

[Bride's name], thank you for seeing my son for the incredible person he is. Thank you for supporting his dreams, celebrating his victories, and being his partner in every sense of the word. To [Groom's name] and [Bride's name], may your marriage be filled with the same kindness, joy, and love that brought you together. So here's to a lifetime of happiness and beautiful memories!`,
    authorName: 'Ben Coleman',
    weddingRole: 'Mother of the Groom',
    tags: ['mother'],
  },
  {
    slug: 'the-memory-filled-mother-speech-74',
    title: `The Memory-Filled Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.1,
    wordCount: 279,
    excerpt: `Good evening, friends and family. I'm Margaret, [Groom's name]'s mother, and I want to share some memories that show you exactly who my son is. When [Groom's name] was nine, we...`,
    content: `Good evening, friends and family. I'm Margaret, [Groom's name]'s mother, and I want to share some memories that show you exactly who my son is. When [Groom's name] was nine, we were at the grocery store when he noticed an elderly woman struggling with her heavy bags.

Without being asked, he walked over and offered to help carry them to her car. When she tried to give him a dollar for his help, he politely declined and said, "My mom taught me that helping people isn't a job, it's just what good people do." That's [Groom's name] – always thinking of others, always ready to lend a helping hand, always finding ways to make the world a little bit better. I remember his college graduation, when he thanked me in his speech for "teaching him that success means nothing if you don't have people to share it with." What he didn't realize is that he taught me that true success is raising a child who cares more about others than himself.

When [Groom's name] introduced us to [Bride's name], I knew immediately that she was special. Not just because of how wonderful she is, but because of how [Groom's name] changed when he was with her. He became even more confident, more joyful, more himself.

[Bride's name], thank you for seeing my son for the incredible person he is. Thank you for supporting his dreams, celebrating his victories, and being his partner in every sense of the word. To [Groom's name] and [Bride's name], may your marriage be filled with the same kindness, joy, and love that brought you together. So here's to a lifetime of happiness and beautiful memories!`,
    authorName: 'Jack Chapman',
    weddingRole: 'Mother of the Groom',
    tags: ['heartfelt', 'mother'],
  },
  {
    slug: 'the-proud-mother-speech-75',
    title: `The Proud Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.1,
    wordCount: 269,
    excerpt: `Good evening, everyone! I'm Linda, [Groom's name]'s mother, and I couldn't be prouder to be standing here tonight. Twenty-six years ago, [Groom's name] came into our lives and...`,
    content: `Good evening, everyone! I'm Linda, [Groom's name]'s mother, and I couldn't be prouder to be standing here tonight. Twenty-six years ago, [Groom's name] came into our lives and filled our world with joy, laughter, and endless love.

From his first steps to his first day of school, from his graduation to watching him build his career, he has consistently shown kindness, integrity, and strength that make me proud to call him my son. [Groom's name], you've grown into an wonderful man. You're compassionate, hardworking, loyal, and you have a heart that's always ready to help others.

Watching you navigate life's challenges with grace and determination has been one of my greatest joys as your mother. [Bride's name], when [Groom's name] first told me about you, I could see something magical in his eyes. There was a happiness, a completeness that I'd never seen before.

You brought out the very best in my son, and for that, I will be forever grateful. Thank you for loving him, supporting his dreams, and making him the happiest I've ever seen him. As you begin this beautiful journey together, remember that marriage is built on love, trust, and partnership.

Support each other's dreams, be patient with each other's flaws, and never forget to laugh together through all of life's adventures. [Groom's name], you will always be my little boy, and [Bride's name], today I'm honored to call you my daughter. Welcome to our family with all my love.

To [Groom's name] and [Bride's name] – may your marriage be filled with endless love, laughter, and happiness. So here's to your beautiful future together!`,
    authorName: 'Laura Foster',
    weddingRole: 'Mother of the Groom',
    tags: ['mother'],
  },
  {
    slug: 'the-proud-mother-speech-76',
    title: `The Proud Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.1,
    wordCount: 269,
    excerpt: `Good evening, everyone! I'm Linda, [Groom's name]'s mother, and I couldn't be prouder to be standing here tonight. Twenty-six years ago, [Groom's name] came into our lives and...`,
    content: `Good evening, everyone! I'm Linda, [Groom's name]'s mother, and I couldn't be prouder to be standing here tonight. Twenty-six years ago, [Groom's name] came into our lives and filled our world with joy, laughter, and endless love.

From his first steps to his first day of school, from his graduation to watching him build his career, he has consistently shown kindness, integrity, and strength that make me proud to call him my son. [Groom's name], you've grown into an wonderful man. You're compassionate, hardworking, loyal, and you have a heart that's always ready to help others.

Watching you navigate life's challenges with grace and determination has been one of my greatest joys as your mother. [Bride's name], when [Groom's name] first told me about you, I could see something magical in his eyes. There was a happiness, a completeness that I'd never seen before.

You brought out the very best in my son, and for that, I will be forever grateful. Thank you for loving him, supporting his dreams, and making him the happiest I've ever seen him. As you begin this beautiful journey together, remember that marriage is built on love, trust, and partnership.

Support each other's dreams, be patient with each other's flaws, and never forget to laugh together through all of life's adventures. [Groom's name], you will always be my little boy, and [Bride's name], today I'm honored to call you my daughter. Welcome to our family with all my love.

To [Groom's name] and [Bride's name] – may your marriage be filled with endless love, laughter, and happiness. So here's to your beautiful future together!`,
    authorName: 'Eleanor Brooks',
    weddingRole: 'Mother of the Groom',
    tags: ['heartfelt', 'mother'],
  },
  {
    slug: 'the-short-and-sweet-mother-speech-77',
    title: `The Short and Sweet Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 0.9,
    wordCount: 116,
    excerpt: `Good evening! I'm Patricia, [Groom's name]'s mother. As mothers, we raise our sons hoping they'll find someone who sees their worth and loves them for exactly who they are...`,
    content: `Good evening! I'm Patricia, [Groom's name]'s mother. As mothers, we raise our sons hoping they'll find someone who sees their worth and loves them for exactly who they are.

[Bride's name], you are that person for [Groom's name]. I see how you look at him, how you support his dreams, and how you make him smile. You have my respect, my gratitude, and my blessing.

[Groom's name], you've grown into a man I'm incredibly proud to call my son. Today, I'm thrilled to watch you marry the woman of your dreams. May your marriage be blessed with love, understanding, and a lifetime of happiness together.

Welcome to the family, [Bride's name]! Cheers to the happy couple!`,
    authorName: 'Lucy Chapman',
    weddingRole: 'Mother of the Groom',
    tags: ['mother'],
  },
  {
    slug: 'the-short-and-sweet-mother-speech-78',
    title: `The Short and Sweet Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 0.9,
    wordCount: 116,
    excerpt: `Good evening! I'm Patricia, [Groom's name]'s mother. As mothers, we raise our sons hoping they'll find someone who sees their worth and loves them for exactly who they are...`,
    content: `Good evening! I'm Patricia, [Groom's name]'s mother. As mothers, we raise our sons hoping they'll find someone who sees their worth and loves them for exactly who they are.

[Bride's name], you are that person for [Groom's name]. I see how you look at him, how you support his dreams, and how you make him smile. You have my respect, my gratitude, and my blessing.

[Groom's name], you've grown into a man I'm incredibly proud to call my son. Today, I'm thrilled to watch you marry the woman of your dreams. May your marriage be blessed with love, understanding, and a lifetime of happiness together.

Welcome to the family, [Bride's name]! Cheers to the happy couple!`,
    authorName: 'Sarah Webster',
    weddingRole: 'Mother of the Groom',
    tags: ['heartfelt', 'short', 'mother'],
  },
  {
    slug: 'the-wisdom-filled-mother-speech-79',
    title: `The Wisdom-Filled Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 261,
    excerpt: `Hi everyone! I'm Dorothy, [Groom's name]'s mother, and someone who's been happily married for thirty-four years. [Groom's name], from the moment you were born, you've been...`,
    content: `Hi everyone! I'm Dorothy, [Groom's name]'s mother, and someone who's been happily married for thirty-four years. [Groom's name], from the moment you were born, you've been teaching me about patience, love, and the incredible joy of being a mother.

Watching you grow into the remarkable man you are today has been my greatest privilege and joy. [Bride's name], you're not just gaining a husband – you're gaining a best friend, a partner, and someone who will love you unconditionally. I know because I've watched him love his family, his friends, and now you with that same unwavering devotion.

Let me share some wisdom about marriage that I've learned over the years: Marriage isn't about finding someone you can live with – it's about finding someone you can't live without. It's about choosing to love each other every single day, especially on the days when it's not easy. Always communicate with honesty and kindness.

Listen not just to respond, but to truly understand each other. Be generous with your appreciation and patient with each other's imperfections. Remember that you're teammates facing life's challenges together, not opponents.

Most importantly, never stop being friends. The couples who stay happily married for decades are those who genuinely enjoy each other's company, who can laugh together, and who continue to choose each other every single day. [Groom's name] and [Bride's name], as you begin this amazing journey together, know that you have our love, our support, and our prayers for a lifetime of happiness. So here's to a marriage filled with love, laughter, and endless adventures together!`,
    authorName: 'Eleanor Mitchell',
    weddingRole: 'Mother of the Groom',
    tags: ['mother'],
  },
  {
    slug: 'the-wisdom-filled-mother-speech-80',
    title: `The Wisdom-Filled Mother Speech`,
    category: 'mother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 261,
    excerpt: `Hi everyone! I'm Dorothy, [Groom's name]'s mother, and someone who's been happily married for thirty-four years. [Groom's name], from the moment you were born, you've been...`,
    content: `Hi everyone! I'm Dorothy, [Groom's name]'s mother, and someone who's been happily married for thirty-four years. [Groom's name], from the moment you were born, you've been teaching me about patience, love, and the incredible joy of being a mother.

Watching you grow into the remarkable man you are today has been my greatest privilege and joy. [Bride's name], you're not just gaining a husband – you're gaining a best friend, a partner, and someone who will love you unconditionally. I know because I've watched him love his family, his friends, and now you with that same unwavering devotion.

Let me share some wisdom about marriage that I've learned over the years: Marriage isn't about finding someone you can live with – it's about finding someone you can't live without. It's about choosing to love each other every single day, especially on the days when it's not easy. Always communicate with honesty and kindness.

Listen not just to respond, but to truly understand each other. Be generous with your appreciation and patient with each other's imperfections. Remember that you're teammates facing life's challenges together, not opponents.

Most importantly, never stop being friends. The couples who stay happily married for decades are those who genuinely enjoy each other's company, who can laugh together, and who continue to choose each other every single day. [Groom's name] and [Bride's name], as you begin this amazing journey together, know that you have our love, our support, and our prayers for a lifetime of happiness. So here's to a marriage filled with love, laughter, and endless adventures together!`,
    authorName: 'George Sullivan',
    weddingRole: 'Mother of the Groom',
    tags: ['inspirational', 'mother'],
  },
  {
    slug: 'the-best-friend-bridesmaid-speech-81',
    title: `The Best Friend Bridesmaid Speech`,
    category: 'bridesmaid-speech',
    tone: 'heartfelt',
    durationMinutes: 3.3,
    wordCount: 426,
    excerpt: `Good evening, everyone! I'm [Bridesmaid's name], and I have the incredible honor of being one of [Bride's name]'s bridesmaids and her best friend for the past fifteen years. I met...`,
    content: `Good evening, everyone! I'm [Bridesmaid's name], and I have the incredible honor of being one of [Bride's name]'s bridesmaids and her best friend for the past fifteen years. I met [Bride's name] in college when we were randomly assigned as roommates.

I remember thinking, "Please don't let her be weird." Well, it turns out she was weird – but in the most wonderful way possible. She talked to plants, she cried during commercials, and she had an inexplicable collection of rubber ducks. I knew immediately that we were going to be best friends.

Over the years, [Bride's name] has been my partner in countless adventures, my shoulder to cry on during difficult times, and my biggest cheerleader through every milestone. She's the friend who will drop everything to help you move, who remembers your coffee order after fifteen years, and who will tell you the truth even when you don't want to hear it. [Bride's name], you've taught me what it means to be a loyal friend.

You've shown me that friendship isn't just about the fun times – though we've had plenty of those – it's about showing up for each other, supporting each other's dreams, and loving each other through all of life's ups and downs. When you first started dating [Groom's name], I have to admit I was a little protective. I thought, "He better be good enough for my best friend." But from the moment I met him, I could see how much he adored you.

I watched him listen to your stories with genuine interest, laugh at your terrible jokes, and support your wildest dreams without question. [Groom's name], thank you for loving my best friend the way she deserves to be loved. Thank you for making her laugh every day, for supporting her dreams, and for being the partner she's always deserved.

You've made her happier than I've ever seen her, and that makes you pretty amazing in my book. To both of you – I'm so excited to watch you build your life together. You're perfect for each other, and I can't wait to see all the adventures that await you.

As your best friend, [Bride's name], I promise to always be here for you both. Whether you need someone to help plan parties, someone to vent to, or someone to remind you how lucky you are to have each other, I'll be here. So here's to [Bride's name] and [Groom's name] – may your marriage be filled with as much laughter, love, and adventure as our friendship has been!`,
    authorName: 'Mark Hayes',
    weddingRole: 'Bridesmaid',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-funny-bridesmaid-speech-82',
    title: `The Funny Bridesmaid Speech`,
    category: 'bridesmaid-speech',
    tone: 'funny',
    durationMinutes: 3.1,
    wordCount: 408,
    excerpt: `Hi everyone! I'm [Bridesmaid's name], one of [Bride's name]'s bridesmaids, and I've known her long enough to have some seriously embarrassing stories. Don't worry, [Bride's name]...`,
    content: `Hi everyone! I'm [Bridesmaid's name], one of [Bride's name]'s bridesmaids, and I've known her long enough to have some seriously embarrassing stories. Don't worry, [Bride's name], I'll only share the really good ones!

I met [Bride's name] in high school, and she was already showing signs of being the organized, type-A personality we all know and love today. She color-coordinated her school supplies, had her college applications done by junior year, and somehow convinced the rest of us that studying on Friday nights was "fun." But here's what you might not know about [Bride's name]: she's also completely ridiculous. She's the person who gets lost using GPS, who has burned water while cooking, and who once spent an entire day looking for her phone while talking to me on it.

I remember one time in college when [Bride's name] decided she was going to learn how to cook to impress a guy she was dating. She invited him over for dinner and spent the entire day preparing what she called "gourmet pasta." When he arrived, she proudly served him spaghetti with ketchup because she'd run out of marinara sauce and thought "red sauce is red sauce." The relationship didn't work out, but we still laugh about it to this day. And now I understand why – she was obviously waiting for someone who would appreciate her unique culinary creativity.

[Groom's name], you should know what you're getting into. [Bride's name] will reorganize your closet without asking, she will have strong opinions about the "correct" way to load the dishwasher, and she will definitely try to plan your life five years in advance. But she'll also be your biggest supporter, your most loyal friend, and the person who makes even the most ordinary day feel special.

I've watched you two together, and what I love most is how you balance each other out. [Bride's name], you help [Groom's name] stay organized and on track. [Groom's name], you help [Bride's name] relax and enjoy the moment.

You're like the perfect puzzle pieces – different shapes, but they fit together perfectly. [Bride's name], I'm so happy you found someone who loves your quirks as much as we do. [Groom's name], welcome to the friend group – we're all a little weird, but now you're our kind of weird. So here's to [Bride's name] and [Groom's name] – may your marriage be filled with love, laughter, and someone to appreciate your creative cooking!`,
    authorName: 'Richard Hart',
    weddingRole: 'Bridesmaid',
    tags: ['funny', 'maid of honor'],
  },
  {
    slug: 'the-grateful-bridesmaid-speech-83',
    title: `The Grateful Bridesmaid Speech`,
    category: 'bridesmaid-speech',
    tone: 'heartfelt',
    durationMinutes: 3.4,
    wordCount: 443,
    excerpt: `Good evening, everyone! I'm [Bridesmaid's name], one of [Bride's name]'s bridesmaids, and I feel so grateful to be standing here tonight celebrating this beautiful couple...`,
    content: `Good evening, everyone! I'm [Bridesmaid's name], one of [Bride's name]'s bridesmaids, and I feel so grateful to be standing here tonight celebrating this beautiful couple. [Bride's name], I want to start by thanking you for being such an incredible friend.

You came into my life during one of the most difficult periods I'd ever experienced, and you changed everything. I was struggling with confidence, feeling lost, and wondering if I'd ever find my place in the world. You didn't just offer me friendship – you offered me belonging.

You invited me into your life, your friend group, and your heart without hesitation. You showed me what it meant to be truly accepted and loved for exactly who I was. I remember one particularly hard day when I felt like giving up on everything.

You showed up at my door with ice cream, terrible reality TV shows, and the most important thing of all – your presence. You didn't try to fix everything or offer empty platitudes. You just sat with me, let me cry, and reminded me that I wasn't alone.

[Bride's name], you've taught me so much about what it means to be a good friend. You've shown me that friendship isn't about having everything in common – it's about caring for each other, supporting each other's dreams, and being there through all of life's ups and downs. You've been my voice of reason when I've made questionable decisions, my cheerleader when I've doubted myself, and my partner in countless adventures.

You've made me a better person just by being in my life. [Groom's name], I want to thank you for loving [Bride's name] the way she deserves to be loved. From the moment you two got together, I could see how much happiness you brought into her life.

You support her dreams, you make her laugh, and you clearly adore everything about her. Thank you for being the kind of partner who enhances her life rather than trying to change it. Thank you for seeing all the wonderful things about her that those of us who love her have always known.

To both of you – thank you for showing us what true love looks like. Your relationship is built on respect, friendship, and genuine joy in each other's company. You make each other better, and you make everyone around you believe in love.

[Bride's name] and [Groom's name], I'm so grateful to be part of your story. May your marriage be filled with the same love, support, and happiness that you've brought into the lives of everyone who knows you. So here's to a lifetime of love and beautiful memories together!`,
    authorName: 'William Mitchell',
    weddingRole: 'Bridesmaid',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-short-bridesmaid-speech-84',
    title: `The Short Bridesmaid Speech`,
    category: 'bridesmaid-speech',
    tone: 'heartfelt',
    durationMinutes: 0.5,
    wordCount: 59,
    excerpt: `Hi everyone! I'm [Bridesmaid's name], one of [Bride's name]'s bridesmaids. [Bride's name], you've been an amazing friend for so many years. You're kind, loyal, funny, and you...`,
    content: `Hi everyone! I'm [Bridesmaid's name], one of [Bride's name]'s bridesmaids. [Bride's name], you've been an amazing friend for so many years.

You're kind, loyal, funny, and you deserve all the happiness in the world. [Groom's name], thank you for making our girl so incredibly happy. You're perfect for each other.

So here's to a lifetime of love and laughter! Cheers!`,
    authorName: 'Chris Stewart',
    weddingRole: 'Bridesmaid',
    tags: ['heartfelt', 'short', 'maid of honor'],
  },
  {
    slug: 'the-sisterly-bridesmaid-speech-85',
    title: `The Sisterly Bridesmaid Speech`,
    category: 'bridesmaid-speech',
    tone: 'heartfelt',
    durationMinutes: 3.3,
    wordCount: 434,
    excerpt: `Good evening, everyone! I'm [Bridesmaid's name], [Bride's name]'s sister and one of her bridesmaids. I've had the privilege of being her sister for twenty-eight years, and I can...`,
    content: `Good evening, everyone! I'm [Bridesmaid's name], [Bride's name]'s sister and one of her bridesmaids. I've had the privilege of being her sister for twenty-eight years, and I can honestly say she's the best sister anyone could ask for.

Growing up with [Bride's name] was an adventure. She was the sister who would share her toys, who would comfort me when I had nightmares, and who would always stick up for me, even when I was clearly in the wrong. She was also the sister who would steal my clothes, use all my shampoo, and somehow convince our parents that everything was my fault.

But I wouldn't trade any of those memories for anything. [Bride's name] has always been my role model. She's the person who taught me how to be strong, how to be kind, and how to stand up for what I believe in.

She's faced every challenge in her life with grace and determination, and she's never forgotten to help others along the way. I remember when we were teenagers, and I was going through a really difficult time at school. I felt like I didn't fit in anywhere, and I was convinced that I was a complete failure at life.

[Bride's name] spent hours with me, listening to me cry, helping me with my homework, and reminding me that I was stronger than I knew. One night, she left a note on my pillow that said, "You're braver than you believe, stronger than you seem, and more loved than you know." I still have that note, and I still read it whenever I need a reminder of how lucky I am to have her as my sister. [Bride's name], you've been my protector, my cheerleader, and my best friend.

You've celebrated every victory with me and supported me through every challenge. I'm so proud to be your sister. [Groom's name], I want you to know what an wonderful woman you're marrying.

[Bride's name] is loyal, compassionate, strong, and she has the biggest heart of anyone I know. She will love you with everything she has, and she will always be your biggest supporter. Thank you for making my sister so happy.

I can see how much you love her, and it brings me so much joy to see her with someone who appreciates all the wonderful things about her. [Bride's name] and [Groom's name], I'm so excited to watch you build your life together. May your marriage be filled with all the love, laughter, and happiness you both deserve. Welcome to the family, [Groom's name] – we're so happy you're here!`,
    authorName: 'Eleanor Mitchell',
    weddingRole: 'Bridesmaid',
    tags: ['heartfelt', 'maid of honor'],
  },
  {
    slug: 'the-best-friend-groomsman-speech-86',
    title: `The Best Friend Groomsman Speech`,
    category: 'groomsman-speech',
    tone: 'heartfelt',
    durationMinutes: 3.6,
    wordCount: 462,
    excerpt: `Good evening, everyone! I'm [Groomsman's name], and I've had the privilege of being [Groom's name]'s best friend for the past twelve years. Standing here tonight as his groomsman...`,
    content: `Good evening, everyone! I'm [Groomsman's name], and I've had the privilege of being [Groom's name]'s best friend for the past twelve years. Standing here tonight as his groomsman is one of the greatest honors of my life.

I met [Groom's name] in college during our freshman year. I was this shy kid from a small town, feeling completely overwhelmed by college life. [Groom's name] was my roommate, and from day one, he made me feel like I belonged.

He invited me to join his study group, introduced me to his friends, and somehow convinced me that I could actually survive organic chemistry. Over the years, [Groom's name] has been the most loyal friend anyone could ask for. He's the guy who will help you move without complaining, who remembers your birthday every year, and who will drive three hours to pick you up when your car breaks down.

He's been my partner in countless adventures, my voice of reason during questionable decisions, and my biggest supporter through every challenge. [Groom's name] has this incredible ability to make everyone around him feel valued and appreciated. He remembers the small details that matter to people, he listens without judgment, and he has this way of finding the positive in any situation.

These qualities that make him such an amazing friend are the same qualities that make him perfect for [Bride's name]. When [Groom's name] first started talking about [Bride's name], I knew she was special. He would light up whenever he mentioned her name, and he would tell these elaborate stories about their conversations that would go on for hours.

I'd never seen him so excited about anything in his life. The first time I met [Bride's name], I understood immediately why [Groom's name] was so smitten. She was kind, funny, intelligent, and she clearly adored him just as much as he adored her.

Watching them together, I could see how they balanced each other perfectly. [Bride's name] brought out [Groom's name]'s playful side, while he grounded her with his steady, calming presence. [Bride's name], thank you for making my best friend so incredibly happy.

Thank you for loving him with the same loyalty and devotion that he shows to everyone in his life. You two are perfect for each other, and I'm so grateful that [Groom's name] found his person. [Groom's name], you've been like a brother to me for all these years.

You've taught me what it means to be a true friend, and I'm honored to stand by your side as you marry the love of your life. To both of you – may your marriage be filled with the same joy, laughter, and unwavering support that you've brought into each other's lives. So here's to a lifetime of love and happiness!`,
    authorName: 'Patrick Chapman',
    weddingRole: 'Groomsman',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'the-brotherhood-groomsman-speech-87',
    title: `The Brotherhood Groomsman Speech`,
    category: 'groomsman-speech',
    tone: 'heartfelt',
    durationMinutes: 3.1,
    wordCount: 407,
    excerpt: `Good evening, everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen, and I've had the honor of calling him my brother for the past ten years. [Groom's name] and I...`,
    content: `Good evening, everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen, and I've had the honor of calling him my brother for the past ten years. [Groom's name] and I met during a pretty difficult time in both our lives.

We were both dealing with some personal challenges, feeling a bit lost, and trying to figure out who we were and where we belonged. What started as two guys just trying to survive turned into one of the most important friendships of my life. [Groom's name] has been more than a friend to me – he's been my brother in every sense of the word.

He's the person I call when I need advice, when I want to celebrate something good, or when I just need someone to listen. He's shown up for me in ways that I never expected, and he's never asked for anything in return. I've watched [Groom's name] face challenges with courage, celebrate victories with humility, and treat everyone in his life with respect and kindness.

He's the kind of person who makes everyone around him better just by being himself. When [Groom's name] met [Bride's name], I watched him become the best version of himself. He was already a great guy, but [Bride's name] brought out this side of him that was even more caring, more thoughtful, and more joyful.

She didn't change who he was – she helped him become more of who he was meant to be. [Bride's name], I want you to know how grateful I am that [Groom's name] found you. You've made him happier than I've ever seen him, and you've shown him what it means to be truly loved and accepted.

Thank you for seeing all the wonderful things about him that those of us who love him have always known. [Groom's name], you've been my brother through everything life has thrown at them. You've stood by me through my worst moments and celebrated with me through my best ones.

Now I get to stand by you as you marry the love of your life, and I couldn't be happier for you. To both of you – may your marriage be built on the same foundation of loyalty, trust, and unconditional love that has made our friendship so strong. May you always be each other's greatest supporter and closest friend. So here's to [Groom's name] and [Bride's name] – may your love story continue to inspire everyone who knows you!`,
    authorName: 'Nathan Campbell',
    weddingRole: 'Groomsman',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'the-funny-groomsman-speech-88',
    title: `The Funny Groomsman Speech`,
    category: 'groomsman-speech',
    tone: 'funny',
    durationMinutes: 3.2,
    wordCount: 414,
    excerpt: `Hi everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen, and I've known him long enough to have some seriously embarrassing stories. Don't worry, [Groom's name]...`,
    content: `Hi everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen, and I've known him long enough to have some seriously embarrassing stories. Don't worry, [Groom's name], I'll only share the really good ones!

I've been friends with [Groom's name] since high school, and I can tell you that he was not always the suave, sophisticated gentleman you see before you today. This is the guy who once showed up to a job interview wearing two different shoes, who tried to impress a girl by cooking dinner and set off the smoke alarm three times, and who somehow managed to get lost in his own neighborhood using GPS. But here's the thing about [Groom's name] – he's always been willing to laugh at himself.

When he wore those mismatched shoes to the interview, he turned it into a conversation starter. When he burned dinner, he ordered pizza and made it into a romantic picnic on the floor. When he got lost, he called it "exploring alternate routes." I remember when [Groom's name] first started dating [Bride's name].

Suddenly, this guy who had lived on pizza and energy drinks for years was asking me for cooking tips. He was actually reading books about wine pairings and trying to learn about art. I thought he'd lost his mind.

Then I met [Bride's name], and everything made sense. She's amazing, and she was clearly worth all the effort [Groom's name] was putting in. Plus, she thought his terrible cooking was "charming," his mismatched socks were "quirky," and his dad jokes were actually funny.

I knew then that she was either perfect for him or had questionable taste in humor. Turns out, it was both. [Bride's name], you should know what you're getting into.

[Groom's name] will leave his socks on the floor, he will eat the last slice of pizza without asking, and he will definitely try to convince you that his way of loading the dishwasher is "more efficient." But he'll also make you laugh every day, support your dreams without question, and love you with everything he has. [Groom's name], you found someone who loves you exactly as you are – weird habits, terrible jokes, and all. That's pretty incredible, and you better not mess it up!

To [Groom's name] and [Bride's name] – may your marriage be filled with laughter, love, and someone to appreciate your unique sense of humor. And [Groom's name], maybe invest in some cooking lessons as a wedding gift to yourself!`,
    authorName: 'Patrick Dixon',
    weddingRole: 'Groomsman',
    tags: ['funny', 'groom'],
  },
  {
    slug: 'the-grateful-groomsman-speech-89',
    title: `The Grateful Groomsman Speech`,
    category: 'groomsman-speech',
    tone: 'heartfelt',
    durationMinutes: 3.5,
    wordCount: 457,
    excerpt: `Good evening, everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen, and I feel incredibly grateful to be here celebrating this amazing couple tonight. [Groom's...`,
    content: `Good evening, everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen, and I feel incredibly grateful to be here celebrating this amazing couple tonight. [Groom's name], I want to start by thanking you for being such an extraordinary friend.

You came into my life during a time when I really needed someone like you, though I didn't realize it at the time. I was going through a period where I felt pretty isolated and unsure of myself. You didn't just offer me friendship – you offered me acceptance.

You invited me into your life, introduced me to your other friends, and made me feel like I belonged somewhere. You showed me what it meant to have someone in your corner, someone who believed in me even when I didn't believe in myself. I remember one particularly difficult time when I was struggling with some personal issues and feeling like I had nowhere to turn.

You didn't just offer to help – you actually showed up. You spent hours with me, listening without judgment, offering perspective when I needed it, and just being present when that's all I needed. [Groom's name], you've taught me so much about what it means to be a good friend.

You've shown me that friendship isn't just about the fun times – though we've certainly had plenty of those – it's about showing up for each other, supporting each other's dreams, and being there through all of life's ups and downs. You've been my example of how to treat people with kindness, how to be loyal, and how to love unconditionally. You've made me a better person just by being in my life.

[Bride's name], I want to thank you for loving [Groom's name] the way he deserves to be loved. From the moment you two got together, I could see how much happiness you brought into his life. You appreciate all the wonderful things about him that those of us who love him have always known.

Thank you for being the kind of partner who enhances his life rather than trying to change it. Thank you for supporting his friendships and for welcoming all of us into your lives together. To both of you – thank you for showing us what true love looks like.

Your relationship is built on mutual respect, genuine friendship, and obvious joy in each other's company. You make each other better, and you make everyone around you believe in love. [Groom's name] and [Bride's name], I'm so grateful to be part of your story.

May your marriage be filled with the same love, support, and happiness that you've brought into the lives of everyone who knows you. So here's to a lifetime of love and beautiful memories together!`,
    authorName: 'Luke Barrett',
    weddingRole: 'Groomsman',
    tags: ['heartfelt', 'groom'],
  },
  {
    slug: 'the-short-groomsman-speech-90',
    title: `The Short Groomsman Speech`,
    category: 'groomsman-speech',
    tone: 'heartfelt',
    durationMinutes: 0.4,
    wordCount: 58,
    excerpt: `Hi everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen. [Groom's name], you've been an incredible friend for so many years. You're loyal, funny, kind, and you...`,
    content: `Hi everyone! I'm [Groomsman's name], one of [Groom's name]'s groomsmen. [Groom's name], you've been an incredible friend for so many years.

You're loyal, funny, kind, and you deserve all the happiness in the world. [Bride's name], thank you for making our buddy so happy. You two are perfect together.

So here's to a lifetime of love and adventure! Cheers!`,
    authorName: 'Chris Reid',
    weddingRole: 'Groomsman',
    tags: ['heartfelt', 'short', 'groom'],
  },
  {
    slug: 'the-funny-sibling-rivalry-speech-91',
    title: `The Funny Sibling Rivalry Speech`,
    category: 'brother-of-bride-speech',
    tone: 'funny',
    durationMinutes: 3.3,
    wordCount: 432,
    excerpt: `Hi everyone! I'm Mike, [Bride's name]'s brother, and I've been looking forward to this speech because I finally have a captive audience to tell embarrassing stories about my...`,
    content: `Hi everyone! I'm Mike, [Bride's name]'s brother, and I've been looking forward to this speech because I finally have a captive audience to tell embarrassing stories about my sister. Don't worry, [Bride's name], I promise to keep it PG-rated... mostly.

[Bride's name], remember when you were seven and decided you were going to be a professional singer? You made me sit through daily "concerts" in our living room where you sang the same song over and over again. Mum and Dad said you had a beautiful voice.

I said you sounded like a cat being strangled. Turns out we were both right – you did have a beautiful voice, and I was just being a typical annoying little brother who couldn't appreciate art. Or how about when you were thirteen and had your first crush on Aidanmy Henderson?

You practiced asking him to the school dance by talking to yourself in the mirror for hours. I may have hidden behind your door and recorded some of it on our old camcorder. Don't worry – I deleted the recording... mostly.

Okay, fine, I still have it, but I promise it's in a very safe place. But here's what I didn't tell you then: I was actually really proud of you. You were brave enough to put yourself out there, even when you were nervous.

You've always been like that – willing to take chances, to follow your dreams, to be vulnerable when it mattered. [Groom's name], you should know what you're getting into. [Bride's name] will reorganize your entire closet without asking – and somehow make it better.

She will cry at every movie, even the comedies, especially the comedies. She will insist on taking seventeen photos of her food before eating it, and yes, you'll have to wait. And she will always, always be right in arguments – even when she's wrong, she's somehow still right.

It's a special talent. But you should also know that she's the most loyal person you'll ever meet. She'll defend you even when you're clearly in the wrong.

She'll remember your birthday, your anniversary, your favorite coffee order, and that thing you mentioned liking once three years ago. She'll make you laugh when you're sad, calm you down when you're stressed, and probably reorganize your life in the best possible way. [Bride's name], I may have spent our childhood trying to annoy you, but you've spent your whole life making me proud to be your brother.

[Groom's name], welcome to the family – and good luck keeping up with her! Trust me, it's worth the effort.`,
    authorName: 'Nathan Newton',
    weddingRole: 'Brother of the Bride',
    tags: ['funny', 'sibling'],
  },
  {
    slug: 'the-memory-filled-emotional-speech-92',
    title: `The Memory-Filled Emotional Speech`,
    category: 'brother-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 3.4,
    wordCount: 438,
    excerpt: `Good evening, everyone. I'm Alex, [Bride's name]'s older brother, and I want to share some memories that show you exactly who my sister is and why she deserves all the happiness...`,
    content: `Good evening, everyone. I'm Alex, [Bride's name]'s older brother, and I want to share some memories that show you exactly who my sister is and why she deserves all the happiness in the world. When [Bride's name] was eight, our family went through a really tough time when Dad lost his job.

Money was tight, and we had to cancel our family vacation that we'd been planning for months. [Bride's name] had been saving her allowance for months to buy a new bike, but instead, she emptied her piggy bank and gave all her money to Mum and Dad to help with groceries. She said, "Family comes first, right?" That's [Bride's name] – always putting others before herself, always seeing the bigger picture.

In high school, when I was struggling with math and felt like giving up, [Bride's name] spent hours tutoring me every night after school. She never made me feel stupid, never got frustrated when I didn't understand something for the fifth time. She just kept believing in me until I started believing in myself.

I passed that class because of her patience and determination. When I moved away for college, [Bride's name] called me every single week to check in. Not just to chat, but to really make sure I was okay.

She could tell when I was homesick just by the sound of my voice, and she always knew exactly what to say to make me feel better. She sent care packages, remembered my exam dates, and never let me feel alone. [Groom's name], when [Bride's name] first told me about you, I could hear something different in her voice.

There was this happiness, this excitement that I'd never heard before. She talked about you the way she talks about her favorite books or her dream job – with pure joy and endless enthusiasm. The first time I met you, I watched how you listened to her stories, how you laughed at her jokes, how you remembered the little things she mentioned.

I knew then that you saw her the way she deserves to be seen – as someone truly special, someone worth cherishing. [Bride's name], you've been my role model, my conscience, and my biggest cheerleader. You've taught me about kindness, perseverance, and unconditional love.

You've shown me what it means to be a good person, and I'm so proud to be your brother. To [Bride's name] and [Groom's name] – may your marriage be filled with the same love, support, and joy that you've brought to everyone around you. May you always be each other's best friend, biggest supporter, and greatest love.`,
    authorName: 'Jennifer Shaw',
    weddingRole: 'Brother of the Bride',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-protective-big-brother-speech-93',
    title: `The Protective Big Brother Speech`,
    category: 'brother-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 2.9,
    wordCount: 378,
    excerpt: `Good evening, everyone. I'm Jake, [Bride's name]'s big brother, and I've been waiting for this moment – and dreading it – for a very long time. When [Bride's name] was five years...`,
    content: `Good evening, everyone. I'm Jake, [Bride's name]'s big brother, and I've been waiting for this moment – and dreading it – for a very long time. When [Bride's name] was five years old, she came running to me in tears because a boy at school had pulled her hair.

I marched right up to that boy the next day and told him that if he ever made my sister cry again, he'd have to answer to me. That was the first time I realized that being [Bride's name]'s brother meant being her protector, her defender, and sometimes her biggest pain in the neck. Over the years, I've watched [Bride's name] grow from that little girl who needed her big brother's protection into an wonderful woman who can handle anything life throws at her.

She's smart, strong, compassionate, and fiercely independent. She doesn't need me to protect her anymore – but I'll always be ready to if she needs me. [Bride's name], you've been my partner in crime, my biggest supporter, and sometimes my toughest critic.

You've made me a better person just by being my sister. You taught me what it means to be loyal, to stand up for what's right, and to never give up on the people you love. [Groom's name], when [Bride's name] first told me about you, I'll admit I was skeptical.

Not because of anything you did wrong, but because I know how special my sister is, and I wanted to make sure you knew it too. But watching you two together, seeing how you look at her, how you support her dreams, and how you make her laugh – I knew you got it. You see her the way I've always seen her: as someone truly extraordinary.

[Groom's name], welcome to the family. You're getting an amazing woman, but you're also getting all of us – and trust me, we're a lot to handle! But we're loyal, we're loving, and we'll always have your back as long as you have hers.

To [Bride's name] and [Groom's name] – may your marriage be filled with love, laughter, and all the happiness in the world. And [Bride's name], just remember – I'm still your big brother, and I'm still watching out for you. Cheers!`,
    authorName: 'Mark Lane',
    weddingRole: 'Brother of the Bride',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-short-and-sweet-brother-speech-94',
    title: `The Short and Sweet Brother Speech`,
    category: 'brother-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.6,
    wordCount: 202,
    excerpt: `Hi everyone, I'm David, [Bride's name]'s brother, and I'll keep this short because I know you're all eager to get to the dancing – and because [Bride's name] threatened me if I...`,
    content: `Hi everyone, I'm David, [Bride's name]'s brother, and I'll keep this short because I know you're all eager to get to the dancing – and because [Bride's name] threatened me if I embarrassed her too much tonight. Growing up with [Bride's name] taught me what it means to have someone who will always be in your corner. She's been my biggest supporter, my toughest challenger, and my closest friend all rolled into one.

[Bride's name], you've always been the one pushing me to be better, to try harder, to never give up. You believed in me even when I didn't believe in myself. You've shown me what it means to be kind, to be strong, and to love unconditionally.

[Groom's name], you're getting someone who will love you with her whole heart, support your wildest dreams, and probably reorganize your entire life in the best possible way. You're also getting a brother-in-law who will always have your back, and a family who already considers you one of us. I'm so happy you found each other, and I'm honored to call you both family.

To [Bride's name] and [Groom's name] – so here's to a lifetime of love, laughter, and happily ever after! Cheers!`,
    authorName: 'Olivia Carter',
    weddingRole: 'Brother of the Bride',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-wisdom-sharing-brother-speech-95',
    title: `The Wisdom-Sharing Brother Speech`,
    category: 'brother-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 3.1,
    wordCount: 409,
    excerpt: `Hi everyone! I'm Chris, [Bride's name]'s brother, and as someone who's been married for eight years, I've been designated as the family "expert" on marriage advice. My wife is...`,
    content: `Hi everyone! I'm Chris, [Bride's name]'s brother, and as someone who's been married for eight years, I've been designated as the family "expert" on marriage advice. My wife is laughing right now because she knows I'm still figuring it out day by day!

But seriously, [Bride's name], watching you and [Groom's name] together, I can see that you already understand the most important things about marriage – things it took me years to learn. First, you genuinely like each other. I know that sounds obvious, but it's not always the case.

I've watched you two together, and you actually enjoy each other's company. You laugh at each other's jokes, you're interested in each other's stories, and you choose to spend time together even when you don't have to. That foundation of friendship is everything.

Second, you support each other's dreams without losing yourselves. [Bride's name], I've seen how you encourage [Groom's name]'s goals and celebrate his successes as if they were your own. And [Groom's name], I've watched you cheer [Bride's name] on as she pursues her passions, never trying to dim her light.

You're teammates, not competitors. Third, you've learned to argue well – and yes, that's a real skill! I've seen you two disagree, and you do it with respect and love.

You listen to each other, you compromise, and you never try to hurt each other even when you're frustrated. That's wisdom beyond your years. [Bride's name], you've always been wise beyond your years.

Even as kids, you were the one giving me advice about friends, school, and life. You have this incredible ability to see the best in people and situations, to find the silver lining in any cloud. [Groom's name], thank you for loving my sister the way she deserves to be loved.

Thank you for being patient with her perfectionism, for encouraging her dreams, and for making her laugh every single day. Thank you for becoming not just her husband, but her best friend. My advice for your marriage: Keep talking to each other, keep laughing together, and remember that you're on the same team.

When life gets challenging – and it will – face those challenges together. Be each other's safe harbor in every storm. [Bride's name], I'm so proud of the woman you've become and so happy to see you this happy.

[Groom's name], welcome to our crazy, loving family! So here's to a lifetime of love, laughter, and happily ever after!`,
    authorName: 'Rebecca Brooks',
    weddingRole: 'Brother of the Bride',
    tags: ['inspirational', 'sibling'],
  },
  {
    slug: 'the-funny-sister-speech-96',
    title: `The Funny Sister Speech`,
    category: 'sister-of-bride-speech',
    tone: 'funny',
    durationMinutes: 3.0,
    wordCount: 393,
    excerpt: `Hi everyone! I'm Rosie, [Bride's name]'s younger sister, and I have years of embarrassing stories to share. Don't worry, [Bride's name], I'll only tell the really good ones...`,
    content: `Hi everyone! I'm Rosie, [Bride's name]'s younger sister, and I have years of embarrassing stories to share. Don't worry, [Bride's name], I'll only tell the really good ones!

Growing up with [Bride's name] was like living with a perfectionist roommate who also happened to be related to me. She color-coordinated her school supplies, made her bed every morning (even on weekends), and actually enjoyed doing homework. Meanwhile, I was the sister who lost her backpack at least once a week and considered cereal a food group.

[Bride's name] was always trying to "improve" me. She gave me unsolicited fashion advice, reorganized my room when I wasn't looking, and once made me a schedule for my summer vacation because she thought I needed more structure. I was eight.

But here's what I didn't appreciate then: she was always looking out for me. When I forgot my lunch money, she shared hers. When I was nervous about my first day of high school, she walked me to my classes.

When I had my heart broken for the first time, she showed up with ice cream and terrible movies and let me cry on her shoulder. [Groom's name], you should know what you're getting into. [Bride's name] will reorganize your closet, your kitchen, and probably your entire life.

She will remember every important date, anniversary, and birthday better than you do. She will have strong opinions about everything from what color to paint the walls to what route you should take to work. But you should also know that she will love you fiercely and completely.

She will support your dreams even when they seem impossible. She will be your biggest cheerleader and your most honest critic. She will make you want to be the best version of yourself.

[Bride's name], thank you for being the best big sister I could have asked for, even when I didn't deserve it. Thank you for teaching me about loyalty, kindness, and the importance of always having good snacks in your purse. [Groom's name], welcome to our crazy family!

Fair warning: we're loud, we're opinionated, and we will definitely embarrass you at some point. But we're also incredibly loyal, and we love hard. So here's to [Bride's name] and [Groom's name] – may your marriage be filled with love, laughter, and someone to remind you where you put your keys!`,
    authorName: 'Rebecca Webster',
    weddingRole: 'Sister of the Bride',
    tags: ['funny', 'sibling'],
  },
  {
    slug: 'the-memory-filled-sister-speech-97',
    title: `The Memory-Filled Sister Speech`,
    category: 'sister-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 3.1,
    wordCount: 407,
    excerpt: `Good evening, everyone. I'm Rachel, [Bride's name]'s younger sister, and I want to share some memories that show you exactly who my sister is. When I was seven, I was terrified of...`,
    content: `Good evening, everyone. I'm Rachel, [Bride's name]'s younger sister, and I want to share some memories that show you exactly who my sister is. When I was seven, I was terrified of the dark.

Every night, I would sneak into [Bride's name]'s bed because I was too scared to sleep alone. Instead of getting annoyed or telling our parents, she would make up stories to help me fall asleep. She created this whole magical world where we were brave princesses who could conquer any fear.

She did this for months until I finally felt brave enough to sleep in my own bed. When I was in middle school, I desperately wanted to try out for the school play, but I was too nervous to audition alone. [Bride's name] not only came with me for moral support, but she also helped me practice my lines every day for two weeks.

When I got the part, she was more excited than I was. In high school, when I was struggling with self-confidence and feeling like I didn't measure up to anyone, [Bride's name] would leave little notes in my locker reminding me of my strengths. "You're braver than you think," "You're kinder than you know," "You're more loved than you realize." I still have those notes.

When I went through a difficult breakup in college, [Bride's name] drove four hours just to bring me my favorite cookies and sit with me while I cried. She didn't try to fix everything or give me a bunch of advice. She just listened and reminded me that I was worthy of love.

[Groom's name], when [Bride's name] first told me about you, I could hear the difference in her voice. There was this lightness, this joy that I'd never heard before. She talked about you the way she talks about her favorite things – with pure happiness and excitement.

The first time I met you, I watched how you listened to her stories, how you remembered the details she shared, how you made her laugh. I knew then that you saw her the way she deserves to be seen – as someone truly extraordinary. [Bride's name], you've been my hero, my teacher, and my best friend.

You've shaped who I am in the most beautiful ways. To [Bride's name] and [Groom's name] – may your marriage be filled with the same love, support, and joy that you've brought to everyone around you.`,
    authorName: 'Thomas Murray',
    weddingRole: 'Sister of the Bride',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-short-and-sweet-sister-speech-98',
    title: `The Short and Sweet Sister Speech`,
    category: 'sister-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 1.0,
    wordCount: 133,
    excerpt: `Hi everyone! I'm Jessica, [Bride's name]'s sister. Having [Bride's name] as my sister means I've always had someone in my corner. She's been my protector, my advisor, and my best...`,
    content: `Hi everyone! I'm Jessica, [Bride's name]'s sister. Having [Bride's name] as my sister means I've always had someone in my corner.

She's been my protector, my advisor, and my best friend. [Bride's name], you've taught me about strength, kindness, and what it means to love unconditionally. You've shown me how to be brave when I'm scared and how to be generous when I have little to give.

[Groom's name], you're getting someone who will love you with her whole heart, support your dreams, and probably reorganize your entire life in the best possible way. I'm so happy you found each other, and I'm excited to officially call you my brother. To [Bride's name] and [Groom's name] – so here's to a lifetime of love, laughter, and sisterly advice whether you want it or not!`,
    authorName: 'Simon Reid',
    weddingRole: 'Sister of the Bride',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-sisterly-bond-speech-99',
    title: `The Sisterly Bond Speech`,
    category: 'sister-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 3.0,
    wordCount: 384,
    excerpt: `Good evening, everyone! I'm Orla, [Bride's name]'s sister, and I've been waiting my whole life to give this speech. Growing up with [Bride's name] meant having a built-in best...`,
    content: `Good evening, everyone! I'm Orla, [Bride's name]'s sister, and I've been waiting my whole life to give this speech. Growing up with [Bride's name] meant having a built-in best friend, confidante, and partner in crime.

We shared a room for fifteen years, which meant sharing secrets, dreams, clothes (whether she knew it or not), and countless late-night conversations about everything and nothing. [Bride's name], you've been my role model since we were kids. You were always the brave one – the first to try new things, the first to stand up for what was right, the first to comfort someone who was hurting.

I've spent my whole life trying to be half as courageous and kind as you are. I remember when we were teenagers, I was going through a really difficult time with some friends at school. I felt like I didn't fit in anywhere.

You sat with me on my bed one night and said, "Orla, you don't need to fit in with everyone. You just need to find your people – the ones who love you exactly as you are." Then you hugged me and added, "And you'll always have me." That's who [Bride's name] is – she sees the best in everyone and helps them see it in themselves. [Groom's name], when [Bride's name] first told me about you, I was skeptical.

Not because I didn't want her to be happy, but because I knew how special she was, and I wanted to make sure you knew it too. But the first time I saw you two together, I knew you got it. You looked at her the way she deserves to be looked at – with love, admiration, and genuine joy.

You make her laugh in a way I've never seen before. You support her dreams, celebrate her successes, and stand by her through challenges. You've become her best friend, and that makes me so happy because I know how important friendship is to her.

[Bride's name], you've been my sister, my friend, and my inspiration. Watching you find someone who loves you as much as you deserve makes my heart so full. To [Bride's name] and [Groom's name] – may your marriage be filled with the same love, laughter, and unbreakable bond that you've already built together. Cheers!`,
    authorName: 'Megan Barrett',
    weddingRole: 'Sister of the Bride',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-wisdom-sharing-sister-speech-100',
    title: `The Wisdom-Sharing Sister Speech`,
    category: 'sister-of-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 2.5,
    wordCount: 325,
    excerpt: `Hi everyone! I'm Lisa, [Bride's name]'s older sister, and as someone who's been married for six years, I've been asked to share some "wisdom" about marriage. My husband is...`,
    content: `Hi everyone! I'm Lisa, [Bride's name]'s older sister, and as someone who's been married for six years, I've been asked to share some "wisdom" about marriage. My husband is laughing because he knows I'm still figuring it out too!

But watching [Bride's name] and [Groom's name] together, I can see that they already understand the most important things about love and partnership. [Bride's name], you've always been wise beyond your years. Even as kids, you were the one giving me advice about friends, school, and boys.

You have this incredible ability to see situations clearly and offer perspective that's both honest and kind. I remember when I was planning my own wedding and getting stressed about all the details, you said something that stuck with me: "Lisa, when it comes down to it, all that matters is that you're marrying your best friend. Everything else is just decoration." You were right then, and you're right now.

[Groom's name], thank you for seeing my sister for the amazing person she is. Thank you for supporting her dreams, encouraging her goals, and making her laugh every single day. Thank you for being patient with her perfectionism and for loving her exactly as she is.

My advice for your marriage: Remember that you're teammates, not opponents. When challenges come – and they will – face them together. Keep talking to each other, keep laughing together, and never stop being curious about each other.

Most importantly, remember that love is both a feeling and a choice. Choose each other every day, especially on the days when it's not easy. [Bride's name], I'm so proud of the woman you've become and so happy to see you this happy.

You deserve all the love and joy in the world. [Groom's name], welcome to our family! We're excited to have you as our brother. So here's to [Bride's name] and [Groom's name] – may your marriage be everything you've dreamed of and more!`,
    authorName: 'Rachel Lane',
    weddingRole: 'Sister of the Bride',
    tags: ['inspirational', 'sibling'],
  },
  {
    slug: 'the-advice-giving-brother-speech-101',
    title: `The Advice-Giving Brother Speech`,
    category: 'brother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.5,
    wordCount: 325,
    excerpt: `Good evening, everyone! I'm [Brother's name], [Groom's name]'s older brother, which means I've had a few more years to figure things out – or at least pretend I have. [Groom's...`,
    content: `Good evening, everyone! I'm [Brother's name], [Groom's name]'s older brother, which means I've had a few more years to figure things out – or at least pretend I have. [Groom's name], being your brother has been one of the greatest privileges of my life.

You've been my teammate, my co-conspirator, and my best friend. We've shared everything – toys, rooms, secrets, and more adventures than I can count. I've learned so much from watching you navigate life.

You've taught me about perseverance, about staying true to yourself, and about the importance of always doing the right thing, even when no one is watching. Now, as your older brother, I feel it's my duty to give you some marriage advice – whether you want it or not. First, remember that marriage is a partnership.

You're teammates now, facing life's challenges together. Support each other's dreams, celebrate each other's victories, and be there for each other during the tough times. Second, never stop being friends.

The couples who make it are the ones who genuinely enjoy each other's company, who can laugh together, and who choose each other every single day. Third, communicate openly and honestly. Don't let small problems become big ones.

Talk to each other, listen to each other, and always assume the best intentions. And finally, remember to have fun together. Life can be serious enough without making your marriage serious all the time.

Keep laughing, keep playing, keep finding joy in the everyday moments. [Bride's name], you're getting an wonderful man. [Groom's name] is loyal, honest, caring, and he makes a mean pancake breakfast.

He'll be your biggest supporter, your most devoted partner, and your best friend for life. [Groom's name], you're getting an amazing woman who loves you for exactly who you are. Hold onto that, cherish it, and never take it for granted. So here's to [Groom's name] and [Bride's name] – may your marriage be everything you've dreamed of and more!`,
    authorName: 'Owen Kelly',
    weddingRole: 'Brother of the Groom',
    tags: ['inspirational', 'sibling'],
  },
  {
    slug: 'the-funny-brother-speech-102',
    title: `The Funny Brother Speech`,
    category: 'brother-of-groom-speech',
    tone: 'funny',
    durationMinutes: 3.0,
    wordCount: 384,
    excerpt: `Hi everyone! I'm [Brother's name], [Groom's name]'s older and clearly more handsome brother. I've known [Groom's name] his entire life, which means I have about thirty years'...`,
    content: `Hi everyone! I'm [Brother's name], [Groom's name]'s older and clearly more handsome brother. I've known [Groom's name] his entire life, which means I have about thirty years' worth of embarrassing stories I could share tonight.

Don't worry, [Groom's name], I'll only share the really good ones. Like the time when [Groom's name] was twelve and decided he was going to impress a girl at school by showing up with a "cool" new hairstyle. He tried to cut his own hair the night before and ended up looking like he'd been attacked by a lawnmower.

Mom had to take him to three different barbers to fix it, and he still ended up wearing a baseball cap for two months. Or there was the time in high school when [Groom's name] spent three hours getting ready for his first date. He used half a bottle of cologne, practiced his "cool guy" walk in the mirror, and even rehearsed conversation topics.

The date lasted exactly twenty minutes because he was so nervous he spilled an entire milkshake on himself in the first five minutes. But here's what I love about my brother – he never gave up. He kept trying, kept putting himself out there, and eventually figured out that being himself was way cooler than trying to be someone else.

[Bride's name], you should know what you're getting into. [Groom's name] still takes forever to get ready, he still uses too much cologne, and he will definitely practice conversations in the mirror before important events. But he's also the most loyal, caring, and genuine person you'll ever meet.

He's the guy who will drive four hours to help you move, who remembers everyone's birthday, and who will defend you even when you're clearly wrong. He's also the guy who will eat the last piece of pizza and then pretend he didn't see it, but nobody's perfect. [Groom's name], I'm proud to be your brother and even prouder to see you marry someone who appreciates your unique brand of weirdness.

[Bride's name], welcome to the family! Fair warning – we're all a little weird, but we're your kind of weird now. So here's to [Groom's name] and [Bride's name] – may your marriage be filled with love, laughter, and someone to blame when the dishes don't get done!`,
    authorName: 'Nathan Gibson',
    weddingRole: 'Brother of the Groom',
    tags: ['funny', 'sibling'],
  },
  {
    slug: 'the-memory-filled-brother-speech-103',
    title: `The Memory-Filled Brother Speech`,
    category: 'brother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.4,
    wordCount: 310,
    excerpt: `Good evening, everyone! I'm [Brother's name], and I have the privilege of being [Groom's name]'s brother. I want to share a memory that perfectly captures who [Groom's name] is...`,
    content: `Good evening, everyone! I'm [Brother's name], and I have the privilege of being [Groom's name]'s brother. I want to share a memory that perfectly captures who [Groom's name] is.

When we were kids, we had this neighbor, Mrs. Grahamson, who was elderly and lived alone. Every Saturday morning, without being asked, [Groom's name] would go over and help her with her yard work.

One day, I asked him why he did it. He was probably only ten years old at the time, and he said, "Because she's lonely, and everyone deserves to have someone care about them." That's [Groom's name] – always thinking about others, always finding ways to help. I've watched him carry that same spirit throughout his life.

In high school, he was the guy who would sit with the kid eating lunch alone. In college, he was the one who would help classmates study even when he had his own exams to worry about. And as an adult, he's the friend who shows up when you need him, no questions asked.

[Groom's name], you've taught me so much about kindness, loyalty, and what it means to be a good person. You've been my role model in more ways than you know. When you first started dating [Bride's name], I could see how much she meant to you.

You would light up whenever you talked about her, and for the first time, I saw you truly, completely happy. [Bride's name], thank you for loving my brother the way he deserves to be loved. Thank you for seeing all the wonderful things about him that I've known my whole life.

You two are perfect together, and I couldn't be happier for you both. To [Groom's name] and [Bride's name] – may your marriage be filled with the same kindness, love, and joy that you bring to everyone around you!`,
    authorName: 'Mark Dixon',
    weddingRole: 'Brother of the Groom',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-protective-brother-speech-104',
    title: `The Protective Brother Speech`,
    category: 'brother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 3.3,
    wordCount: 425,
    excerpt: `Good evening, everyone! I'm [Brother's name], [Groom's name]'s brother, and I've been waiting for this moment for a long time. Growing up with [Groom's name] has been quite the...`,
    content: `Good evening, everyone! I'm [Brother's name], [Groom's name]'s brother, and I've been waiting for this moment for a long time. Growing up with [Groom's name] has been quite the adventure.

As his older brother, I always felt it was my job to look out for him, to teach him the important things in life – like how to throw a proper punch, how to sneak cookies from the kitchen without getting caught, and most importantly, how to treat people with respect and kindness. [Groom's name], you've always been more than just my little brother – you've been my best friend, my partner in crime, and sometimes my biggest headache. I remember when you were seven and decided you were going to "protect" me from the neighborhood bully by challenging him to a fight.

You were half his size, but you had twice the heart. That's who you are – someone who stands up for the people you love, no matter what. I've watched you grow from that fearless little boy into an wonderful man.

You're honest, loyal, hardworking, and you have the biggest heart of anyone I know. You've always been there for our family, always ready to help, always putting others before yourself. When you first told me about [Bride's name], I could see something different in you.

There was a happiness in your eyes that I'd never seen before. You talked about her constantly – and I mean constantly. It got to the point where I had to remind you that not every conversation needed to include a story about how amazing [Bride's name] is.

[Bride's name], I want you to know that from the moment I met you, I knew you were perfect for my brother. You love him for exactly who he is, you make him laugh, you challenge him to be better, and most importantly, you make him happier than I've ever seen him. As [Groom's name]'s brother, I've always been protective of him.

But I can honestly say that I have never felt more confident about anyone in his life than I do about you. You're not just gaining a husband today – you're gaining a brother who will always have your back. [Groom's name], I'm so proud of the man you've become and so happy that you've found your perfect match.

[Bride's name], welcome to our crazy family – we're so lucky to have you. So here's to [Groom's name] and [Bride's name] – may your marriage be filled with love, laughter, and all the happiness you both deserve!`,
    authorName: 'Hannah Campbell',
    weddingRole: 'Brother of the Groom',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-short-brother-speech-105',
    title: `The Short Brother Speech`,
    category: 'brother-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 0.7,
    wordCount: 94,
    excerpt: `Good evening! I'm [Brother's name], [Groom's name]'s brother. They say you can't choose your family, but if I could choose a brother, I'd choose [Groom's name] every time. He's...`,
    content: `Good evening! I'm [Brother's name], [Groom's name]'s brother. They say you can't choose your family, but if I could choose a brother, I'd choose [Groom's name] every time.

He's been my best friend, my biggest supporter, and my partner in countless adventures. [Groom's name], you've always been there for me, and I've watched you bring that same loyalty and love to everything you do. [Bride's name], thank you for making my brother so happy.

You're perfect for him, and I'm thrilled to call you my sister. So here's to a lifetime of happiness together. Cheers!`,
    authorName: 'Chris Kelly',
    weddingRole: 'Brother of the Groom',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-funny-sister-speech-106',
    title: `The Funny Sister Speech`,
    category: 'sister-of-groom-speech',
    tone: 'funny',
    durationMinutes: 3.4,
    wordCount: 441,
    excerpt: `Hi everyone! I'm [Sister's name], [Groom's name]'s sister, and I have about twenty-five years' worth of embarrassing stories about him. Don't worry, [Groom's name], I'll only...`,
    content: `Hi everyone! I'm [Sister's name], [Groom's name]'s sister, and I have about twenty-five years' worth of embarrassing stories about him. Don't worry, [Groom's name], I'll only share the really good ones!

Growing up with [Groom's name] was never boring. He was the kid who thought he could fly if he just believed hard enough – which led to several emergency room visits and a lifetime ban from jumping off furniture. He was also convinced that if he ate enough carrots, he would develop superhuman vision.

Spoiler alert: he still needs glasses. I remember when [Groom's name] was fourteen and decided he was going to serenade his crush under her bedroom window. He spent weeks practicing with his guitar, learned her favorite song, and snuck out one night to perform.

What he didn't know was that her family had moved the week before. He ended up serenading a very confused elderly man who called the police thinking there was a burglar in his yard. Or there was the time [Groom's name] decided to cook dinner for our parents' anniversary.

He wanted to make something "fancy," so he attempted beef wellington. Three hours later, the smoke alarm was going off, the kitchen looked like a war zone, and we ordered pizza. But you know what?

Our parents still talk about how sweet it was that he tried. That's [Groom's name] – he puts his whole heart into everything he does, even when it doesn't go according to plan. He's persistent, he's optimistic, and he never gives up on the people he loves.

[Bride's name], you should know what you're getting into. [Groom's name] will still try to cook fancy dinners that may or may not be edible. He will still sing to you, though hopefully not under anyone's window.

And he will definitely put his whole heart into loving you, just like he does with everything else. He's also the most loyal person you'll ever meet. He's the brother who will drive four hours to help you move, who remembers every important date, and who will defend you even when you're clearly wrong.

He's also the brother who will eat the last piece of cake and then help you look for it, but nobody's perfect. [Groom's name], I'm so proud to be your sister and so happy to see you marry someone who appreciates your unique brand of wonderful weirdness. [Bride's name], welcome to our beautifully chaotic family!

We're all a little weird, but now you're our kind of weird. So here's to [Groom's name] and [Bride's name] – may your marriage be filled with love, laughter, and someone to appreciate your cooking experiments!`,
    authorName: 'Grace Armstrong',
    weddingRole: 'Sister of the Groom',
    tags: ['funny', 'sibling'],
  },
  {
    slug: 'the-memory-filled-sister-speech-107',
    title: `The Memory-Filled Sister Speech`,
    category: 'sister-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 3.2,
    wordCount: 412,
    excerpt: `Good evening, everyone. I'm [Sister's name], [Groom's name]'s older sister, and I want to share some memories that show you exactly who my brother is. When I was twelve, I was...`,
    content: `Good evening, everyone. I'm [Sister's name], [Groom's name]'s older sister, and I want to share some memories that show you exactly who my brother is. When I was twelve, I was terrified of thunderstorms.

Every time one would roll in, I would panic and hide under my covers. Instead of making fun of me, [Groom's name] would come into my room with his favorite stuffed animal and sit with me until the storm passed. He would tell me stories about brave knights and dragons to distract me from the thunder.

He did this for years until I finally outgrew my fear. When I was in high school, I desperately wanted to try out for the debate team, but I was too nervous to speak in front of people. [Groom's name] not only helped me practice my arguments every day for two weeks, but he also showed up to my first debate to cheer me on.

When I won, he was more excited than I was. In college, when I was struggling with self-doubt and feeling like I didn't belong, [Groom's name] would call me every week just to remind me of my strengths. "You're smarter than you think," "You're stronger than you know," "You belong exactly where you are." Those phone calls got me through some of my darkest moments.

When I went through a difficult breakup, [Groom's name] drove six hours just to bring me my favorite ice cream and sit with me while I cried. He didn't try to fix everything or give me a bunch of advice. He just listened and reminded me that I was worthy of love.

[Bride's name], when [Groom's name] first told me about you, I could hear the difference in his voice. There was this lightness, this joy that I'd never heard before. He talked about you the way he talks about his favorite things – with pure happiness and excitement.

The first time I met you, I watched how you listened to his stories, how you remembered the details he shared, how you made him laugh. I knew then that you saw him the way he deserves to be seen – as someone truly extraordinary. [Groom's name], you've been my hero, my teacher, and my best friend.

You've shaped who I am in the most beautiful ways. To [Groom's name] and [Bride's name] – may your marriage be filled with the same love, support, and joy that you've brought to everyone around you.`,
    authorName: 'Hannah Phillips',
    weddingRole: 'Sister of the Groom',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-short-and-sweet-sister-speech-108',
    title: `The Short and Sweet Sister Speech`,
    category: 'sister-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 1.1,
    wordCount: 137,
    excerpt: `Hi everyone! I'm [Sister's name], [Groom's name]'s sister. Having [Groom's name] as my brother means I've always had someone in my corner. He's been my protector, my advisor, and...`,
    content: `Hi everyone! I'm [Sister's name], [Groom's name]'s sister. Having [Groom's name] as my brother means I've always had someone in my corner.

He's been my protector, my advisor, and my best friend. [Groom's name], you've taught me about strength, kindness, and what it means to love unconditionally. You've shown me how to be brave when I'm scared and how to be generous when I have little to give.

[Bride's name], you're getting someone who will love you with his whole heart, support your dreams, and probably try to fix everything in your life in the best possible way. I'm so happy you found each other, and I'm excited to officially call you my sister. To [Groom's name] and [Bride's name] – so here's to a lifetime of love, laughter, and sibling advice whether you want it or not!`,
    authorName: 'Rachel Chambers',
    weddingRole: 'Sister of the Groom',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-sisterly-bond-speech-109',
    title: `The Sisterly Bond Speech`,
    category: 'sister-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 3.3,
    wordCount: 427,
    excerpt: `Good evening, everyone! I'm [Sister's name], [Groom's name]'s sister, and I couldn't be happier to be standing here tonight. Growing up with [Groom's name] has been an amazing...`,
    content: `Good evening, everyone! I'm [Sister's name], [Groom's name]'s sister, and I couldn't be happier to be standing here tonight. Growing up with [Groom's name] has been an amazing journey.

As his big sister, I've always felt protective of him, but I've also been his biggest fan. From the time he was little, [Groom's name] had this amazing ability to see the good in everyone and everything around him. I remember when we were kids, [Groom's name] was the one who would comfort me when I had nightmares, who would share his Halloween candy without me even asking, and who would always stick up for me on the playground.

He's been my protector, my confidant, and my best friend for as long as I can remember. [Groom's name], you've grown into such an wonderful man. You're kind, thoughtful, generous, and you have the biggest heart of anyone I know.

You've always been there for our family, always ready to help, always putting others before yourself. I've watched you navigate life with such grace and integrity. You've faced challenges with courage, celebrated victories with humility, and treated everyone you meet with respect and kindness.

I'm so proud to call you my brother. When you first told me about [Bride's name], I could hear something different in your voice. There was a joy, a contentment that I'd never heard before.

You talked about her constantly – and I mean constantly. Every conversation somehow included a story about how wonderful [Bride's name] is. [Bride's name], from the moment I met you, I knew you were perfect for my brother.

You love him for exactly who he is, you make him laugh, you challenge him to be even better, and most importantly, you make him happier than I've ever seen him. You've brought out a side of [Groom's name] that I love seeing – he's more confident, more joyful, more himself when he's with you. Thank you for loving my brother the way he deserves to be loved.

As [Groom's name]'s sister, I've always been protective of him. But I can honestly say that I have never felt more confident about anyone in his life than I do about you. You're not just gaining a husband today – you're gaining a sister who will always be here for you.

[Groom's name] and [Bride's name], I'm so excited to watch you build your life together. May your marriage be filled with love, laughter, and all the happiness you both deserve. Welcome to our family, [Bride's name] – we're so lucky to have you!`,
    authorName: 'Alice Rhodes',
    weddingRole: 'Sister of the Groom',
    tags: ['heartfelt', 'sibling'],
  },
  {
    slug: 'the-wisdom-sharing-sister-speech-110',
    title: `The Wisdom-Sharing Sister Speech`,
    category: 'sister-of-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.5,
    wordCount: 327,
    excerpt: `Hi everyone! I'm [Sister's name], [Groom's name]'s older sister, and as someone who's been married for five years, I've been asked to share some "wisdom" about marriage. My...`,
    content: `Hi everyone! I'm [Sister's name], [Groom's name]'s older sister, and as someone who's been married for five years, I've been asked to share some "wisdom" about marriage. My husband is laughing because he knows I'm still figuring it out too!

But watching [Groom's name] and [Bride's name] together, I can see that they already understand the most important things about love and partnership. [Groom's name], you've always been wise beyond your years. Even as kids, you were the one giving me advice about friends, school, and life.

You have this incredible ability to see situations clearly and offer perspective that's both honest and kind. I remember when I was planning my own wedding and getting stressed about all the details, you said something that stuck with me: "[Sister's name], when it comes down to it, all that matters is that you're marrying your best friend. Everything else is just decoration." You were right then, and you're right now.

[Bride's name], thank you for seeing my brother for the amazing person he is. Thank you for supporting his dreams, encouraging his goals, and making him laugh every single day. Thank you for being patient with his perfectionism and for loving him exactly as he is.

My advice for your marriage: Remember that you're teammates, not opponents. When challenges come – and they will – face them together. Keep talking to each other, keep laughing together, and never stop being curious about each other.

Most importantly, remember that love is both a feeling and a choice. Choose each other every day, especially on the days when it's not easy. [Groom's name], I'm so proud of the man you've become and so happy to see you this happy.

You deserve all the love and joy in the world. [Bride's name], welcome to our family! We're excited to have you as our sister. So here's to [Groom's name] and [Bride's name] – may your marriage be everything you've dreamed of and more!`,
    authorName: 'George Carter',
    weddingRole: 'Sister of the Groom',
    tags: ['inspirational', 'sibling'],
  },
  {
    slug: 'the-legacy-grandfather-speech-111',
    title: `The Legacy Grandfather Speech`,
    category: 'grandfather-speech',
    tone: 'heartfelt',
    durationMinutes: 2.8,
    wordCount: 367,
    excerpt: `Good evening, everyone. I'm [Grandfather's name], and I stand before you tonight not just as [Bride's name]'s grandfather, but as someone who has witnessed the beautiful...`,
    content: `Good evening, everyone. I'm [Grandfather's name], and I stand before you tonight not just as [Bride's name]'s grandfather, but as someone who has witnessed the beautiful continuity of love across generations. In my family, we believe that love is our greatest inheritance.

It's not something you can put in a bank or store in a safe – it's something you pass down through your actions, your values, and your commitment to each other. [Bride's name], you are the continuation of a legacy of strong, loving women. You have your great-grandmother's resilience, your grandmother's wisdom, and your mother's compassionate heart.

But more than that, you've added your own unique gifts to our family's story. You've shown us that love isn't just about what you receive – it's about what you give. You've cared for family members when they were sick, celebrated with us during happy times, and been a source of strength during difficult moments.

[Groom's name], by marrying [Bride's name], you're not just joining our family – you're becoming part of a legacy. You're inheriting traditions that go back generations, but you're also helping to create new ones for the future. I've watched you with [Bride's name], and I can see that you understand what it means to be part of something bigger than yourself.

You treat her with respect, you support her dreams, and you make her laugh. Those are the foundations of a marriage that will last. As you begin your life together, remember that you're not just building a marriage – you're creating a legacy for your children and grandchildren.

The love you show each other, the values you live by, and the kindness you extend to others will be passed down through generations. Be patient with each other. Be generous with your forgiveness.

Be quick to say "I love you" and slow to anger. Remember that the small moments matter just as much as the big ones. [Bride's name] and [Groom's name], you have the opportunity to create something beautiful together.

May your marriage be a testament to the power of love, and may the legacy you create inspire generations to come. So here's to love, family, and the beautiful future you're building together!`,
    authorName: 'Alex Page',
    weddingRole: 'Grandfather of the Bride',
    tags: ['father'],
  },
  {
    slug: 'the-memory-filled-grandfather-speech-112',
    title: `The Memory-Filled Grandfather Speech`,
    category: 'grandfather-speech',
    tone: 'heartfelt',
    durationMinutes: 2.9,
    wordCount: 372,
    excerpt: `Good evening, everyone. I'm [Grandfather's name], [Bride's name]'s grandfather, and I want to share some precious memories with you tonight. I remember the day [Bride's name] was...`,
    content: `Good evening, everyone. I'm [Grandfather's name], [Bride's name]'s grandfather, and I want to share some precious memories with you tonight. I remember the day [Bride's name] was born.

I was in the hospital waiting room, pacing back and forth, more nervous than I'd been in years. When the nurse finally came out and told us we had a healthy granddaughter, I cried tears of joy. When I first held [Bride's name] in my arms, she looked up at me with those bright eyes, and I knew my life had changed forever.

She had captured my heart completely. As she grew, [Bride's name] became my constant companion during family visits. She would sit on my lap while I read her stories, help me in the workshop building birdhouses, and listen intently to my tales about the "old days." She was always curious, always eager to learn, and always full of love.

I remember when she was twelve and I was teaching her to drive my old truck in the back field. She was so determined to reach the pedals that she sat on three phone books. When she finally got the hang of it, she drove us around that field for an hour, both of us laughing until our sides hurt.

That's my [Bride's name] – determined, joyful, and always ready for an adventure. [Bride's name], you've given me some of the happiest memories of my life. You've been my buddy, my helper, and my source of endless pride.

Watching you become the wonderful woman you are today has been a privilege I treasure every day. [Groom's name], I want you to know that you're getting someone very special. [Bride's name] has a heart full of love, a spirit full of joy, and a loyalty that runs deep.

She will be your greatest supporter, your most trusted friend, and your most devoted partner. Thank you for making my granddaughter so happy. I can see in your eyes how much you love her, and that gives this old man great peace of mind.

[Bride's name] and [Groom's name], may your marriage be filled with as much joy and love as you've brought to all of us. So here's to a lifetime of beautiful memories together!`,
    authorName: 'Grace Sullivan',
    weddingRole: 'Grandfather of the Bride',
    tags: ['father'],
  },
  {
    slug: 'the-short-and-sweet-grandfather-speech-113',
    title: `The Short and Sweet Grandfather Speech`,
    category: 'grandfather-speech',
    tone: 'heartfelt',
    durationMinutes: 0.8,
    wordCount: 102,
    excerpt: `Good evening, everyone. I'm [Grandfather's name], [Bride's name]'s grandfather. At my age, I've learned to keep things simple and speak from the heart. [Bride's name], you have...`,
    content: `Good evening, everyone. I'm [Grandfather's name], [Bride's name]'s grandfather. At my age, I've learned to keep things simple and speak from the heart.

[Bride's name], you have been the light of our family since the day you were born. Watching you grow into the beautiful, kind, and strong woman you are today has been one of my greatest blessings. [Groom's name], thank you for loving my granddaughter and for making her so happy.

You're a good man, and I'm proud to welcome you into our family. May your marriage be blessed with love, health, and happiness. So here's to a beautiful future together!`,
    authorName: 'Chris Rhodes',
    weddingRole: 'Grandfather of the Bride',
    tags: ['father'],
  },
  {
    slug: 'the-storytelling-grandfather-speech-114',
    title: `The Storytelling Grandfather Speech`,
    category: 'grandfather-speech',
    tone: 'heartfelt',
    durationMinutes: 3.3,
    wordCount: 428,
    excerpt: `Good evening, friends and family. I'm [Grandfather's name], and I have the privilege of being [Bride's name]'s grandfather. Tonight, I want to tell you a story about a little girl...`,
    content: `Good evening, friends and family. I'm [Grandfather's name], and I have the privilege of being [Bride's name]'s grandfather. Tonight, I want to tell you a story about a little girl who changed our family forever.

Twenty-eight years ago, [Bride's name] came into our lives like a ray of sunshine. She was curious about everything, fearless in her adventures, and had a smile that could light up any room. I remember one summer when [Bride's name] was about eight years old, she spent a week at our house.

She decided she wanted to learn how to garden, so we planted tomatoes together in the backyard. Every morning, she would run outside to check on those plants, watering them carefully and talking to them like they were her friends. When the first tomato finally ripened, she was so excited she called everyone in the family to come see.

That's [Bride's name] – someone who finds joy in simple things and wants to share that joy with everyone she loves. As she grew older, that same enthusiasm and caring nature showed in everything she did. She was the granddaughter who remembered every birthday, who called just to check how we were doing, and who always had time to listen to her old grandfather's stories.

[Bride's name], you've brought so much happiness to our family. You've been a bridge between generations, keeping our family traditions alive while creating new ones of your own. You've shown us that love multiplies when it's shared.

[Groom's name], when [Bride's name] first told us about you, I could see something special in her eyes. She talked about your kindness, your sense of humor, and how you made her feel like the most important person in the world. That's when I knew you were the right one for her.

I've lived long enough to see many marriages, and I can tell you that the best ones are between people who bring out the best in each other. You and [Bride's name] do that for each other every day. As you start your own family story, remember that every day is a new page.

Fill those pages with kindness, laughter, and love. Create traditions that your children and grandchildren will treasure. And always remember that family is not just about blood – it's about the people who choose to love you unconditionally.

[Bride's name] and [Groom's name], may your story be filled with adventure, joy, and a love that lasts for generations. Welcome to our family, [Groom's name] – we're so happy you're part of our story now!`,
    authorName: 'Fiona Gibson',
    weddingRole: 'Grandfather of the Bride',
    tags: ['father'],
  },
  {
    slug: 'the-wise-grandfather-speech-115',
    title: `The Wise Grandfather Speech`,
    category: 'grandfather-speech',
    tone: 'heartfelt',
    durationMinutes: 2.9,
    wordCount: 376,
    excerpt: `Good evening, everyone. I'm [Grandfather's name], [Bride's name]'s grandfather, and at my age, I've learned that the most important moments in life are worth savoring. I've been...`,
    content: `Good evening, everyone. I'm [Grandfather's name], [Bride's name]'s grandfather, and at my age, I've learned that the most important moments in life are worth savoring. I've been blessed to witness many beautiful things in my eighty-five years, but watching [Bride's name] grow from a curious little girl into the remarkable woman she is today has been one of my greatest joys.

[Bride's name], I remember when you were just five years old, and you asked me what love was. I told you it was like a garden – it needs patience, care, and time to grow into something beautiful. Today, as I watch you marry [Groom's name], I see that garden in full bloom.

You've grown into a woman of strength, kindness, and grace. You have your grandmother's gentle heart and your mother's determination. You face challenges with courage and treat everyone you meet with respect and compassion.

[Groom's name], I want you to know that you're not just marrying [Bride's name] – you're joining a family that believes in love, loyalty, and taking care of each other. I've watched you with my granddaughter, and I can see that you understand what it means to truly love someone. Let me share some wisdom I've gathered over the years about marriage: Love is not just a feeling – it's a choice you make every day.

There will be times when that choice is easy, and times when it requires all the strength you have. Choose love anyway. Be patient with each other.

Listen more than you speak. Forgive quickly and completely. Remember that you're teammates, not opponents.

And never forget to laugh together – laughter has gotten your grandmother and me through sixty-two years of marriage. Most importantly, remember that a strong marriage is built on small acts of kindness every single day. It's making coffee for each other in the morning, holding hands during difficult times, and celebrating each other's victories as your own.

[Bride's name] and [Groom's name], as you begin this beautiful journey together, know that you carry with you the love and blessings of everyone in this room. May your marriage be filled with joy, understanding, and a love that grows stronger with each passing year. So here's to a lifetime of happiness together!`,
    authorName: 'Megan Grant',
    weddingRole: 'Grandfather of the Bride',
    tags: ['father'],
  },
  {
    slug: 'the-blessing-grandmother-speech-116',
    title: `The Blessing Grandmother Speech`,
    category: 'grandmother-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 221,
    excerpt: `Good evening, dear ones. I'm [Grandmother's name], [Bride's name]'s grandmother, and I stand before you tonight with a heart full of gratitude and love. In our family, we believe...`,
    content: `Good evening, dear ones. I'm [Grandmother's name], [Bride's name]'s grandmother, and I stand before you tonight with a heart full of gratitude and love. In our family, we believe that marriage is a sacred blessing – not just between two people, but between two families, two histories, and two futures coming together as one.

[Bride's name], my precious granddaughter, you have been a blessing to our family from the moment you arrived. You brought light into our lives, laughter into our homes, and love into our hearts. You've been the bridge between generations, keeping our family traditions alive while creating beautiful new ones.

I've watched you grow from a curious little girl who wanted to help with everything, to a strong, compassionate woman who still wants to help those around her. You have your great-grandmother's strength, your grandmother's wisdom (I'd like to think), and your own unique spirit that shines so beautifully. [Groom's name], as you join our family, know that you're becoming part of something special.

You're part of a lineage of love and commitment that goes back through the generations. Treat my granddaughter with the respect and love she deserves, and together you'll create a legacy that will inspire your own children and grandchildren. May your marriage be blessed with every happiness. So here's to [Bride's name] and [Groom's name]!`,
    authorName: 'Simon Phillips',
    weddingRole: 'Grandmother of the Bride',
    tags: ['mother'],
  },
  {
    slug: 'the-memory-filled-grandmother-speech-117',
    title: `The Memory-Filled Grandmother Speech`,
    category: 'grandmother-speech',
    tone: 'heartfelt',
    durationMinutes: 1.6,
    wordCount: 210,
    excerpt: `Good evening, everyone. I'm [Grandmother's name], [Bride's name]'s grandmother, and I want to share some precious memories with you tonight. I remember the first time [Bride's...`,
    content: `Good evening, everyone. I'm [Grandmother's name], [Bride's name]'s grandmother, and I want to share some precious memories with you tonight. I remember the first time [Bride's name] stayed overnight at my house.

She was about five years old, and she was so excited but also a little nervous to be away from her parents. At bedtime, she asked if I would tell her a story about when her mommy was little. As I tucked her in and began to tell her stories about her mother's childhood, I realized I was passing down something precious – our family's history, our traditions, our love.

That night began a tradition that lasted for years. Every time [Bride's name] visited, we would have our "story time" where I would share tales about our family. Those stories were about love, sacrifice, strength, and the values that had sustained us through the generations.

[Bride's name], you listened to those stories and made them your own. You've carried forward the best of our family legacy while creating new traditions of your own. [Groom's name], thank you for being part of our family story.

Welcome. May you and [Bride's name] create your own beautiful narrative filled with love, laughter, and cherished memories. So here's to your wonderful future together!`,
    authorName: 'Ben Murphy',
    weddingRole: 'Grandmother of the Bride',
    tags: ['mother'],
  },
  {
    slug: 'the-nurturing-grandmother-speech-118',
    title: `The Nurturing Grandmother Speech`,
    category: 'grandmother-speech',
    tone: 'heartfelt',
    durationMinutes: 2.1,
    wordCount: 273,
    excerpt: `Good evening, everyone. I'm [Grandmother's name], [Bride's name]'s grandmother, and my heart is overflowing with joy tonight. When [Bride's name] was born, I held her in my arms...`,
    content: `Good evening, everyone. I'm [Grandmother's name], [Bride's name]'s grandmother, and my heart is overflowing with joy tonight. When [Bride's name] was born, I held her in my arms and whispered a prayer that she would grow up to be kind, strong, and loved.

Looking at her today, I can see that prayer has been answered in the most beautiful way. [Bride's name], my darling granddaughter, you have been a source of pure joy in my life from the very beginning. I remember when you were just three years old, and you would spend weekends at my house.

You would help me bake cookies, and somehow you always managed to get more flour on yourself than in the bowl. But you were so proud of those cookies, and you insisted we save the best ones for Grandpa. As you grew, those weekend visits became the highlight of my week.

You would help me in the garden, learning about plants and patience. You would listen to my stories with such genuine interest, asking endless questions about the family history, about love, about life. I watched you develop into a young woman with a generous heart, ready to help anyone in need.

[Bride's name], you've taught me that real beauty comes from how we treat others. [Groom's name], I want to tell you how grateful I am that you found my granddaughter. I've seen the way you look at her – with respect, admiration, and genuine love.

That's exactly what she deserves. May your marriage be filled with the kind of quiet, steady love that deepens with each passing year. So here's to a beautiful life together!`,
    authorName: 'Nathan Parker',
    weddingRole: 'Grandmother of the Bride',
    tags: ['mother'],
  },
  {
    slug: 'the-short-grandmother-speech-119',
    title: `The Short Grandmother Speech`,
    category: 'grandmother-speech',
    tone: 'heartfelt',
    durationMinutes: 0.7,
    wordCount: 90,
    excerpt: `Good evening, everyone. I'm [Grandmother's name], [Bride's name]'s grandmother. [Bride's name], you have filled my life with so much joy and love. Watching you grow into the...`,
    content: `Good evening, everyone. I'm [Grandmother's name], [Bride's name]'s grandmother. [Bride's name], you have filled my life with so much joy and love.

Watching you grow into the beautiful, kind woman you are today has been one of my greatest privileges. [Groom's name], thank you for making my granddaughter so happy. I can see the love in your eyes when you look at her, and that brings peace to this grandmother's heart.

May your marriage be blessed with love, laughter, and a lifetime of happiness together. So here's to the happy couple!`,
    authorName: 'Olivia Murphy',
    weddingRole: 'Grandmother of the Bride',
    tags: ['mother'],
  },
  {
    slug: 'the-wise-grandmother-speech-120',
    title: `The Wise Grandmother Speech`,
    category: 'grandmother-speech',
    tone: 'heartfelt',
    durationMinutes: 1.8,
    wordCount: 230,
    excerpt: `Good evening, dear friends and family. I'm [Grandmother's name], and I've had the privilege of being [Bride's name]'s grandmother for twenty-six wonderful years. At my age, I've...`,
    content: `Good evening, dear friends and family. I'm [Grandmother's name], and I've had the privilege of being [Bride's name]'s grandmother for twenty-six wonderful years. At my age, I've learned that the most important things in life aren't things at all – they're the relationships we build, the love we share, and the memories we create together.

[Bride's name], you have been one of my greatest blessings. From the time you were small, you had this wonderful curiosity about the world. You would ask me endless questions about life, love, and everything in between.

I loved those questions because they showed me your beautiful mind and your eagerness to understand the world around you. What I love most about you is your capacity for compassion. You don't just hear when people speak – you truly listen.

You notice when someone is hurting and you reach out with kindness and understanding. [Groom's name], you're gaining not just a beautiful bride, but a woman of character and integrity. As you build your marriage, remember that the strongest relationships are built on mutual respect, genuine friendship, and the willingness to grow together.

Cherish each other, support each other's dreams, and never stop laughing together. [Bride's name] and [Groom's name], may your marriage be blessed with love that grows deeper with time, and may you always find joy in each other's company. So here's to your happiness!`,
    authorName: 'Holly Grant',
    weddingRole: 'Grandmother of the Bride',
    tags: ['mother'],
  },
  {
    slug: 'the-fun-aunt-speech-121',
    title: `The Fun Aunt Speech`,
    category: 'aunt-speech',
    tone: 'balanced',
    durationMinutes: 2.0,
    wordCount: 258,
    excerpt: `Hi everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I've been looking forward to this moment for years – not just because of the wedding, but because I finally get to tell...`,
    content: `Hi everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I've been looking forward to this moment for years – not just because of the wedding, but because I finally get to tell everyone about [Bride's name]'s most embarrassing moments! Don't worry, sweetie, I'll only share the really good ones.

I've had the pleasure of being [Bride's name]'s "fun aunt" for her entire life, which means I'm the one who taught her how to sneak extra cookies, who let her stay up past her bedtime, and who may have been responsible for a few questionable fashion choices over the years. Sorry about that, [Bride's parents' names]! [Bride's name] has always been my favorite accomplice.

When she was about eight, she convinced me to help her "redecorate" her room while her parents were away. We spent the entire afternoon rearranging furniture, which seemed like a brilliant idea until we realized we couldn't get everything to fit back the original way. We laughed so hard trying to hide the evidence.

That's [Bride's name] – she brings out the fun-loving, slightly mischievous side of people around her. But underneath all the fun and laughter, she has this beautiful, serious side. She cares deeply about people, she stands up for what she believes in, and she loves with her whole heart.

[Groom's name], you've gained yourself not just a wife, but a friend, a partner, and someone who will keep your life filled with laughter and joy. Treasure that. To the happy couple – so here's to a lifetime of adventures, laughter, and love!`,
    authorName: 'Lucy Hayes',
    weddingRole: 'Aunt of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-memory-filled-aunt-speech-122',
    title: `The Memory-Filled Aunt Speech`,
    category: 'aunt-speech',
    tone: 'balanced',
    durationMinutes: 2.1,
    wordCount: 274,
    excerpt: `Good evening, everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I've been honored to play a special role in her life for the past twenty-five years. Standing here tonight, I...`,
    content: `Good evening, everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I've been honored to play a special role in her life for the past twenty-five years. Standing here tonight, I can't help but think about all the beautiful memories we've created together.

I remember the day [Bride's name] was born. I was one of the first people to hold her, and I was absolutely smitten. She was this perfect little angel with the most expressive eyes, and I knew immediately that she was going to be someone special in my life.

Growing up, [Bride's name] spent many weekends and summers with me. We had our own little traditions – Saturday morning pancakes, afternoon walks in the park, and evening storytime before bed. She would always choose the same book about a princess who saved the kingdom with kindness rather than weapons.

I think that book shaped who she became – someone who believes in the power of kindness and compassion. One of my favorite memories is from when [Bride's name] was about twelve. She came to me worried about a friend at school who was being bullied.

Without being asked, without any prompting, [Bride's name] organized a group of students to befriend this girl and include her in their activities. That's the kind of person she is – someone who sees injustice and acts on it with love rather than anger. [Groom's name], you're getting someone truly wonderful.

Cherish her, support her, and love her completely. [Bride's name] and [Groom's name], may your marriage be filled with the kind of love and warmth that you've brought to everyone around you. So here's to your happiness!`,
    authorName: 'Helen Crawford',
    weddingRole: 'Aunt of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-nurturing-aunt-speech-123',
    title: `The Nurturing Aunt Speech`,
    category: 'aunt-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 240,
    excerpt: `Good evening, everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I've had the incredible joy of watching this beautiful woman grow from a sweet little girl into the amazing...`,
    content: `Good evening, everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I've had the incredible joy of watching this beautiful woman grow from a sweet little girl into the amazing woman she is today. As [Bride's name]'s aunt, I've always felt a special bond with her.

From the time she was little, she would come to me with her secrets, her dreams, and sometimes when she just needed someone to listen. I've been her confidante, her cheerleader, and occasionally her partner in mischief when her parents weren't looking. I remember when [Bride's name] was about seven years old, and she spent a week with me during summer vacation.

She was this curious, energetic little girl who wanted to help with everything. She would stand on a chair next to me in the kitchen, asking a million questions about cooking and life. Those moments – they're some of my most cherished memories.

As she grew up, [Bride's name] developed the most beautiful qualities. She's compassionate, thoughtful, and has this gift for making everyone around her feel valued and loved. She listens to people – truly listens – in a way that's becoming increasingly rare.

[Groom's name], you're marrying someone truly special. Value her, love her, and never take her for granted. [Bride's name] and [Groom's name], may your marriage be filled with the kind of love and support that sustains you through all of life's ups and downs. So here's to your happiness!`,
    authorName: 'George Hayes',
    weddingRole: 'Aunt of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-short-aunt-speech-124',
    title: `The Short Aunt Speech`,
    category: 'aunt-speech',
    tone: 'balanced',
    durationMinutes: 0.4,
    wordCount: 58,
    excerpt: `Hi everyone! I'm [Aunt's name], [Bride's name]'s aunt. [Bride's name], you've brought so much joy to our family over the years. You're beautiful, kind, smart, and you deserve all...`,
    content: `Hi everyone! I'm [Aunt's name], [Bride's name]'s aunt. [Bride's name], you've brought so much joy to our family over the years.

You're beautiful, kind, smart, and you deserve all the happiness in the world. [Groom's name], thank you for making our girl so happy. You're perfect for each other.

So here's to a lifetime of love and laughter! Cheers!`,
    authorName: 'Chris Foster',
    weddingRole: 'Aunt of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-wisdom-sharing-aunt-speech-125',
    title: `The Wisdom-Sharing Aunt Speech`,
    category: 'aunt-speech',
    tone: 'balanced',
    durationMinutes: 2.0,
    wordCount: 265,
    excerpt: `Good evening, everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I feel honored to share a few words on this beautiful day. [Bride's name], as your aunt, I've had the...`,
    content: `Good evening, everyone! I'm [Aunt's name], [Bride's name]'s aunt, and I feel honored to share a few words on this beautiful day. [Bride's name], as your aunt, I've had the privilege of watching you grow from a curious little girl into the remarkable woman you are today.

I've seen you face challenges with courage, celebrate victories with humility, and treat everyone around you with kindness and respect. You've become a woman of character, and I couldn't be prouder. Over the years, you've come to me for advice from time to time, and today I want to share some thoughts about love and marriage.

True love isn't just about finding someone who makes you happy – it's about finding someone who helps you become the best version of yourself. It's about building a partnership based on mutual respect, genuine friendship, and shared values. [Groom's name], I can see all of those things in your relationship with [Bride's name].

The way you look at her, the way you listen to her, the way you support her – it's clear that you understand what real love means. Marriage is a journey, not a destination. There will be seasons of great joy and seasons of difficulty.

The couples who make it are those who remember why they fell in love and recommit to that love every single day. They're partners who celebrate each other's victories and support each other through challenges. [Bride's name] and [Groom's name], I wish for you a lifetime of partnership, of growth, of laughter, and of deep, abiding love. So here's to your beautiful future together!`,
    authorName: 'Luke Rhodes',
    weddingRole: 'Aunt of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-funny-uncle-speech-126',
    title: `The Funny Uncle Speech`,
    category: 'uncle-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 211,
    excerpt: `Hi everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I've been waiting years for this opportunity to embarrass her in front of all of you. Don't worry, [Bride's name]...`,
    content: `Hi everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I've been waiting years for this opportunity to embarrass her in front of all of you. Don't worry, [Bride's name], I'll only share the really good stories!

I've known [Bride's name] since she was born, and I can tell you she's always been... unique. She's the kid who would ask "why?" about everything, who would reorganize my bookshelf when she visited, and who somehow convinced me that ice cream was a perfectly acceptable breakfast food. When [Bride's name] was about six years old, she decided she was going to be my "assistant" for everything.

She would follow me around, taking notes in her little notebook, asking serious questions about lawn mowing techniques and car maintenance. I thought I was teaching her about the real world, but really, she was teaching me about patience and the importance of answers. [Bride's name], over the years, I've watched you become this amazing woman with a wicked sense of humor, a generous spirit, and the ability to make everyone around you feel welcome.

[Groom's name], you're in for a wonderful life. She's going to keep you laughing, challenged, and loved. To [Bride's name] and [Groom's name], so here's to many years of laughter, love, and adventure. Cheers!`,
    authorName: 'Andrew Hughes',
    weddingRole: 'Uncle of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-memory-filled-uncle-speech-127',
    title: `The Memory-Filled Uncle Speech`,
    category: 'uncle-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 223,
    excerpt: `Good evening, everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I've been looking forward to this day for years. Standing here tonight, I can't help but think about all...`,
    content: `Good evening, everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I've been looking forward to this day for years. Standing here tonight, I can't help but think about all the wonderful memories I have with [Bride's name].

I remember when [Bride's name] was just a toddler, and she would spend weekends at our house. She was this curious, energetic little girl who was fascinated by everything. She would help me in the garden, asking a million questions about why flowers needed water and why worms were good for the soil.

One of my favorite memories is from when [Bride's name] was about ten years old. We were working on a puzzle together, and she was getting frustrated because the pieces weren't fitting the way she wanted them to. I told her, "Sometimes you have to step back, look at the big picture, and remember that every piece has a purpose." I think she's lived that advice.

She's always been someone who sees the good in people and situations, even when things are challenging. [Bride's name], you've made me proud in countless ways. [Groom's name], you're gaining not just a wife, but someone with a brilliant mind, a kind heart, and a commitment to making the world better.

May your marriage be blessed with love, growth, and endless joy. So here's to the happy couple!`,
    authorName: 'Jack Rhodes',
    weddingRole: 'Uncle of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-protective-uncle-speech-128',
    title: `The Protective Uncle Speech`,
    category: 'uncle-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 234,
    excerpt: `Good evening, everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I've had the privilege of watching this beautiful woman grow from a curious little girl into the amazing...`,
    content: `Good evening, everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I've had the privilege of watching this beautiful woman grow from a curious little girl into the amazing woman she is today. As [Bride's name]'s uncle, I've always felt a special responsibility to look out for her.

From the time she was little, she would come to me with her questions, her dreams, and sometimes her troubles. I've been her backup for homework help, her ally when she disagreed with her parents, and her biggest cheerleader through every milestone. I remember when [Bride's name] was about eight years old, and she told me she was going to marry someone who would "love her like Uncle [Your name] loves Aunt [Your name]." Even then, she understood what real love looked like.

She set her standards high, and [Groom's name], you're meeting them beautifully. I can see the respect, the admiration, and the genuine love in your eyes when you look at her. That's exactly what she deserves.

[Bride's name], you've been a source of pride and joy to me. Watching you become this strong, compassionate woman has been one of the greatest privileges of my life. [Groom's name], treasure her, support her, and love her as fiercely as our entire family does.

To [Bride's name] and [Groom's name], may your marriage be filled with the kind of partnership that grows stronger with time. So here's to your happiness!`,
    authorName: 'Richard Kelly',
    weddingRole: 'Uncle of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-short-uncle-speech-129',
    title: `The Short Uncle Speech`,
    category: 'uncle-speech',
    tone: 'balanced',
    durationMinutes: 0.4,
    wordCount: 58,
    excerpt: `Hi everyone! I'm [Uncle's name], [Bride's name]'s uncle. [Bride's name], you've brought so much joy to our family over the years. You're kind, smart, funny, and you deserve all...`,
    content: `Hi everyone! I'm [Uncle's name], [Bride's name]'s uncle. [Bride's name], you've brought so much joy to our family over the years.

You're kind, smart, funny, and you deserve all the happiness in the world. [Groom's name], thank you for making our girl so happy. You're perfect for each other.

So here's to a lifetime of love and happiness! Cheers!`,
    authorName: 'Richard Coleman',
    weddingRole: 'Uncle of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-wisdom-sharing-uncle-speech-130',
    title: `The Wisdom-Sharing Uncle Speech`,
    category: 'uncle-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 239,
    excerpt: `Good evening, everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I feel honored to share a few words on a day like today. [Bride's name], as your uncle, I've had the...`,
    content: `Good evening, everyone! I'm [Uncle's name], [Bride's name]'s uncle, and I feel honored to share a few words on a day like today. [Bride's name], as your uncle, I've had the privilege of watching you grow and learn throughout your life.

I've seen you face challenges with determination, celebrate victories with grace, and treat everyone around you with kindness and respect. You've become a woman of character, and I couldn't be prouder. Over the years, you've come to me for advice from time to time, and today I want to share some thoughts about marriage.

Marriage isn't just about finding someone you can live with – it's about finding someone you can't imagine living without. It's about building a partnership based on mutual respect, genuine friendship, and unwavering support. [Groom's name], I see all of that in your relationship with [Bride's name].

The way you listen to her, the way you support her dreams, the way you make her laugh – these are the building blocks of a strong marriage. Marriage requires work, commitment, and the willingness to grow together. But when you have the right partner, that work becomes a joy.

You and [Bride's name] have that. [Bride's name] and [Groom's name], may your marriage be filled with love that deepens over time, with partnership that strengthens your individual selves, and with the kind of joy that spills over to everyone around you. So here's to your beautiful future together!`,
    authorName: 'Alice Hughes',
    weddingRole: 'Uncle of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-celebratory-cousin-speech-131',
    title: `The Celebratory Cousin Speech`,
    category: 'cousin-speech',
    tone: 'balanced',
    durationMinutes: 1.9,
    wordCount: 244,
    excerpt: `Good evening, everyone! I'm [Cousin's name], [Bride's name]'s cousin, and I feel so honored to be here celebrating this beautiful day with all of you. [Bride's name], as your...`,
    content: `Good evening, everyone! I'm [Cousin's name], [Bride's name]'s cousin, and I feel so honored to be here celebrating this beautiful day with all of you. [Bride's name], as your cousin, I've had the privilege of watching you grow into the wonderful woman you are today.

You've always been someone who approaches life with optimism, courage, and an open heart. You've been a source of strength and inspiration not just to me, but to everyone who knows you. Growing up, you were the cousin I could always count on.

Whether I needed someone to listen, someone to laugh with, or someone to help me through a difficult time, you were always there. You have this incredible ability to make people feel understood and supported, and that gift has touched so many lives. I remember when I was going through a challenging time in high school, feeling uncertain about my future and struggling with self-confidence.

You spent hours with me, helping me see my strengths and encouraging me to believe in myself. That's the kind of person [Bride's name] is – someone who lifts others up. [Groom's name], I know you know this already, but I want to say it publicly: you're getting an amazing woman.

Love her, support her, and appreciate her every single day. [Bride's name] and [Groom's name], may your marriage be filled with the same love, support, and joy that you've given to so many others. So here's to your wonderful future together!`,
    authorName: 'Andrew Chambers',
    weddingRole: 'Cousin of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-close-cousin-speech-132',
    title: `The Close Cousin Speech`,
    category: 'cousin-speech',
    tone: 'balanced',
    durationMinutes: 2.0,
    wordCount: 256,
    excerpt: `Good evening, everyone! I'm [Cousin's name], [Bride's name]'s cousin, and I've had the incredible privilege of being her built-in best friend for life. Growing up together, we...`,
    content: `Good evening, everyone! I'm [Cousin's name], [Bride's name]'s cousin, and I've had the incredible privilege of being her built-in best friend for life. Growing up together, we were more like siblings than cousins, and she's been one of the most important people in my life.

I have so many wonderful memories of [Bride's name] from our childhood. We spent countless summers together at our grandparents' house, creating elaborate adventures in the backyard, putting on "shows" for the adults, and getting into just enough trouble to keep things interesting. [Bride's name] was always the one with the creative ideas – she could turn a rainy day into an adventure with just cardboard boxes and her imagination.

One of my favorite memories is from when we were about eight years old. We decided we were going to start a "business" selling lemonade and homemade cookies. [Bride's name] was the CEO, naturally, and she had us all organized with matching aprons and a very official-looking sign.

We didn't make much money, but we learned so much about teamwork, dedication, and friendship. [Bride's name], watching you find [Groom's name] has been one of the greatest joys of my life. I can see in his eyes how much he loves you, and I couldn't ask for a better cousin-in-law.

[Groom's name], she's been my best friend, my confidante, and my partner in crime for as long as I can remember. Take good care of her. To [Bride's name] and [Groom's name], so here's to a lifetime of adventures, laughter, and love. Cheers!`,
    authorName: 'Victoria Walsh',
    weddingRole: 'Cousin of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-funny-cousin-speech-133',
    title: `The Funny Cousin Speech`,
    category: 'cousin-speech',
    tone: 'balanced',
    durationMinutes: 1.9,
    wordCount: 246,
    excerpt: `I'm [Cousin's name], [Bride's name]'s cousin, and I've been looking forward to this moment for years – not just because of the wedding, but because I finally get to tell everyone...`,
    content: `I'm [Cousin's name], [Bride's name]'s cousin, and I've been looking forward to this moment for years – not just because of the wedding, but because I finally get to tell everyone about [Bride's name]'s most embarrassing moments! Don't worry, [Bride's name], I'll try to keep it somewhat appropriate. [Bride's name] and I grew up together, which means I have years of compromising information about her.

Like the time she was twelve and convinced our entire family that she was "allergic to vegetables" and could only eat pizza and ice cream. Or when she went through that phase where she insisted on wearing her Halloween costume to school every day in November because she "wasn't ready for the magic to end." But here's what I love most about [Bride's name]: she's always been authentically herself, no matter how ridiculous that might be. She's the person who dances like nobody's watching, who laughs at her own jokes before she even tells them, and who has strong opinions about the proper way to fold a fitted sheet (still haven't figured out what that is, honestly).

[Groom's name], you're getting a woman who will always keep you laughing, who will challenge you to be better, and who will love you with her whole heart. You're a lucky guy. To my cousin and her new husband, so here's to many more years of inside jokes, ridiculous adventures, and a love story that's every bit as unconventional and beautiful as you are. Cheers!`,
    authorName: 'Laura Shaw',
    weddingRole: 'Cousin of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-short-cousin-speech-134',
    title: `The Short Cousin Speech`,
    category: 'cousin-speech',
    tone: 'balanced',
    durationMinutes: 0.4,
    wordCount: 57,
    excerpt: `Hi everyone! I'm [Cousin's name], [Bride's name]'s cousin. [Bride's name], you've been like a sister to me my whole life. You're kind, funny, smart, and you deserve all the...`,
    content: `Hi everyone! I'm [Cousin's name], [Bride's name]'s cousin. [Bride's name], you've been like a sister to me my whole life.

You're kind, funny, smart, and you deserve all the happiness in the world. [Groom's name], thank you for making our girl so happy. You're perfect for each other.

So here's to a lifetime of love and joy! Cheers!`,
    authorName: 'Nathan Pearson',
    weddingRole: 'Cousin of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-touching-cousin-speech-135',
    title: `The Touching Cousin Speech`,
    category: 'cousin-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 237,
    excerpt: `Good evening, everyone! I'm [Cousin's name], [Bride's name]'s cousin, and I've been blessed to share so many beautiful memories with her throughout our lives. Standing here...`,
    content: `Good evening, everyone! I'm [Cousin's name], [Bride's name]'s cousin, and I've been blessed to share so many beautiful memories with her throughout our lives. Standing here tonight, I can't help but think about the journey that brought us to this special moment.

I remember when [Bride's name] and I were little, and our families would gather for holidays and summer vacations. We were inseparable – always planning adventures, creating games, and finding ways to make even the most ordinary days feel magical. [Bride's name] had this incredible imagination and this ability to make everyone around her feel special and included.

One of my most treasured memories is from when we were about ten years old. We were spending the week at our grandmother's house, and [Bride's name] noticed that our elderly neighbor seemed lonely. Without any prompting from the adults, she organized all of us cousins to put on a little show for her.

We spent days rehearsing songs and dances, and [Bride's name] even made homemade decorations. That compassion, that generosity of spirit – that's who [Bride's name] is. [Groom's name], I'm so grateful that you see her the way I do.

Love her, cherish her, and never take for granted the wonderful woman she is. To [Bride's name] and [Groom's name], may your marriage be filled with as much joy, laughter, and love as you've brought to those around you. So here's to your happiness together!`,
    authorName: 'Grace Hughes',
    weddingRole: 'Cousin of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-college-friend-speech-136',
    title: `The College Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.9,
    wordCount: 244,
    excerpt: `Hi everyone! I'm [Friend's name], and I had the pleasure of being [Bride's name]'s college roommate and partner in countless adventures for four years. And yes, I have stories! I...`,
    content: `Hi everyone! I'm [Friend's name], and I had the pleasure of being [Bride's name]'s college roommate and partner in countless adventures for four years. And yes, I have stories!

I met [Bride's name] on move-in day freshman year, and I immediately knew college was going to be interesting. She arrived with more books than clothes, a coffee maker that was definitely against dorm rules, and a detailed color-coded schedule for studying. I thought, "Great, I got the serious one." I was completely wrong.

[Bride's name] was serious about her studies, but she was also the most fun person I'd ever met. She was the friend who would convince you to have late-night dance parties in the dorm room, who would organize elaborate pranks on our floor mates, and who somehow convinced our entire study group that studying at the coffee shop at midnight was the best idea ever. Beyond the fun and the memories, what I loved most about [Bride's name] was her loyalty.

When you were her friend, you had someone who had your back completely. She was there for my heartbreaks, my disappointments, and my failures. She was there for my victories too.

[Groom's name], you're gaining not just a wonderful wife, but a friend who will be loyal to you, who will make your life fun and full of adventure, and who will love you completely. [Bride's name] and [Groom's name], so here's to a lifetime of adventures, laughter, and love. Cheers!`,
    authorName: 'Richard Hughes',
    weddingRole: 'Friend of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-grateful-friend-speech-137',
    title: `The Grateful Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 218,
    excerpt: `Good evening, everyone! I'm [Friend's name], one of [Bride's name]'s friends, and I feel so grateful to be here celebrating this beautiful couple tonight. [Bride's name], I want...`,
    content: `Good evening, everyone! I'm [Friend's name], one of [Bride's name]'s friends, and I feel so grateful to be here celebrating this beautiful couple tonight. [Bride's name], I want to start by thanking you for being such an extraordinary friend.

You came into my life during a time when I really needed someone like you, though I didn't realize it at the time. I was new to the city, feeling isolated, and struggling to find my place. You didn't just offer me friendship – you offered me belonging.

You invited me into your life, introduced me to your other friends, and made me feel like I had a home here. You showed me what it meant to have someone in your corner, someone who would support you no matter what. I remember one particularly difficult time when I was going through some personal challenges.

You just showed up at my door with ice cream, no judgment, no expectations – just pure support. That's who [Bride's name] is. She shows up.

She cares. She loves fiercely and loyally. [Groom's name], you're gaining the most wonderful friend anyone could ask for.

Treasure that. [Bride's name] and [Groom's name], may your marriage be filled with the kind of support, love, and loyalty that true friendship brings. So here's to your beautiful future together!`,
    authorName: 'Adam Murray',
    weddingRole: 'Friend of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-longtime-friend-speech-138',
    title: `The Longtime Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 226,
    excerpt: `Good evening, everyone! I'm [Friend's name], and I've had the incredible privilege of being [Bride's name]'s friend for the past twenty years. Standing here tonight to celebrate...`,
    content: `Good evening, everyone! I'm [Friend's name], and I've had the incredible privilege of being [Bride's name]'s friend for the past twenty years. Standing here tonight to celebrate her marriage to [Groom's name] is one of the greatest honors of my life.

I met [Bride's name] when we were just kids, and even then, I could tell she was something special. She was the girl who would share her lunch with anyone who forgot theirs, who would stick up for kids who were being picked on, and who somehow managed to make everyone feel included and valued. Over the years, [Bride's name] has been my constant companion through all of life's adventures.

We've celebrated each other's victories, supported each other through challenges, and created countless memories that I will treasure forever. She's been my cheerleader, my confidante, and my best friend. [Bride's name], watching you find [Groom's name] has been one of the greatest joys of my life.

I can see in his eyes how much he loves you, and I can see in your eyes how much you love him. That's exactly what you deserve. [Groom's name], thank you for loving my best friend.

Take good care of her. To [Bride's name] and [Groom's name], may your marriage be filled with the kind of love and friendship that we've had for twenty years. So here's to forever!`,
    authorName: 'Chris Hayes',
    weddingRole: 'Friend of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-short-friend-speech-139',
    title: `The Short Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 0.5,
    wordCount: 61,
    excerpt: `Hi everyone! I'm [Friend's name], one of [Bride's name]'s dear friends. [Bride's name], you've been an amazing friend for so many years. You're kind, loyal, funny, and you deserve...`,
    content: `Hi everyone! I'm [Friend's name], one of [Bride's name]'s dear friends. [Bride's name], you've been an amazing friend for so many years.

You're kind, loyal, funny, and you deserve all the happiness in the world. [Groom's name], thank you for making our girl so happy. You two are perfect for each other.

So here's to a lifetime of love and friendship! Cheers!`,
    authorName: 'Charlotte Grant',
    weddingRole: 'Friend of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-work-friend-speech-140',
    title: `The Work Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 217,
    excerpt: `Good evening, everyone! I'm [Friend's name], and I've had the pleasure of working alongside [Bride's name] for the past five years. While we started as colleagues, she quickly...`,
    content: `Good evening, everyone! I'm [Friend's name], and I've had the pleasure of working alongside [Bride's name] for the past five years. While we started as colleagues, she quickly became one of my dearest friends.

I met [Bride's name] on her first day at our company. She was nervous, excited, and determined to make a good impression. What struck me immediately was her professionalism, her kindness, and her incredible work ethic.

But what I discovered over time was that she was also one of the most genuine and caring people I'd ever met. [Bride's name] is the colleague everyone wants to work with. She's brilliant at what she does, but she's also the person who remembers your birthday, who brings you soup when you're sick, and who will stay late to help you meet a deadline.

She's turned our workplace into a community. [Bride's name], you've taught me so much about excellence, about kindness, and about integrity. I'm grateful for your friendship and I'm so happy for you today.

[Groom's name], you're getting an wonderful woman. I can already tell you know that, but I wanted to say it publicly. [Bride's name] and [Groom's name], may your marriage be filled with the same professionalism, care, and love that you bring to everything you do. So here's to your happiness!`,
    authorName: 'Fiona Kelly',
    weddingRole: 'Friend of the Bride',
    tags: ['bride'],
  },
  {
    slug: 'the-best-man-speech-141',
    title: `The Best Man Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 203,
    excerpt: `Hi everyone! I'm [Friend's name], and I have the incredible honor of being [Groom's name]'s best man. That means I know all his secrets, and I've decided to share exactly none of...`,
    content: `Hi everyone! I'm [Friend's name], and I have the incredible honor of being [Groom's name]'s best man. That means I know all his secrets, and I've decided to share exactly none of them because I value our friendship!

Just kidding – I have plenty of embarrassing stories, but I promised [Bride's name] I'd keep it classy. I met [Groom's name] in college, and from day one, he was the kind of friend everyone wants to have. He's loyal, funny, smart, and has this incredible ability to make you feel like your friendship matters.

Over the years, we've had countless adventures, inside jokes, and moments that I'll treasure forever. But recently, something changed. [Groom's name] met [Bride's name], and suddenly he had room in his heart for something even bigger than our friendship.

He was in love. And honestly, seeing him this happy makes me so grateful that this woman came into his life. [Bride's name], you're amazing.

You're kind, funny, brilliant, and you clearly have excellent taste in men. Welcome to the family. [Groom's name], I'm so proud of you.

You're going to be an amazing husband. [Bride's name] and [Groom's name], so here's to love, laughter, and a lifetime of happiness together. Cheers!`,
    authorName: 'Chloe Newton',
    weddingRole: 'Friend of the Groom',
    tags: ['groom'],
  },
  {
    slug: 'the-childhood-friend-speech-142',
    title: `The Childhood Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 202,
    excerpt: `Good evening, everyone! I'm [Friend's name], and I've had the incredible privilege of knowing [Groom's name] since we were kids running around the neighborhood getting into...`,
    content: `Good evening, everyone! I'm [Friend's name], and I've had the incredible privilege of knowing [Groom's name] since we were kids running around the neighborhood getting into trouble. Standing here as his best friend watching him marry [Bride's name] is surreal but so right.

I've known [Groom's name] through all his phases – the awkward teenage years, the college years where we thought we knew everything, the young adult years of figuring life out. Through it all, one thing has remained constant: his loyalty, his integrity, and his huge heart. But I have to say, I've never seen him the way he is with [Bride's name].

There's a light in his eyes that wasn't there before. He's happier, more confident, more himself than ever. [Bride's name], you've brought out the best in my friend, and I'm so grateful to you for that.

[Groom's name], I'm so happy for you. You deserve all the happiness in the world, and I can see that [Bride's name] is going to give you that and more. [Bride's name] and [Groom's name], may your marriage be filled with the same adventure, loyalty, and love that [Groom's name] brings to everything he does. So here's to your beautiful future together!`,
    authorName: 'Holly Sullivan',
    weddingRole: 'Friend of the Groom',
    tags: ['groom'],
  },
  {
    slug: 'the-grateful-friend-speech-143',
    title: `The Grateful Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.2,
    wordCount: 154,
    excerpt: `Good evening, everyone! I'm [Friend's name], one of [Groom's name]'s friends, and I'm so grateful to be here celebrating this beautiful couple. [Groom's name], I want to thank you...`,
    content: `Good evening, everyone! I'm [Friend's name], one of [Groom's name]'s friends, and I'm so grateful to be here celebrating this beautiful couple. [Groom's name], I want to thank you for being such an incredible friend.

You've been there for me through the ups and downs of life. You celebrate my victories like they're your own, and you support me through my struggles with genuine care and compassion. You've taught me what true friendship looks like.

Watching you with [Bride's name], I can see that you're bringing that same level of care, support, and love to your marriage. [Bride's name], you're getting an amazing man. [Groom's name] is loyal, kind, funny, and has a heart bigger than anyone I know.

You two are perfect for each other. [Bride's name] and [Groom's name], may your marriage be filled with the same friendship, support, and unconditional love that defines our relationship. So here's to your beautiful future together!`,
    authorName: 'Patrick Fletcher',
    weddingRole: 'Friend of the Groom',
    tags: ['groom'],
  },
  {
    slug: 'the-short-friend-speech-144',
    title: `The Short Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 0.4,
    wordCount: 57,
    excerpt: `Hi everyone! I'm [Friend's name], and I'm honored to be here celebrating [Groom's name] and [Bride's name]. [Groom's name], you're one of my best friends and you deserve all the...`,
    content: `Hi everyone! I'm [Friend's name], and I'm honored to be here celebrating [Groom's name] and [Bride's name]. [Groom's name], you're one of my best friends and you deserve all the happiness in the world.

[Bride's name], thank you for making him so happy. You're perfect for each other. So here's to a lifetime of love and friendship! Cheers!`,
    authorName: 'Victoria Walsh',
    weddingRole: 'Friend of the Groom',
    tags: ['groom'],
  },
  {
    slug: 'the-supportive-friend-speech-145',
    title: `The Supportive Friend Speech`,
    category: 'close-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.4,
    wordCount: 183,
    excerpt: `Good evening, everyone! I'm [Friend's name], and I've been fortunate to know [Groom's name] for many years. Watching him prepare to marry [Bride's name] has been one of the...`,
    content: `Good evening, everyone! I'm [Friend's name], and I've been fortunate to know [Groom's name] for many years. Watching him prepare to marry [Bride's name] has been one of the greatest joys of my life.

[Groom's name] has always been the kind of friend who shows up. When you needed someone, he was there. When you were going through tough times, he was there with a listening ear and genuine care.

But more than that, he brings out the best in people. He makes you want to be better, to do more, to love more deeply. I've seen that same energy with [Bride's name].

They bring out the absolute best in each other. [Bride's name], I want you to know that you're gaining not just a husband, but a friend who will support you, believe in you, and love you completely. [Groom's name], I'm so happy for you.

You've found someone who matches your heart and your spirit. [Bride's name] and [Groom's name], may your marriage be filled with the kind of support, growth, and love that true partnership brings. So here's to your happiness!`,
    authorName: 'Michael Clarke',
    weddingRole: 'Friend of the Groom',
    tags: ['groom'],
  },
  {
    slug: 'joint-couple-speech-146',
    title: `Joint Couple Speech`,
    category: 'joint-couple-speech',
    tone: 'funny',
    durationMinutes: 0.5,
    wordCount: 65,
    excerpt: `We promised to share everything from now on – bills, laundry, and apparently speeches. We decided to do this together because this wedding isn't just about one of us. It's about...`,
    content: `We promised to share everything from now on – bills, laundry, and apparently speeches. We decided to do this together because this wedding isn't just about one of us. It's about both of us, choosing each other every day.

Plus, it meant I didn't have to do all the writing alone. To teamwork, to partnership, and to knowing when to pass the mic. To us!`,
    authorName: 'Natalie Barrett',
    weddingRole: 'Joint Couple',
    tags: [],
  },
  {
    slug: 'pregnancy-announcement-speech-147',
    title: `Pregnancy Announcement Speech`,
    category: 'joint-couple-speech',
    tone: 'funny',
    durationMinutes: 0.5,
    wordCount: 63,
    excerpt: `Before I say anything else, there's a little surprise we've been keeping. Some people use speeches to thank their parents. Some to crack jokes. We're using ours to tell you… we're...`,
    content: `Before I say anything else, there's a little surprise we've been keeping. Some people use speeches to thank their parents. Some to crack jokes.

We're using ours to tell you… we're three months pregnant. Yes, tonight you're not just celebrating a wedding, you're celebrating a family in the making. To love, laughter, and the tiny plus-one who's already gate-crashing our honeymoon. To family!`,
    authorName: 'Victoria Fletcher',
    weddingRole: 'Joint Couple',
    tags: [],
  },
  {
    slug: 'child-speech-148',
    title: `Child of the Couple Speech`,
    category: 'short-sweet-speech',
    tone: 'heartfelt',
    durationMinutes: 0.5,
    wordCount: 62,
    excerpt: `My name's Ben and I'm seven. I think love is when someone lets you have the last chicken nugget. And I think [Bride] and [Groom] are going to be really happy because they share...`,
    content: `My name's Ben and I'm seven. I think love is when someone lets you have the last chicken nugget. And I think [Bride] and [Groom] are going to be really happy because they share pizza crusts and play Minecraft together.

That's true love. To my mum and dad – may your love always be as good as pizza and nuggets. To them!`,
    authorName: 'Fiona Gibson',
    weddingRole: 'Child of Couple',
    tags: ['heartfelt'],
  },
  {
    slug: 'grandparent-speech-149',
    title: `Grandparent Speech`,
    category: 'grandfather-speech',
    tone: 'funny',
    durationMinutes: 0.6,
    wordCount: 78,
    excerpt: `Well, I'm not sure why they've asked me to say something – I was just here for the cake. But since I've got the mic, I'll share my top three marriage tips. One: never go to bed...`,
    content: `Well, I'm not sure why they've asked me to say something – I was just here for the cake. But since I've got the mic, I'll share my top three marriage tips. One: never go to bed angry.

Two: don't argue about money in front of the dog. And three: no number twos in front of each other. Trust me, 60 years in, it still works.

To love, laughter, and plumbing with doors that lock. To the newlyweds.`,
    authorName: 'Daniel Bennett',
    weddingRole: 'Grandparent',
    tags: ['funny', 'grandparent'],
  },
  {
    slug: 'the-hilarious-best-friend-speech-150',
    title: `The Hilarious Best Friend Speech`,
    category: 'funny-wedding-speech',
    tone: 'balanced',
    durationMinutes: 2.3,
    wordCount: 298,
    excerpt: `Hi everyone! I'm [Friend's name], and I have the privilege and responsibility of being the best man. That means I know all of [Groom's name]'s...`,
    content: `Hi everyone! I'm [Friend's name], and I have the privilege and responsibility of being the best man. That means I know all of [Groom's name]'s embarrassing secrets, and I've prepared a PowerPoint presentation.

Don't worry, [Groom's name], I'm just kidding – the wifi in this venue is terrible anyway. I met [Groom's name] in college, back when he thought he was invincible and had the good judgment to believe that sleeping four hours a night was "optimal performance." Spoiler alert: it's not. He's since learned that lesson, mostly because [Bride's name] refuses to let him operate a vehicle after midnight.

One of my favorite memories is from when [Groom's name] first told me about [Bride's name]. He was absolutely smitten, which was hilarious to watch because this is a man who has never been smitten about anything except pizza. He spent an hour describing her to me.

An entire hour. My buddy who typically communicates in grunts and sports statistics was suddenly waxing poetic about a woman. It was beautiful.

Disgusting, but beautiful. [Bride's name], I want you to know what you're getting into. [Groom's name] is a wonderful man, but he has some quirks.

He refuses to ask for directions. He thinks the thermostat should be set at "Arctic" year-round. He has very strong opinions about how to properly load a dishwasher.

But what he also is: loyal, kind, hilarious when he lets his guard down, and absolutely devoted to making you happy. So welcome to the family. You're going to need a sense of humor, but I think you've already figured that out.

[Bride's name] and [Groom's name], so here's to a lifetime of laughter, love, and adventure. May your marriage be as entertaining as [Groom's name]'s attempts at cooking. Cheers!`,
    authorName: 'Natalie Foster',
    weddingRole: 'Funny Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-roasting-friend-speech-151',
    title: `The Roasting Friend Speech`,
    category: 'funny-wedding-speech',
    tone: 'balanced',
    durationMinutes: 2.1,
    wordCount: 272,
    excerpt: `Hi everyone! I'm [Friend's name], and I'm here to tell you the truth about [Groom's name]. For too long, people have been fooled into thinking he's a normal human being. Today...`,
    content: `Hi everyone! I'm [Friend's name], and I'm here to tell you the truth about [Groom's name]. For too long, people have been fooled into thinking he's a normal human being.

Today, I'm here to set the record straight. [Groom's name] is – and I say this with love – absolutely ridiculous. He's the kind of person who will spend thirty minutes looking for his phone while he's talking on it.

He once got lost in a grocery store and had to call someone for directions. A grocery store! But despite his numerous flaws, he's one of the best friends I have.

He's loyal, he's kind, and he has this infectious enthusiasm for life that makes you want to be a better person. And then he met [Bride's name]. I watched the transformation.

Suddenly, he cared about things like "matching" and "being on time." He started taking showers without being asked. It was like watching a caterpillar turn into a butterfly, except the butterfly is still a little ridiculous. [Bride's name], you're an absolute saint for taking him on.

You clearly have the patience of a saint, the sense of humor of a saint, and the questionable judgment of a saint for marrying this man. But I can see why. [Groom's name] would do anything for you.

He would move mountains for you. Probably slowly and in the wrong direction, but he'd do it. [Bride's name] and [Groom's name], may your marriage be filled with laughter, love, and the strong understanding that some things in life – like [Groom's name]'s fashion choices – will never change, and that's okay. So here's to you both!`,
    authorName: 'Amy Chapman',
    weddingRole: 'Funny Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-sarcastic-yet-sincere-speech-152',
    title: `The Sarcastic Yet Sincere Speech`,
    category: 'funny-wedding-speech',
    tone: 'balanced',
    durationMinutes: 2.0,
    wordCount: 264,
    excerpt: `Hi everyone! I'm [Friend's name], and yes, [Groom's name] put me up to this. As a best friend, it's my job to roast him, and I take that job very seriously. [Groom's name] is many...`,
    content: `Hi everyone! I'm [Friend's name], and yes, [Groom's name] put me up to this. As a best friend, it's my job to roast him, and I take that job very seriously.

[Groom's name] is many things: competitive, stubborn, someone who takes board games way too seriously, and someone who has very strong opinions about what constitutes a "real" pizza. But he's also someone who, when he commits to something, he goes all in. He committed to gaming for a while – that didn't work out.

He committed to fitness – that lasted six weeks. But he committed to loving [Bride's name], and that's real. I knew [Groom's name] loved [Bride's name] when he not only called me to tell me about her but actually made plans to have us meet.

That's huge for this guy. And then [Bride's name] met me, and I was like, "You're really nice. Why are you with him?" And she was like, "He's actually really great when you get to know him." She's either completely blind or deeply in love.

Probably both. [Bride's name], marrying [Groom's name] is going to be an adventure. Pack your patience, your sense of humor, and maybe a first aid kit because he has a tendency to hurt himself doing very ordinary things.

But also pack your heart, because he's going to love you with everything he has. [Bride's name] and [Groom's name], may your marriage be filled with adventures, laughter, and the understanding that love is really just putting up with someone's weirdness and calling it a feature instead of a bug. Cheers!`,
    authorName: 'Claire Sullivan',
    weddingRole: 'Funny Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-self-deprecating-humorous-speech-153',
    title: `The Self-Deprecating Humorous Speech`,
    category: 'funny-wedding-speech',
    tone: 'balanced',
    durationMinutes: 2.0,
    wordCount: 261,
    excerpt: `Good evening, everyone! I'm [Friend's name], and I've been asked to say a few words about [Bride's name] and [Groom's name]. I'm not sure why [Groom's name] thought giving me a...`,
    content: `Good evening, everyone! I'm [Friend's name], and I've been asked to say a few words about [Bride's name] and [Groom's name]. I'm not sure why [Groom's name] thought giving me a microphone was a good idea, but here we are.

I met [Groom's name] at work, and he's the kind of colleague everyone likes. He's competent, he's funny in a dry way that makes you question whether he's joking, and he's incredibly loyal. When [Groom's name] told me he was getting married, I was shocked.

Not because I didn't think he deserved happiness – everyone deserves happiness. I was shocked because I honestly didn't think he'd put in the effort to find someone. [Groom's name] is many things, but proactive isn't typically one of them.

Apparently, [Bride's name] is that special. She came into his life and he was willing to become a better version of himself. He started dressing better, he started actually listening in conversations instead of just waiting for his turn to talk, and he even started smiling at other people besides me – which, let's be honest, is huge.

[Bride's name], you've worked miracles. [Groom's name], you're a lucky guy. And honestly, I'm standing here thinking about how I'm still single while you've found someone who actually likes you.

Congratulations on that. Really. [Bride's name] and [Groom's name], may your marriage be filled with laughter, grace, and the understanding that marriage is basically a partnership where one person has to constantly remind the other that leaving dishes in the sink is not acceptable. So here's to you both!`,
    authorName: 'Ben Chapman',
    weddingRole: 'Funny Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-witty-observational-speech-154',
    title: `The Witty Observational Speech`,
    category: 'funny-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.9,
    wordCount: 241,
    excerpt: `Good evening! I'm [Friend's name], and I'm observing a fascinating phenomenon tonight: everyone is happy and well-behaved. This must be what it's like at royal weddings. Back in...`,
    content: `Good evening! I'm [Friend's name], and I'm observing a fascinating phenomenon tonight: everyone is happy and well-behaved. This must be what it's like at royal weddings.

Back in real life, at normal human weddings, people are more honest. People cry, people laugh too loudly, people drink too much and say embarrassing things. But tonight, we're all pretending to be refined.

Except [Groom's name] looks genuinely happy, so that's nice. I've watched [Groom's name] go through his life making questionable decisions. Bad haircuts, worse fashion choices, the entire series of events that led to him owning a pet snake.

Yes, this man had a pet snake. A snake! We all tried to convince him it was a bad idea.

We said, "Snakes don't have the personality," and "Snakes are terrifying," and "[Groom's name], this is a terrible idea." But he didn't listen. Then [Bride's name] came into his life and she was like, "Where's the snake?" "It's gone," he said. Apparently, she had opinions about living with reptiles.

Within a month, problem solved. [Bride's name], you're my hero. [Groom's name], I've never seen you this happy.

You're glowing. You're smiling at people who aren't me. You're being vulnerable.

It's beautiful and slightly terrifying. [Bride's name], if you're having second thoughts, I completely understand. It's not too late to run.

[Bride's name] and [Groom's name], may your marriage be filled with laughter, understanding, and the mutual agreement to never own a reptile. Cheers!`,
    authorName: 'Emma Kelly',
    weddingRole: 'Funny Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-concise-and-sweet-speech-155',
    title: `The Concise and Sweet Speech`,
    category: 'short-sweet-speech',
    tone: 'balanced',
    durationMinutes: 0.7,
    wordCount: 95,
    excerpt: `Good evening, everyone! I'm [Speaker's name]. For those of you who know me, you know I'm not one for long speeches, so I'll keep this brief. [Bride's name] and [Groom's name], you...`,
    content: `Good evening, everyone! I'm [Speaker's name]. For those of you who know me, you know I'm not one for long speeches, so I'll keep this brief.

[Bride's name] and [Groom's name], you two are perfect for each other. You make each other happy, you support each other's dreams, and you love each other deeply. That's all that matters.

We're all here today because we want to celebrate that love and wish you both a lifetime of happiness. So so here's to you both – may your marriage be filled with joy, laughter, and endless love. Cheers!`,
    authorName: 'Victoria Parker',
    weddingRole: 'Short Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-heartfelt-brief-speech-156',
    title: `The Heartfelt Brief Speech`,
    category: 'short-sweet-speech',
    tone: 'balanced',
    durationMinutes: 0.7,
    wordCount: 86,
    excerpt: `Good evening! I'm [Speaker's name], and I just want to say how happy I am to be here celebrating [Bride's name] and [Groom's name]. I've known [Bride's name] for many years, and...`,
    content: `Good evening! I'm [Speaker's name], and I just want to say how happy I am to be here celebrating [Bride's name] and [Groom's name]. I've known [Bride's name] for many years, and I've never seen her as happy as she is with [Groom's name].

[Groom's name], you're getting an amazing woman. Take care of her, love her, and make her laugh every day. [Bride's name] and [Groom's name], I wish you a lifetime of love, happiness, and all the adventures you deserve. So here's to you both!`,
    authorName: 'Rebecca Foster',
    weddingRole: 'Short Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-personal-brief-speech-157',
    title: `The Personal Brief Speech`,
    category: 'short-sweet-speech',
    tone: 'balanced',
    durationMinutes: 0.5,
    wordCount: 67,
    excerpt: `Good evening! I'm [Speaker's name]. I just want to say that watching [Bride's name] and [Groom's name] together fills my heart with joy. They're kind to each other, they make each...`,
    content: `Good evening! I'm [Speaker's name]. I just want to say that watching [Bride's name] and [Groom's name] together fills my heart with joy.

They're kind to each other, they make each other laugh, and they genuinely love each other. That's rare and beautiful. [Bride's name] and [Groom's name], I wish you both a marriage filled with love, laughter, and all the happiness you deserve. So here's to you!`,
    authorName: 'Luke Fletcher',
    weddingRole: 'Short Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-simple-and-sincere-speech-158',
    title: `The Simple and Sincere Speech`,
    category: 'short-sweet-speech',
    tone: 'balanced',
    durationMinutes: 0.5,
    wordCount: 59,
    excerpt: `Hi everyone! I'm [Speaker's name], and I'm honored to be here. I just want to say how wonderful it is to see [Bride's name] and [Groom's name] so happy together. You two are...`,
    content: `Hi everyone! I'm [Speaker's name], and I'm honored to be here. I just want to say how wonderful it is to see [Bride's name] and [Groom's name] so happy together.

You two are perfect for each other, and I'm so happy for you both. May your marriage be filled with love, laughter, and endless happiness. Cheers to you both!`,
    authorName: 'Claire Barrett',
    weddingRole: 'Short Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-witty-short-speech-159',
    title: `The Witty Short Speech`,
    category: 'short-sweet-speech',
    tone: 'balanced',
    durationMinutes: 0.7,
    wordCount: 86,
    excerpt: `Hi everyone! I'm [Speaker's name]. I've been asked to keep this short, which is great because I don't have much to say anyway. What I will say is this: [Bride's name] and [Groom's...`,
    content: `Hi everyone! I'm [Speaker's name]. I've been asked to keep this short, which is great because I don't have much to say anyway.

What I will say is this: [Bride's name] and [Groom's name], you two are absolutely perfect for each other. You laugh together, you support each other, and most importantly, you clearly like each other – which is more than a lot of married couples can say. So so here's to you both – may your marriage be everything you hope for and more. Cheers!`,
    authorName: 'Michael Parker',
    weddingRole: 'Short Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-bittersweet-yet-beautiful-speech-160',
    title: `The Bittersweet Yet Beautiful Speech`,
    category: 'emotional-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.9,
    wordCount: 251,
    excerpt: `Good evening, everyone. I'm [Speaker's name]. Tonight is bittersweet for me. I'm celebrating the marriage of two people I love deeply, but I'm also aware that life is changing...`,
    content: `Good evening, everyone. I'm [Speaker's name]. Tonight is bittersweet for me.

I'm celebrating the marriage of two people I love deeply, but I'm also aware that life is changing. [Bride's name] has been such an important part of my life, and now I'm sharing her with [Groom's name]. But as I look at them together, as I see the love and commitment they have for each other, I realize that's not loss – that's growth.

That's expansion of the circle of love. [Bride's name], you've been my rock. You've been there for me through everything life has thrown at them.

Watching you find [Groom's name] has been both difficult and beautiful. Difficult because everything changes. Beautiful because you found someone who loves you as much as I do.

[Groom's name], I want to thank you. Thank you for loving my friend so completely. Thank you for seeing her, for cherishing her, for committing to building a life with her.

As you move forward together, remember that marriage is not the end – it's the beginning of something new, something beautiful. It's the beginning of a partnership, a friendship, a love that will sustain you through all of life's seasons. [Bride's name] and [Groom's name], as you walk forward together, know that we're all here for you.

We're celebrating you, we're supporting you, and we're believing in your love. May your marriage be everything you hope for and more. May it be filled with grace, with laughter, with deep, abiding love. So here's to you both!`,
    authorName: 'Daniel Turner',
    weddingRole: 'Emotional Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-deeply-personal-emotional-speech-161',
    title: `The Deeply Personal Emotional Speech`,
    category: 'emotional-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 235,
    excerpt: `Good evening, everyone. I'm [Speaker's name], and I have to admit, I'm a bit emotional tonight. Watching [Bride's name] and [Groom's name] together has stirred something in my...`,
    content: `Good evening, everyone. I'm [Speaker's name], and I have to admit, I'm a bit emotional tonight. Watching [Bride's name] and [Groom's name] together has stirred something in my heart – a deep joy, a sense of hope, a reminder of what true love looks like.

I've known [Bride's name] for many years, and I've watched her journey. I've been with her through the difficult times, the moments of doubt, the periods where she wondered if she'd ever find someone who truly understood her, who could love her completely. And then [Groom's name] came into her life.

I watched the transformation. I watched her become more herself, more confident, more alive. And I realized – that's what love does.

Real love doesn't change who you are; it helps you become the best version of who you are. [Bride's name], you deserve every happiness. [Groom's name], you have been blessed with an wonderful woman.

I hope you know what you have. I hope you cherish it, protect it, and nurture it every single day. Life is precious and fleeting.

Don't ever take each other for granted. [Bride's name] and [Groom's name], as you move forward into your marriage, remember that love is not just a feeling – it's a choice. Choose each other every day.

Choose kindness, choose grace, choose love. May your marriage be everything you've dreamed of and more. So here's to your beautiful love story!`,
    authorName: 'Zoe Phillips',
    weddingRole: 'Emotional Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-heartfelt-tribute-speech-162',
    title: `The Heartfelt Tribute Speech`,
    category: 'emotional-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 233,
    excerpt: `Good evening, everyone. I'm [Speaker's name], and I'm here to celebrate [Bride's name] and [Groom's name], two people who have changed each other's lives for the better. I've...`,
    content: `Good evening, everyone. I'm [Speaker's name], and I'm here to celebrate [Bride's name] and [Groom's name], two people who have changed each other's lives for the better. I've watched [Bride's name] with [Groom's name], and what I see is a love that's genuine, that's deep, that's real.

It's the kind of love that doesn't just make you happy in the moment – it makes you want to be a better person. It inspires you. It challenges you.

It sustains you. [Bride's name], you've always had a beautiful heart. [Groom's name] is so lucky to be the recipient of that love.

Treasure it, nurture it, and never take it for granted. [Groom's name], you've brought so much joy into [Bride's name]'s life. Watching you two together, I see what real partnership looks like.

I see two people who genuinely like each other, who support each other's dreams, who make each other laugh. That's the foundation for something beautiful. As you move forward in your marriage, remember this feeling.

Remember the joy you feel today. Come back to it when times are tough. Hold onto it.

Protect it. [Bride's name] and [Groom's name], thank you for showing us what love looks like. Thank you for your commitment to each other and to building something beautiful together.

We're all rooting for you. So here's to your marriage – may it be everything you've dreamed of and more!`,
    authorName: 'Charlotte Hart',
    weddingRole: 'Emotional Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-inspiring-and-hopeful-speech-163',
    title: `The Inspiring and Hopeful Speech`,
    category: 'emotional-wedding-speech',
    tone: 'balanced',
    durationMinutes: 2.1,
    wordCount: 268,
    excerpt: `Good evening, everyone. I'm [Speaker's name]. Standing here tonight, I'm reminded of something beautiful: love exists. Real, genuine, transformative love exists. And we're...`,
    content: `Good evening, everyone. I'm [Speaker's name]. Standing here tonight, I'm reminded of something beautiful: love exists.

Real, genuine, transformative love exists. And we're witnessing it right now. [Bride's name] and [Groom's name] represent hope.

In a world that sometimes feels overwhelming, they represent the hope that you can find someone who truly understands you, who loves you completely, who wants to build a beautiful life with you. That's not small. That's profound.

I think about [Bride's name]'s courage – the courage it takes to open your heart to someone, to be vulnerable, to commit to building something with another person. I think about [Groom's name]'s dedication – the dedication to showing up for another person, day after day, choosing to love them, choosing to support them, choosing to be their partner. These are not small things.

These are the building blocks of a life well-lived. As [Bride's name] and [Groom's name] move forward in their marriage, I hope they remember this moment. I hope they remember the love they feel today.

I hope they build a marriage that's characterized by grace, by kindness, by genuine partnership. I hope they weather the storms together. I hope they celebrate the joys together.

I hope they grow old together, still holding hands, still understanding each other, still in love. [Bride's name] and [Groom's name], thank you for showing us what love looks like. Thank you for your commitment to each other.

Thank you for the hope you inspire in all of us. So here's to your marriage – may it be beautiful, may it be strong, and may it last forever. Cheers!`,
    authorName: 'Richard Fletcher',
    weddingRole: 'Emotional Wedding Speech',
    tags: [],
  },
  {
    slug: 'the-touching-family-reflection-164',
    title: `The Touching Family Reflection`,
    category: 'emotional-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 239,
    excerpt: `Good evening, everyone. I'm [Speaker's name], and I'm standing here with tears in my eyes – happy tears, but still. Watching [Bride's name] and [Groom's name] get married today...`,
    content: `Good evening, everyone. I'm [Speaker's name], and I'm standing here with tears in my eyes – happy tears, but still. Watching [Bride's name] and [Groom's name] get married today reminds me of something profound: love is real.

In a world that often feels cynical and broken, love is real. These two people standing before us have found each other, and they're committing their lives to building something beautiful together. That's profound.

That's worthy of our attention and our blessing. I think about [Bride's name]'s journey, and I think about how hard she's worked to become the person she is now. She's kind, she's strong, she's compassionate, she's brilliant.

And [Groom's name] saw all of that. He saw her – really saw her – and he loved what he saw. That's beautiful.

[Groom's name], you're gaining not just a wife, but a partner who will challenge you to grow, who will support you, who will love you through all of life's seasons. [Bride's name], you're gaining a man who sees you and loves you completely. As we all move forward, let's remember what [Bride's name] and [Groom's name] are showing us today: that love is worth fighting for, that partnership is worth building, that commitment is worth making.

May your marriage be everything you've hoped for. May it be filled with grace, with laughter, with deep understanding. May you grow together.

May you build something beautiful. So here's to you both!`,
    authorName: 'Patrick Hughes',
    weddingRole: 'Emotional Wedding Speech',
    tags: [],
  },
  // ── Best Woman Speech (Bridal Party) ──────────────────────

  {
    slug: 'best-woman-funny-1',
    title: `The best woman who knows too much`,
    category: 'best-woman-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 268,
    excerpt: `Good evening, everyone. For those of you who don't know me, I'm [Your name], and I have the slightly unconventional honour of being [Groom's name]'s best woman. Yes, a woman. I know...`,
    content: `Good evening, everyone. For those of you who don't know me, I'm [Your name], and I have the slightly unconventional honour of being [Groom's name]'s best woman. Yes, a woman. I know some of you are surprised, but trust me, after twenty years of friendship, nobody else was going to stand up here and embarrass him quite as effectively.

Let me take you back to where it all started. [Groom's name] and I met in Year 7 science class, where he set his own eyebrows on fire with a Bunsen burner. That pretty much set the tone for our entire friendship.

Now, I was there the night [Groom's name] met [Bride's name]. He came home, sat on my sofa, and said, "I think I've just met the most incredible person alive." I told him to stop being dramatic. Three weeks later, he was learning to cook risotto because she mentioned she liked Italian food. This is a man whose signature dish was toast.

[Bride's name], I want you to know something. In all the years I've known him, I've never seen [Groom's name] look at anyone the way he looks at you. Not even the risotto, and honestly, it turned out surprisingly good.

You two bring out the very best in each other. [Groom's name] is calmer, happier, and somehow even funnier since you came along. And [Bride's name], you've gained a partner who will always, always show up for you.

So please raise your glasses. To [Bride's name] and [Groom's name], may your marriage be as warm, ridiculous, and wonderful as the friendship that got me standing here today. Cheers!`,
    authorName: 'Rachel Whitmore',
    weddingRole: 'Best Woman',
    tags: ['funny', 'best woman', 'bridal party'],
  },
  {
    slug: 'best-woman-heartfelt-2',
    title: `A best woman's tribute to true friendship`,
    category: 'best-woman-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.0,
    wordCount: 256,
    excerpt: `Hello, everyone. My name is [Your name], and I have the privilege of standing here today as [Groom's name]'s best woman. I know that might raise a few eyebrows, but if you know us...`,
    content: `Hello, everyone. My name is [Your name], and I have the privilege of standing here today as [Groom's name]'s best woman. I know that might raise a few eyebrows, but if you know us, you know it couldn't have been anyone else.

[Groom's name] and I grew up three doors apart. We walked to school together every single day from age six until we were eighteen. He was there when I lost my mum. I was there when he thought he'd never find someone who truly understood him.

The first time [Groom's name] told me about [Bride's name], his voice changed. It got quieter, almost reverent. He said, "She sees me, all of me, and she stays." That's when I knew this was different.

I've watched their love grow from nervous first dates into something steady and sure. [Bride's name], you didn't just fall in love with [Groom's name], you chose him. Every single day, you choose him. And he chooses you right back.

Watching the two of you together reminds me that the best relationships aren't about grand gestures. They're about the Tuesday nights cooking dinner together, the long drives with the windows down, the quiet moments where nothing needs to be said.

[Groom's name], you deserve every bit of this happiness. And [Bride's name], thank you for loving my best friend the way he's always deserved.

Please join me in raising a glass to [Bride's name] and [Groom's name]. Here's to a lifetime of choosing each other. To the happy couple!`,
    authorName: 'Sophie Brennan',
    weddingRole: 'Best Woman',
    tags: ['heartfelt', 'best woman', 'friendship'],
  },
  {
    slug: 'best-woman-balanced-3',
    title: `Standing beside him one more time`,
    category: 'best-woman-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.8,
    wordCount: 234,
    excerpt: `Hi everyone. I'm [Your name], and when [Groom's name] asked me to be his best woman, I'll be honest, my first thought was, "Do I have to plan a stag do?" Thankfully, his brother...`,
    content: `Hi everyone. I'm [Your name], and when [Groom's name] asked me to be his best woman, I'll be honest, my first thought was, "Do I have to plan a stag do?" Thankfully, his brother handled that part. I just had to write a speech, hold the rings, and try not to cry. Two out of three isn't bad.

[Groom's name] and I became friends at our first job out of university. We were both terrified, both pretending to understand spreadsheets, and both sneaking out for coffee at 10am every day. Some friendships are built on deep philosophical conversations. Ours was built on flat whites and shared panic.

But underneath all the laughs, [Groom's name] is one of the most genuinely kind people I know. He remembers birthdays. He checks in when things are hard. He drove forty minutes at midnight to help me change a tyre once, and he only complained a little bit.

When [Bride's name] came into his life, I could see the shift immediately. He started talking about the future with actual excitement instead of mild anxiety. That's how you know it's real.

[Bride's name], you make him brave. And [Groom's name], you make her laugh. That's a pretty unbeatable combination.

So here's to the two of you. May your love be strong, your patience be endless, and your coffee always be hot. To [Bride's name] and [Groom's name]!`,
    authorName: 'Jenna Calloway',
    weddingRole: 'Best Woman',
    tags: ['balanced', 'best woman', 'friendship'],
  },

  // ── Man of Honor Speech (Bridal Party) ────────────────────

  {
    slug: 'man-of-honor-funny-1',
    title: `The man of honor who stole the show`,
    category: 'man-of-honor-speech',
    tone: 'funny' as const,
    durationMinutes: 2.2,
    wordCount: 282,
    excerpt: `Alright, alright, settle down. I'm [Your name], and yes, I am the man of honor. I know what you're thinking, and no, I did not lose a bet. [Bride's name] chose me because I'm the...`,
    content: `Alright, alright, settle down. I'm [Your name], and yes, I am the man of honor. I know what you're thinking, and no, I did not lose a bet. [Bride's name] chose me because I'm the only person who's seen her through braces, a questionable fringe in 2014, and that brief phase where she was really into making her own kombucha. Loyalty has its rewards, apparently.

Now, [Bride's name] and I have been best friends since secondary school. I was there for her first heartbreak, her university graduation, and the time she accidentally locked herself out of her flat wearing nothing but a towel and one slipper. That story is free of charge, by the way. You're welcome.

But here's what I really want to say. [Bride's name] is the kind of person who makes everyone around her feel important. She remembers the little things. She sends texts that say "thinking of you" on the exact days you need them most. She's fierce, she's funny, and she has a heart the size of this entire room.

[Groom's name], I liked you from the start, which is saying something because I'm extremely protective. You passed the test when you made her laugh so hard she snorted water out of her nose at dinner. That was the moment I thought, "Yeah, he's the one."

You two are brilliant together. You balance each other out in a way that just makes sense.

So everyone, please raise a glass to [Bride's name] and [Groom's name]. May your love be as strong as [Bride's name]'s opinions and as steady as [Groom's name]'s patience. Cheers!`,
    authorName: 'Daniel Okafor',
    weddingRole: 'Man of Honor',
    tags: ['funny', 'man of honor', 'bridal party'],
  },
  {
    slug: 'man-of-honor-heartfelt-2',
    title: `More than a best friend, a brother by choice`,
    category: 'man-of-honor-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.0,
    wordCount: 260,
    excerpt: `Good evening, everyone. I'm [Your name], and I'm honoured beyond words to stand here today as [Bride's name]'s man of honor. When she asked me, I didn't hesitate. Not for a second...`,
    content: `Good evening, everyone. I'm [Your name], and I'm honoured beyond words to stand here today as [Bride's name]'s man of honor. When she asked me, I didn't hesitate. Not for a second.

[Bride's name] and I met eleven years ago during freshers' week. She was lost, looking for the English building, and I was lost, looking for literally anything. We figured it out together, and honestly, that's been the pattern ever since. Whenever life gets confusing, we figure it out together.

She was there when my dad was ill. She sat with me in hospital waiting rooms and didn't try to fill the silence with empty words. She just held my hand. That's who [Bride's name] is. She shows up, fully and completely, for the people she loves.

[Groom's name], the first time I met you, [Bride's name] was nervous about what I'd think. She needn't have worried. I saw how you listened to her, really listened, and I knew. You see the same extraordinary person I see.

What you two have built together isn't just love. It's a partnership rooted in respect, in kindness, in the willingness to be vulnerable with each other. That's rare, and it's beautiful.

[Bride's name], you are my family. Standing beside you today is one of the greatest honours of my life. And [Groom's name], welcome to the inner circle. You've earned it.

Please join me in toasting two incredible people. To [Bride's name] and [Groom's name], and to the beautiful life ahead of you. To the happy couple!`,
    authorName: 'Marcus Webb',
    weddingRole: 'Man of Honor',
    tags: ['heartfelt', 'man of honor', 'emotional'],
  },
  {
    slug: 'man-of-honor-balanced-3',
    title: `Her corner, always`,
    category: 'man-of-honor-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.8,
    wordCount: 237,
    excerpt: `Hello, everyone. For those I haven't met, I'm [Your name], and I have the unique pleasure of being [Bride's name]'s man of honor. She told me all I had to do was hold her bouquet...`,
    content: `Hello, everyone. For those I haven't met, I'm [Your name], and I have the unique pleasure of being [Bride's name]'s man of honor. She told me all I had to do was hold her bouquet and not make her cry. I'll do my best on both counts, but I'm not making promises.

[Bride's name] and I go back fifteen years. We worked together at a terrible pizza restaurant when we were sixteen. I burnt the garlic bread, she charmed every customer, and management never figured out which one of us was actually useful. It was her. It was always her.

Over the years, I've watched [Bride's name] grow into someone truly remarkable. She's the friend who drives an hour to bring you soup when you're ill. She's the person who remembers your dog's birthday. She once talked me out of a truly catastrophic haircut, and for that alone I owe her everything.

When she started dating [Groom's name], something shifted. She stopped worrying so much. She laughed more freely. She told me, "He makes me feel like I don't have to try so hard to be enough." And that, right there, is what love should feel like.

[Groom's name], take care of her. Not because she can't take care of herself, because she absolutely can, but because she deserves someone who wants to.

To [Bride's name] and [Groom's name], may every chapter be better than the last. Cheers!`,
    authorName: 'James Hartley',
    weddingRole: 'Man of Honor',
    tags: ['balanced', 'man of honor', 'friendship'],
  },

  // ── Stepfather of the Bride Speech (Family) ───────────────

  {
    slug: 'stepfather-bride-funny-1',
    title: `The stepfather who earned his place`,
    category: 'stepfather-of-bride-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 274,
    excerpt: `Good evening, everyone. I'm [Your name], and I'm [Bride's name]'s stepdad, though she dropped the "step" part about six years ago, which was honestly one of the proudest moments of...`,
    content: `Good evening, everyone. I'm [Your name], and I'm [Bride's name]'s stepdad, though she dropped the "step" part about six years ago, which was honestly one of the proudest moments of my life. Right up there with today.

Now, I want to be transparent. When I first came into [Bride's name]'s life, she was fourteen and deeply unimpressed. I tried everything. I learned her favourite bands. I pretended to enjoy reality TV. I once attempted to help her with maths homework and she looked at me like I'd suggested the earth was flat. Turns out I was doing the long division wrong. She was right. She's always right. [Groom's name], get used to that.

But slowly, year by year, we built something real. She started saving me a seat at dinner. She started asking my opinion on things, even if she usually ignored it. And one evening, completely out of nowhere, she called me Dad. I had to leave the room because a grown man crying over pasta is apparently "embarrassing."

What I've learned from [Bride's name] is that family isn't always about biology. It's about showing up, being patient, and accepting that sometimes love takes the scenic route.

[Groom's name], you're getting an extraordinary woman. She's smart, she's stubborn in the best way, and she will absolutely beat you at Scrabble every single time. Don't even try.

So please, raise your glasses to [Bride's name] and [Groom's name]. May your life together be full of love, laughter, and the occasional long division argument. To the happy couple!`,
    authorName: 'Graham Porter',
    weddingRole: 'Stepfather of the Bride',
    tags: ['funny', 'stepfather', 'blended family'],
  },
  {
    slug: 'stepfather-bride-heartfelt-2',
    title: `A stepfather's quiet pride`,
    category: 'stepfather-of-bride-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 1.9,
    wordCount: 247,
    excerpt: `Good evening. My name is [Your name], and I have the honour of being [Bride's name]'s stepfather. I want to start by saying that stepping into someone's life partway through is both...`,
    content: `Good evening. My name is [Your name], and I have the honour of being [Bride's name]'s stepfather. I want to start by saying that stepping into someone's life partway through is both the hardest and most rewarding thing I've ever done.

When I met [Bride's name]'s mother, I knew that loving her meant loving her children too. Not as an obligation, but as a choice I made willingly, every single day. And [Bride's name] made that choice easy, even when she probably didn't realize it.

I remember the first time she invited me to a school play. She had a small part, just three lines, but she delivered them with so much conviction. I sat in that audience thinking, this girl is going to do incredible things. And here we are.

Over the years, I've watched [Bride's name] grow into a woman of such warmth, intelligence, and grace. She navigates the world with a kindness that makes everyone around her feel seen.

[Groom's name], from the first time you walked through our door, I could tell you were different. You were nervous, but you were genuine. You shook my hand, looked me in the eye, and that meant something.

What you and [Bride's name] share is built on a foundation of mutual respect, and that is the strongest foundation there is.

I may not have been there from the beginning, but I will be here for every chapter that comes next. To [Bride's name] and [Groom's name], with all my love. To the happy couple!`,
    authorName: 'Richard Hale',
    weddingRole: 'Stepfather of the Bride',
    tags: ['heartfelt', 'stepfather', 'family'],
  },
  {
    slug: 'stepfather-bride-balanced-3',
    title: `Chosen family, chosen love`,
    category: 'stepfather-of-bride-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.7,
    wordCount: 225,
    excerpt: `Hello, everyone. I'm [Your name], [Bride's name]'s stepdad. Now, I know what some of you might be thinking, does the stepdad give a speech? The answer is yes, because [Bride's name]...`,
    content: `Hello, everyone. I'm [Your name], [Bride's name]'s stepdad. Now, I know what some of you might be thinking, does the stepdad give a speech? The answer is yes, because [Bride's name] asked me to, and I've spent twelve years learning that when she asks you to do something, you do it.

I came into this family when [Bride's name] was ten. She was suspicious of me for a solid two years, which honestly, fair enough. I was the new guy. But we found our common ground eventually. Turns out we both loved terrible action films and couldn't resist a good cheese toastie.

Those small moments added up. Movie nights became our thing. Late night kitchen conversations when she was stressed about exams. Teaching her to drive, which tested both our nerves. Slowly, we became family, not because we had to, but because we wanted to.

[Bride's name], watching you today, I'm overwhelmed with pride. You've grown into someone so thoughtful, so brave, and so full of love.

[Groom's name], you've joined a family that doesn't do things by halves. We're loud, we're opinionated, and we always have too much food. But we love fiercely, and you're one of us now.

To [Bride's name] and [Groom's name], here's to building your own version of family, one cheese toastie at a time. Cheers!`,
    authorName: 'Neil Sutton',
    weddingRole: 'Stepfather of the Bride',
    tags: ['balanced', 'stepfather', 'blended family'],
  },

  // ── Stepmother of the Bride Speech (Family) ───────────────

  {
    slug: 'stepmother-bride-funny-1',
    title: `The stepmum who finally gets her moment`,
    category: 'stepmother-of-bride-speech',
    tone: 'funny' as const,
    durationMinutes: 2.0,
    wordCount: 258,
    excerpt: `Hello, everyone! I'm [Your name], [Bride's name]'s stepmum. And before anyone checks, no, I'm not the wicked kind. I checked the mirror this morning and everything. No horns, no...`,
    content: `Hello, everyone! I'm [Your name], [Bride's name]'s stepmum. And before anyone checks, no, I'm not the wicked kind. I checked the mirror this morning and everything. No horns, no poisoned apples, just a woman in a very expensive hat trying not to ruin her mascara.

I came into [Bride's name]'s life when she was twelve, which, if any of you have met a twelve-year-old girl, you'll know is basically entering a negotiation you're not qualified for. She had opinions about everything. My cooking, my taste in music, the way I loaded the dishwasher. We had some spirited debates in those early years. I believe the technical term is "character building."

But here's the thing about [Bride's name]. Underneath that strong exterior is someone with the biggest heart you'll ever find. She wrote me a card on my first Mother's Day in the family. It just said, "Thanks for trying. You're not bad." I've kept it in my bedside drawer ever since.

Over the years, our relationship has grown into something I treasure deeply. She calls me for recipe advice. She sends me pictures of her cat doing ridiculous things. She even lets me give unsolicited opinions on her outfits now, though she ignores most of them.

[Groom's name], you're marrying someone truly special. Be patient, be kind, and for the love of all things, learn how she likes her tea.

To [Bride's name] and [Groom's name], may your love story be even better than any fairy tale. And far less wicked. Cheers!`,
    authorName: 'Caroline Marsh',
    weddingRole: 'Stepmother of the Bride',
    tags: ['funny', 'stepmother', 'blended family'],
  },
  {
    slug: 'stepmother-bride-heartfelt-2',
    title: `The privilege of watching you bloom`,
    category: 'stepmother-of-bride-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 1.8,
    wordCount: 236,
    excerpt: `Good evening, everyone. I'm [Your name], and I'm [Bride's name]'s stepmother. I've thought carefully about what to say today, because some things matter too much to get wrong. Being...`,
    content: `Good evening, everyone. I'm [Your name], and I'm [Bride's name]'s stepmother. I've thought carefully about what to say today, because some things matter too much to get wrong.

Being a stepparent is a quiet role. You don't always get the obvious moments. But you get the in-between ones, and those are the moments that have meant the most to me.

I remember the first time [Bride's name] fell asleep on my shoulder during a long car journey. She was thirteen, and it was the first time she'd let her guard down around me completely. I remember sitting perfectly still for forty-five minutes, terrified of moving in case I broke the spell.

I remember her calling me from university at midnight, not because anything was wrong, but because she wanted someone to talk to. She chose me. I'll never forget that.

[Bride's name], you've taught me that love doesn't follow a rulebook. It grows in its own time, in its own way, and when it finally arrives, it's all the more precious for the journey.

Watching you with [Groom's name] fills me with such joy. You've found someone who matches your warmth, your determination, and your wonderful stubbornness. Together, you are extraordinary.

[Groom's name], welcome to this family. We're complicated, but we're yours now.

Please raise your glasses to two people who remind us all what love looks like when it's real. To [Bride's name] and [Groom's name]!`,
    authorName: 'Helen Bradshaw',
    weddingRole: 'Stepmother of the Bride',
    tags: ['heartfelt', 'stepmother', 'emotional'],
  },
  {
    slug: 'stepmother-bride-balanced-3',
    title: `A bonus mum's wedding day toast`,
    category: 'stepmother-of-bride-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.7,
    wordCount: 221,
    excerpt: `Hi, everyone. I'm [Your name], also known as [Bride's name]'s bonus mum, a title she gave me when she was sixteen and I've been clinging to ever since. It's better than "stepmum"...`,
    content: `Hi, everyone. I'm [Your name], also known as [Bride's name]'s bonus mum, a title she gave me when she was sixteen and I've been clinging to ever since. It's better than "stepmum," and it comes with fewer fairy tale associations.

Joining a family that already has its own rhythms and inside jokes is a bit like starting a book at chapter five. You have to catch up fast. But [Bride's name] was patient with me, most of the time, and gradually I learned the language of this family.

I learned that [Bride's name] can't function before her first cup of tea. I learned that she cries at every nature documentary. I learned that when she says "I'm fine," she absolutely is not fine and you should bring chocolate immediately.

These details might seem small, but they're the building blocks of knowing someone. And knowing [Bride's name], truly knowing her, is one of the great privileges of my life.

[Groom's name], you've clearly done your homework too. You know when to make her laugh, when to give her space, and when to just sit with her quietly. That tells me everything I need to know about you.

To [Bride's name] and [Groom's name], may your marriage be full of small, wonderful moments that add up to an extraordinary life together. Cheers!`,
    authorName: 'Fiona Prescott',
    weddingRole: 'Stepmother of the Bride',
    tags: ['balanced', 'stepmother', 'family'],
  },

  // ── Stepfather of the Groom Speech (Family) ───────────────

  {
    slug: 'stepfather-groom-funny-1',
    title: `The stepdad survival guide`,
    category: 'stepfather-of-groom-speech',
    tone: 'funny' as const,
    durationMinutes: 2.0,
    wordCount: 264,
    excerpt: `Evening, everyone. I'm [Your name], [Groom's name]'s stepdad. I've had the job for about fifteen years now, and I have to say, the pay is terrible, but the perks are alright. Free...`,
    content: `Evening, everyone. I'm [Your name], [Groom's name]'s stepdad. I've had the job for about fifteen years now, and I have to say, the pay is terrible, but the perks are alright. Free hugs at Christmas, someone who actually laughs at my jokes, and now, a wedding with an open bar. I'd say I'm doing well.

When I first met [Groom's name], he was nine years old, and he greeted me by asking if I could do a backflip. I couldn't. I still can't. I think that set realistic expectations for our relationship early on.

We bonded over football, mainly because we both supported losing teams and needed someone to share the misery with. Saturday afternoons were our thing, yelling at the telly, eating too many crisps, and pretending we knew better than the manager. We didn't. We never did.

As [Groom's name] grew up, I watched him become a man I'm incredibly proud of. He's hardworking, thoughtful, and he makes a cracking cup of tea, which in this family is basically a qualification.

[Bride's name], I've been watching the two of you closely, as stepdads do, and I can see how happy you make him. He smiles more. He stands a bit taller. And he's finally stopped leaving his washing on the floor, so clearly you have powers I never had.

Please raise your glasses to [Bride's name] and [Groom's name]. May your marriage be long, your arguments be short, and your football teams be slightly less disappointing than ours. Cheers!`,
    authorName: 'Kevin Doyle',
    weddingRole: 'Stepfather of the Groom',
    tags: ['funny', 'stepfather', 'family'],
  },
  {
    slug: 'stepfather-groom-heartfelt-2',
    title: `The son I chose`,
    category: 'stepfather-of-groom-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 1.9,
    wordCount: 245,
    excerpt: `Good evening, everyone. I'm [Your name], and I'm [Groom's name]'s stepfather. I've been part of his life for seventeen years now, and standing here today, I'm struck by how quickly...`,
    content: `Good evening, everyone. I'm [Your name], and I'm [Groom's name]'s stepfather. I've been part of his life for seventeen years now, and standing here today, I'm struck by how quickly time has passed.

I remember the day I moved in with his mother. [Groom's name] was seven. He left a drawing on my pillow that night. It was a stick figure family, and I was in it. Slightly lopsided, with enormous feet, but I was in it. I still have that drawing.

Being a stepparent means earning your place, and [Groom's name] let me earn it at my own pace. He never made me feel like an outsider. Even as a teenager, when most kids want nothing to do with any parent, he'd still sit with me after dinner and talk about his day.

He taught me that being a father isn't about DNA. It's about presence. It's about consistency. It's about being the person who shows up, again and again, until showing up becomes second nature.

[Bride's name], you've brought so much light into his world. Watching you two together, I see a love that's patient, generous, and deeply kind. You complement each other beautifully, and I couldn't be happier to welcome you into our family.

[Groom's name], I may not have been there for your first steps, but I'll be here for every step that follows.

To [Bride's name] and [Groom's name], with all my heart. To your future!`,
    authorName: 'Paul Edmonds',
    weddingRole: 'Stepfather of the Groom',
    tags: ['heartfelt', 'stepfather', 'emotional'],
  },
  {
    slug: 'stepfather-groom-balanced-3',
    title: `From stepdad to proud dad`,
    category: 'stepfather-of-groom-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.8,
    wordCount: 231,
    excerpt: `Hello, everyone. I'm [Your name], [Groom's name]'s stepdad, though honestly, I dropped the "step" in my head years ago. He's just my son, full stop. And today, watching him marry...`,
    content: `Hello, everyone. I'm [Your name], [Groom's name]'s stepdad, though honestly, I dropped the "step" in my head years ago. He's just my son, full stop. And today, watching him marry [Bride's name], I couldn't be more proud.

Our relationship didn't happen overnight. There was a period, maybe a year or so, where we circled each other cautiously. He'd test the boundaries. I'd try too hard. His mum would referee. It was messy, honest, and completely worth it.

The breakthrough came when we built a go-kart together. It was his idea, something from a YouTube video that looked easy and absolutely wasn't. We spent three weekends in the garage, arguing about wheel alignment and eating biscuits. The go-kart was terrible. It pulled hard to the left and made a noise like a dying cat. But we built it together, and after that, something just clicked.

[Groom's name] has grown into a man of real substance. He's loyal, he works hard, and he has this quiet determination that I've always admired. When he sets his mind to something, it happens.

[Bride's name], you're that same kind of person. Determined, warm, and impossibly good at making [Groom's name] smile. Together, you're going to build something wonderful, and it will be far better than that go-kart.

To [Bride's name] and [Groom's name], may your life together pull slightly less to the left than our first project. Cheers!`,
    authorName: 'Brian Collier',
    weddingRole: 'Stepfather of the Groom',
    tags: ['balanced', 'stepfather', 'blended family'],
  },

  // ── Stepmother of the Groom Speech (Family) ───────────────

  {
    slug: 'stepmother-groom-funny-1',
    title: `The woman behind the groom's ironing`,
    category: 'stepmother-of-groom-speech',
    tone: 'funny' as const,
    durationMinutes: 1.9,
    wordCount: 247,
    excerpt: `Good evening, everyone! I'm [Your name], [Groom's name]'s stepmum. Now, when I married his father eight years ago, I inherited quite the package deal: a wonderful husband, a cat...`,
    content: `Good evening, everyone! I'm [Your name], [Groom's name]'s stepmum. Now, when I married his father eight years ago, I inherited quite the package deal: a wonderful husband, a cat with an attitude problem, and a teenage boy whose bedroom looked like a crime scene.

[Groom's name] and I got off to a slightly rocky start, mainly because I had the audacity to suggest that perhaps socks shouldn't live on the kitchen counter. Apparently, that was a controversial opinion. But once we established some ground rules, namely that I would not throw away his things and he would not eat my emergency chocolate, we found our rhythm.

What I discovered pretty quickly was that underneath the mess, [Groom's name] had a heart of gold. He'd carry my shopping without being asked. He'd make me tea when I'd had a bad day, always too strong, but always with love. He once surprised me with flowers on my birthday when even his father had forgotten. I'll never let his dad live that down.

[Bride's name], you're getting a man who is thoughtful in the most unexpected ways. He'll forget anniversaries but remember the name of your childhood pet. He'll burn dinner but set the table with candles. That's just how he's wired.

To [Bride's name] and [Groom's name], may your home be full of love, may your socks always make it to the drawer, and may your chocolate stash remain untouched. Cheers!`,
    authorName: 'Angela Whitfield',
    weddingRole: 'Stepmother of the Groom',
    tags: ['funny', 'stepmother', 'family'],
  },
  {
    slug: 'stepmother-groom-heartfelt-2',
    title: `A stepmother's love letter to the groom`,
    category: 'stepmother-of-groom-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 1.8,
    wordCount: 238,
    excerpt: `Hello, everyone. I'm [Your name], and I'm so grateful to be standing here today as [Groom's name]'s stepmother. That word, "stepmother," never quite captured what we are to each...`,
    content: `Hello, everyone. I'm [Your name], and I'm so grateful to be standing here today as [Groom's name]'s stepmother. That word, "stepmother," never quite captured what we are to each other. We're family, chosen and built with care.

I came into [Groom's name]'s life when he was eleven. He was cautious, which any child would be. He watched me carefully for months, trying to decide if I was safe. The day he finally hugged me, properly hugged me, I went to the bathroom and cried for ten minutes. His father thought I'd hurt myself. I had to explain they were happy tears.

Over the years, I've had the privilege of watching [Groom's name] become the man standing before you today. I've seen him work through challenges with quiet grace. I've seen him care for others before himself. I've seen him learn to be vulnerable, which takes more courage than most people realise.

[Bride's name], you and I share something wonderful. We both love [Groom's name] deeply, and we both know how lucky we are. You bring out a lightness in him that makes my heart sing. When he talks about you, his whole face changes. It's like watching someone come home.

To [Groom's name], you are loved more than you will ever know. And to [Bride's name], thank you for giving him the happiness he so deserves.

Please raise your glasses. To [Bride's name] and [Groom's name]!`,
    authorName: 'Patricia Keane',
    weddingRole: 'Stepmother of the Groom',
    tags: ['heartfelt', 'stepmother', 'emotional'],
  },
  {
    slug: 'stepmother-groom-balanced-3',
    title: `Watching him find his person`,
    category: 'stepmother-of-groom-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.7,
    wordCount: 224,
    excerpt: `Hi, everyone. I'm [Your name], [Groom's name]'s stepmum, and I have to say, standing here today feels surreal. It feels like yesterday he was a lanky teenager raiding my fridge at...`,
    content: `Hi, everyone. I'm [Your name], [Groom's name]'s stepmum, and I have to say, standing here today feels surreal. It feels like yesterday he was a lanky teenager raiding my fridge at midnight and now here he is, looking like a proper grown-up in a suit.

Our relationship was built on small things. Shared jokes at the dinner table. Me helping him practice his driving, which took years off my life. Him teaching me how to use social media, which he still mocks me for getting wrong.

One memory stands out. A few years ago, [Groom's name] was going through a really tough time at work. He didn't want to worry his father, so he came to me. We sat in the garden for two hours, talking it through. He didn't want advice, he just needed someone to listen. That evening changed something between us. It became real.

[Bride's name], from the moment [Groom's name] brought you home, you fit. You laughed at our terrible family jokes. You helped with the washing up without being asked. You made [Groom's name] visibly, unmistakably happy.

You two have something rare, a relationship built on genuine friendship, not just romance. That's what lasts.

To [Bride's name] and [Groom's name], may your life together be full of garden conversations, shared laughter, and midnight fridge raids. Cheers!`,
    authorName: 'Linda Byrne',
    weddingRole: 'Stepmother of the Groom',
    tags: ['balanced', 'stepmother', 'family'],
  },

  // ── Twin Sibling Speech (Family) ──────────────────────────

  {
    slug: 'twin-sibling-funny-1',
    title: `My other half is getting married`,
    category: 'twin-sibling-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 278,
    excerpt: `Hi, everyone! I'm [Your name], and for those who can't tell us apart, I'm the better-looking twin. I've been waiting my whole life to use that joke in front of an audience, so thank...`,
    content: `Hi, everyone! I'm [Your name], and for those who can't tell us apart, I'm the better-looking twin. I've been waiting my whole life to use that joke in front of an audience, so thank you all for being here.

Growing up as a twin is a unique experience. You have a built-in best friend, a permanent alibi, and someone to blame when things go wrong. [Bride's name] and I once convinced our primary school teacher that we'd swapped places for an entire day. We hadn't. We just wanted to see if she'd believe it. She did. Sorry, Mrs Patterson.

The downside of being a twin is that you share everything. Birthdays, clothes, friends, and for one very unfortunate year, a bedroom with only one working lamp. That year tested our bond more than any other challenge before or since.

But here's the truth beneath the jokes. [Bride's name] isn't just my twin, she's the person who knows me better than anyone on the planet. She can tell what I'm thinking from across a room. She finishes my sentences, usually wrong, but she tries.

[Groom's name], I want you to know that you're not just marrying my sibling. You're joining a package deal. I will be at your house uninvited. I will eat your food. I will have opinions about your furniture. Consider this your formal warning.

But in all seriousness, seeing [Bride's name] this happy makes me happier than I can express. You're perfect for each other.

To [Bride's name] and [Groom's name], and to the twin who somehow got married first. Cheers!`,
    authorName: 'Megan Farrell',
    weddingRole: 'Twin Sibling',
    tags: ['funny', 'twin', 'sibling'],
  },
  {
    slug: 'twin-sibling-heartfelt-2',
    title: `Half of my heart walks beside you`,
    category: 'twin-sibling-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.0,
    wordCount: 259,
    excerpt: `Good evening, everyone. I'm [Your name], and [Groom's name] is my twin brother. We've shared every milestone together since the very beginning, literally, since we shared a womb...`,
    content: `Good evening, everyone. I'm [Your name], and [Groom's name] is my twin brother. We've shared every milestone together since the very beginning, literally, since we shared a womb. Today feels different, though. Today, [Groom's name] starts a new chapter that's entirely his own, and I couldn't be more proud.

People always ask what it's like to be a twin. It's hard to explain to someone who isn't one. It's like having a mirror that shows you not just who you are, but who you could be. [Groom's name] has always been the braver one, the one who jumps first and figures it out on the way down. I've spent my life watching him and thinking, if he can do it, maybe I can too.

We've been through everything together. First day of school, holding hands at the gate. Losing our granddad, sitting side by side on the garden wall, saying nothing. Moving to different cities, which was the hardest thing either of us had ever done.

[Bride's name], when you came into [Groom's name]'s life, something settled in him. He became calmer, more present. It was like watching the last piece of a puzzle click into place. You didn't replace what we have. You added to it in a way I'll always be grateful for.

[Groom's name], you've been my partner in everything. And now you have a new partner, one who loves you just as fiercely as I do.

To [Bride's name] and [Groom's name]. My heart is so full. To your beautiful future!`,
    authorName: 'Callum Reid',
    weddingRole: 'Twin Sibling',
    tags: ['heartfelt', 'twin', 'emotional'],
  },
  {
    slug: 'twin-sibling-balanced-3',
    title: `The twin who gives the toast`,
    category: 'twin-sibling-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.9,
    wordCount: 242,
    excerpt: `Hello, everyone. I'm [Your name], and [Bride's name] is my twin sister. For those keeping score, I arrived four minutes before her, which means I'm technically the older sibling. I...`,
    content: `Hello, everyone. I'm [Your name], and [Bride's name] is my twin sister. For those keeping score, I arrived four minutes before her, which means I'm technically the older sibling. I bring this up at every available opportunity and she hates it. So naturally, I'm bringing it up at her wedding.

Being [Bride's name]'s twin means I've had a front-row seat to her entire life. I've seen her triumphs and her struggles. I've seen her at her best, like when she aced her final exams, and at her worst, like when she tried to cut her own fringe at age twelve. We don't talk about the fringe.

But beyond the jokes, [Bride's name] is the most loyal, generous, and fiercely loving person I know. She defends the people she cares about without hesitation. She gives more than she takes. She makes the world better simply by being in it.

[Groom's name], I've watched you carefully over the past few years, as any twin would. And I've seen how you treat my sister. You listen to her. You make her laugh until she cries. You challenge her in ways that help her grow. That's not easy to find.

What you two have is special, and I say that as someone who shares DNA with one of you and has very high standards for the other.

To [Bride's name] and [Groom's name], may your love be as unbreakable as the twin bond. And may I always be welcome for Sunday lunch. Cheers!`,
    authorName: 'Laura Keegan',
    weddingRole: 'Twin Sibling',
    tags: ['balanced', 'twin', 'sibling'],
  },

  // ── Niece Speech (Family) ─────────────────────────────────

  {
    slug: 'niece-speech-funny-1',
    title: `The niece who knows all the secrets`,
    category: 'niece-speech',
    tone: 'funny' as const,
    durationMinutes: 1.8,
    wordCount: 230,
    excerpt: `Hi, everyone! I'm [Your name], and I'm [Bride's name]'s niece. Now, when [Bride's name] asked me to say a few words, my first thought was, "How much are you willing to pay me not to...`,
    content: `Hi, everyone! I'm [Your name], and I'm [Bride's name]'s niece. Now, when [Bride's name] asked me to say a few words, my first thought was, "How much are you willing to pay me not to share certain stories?" We negotiated. I got a very nice pair of earrings, so some secrets are safe. Others, not so much.

Growing up, [Bride's name] was the cool aunt. She was the one who let me stay up past bedtime. She was the one who snuck me sweets when my parents weren't looking. She taught me how to do my makeup when I was fourteen, and to be fair, we both looked a bit ridiculous.

What I love most about [Bride's name] is that she treats me like an equal. She asks my opinion on things and actually listens. When I was going through a rough patch at school, she took me out for pancakes and just let me talk. No lectures, no judgment, just pancakes and honesty. That's her superpower.

[Groom's name], I approved of you the moment you made [Bride's name] do her proper laugh, the one where she throws her head back and sounds like a seal. If you can make her laugh like that, you're in.

To my favourite aunt and her wonderful new husband. May your life together be full of love, laughter, and very late bedtimes. Cheers!`,
    authorName: 'Ella Chambers',
    weddingRole: 'Niece',
    tags: ['funny', 'niece', 'family'],
  },
  {
    slug: 'niece-speech-heartfelt-2',
    title: `To the aunt who shaped my world`,
    category: 'niece-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 1.9,
    wordCount: 246,
    excerpt: `Good evening, everyone. I'm [Your name], and [Groom's name] is my uncle. I know speeches like this usually come from parents or best friends, but [Groom's name] isn't just my uncle...`,
    content: `Good evening, everyone. I'm [Your name], and [Groom's name] is my uncle. I know speeches like this usually come from parents or best friends, but [Groom's name] isn't just my uncle, he's one of the most important people in my life.

When I was eight, my parents went through a difficult time, and [Groom's name] stepped in without being asked. He picked me up from school every Thursday. He helped me with homework. He took me to the park and let me beat him at football, though looking back, I'm not sure he was actually letting me win. He might just be that bad.

What [Groom's name] gave me during that time was stability. He was the constant in a world that felt uncertain, and I've never forgotten it.

As I got older, our relationship evolved. He became the person I'd call for advice. He helped me move into my first flat, which took three trips because neither of us can estimate how much stuff fits in a car.

[Bride's name], you are exactly the kind of person my uncle deserves. You're kind, you're patient, and you make him genuinely happy. I've seen the way his face lights up when he talks about you. It's the same way he used to look when Mum brought out dessert, which, in our family, is the highest compliment.

To [Bride's name] and [Groom's name], thank you for showing me what love looks like. I'm so proud of you both. To the happy couple!`,
    authorName: 'Amara Osei',
    weddingRole: 'Niece',
    tags: ['heartfelt', 'niece', 'emotional'],
  },
  {
    slug: 'niece-speech-balanced-3',
    title: `A niece's toast to a wonderful couple`,
    category: 'niece-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.6,
    wordCount: 213,
    excerpt: `Hello, everyone. I'm [Your name], and I'm [Bride's name]'s niece. I know I'm one of the younger speakers today, so I'll keep it short, but I couldn't let this day pass without...`,
    content: `Hello, everyone. I'm [Your name], and I'm [Bride's name]'s niece. I know I'm one of the younger speakers today, so I'll keep it short, but I couldn't let this day pass without saying something.

[Bride's name] has been a huge part of my life for as long as I can remember. She babysat me when I was small, which mostly involved letting me cover her in stickers and calling it "fashion." She came to every school concert, even the ones that were, honestly, painful to listen to. She's been at every milestone, camera in hand, slightly emotional, always supportive.

What makes [Bride's name] special is her ability to make you feel like the most important person in the room. She has this way of giving you her full attention, as if whatever you're saying is the most fascinating thing she's heard all day. Even when I was five and talking about my imaginary horse for forty-five minutes.

[Groom's name], you've joined a family that loves hard and celebrates loudly. I hope you're ready for that. And I want you to know that anyone who makes my aunt this happy has my full seal of approval.

To [Bride's name] and [Groom's name], may your marriage be as warm and full of love as the family that surrounds you today. Cheers!`,
    authorName: 'Chloe Nguyen',
    weddingRole: 'Niece',
    tags: ['balanced', 'niece', 'family'],
  },
// ── Nephew Speeches (nephew-speech) ──────────────────────────

  {
    slug: 'funny-nephew-wedding-toast-1',
    title: `The nephew who knows too much`,
    category: 'nephew-speech',
    tone: 'funny',
    durationMinutes: 1.8,
    wordCount: 237,
    excerpt: `Good evening everyone. For those of you who don't know me, I'm [Your name], and I have the slightly terrifying honour of being [Bride's name]'s nephew. Now, when Auntie asked me to...`,
    content: `Good evening everyone. For those of you who don't know me, I'm [Your name], and I have the slightly terrifying honour of being [Bride's name]'s nephew. Now, when Auntie asked me to give a speech, my first thought was, "Why me?" My second thought was, "Oh no, she trusts me way too much."

Growing up, Auntie [Bride's name] was the cool aunt. She was the one who let me stay up past bedtime, who snuck me extra dessert when Mum wasn't looking, and who once convinced me that if I ate enough carrots, I'd be able to see through walls. I believed that until I was eleven. Thanks for that.

But here's the thing about my aunt - she has this incredible ability to make everyone around her feel like the most important person in the room. I've watched her do it my entire life. And then [Groom's name] came along, and I got to watch someone do the same thing back to her.

I remember the first time she brought [Groom's name] to a family barbecue. My dad pulled me aside and said, "That one's a keeper." And my dad doesn't say that about anyone. He didn't even say it about his own lawnmower, and he really loves that lawnmower.

[Groom's name], welcome to the family officially. You already fit right in, which is both a compliment and a warning.

Please raise your glasses to [Bride's name] and [Groom's name]. To love, family, and never trusting your aunt's nutritional advice. Cheers!`,
    authorName: 'Jake Morrison',
    weddingRole: 'Nephew',
    tags: ['funny', 'nephew', 'family'],
  },
  {
    slug: 'heartfelt-nephew-tribute-1',
    title: `A nephew's grateful heart`,
    category: 'nephew-speech',
    tone: 'heartfelt',
    durationMinutes: 1.9,
    wordCount: 247,
    excerpt: `Hi everyone. My name is [Your name], and [Groom's name] is my uncle. I want to start by saying that standing up here today means more to me than I think anyone in this room realizes...`,
    content: `Hi everyone. My name is [Your name], and [Groom's name] is my uncle. I want to start by saying that standing up here today means more to me than I think anyone in this room realizes.

When I was fourteen, my parents went through a rough patch. I won't get into details, but it was a hard year. Uncle [Groom's name] showed up one Saturday morning with two fishing rods and a cooler full of sandwiches. He didn't try to fix anything or give me advice. He just sat next to me on a riverbank for six hours and let me be quiet. That's the kind of man he is. He shows up.

And [Bride's name], I want you to know that from the moment you came into his life, I saw something change in him. He laughed more. He called more. He started talking about the future like it was something he was excited about, not just something that was going to happen to him.

You brought that out in him, and our whole family is grateful for it.

My grandmother used to say that the best thing you can wish for someone is a partner who makes them more of who they already are. Not someone who changes them, but someone who helps them grow into the version of themselves they were always meant to be. That's what you two do for each other.

Uncle [Groom's name], [Bride's name], thank you for letting me be part of today. I love you both. Please join me in toasting the happy couple.`,
    authorName: 'Daniel Cooper',
    weddingRole: 'Nephew',
    tags: ['heartfelt', 'nephew', 'family', 'emotional'],
  },
  {
    slug: 'balanced-nephew-wedding-speech-1',
    title: `From the kid who watched it all unfold`,
    category: 'nephew-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 225,
    excerpt: `Hello everyone. I'm [Your name], proud nephew of [Bride's name]. A few people have asked me how I ended up giving a speech today, and honestly, I think it's because I'm the only one...`,
    content: `Hello everyone. I'm [Your name], proud nephew of [Bride's name]. A few people have asked me how I ended up giving a speech today, and honestly, I think it's because I'm the only one in the family who can get through a toast without crying. We'll see how that goes.

Auntie [Bride's name] has always been the one I'd call when I needed someone to be straight with me. When I was sixteen and wanted to drop out of school to start a podcast, she didn't laugh. She sat me down, asked me three very pointed questions about my business plan, and by the end of the conversation I'd enrolled in an economics class. That's her superpower - she takes you seriously while gently steering you away from disaster.

[Groom's name], I should warn you about a few things. She will reorganise your kitchen within the first month. She will always be right about the weather. And she will absolutely destroy you at Scrabble. Accept these truths and you'll be fine.

But in all seriousness, watching you two together has taught me something about what real partnership looks like. It's not grand gestures every day. It's the way you finish each other's stories, the way you check in without being asked, the little things that add up to something unshakeable.

To [Bride's name] and [Groom's name], may your life together be full of laughter, patience, and very competitive board games. Cheers!`,
    authorName: 'Ryan Fletcher',
    weddingRole: 'Nephew',
    tags: ['balanced', 'nephew', 'family'],
  },

  // ── Groom to Bride Speeches (groom-to-bride-speech) ──────────

  {
    slug: 'funny-groom-to-bride-love-letter-1',
    title: `A groom's love letter with a side of honesty`,
    category: 'groom-to-bride-speech',
    tone: 'funny',
    durationMinutes: 2.0,
    wordCount: 264,
    excerpt: `[Bride's name], I have been trying to write this speech for about four months. I've started it on napkins, in the notes app on my phone, and once on the back of a parking ticket. So...`,
    content: `[Bride's name], I have been trying to write this speech for about four months. I've started it on napkins, in the notes app on my phone, and once on the back of a parking ticket. So if this doesn't come out perfectly, just know that the effort was there, even if the execution is a bit wobbly.

Here's what I know about you. You are the only person I've ever met who can burn toast and still somehow make breakfast feel like a five-star experience. You sing in the shower like nobody's listening, which is a good thing because I am always listening and it is genuinely terrible. You cry at every dog video on the internet. Every single one.

But you're also the person who drove three hours in the rain to pick up my mum when her car broke down, without telling anyone. You're the person who sat with me on the kitchen floor at 2am when I didn't get that promotion, and instead of saying "it'll be fine," you said, "that's rubbish and I'm sorry." That meant more to me than any pep talk ever could.

I didn't know what I was looking for before I met you. I just knew something was missing. And then you walked into that pub quiz with the wrong answer to the capital of Australia and somehow everything clicked.

You make me a better man. Not in some dramatic, movie-speech kind of way, but in the small, daily, showing-up kind of way.

I love you, [Bride's name]. I am so proud to call you my wife. Cheers, everyone.`,
    authorName: 'Tom Bradley',
    weddingRole: 'Groom',
    tags: ['funny', 'groom to bride', 'romantic', 'personal'],
  },
  {
    slug: 'heartfelt-groom-to-bride-devotion-1',
    title: `Every version of us`,
    category: 'groom-to-bride-speech',
    tone: 'heartfelt',
    durationMinutes: 2.1,
    wordCount: 268,
    excerpt: `[Bride's name], I want to talk to you for a moment, just you, even though there are a hundred people watching. I've been thinking about all the versions of us that have existed since...`,
    content: `[Bride's name], I want to talk to you for a moment, just you, even though there are a hundred people watching. I've been thinking about all the versions of us that have existed since we met.

There's the version of us on that first date, when I was so nervous I knocked over a glass of water and you pretended not to notice. There's the version that survived your year abroad, when we stayed up until 3am on video calls just to fall asleep together across time zones. There's the version that moved into that tiny flat with the broken boiler and somehow made it feel like home.

Every version of us has taught me something. The early days taught me what it feels like to be chosen. The hard stretches taught me that love isn't a feeling you fall into, it's a decision you make, over and over, especially on the days when it isn't easy. And the quiet, ordinary moments, the ones nobody photographs, taught me that the life I want is simply the one where you're next to me.

I look at you today and I see the person who has held me together in ways I couldn't have managed on my own. You've never asked me to be anyone other than who I am, and you've loved me through every version of myself, even the ones I wasn't particularly proud of.

I don't have a grand declaration. I just have this: I will spend the rest of my life trying to be worthy of the way you love me.

I love you, [Bride's name]. More than I'll ever find the right words for.`,
    authorName: 'Marcus Hale',
    weddingRole: 'Groom',
    tags: ['heartfelt', 'groom to bride', 'romantic', 'emotional'],
  },
  {
    slug: 'balanced-groom-to-bride-toast-1',
    title: `The best decision I ever made`,
    category: 'groom-to-bride-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 231,
    excerpt: `[Bride's name], my mum once told me that when you find the right person, you stop trying to impress them and start trying to deserve them. I didn't really understand what she meant...`,
    content: `[Bride's name], my mum once told me that when you find the right person, you stop trying to impress them and start trying to deserve them. I didn't really understand what she meant until you.

When we first started dating, I was definitely still in the "trying to impress" phase. I cooked you a meal that was so bad you quietly ordered a pizza while I was washing up. I tried to take you hiking and got us completely lost. I once wore a blazer to the cinema because I thought it would make me look sophisticated. You told me, very kindly, that I looked like an estate agent.

But somewhere along the way, I stopped performing and started just being myself. And you stayed. Not because I was impressive, but because you saw something worth sticking around for. That's a gift I will never take for granted.

You challenge me without criticising me. You support me without smothering me. You laugh at my jokes even when they're terrible, which is generous because most of them are.

I want you to know that I see you. I see how hard you work, how deeply you care, how much of yourself you pour into the people you love. You do it so naturally that I think sometimes people forget to tell you how remarkable it is.

So here I am, telling you. You are remarkable, [Bride's name]. And marrying you is the best decision I've ever made.

To my wife. I love you.`,
    authorName: 'Chris Davenport',
    weddingRole: 'Groom',
    tags: ['balanced', 'groom to bride', 'romantic'],
  },

  // ── Bride to Groom Speeches (bride-to-groom-speech) ──────────

  {
    slug: 'funny-bride-to-groom-speech-1',
    title: `How I knew he was the one (sort of)`,
    category: 'bride-to-groom-speech',
    tone: 'funny',
    durationMinutes: 1.9,
    wordCount: 243,
    excerpt: `[Groom's name], when I told my friends I was going to give you a speech at our wedding, they said, "Don't roast him too hard." I make no promises. Let me take you all back to our...`,
    content: `[Groom's name], when I told my friends I was going to give you a speech at our wedding, they said, "Don't roast him too hard." I make no promises.

Let me take you all back to our third date. [Groom's name] took me to a restaurant he described as "casual but classy." It was a Nando's. And you know what? I respected the honesty. He ordered a whole chicken, looked me dead in the eye, and said, "I hope you're not one of those people who just gets a salad." Reader, I was not.

That's the thing about [Groom's name]. He is unapologetically himself. He has strong opinions about sandwich bread, he thinks parallel parking is a competitive sport, and he once spent forty-five minutes explaining the offside rule to my mother, who still does not understand it and never will.

But beneath all the nonsense is the kindest, most dependable person I know. He's the man who quietly fixes things before I even notice they're broken. Who remembers that I hate coriander, that my favourite film is the one I pretend is too embarrassing to admit, and that when I say "I'm fine," I am absolutely not fine.

[Groom's name], you are my favourite person to do nothing with. You're my favourite person to argue with about what to watch on telly. You're my favourite person, full stop.

I can't believe I get to be married to you. Actually, I can, because I'm delightful. But still.

I love you. To my husband, everyone!`,
    authorName: 'Sophie Warren',
    weddingRole: 'Bride',
    tags: ['funny', 'bride to groom', 'romantic', 'personal'],
  },
  {
    slug: 'heartfelt-bride-to-groom-devotion-1',
    title: `You were always the answer`,
    category: 'bride-to-groom-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 256,
    excerpt: `[Groom's name], I have written and rewritten this speech so many times because nothing I put on paper seems big enough for what I feel about you. But I'm going to try, because you...`,
    content: `[Groom's name], I have written and rewritten this speech so many times because nothing I put on paper seems big enough for what I feel about you. But I'm going to try, because you deserve to hear it out loud, in front of all these people who love us.

Before I met you, I was good at being alone. I had my routines, my independence, my carefully arranged life. I didn't think I needed someone else to make it better. And then you showed up, not to fix anything, not to fill a gap, but to walk beside me. You didn't try to change my world. You just stepped into it and suddenly everything had more colour.

I think about the night you stayed up with me when my dad was in the hospital. You didn't say much. You just held my hand and made tea and let me fall apart without trying to put me back together before I was ready. That's when I knew.

You love me in a way that feels safe without being small. You push me to be braver than I think I am. You listen, really listen, even when I'm talking about something that doesn't interest you at all, which, based on the glazed look you get, includes most of my work stories.

I promise to love you honestly. To fight fair. To always choose us, even when it's hard. To build a life with you that we're both proud of.

Thank you for choosing me, [Groom's name]. I'd choose you every time, in every lifetime. I love you.`,
    authorName: 'Hannah Prescott',
    weddingRole: 'Bride',
    tags: ['heartfelt', 'bride to groom', 'emotional', 'romantic'],
  },
  {
    slug: 'balanced-bride-to-groom-speech-1',
    title: `My partner in everything`,
    category: 'bride-to-groom-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 222,
    excerpt: `[Groom's name], I want to tell everyone something about you that you'd never tell them yourself. You are, without exaggeration, the most thoughtful person I have ever met. And I don't...`,
    content: `[Groom's name], I want to tell everyone something about you that you'd never tell them yourself. You are, without exaggeration, the most thoughtful person I have ever met. And I don't mean grand-gesture thoughtful. I mean the kind that remembers which side of the bed I prefer in hotels, that brings home my favourite biscuits without being asked, that texts my mum on her birthday before I've even woken up.

When we first met at that friend's housewarming, I thought you were quiet. It took me about three weeks to realise you weren't quiet, you were just listening. And once you started talking, I never wanted you to stop.

We've built something really good together. Not perfect, because we both know you load the dishwasher like a man who has never seen a dishwasher before. But good. Solid. The kind of thing I trust completely.

My nan always said a good marriage is two people who keep choosing each other, even on Tuesdays. Especially on Tuesdays. The glamourless, ordinary, nothing-special days. That's where real love lives.

I choose you on Tuesdays, [Groom's name]. I choose you on the hard days and the boring days and the brilliant ones too. I choose you when you leave your socks on the floor and when you make me laugh until I can't breathe.

You are my home. And I am so happy to be yours.

To us. I love you.`,
    authorName: 'Lily Ashworth',
    weddingRole: 'Bride',
    tags: ['balanced', 'bride to groom', 'romantic'],
  },

  // ── Childhood Friend Speeches (childhood-friend-speech) ──────

  {
    slug: 'funny-childhood-friend-toast-1',
    title: `From the kid next door`,
    category: 'childhood-friend-speech',
    tone: 'funny',
    durationMinutes: 1.8,
    wordCount: 238,
    excerpt: `Good evening everyone. I'm [Your name], and I've known [Groom's name] since we were five years old. That's twenty-three years of friendship, which, for those keeping score, is longer...`,
    content: `Good evening everyone. I'm [Your name], and I've known [Groom's name] since we were five years old. That's twenty-three years of friendship, which, for those keeping score, is longer than most Premier League managers last at their clubs.

We grew up on the same street, and from day one, [Groom's name] was trouble. Not bad trouble, just deeply silly trouble. He once convinced me that if we dug deep enough in his back garden, we'd reach Australia. We got about two feet down before his dad came out and made us fill it back in. [Groom's name] was furious. He said we were "so close."

In school, he was the kid who could talk his way out of anything. Forgot his homework? Charmed the teacher. Broke a window playing football? Blamed the wind. That skill hasn't faded, by the way. [Bride's name], you've been warned.

But here's what people might not know about [Groom's name]. For all the bravado, he's the first person to show up when things go wrong. When my mum was ill a few years back, he drove forty minutes every Sunday to sit with her and watch terrible game shows. He never once made it feel like a chore.

[Bride's name], you're getting a good one. Slightly mad, yes. Refuses to read instructions for anything, absolutely. But good. Properly, deeply good.

To [Bride's name] and [Groom's name], may your marriage be as long and ridiculous as our friendship. Cheers!`,
    authorName: 'Patrick Nolan',
    weddingRole: 'Childhood Friend',
    tags: ['funny', 'childhood friend', 'nostalgia'],
  },
  {
    slug: 'heartfelt-childhood-friend-speech-1',
    title: `Through every chapter`,
    category: 'childhood-friend-speech',
    tone: 'heartfelt',
    durationMinutes: 1.9,
    wordCount: 248,
    excerpt: `Hello everyone. I'm [Your name], and [Bride's name] has been my best friend since we were seven years old. I've been trying to figure out how to put twenty years of friendship into a...`,
    content: `Hello everyone. I'm [Your name], and [Bride's name] has been my best friend since we were seven years old. I've been trying to figure out how to put twenty years of friendship into a few minutes, and the honest answer is that I can't. So I'll just tell you what matters.

[Bride's name] and I grew up together in the truest sense. We lost teeth together, survived secondary school together, got our hearts broken for the first time within weeks of each other. She was there when my parents divorced and I was there when she lost her grandfather. We didn't always have the right words, but we always showed up.

There's a particular memory I keep coming back to. We were about fifteen, sitting on the swings at the park near her house, and she said, "I just want someone who makes the ordinary stuff feel special." I remember thinking that was such a grown-up thing to want.

And then she met [Groom's name]. And I watched her light up in a way I'd never seen before. Not dramatic or over the top, just steady and warm, like someone had finally turned on a lamp in a room she'd been sitting in for years.

[Groom's name], you make the ordinary stuff special. I've seen it. The way you bring her coffee without asking. The way you remember the small things. The way you look at her like she's the most interesting person in any room.

Thank you for loving my best friend the way she deserves. To [Bride's name] and [Groom's name].`,
    authorName: 'Emily Saunders',
    weddingRole: 'Childhood Friend',
    tags: ['heartfelt', 'childhood friend', 'emotional', 'nostalgia'],
  },
  {
    slug: 'balanced-childhood-friend-speech-1',
    title: `Since the sandbox days`,
    category: 'childhood-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 213,
    excerpt: `Hi everyone, I'm [Your name]. [Groom's name] and I have been best mates since primary school, which basically means I know where all the bodies are buried. Metaphorically. Mostly...`,
    content: `Hi everyone, I'm [Your name]. [Groom's name] and I have been best mates since primary school, which basically means I know where all the bodies are buried. Metaphorically. Mostly.

We bonded over a shared love of football stickers and a mutual enemy in Mrs. Patterson's year three maths class. By secondary school, we were inseparable. We were the kind of friends who'd cycle to each other's houses at midnight for no reason other than boredom and a complete lack of parental supervision.

What I've always admired about [Groom's name] is his loyalty. He doesn't do friendships halfway. When he's your friend, he's your friend for life, no conditions, no expiry dates. I've tested that loyalty more than a few times over the years, and he's never wavered.

When he told me about [Bride's name], I could tell straight away this was different. He wasn't showing off or playing it cool. He was nervous. Genuinely, visibly nervous. And I thought, "Right, this is real."

[Bride's name], you should know that in twenty years of friendship, I have never seen him care about impressing someone the way he cares about impressing you. And that's not because he's changed. It's because you've shown him what's worth caring about.

To [Bride's name] and [Groom's name], may the next chapter be your best one yet. Cheers!`,
    authorName: 'Sam Whitfield',
    weddingRole: 'Childhood Friend',
    tags: ['balanced', 'childhood friend', 'nostalgia'],
  },

  // ── College Friend Speeches (college-friend-speech) ──────────

  {
    slug: 'funny-college-friend-toast-1',
    title: `From freshers to forever`,
    category: 'college-friend-speech',
    tone: 'funny',
    durationMinutes: 1.9,
    wordCount: 245,
    excerpt: `Evening everyone. I'm [Your name], and I had the pleasure of meeting [Bride's name] during freshers' week at university. Specifically, she was the girl in the corridor of our halls...`,
    content: `Evening everyone. I'm [Your name], and I had the pleasure of meeting [Bride's name] during freshers' week at university. Specifically, she was the girl in the corridor of our halls who knocked on my door at 11pm and asked if I had a tin opener. I did not. We went to the kebab shop instead. And just like that, a friendship was born.

University with [Bride's name] was an experience. She was the one who convinced our entire flat to sign up for a pub quiz league despite none of us knowing anything about geography. We came last every single week. She called it "character building."

She once submitted a 3,000-word essay twelve minutes before the deadline, still wearing pyjamas, holding a cold slice of pizza, and looking like she'd been through something. She got a first. I have never forgiven her for that.

But for all the chaos, [Bride's name] was always the person you wanted in your corner. She was the friend who'd proofread your dissertation at midnight, who'd walk you home after a bad night, who remembered your birthday when you'd forgotten it yourself.

[Groom's name], I should tell you what you're getting into. She will never agree on a restaurant. She takes approximately forty-five minutes to tell a story that should take five. And she is the most fiercely loving person I've ever known.

You're a lucky man. And she's lucky too, even though she'll probably never admit it out loud.

To [Bride's name] and [Groom's name]!`,
    authorName: 'Megan Cross',
    weddingRole: 'College Friend',
    tags: ['funny', 'college friend', 'university'],
  },
  {
    slug: 'heartfelt-college-friend-speech-1',
    title: `The friend who changed everything`,
    category: 'college-friend-speech',
    tone: 'heartfelt',
    durationMinutes: 1.8,
    wordCount: 234,
    excerpt: `Hi everyone. I'm [Your name], and [Groom's name] and I met on the first day of university. We were both standing outside the wrong lecture hall looking confused, and he turned to me...`,
    content: `Hi everyone. I'm [Your name], and [Groom's name] and I met on the first day of university. We were both standing outside the wrong lecture hall looking confused, and he turned to me and said, "I think we're lost." I said, "Definitely." And that was it. Best mates from that moment.

University is a strange time. You're away from home for the first time, pretending to be more confident than you are, trying to figure out who you want to be. [Groom's name] was one of the few people who made that process feel less lonely. He had this way of making you feel like you belonged, even when you weren't sure you did.

We stayed close after graduation, even when life pulled us in different directions. Different cities, different careers, but the friendship never changed. It just matured, like we did. Well, sort of.

When he met [Bride's name], I noticed something shift. He became calmer, more grounded. Not less fun, just more settled, like someone who'd finally found the thing he didn't know he was searching for.

[Bride's name], you brought out a side of him that the rest of us always knew was there but couldn't quite reach. You gave him a reason to stop moving so fast and just be still for a moment.

I'm so proud of both of you. The life you're building together is something beautiful, and I'm honoured to have a front-row seat.

To [Groom's name] and [Bride's name]. Here's to everything that comes next.`,
    authorName: 'Oliver Kent',
    weddingRole: 'College Friend',
    tags: ['heartfelt', 'college friend', 'emotional'],
  },
  {
    slug: 'balanced-college-friend-toast-1',
    title: `From study partners to soulmates`,
    category: 'college-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 217,
    excerpt: `Good evening. I'm [Your name], and [Bride's name] and I met in our second year at university when we were paired together for the single worst group project...`,
    content: `Good evening. I'm [Your name], and [Bride's name] and I met in our second year at university when we were paired together for the single worst group project in academic history. Out of five group members, three disappeared. That left me and [Bride's name], two cups of terrible vending machine coffee, and a deadline we had absolutely no business meeting. We met it. Barely. And we've been inseparable ever since.

What I love about [Bride's name] is her refusal to do anything half-heartedly. She doesn't half-study, half-care, or half-love. Everything she does, she does completely. It can be exhausting to witness, honestly, but it's also what makes her extraordinary.

I was there the night she came home from her first date with [Groom's name]. She walked in, sat on the sofa, and said, very quietly, "I think that might have been the best evening of my life." No drama, no gushing, just that one sentence. From [Bride's name], that was the equivalent of fireworks.

[Groom's name], you should know that earning her trust is not easy. She doesn't give it freely. So the fact that she's standing here today, choosing you, in front of everyone she loves, tells you everything you need to know.

You've earned something precious. Look after it.

To [Bride's name] and [Groom's name], two people who deserve every bit of happiness coming their way. Cheers!`,
    authorName: 'Rachel Henning',
    weddingRole: 'College Friend',
    tags: ['balanced', 'college friend', 'university'],
  },

  // ── Work Friend Speeches (work-friend-speech) ────────────────

  {
    slug: 'funny-work-friend-wedding-toast-1',
    title: `From Slack messages to speeches`,
    category: 'work-friend-speech',
    tone: 'funny',
    durationMinutes: 1.8,
    wordCount: 236,
    excerpt: `Hello everyone. I'm [Your name], and [Groom's name] and I work together, which is a polite way of saying we spend most of our days sending each other passive-aggressive emails and...`,
    content: `Hello everyone. I'm [Your name], and [Groom's name] and I work together, which is a polite way of saying we spend most of our days sending each other passive-aggressive emails and sneaking out for coffee when our manager isn't looking.

I want to set the scene for how our friendship began. It was [Groom's name]'s first week at the company. He walked into the kitchen, saw me struggling with the coffee machine, and said, "That's not how you do it." He then proceeded to also fail at the coffee machine. We went to the cafe down the road. A bond was forged.

Over the years, [Groom's name] has become more than a colleague. He's the person I complain to about meetings that could have been emails. He's my lunch buddy, my "should I send this email or will I get fired" advisor, and the only person who understands the specific pain of a Friday afternoon all-hands meeting.

But what amazed me was watching him fall in love. Suddenly, the man who'd never leave the office before six was sprinting out the door at five. The man who packed the same sad sandwich every day started bringing leftovers from dinners [Bride's name] had cooked. The man who never smiled at his phone was grinning like an idiot at his texts.

[Bride's name], you've done what no amount of corporate wellness programs could achieve. You've made him genuinely happy.

To [Groom's name] and [Bride's name], the best out-of-office partnership I've ever seen. Cheers!`,
    authorName: 'David Palmer',
    weddingRole: 'Work Friend',
    tags: ['funny', 'work friend', 'office humour'],
  },
  {
    slug: 'heartfelt-work-friend-speech-1',
    title: `More than just colleagues`,
    category: 'work-friend-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 221,
    excerpt: `Hi everyone. I'm [Your name], and I have the privilege of being both [Bride's name]'s colleague and her friend. We work in the same team and have done for the past six years, which...`,
    content: `Hi everyone. I'm [Your name], and I have the privilege of being both [Bride's name]'s colleague and her friend. We work in the same team and have done for the past six years, which means I've seen her through promotions, setbacks, terrible office Christmas parties, and now this beautiful day.

People sometimes underestimate work friendships. They think they're just convenience, just proximity. But the truth is, your colleagues see you at your most stressed, your most tired, your most frustrated. They see the version of you that doesn't have the energy to perform. And the friendships that survive that, the ones that actually deepen because of it, are rare and real.

[Bride's name] is the person who pulled me aside after a difficult presentation and said, "You were brilliant, and anyone who says otherwise doesn't know what they're talking about." She's the person who quietly took on half my workload when my father was unwell, without ever mentioning it.

When she started talking about [Groom's name], I could hear something in her voice that I'd never heard before. Certainty. Not excitement, not infatuation, just this quiet, steady certainty that she'd found her person.

[Groom's name], you are that person. And from someone who has seen [Bride's name] at her best and her most frazzled, I can tell you that the way she loves you is the most genuine thing about her.

To [Bride's name] and [Groom's name]. You deserve this.`,
    authorName: 'Laura Beckett',
    weddingRole: 'Work Friend',
    tags: ['heartfelt', 'work friend', 'emotional'],
  },
  {
    slug: 'balanced-work-friend-wedding-speech-1',
    title: `Promoted to family`,
    category: 'work-friend-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 212,
    excerpt: `Good evening everyone. I'm [Your name]. [Groom's name] and I have worked together for about four years now, and somewhere along the way, he stopped being the guy at the next desk and...`,
    content: `Good evening everyone. I'm [Your name]. [Groom's name] and I have worked together for about four years now, and somewhere along the way, he stopped being the guy at the next desk and became one of my closest friends. I'm not sure when exactly it happened. Probably somewhere between the third coffee run and the team building exercise that involved a canoe and went horribly wrong.

What I've learned about [Groom's name] through working with him is that he treats people well. Not in a showy way, but in the way that actually matters. He remembers people's names. He asks about your weekend and actually listens to the answer. He's the first to help and the last to take credit. You don't find that often.

When [Bride's name] came along, everything just made sense. He'd talk about her with this quiet pride that was impossible not to respect. I remember him once saying, "She makes me want to be better at everything." Not just at work, not just at one thing, at everything.

[Bride's name], from what I've seen, you bring out the absolute best in him. And from what he tells me, he's determined to do the same for you.

That's all you can really ask for, isn't it? Two people trying to be their best selves for each other.

To [Groom's name] and [Bride's name], a partnership that works in every sense. Cheers!`,
    authorName: 'James Thornton',
    weddingRole: 'Work Friend',
    tags: ['balanced', 'work friend', 'office'],
  },

  // ── Roommate Speeches (roommate-speech) ──────────────────────

  {
    slug: 'funny-roommate-wedding-toast-1',
    title: `The roommate who saw everything`,
    category: 'roommate-speech',
    tone: 'funny',
    durationMinutes: 2.0,
    wordCount: 258,
    excerpt: `Good evening everyone. I'm [Your name], and for three unforgettable years, I had the pleasure, and I use that word loosely, of being [Bride's name]'s roommate. I have seen things...`,
    content: `Good evening everyone. I'm [Your name], and for three unforgettable years, I had the pleasure, and I use that word loosely, of being [Bride's name]'s roommate. I have seen things. I know things. And [Bride's name] is very lucky that I am a kind and merciful person.

Living with [Bride's name] was an education. I learned that one person can own seventeen nearly-empty bottles of shampoo. I learned that "I'll wash up tomorrow" is a flexible concept. And I learned that someone can watch the same series four times in a row and still cry at the finale every single time.

But I also learned what real friendship looks like. [Bride's name] was the roommate who'd leave a cup of tea outside your door when you'd had a bad day. Who'd sit with you on the bathroom floor at 2am when you needed to talk. Who'd pretend not to hear you crying and then casually suggest a walk the next morning because she knew you'd talk when you were ready.

When [Groom's name] first started coming round to our flat, I'll admit I was skeptical. A new person in our space? Using our good mugs? But then I watched how he was with her. He'd help with the dishes without being asked. He'd bring food for both of us, not just her. He passed the roommate test without even knowing he was taking it.

[Groom's name], you got the stamp of approval from the person who shared a bathroom with her for three years. That's no small thing.

To [Bride's name] and [Groom's name], the best upgrade she ever made!`,
    authorName: 'Chloe Matthews',
    weddingRole: 'Former Roommate',
    tags: ['funny', 'roommate', 'living together'],
  },
  {
    slug: 'heartfelt-roommate-speech-1',
    title: `From flatmates to forever friends`,
    category: 'roommate-speech',
    tone: 'heartfelt',
    durationMinutes: 1.7,
    wordCount: 224,
    excerpt: `Hello everyone. My name is [Your name], and [Groom's name] was my roommate for two years after university. I know that might sound unremarkable, but those two years shaped my life in...`,
    content: `Hello everyone. My name is [Your name], and [Groom's name] was my roommate for two years after university. I know that might sound unremarkable, but those two years shaped my life in ways I didn't fully appreciate until much later.

We were both in our early twenties, both broke, both figuring out what adult life was supposed to look like. Our flat was small, the heating was unreliable, and our cooking repertoire consisted of approximately four meals on rotation. But it was ours, and in that cramped little kitchen, we became family.

[Groom's name] is the kind of person who makes hard things easier just by being present. When I lost my job six months into our lease, I was terrified. He sat me down and said, "We'll figure it out. That's what this is." He meant the friendship, the flat, the partnership of sharing a life with someone who has your back.

I think that's what marriage is too, at its core. Figuring it out together. Choosing to stay in the room, even when things get uncomfortable.

[Bride's name], I watched [Groom's name] fall in love with you from across a very thin hallway wall, and I heard every phone call, every laugh, every long silence that meant he was just happy to be on the line with you. You changed something in him that I'd been hoping would change for years.

You two are exactly right for each other. To [Groom's name] and [Bride's name].`,
    authorName: 'Nathan Gill',
    weddingRole: 'Former Roommate',
    tags: ['heartfelt', 'roommate', 'emotional'],
  },
  {
    slug: 'balanced-roommate-wedding-speech-1',
    title: `What living together taught me about love`,
    category: 'roommate-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 230,
    excerpt: `Hi everyone. I'm [Your name]. [Bride's name] and I shared a flat for two and a half years, and I'm standing here today because she told me, and I quote, "You know me better than...`,
    content: `Hi everyone. I'm [Your name]. [Bride's name] and I shared a flat for two and a half years, and I'm standing here today because she told me, and I quote, "You know me better than almost anyone, so you have to say something." No pressure, then.

Living with someone is the fastest way to learn who they really are. You can't hide behind your best self at 7am on a Monday. And what I learned about [Bride's name] is that she is, underneath the occasional chaos, one of the most caring people I've ever known.

She's the person who remembers the exact brand of biscuit you mentioned once in passing and buys them when you're sad. She's the person who once stayed up until midnight helping me practice a job interview, playing the role of "difficult panel member" with alarming enthusiasm.

Now, I'll be honest. She's also the person who left a pan soaking for so long that I think it developed its own ecosystem. Nobody's perfect.

When [Groom's name] entered the picture, I knew it was serious because she started making the flat presentable. That had never happened before. I came home one day and she'd bought actual cushions. Decorative ones. That's when I knew we were in new territory.

[Groom's name], you inspire her to be the best version of herself. And take it from someone who's seen all the versions, that's really saying something.

To [Bride's name] and [Groom's name]. Love, laughter, and clean kitchens. Cheers!`,
    authorName: 'Freya Mitchell',
    weddingRole: 'Former Roommate',
    tags: ['balanced', 'roommate', 'living together'],
  },

  // ── Military Buddy Speeches (military-buddy-speech) ──────────

  {
    slug: 'funny-military-buddy-toast-1',
    title: `From basic training to the big day`,
    category: 'military-buddy-speech',
    tone: 'funny',
    durationMinutes: 1.9,
    wordCount: 243,
    excerpt: `Good evening everyone. I'm [Your name], and [Groom's name] and I served together, which is the military way of saying we suffered together, complained together, and formed a bond that...`,
    content: `Good evening everyone. I'm [Your name], and [Groom's name] and I served together, which is the military way of saying we suffered together, complained together, and formed a bond that no amount of civilian life can break.

I first met [Groom's name] during basic training. He was the bloke who somehow managed to look completely lost and totally confident at the same time. Our sergeant took one look at him and said, "That one's either going to be brilliant or a complete disaster." For the record, it was both.

We shared a bunk for six months. I know more about [Groom's name]'s sleeping habits than any best man speech could responsibly contain. I will say this: the man snores like a freight train with a head cold. [Bride's name], I hope you've invested in earplugs.

But on a serious note, [Groom's name] is the kind of person you want beside you when things go sideways. And I mean that literally. In the field, you learn very quickly who you can trust. Some people talk a big game but fold under pressure. [Groom's name] never folded. He's steady, reliable, and braver than he gives himself credit for.

[Bride's name], you're marrying someone who has been tested in ways most people never will be. And he came through it all with his humour intact, his integrity solid, and his heart wide open. That last part, I think, was because he was saving it for you.

To [Groom's name] and [Bride's name], at ease, and at home. Cheers!`,
    authorName: 'Craig Henderson',
    weddingRole: 'Military Buddy',
    tags: ['funny', 'military', 'service'],
  },
  {
    slug: 'heartfelt-military-buddy-speech-1',
    title: `Brothers in arms, brothers for life`,
    category: 'military-buddy-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 260,
    excerpt: `Hello everyone. My name is [Your name], and I served alongside [Groom's name] for four years. In the military, you learn to rely on people in a way that civilian life rarely requires...`,
    content: `Hello everyone. My name is [Your name], and I served alongside [Groom's name] for four years. In the military, you learn to rely on people in a way that civilian life rarely requires. You eat together, train together, wait together, and sometimes face things together that are difficult to talk about afterward. That kind of bond doesn't come with a manual, and it doesn't fade with time.

[Groom's name] was the person I trusted most during our deployment. Not because he was the loudest or the most decorated, but because he was consistent. Every single day, he showed up as the same person. Calm when others panicked, kind when the pressure made others sharp, funny when everyone needed a reason to smile.

There was one night, and I won't go into detail, but it was a hard one. We were both exhausted, both scared, and neither of us wanted to admit it. [Groom's name] looked at me and said, "We're going to be fine. And when this is over, I'm buying you the biggest steak you've ever seen." Somehow, that was enough.

Transitioning to civilian life wasn't easy for either of us. But watching [Groom's name] find his footing, build a career, and then find [Bride's name], has been one of the greatest privileges of my life.

[Bride's name], you should know that the man standing beside you today has more courage, more compassion, and more depth than he'll ever let on. He won't always tell you when he's struggling. But he will always, always show up for you.

To [Groom's name] and [Bride's name]. With all my respect and love.`,
    authorName: 'Michael Reeves',
    weddingRole: 'Military Buddy',
    tags: ['heartfelt', 'military', 'service', 'emotional'],
  },
  {
    slug: 'balanced-military-buddy-wedding-speech-1',
    title: `A soldier finds his home`,
    category: 'military-buddy-speech',
    tone: 'balanced',
    durationMinutes: 1.8,
    wordCount: 237,
    excerpt: `Good evening. I'm [Your name], and [Groom's name] and I go back to our very first day in the armed forces. We were standing in a line, being shouted at by a man whose neck was wider...`,
    content: `Good evening. I'm [Your name], and [Groom's name] and I go back to our very first day in the armed forces. We were standing in a line, being shouted at by a man whose neck was wider than my entire torso, and [Groom's name] leaned over and whispered, "Do you think he'd calm down if I offered him a biscuit?" I knew immediately we were going to be friends.

Service teaches you a lot about yourself and even more about other people. You learn who panics, who stays calm, who shares their last packet of crisps when supplies are low. [Groom's name] was always the one sharing. Not just food, but time, energy, moral support, terrible jokes at the worst possible moments.

After we left the forces, staying close wasn't always easy. Different lives, different cities, the usual drift that happens. But with [Groom's name], there was never any awkwardness when we reconnected. We'd just pick up where we left off, like no time had passed at all. That's the mark of a real friendship.

When I met [Bride's name] for the first time, she asked me to tell her the most embarrassing thing [Groom's name] ever did during service. I told her about the time he saluted the wrong officer for an entire week. She laughed so hard she nearly choked on her drink. I thought, "Yeah, she's perfect for him."

[Bride's name], he has finally found a mission he'll never want to complete. Being your husband is the assignment of a lifetime.

To the happy couple!`,
    authorName: 'Steve Rowlands',
    weddingRole: 'Military Buddy',
    tags: ['balanced', 'military', 'service'],
  },
// ── Sports Teammate Speech (3) ──────────────────────────────

  {
    slug: 'soccer-teammate-wedding-speech-1',
    title: `From the pitch to the altar - a teammate's toast`,
    category: 'sports-teammate-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 273,
    excerpt: `Alright everyone, I'm [Your name], and I've had the pleasure of playing alongside [Groom's name] for the last eight years on our Sunday league team...`,
    content: `Alright everyone, I'm [Your name], and I've had the pleasure of playing alongside [Groom's name] for the last eight years on our Sunday league team. Now, I use the word "pleasure" loosely because this man once missed an open goal from three yards out and then blamed the wind. Indoors.

But here's what I can tell you about [Groom's name] as a teammate. He's the first one to pick you up when you're down, literally and figuratively. When I tore my ACL two seasons ago, he drove me to every physio appointment for three months. Didn't even complain. Well, he complained a little.

I knew something was different when [Groom's name] started skipping post-match drinks. Our captain thought he was injured. Turns out he'd met [Bride's name], and suddenly Saturday nights were for fancy restaurants instead of cheap pints. The lads were devastated. I was happy for him.

The thing about [Groom's name] is that he brings the same energy to everything he does. On the pitch, he never gives up on a lost ball. In life, he never gives up on the people he cares about. And [Bride's name], I've watched him become a better person since he met you. More focused, more grounded, still absolutely terrible at free kicks, but better in every way that counts.

So please raise your glasses. To [Bride's name] and [Groom's name] - may your marriage have all the passion of a last-minute winner and none of the drama of a penalty shootout. Cheers!`,
    authorName: 'Marcus Webb',
    weddingRole: 'Sports Teammate',
    tags: ['funny', 'sports', 'friendship'],
  },

  {
    slug: 'basketball-teammate-heartfelt-speech-2',
    title: `A teammate's tribute to love and loyalty`,
    category: 'sports-teammate-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.0,
    wordCount: 258,
    excerpt: `Good evening everyone. My name is [Your name], and I've played basketball with [Groom's name] since we were fourteen years old. That's nearly fifteen years of early morning...`,
    content: `Good evening everyone. My name is [Your name], and I've played basketball with [Groom's name] since we were fourteen years old. That's nearly fifteen years of early morning practices, tournament weekends, and long drives to away games where we'd talk about everything and nothing.

There's something about being on a team with someone that shows you who they really are. Not the version they present at parties or at work, but who they are when they're exhausted, when the score isn't going their way, when things get hard. And I can tell you that [Groom's name] is the same person in every situation - steady, generous, and relentlessly optimistic.

I remember the first time he told me about [Bride's name]. We were warming up before a game and he just stopped mid-layup and said, "I think I've met someone really special." He had this look on his face I'd never seen before. Not nervous exactly, more like certain. Like he'd found something he didn't know he was looking for.

[Bride's name], thank you for loving this man the way he deserves. Thank you for showing up to our games even when it's freezing and we're losing badly. Thank you for understanding that sometimes he needs a Saturday with the team, and for always being there when he comes home.

You two have built something beautiful together, and it's been a privilege to watch it grow from the sidelines. To [Bride's name] and [Groom's name] - may your lives together be filled with joy, patience, and the occasional victory. Congratulations.`,
    authorName: 'Derek Okonkwo',
    weddingRole: 'Sports Teammate',
    tags: ['heartfelt', 'sports', 'loyalty'],
  },

  {
    slug: 'rugby-teammate-balanced-speech-3',
    title: `Scrums, tries, and tying the knot`,
    category: 'sports-teammate-speech',
    tone: 'balanced' as const,
    durationMinutes: 2.2,
    wordCount: 286,
    excerpt: `Evening all. I'm [Your name], and I've been propping up the scrum next to [Groom's name] for about ten years now. For the non-rugby people here, that means I've spent a decade...`,
    content: `Evening all. I'm [Your name], and I've been propping up the scrum next to [Groom's name] for about ten years now. For the non-rugby people here, that means I've spent a decade with my head uncomfortably close to this man's. So believe me when I say I know him well.

[Groom's name] is the kind of player every team needs. Not the flashiest, not the fastest, but the one who makes everyone around him better. He's the one organising lifts to training, remembering everyone's birthdays, and carrying the first aid kit even though he's not the medic. That's just who he is.

I'll never forget the season we nearly got relegated. Morale was low, half the team wanted to quit. [Groom's name] called a meeting at his flat, cooked a genuinely terrible lasagne, and gave this speech about why we started playing in the first place. We won our next four games. That lasagne may have been awful, but his heart was in the right place.

Now, I have to be honest, when [Bride's name] came along, I was worried we'd lose him. And we did lose him to a few Saturday sessions. But what we gained was someone who made [Groom's name] happier than I'd ever seen him. [Bride's name], you brought out a side of him we didn't know was there. He smiles more, worries less, and has even started eating salad, which frankly shocked the entire squad.

Please join me in raising a glass to two people who are absolutely perfect for each other. [Bride's name] and [Groom's name], may your marriage be as strong as a scrum and as exciting as a last-minute try. To the happy couple!`,
    authorName: 'Colin Fairweather',
    weddingRole: 'Sports Teammate',
    tags: ['balanced', 'sports', 'rugby', 'friendship'],
  },

  // ── Travel Buddy Speech (3) ─────────────────────────────────

  {
    slug: 'travel-buddy-funny-wedding-speech-1',
    title: `Passport stamps and wedding bands`,
    category: 'travel-buddy-speech',
    tone: 'funny' as const,
    durationMinutes: 2.3,
    wordCount: 296,
    excerpt: `Hello everyone! I'm [Your name], and if you've ever received a blurry photo at 3am from an unpronounceable location, chances are [Bride's name] and I were responsible. We've been...`,
    content: `Hello everyone! I'm [Your name], and if you've ever received a blurry photo at 3am from an unpronounceable location, chances are [Bride's name] and I were responsible. We've been travel partners for nearly a decade now, and I have stories that could fill several passports.

Let me paint you a picture. Hanoi, 2019. [Bride's name] confidently orders us street food using a phrase she learned from a YouTube video. Turns out she actually asked for "angry chicken with sadness." We ate it anyway. It was delicious.

Then there was the time in Morocco when she haggled so aggressively for a rug that the shopkeeper actually started feeling sorry for her and gave her tea. She still has that rug. She'll probably tell you she got a great deal. She did not.

But travelling with someone shows you who they really are. And [Bride's name] is the person who gives her last granola bar to a stranger, who talks to everyone on the bus, who somehow makes friends in every country despite speaking exactly one and a half languages.

When she met [Groom's name], I knew things were changing because she started planning trips for two. And then she started planning trips she actually wanted to come home from, which was new. [Groom's name], you're her favourite destination now. She doesn't need a boarding pass to feel that rush of excitement - she just needs to see you.

I'm so happy for you both. You've found the one person you want to navigate every adventure with, and that's really what love is, isn't it? Finding someone who makes even the delays and the lost luggage feel like part of the story.

To [Bride's name] and [Groom's name] - bon voyage on this incredible journey together!`,
    authorName: 'Priya Nair',
    weddingRole: 'Travel Buddy',
    tags: ['funny', 'travel', 'adventure'],
  },

  {
    slug: 'travel-buddy-heartfelt-speech-2',
    title: `The greatest adventure starts today`,
    category: 'travel-buddy-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 1.9,
    wordCount: 242,
    excerpt: `Good evening. I'm [Your name], and [Groom's name] and I have logged more miles together than I can count. From backpacking through South America to getting hopelessly lost in...`,
    content: `Good evening. I'm [Your name], and [Groom's name] and I have logged more miles together than I can count. From backpacking through South America to getting hopelessly lost in rural Japan, he's been my partner in exploration for over twelve years.

When you travel with someone, you see them at their best and their worst. You see them sunburnt and sleep-deprived, standing in the wrong queue at the wrong airport. And you see them watching a sunrise over Angkor Wat with tears in their eyes because the world is just that beautiful.

[Groom's name] taught me that the best trips aren't about the destination. They're about being present, staying curious, and saying yes to the unexpected. He's the one who convinced me to try bungee jumping in New Zealand, to take that overnight train instead of flying, to sit down with locals and just listen.

When he started telling me about [Bride's name], it was different from any conversation we'd ever had. He wasn't describing a place or an experience. He was describing home. He said, "She makes everywhere feel like exactly where I'm supposed to be." That stopped me in my tracks.

[Bride's name], you are his greatest adventure. Not because love is always easy, but because he'd choose you over every destination on earth without hesitation.

To [Bride's name] and [Groom's name] - may your life together be rich with discovery, wonder, and the joy of coming home to each other. Cheers.`,
    authorName: 'Sam Fitzpatrick',
    weddingRole: 'Travel Buddy',
    tags: ['heartfelt', 'travel', 'adventure'],
  },

  {
    slug: 'travel-buddy-balanced-speech-3',
    title: `Suitcases, souvenirs, and soulmates`,
    category: 'travel-buddy-speech',
    tone: 'balanced' as const,
    durationMinutes: 2.1,
    wordCount: 268,
    excerpt: `Hi everyone, I'm [Your name]. Now, I've shared a hostel bunk, a dodgy rental car, and at least one very questionable ferry with [Bride's name], so I feel uniquely qualified to...`,
    content: `Hi everyone, I'm [Your name]. Now, I've shared a hostel bunk, a dodgy rental car, and at least one very questionable ferry with [Bride's name], so I feel uniquely qualified to stand up here today.

[Bride's name] and I took our first trip together right after university. We went to Portugal with barely enough money for bread and coffee. She insisted on budgeting everything down to the cent. I insisted on ignoring the budget entirely. Somehow, we survived. That trip taught me something important about [Bride's name] - she plans for the worst but hopes for the best, and she always, always finds the silver lining.

There was the time our flight got cancelled in Bangkok and we ended up sleeping on airport chairs for nine hours. Most people would be furious. She made friends with a family from Melbourne and got invited to their daughter's birthday party the following week. In Melbourne. She actually considered going.

That's the thing about [Bride's name]. She collects people the way some travellers collect fridge magnets. But she doesn't just collect them. She keeps them. She remembers them. She cares.

[Groom's name], you should know you're marrying the best travel companion on the planet. She'll navigate, she'll negotiate, and she'll make sure you never miss a sunset. More importantly, she'll make every ordinary Tuesday feel like an adventure.

And [Bride's name], you've found someone who matches your curiosity and your warmth. I've watched you two together, and it's clear you've found your person.

Raise your glasses, everyone. To [Bride's name] and [Groom's name] - may the adventure never end. Cheers!`,
    authorName: 'Jenny Liang',
    weddingRole: 'Travel Buddy',
    tags: ['balanced', 'travel', 'friendship'],
  },

  // ── Roast Wedding Speech (3) ────────────────────────────────

  {
    slug: 'roast-wedding-speech-loveable-disaster-1',
    title: `A loving roast for the groom`,
    category: 'roast-wedding-speech',
    tone: 'roast' as const,
    durationMinutes: 2.2,
    wordCount: 281,
    excerpt: `Good evening everyone. I'm [Your name], and I've been asked to say a few kind words about [Groom's name]. I'll do my best, but I don't have much to work with. Just kidding...`,
    content: `Good evening everyone. I'm [Your name], and I've been asked to say a few kind words about [Groom's name]. I'll do my best, but I don't have much to work with. Just kidding. Sort of.

Let me start with the basics. [Groom's name] is the kind of man who once tried to iron a shirt while wearing it. He's the kind of man who thought the capital of Australia was Sydney until last year. He's the kind of man who still doesn't understand how his own thermostat works. And somehow, against all odds, he's convinced this incredible woman to spend the rest of her life with him.

[Bride's name], I have to ask - are you sure? I mean, you've seen him eat cereal at 11pm over the kitchen sink, right? You know about the "system" he has for his sock drawer that makes absolutely no sense to anyone else? You're aware that he once got lost in an IKEA for forty-five minutes and had to be rescued by a staff member named Ingrid? You know all this, and you still said yes. That's either true love or an act of extraordinary charity.

But in all seriousness, and I mean this genuinely, [Groom's name] is one of the most decent human beings I know. He'd give you the shirt off his back, probably a wrinkled one because of the ironing situation, but he'd give it. He's kind, he's loyal, and he loves [Bride's name] in a way that makes the rest of us believe love is real.

So here's to [Bride's name] and [Groom's name]. May your patience, [Bride's name], be as endless as [Groom's name]'s ability to lose his car keys. Cheers!`,
    authorName: 'Ethan Marshall',
    weddingRole: 'Friend',
    tags: ['roast', 'funny', 'groom'],
  },

  {
    slug: 'roast-wedding-speech-bride-edition-2',
    title: `A roast for the bride from her oldest friend`,
    category: 'roast-wedding-speech',
    tone: 'roast' as const,
    durationMinutes: 2.0,
    wordCount: 264,
    excerpt: `Hello everyone. I'm [Your name], and I've known [Bride's name] since we were eleven years old. That's over twenty years of friendship, which means I know where all the bodies are...`,
    content: `Hello everyone. I'm [Your name], and I've known [Bride's name] since we were eleven years old. That's over twenty years of friendship, which means I know where all the bodies are buried. Metaphorically. Mostly.

Now, [Bride's name] likes to present herself as this poised, put-together woman. And she is. Today. But I remember the girl who once cried because she thought her goldfish was judging her. I remember the teenager who went through an entire bottle of Sun-In in one afternoon and turned up to school looking like a traffic cone. I remember the university student who accidentally sent a love letter to her tutor instead of her boyfriend. Different David, same inbox.

[Bride's name] also has a unique relationship with cooking. She once made a lasagne that could have been classified as a building material. She set off the smoke alarm making toast. Twice. In one morning. [Groom's name], I hope you like takeaway.

But here's what I also know about [Bride's name]. She's the first person to call when things go wrong. She remembers every birthday, every anniversary, every small thing that matters to the people she loves. She's fierce and funny and the most loyal person in any room.

[Groom's name], you're getting the whole package. The burnt toast, the dramatic goldfish stories, the enormous heart. I promise you, it's worth it. Every single chaotic, wonderful bit of it.

To [Bride's name] and [Groom's name] - may your life together be as entertaining as [Bride's name]'s cooking is terrifying. Love you both!`,
    authorName: 'Rachel Cooper',
    weddingRole: 'Friend',
    tags: ['roast', 'funny', 'bride'],
  },

  {
    slug: 'roast-wedding-speech-couple-roast-3',
    title: `A double roast for the happy couple`,
    category: 'roast-wedding-speech',
    tone: 'roast' as const,
    durationMinutes: 2.3,
    wordCount: 298,
    excerpt: `Evening everyone. I'm [Your name], and since I'm friends with both [Bride's name] and [Groom's name], I've decided to be fair and roast them equally. Starting with [Groom's name]...`,
    content: `Evening everyone. I'm [Your name], and since I'm friends with both [Bride's name] and [Groom's name], I've decided to be fair and roast them equally. Starting with [Groom's name], because alphabetical order isn't a thing I care about.

[Groom's name]. Mate. You are the only person I know who has been outsmarted by a self-checkout machine. Not once. Regularly. You also hold the world record for the most times someone has said "I'll be ready in five minutes" and meant forty-five.

Now [Bride's name]. Darling. You are wonderful and kind and I once watched you argue with a satnav for ten minutes because you were convinced it was wrong. It was not wrong. You drove an extra hour. Also, you describe every meal you eat as "quite nice actually" regardless of whether it's a Michelin-star dinner or a petrol station sandwich. You have no range.

Together, you two are something else entirely. You once got lost driving to a restaurant that was four streets from your flat. You argued about who left the back door open for three days before realising it was the cat. You went to IKEA together on a Bank Holiday and somehow came out still in love, which honestly might be your greatest achievement.

But here's the thing. Behind all the chaos, there are two people who genuinely adore each other. Who make each other laugh until they cry. Who would choose each other in every room, every time, no question.

So yes, you're both ridiculous. But you're ridiculous together, and that's what makes it work. To [Bride's name] and [Groom's name] - may you never stop laughing at each other. And with each other. But mainly at. Cheers!`,
    authorName: 'Dan Whitfield',
    weddingRole: 'Friend',
    tags: ['roast', 'funny', 'couple'],
  },

  // ── Sentimental Speech (3) ──────────────────────────────────

  {
    slug: 'sentimental-friendship-through-years-1',
    title: `A friendship forged through every season`,
    category: 'sentimental-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.1,
    wordCount: 275,
    excerpt: `Good evening everyone. I'm [Your name], and I've been trying to write this speech for weeks. Every time I sat down, I'd start crying before I finished the first paragraph. So if...`,
    content: `Good evening everyone. I'm [Your name], and I've been trying to write this speech for weeks. Every time I sat down, I'd start crying before I finished the first paragraph. So if I get through this without tears, consider it a miracle.

[Bride's name] and I met seventeen years ago in a waiting room at the dentist's office. She was reading a magazine upside down because she was nervous, and I told her. She laughed, and we've been inseparable ever since.

Over the years, I've watched [Bride's name] navigate life with a grace that I genuinely admire. She held my hand through the worst year of my life without ever making me feel like a burden. She celebrated every small victory I had like it was her own. She is, without exaggeration, the most selfless person I've ever known.

When she told me about [Groom's name], something shifted in her voice. There was a steadiness there, a warmth that went deeper than excitement. She said, "I don't have to try to be someone else with him. He just lets me be me." And I thought, that's it. That's what she's been waiting for.

[Groom's name], thank you for seeing her. Not just the bright, funny, confident version everyone sees. But the quiet one. The one who worries. The one who carries more than she lets on. Thank you for being the person she can put it all down with.

You two have something rare. Hold onto it with everything you have. To [Bride's name] and [Groom's name] - may your love be a safe place for both of you, always. I love you both.`,
    authorName: 'Natalie Simmons',
    weddingRole: 'Friend',
    tags: ['heartfelt', 'sentimental', 'emotional'],
  },

  {
    slug: 'sentimental-groom-tribute-speech-2',
    title: `To the man who changed everything`,
    category: 'sentimental-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.8,
    wordCount: 237,
    excerpt: `Hi everyone. [Your name] here. I've known [Groom's name] since our first day of secondary school when we were both too shy to talk to anyone else, so we talked to each other...`,
    content: `Hi everyone. [Your name] here. I've known [Groom's name] since our first day of secondary school when we were both too shy to talk to anyone else, so we talked to each other. Twenty years later, here we are.

[Groom's name] isn't someone who asks for the spotlight. He's the person working quietly in the background, making sure everyone else is okay. I think about the time my dad was ill, and [Groom's name] just showed up at my door with groceries and didn't say a word about it. That's who he is.

He's also the person who once drove four hours to help me move a sofa and then four hours back because he had work the next morning. He didn't complain. He just did it because that's what friends do, apparently. Most people talk about loyalty. [Groom's name] just lives it.

[Bride's name], I want you to know that you've married someone extraordinary. Not in the loud, obvious way, but in the quiet, everyday way that actually matters. He'll never forget what's important to you. He'll always be in your corner.

And [Groom's name], you've found someone who matches your heart. [Bride's name] is warm, thoughtful, and brave in ways I think even she doesn't fully recognise yet. You bring out the best in each other, and that's a rare, wonderful thing.

Please raise your glasses to [Bride's name] and [Groom's name]. May your life together be as rich and steady as the friendship I'm so grateful to have. Congratulations.`,
    authorName: 'Oliver Brennan',
    weddingRole: 'Friend',
    tags: ['sentimental', 'balanced', 'friendship'],
  },

  {
    slug: 'sentimental-love-letter-speech-3',
    title: `What love looks like from the outside`,
    category: 'sentimental-speech',
    tone: 'funny' as const,
    durationMinutes: 2.0,
    wordCount: 259,
    excerpt: `Good evening. I'm [Your name], and I should warn you, I'm a crier. If you see me dabbing my eyes later, mind your business. Now, I want to talk about what love looks like from...`,
    content: `Good evening. I'm [Your name], and I should warn you, I'm a crier. If you see me dabbing my eyes later, mind your business.

Now, I want to talk about what love looks like from the outside, because I've had a front-row seat to this particular love story. When [Bride's name] and [Groom's name] first got together, I didn't think much of it. They were just two people who seemed to like each other. But then I started noticing things.

I noticed how [Groom's name] always saves the last bite of dessert for [Bride's name]. How [Bride's name] keeps a spare phone charger in her bag because [Groom's name] always forgets his. How they have this way of looking at each other across a room that makes the rest of us feel like we're intruding.

I'm not going to pretend I haven't been jealous. I have. Not of either of them specifically, but of what they've built. It's the kind of love that doesn't need to announce itself. It's in the small things, the daily kindnesses, the way they make ordinary life feel meaningful.

I asked [Bride's name] once what she loved most about [Groom's name]. She said, "He makes me feel like I'm enough, exactly as I am." And honestly, I had to leave the room because I promised myself I wouldn't cry until the wedding. Well, here we are.

To [Bride's name] and [Groom's name] - you've shown all of us what love can look like when it's real. May you never stop saving each other dessert. I love you both. Cheers.`,
    authorName: 'Kate Donovan',
    weddingRole: 'Friend',
    tags: ['sentimental', 'funny', 'love story'],
  },

  // ── Lighthearted Speech (3) ─────────────────────────────────

  {
    slug: 'lighthearted-fun-loving-toast-1',
    title: `A toast to the couple who can't stop laughing`,
    category: 'lighthearted-speech',
    tone: 'funny' as const,
    durationMinutes: 2.0,
    wordCount: 260,
    excerpt: `Hey everyone! I'm [Your name], and I've been given approximately three minutes to say something nice about [Groom's name], which is about two minutes more than I need. Kidding...`,
    content: `Hey everyone! I'm [Your name], and I've been given approximately three minutes to say something nice about [Groom's name], which is about two minutes more than I need. Kidding. Mostly.

So let me set the scene. I've known [Groom's name] for twelve years, and in that time, I've watched him go through several phases. There was the "I'm going to learn guitar" phase, which lasted exactly one lesson. The "I'm going to run a marathon" phase, which peaked at a 5K he walked half of. And my personal favourite, the "I'm going to become a morning person" phase, which lasted until the first morning.

But then came the [Bride's name] phase. And this one stuck. Suddenly he was cooking dinner instead of ordering in. He started remembering to water his plants. He even learned how to fold a fitted sheet, which I'm still convinced is actual sorcery.

[Bride's name], whatever you've done, it's working. You've somehow turned this lovable chaos merchant into a functioning adult, and we're all deeply grateful. Also slightly confused, but mainly grateful.

What I love most about you two is that you never take yourselves too seriously. You laugh at the same stupid things, you finish each other's terrible jokes, and you have this energy that makes everyone around you feel lighter. That's a gift. Not everyone has that.

So here's to [Bride's name] and [Groom's name] - may your life together be filled with laughter, terrible puns, and at least one more attempt at that marathon. To the happy couple!`,
    authorName: 'Jordan Clarke',
    weddingRole: 'Friend',
    tags: ['funny', 'lighthearted', 'humor'],
  },

  {
    slug: 'lighthearted-easy-breezy-speech-2',
    title: `Love, laughs, and happily ever after`,
    category: 'lighthearted-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.7,
    wordCount: 225,
    excerpt: `Good evening! I'm [Your name], and before I start, I want to say that [Bride's name] looks absolutely stunning tonight. And [Groom's name], you also look like you tried, which...`,
    content: `Good evening! I'm [Your name], and before I start, I want to say that [Bride's name] looks absolutely stunning tonight. And [Groom's name], you also look like you tried, which is all anyone can ask.

I met these two separately and introduced them at a barbecue three years ago. I take full credit. You're welcome. I also take no responsibility for the six months of double dates I was subjected to where they held hands under the table and pretended they weren't.

What I love about [Bride's name] and [Groom's name] is that they bring out each other's best qualities. [Bride's name] is organised, ambitious, and always has a plan. [Groom's name] is spontaneous, easygoing, and has never had a plan in his life. Together, they actually get things done while still having fun, which is basically the dream.

I also want to mention that [Groom's name] practised his vows in front of me last week and genuinely made me cry. And then he made a joke about it, because he can never let a sincere moment breathe. Classic [Groom's name].

These two don't need my advice on love. They've figured it out. They choose each other every day, they make each other laugh, and they've built a life that's full of warmth and joy.

So please raise your glasses. To [Bride's name] and [Groom's name], the best couple I know, and the best thing to ever come out of one of my barbecues. Cheers!`,
    authorName: 'Amy Richardson',
    weddingRole: 'Friend',
    tags: ['balanced', 'lighthearted', 'matchmaker'],
  },

  {
    slug: 'lighthearted-warm-funny-speech-3',
    title: `The couple who makes it look easy`,
    category: 'lighthearted-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 1.9,
    wordCount: 247,
    excerpt: `Hello everyone. I'm [Your name], and I promise to keep this short because I know you're all waiting for the cake. I've been friends with [Bride's name] for about eight years now...`,
    content: `Hello everyone. I'm [Your name], and I promise to keep this short because I know you're all waiting for the cake.

I've been friends with [Bride's name] for about eight years now, and one of the things I admire most about her is her ability to find joy in absolutely everything. A good cup of coffee, a dog in the park, a really well-organised spreadsheet. She's someone who makes the world feel a little brighter just by being in it.

When she met [Groom's name], I could tell immediately that he got it. He understood that her enthusiasm isn't performative - it's genuine. And instead of thinking it was too much, he matched it. The first time I saw them together, they were debating the best type of crisp with the intensity of a parliamentary session. I thought, these two are perfect.

What makes them special as a couple is that they don't try to be perfect. They burn dinner and laugh about it. They get lost and make an adventure out of it. They disagree about absolutely everything on Netflix and somehow always end up watching the same show anyway.

Love isn't always grand gestures and sweeping declarations. Sometimes it's someone remembering how you take your tea, or texting you a photo of a dog that looks like yours. [Bride's name] and [Groom's name] understand that, and it shows.

To the couple who makes love look easy, even when it isn't - may you always find joy in the small things, and may the big things take care of themselves. To [Bride's name] and [Groom's name]!`,
    authorName: 'Hannah Torres',
    weddingRole: 'Friend',
    tags: ['heartfelt', 'lighthearted', 'joyful'],
  },

  // ── Second Marriage Speech (3) ──────────────────────────────

  {
    slug: 'second-marriage-new-chapter-speech-1',
    title: `The best chapters are still unwritten`,
    category: 'second-marriage-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.2,
    wordCount: 285,
    excerpt: `Good evening everyone. I'm [Your name], and I've had the privilege of watching [Groom's name] navigate some of life's toughest chapters. Standing here tonight, seeing the joy on...`,
    content: `Good evening everyone. I'm [Your name], and I've had the privilege of watching [Groom's name] navigate some of life's toughest chapters. Standing here tonight, seeing the joy on his face, I can tell you that this is the chapter he was always meant to reach.

Life doesn't always go according to plan. Most of us know that. And [Groom's name] has had his share of detours, disappointments, and moments where the road ahead looked uncertain. But what I admire most about him is that he never let those experiences make him bitter. He let them make him wiser. More patient. More intentional about what he wanted.

And then he met [Bride's name]. I remember the phone call. He was quiet at first, almost cautious. Then he said, "I think I've found something I'd given up looking for." There was no rush, no grand declaration, just a steady, certain kind of happiness that I'd never heard from him before.

[Bride's name], you walked into his life at exactly the right time. Not because he needed saving, but because he was finally ready to be loved the way you love him, fully and without reservation. You see the man he is today, not the sum of his past. And that matters more than I think you know.

To the people who say second chances are somehow less than first ones - look at these two. Look at the way they look at each other. There's nothing "less than" about this. This is love in its most honest, courageous form.

Please raise your glasses. To [Bride's name] and [Groom's name] - proof that the best chapters are the ones you didn't see coming. Congratulations.`,
    authorName: 'Michael Ashford',
    weddingRole: 'Friend',
    tags: ['heartfelt', 'second marriage', 'new beginnings'],
  },

  {
    slug: 'second-marriage-fresh-start-speech-2',
    title: `Love is braver the second time around`,
    category: 'second-marriage-speech',
    tone: 'balanced' as const,
    durationMinutes: 2.0,
    wordCount: 262,
    excerpt: `Hi everyone. I'm [Your name], and I want to start by saying something that I think is important. It takes real courage to open your heart again. To look at love and say, "Yes...`,
    content: `Hi everyone. I'm [Your name], and I want to start by saying something that I think is important. It takes real courage to open your heart again. To look at love and say, "Yes, I'll try this again," knowing full well that it isn't guaranteed. [Bride's name] and [Groom's name] didn't just find love, they chose it, bravely and deliberately.

I've known [Bride's name] for nearly fifteen years. I was there during the difficult times, the quiet evenings where she wasn't sure what the future looked like. And I was there the morning she called me, laughing, to tell me she'd been on the best date of her life with someone called [Groom's name] who made her laugh so hard she snorted coffee out of her nose. I knew right then.

What I admire about these two is that they came into this relationship as whole, complete people. They weren't looking for someone to fix them. They were looking for someone to share the life they'd already built. And they found that in each other.

[Groom's name], you bring a calm, steady presence that balances [Bride's name] perfectly. And [Bride's name], you bring a warmth and energy that lights up every room, including his life.

Some people might think second marriages carry less weight. I think the opposite. When you've lived enough to know what doesn't work, choosing to love again is one of the bravest things you can do.

To [Bride's name] and [Groom's name] - thank you for reminding all of us that love doesn't have an expiration date. Here's to your beautiful new beginning. Cheers!`,
    authorName: 'Caroline West',
    weddingRole: 'Friend',
    tags: ['balanced', 'second marriage', 'courage'],
  },

  {
    slug: 'second-marriage-joyful-speech-3',
    title: `Round two, and this time it's perfect`,
    category: 'second-marriage-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 271,
    excerpt: `Evening everyone! I'm [Your name], and I've been friends with [Groom's name] long enough to have attended his first wedding, which I'm told I'm not supposed to mention. So I won't...`,
    content: `Evening everyone! I'm [Your name], and I've been friends with [Groom's name] long enough to have attended his first wedding, which I'm told I'm not supposed to mention. So I won't. Moving on.

What I will say is this. There's a version of [Groom's name] from five years ago who was genuinely convinced he'd spend the rest of his life perfecting his sourdough starter and talking to his cat. And honestly? He was pretty good at both. But then [Bride's name] came along, and suddenly the sourdough took a backseat. The cat still gets plenty of attention, don't worry.

[Groom's name] once told me, "The great thing about being older and wiser is that you stop worrying about whether love is perfect and start appreciating when it's real." I thought that was surprisingly profound for a man who once microwaved a fork.

[Bride's name], you should know that you are the reason this man has regained his enthusiasm for life, for plans, for the future. Before you, his biggest weekend ambition was reorganising his bookshelf by genre. Now he's booking holidays, trying new restaurants, and, I believe, learning to dance. Badly, but still.

What I see between you two isn't just love. It's relief. The relief of finding someone who fits, who understands, who makes the hard-won wisdom of past experience feel like it was all leading somewhere good.

So here's to [Bride's name] and [Groom's name] - two people who prove that life's plot twists can lead to the best endings. Or beginnings. However you want to look at it. To the happy couple!`,
    authorName: 'Patrick Gallagher',
    weddingRole: 'Friend',
    tags: ['funny', 'second marriage', 'new beginnings'],
  },

  // ── Blended Family Speech (3) ───────────────────────────────

  {
    slug: 'blended-family-stepparent-love-speech-1',
    title: `When two families became one`,
    category: 'blended-family-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.3,
    wordCount: 296,
    excerpt: `Good evening everyone. I'm [Your name], and I have the honour of speaking tonight as someone who has watched two families become one, not overnight, not without effort, but with...`,
    content: `Good evening everyone. I'm [Your name], and I have the honour of speaking tonight as someone who has watched two families become one, not overnight, not without effort, but with more love and patience than I thought possible.

When [Bride's name] and [Groom's name] first got together, it wasn't just about two people falling in love. It was about kids adjusting to new routines, about navigating school pickups and bedtime stories and figuring out who sits where at the dinner table. It was complicated. Anyone who says blending a family is simple has never actually done it.

But here's what I watched happen. I watched [Groom's name] learn the names of every stuffed animal in [Bride's name]'s daughter's collection. All forty-seven of them. I watched [Bride's name] sit through three football matches in the rain because [Groom's name]'s son needed someone cheering from the sideline. I watched two sets of children go from awkward silence at the table to arguing about whose turn it was to pick the film, which, if you know kids, is actually a sign of real progress.

This family wasn't built on a single moment. It was built on hundreds of small ones. Packed lunches made with care, bedtime stories read in funny voices, Saturday mornings where everyone piled onto the sofa and nobody had anywhere else to be.

[Bride's name] and [Groom's name], what you've created together isn't just a marriage. It's a home. A real one, messy and loud and full of love.

To the entire family, the big, beautiful, blended lot of you - may your home always be full of laughter, your table always have enough chairs, and your love always have room to grow. Congratulations.`,
    authorName: 'Sarah Whitmore',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'blended family', 'stepfamily'],
  },

  {
    slug: 'blended-family-sibling-perspective-speech-2',
    title: `More family, more love`,
    category: 'blended-family-speech',
    tone: 'balanced' as const,
    durationMinutes: 2.0,
    wordCount: 255,
    excerpt: `Hi everyone. I'm [Your name], and I want to talk about something that doesn't always get said at weddings. Blending a family is hard. It's really hard. There are awkward dinners...`,
    content: `Hi everyone. I'm [Your name], and I want to talk about something that doesn't always get said at weddings. Blending a family is hard. It's really hard. There are awkward dinners, competing loyalties, and moments where nobody knows quite what to call each other. I know, because I've lived it.

When [Bride's name] came into our lives, I wasn't sure what to expect. I was protective of my dad, protective of our routine, and honestly a bit scared that things would change in ways I couldn't control. And they did change. But not in the way I feared.

[Bride's name] never tried to replace anyone. She didn't come in and rearrange everything. She just showed up, consistently, with kindness. She asked about my day and actually listened to the answer. She learned that I hate mushrooms and quietly started making a separate portion. She remembered things that mattered to me, small things that most people forget.

That's how trust is built. Not with grand gestures, but with a thousand tiny ones.

And Dad, I've watched you become lighter since [Bride's name] came along. You laugh more. You worry less. You've stopped pretending to be fine and actually started being fine. That's a gift, and I'm grateful for it.

To [Bride's name] and Dad - thank you for showing me that families aren't defined by how they start, but by how they choose to love each other every day. This family is bigger and better because of you both.

Raise your glasses, everyone. To love, to family, and to second helpings at the dinner table. Cheers!`,
    authorName: 'Jamie Hartley',
    weddingRole: 'Family Member',
    tags: ['balanced', 'blended family', 'stepfamily', 'personal'],
  },

  {
    slug: 'blended-family-joyful-chaos-speech-3',
    title: `Beautiful chaos and a whole lot of love`,
    category: 'blended-family-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 270,
    excerpt: `Good evening everyone. I'm [Your name], and if you're wondering who I am in this wonderfully complicated family tree, honestly, so am I sometimes. What I can tell you is that I've...`,
    content: `Good evening everyone. I'm [Your name], and if you're wondering who I am in this wonderfully complicated family tree, honestly, so am I sometimes. What I can tell you is that I've had a front-row seat to the beautiful chaos that is this family.

Let me give you a snapshot of a typical Sunday at [Bride's name] and [Groom's name]'s house. There are at least four different arguments happening about what to watch on telly. Someone's hamster has escaped again. The dog is eating something it shouldn't. [Groom's name] is trying to cook a roast while mediating a dispute about whose turn it is on the PlayStation. [Bride's name] is on the phone pretending she can't hear any of it. It is, in a word, magnificent.

Because underneath all that noise is something really special. Every person in that house knows they belong there. Every child knows they are loved. Not because someone shares their surname, but because someone chose them.

I remember the early days, when everyone was being painfully polite. The kids ate vegetables without complaining. Nobody argued over the bathroom. It was unnatural. But slowly, beautifully, the walls came down. The first real argument over a board game was actually a milestone. It meant everyone felt safe enough to be themselves.

[Bride's name] and [Groom's name], you didn't just build a relationship. You built a family from scratch, with patience, humour, and an unreasonable number of trips to the supermarket.

To the whole wonderful, loud, complicated family - may the hamster always be found, and may the love never run out. To [Bride's name] and [Groom's name]!`,
    authorName: 'Liz Prendergast',
    weddingRole: 'Family Member',
    tags: ['funny', 'blended family', 'chaos', 'warmth'],
  },

  // ── Destination Wedding Speech (3) ──────────────────────────

  {
    slug: 'destination-wedding-tropical-speech-1',
    title: `From airport chaos to paradise perfection`,
    category: 'destination-wedding-speech',
    tone: 'funny' as const,
    durationMinutes: 2.2,
    wordCount: 289,
    excerpt: `Good evening everyone, and can I just say, if I'd known all it took to get a holiday in the sun was [Groom's name] getting married, I'd have set him up with someone years ago...`,
    content: `Good evening everyone, and can I just say, if I'd known all it took to get a holiday in the sun was [Groom's name] getting married, I'd have set him up with someone years ago. I'm [Your name], the best man, and I have to admit, when [Groom's name] told me they were getting married abroad, my first thought was, "Open bar in the sunshine? I'm in."

Getting here was its own adventure. [Groom's name]'s uncle fell asleep on the transfer bus and ended up at the wrong hotel. [Bride's name]'s mum packed enough sunscreen for the entire resort. And I personally managed to lose my luggage, my room key, and my dignity at the pool bar - all within the first three hours.

But here's the thing about a destination wedding. It strips everything back to what matters. There's no fussing about table centrepieces or car park logistics. It's just the people who love you most, in a beautiful place, celebrating something real.

[Groom's name], you've been my best mate for fifteen years. I've seen you at your best and your worst, usually at the same party. But I've never seen you the way you are with [Bride's name]. She grounds you. She challenges you. And she somehow convinced you to wear linen trousers, which I genuinely didn't think was possible.

[Bride's name], you picked a stunning setting for a stunning day. But nothing in this place is as beautiful as the way [Groom's name] looked at you when you walked down that aisle.

So let's raise our slightly sunburnt hands and our hopefully full glasses. To [Bride's name] and [Groom's name] - the best reason I've ever had to apply for a new passport. Cheers!`,
    authorName: 'Chris Alderton',
    weddingRole: 'Best Man',
    tags: ['funny', 'destination wedding', 'tropical'],
  },

  {
    slug: 'destination-wedding-heartfelt-europe-speech-2',
    title: `Love worth travelling for`,
    category: 'destination-wedding-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.0,
    wordCount: 261,
    excerpt: `Good evening. I'm [Your name], and I want to start by saying that standing here, in this incredible place, surrounded by the people who matter most to [Bride's name] and [Groom's...`,
    content: `Good evening. I'm [Your name], and I want to start by saying that standing here, in this incredible place, surrounded by the people who matter most to [Bride's name] and [Groom's name] - this is one of those moments I know I'll remember for the rest of my life.

Everyone in this room made a choice to be here. They booked flights, arranged time off work, packed their bags, and crossed borders to be part of this day. That tells you something about these two. People travel for them because they would travel for anyone in this room without a second thought.

I've had the honour of being [Groom's name]'s best man, and I don't take that lightly. He's the person who flew out to see me when I was living abroad and feeling lost. He's the person who stays on the phone for an hour even when there's nothing left to say, because he knows sometimes you just need someone there.

[Bride's name], from the moment you entered his life, I watched something shift. He became more himself, if that makes sense. More confident, more open, more willing to dream big. This wedding, in this place, is proof of that. Two years ago, he never would have planned something this bold. You gave him the courage.

Look around you. The people, the setting, the love in this room - this is what happens when two good people find each other and aren't afraid to build something beautiful.

To [Bride's name] and [Groom's name] - may your marriage be as breathtaking as the view, and may your love always feel worth the journey. Congratulations.`,
    authorName: 'Tom Beaumont',
    weddingRole: 'Best Man',
    tags: ['heartfelt', 'destination wedding', 'europe'],
  },

  {
    slug: 'destination-wedding-balanced-speech-3',
    title: `Worth every mile and every minute`,
    category: 'destination-wedding-speech',
    tone: 'balanced' as const,
    durationMinutes: 2.1,
    wordCount: 277,
    excerpt: `Hello everyone. I'm [Your name], the best man, and I want to acknowledge something. Every single person here has gone above and beyond to be part of today. Some of you flew...`,
    content: `Hello everyone. I'm [Your name], the best man, and I want to acknowledge something. Every single person here has gone above and beyond to be part of today. Some of you flew halfway around the world. Some of you navigated airports in languages you don't speak. At least one of you - and I won't name names - forgot their passport and had to turn around on the motorway. You know who you are.

But that's the power of [Bride's name] and [Groom's name]. They're the kind of couple you'd cross oceans for. And clearly, several of you did.

I've known [Groom's name] for over a decade, and I've never known him to do anything small. When he commits, he goes all in. That's true of his friendships, his career, and now his marriage. Choosing to get married in this beautiful location wasn't about showing off. It was about creating a moment that matches how big this love feels to both of them.

[Bride's name], I want to thank you personally for making my best friend so annoyingly happy. Before you, he was already a good man. With you, he's the best version of himself. You push each other, support each other, and from what I've seen, also ruthlessly compete against each other at any available board game.

And [Groom's name], you've found someone who isn't just willing to go on this adventure with you, she's the reason the adventure is worth having.

So let's raise our glasses. To [Bride's name] and [Groom's name], to this incredible setting, and to the fact that love is always, always worth the trip. May your journey together be the greatest one yet. Cheers!`,
    authorName: 'Ryan Gallagher',
    weddingRole: 'Best Man',
    tags: ['balanced', 'destination wedding', 'travel'],
  },
// ── Interfaith Wedding Speech (Family Member) ──────────────

  {
    slug: 'interfaith-family-blessing-1',
    title: `A Family's Blessing Across Two Faiths`,
    category: 'interfaith-wedding-speech',
    tone: 'heartfelt',
    durationMinutes: 2.1,
    wordCount: 274,
    excerpt: `Good evening, everyone. I'm [Your name], [Bride's name]'s aunt. When [Bride's name] first told us she was marrying [Groom's name], I'll be honest...`,
    content: `Good evening, everyone. I'm [Your name], [Bride's name]'s aunt. When [Bride's name] first told us she was marrying [Groom's name], I'll be honest, I had questions.

Not about him as a person, because anyone who spends five minutes with [Groom's name] can see he's kind, thoughtful, and completely devoted to my niece. My questions were about how two families from different traditions would come together.\n\nI got my answer at their first joint holiday dinner. [Groom's name]'s mother taught my sister how to make her grandmother's recipe from scratch, and my sister shared our family's traditions right back.

By the end of the night, we were all around one table, laughing about how both families share the exact same philosophy - that food is love.\n\nWhat I've learned from watching these two is that faith isn't a wall. It's a window. [Bride's name] and [Groom's name] haven't asked each other to shrink.

They've asked each other to grow. They light candles from both traditions. They honour both calendars.

They've built something that doesn't erase where they come from but celebrates where they're going together.\n\nToday's ceremony was proof of that. Elements from both traditions, woven together so beautifully that it felt like they were always meant to go side by side.\n\nSo from one very proud aunt, I want to say this: [Bride's name] and [Groom's name], you are not just joining two lives. You are joining two families, two histories, and two beautiful ways of seeing the world.

And the world is better for it.\n\nPlease raise your glasses to [Bride's name] and [Groom's name]. To love without borders. Cheers.`,
    authorName: 'Patricia Novak',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'interfaith', 'family'],
  },

  {
    slug: 'interfaith-uncle-funny-2',
    title: `Two Faiths, One Confused Uncle`,
    category: 'interfaith-wedding-speech',
    tone: 'funny',
    durationMinutes: 1.8,
    wordCount: 237,
    excerpt: `Hello, everyone. I'm [Your name], [Groom's name]'s uncle, and I have to say, planning for this wedding has been the most educational experience of my life. I now know more about...`,
    content: `Hello, everyone. I'm [Your name], [Groom's name]'s uncle, and I have to say, planning for this wedding has been the most educational experience of my life. I now know more about two different religious calendars than I ever expected to.

At one point I had three apps on my phone just to figure out which dates worked for everyone.\n\nBut here's what I really want to talk about. I watched [Groom's name] learn [Bride's name]'s prayers. Not because anyone made him, but because he wanted to.

He practised the pronunciation in the car for weeks. He got it wrong about forty times, and [Bride's name] just kept patiently correcting him, which honestly is the most married thing I've ever seen.\n\nAnd [Bride's name], you showed up to our family reunion last summer already knowing everyone's name, their kids' names, and which cousin to avoid talking to about politics. That is advanced-level dedication.\n\nThe truth is, these two don't just tolerate each other's differences.

They're genuinely curious about them. And that curiosity has turned two very different families into one very loud, very well-fed, very happy group of people.\n\nSo whether you're here from [Bride's name]'s side, [Groom's name]'s side, or like me, you've just been enjoying the open bar from both sides, let's raise a glass. To [Bride's name] and [Groom's name], who prove that love is the one language everybody speaks. Cheers!`,
    authorName: 'Martin Schreiber',
    weddingRole: 'Family Member',
    tags: ['funny', 'interfaith', 'family'],
  },

  {
    slug: 'interfaith-grandmother-balanced-3',
    title: `A Grandmother's Perspective on Love Across Traditions`,
    category: 'interfaith-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 221,
    excerpt: `Good evening, dear ones. I'm [Your name], [Bride's name]'s grandmother. I won't pretend I wasn't surprised when [Bride's name] first brought [Groom's name] home. Different trad...`,
    content: `Good evening, dear ones. I'm [Your name], [Bride's name]'s grandmother. I won't pretend I wasn't surprised when [Bride's name] first brought [Groom's name] home.

Different traditions, different backgrounds, and honestly, I wasn't sure how it would all work. But then [Groom's name] sat down at my kitchen table, complimented my cooking, and asked for seconds. That boy had me sold.\n\nOver the years I've watched them navigate things that might trip up other couples.

Whose family do we visit for which holiday? How do we explain our traditions to each other's relatives? And every single time, they figured it out with patience and a little bit of humour.\n\nLast year, [Groom's name] helped me prepare for one of our family celebrations.

He peeled potatoes, set the table, and asked me to tell him the story behind every dish. No one had asked me that in years, and it meant more than he probably knows.\n\nAt my age, you learn that love isn't about two people being the same. It's about two people choosing each other, again and again, even when it would be easier not to.

[Bride's name] and [Groom's name] choose each other every single day.\n\nSo from a grandmother who's seen a lot of love in her time, this is the real thing. Please join me in toasting these two extraordinary people. To [Bride's name] and [Groom's name].`,
    authorName: 'Eleanor Whitfield',
    weddingRole: 'Family Member',
    tags: ['balanced', 'interfaith', 'grandmother'],
  },

  // ── LGBTQ+ Wedding Speech (Best Friend) ────────────────────

  {
    slug: 'lgbtq-best-friend-heartfelt-1',
    title: `The Love Story I Got to Watch Unfold`,
    category: 'lgbtq-wedding-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 259,
    excerpt: `Hi, everyone. I'm [Your name], and I've been [Partner 1's name]'s best friend since we were fourteen and bonded over our equally terrible taste in early 2000s music. I'm not goin...`,
    content: `Hi, everyone. I'm [Your name], and I've been [Partner 1's name]'s best friend since we were fourteen and bonded over our equally terrible taste in early 2000s music. I'm not going to stand up here and pretend I'm not going to cry, because I absolutely am.\n\nI was there the night [Partner 1's name] came home from that first date with [Partner 2's name] and called me from the car park because they were too excited to drive.

I listened to a twenty-minute recap of a conversation about, of all things, breakfast cereals. And I thought, okay, this one's different.\n\nI was right. [Partner 2's name] didn't just become [Partner 1's name]'s partner.

They became family to all of us. They remembered my mum's birthday. They drove two hours in the rain when my car broke down.

They showed up, consistently, in the quiet ways that actually matter.\n\nAnd [Partner 1's name], you changed too. Not in a bad way. You became calmer.

Happier. More yourself, if that makes sense. Like you'd been wearing shoes a half size too small your whole life and finally found the ones that fit.\n\nI know the road to this day wasn't always easy.

There were conversations that shouldn't have been necessary and doors that should have been open. But you two built this life anyway, brick by brick, with so much grace.\n\nSo here's to [Partner 1's name] and [Partner 2's name]. You are proof that love, real love, is worth every single step it takes to get here.

I love you both. Cheers.`,
    authorName: 'Danielle Moreau',
    weddingRole: 'Best Friend',
    tags: ['heartfelt', 'lgbtq', 'best friend'],
  },

  {
    slug: 'lgbtq-best-friend-funny-2',
    title: `Finally, Someone Else Can Deal With Them`,
    category: 'lgbtq-wedding-speech',
    tone: 'funny',
    durationMinutes: 1.8,
    wordCount: 230,
    excerpt: `Good evening! I'm [Your name], [Partner 1's name]'s best friend, unofficial therapist, and until today, their emergency contact. [Partner 2's name], congratulations - that respon...`,
    content: `Good evening! I'm [Your name], [Partner 1's name]'s best friend, unofficial therapist, and until today, their emergency contact. [Partner 2's name], congratulations - that responsibility is officially yours now.\n\nI want to take you all back to the night these two met.

[Partner 1's name] texted me a photo of [Partner 2's name] with the caption "I think I'm in trouble." And I texted back, "You absolutely are." I've never been more right about anything.\n\nWithin two weeks, [Partner 1's name] had reorganised their entire Spotify around [Partner 2's name]'s music taste. Within a month, they were finishing each other's sentences. Within three months, they adopted a cat together, which as we all know, is the real commitment.\n\nNow, [Partner 2's name], I need to give you the best friend briefing.

[Partner 1's name] cannot be trusted to remember where they left their keys, their wallet, or their phone. They will suggest camping at least once a year. Do not agree.

They claim they can cook, and technically that's true, but only if you count toast.\n\nBut here's the thing - [Partner 1's name] will also be the first person at your door when things go wrong, the one who makes you laugh when you don't want to, and the most fiercely loyal partner you could ask for. I should know. I've had the job for fifteen years.\n\nTo [Partner 1's name] and [Partner 2's name] - the best couple I know. Cheers!`,
    authorName: 'Rowan Sinclair',
    weddingRole: 'Best Friend',
    tags: ['funny', 'lgbtq', 'best friend'],
  },

  {
    slug: 'lgbtq-best-friend-balanced-3',
    title: `Two Hearts, One Beautiful Future`,
    category: 'lgbtq-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.9,
    wordCount: 248,
    excerpt: `Hello, everyone. I'm [Your name], and I've known [Partner 1's name] since university, back when they thought cargo shorts were a personality trait. We've come a long way since th...`,
    content: `Hello, everyone. I'm [Your name], and I've known [Partner 1's name] since university, back when they thought cargo shorts were a personality trait. We've come a long way since then.\n\nI remember the first time [Partner 1's name] mentioned [Partner 2's name].

It was subtle, just a name dropped into conversation a little too casually. I knew immediately. When you've been someone's best friend long enough, you learn to read between the lines.\n\nWhat I didn't expect was how quickly [Partner 2's name] became essential.

Not just to [Partner 1's name], but to our whole group. Game nights improved because [Partner 2's name] actually reads the rules. Road trips got better because someone finally made a proper playlist.

And honestly, our group chat is funnier now.\n\nBut beyond the laughs, I've watched these two do the hard stuff too. Moving cities together. Supporting each other through job changes and family stuff.

Having the tough conversations that most people avoid. They don't just love each other when it's easy. They show up for each other when it's really not.\n\nThat's what today is about.

It's not just a party, although it is a very good party. It's a celebration of two people who've already proven what they are to each other, making it official in front of everyone who loves them.\n\n[Partner 1's name] and [Partner 2's name], you make each other better, braver, and happier. And that's all any of us could want for the people we love. To the happy couple!`,
    authorName: 'Jamie Okonkwo',
    weddingRole: 'Best Friend',
    tags: ['balanced', 'lgbtq', 'best friend'],
  },

  // ── Elopement Reception Speech (Friend) ────────────────────

  {
    slug: 'elopement-friend-funny-1',
    title: `Thanks for the Invite... Oh Wait`,
    category: 'elopement-reception-speech',
    tone: 'funny',
    durationMinutes: 1.7,
    wordCount: 226,
    excerpt: `Well, well, well. I'm [Your name], and like the rest of you, I found out [Bride's name] and [Groom's name] got married via a text message. A text message, people. Not even a phon...`,
    content: `Well, well, well. I'm [Your name], and like the rest of you, I found out [Bride's name] and [Groom's name] got married via a text message. A text message, people.

Not even a phone call. I was in the cereal aisle at the supermarket when I got the news. I dropped a box of cornflakes.\n\nNow, I could stand up here and pretend I wasn't a little offended.

But honestly? This is the most [Bride's name] and [Groom's name] thing they've ever done. These two have always done things their own way, from their first date at a launderette to the time they booked a holiday without telling anyone and we all thought they'd been abducted.\n\nSo they eloped.

Good for them. They skipped the seating chart drama, the DJ arguments, and the months of debating napkin colours. Meanwhile, the rest of us are here tonight, well-fed and well-watered, with absolutely zero responsibilities.

I'd say we got the better deal.\n\nBut in all seriousness, [Bride's name] and [Groom's name], I'm happy you did it your way. You two have never needed an audience to prove your love. You just needed each other, and apparently, a courthouse and two witnesses you found in the hallway.\n\nSo let's raise a glass to the couple who got married without us and then threw us a party anyway.

That's love and good manners. Cheers!`,
    authorName: 'Lucy Hargrove',
    weddingRole: 'Friend',
    tags: ['funny', 'elopement', 'friend'],
  },

  {
    slug: 'elopement-friend-heartfelt-2',
    title: `They Didn't Need Us There, But We're Glad to Be Here`,
    category: 'elopement-reception-speech',
    tone: 'heartfelt',
    durationMinutes: 1.8,
    wordCount: 234,
    excerpt: `Hi, everyone. I'm [Your name], and I've been friends with [Bride's name] for over a decade now. When she told me they'd eloped, my first thought wasn't disappointment. It was, of...`,
    content: `Hi, everyone. I'm [Your name], and I've been friends with [Bride's name] for over a decade now. When she told me they'd eloped, my first thought wasn't disappointment.

It was, of course they did. Because that's who they are.\n\n[Bride's name] and [Groom's name] have never been the kind of couple who need a spotlight. They're the couple who leave parties early to go walk the dog together.

They're the ones who'd rather cook dinner at home than go somewhere fancy. Their love has always been quiet and steady and completely sure of itself.\n\nSo the fact that they stood in front of each other, just the two of them, and made those promises? It makes perfect sense.

They didn't need a crowd to mean it. They just needed each other.\n\nBut here's the beautiful part - they still wanted to celebrate with us. Not because they had to, but because we matter to them and they matter to us.

This party tonight is their way of saying, we did the important part, now let's have the fun part.\n\nI've watched [Bride's name] grow into the happiest, most grounded version of herself since [Groom's name] came into her life. And [Groom's name], you should know, she talks about you like you hung the moon.\n\nSo here's to the couple who proved you don't need a big wedding to have a big love. [Bride's name] and [Groom's name], we're so happy you're happy. To the newlyweds.`,
    authorName: 'Sarah Patel',
    weddingRole: 'Friend',
    tags: ['heartfelt', 'elopement', 'friend'],
  },

  {
    slug: 'elopement-friend-balanced-3',
    title: `Celebrating the Couple Who Skipped the Queue`,
    category: 'elopement-reception-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 208,
    excerpt: `Good evening. I'm [Your name], and I've been friends with [Groom's name] since we were teenagers getting into trouble at school. So when he told me he'd gone and got married with...`,
    content: `Good evening. I'm [Your name], and I've been friends with [Groom's name] since we were teenagers getting into trouble at school. So when he told me he'd gone and got married without me, I did what any best mate would do.

I sent a passive-aggressive congratulations text, followed by three crying-laughing emojis.\n\nBut the truth is, once the initial shock wore off, I couldn't think of a more fitting way for these two to start their marriage. [Groom's name] has never been one for fuss. He proposed to [Bride's name] on a Tuesday morning over scrambled eggs.

That's just who he is.\n\nAnd [Bride's name] is the same. She once told me that the best moments in life are the ones that happen quietly. I think she's right, and I think their elopement proves it.\n\nWhat I love about tonight is that we get all the good bits of a wedding - the food, the drinks, the speeches, the dancing - without any of the stress.

Nobody's worrying about timelines or table plans. We're just here to celebrate two people who are already married and already happy.\n\n[Bride's name] and [Groom's name], you did it your way, and it was perfect. Now we get to do it our way, which involves a lot more champagne. To the happy couple!`,
    authorName: 'Connor Walsh',
    weddingRole: 'Friend',
    tags: ['balanced', 'elopement', 'friend'],
  },

  // ── Postponed Wedding Speech (Friend) ──────────────────────

  {
    slug: 'postponed-wedding-friend-funny-1',
    title: `The Wedding That Took Three Calendars`,
    category: 'covid-postponed-wedding-speech',
    tone: 'funny',
    durationMinutes: 1.8,
    wordCount: 238,
    excerpt: `Good evening, everyone! I'm [Your name], and if you're wondering why I look slightly bewildered to be here, it's because I've had this speech saved in three different versions on...`,
    content: `Good evening, everyone! I'm [Your name], and if you're wondering why I look slightly bewildered to be here, it's because I've had this speech saved in three different versions on my phone for the last two years. Each time the date changed, I tweaked it.

The first version started with a joke about 2020. The second version started with a joke about 2021. By the third, I just wrote "Are we actually doing this?" at the top.\n\nBut here we are.

We're actually doing this. And can I just say, [Bride's name] and [Groom's name], your patience has been genuinely heroic. Most couples plan a wedding once.

You planned one three times. You deserve a medal, or at the very least, an extra week of honeymoon.\n\nThe thing about waiting, though, is that it proved something we already knew. These two were never in a rush because the wedding was never the point.

The marriage was the point. They've basically been married since the first lockdown anyway, when [Groom's name] discovered that [Bride's name] rearranges the dishwasher after he loads it, and he chose to stay.\n\nSo tonight, finally, gloriously, we get to raise a glass to these two incredible people. [Bride's name] and [Groom's name], thank you for waiting for all of us to be here.

It was absolutely, completely, one hundred percent worth the wait. To the couple who refused to give up. Cheers!`,
    authorName: 'Olivia Brennan',
    weddingRole: 'Friend',
    tags: ['funny', 'postponed wedding', 'friend'],
  },

  {
    slug: 'postponed-wedding-friend-heartfelt-2',
    title: `Worth Every Single Day of Waiting`,
    category: 'covid-postponed-wedding-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 256,
    excerpt: `Hi, everyone. I'm [Your name], a close friend of [Bride's name] and [Groom's name]. I want to talk about what the last couple of years taught us about these two, because honestly...`,
    content: `Hi, everyone. I'm [Your name], a close friend of [Bride's name] and [Groom's name]. I want to talk about what the last couple of years taught us about these two, because honestly, it taught me a lot.\n\nWhen the wedding was first postponed, [Bride's name] called me, and she was so calm it was almost unsettling.

She just said, "It'll happen when it's supposed to happen." And [Groom's name] was the same. No drama. No bitterness.

Just quiet certainty that they'd get here eventually.\n\nMeanwhile, the rest of us were losing it. We were refreshing news sites, arguing with relatives on video calls, and forgetting what day it was. But [Bride's name] and [Groom's name] were just, steady.

They cooked together. They went for walks. They turned a spare room into a home office and then painted it three times because they couldn't agree on the colour.\n\nThey didn't need a wedding to prove they were committed.

They proved it every single ordinary day. The wedding was always just the celebration. The love was already there.\n\nAnd now, finally, we're all in the same room, dressed up, together.

Look around. Every person here chose to be here today because [Bride's name] and [Groom's name] mean something to them. That's not a small thing.\n\nSo to the couple who waited with grace, who loved without pause, and who threw a party that was absolutely worth every rescheduled date - [Bride's name] and [Groom's name], we love you. To the newlyweds.`,
    authorName: 'David Kimura',
    weddingRole: 'Friend',
    tags: ['heartfelt', 'postponed wedding', 'friend'],
  },

  {
    slug: 'postponed-wedding-friend-balanced-3',
    title: `Better Late Than Never, and Better Than Ever`,
    category: 'covid-postponed-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 213,
    excerpt: `Hello, everyone. I'm [Your name]. I've been friends with [Groom's name] since school, and I've been looking forward to giving this speech for what feels like approximately seven y...`,
    content: `Hello, everyone. I'm [Your name]. I've been friends with [Groom's name] since school, and I've been looking forward to giving this speech for what feels like approximately seven years, though I'm told it was closer to two.\n\nI had a whole bit planned about the postponement, but honestly, I think we've all heard enough about that.

What I'd rather talk about is what happened in the gap. Because while the rest of us were going slightly mad, [Groom's name] and [Bride's name] were building a life.\n\nThey moved house. They adopted a dog called Biscuit, who is objectively the best dog in the world.

They started running together in the mornings, which is frankly suspicious behaviour if you ask me, but they seemed to enjoy it.\n\nThe point is, the delay didn't stall them. If anything, it made them more solid. By the time the new date was set, they weren't just ready for a wedding.

They were ready for a marriage, and there's a difference.\n\nSo tonight, I want to say two things. First, [Bride's name] and [Groom's name], I'm incredibly proud to call you my friends. And second, this party was worth the wait, but not half as much as you two were worth waiting for.\n\nPlease raise your glasses.

To [Bride's name] and [Groom's name]. Finally. Cheers.`,
    authorName: 'Nathan Bridges',
    weddingRole: 'Friend',
    tags: ['balanced', 'postponed wedding', 'friend'],
  },

  // ── Surprise Wedding Speech (Guest) ────────────────────────

  {
    slug: 'surprise-wedding-guest-funny-1',
    title: `I Was Told This Was a Birthday Party`,
    category: 'surprise-wedding-speech',
    tone: 'funny',
    durationMinutes: 1.5,
    wordCount: 197,
    excerpt: `Okay, I need to address the elephant in the room. I'm [Your name], and roughly forty-five minutes ago, I thought I was at a garden party. I'm wearing sandals, people. Sandals. If...`,
    content: `Okay, I need to address the elephant in the room. I'm [Your name], and roughly forty-five minutes ago, I thought I was at a garden party. I'm wearing sandals, people.

Sandals. If I'd known there was going to be a wedding, I would have at least ironed my shirt.\n\nBut you know what? This is peak [Bride's name] and [Groom's name].

They've always been full of surprises. Remember the time [Groom's name] surprised [Bride's name] with a kitten on Valentine's Day? Or when [Bride's name] surprised [Groom's name] with that road trip that turned out to be a three-day adventure across the countryside?\n\nSo a surprise wedding?

Honestly, I should have seen it coming. The signs were all there. The suspiciously nice catering.

The flowers that seemed a bit much for a casual get-together. The fact that [Bride's name]'s mum was crying before anyone even said anything.\n\nBut despite the shock, despite my sandals, and despite the fact that I have no prepared remarks whatsoever, I can tell you this with complete certainty - these two are made for each other. Always have been.\n\nSo here's to [Bride's name] and [Groom's name], the couple who literally surprised us into celebrating their love. To the sneakiest newlyweds I know!`,
    authorName: 'Greg Holloway',
    weddingRole: 'Guest',
    tags: ['funny', 'surprise wedding', 'guest'],
  },

  {
    slug: 'surprise-wedding-guest-heartfelt-2',
    title: `A Beautiful Surprise We'll Never Forget`,
    category: 'surprise-wedding-speech',
    tone: 'heartfelt',
    durationMinutes: 1.6,
    wordCount: 206,
    excerpt: `Hello, everyone. I'm [Your name], and like all of you, I had absolutely no idea what was about to happen tonight. I'm still a little bit in shock, but the good kind, the kind whe...`,
    content: `Hello, everyone. I'm [Your name], and like all of you, I had absolutely no idea what was about to happen tonight. I'm still a little bit in shock, but the good kind, the kind where your heart is full and you can't stop smiling.\n\n[Bride's name] and [Groom's name] have always been private about the things that matter most to them.

They don't post every milestone online. They don't need the world to validate what they have. So the fact that they chose to share this moment with all of us, in this way, feels incredibly special.\n\nI've known [Bride's name] for years, and I've watched her become someone who knows exactly what she wants and isn't afraid to go after it.

[Groom's name] is a huge part of that confidence. They lift each other up in ways that are obvious to everyone around them.\n\nThere's something poetic about a surprise wedding. No months of buildup.

No expectations. Just two people deciding that today, surrounded by the people they love, is the right day. It's pure.

It's honest. It's them.\n\n[Bride's name] and [Groom's name], thank you for trusting us with this moment. It's one I'll carry with me for a very long time.

To love, to surprises, and to you two. Cheers.`,
    authorName: 'Helen Castillo',
    weddingRole: 'Guest',
    tags: ['heartfelt', 'surprise wedding', 'guest'],
  },

  {
    slug: 'surprise-wedding-guest-balanced-3',
    title: `The Best Kind of Plot Twist`,
    category: 'surprise-wedding-speech',
    tone: 'balanced',
    durationMinutes: 1.5,
    wordCount: 192,
    excerpt: `So. I'm [Your name]. And I genuinely walked in tonight expecting a barbecue. [Bride's name] told me to wear something nice, and I thought, right, maybe there's a dress code for t...`,
    content: `So. I'm [Your name]. And I genuinely walked in tonight expecting a barbecue.

[Bride's name] told me to wear something nice, and I thought, right, maybe there's a dress code for the burgers. Turns out, the dress code was for a wedding. Their wedding.\n\nI have to hand it to them, the secret-keeping was flawless.

Not a single hint. [Groom's name], I sat next to you last week at dinner and you mentioned nothing. Nothing.

You talked about lawnmowers for twenty minutes, and the whole time you were planning this. Impressive.\n\nBut behind the surprise, there's something really lovely happening here. [Bride's name] and [Groom's name] didn't want a wedding that was about logistics.

They wanted one that was about people. Look around this room, every single person here was chosen because they matter to this couple.\n\nThat's the kind of intention these two bring to everything. Their relationship, their friendships, their lives.

They don't do things halfway, even when they do them in secret.\n\nSo from one very surprised but very happy guest, congratulations. [Bride's name] and [Groom's name], this was the best plot twist of the year. To the newlyweds!`,
    authorName: 'Amy Fielding',
    weddingRole: 'Guest',
    tags: ['balanced', 'surprise wedding', 'guest'],
  },

  // ── Vow Renewal Speech (Family Member) ─────────────────────

  {
    slug: 'vow-renewal-family-heartfelt-1',
    title: `Twenty-Five Years and Still Going Strong`,
    category: 'renewal-of-vows-speech',
    tone: 'heartfelt',
    durationMinutes: 2.0,
    wordCount: 264,
    excerpt: `Good evening, everyone. I'm [Your name], and I'm the eldest child of the two incredible people we're here to celebrate tonight. Growing up, I didn't always appreciate what I was s...`,
    content: `Good evening, everyone. I'm [Your name], and I'm the eldest child of the two incredible people we're here to celebrate tonight. Growing up, I didn't always appreciate what I was seeing.

When you're a kid, your parents' marriage is just background noise. It's the wallpaper of your life.\n\nBut as I got older, I started to notice things. The way Dad still opens the car door for Mum.

The way Mum always makes Dad's tea exactly the way he likes it without being asked. The way they argue about directions in the car and then laugh about it five minutes later.\n\nTwenty-five years. That's nine thousand one hundred and twenty-five days of choosing each other.

Of morning routines and late-night conversations. Of holding each other up when things got hard, and there were hard times, because that's life.\n\nBut here's what I want to say to both of you. You didn't just stay married for twenty-five years.

You stayed in love. And there's a difference. I've seen couples who endure.

You two don't endure. You enjoy each other. You make each other laugh.

You're still each other's favourite person.\n\nWatching you renew your vows today reminded me of something. Marriage isn't a single promise made on one day. It's a promise renewed in a thousand tiny ways, every day, for years and years.\n\nMum and Dad, you've given all of us the greatest gift - a living example of what love looks like when it's real.

Thank you for that. To twenty-five more years and beyond. We love you.`,
    authorName: 'Rachel Thornton',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'vow renewal', 'family'],
  },

  {
    slug: 'vow-renewal-family-funny-2',
    title: `How Are You Two Still Putting Up With Each Other?`,
    category: 'renewal-of-vows-speech',
    tone: 'funny',
    durationMinutes: 1.8,
    wordCount: 233,
    excerpt: `Hello, everyone. I'm [Your name], the youngest of the family, and when my parents told me they were renewing their vows, my first reaction was, "Why? Did the first ones expire?" T...`,
    content: `Hello, everyone. I'm [Your name], the youngest of the family, and when my parents told me they were renewing their vows, my first reaction was, "Why? Did the first ones expire?" Turns out, no, they just wanted an excuse to throw another party.

And honestly, fair enough.\n\nNow, for those of you who know my parents well, you know they are not a perfect couple. Dad still can't remember their anniversary without his phone reminding him. Mum has a habit of "tidying" Dad's things into locations so creative that we've considered filing missing person reports for his reading glasses.\n\nBut somehow, miraculously, it works.

It's been thirty years and they still bicker about the thermostat like it's an Olympic sport. Dad turns it down. Mum turns it up.

It's been going on since 1996 and neither of them has conceded a single degree.\n\nThe truth is, though, underneath all the bickering and the lost glasses and the thermostat wars, there's something rock solid. These two genuinely like each other. And after thirty years, that's not nothing.

That's everything.\n\nI once asked Dad what the secret to a long marriage was, and he said, "Selective hearing and a good sense of humour." Mum overheard and said, "See? Selective hearing." They both laughed for ten minutes.\n\nSo here's to my wonderful, ridiculous, deeply in love parents. Thirty years down, and somehow still going strong. To Mum and Dad!`,
    authorName: 'Jake Thornton',
    weddingRole: 'Family Member',
    tags: ['funny', 'vow renewal', 'family'],
  },

  {
    slug: 'vow-renewal-family-balanced-3',
    title: `A Love Story Written in Decades`,
    category: 'renewal-of-vows-speech',
    tone: 'balanced',
    durationMinutes: 1.7,
    wordCount: 217,
    excerpt: `Good evening. I'm [Your name], sister of [Bride's name], and I've had a front-row seat to this love story for longer than I care to admit. When [Bride's name] and [Groom's name]...`,
    content: `Good evening. I'm [Your name], sister of [Bride's name], and I've had a front-row seat to this love story for longer than I care to admit. When [Bride's name] and [Groom's name] first got together, I was sceptical.

[Groom's name] was too quiet, I thought. My sister needed someone louder, bigger, more obvious. I was wrong.\n\nWhat [Groom's name] is, is steady.

He's the person who drove through a snowstorm to pick up [Bride's name]'s prescription. He's the one who learned to bake because she mentioned once that she missed their grandmother's lemon cake. He doesn't do grand gestures.

He does a thousand small ones, and they add up to something extraordinary.\n\nAnd [Bride's name], you matched him every step of the way. You built a home together. You raised children who are, and I say this as their aunt, genuinely lovely humans.

You weathered storms that would have broken weaker couples.\n\nSeeing you both stand up today and choose each other again, with full knowledge of everything that means, was one of the most moving things I've witnessed. The first time you got married, it was a promise. Today, it was a proof.\n\nSo to my sister and the brother I gained all those years ago, here's to the next chapter.

May it be as beautiful and as solid as everything that came before. To [Bride's name] and [Groom's name].`,
    authorName: 'Karen Mallory',
    weddingRole: 'Family Member',
    tags: ['balanced', 'vow renewal', 'family'],
  },

  // ── Engagement Party Speech (Friend) ───────────────────────

  {
    slug: 'engagement-party-friend-funny-1',
    title: `It's About Time, You Two`,
    category: 'engagement-party-speech',
    tone: 'funny',
    durationMinutes: 1.7,
    wordCount: 216,
    excerpt: `Evening, everyone! I'm [Your name], and I've been waiting for this announcement for approximately four years, seven months, and twelve days. Not that I was counting. When [Groom'...`,
    content: `Evening, everyone! I'm [Your name], and I've been waiting for this announcement for approximately four years, seven months, and twelve days. Not that I was counting.

When [Groom's name] told me he was going to propose, I said, "Mate, it's about time." He'd been carrying that ring around for three weeks. Three weeks! He was so nervous he nearly proposed at a petrol station.\n\nLet me tell you about the actual proposal, because [Groom's name] will undersell it and [Bride's name] will oversell it, so you need the unbiased version.

He took her to that restaurant they went to on their first date. Very romantic. He'd arranged for flowers on the table.

Also romantic. Then he got so flustered that he knocked over the wine, and proposed while a waiter was mopping up Merlot at their feet. Peak [Groom's name].\n\nBut [Bride's name] said yes.

She said yes with red wine on her dress and tears in her eyes and apparently the whole restaurant clapped. I wasn't there, but I've heard the story forty-seven times now.\n\nHere's what I know about these two. They are each other's favourite person.

[Groom's name] lights up when [Bride's name] walks into a room, and she looks at him like he's the only person in it.\n\nSo here's to the engagement. The wedding planning starts now, and I personally cannot wait to watch [Groom's name] have opinions about centrepieces. To [Bride's name] and [Groom's name]!`,
    authorName: 'Chris Delaney',
    weddingRole: 'Friend',
    tags: ['funny', 'engagement party', 'friend'],
  },

  {
    slug: 'engagement-party-friend-heartfelt-2',
    title: `The Beginning of Something Beautiful`,
    category: 'engagement-party-speech',
    tone: 'heartfelt',
    durationMinutes: 1.8,
    wordCount: 230,
    excerpt: `Hi, everyone. I'm [Your name], and [Bride's name] has been my closest friend for twelve years. When she called to tell me about the engagement, I cried before she even finished t...`,
    content: `Hi, everyone. I'm [Your name], and [Bride's name] has been my closest friend for twelve years. When she called to tell me about the engagement, I cried before she even finished the sentence.

She barely got past "he asked" before I was gone.\n\nI cried because I remember who [Bride's name] was before [Groom's name]. She was wonderful then, too. But she was guarded.

Careful. She'd been hurt before, and she wasn't about to let it happen again. So when [Groom's name] came along, she didn't make it easy for him.

She tested him. She kept her distance. And he just, stayed.

Patiently, consistently, without any games.\n\nI watched him earn her trust one quiet act at a time. He remembered her coffee order. He showed up when he said he would.

He met her family and didn't flinch when her dad gave him the interrogation of a lifetime.\n\nAnd slowly, I watched my best friend open up again. She started laughing louder. Planning further ahead.

Talking about the future like it was something to look forward to, not something to worry about.\n\n[Groom's name], you gave her that. And [Bride's name], you gave him someone worth being patient for.\n\nTonight is just the beginning. There's a wedding to plan, a life to build, and so much happiness ahead.

I'm honoured to be here at the start of it. To [Bride's name] and [Groom's name], with all my love.`,
    authorName: 'Megan Foster',
    weddingRole: 'Friend',
    tags: ['heartfelt', 'engagement party', 'friend'],
  },

  {
    slug: 'engagement-party-friend-balanced-3',
    title: `To the Next Chapter`,
    category: 'engagement-party-speech',
    tone: 'balanced',
    durationMinutes: 1.5,
    wordCount: 194,
    excerpt: `Hello, everyone. I'm [Your name], and I've known [Groom's name] since we were both making terrible decisions at university. He's graduated from terrible decisions to excellent one...`,
    content: `Hello, everyone. I'm [Your name], and I've known [Groom's name] since we were both making terrible decisions at university. He's graduated from terrible decisions to excellent ones, and [Bride's name] is proof of that.\n\nI remember the first time he brought [Bride's name] to meet the friend group.

He was visibly nervous, which was funny because [Groom's name] is never nervous. But [Bride's name] walked in, made everyone laugh within five minutes, and by the end of the night we were all a little bit in love with her. [Groom's name] just looked at me and said, "I know."\n\nWhat I appreciate about these two is that they don't try to be a perfect couple.

They're just a real one. They disagree about films. They have completely different ideas about what constitutes a tidy kitchen.

But they handle it all with humour and respect, and that's what makes them work.\n\nAn engagement party is a brilliant thing because it's all anticipation. There's no pressure tonight, just excitement. The planning, the stress, the seating charts, that all comes later.

Tonight, we just get to be happy for two people who deserve it.\n\nTo [Bride's name] and [Groom's name], may the wedding be as good as this party. Cheers!`,
    authorName: 'Tom Ashworth',
    weddingRole: 'Friend',
    tags: ['balanced', 'engagement party', 'friend'],
  },

  // ── Rehearsal Dinner Speech (Family Member) ────────────────

  {
    slug: 'rehearsal-dinner-family-funny-1',
    title: `The Night Before the Big Show`,
    category: 'rehearsal-dinner-speech',
    tone: 'funny',
    durationMinutes: 1.7,
    wordCount: 222,
    excerpt: `Good evening, everyone. I'm [Your name], [Bride's name]'s brother, and I want to start by saying that I'm giving this speech tonight because tomorrow I'll be too busy crying. Don...`,
    content: `Good evening, everyone. I'm [Your name], [Bride's name]'s brother, and I want to start by saying that I'm giving this speech tonight because tomorrow I'll be too busy crying. Don't judge me.

I've already teared up twice today and we haven't even started yet.\n\nNow, for those of you meeting [Groom's name]'s family for the first time tonight, welcome. You're about to discover that between our two families, there is not a single person who can tell a short story. Speeches tomorrow are going to be long.

Consider this your warm-up.\n\nI want to share something about [Groom's name] that I think sums him up perfectly. Last Christmas, he volunteered to cook the turkey. Nobody asked him to.

In fact, several people actively warned him not to. But he did it anyway, and it was actually good. That's [Groom's name] in a nutshell - shows up, takes on the challenge, surprises everyone.\n\nAnd [Bride's name], my sister, the person who once called me at midnight because she couldn't remember if penguins have knees - tomorrow you're getting married.

I still can't quite believe it.\n\nBut I can believe in this. In you two. In the way you argue about what to watch on television and then end up laughing about it.

That's love.\n\nSo tonight, let's keep it relaxed. Save the big emotions for tomorrow. For now, let's eat, drink, and be grateful that we're all here together. To tomorrow!`,
    authorName: 'James Collier',
    weddingRole: 'Family Member',
    tags: ['funny', 'rehearsal dinner', 'family'],
  },

  {
    slug: 'rehearsal-dinner-family-heartfelt-2',
    title: `Welcoming a New Family Member`,
    category: 'rehearsal-dinner-speech',
    tone: 'heartfelt',
    durationMinutes: 1.9,
    wordCount: 244,
    excerpt: `Good evening. I'm [Your name], [Groom's name]'s mother, and I wanted to take a moment tonight, while things are still intimate and quiet, to say something I might not get through...`,
    content: `Good evening. I'm [Your name], [Groom's name]'s mother, and I wanted to take a moment tonight, while things are still intimate and quiet, to say something I might not get through tomorrow.\n\n[Bride's name], from the very first time [Groom's name] brought you home, something shifted in our family. You didn't just fit in.

You filled a space we didn't know was empty. You asked about family recipes. You looked at old photo albums with genuine interest.

You laughed at my husband's terrible jokes, which honestly won you more points than you know.\n\nBut more than any of that, you made my son happy in a way I'd been hoping for. A mother watches her child grow up and wonders who they'll choose, and whether that person will see them the way she does. You see him.

The real him, not just the version he shows the world.\n\nTo [Bride's name]'s family, thank you. Thank you for raising someone so warm, so kind, and so perfect for our son. Tomorrow we officially become one family, but in my heart, that happened a long time ago.\n\nAnd [Groom's name], my boy, I'm so proud of the man you've become.

Tomorrow is going to be overwhelming and wonderful and it'll go faster than you think. So tonight, just look around this table. These are your people.

Every one of them is here because they love you.\n\nTo tomorrow, to family, old and new, and to [Bride's name] and [Groom's name]. We love you both so much.`,
    authorName: 'Linda Garrett',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'rehearsal dinner', 'family'],
  },

  {
    slug: 'rehearsal-dinner-family-balanced-3',
    title: `A Few Words Before the Main Event`,
    category: 'rehearsal-dinner-speech',
    tone: 'balanced',
    durationMinutes: 1.6,
    wordCount: 210,
    excerpt: `Hello, everyone. I'm [Your name], [Bride's name]'s dad, and I promise to keep this short because I've been told I have three minutes tonight and unlimited time tomorrow. We'll see...`,
    content: `Hello, everyone. I'm [Your name], [Bride's name]'s dad, and I promise to keep this short because I've been told I have three minutes tonight and unlimited time tomorrow. We'll see about that.\n\nI mainly want to say thank you.

Thank you to [Groom's name]'s family for hosting this evening and for making our family feel so welcome. Getting to know you over the past couple of years has been one of the unexpected joys of this whole journey.\n\nI also want to say something to [Groom's name], man to man. My daughter is not easy.

She's stubborn, she's opinionated, and she gets that from me, so I can't complain. But she's also the most loyal, generous, and loving person I know, and she gets that from her mother.\n\nWhat I've seen in you, [Groom's name], is someone who appreciates all of it. The stubbornness, the opinions, the heart.

You don't try to change her. You just stand beside her, and that's exactly what she needs.\n\nTomorrow is going to be a big day. There'll be tears, I guarantee it, mostly mine.

There'll be laughter and dancing and probably too many photos. But tonight is just for us, the inner circle, the people who matter most.\n\nSo let's enjoy this quiet moment before the beautiful chaos begins. To [Bride's name] and [Groom's name], and to tomorrow.`,
    authorName: 'Robert Clayton',
    weddingRole: 'Family Member',
    tags: ['balanced', 'rehearsal dinner', 'family'],
  },
// ── Farewell to Single Life (Bachelor/Bachelorette) ──────────

  {
    slug: 'hilarious-bachelor-sendoff-1',
    title: `The Last Night of Freedom`,
    category: 'farewell-to-single-life-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 268,
    excerpt: `Alright everyone, gather round. Tonight we say goodbye to the man who once ate an entire pizza at 3am and called it "meal prep." [Groom's name], your single days are numbere...`,
    content: `Alright everyone, gather round. Tonight we say goodbye to the man who once ate an entire pizza at 3am and called it "meal prep." [Groom's name], your single days are numbered, mate, and honestly, it's about time.

I'm [Your name], and I've had a front-row seat to this man's dating life for the past twelve years. And let me tell you, it's been a journey. There was the girl he tried to impress by cooking a "gourmet dinner" that turned out to be burnt spaghetti with ketchup on top. There was the time he showed up to a first date at the wrong restaurant and sat there for forty-five minutes before he figured it out.

But then [Bride's name] came along, and suddenly this disaster of a human being started ironing his shirts. He started using coasters. He even bought a plant and kept it alive for more than a week. Honestly, we were all shocked.

So tonight, we celebrate the end of an era. No more questionable late-night kebab runs. No more falling asleep on my couch because he "missed the last train." No more dodgy haircuts because he decided to save ten quid and do it himself.

[Groom's name], you absolute legend, you've found someone who actually wants to deal with you every single day for the rest of her life. That's not just love, that's heroism.

So raise your glasses, everyone. To [Groom's name] - may your marriage be as strong as your WiFi signal and as long as your Netflix queue. Cheers!`,
    authorName: 'Jake Morrison',
    weddingRole: 'Best Friend',
    tags: ['funny', 'bachelor party', 'send-off'],
  },

  {
    slug: 'heartfelt-bachelorette-farewell-2',
    title: `A Beautiful New Chapter`,
    category: 'farewell-to-single-life-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.0,
    wordCount: 260,
    excerpt: `[Bride's name], I've been trying to figure out how to say what's in my heart tonight without completely losing it. We've been best friends since that first day of secondary sch...`,
    content: `[Bride's name], I've been trying to figure out how to say what's in my heart tonight without completely losing it. We've been best friends since that first day of secondary school when you shared your lunch with me because I'd forgotten mine. That small act of kindness told me everything I needed to know about who you are.

We've been through so much together. Late-night phone calls about boys who didn't deserve a single tear. Road trips where we got hopelessly lost and somehow found the best little cafe in the middle of nowhere. That awful flat we shared in our twenties where the heating never worked, so we'd sit wrapped in blankets watching terrible reality TV.

I remember the night you called me after your first date with [Groom's name]. Your voice was different. Not excited in the usual way, but calm, certain. You said, "I think this is it." And I knew you were right, because I'd never heard you sound so sure about anything.

Watching you fall in love has been one of the great privileges of my life. You deserve someone who sees you the way [Groom's name] does, someone who makes you laugh until you can't breathe, someone who holds your hand through the hard parts.

So tonight isn't really goodbye to anything. It's the start of the most beautiful chapter of your life. And I'll be right here, cheering you on, just like always.

To [Bride's name], my best friend, my person. I love you endlessly.`,
    authorName: 'Megan Clarke',
    weddingRole: 'Best Friend',
    tags: ['heartfelt', 'bachelorette', 'friendship'],
  },

  {
    slug: 'balanced-bachelor-party-toast-3',
    title: `One Last Round for the Single Man`,
    category: 'farewell-to-single-life-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.8,
    wordCount: 234,
    excerpt: `Can I get everyone's attention for just a minute? I promise I'll keep this short so we can get back to the important business of making sure [Groom's name] has the best night...`,
    content: `Can I get everyone's attention for just a minute? I promise I'll keep this short so we can get back to the important business of making sure [Groom's name] has the best night of his life. Well, second best - we'll leave the top spot for the wedding.

I've known [Groom's name] since we were sixteen, sitting in the back of Mr. Henderson's maths class, passing notes about absolutely nothing important. He was the kind of friend who'd drop everything if you needed him. Still is. When my dad was in hospital last year, [Groom's name] drove three hours on a Tuesday night just to sit with me. Didn't say much. Didn't need to. That's the kind of man he is.

He's also the kind of man who once tried to chat up a girl using a line he'd memorised from a film, forgot it halfway through, and just stood there blinking. So there's that.

But here's what matters. [Bride's name] brings out the very best version of him. He's more confident, more thoughtful, more at ease with himself. She didn't change him - she just helped him see what the rest of us already knew.

So tonight, we celebrate our boy. We embarrass him a little, we remind him where he came from, and we send him off into married life knowing he's got a whole crew behind him.

To [Groom's name] and [Bride's name]. The best is yet to come.`,
    authorName: 'Ryan Patel',
    weddingRole: 'Best Friend',
    tags: ['balanced', 'bachelor party', 'friendship', 'celebration'],
  },

  // ── Indian Wedding Speech ────────────────────────────────────

  {
    slug: 'funny-indian-wedding-speech-1',
    title: `From Sangeet Rehearsals to Forever`,
    category: 'indian-wedding-speech',
    tone: 'funny' as const,
    durationMinutes: 2.2,
    wordCount: 281,
    excerpt: `Namaste everyone, and welcome to what our family has been planning for approximately seven hundred years. I'm [Your name], [Bride's name]'s older brother, and I've been offici...`,
    content: `Namaste everyone, and welcome to what our family has been planning for approximately seven hundred years. I'm [Your name], [Bride's name]'s older brother, and I've been officially assigned the role of "give the speech and don't embarrass anyone." Let's see how that goes.

First, can we talk about the sangeet last night? I spent three months learning that Bollywood routine, and [Bride's name] still managed to outshine everyone in about thirty seconds flat. Some things never change. She's been stealing the spotlight since we were kids putting on performances in Nani's living room.

Now, when [Groom's name] first came to our house for chai, our mother had already prepared enough food to feed a small village. That's not an exaggeration. There were samosas, there were sweets, there was rice, there was dal - it was basically a full wedding rehearsal disguised as "just a casual tea." [Groom's name] handled it like a champion. He ate everything, complimented everything, and even asked Mum for her paneer recipe. At that moment, I knew this man understood the assignment.

What I love most about [Groom's name] is how he embraces our family's chaos. The group chats that never stop. The aunties who ask when the babies are coming before the mehendi has even dried. The uncle who insists on giving life advice at every gathering. He just smiles and fits right in.

[Bride's name], you've found someone who matches your energy, respects our traditions, and can survive a Sharma family WhatsApp group. That's true love.

So please, raise your glasses. To [Bride's name] and [Groom's name] - may your life together be as colourful as this wedding. Cheers!`,
    authorName: 'Arjun Sharma',
    weddingRole: 'Family Member',
    tags: ['funny', 'indian wedding', 'family'],
  },

  {
    slug: 'heartfelt-indian-wedding-speech-2',
    title: `A Mother's Blessing at the Mandap`,
    category: 'indian-wedding-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.3,
    wordCount: 296,
    excerpt: `My dearest [Bride's name], today as I watched you take your pheras around the sacred fire, I saw the little girl who used to sit on my lap while I told her stories about Radha...`,
    content: `My dearest [Bride's name], today as I watched you take your pheras around the sacred fire, I saw the little girl who used to sit on my lap while I told her stories about Radha and Krishna. I saw the teenager who argued with me about everything but always came back for a hug before bed. And I saw the woman you've become, strong, graceful, full of love.

In our culture, we say that a daughter is Lakshmi, the goddess of prosperity, and that is what you have been to our family. Every room you walk into becomes brighter. Every person you meet feels seen. Your father and I have watched you grow with so much pride that sometimes I think my heart might burst from holding it all.

When you brought [Groom's name] home, I watched him carefully. Not just the big moments, but the small ones. The way he listened when you talked. The way he remembered the little things, your favourite flowers, the way you like your chai with extra cardamom. I saw how he looked at you during the baraat today, and I knew that he sees the same light in you that we have always seen.

Beta, marriage is a journey of patience, compromise, and deep devotion. There will be days when everything feels easy and days when it takes work. Hold onto each other through both.

[Groom's name], I am not losing a daughter today. I am gaining a son. Welcome to our family with all my heart.

To both of you, may your home be filled with laughter, warmth, and the smell of good food cooking. May God bless this union with every happiness.

With all my love, always.`,
    authorName: 'Priya Kapoor',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'indian wedding', 'mother', 'blessing'],
  },

  {
    slug: 'balanced-indian-wedding-speech-3',
    title: `Two Families Becoming One`,
    category: 'indian-wedding-speech',
    tone: 'balanced' as const,
    durationMinutes: 2.0,
    wordCount: 262,
    excerpt: `Good evening everyone. I'm [Your name], [Groom's name]'s uncle, and I've had the privilege of watching this young man grow from a mischievous boy w...`,
    content: `Good evening everyone. I'm [Your name], [Groom's name]'s uncle, and I've had the privilege of watching this young man grow from a mischievous boy who used to steal jalebis off my plate into the remarkable man standing here today.

[Groom's name], I remember when you were twelve and you told me you were going to be a cricketer. Then it was an astronaut. Then a chef. Your mother called me in a panic each time. But through every phase, one thing stayed constant - your determination and your heart.

When our families first met for the roka, I could feel something special in the room. It wasn't just two families sitting across from each other with too many sweets on the table. It was the beginning of something bigger. In our tradition, we don't just join two people in marriage - we weave two families together, thread by thread, until you can't tell where one ends and the other begins.

[Bride's name], you've brought so much joy into our family already. The way you participated in every ceremony this week, from the mehendi to the haldi, with such grace and enthusiasm - it tells us everything about who you are.

My brother, [Groom's name]'s father, often says that the best marriages are built on respect first and romance second. I think he's right. And when I look at you two, I see both in abundance.

So from the entire family, we wish you a life filled with prosperity, good health, and just the right amount of healthy disagreement to keep things interesting.

Sab ko bahut bahut badhai. Congratulations to all.`,
    authorName: 'Vikram Mehta',
    weddingRole: 'Family Member',
    tags: ['balanced', 'indian wedding', 'family', 'traditions'],
  },

  // ── Jewish Wedding Speech ────────────────────────────────────

  {
    slug: 'funny-jewish-wedding-speech-1',
    title: `Under the Chuppah and Over the Moon`,
    category: 'jewish-wedding-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 278,
    excerpt: `Mazel tov! I'm [Your name], [Groom's name]'s older sister, and yes, I'm the one who's been giving him unsolicited advice since 1994. First of all, can we acknowledge that [Gro...`,
    content: `Mazel tov! I'm [Your name], [Groom's name]'s older sister, and yes, I'm the one who's been giving him unsolicited advice since 1994. First of all, can we acknowledge that [Groom's name] actually managed to stomp on the glass on his first try? Our cousin David needed three attempts at his wedding, so the bar was low, but still - well done.

Growing up, [Groom's name] was the kid who argued with the rabbi during Hebrew school. Not because he didn't care, but because he cared too much. He had questions about everything. "Why this prayer? Why that tradition?" The rabbi once told our mother, "Your son will either become a great scholar or a great lawyer." He became an accountant. Close enough.

When [Groom's name] told our family he was getting married, our mother immediately started planning. And by planning, I mean she called every relative within a three-hundred-mile radius before he'd even hung up the phone. By the time he got home, Aunt Miriam had already offered to make her famous brisket and Uncle Saul had volunteered to DJ. Nobody asked Uncle Saul. He just decided.

[Bride's name], welcome to the family. You should know that Friday night dinners are non-negotiable, you will be asked about grandchildren before you've finished your soup, and my mother will send you home with enough leftovers to feed your entire office.

But in all seriousness, you make my brother the happiest I've ever seen him. And that means more to me than I can say.

So, l'chaim! To [Bride's name] and [Groom's name] - may your love be as enduring as a Jewish guilt trip, which is to say, forever. L'chaim!`,
    authorName: 'Rachel Goldstein',
    weddingRole: 'Family Member',
    tags: ['funny', 'jewish wedding', 'family', 'humor'],
  },

  {
    slug: 'heartfelt-jewish-wedding-speech-2',
    title: `From Generation to Generation`,
    category: 'jewish-wedding-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.3,
    wordCount: 295,
    excerpt: `Standing here under this beautiful chuppah, I'm reminded that this canopy represents the home that [Bride's name] and [Groom's name] will build together. I'm [Your name], [Bri...`,
    content: `Standing here under this beautiful chuppah, I'm reminded that this canopy represents the home that [Bride's name] and [Groom's name] will build together. I'm [Your name], [Bride's name]'s father, and today my heart is so full I'm not sure these words will be enough.

There's a saying, l'dor v'dor, from generation to generation. Today I feel the weight and the beauty of that phrase more than ever. My own parents, may their memory be a blessing, fled Europe with nothing but each other and the hope that their children would have a better life. My father used to say that love isn't a feeling, it's a decision you make every morning when you wake up.

[Bride's name], you are the best decision your mother and I ever made. From the moment you were born, you filled our home with music, with laughter, with a stubbornness that drove us absolutely mad and made us incredibly proud. You challenged us to be better. You questioned everything, just like your grandfather.

[Groom's name], I've watched you carefully over the past three years. I've seen how you show up for my daughter, not just in the big moments, but in the quiet ones. The way you drove across town to bring her soup when she was ill. The way you sit and listen, really listen, when she talks. That's not something you can fake.

The Talmud teaches us that when a couple is worthy, the divine presence rests between them. Looking at you two today, I believe that with all my heart.

May your home be filled with Shabbat candles, with the sound of children laughing, with books and debate and always, always love.

Mazel tov, my darlings. Your grandparents are smiling down today.`,
    authorName: 'David Levine',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'jewish wedding', 'father', 'tradition'],
  },

  {
    slug: 'balanced-jewish-wedding-speech-3',
    title: `Building a Home Together`,
    category: 'jewish-wedding-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.8,
    wordCount: 240,
    excerpt: `Good evening, everyone. I'm [Your name], [Bride's name]'s aunt, and I've been looking forward to this moment since the day she called me to say she'd met someone special. For...`,
    content: `Good evening, everyone. I'm [Your name], [Bride's name]'s aunt, and I've been looking forward to this moment since the day she called me to say she'd met someone special. For the record, she tried to play it cool. She failed completely. I could hear the smile through the phone.

[Bride's name] has always been the heart of our family. At every Passover seder, she's the one asking the real questions, not just the four from the Haggadah, but the ones that make the whole table think. "Why do we do this? What does it actually mean?" She never accepts easy answers. That's what makes her extraordinary.

And then she found [Groom's name], someone who doesn't give easy answers either. Someone who matches her curiosity, her depth, and her appetite for rugelach. Seriously, the two of you went through three trays at Hanukkah.

I remember my own wedding day, standing under the chuppah, terrified and thrilled in equal measure. My mother told me something I've never forgotten: "Marriage isn't about finding someone you can live with. It's about finding someone you can't imagine living without." Looking at you two, I know you've found that.

The glass has been broken. The celebration has begun. And somewhere between the hora and the cake cutting tonight, I hope you take one quiet moment to look at each other and remember exactly how this feels.

May your lives together be sweet, purposeful, and full of meaning.

Mazel tov, to [Bride's name] and [Groom's name]. We love you both.`,
    authorName: 'Sarah Friedman',
    weddingRole: 'Family Member',
    tags: ['balanced', 'jewish wedding', 'family', 'celebration'],
  },

  // ── Irish Wedding Speech ─────────────────────────────────────

  {
    slug: 'funny-irish-wedding-speech-1',
    title: `The Craic and the Commitment`,
    category: 'irish-wedding-speech',
    tone: 'funny' as const,
    durationMinutes: 2.2,
    wordCount: 282,
    excerpt: `Right, settle down now, settle down. I'm [Your name], [Groom's name]'s brother, and I've been dreading this moment since he asked me to say a few words. "A few words," he says...`,
    content: `Right, settle down now, settle down. I'm [Your name], [Groom's name]'s brother, and I've been dreading this moment since he asked me to say a few words. "A few words," he says. In this family, nobody has ever said just a few words about anything.

Now, I have to be careful here because Mammy's watching, and she's already told me twice today, "Don't you dare say anything that'll make me look bad in front of the Murphys." So, Mrs. Murphy, everything you're about to hear is completely fictional.

[Groom's name] was always the golden child. Got the good looks, the charm, the whole lot. I got the height and the receding hairline, so fair play to him. But I do remember a certain incident involving Da's car, a ditch in Ballymore, and a very unconvincing story about a cow being in the road. There was no cow, [Groom's name]. There was never a cow. We all know it.

But in all fairness, there's not a better man in the county. He'd give you the shirt off his back and then apologise that it wasn't ironed. When [Bride's name] came along, we all saw the change in him. He started using words like "brunch" and "throw pillows." We were concerned. But then we met her, and it all made sense.

[Bride's name], you're one of us now. That means Sunday dinners, unsolicited opinions from every aunt in Connacht, and at least three people telling you the same story at every family gathering.

So, as the Irish blessing goes - may your troubles be less, and your blessings be more, and nothing but happiness come through your door.

Slainte!`,
    authorName: 'Cormac O\'Brien',
    weddingRole: 'Family Member',
    tags: ['funny', 'irish wedding', 'brother', 'humor'],
  },

  {
    slug: 'heartfelt-irish-wedding-speech-2',
    title: `May the Road Rise to Meet You`,
    category: 'irish-wedding-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.1,
    wordCount: 270,
    excerpt: `Good evening, everyone. I'm [Your name], [Bride's name]'s mother, and I want to start by saying that this is the proudest day of my life. Now I know I said that at her graduat...`,
    content: `Good evening, everyone. I'm [Your name], [Bride's name]'s mother, and I want to start by saying that this is the proudest day of my life. Now I know I said that at her graduation, and again when she got her first job, but today I really mean it.

[Bride's name], you were born on the stormiest night County Kerry had seen in twenty years. The power went out, the roads were flooded, and your father drove through all of it to get us to the hospital. You came into this world fighting, and you haven't stopped since. You get that from your grandmother, God rest her.

I think about my own mother today. She used to say that the best thing a parent can do is raise a child who doesn't need you but still wants you around. Well, [Bride's name], I think we managed that. You've built a beautiful life for yourself, and you chose a partner who makes that life even richer.

[Groom's name], the first time you came to our house, you sat in the kitchen for three hours talking to my husband about hurling. I knew right then you'd fit in. But more than that, I saw how you looked at my daughter, like she was the most important person in any room. That's all a mother needs to see.

Ireland has a long tradition of blessings, and I've heard them all. But tonight I'll keep it simple.

May your home always be warm. May your hearts always be kind. May you always find your way back to each other, no matter how far the road takes you.

I love you both. Slainte.`,
    authorName: 'Siobhan Murphy',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'irish wedding', 'mother', 'blessing'],
  },

  {
    slug: 'balanced-irish-wedding-speech-3',
    title: `A Toast from the Ould Fella`,
    category: 'irish-wedding-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.9,
    wordCount: 247,
    excerpt: `Ah now, they've given me the microphone. That's either very brave or very foolish. I'm [Your name], [Groom's name]'s father, and I'll try to keep this short, though if you kne...`,
    content: `Ah now, they've given me the microphone. That's either very brave or very foolish. I'm [Your name], [Groom's name]'s father, and I'll try to keep this short, though if you knew the Doyles, you'd know brevity isn't our strong suit.

[Groom's name], you were a handful from the start. You climbed everything - fences, trees, the roof of the parish hall that one time Father Brennan still hasn't forgiven us for. I spent most of your childhood running after you and the other half pretending I didn't see what you were up to.

But somewhere along the way, that wild little boy turned into a man I'm incredibly proud of. You work hard. You show up for the people you love. And you picked a partner who makes you better, which, between us, wasn't a small job.

[Bride's name], from the first time you walked through our front door, you felt like family. You laughed at my terrible jokes, which already puts you ahead of my own children. But seriously, you've brought a calmness and a joy to [Groom's name]'s life that we can all see. He's steadier with you, more himself.

My own father, rest his soul, used to say that marriage is like a good pint of Guinness - it takes patience to get it right, but when it settles, there's nothing finer.

So to [Bride's name] and [Groom's name], may your lives be full of the good craic, may your home always be full of laughter, and may you never run out of things to talk about.

Slainte mhaith!`,
    authorName: 'Padraig Doyle',
    weddingRole: 'Family Member',
    tags: ['balanced', 'irish wedding', 'father', 'blessing'],
  },

  // ── African Wedding Speech ───────────────────────────────────

  {
    slug: 'funny-african-wedding-speech-1',
    title: `When Two Families Finally Agree`,
    category: 'african-wedding-speech',
    tone: 'funny' as const,
    durationMinutes: 2.2,
    wordCount: 280,
    excerpt: `Good evening, beautiful people! I am [Your name], [Bride's name]'s brother, and I need to start by saying - the negotiations for this wedding were longer than some peace treat...`,
    content: `Good evening, beautiful people! I am [Your name], [Bride's name]'s brother, and I need to start by saying - the negotiations for this wedding were longer than some peace treaties. Our family sat down with [Groom's name]'s family, and the back and forth over the bride price was like watching a football match. Offer, counter-offer, Auntie Grace walking out for dramatic effect, only to come back ten minutes later with more demands. It was magnificent.

But we got here. And that's what matters.

[Bride's name] is my little sister, and growing up she was always the responsible one. She did her homework first. She cleaned without being asked. Meanwhile, I was the one Mama was chasing around the compound with a slipper. So when [Groom's name] showed up looking nervous at our family home, I thought, "Finally, someone else for Mama to interrogate."

And interrogate she did. "What do you do? Where is your family from? What are your intentions?" [Groom's name] answered every question like he was in a job interview for the most important position of his life. Which, to be fair, he was.

What I respect most about [Groom's name] is that he didn't just come for my sister - he came for the whole family. He shows up to every gathering. He eats everything our mother cooks and asks for seconds. He even learned a few words of our language, though his pronunciation still needs work. We'll get there.

Today, two families become one. And if the energy on this dance floor is anything to go by, we're going to be just fine.

To [Bride's name] and [Groom's name]!`,
    authorName: 'Kwame Asante',
    weddingRole: 'Family Member',
    tags: ['funny', 'african wedding', 'family', 'celebration'],
  },

  {
    slug: 'heartfelt-african-wedding-speech-2',
    title: `Ubuntu - I Am Because We Are`,
    category: 'african-wedding-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.3,
    wordCount: 298,
    excerpt: `My beloved family and friends, I am [Your name], [Groom's name]'s grandmother, and my heart is overflowing today. In our tradition, we say "Ubuntu" - I am because we are. This...`,
    content: `My beloved family and friends, I am [Your name], [Groom's name]'s grandmother, and my heart is overflowing today. In our tradition, we say "Ubuntu" - I am because we are. This wedding is proof of that. Look around this room. Every person here is a thread in the fabric of these two lives.

[Groom's name], you are named after your grandfather, my late husband, who built our family from nothing with his two hands and his faith. He would be so proud to see you standing here today, a man of integrity, of strength, of tenderness. You carry his name well.

I remember when you were small, you used to sit at my feet while I cooked, asking me questions about everything. "Gogo, why does the sun set? Gogo, why do we pray? Gogo, when will I be grown?" And here you are now, grown and choosing your life partner.

[Bride's name], the first time [Groom's name] brought you to visit me, you sat in my kitchen and helped me prepare the meal without being asked. You peeled the vegetables, you stirred the pot, you listened to my stories. That told me everything. You have a servant's heart, and that is the foundation of a strong marriage.

In our culture, marriage is not just between two people. It is a covenant between two families, two communities, two histories coming together to create a future. Every ancestor who came before you is celebrating today.

My prayer for you both is simple. May your love be rooted deep like the baobab tree, strong enough to weather any storm, wide enough to shelter all who come to you. May you always remember where you come from, and may you always move forward together.

God bless this union. I love you both beyond words.`,
    authorName: 'Grace Ndlovu',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'african wedding', 'grandmother', 'ubuntu'],
  },

  {
    slug: 'balanced-african-wedding-speech-3',
    title: `Honouring Heritage, Building Tomorrow`,
    category: 'african-wedding-speech',
    tone: 'balanced' as const,
    durationMinutes: 2.0,
    wordCount: 264,
    excerpt: `Good evening, everyone. I am [Your name], [Bride's name]'s uncle, and it is my honour to speak on behalf of our family today. You know, in our community, an uncle has a very sp...`,
    content: `Good evening, everyone. I am [Your name], [Bride's name]'s uncle, and it is my honour to speak on behalf of our family today. You know, in our community, an uncle has a very specific role - you're part advisor, part comedian, and part referee when the family gets too loud. Today I'll try to be all three.

[Bride's name], I've watched you grow from the little girl who used to dance in the rain at my compound to this extraordinary woman. You were always determined, always kind, and always a little bit stubborn. That stubbornness served you well. It got you through university, through challenges that would have broken someone with less spirit, and into the arms of a good man.

[Groom's name], when you came to our family to declare your intentions, you spoke with respect and humility. You brought your elders with you. You honoured the process. That told us you understand that love isn't just about two hearts - it's about two communities choosing to walk the same road.

There's a proverb that says, "If you want to go fast, go alone. If you want to go far, go together." This marriage is about going far. Together, with your families behind you, with your friends around you, and with God above you.

I also want to say, [Groom's name], that you are gaining not just a wife but an entire support system. We are loud, we are many, and we will show up at your house unannounced. Consider yourself warned.

May this marriage bring honour to both families. May it bring children who will carry on our traditions. And may the food at this reception never run out.

Cheers!`,
    authorName: 'Emmanuel Okafor',
    weddingRole: 'Family Member',
    tags: ['balanced', 'african wedding', 'uncle', 'heritage'],
  },

  // ── Latin Wedding Speech ─────────────────────────────────────

  {
    slug: 'funny-latin-wedding-speech-1',
    title: `La Familia Gets a New Member`,
    category: 'latin-wedding-speech',
    tone: 'funny' as const,
    durationMinutes: 2.1,
    wordCount: 275,
    excerpt: `Buenas noches, familia! I'm [Your name], [Bride's name]'s older sister, and if you think this wedding is big, you should have seen Mami's face when [Bride's name] told her the...`,
    content: `Buenas noches, familia! I'm [Your name], [Bride's name]'s older sister, and if you think this wedding is big, you should have seen Mami's face when [Bride's name] told her the guest list was "only two hundred people." Mami added another hundred before lunch. That's just how we do things.

Growing up with [Bride's name] was never boring. This is the girl who choreographed a full dance routine for her quinceanera and made all fourteen of her damas rehearse it for three months. Three months. She was fifteen and already running operations like a general. I should have known she'd grow up to plan the most beautiful wedding any of us have ever seen.

Now, [Groom's name], I need to prepare you for a few things. First, you will never be hungry again. Mami will feed you until you physically cannot move. Second, every tia in this room will have an opinion about everything in your life, from your career to your curtains. Third, if you think you're on time for a family event and you arrive before anyone else, you're too early. We operate on our own schedule. Always have.

But here's the thing about joining this family - you'll never feel alone. Not for a single day. There's always someone calling, someone showing up with a container of food, someone who just "happened to be in the neighbourhood." We love hard, and we love loud.

[Bride's name] and [Groom's name], you two are perfect together. She brings the fire, he brings the calm, and together you bring the most adorable couple we've ever seen.

Salud, mi gente! To love, to family, to the party that's about to go all night!`,
    authorName: 'Isabella Reyes',
    weddingRole: 'Family Member',
    tags: ['funny', 'latin wedding', 'sister', 'familia'],
  },

  {
    slug: 'heartfelt-latin-wedding-speech-2',
    title: `De Padre a Hija, Con Todo Mi Amor`,
    category: 'latin-wedding-speech',
    tone: 'heartfelt' as const,
    durationMinutes: 2.4,
    wordCount: 307,
    excerpt: `Mi hija, my beautiful daughter. I have been thinking about what to say today for months, and every time I sit down to write, the words don't feel big enough. So I'll speak from...`,
    content: `Mi hija, my beautiful daughter. I have been thinking about what to say today for months, and every time I sit down to write, the words don't feel big enough. So I'll speak from the heart and hope that's enough.

When your mother and I came to this country, we had very little. A suitcase, some photographs, and a dream that our children would have the life we imagined for them. Every sacrifice, every long shift, every moment of missing home - it was all for this. For you. For nights like tonight, where I can stand in a room full of people who love you and know that the dream came true.

[Bride's name], you have always been my strength. When things were hard, when I felt like giving up, I'd come home and you'd be sitting at the kitchen table, doing your homework, focused, determined, unstoppable. You reminded me what we were fighting for.

I remember your quinceanera like it was yesterday. You wore that pink dress and you danced with me, and I remember thinking, "One day, some young man is going to take my place." I wasn't ready then. Honestly, I'm not sure I'm ready now. But [Groom's name], you have earned my trust and my respect.

You treat my daughter the way she deserves to be treated. You honour her. You support her dreams. And you love her family, which means you love where she comes from. That is everything to me.

Mi hija, nunca olvides de donde vienes. Never forget where you come from. Carry our traditions forward. Fill your home with music, with food, with love, with faith.

[Groom's name], cuida a mi hija. Take care of my daughter. She is the best thing I've ever given this world.

Los quiero mucho. I love you both so much. Salud.`,
    authorName: 'Carlos Gutierrez',
    weddingRole: 'Family Member',
    tags: ['heartfelt', 'latin wedding', 'father', 'immigrant story'],
  },

  {
    slug: 'balanced-latin-wedding-speech-3',
    title: `Abuela Knows Best`,
    category: 'latin-wedding-speech',
    tone: 'balanced' as const,
    durationMinutes: 1.8,
    wordCount: 238,
    excerpt: `Mijo, come here. Let your abuela say something. I know everyone's been giving speeches, but I'm the oldest one in this room, so I get the last word. That's how it works in thi...`,
    content: `Mijo, come here. Let your abuela say something. I know everyone's been giving speeches, but I'm the oldest one in this room, so I get the last word. That's how it works in this family.

[Groom's name], you were my first grandchild. When they put you in my arms, I made you a promise that I would always be there for you. I've kept that promise for thirty years, and I'm not stopping now.

I've seen you grow, mijo. I've seen you fall and get back up. I've seen you make mistakes and learn from them. And I've seen the way you are with [Bride's name], gentle, patient, silly, real. That's how your abuelo was with me. He used to bring me flowers every Friday, not because it was a special occasion, but because he said every Friday with me was special. Fifty-two years we had together. I pray you get even more.

[Bride's name], mi amor, you are already family. You've been family since the first time you sat in my kitchen and let me teach you how to make tamales. You didn't complain, you didn't rush, you just listened and learned. That's love, mija. That's respect.

Marriage is not always a fiesta. Some days it's quiet work, patience, forgiveness, choosing each other again and again. But if you build your home on faith and family, you will never lose your way.

Que Dios los bendiga siempre. May God bless you always.

Now someone get me to the dance floor. This abuela didn't get dressed up for nothing.`,
    authorName: 'Rosa Delgado',
    weddingRole: 'Family Member',
    tags: ['balanced', 'latin wedding', 'grandmother', 'wisdom'],
  }
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
