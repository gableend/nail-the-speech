# Mobile Responsiveness Audit: Galaxy Z Fold 6 Inner (~884px)

**Audit date:** 2026-04-22
**Scope:** Next.js 15 + Tailwind CSS, all top-level routes and shared components.
**Trigger:** site "still doesn't look right on Galaxy Z Fold 6 inner screen."

## 1. Executive summary

The site is broadly **usable but visibly broken** at ~884px. The root cause is structural: the team tuned the UI for mobile (`sm:`) and desktop (`lg:`/`xl:`) but skipped the `md:` range almost entirely. Across `src/`, breakpoint usage is `sm:` 190, `md:` 42, `lg:` 118 — `md:` is referenced ~3x less than `lg:` despite covering the exact width band the Fold inner sits in. The single most impactful fix: **add `md:` steps to every `sm:→lg:` grid and hero on the homepage and role landing pages** so that 768–1023px viewports stop falling back to single-column mobile layouts with oversized type. A secondary top fix is **adding the `viewport` meta export** to `src/app/layout.tsx` — it is currently missing and Next 15 no longer emits a default.

## 2. Breakpoint usage analysis

Counts across `src/`:
- `sm:` → 190 occurrences
- `md:` → 42 occurrences (~22% of `sm:`)
- `lg:` → 118 occurrences
- `xl:`/`2xl:` → effectively 0 (the container config only defines `2xl: 1400px`)

Worst offenders (files that jump base → `sm:` → `lg:` with no `md:`):
- `src/app/page.tsx` — hero grid `lg:grid-cols-2`, role grids `sm:grid-cols-2 lg:grid-cols-3`, type scale `text-4xl sm:text-6xl lg:text-7xl`
- `src/components/RoleLandingPage.tsx` — same pattern in hero and all sections; `sm:grid-cols-2 lg:grid-cols-4` for tone tiles
- `src/app/advice/page.tsx` and `src/app/articles/page.tsx` — article grids `sm:grid-cols-2 lg:grid-cols-3`
- `src/components/ExamplesFilterClient.tsx` — filter bar `sm:grid-cols-2 lg:grid-cols-4`
- `src/app/best-speech-generator/page.tsx` — hero `sm:text-5xl lg:text-6xl`

Files that do use `md:` correctly (good references): `src/app/examples/page.tsx` (`grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`), `src/components/DashboardClient.tsx` (`grid-cols-2 md:grid-cols-4`), parts of `GeneratorClient.tsx`.

## 3. Issues by severity

### P0 — breaks the layout on Fold inner

**1. Missing `viewport` meta export** — `src/app/layout.tsx`
- Current: `metadata` is exported but there is no `export const viewport` and no manual `<meta name="viewport">` in `<head />`.
- In Next 15 the `viewport` field was split off from `metadata`; without it the browser may fall back to a default device-width assumption that does not match the Fold's real viewport.
- Fix: add `export const viewport: Viewport = { width: 'device-width', initialScale: 1 }`. Effort: 5 min.

**2. Homepage hero collapses to single column below 1024px** — `src/app/page.tsx:107`
- `grid lg:grid-cols-2 gap-16 lg:gap-20` — at 884px the hero stacks, leaving a 64px gap and a `text-4xl sm:text-6xl lg:text-7xl` title that renders at 60px (`sm:text-6xl`). The hero visual (`HomeClient`) drops below, creating a very tall hero.
- Fix: `md:grid-cols-2 md:gap-10 lg:gap-20`; scale type `text-4xl sm:text-5xl md:text-5xl lg:text-7xl`. Effort: 15 min.

**3. RoleLandingPage hero same defect** — `src/components/RoleLandingPage.tsx:42,45`
- `grid lg:grid-cols-2` + `text-4xl sm:text-5xl lg:text-6xl`. Same stacked behavior on `/best-man-speech-generator` and `/maid-of-honor-speech-generator`. Effort: 15 min.

**4. TikTok embeds overflow** — `src/content/articles/best-man-speech-examples-that-work.md:23,37,51`
- Inline `style="max-width: 605px; min-width: 325px;"` inside a `max-w-3xl` prose column that has `px-4 sm:px-6 lg:px-8` padding. At 884px the column is 768px wide minus 24–32px padding — fine. But on any viewport below 357px (325 + 32), the `min-width: 325px` *will* force horizontal overflow, and on the Fold cover (344px) it's right at the edge.
- Fold inner itself won't overflow, but the article page has no `overflow-x: hidden` wrapper around the prose; combined with the global `body { overflow-x: hidden }` in `globals.css:81`, content is clipped instead of scrollable. Users on the Fold cover will see embeds cut off with no scroll.
- Fix: override in CSS (`.prose .tiktok-embed { min-width: 0 !important; width: 100% !important; max-width: 605px; margin-left: auto; margin-right: auto; }`) or wrap in a div with `overflow-x: auto`. Effort: 10 min.

### P1 — noticeable but usable

**5. Role grids waste space at 884px** — `src/app/page.tsx:165,211`; `src/components/RoleLandingPage.tsx:117,141,221`
- `sm:grid-cols-2 lg:grid-cols-3` shows 2 cols at 884px when 3 would fit cleanly. Same for `sm:grid-cols-2 lg:grid-cols-4` tone tiles.
- Fix: insert `md:grid-cols-3` (or `md:grid-cols-3 lg:grid-cols-4` for tones). Effort: 20 min across files.

**6. Related-articles grid stays 2-up from 640 to infinity** — `src/app/articles/[slug]/page.tsx:249`
- `grid-cols-1 sm:grid-cols-2 gap-6`. At 884px two cards fit fine, but there's no `lg:grid-cols-3`; more importantly the container is `max-w-5xl` which is 1024px — at 884px no issue, but the single-card width at 884px makes each card very wide.
- Fix: acceptable; low priority.

**7. Hero type scale skips md** — at least 11 places use `text-3xl lg:text-4xl` (e.g. `page.tsx:156,257`, `RoleLandingPage.tsx:109,133,161,213,295`, `FAQ.tsx:90`, `VsComparisonPage.tsx:165`, `best-speech-generator/page.tsx:276`).
- At 884px these render at 30px when 36px reads better. Fix: `text-3xl md:text-4xl` (drop `lg:`). Effort: global find/replace.

**8. Hero ratings-badge absolute positioning** — `src/components/RoleLandingPage.tsx:92`
- `absolute -bottom-4 -left-4 bg-white rounded-xl ...` — on narrower viewports (Fold cover 344px) this badge can float off-screen. The parent hero image is 100vw (`sizes="(max-width: 768px) 100vw, 50vw"`). Effort: 5 min — clamp with `md:-left-4 left-2`.

**9. Generator container** — `src/app/generator/GeneratorClient.tsx:2332` uses `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`, which is fine at 884px. But several inner grids use `grid-cols-2 md:grid-cols-3` (line 2486) — at 884px you get 3 columns of wide tone tiles; the `min-w-[140px]` tile (line 2888) combined with `grid-cols-2 md:grid-cols-4` (line 3276) may push overflow if labels wrap. Inspect `min-w-[140px]` tiles for a better `max-w-full` safety.

**10. ProUpgradePrompt modal** — `src/components/ProUpgradePrompt.tsx:217,218`
- `max-w-lg w-full max-h-[90vh] overflow-y-auto` with `p-4` backdrop padding — looks solid at 884px. No issue.

**11. Footer grid** — `src/components/SiteFooter.tsx:7`
- `grid-cols-2 sm:grid-cols-2 lg:grid-cols-5` — at 884px stays 2 columns (tall footer). Should step `md:grid-cols-4 lg:grid-cols-5`.

### P2 — polish

**12. Image `sizes` attribute drift** — `src/app/page.tsx:176` role card uses `(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 24px), 320px` — assumes 2-up at 884px, correct today but will be wrong once you add `md:grid-cols-3`. Update to `(max-width: 768px) ..., (max-width: 1024px) calc(33vw - 24px), 320px`.

**13. Container max-widths**
- Articles use `max-w-3xl` (768px) — prose is fine at 884px, with ~96px side margins. Optimal for reading.
- Hero sections use `max-w-7xl` (1280px) — with `max-w-7xl` and `px-4` at 884px, content area is 852px. Fine. No change needed.

**14. Viewport-meta no user-scalable** — currently none set; after adding the `viewport` export, do not include `maximumScale` or `userScalable: false` (accessibility).

**15. Banner on very narrow screens** — `SiteHeader.tsx:12` — works, the CTA button plus collapsed text is fine even on Fold cover.

**16. `overscroll-none` and `overflow-x-hidden` on body** — `globals.css:81`. This hides real overflow rather than fixing it, which masks bugs like the TikTok embed min-width. Keep it but still fix the underlying embed.

## 4. Recommendations in priority order

1. **Add viewport export** — `src/app/layout.tsx` — `export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5 }`. (Missing entirely.)
2. **Homepage hero responsive step** — `src/app/page.tsx:107,110` — `grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20` and `text-4xl sm:text-5xl md:text-5xl lg:text-7xl`.
3. **RoleLandingPage hero responsive step** — `src/components/RoleLandingPage.tsx:42,45` — mirror homepage change.
4. **Role/tone grids add md:** — in `page.tsx:165,211`, `RoleLandingPage.tsx:117,141,221`, `advice/page.tsx:180`, `articles/page.tsx:80`, `ExamplesFilterClient.tsx:108` — insert `md:grid-cols-3` or `md:grid-cols-4` as appropriate.
5. **TikTok embed override** — add in `globals.css` inside `@layer base`: `.tiktok-embed { min-width: 0 !important; width: 100% !important; max-width: 605px !important; margin-inline: auto; }`.
6. **Section headings scale** — global search `text-3xl lg:text-4xl` → `text-3xl md:text-4xl` (roughly 11 occurrences across `page.tsx`, `RoleLandingPage.tsx`, `FAQ.tsx`, `VsComparisonPage.tsx`, `best-speech-generator/page.tsx`).
7. **Footer grid step** — `SiteFooter.tsx:7` — add `md:grid-cols-4`.
8. **Hero rating-badge safe position** — `RoleLandingPage.tsx:92` — use `left-2 md:-left-4 bottom-2 md:-bottom-4`.
9. **Image `sizes` refresh** — after grid changes, update `sizes` on `next/image` in `src/app/page.tsx:176` and hero at `RoleLandingPage.tsx:88` (currently `(max-width: 768px) 100vw, 50vw` — fine once the hero becomes 2-col at `md:`).
10. **Generator tone tile overflow guard** — `GeneratorClient.tsx:2888,3276` — change `min-w-[140px]` to `min-w-0` or add `max-w-full`.

## 5. Global patterns to establish

- **Every `sm:grid-cols-N lg:grid-cols-M` must also specify a `md:` step**, particularly when N < M−1. Lint rule candidate.
- **Every 2-column hero** (`lg:grid-cols-2`) should begin its split at `md:grid-cols-2` unless the hero image is very tall.
- **Every display heading** should step `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (or similar), never `text-Xxl sm:text-Yxl lg:text-Zxl` skipping md.
- **Prefer `md:` over `sm:` for layout pivots**, not just typography, since Fold and large tablets land in that band.
- **Never rely on `body { overflow-x: hidden }` to mask embeds** — constrain child elements with `min-w-0`, `max-w-full`, or CSS container queries.

## 6. What looked solid

- `SiteHeader` / `MobileNav` — hamburger at `md:` (768px) boundary means Fold inner (884px) correctly shows the full desktop nav, not a cramped mobile one. Touch targets include `min-h-[44px] min-w-[44px]`.
- `ProUpgradePrompt` modal — `max-w-lg w-full max-h-[90vh] overflow-y-auto p-4` scales cleanly.
- Article prose container — `max-w-3xl` with `prose prose-lg` is the right call for 884px (gives ~65ch line length).
- Examples hub grid (`grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5` in `examples/page.tsx:159`) — a good template.
- Dashboard stats (`grid-cols-2 md:grid-cols-4`) — correctly uses `md:`.
- `globals.css` body has `overflow-x-hidden` which prevents accidental horizontal scrolling, and there are no hard-coded pixel widths in layout containers outside one `max-w-[400px]` tabs placeholder and the `280px` nav panel (both acceptable).

## Critical files for implementation

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/RoleLandingPage.tsx`
- `src/app/articles/[slug]/page.tsx`
- `src/app/globals.css`
