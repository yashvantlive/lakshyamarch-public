import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE } from "@/lib/siteData";
import { BlackCard, UnifiedContainer, GlassCard } from "@/components/public/ui";

export const metadata = {
  title: `Privacy Policy | ${INSTITUTE.name}`,
  description: `Privacy Policy for ${INSTITUTE.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      
      <div className="pt-12 pb-8 px-4 max-w-5xl mx-auto mt-20">
        <BlackCard glowColor="blue" className="py-12 sm:py-16 text-center rounded-[2rem]">
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-200/70 font-bold uppercase tracking-widest text-xs">Last Updated: {new Date().getFullYear()}</p>
        </BlackCard>
      </div>

      <main className="flex-1 max-w-4xl mx-auto px-5 pb-16 sm:pb-24 w-full">
        <GlassCard className="p-8 sm:p-12 prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <section className="mb-8">
            <h2 className="text-xl font-black text-slate-800 mb-4 tracking-tight">1. Introduction</h2>
            <p className="font-medium">
              Welcome to <strong>{INSTITUTE.name}</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at {INSTITUTE.email}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black text-slate-800 mb-4 tracking-tight">2. Information We Collect</h2>
            <p className="font-medium">
              We collect personal information that you voluntarily provide to us when registering at the institute, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 font-bold text-sm">
              <li>Name and Contact Data (Phone Number, Email Address, etc.)</li>
              <li>Academic Information (Class, School Name, Marks)</li>
              <li>Parent/Guardian Information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black text-slate-800 mb-4 tracking-tight">3. How We Use Your Information</h2>
            <p className="font-medium">
              We use personal information collected via our Services for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 font-bold text-sm">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you administrative information, such as course updates or fee reminders.</li>
              <li>To evaluate and improve our academic results and curriculum.</li>
              <li>To ensure safety and security within the institute premises.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black text-slate-800 mb-4 tracking-tight">4. Data Security</h2>
            <p className="font-medium">
              We aim to protect your personal information through a system of organizational and technical security measures. However, please remember that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black text-slate-800 mb-4 tracking-tight">5. Contact Us</h2>
            <p className="font-medium">
              If you have any questions or comments about this policy, you may email us at {INSTITUTE.email} or visit us at our office: {INSTITUTE.address.full}.
            </p>
          </section>
        </GlassCard>
      </main>

      <PublicFooter />
    </div>
  );
}
