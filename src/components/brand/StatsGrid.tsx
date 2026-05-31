"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Counter, Stagger, StaggerItem } from "./Motion";

export type Stat = {
  /** Numeric target for the animated counter. */
  value?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Use instead of value when the metric isn't a plain number (e.g. "IIT/NIT"). */
  display?: string;
  label: string;
  accent?: "red" | "blue" | "gold" | "green";
};

const accentText: Record<NonNullable<Stat["accent"]>, string> = {
  red: "text-brand-red-500",
  blue: "text-brand-blue-400",
  gold: "text-brand-gold-400",
  green: "text-brand-green-400",
};

const accentTextLight: Record<NonNullable<Stat["accent"]>, string> = {
  red: "text-brand-red-600",
  blue: "text-brand-blue-700",
  gold: "text-brand-gold-600",
  green: "text-brand-green-600",
};

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
  return (
    <Stagger
      className={cn(
        "grid gap-4 sm:gap-6",
        columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {stats.map((s) => (
        <StaggerItem key={s.label}>
          <StatCard stat={s} theme={theme} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function StatCard({ stat, theme = "dark" }: { stat: Stat; theme?: "light" | "dark" }) {
  const accent = stat.accent ?? "gold";
  const valueColor = theme === "dark" ? accentText[accent] : accentTextLight[accent];

  return (
    <div
      className={cn(
        "rounded-2xl border p-5 sm:p-6 transition-all duration-200",
        theme === "dark"
          ? "border-ink-800 bg-ink-900 hover:border-ink-700"
          : "border-ink-200 bg-white hover:shadow-brand-md",
      )}
    >
      <p className={cn("font-display text-3xl font-extrabold tracking-tight sm:text-4xl", valueColor)}>
        {stat.display ? (
          stat.display
        ) : (
          <Counter
            value={stat.value ?? 0}
            decimals={stat.decimals}
            prefix={stat.prefix}
            suffix={stat.suffix}
          />
        )}
      </p>
      <p
        className={cn(
          "mt-2 font-sans text-[0.6875rem] font-bold uppercase leading-tight tracking-[0.16em]",
          theme === "dark" ? "text-white/55" : "text-ink-500",
        )}
      >
        {stat.label}
      </p>
    </div>
  );
}
