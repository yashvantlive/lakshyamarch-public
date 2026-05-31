"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Counter } from "./Motion";

export type Stat = {
  /** Numeric target for the animated counter. */
  value?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Use instead of value when the metric isn't a plain number (e.g. "IIT/NIT"). */
  display?: string;
  label: string;
  accent?: "red" | "blue" | "gold" | "green" | "teal";
};

const accentText: Record<NonNullable<Stat["accent"]>, string> = {
  red: "text-brand-red-400",
  blue: "text-brand-blue-300",
  gold: "text-brand-gold-400",
  green: "text-brand-green-400",
  teal: "text-brand-teal-300",
};

const accentTextLight: Record<NonNullable<Stat["accent"]>, string> = {
  red: "text-brand-red-600",
  blue: "text-brand-blue-700",
  gold: "text-brand-gold-600",
  green: "text-brand-green-600",
  teal: "text-brand-teal-600",
};

/**
 * Achievement strip — a single solid bar of result anchors with hard dividers,
 * like the headline numbers printed across a coaching brochure. Replaces the
 * old floating "startup stat card" grid. API kept stable for existing pages.
 */
export default function StatsGrid({
  stats,
  theme = "dark",
  columns = 4,
  className,
}: {
  stats: Stat[];
  theme?: "light" | "dark";
  columns?: 3 | 4;
  className?: string;
}) {
  const surface =
    theme === "dark"
      ? "bg-ink-900 border-ink-800 divide-ink-800"
      : "bg-white border-ink-200 divide-ink-200";

  return (
    <div
      className={cn(
        "grid divide-x divide-y border",
        columns === 4
          ? "grid-cols-2 lg:grid-cols-4 lg:divide-y-0"
          : "grid-cols-2 sm:grid-cols-3 lg:divide-y-0",
        surface,
        className,
      )}
    >
      {stats.map((s) => (
        <StatCell key={s.label} stat={s} theme={theme} />
      ))}
    </div>
  );
}

function StatCell({ stat, theme }: { stat: Stat; theme: "light" | "dark" }) {
  const accent = stat.accent ?? "gold";
  const valueColor = theme === "dark" ? accentText[accent] : accentTextLight[accent];
  return (
    <div className="flex flex-col items-center justify-center px-3 py-6 text-center sm:px-4">
      <p className={cn("font-display text-2xl font-extrabold tracking-tight sm:text-[1.75rem]", valueColor)}>
        {stat.display ? (
          stat.display
        ) : (
          <Counter value={stat.value ?? 0} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
        )}
      </p>
      <p
        className={cn(
          "mt-2 font-sans text-[0.625rem] font-bold uppercase leading-tight tracking-[0.16em]",
          theme === "dark" ? "text-white/55" : "text-ink-500",
        )}
      >
        {stat.label}
      </p>
    </div>
  );
}

/** Back-compat single-card export (now a strip cell on a bordered surface). */
export function StatCard({ stat, theme = "dark" }: { stat: Stat; theme?: "light" | "dark" }) {
  const surface = theme === "dark" ? "bg-ink-900 border-ink-800" : "bg-white border-ink-200";
  return (
    <div className={cn("border", surface)}>
      <StatCell stat={stat} theme={theme} />
    </div>
  );
}
