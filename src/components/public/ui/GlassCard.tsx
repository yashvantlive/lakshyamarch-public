import React from "react";
import { cn } from "@/lib/utils";

type GlowColor = "blue" | "emerald" | "amber" | "purple" | "rose";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: GlowColor;
}

const shadowMap: Record<GlowColor, string> = {
  blue: "hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)]",
  emerald: "hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.15)]",
  amber: "hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.15)]",
  purple: "hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.15)]",
  rose: "hover:shadow-[0_20px_50px_-12px_rgba(244,63,94,0.15)]",
};

export const GlassCard: React.FC<GlassCardProps> = ({ children, glowColor = "blue", className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-slate-300",
        shadowMap[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
