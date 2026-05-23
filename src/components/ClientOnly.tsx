"use client";

import type { ReactNode } from "react";
import { useClientMounted } from "@/hooks/useClientMounted";

type ClientOnlyProps = {
  children: ReactNode;
  /** Shown on server + first client paint (must match layout closely to avoid CLS). */
  fallback?: ReactNode;
};

/**
 * Renders children only after mount so SSR HTML is not hydrated against
 * DOM mutated by password managers / form fillers (e.g. fdprocessedid).
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const mounted = useClientMounted();
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
