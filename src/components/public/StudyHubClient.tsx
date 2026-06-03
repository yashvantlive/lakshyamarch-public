"use client";

import { BookText, ClipboardList, ArrowRight, Laptop, Clock, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";
import { Badge, HeroSection, SectionHeader, Reveal, Stagger, StaggerItem } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    title: "Daily Practice Problems (DPP)",
    description: "Chapter-wise assignments and tiered practice sets for JEE, NEET, and Board exams — Mole Concept, Kinematics, and more.",
    href: "/study-material/dpps",
    icon: ClipboardList,
    tag: "Practice",
    accent: "blue" as const,
  },
  {
    title: "Concept Notes & Formula Sheets",
    description: "Quick revision notes, high-fidelity formula sheets, and mind maps curated by LakshyaMarch expert faculty.",
    href: "/study-material/notes",
    icon: BookText,
    tag: "Revision",
    accent: "red" as const,
  },
];

const chip: Record<string, string> = {
  blue: "bg-brand-blue-50 text-brand-blue-700",
  red: "bg-brand-red-50 text-brand-red-600",
};

const TRUST = [
  { icon: Clock, label: "Regularly Updated" },
  { icon: Laptop, label: "Native In-App Viewing" },
  { icon: ShieldCheck, label: "Curated by IIT/NIT Faculty" },
];

export default function StudyHubClient() {
  return (
    <main className="flex-1">
      <HeroSection accent="blue" minHeight="min-h-[56vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Badge tone="onDark" icon={Search}>Academic Resource Library</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              LakshyaMarch <span className="text-brand-gold-400">Study Hub</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Premium academic resources curated by IIT & NIT alumni. From foundational concepts to advanced problem
              solving — everything you need, in one place.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      <section className={layout.section}>
        <div className={layout.containerMedium}>
          <Stagger className="grid gap-8 md:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <StaggerItem key={cat.href}>
                <Link
                  href={cat.href}
                  className="group flex h-full flex-col rounded-lg border border-ink-200 bg-white p-9 shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className={cn("flex h-16 w-16 items-center justify-center rounded-lg transition-colors group-hover:bg-ink-900 group-hover:text-white", chip[cat.accent])}>
                      <cat.icon size={30} strokeWidth={1.75} />
                    </span>
                    <Badge tone={cat.accent}>{cat.tag}</Badge>
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-ink-900 transition-colors group-hover:text-brand-red-600">
                    {cat.title}
                  </h3>
                  <p className="mt-4 flex-1 font-sans leading-relaxed text-ink-500">{cat.description}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-ink-400 transition-colors group-hover:text-brand-red-600">
                    Enter Portal
                    <ArrowRight size={18} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400">
                <t.icon size={16} strokeWidth={1.75} className="text-brand-blue-600" /> {t.label}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
