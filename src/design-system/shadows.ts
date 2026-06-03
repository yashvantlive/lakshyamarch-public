/**
 * LakshyaMarch Elevation. Shadows are tinted with ink (slate), not pure black.
 * Glows are reserved for primary CTAs only.
 */

export const shadows = {
  sm: "0 1px 2px 0 rgb(15 23 42 / 0.06), 0 1px 3px 0 rgb(15 23 42 / 0.08)",
  md: "0 4px 12px -2px rgb(15 23 42 / 0.10), 0 2px 6px -2px rgb(15 23 42 / 0.08)",
  lg: "0 12px 28px -8px rgb(15 23 42 / 0.18), 0 4px 12px -4px rgb(15 23 42 / 0.10)",
  xl: "0 24px 56px -16px rgb(15 23 42 / 0.28), 0 8px 20px -8px rgb(15 23 42 / 0.14)",
  glowRed: "0 12px 32px -8px rgb(229 57 53 / 0.45)",
  glowGold: "0 12px 32px -8px rgb(244 197 66 / 0.45)",
  glowBlue: "0 12px 32px -8px rgb(30 58 138 / 0.40)",
} as const;

/** Tailwind class recipes (mirrored from @theme --shadow-* tokens). */
export const shadowClass = {
  card: "shadow-brand-sm",
  cardHover: "shadow-brand-lg",
  panel: "shadow-brand-xl",
  glowRed: "shadow-brand-glow-red",
  glowGold: "shadow-brand-glow-gold",
} as const;

export type ShadowToken = keyof typeof shadows;

export default shadows;
