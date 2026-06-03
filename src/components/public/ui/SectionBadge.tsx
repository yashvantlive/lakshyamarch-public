import React from "react";
import { cn } from "@/lib/utils";

type BadgeColor = "blue" | "emerald" | "amber" | "purple" | "slate" | "rose";

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: BadgeColor;
  icon?: React.ReactNode;
}

const colorMap: Record<BadgeColor, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-200/60",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
  amber: "bg-amber-50 text-amber-700 border-amber-200/60",
  purple: "bg-purple-50 text-purple-700 border-purple-200/60",
  slate: "bg-slate-50 text-slate-700 border-slate-200/60",
  rose: "bg-rose-50 text-rose-700 border-rose-200/60",
};

export const SectionBadge: React.FC<SectionBadgeProps> = ({ children, color = "blue", icon, className, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest",
        colorMap[color],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  );
};
