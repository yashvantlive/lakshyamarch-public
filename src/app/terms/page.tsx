import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE } from "@/lib/siteData";
import { Badge, HeroSection, Reveal } from "@/components/brand";

export const metadata = {
  title: `Terms & Conditions | ${INSTITUTE.name}`,
  description: `Terms and Conditions for ${INSTITUTE.name}`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[40vh]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge tone="onDark">Legal</Badge>
          <h1 className="mt-5 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight text-white">
            Terms & <span className="text-brand-gold-400">Conditions</span>
          </h1>
        </Reveal>
      </HeroSection>

      <main className="flex-1 max-w-4xl mx-auto px-5 py-16 sm:py-24">
        <div className="prose prose-slate max-w-none space-y-8 text-ink-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">1. Services Provided</h2>
            <p>
              <strong>{INSTITUTE.name}</strong> provides educational services including, but not limited to, coaching for competitive exams (JEE, NEET), foundation courses, and integrated schooling services in Begusarai. By enrolling, you agree to comply with our academic standards and disciplinary rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">2. Enrollment and Fees</h2>
            <p>
              Admission to any course is subject to the completion of the enrollment process and payment of the prescribed fees. Fees once paid are generally non-refundable, except in cases specifically outlined in our refund policy at the time of admission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">3. Code of Conduct</h2>
            <p>
              Students and parents are expected to maintain professional and respectful behavior within the institute premises. {INSTITUTE.name} reserves the right to terminate the enrollment of any student found in violation of our disciplinary policies without refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">4. Intellectual Property</h2>
            <p>
              All study materials, notes, and online resources provided by {INSTITUTE.name} are our intellectual property and are for the exclusive use of our enrolled students. Any unauthorized distribution or commercial use of these materials is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">5. Limitation of Liability</h2>
            <p>
              While we strive to provide the highest quality of education, we do not guarantee any specific results or ranks in competitive exams. The success of a student depends on their own effort, consistency, and individual performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-900 mb-4 tracking-tight">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Changes will be updated on our website and communicated to the students where applicable.
            </p>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
