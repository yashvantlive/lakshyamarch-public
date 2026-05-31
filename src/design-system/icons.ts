/**
 * LakshyaMarch Icon System.
 * Lucide React only. No emoji anywhere on the site.
 *
 * `iconDefaults` are applied centrally so every icon has stroke 1.75 and a
 * consistent size. The `emojiReplacements` map documents the canonical Lucide
 * replacement for each emoji removed during the redesign.
 */

import type { LucideProps } from "lucide-react";

export const iconSize = {
  inline: 18,
  default: 24,
  feature: 32,
  hero: 48,
} as const;

export const iconStrokeWidth = 1.75;

/** Spread onto any Lucide icon for brand-consistent rendering. */
export const iconDefaults: Partial<LucideProps> = {
  strokeWidth: iconStrokeWidth,
  size: iconSize.default,
  absoluteStrokeWidth: false,
};

/**
 * Canonical emoji → Lucide name map used while purging emojis.
 * (Reference for reviewers; components import the actual Lucide component.)
 */
export const emojiReplacements: Record<string, string> = {
  "📍": "MapPin",
  "📞": "Phone",
  "📧": "Mail",
  "📅": "CalendarDays",
  "🎯": "Target",
  "⚡": "Zap",
  "🔥": "Flame",
  "🩺": "Stethoscope",
  "⚙️": "Settings",
  "📚": "BookOpen",
  "📖": "BookText",
  "🏆": "Trophy",
  "🥇": "Medal",
  "🥈": "Medal",
  "🥉": "Medal",
  "⭐": "Star",
  "🌟": "Sparkles",
  "✅": "CheckCircle2",
  "✓": "Check",
  "🎓": "GraduationCap",
  "📋": "ClipboardList",
  "📊": "BarChart3",
  "👨‍🏫": "Users",
  "🤝": "Handshake",
  "❤️": "Heart",
  "🎉": "PartyPopper",
  "📱": "Smartphone",
  "🏠": "Home",
  "🍽️": "UtensilsCrossed",
  "👮": "ShieldCheck",
  "📷": "ImageIcon",
  "📢": "Megaphone",
} as const;

export const icons = { iconSize, iconStrokeWidth, iconDefaults, emojiReplacements } as const;

export default icons;
