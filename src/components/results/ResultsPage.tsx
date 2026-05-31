"use client";

import { RESULTS_NEET, RESULTS_JEE, RESULTS_BOARD, INSTITUTE, whatsappLink } from "@/lib/siteData";
import { Trophy } from "lucide-react";
import {
  Badge, HeroSection, StatsGrid, ResultsShowcase, CTASection, Reveal,
} from "@/components/brand";
import type { ResultStudent, Stat } from "@/components/brand";
import { layout } from "@/design-system/spacing";

const STATS: Stat[] = [
  { display: "AIR 499", label: "Best NEET Rank", accent: "green" },
  { value: 99.35, decimals: 2, label: "Top JEE Percentile", accent: "blue" },
  { value: 100, suffix: "+", label: "Total Selections", accent: "gold" },
  { value: 7, label: "Years of Results", suffix: "", accent: "red" },
];

export default function ResultsPage() {
  const board: ResultStudent[] = [
    ...RESULTS_BOARD.cbse12,
    ...RESULTS_BOARD.bseb12,
    ...RESULTS_BOARD.cbse10,
    ...RESULTS_BOARD.icse10,
  ].map((r: any) => ({ ...r, board: `${r.board} ${r.class}th` }));

  return (
    <div className="bg-ink-50">
      <HeroSection accent="red" minHeight="min-h-[70vh]" posterSrc="/images/posters/brochure.webp" posterOpacity={6} logoWatermark>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={Trophy}>Hall of Fame</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Our <span className="text-brand-gold-400">Results</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Every batch since {INSTITUTE.established} — consistent IIT & NEET selections with stellar board
              performances from the heart of Begusarai.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-14">
          <StatsGrid stats={STATS} theme="dark" />
        </Reveal>
      </HeroSection>

      <section className={layout.section}>
        <div className={layout.container}>
          <ResultsShowcase
            neet={RESULTS_NEET as ResultStudent[]}
            jee={RESULTS_JEE as ResultStudent[]}
            board={board}
          />
        </div>
      </section>

      <CTASection
        title="Join the Batch That Creates Rank Holders"
        accentWord="Rank Holders"
        lead="Class 11th & dropper admissions open for IIT-JEE and NEET 2026–28. Your name could be on next year's wall."
        actions={[
          { label: "Enroll Now", href: "/admission", variant: "primary", withArrow: true },
          { label: "Call Us", href: `tel:+91${INSTITUTE.primaryPhone}`, variant: "ghost" },
        ]}
      />
    </div>
  );
}
