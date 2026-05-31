import React from "react";
import { cn } from "@/lib/utils";

type Tone = "red" | "blue" | "gold" | "green" | "teal" | "neutral" | "onDark";

/**
 * Institutional label — NOT a rounded SaaS pill.
 *
 * Reads like a printed coaching-brochure heading: an uppercase, letter-spaced
 * label flanked by brand rules (━━ LABEL ━━). Replaces the old capsule "eyebrow
 * badge" everywhere it's used as a section/hero eyebrow.
 */

const toneText: Record<Tone, string> = {
  red: "text-brand-red-700",
  blue: "text-brand-blue-800",
  gold: "text-brand-gold-700",
  green: "text-brand-green-700",
  teal: "text-brand-teal-700",
  neutral: "text-ink-600",
  onDark: "text-brand-gold-400",
};

const toneRule: Record<Tone, string> = {
  red: "bg-brand-red-600",
  blue: "bg-brand-blue-800",
  gold: "bg-brand-gold-500",
  green: "bg-brand-green-600",
  teal: "bg-brand-teal-600",
  neutral: "bg-ink-400",
  onDark: "bg-brand-gold-400",
};

export default function Badge({
  children,
  tone = "blue",
  icon: Icon,
  className,
  align = "start",
}: {
  children: React.ReactNode;
  tone?: Tone;
  icon?: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.22em]",
        toneText[tone],
        align === "center" && "justify-center",
        className,
      )}
    >
      {/* leading rule (institutional) */}
      <span aria-hidden className={cn("h-[3px] w-7 shrink-0", toneRule[tone])} />
      {Icon && <Icon size={14} strokeWidth={2.25} className="shrink-0" />}
      <span className="leading-none">{children}</span>
      {align === "center" && <span aria-hidden className={cn("h-[3px] w-7 shrink-0", toneRule[tone])} />}
    </span>
  );
}
