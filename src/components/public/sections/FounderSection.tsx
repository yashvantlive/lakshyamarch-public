"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, BadgeCheck, Quote } from "lucide-react";
import { Reveal, Badge, Button } from "@/components/brand";
import { INSTITUTE, FOUNDER, whatsappLink } from "@/lib/siteData";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export default function FounderSection() {
  return (
    <section id="founder" className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-ink-200 bg-white p-6 shadow-brand-sm">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-md border border-ink-200">
                {FOUNDER.image ? (
                  <Image src={FOUNDER.image} alt={FOUNDER.name} fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover object-top" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-blue-100 font-display text-5xl font-extrabold text-brand-blue-700">
                    {FOUNDER.name.charAt(0)}
                  </div>
                )}
                <div className="absolute right-0 top-3 flex flex-col items-center justify-center bg-brand-gold-400 px-3 py-1.5 text-ink-900 shadow-brand-sm">
                  <span className="font-sans text-[0.5rem] font-bold uppercase tracking-[0.18em] opacity-70">Estd</span>
                  <span className="font-display text-base font-extrabold leading-none">{INSTITUTE.established}</span>
                </div>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-ink-900">{FOUNDER.name}</h3>
              <p className="mt-1 font-sans text-sm font-bold uppercase tracking-[0.14em] text-brand-blue-700">{FOUNDER.designation}</p>
              <div className="mt-5 space-y-2 border-t border-ink-100 pt-4">
                <p className="flex items-start gap-2 font-sans text-sm text-ink-600">
                  <GraduationCap size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-blue-700" />
                  {FOUNDER.qualification}
                </p>
                <p className="flex items-start gap-2 font-sans text-sm text-ink-600">
                  <BadgeCheck size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-green-600" />
                  {FOUNDER.certification}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <Badge tone="gold">From the Founder&apos;s Desk</Badge>
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-tight text-ink-900">
                A Message from <span className="text-brand-red-600">Ram Sir</span>
              </h2>
              <div className="mt-7 border-l-4 border-brand-gold-400 pl-6">
                <Quote size={28} strokeWidth={1.5} className="mb-2 text-brand-gold-300" />
                <p className="font-sans text-lg italic leading-relaxed text-ink-700">{FOUNDER.message}</p>
              </div>
              <p className="mt-7 max-w-2xl font-sans leading-relaxed text-ink-600">
                We started LakshyaMarch in {INSTITUTE.established} with a simple goal:{" "}
                <strong className="text-ink-900">quality education with no compromises.</strong> Today we bring
                premier JEE & NEET standards to {INSTITUTE.address.city} through our integrated school model — so
                students never have to leave home for top-tier education.
              </p>
              <div className="mt-9">
                <Button href={whatsappLink()} variant="dark" size="md" withArrow target="_blank" rel="noopener noreferrer">
                  Connect with Ram Sir
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
