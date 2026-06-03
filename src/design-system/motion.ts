/**
 * LakshyaMarch Motion System (Framer Motion 12).
 * Calm, confident, academic. Reveal-once, small travel, no bouncing.
 */

import type { Variants, Transition } from "framer-motion";

export const duration = {
  page: 0.3,
  hover: 0.2,
  reveal: 0.5,
  slow: 0.7,
} as const;

/** Easing curves (cubic-bezier tuples Framer accepts). */
export const easing = {
  out: [0.22, 1, 0.36, 1] as [number, number, number, number], // out-quint, the house ease
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  standard: [0.4, 0, 0.2, 1] as [number, number, number, number],
} as const;

export const spring = {
  soft: { type: "spring", stiffness: 60, damping: 18 } as Transition,
  snappy: { type: "spring", stiffness: 220, damping: 26, mass: 0.6 } as Transition,
} as const;

/** Scroll-reveal: fade + small rise. Use with whileInView + once. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: easing.out },
  },
};

/** Container that staggers its children's reveal. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Child item for staggered grids/lists. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: easing.out },
  },
};

/** Standard "once" viewport config for scroll reveals. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Page transition variants (paired with View Transitions where supported). */
export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: duration.page, ease: easing.out } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: easing.standard } },
};

export const motionTokens = {
  duration,
  easing,
  spring,
  revealVariants,
  staggerContainer,
  staggerItem,
  viewportOnce,
  pageVariants,
} as const;

export default motionTokens;
