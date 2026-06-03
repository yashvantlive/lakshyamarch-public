"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Counter } from "./Motion";

export type Achievement = {
  value?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

type Accent = "red" | "blue" | "gold" | "green" | "teal";

const accentText: Record<Accent, string> = {
  red: "text-brand-red-600",
  blue: "text-brand-blue-700",
  gold: "text-brand-gold-500",
  green: "text-brand-green-600",
  teal: "text-brand-teal-600",
};

const accentTextDark: Record<Accent, string> = {
  red: "text-brand-red-400",
  blue: "text-brand-blue-300",
  gold: "text-brand-gold-400",
  green: "text-brand-green-400",
  teal: "text-brand-teal-300",
};

/**
 * Poster-style achievement strip: a single solid bar of result anchors with
 * hard dividers — like the headline numbers printed across a coaching brochure.
 * Replaces the floating "startup stat card" grid.
 */
export default function AchievementStrip({
  items,
  theme = "dark",
  accents,
  className,
}: {
  items: Achievement[];
  theme?: "light" | "dark" | "red";
  /** Per-item accent; defaults cycle red→blue→gold→green. */
  accents?: Accent[];
  className?: string;
}) {
  const defaultAccents: Accent[] = ["gold", "blue", "red", "green", "teal"];
  const surface =
    theme === "dark"
      ? "bg-ink-900 border-ink-800 divide-ink-800"
      : theme === "red"
        ? "bg-brand-red-600 border-brand-red-700 divide-brand-red-500/60"
        : "bg-white border-ink-200 divide-ink-200";

  return (
    <div
      className={cn(
        "grid grid-cols-2 divide-x divide-y border sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0",
        surface,
        className,
      )}
    >
      {items.map((s, i) => {
        const accent = accents?.[i] ?? defaultAccents[i % defaultAccents.length];
        const valueColor =
          theme === "red"
            ? "text-white"
            : theme === "dark"
              ? accentTextDark[accent]
              : accentText[accent];
        const labelColor =
          theme === "red" ? "text-white/80" : theme === "dark" ? "text-white/55" : "text-ink-500";
        return (
          <div key={s.label} className="flex flex-col items-center justify-center px-3 py-6 text-center sm:px-4">
            <p className={cn("font-display text-2xl font-extrabold tracking-tight sm:text-[1.75rem]", valueColor)}>
              {s.display ? (
                s.display
              ) : (
                <Counter value={s.value ?? 0} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              )}
            </p>
            <p
              className={cn(
                "mt-2 font-sans text-[0.625rem] font-bold uppercase leading-tight tracking-[0.16em]",
                labelColor,
              )}
            >
              {s.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
