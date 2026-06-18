"use client";

import { useEffect, useRef, useState } from "react";

interface LottiePlayerProps {
  animationPath: string;
  className?: string;
  assetsPath?: string;
}

export default function LottiePlayer({ animationPath, className, assetsPath }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    // Dynamic client-side import of lottie-web
    import("lottie-web").then((mod) => {
      setLottie(mod.default);
    });
  }, []);

  useEffect(() => {
    if (!lottie || !containerRef.current) return;

    // Ensure assetsPath is absolute so it doesn't resolve relative to subpages like /study-material/
    const resolvedAssetsPath = assetsPath && assetsPath.startsWith("/") 
      ? window.location.origin + assetsPath 
      : assetsPath;

    const animInstance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: animationPath,
      assetsPath: resolvedAssetsPath,
    });

    return () => {
      animInstance.destroy();
    };
  }, [lottie, animationPath, assetsPath]);

  return <div ref={containerRef} className={className} />;
}
