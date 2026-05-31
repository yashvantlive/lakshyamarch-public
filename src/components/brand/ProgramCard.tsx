import React from "react";
import { CalendarDays, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Accent = "red" | "blue" | "gold" | "green";

const accent: Record<Accent, { bar: string; icon: string; chip: string }> = {
  red: { bar: "bg-brand-red-600", icon: "bg-brand-red-50 text-brand-red-600", chip: "text-brand-red-600" },
  blue: { bar: "bg-brand-blue-700", icon: "bg-brand-blue-50 text-brand-blue-700", chip: "text-brand-blue-700" },
  gold: { bar: "bg-brand-gold-400", icon: "bg-brand-gold-50 text-brand-gold-600", chip: "text-brand-gold-600" },
  green: { bar: "bg-brand-green-600", icon: "bg-brand-green-50 text-brand-green-600", chip: "text-brand-green-600" },
};

/**
 * Academic-catalog program/batch card. Consistent header bar, icon chip, target,
 * meta row (start/end), feature list, and CTA. One card for Programs + landing pages.
 */
export default function ProgramCard({
  title,
  subtitle,
  target,
  icon: Icon,
  accentColor = "blue",
  features,
  startDate,
  endDate,
  href,
  ctaLabel = "Explore",
  className,
}: {
  title: string;
  subtitle?: string;
  target?: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  accentColor?: Accent;
  features?: string[];
  startDate?: string;
  endDate?: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
}) {
  const a = accent[accentColor];
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg",
        className,
      )}
    >
      <div className={cn("h-1.5 w-full", a.bar)} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105", a.icon)}>
            <Icon size={24} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold leading-tight text-ink-900">{title}</h3>
            {subtitle && (
              <p className={cn("mt-0.5 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em]", a.chip)}>
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {target && <p className="mb-4 font-sans text-sm leading-relaxed text-ink-500">{target}</p>}

        {features && features.length > 0 && (
          <ul className="mb-5 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 font-sans text-sm text-ink-600">
                <CheckCircle2 size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-green-500" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {(startDate || endDate) && (
          <div className="mt-auto space-y-2 border-t border-ink-100 pt-4">
            {startDate && (
              <div className="flex items-center gap-2 font-sans text-sm text-ink-600">
                <CalendarDays size={15} strokeWidth={1.75} className={a.chip} /> Starts {startDate}
              </div>
            )}
            {endDate && (
              <div className="flex items-center gap-2 font-sans text-sm text-ink-600">
                <Clock size={15} strokeWidth={1.75} className={a.chip} /> Till {endDate}
              </div>
            )}
          </div>
        )}

        {href && (
          <Link
            href={href}
            className={cn(
              "mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold transition-colors",
              a.chip,
            )}
          >
            {ctaLabel}
            <ArrowRight size={16} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
}
