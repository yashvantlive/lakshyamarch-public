import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

import { INSTITUTE, FACULTY, RESULTS_NEET, whatsappLink } from "@/lib/siteData";
import {
  Trophy, Star, Users, BookOpen, Heart, Clock, MessageCircle,
  GraduationCap, TrendingUp, Award, Microscope,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, StatsGrid, ResultsShowcase,
  ProgramCard, FacultyCard, FAQSection, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import type { Stat, ResultStudent } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Best NEET Coaching in Begusarai | LakshyaMarch Education",
  description:
    "LakshyaMarch offers the best NEET-UG coaching in Begusarai. Expert Biology, Chemistry & Physics faculty. AIR 499 results. NEET dropper batch available. Top medical coaching in Bihar.",
  keywords: [
    "NEET coaching Begusarai", "best NEET coaching Bihar", "NEET UG preparation Begusarai",
    "medical coaching Begusarai", "NEET dropper batch Bihar", "LakshyaMarch NEET",
    "biology coaching Begusarai", "NEET 2026 preparation Begusarai",
  ],
  alternates: { canonical: "/neet-coaching-begusarai" },
  openGraph: {
    title: "Best NEET Coaching in Begusarai | LakshyaMarch Education",
    description: "AIR 499 in NEET 2025. Expert faculty. NEET 2-Year & Dropper batches. LakshyaMarch — Bihar's top NEET coaching in Begusarai.",
    url: "https://lakshyamarch.com/neet-coaching-begusarai",
    type: "website",
  },
};

const neetFacultyList = FACULTY.filter((f) => ["Biology", "Chemistry", "Physics"].includes(f.subject)).slice(0, 4);

const neetFaqs = [
  { q: "Is LakshyaMarch good for NEET preparation?", a: "Yes! LakshyaMarch students secured AIR 499 in NEET 2025 with a score of 619/720 (Aradhya Bharti – ABVIMS Delhi). Our NEET results include multiple selections in PMCH Patna, ANMMCH Gaya, and other top government medical colleges." },
  { q: "What NEET batches does LakshyaMarch offer?", a: "We offer a 2-Year NEET program (Class 11 & 12) and a 1-Year NEET Dropper Batch. Foundation batches for Class 8, 9, 10 are also available to build a strong biology and science base early." },
  { q: "Does LakshyaMarch have a NEET dropper batch?", a: "Yes, LakshyaMarch's dedicated NEET Dropper Batch starts in May 2026. It's designed with intensive revision, test series, and one-on-one doubt support for students targeting NEET 2027." },
  { q: "What is the NEET Biology faculty qualification?", a: "Our Biology faculty includes Nitish Sharma Sir (AIR-82 in GATE-XL, 5 years experience) and Rahul Kumar Sir (M.Sc Biotechnology, CUSB, 4 years experience). Both are full-time dedicated NEET Biology specialists." },
  { q: "Can students from outside Begusarai join LakshyaMarch NEET coaching?", a: "Yes, students from across Bihar are welcome. LakshyaMarch provides hostel facilities for outstation students with a safe, disciplined environment and AC classrooms." },
  { q: "How is LakshyaMarch NEET coaching different from Allen or Aakash?", a: "At LakshyaMarch, batch sizes are smaller, which means every student gets personalized attention. Our faculty is 100% full-time — no rotating faculty from other centers. And students stay in Begusarai instead of moving to Patna or Kota." },
];

const neetPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course", name: "NEET-UG Coaching Program — LakshyaMarch Begusarai",
      description: "Comprehensive 2-Year and Dropper NEET-UG coaching in Begusarai. Expert Biology, Physics & Chemistry faculty. AIR 499 results. Class 11, 12, and Dropper batches available.",
      provider: { "@type": "EducationalOrganization", name: INSTITUTE.name, url: "https://lakshyamarch.com", address: { "@type": "PostalAddress", streetAddress: INSTITUTE.address.line1, addressLocality: INSTITUTE.address.city, addressRegion: INSTITUTE.address.state, postalCode: INSTITUTE.address.pin, addressCountry: "IN" } },
      courseMode: "Onsite", educationalLevel: "Class 11, Class 12, Dropper", inLanguage: ["Hindi", "English"],
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", validFrom: "2026-04-01", validThrough: "2027-03-31" },
    },
    { "@type": "FAQPage", mainEntity: neetFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ],
};

const STATS: Stat[] = [
  { display: "AIR 499", label: "NEET 2025", accent: "green" },
  { display: "619/720", label: "Top Score", accent: "gold" },
  { display: "MBBS", label: "Govt Colleges", accent: "blue" },
];

const BATCHES = [
  { icon: GraduationCap, title: "2-Year NEET Program", sub: "Class 11 → 12", accent: "green" as const, points: ["Full NEET-UG syllabus coverage", "Board + NEET integrated plan", "Daily Biology MCQ practice", "Mock tests every 2 weeks"], date: "Mar 2026" },
  { icon: TrendingUp, title: "1-Year Dropper Batch", sub: "NEET Target 2027", accent: "red" as const, points: ["Intensive revision from day 1", "Weak-chapter identification", "Previous-year NEET analysis", "Daily doubt sessions"], date: "May 2026" },
  { icon: BookOpen, title: "Class 9-10 Foundation", sub: "Early NEET Base", accent: "blue" as const, points: ["Biology from Class 9 itself", "Strong NCERT base building", "NTSE Science preparation", "Build study habits early"], date: "Apr 2026" },
  { icon: Heart, title: "ThinkNEET Test Series", sub: "All NEET Aspirants", accent: "gold" as const, points: ["Chapter-wise test series", "Full-syllabus mock tests", "All-India rank prediction", "Open for all students"], date: "Apr 2026" },
];

const WHY = [
  { icon: Users, title: "Dedicated NEET Faculty", desc: "Our Biology specialist has AIR-82 in GATE-XL. Only NEET-specific experts." },
  { icon: Microscope, title: "NCERT-First Approach", desc: "95%+ NEET questions come from NCERT. We teach every line of NCERT Biology in depth." },
  { icon: Clock, title: "Daily MCQ Practice", desc: "500+ Biology MCQs per week, with daily revision built into the timetable." },
  { icon: TrendingUp, title: "Real NEET Results", desc: "AIR 499, 619/720. Selections in PMCH, ANMMCH, ABVIMS — verified results." },
  { icon: Award, title: "Local Advantage", desc: "Stay in Begusarai. No Kota pressure, no homesickness. Parents can visit anytime." },
];

export default function NEETCoachingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(neetPageSchema) }} />
      <PublicNavbar />

      <HeroSection accent="green">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal><Badge tone="onDark" icon={Star}>#1 NEET Coaching in Begusarai</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              NEET-UG Coaching in <span className="text-brand-gold-400">Begusarai</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/70">
              Bihar's leading NEET institute. <strong className="text-white">AIR 499</strong> in 2025 — ABVIMS Delhi. Dedicated Biology, Chemistry & Physics experts for NEET aspirants.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 w-full max-w-3xl">
            <StatsGrid stats={STATS} theme="dark" columns={3} />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/admission" variant="primary" size="md" withArrow magnetic>Free Counselling</Button>
              <Button href={whatsappLink("Hi, I want to know about NEET coaching at LakshyaMarch.")} variant="ghost" size="md" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} strokeWidth={1.75} /> WhatsApp Now
              </Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Hall of Achievements" eyebrowIcon={Trophy} title="NEET Results That Make Bihar Proud" accentWord="Proud" accent="green" lead="Our NEET selections span government medical colleges across Bihar, Delhi, Mizoram and beyond." className="mb-12" />
            <ResultsShowcase neet={RESULTS_NEET as ResultStudent[]} />
            <Reveal className="mt-10 text-center"><Button href="/results" variant="outline" size="md" withArrow>View All Results</Button></Reveal>
          </div>
        </section>

        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Batches" title="NEET Batches Starting Now" accentWord="Now" accent="green" className="mb-12" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BATCHES.map((b) => (
                <StaggerItem key={b.title}>
                  <ProgramCard title={b.title} subtitle={b.sub} icon={b.icon} accentColor={b.accent} features={b.points} startDate={b.date} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <div className="grid items-start gap-14 lg:grid-cols-2">
              <div>
                <SectionHeader align="left" eyebrow="Why LakshyaMarch" title="Your MBBS Dream, Closer to Home" accentWord="Home" accent="green" className="mb-8" />
                <Stagger className="space-y-5">
                  {WHY.map((item) => (
                    <StaggerItem key={item.title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green-600">
                        <item.icon size={20} strokeWidth={1.75} />
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-bold text-ink-900">{item.title}</h4>
                        <p className="mt-0.5 font-sans text-sm leading-relaxed text-ink-500">{item.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
              <div>
                <SectionHeader align="left" eyebrow="Faculty" title="NEET Faculty Panel" accentWord="Panel" accent="green" className="mb-8" />
                <Stagger className="grid grid-cols-2 gap-5">
                  {neetFacultyList.map((f) => (
                    <StaggerItem key={f.name}><FacultyCard faculty={f} compact /></StaggerItem>
                  ))}
                </Stagger>
                <Reveal className="mt-6"><Button href="/faculty" variant="secondary" size="sm" withArrow>Meet All Faculty</Button></Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQSection faqs={neetFaqs} eyebrow="NEET FAQs" title="Questions, Answered" accentWord="Answered" accent="green" />

      <section className="relative overflow-hidden bg-ink-950 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
            Your <span className="text-brand-gold-400">MBBS Dream</span> Starts Here
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-white/70">Join Begusarai's most trusted NEET institute. Free counselling available.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/admission" variant="primary" size="lg" withArrow magnetic>Apply Now</Button>
            <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="ghost" size="lg">Call: {INSTITUTE.primaryPhone}</Button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
