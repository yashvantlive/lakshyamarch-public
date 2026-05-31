"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { StaircaseEmblem, ExamSheetTexture } from "@/design-system/patterns";

type Accent = "red" | "blue" | "gold" | "green" | "teal";

const emblemColor: Record<Accent, string> = {
  red: "text-brand-red-500/15",
  blue: "text-brand-blue-400/15",
  gold: "text-brand-gold-400/15",
  green: "text-brand-green-400/15",
  teal: "text-brand-teal-400/15",
};

const topRule: Record<Accent, string> = {
  red: "from-brand-red-600 via-brand-gold-400 to-brand-red-600",
  blue: "from-brand-blue-700 via-brand-gold-400 to-brand-blue-700",
  gold: "from-brand-gold-500 via-brand-red-600 to-brand-gold-500",
  green: "from-brand-green-600 via-brand-gold-400 to-brand-green-600",
  teal: "from-brand-teal-600 via-brand-gold-400 to-brand-teal-600",
};

/**
 * Admission-brochure hero surface.
 *
 * A deliberate institutional panel — solid ink, an examination-sheet ruling
 * texture, a bold top brand rule (like a printed banner edge), and a large
 * staircase academic seal as the visual anchor. NO blueprint grid, NO blur glow
 * orbs, NO translucent poster overlays. Heroes read like the top of a premium
 * coaching prospectus.
 */
export default function HeroSection({
  children,
  accent = "red",
  className,
  contentClassName,
  minHeight = "min-h-[88vh]",
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
  contentClassName?: string;
  minHeight?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden bg-ink-950 text-white",
        minHeight,
        className,
      )}
    >
      {/* Top brand rule — printed banner edge */}
      <div className={cn("absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r", topRule[accent])} />

      {/* Solid academic base */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />

      {/* Examination-sheet ruling (intentional surface, not decoration) */}
      <ExamSheetTexture dark opacity={6} />

      {/* Side colour block — poster-style vertical band on the right */}
      <div className={cn("absolute inset-y-0 right-0 hidden w-[38%] lg:block", "bg-ink-900/40")} />
      <div className="absolute inset-y-0 right-0 hidden w-px bg-white/5 lg:block lg:right-[38%]" />

      {/* Staircase academic seal — the brand anchor (replaces grid/glow) */}
      <StaircaseEmblem
        className={cn(
          "pointer-events-none absolute -right-16 -bottom-16 h-[420px] w-[420px] select-none sm:h-[520px] sm:w-[520px]",
          emblemColor[accent],
        )}
      />

      {/* Content */}
      <div className={cn("relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-28", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
