import type { Metadata } from "next";
import HomeClient from "@/components/public/HomeClient";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE } from "@/lib/siteData";
import { erpApiPath } from "@/lib/erpApi";

export const metadata: Metadata = {
  title: "LakshyaMarch Education Begusarai | IIT JEE | NEET | 11th, 12th (CBSE/ICSE BOARD) | Foundation (Class 6-10)",
  description:
    "Begusarai's #1 Coaching Institute — IIT JEE, NEET, 11th, 12th, CBSE/ICSE Board & Foundation (Class 6-10). 100+ Selections, 4.9/5 Rating, IIT/NIT Faculty. Join the success story.",
  keywords: [
    "LakshyaMarch",
    "Begusarai coaching",
    "IIT JEE coaching Begusarai",
    "NEET coaching Begusarai",
    "CBSE/ICSE Board preparation",
    "Best coaching Begusarai Bihar",
    "Integrated school model",
    "Ram Sir Begusarai"
  ],
  openGraph: {
    title: "LakshyaMarch Education | Best Coaching in Begusarai",
    description: "100+ IIT/NEET Selections. Begusarai's most trusted coaching — IIT JEE, NEET, 11th, 12th Board, Foundation. 4.9/5 Rating | 104 Google Reviews.",
    images: ["/og-image.jpg"],
  },
};

const homeFaqs = [
  { q: "What is LakshyaMarch Education?", a: "LakshyaMarch Education is Begusarai's premier coaching institute offering IIT-JEE, NEET-UG coaching and an integrated school model (Class 6-10). Founded in 2019 by Ram Kumar Sir (IIT Kharagpur), it has produced 99.35 percentile JEE and AIR 499 NEET results." },
  { q: "What courses does LakshyaMarch offer?", a: "LakshyaMarch offers: (1) LM Integrated School for Class 6-10, (2) IIT-JEE Main + Advanced coaching for Class 11-12, (3) NEET-UG coaching, (4) Foundation batches for Class 7-10, and (5) Dropper batches for JEE & NEET." },
  { q: "Is LakshyaMarch good for IIT-JEE?", a: "Yes, LakshyaMarch students have achieved 99.35 percentile in JEE Main 2025 and secured admissions in IIT Bhilai, IIT Roorkee, NIT Trichy, and other top engineering institutes. Faculty includes IIT/NIT alumni." },
  { q: "Who is the founder of LakshyaMarch?", a: "Ram Kumar Sir, a B.Tech graduate from IIT Kharagpur (1998-2002) and PMP certified from PMI USA (2011), founded LakshyaMarch in 2019 with the vision of bringing top-tier education to Begusarai." },
  { q: "Where is LakshyaMarch located?", a: "LakshyaMarch is located at Dakbangla Road, Opp. Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101. It is easily accessible from all parts of the city." },
  { q: "How to take admission in LakshyaMarch?", a: "You can apply by filling the online enquiry form on our website, calling +91-6206323869, or visiting the campus directly. A free counselling session will guide you to the right batch." },
];


async function getRecentBlogs() {
  try {
    const res = await fetch(erpApiPath("/api/public/blogs"), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data.slice(0, 3) : [];
  } catch (error) {
    return [];
  }
}

export default async function LandingPage() {
  const recentBlogs = await getRecentBlogs();
  return (
    <>
      <FaqSchema faqs={homeFaqs} />
      <HomeClient recentBlogs={recentBlogs} />
    </>
  );
}
