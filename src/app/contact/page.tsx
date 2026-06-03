import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { BlackCard, GlassCard, AnimatedSection, GlowButton, UnifiedContainer } from "@/components/public/ui";

const contactFaqs = [
  { q: "What is LakshyaMarch's phone number?", a: "You can call LakshyaMarch at +91-7296050207, +91-6206323869, or +91-8603793869. WhatsApp is also available on +91-6206323869." },
  { q: "Where is LakshyaMarch located in Begusarai?", a: "LakshyaMarch is located at Dakbangla Road, Opp. Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101." },
  { q: "What are LakshyaMarch office hours?", a: "LakshyaMarch is open all days from 8:00 AM to 7:00 PM. Sundays are closed for general public." },
  { q: "How can I reach LakshyaMarch for admission enquiry?", a: "You can visit the campus directly, call any of our phone numbers, WhatsApp at +91-6206323869, or fill the online enquiry form on our website for a free counselling callback." },
];

export const metadata = {
  title: "Contact Us | Admissions & Enquiry",
  description: "Get in touch with LakshyaMarch Education Begusarai. Reach out for admissions in IIT-JEE, NEET, and Integrated Schooling. Visit our campus or call us today.",
  keywords: ["LakshyaMarch Contact Number", "Admission Enquiry Begusarai", "Coaching Center Address", "Ram Sir WhatsApp", "LakshyaMarch Location", "Office Hours"],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <FaqSchema faqs={contactFaqs} />
      <PublicNavbar />
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      <main className="flex-1">
        <div className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
          <BlackCard glowColor="blue" className="py-16 sm:py-24 text-center rounded-[2rem] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent mix-blend-overlay"></div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 relative z-10">Contact <span className="text-amber-400">Us</span></h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto relative z-10">
              We'd love to hear from you. Visit our campus or reach out via phone or email.
            </p>
          </BlackCard>
        </div>

        <AnimatedSection className="py-16 sm:py-24 bg-white px-5 sm:px-8">
          <UnifiedContainer className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start p-4 sm:p-8">
            
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 h-[400px] lg:h-[600px] relative group">
              <iframe
                src={INSTITUTE.mapEmbedUrl}
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="LakshyaMarch Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl border border-white/50 shadow-lg">
                <p className="font-black text-slate-900 mb-1">{INSTITUTE.name}</p>
                <p className="text-sm font-bold text-slate-600 leading-snug">{INSTITUTE.address.full}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Get In Touch</h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-bold">
                  Whether you have a question about admissions, fees, or want to schedule a campus tour, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="grid gap-4">
                <GlassCard className="flex gap-5 items-center p-5 hover:border-blue-300 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase tracking-widest text-xs">Call Us</h4>
                    {INSTITUTE.phones.map(ph => (
                      <p key={ph} className="text-slate-600 font-bold"><a href={`tel:+91${ph}`} className="hover:text-blue-600 transition-colors">{ph}</a></p>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard className="flex gap-5 items-center p-5 hover:border-emerald-300 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase tracking-widest text-xs">WhatsApp</h4>
                    <p className="text-slate-600 font-bold">
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Chat with Admission Counsellor</a>
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="flex gap-5 items-center p-5 hover:border-amber-300 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase tracking-widest text-xs">Email Us</h4>
                    <p className="text-slate-600 font-bold">{INSTITUTE.email}</p>
                    <p className="text-slate-600 font-bold">{INSTITUTE.schoolEmail}</p>
                  </div>
                </GlassCard>

                <GlassCard className="flex gap-5 items-center p-5 hover:border-purple-300 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase tracking-widest text-xs">Office Hours</h4>
                    <p className="text-slate-600 font-bold">{INSTITUTE.officeHours}</p>
                    <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-widest font-black">Sundays are closed for general public.</p>
                  </div>
                </GlassCard>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <GlowButton variant="blue" asChild className="w-full">
                  <a href="/" className="inline-flex items-center justify-center w-full py-4 uppercase tracking-widest text-sm">
                    Fill Online Enquiry Form Instead
                  </a>
                </GlowButton>
              </div>
            </div>

          </UnifiedContainer>
        </AnimatedSection>

      </main>

      <PublicFooter />
    </div>
  );
}
