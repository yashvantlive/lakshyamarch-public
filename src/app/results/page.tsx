import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE } from "@/lib/siteData";
import ResultsPageContent from "@/components/results/ResultsPage";

const resultsFaqs = [
  { q: "What is LakshyaMarch's best JEE result?", a: "Akhnavya scored 99.35 percentile in JEE Main 2025 and got admitted to NIT Trichy. Multiple students secured admissions in IIT Bhilai, IIT Roorkee, IIT Hyderabad, NIT Durgapur, and other top-ranked institutes." },
  { q: "What is LakshyaMarch's best NEET result?", a: "Aradhya Bharti achieved AIR 499 in NEET 2025 with a score of 619/720 and got admitted to ABVIMS Delhi. Abhijeet scored 685/720 in NEET 2024." },
  { q: "How many students from LakshyaMarch got into IIT?", a: "Multiple LakshyaMarch students have secured IIT admissions including IIT Bhilai, IIT Roorkee, and IIT Hyderabad. Students have also been selected in top NITs and IIITs across India." },
  { q: "What are LakshyaMarch board exam results?", a: "In CBSE Class 10, top scorers include Priyanshu Kumar (98%) and Ayush Kumar (93%). ICSE topper Arpit Bhardwaj scored 96.8%. In CBSE 12th, Tannu Kumari topped with 92.2%." },
];

export const metadata = {
  title: "IIT-JEE & NEET Results | Hall of Fame",
  description: "Check out our historic success in NEET UG, JEE Main & Advanced, and Board exams. Year after year, LakshyaMarch produces city toppers in Begusarai.",
  keywords: ["NEET 2025 Toppers", "JEE Main Percentile Stars", "CBSE 12th Board Results", "ICSE 10th Toppers", "Academic Success Begusarai", "LM Hall of Fame"],
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FaqSchema faqs={resultsFaqs} />
      <PublicNavbar />
      <main className="flex-1">
        <ResultsPageContent />
      </main>
      <PublicFooter />
    </div>
  );
}
