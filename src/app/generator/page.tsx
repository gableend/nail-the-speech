"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Users, Clock, Sparkles, User, ChevronDown, ChevronUp, DownloadCloud, File, FileImage, FileSpreadsheet } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { countWords, estimateReadingTime } from "@/lib/openai";
import VoiceInput from "@/components/VoiceInput";
import { getOrCreateAnonymousUserId, clearAnonymousUserId, getSpeechGenerationCount, incrementSpeechGenerationCount } from "@/lib/clientAnonymousUser";
import ProUpgradePrompt from "@/components/ProUpgradePrompt";
import { useProStatus } from "@/hooks/useProStatus";
import { useUser } from "@clerk/nextjs";
import { getPreviewText } from "@/lib/speechPreview";
import { speechRoles, getRoleBySlug } from "@/data/speechRoles";
import FAQ from "@/components/FAQ";
import { generatorFaqs } from "@/data/faqData";
import { showToast } from "@/components/ui/toast";
import { useCurrency } from "@/hooks/useCurrency";

// ── Speech tones with role-specific recommendations ───────────────
interface SpeechTone {
  value: string;
  label: string;
  emoji: string;
  description: string;
}

const allTones: SpeechTone[] = [
  { value: 'heartfelt', label: 'Heartfelt', emoji: '💖', description: 'Warm and sincere' },
  { value: 'light-funny', label: 'Funny', emoji: '😄', description: 'Humorous and light-hearted' },
  { value: 'nostalgic', label: 'Nostalgic', emoji: '📷', description: 'Reminiscent and reflective' },
  { value: 'balanced', label: 'Light-hearted', emoji: '😊', description: 'Cheerful and playful' },
  { value: 'sentimental', label: 'Emotional', emoji: '🥹', description: 'Touching and sentimental' },
  { value: 'inspirational', label: 'Inspirational', emoji: '✨', description: 'Uplifting and motivating' },
  { value: 'traditional', label: 'Traditional', emoji: '🏛️', description: 'Classic and formal' },
  { value: 'sincere', label: 'Sincere', emoji: '🤝', description: 'Genuine and honest' },
  { value: 'grateful', label: 'Grateful', emoji: '🙏', description: 'Thankful and appreciative' },
  { value: 'proud', label: 'Proud', emoji: '🏆', description: 'Confident and celebratory' },
  { value: 'loving', label: 'Loving', emoji: '❤️', description: 'Affectionate and caring' },
  { value: 'clean-roast', label: 'Clean Roast', emoji: '🔥', description: 'Teasing with love' },
  { value: 'wise', label: 'Wise', emoji: '🦉', description: 'Thoughtful and sage-like' },
  { value: 'respectful', label: 'Respectful', emoji: '🎩', description: 'Honorable and reverent' },
];

// 4 recommended tones per role (shown prominently)
const recommendedTones: Record<string, string[]> = {
  'best-man':         ['light-funny', 'heartfelt', 'nostalgic', 'clean-roast'],
  'maid-of-honor':    ['heartfelt', 'sentimental', 'light-funny', 'nostalgic'],
  'father-of-bride':  ['proud', 'heartfelt', 'sentimental', 'traditional'],
  'mother-of-bride':  ['loving', 'sentimental', 'heartfelt', 'proud'],
  'father-of-groom':  ['proud', 'heartfelt', 'traditional', 'sincere'],
  'mother-of-groom':  ['loving', 'heartfelt', 'sentimental', 'proud'],
  'groom':            ['heartfelt', 'light-funny', 'sentimental', 'grateful'],
  'bride':            ['heartfelt', 'sentimental', 'light-funny', 'grateful'],
  'bride-and-groom':  ['heartfelt', 'grateful', 'light-funny', 'loving'],
  'best-woman':       ['light-funny', 'heartfelt', 'sincere', 'nostalgic'],
  'groomsman':        ['light-funny', 'heartfelt', 'nostalgic', 'clean-roast'],
  'bridesmaid':       ['heartfelt', 'sentimental', 'light-funny', 'nostalgic'],
  'man-of-honor':     ['heartfelt', 'light-funny', 'sentimental', 'sincere'],
  'brother-of-bride': ['light-funny', 'nostalgic', 'heartfelt', 'clean-roast'],
  'sister-of-bride':  ['heartfelt', 'sentimental', 'nostalgic', 'light-funny'],
  'brother-of-groom': ['light-funny', 'nostalgic', 'heartfelt', 'clean-roast'],
  'sister-of-groom':  ['heartfelt', 'sentimental', 'nostalgic', 'light-funny'],
};

// Category-based fallbacks
const categoryToneDefaults: Record<string, string[]> = {
  'The Couple':       ['heartfelt', 'grateful', 'light-funny', 'loving'],
  'Wedding Party':    ['light-funny', 'heartfelt', 'nostalgic', 'sincere'],
  'Parents':          ['proud', 'heartfelt', 'sentimental', 'loving'],
  'Step-Parents':     ['heartfelt', 'sincere', 'grateful', 'loving'],
  'Siblings':         ['light-funny', 'nostalgic', 'heartfelt', 'clean-roast'],
  'Grandparents':     ['loving', 'proud', 'wise', 'traditional'],
  'Extended Family':  ['heartfelt', 'proud', 'nostalgic', 'sincere'],
  'In-Laws':          ['heartfelt', 'sincere', 'light-funny', 'grateful'],
  'Friends':          ['light-funny', 'heartfelt', 'nostalgic', 'sincere'],
};

function getRecommendedToneValues(roleSlug: string): string[] {
  if (recommendedTones[roleSlug]) return recommendedTones[roleSlug];
  const roleData = getRoleBySlug(roleSlug);
  if (roleData && categoryToneDefaults[roleData.category]) {
    return categoryToneDefaults[roleData.category];
  }
  return ['heartfelt', 'light-funny', 'sentimental', 'balanced'];
}

// ── Role-contextual connection prompts for Step 3 ─────────────────
interface ConnectionPrompt {
  question: string;
  placeholder: string;
  examples: string[];
}

function getConnectionPrompt(roleSlug: string, groomName: string, brideName: string): ConnectionPrompt {
  const groom = groomName || 'the groom';
  const bride = brideName || 'the bride';

  const prompts: Record<string, ConnectionPrompt> = {
    'best-man': {
      question: `How did you become best friends with ${groom}?`,
      placeholder: `e.g., We met in college as roommates and bonded over terrible cooking and late-night FIFA tournaments...`,
      examples: [
        `We met in college as roommates and instantly clicked over our shared love of terrible movies and good pizza. Five years later, here we are...`,
        `We've been friends since primary school. I remember when he moved to our neighbourhood, shy and nervous. I invited him to play football and we've been inseparable since.`,
        `We met at work and bonded over our mutual confusion during training. What started as a work friendship became a brotherhood.`,
      ],
    },
    'maid-of-honor': {
      question: `How did you and ${bride} become so close?`,
      placeholder: `e.g., We've been best friends since school. She's the one I call first for everything...`,
      examples: [
        `We were college roommates who stayed up talking until 3am every night. Some things never change.`,
        `We met at our first job and immediately bonded over our shared hatred of early meetings and love of strong coffee.`,
        `She's my cousin, but she's always felt more like a sister. We grew up spending every summer together.`,
      ],
    },
    'father-of-bride': {
      question: `Tell us a bit about your relationship with ${bride}`,
      placeholder: `e.g., She's my youngest daughter. She's been keeping me on my toes since the day she could talk...`,
      examples: [
        `She's my eldest and she's always been fiercely independent. Even at three, she insisted on doing everything herself.`,
        `We're very alike, which means we butt heads sometimes. But I couldn't be prouder of the woman she's become.`,
        `She's always been daddy's girl, even when she pretends she isn't. She still calls me first when something goes wrong.`,
      ],
    },
    'mother-of-bride': {
      question: `Tell us about your bond with ${bride}`,
      placeholder: `e.g., She's not just my daughter, she's my best friend. We talk every single day...`,
      examples: [
        `We're incredibly close. She calls me for everything, from career advice to what to have for dinner.`,
        `She's my mini-me. Same stubborn streak, same laugh, same habit of crying at TV adverts.`,
        `We didn't always see eye to eye when she was a teenager, but now she's my favourite person to spend time with.`,
      ],
    },
    'father-of-groom': {
      question: `Tell us about your relationship with ${groom}`,
      placeholder: `e.g., He's my son and honestly, he turned out better than I expected...`,
      examples: [
        `He's my eldest boy. Watching him grow into the man he is today has been the highlight of my life.`,
        `We bonded over football and terrible DIY projects. The shed we built together is still standing. Barely.`,
        `He's quieter than me, more thoughtful. He gets that from his mother. The stubbornness, that's all mine.`,
      ],
    },
    'mother-of-groom': {
      question: `Tell us about your relationship with ${groom}`,
      placeholder: `e.g., He's my baby, even though he towers over me now. He'll always be my little boy...`,
      examples: [
        `He's always been my gentle giant. Big heart, terrible at remembering to call, but always there when it matters.`,
        `We're very close. He still comes round for Sunday dinner every week without fail.`,
        `He was a handful growing up, but he's turned into the most caring, thoughtful man. I take full credit.`,
      ],
    },
    'groom': {
      question: `How would you describe your relationship with ${bride}?`,
      placeholder: `e.g., She's my best friend and the funniest person I know. She makes everything better...`,
      examples: [
        `She's the person I want to tell everything to first. Good news, bad news, a funny thing I saw on the bus.`,
        `We balance each other perfectly. She's the planner, I'm the one who loses the plan. Together, we somehow make it work.`,
        `She saw through all my nonsense from day one and decided to stick around anyway. That's real love.`,
      ],
    },
    'bride': {
      question: `How would you describe your relationship with ${groom}?`,
      placeholder: `e.g., He makes me laugh harder than anyone. He's my person...`,
      examples: [
        `He's the calmest person I know. When I'm spiralling about something, he just makes me a cup of tea and listens.`,
        `We're total opposites in some ways, but we want all the same things. That's what makes it work.`,
        `He remembers every small thing I've ever told him. That kind of attention is rare and I never take it for granted.`,
      ],
    },
    'best-woman': {
      question: `How did you and ${groom} become close friends?`,
      placeholder: `e.g., We met through work and quickly became best mates. He's like a brother to me...`,
      examples: [
        `We've been friends since uni. He was the first person to make me feel welcome in a new city.`,
        `We worked together for five years. What started as desk-neighbour chat became one of my closest friendships.`,
        `We met through mutual friends and just clicked. He's one of those rare people who's exactly the same in every situation.`,
      ],
    },
    'groomsman': {
      question: `How do you know ${groom}?`,
      placeholder: `e.g., We played rugby together for years. He's one of my closest mates...`,
      examples: [
        `We've been friends since school. Same football team, same terrible taste in music, same group chat for 15 years.`,
        `We met at uni and lived together for three years. I've seen things I can never unsee.`,
        `He's been one of my best mates since we started our first jobs on the same day, equally clueless.`,
      ],
    },
    'bridesmaid': {
      question: `How do you know ${bride}?`,
      placeholder: `e.g., We've been friends since school. She's the one who always organises everything...`,
      examples: [
        `We met at a yoga class and bonded over being equally terrible at it. The friendship stuck even though the yoga didn't.`,
        `She's been my closest friend since we were twelve. We've been through everything together.`,
        `We worked together and she was the first person to invite me for coffee on my first day. I've never forgotten that.`,
      ],
    },
    'brother-of-bride': {
      question: `What's it like being ${bride}'s brother?`,
      placeholder: `e.g., She's my older sister and she's been bossing me around since day one. Wouldn't have it any other way...`,
      examples: [
        `She's my big sister and my biggest supporter. She was at every school play, every match, every terrible haircut phase.`,
        `We fought constantly growing up but she's genuinely one of my favourite people now. Don't tell her I said that.`,
        `We're two years apart and completely different, but somehow we just get each other.`,
      ],
    },
    'sister-of-bride': {
      question: `What's your sisterly bond with ${bride} like?`,
      placeholder: `e.g., She's my older sister and my best friend. We shared a room growing up and we've shared everything since...`,
      examples: [
        `We shared a room for 16 years. I know her better than anyone, including all the things she'd rather I didn't mention today.`,
        `She's always been the brave one. First to jump, first to speak up. I've spent my whole life trying to keep up with her.`,
        `We're so close that people think we're twins. We're not. She's three years older but I'm clearly the mature one.`,
      ],
    },
    'brother-of-groom': {
      question: `What's it like being ${groom}'s brother?`,
      placeholder: `e.g., He's my little brother and honestly, he's always been the cooler one...`,
      examples: [
        `He's my older brother and growing up I wanted to be exactly like him. I still do, but I'd never admit it to his face.`,
        `We shared a room until I was fourteen. The negotiations over whose side was whose prepared us both for adult life.`,
        `We're very different people but fiercely loyal to each other. That's what brothers are.`,
      ],
    },
    'sister-of-groom': {
      question: `What's your relationship with ${groom} like?`,
      placeholder: `e.g., He's my big brother. Annoying, protective, and secretly the most caring person I know...`,
      examples: [
        `He's my little brother and I've been looking out for him since the day he was born. Old habits die hard.`,
        `We bicker about everything but I'd do anything for him. He knows that.`,
        `Growing up, he was the quiet one and I was the loud one. He balanced me out and I dragged him into adventures.`,
      ],
    },
    'bride-and-groom': {
      question: `Tell us about your relationship as a couple`,
      placeholder: `e.g., We met at a friend's party and talked until everyone else had gone home...`,
      examples: [
        `We met online and our first date lasted seven hours. We closed down the restaurant and moved to a park bench.`,
        `We were friends for years before anything happened. Everyone saw it coming except us.`,
        `We're total opposites. She's organised, I'm chaos. She's early, I'm late. But somehow it just works.`,
      ],
    },
    'man-of-honor': {
      question: `How did you and ${bride} become close?`,
      placeholder: `e.g., We've been best friends since freshman year. She's basically my sister...`,
      examples: [
        `We met in our first week of uni and haven't gone more than three days without talking since.`,
        `She's been my best friend for over a decade. She knows every version of me and likes most of them.`,
        `We worked together and she was the first person who made me actually look forward to Mondays.`,
      ],
    },
  };

  if (prompts[roleSlug]) return prompts[roleSlug];

  // Category fallbacks
  const roleData = getRoleBySlug(roleSlug) ?? null;
  const category = roleData?.category;
  const person = roleData?.label.includes('Bride') ? bride : groom;

  if (category === 'Grandparents') {
    return {
      question: `Tell us about your relationship with ${person}`,
      placeholder: `e.g., I've watched ${person} grow up and they've always been a special one...`,
      examples: [
        `${person} used to spend every summer with us. Those are some of my happiest memories.`,
        `I've been there for every milestone. First steps, first day of school, graduation. And now this.`,
        `We have a special bond. ${person} is the one who always calls, always visits, always remembers.`,
      ],
    };
  }

  if (category === 'Step-Parents') {
    return {
      question: `Tell us about your bond with ${person}`,
      placeholder: `e.g., I came into ${person}'s life when they were a teenager. It took time, but we found our way...`,
      examples: [
        `I married their parent when ${person} was twelve. It wasn't easy at first, but we built something real.`,
        `I've been in ${person}'s life for over a decade now. They've made me a better person.`,
        `We bonded slowly, over shared dinners and bad jokes. Now I can't imagine my life without them.`,
      ],
    };
  }

  if (category === 'In-Laws') {
    return {
      question: `How did you become close with ${person}?`,
      placeholder: `e.g., When ${person} joined the family, it felt like they'd always been there...`,
      examples: [
        `${person} married into our family and somehow made it better. Which is saying something.`,
        `We bonded at family gatherings over being the quiet ones in a very loud family.`,
        `I gained a proper friend when ${person} joined the family. Not just an in-law.`,
      ],
    };
  }

  if (category === 'Extended Family') {
    return {
      question: `What's your relationship with ${person} like?`,
      placeholder: `e.g., I've known ${person} their whole life. Watched them grow up at every family gathering...`,
      examples: [
        `I've been the fun uncle/aunt since day one. ${person} always came to me for the stuff they couldn't ask their parents.`,
        `We're close in age so we grew up more like siblings than cousins. Family gatherings were our playground.`,
        `I've watched ${person} grow from a cheeky kid into someone I genuinely admire.`,
      ],
    };
  }

  if (category === 'Friends') {
    return {
      question: `How do you know ${person}?`,
      placeholder: `e.g., We've been close friends for years. Met through work / school / mutual friends...`,
      examples: [
        `We met through mutual friends and just clicked. One of those friendships that felt easy from the start.`,
        `We've known each other since school. Through every phase, every move, every life change.`,
        `I'm a family friend. I've known ${person} since they were running around the garden in wellies.`,
      ],
    };
  }

  // Special roles and catch-all
  return {
    question: `How do you know the couple?`,
    placeholder: `e.g., I've known them for years through work, family, or friendship...`,
    examples: [
      `I've known them both separately for years and was thrilled when they got together.`,
      `I've watched their relationship grow from the very beginning. It's been a privilege.`,
      `They asked me to speak today, which is either a great honour or a sign they've run out of options.`,
    ],
  };
}

// ── Role-contextual story prompts for Step 4 ──────────────────────
interface StoryPrompt {
  question: string;
  hint: string;
  placeholder: string;
  examples: string[];
}

function getStoryPrompt(roleSlug: string, groomName: string, brideName: string): StoryPrompt {
  const groom = groomName || 'the groom';
  const bride = brideName || 'the bride';

  const prompts: Record<string, StoryPrompt> = {
    'best-man': {
      question: `What's your favourite story about ${groom}?`,
      hint: `Funny, embarrassing, or genuinely touching. One killer story is all you need.`,
      placeholder: `e.g., I'll never forget when ${groom} tried to cook dinner for their third date and set off every smoke alarm in the building...`,
      examples: [
        `We met in college as roommates and instantly clicked over our shared love of terrible movies and good pizza. Five years later, here we are...`,
        `${groom} once drove four hours in a snowstorm to help me move. He showed up with a van, no questions asked. That's the kind of friend he is.`,
        `The moment I knew ${bride} was the one for ${groom} was at a barbecue. He couldn't stop looking at her, and he burned every single burger. Worth it.`,
      ],
    },
    'maid-of-honor': {
      question: `What's your favourite story about ${bride}?`,
      hint: `A moment that shows who she really is. Funny, sweet, or a bit of both.`,
      placeholder: `e.g., The night ${bride} told me about ${groom}, she couldn't stop smiling. I hadn't seen her like that before...`,
      examples: [
        `${bride} and I have been friends since school. I still remember the day she tripped on stage at assembly and just laughed it off. She's always been like that.`,
        `She called me at midnight to say she'd met someone. She talked for two hours straight. I knew right then this was different.`,
        `We backpacked through Southeast Asia together and she negotiated our way out of a very dodgy taxi situation. She's the bravest person I know.`,
      ],
    },
    'father-of-bride': {
      question: `What moment with ${bride} would you love to share?`,
      hint: `A memory from childhood, a proud-dad moment, or when you first met ${groom}.`,
      placeholder: `e.g., When ${bride} was little, she used to make me sit through her pretend restaurants. She'd take my order, disappear for 20 minutes, then bring me a sandwich with the crusts cut off...`,
      examples: [
        `I remember teaching her to ride a bike. She fell off about fifteen times, refused any help, then just did it. That stubbornness has served her well.`,
        `The first time ${groom} came to the house, ${bride} had clearly briefed him. He complimented the garden, asked about my golf, and brought decent wine. I was suspicious immediately.`,
        `She called me on a Tuesday, completely out of the blue, and said "Dad, I'm getting married." I had to pull the car over.`,
      ],
    },
    'mother-of-bride': {
      question: `What's a story about ${bride} that captures who she is?`,
      hint: `A mum's perspective. Something that still makes you laugh or tear up.`,
      placeholder: `e.g., Even as a little girl, ${bride} was the one organising everyone. She once planned a "wedding" for two teddies, complete with a guest list...`,
      examples: [
        `${bride} has always been the one looking after everyone else. Even aged eight, she'd check on the kids playing alone at the park.`,
        `I knew ${groom} was right for her when she started laughing differently. That silly, uncontrollable laugh she only does when she's truly happy.`,
        `She made me promise not to cry during my speech. So naturally, I started crying while writing it.`,
      ],
    },
    'groom': {
      question: `What do you want ${bride} and everyone to know?`,
      hint: `When did you know? What makes your relationship work? Keep it real.`,
      placeholder: `e.g., I knew on our second date. She spilled wine on my shirt and instead of being embarrassed, she just laughed and said "well, that's a conversation starter"...`,
      examples: [
        `I want to thank her parents for raising the most patient woman alive. She has to be, putting up with me.`,
        `I practised this speech in the mirror six times. ${bride} caught me once and hasn't stopped laughing about it since.`,
        `The moment I knew was when she stayed up all night with me when my dog was sick. She didn't have to. She just did.`,
      ],
    },
    'bride': {
      question: `What do you want ${groom} and everyone to know?`,
      hint: `When did you know? A favourite memory? Something people might not know.`,
      placeholder: `e.g., He proposed on a random Tuesday. No fancy restaurant, no ring hidden in dessert. Just us on the sofa, and he said "I don't want to do life without you"...`,
      examples: [
        `I fell in love with ${groom} because he remembers every small thing I've ever told him. He's quietly the most thoughtful person in any room.`,
        `He won my parents over the first time he visited by fixing the kitchen tap my dad had been "getting to" for three years.`,
        `Everyone thinks he's the funny one. He is. But he's also the first person I call when something goes wrong.`,
      ],
    },
    'father-of-groom': {
      question: `What's a story about ${groom} that says it all?`,
      hint: `A proud moment, a funny memory, or what you thought when you met ${bride}.`,
      placeholder: `e.g., ${groom} was always the kid who'd bring home stray animals. He had a big heart even then...`,
      examples: [
        `He was never the loudest kid in the room, but everyone listened when he talked. He's still like that.`,
        `The first time he mentioned ${bride}, he got this look on his face. I turned to his mother and said "this is serious."`,
        `I taught him everything I know. Which means he learned pretty quickly to figure things out on his own.`,
      ],
    },
    'mother-of-groom': {
      question: `What's your favourite memory of ${groom}?`,
      hint: `A proud moment, a funny memory, or when you knew ${bride} was the one.`,
      placeholder: `e.g., He's always been protective. Even at five years old, he'd hold my hand crossing the road because he thought he was looking after me...`,
      examples: [
        `He called me the night he met ${bride} and said "Mum, I've met someone." I could hear it in his voice. He was done looking.`,
        `When he was twelve, he made me a Mother's Day card that said "You're the best mum in the world, probably." That "probably" is pure ${groom}.`,
        `Watching him become the man standing here today has been the greatest thing I've ever done.`,
      ],
    },
    'brother-of-bride': {
      question: `What's a story about growing up with ${bride}?`,
      hint: `The funny, the embarrassing, or the moment you realised she'd grown up.`,
      placeholder: `e.g., She once told everyone at school I was afraid of butterflies. I wasn't. But by the end of the week, I almost was...`,
      examples: [
        `We fought over everything growing up. The remote, the front seat, whose turn it was to take the bins out. Turns out those arguments taught us both how to stand our ground.`,
        `She used to practise hairstyles on me. I've still got the photos. ${groom}, you're welcome to see them for a small fee.`,
        `I knew ${groom} was good enough for her when she started quoting his jokes. ${bride} never quotes anyone.`,
      ],
    },
    'sister-of-bride': {
      question: `What's your favourite story about ${bride}?`,
      hint: `Growing up together, a favourite memory, or how ${groom} changed her.`,
      placeholder: `e.g., We used to share a room and she'd stay up making plans for everything. Colour-coded schedules for school, for summer, for life...`,
      examples: [
        `Growing up, she was always the brave one. First to jump off the diving board, first to talk to new kids at school. I just followed her lead.`,
        `She stole my favourite jumper in 2014 and I still haven't got it back. This is me publicly requesting its return.`,
        `The first time I met ${groom}, she kept looking at me for approval. I gave her a thumbs up under the table.`,
      ],
    },
    'bridesmaid': {
      question: `What makes ${bride} such a great friend?`,
      hint: `A moment that shows the real her. Doesn't have to be dramatic, just honest.`,
      placeholder: `e.g., She's the friend who actually shows up. Not just says she will, but is there at your door with snacks when things go wrong...`,
      examples: [
        `${bride} drove an hour at midnight to help me when I locked myself out. She didn't complain once. She brought snacks.`,
        `We went to a festival together and she somehow talked our way backstage. That's her superpower. She makes impossible things happen.`,
        `I've seen her with ${groom}. She softens in a way I've never seen before. It's the best version of her.`,
      ],
    },
    'best-woman': {
      question: `What's your favourite story about ${groom}?`,
      hint: `You've got a unique perspective. What do you know about him that others might not?`,
      placeholder: `e.g., People think he's all jokes, but I've seen the version of ${groom} that stays on the phone for two hours when you need to talk...`,
      examples: [
        `We've been friends since our first job together. He covered for me so many times I lost count. He'd never admit it.`,
        `I remember when he first met ${bride}. He was nervous in a way I'd never seen before. That's how I knew.`,
        `He once helped me move house on a 35-degree day. Didn't complain once. Just got on with it.`,
      ],
    },
    'groomsman': {
      question: `What's a great story about ${groom}?`,
      hint: `Something that shows what kind of person he is. Funny or meaningful.`,
      placeholder: `e.g., ${groom} is the kind of friend who texts "how are you?" and actually wants to know the answer...`,
      examples: [
        `We played football together for years. He was never the best on the pitch, but he was always the first to buy the drinks after.`,
        `He lent me money once without me asking. Just noticed I was struggling and quietly sorted it. That's ${groom}.`,
        `The stag do was legendary. And completely unrepeatable at a wedding speech. So I'll just say: he survived.`,
      ],
    },
  };

  // Category-based fallbacks for roles without specific prompts
  if (prompts[roleSlug]) return prompts[roleSlug];

  const roleData = getRoleBySlug(roleSlug) ?? null;
  const category = roleData?.category;

  // Grandparents
  if (category === 'Grandparents') {
    const person = roleData?.label.includes('Bride') ? bride : groom;
    return {
      question: `What's a memory of ${person} that you treasure?`,
      hint: `A childhood memory, a family tradition, or a proud moment.`,
      placeholder: `e.g., I remember when ${person} was small enough to sit on my knee. Now look at them...`,
      examples: [
        `Every Sunday, ${person} would come round for lunch. They always wanted to hear stories from when I was young. I miss those Sundays.`,
        `I remember the day they were born. I held them and thought, "this one's going to be something special." I was right.`,
        `${person} once asked me what the secret to a happy marriage was. I said patience. And selective hearing.`,
      ],
    };
  }

  // Step-parents
  if (category === 'Step-Parents') {
    const person = roleData?.label.includes('Bride') ? bride : groom;
    return {
      question: `What's a moment that defined your bond with ${person}?`,
      hint: `The turning point, a shared experience, or something small that meant a lot.`,
      placeholder: `e.g., It took time for us to find our rhythm, but I remember the day ${person} first asked me for advice. That changed everything...`,
      examples: [
        `Blending a family is never simple. But the day ${person} introduced me to their friends as family, not "step-anything," I knew we'd made it.`,
        `We bonded over cooking. Badly. We once set off the smoke alarm making toast. But those moments in the kitchen are some of my favourites.`,
        `I didn't get to see ${person} grow up from the start, but I'm here for everything from now on.`,
      ],
    };
  }

  // Siblings (catch any not already matched)
  if (category === 'Siblings') {
    const person = roleData?.label.includes('Bride') ? bride : groom;
    return {
      question: `What's a story about growing up with ${person}?`,
      hint: `Sibling chaos, a funny memory, or the moment you realised they'd grown up.`,
      placeholder: `e.g., We shared a room for years. The things I know could fill a book. But today I'll keep it kind...`,
      examples: [
        `We used to fight over everything, but the second anyone else had a go at ${person}, I was there. That's what siblings do.`,
        `${person} was always the organised one. I was the chaotic one. Together we somehow kept the house standing.`,
        `I knew ${person} had found someone special when they stopped borrowing my stuff. All their attention went somewhere else entirely.`,
      ],
    };
  }

  // In-laws
  if (category === 'In-Laws') {
    const person = roleData?.label.includes('Bride') ? bride : groom;
    return {
      question: `What's a moment that captures your relationship with ${person}?`,
      hint: `How you became close, a funny family moment, or what you admire about them.`,
      placeholder: `e.g., When ${person} joined the family, it felt like they'd always been there...`,
      examples: [
        `I gained a sibling when ${person} joined the family. And honestly, an upgrade on the one I already had.`,
        `Our first family holiday together was chaos. But ${person} just rolled with it. They fit right in.`,
        `I've never seen my brother/sister happier than when they're with ${person}. That tells you everything.`,
      ],
    };
  }

  // Extended family (uncles, aunts, cousins, nieces, nephews)
  if (category === 'Extended Family') {
    const person = roleData?.label.includes('Bride') ? bride : groom;
    return {
      question: `What's your favourite memory with ${person}?`,
      hint: `Family gatherings, childhood visits, or something only you would know.`,
      placeholder: `e.g., Every family get-together, ${person} was the one who made everyone laugh...`,
      examples: [
        `I used to babysit ${person} when they were little. They were trouble then. Charming trouble, but trouble all the same.`,
        `Every Christmas, ${person} and I would sneak extra dessert before anyone noticed. Some traditions are worth keeping.`,
        `Watching ${person} grow into the person standing here today has been one of the great joys of being family.`,
      ],
    };
  }

  // Friends
  if (category === 'Friends') {
    const person = roleData?.label.includes('Bride') ? bride : groom;
    return {
      question: `What's a story that shows who ${person} really is?`,
      hint: `How you met, a defining moment, or what you admire about them.`,
      placeholder: `e.g., We met at work and bonded over our shared hatred of Monday morning meetings...`,
      examples: [
        `We met years ago and just clicked. The kind of friendship where you pick up right where you left off, no matter how long it's been.`,
        `${person} is the friend who shows up. Not just talks about it. Actually shows up when it matters.`,
        `I've watched ${person} fall in love and it's been the best thing to see. They deserve every bit of this.`,
      ],
    };
  }

  // Special roles and catch-all
  return {
    question: `What's a great story about the couple?`,
    hint: `Funny, meaningful, or both. Don't overthink it.`,
    placeholder: `e.g., The first time I saw them together, I just knew. They had that thing you can't fake...`,
    examples: [
      `I've known them both for years, and seeing them find each other felt like watching a puzzle piece click into place.`,
      `They balance each other perfectly. One's the planner, the other's the spontaneous one. Together, they somehow make it work.`,
      `I watched them navigate a family barbecue crisis together once. One handled the burnt food, the other handled the guests. Seamless teamwork.`,
    ],
  };
}

interface FormData {
  // Role Selection (if needed)
  selectedRole: string;
  customRoleLabel: string; // user-typed role when "other" is selected

  // Section 1: Essentials (Required to Generate a Free Speech)
  email: string;
  yourName: string;
  groomName: string;
  brideName: string;
  relationshipToGroom: string;
  tone: string;
  lengthPreference: string;
  greatStoryMemory: string;

  // Section 2: Pro Features (Optional – Adds Personality & Emotional Depth)
  howLongKnown: string;
  sharedHobbiesJokes: string;
  groomIn3Words: string;
  whatYouAdmire: string;
  relationshipWithBride: string;
  momentSeenTogether: string;

  // Section 3: Optional Extras (Premium Unlock or Power User Inputs)
  mentionBrideEnding: boolean;
  includeShoutOuts: string;
  humorLevel: string;
  includeToastClosing: boolean;

  // Internal tracking (optional, used during restoration)
  generatedFromStep?: number;
}

const getRoleTitle = (role: string, customLabel?: string): string => {
  if (role === 'other' && customLabel) return customLabel;
  const found = getRoleBySlug(role);
  return found ? found.label : 'Wedding';
};

// Helper: convert plain text to SpeechParagraph array
function textToParagraphs(text: string, source: 'ai' | 'user-edited' = 'ai'): Array<{id: string; text: string; source: 'ai' | 'user-edited'; originalText: string}> {
  return text.split('\n').filter(p => p.trim()).map((p, i) => ({
    id: `para_${i}_${Date.now()}`,
    text: p.trim(),
    source,
    originalText: p.trim(),
  }));
}

// Persist paragraph edit metadata to localStorage
function saveParagraphMeta(speechId: string, paragraphs: Array<{text: string; source: string; originalText: string}>) {
  if (typeof window === 'undefined') return;
  try {
    const meta = paragraphs.map(p => ({ source: p.source, originalText: p.originalText }));
    localStorage.setItem(`paragraphMeta_${speechId}`, JSON.stringify(meta));
  } catch { /* ignore */ }
}

function loadParagraphMeta(speechId: string): Array<{source: 'ai' | 'user-edited'; originalText: string}> | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(`paragraphMeta_${speechId}`);
    return stored ? JSON.parse(stored) : null;
  } catch { return null; }
}

// Word-level diff: returns an HTML string with changed words highlighted
function diffWordsHtml(original: string, current: string): string {
  if (original === current) return escapeHtml(current);
  const origWords = original.split(/(\s+)/);
  const currWords = current.split(/(\s+)/);
  const parts: string[] = [];
  const maxLen = Math.max(origWords.length, currWords.length);

  for (let i = 0; i < maxLen; i++) {
    const origWord = origWords[i] || '';
    const currWord = currWords[i] || '';
    if (currWord === origWord) {
      parts.push(escapeHtml(currWord));
    } else if (currWord.trim()) {
      parts.push(`<span class="bg-[#da5389]/15 text-[#da5389] rounded px-0.5">${escapeHtml(currWord)}</span>`);
    }
  }
  return parts.join('');
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function GeneratorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if user came from a specific role link, generic CTA, or edit link
  const roleFromUrl = searchParams.get('role');
  const stepFromUrl = searchParams.get('step');
  const speechIdFromUrl = searchParams.get('speechId');
  const paymentSuccess = searchParams.get('success') === 'true';
  const paymentCanceled = searchParams.get('canceled') === 'true';
  const sessionId = searchParams.get('session_id');
  const needsRoleSelection = !roleFromUrl && !speechIdFromUrl;
  const isEditMode = !!speechIdFromUrl;
  // Steps: 0=Name+Email, 1=Role (skipped if role from URL), 2=Couple, 3=Connection, 4=Story, 5=Speech
  const initialStep = stepFromUrl ? Number.parseInt(stepFromUrl) : (isEditMode ? 5 : (needsRoleSelection ? 0 : 0));
  const { isSignedIn } = useUser();
  // hideStep3 and totalSteps are now computed below after isProUser is available

  const [currentStep, setCurrentStep] = useState(initialStep);
  const demoEnabled = searchParams.get('demo') === 'true';
  const [demoMode, setDemoMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRefining, setIsRefining] = useState(false); // true during refinement (keeps old speech visible)
  const [showUndoBanner, setShowUndoBanner] = useState(false); // prompt undo after refinement
  const [showStartOverConfirm, setShowStartOverConfirm] = useState(false);
  const [pendingStartOverInstructions, setPendingStartOverInstructions] = useState<string | undefined>();
  const [isRestored, setIsRestored] = useState(false);
  const [showEditDetails, setShowEditDetails] = useState(false);

  // New state for Step 2: Speech Outline Generation
  const [speechGenerated, setSpeechGenerated] = useState(false);
  const [speechError, setSpeechError] = useState<string>("");
  // Speech version history for undo
  const [speechVersions, setSpeechVersions] = useState<string[]>([]);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(-1);
  const [dbRegenCount, setDbRegenCount] = useState(0); // Total start-overs from DB
  const [dbRefineCount, setDbRefineCount] = useState(0); // Total refinements from DB
  const [lastActionType, setLastActionType] = useState<string | null>(null); // For undo banner labelling
  const [lastActionLabel, setLastActionLabel] = useState<string | null>(null); // Pill/instruction text
  const [isSpeechPaywalled, setIsSpeechPaywalled] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [showFinalToast, setShowFinalToast] = useState(false);
  const [exportingFormat, setExportingFormat] = useState<string | null>(null);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<string>('nova');
  const [ttsCreditsUsed, setTtsCreditsUsed] = useState(0);
  const [ttsLoadingMsgIndex, setTtsLoadingMsgIndex] = useState(0);
  const audioCacheRef = React.useRef<{ textHash: string; url: string } | null>(null);
  const [currentSpeechId, setCurrentSpeechId] = useState<string | null>(speechIdFromUrl);
  const fullSpeechRef = React.useRef<string>("");
  const speechCardRef = React.useRef<HTMLDivElement>(null);

  // Paragraph-level editing: track AI vs user-edited paragraphs
  interface SpeechParagraph {
    id: string;
    text: string;
    source: 'ai' | 'user-edited';
    originalText: string;
  }
  const [speechParagraphs, setSpeechParagraphs] = useState<SpeechParagraph[]>([]);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const saveTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Derive generatedSpeech from paragraphs (or use directly when paragraphs not yet initialized)
  const [rawGeneratedSpeech, setRawGeneratedSpeech] = useState<string>("");
  const generatedSpeech = speechParagraphs.length > 0
    ? speechParagraphs.map(p => p.text).join('\n')
    : rawGeneratedSpeech;
  // Track user-edited paragraphs for preservation across regeneration
  const userEditedTextsRef = React.useRef<Set<string>>(new Set());

  // Wrapper to keep existing setGeneratedSpeech calls working
  const setGeneratedSpeech = (text: string) => {
    setRawGeneratedSpeech(text);
    if (text) {
      // Save current user-edited paragraphs before replacing
      const currentUserEdits = speechParagraphs.filter(p => p.source === 'user-edited').map(p => p.text);
      currentUserEdits.forEach(t => userEditedTextsRef.current.add(t));

      // Create new paragraphs, re-marking any that match user edits
      const newParas = textToParagraphs(text).map(p => {
        if (userEditedTextsRef.current.has(p.text)) {
          return { ...p, source: 'user-edited' as const };
        }
        return p;
      });
      setSpeechParagraphs(newParas);

      // Persist metadata if we have a speechId
      if (currentSpeechId) {
        saveParagraphMeta(currentSpeechId, newParas);
      }
    } else {
      setSpeechParagraphs([]);
    }
  };

  // Regeneration with instructions state
  const [regenerationInstructions, setRegenerationInstructions] = useState("");
  const [selectedPill, setSelectedPill] = useState<string | null>(null);
  const { currency } = useCurrency();
  // Pro checkout redirect helper
  const redirectToCheckout = async () => {
    try {
      const checkoutData: Record<string, unknown> = {
        email: null,
        returnUrl: '/dashboard',
        currency: currency.key,
        demo: demoEnabled,
      };
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkoutData)
      });
      if (!response.ok) throw new Error('Failed to create checkout session');
      const { url } = await response.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      showToast('Failed to start checkout. Please try again.');
    }
  };
  // Enable polling when returning from payment
  const { isProUser, loading: proStatusLoading } = useProStatus(
    paymentSuccess ? { pollInterval: 2000 } : undefined
  );
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(paymentSuccess);
  const [showPaymentCanceled, setShowPaymentCanceled] = useState(paymentCanceled);

  // Step flow: 0=Name+Email, 1=Role, 2=Couple, 3=Connection, 4=Story, 5=Speech
  const totalSteps = 5; // last step index
  const hideStep3 = true; // kept for backward compat with pro features logic

  const [formData, setFormData] = useState<FormData>({
    // Role Selection (if needed)
    selectedRole: roleFromUrl || "",
    customRoleLabel: "",

    // Section 1: Essentials (Required to Generate a Free Speech)
    email: "",
    yourName: "",
    groomName: "",
    brideName: "",
    relationshipToGroom: "",
    tone: "",
    lengthPreference: "",
    greatStoryMemory: "",

    // Section 2: Pro Features (Optional – Adds Personality & Emotional Depth)
    howLongKnown: "",
    sharedHobbiesJokes: "",
    groomIn3Words: "",
    whatYouAdmire: "",
    relationshipWithBride: "",
    momentSeenTogether: "",

    // Section 3: Optional Extras (Premium Unlock or Power User Inputs)
    mentionBrideEnding: false,
    includeShoutOuts: "",
    humorLevel: "",
    includeToastClosing: false,
  });

  // Unlock speech when Pro status is confirmed (e.g. after payment)
  useEffect(() => {
    if (isProUser && isSpeechPaywalled && fullSpeechRef.current) {
      setGeneratedSpeech(fullSpeechRef.current);
      setIsSpeechPaywalled(false);
    }
  }, [isProUser, isSpeechPaywalled]);

  // Initialize anonymous user and restore form data when user comes back from result page
  useEffect(() => {
    getOrCreateAnonymousUserId();

    // If editing an existing speech, load it
    if (speechIdFromUrl) {
      const loadSpeechForEdit = async () => {
        try {
          console.log('🔄 Loading speech for edit:', speechIdFromUrl);
          const response = await fetch(`/api/speech/${speechIdFromUrl}`);
          if (response.ok) {
            const speechData = await response.json();
            console.log('✅ Speech loaded for edit:', speechData);

            // Parse the stored form data and set it
            if (speechData.formData) {
              const parsedFormData = JSON.parse(speechData.formData);
              setFormData(parsedFormData);
            }

            // Check if this is a preview (anonymous/returning user)
            if (speechData.isPreview) {
              setGeneratedSpeech(speechData.content);
              setSpeechVersions([speechData.content]);
              setCurrentVersionIndex(0);
              setIsSpeechPaywalled(true);
              setCurrentSpeechId(speechData.id);
              console.log('🎯 Speech loaded as preview (paywall mode)');
            } else {
              // Initialize version history from DB or fallback to current content
              if (speechData.versions && speechData.versions.length > 0) {
                const versionContents = speechData.versions.map((v: { content: string }) => v.content);
                setSpeechVersions(versionContents);
                setCurrentVersionIndex(versionContents.length - 1); // Point to latest
                setGeneratedSpeech(versionContents[versionContents.length - 1]);
                console.log(`🎯 Speech loaded with ${versionContents.length} versions from DB`);
              } else {
                // Fallback for speeches created before version tracking
                setGeneratedSpeech(speechData.content);
                setSpeechVersions([speechData.content]);
                setCurrentVersionIndex(0);
                console.log('🎯 Speech loaded (no DB versions, using current content)');
              }

              // Restore paragraph edit metadata from localStorage
              const savedMeta = loadParagraphMeta(speechIdFromUrl);
              if (savedMeta) {
                setSpeechParagraphs(prev => prev.map((p, i) => {
                  const meta = savedMeta[i];
                  if (meta && meta.source === 'user-edited') {
                    return { ...p, source: 'user-edited' as const, originalText: meta.originalText };
                  }
                  return p;
                }));
              }
            }
            setDbRegenCount(speechData.regenCount || 0);
            setDbRefineCount(speechData.refineCount || 0);
            setIsFinal(speechData.isFinal || false);

            setSpeechGenerated(true);
            // Scroll to speech after load
            setTimeout(() => speechCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
          } else {
            console.error('❌ Failed to load speech for edit');
          }
        } catch (error) {
          console.error('❌ Error loading speech for edit:', error);
        }
      };

      loadSpeechForEdit();
      return; // Skip the normal restore logic when editing
    }

    const restoreData = localStorage.getItem('restoreFormData');
    if (restoreData) {
      try {
        const parsedData = JSON.parse(restoreData);

        // Extract the step they generated from and the form data
        const { generatedFromStep, ...formDataOnly } = parsedData;
        setFormData(formDataOnly);

        // Restore them to the exact step they were on when they hit generate
        if (typeof generatedFromStep === 'number') {
          setCurrentStep(generatedFromStep);
          setIsRestored(true);
          // Hide the restored indicator after 3 seconds
          setTimeout(() => setIsRestored(false), 3000);
          console.log('Restored to step:', generatedFromStep);
        } else {
          // Fallback to step detection if generatedFromStep is missing (backward compatibility)
          console.log('No generatedFromStep found, using fallback detection');
          if (parsedData.greatStoryMemory) {
            setCurrentStep(5); // Has story, go to speech output
          } else if (parsedData.relationshipToGroom && parsedData.tone) {
            setCurrentStep(4); // Has connection, go to story step
          } else if (parsedData.groomName && parsedData.brideName) {
            setCurrentStep(3); // Has names, go to connection step
          } else if (parsedData.selectedRole) {
            setCurrentStep(2); // Has role, go to couple names
          } else {
            setCurrentStep(0); // Start from beginning
          }
        }

        // Clear the restore data
        localStorage.removeItem('restoreFormData');
      } catch (error) {
        console.error('Failed to restore form data:', error);
      }
    } else {
      // No active generation restore — check for saved progress (e.g. returning from email link)
      const savedProgress = localStorage.getItem('speechProgress');
      if (savedProgress) {
        try {
          const { formData: savedFormData, currentStep: savedStep, speechId: savedSpeechId, savedAt } = JSON.parse(savedProgress);
          // Only restore if saved within the last 7 days
          if (savedAt && Date.now() - savedAt < 7 * 24 * 60 * 60 * 1000) {
            // If they were on Step 5 with a saved speech, redirect to the edit view
            // which loads the speech from DB and shows it with the paywall
            if (savedStep >= 5 && savedSpeechId) {
              localStorage.removeItem('speechProgress');
              window.location.href = `/generator?speechId=${savedSpeechId}`;
              return;
            }
            setFormData(prev => ({ ...prev, ...savedFormData }));
            setCurrentStep(savedStep);
          } else {
            localStorage.removeItem('speechProgress');
          }
        } catch {
          localStorage.removeItem('speechProgress');
        }
      }
    }
  }, [needsRoleSelection, speechIdFromUrl]);

  // Max character limits per field (protects against accidental long voice recordings)
  const FIELD_MAX_LENGTHS: Partial<Record<keyof FormData, number>> = {
    yourName: 100,
    email: 200,
    groomName: 100,
    brideName: 100,
    customRoleLabel: 100,
    relationshipToGroom: 2000,
    greatStoryMemory: 5000,
    howLongKnown: 200,
    sharedHobbiesJokes: 2000,
    groomIn3Words: 200,
    whatYouAdmire: 2000,
    relationshipWithBride: 2000,
    momentSeenTogether: 3000,
    includeShoutOuts: 500,
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    // Enforce max length on string fields
    if (typeof value === 'string' && FIELD_MAX_LENGTHS[field]) {
      value = value.slice(0, FIELD_MAX_LENGTHS[field]);
    }

    setFormData(prev => {
      const updated = { ...prev, [field]: value };

      // When a role is selected, auto-set the tone to the first recommended tone
      // (unless user already picked one that's in the new recommended set)
      if (field === 'selectedRole' && typeof value === 'string' && value) {
        const recValues = getRecommendedToneValues(value);
        if (!updated.tone || !recValues.includes(updated.tone)) {
          updated.tone = recValues[0];
        }
      }

      return updated;
    });

    // If demo mode is on and user changes role, update with new role's demo data
    if (demoMode && field === 'selectedRole' && typeof value === 'string') {
      const newDemoData = getDemoData(value);
      setFormData(prev => ({ ...prev, ...newDemoData, selectedRole: value }));
    }
  };

  const getDemoData = (role: string) => {
    const demoData: Record<string, Partial<FormData>> = {
      'best-man': {
        selectedRole: "best-man",
        email: "demo@example.com",
        yourName: "Michael",
        groomName: "James",
        brideName: "Sarah",
        relationshipToGroom: "best friends since college",
        tone: "balanced",
        lengthPreference: "medium",
        greatStoryMemory: "I'll never forget when James tried to impress Sarah by cooking dinner for her on their third date. He called me in a panic because he'd burned the chicken and set off the smoke alarm. We spent an hour at the grocery store buying ingredients for plan B - pasta. Sarah still says it was the most memorable date because James was so genuine about the disaster. That's when I knew he was completely smitten.",
        howLongKnown: "8 years",
        sharedHobbiesJokes: "We both love hiking and have an ongoing debate about who's the better fantasy football manager",
        groomIn3Words: "loyal, funny, caring",
        whatYouAdmire: "James has this incredible ability to make anyone feel welcome. He's the guy who remembers your birthday, checks in when you're having a tough time, and always shows up when you need him. He's become an even better version of himself since meeting Sarah.",
        relationshipWithBride: "I've gotten to know Sarah well over the past few years",
        momentSeenTogether: "Last Christmas, I watched them decorate their tree together. James kept trying to direct where ornaments should go, and Sarah would just smile and move them when he wasn't looking. When he finally noticed, instead of being annoyed, he just laughed and said 'your way is better.' That's when I knew they were perfect for each other."
      },
      'maid-of-honor': {
        selectedRole: "maid-of-honor",
        email: "emma.demo@nailthespeech.com",
        yourName: "Emma",
        groomName: "David",
        brideName: "Jessica",
        relationshipToGroom: "We've become close friends",
        tone: "sentimental",
        lengthPreference: "medium",
        greatStoryMemory: "Jessica called me crying tears of joy after her first date with David. She said she'd never met someone who listened so intently when she talked about her dreams. He asked about her work at the animal shelter and genuinely wanted to know about every rescue story. That night, she said 'Emma, I think I just met my person.' And she was absolutely right.",
        howLongKnown: "15 years - since we were college roommates",
        sharedHobbiesJokes: "We have matching friendship bracelets and still do our Sunday coffee dates",
        groomIn3Words: "thoughtful, patient, devoted",
        whatYouAdmire: "Jessica has the biggest heart of anyone I know. She sees the good in everyone and has this gift for making people feel loved and accepted exactly as they are.",
        relationshipWithBride: "She's my sister in every way that matters",
        momentSeenTogether: "At Jessica's birthday last year, David surprised her by donating to the animal shelter in her name and arranging for all her friends to volunteer for a day. Watching her face light up, and seeing how proud he was to make her happy, I knew he truly understood what makes her heart sing."
      },
      'father-of-bride': {
        selectedRole: "father-of-bride",
        email: "robert.demo@nailthespeech.com",
        yourName: "Robert",
        groomName: "Alexander",
        brideName: "Emily",
        relationshipToGroom: "I've grown to love him like a son",
        tone: "sentimental",
        lengthPreference: "medium",
        greatStoryMemory: "The first time Alexander came to Sunday dinner, Emily was nervous about how we'd all get along. Within an hour, he was helping me fix the fence in the backyard and asking thoughtful questions about Emily's childhood. When Emily's mom brought out baby photos, instead of looking embarrassed, Alexander studied each one with genuine interest. That's when I knew he truly wanted to be part of our family.",
        howLongKnown: "3 years",
        sharedHobbiesJokes: "We bond over terrible dad jokes and he actually laughs at mine",
        groomIn3Words: "respectful, genuine, devoted",
        whatYouAdmire: "Emily has always been independent and strong-willed - qualities that make me incredibly proud. She's compassionate, intelligent, and has never been afraid to stand up for what she believes in.",
        relationshipWithBride: "She's my daughter and my pride and joy",
        momentSeenTogether: "Last Thanksgiving, I watched Alexander quietly help Emily's grandmother to her seat and spend the entire dinner patiently listening to her stories he'd heard before. Emily looked at him with such love and gratitude. In that moment, I knew she'd found someone who would cherish not just her, but our entire family."
      },
      'mother-of-bride': {
        selectedRole: "mother-of-bride",
        email: "margaret.demo@nailthespeech.com",
        yourName: "Margaret",
        groomName: "Thomas",
        brideName: "Catherine",
        relationshipToGroom: "He's become like another son to me",
        tone: "light-funny",
        lengthPreference: "medium",
        greatStoryMemory: "When Catherine brought Thomas home for the first time, she warned me he was 'a little nervous about meeting mom.' What she didn't mention was that he'd researched my favorite flowers and brought a beautiful bouquet of peonies. He then proceeded to compliment my cooking so enthusiastically that I made him take home enough leftovers for a week. Catherine later told me he'd Googled 'how to make a good impression on girlfriend's mother.' The effort was so sweet and genuine.",
        howLongKnown: "2 years",
        sharedHobbiesJokes: "We both love cooking shows and he actually tries my recipe suggestions",
        groomIn3Words: "thoughtful, funny, devoted",
        whatYouAdmire: "Catherine has always been my little sunshine - optimistic, creative, and incredibly kind. She has this wonderful ability to find joy in simple moments and bring out the best in everyone around her.",
        relationshipWithBride: "She's my daughter and my best friend",
        momentSeenTogether: "During Catherine's bout with flu last winter, Thomas showed up with homemade soup, tissues, and every season of her favorite show. He didn't just drop them off - he stayed to take care of her, even though he was terrified of getting sick before an important work presentation. Watching him fuss over her like a mother hen, I knew my daughter had found her perfect match."
      },
      'groom': {
        selectedRole: "groom",
        email: "matthew.demo@nailthespeech.com",
        yourName: "Matthew",
        groomName: "Matthew",
        brideName: "Amanda",
        relationshipToGroom: "I am the groom",
        tone: "balanced",
        lengthPreference: "medium",
        greatStoryMemory: "Our first date was supposed to be a simple coffee, but we ended up talking for six hours. When the coffee shop closed, we moved to a nearby park and kept talking until the sun set. Amanda told me about her dreams of traveling to every national park, and I shared my ridiculous collection of vintage vinyl records. By the end of the night, I knew I wanted to hear all her stories and share all of mine for the rest of my life.",
        howLongKnown: "4 years",
        sharedHobbiesJokes: "We're both terrible at mini golf but love trying every course we can find",
        groomIn3Words: "adventurous, loyal, optimistic",
        whatYouAdmire: "Amanda's incredible strength and kindness. She faces every challenge with grace and always finds a way to help others, even when she's going through tough times herself.",
        relationshipWithBride: "She's my best friend, my adventure partner, and my home",
        momentSeenTogether: "Last month, Amanda surprised me by planning a proposal picnic at the exact spot where we had our first real conversation. She'd remembered every detail about that night and wanted to give me a perfect memory to match it."
      },
      'bride': {
        selectedRole: "bride",
        email: "sophia.demo@nailthespeech.com",
        yourName: "Sophia",
        groomName: "Daniel",
        brideName: "Sophia",
        relationshipToGroom: "He's my husband and soulmate",
        tone: "sentimental",
        lengthPreference: "medium",
        greatStoryMemory: "Daniel and I met at a bookstore where we both reached for the same copy of our favorite novel. Instead of letting me have it, he suggested we grab coffee and discuss why we both loved the book so much. Three hours later, we were still talking, and I realized I wanted to hear all his stories and share all of mine for the rest of my life.",
        howLongKnown: "5 years",
        sharedHobbiesJokes: "We love cooking together, though Daniel insists on dancing while chopping vegetables",
        groomIn3Words: "patient, romantic, hilarious",
        whatYouAdmire: "Daniel's unwavering optimism and the way he makes everyone around him feel special. He remembers small details about people's lives and always knows exactly what to say to brighten someone's day.",
        relationshipWithBride: "I am the bride",
        momentSeenTogether: "Every morning, Daniel makes me coffee and leaves little notes by the cup. Even on his busiest days, even when we've had disagreements, there's always a note. Sometimes they're funny, sometimes sweet, but they always remind me that I'm loved. It's these small, consistent acts of love that show me who he really is."
      }
    };

    return demoData[role] || demoData['best-man'];
  };

  const toggleDemoMode = () => {
    if (!demoMode) {
      // Turning demo mode ON - populate with demo data
      const demoData = getDemoData(formData.selectedRole || 'best-man');
      setFormData(prev => ({ ...prev, ...demoData }));
    } else {
      // Turning demo mode OFF - clear form
      setFormData({
        selectedRole: formData.selectedRole,
        customRoleLabel: "",
        email: "",
        yourName: "",
        groomName: "",
        brideName: "",
        relationshipToGroom: "",
        tone: "",
        lengthPreference: "",
        greatStoryMemory: "",
        howLongKnown: "",
        sharedHobbiesJokes: "",
        groomIn3Words: "",
        whatYouAdmire: "",
        relationshipWithBride: "",
        momentSeenTogether: "",
        mentionBrideEnding: false,
        includeShoutOuts: "",
        humorLevel: "",
        includeToastClosing: false,
      });
    }
    setDemoMode(!demoMode);
  };

  // Auto-populate demo data when ?demo=true is in the URL
  useEffect(() => {
    if (demoEnabled && !demoMode && !speechIdFromUrl) {
      const demoData = getDemoData('best-man');
      setFormData(prev => ({ ...prev, ...demoData }));
      setDemoMode(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demoEnabled]);

  // Push a new speech version onto history (for undo)
  const pushSpeechVersion = (speech: string) => {
    setSpeechVersions(prev => {
      // If we're not at the latest version, trim future versions
      const trimmed = prev.slice(0, currentVersionIndex + 1);
      return [...trimmed, speech];
    });
    setCurrentVersionIndex(prev => prev + 1);
  };

  const undoSpeechVersion = () => {
    if (currentVersionIndex > 0) {
      const prevIndex = currentVersionIndex - 1;
      setCurrentVersionIndex(prevIndex);
      setGeneratedSpeech(speechVersions[prevIndex]);
      fullSpeechRef.current = speechVersions[prevIndex];
    }
  };

  const redoSpeechVersion = () => {
    if (currentVersionIndex < speechVersions.length - 1) {
      const nextIndex = currentVersionIndex + 1;
      setCurrentVersionIndex(nextIndex);
      setGeneratedSpeech(speechVersions[nextIndex]);
      fullSpeechRef.current = speechVersions[nextIndex];
    }
  };

  const canUndo = currentVersionIndex > 0;
  const canRedo = currentVersionIndex < speechVersions.length - 1;

  // ── AI credit system ────────────────────────────────────────────
  // Start Over = 3 credits, Refine = 1 credit, Listen = 1 credit, Inline edit = free
  const AI_CREDIT_BUDGET = 30;
  const creditsUsed = (dbRegenCount * 3) + (dbRefineCount * 1) + (ttsCreditsUsed * 1);
  const creditsRemaining = Math.max(0, AI_CREDIT_BUDGET - creditsUsed);
  const creditPercent = Math.min(100, Math.round((creditsUsed / AI_CREDIT_BUDGET) * 100));
  const aiCreditsExhausted = creditsRemaining <= 0;

  // ── Cmd+Z / Ctrl+Z keyboard shortcut for undo ──────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
        // Don't intercept when user is typing in an input/textarea
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        // Also skip contentEditable elements
        if ((e.target as HTMLElement)?.isContentEditable) return;

        if (canUndo) {
          e.preventDefault();
          undoSpeechVersion();
          setShowUndoBanner(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canUndo]); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist form progress to localStorage so returning users resume where they left off
  useEffect(() => {
    // Don't save on initial mount (step 0 with empty form) or when editing a saved speech
    if (speechIdFromUrl) return;
    if (currentStep === 0 && !formData.yourName && !formData.email) return;
    try {
      localStorage.setItem('speechProgress', JSON.stringify({
        formData,
        currentStep,
        speechId: currentSpeechId,
        savedAt: Date.now(),
      }));
    } catch {}
  }, [currentStep, formData, currentSpeechId, speechIdFromUrl]);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      // Validate relationship field when leaving step 3
      if (currentStep === 3 && formData.relationshipToGroom.trim().length < MIN_RELATIONSHIP_LENGTH) {
        showToast('Tell us a little more about your connection — or tap the mic and talk us through it!', 'hint');
        return;
      }

      // Persist email when leaving Step 0
      if (currentStep === 0 && formData.email) {
        fetch('/api/capture-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            name: formData.yourName,
            role: formData.selectedRole || null,
          }),
        }).catch(() => {}); // fire-and-forget
      }

      // Skip role step if role came from URL
      let nextStepNum: number;
      if (currentStep === 0 && !needsRoleSelection) {
        nextStepNum = 2; // jump past role selection
      } else {
        nextStepNum = currentStep + 1;
      }
      setCurrentStep(nextStepNum);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      // Skip role step going back if role came from URL
      let prevStepNum: number;
      if (currentStep === 2 && !needsRoleSelection) {
        prevStepNum = 0;
      } else {
        prevStepNum = currentStep - 1;
      }
      setCurrentStep(prevStepNum);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsGenerating(true);

      // Store form data AND the current step for the result page to access
      const dataToStore = {
        ...formData,
        generatedFromStep: currentStep // Track which step they generated from
      };
      localStorage.setItem('speechFormData', JSON.stringify(dataToStore));
      localStorage.setItem('speechGenerating', 'true');

      // Navigate immediately to result page with loading state
      router.push('/result');

      // Start generating speech in the background (this will continue even after navigation)
      fetch('/api/generate-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(async response => {
        if (!response.ok) {
          throw new Error('Failed to generate speech');
        }

        const speechData = await response.json();

        // Store the generated speech data
        localStorage.setItem('generatedSpeech', JSON.stringify(speechData));
        localStorage.removeItem('speechGenerating');

        // Trigger a storage event to notify the result page
        window.dispatchEvent(new Event('speech-generated'));
      })
      .catch(error => {
        console.error('Error generating speech:', error);
        localStorage.setItem('speechError', error.message);
        localStorage.removeItem('speechGenerating');
        window.dispatchEvent(new Event('speech-error'));
      });

    } catch (error) {
      console.error('Error starting speech generation:', error);
      showToast('Failed to start speech generation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // ── Role-contextual "Make It Personal" field labels & placeholders ──
  const getRoleContextualFields = () => {
    const role = formData.selectedRole;
    const groom = formData.groomName || 'the groom';
    const bride = formData.brideName || 'the bride';

    // Determine the "subject" of the speech — who the speaker is talking about
    const isBrideSide = [
      'maid-of-honor', 'bridesmaid', 'father-of-bride', 'mother-of-bride',
      'stepfather-of-bride', 'stepmother-of-bride', 'brother-of-bride',
      'sister-of-bride',
    ].includes(role);
    const isGroomSide = [
      'best-man', 'best-woman', 'groomsman', 'man-of-honor',
      'father-of-groom', 'mother-of-groom', 'stepfather-of-groom',
      'stepmother-of-groom', 'brother-of-groom', 'sister-of-groom',
    ].includes(role);
    const isCouple = ['bride', 'groom', 'bride-and-groom'].includes(role);
    const isParent = [
      'father-of-bride', 'mother-of-bride', 'father-of-groom', 'mother-of-groom',
      'stepfather-of-bride', 'stepmother-of-bride', 'stepfather-of-groom', 'stepmother-of-groom',
    ].includes(role);
    const isSibling = [
      'brother-of-bride', 'sister-of-bride', 'brother-of-groom', 'sister-of-groom',
    ].includes(role);

    // Primary subject name (who you're speaking about)
    const subject = isCouple
      ? (role === 'bride' ? groom : role === 'groom' ? bride : `${bride} & ${groom}`)
      : isBrideSide ? bride : groom;
    const partner = isBrideSide ? groom : bride;

    // Field 1: howLongKnown
    let howLongKnownLabel = `How long have you known ${subject}?`;
    let howLongKnownPlaceholder = 'e.g., 8 years';
    if (isParent || isSibling) {
      howLongKnownLabel = isParent
        ? `A favourite memory of ${subject} growing up?`
        : `What was it like growing up with ${subject}?`;
      howLongKnownPlaceholder = isParent
        ? 'e.g., always making everyone laugh at the dinner table'
        : 'e.g., we were inseparable as kids';
    } else if (isCouple) {
      howLongKnownLabel = `How did you and ${subject} meet?`;
      howLongKnownPlaceholder = 'e.g., through mutual friends at university';
    }

    // Field 2: sharedHobbiesJokes
    let sharedLabel = 'Inside jokes or shared hobbies?';
    let sharedPlaceholder = 'e.g., hiking buddies';
    if (isParent) {
      sharedLabel = `Something you love doing together?`;
      sharedPlaceholder = 'e.g., Sunday morning walks, cooking together';
    } else if (isSibling) {
      sharedLabel = `Favourite thing you do together?`;
      sharedPlaceholder = 'e.g., gaming marathons, family holidays';
    } else if (isCouple) {
      sharedLabel = `What do you love doing together?`;
      sharedPlaceholder = 'e.g., travelling, cooking, lazy Sunday mornings';
    }

    // Field 3: groomIn3Words (describe the subject)
    const describeLabel = `Describe ${subject} in 3 words`;
    const describePlaceholder = isParent
      ? 'e.g., kind, determined, brilliant'
      : isCouple
        ? 'e.g., loving, adventurous, hilarious'
        : 'e.g., loyal, funny, caring';

    // Field 4: relationshipWithBride/partner
    let partnerLabel = `How well do you know ${partner}?`;
    let partnerPlaceholder = `e.g., known ${partner} for 3 years`;
    if (isCouple) {
      partnerLabel = `What do your family/friends say about ${subject}?`;
      partnerPlaceholder = `e.g., everyone says they've never seen me happier`;
    } else if (isParent) {
      partnerLabel = `How do you feel about ${partner} joining the family?`;
      partnerPlaceholder = `e.g., knew they were special from the first visit`;
    } else if (isSibling) {
      partnerLabel = `What do you think of ${partner}?`;
      partnerPlaceholder = `e.g., they bring out the best in ${subject}`;
    }

    // Field 5: whatYouAdmire
    let admireLabel = `What do you admire about ${subject}?`;
    let admirePlaceholder = `What makes ${subject} special?`;
    if (isCouple) {
      admireLabel = `What do you love most about ${subject}?`;
      admirePlaceholder = `The qualities that made you fall in love`;
    } else if (isParent) {
      admireLabel = `What makes you proudest about ${subject}?`;
      admirePlaceholder = `A quality or achievement that fills you with pride`;
    }

    // Field 6: momentSeenTogether
    let momentLabel = `A moment between them that stood out?`;
    let momentPlaceholder = `A sweet or funny moment you witnessed`;
    if (isCouple) {
      momentLabel = `A moment you knew this was forever?`;
      momentPlaceholder = `A turning point or special memory in your relationship`;
    } else if (isParent) {
      momentLabel = `When did you know they were right for each other?`;
      momentPlaceholder = `A moment that showed you how happy they are together`;
    }

    // Bonus: mentionBrideEnding checkbox label
    let specialMessageLabel = `Add a special message to ${partner} at the end`;
    if (isCouple) {
      specialMessageLabel = `Add a special thank-you to families at the end`;
    }

    // Summary labels for the "Refresh" button
    const subjectLabel = isCouple ? 'Partner' : isBrideSide ? 'Bride' : 'Groom';
    const partnerSummaryLabel = isCouple ? 'Perception' : isBrideSide ? 'Groom' : 'Bride';

    return {
      howLongKnown: { label: howLongKnownLabel, placeholder: howLongKnownPlaceholder },
      sharedHobbiesJokes: { label: sharedLabel, placeholder: sharedPlaceholder },
      groomIn3Words: { label: describeLabel, placeholder: describePlaceholder },
      relationshipWithBride: { label: partnerLabel, placeholder: partnerPlaceholder },
      whatYouAdmire: { label: admireLabel, placeholder: admirePlaceholder },
      momentSeenTogether: { label: momentLabel, placeholder: momentPlaceholder },
      specialMessageLabel,
      subjectLabel,
      partnerSummaryLabel,
    };
  };

  // Generate contextual refinement suggestions based on role + tone
  const getRegenerationSuggestions = () => {
    const directSuggestions: string[] = [];
    const contextualSuggestions: string[] = [];
    const role = formData.selectedRole;
    const groom = formData.groomName || 'the groom';
    const bride = formData.brideName || 'the bride';

    // ── Tone-based direct suggestions ───────────────────────────
    if (formData.tone === 'light-funny' || formData.tone === 'clean-roast') {
      directSuggestions.push("Make it more heartfelt", "Add cleverer jokes");
    } else if (formData.tone === 'sentimental' || formData.tone === 'loving') {
      directSuggestions.push("Add a touch of humour", "Make it more emotional");
    } else if (formData.tone === 'heartfelt' || formData.tone === 'sincere') {
      directSuggestions.push("Make it funnier", "Add more warmth");
    } else {
      directSuggestions.push("Make it funnier", "Make it more touching");
    }

    // ── Role-specific direct suggestions ────────────────────────
    if (role === 'best-man' || role === 'groomsman' || role === 'best-woman') {
      directSuggestions.push(`More about my friendship with ${groom}`, "Add a funnier opening");
    } else if (role === 'maid-of-honor' || role === 'bridesmaid' || role === 'man-of-honor') {
      directSuggestions.push(`More about my bond with ${bride}`, "Strengthen the ending");
    } else if (role === 'father-of-bride' || role === 'mother-of-bride') {
      directSuggestions.push(`More about watching ${bride} grow up`, `Warmer welcome to ${groom}`);
    } else if (role === 'father-of-groom' || role === 'mother-of-groom') {
      directSuggestions.push(`More about ${groom} growing up`, `Warmer welcome to ${bride}`);
    } else if (role === 'groom') {
      directSuggestions.push(`More gratitude to ${bride}'s family`, "Stronger vow moment");
    } else if (role === 'bride') {
      directSuggestions.push(`More gratitude to ${groom}'s family`, "Stronger vow moment");
    } else if (role === 'bride-and-groom') {
      directSuggestions.push("More about how we met", "Add gratitude to parents");
    } else if (role?.includes('brother') || role?.includes('sister')) {
      directSuggestions.push("Add more sibling banter", "Make the ending more emotional");
    } else {
      directSuggestions.push(`Focus more on ${groom} & ${bride} together`, "Strengthen the toast");
    }

    // ── Length (always useful) ──────────────────────────────────
    directSuggestions.push("Make it shorter", "Make it longer");

    // ── Contextual suggestions (need user details) ──────────────
    contextualSuggestions.push("Add a specific story", "Include a particular memory");

    // Role-specific contextual
    if (role === 'best-man' || role === 'groomsman' || role === 'best-woman') {
      contextualSuggestions.push("Add a friendship anecdote", `Include advice for ${groom}`);
    } else if (role === 'maid-of-honor' || role === 'bridesmaid' || role === 'man-of-honor') {
      contextualSuggestions.push(`Add a favourite moment with ${bride}`, "Include a quality I admire");
    } else if (role === 'father-of-bride' || role === 'father-of-groom') {
      contextualSuggestions.push("Add a childhood memory", "Include fatherly wisdom");
    } else if (role === 'mother-of-bride' || role === 'mother-of-groom') {
      contextualSuggestions.push("Add a proud parenting moment", "Include a heartfelt message");
    } else if (role === 'groom' || role === 'bride' || role === 'bride-and-groom') {
      contextualSuggestions.push("Add how we knew it was love", "Mention someone special");
    } else {
      contextualSuggestions.push("Mention someone special", "Add a personal touch");
    }

    return {
      direct: directSuggestions.slice(0, 6),
      contextual: contextualSuggestions.slice(0, 4)
    };
  };

  // Mark speech as final with celebratory toast
  const handleMarkFinal = async () => {
    if (!currentSpeechId) return;
    try {
      const response = await fetch(`/api/speech/${currentSpeechId}/update`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isFinal: !isFinal }),
      });
      if (!response.ok) throw new Error('Failed to update');
      setIsFinal(!isFinal);
      if (!isFinal) {
        setShowFinalToast(true);
        setTimeout(() => setShowFinalToast(false), 5000);
      }
    } catch (err) {
      console.error('Error marking final:', err);
    }
  };

  // Export speech
  const handleExport = async (format: 'txt' | 'pdf' | 'docx') => {
    if (!currentSpeechId) return;
    setExportingFormat(format);
    try {
      const response = await fetch(`/api/speech/${currentSpeechId}/export?format=${format}`);
      if (!response.ok) throw new Error(`Export failed`);
      const blob = await response.blob();
      const title = formData.groomName && formData.brideName
        ? `Speech for ${formData.groomName} & ${formData.brideName}`
        : 'speech';
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(`Error exporting as ${format}:`, err);
    } finally {
      setExportingFormat(null);
    }
  };

  // ── Text-to-Speech: OpenAI TTS with client-side caching ─────────
  // First listen generates via API (1 credit), subsequent plays are instant from cache.
  // MP3 export reuses cached audio — no double generation.

  const textHashFor = (text: string) => `${text.length}:${text.slice(0, 80)}`;

  const generateTTSAudio = async (): Promise<string | null> => {
    const speechText = generatedSpeech;
    if (!speechText.trim()) return null;

    // Return cached audio if speech hasn't changed
    const hash = textHashFor(speechText);
    if (audioCacheRef.current?.textHash === hash) {
      return audioCacheRef.current.url;
    }

    const response = await fetch('/api/text-to-speech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: speechText,
        voice: selectedVoice,
        clientAnonUserId: typeof window !== 'undefined' ? localStorage.getItem('anon_user_id') : null,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('TTS error:', err);
      return null;
    }

    const blob = await response.blob();
    // Revoke old cached URL
    if (audioCacheRef.current) URL.revokeObjectURL(audioCacheRef.current.url);
    const url = URL.createObjectURL(blob);
    audioCacheRef.current = { textHash: hash, url };
    return url;
  };

  const handleListenToSpeech = async () => {
    // If player is showing, hide it
    if (audioUrl) {
      setAudioUrl(null);
      return;
    }

    if (aiCreditsExhausted && !audioCacheRef.current) return;
    if (isLoadingAudio) return;

    const hash = textHashFor(generatedSpeech);
    const isCached = audioCacheRef.current?.textHash === hash;

    // Only charge a credit if we need to call the API
    if (!isCached) {
      setTtsCreditsUsed(prev => prev + 1);
    }

    setIsLoadingAudio(true);
    try {
      const url = await generateTTSAudio();
      if (url) setAudioUrl(url);
    } finally {
      setIsLoadingAudio(false);
    }
  };

  const handleExportAudio = async () => {
    const speechText = generatedSpeech;
    if (!speechText.trim()) return;

    setExportingFormat('mp3');

    const hash = textHashFor(speechText);
    const isCached = audioCacheRef.current?.textHash === hash;

    // Only charge a credit if we need to call the API
    if (!isCached) {
      if (aiCreditsExhausted) { setExportingFormat(null); return; }
      setTtsCreditsUsed(prev => prev + 1);
    }

    setIsLoadingAudio(true);
    try {
      const url = await generateTTSAudio();
      if (!url) return;

      // Also show the player so they can listen
      setAudioUrl(url);

      const title = formData.groomName && formData.brideName
        ? `Speech for ${formData.groomName} & ${formData.brideName}`
        : 'speech';
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.mp3`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error('Error exporting audio:', err);
    } finally {
      setExportingFormat(null);
      setIsLoadingAudio(false);
    }
  };

  // Clean up audio blob URL on unmount
  React.useEffect(() => {
    return () => {
      if (audioCacheRef.current) URL.revokeObjectURL(audioCacheRef.current.url);
    };
  }, []);

  // Invalidate cache when speech content changes
  React.useEffect(() => {
    const hash = textHashFor(generatedSpeech);
    if (audioCacheRef.current && audioCacheRef.current.textHash !== hash) {
      URL.revokeObjectURL(audioCacheRef.current.url);
      audioCacheRef.current = null;
      setAudioUrl(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generatedSpeech]);

  // Rotate loading messages every 2.5s while generating
  const TTS_LOADING_MESSAGES = [
    'Warming up the voice…',
    'Converting your words to speech…',
    'Recording your masterpiece…',
    'Almost there, sounding great…',
    'Adding the finishing touches…',
    'Polishing the delivery…',
    'Just a few more seconds…',
    'Your speech is nearly ready…',
  ];
  React.useEffect(() => {
    if (!isLoadingAudio) { setTtsLoadingMsgIndex(0); return; }
    const interval = setInterval(() => {
      setTtsLoadingMsgIndex(prev => (prev + 1) % TTS_LOADING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingAudio]);

  // Handle direct paragraph editing
  const handleParagraphEdit = (paraId: string, newText: string) => {
    const trimmed = newText.trim();
    const updatedParas = speechParagraphs.map(p => {
      if (p.id !== paraId) return p;
      if (trimmed === p.originalText) {
        return { ...p, text: trimmed, source: 'ai' as const };
      }
      return { ...p, text: trimmed, source: 'user-edited' as const };
    });
    setSpeechParagraphs(updatedParas);

    // Persist metadata to localStorage
    if (currentSpeechId) {
      saveParagraphMeta(currentSpeechId, updatedParas);
    }

    // Push version for undo
    const newFullText = updatedParas.map(p => p.text).join('\n');
    pushSpeechVersion(newFullText);

    // Debounced auto-save
    if (currentSpeechId) {
      setSaveStatus('saving');
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(async () => {
        try {
          const fullText = speechParagraphs.map(p => p.id === paraId ? trimmed : p.text).join('\n');
          const wordCount = fullText.split(/\s+/).filter(w => w.length > 0).length;
          const response = await fetch(`/api/speech/${currentSpeechId}/update`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: fullText, wordCount }),
          });
          if (response.ok) {
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus('idle'), 2000);
          }
        } catch (err) {
          console.error('Auto-save failed:', err);
          setSaveStatus('idle');
        }
      }, 1500);
    }
  };

  // New function for Step 2: Generate speech outline with streaming and stay on page
  // ── Shared streaming response processor ────────────────────────────
  // When keepOldSpeech=true (refinement), old speech stays visible during streaming
  const streamSpeechResponse = async (requestData: Record<string, unknown>, keepOldSpeech = false) => {
    const response = await fetch('/api/generate-speech-stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      if (response.status === 403) {
        setIsGenerating(false);
        redirectToCheckout();
        return;
      }
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || 'Failed to generate speech');
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    if (!reader) throw new Error('No response stream available');

    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const jsonStr = line.slice(6).trim();
            if (!jsonStr) continue;
            const data = JSON.parse(jsonStr);

            if (data.type === 'chunk') {
              // During refinement, don't replace speech with partial chunks
              if (!keepOldSpeech) {
                setGeneratedSpeech(data.fullContent);
              }
            } else if (data.type === 'complete') {
              fullSpeechRef.current = data.speech;
              incrementSpeechGenerationCount();

              if (data.speechId) {
                console.log('✅ [GENERATOR] Speech saved to DB:', data.speechId);
                setCurrentSpeechId(data.speechId);
              }
              console.log('📊 [GENERATOR] Complete:', { speechId: data.speechId, actionType: data.actionType, model: data.model, wordCount: data.wordCount });

              // Update credit counters from server
              if (data.regenCount !== undefined) setDbRegenCount(data.regenCount);
              if (data.refineCount !== undefined) setDbRefineCount(data.refineCount);
              if (data.actionType) setLastActionType(data.actionType);

              if (data.isProUser) {
                setGeneratedSpeech(data.speech);
                pushSpeechVersion(data.speech);
                setIsSpeechPaywalled(false);
              } else {
                setGeneratedSpeech(getPreviewText(data.speech));
                setIsSpeechPaywalled(true);
              }
              setSpeechGenerated(true);
              setIsGenerating(false);
              // Scroll to the speech card after render
              setTimeout(() => speechCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
            } else if (data.type === 'error') {
              throw new Error(data.error);
            }
          } catch (parseError) {
            console.warn('Failed to parse streaming data:', parseError);
          }
        }
      }
    }
  };

  // ── Refinement handler (uses GPT-4o-mini, surgical edits) ──────────
  const handleRefineSpeech = async (instruction: string) => {
    if (!isProUser && speechGenerated) {
      redirectToCheckout();
      return;
    }
    if (!instruction.trim()) return;
    if (aiCreditsExhausted) {
      showToast('You\'ve used all your AI edits for this speech. Click any paragraph to edit directly — it\'s free!', 'hint');
      return;
    }

    // Store the label for the undo banner
    setLastActionLabel(instruction.length > 60 ? instruction.substring(0, 57) + '...' : instruction);

    try {
      setIsGenerating(true);
      setIsRefining(true); // keep old speech visible with overlay
      setShowUndoBanner(false);
      setSpeechError("");
      // Do NOT clear generatedSpeech — old speech stays visible during refinement

      // Build preservation instructions for user-edited paragraphs
      const userEditedParas = speechParagraphs.filter(p => p.source === 'user-edited');
      let finalInstruction = instruction;
      if (userEditedParas.length > 0) {
        finalInstruction += '\n\nIMPORTANT - USER-EDITED PARAGRAPHS (keep these EXACTLY as written, do not change them):\n' +
          userEditedParas.map((p, i) => `[User Edit ${i + 1}]: "${p.text}"`).join('\n') +
          '\n\nModify ONLY the AI-generated paragraphs. Keep all user-edited paragraphs in their current position and exact wording.';
      }

      const requestData = {
        ...formData,
        isRefinement: true,
        isStartOver: false,
        refinementInstruction: finalInstruction,
        existingSpeechContent: generatedSpeech, // send current speech for context
        isRegeneration: true,
        clientAnonUserId: getOrCreateAnonymousUserId(),
        existingSpeechId: speechIdFromUrl || null,
      };

      await streamSpeechResponse(requestData, true); // keepOldSpeech=true
      // After successful refinement, show undo banner
      setShowUndoBanner(true);
      // Auto-hide after 8 seconds
      setTimeout(() => setShowUndoBanner(false), 8000);
      // Scroll to the updated speech
      setTimeout(() => speechCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } catch (error) {
      console.error('Error refining speech:', error);
      setSpeechError(error instanceof Error ? error.message : 'Failed to refine speech');
      setIsGenerating(false);
    } finally {
      setIsRefining(false);
    }
  };

  // ── Start Over handler (uses GPT-4o, full regeneration) ──────────
  // Shows confirmation first, then executes
  const handleStartOver = (customInstructions?: string) => {
    if (!isProUser && speechGenerated) {
      redirectToCheckout();
      return;
    }
    if (aiCreditsExhausted) {
      showToast('You\'ve used all your AI edits for this speech. Click any paragraph to edit directly — it\'s free!', 'hint');
      return;
    }
    setPendingStartOverInstructions(customInstructions);
    setShowStartOverConfirm(true);
  };

  const confirmStartOver = async () => {
    setShowStartOverConfirm(false);
    try {
      setIsGenerating(true);
      setShowUndoBanner(false);
      setSpeechError("");
      setGeneratedSpeech("");

      const requestData = {
        ...formData,
        isRefinement: false,
        isStartOver: true,
        regenerationInstructions: pendingStartOverInstructions || null,
        isRegeneration: true,
        clientAnonUserId: getOrCreateAnonymousUserId(),
        existingSpeechId: speechIdFromUrl || null,
      };

      await streamSpeechResponse(requestData);
    } catch (error) {
      console.error('Error regenerating speech:', error);
      setSpeechError(error instanceof Error ? error.message : 'Failed to regenerate speech');
      setIsGenerating(false);
    }
  };

  // Legacy handler — kept for initial generation + backward compat
  const handleGenerateSpeech = async (customInstructions?: string) => {
    // Non-Pro users cannot regenerate — redirect to checkout
    if (!isProUser && speechGenerated) {
      redirectToCheckout();
      return;
    }

    // If speech already exists and instructions provided, route to refine
    if (speechGenerated && customInstructions) {
      // Classify: does this look like "start over" or "refine"?
      const { classifyInstruction } = await import('@/lib/openai');
      const classified = classifyInstruction(customInstructions);
      if (classified === 'start_over') {
        return handleStartOver(customInstructions);
      }
      return handleRefineSpeech(customInstructions);
    }

    // If speech exists but no instructions (simple regenerate) → start over
    if (speechGenerated && !customInstructions) {
      return handleStartOver();
    }

    try {
      setIsGenerating(true);
      setSpeechError("");
      setGeneratedSpeech(""); // Clear previous speech to show streaming

      const requestData = {
        ...formData,
        regenerationInstructions: null,
        isRegeneration: false,
        clientAnonUserId: getOrCreateAnonymousUserId(),
        existingSpeechId: speechIdFromUrl || null,
      };

      await streamSpeechResponse(requestData);
    } catch (error) {
      console.error('Error generating speech:', error);
      setSpeechError(error instanceof Error ? error.message : 'Failed to generate speech');
      setIsGenerating(false);
    }
  };

  // New function: Navigate to Step 2 and start streaming speech generation
  const MIN_RELATIONSHIP_LENGTH = 30; // ~1 sentence minimum
  const MIN_STORY_LENGTH = 50; // ~2 sentences minimum

  const handleGenerateAndGoToStep2 = async () => {
    if (!formData.greatStoryMemory) return;
    if (formData.greatStoryMemory.trim().length < MIN_STORY_LENGTH) {
      showToast('Add a bit more detail to your story — or tap the mic and tell it in your own words! The more you share, the better your speech.', 'hint');
      return;
    }

    // Navigate to Step 5 (speech output) first
    setCurrentStep(5);

    // Start streaming speech generation
    try {
      setIsGenerating(true);
      setSpeechError("");
      setGeneratedSpeech(""); // Clear any previous speech

      // Fresh generation: reset anonymous ID so previous speeches don't trigger
      // the free-generation limit (e.g. user clicked Previous and re-generates)
      if (!isSignedIn) {
        clearAnonymousUserId();
      }

      const requestData = {
        ...formData,
        regenerationInstructions: null,
        isRegeneration: false,
        clientAnonUserId: getOrCreateAnonymousUserId(),
        existingSpeechId: speechIdFromUrl || null,
      };

      await streamSpeechResponse(requestData);
    } catch (error) {
      console.error('Error generating speech:', error);
      setSpeechError(error instanceof Error ? error.message : 'Failed to generate speech');
      setIsGenerating(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: // Name + Email
        return !!(formData.yourName && formData.email);
      case 1: // Role
        return formData.selectedRole !== "" && (formData.selectedRole !== "other" || formData.customRoleLabel.trim() !== "");
      case 2: // Couple names
        return !!(formData.groomName && formData.brideName);
      case 3: // Connection + Tone
        return !!(formData.relationshipToGroom && formData.tone);
      case 4: // Story
        return !!formData.greatStoryMemory;
      case 5: // Speech output
        return true;
      default:
        return false;
    }
  };

  // Progress bar: step-based progress across the flow
  const getProgressPercent = (): number => {
    if (currentStep === 5 && speechGenerated) return 100;
    if (currentStep === 5) return 90; // generating

    // Each completed step is worth a portion
    const stepWeights = [
      !!(formData.yourName && formData.email),           // step 0
      !!formData.selectedRole,                             // step 1
      !!(formData.groomName && formData.brideName),       // step 2
      !!(formData.relationshipToGroom && formData.tone),  // step 3
      !!formData.greatStoryMemory,                         // step 4
    ];
    const completed = stepWeights.filter(Boolean).length;
    return Math.round((completed / stepWeights.length) * 85);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f4] via-[#fdfcfa] to-[#f8f4f0] transition-theme relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#da5389]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#da5389]/5 rounded-full blur-3xl" />
      </div>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#e8e1d8]/50 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎤</span>
              <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <Sparkles className="h-4 w-4 mr-1" />
                Speech Generator
              </Badge>

              {/* Form Restored Indicator */}
              {isRestored && (
                <div className="text-xs px-2 py-1 rounded-full border bg-green-100 border-green-300 text-green-700 animate-pulse">
                  ✓ Form Restored
                </div>
              )}

              {/* Demo Mode Toggle - hidden unless ?demo=true */}
              {demoEnabled && (
                <button
                  onClick={toggleDemoMode}
                  className={`text-xs px-2 py-1 rounded-full border transition-all duration-200 ${
                    demoMode
                      ? 'bg-[#da5389] text-white border-[#da5389]'
                      : 'bg-white text-[#8f867e] border-[#e8e1d8] hover:border-[#da5389] hover:text-[#da5389]'
                  }`}
                  title={demoMode ? "Click to clear demo data" : "Click to fill with demo data"}
                >
                  {demoMode ? "Demo ON" : "Demo"}
                </button>
              )}

              <Link href={isSignedIn ? "/dashboard" : "/"}>
                <Button className="hidden md:block bg-black hover:bg-black/90 text-white rounded-full">
                  {isSignedIn ? "Dashboard" : "Home"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Payment Success Notification */}
        {showPaymentSuccess && (
          <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-green-800">Payment Successful!</div>
                  <div className="text-sm text-green-700">You can now refine, edit and export your speech. Add extra details below to make it even more personal!</div>
                </div>
              </div>
              <button
                onClick={() => setShowPaymentSuccess(false)}
                className="text-green-600 hover:text-green-800"
              >
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
        )}

        {/* Payment Canceled Notification */}
        {showPaymentCanceled && (
          <div className="mb-6 bg-gradient-to-r from-orange-50 to-rose-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">!</span>
                </div>
                <div>
                  <div className="font-semibold text-orange-800">Payment Canceled</div>
                  <div className="text-sm text-orange-700">No worries! You can upgrade to Pro anytime to unlock premium features.</div>
                </div>
              </div>
              <button
                onClick={() => setShowPaymentCanceled(false)}
                className="text-orange-600 hover:text-orange-800"
              >
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
        )}
        {/* Progress Header */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#181615] mb-2">
              {formData.selectedRole ? (
                <>🎤 {getRoleTitle(formData.selectedRole, formData.customRoleLabel)} Speech Generator</>
              ) : (
                <>🎤 Wedding Speech Generator</>
              )}
            </h1>
            {currentStep < 5 && (
              <p className="text-lg text-[#8f867e]">
                {formData.selectedRole
                  ? `Answer a few quick questions and we'll write your ${getRoleTitle(formData.selectedRole, formData.customRoleLabel).toLowerCase()} speech`
                  : 'Answer a few quick questions and we\'ll write your speech'
                }
              </p>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              {currentStep === 0 && <span className="text-sm font-medium text-[#8f867e]">Let's start with you</span>}
              {currentStep === 1 && <span className="text-sm font-medium text-[#8f867e]">What's your role?</span>}
              {currentStep === 2 && <span className="text-sm font-medium text-[#8f867e]">Tell us about the couple</span>}
              {currentStep === 3 && <span className="text-sm font-medium text-[#8f867e]">Your connection</span>}
              {currentStep === 4 && <span className="text-sm font-medium text-[#8f867e]">The good stuff</span>}
              {currentStep === 5 && !speechGenerated && <span className="text-sm font-medium text-[#8f867e]">Generating your speech</span>}
              {currentStep === 5 && speechGenerated && <span className="text-sm font-medium text-[#da5389]">Speech ready</span>}
            </div>
            <span className="text-sm font-semibold text-[#181615]">{getProgressPercent()}%</span>
          </div>
          <div className="h-2 bg-[#e8e1d8] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#da5389] to-[#e06b9a] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${getProgressPercent()}%` }}
            />
          </div>
        </div>

        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#faf7f4]/30" />
          <CardHeader className="text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              {currentStep === 0 && <span className="text-2xl">👋</span>}
              {currentStep === 1 && <span className="text-2xl">🎭</span>}
              {currentStep === 2 && <span className="text-2xl">💍</span>}
              {currentStep === 3 && <span className="text-2xl">🤝</span>}
              {currentStep === 4 && <span className="text-2xl">📖</span>}
              {currentStep === 5 && <span className="text-2xl">✏️</span>}
              <CardTitle className="text-2xl text-[#181615]">
                {currentStep === 0 && "First, introduce yourself"}
                {currentStep === 1 && "What's your role?"}
                {currentStep === 2 && "Who's getting married?"}
                {currentStep === 3 && "How do you know them?"}
                {currentStep === 4 && "Tell us a story"}
                {currentStep === 5 && (speechGenerated ? "Your Speech" : "Generating your speech")}
              </CardTitle>
            </div>
            <p className="text-sm text-[#8f867e]">
              {currentStep === 0 && "We'll use this to personalize your speech"}
              {currentStep === 1 && "Pick the role that best describes you"}
              {currentStep === 2 && "Just first names is fine"}
              {currentStep === 3 && "This helps us get the tone right"}
              {currentStep === 4 && "The best speeches have one great story. This is yours."}
              {currentStep === 5 && !speechGenerated && "Sit tight, this takes a few seconds"}
              {currentStep === 5 && speechGenerated && "Review, refine, and make it yours"}
            </p>
          </CardHeader>
          <CardContent className="p-8 relative z-10">

            {/* Step 0: Name + Email */}
            {currentStep === 0 && (
              <div className="space-y-6 max-w-md mx-auto">
                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    Your first name
                  </label>
                  <Input
                    placeholder="e.g., James"
                    value={formData.yourName}
                    onChange={(e) => updateFormData('yourName', e.target.value)}
                    className="darker-placeholder text-lg py-3"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    Your email address
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="darker-placeholder text-lg py-3"
                  />
                  <p className="text-xs text-[#8f867e] mt-1.5">We'll send your speech here so you don't lose it</p>
                </div>
              </div>
            )}

            {/* Step 1: Role Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Popular roles - large cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {speechRoles.filter(r => r.tier === 'major').map((role) => (
                    <button
                      key={role.slug}
                      type="button"
                      onClick={() => { updateFormData('selectedRole', role.slug); updateFormData('customRoleLabel', ''); }}
                      className={`p-5 rounded-xl border-2 text-center transition-all duration-200 hover:shadow-lg ${
                        formData.selectedRole === role.slug
                          ? 'bg-[#da5389] border-[#da5389] text-white shadow-lg scale-105'
                          : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                      }`}
                    >
                      <div className="text-3xl mb-2">{role.emoji}</div>
                      <div className="font-semibold text-base">{role.label}</div>
                    </button>
                  ))}
                </div>

                {/* All other roles - compact list */}
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer select-none mb-3">
                    <span className="text-sm font-medium text-[#8f867e]">More roles</span>
                    <span className="text-sm text-[#da5389] hover:text-[#c4447a] transition-colors flex items-center gap-1">
                      <span className="group-open:hidden">Show all roles ▼</span>
                      <span className="hidden group-open:inline">Show fewer ▲</span>
                    </span>
                  </summary>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                    {speechRoles.filter(r => r.tier === 'minor').map((role) => (
                      <button
                        key={role.slug}
                        type="button"
                        onClick={() => { updateFormData('selectedRole', role.slug); updateFormData('customRoleLabel', ''); }}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-left text-sm transition-all duration-200 ${
                          formData.selectedRole === role.slug
                            ? 'bg-[#da5389] border-[#da5389] text-white shadow-md'
                            : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                        }`}
                      >
                        <span>{role.emoji}</span>
                        <span className="font-medium truncate">{role.label}</span>
                      </button>
                    ))}
                  </div>
                </details>

                {/* Custom role option */}
                <div className="pt-2 border-t border-[#e8e1d8]">
                  <button
                    type="button"
                    onClick={() => updateFormData('selectedRole', 'other')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.selectedRole === 'other'
                        ? 'bg-[#da5389] border-[#da5389] text-white shadow-md'
                        : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                    }`}
                  >
                    <span className="text-xl">✍️</span>
                    <div>
                      <span className="font-semibold text-sm">Something else</span>
                      <span className={`block text-xs ${formData.selectedRole === 'other' ? 'text-white/80' : 'text-[#8f867e]'}`}>
                        Don't see your role? Type it in
                      </span>
                    </div>
                  </button>
                  {formData.selectedRole === 'other' && (
                    <div className="mt-3">
                      <Input
                        placeholder="e.g., Godfather, Family friend, Colleague"
                        value={formData.customRoleLabel}
                        onChange={(e) => updateFormData('customRoleLabel', e.target.value)}
                        className="darker-placeholder text-base"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Couple Names */}
            {currentStep === 2 && (
              <div className="space-y-6 max-w-md mx-auto">
                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    Groom's first name
                  </label>
                  <Input
                    placeholder="e.g., David"
                    value={formData.groomName}
                    onChange={(e) => updateFormData('groomName', e.target.value)}
                    className="darker-placeholder text-lg py-3"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    Bride's first name
                  </label>
                  <Input
                    placeholder="e.g., Sarah"
                    value={formData.brideName}
                    onChange={(e) => updateFormData('brideName', e.target.value)}
                    className="darker-placeholder text-lg py-3"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Connection + Tone (contextual to role) */}
            {currentStep === 3 && (() => {
              const connectionPrompts = getConnectionPrompt(formData.selectedRole, formData.groomName, formData.brideName);
              return (
                <div className="space-y-6 max-w-lg mx-auto">
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      {connectionPrompts.question}
                    </label>

                    {/* Expandable examples */}
                    <details className="mb-4 group">
                      <summary className="flex items-center gap-2 text-sm font-medium text-[#da5389] cursor-pointer select-none hover:text-[#c4447a] transition-colors">
                        <span className="transition-transform group-open:rotate-90">▶</span>
                        <span className="group-open:hidden">Show Examples</span>
                        <span className="hidden group-open:inline">Hide Examples</span>
                      </summary>
                      <div className="mt-3 bg-[#faf7f4] border border-[#e8e1d8] rounded-xl p-4 space-y-3">
                        <p className="text-xs font-semibold text-[#8f867e] uppercase tracking-wide">Examples:</p>
                        {connectionPrompts.examples.map((ex, i) => (
                          <p key={i} className="text-sm text-[#5a534e] italic leading-relaxed">
                            &ldquo;{ex}&rdquo;
                          </p>
                        ))}
                      </div>
                    </details>

                    <Textarea
                      placeholder={connectionPrompts.placeholder}
                      value={formData.relationshipToGroom}
                      onChange={(e) => updateFormData('relationshipToGroom', e.target.value)}
                      rows={3}
                      maxLength={2000}
                      className="darker-placeholder text-base"
                      autoFocus
                    />
                    <div className="flex items-center justify-between mt-2">
                      <p className={`text-xs ${formData.relationshipToGroom.trim().length >= MIN_RELATIONSHIP_LENGTH ? 'text-green-600' : 'text-[#8f867e]'}`}>
                        {formData.relationshipToGroom.trim().length < MIN_RELATIONSHIP_LENGTH
                          ? `${MIN_RELATIONSHIP_LENGTH - formData.relationshipToGroom.trim().length} more characters — or tap the mic 🎙️`
                          : '✓ Nice — that gives us plenty to work with'}
                      </p>
                      <VoiceInput
                        onTranscription={(text) => updateFormData('relationshipToGroom', text)}
                        placeholder="Say it instead"
                        disabled={isGenerating}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-1">
                      What tone suits your speech?
                    </label>
                    {formData.selectedRole && (
                      <p className="text-xs font-medium text-[#da5389] mb-3">
                        ✨ Recommended for {getRoleTitle(formData.selectedRole, formData.customRoleLabel)}
                      </p>
                    )}
                    {!formData.selectedRole && (
                      <p className="text-xs text-[#8f867e] mb-3">Pick the vibe that feels right</p>
                    )}

                    {/* Recommended tones - always visible */}
                    {(() => {
                      const recValues = getRecommendedToneValues(formData.selectedRole);
                      const recTones = recValues.map(v => allTones.find(t => t.value === v)!).filter(Boolean);
                      const otherTones = allTones.filter(t => !recValues.includes(t.value));
                      const isSelectedInOthers = otherTones.some(t => t.value === formData.tone);

                      return (
                        <>
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {recTones.map((tone) => (
                              <button
                                key={tone.value}
                                type="button"
                                onClick={() => updateFormData('tone', tone.value)}
                                className={`flex items-start gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                                  formData.tone === tone.value
                                    ? 'bg-[#da5389] border-[#da5389] text-white shadow-md'
                                    : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                                }`}
                              >
                                <span className="text-xl mt-0.5">{tone.emoji}</span>
                                <div>
                                  <span className="font-semibold block text-sm">{tone.label}</span>
                                  <span className={`text-xs ${formData.tone === tone.value ? 'text-white/80' : 'text-[#8f867e]'}`}>{tone.description}</span>
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* Other tones - collapsible */}
                          <details className="group" open={isSelectedInOthers || undefined}>
                            <summary className="flex items-center justify-between cursor-pointer select-none mb-3">
                              <span className="text-sm font-medium text-[#181615]">Other Options</span>
                              <span className="text-sm text-[#da5389] hover:text-[#c4447a] transition-colors flex items-center gap-1">
                                <span className="group-open:hidden">Show more options ▼</span>
                                <span className="hidden group-open:inline">Show fewer options ▲</span>
                              </span>
                            </summary>
                            <div className="grid grid-cols-2 gap-3">
                              {otherTones.map((tone) => (
                                <button
                                  key={tone.value}
                                  type="button"
                                  onClick={() => updateFormData('tone', tone.value)}
                                  className={`flex items-start gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                                    formData.tone === tone.value
                                      ? 'bg-[#da5389] border-[#da5389] text-white shadow-md'
                                      : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                                  }`}
                                >
                                  <span className="text-xl mt-0.5">{tone.emoji}</span>
                                  <div>
                                    <span className="font-semibold block text-sm">{tone.label}</span>
                                    <span className={`text-xs ${formData.tone === tone.value ? 'text-white/80' : 'text-[#8f867e]'}`}>{tone.description}</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </details>
                        </>
                      );
                    })()}
                  </div>
                </div>
              );
            })()}

            {/* Step 4: Story (contextual to role) */}
            {currentStep === 4 && (() => {
              const storyPrompts = getStoryPrompt(formData.selectedRole, formData.groomName, formData.brideName);
              return (
                <div className="space-y-6 max-w-lg mx-auto">
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      {storyPrompts.question}
                    </label>
                    <p className="text-sm text-[#8f867e] mb-3">{storyPrompts.hint}</p>

                    {/* Expandable examples */}
                    <details className="mb-4 group">
                      <summary className="flex items-center gap-2 text-sm font-medium text-[#da5389] cursor-pointer select-none hover:text-[#c4447a] transition-colors">
                        <span className="transition-transform group-open:rotate-90">▶</span>
                        <span className="group-open:hidden">Show Examples</span>
                        <span className="hidden group-open:inline">Hide Examples</span>
                      </summary>
                      <div className="mt-3 bg-[#faf7f4] border border-[#e8e1d8] rounded-xl p-4 space-y-3">
                        <p className="text-xs font-semibold text-[#8f867e] uppercase tracking-wide">Examples:</p>
                        {storyPrompts.examples.map((ex, i) => (
                          <p key={i} className="text-sm text-[#5a534e] italic leading-relaxed">
                            &ldquo;{ex}&rdquo;
                          </p>
                        ))}
                      </div>
                    </details>

                    <Textarea
                      placeholder={storyPrompts.placeholder}
                      value={formData.greatStoryMemory}
                      onChange={(e) => updateFormData('greatStoryMemory', e.target.value)}
                      rows={5}
                      maxLength={5000}
                      className="darker-placeholder text-base"
                      autoFocus
                    />
                    <div className="flex items-center justify-between mt-2">
                      <p className={`text-xs ${formData.greatStoryMemory.trim().length >= MIN_STORY_LENGTH ? 'text-green-600' : 'text-[#8f867e]'}`}>
                        {formData.greatStoryMemory.trim().length < MIN_STORY_LENGTH
                          ? `${MIN_STORY_LENGTH - formData.greatStoryMemory.trim().length} more characters — or tap the mic and tell your story 🎙️`
                          : '✓ Great — enough detail to generate a quality speech'}
                      </p>
                      <VoiceInput
                        onTranscription={(text) => updateFormData('greatStoryMemory', text)}
                        placeholder="Tell your story by voice"
                        disabled={isGenerating}
                      />
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Section: Pro Features (Premium - Adds Personality & Emotional Depth) - legacy step, hidden */}
            {currentStep === 99 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#da5389]/10 to-[#da5389]/10 rounded-lg p-6 mb-6 border border-[#da5389]/30">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#181615] mb-1">💎 Pro - Premium Features</h3>
                    <p className="text-base text-[#8f867e]">
                      Add personality and emotional depth to make your speech truly memorable
                    </p>
                  </div>
                  <div className="text-sm text-[#da5389] font-medium">
                    ✨ Unlock these fields to enhance your speech with personal details
                  </div>
                </div>

                {(() => { const f = getRoleContextualFields(); return (<>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      {f.howLongKnown.label}
                    </label>
                    <Input
                      placeholder={f.howLongKnown.placeholder}
                      value={formData.howLongKnown}
                      onChange={(e) => updateFormData('howLongKnown', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      {f.sharedHobbiesJokes.label}
                    </label>
                    <Input
                      placeholder={f.sharedHobbiesJokes.placeholder}
                      value={formData.sharedHobbiesJokes}
                      onChange={(e) => updateFormData('sharedHobbiesJokes', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      {f.groomIn3Words.label}
                    </label>
                    <Input
                      placeholder={f.groomIn3Words.placeholder}
                      value={formData.groomIn3Words}
                      onChange={(e) => updateFormData('groomIn3Words', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-[#181615] mb-2">
                      {f.relationshipWithBride.label}
                    </label>
                    <Input
                      placeholder={f.relationshipWithBride.placeholder}
                      value={formData.relationshipWithBride}
                      onChange={(e) => updateFormData('relationshipWithBride', e.target.value)}
                      className="darker-placeholder"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    {f.whatYouAdmire.label}
                  </label>
                  <Textarea
                    placeholder={f.whatYouAdmire.placeholder}
                    value={formData.whatYouAdmire}
                    onChange={(e) => updateFormData('whatYouAdmire', e.target.value)}
                    rows={3}
                    className="darker-placeholder"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#181615] mb-2">
                    {f.momentSeenTogether.label}
                  </label>
                  <Textarea
                    placeholder={f.momentSeenTogether.placeholder}
                    value={formData.momentSeenTogether}
                    onChange={(e) => updateFormData('momentSeenTogether', e.target.value)}
                    rows={3}
                    className="darker-placeholder"
                  />
                </div>
                </>); })()}

                {/* Speech Length Selection */}
                <div>
                  <label className="block text-base font-medium text-[#181615] mb-3">
                    How long should your speech be?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "short", label: "Short (~2 min)", description: "Quick and impactful" },
                      { value: "medium", label: "Medium (~4 min)", description: "Perfect balance" },
                      { value: "long", label: "Long (~6 min)", description: "Full storytelling" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateFormData('lengthPreference', option.value)}
                        className={`px-6 py-3 rounded-lg border-2 text-center transition-all duration-200 min-w-[140px] ${
                          formData.lengthPreference === option.value
                            ? 'bg-[#da5389] border-[#da5389] text-white shadow-md'
                            : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                        }`}
                      >
                        <div className="text-base font-medium">{option.label}</div>
                        <div className={`text-sm mt-1 ${
                          formData.lengthPreference === option.value ? 'text-white/80' : 'text-[#8f867e]'
                        }`}>
                          {option.description}
                        </div>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-[#8f867e] mt-2">
                    💡 Speech timing is based on a natural speaking pace of ~150 words per minute
                  </p>
                </div>

                {/* Premium Features Section */}
                <div className="bg-[#faf7f4] rounded-lg p-6 border border-[#e8e1d8] mt-8">
                  <h4 className="text-lg font-semibold text-[#181615] mb-4">💎 Bonus Premium Features</h4>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="mentionBrideEnding"
                        checked={formData.mentionBrideEnding}
                        onChange={(e) => updateFormData('mentionBrideEnding', e.target.checked)}
                      />
                      <label htmlFor="mentionBrideEnding" className="text-base font-medium text-[#181615]">
                        Add a special message to the bride at the end
                      </label>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-[#181615] mb-2">
                        Anyone else to mention? (family, mutual friends, etc.)
                      </label>
                      <Textarea
                        placeholder="List anyone you'd like to acknowledge"
                        value={formData.includeShoutOuts}
                        onChange={(e) => updateFormData('includeShoutOuts', e.target.value)}
                        rows={2}
                        className="darker-placeholder"
                      />
                    </div>

                    <div>
                      <label className="block text-base font-medium text-[#181615] mb-3">
                        Humor level for playful roasting
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { value: "none", label: "None" },
                          { value: "light", label: "Light" },
                          { value: "medium", label: "Medium" },
                          { value: "go-for-it", label: "Go for it" }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => updateFormData('humorLevel', option.value)}
                            className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                              formData.humorLevel === option.value
                                ? 'bg-[#da5389] border-[#da5389] text-white'
                                : 'bg-white border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389]'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="includeToastClosing"
                        checked={formData.includeToastClosing}
                        onChange={(e) => updateFormData('includeToastClosing', e.target.checked)}
                      />
                      <label htmlFor="includeToastClosing" className="text-base font-medium text-[#181615]">
                        End with a traditional toast
                      </label>
                    </div>
                  </div>
                </div>

                {/* Generate Enhanced Speech CTA */}
                <div className="bg-gradient-to-r from-[#da5389]/5 to-[#da5389]/5 border border-[#da5389]/20 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#181615] mb-2">
                      Generate Your Enhanced Speech
                    </h4>
                    <p className="text-[#8f867e] text-sm mb-4">
                      Include all the pro details above to create a more personalized and memorable speech.
                    </p>
                    <Button
                      onClick={handleSubmit}
                      className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-8 py-3 text-lg font-medium shadow-lg"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Enhanced Speech
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Your Speech Outline */}
            {currentStep === 5 && (
              <div className="space-y-6">
                {/* Collapsible Speech Details — shown for Pro users after generation or in edit mode */}
                {(isEditMode || (isProUser && speechGenerated)) && (
                  <div className="bg-white border border-[#e8e1d8] rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setShowEditDetails(!showEditDetails)}
                      className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${
                        !showEditDetails && isProUser ? 'bg-[#da5389]/5 hover:bg-[#da5389]/10' : 'hover:bg-[#faf7f4]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-[#da5389]" />
                        <span className="font-semibold text-[#181615]">Speech Details</span>
                        {!showEditDetails && isProUser && (
                          <span className="relative flex items-center">
                            {(formData.howLongKnown || formData.sharedHobbiesJokes || formData.groomIn3Words || formData.whatYouAdmire || formData.relationshipWithBride || formData.momentSeenTogether) ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                                ✓ Extra details added
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#da5389] text-white animate-pulse">
                                ✨ Add more detail for a better speech
                              </span>
                            )}
                          </span>
                        )}
                        {showEditDetails && (
                          <span className="text-sm text-[#8f867e]">
                            {formData.yourName} &bull; {formData.groomName} & {formData.brideName} &bull; {formData.tone}
                          </span>
                        )}
                      </div>
                      {showEditDetails ? <ChevronUp className="h-5 w-5 text-[#8f867e]" /> : <ChevronDown className="h-5 w-5 text-[#da5389]" />}
                    </button>

                    {showEditDetails && (
                      <div className="px-6 pb-6 border-t border-[#e8e1d8] pt-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-1">Your name</label>
                            <input
                              type="text"
                              value={formData.yourName}
                              onChange={(e) => setFormData({...formData, yourName: e.target.value})}
                              className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-1">Groom's name</label>
                            <input
                              type="text"
                              value={formData.groomName}
                              onChange={(e) => setFormData({...formData, groomName: e.target.value})}
                              className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-1">Bride's name</label>
                            <input
                              type="text"
                              value={formData.brideName}
                              onChange={(e) => setFormData({...formData, brideName: e.target.value})}
                              className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#181615] mb-1">Relationship to groom</label>
                          <input
                            type="text"
                            value={formData.relationshipToGroom}
                            onChange={(e) => setFormData({...formData, relationshipToGroom: e.target.value})}
                            className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#181615] mb-1">Tone</label>
                          <div className="flex flex-wrap gap-2">
                            {allTones.map((tone) => (
                              <button
                                key={tone.value}
                                type="button"
                                onClick={() => setFormData({...formData, tone: tone.value})}
                                className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                                  formData.tone === tone.value
                                    ? 'bg-[#da5389] text-white border-[#da5389]'
                                    : 'bg-white text-[#181615] border-[#e8e1d8] hover:border-[#da5389]'
                                }`}
                              >
                                {tone.emoji} {tone.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#181615] mb-1">Story / Memory</label>
                          <textarea
                            value={formData.greatStoryMemory}
                            onChange={(e) => setFormData({...formData, greatStoryMemory: e.target.value})}
                            rows={3}
                            className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389] resize-vertical"
                          />
                        </div>

                        {/* Pro enrichment fields — shown inline for Pro users in edit mode */}
                        {isProUser && (
                          <>
                            <div className="border-t border-[#e8e1d8] pt-4 mt-2">
                              <h4 className="text-sm font-semibold text-[#da5389] mb-3">
                                Make It Personal
                                {!(formData.howLongKnown || formData.sharedHobbiesJokes || formData.groomIn3Words || formData.whatYouAdmire || formData.relationshipWithBride || formData.momentSeenTogether) && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#da5389]/10 text-[#da5389] border border-[#da5389]/20">NEW</span>
                                )}
                              </h4>
                              <p className="text-xs text-[#8f867e] mb-3">The more you share, the more unique and heartfelt your speech will be</p>
                              {(() => { const f = getRoleContextualFields(); return (<>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-[#181615] mb-1">{f.howLongKnown.label}</label>
                                  <input type="text" value={formData.howLongKnown} onChange={(e) => setFormData({...formData, howLongKnown: e.target.value})} className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]" placeholder={f.howLongKnown.placeholder} />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-[#181615] mb-1">{f.sharedHobbiesJokes.label}</label>
                                  <input type="text" value={formData.sharedHobbiesJokes} onChange={(e) => setFormData({...formData, sharedHobbiesJokes: e.target.value})} className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]" placeholder={f.sharedHobbiesJokes.placeholder} />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-[#181615] mb-1">{f.groomIn3Words.label}</label>
                                  <input type="text" value={formData.groomIn3Words} onChange={(e) => setFormData({...formData, groomIn3Words: e.target.value})} className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]" placeholder={f.groomIn3Words.placeholder} />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-[#181615] mb-1">{f.relationshipWithBride.label}</label>
                                  <input type="text" value={formData.relationshipWithBride} onChange={(e) => setFormData({...formData, relationshipWithBride: e.target.value})} className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]" placeholder={f.relationshipWithBride.placeholder} />
                                </div>
                              </div>
                              <div className="mt-4">
                                <label className="block text-sm font-medium text-[#181615] mb-1">{f.whatYouAdmire.label}</label>
                                <textarea value={formData.whatYouAdmire} onChange={(e) => setFormData({...formData, whatYouAdmire: e.target.value})} rows={2} className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389] resize-vertical" placeholder={f.whatYouAdmire.placeholder} />
                              </div>
                              <div className="mt-4">
                                <label className="block text-sm font-medium text-[#181615] mb-1">{f.momentSeenTogether.label}</label>
                                <textarea value={formData.momentSeenTogether} onChange={(e) => setFormData({...formData, momentSeenTogether: e.target.value})} rows={2} className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389] resize-vertical" placeholder={f.momentSeenTogether.placeholder} />
                              </div>
                              </>); })()}
                            </div>

                            <div className="border-t border-[#e8e1d8] pt-4 mt-2">
                              <h4 className="text-sm font-semibold text-[#da5389] mb-3">
                                Bonus Options
                                {!(formData.mentionBrideEnding || formData.includeShoutOuts || formData.humorLevel || formData.includeToastClosing) && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#da5389]/10 text-[#da5389] border border-[#da5389]/20">NEW</span>
                                )}
                              </h4>
                              <div className="space-y-3">
                                <label className="flex items-center gap-2 text-sm">
                                  <input type="checkbox" checked={!!formData.mentionBrideEnding} onChange={(e) => setFormData({...formData, mentionBrideEnding: e.target.checked})} className="rounded border-[#e8e1d8]" />
                                  {getRoleContextualFields().specialMessageLabel}
                                </label>
                                <div>
                                  <label className="block text-sm font-medium text-[#181615] mb-1">Anyone to mention? (family, friends)</label>
                                  <input type="text" value={formData.includeShoutOuts} onChange={(e) => setFormData({...formData, includeShoutOuts: e.target.value})} className="w-full px-3 py-2 border border-[#e8e1d8] rounded-lg text-sm focus:outline-none focus:border-[#da5389]" placeholder="e.g., parents, bridal party" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-[#181615] mb-1">Humor level</label>
                                  <div className="flex flex-wrap gap-2">
                                    {['None', 'Light', 'Medium', 'Go for it'].map((level) => (
                                      <button key={level} type="button" onClick={() => setFormData({...formData, humorLevel: level})} className={`px-3 py-1.5 rounded-full text-sm border transition-all ${formData.humorLevel === level ? 'bg-[#da5389] text-white border-[#da5389]' : 'bg-white text-[#181615] border-[#e8e1d8] hover:border-[#da5389]'}`}>{level}</button>
                                    ))}
                                  </div>
                                </div>
                                <label className="flex items-center gap-2 text-sm">
                                  <input type="checkbox" checked={!!formData.includeToastClosing} onChange={(e) => setFormData({...formData, includeToastClosing: e.target.checked})} className="rounded border-[#e8e1d8]" />
                                  End with a traditional toast
                                </label>
                              </div>
                            </div>
                          </>
                        )}

                        <Button
                          onClick={() => {
                            setShowEditDetails(false);
                            const rcf = getRoleContextualFields();
                            const proDetails = [
                              formData.howLongKnown && `${rcf.howLongKnown.label}: ${formData.howLongKnown}`,
                              formData.sharedHobbiesJokes && `${rcf.sharedHobbiesJokes.label}: ${formData.sharedHobbiesJokes}`,
                              formData.groomIn3Words && `${rcf.groomIn3Words.label}: ${formData.groomIn3Words}`,
                              formData.whatYouAdmire && `${rcf.whatYouAdmire.label}: ${formData.whatYouAdmire}`,
                              formData.relationshipWithBride && `${rcf.relationshipWithBride.label}: ${formData.relationshipWithBride}`,
                              formData.momentSeenTogether && `${rcf.momentSeenTogether.label}: ${formData.momentSeenTogether}`,
                              formData.mentionBrideEnding && rcf.specialMessageLabel,
                              formData.includeShoutOuts && `Mention: ${formData.includeShoutOuts}`,
                              formData.humorLevel && `Humor level: ${formData.humorLevel}`,
                              formData.includeToastClosing && 'End with traditional toast',
                            ].filter(Boolean).join('. ');
                            handleStartOver(`Regenerate using all updated details including: Name=${formData.yourName}, Groom=${formData.groomName}, Bride=${formData.brideName}, Tone=${formData.tone}. ${proDetails}`);
                          }}
                          disabled={isGenerating}
                          className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full"
                        >
                          <Sparkles className="mr-2 h-4 w-4" />
                          Refresh with Updated Details
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Progress message based on generation status */}
                {!speechGenerated && !isGenerating && (
                  <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#0369a1] mb-2">✨ Ready to Generate Your Speech!</h3>
                    <p className="text-[#0c4a6e] mb-4">
                      You've provided all the essentials. Click below to generate your personalized speech outline using AI.
                    </p>
                    <p className="text-sm text-[#0369a1]">
                      💡 Your first speech is free — let's make it count!
                    </p>
                  </div>
                )}

                {/* Generating message with live preview */}
                {isGenerating && (
                  <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="animate-spin h-5 w-5 border-2 border-[#ea580c] border-t-transparent rounded-full mr-3" />
                      <h3 className="text-lg font-semibold text-[#ea580c]">🎤 Crafting Your Speech...</h3>
                    </div>
                    <p className="text-[#9a3412] mb-4">
                      Watch your personalized speech come to life in real-time using AI.
                    </p>
                    <p className="text-sm text-[#ea580c] mb-4">
                      ✨ Using your story about {formData.groomName} and {formData.brideName} to create something special!
                    </p>

                    {/* Live streaming preview */}
                    {generatedSpeech && (
                      <div className="bg-white/50 rounded-lg p-4 border border-[#fed7aa]/50">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-[#ea580c]">✍️ Live Preview</h4>
                          <div className="flex items-center space-x-3 text-xs text-[#9a3412]">
                            <span>✏️ {countWords(generatedSpeech)} words</span>
                            <span>⏱️ ~{estimateReadingTime(generatedSpeech)} min</span>
                          </div>
                        </div>
                        <div className="max-h-32 overflow-y-auto text-sm text-[#9a3412] leading-relaxed">
                          {generatedSpeech.split('\n').map((paragraph, index) => (
                            <p key={`preview-${index}-${paragraph.slice(0, 15)}`} className="mb-2">
                              {paragraph}
                            </p>
                          ))}
                          <span className="inline-block w-2 h-4 bg-[#ea580c] animate-pulse ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Generated Speech Display */}
                {speechGenerated && generatedSpeech && !isGenerating && (
                  <div ref={speechCardRef} className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#181615]">
                          {isSpeechPaywalled ? '🔒 Your Speech is Ready!' : '✨ Your Speech is Ready!'}
                        </h3>
                        <p className="text-sm text-[#8f867e] mt-1">Generated with AI • Personalized for {formData.groomName} & {formData.brideName}</p>
                      </div>
                      {isSpeechPaywalled && (
                        <Badge className="bg-[#da5389] text-white">Preview</Badge>
                      )}
                    </div>

                    {/* Enhanced Speech Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-[#da5389]/10 to-[#da5389]/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#da5389]">{countWords(fullSpeechRef.current || generatedSpeech)}</div>
                        <div className="text-sm font-medium text-[#8f867e]">Words</div>
                      </div>
                      <div className="bg-gradient-to-br from-[#da5389]/10 to-[#da5389]/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-[#da5389]">{estimateReadingTime(fullSpeechRef.current || generatedSpeech)}</div>
                        <div className="text-sm font-medium text-[#8f867e]">Minutes</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">{allTones.find(t => t.value === formData.tone)?.emoji || '😊'}</div>
                        <div className="text-sm font-medium text-[#8f867e]">{allTones.find(t => t.value === formData.tone)?.label || formData.tone.replace('-', ' ')}</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">{getRoleTitle(formData.selectedRole, formData.customRoleLabel).split(' ')[0]}</div>
                        <div className="text-sm font-medium text-[#8f867e]">Role</div>
                      </div>
                    </div>

                    {/* Speech Content */}
                    <div className="bg-white border-2 border-[#e8e1d8] rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-[#181615] flex items-center">
                          <span className="text-xl mr-2">✏️</span>
                          Your Speech
                        </h4>
                        {!isSpeechPaywalled && (
                          <div className="flex items-center space-x-2">
                            {/* Version undo/redo — visible for Pro users in edit mode or after generation */}
                            {(isEditMode || (isProUser && speechGenerated)) && (
                              <div className="flex items-center space-x-1 mr-2 bg-[#faf7f4] rounded-full px-3 py-1">
                                <button
                                  onClick={undoSpeechVersion}
                                  disabled={!canUndo}
                                  title="Undo — go to previous version"
                                  className={`p-1 rounded text-sm transition-colors ${canUndo ? 'text-[#da5389] hover:bg-[#da5389]/10' : 'text-[#d1ccc4] cursor-not-allowed'}`}
                                >
                                  ↩️
                                </button>
                                <span className="text-xs text-[#8f867e] font-medium">
                                  {speechVersions.length > 1
                                    ? `v${currentVersionIndex + 1}/${speechVersions.length}`
                                    : dbRegenCount > 0
                                      ? `${dbRegenCount + 1} versions`
                                      : 'Original'
                                  }
                                </span>
                                <button
                                  onClick={redoSpeechVersion}
                                  disabled={!canRedo}
                                  title="Redo — go to next version"
                                  className={`p-1 rounded text-sm transition-colors ${canRedo ? 'text-[#da5389] hover:bg-[#da5389]/10' : 'text-[#d1ccc4] cursor-not-allowed'}`}
                                >
                                  ↪️
                                </button>
                              </div>
                            )}
                            {/* Listen to speech — OpenAI TTS with caching */}
                            {isProUser && (
                              <button
                                onClick={handleListenToSpeech}
                                disabled={isRefining || isLoadingAudio || (!audioUrl && !audioCacheRef.current && aiCreditsExhausted)}
                                title={audioUrl ? 'Hide audio player' : isLoadingAudio ? 'Generating...' : 'Listen to your speech'}
                                className={`flex items-center justify-center space-x-1.5 min-w-[180px] px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                  isLoadingAudio || audioUrl
                                    ? 'bg-[#da5389] text-white'
                                    : aiCreditsExhausted && !audioCacheRef.current
                                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                      : 'bg-[#faf7f4] text-[#181615] hover:bg-[#da5389]/10 border border-[#e8e1d8]'
                                }`}
                              >
                                {isLoadingAudio ? (
                                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full flex-shrink-0" />
                                ) : audioUrl ? (
                                  <span>✕</span>
                                ) : (
                                  <span>🔊</span>
                                )}
                                <span className="truncate">
                                  {isLoadingAudio
                                    ? TTS_LOADING_MESSAGES[ttsLoadingMsgIndex]
                                    : audioUrl
                                      ? 'Hide Player'
                                      : audioCacheRef.current ? 'Listen (cached)' : 'Listen'}
                                </span>
                              </button>
                            )}
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(generatedSpeech);
                              }}
                              className="flex items-center space-x-1 px-3 py-2 bg-[#da5389] text-white text-sm font-medium rounded-lg hover:bg-[#da5389]/90 transition-colors"
                            >
                              <span>⧉</span>
                              <span>Copy Speech</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="relative">
                        {/* Refinement overlay — keeps old speech visible with subtle dimming */}
                        {isRefining && (
                          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 rounded-lg flex items-center justify-center">
                            <div className="flex items-center gap-3 bg-white border border-[#e8e1d8] rounded-full px-5 py-3 shadow-md">
                              <div className="animate-spin h-4 w-4 border-2 border-[#da5389] border-t-transparent rounded-full" />
                              <span className="text-sm font-medium text-[#181615]">Refining your speech...</span>
                            </div>
                          </div>
                        )}

                        <div className={`prose prose-lg max-w-none ${isSpeechPaywalled ? 'max-h-48 overflow-hidden' : 'max-h-80 overflow-y-auto'}`}>
                          {speechParagraphs.length > 0 ? (
                            speechParagraphs.map((para, paraIndex) => (
                              <div
                                key={para.id}
                                className={`mb-4 rounded px-2 -mx-2 transition-colors ${
                                  para.source === 'user-edited' ? 'bg-[#da5389]/5 border-l-2 border-[#da5389]/30 pl-3 ml-0' : ''
                                }`}
                              >
                                <p
                                  contentEditable={isProUser && !isSpeechPaywalled && !isRefining}
                                  suppressContentEditableWarning
                                  className={`text-[#181615] leading-relaxed outline-none transition-colors ${
                                    isProUser && !isSpeechPaywalled && !isRefining ? 'hover:bg-[#faf7f4] focus:ring-1 focus:ring-[#da5389]/30 focus:bg-white cursor-text rounded px-1' : ''
                                  }`}
                                  onFocus={(e) => {
                                    // When editing, show plain text (remove diff highlight spans)
                                    if (e.currentTarget.querySelector('span')) {
                                      e.currentTarget.textContent = para.text;
                                    }
                                  }}
                                  onBlur={(e) => handleParagraphEdit(para.id, e.currentTarget.textContent || '')}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      e.preventDefault();
                                      (e.currentTarget as HTMLElement).blur();
                                    }
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html: para.source === 'user-edited' && para.text !== para.originalText
                                      ? diffWordsHtml(para.originalText, para.text)
                                      : escapeHtml(para.text)
                                  }}
                                />
                              </div>
                            ))
                          ) : (
                            generatedSpeech.split('\n').map((paragraph, index) => (
                              <p key={`speech-paragraph-${index}`} className="mb-4 text-[#181615] leading-relaxed">
                                {paragraph}
                              </p>
                            ))
                          )}
                        </div>

                        {/* Gradient fade overlay for paywalled content */}
                        {isSpeechPaywalled && (
                          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />
                        )}

                        {/* Undo banner — shown after refinement/start-over completes */}
                        {showUndoBanner && canUndo && (
                          <div className="mt-3 flex items-center justify-between bg-[#faf7f4] border border-[#e8e1d8] rounded-lg px-4 py-2.5">
                            <div className="text-sm text-[#181615] min-w-0 mr-3">
                              {lastActionType === 'start_over' ? (
                                <span>🔄 New speech generated</span>
                              ) : (
                                <span>
                                  ✨ {lastActionLabel ? <span>Refined: <span className="text-[#8f867e] italic">{lastActionLabel}</span></span> : 'Speech refined'}
                                </span>
                              )}
                              {creditsUsed > 0 && creditPercent >= 50 && (
                                <span className="text-xs text-[#8f867e] ml-2">
                                  — or click any paragraph to edit for free
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => {
                                undoSpeechVersion();
                                setShowUndoBanner(false);
                              }}
                              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-[#da5389] bg-white border border-[#da5389]/30 hover:bg-[#da5389]/5 transition-colors"
                            >
                              ↩ Undo
                            </button>
                          </div>
                        )}

                        {/* Editing hint + legend for Pro users */}
                        {isProUser && !isSpeechPaywalled && speechGenerated && speechParagraphs.length > 0 && !showUndoBanner && (
                          <div className="mt-3 flex items-center justify-between text-xs text-[#8f867e]">
                            <span>💡 Click any paragraph to edit directly</span>
                            {speechParagraphs.some(p => p.source === 'user-edited') && (
                              <span className="flex items-center gap-1">
                                <span className="inline-block w-3 h-3 bg-[#da5389]/10 border-l-2 border-[#da5389]/30 rounded-sm" />
                                Your edits — preserved during regeneration
                              </span>
                            )}
                            {saveStatus === 'saving' && <span className="text-[#da5389]">Saving...</span>}
                            {saveStatus === 'saved' && <span className="text-green-600">Saved ✓</span>}
                          </div>
                        )}

                        {/* Voice selector for TTS — compact pill strip */}
                        {isProUser && !isSpeechPaywalled && speechGenerated && (
                          <div className="mt-3 pt-3 border-t border-[#e8e1d8]/50">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-[#8f867e] flex-shrink-0">🎙 Voice:</span>
                              <div className="flex flex-wrap gap-1.5">
                                {[
                                  { id: 'nova', label: 'Nova', desc: 'Warm, friendly' },
                                  { id: 'shimmer', label: 'Shimmer', desc: 'Gentle, clear' },
                                  { id: 'alloy', label: 'Alloy', desc: 'Balanced, neutral' },
                                  { id: 'echo', label: 'Echo', desc: 'Warm, resonant' },
                                  { id: 'fable', label: 'Fable', desc: 'Expressive, British' },
                                  { id: 'onyx', label: 'Onyx', desc: 'Deep, authoritative' },
                                ].map((v) => (
                                  <button
                                    key={v.id}
                                    onClick={() => {
                                      setSelectedVoice(v.id);
                                      // Changing voice invalidates the cache
                                      if (audioCacheRef.current) {
                                        URL.revokeObjectURL(audioCacheRef.current.url);
                                        audioCacheRef.current = null;
                                        setAudioUrl(null);
                                      }
                                    }}
                                    title={v.desc}
                                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                                      selectedVoice === v.id
                                        ? 'bg-[#da5389] text-white shadow-sm'
                                        : 'bg-[#faf7f4] text-[#8f867e] hover:bg-[#da5389]/10 hover:text-[#181615]'
                                    }`}
                                  >
                                    {v.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Native audio player — shown when audio is ready */}
                        {audioUrl && (
                          <div className="mt-3 pt-3 border-t border-[#e8e1d8]/50">
                            <audio
                              src={audioUrl}
                              controls
                              autoPlay
                              className="w-full rounded-lg"
                              style={{ height: '40px' }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Inline upgrade CTA for paywalled content */}
                      {isSpeechPaywalled && (
                        <div className="mt-2 border-t border-[#e8e1d8] pt-4">
                          <ProUpgradePrompt
                            variant="inline"
                            context="paywall"
                          />
                        </div>
                      )}
                    </div>

                    {/* Divider between speech and AI tools */}
                    {!isSpeechPaywalled && isProUser && speechGenerated && (
                      <div className="flex items-center gap-3 text-xs text-[#8f867e]">
                        <div className="flex-1 h-px bg-[#e8e1d8]" />
                        <span>Edit directly above, or use AI below</span>
                        <div className="flex-1 h-px bg-[#e8e1d8]" />
                      </div>
                    )}

                    {/* Refine Your Speech - Only for Pro users */}
                    {!isSpeechPaywalled && isProUser && (
                      <div className="bg-[#faf7f4] rounded-lg p-6 border border-[#e8e1d8]">
                        <div className="mb-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-[#181615] flex items-center">
                              <span className="text-lg mr-2">✨</span>
                              Refine Your Speech
                            </h4>
                            {/* Usage guidance — only shows when relevant */}
                            {creditPercent >= 50 && !aiCreditsExhausted && (
                              <span className={`text-xs ${creditPercent >= 70 ? 'text-[#b08968]' : 'text-[#8f867e]'}`}>
                                {creditsRemaining} AI edit{creditsRemaining !== 1 ? 's' : ''} remaining
                              </span>
                            )}
                            {aiCreditsExhausted && (
                              <span className="text-xs text-[#b08968]">AI edits used up</span>
                            )}
                          </div>
                          <div className="text-xs text-[#8f867e] mt-1">
                            {aiCreditsExhausted
                              ? 'You can still click any paragraph above to edit it directly — it\'s free'
                              : 'Quick refinements keep your speech intact — only the relevant parts change'
                            }
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Selected Pill Display */}
                          {selectedPill && (
                            <div className="bg-white/50 border border-[#e8e1d8] rounded-lg p-3">
                              <div className="text-sm text-[#8f867e] mb-1">Selected improvement:</div>
                              <div className="text-sm font-medium text-[#8f867e] italic">&ldquo;{selectedPill}&rdquo;</div>
                            </div>
                          )}

                          {/* Direct Action Pills — solid pink, immediate action */}
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-3">
                              Quick refinements:
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {getRegenerationSuggestions().direct.map((suggestion, index) => (
                                <button
                                  key={`direct-${index}`}
                                  onClick={() => handleRefineSpeech(suggestion)}
                                  disabled={isGenerating || aiCreditsExhausted}
                                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isGenerating || aiCreditsExhausted
                                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                      : 'bg-[#da5389] text-white hover:bg-[#da5389]/85 shadow-sm hover:shadow-md'
                                  }`}
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Contextual Pills (need more info) */}
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-3">
                              Add specific details:
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {getRegenerationSuggestions().contextual.map((suggestion, index) => (
                                <button
                                  key={`contextual-${index}`}
                                  onClick={() => {
                                    setSelectedPill(suggestion);
                                    setRegenerationInstructions("");
                                  }}
                                  disabled={isGenerating || aiCreditsExhausted}
                                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedPill === suggestion
                                      ? 'bg-[#da5389] text-white'
                                      : isGenerating || aiCreditsExhausted
                                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                      : 'bg-white border border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] hover:bg-[#da5389]/5'
                                  }`}
                                >
                                  {suggestion} →
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Custom Instructions + Voice Input */}
                          <div>
                            <label className="block text-sm font-medium text-[#181615] mb-2">
                              {selectedPill ? `Provide details for "${selectedPill}":` : "Or describe your own changes:"}
                            </label>
                            <textarea
                              value={regenerationInstructions}
                              onChange={(e) => setRegenerationInstructions(e.target.value.slice(0, 500))}
                              placeholder={
                                selectedPill
                                  ? selectedPill === "Add a specific story"
                                    ? "Describe the story you want to include..."
                                    : selectedPill === "Include a particular memory"
                                    ? "Tell us about the memory you want to add..."
                                    : selectedPill === "Mention someone special"
                                    ? "Who should be mentioned and how?"
                                    : `Provide details for: ${selectedPill}...`
                                  : "e.g., Make it funnier, add more details about our college days, include a specific memory..."
                              }
                              maxLength={500}
                              rows={3}
                              className="w-full p-3 border border-[#e8e1d8] rounded-lg text-[#181615] placeholder-[#8f867e] focus:border-[#da5389] focus:outline-none focus:ring-1 focus:ring-[#da5389]"
                            />
                            <div className="flex items-center justify-between mt-1">
                              <VoiceInput
                                onTranscription={(text) => setRegenerationInstructions((prev) => (prev + ' ' + text).trim().slice(0, 500))}
                                placeholder="Describe changes by voice"
                                disabled={isGenerating}
                              />
                              <div className="text-xs text-[#8f867e]">{regenerationInstructions.length}/500</div>
                            </div>
                          </div>

                          {/* Action Buttons — Refine (outlined→filled) + Start Over (de-emphasized) */}
                          <div className="flex items-center justify-between gap-3">
                            {selectedPill && (
                              <button
                                onClick={() => {
                                  setSelectedPill(null);
                                  setRegenerationInstructions("");
                                }}
                                className="text-sm text-[#8f867e] hover:text-[#da5389]"
                              >
                                Clear selection
                              </button>
                            )}

                            <div className="flex gap-2 ml-auto">
                              {/* Start Over — secondary, de-emphasized */}
                              <button
                                onClick={() => handleStartOver()}
                                disabled={isGenerating}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                  isGenerating
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'text-[#8f867e] hover:text-[#181615] hover:bg-gray-100'
                                }`}
                              >
                                Start Over
                              </button>

                              {/* Refine Speech — outlined when inactive, filled when ready */}
                              <button
                                onClick={() => {
                                  const instruction = selectedPill && regenerationInstructions.trim()
                                    ? `${selectedPill}: ${regenerationInstructions}`
                                    : regenerationInstructions.trim();

                                  if (!instruction || instruction.trim().length < 10) {
                                    showToast('Describe your change in a bit more detail so the AI knows what to refine.', 'hint');
                                    return;
                                  }

                                  handleRefineSpeech(instruction);
                                  setRegenerationInstructions("");
                                  setSelectedPill(null);
                                }}
                                disabled={isGenerating}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                  isGenerating
                                    ? 'border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                                    : regenerationInstructions.trim().length >= 10 || selectedPill
                                    ? 'bg-[#da5389] hover:bg-[#da5389]/90 text-white shadow-md hover:shadow-lg'
                                    : 'border-2 border-[#da5389] text-[#da5389] bg-transparent hover:bg-[#da5389]/5'
                                }`}
                              >
                                {isGenerating ? (
                                  <>
                                    <div className="animate-spin h-4 w-4 border-2 border-[#da5389] border-t-transparent rounded-full inline-block mr-2" />
                                    Refining...
                                  </>
                                ) : (
                                  <>
                                    ✨ Refine Speech
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mark Final + Export row */}
                    {currentSpeechId && isProUser && !isSpeechPaywalled && (
                      <div className="flex items-center justify-between bg-white border border-[#e8e1d8] rounded-xl p-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="rounded-full hover:bg-gray-100">
                              {exportingFormat ? (
                                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-1" />
                              ) : (
                                <DownloadCloud className="h-4 w-4 mr-1" />
                              )}
                              Export
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel className="text-xs text-[#8f867e]">Document</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleExport('txt')}>
                              <File className="h-4 w-4 mr-2" />
                              TXT
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExport('pdf')}>
                              <FileImage className="h-4 w-4 mr-2" />
                              PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExport('docx')}>
                              <FileSpreadsheet className="h-4 w-4 mr-2" />
                              DOCX
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="text-xs text-[#8f867e]">Audio</DropdownMenuLabel>
                            <DropdownMenuItem onClick={handleExportAudio} disabled={isLoadingAudio || (!audioCacheRef.current && aiCreditsExhausted)}>
                              <span className="h-4 w-4 mr-2 text-center">{isLoadingAudio ? '⏳' : '🎧'}</span>
                              {isLoadingAudio ? 'Generating MP3…' : 'MP3'}
                              <span className="ml-auto text-xs text-[#8f867e]">{audioCacheRef.current ? 'cached' : '1 credit'}</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <button
                          onClick={handleMarkFinal}
                          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                            isFinal
                              ? 'bg-green-50 border-2 border-green-400 text-green-700 hover:bg-green-100'
                              : 'bg-[#da5389] hover:bg-[#da5389]/90 text-white shadow-md hover:shadow-lg'
                          }`}
                        >
                          {isFinal ? '✅ Marked as Final' : '⭐ Mark as Final'}
                        </button>
                      </div>
                    )}

                    {/* (Upgrade CTA is shown inline in the speech card when paywalled) */}
                  </div>
                )}

                {/* Error Display */}
                {speechError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="text-red-800 font-semibold mb-2">Generation Error</h3>
                    <p className="text-red-700 text-sm">{speechError}</p>
                    <button
                      onClick={() => setSpeechError("")}
                      className="text-red-600 hover:text-red-800 text-sm font-medium mt-2"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                {/* Generate/Regenerate Button - only show if not currently generating */}
                <div className="text-center">
                  {!speechGenerated && !isGenerating && (
                    <button
                      onClick={() => handleGenerateSpeech()}
                      disabled={!isStepValid()}
                      className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 ${
                        !isStepValid()
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-[#da5389] hover:bg-[#da5389]/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      }`}
                    >
                      <Sparkles className="inline h-5 w-5 mr-2" />
                      Generate My Speech Outline
                    </button>
                  )}

                  {/* Paywall message for users who have exceeded free edits - REMOVED DUPLICATE */}
                </div>

                {/* Helpful Tips */}
                {!speechGenerated && (
                  <div className="bg-[#faf7f4] rounded-lg p-4">
                    <h4 className="font-semibold text-[#181615] mb-2">💡 Tips for a Great Speech:</h4>
                    <ul className="text-sm text-[#8f867e] space-y-1">
                      <li>• Your speech will include the story you shared in Step 1</li>
                      <li>• We'll match the tone and length you selected</li>
                      <li>• Make it personal — specific details make the best speeches</li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className={`flex mt-8 pt-6 border-t border-border ${
              currentStep === 0 ? 'justify-center' : 'justify-between'
            }`}>
              {/* Back button - shown on steps 1-4 */}
              {currentStep > 0 && currentStep < 5 && !isEditMode && (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="bg-white border-2 border-[#e8e1d8] text-[#181615] hover:border-[#da5389] hover:text-[#da5389] rounded-full"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}

              {/* Spacer when no back button */}
              {(currentStep === 0 || isEditMode) && currentStep < 5 && <div />}

              <div className="flex gap-3">
                {/* Next button for steps 0-3 */}
                {currentStep >= 0 && currentStep <= 3 && (
                  <Button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`shadow-lg rounded-full px-8 transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-[#da5389] hover:bg-[#da5389]/90 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {/* Generate Speech button for step 4 (story) */}
                {currentStep === 4 && !isEditMode && (
                  <Button
                    onClick={handleGenerateAndGoToStep2}
                    disabled={isGenerating || !isStepValid()}
                    className={`shadow-lg rounded-full px-8 transition-all duration-200 ${
                      isGenerating || !isStepValid()
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-[#da5389] hover:bg-[#da5389]/90 text-white'
                    }`}
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full inline-block mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate My Speech
                      </>
                    )}
                  </Button>
                )}

                {/* Back to Speech button in edit mode */}
                {currentStep < 5 && isEditMode && (
                  <Button
                    onClick={() => setCurrentStep(5)}
                    className="shadow-lg rounded-full bg-[#da5389] hover:bg-[#da5389]/90 text-white"
                  >
                    Back to Speech
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-[#8f867e] text-sm mb-4">
            Need help? Here are some tips for each step:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-[#8f867e]">
              <Users className="h-4 w-4" />
              <span>Be specific about your relationship</span>
            </div>
            <div className="flex items-center gap-2 text-[#8f867e]">
              <Sparkles className="h-4 w-4" />
              <span>Include personal, meaningful details</span>
            </div>
            <div className="flex items-center gap-2 text-[#8f867e]">
              <Clock className="h-4 w-4" />
              <span>Keep stories concise but heartfelt</span>
            </div>
          </div>
        </div>

        {/* Celebratory toast for Mark Final */}
        {showFinalToast && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-white border-2 border-green-400 rounded-2xl shadow-2xl p-8 text-center max-w-md pointer-events-auto animate-bounce-in">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-[#181615] mb-2">Speech Finalized!</h2>
              <p className="text-[#8f867e] mb-4">
                Your speech is ready for the big day. You're going to nail it!
              </p>
              <div className="flex justify-center gap-2 text-3xl">
                <span>🥂</span><span>🎊</span><span>💍</span><span>🎤</span><span>🥂</span>
              </div>
              <button
                onClick={() => setShowFinalToast(false)}
                className="mt-4 text-sm text-[#8f867e] hover:text-[#da5389] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Start Over Confirmation Dialog */}
      {showStartOverConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 animate-in fade-in zoom-in-95">
            <div className="text-center mb-4">
              <span className="text-3xl">🔄</span>
              <h3 className="font-semibold text-[#181615] text-lg mt-2">Start Over?</h3>
              <p className="text-sm text-[#8f867e] mt-2">
                This will generate a completely new speech from scratch. Your current version will be saved in version history so you can always go back.
              </p>
              {creditsRemaining > 0 && (
                <p className="text-xs text-[#b08968] mt-2">
                  Uses 3 AI edits (refinements use 1). You have {creditsRemaining} remaining.
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowStartOverConfirm(false)}
                className="flex-1 px-4 py-2.5 rounded-full text-sm font-medium border-2 border-[#e8e1d8] text-[#181615] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmStartOver}
                className="flex-1 px-4 py-2.5 rounded-full text-sm font-semibold bg-[#da5389] hover:bg-[#da5389]/90 text-white shadow-md transition-colors"
              >
                Yes, Start Over
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GeneratorPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-[#faf7f4] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#da5389] mx-auto mb-4" />
          <p className="text-[#8f867e]">Loading speech generator...</p>
        </div>
      </div>}>
        <GeneratorContent />
      </Suspense>
      <FAQ items={generatorFaqs} title="Questions about the generator" />
    </>
  );
}
