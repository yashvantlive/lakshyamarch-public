"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export default function StatsCounter({ value, suffix = "", prefix = "", label, decimals = 0 }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) => 
    latest.toFixed(decimals)
  );

  return (
    <div ref={ref} className="text-center p-3 sm:p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center items-center">
      <div className="text-2xl sm:text-4xl font-black text-orange-500 mb-1 flex items-center justify-center flex-wrap leading-tight">
        {prefix}
        <motion.span>{displayValue}</motion.span>
        {suffix && <span className="ml-1 text-xs sm:text-2xl opacity-90">{suffix}</span>}
      </div>
      <div className="text-[10px] sm:text-sm font-bold text-blue-200 uppercase tracking-[0.1em] sm:tracking-widest leading-tight">{label}</div>
    </div>
  );
}
