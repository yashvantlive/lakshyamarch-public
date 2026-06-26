"use client";

import React from "react";
import { Users } from "lucide-react";
import { SectionHeader, FacultyCard, Stagger, StaggerItem, Reveal, Button } from "@/components/brand";
import { FACULTY_COACHING } from "@/lib/siteData";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export default function FacultySection() {
  return (
    <section id="faculty" className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="Faculty Excellence"
          eyebrowIcon={Users}
          title="India's Top-Tier Educators"
          accentWord="Educators"
          accent="blue"
          lead="No part-time local tutors. Our entire panel consists of experienced IITians, NITians, and national-rank subject experts."
          className="mb-14"
        />
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY_COACHING.slice(0, 4).map((f) => (
            <StaggerItem key={f.name}>
              <FacultyCard faculty={f} compact />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button href="/faculty/coaching" variant="secondary" size="md" withArrow>
            Meet Coaching Faculty
          </Button>
          <Button href="/faculty/school" variant="outline" size="md" withArrow>
            Meet School Faculty
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
