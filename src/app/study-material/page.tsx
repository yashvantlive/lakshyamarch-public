import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import StudyHubClient from "@/components/public/StudyHubClient";

export const metadata = {
  title: "Study Material & DPP Portal | LakshyaMarch Education",
  description: "Explore LakshyaMarch's unified study hub for free Concept Notes, Formula Sheets, and Daily Practice Problems (DPP) for JEE and NEET.",
  keywords: ["JEE DPP", "NEET DPP", "Mole Concept DPP", "Physics Formula Sheet", "LakshyaMarch Study Material"],
};

export default function StudyMaterialHub() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <StudyHubClient />
      <PublicFooter />
    </div>
  );
}
