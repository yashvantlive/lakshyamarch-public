import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { FACULTY_COACHING, whatsappLink } from "@/lib/siteData";
import { Users } from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, FacultyCard, CTASection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

const facultyFaqs = [
  { q: "Are LakshyaMarch teachers from IIT?", a: "Yes, LakshyaMarch faculty includes graduates from IIT Kharagpur, NIT Allahabad, IIT Dhanbad, NIT Agartala, NIT Patna, and other top-tier institutes. No local-level or part-time tutors are hired." },
  { q: "How many teachers does LakshyaMarch have?", a: "LakshyaMarch has 8+ full-time dedicated faculty members covering Mathematics, Physics, Chemistry, and Biology for both JEE and NEET streams." },
  { q: "Who is the best Physics teacher at LakshyaMarch?", a: "Chandan Kumar Sir (B.Tech, NIT Agartala) is highly rated for his engaging teaching style. L.K.P. Sir (B.Tech, MIT Muzaffarpur) is also a senior Physics faculty." },
  { q: "Who teaches Biology for NEET at LakshyaMarch?", a: "Nitish Sharma Sir (AIR-82 in GATE-XL, 5 years experience) leads the Biology department. Rahul Kumar Sir (M.Sc Biotechnology, CUSB) supports with 4 years of dedicated NEET Biology teaching." },
];

export const metadata = {
  title: "Coaching Faculty | IIT-JEE & NEET Specialists",
  description: "Meet our elite coaching faculty panel consisting of IITians, NITians, and subject experts for competitive exams.",
  keywords: ["IITian Faculty", "NIT Alumni Teachers", "Physics Experts", "Chemistry Specialists", "Biology NEET Faculty", "Mathematics IIT-JEE Coaches"],
};

export default function CoachingFacultyPage() {
  const coachingFaculty = FACULTY_COACHING;

  const facultySchema = {
    "@context": "https://schema.org",
    "@graph": coachingFaculty.map((f) => ({
      "@type": "Person",
      "name": f.name,
      "jobTitle": f.role,
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "LakshyaMarch Begusarai",
        "url": "https://lakshyamarch.com"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": f.qual
      },
      "description": f.usp || `${f.name} teaches ${f.subject} at LakshyaMarch.`
    }))
  };

  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(facultySchema) }} />
      <FaqSchema faqs={facultyFaqs} />
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[58vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={Users}>Coaching Excellence</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              IIT-JEE & NEET <span className="text-brand-gold-400">Experts</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              We don't hire part-time local tutors. Every mentor is a highly experienced IITian, NITian, or subject expert holding national ranks.
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
              accent="blue"
              lead="Subject experts who have walked the path themselves and now guide the next generation."
              className="mb-14"
            />
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coachingFaculty.map((f, i) => (
                <StaggerItem key={f.name}>
                  <FacultyCard faculty={f} priority={i < 6} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <CTASection
        title="Learn From the Best"
        accentWord="Best"
        lead="Get mentored by IIT/NIT alumni who turn concepts into ranks. Admissions open for 2026–27."
        actions={[
          { label: "Apply Now", href: "/admission", variant: "primary", withArrow: true },
          { label: "Book Counselling", href: whatsappLink(), variant: "ghost", external: true },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
