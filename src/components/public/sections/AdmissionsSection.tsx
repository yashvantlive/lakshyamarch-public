"use client";

import React from "react";
import { ClipboardList, Users, BadgeCheck, CalendarDays, Phone } from "lucide-react";
import { SectionHeader, Stagger, StaggerItem, Reveal, Button } from "@/components/brand";
import { INSTITUTE } from "@/lib/siteData";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const ADMISSION_STEPS = [
  { icon: ClipboardList, step: "01", title: "Enquire", desc: "Fill the form, call, or WhatsApp. Our counsellor responds within 2 hours." },
  { icon: Users, step: "02", title: "Counselling", desc: "Free 1-on-1 session to assess goals and choose the right batch." },
  { icon: BadgeCheck, step: "03", title: "Confirm Seat", desc: "Submit documents, complete registration, and your seat is secured." },
];

export default function AdmissionsSection() {
  return (
    <section className={cn(layout.section, "bg-ink-50")}>
      <div className={layout.containerMedium}>
        <SectionHeader
          eyebrow="Admissions 2026–27"
          eyebrowIcon={CalendarDays}
          title="A Simple 3-Step Process"
          accentWord="Process"
          accent="blue"
          lead="We've made joining LakshyaMarch effortless. Three steps, done in 48 hours."
          className="mb-16"
        />
        <Stagger className="grid gap-6 sm:grid-cols-3">
          {ADMISSION_STEPS.map((s) => (
            <StaggerItem key={s.step} className="relative">
              <div className="relative h-full overflow-hidden rounded-lg border border-ink-200 bg-white p-6 shadow-brand-sm">
                <div className="absolute right-0 top-0 bg-ink-900 px-3 py-1.5 font-display text-sm font-extrabold text-white">
                  {s.step}
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-brand-red-600 text-white">
                  <s.icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-600">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-14 flex flex-wrap justify-center gap-4">
          <Button href="/admission" variant="primary" size="lg" withArrow magnetic>
            Start Your Application
          </Button>
          <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="outline" size="lg">
            <Phone size={18} strokeWidth={1.75} /> {INSTITUTE.primaryPhone}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
