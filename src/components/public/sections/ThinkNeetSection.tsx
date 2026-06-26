"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Stethoscope, CheckCircle2 } from "lucide-react";
import { Button, BannerLabel } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export default function ThinkNeetSection() {
  const points = [
    "100% NCERT-based question patterns",
    "OMR practice + real exam simulation",
    "AIR benchmarking after every test",
    "Post-test analysis by expert faculty",
  ];
  return (
    <section className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <div className="overflow-hidden rounded-lg border border-ink-200 shadow-brand-lg">
          <div className="grid lg:grid-cols-2">
            {/* Left: solid ink color block */}
            <div className="relative overflow-hidden bg-ink-950 p-8 sm:p-12">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-green-600 via-brand-gold-400 to-brand-green-600" />
              <BannerLabel tone="green" icon={BookOpen}>ThinkNEET Test Series</BannerLabel>
              <Image
                src="/images/campaigns/think-neet/think-neet-logo.webp"
                alt="ThinkNEET"
                width={200}
                height={48}
                style={{ width: "auto", height: "auto" }}
                className="mt-6 h-12 w-auto object-contain"
              />
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-tight text-white">
                Begusarai&apos;s Most Structured <span className="text-brand-green-400">NEET</span> Test Series
              </h2>
              <p className="mt-4 max-w-xl font-sans leading-relaxed text-white/70">
                Benchmark your NEET 2027 preparation with scientifically designed mock tests, OMR practice, and
                expert-led analysis after every paper.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 font-sans text-sm text-white/80">
                    <CheckCircle2 size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-green-400" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/think-neet-test-series-begusarai" variant="gold" size="lg" withArrow magnetic>
                  Explore ThinkNEET
                </Button>
                <Button href="/neet-coaching-begusarai" variant="ghost" size="lg">
                  <Stethoscope size={18} strokeWidth={1.75} className="text-brand-green-400" /> NEET Coaching
                </Button>
              </div>
            </div>

            {/* Right: clean framed poster */}
            <div className="relative min-h-[320px] bg-ink-100">
              <Image
                src="/images/campaigns/think-neet/think-neet-poster.webp"
                alt="ThinkNEET Test Series poster"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
