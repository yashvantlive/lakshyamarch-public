import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const contactFaqs = [
  { q: "What is LakshyaMarch's phone number?", a: "You can call LakshyaMarch at +91-7296050207, +91-6206323869, or +91-8603793869. WhatsApp is also available on +91-6206323869." },
  { q: "Where is LakshyaMarch located in Begusarai?", a: "LakshyaMarch is located at Dakbangla Road, Opp. Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101." },
  { q: "What are LakshyaMarch office hours?", a: "LakshyaMarch is open all days from 8:00 AM to 7:00 PM. Sundays are closed for general public." },
  { q: "How can I reach LakshyaMarch for admission enquiry?", a: "You can visit the campus directly, call any of our phone numbers, WhatsApp at +91-6206323869, or fill the online enquiry form on our website for a free counselling callback." },
];

export const metadata = {
  title: "Contact Us | Admissions & Enquiry",
  description: "Get in touch with LakshyaMarch Education Begusarai. Reach out for admissions in IIT-JEE, NEET, and Integrated Schooling. Visit our campus or call us today.",
  keywords: ["LakshyaMarch Contact Number", "Admission Enquiry Begusarai", "Coaching Center Address", "Ram Sir WhatsApp", "LakshyaMarch Location", "Office Hours"],
};

type ContactLine = { text: string; href?: string };
const CONTACT_METHODS: { icon: typeof Phone; tone: "blue" | "green" | "red" | "gold"; title: string; lines: ContactLine[] }[] = [
  { icon: Phone, tone: "blue", title: "Call Us", lines: INSTITUTE.phones.map((p) => ({ text: p, href: `tel:+91${p}` })) },
  { icon: MessageCircle, tone: "green", title: "WhatsApp", lines: [{ text: "Chat with Admission Counsellor", href: whatsappLink() }] },
  { icon: Mail, tone: "red", title: "Email", lines: [{ text: INSTITUTE.email }, { text: INSTITUTE.schoolEmail }] },
  { icon: Clock, tone: "gold", title: "Office Hours", lines: [{ text: INSTITUTE.officeHours }, { text: "Sundays closed for general public" }] },
];

const toneChip: Record<string, string> = {
  blue: "bg-brand-blue-50 text-brand-blue-700",
  green: "bg-brand-green-50 text-brand-green-600",
  red: "bg-brand-red-50 text-brand-red-600",
  gold: "bg-brand-gold-50 text-brand-gold-600",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <FaqSchema faqs={contactFaqs} />
      <PublicNavbar />

      <HeroSection accent="red" minHeight="min-h-[52vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={MapPin}>We're in Begusarai</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              Contact <span className="text-brand-gold-400">Us</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Questions about admissions, fees, or a campus tour? Our team is ready to help.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Map */}
              <Reveal>
                <div className="relative h-[420px] overflow-hidden rounded-3xl border border-ink-200 shadow-brand-lg lg:h-[560px]">
                  <iframe
                    src={INSTITUTE.mapEmbedUrl}
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="LakshyaMarch Location"
                  />
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-ink-200 bg-white p-5 shadow-brand-lg">
                    <p className="font-display font-bold text-ink-900">{INSTITUTE.name}</p>
                    <p className="mt-1 font-sans text-sm leading-snug text-ink-600">{INSTITUTE.address.full}</p>
                  </div>
                </div>
              </Reveal>

              {/* Details */}
              <Reveal delay={0.1}>
                <SectionHeader
                  align="left"
                  eyebrow="Get in Touch"
                  title="Reach Out Anytime"
                  accentWord="Anytime"
                  accent="blue"
                  lead="Whether it's a quick question or a detailed counselling request, we respond fast."
                  className="mb-8"
                />
                <Stagger className="grid gap-4 sm:grid-cols-2">
                  {CONTACT_METHODS.map((m) => (
                    <StaggerItem key={m.title}>
                      <div className="h-full rounded-2xl border border-ink-200 bg-ink-50 p-5">
                        <div className={cn("mb-3 flex h-12 w-12 items-center justify-center rounded-xl", toneChip[m.tone])}>
                          <m.icon size={22} strokeWidth={1.75} />
                        </div>
                        <h4 className="font-display font-bold text-ink-900">{m.title}</h4>
                        <div className="mt-1 space-y-0.5">
                          {m.lines.map((l, i) =>
                            l.href ? (
                              <a key={i} href={l.href} className="block font-sans text-sm text-ink-600 hover:text-brand-red-600">
                                {l.text}
                              </a>
                            ) : (
                              <p key={i} className="font-sans text-sm text-ink-600">{l.text}</p>
                            ),
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
                <div className="mt-8">
                  <Button href="/admission" variant="primary" size="lg" withArrow magnetic className="w-full sm:w-auto">
                    Fill the Admission Enquiry Form
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
