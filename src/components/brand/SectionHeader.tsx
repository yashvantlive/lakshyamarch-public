import React from "react";
import { cn } from "@/lib/utils";
import Badge from "./Badge";
import { Reveal } from "./Motion";

type Align = "center" | "left";
type Accent = "red" | "blue" | "gold" | "green";
type Theme = "light" | "dark";

const accentText: Record<Accent, string> = {
  red: "text-brand-red-600",
  blue: "text-brand-blue-700",
  gold: "text-brand-gold-500",
  green: "text-brand-green-600",
};

const badgeTone: Record<Accent, "red" | "blue" | "gold" | "green"> = {
  red: "red",
  blue: "blue",
  gold: "gold",
  green: "green",
};

/**
 * Unified section intro: optional eyebrow badge, a title where the LAST word (or
 * an explicit `accentWord`) is brand-colored, and an optional lead paragraph.
 */
export default function SectionHeader({
  eyebrow,
  eyebrowIcon,
  title,
  accentWord,
  lead,
  align = "center",
  accent = "blue",
  theme = "light",
  className,
}: {
  eyebrow?: string;
  eyebrowIcon?: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  accentWord?: string;
  lead?: string;
  align?: Align;
  accent?: Accent;
  theme?: Theme;
  className?: string;
}) {
  const { head, tail } = splitAccent(title, accentWord);

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Badge tone={theme === "dark" ? "onDark" : badgeTone[accent]} icon={eyebrowIcon}>
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "font-display font-bold tracking-tight text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.15]",
          theme === "dark" ? "text-white" : "text-ink-900",
        )}
      >
        {head}
        {tail && <span className={accentText[accent]}>{tail}</span>}
      </h2>
      {lead && (
        <p
          className={cn(
            "font-sans text-base leading-[1.7] sm:text-lg",
            theme === "dark" ? "text-white/70" : "text-ink-500",
            align === "center" && "max-w-2xl",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

/** Split a title so the accent word(s) can be colored. Defaults to last word. */
function splitAccent(title: string, accentWord?: string): { head: string; tail: string } {
  if (accentWord && title.includes(accentWord)) {
    const idx = title.lastIndexOf(accentWord);
    return { head: title.slice(0, idx), tail: title.slice(idx) };
  }
  const parts = title.trim().split(" ");
  if (parts.length === 1) return { head: "", tail: title };
  const tail = parts.pop() as string;
  return { head: parts.join(" ") + " ", tail };
}
