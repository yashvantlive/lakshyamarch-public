/**
 * LakshyaMarch Brand Colors — single source of truth.
 * Derived from the logo + posters: bold red, academic blue, scholarship gold,
 * success green, and a cool ink/neutral ramp.
 *
 * These ramps are mirrored into Tailwind v4 `@theme` in globals.css as
 * `--color-brand-red-*`, `--color-brand-blue-*`, etc. Use the Tailwind classes
 * (`bg-brand-red-600`) in markup and import this object only for non-class needs
 * (canvas, inline SVG fills, charts, JSON-LD theme color, etc.).
 */

export const brandRed = {
  50: "#FEF2F2",
  100: "#FEE2E2",
  200: "#FECACA",
  300: "#FCA5A5",
  400: "#F87171",
  500: "#EF4444",
  600: "#E53935", // brand primary
  700: "#C62828",
  800: "#A91B1B",
  900: "#7F1414",
  950: "#450A0A",
} as const;

export const brandBlue = {
  50: "#EFF4FF",
  100: "#DBE6FE",
  200: "#BFD3FE",
  300: "#93B4FD",
  400: "#608BFA",
  500: "#3B66F6",
  600: "#2547EB",
  700: "#1D37D8",
  800: "#1E3A8A", // academic blue
  900: "#1B2F6E",
  950: "#131D45",
} as const;

export const brandGold = {
  50: "#FFFBEB",
  100: "#FEF4C7",
  200: "#FDE894",
  300: "#FBD957",
  400: "#F4C542", // scholarship gold
  500: "#E9B019",
  600: "#CA8A04",
  700: "#A16207",
  800: "#854D0E",
  900: "#713F12",
  950: "#422006",
} as const;

export const brandGreen = {
  50: "#ECFDF5",
  100: "#D1FAE5",
  200: "#A7F3D0",
  300: "#6EE7B7",
  400: "#34D399",
  500: "#10B981", // success
  600: "#059669",
  700: "#047857",
  800: "#065F46",
  900: "#064E3B",
  950: "#022C22",
} as const;

/** Cool neutral / ink ramp — the ONE dark surface family for the whole site. */
export const ink = {
  50: "#F8FAFC",
  100: "#F1F5F9",
  200: "#E2E8F0",
  300: "#CBD5E1",
  400: "#94A3B8",
  500: "#64748B",
  600: "#475569",
  700: "#334155",
  800: "#1E293B",
  900: "#0F172A",
  950: "#0B1120",
} as const;

/** Semantic roles — prefer these names in code/components. */
export const semantic = {
  primary: brandRed[600],
  primaryDark: brandRed[700],
  secondary: brandBlue[800],
  accent: brandGold[400],
  success: brandGreen[500],
  warning: brandGold[500],
  danger: brandRed[600],
  background: ink[50],
  surface: "#FFFFFF",
  surfaceDark: ink[950],
  border: ink[200],
  text: ink[900],
  textMuted: ink[500],
  onDark: "#FFFFFF",
} as const;

export const colors = {
  red: brandRed,
  blue: brandBlue,
  gold: brandGold,
  green: brandGreen,
  ink,
  semantic,
} as const;

export type BrandColorFamily = "red" | "blue" | "gold" | "green" | "ink";

export default colors;
