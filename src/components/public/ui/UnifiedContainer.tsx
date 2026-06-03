import React from "react";
import { cn } from "@/lib/utils";

interface UnifiedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const UnifiedContainer: React.FC<UnifiedContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
