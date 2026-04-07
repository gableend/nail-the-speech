# /advice — Help & Advice Hub Page

**URL:** /advice
**Title Tag:** Wedding Speech Help & Advice: Tips, Guides & Practice
**Meta Description:** Expert wedding speech advice: how to write, structure, and deliver the perfect toast. Guides for best man, maid of honor, father of the bride, and more.

---

## Page Structure

### Hero

**Heading:** Help & Advice

**Subtext:** Everything you need to plan, shape, and deliver a wedding speech that sounds like you. Start with your ideas, talk them out, and turn them into a speech you can actually deliver.

**Counter:** {X} guides · {Y} published

---

### Start Here (NEW — numbered pathway)

1. **How to write your wedding speech** → /advice/how-to-write-a-wedding-speech
2. **Wedding speech length guide** → /advice/wedding-speech-length-by-role
3. **How to practise your speech** → /advice/how-to-practise-a-wedding-speech

Styled as 3-column cards with numbered pink circles, bordered in brand colour.

---

### Category: Speech Tips

**Description:** How to write, structure, and perfect your wedding speech, from opening line to final toast.

**Guiding sentence:** If you're starting from scratch, begin with how to write your wedding speech.

Articles in this category (auto-populated from data):
- All articles where `category === 'Speech Tips'`

### Category: Practice Guide

**Description:** Delivery, nerves, body language, and everything you need to nail the performance.

**Guiding sentence:** Got a draft? Start with how to practise your speech step by step.

Articles in this category (auto-populated from data):
- All articles where `category === 'Practice Guide'`

---

### Article Card Format

Each article displays as a card with:
- Icon (emoji)
- Title (linked to /advice/{slug})
- Meta description (2-line clamp)
- Reading time
- "Coming Soon" badge if article has only one section with heading "Coming Soon"

---

### FAQ Section

**Title:** Questions about wedding speeches

FAQ items sourced from `adviceFaqs` in `/src/data/faqData.ts` (separate from homepage and generator FAQs).

---

### CTA Section

**Heading:** Ready to write yours?

**Subtext:** Start by talking your speech out. Turn your ideas into a structured speech in minutes.

**Button:** Create Your Speech → /generator

---

## SEO

### Keywords
wedding speech tips, wedding speech advice, how to write a wedding speech, wedding speech help, wedding speech guide, best man speech tips, maid of honor speech tips, wedding toast advice

### Structured Data (JSON-LD)
1. **CollectionPage** schema with ItemList of all articles
2. **FAQPage** schema with all advice FAQ items

### Open Graph
- Title: Wedding Speech Help & Advice | Nail The Speech
- Description: Expert guides for writing and delivering unforgettable wedding speeches.
- Type: website
- Image: /og-image.png (1200×630)
