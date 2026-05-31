import React from "react";
import { cn } from "@/lib/utils";

type Tone = "red" | "blue" | "gold" | "green" | "neutral" | "onDark";

const tones: Record<Tone, string> = {
  red: "bg-brand-red-50 text-brand-red-700 border-brand-red-100",
  blue: "bg-brand-blue-50 text-brand-blue-800 border-brand-blue-100",
  gold: "bg-brand-gold-50 text-brand-gold-700 border-brand-gold-200",
  green: "bg-brand-green-50 text-brand-green-700 border-brand-green-100",
  neutral: "bg-ink-100 text-ink-600 border-ink-200",
  onDark: "bg-ink-800 text-white border-ink-700",
};

export default function Badge({
  children,
  tone = "blue",
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
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em]",
        tones[tone],
        className,
      )}
    >
      {Icon && <Icon size={13} strokeWidth={2} className="shrink-0" />}
      {children}
    </span>
  );
}
