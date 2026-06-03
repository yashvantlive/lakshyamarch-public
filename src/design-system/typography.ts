/**
 * LakshyaMarch Typography System.
 * Poppins (display/headings) + Inter (body/UI). Defined once.
 *
 * `className` strings map to the Tailwind `@theme` tokens declared in globals.css.
 * Use the `text*` helper classes via the `<Heading>`/components rather than
 * hand-rolling font sizes + weights per page.
 */

export const fontFamily = {
  display: "var(--font-display)", // Poppins
  sans: "var(--font-sans)", // Inter
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

/**
 * Canonical type scale. Each entry pairs a token name with the exact Tailwind
 * utility recipe so every heading across the site is identical.
 */
export const typeScale = {
  "display-xl": "font-display font-extrabold tracking-tight text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05]",
  "display-l": "font-display font-extrabold tracking-tight text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08]",
  h1: "font-display font-bold tracking-tight text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]",
  h2: "font-display font-bold tracking-tight text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.15]",
  h3: "font-display font-semibold tracking-tight text-[1.375rem] leading-[1.25]",
  "body-lg": "font-sans font-normal text-lg leading-[1.7]",
  body: "font-sans font-normal text-base leading-[1.7]",
  caption: "font-sans font-medium text-[0.8125rem] leading-[1.5]",
  overline: "font-sans font-bold uppercase tracking-[0.18em] text-[0.6875rem] leading-none",
} as const;

export type TypeToken = keyof typeof typeScale;

export const typography = { fontFamily, fontWeight, typeScale } as const;

export default typography;
