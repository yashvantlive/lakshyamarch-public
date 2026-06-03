import { INSTITUTE } from "@/lib/siteData";
import { districtData } from "@/lib/districtData";
import { Beaker, Hotel, FileText, HelpCircle } from "lucide-react";
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
      ? `Best IIT JEE Coaching in ${name} | ${INSTITUTE.name}`
      : `Best IIT JEE Coaching for ${name} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Crack IIT JEE with the best coaching in ${name}. ${INSTITUTE.name} provides expert faculty, comprehensive study material, and proven strategies.`
      : `Targeting IIT JEE from ${name}? Join ${INSTITUTE.name} Begusarai — expert faculty, rigorous testing, and secure hostel facilities for outstation students.`,
  };
}

export default async function IitJeePage({ params }: PageProps) {
  const { location } = await params;
  const name = slugToLocation(location);
  const isBegusarai = location === "begusarai";

  const features: SeoFeature[] = [
    { icon: Beaker, title: "In-Depth Concepts", desc: "Fundamental clarity in Physics, Chemistry, and Mathematics." },
    isBegusarai
      ? { icon: FileText, title: "Rigorous Testing", desc: "Weekly part tests and monthly cumulative tests on the latest NTA pattern." }
      : { icon: Hotel, title: "Hostel & Results", desc: `JEE selections every year. Safe hostels for ${name} outstation students.` },
    { icon: HelpCircle, title: "Doubt Resolution", desc: `Dedicated doubt sessions so no student from ${name} is left behind.` },
    { icon: FileText, title: "NTA Pattern Tests", desc: "All-India test series benchmarked to the real JEE difficulty." },
  ];

  const faqs = [
    { q: `Why is LakshyaMarch the best for IIT-JEE aspirants from ${name}?`, a: `With an elite faculty pool, high-quality material, and rigorous mock tests aligned to NTA standards, we provide the best ecosystem for JEE aspirants from ${name}.` },
    { q: `When do the new JEE batches start for ${name} students?`, a: "New batches for Class 11, 12, and droppers commence between March and June. Register early via the Admission portal." },
  ];

  return (
    <SeoLocationPage
      accent="blue"
      eyebrow="Our JEE Strategy"
      badgeText="JEE Main & Advanced"
      title={`Best IIT-JEE Coaching for ${name}`}
      accentWord="Students"
      lead={
        isBegusarai
          ? `Join the most trusted IIT-JEE preparation institute for ${name} students. We build strong fundamentals to ensure top ranks in JEE Main and Advanced.`
          : `Crack IIT-JEE at our Begusarai campus — top-tier faculty, consistent results, and secure hostel facilities for students from ${name}.`
      }
      featuresTitle={`Our JEE Approach for ${name}`}
      features={features}
      faqs={faqs}
      primaryCta={{ label: isBegusarai ? "Join JEE Batch" : "Join Begusarai Campus", href: "/admission" }}
      secondaryCta={{ label: isBegusarai ? "Take Free Mock Test" : "Hostel Facility", href: "/free-test" }}
    />
  );
}
