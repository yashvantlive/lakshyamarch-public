"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AcademicGrid, BrandGlow, StaircaseWatermark } from "@/design-system/patterns";
import { Parallax } from "./Motion";

type Accent = "red" | "blue" | "gold" | "green";

const glowColor: Record<Accent, string> = {
  red: "rgb(229 57 53 / 0.40)",
  blue: "rgb(37 71 235 / 0.35)",
  gold: "rgb(244 197 66 / 0.35)",
  green: "rgb(16 185 129 / 0.30)",
};

/**
 * Shared hero shell. Renders the unified branded background composition
 * (academic grid + staircase watermark + single-hue glow + optional poster
 * blend) and exposes `children` for the content grid.
 *
 * Always dark (ink) for brand consistency — heroes are the brand's signature
 * deep surface. Light intro sections should use a normal <section>, not Hero.
 */
export default function HeroSection({
  children,
  accent = "red",
  posterSrc,
  className,
  contentClassName,
  minHeight = "min-h-[88vh]",
}: {
  children: React.ReactNode;
  accent?: Accent;
  /** Optional poster/photo blended under a masked ink gradient. */
  posterSrc?: string;
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
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />

      {/* Optional poster blend */}
      {posterSrc && (
        <Parallax distance={30} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
            style={{ backgroundImage: `url(${posterSrc})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        </Parallax>
      )}

      {/* Academic grid watermark */}
      <AcademicGrid className="text-white" opacity={4} />

      {/* Staircase watermark (parallax) */}
      <Parallax distance={36} className="absolute -right-10 bottom-0 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px]">
        <StaircaseWatermark className="inset-0 h-full w-full text-white" opacity={6} />
      </Parallax>

      {/* Single-hue brand glow */}
      <BrandGlow className="-top-24 right-1/4 h-96 w-96" color={glowColor[accent]} />
      <BrandGlow className="bottom-0 -left-20 h-80 w-80" color="rgb(244 197 66 / 0.16)" />

      {/* Content */}
      <div className={cn("relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-32", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
