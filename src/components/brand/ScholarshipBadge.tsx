import React from "react";
import { cn } from "@/lib/utils";
import { ScholarshipRibbon } from "@/design-system/patterns";

export type ScholarshipTier = "gold" | "silver" | "bronze" | "merit";

const tierStyle: Record<
  ScholarshipTier,
  { ring: string; medal: string; label: string; text: string }
> = {
  gold: {
    ring: "ring-brand-gold-200 bg-brand-gold-50",
    medal: "bg-gradient-to-br from-brand-gold-300 to-brand-gold-500 text-ink-900",
    label: "Champion",
    text: "text-brand-gold-700",
  },
  silver: {
    ring: "ring-ink-200 bg-ink-50",
    medal: "bg-gradient-to-br from-ink-200 to-ink-400 text-ink-900",
    label: "Excellence",
    text: "text-ink-600",
  },
  bronze: {
    ring: "ring-brand-red-100 bg-brand-red-50",
    medal: "bg-gradient-to-br from-brand-red-300 to-brand-red-600 text-white",
    label: "Merit",
    text: "text-brand-red-700",
  },
  merit: {
    ring: "ring-brand-blue-100 bg-brand-blue-50",
    medal: "bg-gradient-to-br from-brand-blue-500 to-brand-blue-800 text-white",
    label: "Achiever",
    text: "text-brand-blue-700",
  },
};

/**
 * Reusable scholarship award row. Replaces hand-built emoji slab sections.
 */
export default function ScholarshipBadge({
  tier,
  rank,
  award,
  note,
  className,
}: {
  tier: ScholarshipTier;
  rank: string;
  award: string;
  note?: string;
  className?: string;
}) {
  const s = tierStyle[tier];
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-4 rounded-2xl border border-transparent p-5 ring-1 transition-all duration-200 hover:shadow-brand-md sm:flex-row sm:items-center",
        s.ring,
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-brand-sm", s.medal)}>
          <ScholarshipRibbon className="h-7 w-7" />
        </div>
        <div>
          <p className="font-display text-lg font-extrabold text-ink-900">{rank}</p>
          <p className={cn("font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em]", s.text)}>{s.label}</p>
        </div>
      </div>
      <div className="sm:text-right">
        <p className="font-display text-2xl font-extrabold text-ink-900">{award}</p>
        {note && <p className="font-sans text-xs text-ink-500">{note}</p>}
      </div>
    </div>
  );
}
