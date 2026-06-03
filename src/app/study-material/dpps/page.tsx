import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import DPPExplorerClient from "@/components/public/DPPExplorerClient";

export const metadata = {
  title: "DPP & Assignments Explorer | LakshyaMarch Education",
  description: "Browse subject-wise and chapter-wise Daily Practice Problems (DPP) for Class 11, 12, and Foundation. Professional internal viewer for seamless academic practice.",
  keywords: ["Mole Concept DPP", "Chemistry Practice Problems", "Class 11 Science DPP", "LakshyaMarch DPP Explorer"],
};

export default function DPPExplorerPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PublicNavbar />
      <DPPExplorerClient />
      <PublicFooter />
    </div>
  );
}
