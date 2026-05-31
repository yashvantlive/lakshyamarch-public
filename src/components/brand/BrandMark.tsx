import React from "react";
import { cn } from "@/lib/utils";

/**
 * LakshyaMarch logomark — the real company logo (`/company_logo.png`) rendered
 * on a solid white tile so it reads cleanly over both the dark hero navbar and
 * the white scrolled navbar/footer. No glass, no generated SVG glyph.
 */
export default function BrandMark({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-brand-sm ring-1 ring-ink-200/60",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/company_logo.png"
        alt="LakshyaMarch"
        className="h-full w-full object-contain"
        width={size}
        height={size}
      />
    </span>
  );
}
