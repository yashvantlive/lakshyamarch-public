"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

interface StoryContentContainerProps {
  content: string;
  contentHindi: string;
}

export default function StoryContentContainer({ content, contentHindi }: StoryContentContainerProps) {
  const [activeTab, setActiveTab] = useState<"en" | "hi">("en");

  return (
    <div className="w-full">
      {/* Language Selector Tabs */}
      <div className="flex border-b border-ink-200 mb-8 gap-6">
        <button
          onClick={() => setActiveTab("en")}
          className={cn(
            "pb-4 text-sm font-bold uppercase tracking-wider relative transition-colors focus:outline-none",
            activeTab === "en" ? "text-brand-blue-700" : "text-ink-400 hover:text-ink-600"
          )}
        >
          <span>English Article</span>
          {activeTab === "en" && (
            <span className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-blue-700 rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("hi")}
          className={cn(
            "pb-4 text-sm font-bold uppercase tracking-wider relative transition-colors focus:outline-none",
            activeTab === "hi" ? "text-brand-blue-700" : "text-ink-400 hover:text-ink-600"
          )}
        >
          <span>हिंदी संस्करण (Hindi)</span>
          {activeTab === "hi" && (
            <span className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-blue-700 rounded-full" />
          )}
        </button>
      </div>

      {/* Bilingual Content Blocks (both are in DOM for SEO Indexing) */}
      <div className="prose prose-slate prose-lg max-w-none">
        {/* English Content */}
        <div
          className={cn(
            "text-ink-700 leading-relaxed space-y-6 transition-all duration-300",
            activeTab === "en" ? "block opacity-100 transform translate-x-0" : "hidden pointer-events-none opacity-0"
          )}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Hindi Content */}
        <div
          className={cn(
            "text-ink-700 leading-relaxed space-y-6 transition-all duration-300 font-sans",
            activeTab === "hi" ? "block opacity-100 transform translate-x-0" : "hidden pointer-events-none opacity-0"
          )}
          dangerouslySetInnerHTML={{ __html: contentHindi }}
        />
      </div>
    </div>
  );
}
