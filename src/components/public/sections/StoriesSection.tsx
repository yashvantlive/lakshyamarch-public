"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { SectionHeader, TestimonialCard, Stagger, StaggerItem, Reveal, Button } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

interface StoriesSectionProps {
  stories: { name: string; content: string; studentClass: string; result: string }[];
}

export default function StoriesSection({ stories }: StoriesSectionProps) {
  return (
    <section className={cn(layout.section, "bg-white")}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="Student Success Stories"
          eyebrowIcon={Sparkles}
          title="Dreams Turned Into Reality"
          accentWord="Reality"
          accent="green"
          lead="Hear from achievers who turned disciplined preparation into life-changing ranks — right here in Begusarai."
          className="mb-14"
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <StaggerItem key={s.name}>
              <TestimonialCard testimonial={s} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/success-stories" variant="outline" size="md" withArrow>
            Read All Success Stories
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
