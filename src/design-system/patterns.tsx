/**
 * LakshyaMarch visual DNA — SVG pattern primitives.
 * Replaces ALL external textures (carbon-fibre / Unsplash). Used at 2–8% opacity.
 *
 * Every pattern is pure inline SVG (no network requests) and inherits color via
 * `currentColor` unless a fill is passed, so they tint to any brand color.
 */

import React from "react";
import { cn } from "@/lib/utils";

type PatternProps = {
  className?: string;
  /** 0–100; applied as opacity on the wrapper. */
  opacity?: number;
};

/** Faint engineering blueprint grid. Sits behind heroes/results at 2–4%. */
export function AcademicGrid({ className, opacity = 4 }: PatternProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ opacity: opacity / 100 }}
    >
      <svg width="100%" height="100%" className="text-current">
        <defs>
          <pattern id="lm-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <pattern id="lm-grid-dot" width="44" height="44" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lm-grid)" />
        <rect width="100%" height="100%" fill="url(#lm-grid-dot)" />
      </svg>
    </div>
  );
}

/** The staircase motif (from the logo): ascending steps + an upward arrow. */
export function StaircaseMotif({ className, opacity = 100 }: PatternProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      className={cn("text-current", className)}
      style={{ opacity: opacity / 100 }}
      fill="none"
    >
      {/* ascending steps */}
      <g fill="currentColor">
        <rect x="6" y="86" width="28" height="28" rx="3" opacity="0.55" />
        <rect x="34" y="64" width="28" height="50" rx="3" opacity="0.72" />
        <rect x="62" y="42" width="28" height="72" rx="3" opacity="0.88" />
        <rect x="90" y="20" width="24" height="94" rx="3" />
      </g>
      {/* upward arrow riding the steps */}
      <path
        d="M14 84 L44 60 L72 40 L104 14"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.0"
      />
    </svg>
  );
}

/** Big faint staircase used as a hero/section background watermark. */
export function StaircaseWatermark({ className, opacity = 6 }: PatternProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute select-none", className)}
      style={{ opacity: opacity / 100 }}
    >
      <StaircaseMotif className="h-full w-full" />
    </div>
  );
}

/** Upward diagonal "achievement streaks" for results/stat sections. */
export function AchievementStreaks({ className, opacity = 6 }: PatternProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: opacity / 100 }}
    >
      <svg width="100%" height="100%" preserveAspectRatio="none" className="text-current">
        <defs>
          <pattern id="lm-streak" width="90" height="90" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
            <line x1="0" y1="0" x2="0" y2="90" stroke="currentColor" strokeWidth="10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lm-streak)" />
      </svg>
    </div>
  );
}

/** Single-hue radial brand glow. Replaces multi-color blur orbs. */
export function BrandGlow({
  className,
  color = "rgb(229 57 53 / 0.45)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
    />
  );
}

/** Scholarship ribbon glyph for rank/award badges. */
export function ScholarshipRibbon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 48 48" className={cn("text-current", className)} fill="none">
      <circle cx="24" cy="18" r="13" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="18" r="7" fill="currentColor" opacity="0.18" />
      <path d="M17 28 L13 44 L24 38 L35 44 L31 28" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/**
 * Academic seal / insignia built from the staircase motif — a premium brand
 * asset for hero anchors, scholarship sections, and section dividers. Replaces
 * generic grid/glow decoration. Inherits `currentColor`.
 */
export function StaircaseEmblem({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className={cn("text-current", className)} fill="none">
      {/* outer institutional ring */}
      <circle cx="60" cy="60" r="57" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="3.5" />
      {/* ascending steps inside the seal */}
      <g fill="currentColor">
        <rect x="30" y="74" width="14" height="14" rx="1.5" opacity="0.55" />
        <rect x="46" y="62" width="14" height="26" rx="1.5" opacity="0.75" />
        <rect x="62" y="50" width="14" height="38" rx="1.5" opacity="0.9" />
        <rect x="78" y="38" width="12" height="50" rx="1.5" />
      </g>
      {/* upward arrow riding the steps */}
      <path
        d="M32 72 L50 58 L66 46 L86 32"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.0"
      />
      <path d="M78 30 L88 30 L88 40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.0" />
    </svg>
  );
}

/** Bold staircase chevron strip — a print-style section divider/anchor. */
export function StaircaseStrip({ className, fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 240 24" preserveAspectRatio="none" className={cn(className)} fill="none">
      <path
        d="M0 24 L0 18 L40 18 L40 12 L80 12 L80 6 L120 6 L120 0 L240 0 L240 24 Z"
        fill={fill}
      />
    </svg>
  );
}

/** Examination-sheet texture (faint horizontal ruling) as a positioned layer. */
export function ExamSheetTexture({ className, opacity = 5, dark = false }: PatternProps & { dark?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        dark ? "surface-exam-sheet-dark" : "surface-exam-sheet",
        className,
      )}
      style={{ opacity: opacity / 100 + (dark ? 1 - opacity / 100 : 0) }}
    />
  );
}

/** Smooth SVG curve divider so light/ink sections flow instead of hard-cutting. */
export function CurveDivider({
  className,
  flip = false,
  fill = "currentColor",
}: {
  className?: string;
  flip?: boolean;
  fill?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none w-full leading-[0]", flip && "rotate-180", className)}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-[60px] w-full sm:h-[100px]">
        <path
          d="M0,40 C240,110 480,110 720,70 C960,30 1200,30 1440,80 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/** Angled separator (subtle slant) — alternative to the curve. */
export function SlantDivider({ className, fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none w-full leading-[0]", className)}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-[40px] w-full sm:h-[70px]">
        <path d="M0,80 L1440,0 L1440,80 Z" fill={fill} />
      </svg>
    </div>
  );
}

export const patterns = {
  AcademicGrid,
  StaircaseMotif,
  StaircaseWatermark,
  StaircaseEmblem,
  StaircaseStrip,
  ExamSheetTexture,
  AchievementStreaks,
  BrandGlow,
  ScholarshipRibbon,
  CurveDivider,
  SlantDivider,
};

export default patterns;
