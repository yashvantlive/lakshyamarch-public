import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "amber" | "blue" | "emerald" | "slate";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  asChild?: boolean;
}

const variantMap: Record<ButtonVariant, string> = {
  amber: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-amber-500/20",
  blue: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20",
  emerald: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-emerald-500/20",
  slate: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20",
};

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ children, variant = "amber", className, asChild, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3 font-bold text-sm shadow-lg transition-all duration-300",
          "hover:scale-[1.02] active:scale-95",
          variant === "amber" && "animate-pulse-glow",
          variantMap[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
GlowButton.displayName = "GlowButton";
