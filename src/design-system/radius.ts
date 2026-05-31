/**
 * LakshyaMarch Radius tokens. The site is soft, not square.
 * Banned: rounded-none cards and one-off oversized radii (rounded-[40px]).
 */

export const radius = {
  sm: "0.5rem", // 8px — chips, inputs
  md: "0.75rem", // 12px — buttons
  lg: "1rem", // 16px — cards
  xl: "1.5rem", // 24px — feature cards, forms
  "2xl": "2rem", // 32px — hero / CTA panels
  full: "9999px", // pills, avatars
} as const;

/** Tailwind class recipes for consistent component rounding. */
export const radiusClass = {
  chip: "rounded-lg",
  button: "rounded-xl",
  card: "rounded-2xl",
  panel: "rounded-3xl",
  pill: "rounded-full",
} as const;

export type RadiusToken = keyof typeof radius;

export default radius;
