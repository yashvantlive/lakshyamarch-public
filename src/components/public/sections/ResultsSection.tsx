"use client";

import React from "react";
import { Trophy } from "lucide-react";
import { SectionHeader, ResultsShowcase, Reveal, Button } from "@/components/brand";
import type { ResultStudent } from "@/components/brand";
import { RESULTS_NEET, RESULTS_JEE, RESULTS_BOARD } from "@/lib/siteData";
import { layout } from "@/design-system/spacing";

export default function ResultsSection() {
  const board: ResultStudent[] = [
    ...RESULTS_BOARD.cbse12, ...RESULTS_BOARD.cbse10, ...RESULTS_BOARD.icse10,
  ].map((r: any) => ({ ...r, board: `${r.board} ${r.class}th` }));

  return (
    <section id="results" className={layout.section}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="Hall of Achievements"
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
            View Complete Hall of Achievements
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
