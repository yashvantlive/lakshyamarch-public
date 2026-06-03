import React from "react";
import { cn } from "@/lib/utils";

type GlowColor = "blue" | "emerald" | "amber" | "purple" | "rose";

interface BlackCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: GlowColor;
}

const glowMap: Record<GlowColor, string> = {
  blue: "bg-blue-500/10 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.2)]",
  emerald: "bg-emerald-500/10 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.2)]",
  amber: "bg-amber-500/10 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.2)]",
  purple: "bg-purple-500/10 shadow-[0_20px_50px_-12px_rgba(168,85,247,0.2)]",
  rose: "bg-rose-500/10 shadow-[0_20px_50px_-12px_rgba(244,63,94,0.2)]",
};

export const BlackCard: React.FC<BlackCardProps> = ({ children, glowColor = "blue", className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-slate-900/95 backdrop-blur-md rounded-lg p-6 lg:p-8 text-white relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1",
        glowMap[glowColor],
        className
      )}
      {...props}
    >
      <div className={cn("absolute right-0 top-0 w-80 h-80 rounded-full blur-3xl pointer-events-none", glowMap[glowColor].split(" ")[0])} />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
