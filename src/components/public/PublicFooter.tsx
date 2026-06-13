import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { INSTITUTE } from "@/lib/siteData";
import { ExamSheetTexture, StaircaseEmblem } from "@/design-system/patterns";
import BrandMark from "@/components/brand/BrandMark";

const NAV_COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "IIT-JEE Coaching", href: "/iit-jee-coaching-begusarai" },
      { label: "NEET Coaching", href: "/neet-coaching-begusarai" },
      { label: "Foundation & School", href: "/programs" },
      { label: "ThinkNEET Test Series", href: "/think-neet-test-series-begusarai" },
      { label: "Free Mock Test", href: "/free-test" },
      { label: "Hostel Facilities", href: "/hostel-facilities" },
    ],
  },
  {
    title: "Institute",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Faculty", href: "/faculty" },
      { label: "Results", href: "/results" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Apply 2026–27", href: "/admission" },
      { label: "Scholarship Exam", href: "/scholarship" },
      { label: "Free Mock Test", href: "/free-test" },
      { label: "Admission Counselling", href: "/admission-counselling" },
      { label: "Study Material", href: "/study-material" },
    ],
  },
];

const SOCIALS = [
  { Icon: FaYoutube, href: INSTITUTE.social.coaching.youtube, label: "YouTube" },
  { Icon: FaInstagram, href: INSTITUTE.social.coaching.instagram, label: "Instagram" },
  { Icon: FaFacebook, href: INSTITUTE.social.coaching.facebook, label: "Facebook" },
  { Icon: FaXTwitter, href: INSTITUTE.social.coaching.twitter, label: "X" },
];

export default function PublicFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-red-600 via-brand-gold-400 to-brand-red-600" />
      <ExamSheetTexture dark opacity={5} />
      <StaircaseEmblem className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 text-white/[0.04]" />

      <div className="relative z-10">
        {/* Top */}
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5">
                <BrandMark size={44} />
                <span className="leading-tight">
                  <span className="block font-display text-lg font-extrabold tracking-tight">{INSTITUTE.shortName} LakshyaMarch</span>
                  <span className="block font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em] text-brand-gold-400">
                    Estd {INSTITUTE.established}
                  </span>
                </span>
              </div>
              <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-white/60">
                {INSTITUTE.tagline}. Premier IIT-JEE, NEET & Foundation coaching with an integrated school model — all under one roof in {INSTITUTE.address.city}.
              </p>
              <div className="mt-6 flex gap-3">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-800 bg-ink-900 text-white/70 transition-all hover:border-brand-gold-400/40 hover:bg-ink-800 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {NAV_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 font-sans text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight size={13} strokeWidth={2} className="opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="mt-14 grid gap-5 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <ContactItem icon={MapPin} label="Visit Campus" value={INSTITUTE.address.full} />
            <ContactItem
              icon={Phone}
              label="Call Us"
              value={
                <span className="flex flex-col">
                  {INSTITUTE.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="hover:text-white">
                      +91 {p}
                    </a>
                  ))}
                </span>
              }
            />
            <ContactItem icon={Mail} label="Email" value={INSTITUTE.email} />
            <ContactItem icon={Clock} label="Office Hours" value={INSTITUTE.officeHours} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
            <p className="font-sans text-xs text-white/45">
              © {new Date().getFullYear()} {INSTITUTE.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="font-sans text-xs text-white/45 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-sans text-xs text-white/45 transition-colors hover:text-white">
                Terms & Conditions
              </Link>
              <a href="/login" className="font-sans text-xs font-semibold text-brand-gold-400 transition-colors hover:text-brand-gold-300">
                Portal Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink-800 bg-ink-900">
        <Icon size={17} strokeWidth={1.75} className="text-brand-gold-400" />
      </span>
      <div>
        <p className="font-sans text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white/40">{label}</p>
        <div className="mt-1 font-sans text-[0.8125rem] leading-snug text-white/70">{value}</div>
      </div>
    </div>
  );
}
