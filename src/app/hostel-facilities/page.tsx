import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import AdmissionEnquiryForm from '@/components/public/AdmissionEnquiryForm';
import PublicNavbar from '@/components/public/PublicNavbar';
import PublicFooter from '@/components/public/PublicFooter';

export const metadata = {
  title: `Premium Hostel & Boarding Facilities | ${INSTITUTE.name}`,
  description: `Safe, secure, and study-focused boarding accommodations at ${INSTITUTE.name} Begusarai for outstation students preparing for IIT-JEE and NEET.`,
};

export default function HostelPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <div className="h-24 bg-slate-900" />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 px-6 text-white text-center border-b border-slate-700">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">A Home Away From Home</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Premium <span className="text-blue-400">Hostel Facilities</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Providing outstation students with a safe, disciplined, and distraction-free study environment to focus entirely on their IIT-JEE and NEET goals.
          </p>
        </div>
      </section>

      {/* Core Amenities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Designed for Academic Focus</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 shadow-sm">
              <span className="text-5xl mb-6 block">🏠</span>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Spacious Boarding</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Well-ventilated single and double-sharing rooms equipped with personal study tables, comfortable bedding, and dedicated storage.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 shadow-sm">
              <span className="text-5xl mb-6 block">🍽️</span>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Hygienic Dining</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                A clean mess serves 4 nutritious, fresh, and balanced meals daily (Breakfast, Lunch, Snacks, Dinner) tailored for student health.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 shadow-sm">
              <span className="text-5xl mb-6 block">👮</span>
              <h3 className="text-xl font-bold mb-4 text-slate-900">24/7 Security</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Full CCTV surveillance, security guards, and resident wardens ensure a secure environment for all hostellers.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 shadow-sm">
              <span className="text-5xl mb-6 block">📚</span>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Study Atmosphere</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Structured self-study hours and strict silent timings guarantee zero distractions during exam preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Dining Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Nutritious Mess & Dietary Hygiene</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                We understand that good health is essential for intensive study. Our mess operates under strict cleanliness guidelines with filter drinking water and periodic menu changes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> 4 Fresh Meals Served Daily
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> Seasonal Vegetable Varieties & Milk
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> RO Water Purifier Systems
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> Clean Dining Hall & Kitchen Audits
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-slate-200 flex items-center justify-center">
              <div className="text-lg text-slate-500">
                📷 Hygienic Mess & Dining Facility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Security Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-slate-200 flex items-center justify-center md:order-first order-last">
              <div className="text-lg text-slate-500">
                📷 Secure Student Boarding Rooms
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Safety, Discipline & Medical Care</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                We prioritize students' well-being. A resident warden is always present on-site to assist with personal concerns or emergency medical situations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> 24/7 Resident Wardens on Campus
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> Biometric Attendance Monitoring
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> First-Aid and Tie-Up with Local Hospitals
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-700">
                  <span className="text-blue-600 font-bold">✓</span> Strict Check-Out and Parent Authorization Policies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking and Enquiry Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Reserve Your Hostel Seat</h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Hostel seats are limited and allocated on a first-come, first-served basis to outstation students enrolled in our 1-Year or 2-Year classroom courses.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Fill out the enquiry form to get in touch with our admissions desk. Our team will guide you on fee structures, check-in checklists, and room availability.
              </p>
              <ul className="space-y-4 font-semibold text-slate-700 text-lg border-l-4 border-blue-600 pl-6 bg-slate-50 py-4 rounded-r-lg">
                <li>📞 Admission Helpdesk: {INSTITUTE.primaryPhone}</li>
                <li>📍 Location: Dakbangla Road Campus, Begusarai</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Hostel FAQs</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          <div className="space-y-8">
            <div className="pb-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Are laundry services available in the hostel?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, laundry facilities and washing areas are provided for all hostellers. Regular collection and drop schedules are maintained by the campus staff.
              </p>
            </div>
            <div className="pb-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What are the silent hours in the hostel?</h3>
              <p className="text-slate-600 leading-relaxed">
                To facilitate effective study, strict silent hours are observed from 9:30 PM to 6:00 AM. During these hours, absolute quiet is maintained in the corridors and study areas.
              </p>
            </div>
            <div className="pb-6 border-b border-slate-200 border-b-0">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Can parents visit students during weekends?</h3>
              <p className="text-slate-600 leading-relaxed">
                Parents and authorized guardians are welcome to visit students on Sundays during specified visiting hours. Overnight stays for parents can be arranged with prior warden approval.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <PublicFooter />
    </div>
  );
}
