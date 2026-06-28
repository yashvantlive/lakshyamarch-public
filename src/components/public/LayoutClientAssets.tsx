"use client";

import React from "react";
import dynamic from "next/dynamic";

const FloatingCTA = dynamic(() => import("./FloatingCTA"), { ssr: false });
const ScrollProgress = dynamic(() => import("../brand/ScrollProgress"), { ssr: false });

export default function LayoutClientAssets() {
  return (
    <>
      <ScrollProgress />
      <FloatingCTA />
    </>
  );
}
