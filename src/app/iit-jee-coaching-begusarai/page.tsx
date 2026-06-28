import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

import { INSTITUTE, FACULTY_COACHING, whatsappLink } from "@/lib/siteData";
import { RESULTS_JEE } from "@/lib/studentData";
import {
  Trophy, CheckCircle2, Star, Users, BookOpen, Target, Zap, Clock,
  MessageCircle, GraduationCap, TrendingUp, Award,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, StatsGrid, ResultsShowcase,
  ProgramCard, FacultyCard, FAQSection, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import type { Stat, ResultStudent } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Best IIT-JEE Coaching in Begusarai | LakshyaMarch Education",
  description:
    "LakshyaMarch offers the best IIT-JEE coaching in Begusarai. IITian & NITian faculty, 99.35 percentile results, 2-Year & Dropper batches. Join Bihar's top JEE institute today.",
  keywords: [
    "IIT JEE coaching Begusarai", "best JEE coaching Bihar", "JEE Main coaching Begusarai",
    "JEE Advanced coaching Bihar", "IIT coaching near me Begusarai", "LakshyaMarch JEE",
    "dropper batch JEE Begusarai", "NIT coaching Begusarai",
  ],
  alternates: { canonical: "/iit-jee-coaching-begusarai" },
  openGraph: {
    title: "Best IIT-JEE Coaching in Begusarai | LakshyaMarch Education",
    description: "99.35 Percentile in JEE Main. IITian faculty. 2-Year & Dropper batches. LakshyaMarch — Bihar's top IIT-JEE coaching in Begusarai.",
    url: "https://lakshyamarch.com/iit-jee-coaching-begusarai",
    type: "website",
  },
};

const jeeFacultyList = FACULTY_COACHING.filter((f) => f.team?.includes("IIT-JEE"));
const jeeToppers = (RESULTS_JEE as ResultStudent[]).filter((r) => (r.percentile ?? 0) >= 98);

const jeeFaqs = [
  { q: "Is LakshyaMarch good for IIT-JEE preparation?", a: "Absolutely. LakshyaMarch students have achieved 99.35 percentile in JEE Main 2025 and secured seats in IITs, NITs and top engineering colleges. Our faculty consists entirely of IIT/NIT alumni with years of JEE coaching experience." },
  { q: "What batches are available for JEE in LakshyaMarch?", a: "We offer 2-Year JEE program (Class 11 & 12), 1-Year Dropper Batch, and Foundation Batches for Class 7 to 10 to build an early base for JEE/NEET." },
  { q: "What is the fee for IIT-JEE coaching in LakshyaMarch?", a: "Fee details are shared during the counselling session as they depend on the batch and class. Call us at +91-6206323869 or WhatsApp for the current fee structure." },
  { q: "Does LakshyaMarch have a hostel?", a: "Yes, LakshyaMarch provides a hostel facility for outstation students. AC classrooms and a disciplined study environment are also available." },
  { q: "Is there a JEE dropper batch in Begusarai?", a: "Yes, LakshyaMarch offers a dedicated 1-Year JEE Dropper Batch starting May 2026, designed specifically for students who want to re-attempt JEE Main & Advanced." },
  { q: "How is LakshyaMarch different from Allen or PW for JEE?", a: "LakshyaMarch gives personalized attention that large national chains cannot. Our batch sizes are smaller, doubt sessions are daily, and students get direct access to IIT-qualified faculty — all in their home city of Begusarai." },
];

const jeePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course", name: "IIT-JEE Coaching Program — LakshyaMarch Begusarai",
      description: "Comprehensive 2-Year and Dropper IIT-JEE (Main + Advanced) coaching in Begusarai by IIT/NIT alumni faculty. Class 11, 12, and Dropper batches available.",
      provider: { "@type": "EducationalOrganization", name: INSTITUTE.name, url: "https://lakshyamarch.com", address: { "@type": "PostalAddress", streetAddress: INSTITUTE.address.line1, addressLocality: INSTITUTE.address.city, addressRegion: INSTITUTE.address.state, postalCode: INSTITUTE.address.pin, addressCountry: "IN" } },
      courseMode: "Onsite", educationalLevel: "Class 11, Class 12, Dropper", inLanguage: ["Hindi", "English"],
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", validFrom: "2026-04-01", validThrough: "2027-03-31" },
    },
    { "@type": "FAQPage", mainEntity: jeeFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ],
};

const STATS: Stat[] = [
  { value: 99.35, decimals: 2, label: "Top Percentile", accent: "blue" },
  { display: "IIT / NIT", label: "Faculty Alumni", accent: "red" },
  { value: 2019, label: "Producing Results Since", accent: "gold" },
];

const BATCHES = [
  { icon: GraduationCap, title: "2-Year JEE Program", sub: "Class 11 → 12", accent: "blue" as const, points: ["Full JEE Main + Advanced syllabus", "Board + JEE integrated study", "Regular test series (DPPs)", "Daily doubt-clearing sessions"], date: "Mar 2026" },
  { icon: Target, title: "1-Year Dropper Batch", sub: "JEE Target 2027", accent: "red" as const, points: ["Complete syllabus revision", "Crash + mastery approach", "Focus on improvement areas", "Previous-year paper analysis"], date: "May 2026" },
  { icon: BookOpen, title: "Class 9-10 Foundation", sub: "Early JEE Base", accent: "green" as const, points: ["Concepts built from scratch", "NTSE & Olympiad prep", "Board excellence alongside", "5-year head start"], date: "Apr 2026" },
  { icon: Zap, title: "Class 7-8 Foundation", sub: "The Headstart", accent: "gold" as const, points: ["Mental ability (MAT) training", "Math & Science deep dive", "Logical reasoning skills", "Best start for IIT journey"], date: "Apr 2026" },
];

const WHY = [
  { icon: Users, title: "Small Batch Sizes", desc: "More personal attention — no getting lost in a crowd of 200+ students." },
  { icon: GraduationCap, title: "IIT/NIT Alumni Faculty", desc: "Every teacher is from a top institute — no local-level tutors." },
  { icon: Clock, title: "Daily Doubt Sessions", desc: "Doubts cleared same day, so confusion never carries forward." },
  { icon: TrendingUp, title: "Proven Results", desc: "99.35 percentile in JEE Main 2025. IIT Bhilai, NIT Trichy, IIT Roorkee." },
  { icon: Award, title: "Stay in Begusarai", desc: "No need to move to Kota or Patna. Top-quality JEE coaching at home." },
];

export default function JEECoachingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jeePageSchema) }} />
      <PublicNavbar />

      <HeroSection accent="blue">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal><Badge tone="onDark" icon={Star}>#1 IIT-JEE Coaching in Begusarai</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              IIT-JEE Coaching in <span className="text-brand-gold-400">Begusarai</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/70">
              Bihar's most result-oriented JEE institute. Study under <strong className="text-white">IIT Kharagpur alumni</strong> with 99.35 percentile results — without leaving Begusarai.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 w-full max-w-3xl">
            <StatsGrid stats={STATS} theme="dark" columns={3} />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/admission" variant="primary" size="md" withArrow magnetic>Free Counselling</Button>
              <Button href={whatsappLink("Hi, I want to know about IIT-JEE coaching at LakshyaMarch.")} variant="ghost" size="md" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} strokeWidth={1.75} /> WhatsApp Now
              </Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Hall of Achievements" eyebrowIcon={Trophy} title="JEE Results That Speak" accentWord="Speak" accent="blue" lead="Every year, LakshyaMarch students crack JEE Main & Advanced and secure seats in IITs and NITs." className="mb-12" />
            <ResultsShowcase jee={jeeToppers} />
            <Reveal className="mt-10 text-center"><Button href="/results" variant="outline" size="md" withArrow>View All Results</Button></Reveal>
          </div>
        </section>

        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Batches" title="JEE Batches Available Now" accentWord="Now" accent="red" lead="Choose the batch that matches your timeline and goal." className="mb-12" />
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
                <SectionHeader align="left" eyebrow="Why LakshyaMarch" title="Better Coaching, Closer to Home" accentWord="Home" accent="blue" className="mb-8" />
                <Stagger className="space-y-5">
                  {WHY.map((item) => (
                    <StaggerItem key={item.title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
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
                <SectionHeader align="left" eyebrow="Faculty" title="JEE Faculty Panel" accentWord="Panel" accent="red" className="mb-8" />
                <Stagger className="grid grid-cols-2 gap-5">
                  {jeeFacultyList.map((f, i) => (
                    <StaggerItem key={f.name}><FacultyCard faculty={f} compact priority={i < 4} /></StaggerItem>
                  ))}
                </Stagger>
                <Reveal className="mt-6"><Button href="/faculty" variant="secondary" size="sm" withArrow>Meet All Faculty</Button></Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQSection faqs={jeeFaqs} eyebrow="JEE FAQs" title="Questions, Answered" accentWord="Answered" accent="blue" />

      <section className="relative overflow-hidden bg-ink-950 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
            Start Your <span className="text-brand-gold-400">IIT Journey</span> Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-white/70">Book a free counselling session with our JEE experts in Begusarai.</p>
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
