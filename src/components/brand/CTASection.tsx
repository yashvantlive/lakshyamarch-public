import React from "react";
import { cn } from "@/lib/utils";
import { ExamSheetTexture, StaircaseEmblem } from "@/design-system/patterns";
import Button from "./Button";
import { Reveal } from "./Motion";

export type CTAAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "gold" | "ghost" | "dark";
  withArrow?: boolean;
  external?: boolean;
};

/**
 * Final conversion band — a solid institutional color block (like the bottom
 * banner of an admission poster). Deep ink surface, exam-sheet ruling, a top
 * brand rule, and a staircase seal anchor. No grid, no blur glow.
 */
export default function CTASection({
  title,
  accentWord,
  lead,
  actions = [],
  className,
}: {
  title: string;
  accentWord?: string;
  lead?: string;
  actions?: CTAAction[];
  className?: string;
}) {
  const { head, tail } = splitAccent(title, accentWord);
  return (
    <section className={cn("relative overflow-hidden bg-ink-950 py-20 sm:py-24", className)}>
      {/* top brand rule */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-red-600 via-brand-gold-400 to-brand-red-600" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <ExamSheetTexture dark opacity={6} />
      <StaircaseEmblem className="pointer-events-none absolute -right-12 -bottom-12 h-72 w-72 text-brand-red-500/12 sm:h-80 sm:w-80" />
      <StaircaseEmblem className="pointer-events-none absolute -left-16 -top-16 hidden h-64 w-64 text-brand-gold-400/10 sm:block" />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
          {head}
          {tail && <span className="text-brand-gold-400">{tail}</span>}
        </h2>
        <span aria-hidden className="mx-auto mt-5 flex items-center justify-center gap-1">
          <span className="h-1 w-12 bg-brand-red-600" />
          <span className="h-1 w-3 bg-brand-gold-400" />
        </span>
        {lead && <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">{lead}</p>}
        {actions.length > 0 && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {actions.map((a) => (
              <Button
                key={a.label}
                href={a.href}
                variant={a.variant ?? "primary"}
                size="lg"
                withArrow={a.withArrow}
                magnetic={(a.variant ?? "primary") === "primary"}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {a.label}
              </Button>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}

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
