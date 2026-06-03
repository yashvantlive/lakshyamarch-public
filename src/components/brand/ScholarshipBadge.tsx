import React from "react";
import { cn } from "@/lib/utils";
import { ScholarshipRibbon } from "@/design-system/patterns";

export type ScholarshipTier = "gold" | "silver" | "bronze" | "merit";

const tierStyle: Record<
  ScholarshipTier,
  { surface: string; medal: string; bar: string; label: string; text: string }
> = {
  gold: {
    surface: "bg-brand-gold-50 border-brand-gold-300",
    medal: "bg-brand-gold-400 text-ink-900",
    bar: "bg-brand-gold-500",
    label: "Champion",
    text: "text-brand-gold-700",
  },
  silver: {
    surface: "bg-ink-50 border-ink-300",
    medal: "bg-ink-300 text-ink-900",
    bar: "bg-ink-400",
    label: "Excellence",
    text: "text-ink-600",
  },
  bronze: {
    surface: "bg-brand-red-50 border-brand-red-200",
    medal: "bg-brand-red-600 text-white",
    bar: "bg-brand-red-600",
    label: "Merit",
    text: "text-brand-red-700",
  },
  merit: {
    surface: "bg-brand-blue-50 border-brand-blue-200",
    medal: "bg-brand-blue-800 text-white",
    bar: "bg-brand-blue-800",
    label: "Achiever",
    text: "text-brand-blue-700",
  },
};

/**
 * Official scholarship certificate row — reads like a printed scholarship slab
 * with a leading tier bar, a ribbon seal, the rank, and the award. No gradients,
 * no floating capsules.
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
        "flex items-stretch overflow-hidden rounded-sm border shadow-brand-sm transition-all duration-200 hover:shadow-brand-md",
        s.surface,
        className,
      )}
    >
      {/* tier bar */}
      <div className={cn("w-2 shrink-0", s.bar)} />
      <div className="flex flex-1 flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-sm shadow-brand-sm", s.medal)}>
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
    </div>
  );
}
