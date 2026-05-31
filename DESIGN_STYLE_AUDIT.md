# LakshyaMarch Public Site — Design Style Audit

A comprehensive, page-by-page description of how the marketing site currently
looks and feels. This is a *qualitative* audit — it focuses on the **nature** of
each page (mood, layout pattern, visual tone, how "AI-generated" it reads) rather
than listing exact CSS values. It also flags the **inconsistencies** that make the
site feel stitched together from multiple generated templates.

> TL;DR — The site is visually loud and "coaching-institute maximalist." It leans
> hard on dark navy hero sections, amber/blue/emerald gradient accents, heavy
> font weights (`font-black`/`font-extrabold` everywhere), rounded blob cards,
> and a lot of emojis. Most pages share a recognizable design language, but a few
> pages (NEET campaign, study hub, results, testimonials) break away into their
> own visual systems, which is the main source of inconsistency.

---

## 0. The Shared Design Language (Global)

Before the per-page breakdown, here's the "house style" most pages inherit.

**Mood / personality**
- Aggressive, sales-driven, "India's #1 coaching" energy.
- Trust-signal heavy: ratings, percentile numbers, AIR ranks, "100+ selections"
  badges repeated on almost every page.
- Premium-but-shouty: dark navy (`slate-900`) backgrounds with glowing colored
  blur orbs, gold/amber CTAs, and big bold headlines with a single colored word.

**Recurring building blocks**
- **Hero pattern:** full dark gradient (`from-slate-900 via-[some hue] to-slate-900`),
  a faint SVG dot/cross texture at ~4% opacity, 1–2 blurred glow circles, a small
  pill "badge" with an icon, a huge headline where one word is colored, a
  subheading, then CTA buttons (amber gradient primary + ghost/white secondary).
- **Section headers:** centered, `text-3xl/4xl font-extrabold`, with one word
  wrapped in a colored `<span>` (blue, amber, or emerald).
- **Cards:** white rounded cards (`rounded-2xl`/`3xl`) with thin slate borders,
  soft shadow, hover lift + shadow grow. Icon in a colored rounded square at top.
- **CTAs:** pill or rounded buttons, amber→orange gradient for primary, with an
  arrow icon that nudges right on hover.
- **Marquee strips, "Hall of Fame" dark sections, FAQ `<details>` accordions,
  and a final dark/gradient CTA band** appear again and again.

**Typography**
- Single font: **Inter** (via `next/font`), loaded globally.
- Extremely heavy weight usage — `font-black` and `font-extrabold` are the default
  for headings *and* many body labels. Lots of `uppercase tracking-widest` micro-labels.

**Color**
- Primary blue (`blue-600`), gold/amber (`amber-500`) accents, emerald for NEET,
  rose/indigo/purple as occasional accents. Navy `slate-900` as the dark base.

**The big global contradiction (design tokens vs. reality)**
- `globals.css` defines a **sharp, corporate, zero-radius** design system:
  `--radius: 0rem`, square cards, square scrollbars, an enterprise navy "sidebar"
  theme, skeleton shimmer, etc.
- **Almost no public page uses these tokens.** The actual pages are full of
  `rounded-2xl`, `rounded-3xl`, `rounded-[40px]`, `rounded-full` — the visual
  opposite of the token system. The `.card`, `.sidebar`, `.btn` token classes are
  essentially dead CSS for this marketing site (they look like leftovers from the
  ERP/admin app this was split from). This is the single biggest "two systems
  glued together" smell in the codebase.

**Emoji usage (the "AI-ish" tell)**
- Emojis are sprinkled as decorative iconography in many places even though the
  site *also* imports `lucide-react` icons everywhere. This mix of emoji + icon
  library is a classic generated-content tell. Hotspots:
  - Footer "Academic Wings" links each prefixed with an emoji: 📍 ⚡ 🎯 🔥 🩺 📋 🎓 🏆 🌟
  - Footer signature: "Made with ❤️ in Begusarai".
  - Enquiry success state: "Enquiry Submitted! 🎉".
  - Scholarship rank slabs: 🏆 🥈 🥉 ⭐ ✅ as labels.
  - NEET campaign page: emojis everywhere (📍 📞 🎯 ✅ 🩺 ⚙️ 📚 📅 👨‍🏫 📊 🤝 📱 📧).
  - Hostel page: 🏠 🍽️ 👮 📚 as the *primary* amenity icons; 📷 as image placeholders.
  - Blog featured tag: "⭐ Featured Article".
---

## 1. Global Chrome — Navbar & Footer

### PublicNavbar
- Fixed, transparent-over-hero navbar that turns white + blurred + shadowed on
  scroll. Logo is a blue→indigo gradient rounded square with a `GraduationCap`
  icon, plus a two-line wordmark. Desktop nav links + an amber "Apply Now" button.
  Mobile collapses to a hamburger dropdown.
- Clean and consistent; this is one of the better-behaved components.
- **Inconsistency:** it's designed to sit over a dark hero, so pages that *don't*
  start with a dark hero have to fake one with a `<div className="h-24 bg-slate-900">`
  spacer (see inconsistency notes below). The spacer height varies: `h-24`,
  `h-20`, `h-16`, sometimes with `border-b border-white/10`, sometimes without.

### PublicFooter
- Two-part footer: a **dark navy grid** (brand + social, quick nav, "Academic
  Wings", contact) followed by a **white SEO block** (location keyword links,
  long "Know about us" paragraphs, legal links, copyright).
- Visually dense and link-heavy. The "Academic Wings" list uses **emoji bullets**
  (📍⚡🎯🔥🩺📋🎓🏆🌟) while the "Quick Navigation" list right next to it uses
  small dot bullets — two different bullet styles in adjacent columns.
- The white SEO footer links to many location pages (`/khagaria-coaching`,
  `/samastipur-coaching`, etc.) that don't all exist as routes — these read as
  SEO-generated link farms.
- "Made with ❤️ in {city}" reinforces the template/AI vibe.

---

## 2. Home Page (`/` → HomeClient)

**Nature:** The flagship "everything" page. Long, scrolling, section-after-section
sales funnel. The most polished page and the source of the house style.

**Sections in order:**
1. **Hero** — dark gradient, SVG dot texture, pulsing amber glow orb, big white
   institute name, amber/orange "Explore Programs" CTA + ghost "View Results",
   5-star rating row, and a 4-stat social-proof grid (100+, 99.35, AIR 499, faux
   "IIT/NIT Faculty" avatar circles with letters R/A/K/S). Enquiry form on the
   right. Bottom edge has a decorative SVG wave.
2. **Highlights marquee** — scrolling amber-on-navy ticker with star separators.
3. **ThinkNEET promo** — big white `rounded-[40px]` card with poster image + CTA.
4. **Result carousel** (client component, see below).
5. **Founder's Desk** — two-card layout (photo card + message card), framer-motion
   fade-ins, serif italic pull-quote with a `Quote` glyph.
6. **Programs ("Integrated Ecosystem")** — two big cards: a white "School Wing"
   card and a dark "Coaching Wing" card with pills + batch list.
7. **Elite Faculty** — 4 faculty cards (name/subject/qual), "Meet All Faculty" CTA.
8. **Hall of Fame (Results)** — dark navy section, top amber border, trophy badge,
   NEET/JEE/Board sub-grids of score tiles.
9. **Success Stories** — 3 testimonial-style cards on white.
10. (continues to CTA / footer).

**Tone:** Confident, dense, gradient-and-glow heavy. Reads as a high-effort
landing page. Heaviest use of `font-black`. Decorative blur orbs and corner blobs
(`rounded-bl-full`) on cards are very "generated hero" looking.

**Inconsistencies within the page:**
- Card radii drift: `rounded-2xl`, `rounded-3xl`, and `rounded-[40px]` all appear
  in adjacent sections.
- Mixes static hardcoded result tiles here vs. the dynamic `ResultCarousel`
  elsewhere — two different "results" presentations on the same page.

---

## 3. About (`/about`)

**Nature:** Calmer, more editorial. Dark page-header band → dark "Core Values" →
white "Leadership Desk" → light "Why Choose Us".

- **Core Values cards** use **emoji icons** (`value.icon` from `INST_VALUES`)
  inside rounded squares — again emoji-as-icon while the same page imports lucide
  icons (`Shield, Target, Lightbulb, Users`) that go largely unused.
- Leadership section: sticky profile card + serif italic vision quote in a dark
  card, then a prose director's message. This is one of the more "human" pages.
- **Inconsistency:** stacks **two dark sections back-to-back** (page header +
  Core Values), so the dark navbar spacer + two navy bands make the top of the
  page feel like one giant dark slab before any contrast appears.

---

## 4. Faculty (`/faculty`)

**Nature:** Dark header band + white grid of 2-column faculty cards (image left,
info right). Each card has qualification, a blue "Expertise & Style" quote box,
and a footer micro-label "LakshyaMarch Elite Faculty Panel."

- Consistent and tidy. Falls back to a gradient initial-letter avatar when no
  image. Matches the house card style well.
- **Note:** the home page faculty cards and the JEE/NEET page faculty cards use a
  *different* card layout than this page (initial-only avatars, smaller), so the
  same data is styled three different ways across the site.
---

## 5. Contact (`/contact`)

**Nature:** Dark header band → white two-column section: Google Maps iframe on the
left (with a floating address card overlay), contact details on the right with
colorful circular icon chips (blue/emerald/amber/purple).

- Clean, conventional contact layout. The pastel circular icon chips are a nice
  restrained moment compared to the louder pages.
- CTA at the bottom ("Fill Online Enquiry Form Instead") just links back to `/`.

---

## 6. Admission (`/admission`)

**Nature:** Full sales funnel page. Dark indigo-tinted hero with a 3-step preview,
"Call to Apply"/"WhatsApp Apply" buttons, and the `AdmissionEnquiryForm`.

**Sections:** Hero → 3-step process (big ghost number `01/02/03` behind icon
tiles) → "Documents Required" checklist card → **batch tables** (school in a
blue-headed table, coaching in a navy-headed table) → FAQ accordion → final dark CTA.

- The **batch tables** are a distinct UI element (real HTML `<table>`) not seen on
  most other pages — a more "admin/data" look in the middle of a marketing page.
- Heavy JSON-LD schema injected. Consistent with the house hero/CTA/FAQ pattern.

---

## 7. Scholarship (`/scholarship`)

**Nature:** One of the most "gamified" pages. Amber-tinted dark hero, free-registration
badge, quick-info stat chips, enquiry form.

- **Prize Slabs** section uses **emoji labels** (🏆 Champion, 🥈 Excellence,
  🥉 Merit, ⭐ Achiever, ✅ Performer) *on top of* gradient medal tiles with lucide
  icons — emoji and icon doing the same job side by side.
- Syllabus grid (6 colored category cards), 3-step "How to Register," FAQ accordion,
  and a **amber→orange gradient** final CTA band (different from the usual navy CTA).
- Tone: promotional, prize-driven, colorful. Reads very template-generated.

---

## 8. IIT-JEE Coaching (`/iit-jee-coaching-begusarai`)

**Nature:** SEO landing page, blue-accented. The "canonical" subject-landing layout.

**Sections:** blue-tinted dark hero (stat strip 99.35%/IIT-NIT/2019) + form →
dark "JEE Results" tiles → 4 batch cards → "Why LM is Better than Allen" feature
list + faculty panel → blue marquee strip → FAQ → blue→indigo gradient CTA.

- Well-structured, clearly the master template that NEET copies.
- Note the competitor call-out ("Better than Allen") — aggressive marketing tone.
---

## 9. NEET Coaching (`/neet-coaching-begusarai`)

**Nature:** Near-identical twin of the JEE page, recolored **emerald**. Same hero
shape, same results tiles, same 4 batch cards, same "Why LM" + faculty panel, same
FAQ, same gradient CTA (emerald→teal).

- This is a clear copy-paste-recolor of the JEE page. Good for consistency *between
  these two*, but it's obvious template duplication.
- One emoji tell: a "⭐ Topper" label on topper result tiles.

---

## 10. Begusarai Coaching (`/begusarai-coaching`)

**Nature:** Breaks the mold — this one starts on a **light** background instead of
the dark hero. Big centered headline with a blue→indigo gradient-text word, pastel
blob backgrounds, pill badges, light trust-row.

- Includes a **fake "map placeholder"** — a dark dotted-grid box with a bouncing
  `MapPin` icon and "Chanakya Nagar" text instead of a real embedded map (the
  Contact page has a real map; this one fakes it). Clear placeholder-left-in tell.
- "Get Directions" links to a bare `https://maps.google.com` (no actual location).
- Tone is cleaner/more premium than the louder pages, but the faked map and the
  light hero make it feel like a different designer/template than its JEE/NEET siblings.

---

## 11. NEET Campaign (`/neet-campaign`) — the biggest outlier

**Nature:** A completely **separate design system**. This page does *not* use
`PublicNavbar`/`PublicFooter` or Tailwind utility styling. Instead it ships its own
giant `<style jsx global>` block with custom CSS variables, **different fonts
(Baloo 2 + Nunito loaded via inline `<link>`)**, its own navbar, hero, footer, and
sticky mobile CTA.

- Rounded 14px radius system, blue/yellow/green palette, pill buttons — visually
  unrelated to the rest of the site.
- **Emoji-saturated:** 📍 📞 🎯 ✅ 🩺 ⚙️ 📚 📅 👨‍🏫 📊 🤝 🏆 📱 📧 used as
  section icons, badges, list bullets, and CTA decorations.
- Form is disabled ("Campaign Concluded") but the whole bespoke page still loads.
- Pulls a QR code from a third-party API (`api.qrserver.com`).
- This is the single most jarring inconsistency on the site — it looks like a
  different product entirely. Reads strongly as an AI-generated standalone landing page.

---

## 12. ThinkNEET Test Series (`/think-neet-test-series-begusarai`)

**Nature:** Dark, "premium product" feel. Near-black `slate-950` hero with a
**carbon-fibre texture loaded from an external URL** (transparenttextures.com),
pulsing glow orbs, the ThinkNEET logo image, big two-tone headline.

**Sections:** hero + form → 4 "pillar" feature cards → "Structured Learning Path"
numbered list + dark mentorship card → conclusion CTA.

- **Hinglish copy** in the conclusion ("Agar aap bhi NEET 2027 ... ka hissa banein
  aur apni rank pakki karein") — a tonal shift from the otherwise English site.
- Depends on external texture images (fragile/again a generated tell).
---

## 13. Programs (`/programs` → ProgramsClient)

**Nature:** App-like, interactive. Dark hero with gradient-text headline, then a
**sticky filter bar** of class pills, framer-motion animated grids of **CourseCard**
components (image header, title, dates, price with strike-through + discount badge,
"Explore"/"Buy Now" buttons).

- This is the most "e-commerce / product catalog" page on the site — pricing,
  discounts, Buy Now buttons. Tonally different from the brochure-style pages.
- "Premium Features Included" is a generic filler chip on every card.
- Uses `bg-[#f8f9fc]` as its page background instead of the usual `bg-slate-50` —
  a one-off near-duplicate of the standard background color.

---

## 14. Results (`/results` → ResultsPage)

**Nature:** Another distinct mini-design-system. Hero uses a **hardcoded
`#0A0F2C`** navy (not the `slate-900` everyone else uses), carbon-fibre external
texture, animated underline on "Results", and **animated stat counters**.

- Sticky filter bar (category + board tabs), then results grouped by year with
  sticky year headers, TopperCard vs StudentCard variants.
- Final CTA band is a **bright orange `#FF6B00`→orange gradient** — a color that
  appears on only a handful of pages (results, testimonials, success stories) and
  nowhere in the global token set.
- Heavy framer-motion. Feels more like an app screen than a marketing page.

---

## 15. Testimonials (`/testimonials` → TestimonialsClient)

**Nature:** Shares the Results page's offshoot style — `#0A0F2C` hero, carbon-fibre
texture, `#FF6B00` orange accent, "The Legend of LakshyaMarch" headline.

- Masonry (`columns-*`) "Wall of Fame" of testimonial cards fetched live from the
  ERP API; collapsible submission form with a star-rating picker.
- Loading + empty states present (good). But the orange/`#0A0F2C` palette makes it
  visually a sibling of Results, not of the blue/amber house style — so the site
  has effectively **two parallel color systems**.

---

## 16. Success Stories (`/success-stories`)

**Nature:** Again the `#0A0F2C` + carbon-fibre + amber/orange offshoot style.
Blog-like grid of story cards (image, category+year pill, title, excerpt, author,
arrow chip), dark italic quote CTA at the bottom.

- Uses `next/image` (most other pages use raw `<img>` — see inconsistency notes).
- Clean editorial grid; consistent with Results/Testimonials cluster.
---

## 17. Study Material Hub (`/study-material` → StudyHubClient)

**Nature:** Yet another distinct visual language — this one is **deliberately
sharp-edged**. Dark hero (cubes texture from external URL), then 2 big category
cards that are explicitly `rounded-none` (square), with `uppercase tracking` labels
and dynamic Tailwind color classes.

- **Critical tell / bug risk:** uses **dynamically constructed Tailwind classes**
  like `bg-${cat.color}-50`, `text-${cat.color}-600`, `hover:shadow-${cat.color}-500/10`.
  Tailwind cannot see these at build time, so these colors **likely don't render**
  unless safelisted — a classic AI-generated mistake. The cards probably appear
  uncolored/default.
- The wrapper has a nonsense utility class `uppercase-none` (not a real Tailwind
  class) appearing here and on the Notes/DPP pages — dead/invented class, another tell.
- Square cards here directly contradict the rounded-everything rest of the site,
  *and* ironically align with the unused zero-radius design tokens.

## 18. DPP Explorer (`/study-material/dpps` → DPPExplorerClient)

**Nature:** File-browser/IDE-like. Dark hero, sticky class+subject filter bar,
then a `rounded-none` square "explorer" panel that lists chapters and opens Google
Drive iframe previews inline.

- Fully `rounded-none` / sharp-edged, `uppercase` heavy — matches Study Hub's
  square aesthetic but clashes with everything else.
- Empty state literally says "Access restricted" with a Lock icon for classes that
  just have no data yet — confusing wording for a public free-resources page.
- Unused imports (`CheckCircle2, Zap, Tag, BookOpen`) left in — generated leftovers.

## 19. Notes (`/study-material/notes` → NotesClient)

**Nature:** Same square/uppercase study-hub family. Dark hero with breadcrumb,
then the NotesClient grid. Carries the same `uppercase-none` invented class.

---

## 20. Hostel Facilities (`/hostel-facilities`)

**Nature:** Simpler, older-looking template. Dark gradient hero, then amenity cards
and detail sections.

- **Emoji-as-primary-iconography:** the 4 core amenity cards use 🏠 🍽️ 👮 📚 as
  their icons (no lucide here at all). Dining/security sections use ✓ as bullets and
  📞 📍 for contact lines.
- **Image placeholders left in production:** two sections show gray boxes with
  "📷 Hygienic Mess & Dining Facility" and "📷 Secure Student Boarding Rooms" text
  instead of real photos. Clear unfinished/placeholder content.
- FAQ is plain stacked text (no accordion), unlike the `<details>` accordions used
  on Admission/Scholarship/JEE/NEET — inconsistent FAQ treatment.
- Overall this page feels the least polished and most obviously templated.
---

## 21. Admission Counselling (`/admission-counselling`)

**Nature:** Dark header band → white "Counseling Experts" cards (reusing the
Faculty card layout) → light "Explore Our Programs" 3-card grid → dark CTA card.

- **Tailwind dynamic-class bug again:** program cards use `bg-${program.color}-50`
  for the icon chip, which won't render reliably. The CTA buttons, however, use a
  safe explicit ternary for color — so *within the same file* there are both the
  broken pattern and the correct pattern. Telling inconsistency.
- Counselor cards reuse faculty styling, which is good for cohesion.

## 22. SEO Location Pages (`/seo/neet|iit-jee|general/[location]`)

**Nature:** Programmatic SEO templates generated per Bihar district/block. Subject-
colored gradient hero (emerald for NEET), 3 feature cards, FAQ, conditional copy
based on whether the location is Begusarai or "outstation."

- Clean and consistent within themselves, but they're mass-produced location-swap
  pages (`generateStaticParams` over district data) — inherently template content.
- Use external carbon-fibre texture again.
- These are invisible in the main nav; pure search-funnel pages.

## 23. Blog (`/blog` and `/blog/[slug]`)

**Nature:** Standard blog. Dark hero with a featured-post card (gradient panel by
category), grid of post cards with colored top bars, category pills.

- Post page: category-gradient hero, two-column article + sticky sidebar (author
  card, blue→indigo "Join LakshyaMarch" CTA card, keyword tags). Renders a tiny
  custom markdown→HTML converter (bold/italic/code only).
- "⭐ Featured Article" emoji tag. Otherwise fairly conventional and consistent.

## 24. Social Wall (`/social`) & YouTube (`/youtube`)

**Nature:** Live-feed aggregator pages. Social wall is a 3-column layout (YouTube
embed + feed, Facebook page plugin iframe, Instagram cards, X cards) with
brand-colored top bars per card (#FF0000, #1877F2, IG gradient, black).

- Uses `react-icons/fa6` brand icons here (yet *another* icon source alongside
  lucide and emojis).
- YouTube page: red-accented hero (with an external Unsplash background image),
  responsive video grid, skeleton loading states.
- Reasonably polished; the per-network brand colors are intentional and fine.

## 25. Utility / Redirect Pages

- `/login`, `/admin` → server redirects to the ERP portal login (no UI).
- `/notes` → redirects to `/study-material`.
- `/privacy-policy`, `/terms` → simple, clean, white legal pages using the Tailwind
  `prose` plugin. These are the most "neutral/standard" pages on the site and don't
  carry any of the loud styling — which itself is a (minor) inconsistency in tone.
---

## 26. Cross-Cutting Inconsistencies (Summary)

A consolidated list of what makes the site feel inconsistent and "AI-stitched":

**A. Multiple parallel color/design systems**
1. **House style** (most pages): blue + amber on `slate-900`, rounded cards.
2. **"Orange offshoot"** (Results, Testimonials, Success Stories): `#0A0F2C`
   navy + `#FF6B00` orange + carbon-fibre texture + framer-motion.
3. **"Square/uppercase" study system** (Study Hub, DPP, Notes): `rounded-none`,
   uppercase, dynamic color classes.
4. **Fully bespoke** (NEET Campaign): own fonts, own CSS, own nav/footer.
5. **Unused enterprise tokens** in `globals.css` (zero-radius, sidebar theme)
   that no public page actually uses.

**B. Color value drift**
- Page background is sometimes `bg-slate-50`, sometimes `bg-white`, sometimes
  `bg-[#f8f9fc]`. Dark navy is sometimes `slate-900`, sometimes `#0A0F2C`.

**C. Navbar spacer hack varies**
- Pages without a dark hero insert a manual dark spacer of inconsistent height
  (`h-24` / `h-20` / `h-16`, with/without `border-b border-white/10`).

**D. Icon strategy is three-way mixed**
- `lucide-react` icons, `react-icons/fa6` brand icons, **and** raw emojis — often
  on the same page doing the same job (e.g. Scholarship slabs, Core Values, Hostel).

**E. Emoji as decoration throughout**
- Footer wings, CTA success states, campaign page, hostel amenities, "Made with ❤️".
  Reads as the strongest "generated by an assistant" signal.

**F. Component duplication / data styled multiple ways**
- Faculty cards rendered 3 different ways (Home, Faculty, JEE/NEET).
- Results shown as static tiles (Home), animated counters+cards (Results page),
  and a scroll carousel (ResultCarousel) — three result UIs.
- FAQ shown as `<details>` accordions on some pages, plain stacked text on Hostel.

**G. Likely-broken dynamic Tailwind classes**
- `bg-${color}-50` / `text-${color}-600` patterns in StudyHubClient and
  Admission-Counselling won't compile to real CSS without safelisting — colors
  probably fall back to nothing. (Admission-Counselling even mixes the broken
  pattern with the correct ternary pattern in one file.)

**H. Invented / dead classes**
- `uppercase-none` (not a real class) on Study Hub, Notes, DPP pages.
- Dead token classes (`.card`, `.sidebar-link`, `.btn`) from the ERP origin.

**I. Placeholder/unfinished content shipped**
- Hostel "📷 ..." image placeholders, Begusarai page's fake map box + bare
  `maps.google.com` link, several footer location links pointing to routes that
  may not exist.

**J. Tonal/voice inconsistency**
- Mostly English, but ThinkNEET (and the campaign) switch to Hinglish, and the
  legal pages are flatly neutral while marketing pages are very loud.

**K. Dependency on external assets**
- Repeated reliance on `transparenttextures.com` and Unsplash images for textures/
  backgrounds, plus `api.qrserver.com` for a QR code — fragile third-party hotlinks.

---

### Bottom line
The site has a strong, recognizable *core* identity (navy + gold/blue, bold type,
glow-and-gradient heroes, trust-number maximalism) that about 60% of pages follow.
The remaining pages fork into 3–4 competing visual systems, and the whole thing is
peppered with emojis, duplicated components, placeholder content, and a few
non-functional dynamic class patterns — the cumulative effect being that it reads
as several AI-generated templates assembled into one site rather than a single
cohesively designed product.
