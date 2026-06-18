import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import ModulesClient from "@/components/public/ModulesClient";

export const metadata = {
  title: "JEE & NEET Course Booklets | LakshyaMarch Education",
  description: "Examine LakshyaMarch's curriculum booklets for IIT-JEE and NEET prep. Created by IIT & NIT alumni for deep conceptual clarity and extensive practice.",
  keywords: ["JEE study material", "NEET study booklets", "LakshyaMarch modules", "NEET Chemistry booklet", "IIT-JEE Physics modules"],
};

export default function StudyMaterialModules() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <ModulesClient />
      <PublicFooter />
    </div>
  );
}
