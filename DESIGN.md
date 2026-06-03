---
name: LakshyaMarch Elite
colors:
  primary: '#1D4ED8'
  primary-dark: '#1e3a8a'
  primary-light: '#3B82F6'
  secondary: '#F59E0B'
  secondary-dark: '#D97706'
  accent-purple: '#7C3AED'
  background: '#0F172A'
  surface: '#1E293B'
  surface-card: '#263347'
  on-surface: '#E2E8F0'
  on-surface-muted: '#94A3B8'
  border: '#334155'
  success: '#10B981'
  danger: '#EF4444'
  white: '#FFFFFF'
  slate-50: '#F8FAFC'
  slate-900: '#0F172A'
  amber-500: '#F59E0B'
  emerald-400: '#34D399'
  blue-400: '#60A5FA'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-sm:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '800'
    lineHeight: 14px
    letterSpacing: 0.2em
rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 2.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  section-y: 80px
  section-y-lg: 112px
  card-padding: 32px
  gutter: 24px
---

# LakshyaMarch Education — Complete Design System & Page Specifications

## 🏫 Brand Overview

**Institute**: LakshyaMarch Education  
**Short Name**: LM  
**Tagline**: "A Revolution in Education is Taking Shape in Begusarai"  
**Sub-tagline**: "March Ahead Towards Your लक्ष्य"  
**Established**: 2019  
**Founder**: Ram Kumar Sir — B.Tech IIT Kharagpur (1998–2002), PMP from PMI USA (2011)  
**Location**: Dakbangla Road, Opp. Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101  
**Phone**: +91-6206323869, +91-7296050207, +91-8603793869  
**Email**: lakshyamarch@gmail.com  
**Rating**: 4.9/5 (104 Google Reviews)  
**Key Results**: 99.51 Percentile JEE 2026, AIR 499 NEET 2025, 100+ Selections  

---

## 🎨 Design System Philosophy

**Style**: Premium Dark Glassmorphism with institutional authority.  
**Mood**: Elite, trustworthy, high-performance — like IIT/IIM level branding applied to a coaching institute.  
**Approach**: Deep navy/slate base with amber gold accents. No generic "educational" feel — instead a futuristic premium academy look.  

### Color Usage Rules
- **Amber (#F59E0B)**: Primary CTAs, highlights, gold badges, achievements
- **Blue (#1D4ED8 → #3B82F6)**: Secondary actions, links, program tags
- **Slate-900 (#0F172A)**: Page backgrounds, dark sections
- **White/Slate-50**: Cards in dark sections, readable text areas
- **Emerald (#34D399)**: NEET-specific sections, ThinkNEET branding
- **Purple (#7C3AED)**: Accent glows, premium indicators

### Component Patterns
- **Glass Cards**: `background: rgba(255,255,255,0.04); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08);`
- **Hover States**: Border opacity increases from 8% → 20%, subtle scale(1.02) on cards
- **Section Dividers**: Wave SVG dividers between dark and light sections
- **Badges**: Uppercase, tracking-widest, pill-shaped, small font (10px)
- **Glow Effects**: `box-shadow: 0 0 80px rgba(245,158,11,0.15)` behind hero content

---

## 🧭 NAVBAR Component

**Type**: Fixed, transparent → glassmorphic on scroll  
**Height**: 64px desktop, 56px mobile  
**Behavior**: 
- Default (top of page): Transparent background, white text
- Scrolled (>40px): `bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100`

**Logo**: 
- Icon: Blue-to-indigo gradient square (rounded-lg) with GraduationCap icon
- Text: "LM Lakshyamarch" (bold) + "March Ahead Towards Your लक्ष्य" (small, blue)

**Nav Links** (left to right): Home | Programs | Faculty | Results | Study Material | Blog | Admission | YouTube | About | Contact  

**CTA Button**: "Apply Now" — amber background, white text, rounded-lg, right side of nav  

**Mobile**: Hamburger menu → full-width dropdown with white background, all nav links stacked  

---

## 🏠 HOMEPAGE (/) — HomeClient.tsx

### Section 1: HERO
**Background**: Dark gradient `from-slate-900 via-[hsl(224,71%,20%)] to-slate-900`  
**Overlay**: Subtle plus/cross SVG pattern at 3% opacity  
**Glow**: Amber blob top-right (opacity 10%, blur-3xl, animate-pulse)  
**Height**: min-h-screen, flex items-center  

**Left Column Content**:
- Badge: Star icon + "IIT/NEET Selections Every Year Since 2019" (amber pill)
- H1: "LakshyaMarch Education" (text-7xl, font-extrabold, white)
- Paragraph: Institute tagline + city info (blue-100/80 color)
- CTA Buttons: 
  - "Explore Programs" → amber gradient, rounded-xl
  - "View Results" → white/10 ghost, Trophy icon (amber)
- Rating: 5 gold stars + "4.9/5 Rating based on Google & Student Reviews"
- Stats Grid (4 columns): 100+ Selections | 99.35 JEE Percentile | AIR 499 NEET | IIT/NIT Faculty avatars

**Right Column**: EnquiryForm card (floating, glass effect)

**Bottom**: Wave SVG divider to slate-50

### Section 2: HIGHLIGHTS MARQUEE
**Background**: slate-900, bottom border-4 amber-500  
**Content**: Scrolling text strip — key highlights like "AC Classrooms", "Regular PTM", "NMTC 2025 Hosted at LM", "IIT/NEET Selections Every Year Since 2019", "No Local Faculty — All IIT/NIT Qualified"  
**Animation**: `animate-[marquee_25s_linear_infinite]`  
**Text**: amber-400, uppercase, tracking-widest, Star separator icons

### Section 3: THINKNEET PROMO
**Background**: slate-50  
**Card**: White, rounded-[40px], border, shadow-2xl, hover:shadow-emerald-500/10  
**Image**: ThinkNEET campaign poster (16/7 aspect ratio) — `/images/campaigns/think-neet/think-neet-poster.webp`  
**Content Below Image**:
- Badge: "Specialized NEET Prep" (emerald pill)
- H2: "ThinkNEET Test Series — Begusarai's Best" (emerald-600 accent)
- Description: NEET 2027 test series details
- CTA: "Explore ThinkNEET Series →" (slate-900 rounded-full, hover:emerald-600)

### Section 4: RECENT RESULTS (ResultCarousel)
**Component**: ResultCarousel — sliding cards of toppers

### Section 5: FOUNDER'S DESK
**Layout**: Two cards side-by-side on desktop  
**Card 1 (Image)**: 
- Founder photo with square aspect ratio, rounded-2xl
- ESTD 2019 amber badge (top-right)
- Name, designation, qualification tags

**Card 2 (Message)**:
- "From the Founder's Desk" amber badge
- Large heading "Founder's Message"
- Blockquote with amber left border
- Description paragraph
- CTA: "Connect with Ram Sir" → WhatsApp link

### Section 6: PROGRAMS
**Background**: slate-50, border-t  
**Heading**: "One Institute. Total Complete Package."  
**Two-card layout**:
- Card 1 (School Wing): Blue theme — "LM Integrated School, Class 6–10"
- Card 2 (Coaching Wing): Dark slate — "LakshyaMarch Coaching, IIT-JEE | NEET | Foundation"

### Section 7: FACULTY
**Background**: white  
**4-column grid**: Faculty cards with name, subject (blue), qualification, previous institution badge (amber)  
**CTA**: "Meet All Faculty" button

### Section 8: HALL OF FAME (Results)
**Background**: slate-900, border-top-8 amber-500  
**3 sub-sections**: NEET Stars | JEE Achievers | Board Toppers  
**Topper Cards**: amber-highlighted, others slate-800

### Section 9: SUCCESS STORIES
**Background**: white  
**3-column testimonial cards** with quote, student name, exam badge

### Section 10: CTA BAND
**Background**: Blue gradient `from-blue-700 via-indigo-700 to-blue-900`  
**CTA**: "Talk to Counsellor →" (amber button)

---

## 📋 ADMISSION PAGE (/admission)

**Hero**: Dark slate, with "Admission 2026-27" heading, 3-step process cards  
**Sections**:
1. How to Apply (3 steps: Enquire → Counselling → Enroll)
2. Programs available with class grid
3. Documents checklist
4. AdmissionEnquiryForm (large, prominent)
5. FAQ accordion

---

## 🎓 PROGRAMS PAGE (/programs)

**Interactive class filter**: Tabs for Class 6, 7, 8, 9, 10, 11-JEE, 11-NEET, 12-JEE, 12-NEET, Dropper-JEE, Dropper-NEET  
**Program Cards**: Batch name, target, start date, type badge (OFFLINE)  
**Sections**: School Wing (blue) | Coaching Wing (slate-900)

---

## 👩‍🏫 FACULTY PAGE (/faculty)

**8+ faculty profiles**:
- Rajesh Nayan — Mathematics — B.Tech NIT Allahabad
- MPB Sir — Mathematics — Madras University
- LKP Sir — Physics — MIT Muzaffarpur
- Shiv Kumar — Chemistry — M.Sc IIT Dhanbad
- Chandan Kumar — Physics — B.Tech NIT Agartala
- Aditya Kumar — Chemistry — B.Tech NIT Patna
- Nitish Sharma — Biology — AIR-82 GATE-XL
- Rahul Kumar — Biology — M.Sc Biotechnology CUSB
- Gautam Ishwar — Physics & Maths — BEU Patna

**Layout**: 4-column grid cards, hover effect, subject color-coded

---

## 🏆 RESULTS PAGE (/results)

**3 tabs**: NEET | JEE | Board  
**Toppers featured prominently** with gold badges  
**Data**:
- JEE 2026: Achyut 99.51%, Keshav 98.96%, Rishi 98.90%
- JEE 2025: Akhnavya 99.35%, Ayush 99.24%, Saransh 99.00%
- NEET 2025: Aradhya (AIR 499, 619/720), Aditi (577), Puja (538)
- NEET 2024: Abhijeet (685/720), Pallavi (665/720)
- Board: CBSE 12th — Tannu 92.20%, Pragya 85.40%

---

## 🩺 THINKNEET TEST SERIES (/think-neet-test-series-begusarai)

**Brand**: ThinkNEET × LakshyaMarch  
**Color**: Emerald (#10B981) primary accent  

**Hero**: Dark slate-950 background  
- Logo: `/images/campaigns/think-neet/think-neet-logo.webp` (h-16)
- H1: "Master the NEET with ThinkNEET" (emerald + blue accents)
- Subtitle: "LakshyaMarch presents Begusarai's most scientific test series"
- CTAs: "Enroll Now →" (emerald) + "Download Schedule" (ghost)
- Right side: EnquiryForm

**Why ThinkNEET (4 cards)**:
1. 100% NCERT Pattern (BookOpen, emerald)
2. AIR Benchmarking (Trophy, amber)
3. In-Depth Analysis (BarChart3, blue)
4. OMR Practice (ClipboardList, purple)

**Learning Path**: 4 steps — Unit Tests → Cumulative → Quarterly → Full Syllabus

---

## 📞 CONTACT PAGE (/contact)

**Info**: Address, 3 phone numbers, email, office hours  
**Map**: Google Maps embed  
**FAQ**: Accordion format  
**Background**: White with slate-50 sections

---

## 🏡 FOOTER (PublicFooter.tsx)

**Top Section (Dark — slate-900)**:  
4-column grid:
1. **Brand Column**: LM logo, tagline, Coaching Social icons (FB, IG, YT, X), School Social icons (FB, IG), Portal Access CTA (amber, "/login")
2. **Quick Navigation**: All nav links as a list
3. **Academic Wings**: ThinkNEET, Admission, NEET Campaign, Results, Scholarship, Success Stories links with emoji icons
4. **Contact & Visit**: Address, 3 phones, email, office hours

**Bottom Section (White)**:
- Popular SEO locations (Bihar city links)
- "Know about LM LakshyaMarch" paragraph
- 3 content columns: We Stand Out | Our Focus Areas | What Makes Us Different
- Copyright + "Privacy Policy | Terms & Conditions"

---

## 🔄 KEY INTERACTIVE COMPONENTS

### EnquiryForm
**Fields**: Student Name | Mobile Number (10-digit) | Program (dropdown) | Class (dropdown)  
**CTA**: "Submit Details ⚡" — amber gradient button  
**Subtitle**: "No Spam • Expert Counselling"  
**API**: POST to `${NEXT_PUBLIC_ERP_API_URL}/api/admissions`

### ResultCarousel
**Auto-sliding**: Yes  
**Cards**: Topper photo, name, score, exam type, college  

### AdmissionEnquiryForm
**Same as EnquiryForm** + Parent Name field + additional class options

---

## 📱 RESPONSIVE BEHAVIOR

- **Mobile**: Single column, hamburger nav, stacked sections
- **Tablet** (md): 2-column grids
- **Desktop** (lg): Full 4-column layouts, side-by-side sections
- **Max-width**: 1280px container (max-w-7xl)
- **Padding**: px-5 (mobile) → px-8 (sm+)

---

## 🗂️ ALL PAGES (32 Core)

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/about` | About Institute & Founder |
| `/admission` | Admission Process & Form |
| `/admission-counselling` | Book 1:1 Counselling |
| `/programs` | All Course Programs |
| `/faculty` | Faculty Profiles |
| `/results` | Hall of Fame — Toppers |
| `/scholarship` | LNAT Scholarship Exam |
| `/blog` | Educational Blog Hub |
| `/contact` | Contact Info & Map |
| `/free-test` | Free Mock Test |
| `/hostel-facilities` | Hostel & Accommodation |
| `/iit-jee-coaching-begusarai` | JEE Landing Page |
| `/neet-coaching-begusarai` | NEET Landing Page |
| `/neet-campaign` | NEET 3 May Campaign |
| `/think-neet-test-series-begusarai` | ThinkNEET Test Series |
| `/study-material` | Study Library |
| `/notes` | Quick Notes |
| `/testimonials` | Student Reviews |
| `/success-stories` | Success Journeys |
| `/social` | Social Media Wall |
| `/youtube` | YouTube Gallery |
| `/login` | → Redirect to ERP |
| `/admin` | → Redirect to ERP |
| `/privacy-policy` | Legal Policy |
| `/terms` | Terms of Service |
| `/robots.txt` | SEO Robots |

---

## 🎯 DESIGN PRINCIPLES FOR MODIFICATIONS

1. **Never generic**: No plain blue/green buttons. Always amber-gradient or slate-900 for primary actions.
2. **Dark is default**: Most sections are dark (slate-900/slate-950) with white cards floating on top.
3. **Gold = Achievement**: Amber (#F59E0B) is reserved ONLY for CTAs and achievement badges.
4. **Emerald = NEET**: Green tones exclusively for ThinkNEET and NEET-related content.
5. **Blue = Engineering**: Blue tones for JEE/IIT related content.
6. **Typography hierarchy**: font-black for headings, font-bold for sub-items, font-medium for body.
7. **Rounded corners**: Large rounded corners (rounded-2xl to rounded-[40px]) for cards, rounded-full for badges/pills.
8. **Hover = elevation**: Cards lift slightly on hover with increased shadow and border visibility.
9. **Indian context**: Hindi text mixed naturally (e.g., "Begusarai Ka Sabse Bharosemand Coaching"). 
10. **Local trust signals**: Google rating, year of establishment, founder IIT credentials — always visible.

---

## 🖼️ KEY IMAGES AVAILABLE

| Path | Content |
|------|---------|
| `/images/campaigns/think-neet/think-neet-poster.webp` | ThinkNEET Campaign Poster |
| `/images/campaigns/think-neet/think-neet-logo.webp` | ThinkNEET Brand Logo |
| `/images/founder/ram-sir.webp` | Founder Ram Kumar Sir |
| `/images/teachers/rajesh_nayan.webp` | Faculty photo |
| `/images/teachers/mpb_sir.webp` | Faculty photo |
| `/images/teachers/lkp_sir.webp` | Faculty photo |
| `/images/teachers/gautam_ishwar.webp` | Faculty photo |
| `/images/students/coaching/neet/aradhya.webp` | NEET AIR 499 Topper |
| `/images/students/coaching/jee/akhnavya.webp` | JEE 99.35% Topper |
| `/LakshyaMarch-logo.png` | Institute logo |

---

## ⚙️ TECH STACK

- **Framework**: Next.js 16.2.4 (App Router, Static Site Generation)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (primary), system-ui fallback
- **API**: Cross-origin POST to `https://erp.lakshyamarch.com`
- **Deployment**: Static export (SSG)
- **SEO**: 210 static pages, sitemap.xml, robots.txt, JSON-LD schema per page
