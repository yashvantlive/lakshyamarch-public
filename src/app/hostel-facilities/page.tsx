import { INSTITUTE } from "@/lib/siteData";
import AdmissionEnquiryForm from "@/components/public/AdmissionEnquiryForm";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import {
  Home, UtensilsCrossed, ShieldCheck, BookOpen, CheckCircle2, MapPin, Phone, Bed,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, FAQSection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata = {
  title: `Premium Hostel & Boarding Facilities | ${INSTITUTE.name}`,
  description: `Safe, secure, and study-focused boarding accommodations at ${INSTITUTE.name} Begusarai for outstation students preparing for IIT-JEE and NEET.`,
};

const AMENITIES = [
  { icon: Home, title: "Spacious Boarding", desc: "Well-ventilated single and double-sharing rooms with personal study tables, comfortable bedding, and storage." },
  { icon: UtensilsCrossed, title: "Hygienic Dining", desc: "A clean mess serving 4 nutritious, fresh, balanced meals daily — tailored for student health." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Full CCTV surveillance, security guards, and resident wardens ensure a secure environment." },
  { icon: BookOpen, title: "Study Atmosphere", desc: "Structured self-study hours and strict silent timings guarantee zero distractions during prep." },
];

const DINING = [
  "4 fresh meals served daily",
  "Seasonal vegetable varieties & milk",
  "RO water purifier systems",
  "Clean dining hall & kitchen audits",
];

const SAFETY = [
  "24/7 resident wardens on campus",
  "Biometric attendance monitoring",
  "First-aid & tie-up with local hospitals",
  "Strict check-out & parent authorization",
];

const hostelFaqs = [
  { q: "Are laundry services available in the hostel?", a: "Yes, laundry facilities and washing areas are provided for all hostellers. Regular collection and drop schedules are maintained by campus staff." },
  { q: "What are the silent hours in the hostel?", a: "To facilitate effective study, strict silent hours are observed from 9:30 PM to 6:00 AM. Absolute quiet is maintained in corridors and study areas." },
  { q: "Can parents visit students during weekends?", a: "Parents and authorized guardians may visit on Sundays during specified hours. Overnight stays for parents can be arranged with prior warden approval." },
];

export default function HostelPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[58vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Badge tone="onDark" icon={Bed}>A Home Away From Home</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              Premium <span className="text-brand-gold-400">Hostel Facilities</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              A safe, disciplined, distraction-free environment so outstation students can focus entirely on their
              IIT-JEE and NEET goals.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Amenities" title="Designed for Academic Focus" accentWord="Focus" accent="blue" className="mb-14" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {AMENITIES.map((a) => (
                <StaggerItem key={a.title}>
                  <div className="h-full rounded-2xl border border-ink-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                      <a.icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{a.title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-ink-500">{a.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={cn(layout.container, "grid gap-8 lg:grid-cols-2")}>
            <Reveal>
              <FeaturePanel icon={UtensilsCrossed} title="Nutritious Mess & Dietary Hygiene" lead="Good health is essential for intensive study. Our mess runs under strict cleanliness guidelines with filtered drinking water and periodic menu changes." items={DINING} accent="green" />
            </Reveal>
            <Reveal delay={0.1}>
              <FeaturePanel icon={ShieldCheck} title="Safety, Discipline & Medical Care" lead="We prioritize well-being. A resident warden is always on-site to assist with personal concerns or emergency medical situations." items={SAFETY} accent="red" />
            </Reveal>
          </div>
        </section>

        {/* Booking */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={cn(layout.container, "grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16")}>
            <Reveal>
              <SectionHeader align="left" eyebrow="Reserve a Seat" title="Book Your Hostel Seat" accentWord="Seat" accent="blue" className="mb-6" />
              <p className="font-sans leading-relaxed text-ink-500">
                Hostel seats are limited and allocated on a first-come, first-served basis to outstation students
                enrolled in our 1-Year or 2-Year classroom courses. Fill the form and our admissions desk will guide
                you on fees, check-in checklists, and room availability.
              </p>
              <div className="mt-8 space-y-3 rounded-2xl border-l-4 border-brand-blue-700 bg-ink-50 py-5 pl-6 pr-4">
                <p className="flex items-center gap-3 font-sans font-semibold text-ink-700">
                  <Phone size={18} strokeWidth={1.75} className="text-brand-blue-700" /> Helpdesk: {INSTITUTE.primaryPhone}
                </p>
                <p className="flex items-center gap-3 font-sans font-semibold text-ink-700">
                  <MapPin size={18} strokeWidth={1.75} className="text-brand-blue-700" /> Dakbangla Road Campus, Begusarai
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-ink-950 p-2 shadow-brand-xl">
                <AdmissionEnquiryForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <FAQSection faqs={hostelFaqs} eyebrow="Hostel FAQs" title="Boarding, Answered" accentWord="Answered" accent="blue" />

      <PublicFooter />
    </div>
  );
}

function FeaturePanel({
  icon: Icon, title, lead, items, accent,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  lead: string;
  items: string[];
  accent: "green" | "red";
}) {
  const chip = accent === "green" ? "bg-brand-green-50 text-brand-green-600" : "bg-brand-red-50 text-brand-red-600";
  return (
    <div className="h-full rounded-3xl border border-ink-200 bg-white p-8 shadow-brand-sm sm:p-10">
      <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-xl", chip)}>
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-2xl font-extrabold text-ink-900">{title}</h3>
      <p className="mt-4 font-sans leading-relaxed text-ink-500">{lead}</p>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-3 font-sans text-ink-700">
            <CheckCircle2 size={18} strokeWidth={1.75} className="shrink-0 text-brand-green-500" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
