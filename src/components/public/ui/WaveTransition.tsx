import React from "react";
import { cn } from "@/lib/utils";

interface WaveTransitionProps {
  className?: string;
  fillColor?: string;
  position?: "top" | "bottom";
}

export const WaveTransition: React.FC<WaveTransitionProps> = ({ 
  className, 
  fillColor = "#f8fafc", 
  position = "bottom" 
}) => {
  return (
    <div className={cn("absolute left-0 right-0 overflow-hidden", position === "bottom" ? "bottom-0" : "top-0 rotate-180", className)}>
      <div className="w-[200%] animate-[wave_8s_ease-in-out_infinite] origin-bottom relative flex">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50%] h-full shrink-0">
          <path d="M0 96L60 85C120 75 240 53 360 48C480 43 600 53 720 64C840 75 960 85 1080 80C1200 75 1320 53 1380 43L1440 32V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V96Z" fill={fillColor} />
        </svg>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50%] h-full shrink-0">
          <path d="M0 32L60 43C120 53 240 75 360 80C480 85 600 75 720 64C840 53 960 43 1080 48C1200 53 1320 75 1380 85L1440 96V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V32Z" fill={fillColor} />
        </svg>
      </div>
    </div>
  );
};
