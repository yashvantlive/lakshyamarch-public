"use client";

import React from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";
import { SectionHeader, ProgramCard, Stagger, StaggerItem } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export default function EcosystemSection() {
  return (
    <section id="programs" className={cn(layout.section, "bg-ink-50")}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="The Academic Ecosystem"
          eyebrowIcon={Sparkles}
          title="One Institute, Complete Journey"
          accentWord="Journey"
          accent="blue"
          lead="From foundational schooling to hardcore competitive preparation — choose the path that fits your goal."
          className="mb-14"
        />
        <Stagger className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <StaggerItem>
            <ProgramCard
              title="LM Integrated School"
              subtitle="Class 6 to 10"
              icon={GraduationCap}
              accentColor="blue"
              target="A revolutionary model where rigorous board prep meets foundation coaching — one fee, two benefits."
              features={[
                "School + coaching under one roof",
                "Built-in self-study time",
                "Moral & personal finance education",
                "No separate travel for coaching",
              ]}
              href="/programs"
              ctaLabel="Explore School Wing"
            />
          </StaggerItem>
          <StaggerItem>
            <ProgramCard
              title="LakshyaMarch Coaching"
              subtitle="IIT-JEE · NEET · Foundation"
              icon={Target}
              accentColor="red"
              target="Expert mentorship by IIT/NIT alumni for India's toughest exams, with dedicated dropper batches."
              features={[
                "IIT-JEE (Main + Advanced)",
                "NEET-UG medical track",
                "1-year dropper batches",
                "ThinkNEET test series",
              ]}
              href="/programs"
              ctaLabel="Explore Coaching"
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
