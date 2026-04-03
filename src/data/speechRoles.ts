// ============================================================
// Speech Roles - single source of truth for all speech types
// "major" roles get prominent cards; "minor" roles get compact links
// ============================================================

export type RoleTier = 'major' | 'minor';

export type RoleCategory =
  | 'The Couple'
  | 'Wedding Party'
  | 'Parents'
  | 'Step-Parents'
  | 'Siblings'
  | 'Grandparents'
  | 'Extended Family'
  | 'In-Laws'
  | 'Friends'
;

export interface SpeechRole {
  slug: string;
  label: string;
  tier: RoleTier;
  category: RoleCategory;
  emoji: string;
  description?: string;       // used on major cards only
  image?: string;              // used on major cards only
  popular?: boolean;           // show "Popular" badge
  objectPosition?: string;     // image positioning for card
}

export const speechRoles: SpeechRole[] = [
  // ── The Couple ──────────────────────────────────────────────
  {
    slug: 'groom',
    label: 'Groom',
    tier: 'major',
    category: 'The Couple',
    emoji: '🤵',
    description: 'Thank your loved ones and declare your love for your bride',
    image: '/images/groom.webp',
  },
  {
    slug: 'bride',
    label: 'Bride',
    tier: 'major',
    category: 'The Couple',
    emoji: '👰',
    description: 'Express gratitude and love to family, friends, and your groom',
    image: '/images/bride.webp',
  },
  {
    slug: 'bride-and-groom',
    label: 'Bride & Groom (Joint)',
    tier: 'minor',
    category: 'The Couple',
    emoji: '💍',
  },

  // ── Wedding Party ───────────────────────────────────────────
  {
    slug: 'best-man',
    label: 'Best Man',
    tier: 'major',
    category: 'Wedding Party',
    emoji: '🥂',
    description: 'Hilarious stories and heartfelt moments for the groom\'s closest friend',
    image: '/images/best-man.webp',
    popular: true,
  },
  {
    slug: 'maid-of-honor',
    label: 'Maid of Honor',
    tier: 'major',
    category: 'Wedding Party',
    emoji: '👸',
    description: 'Celebrate your friendship and her journey to finding love',
    image: '/images/brides-maid.webp',
    popular: true,
  },
  {
    slug: 'best-woman',
    label: 'Best Woman',
    tier: 'minor',
    category: 'Wedding Party',
    emoji: '🌟',
  },
  {
    slug: 'man-of-honor',
    label: 'Man of Honor',
    tier: 'minor',
    category: 'Wedding Party',
    emoji: '🎩',
  },
  {
    slug: 'groomsman',
    label: 'Groomsman',
    tier: 'minor',
    category: 'Wedding Party',
    emoji: '🤝',
  },
  {
    slug: 'bridesmaid',
    label: 'Bridesmaid',
    tier: 'minor',
    category: 'Wedding Party',
    emoji: '💐',
  },

  // ── Parents ─────────────────────────────────────────────────
  {
    slug: 'father-of-bride',
    label: 'Father of the Bride',
    tier: 'major',
    category: 'Parents',
    emoji: '👔',
    description: 'A father\'s pride and blessing for his daughter\'s new chapter',
    image: '/images/father-of-bride.webp',
  },
  {
    slug: 'mother-of-bride',
    label: 'Mother of the Bride',
    tier: 'major',
    category: 'Parents',
    emoji: '🌸',
    description: 'Loving words from a mother\'s heart on this special day',
    image: '/images/mother-of-bride.webp',
    objectPosition: 'center 30%',
  },
  {
    slug: 'father-of-groom',
    label: 'Father of the Groom',
    tier: 'minor',
    category: 'Parents',
    emoji: '👔',
  },
  {
    slug: 'mother-of-groom',
    label: 'Mother of the Groom',
    tier: 'minor',
    category: 'Parents',
    emoji: '🌷',
  },

  // ── Step-Parents ────────────────────────────────────────────
  {
    slug: 'stepfather-of-bride',
    label: 'Stepfather of the Bride',
    tier: 'minor',
    category: 'Step-Parents',
    emoji: '👔',
  },
  {
    slug: 'stepmother-of-bride',
    label: 'Stepmother of the Bride',
    tier: 'minor',
    category: 'Step-Parents',
    emoji: '🌻',
  },
  {
    slug: 'stepfather-of-groom',
    label: 'Stepfather of the Groom',
    tier: 'minor',
    category: 'Step-Parents',
    emoji: '👔',
  },
  {
    slug: 'stepmother-of-groom',
    label: 'Stepmother of the Groom',
    tier: 'minor',
    category: 'Step-Parents',
    emoji: '🌻',
  },

  // ── Siblings ────────────────────────────────────────────────
  {
    slug: 'brother-of-bride',
    label: 'Brother of the Bride',
    tier: 'minor',
    category: 'Siblings',
    emoji: '👦',
  },
  {
    slug: 'sister-of-bride',
    label: 'Sister of the Bride',
    tier: 'minor',
    category: 'Siblings',
    emoji: '👧',
  },
  {
    slug: 'brother-of-groom',
    label: 'Brother of the Groom',
    tier: 'minor',
    category: 'Siblings',
    emoji: '👦',
  },
  {
    slug: 'sister-of-groom',
    label: 'Sister of the Groom',
    tier: 'minor',
    category: 'Siblings',
    emoji: '👧',
  },

  // ── Grandparents ────────────────────────────────────────────
  {
    slug: 'grandfather-of-bride',
    label: 'Grandfather of the Bride',
    tier: 'minor',
    category: 'Grandparents',
    emoji: '👴',
  },
  {
    slug: 'grandmother-of-bride',
    label: 'Grandmother of the Bride',
    tier: 'minor',
    category: 'Grandparents',
    emoji: '👵',
  },
  {
    slug: 'grandfather-of-groom',
    label: 'Grandfather of the Groom',
    tier: 'minor',
    category: 'Grandparents',
    emoji: '👴',
  },
  {
    slug: 'grandmother-of-groom',
    label: 'Grandmother of the Groom',
    tier: 'minor',
    category: 'Grandparents',
    emoji: '👵',
  },

  // ── Extended Family ─────────────────────────────────────────
  {
    slug: 'uncle-of-bride',
    label: 'Uncle of the Bride',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👨',
  },
  {
    slug: 'uncle-of-groom',
    label: 'Uncle of the Groom',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👨',
  },
  {
    slug: 'aunt-of-bride',
    label: 'Aunt of the Bride',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👩',
  },
  {
    slug: 'aunt-of-groom',
    label: 'Aunt of the Groom',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👩',
  },
  {
    slug: 'cousin-of-bride',
    label: 'Cousin of the Bride',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '🤗',
  },
  {
    slug: 'cousin-of-groom',
    label: 'Cousin of the Groom',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '🤗',
  },
  {
    slug: 'niece-of-bride',
    label: 'Niece of the Bride',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👧',
  },
  {
    slug: 'niece-of-groom',
    label: 'Niece of the Groom',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👧',
  },
  {
    slug: 'nephew-of-bride',
    label: 'Nephew of the Bride',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👦',
  },
  {
    slug: 'nephew-of-groom',
    label: 'Nephew of the Groom',
    tier: 'minor',
    category: 'Extended Family',
    emoji: '👦',
  },

  // ── In-Laws ─────────────────────────────────────────────────
  {
    slug: 'brother-in-law-of-bride',
    label: 'Brother-in-Law of the Bride',
    tier: 'minor',
    category: 'In-Laws',
    emoji: '🤝',
  },
  {
    slug: 'brother-in-law-of-groom',
    label: 'Brother-in-Law of the Groom',
    tier: 'minor',
    category: 'In-Laws',
    emoji: '🤝',
  },
  {
    slug: 'sister-in-law-of-bride',
    label: 'Sister-in-Law of the Bride',
    tier: 'minor',
    category: 'In-Laws',
    emoji: '💕',
  },
  {
    slug: 'sister-in-law-of-groom',
    label: 'Sister-in-Law of the Groom',
    tier: 'minor',
    category: 'In-Laws',
    emoji: '💕',
  },

  // ── Friends ─────────────────────────────────────────────────
  {
    slug: 'friend-of-bride',
    label: 'Friend of the Bride',
    tier: 'minor',
    category: 'Friends',
    emoji: '👯',
  },
  {
    slug: 'friend-of-groom',
    label: 'Friend of the Groom',
    tier: 'minor',
    category: 'Friends',
    emoji: '🍻',
  },
  {
    slug: 'family-friend',
    label: 'Family Friend',
    tier: 'minor',
    category: 'Friends',
    emoji: '🏠',
  },

];

// ── Helpers ─────────────────────────────────────────────────

export const majorRoles = speechRoles.filter(r => r.tier === 'major');
export const minorRoles = speechRoles.filter(r => r.tier === 'minor');

/** Minor roles grouped by category, preserving category order */
export function getMinorRolesByCategory(): { category: RoleCategory; roles: SpeechRole[] }[] {
  const categoryOrder: RoleCategory[] = [
    'The Couple',
    'Wedding Party',
    'Parents',
    'Step-Parents',
    'Siblings',
    'Grandparents',
    'Extended Family',
    'In-Laws',
    'Friends',
  ];

  const groups: { category: RoleCategory; roles: SpeechRole[] }[] = [];

  for (const cat of categoryOrder) {
    const roles = minorRoles.filter(r => r.category === cat);
    if (roles.length > 0) {
      groups.push({ category: cat, roles });
    }
  }

  return groups;
}

export function getRoleBySlug(slug: string): SpeechRole | undefined {
  return speechRoles.find(r => r.slug === slug);
}

export function getAllRoleSlugs(): string[] {
  return speechRoles.map(r => r.slug);
}
