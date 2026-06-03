import { INSTITUTE } from "@/lib/siteData";
import { districtData } from "@/lib/districtData";
import { Users, BookOpen, Hotel, Trophy } from "lucide-react";
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
      ? `Best Coaching Institute in ${name} | ${INSTITUTE.name}`
      : `Best Coaching for ${name} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Looking for the best coaching in ${name}? ${INSTITUTE.name} provides top-tier IIT-JEE, NEET, and Foundation coaching with expert faculty and proven results.`
      : `From ${name}? Join ${INSTITUTE.name} in Begusarai for premium IIT-JEE & NEET coaching with top-tier hostel facilities and proven results.`,
  };
}

export default async function GeneralCoachingPage({ params }: PageProps) {
  const { location } = await params;
  const name = slugToLocation(location);
  const isBegusarai = location === "begusarai";

  const features: SeoFeature[] = [
    { icon: Users, title: "Expert Faculty", desc: `Highly experienced IIT/NIT teachers dedicated to student success in ${name}.` },
    { icon: BookOpen, title: "Comprehensive Material", desc: "Updated study material, DPPs, and modules tailored for competitive exams." },
    isBegusarai
      ? { icon: Trophy, title: "Personalized Attention", desc: `Small batch sizes so every student in ${name} gets the attention they need.` }
      : { icon: Hotel, title: "Premium Hostel", desc: `Safe, secure, study-friendly hostel for students coming from ${name}.` },
    { icon: Trophy, title: "Proven Results", desc: `A consistent record of top IIT-JEE and NEET ranks from the ${name} region.` },
  ];

  const faqs = [
    { q: `Which is the best coaching choice for students in ${name}?`, a: `${INSTITUTE.name} is recognized as the premier choice for ${name} students, delivering consistent results in IIT-JEE, NEET, and Foundation courses.` },
    { q: `What courses does LakshyaMarch offer to students from ${name}?`, a: `We offer targeted coaching for IIT-JEE (Main & Advanced), NEET-UG, and Foundation courses for Class 8, 9, and 10 students of ${name}.` },
    { q: "How do I enroll at LakshyaMarch?", a: `Students from ${name} can apply via the Admission page, or register for our Scholarship Exam to avail up to 100% fee waiver.` },
  ];

  return (
    <SeoLocationPage
      accent="red"
      eyebrow="Why LakshyaMarch"
      badgeText="#1 Coaching Institute"
      title={`Best Coaching for ${name}`}
      accentWord="Students"
      lead={
        isBegusarai
          ? `Empowering ${name} students to achieve their dreams in IIT-JEE, NEET, and Board exams with proven methodology and top-tier faculty.`
          : `Just a short journey away, ${INSTITUTE.name} in Begusarai offers premium hostel facilities and a proven record of top results for students from ${name}.`
      }
      featuresTitle={`Why Choose Us in ${name}`}
      features={features}
      faqs={faqs}
      primaryCta={{ label: isBegusarai ? "Apply for Admission" : "Join Begusarai Campus", href: "/admission" }}
      secondaryCta={{ label: isBegusarai ? "Contact Us" : "Hostel Enquiry", href: "/contact" }}
    />
  );
}
