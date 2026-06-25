import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { FACULTY_SCHOOL, whatsappLink } from "@/lib/siteData";
import { Users } from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, FacultyCard, CTASection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const facultyFaqs = [
  { q: "Are LakshyaMarch teachers from IIT?", a: "Yes, LakshyaMarch faculty includes graduates from IIT Kharagpur, NIT Allahabad, IIT Dhanbad, NIT Agartala, NIT Patna, and other top-tier institutes. No local-level or part-time tutors are hired." },
  { q: "How many teachers does LakshyaMarch have?", a: "LakshyaMarch has 8+ full-time dedicated faculty members covering Mathematics, Physics, Chemistry, and Biology for both JEE and NEET streams." },
];

export const metadata = {
  title: "School Faculty | LakshyaMarch Education",
  description: "Meet our dedicated school faculty panel consisting of subject experts building strong foundations for young minds.",
};

export default function SchoolFacultyPage() {
  const schoolFaculty = FACULTY_SCHOOL;

  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <FaqSchema faqs={facultyFaqs} />
      <PublicNavbar />

      <HeroSection accent="red" minHeight="min-h-[58vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={Users}>School Foundation</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              Our School <span className="text-brand-gold-400">Educators</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Expert mentors dedicated to building a rock-solid foundation for school students, preparing them early for future competitive success.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="The Panel"
              title="Meet Our Mentors"
              accentWord="Mentors"
              accent="red"
              lead="Dedicated educators focusing on deep conceptual clarity and academic excellence for school students."
              className="mb-14"
            />
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {schoolFaculty.map((f, i) => (
                <StaggerItem key={f.name}>
                  <FacultyCard faculty={f} priority={i < 6} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <CTASection
        title="Start Early, Lead Tomorrow"
        accentWord="Tomorrow"
        lead="Join our integrated school programs and build a solid foundation with expert faculty."
        actions={[
          { label: "Apply Now", href: "/admission", variant: "primary", withArrow: true },
          { label: "Book Counselling", href: whatsappLink(), variant: "ghost", external: true },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
