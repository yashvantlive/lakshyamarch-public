import React from "react";
import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "./Motion";

export type GalleryItem = { src: string; alt: string; caption?: string };

/**
 * Masked image grid for campus / poster atmosphere. Images sit under a subtle
 * ink gradient so captions stay readable and the set feels branded.
 */
export default function CampusGallery({
  items,
  className,
}: {
  items: GalleryItem[];
  className?: string;
}) {
  return (
    <Stagger className={cn("grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4", className)}>
      {items.map((item, i) => (
        <StaggerItem
          key={item.src + i}
          className={cn(
            "group relative overflow-hidden rounded-2xl bg-ink-100 shadow-brand-sm",
            // first item spans larger on wide screens for editorial rhythm
            i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/3]",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-80" />
          {item.caption && (
            <p className="absolute bottom-3 left-4 right-4 font-display text-sm font-semibold text-white drop-shadow">
              {item.caption}
            </p>
          )}
        </StaggerItem>
      ))}
    </Stagger>
  );
}
