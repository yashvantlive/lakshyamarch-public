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
  "logo": "https://lakshyamarch.com/lm_logo.jpeg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "128"
  }
};

export const revalidate = 300; // Cache for 5 minutes (ISR)

async function getTestimonials() {
  try {
    // We cannot use erpApiPath here on server if NEXT_PUBLIC_ERP_API_URL isn't fully absolute,
    // but in Netlify it should be. We'll use the environment variable directly.
    const erpUrl = process.env.NEXT_PUBLIC_ERP_API_URL || "http://localhost:3000";
    const res = await fetch(`${erpUrl}/api/testimonials`, {
      next: { revalidate: 300 }
    });
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (e) {
    return [];
  }
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <TestimonialsClient initialTestimonials={testimonials} />
    </>
  );
}
