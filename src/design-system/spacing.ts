/**
 * LakshyaMarch Spacing & Layout rhythm. 4-pt base.
 * One vertical rhythm and one container recipe for every page.
 */

export const spacing = {
  0: "0px",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
} as const;

/** Shared layout class recipes — import in components for consistency. */
export const layout = {
  /** Page max width + horizontal padding. */
  container: "mx-auto w-full max-w-7xl px-5 sm:px-8",
  /** Narrow reading column (articles, FAQ, forms). */
  containerNarrow: "mx-auto w-full max-w-3xl px-5 sm:px-8",
  /** Medium column (centered section intros). */
  containerMedium: "mx-auto w-full max-w-5xl px-5 sm:px-8",
  /** Vertical section rhythm. */
  section: "py-20 sm:py-28",
  sectionTight: "py-14 sm:py-20",
  /** Standard gap between grid cards. */
  gridGap: "gap-6 lg:gap-8",
} as const;

export default spacing;
