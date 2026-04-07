# /examples — Wedding Speech Examples Hub Page

**URL:** /examples
**Title Tag:** Wedding Speech Examples: 60+ Types
**Meta Description:** Browse hundreds of real wedding speech examples across 60+ categories. Best man, maid of honor, father of the bride, and more. Find inspiration for your perfect toast.

---

## Page Structure

### Hero

**Heading:** Wedding Speech Examples

**Subtext:** Browse real examples across 60+ speech types. Find your inspiration, then create your own with AI.

**Counter:** 180+ speeches to inspire yours *(pink, font-medium)*

---

### Client-side Filter

Interactive search/filter component (`ExamplesFilterClient`) allowing users to browse and filter speech examples.

---

### Category Grid (grouped)

Categories grouped by type (e.g. "By Role", "By Tone", etc.). Each group shows a grid of category cards.

**Card format:**
- Icon (emoji, large)
- Category name
- Short description (2-line clamp)
- Links to /examples/{category-slug}

Grid: 2 cols mobile → 3 cols sm → 4 cols md → 5 cols lg

---

### FAQ Section

**Title:** Questions about speech examples

FAQ items sourced from `examplesFaqs` in `/src/data/faqData.ts`.

---

### CTA Section

**Heading:** Ready to write yours?

**Subtext:** Use our AI speech generator to create a personalized speech in minutes. Get started for free.

**Button:** Create Your Speech → /generator

---

## SEO

### Keywords
wedding speech examples, best man speech examples, maid of honor speech examples, father of bride speech, wedding toast examples, funny wedding speech, heartfelt wedding speech, wedding speech inspiration

### Structured Data (JSON-LD)
1. **CollectionPage** schema with ItemList of all speech categories
2. **FAQPage** schema with all examples FAQ items

### Open Graph
- Title: Wedding Speech Examples: 60+ Types | Nail The Speech
- Description: Browse hundreds of real wedding speech examples. Find the perfect inspiration for your toast.
- Type: website
- Image: /og-image.png (1200x630)
