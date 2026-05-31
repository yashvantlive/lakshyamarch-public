import React from "react";
import { cn } from "@/lib/utils";
import { AcademicGrid, BrandGlow, StaircaseWatermark } from "@/design-system/patterns";
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
 * Unified final conversion band. Ink surface with brand watermark composition.
 * Used at the bottom of every page so the closing rhythm is identical.
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
      <AcademicGrid className="text-white" opacity={4} />
      <BrandGlow className="left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2" color="rgb(229 57 53 / 0.22)" />
      <StaircaseWatermark className="-right-6 bottom-0 h-72 w-72 text-white" opacity={5} />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
          {head}
          {tail && <span className="text-brand-gold-400">{tail}</span>}
        </h2>
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
