import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";
import { Reveal } from "./Motion";

export type FAQ = { q: string; a: string };

/**
 * The ONE FAQ implementation site-wide. Native <details> accordion (accessible,
 * SSR-friendly), with consistent brand styling.
 */
export default function FAQSection({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  accentWord,
  accent = "blue",
  className,
}: {
  faqs: FAQ[];
  eyebrow?: string;
  title?: string;
  accentWord?: string;
  accent?: "red" | "blue" | "gold" | "green";
  className?: string;
}) {
  const hover: Record<string, string> = {
    red: "hover:bg-brand-red-50",
    blue: "hover:bg-brand-blue-50",
    gold: "hover:bg-brand-gold-50",
    green: "hover:bg-brand-green-50",
  };
  return (
    <section className={cn("bg-ink-50 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} accentWord={accentWord} accent={accent} className="mb-12" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <details className="group overflow-hidden rounded-lg border border-ink-200 bg-white">
                <summary
                  className={cn(
                    "flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-sm font-semibold text-ink-900 transition-colors sm:text-base",
                    hover[accent],
                  )}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.75}
                    className="shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="border-t border-ink-100 px-6 pb-5 pt-4 font-sans text-sm leading-relaxed text-ink-600">
                  {faq.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
