import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE } from "@/lib/siteData";
import { Badge, HeroSection, Reveal } from "@/components/brand";

export const metadata = {
  title: `Privacy Policy | ${INSTITUTE.name}`,
  description: `Privacy Policy for ${INSTITUTE.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[40vh]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge tone="onDark">Legal</Badge>
          <h1 className="mt-5 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight text-white">
            Privacy <span className="text-brand-gold-400">Policy</span>
          </h1>
        </Reveal>
      </HeroSection>

      <main className="flex-1 max-w-4xl mx-auto px-5 py-16 sm:py-24">
        <div className="prose prose-slate max-w-none space-y-8 text-ink-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">1. Introduction</h2>
            <p>
              Welcome to <strong>{INSTITUTE.name}</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at {INSTITUTE.email}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when registering at the institute, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name and Contact Data (Phone Number, Email Address, etc.)</li>
              <li>Academic Information (Class, School Name, Marks)</li>
              <li>Parent/Guardian Information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Services for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you administrative information, such as course updates or fee reminders.</li>
              <li>To evaluate and improve our academic results and curriculum.</li>
              <li>To ensure safety and security within the institute premises.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">4. Data Security</h2>
            <p>
              We aim to protect your personal information through a system of organizational and technical security measures. However, please remember that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">5. Contact Us</h2>
            <p>
              If you have any questions or comments about this policy, you may email us at {INSTITUTE.email} or visit us at our office: {INSTITUTE.address.full}.
            </p>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
