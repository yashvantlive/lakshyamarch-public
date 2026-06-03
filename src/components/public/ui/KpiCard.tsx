import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";

const colorMap = {
  blue:    { bg: "bg-blue-50/50",    icon: "bg-blue-100/80 text-[rgb(30,58,138)] border-blue-200/50",    text: "text-[rgb(30,58,138)]",    glow: "hover:shadow-[0_10px_20px_-10px_rgba(30,58,138,0.15)]" },
  emerald: { bg: "bg-emerald-50/50", icon: "bg-emerald-100/80 text-emerald-700 border-emerald-200/50", text: "text-emerald-700", glow: "hover:shadow-[0_10px_20px_-10px_rgba(16,185,129,0.15)]" },
  amber:   { bg: "bg-amber-50/50",   icon: "bg-amber-100/80 text-amber-700 border-amber-200/50",   text: "text-amber-700",   glow: "hover:shadow-[0_10px_20px_-10px_rgba(245,158,11,0.15)]" },
  purple:  { bg: "bg-purple-50/50",  icon: "bg-purple-100/80 text-purple-700 border-purple-200/50", text: "text-purple-700", glow: "hover:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.15)]" },
  rose:    { bg: "bg-rose-50/50",    icon: "bg-rose-100/80 text-rose-700 border-rose-200/50",    text: "text-rose-700",    glow: "hover:shadow-[0_10px_20px_-10px_rgba(244,63,94,0.15)]" },
};

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon | React.ReactNode;
  trend?: { value: string; positive: boolean };
  color?: keyof typeof colorMap;
  className?: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = "blue",
  className,
}) => {
  const c = colorMap[color] || colorMap.blue;

  return (
    <div 
      className={cn(
        "bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-lg p-6 flex gap-4 items-start transition-all duration-300",
        "shadow-sm hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.99] group hover:border-slate-300",
        c.glow,
        className
      )}
    >
      <div className={cn("rounded-lg p-3 shrink-0 border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3", c.icon)}>
        {React.isValidElement(icon) ? icon : React.createElement(icon as React.ElementType, { size: 20, strokeWidth: 2 })}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest truncate">{title}</p>
        <p className="mt-1 text-2xl font-extrabold text-slate-900 tracking-tight tabular-nums leading-none">{value}</p>
        {subtitle && <p className="mt-1.5 text-xs text-slate-400 font-medium truncate">{subtitle}</p>}
        {trend && (
          <p className={cn("mt-2 text-xs font-bold flex items-center gap-1", trend.positive ? "text-emerald-600" : "text-rose-600")}>
            {trend.positive ? (
              <ArrowUpRight size={14} className="stroke-[3] shrink-0" />
            ) : (
              <ArrowDownRight size={14} className="stroke-[3] shrink-0" />
            )}
            {trend.value}
          </p>
        )}
      </div>
    </div>
  );
};
