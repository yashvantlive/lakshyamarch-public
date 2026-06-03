/**
 * LakshyaMarch Design System — barrel export.
 * Import tokens from a single place: `import { brand } from "@/design-system";`
 */

export { default as colors, brandRed, brandBlue, brandGold, brandGreen, ink, semantic } from "./colors";
export { default as typography, fontFamily, fontWeight, typeScale } from "./typography";
export { default as motionTokens, duration, easing, spring, revealVariants, staggerContainer, staggerItem, viewportOnce, pageVariants } from "./motion";
export { default as spacing, layout } from "./spacing";
export { default as radius, radiusClass } from "./radius";
export { default as shadows, shadowClass } from "./shadows";
export { default as icons, iconSize, iconStrokeWidth, iconDefaults } from "./icons";
export * from "./patterns";

import colors from "./colors";
import typography from "./typography";
import motionTokens from "./motion";
import spacing, { layout } from "./spacing";
import radius from "./radius";
import shadows from "./shadows";
import icons from "./icons";

/** Convenience aggregate object. */
export const brand = {
  colors,
  typography,
  motion: motionTokens,
  spacing,
  layout,
  radius,
  shadows,
  icons,
} as const;

export default brand;
