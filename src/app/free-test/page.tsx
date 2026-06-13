import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE } from "@/lib/siteData";
import {
  Trophy, CheckCircle2, Star, BookOpen, GraduationCap, CalendarDays, ShieldCheck, Target, Clock, Sparkles
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, Reveal, Stagger, StaggerItem, Button
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Free Mock Test | JEE, NEET, Foundation | LakshyaMarch Begusarai",
  description:
    "Register for LakshyaMarch's Free Mock Test for Class 9 to Dropper students. Test your JEE/NEET/NTSE preparation. Get an all-India rank baseline. Free registration.",
  keywords: [
    "free mock test Begusarai", "free JEE test Bihar", "NEET free test series",
    "LakshyaMarch free test", "scholarship test Begusarai", "NTSE mock test free",
  ],
  alternates: { canonical: "/free-test" },
  openGraph: {
    title: "Free Mock Test 2026 | LakshyaMarch Education",
    description: "Evaluate your JEE/NEET preparation with a completely free mock test. Available for Class 9 to Droppers.",
    url: "https://lakshyamarch.com/free-test",
    type: "website",
  },
};

const freeTestSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationEvent", name: "LakshyaMarch Free Mock Test 2026 (JEE/NEET)",
      description: "Free diagnostic and mock test for ambitious JEE, NEET, and Foundation students in Begusarai.",
      location: { "@type": "Place", name: INSTITUTE.name, address: { "@type": "PostalAddress", streetAddress: INSTITUTE.address.line1, addressLocality: INSTITUTE.address.city, addressRegion: INSTITUTE.address.state, postalCode: INSTITUTE.address.pin, addressCountry: "IN" } },
      organizer: { "@type": "Organization", name: INSTITUTE.name, url: "https://lakshyamarch.com" },
      startDate: "2026-04-01", endDate: "2026-12-31",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", eventStatus: "https://schema.org/EventScheduled", isAccessibleForFree: true,
    },
  ],
};

const faqs = [
  { q: "Is the LakshyaMarch mock test really free?", a: "Yes, registration and the diagnostic mock test are 100% free. There is no registration fee or hidden charge." },
  { q: "Who can take the free mock test?", a: "Students from Class 9 to Droppers (JEE/NEET) can register. There are separate papers scaled to each class level." },
  { q: "How will I get my exam date?", a: "The exact exam date and shift timing will be shared via WhatsApp message / group after successful registration." },
  { q: "Do I get any analysis after the test?", a: "Yes. You get a diagnostic report plus a free parent-teacher meeting (PTM) and counselling with our IIT/NIT alumni faculty." },
];

const TEST_CLASSES = [
  { class: "Class 9", target: "Foundation / NTSE", icon: BookOpen },
  { class: "Class 10", target: "Foundation / Boards", icon: BookOpen },
  { class: "Class 11", target: "JEE / NEET Target", icon: GraduationCap },
  { class: "Class 12", target: "JEE / NEET Pre-Board", icon: GraduationCap },
  { class: "Dropper", target: "JEE / NEET Advance", icon: Target },
];

const WHY = [
  { icon: Target, title: "Diagnostic Report", desc: "Identify your exact weak chapters before the real exams. Stop studying blindly." },
  { icon: Star, title: "Expert Counselling", desc: "Meet our IIT/NIT alumni faculty post-exam to discuss your career trajectory." },
  { icon: Trophy, title: "Win Scholarships", desc: "Score exceptionally well and become eligible for LakshyaMarch fee waivers." },
];

const QUICK = [
  { icon: BookOpen, val: "Offline Mode", label: "Exam Format" },
  { icon: Clock, val: "1–3 Hours", label: "Duration" },
  { icon: CheckCircle2, val: "Instant PTM", label: "Analysis" },
  { icon: Trophy, val: "All-Bihar", label: "Benchmarking" },
];

export default function FreeTestPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(freeTestSchema) }} />
      <FaqSchema faqs={faqs} />
      <PublicNavbar />

      <HeroSection accent="gold">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal><Badge tone="onDark" icon={ShieldCheck}>No Registration Fee · 100% Free</Badge></Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                Benchmark Your Preparation, <span className="text-brand-gold-400">For Free</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/70">
                Take the LakshyaMarch diagnostic mock test designed by ex-IITians. Find out exactly where you stand in JEE, NEET, or NTSE competition.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <CalendarDays size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-gold-400" />
                <p className="font-sans text-sm text-white/75">
                  <strong className="text-white">Tentative date & timing:</strong> exact exam date and shift will be shared via WhatsApp after registration.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {QUICK.map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <s.icon size={18} strokeWidth={1.75} className="mb-2 text-brand-gold-400" />
                    <p className="font-display text-sm font-bold text-white">{s.val}</p>
                    <p className="font-sans text-[0.625rem] uppercase tracking-widest text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 shadow-brand-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-gold-400/10 blur-xl pointer-events-none" />
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="text-brand-gold-400 shrink-0 animate-pulse" size={20} />
                Test Highlights & Details
              </h3>
              
              <ul className="space-y-4 font-sans text-sm text-white/80 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-gold-400 shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                  <span>Curated by IIT & NIT Alumni based on latest patterns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-gold-400 shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                  <span>Detailed chapter-wise strength & weakness report.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-gold-400 shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                  <span>Free career counselling post-exam with mentors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-gold-400 shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                  <span>Opportunity to claim up to 100% scholarship fee waiver.</span>
                </li>
              </ul>

              <Button href="/test-registration?test=free" variant="gold" size="lg" className="w-full justify-center" withArrow>
                Register Online Now
              </Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Eligibility" title="Tests Available for All Levels" accentWord="Levels" accent="blue" lead="Distinct diagnostic papers scaled to each class's exact difficulty." className="mb-14" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {TEST_CLASSES.map((c) => (
                <StaggerItem key={c.class}>
                  <div className="flex h-44 flex-col items-center justify-center rounded-lg border border-ink-200 bg-ink-50 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-800 text-white">
                      <c.icon size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink-900">{c.class}</h3>
                    <p className="mt-1 font-sans text-[0.6875rem] font-bold uppercase tracking-wider text-ink-500">{c.target}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.containerMedium}>
            <SectionHeader eyebrow="The Value" title="Why Take This Mock Test" accentWord="Test" accent="gold" className="mb-14" />
            <Stagger className="grid gap-8 sm:grid-cols-3">
              {WHY.map((w) => (
                <StaggerItem key={w.title}>
                  <div className="h-full rounded-lg border border-ink-200 bg-white p-8 text-center shadow-brand-sm">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gold-50 text-brand-gold-600">
                      <w.icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{w.title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-ink-500">{w.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
