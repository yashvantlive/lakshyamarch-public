import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";
import { INSTITUTE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Student Reviews & Testimonials | LakshyaMarch Begusarai",
  description:
    "Read real success stories and reviews from students of LakshyaMarch Education Begusarai. See why we are the highest-rated coaching for JEE and NEET.",
  keywords: [
    "LakshyaMarch reviews",
    "coaching testimonials Begusarai",
    "student feedback LakshyaMarch",
    "best JEE coaching reviews",
    "NEET result testimonials Bihar",
  ],
  alternates: { canonical: "/testimonials" },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": INSTITUTE.name,
  "url": "https://lakshyamarch.com",
  "logo": "https://lakshyamarch.com/logo.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "128"
  }
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <TestimonialsClient />
    </>
  );
}
