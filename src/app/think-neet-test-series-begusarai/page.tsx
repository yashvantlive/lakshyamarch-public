import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  CheckCircle2, BookOpen, Trophy, BarChart3, ClipboardList,
  AlertCircle, Sparkles, GraduationCap, ArrowRight,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, CTASection, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ThinkNEET Test Series Begusarai | Best NEET Mock Tests | LakshyaMarch",
  description:
    "Join ThinkNEET Test Series at LakshyaMarch Begusarai. NCERT-based patterns, OMR practice, and expert analysis for NEET 2027. Boost your rank with the most structured test series.",
  keywords: [
    "ThinkNEET test series Begusarai", "best NEET test series Bihar", "NCERT based NEET mock test",
    "LakshyaMarch NEET test series", "NEET 2027 preparation Begusarai", "medical entrance mock test",
  ],
  alternates: { canonical: "/think-neet-test-series-begusarai" },
};

const FEATURES = [
  { title: "100% NCERT Pattern", desc: "Every question is curated strictly from NCERT lines, exactly as per the latest NTA NEET trends.", icon: BookOpen, accent: "green" as const },
  { title: "AIR Benchmarking", desc: "Compete with thousands and get your potential All India Rank baseline after every test.", icon: Trophy, accent: "gold" as const },
  { title: "In-Depth Analysis", desc: "Chapter-wise and topic-wise error analysis to pinpoint exactly where you need improvement.", icon: BarChart3, accent: "blue" as const },
  { title: "OMR Practice", desc: "Real offline exam simulation with OMR sheets to minimize silly mistakes in the real exam.", icon: ClipboardList, accent: "red" as const },
];

const accentChip: Record<string, string> = {
  green: "bg-brand-green-50 text-brand-green-600",
  gold: "bg-brand-gold-50 text-brand-gold-600",
  blue: "bg-brand-blue-50 text-brand-blue-700",
  red: "bg-brand-red-50 text-brand-red-600",
};

const PATH = [
  { title: "Unit Tests", desc: "Focus on single chapters to build a strong foundation." },
  { title: "Cumulative Tests", desc: "Combine 3–4 chapters for long-term retention." },
  { title: "Quarterly Major Tests", desc: "Simulate one-quarter of the full syllabus." },
  { title: "Full Syllabus Mocks", desc: "Exact replica of the NEET-UG exam paper." },
];

export default function ThinkNeetPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="green">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal><Badge tone="onDark" icon={Sparkles}>The Ultimate NEET Prep</Badge></Reveal>
          <Reveal delay={0.05}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/campaigns/think-neet/think-neet-logo.webp" alt="ThinkNEET" className="mt-6 h-14 w-auto object-contain mx-auto" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              Master NEET with <span className="text-brand-gold-400">ThinkNEET</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/70">
              Begusarai's most scientific and structured test series — designed by experts to help you crack the
              medical entrance with confidence.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/admission" variant="primary" size="lg" withArrow magnetic>Enroll Now</Button>
              <Button href={whatsappLink("Hi, I want more details about ThinkNEET Test Series.")} variant="ghost" size="lg" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Why ThinkNEET" title="Built on Four Core Pillars" accentWord="Pillars" accent="green" lead="In NEET, accuracy matters as much as knowledge. Our test series ensures you are exam-ready." className="mb-14" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="h-full rounded-lg border border-ink-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className={cn("mb-5 flex h-14 w-14 items-center justify-center rounded-xl", accentChip[f.accent])}>
                      <f.icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{f.title}</h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink-500">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.container}>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <SectionHeader align="left" eyebrow="The Path" title="A Structured Learning Path" accentWord="Path" accent="blue" className="mb-8" />
                <Stagger className="space-y-4">
                  {PATH.map((item, i) => (
                    <StaggerItem key={item.title} className="flex gap-5 rounded-lg border border-ink-200 bg-white p-5 shadow-brand-sm">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue-800 font-display font-bold text-white">{i + 1}</span>
                      <div>
                        <h4 className="font-display font-bold text-ink-900">{item.title}</h4>
                        <p className="font-sans text-sm text-ink-500">{item.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-lg bg-ink-950 p-8 sm:p-12">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-500/15 text-brand-green-400">
                    <GraduationCap size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-extrabold text-white">Expert Mentorship</h3>
                  <p className="mt-4 font-sans leading-relaxed text-white/70">
                    Taking a test is only half the work. The other half is analysis. Our faculty conducts discussion
                    sessions after every major test to clear doubts and share shortcuts.
                  </p>
                  <div className="mt-8 flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                    <AlertCircle size={22} strokeWidth={1.75} className="shrink-0 text-brand-gold-400" />
                    <p className="font-sans text-sm text-white/80">
                      <strong className="text-white">Note:</strong> Available in both Hindi & English mediums.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={cn(layout.section, "bg-white")}>
          <div className={cn(layout.containerNarrow, "text-center")}>
            <Reveal>
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-lg bg-brand-green-50 text-brand-green-600">
                <GraduationCap size={32} strokeWidth={1.75} />
              </div>
              <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-3xl">
                Serious about NEET 2027? Make this <span className="text-brand-green-600">specialized test series</span> part of your prep and lock in your rank.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-center justify-between gap-6 rounded-lg border border-ink-200 bg-ink-50 p-6 text-left">
                <div>
                  <h4 className="font-display font-bold text-ink-900">Expert Preparation Strategy</h4>
                  <p className="font-sans text-sm text-ink-500">Read our detailed blog on using ThinkNEET to crack the medical entrance.</p>
                </div>
                <Button href="/blog/think-neet-lakshyamarch-begusarai" variant="outline" size="sm">
                  Read Blog <ArrowRight size={15} strokeWidth={1.75} />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/admission" variant="primary" size="lg" withArrow magnetic>Join ThinkNEET Today</Button>
              <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="outline" size="lg">Call for Schedule</Button>
            </Reveal>
          </div>
        </section>
      </main>

      <CTASection
        title="Benchmark Your NEET Preparation"
        accentWord="Preparation"
        lead="Join the most structured testing ecosystem in Begusarai and track your journey to a top rank."
        actions={[
          { label: "Enroll in ThinkNEET", href: whatsappLink("Hi, I want to enroll in ThinkNEET Test Series."), variant: "primary", withArrow: true, external: true },
          { label: "Explore NEET Coaching", href: "/neet-coaching-begusarai", variant: "ghost" },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
