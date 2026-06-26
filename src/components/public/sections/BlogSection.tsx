"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { SectionHeader, Stagger, StaggerItem, Reveal, Button } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

interface BlogSectionProps {
  blogs: any[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  return (
    <section className={cn(layout.section, "bg-ink-50")}>
      <div className={layout.container}>
        <SectionHeader
          eyebrow="Latest Articles & Insights"
          eyebrowIcon={BookOpen}
          title="From the LakshyaMarch Desk"
          accentWord="Desk"
          accent="gold"
          lead="Read our latest strategies, preparation tips, and success guides to stay ahead in your JEE and NEET journey."
          className="mb-14"
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <StaggerItem key={blog.slug} className="flex relative">
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-brand-sm transition-all hover:shadow-brand-md hover:-translate-y-1">
                <div className={cn("h-2 w-full bg-gradient-to-r", blog.heroColor)} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between font-sans text-xs font-semibold uppercase tracking-wider text-ink-500">
                    <span className="text-brand-red-600">{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold leading-tight text-ink-900 group-hover:text-brand-red-600">
                    <Link href={`/blog/${blog.slug}`} className="before:absolute before:inset-0">
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="mb-6 line-clamp-3 font-sans text-sm text-ink-600">{blog.description}</p>
                  <div className="mt-auto pt-4 border-t border-ink-100 flex items-center justify-between relative z-10">
                    <span className="font-sans text-xs font-medium text-ink-600">{blog.author}</span>
                    <span className="flex items-center text-sm font-semibold text-brand-red-600">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/blog" variant="outline" size="md" withArrow>
            View All Articles
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
