import React from "react";
import { cn } from "@/lib/utils";

/**
 * LakshyaMarch logomark — the staircase motif rendered as a compact brand badge.
 * Used in the navbar and footer. Pairs the ascending steps (progress) with the
 * brand red→gold so the mark reads as "LM" energy even without the wordmark.
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
        "relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-red-600 to-brand-red-800 shadow-brand-md",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 48 48" width={size * 0.62} height={size * 0.62} fill="none">
        {/* ascending steps */}
        <g fill="#fff">
          <rect x="6" y="32" width="10" height="10" rx="1.5" opacity="0.6" />
          <rect x="17" y="24" width="10" height="18" rx="1.5" opacity="0.8" />
          <rect x="28" y="16" width="10" height="26" rx="1.5" />
        </g>
        {/* gold upward arrow */}
        <path
          d="M9 30 L20 22 L31 14"
          stroke="#F4C542"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M26 12 L33 12 L33 19" stroke="#F4C542" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
