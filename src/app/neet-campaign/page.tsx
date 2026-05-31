import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE, RESULTS_NEET, RESULTS_JEE, whatsappLink } from "@/lib/siteData";
import {
  Trophy, Users, BarChart3, Handshake, ShieldCheck, CalendarDays, Stethoscope, Cpu, BookOpen, Megaphone,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, ResultsShowcase, CTASection, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import type { ResultStudent } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "NEET & JEE 2027 Campaign | Free Demo Classes | LakshyaMarch Begusarai",
  description:
    "Begusarai's trusted NEET/JEE coaching. Explore our proven results, expert faculty, and upcoming batches for NEET & JEE 2027. Free demo classes available.",
  alternates: { canonical: "/neet-campaign" },
};

const WHY = [
  { icon: Users, title: "Expert Faculty", desc: "IIT/NIT and subject specialists with years of experience." },
  { icon: BarChart3, title: "Test & Analysis", desc: "Weekly tests and detailed performance monitoring." },
  { icon: Handshake, title: "Personal Attention", desc: "Small batches for individual guidance and doubt clearing." },
  { icon: Trophy, title: "Proven Track Record", desc: "Consistent results since 2019 — real students, real success." },
];

const BATCHES = [
  { icon: Stethoscope, accent: "green" as const, tag: "NEET", title: "Target NEET 2027", detail: "For 12th passed / repeaters", date: "14 May 2026" },
  { icon: Cpu, accent: "blue" as const, tag: "JEE", title: "Target JEE 2027", detail: "For 12th passed / repeaters", date: "21 May 2026" },
  { icon: BookOpen, accent: "gold" as const, tag: "Class 11", title: "Foundation Batch", detail: "Evening batch — Class 11 students", date: "21 May 2026" },
];

const accentChip: Record<string, string> = {
  green: "bg-brand-green-50 text-brand-green-600",
  blue: "bg-brand-blue-50 text-brand-blue-700",
  gold: "bg-brand-gold-50 text-brand-gold-600",
};

export default function NeetCampaignPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="green" posterSrc="/images/campaigns/think-neet/think-neet-poster.webp">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Badge tone="onDark" icon={Megaphone}>Free 1-Week Demo Class</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              NEET 2027 Preparation <span className="text-brand-gold-400">Starts Now</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Join LakshyaMarch — Begusarai's trusted NEET & JEE coaching with proven results every year.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              <Badge tone="onDark" icon={ShieldCheck}>100+ Students Selected</Badge>
              <Badge tone="onDark" icon={ShieldCheck}>Established 2019</Badge>
              <Badge tone="onDark" icon={ShieldCheck}>Begusarai Based</Badge>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={whatsappLink("Hi, I'm interested in the NEET/JEE 2027 batches at LakshyaMarch.")} variant="primary" size="lg" withArrow magnetic target="_blank" rel="noopener noreferrer">
                Register Free
              </Button>
              <Button href="/contact" variant="ghost" size="lg">Contact Us</Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        {/* Results */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Trust Builder" title="Our Real Results" accentWord="Results" accent="green" lead="Students from Begusarai, making it big — every year." className="mb-12" />
            <ResultsShowcase
              neet={RESULTS_NEET as ResultStudent[]}
              jee={(RESULTS_JEE as ResultStudent[]).filter((r) => r.year === 2026)}
            />
          </div>
        </section>

        {/* Why */}
        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Why Choose Us" title="Why Parents Trust Us" accentWord="Trust Us" accent="blue" className="mb-14" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((w) => (
                <StaggerItem key={w.title}>
                  <div className="h-full rounded-2xl border border-ink-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-50 text-brand-blue-700">
                      <w.icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{w.title}</h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink-500">{w.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Batches */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.containerMedium}>
            <SectionHeader eyebrow="New Batches" title="Upcoming Batch Dates" accentWord="Dates" accent="green" className="mb-14" />
            <Stagger className="grid gap-6 sm:grid-cols-3">
              {BATCHES.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-7 shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className={cn("mb-5 flex h-12 w-12 items-center justify-center rounded-xl", accentChip[b.accent])}>
                      <b.icon size={24} strokeWidth={1.75} />
                    </div>
                    <Badge tone={b.accent}>{b.tag}</Badge>
                    <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{b.title}</h3>
                    <p className="mt-1 font-sans text-sm text-ink-500">{b.detail}</p>
                    <div className="mt-auto flex items-center gap-2 pt-6 font-display font-semibold text-ink-900">
                      <CalendarDays size={18} strokeWidth={1.75} className="text-brand-red-600" /> {b.date}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <CTASection
        title="Start Your Success Journey"
        accentWord="Journey"
        lead="Don't wait. Secure your future with Begusarai's leading education institute."
        actions={[
          { label: "Contact Us Today", href: "/contact", variant: "primary", withArrow: true },
          { label: "Call Now", href: `tel:+91${INSTITUTE.primaryPhone}`, variant: "ghost" },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
