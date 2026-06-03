import type { Metadata } from "next";
import ProgramsClient from "@/components/public/ProgramsClient";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Academic Programs 2026-2027 | Schooling & Coaching",
  description:
    "Explore our integrated schooling (Class 6-10) and competitive coaching (JEE/NEET) programs. Designed for academic excellence and balanced growth in Begusarai.",
  keywords: ["Integrated Schooling", "IIT-JEE Coaching", "NEET Preparation", "Foundation Batches", "2-Year JEE Program", "Dropper Batch Begusarai"],
  openGraph: {
    title: "Academic Programs | LakshyaMarch Begusarai",
    description: "Integrated Schooling and Competitive Coaching programs in Begusarai.",
    type: "website",
  },
};

const programFaqs = [
  { q: "What programs does LakshyaMarch offer?", a: "LakshyaMarch offers two main wings: (1) LM Integrated School — Class 6 to 10 with combined board + foundation coaching, and (2) Coaching Wing — IIT-JEE, NEET-UG, Foundation (Class 7-10), and Dropper batches." },
  { q: "What is the LM Integrated School model?", a: "LM Integrated School combines regular CBSE/ICSE curriculum with IIT-JEE/NEET foundation coaching under one roof. Students attend school 8 AM to 2 PM, get built-in self-study time, and don't need separate coaching — saving time and money." },
  { q: "Is there a dropper batch at LakshyaMarch?", a: "Yes, dedicated 1-Year Dropper Batches are available for both JEE Main+Advanced and NEET-UG. These start in May 2026 with intensive revision, test series, and personalized doubt sessions." },
  { q: "What is the timing of LakshyaMarch coaching?", a: "LM Integrated School runs from 8 AM to 2 PM. Coaching batches have flexible timings. The institute operates all days, 8 AM – 7 PM." },
  { q: "How many batches are available?", a: "LakshyaMarch offers 15+ batches across both wings — School (Class 6-10, 5 batches), Foundation Coaching (Class 7-10, 4 batches), JEE (3 batches), NEET (3 batches), and Dropper (2 batches)." },
];

export default function ProgramsPage() {
  return (
    <>
      <FaqSchema faqs={programFaqs} />
      <ProgramsClient />
    </>
  );
}
