"use client";

import React from "react";
import { Trophy } from "lucide-react";
import { SectionHeader, ScholarshipBadge, Stagger, StaggerItem, Reveal, Button } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const SCHOLARSHIPS = [
  { tier: "gold" as const, rank: "Rank 1", award: "100% Waiver" },
  { tier: "silver" as const, rank: "Rank 2", award: "75% Waiver" },
  { tier: "bronze" as const, rank: "Rank 3", award: "50% Waiver" },
  { tier: "merit" as const, rank: "Rank 4–25", award: "Up to 25%" },
];

export default function ScholarshipSection() {
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
          <Button href="/scholarship" variant="gold" size="lg" withArrow magnetic className="max-w-[90vw] h-auto whitespace-normal py-3 px-6 leading-tight">
            Register Free for Scholarship Exam
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
