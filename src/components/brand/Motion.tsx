"use client";

/**
 * Motion primitives for the LakshyaMarch brand system.
 * Thin wrappers over Framer Motion using the central motion tokens so every
 * reveal/stagger/counter behaves identically across the site.
 */

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  revealVariants,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/design-system/motion";
import { cn } from "@/lib/utils";

/**
 * Native DOM drag/animation handlers collide with Framer Motion's own props,
 * so we strip them from the passthrough type used by our motion wrappers.
 */
type DivProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

/** Fade + small rise when scrolled into view (once). */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...rest
}: DivProps & { delay?: number; as?: "div" | "section" | "li" | "span" }) {
  const reduce = useReducedMotion();
  const MotionTag = (motion as any)[as];
  if (reduce) {
    const Tag = as as any;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealVariants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers reveal of <StaggerItem> children. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  ...rest
}: DivProps & { stagger?: number; delayChildren?: number }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(stagger, delayChildren)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants,
  ...rest
}: DivProps & { variants?: Variants }) {
  return (
    <motion.div className={className} variants={variants ?? staggerItem} {...rest}>
      {children}
    </motion.div>
  );
}

/** Scroll-linked vertical parallax for background watermarks/posters. */
export function Parallax({
  children,
  className,
  distance = 40,
  ...rest
}: DivProps & { distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  if (reduce) {
    return (
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    );
  }
  return (
    <motion.div ref={ref} className={className} style={{ y }} {...rest}>
      {children}
    </motion.div>
  );
}

/** Animated number counter (spring), triggers once on view. */
export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const spring = useSpring(0, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (reduce) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    if (inView) spring.set(value);
  }, [inView, value, spring, reduce, decimals]);

  React.useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
  }, [spring, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** Magnetic button wrapper — element gently follows the cursor. */
export function Magnetic({
  children,
  className,
  strength = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLSpanElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y, display: "inline-flex" }}
      className={cn(className)}
    >
      {children}
    </motion.span>
  );
}
