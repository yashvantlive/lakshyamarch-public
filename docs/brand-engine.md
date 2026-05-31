# LakshyaMarch Brand Engine

> **Single source of truth** for the LakshyaMarch public website. Every page,
> component, color, motion, and pattern derives from this document. No page may
> invent its own styles. If it isn't defined here, it doesn't ship.

Brand idea: **"Academic Excellence Through Progress."** The staircase in the logo
= upward movement, step-by-step mastery, the march toward one's _lakshya_ (goal).

---

## 1. Brand Personality

**We are:**
- Academic — rigorous, credible, exam-focused (IIT-JEE / NEET / Boards).
- Aspirational — every screen points upward toward ranks and selections.
- High-achievement — results are the hero, not decoration.
- Trustworthy — IIT/NIT faculty, real toppers, real numbers.
- Premium — restrained, confident, polished motion. Not loud for its own sake.
- Youthful & energetic — vibrant Indian educational marketing, controlled.
- Distinctly Indian — proud of Begusarai/Bihar roots, Hindi-English bilingual cues.

**We are NOT:**
- Generic SaaS / startup landing page.
- AI-generated gradient soup or glassmorphism-everywhere.
- Cartoonish, emoji-decorated, or clip-art.
- Corporate ERP / dashboard greys.
- Carbon-fibre textures, random orange pages, per-page themes.

**The test:** remove the logo — the page should still _read_ as LakshyaMarch
through color, type, the staircase motif, and the achievement-first layout.
---

## 2. Color System

Extracted from the LakshyaMarch logo + posters: bold red, deep academic blue,
scholarship gold, with success green as a semantic accent and a cool neutral ramp.

### Brand scales (50→900)

| Token        | Base (500/600) | Meaning                                    |
| ------------ | -------------- | ------------------------------------------ |
| **Red**      | `#E53935`      | Primary brand. Energy, urgency, CTAs, NEET-adjacent accents. |
| **Blue**     | `#1E3A8A`      | Academic authority. Headlines, trust, structure, JEE. |
| **Gold**     | `#F4C542`      | Scholarship culture, ranks, badges, highlights. |
| **Green**    | `#10B981`      | Success — selections, "open", confirmations. |
| **Ink**      | `#0F172A`      | Dark surfaces, deep sections, text.        |
| **Neutral**  | `#F8FAFC`→`#0F172A` | Backgrounds, surfaces, borders, body text. |

Full numeric ramps live in `src/design-system/colors.ts` and are mirrored into
Tailwind v4 `@theme` in `globals.css` as `--color-brand-red-*`, `-blue-*`,
`-gold-*`, `-green-*`, `-ink-*`.

### Semantic roles (use these names, not raw hex)

- **primary** → Red `600` (`#E53935`). Primary actions, brand emphasis.
- **secondary** → Blue `800` (`#1E3A8A`). Headlines, academic structure.
- **accent** → Gold `400` (`#F4C542`). Scholarship/rank highlights.
- **success** → Green `500` (`#10B981`).
- **warning** → Gold `500`.
- **danger** → Red `600`.
- **background** → Neutral `50` (`#F8FAFC`) light / Ink `950` dark.
- **surface** → White light / Ink `900` dark.
- **border** → Neutral `200` light / white-alpha dark.
- **text** → Ink `900` / muted Neutral `500` / on-dark white.

### Usage rules

1. **One primary action per view.** Red is the primary button; everything else is
   secondary (outline/ghost/blue).
2. **Blue carries authority**, red carries energy, gold carries achievement. Never
   let gold become a background fill for large areas (it's an accent/seasoning).
3. **Dark sections use Ink** (`#0F172A`/`#0B1120`), never `slate-900` ad-hoc and
   never a second navy like `#0A0F2C`. One dark, everywhere.
4. **No multi-hue gradients.** Allowed: tonal gradients within ONE brand scale
   (e.g. red-600→red-700) or ink→ink. Banned: blue→emerald, amber→orange→rose, etc.
5. **Subject accents:** JEE leans Blue, NEET leans Green, Scholarship leans Gold,
   Foundation leans Blue. These only tint accents/badges — structure stays unified.
---

## 3. Typography System

Two families. Defined once, never redefined inline with random weights.

- **Display / Headings → Poppins** (`--font-display`). Geometric, confident,
  Indian-ed-tech-friendly. Weights: 600, 700, 800.
- **Body / UI → Inter** (`--font-sans`). Neutral, legible. Weights: 400, 500, 600.

> Sora is approved as an _optional_ display alternative but we standardize on
> **Poppins + Inter** to avoid a third font request. Do not mix in a third family.

### Type scale (defined in `src/design-system/typography.ts`)

| Token        | size / line-height        | weight | font     | use                         |
| ------------ | ------------------------- | ------ | -------- | --------------------------- |
| display-xl   | clamp(2.75→4.5rem)/1.05   | 800    | Poppins  | Hero H1                     |
| display-l    | clamp(2.25→3.5rem)/1.08   | 800    | Poppins  | Major section opener        |
| h1           | clamp(2→2.75rem)/1.1      | 700    | Poppins  | Page titles                 |
| h2           | clamp(1.6→2.25rem)/1.15   | 700    | Poppins  | Section headers             |
| h3           | 1.25–1.5rem/1.25          | 600    | Poppins  | Card titles                 |
| body-lg      | 1.125rem/1.7              | 400    | Inter    | Lead paragraphs             |
| body         | 1rem/1.7                  | 400    | Inter    | Default copy                |
| caption      | 0.8125rem/1.5            | 500    | Inter    | Meta, labels                |
| overline     | 0.6875rem/1, +0.18em      | 700    | Inter    | Uppercase eyebrow labels    |

### Rules
- Headings = Poppres weight ≤ 800. **Retire `font-black` (900) everywhere.**
- Body never bolder than 600. One eyebrow (overline) per section header max.
- `tracking-widest` reserved for the `overline` token only — stop sprinkling it.

---

## 4. Motion System

Calm, confident, academic. Powered by **Framer Motion 12**. Parallax uses
`useScroll`/`useTransform` (no GSAP — it isn't installed and heavy deps are banned
by the architecture rules). Tokens live in `src/design-system/motion.ts`.

| Token            | duration | easing                      | use                          |
| ---------------- | -------- | --------------------------- | ---------------------------- |
| page transition  | 300ms    | easeOut                     | route / View Transitions     |
| card hover       | 200ms    | easeOut                     | elevation, image zoom        |
| section reveal   | 500ms    | [0.22,1,0.36,1] (out-quint) | scroll-in fade+rise (16–24px)|
| stagger step     | 70–90ms  | —                           | grids / lists                |
| counter          | spring   | stiffness 60, damping 18    | animated metrics             |
| parallax         | subtle   | linear (scroll-linked)      | ≤ 40px travel on watermarks  |

### Rules
- **Reveal once** (`viewport={{ once: true }}`), never replay on scroll-up.
- Movement is small: rise 16–24px, hover lift ≤ 6px, image zoom ≤ 1.05.
- **No bouncing, spinning, flashy zooms, or infinite attention-seeking loops**
  (marquees allowed only as a slow, optional trust ticker).
- Respect `prefers-reduced-motion`: disable parallax + reveals, keep opacity.
- Everything should feel like it "settles," not "pops."
---

## 5. Icon System

- **Library:** `lucide-react` ONLY. No emoji. No `react-icons` except the genuine
  brand glyphs on the Social wall (YouTube/Instagram/Facebook/X) where the official
  mark is required.
- **Sizes:** 18 (inline/caption), 24 (default UI), 32 (feature), 48 (hero/empty).
- **Stroke width:** 1.75 everywhere (set centrally; do not override per-icon).
- **Color:** inherit `currentColor`; tint via the semantic text/brand classes.
- **Containers:** icon chips are a rounded-`lg`/`xl` square in a tonal brand wash
  (e.g. `bg-brand-blue-50 text-brand-blue-700`), consistent size per context.

Emoji removal is mandatory — replace every emoji with the mapped Lucide icon
(see `src/design-system/icons.ts` for the canonical name → component map).

---

## 6. Spacing, Radius, Shadows

**Spacing scale** (`spacing.ts`): 4-pt base. Section vertical rhythm = `py-20`
(mobile) / `py-28` (desktop). Container = `max-w-7xl` + `px-5 sm:px-8`. Content
column = `max-w-3xl/4xl`. One rhythm, every page.

**Radius** (`radius.ts`): the site is **soft, not square**.
- `sm` 8px (chips/inputs), `md` 12px (buttons), `lg` 16px (cards),
  `xl` 24px (feature cards/forms), `2xl` 32px (hero/CTA panels), `full` (pills/avatars).
- Banned: `rounded-none` square cards, and oversized one-offs like `rounded-[40px]`.

**Shadows** (`shadows.ts`): tuned, tinted with ink — not pure black.
- `sm` resting card, `md` hover card, `lg` floating/popover, `xl` hero/CTA panel,
  `glow-red` / `glow-gold` for primary CTAs only. No `shadow-2xl` everywhere.

---

## 7. LakshyaMarch Patterns (the visual DNA)

Defined in `src/design-system/patterns.tsx` as inline SVG React components +
data-URI helpers. All used at **2–8% opacity**, never harming readability, with
optional subtle parallax. Replaces ALL external textures (carbon-fibre/Unsplash).

1. **Staircase Motif** — from the logo. Ascending steps + arrow. Used as: hero
   background watermark, section divider, decorative corner, loader.
2. **Academic Grid / Blueprint** — faint engineering graph grid. Behind heroes,
   results, faculty, programs at ~2–4%.
3. **Scholarship Ribbon** — award ribbon shape for rank/scholarship badges.
4. **Achievement Streak** — upward diagonal speed-lines for results/stat sections.
5. **Brand Glow** — single-hue radial wash (red OR blue OR gold), replaces the old
   multi-color blur orbs.
6. **Section Dividers** — gentle SVG curve / angled separators so sections flow
   instead of hard-cutting between light and dark.
7. **Poster Blend** — real posters/photos placed under a masked ink→transparent
   gradient so they read as branded atmosphere, not embedded ads.
---

## 8. Component Library (`src/components/brand/`)

No page builds its own card/section/CTA. Every page composes these:

| Component          | Purpose                                                       |
| ------------------ | ------------------------------------------------------------- |
| `Button`           | variants: primary(red)/secondary(blue)/ghost/outline; magnetic + animated arrow |
| `Badge`            | overline pill (brand-tinted), used for eyebrows/status        |
| `SectionHeader`    | eyebrow + title (one colored word) + optional lead, alignments |
| `HeroSection`      | branded background composition (grid + staircase + glow + optional poster blend), slot for content + side media |
| `StatCard` / `StatsGrid` | animated counters, brand-tinted, trust metrics          |
| `ResultCard` (AIR / NEET / JEE / Board variants) + `ResultsShowcase` | the flagship results system |
| `FacultyCard`      | consistent photo treatment + qual + USP                       |
| `ProgramCard`      | academic-catalog card for batches/programs                    |
| `ScholarshipBadge` | Gold/Silver/Bronze/Merit reusable award component             |
| `TestimonialCard`  | story/video-first review card                                 |
| `CampusGallery`    | masked image grid                                             |
| `CTASection`       | final conversion band (ink or red), shared everywhere         |
| `FAQSection`       | accordion (`<details>`), one implementation site-wide         |
| `Reveal`/`Stagger`/`Counter`/`ScrollProgress`/`MagneticButton` | motion primitives |

### Result design system
`AIRCard`, `NEETTopperCard`, `JEETopperCard`, `BatchSuccessCard`, `YearSummaryCard`
— all share the same color/spacing/type/motion via the base `ResultCard`.

### Scholarship design system
`ScholarshipBadge` tiers: `gold` (100%), `silver` (75%), `bronze` (50%),
`merit` (25/10%). Used as components, never hand-built sections.

---

## 9. Design Tokens (`src/design-system/`)

```
src/design-system/
  colors.ts       // brand ramps + semantic roles
  typography.ts   // families, scale, weights
  motion.ts       // durations, easings, variants
  spacing.ts      // scale + section rhythm
  radius.ts       // radii tokens
  shadows.ts      // elevation + glows
  icons.ts        // emoji→Lucide map, sizes, stroke
  patterns.tsx    // staircase/grid/ribbon/streak SVGs + helpers
  index.ts        // barrel
```

Import tokens (`import { brand } from "@/design-system"`) or use the Tailwind
`@theme` classes (`bg-brand-red-600`, `text-brand-blue-800`, `font-display`).
Stop using raw `bg-blue-500`, `#0A0F2C`, `amber-500` ad-hoc.

---

## 10. Page Architecture

Every public page = `Navbar` → `<HeroSection>` → alternating light/Ink sections
built from brand components → `<CTASection>` → `Footer`. Shared rhythm, shared
dividers, shared motion. Home storytelling order:

Hero → Trust Metrics → Results Showcase → Founder Message → Academic Ecosystem →
Faculty Excellence → Scholarship Programs → Student Stories → Campus → Admissions
Process → Final CTA.

**Definition of done for the redesign:** zero emojis, zero external textures, zero
dynamic Tailwind color-class generation, zero placeholder maps/images, one radius
language, one color system, one dark surface, one set of components — used by all
pages.
