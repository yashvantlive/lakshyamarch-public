import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { districtData } from '@/lib/districtData';
import Link from 'next/link';
import { ArrowRight, Dna, Hotel, Stethoscope, BarChart } from 'lucide-react';
import PublicNavbar from '@/components/public/PublicNavbar';
import PublicFooter from '@/components/public/PublicFooter';

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  const params: { location: string }[] = [];
  districtData.forEach(district => {
    params.push({ location: district.english.toLowerCase().replace(/[^a-z0-9]+/g, '-') });
    district.blocks.forEach(block => {
      params.push({ location: block.english.split('/')[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return {
    title: isBegusarai 
      ? `Best NEET Coaching in ${locationName} | ${INSTITUTE.name}`
      : `Best NEET Coaching for ${locationName} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Achieve your dream of becoming a doctor with the best NEET coaching in ${locationName}. ${INSTITUTE.name} offers top faculty, NCERT-focused material, and extreme test series.`
      : `Dreaming of cracking NEET from ${locationName}? Join ${INSTITUTE.name} Begusarai. We provide a highly competitive environment and dedicated hostel facilities for future doctors.`,
  };
}

export default async function NeetPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PublicNavbar />
      <div className="h-20 sm:h-24 bg-slate-900" />
      <main className="flex-1">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-bold uppercase tracking-widest mb-6">
              NEET-UG Preparation
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Best NEET Coaching for <span className="text-emerald-400">{locationName}</span> Students
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed font-medium mb-10">
              {isBegusarai 
                ? `Empowering the future doctors of ${locationName}. Get the finest NCERT-based curriculum and competitive environment to score 650+ in NEET.`
                : `Aiming for 650+ in NEET? Move to our Begusarai campus! We provide a highly competitive environment, proven results, and premium hostel facilities for ${locationName} students.`}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admission" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 hover:scale-105">
                {isBegusarai ? 'Enroll for NEET' : 'Join Begusarai Campus'} <ArrowRight size={18} />
              </Link>
              <Link href="/scholarship" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105">
                {isBegusarai ? 'LNAT Scholarship' : 'Hostel Facility Available'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why NEET Aspirants in {locationName} Choose Us
            </h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Dna size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">NCERT Focused</h3>
              <p className="text-slate-600 leading-relaxed">Line-by-line coverage of NCERT Biology, Physics, and Chemistry.</p>
            </div>
            {!isBegusarai ? (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-14 w-14 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Hotel size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hostel & Results</h3>
                <p className="text-slate-600 leading-relaxed">We produce doctors every year! Safe and dedicated hostels available for {locationName} outstation students.</p>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-14 w-14 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Stethoscope size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Mentorship</h3>
                <p className="text-slate-600 leading-relaxed">Guidance from top medical professionals and seasoned educators.</p>
              </div>
            )}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">All India Test Series</h3>
              <p className="text-slate-600 leading-relaxed">Benchmark your performance with aspirants across the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions (NEET)</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Is {INSTITUTE.name} the right choice for NEET aspirants from {locationName}?</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, it is the top choice. We have specialized batches strictly adhering to the latest NTA NEET syllabus, ensuring maximum selections for students from the {locationName} area.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Do you provide NCERT based study material?</h3>
              <p className="text-slate-600 leading-relaxed">
                Absolutely. Our study material is meticulously designed to cover every single concept, diagram, and summary of the NCERT textbooks.
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
