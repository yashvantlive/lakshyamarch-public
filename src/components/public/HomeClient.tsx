"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap, Target, Trophy, Users, ArrowRight, Quote, Star,
  ShieldCheck, BookOpen, Stethoscope, Sparkles, CheckCircle2,
  ClipboardList, BadgeCheck, Phone, MessageCircle, CalendarDays,
} from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import EnquiryForm from "@/components/public/EnquiryForm";
import {
  INSTITUTE, PROGRAMS, FACULTY, RESULTS_NEET, RESULTS_JEE, RESULTS_BOARD,
  HIGHLIGHTS, FOUNDER, whatsappLink,
} from "@/lib/siteData";
import { SUCCESS_STORIES } from "@/lib/stories";
import {
  Button, Badge, SectionHeader, HeroSection, StatsGrid, ResultsShowcase,
  FacultyCard, ProgramCard, ScholarshipBadge, TestimonialCard, CTASection,
  Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import type { Stat } from "@/components/brand";
import type { ResultStudent } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const HERO_STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Total Selections", accent: "gold" },
  { value: 99.35, decimals: 2, label: "JEE Percentile", accent: "blue" },
  { display: "AIR 499", label: "Best NEET Rank", accent: "green" },
  { display: "IIT / NIT", label: "Faculty Alumni", accent: "red" },
];

const SCHOLARSHIPS = [
  { tier: "gold" as const, rank: "Rank 1", award: "100% Waiver" },
  { tier: "silver" as const, rank: "Rank 2", award: "75% Waiver" },
  { tier: "bronze" as const, rank: "Rank 3", award: "50% Waiver" },
  { tier: "merit" as const, rank: "Rank 4–25", award: "Up to 25%" },
];

const ADMISSION_STEPS = [
  { icon: ClipboardList, step: "01", title: "Enquire", desc: "Fill the form, call, or WhatsApp. Our counsellor responds within 2 hours." },
  { icon: Users, step: "02", title: "Counselling", desc: "Free 1-on-1 session to assess goals and choose the right batch." },
  { icon: BadgeCheck, step: "03", title: "Confirm Seat", desc: "Submit documents, complete registration, and your seat is secured." },
];

export default function HomeClient() {
  const stories = SUCCESS_STORIES.slice(0, 3).map((s) => ({
    name: s.title.split(" ").slice(2, 4).join(" ") || s.author,
    content: s.excerpt,
    studentClass: `${s.category} ${s.year}`,
    result: s.category === "NEET" ? "NEET Qualified" : s.category === "JEE" ? "JEE Achiever" : "Board Topper",
  }));

  return (
    <div className="min-h-screen bg-ink-50">
      <PublicNavbar />
      <Hero />
      <TrustMarquee />
      <ThinkNeetSection />
      <ResultsSection />
      <FounderSection />
      <EcosystemSection />
      <FacultySection />
      <ScholarshipSection />
      <StoriesSection stories={stories} />
      <AdmissionsSection />
      <CTASection
        title="Your March Towards Success Starts Here"
        accentWord="Success"
        lead="Join Begusarai's most result-oriented institute. Free counselling, expert mentorship, and a proven path to IITs and medical colleges."
        actions={[
          { label: "Apply for 2026–27", href: "/admission", variant: "primary", withArrow: true },
          { label: "Talk to a Counsellor", href: whatsappLink(), variant: "ghost", external: true },
        ]}
      />
      <PublicFooter />
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <HeroSection
      accent="red"
      posterSrc="/images/posters/brochure.webp"
      posterOpacity={6}
      logoWatermark
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Badge tone="onDark" icon={Star}>
              IIT / NEET selections every year since {INSTITUTE.established}
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              {INSTITUTE.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/70">
              {INSTITUTE.tagline}. Quality education, strict discipline, and consistent results — all under one roof in {INSTITUTE.address.city}.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/programs" variant="primary" size="lg" withArrow magnetic>
                Explore Programs
              </Button>
              <Button href="/results" variant="ghost" size="lg">
                <Trophy size={18} strokeWidth={1.75} className="text-brand-gold-400" /> View Results
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-brand-gold-400" fill="currentColor" />
                ))}
              </div>
              <p className="font-sans text-sm font-medium text-white/70">
                4.9/5 rated on Google & student reviews
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pl-8">
          <EnquiryForm />
        </Reveal>
      </div>

      <Reveal delay={0.25} className="mt-16 border-t border-white/10 pt-10">
        <StatsGrid stats={HERO_STATS} theme="dark" />
      </Reveal>
    </HeroSection>
  );
}

/* ─────────────────────── Trust marquee ─────────────────── */
function TrustMarquee() {
  return (
    <div className="overflow-hidden border-y border-ink-200 bg-white py-4">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-10 pr-10">
        {[...HIGHLIGHTS, ...HIGHLIGHTS].map((h, i) => (
          <span key={i} className="flex items-center gap-2.5 font-sans text-sm font-semibold uppercase tracking-wide text-ink-500">
            <ShieldCheck size={15} strokeWidth={1.75} className="text-brand-red-600" />
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── ThinkNEET poster promo ─────────────────── */
function ThinkNeetSection() {
  const points = [
    "100% NCERT-based question patterns",
    "OMR practice + real exam simulation",
    "AIR benchmarking after every test",
    "Post-test analysis by expert faculty",
  ];
  return (
    <section className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-ink-950 shadow-brand-xl">
          {/* Poster as a faint branded background layer (no glass) */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
            style={{ backgroundImage: "url(/images/campaigns/think-neet/think-neet-poster.webp)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/55" aria-hidden />

          <div className="relative z-10 grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <Badge tone="onDark" icon={BookOpen}>ThinkNEET Test Series</Badge>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/campaigns/think-neet/think-neet-logo.webp"
                alt="ThinkNEET"
                className="mt-6 h-12 w-auto object-contain"
              />
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-tight text-white">
                Begusarai's Most Structured <span className="text-brand-gold-400">NEET</span> Test Series
              </h2>
              <p className="mt-4 max-w-xl font-sans leading-relaxed text-white/70">
                Benchmark your NEET 2027 preparation with scientifically designed mock tests, OMR practice, and
                expert-led analysis after every paper.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 font-sans text-sm text-white/80">
                    <CheckCircle2 size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-green-400" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/think-neet-test-series-begusarai" variant="gold" size="lg" withArrow magnetic>
                  Explore ThinkNEET
                </Button>
                <Button href="/neet-coaching-begusarai" variant="ghost" size="lg">
                  <Stethoscope size={18} strokeWidth={1.75} className="text-brand-green-400" /> NEET Coaching
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-ink-800 shadow-brand-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/campaigns/think-neet/think-neet-poster.webp"
                  alt="ThinkNEET Test Series poster"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Results ──────────────────────── */
function ResultsSection() {
  const board: ResultStudent[] = [
    ...RESULTS_BOARD.cbse12, ...RESULTS_BOARD.cbse10, ...RESULTS_BOARD.icse10,
  ].map((r: any) => ({ ...r, board: `${r.board} ${r.class}th` }));

  return (
    <section id="results" className={layout.section}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="Hall of Fame"
          eyebrowIcon={Trophy}
          title="Results That Speak"
          accentWord="Speak"
          accent="red"
          lead="Year after year, LakshyaMarch produces city toppers across NEET, JEE, and Board exams. This is the ecosystem your child will enter."
          className="mb-14"
        />
        <ResultsShowcase
          neet={RESULTS_NEET as ResultStudent[]}
          jee={RESULTS_JEE as ResultStudent[]}
          board={board}
        />
        <Reveal className="mt-12 text-center">
          <Button href="/results" variant="outline" size="md" withArrow>
            View Complete Hall of Fame
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────── Founder ──────────────────────── */
function FounderSection() {
  return (
    <section id="founder" className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 shadow-brand-sm">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl border border-ink-100 shadow-brand-md">
                {FOUNDER.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={FOUNDER.image} alt={FOUNDER.name} className="h-full w-full object-cover object-top" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-blue-100 font-display text-5xl font-extrabold text-brand-blue-700">
                    {FOUNDER.name.charAt(0)}
                  </div>
                )}
                <div className="absolute right-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-brand-gold-400 text-ink-900 shadow-brand-md">
                  <span className="font-sans text-[0.5rem] font-bold uppercase tracking-widest opacity-70">Estd</span>
                  <span className="font-display text-base font-extrabold">{INSTITUTE.established}</span>
                </div>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-ink-900">{FOUNDER.name}</h3>
              <p className="mt-1 font-sans text-sm font-bold uppercase tracking-[0.14em] text-brand-blue-700">{FOUNDER.designation}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge tone="neutral">{FOUNDER.qualification}</Badge>
                <Badge tone="green">{FOUNDER.certification}</Badge>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <Badge tone="gold">From the Founder's Desk</Badge>
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-tight text-ink-900">
                A Message from <span className="text-brand-red-600">Ram Sir</span>
              </h2>
              <div className="mt-7 border-l-4 border-brand-gold-400 pl-6">
                <Quote size={28} strokeWidth={1.5} className="mb-2 text-brand-gold-300" />
                <p className="font-sans text-lg italic leading-relaxed text-ink-700">{FOUNDER.message}</p>
              </div>
              <p className="mt-7 max-w-2xl font-sans leading-relaxed text-ink-500">
                We started LakshyaMarch in {INSTITUTE.established} with a simple goal:{" "}
                <strong className="text-ink-900">quality education with no compromises.</strong> Today we bring
                premier JEE & NEET standards to {INSTITUTE.address.city} through our integrated school model — so
                students never have to leave home for top-tier education.
              </p>
              <div className="mt-9">
                <Button href={whatsappLink()} variant="dark" size="md" withArrow target="_blank" rel="noopener noreferrer">
                  Connect with Ram Sir
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Ecosystem ────────────────────── */
function EcosystemSection() {
  return (
    <section id="programs" className={cn(layout.section, "bg-ink-50")}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="The Academic Ecosystem"
          eyebrowIcon={Sparkles}
          title="One Institute, Complete Journey"
          accentWord="Journey"
          accent="blue"
          lead="From foundational schooling to hardcore competitive preparation — choose the path that fits your goal."
          className="mb-14"
        />
        <Stagger className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <StaggerItem>
            <ProgramCard
              title="LM Integrated School"
              subtitle="Class 6 to 10"
              icon={GraduationCap}
              accentColor="blue"
              target="A revolutionary model where rigorous board prep meets foundation coaching — one fee, two benefits."
              features={[
                "School + coaching under one roof",
                "Built-in self-study time",
                "Moral & personal finance education",
                "No separate travel for coaching",
              ]}
              href="/programs"
              ctaLabel="Explore School Wing"
            />
          </StaggerItem>
          <StaggerItem>
            <ProgramCard
              title="LakshyaMarch Coaching"
              subtitle="IIT-JEE · NEET · Foundation"
              icon={Target}
              accentColor="red"
              target="Expert mentorship by IIT/NIT alumni for India's toughest exams, with dedicated dropper batches."
              features={[
                "IIT-JEE (Main + Advanced)",
                "NEET-UG medical track",
                "1-year dropper batches",
                "ThinkNEET test series",
              ]}
              href="/programs"
              ctaLabel="Explore Coaching"
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────────────── Faculty ──────────────────────── */
function FacultySection() {
  return (
    <section id="faculty" className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="Faculty Excellence"
          eyebrowIcon={Users}
          title="India's Top-Tier Educators"
          accentWord="Educators"
          accent="blue"
          lead="No part-time local tutors. Our entire panel consists of experienced IITians, NITians, and national-rank subject experts."
          className="mb-14"
        />
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.slice(0, 4).map((f) => (
            <StaggerItem key={f.name}>
              <FacultyCard faculty={f} compact />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/faculty" variant="secondary" size="md" withArrow>
            Meet the Full Faculty Panel
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────── Scholarship ──────────────────── */
function ScholarshipSection() {
  return (
    <section className={cn(layout.section, "bg-ink-50")}>
      <div className={layout.containerMedium}>
        <SectionHeader
          eyebrow="Scholarship Programs"
          eyebrowIcon={Trophy}
          title="Talent Deserves Reward"
          accentWord="Reward"
          accent="gold"
          lead="Sit the free LakshyaMarch Scholarship Exam and win up to 100% fee waiver on coaching or school admission."
          className="mb-14"
        />
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {SCHOLARSHIPS.map((s) => (
            <StaggerItem key={s.rank}>
              <ScholarshipBadge tier={s.tier} rank={s.rank} award={s.award} note="on total coaching fee" />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/scholarship" variant="gold" size="lg" withArrow magnetic>
            Register Free for Scholarship Exam
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────── Stories ──────────────────────── */
function StoriesSection({ stories }: { stories: { name: string; content: string; studentClass: string; result: string }[] }) {
  return (
    <section className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="Student Success Stories"
          eyebrowIcon={Sparkles}
          title="Dreams Turned Into Reality"
          accentWord="Reality"
          accent="green"
          lead="Hear from achievers who turned disciplined preparation into life-changing ranks — right here in Begusarai."
          className="mb-14"
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <StaggerItem key={s.name}>
              <TestimonialCard testimonial={s} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/success-stories" variant="outline" size="md" withArrow>
            Read All Success Stories
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────── Admissions ───────────────────── */
function AdmissionsSection() {
  return (
    <section className={cn(layout.section, "bg-ink-50")}>
      <div className={layout.containerMedium}>
        <SectionHeader
          eyebrow="Admissions 2026–27"
          eyebrowIcon={CalendarDays}
          title="A Simple 3-Step Process"
          accentWord="Process"
          accent="blue"
          lead="We've made joining LakshyaMarch effortless. Three steps, done in 48 hours."
          className="mb-16"
        />
        <Stagger className="grid gap-8 sm:grid-cols-3">
          {ADMISSION_STEPS.map((s) => (
            <StaggerItem key={s.step} className="relative text-center">
              <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[5rem] font-extrabold leading-none text-ink-200/70 select-none">
                {s.step}
              </span>
              <div className="relative">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red-600 text-white shadow-brand-md">
                  <s.icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs font-sans text-sm leading-relaxed text-ink-500">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-14 flex flex-wrap justify-center gap-4">
          <Button href="/admission" variant="primary" size="lg" withArrow magnetic>
            Start Your Application
          </Button>
          <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="outline" size="lg">
            <Phone size={18} strokeWidth={1.75} /> {INSTITUTE.primaryPhone}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
