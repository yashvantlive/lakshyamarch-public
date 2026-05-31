"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Motion";

type Variant = "primary" | "secondary" | "gold" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-display font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-red-600 text-white hover:bg-brand-red-700 shadow-brand-md hover:shadow-brand-glow-red",
  secondary:
    "bg-brand-blue-800 text-white hover:bg-brand-blue-900 shadow-brand-md hover:shadow-brand-glow-blue",
  gold:
    "bg-brand-gold-400 text-ink-900 hover:bg-brand-gold-300 shadow-brand-md hover:shadow-brand-glow-gold",
  dark:
    "bg-ink-900 text-white hover:bg-ink-800 shadow-brand-md",
  ghost:
    "bg-ink-800 text-white border border-ink-700 hover:bg-ink-700",
  outline:
    "bg-transparent text-ink-900 border border-ink-200 hover:border-ink-300 hover:bg-ink-50",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  magnetic?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    magnetic = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={18}
          strokeWidth={1.75}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const node =
    "href" in props && props.href !== undefined ? (
      isInternal(props.href) ? (
        <Link href={props.href} className={classes} {...(rest as any)}>
          {inner}
        </Link>
      ) : (
        <a className={classes} {...(rest as any)}>
          {inner}
        </a>
      )
    ) : (
      <button className={classes} {...(rest as any)}>
        {inner}
      </button>
    );

  return magnetic ? <Magnetic>{node}</Magnetic> : node;
}

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}
