import { INSTITUTE } from "@/lib/siteData";
import { districtData } from "@/lib/districtData";
import { Dna, Hotel, Stethoscope, BarChart } from "lucide-react";
import SeoLocationPage, { slugToLocation, type SeoFeature } from "@/components/public/SeoLocationPage";

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  const params: { location: string }[] = [];
  districtData.forEach((district) => {
    params.push({ location: district.english.toLowerCase().replace(/[^a-z0-9]+/g, "-") });
    district.blocks.forEach((block) => {
      params.push({ location: block.english.split("/")[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, "-") });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { location } = await params;
  const name = slugToLocation(location);
  const isBegusarai = location === "begusarai";
  return {
    title: isBegusarai
      ? `Best NEET Coaching in ${name} | ${INSTITUTE.name}`
      : `Best NEET Coaching for ${name} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Achieve your dream of becoming a doctor with the best NEET coaching in ${name}. ${INSTITUTE.name} offers top faculty, NCERT-focused material, and a rigorous test series.`
      : `Dreaming of cracking NEET from ${name}? Join ${INSTITUTE.name} Begusarai for a competitive environment and dedicated hostel facilities for future doctors.`,
  };
}

export default async function NeetPage({ params }: PageProps) {
  const { location } = await params;
  const name = slugToLocation(location);
  const isBegusarai = location === "begusarai";

  const features: SeoFeature[] = [
    { icon: Dna, title: "NCERT Focused", desc: "Line-by-line coverage of NCERT Biology, Physics, and Chemistry." },
    isBegusarai
      ? { icon: Stethoscope, title: "Expert Mentorship", desc: "Guidance from seasoned NEET educators and subject specialists." }
      : { icon: Hotel, title: "Hostel & Results", desc: `We produce doctors every year. Safe, dedicated hostels for ${name} outstation students.` },
    { icon: BarChart, title: "All-India Test Series", desc: "Benchmark your performance against aspirants across the country." },
    { icon: Stethoscope, title: "Daily MCQ Practice", desc: `Structured daily Biology practice to sharpen accuracy for ${name} aspirants.` },
  ];

  const faqs = [
    { q: `Is ${INSTITUTE.name} the right choice for NEET aspirants from ${name}?`, a: `Yes. We run specialized batches strictly aligned to the latest NTA NEET syllabus, ensuring maximum selections for students from ${name}.` },
    { q: "Do you provide NCERT based study material?", a: "Absolutely. Our material is designed to cover every concept, diagram, and summary of the NCERT textbooks." },
  ];

  return (
    <SeoLocationPage
      accent="green"
      eyebrow="Why NEET Aspirants Choose Us"
      badgeText="NEET-UG Preparation"
      title={`Best NEET Coaching for ${name}`}
      accentWord="Students"
      lead={
        isBegusarai
          ? `Empowering the future doctors of ${name}. Get the finest NCERT-based curriculum and a competitive environment to score 650+ in NEET.`
          : `Aiming for 650+ in NEET? Move to our Begusarai campus — a highly competitive environment, proven results, and premium hostel facilities for ${name} students.`
      }
      featuresTitle={`Why ${name} Aspirants Choose Us`}
      features={features}
      faqs={faqs}
      primaryCta={{ label: isBegusarai ? "Enroll for NEET" : "Join Begusarai Campus", href: "/admission" }}
      secondaryCta={{ label: isBegusarai ? "Scholarship Exam" : "Hostel Facility", href: "/scholarship" }}
    />
  );
}
