import React from "react";
import { cn } from "@/lib/utils";

type Tone = "red" | "blue" | "gold" | "green" | "teal" | "ink";

/**
 * Solid color-block institutional banner — inspired by coaching-poster headings
 * and admission cards. Use for the strongest official labels (e.g. "ADMISSIONS
 * OPEN 2026–27", "SCHOLARSHIP EXAMINATION"). Flush edges, a leading notch, and
 * heavy letter-spacing — deliberately NOT a rounded pill.
 */

const tones: Record<Tone, string> = {
  red: "bg-brand-red-600 text-white",
  blue: "bg-brand-blue-800 text-white",
  gold: "bg-brand-gold-400 text-ink-900",
  green: "bg-brand-green-600 text-white",
  teal: "bg-brand-teal-600 text-white",
  ink: "bg-ink-900 text-white",
};

const notch: Record<Tone, string> = {
  red: "bg-brand-gold-400",
  blue: "bg-brand-gold-400",
  gold: "bg-brand-red-600",
  green: "bg-brand-gold-400",
  teal: "bg-brand-gold-400",
  ink: "bg-brand-red-600",
};

export default function BannerLabel({
  children,
  tone = "red",
  icon: Icon,
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  icon?: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-stretch overflow-hidden shadow-brand-sm",
        className,
      )}
    >
      {/* leading brand notch */}
      <span aria-hidden className={cn("w-1.5 shrink-0", notch[tone])} />
      <span
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 font-display text-[0.75rem] font-extrabold uppercase tracking-[0.16em]",
          tones[tone],
        )}
      >
        {Icon && <Icon size={15} strokeWidth={2.25} className="shrink-0" />}
        {children}
      </span>
    </span>
  );
}
