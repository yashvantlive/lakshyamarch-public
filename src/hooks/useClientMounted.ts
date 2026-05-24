"use client";

import { useEffect, useState } from "react";

/** True only after the browser has mounted — safe for interactive forms/buttons that extensions may mutate before hydration. */
export function useClientMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
