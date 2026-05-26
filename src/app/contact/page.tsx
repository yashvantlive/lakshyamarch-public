import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

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
        <div className="bg-slate-900 py-16 sm:py-24 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent mix-blend-overlay"></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 relative z-10">Contact <span className="text-amber-400">Us</span></h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto relative z-10">
            We'd love to hear from you. Visit our campus or reach out via phone or email.
          </p>
        </div>

        <section className="py-16 sm:py-24 bg-white px-5 sm:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 h-[400px] lg:h-[600px] relative">
              <iframe
                src={INSTITUTE.mapEmbedUrl}
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="LakshyaMarch Location"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl border border-white/50 shadow-lg">
                <p className="font-bold text-slate-900 mb-1">{INSTITUTE.name}</p>
                <p className="text-sm text-slate-600 leading-snug">{INSTITUTE.address.full}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Get In Touch</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Whether you have a question about admissions, fees, or want to schedule a campus tour, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    {INSTITUTE.phones.map(ph => (
                      <p key={ph} className="text-slate-600"><a href={`tel:+91${ph}`} className="hover:text-blue-600 transition-colors">{ph}</a></p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="h-14 w-14 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">WhatsApp</h4>
                    <p className="text-slate-600">
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Chat with Admission Counsellor</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="h-14 w-14 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">{INSTITUTE.email}</p>
                    <p className="text-slate-600">{INSTITUTE.schoolEmail}</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="h-14 w-14 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                    <p className="text-slate-600">{INSTITUTE.officeHours}</p>
                    <p className="text-slate-500 text-sm mt-1">Sundays are closed for general public.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <a href="/" className="inline-flex items-center justify-center w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg shadow-slate-900/20">
                  Fill Online Enquiry Form Instead
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
}
