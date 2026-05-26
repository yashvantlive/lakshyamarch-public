import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { districtData } from '@/lib/districtData';
import Link from 'next/link';
import { ArrowRight, Beaker, Hotel, FileText, HelpCircle } from 'lucide-react';
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
      ? `Best IIT JEE Coaching in ${locationName} | ${INSTITUTE.name}`
      : `Best IIT JEE Coaching for ${locationName} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Crack IIT JEE with the best coaching in ${locationName}. ${INSTITUTE.name} provides expert faculty, comprehensive study material, and proven strategies.`
      : `Targeting IIT JEE from ${locationName}? Relocate to ${INSTITUTE.name} Begusarai. We offer expert faculty, rigorous testing, and secure hostel facilities for outstation students.`,
  };
}

export default async function IitJeePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PublicNavbar />
      <div className="h-20 sm:h-24 bg-slate-900" />
      <main className="flex-1">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-bold uppercase tracking-widest mb-6">
              JEE Main & Advanced
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Best IIT JEE Coaching for <span className="text-blue-400">{locationName}</span> Students
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-10">
              {isBegusarai 
                ? `Join the most trusted IIT JEE preparation institute for students from ${locationName}. We build strong fundamentals to ensure top ranks in JEE Main and Advanced.`
                : `Crack IIT JEE by joining our Begusarai campus! We offer top-tier faculty, consistent year-on-year results, and secure hostel facilities exclusively for students from ${locationName}.`}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admission" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 hover:scale-105">
                {isBegusarai ? 'Join JEE Batch' : 'Join Begusarai Campus'} <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105">
                {isBegusarai ? 'Take Free Mock Test' : 'Hostel Facility Available'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our IIT JEE Strategy for {locationName} Students
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Beaker size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">In-Depth Concepts</h3>
              <p className="text-slate-600 leading-relaxed">Focus on fundamental clarity in Physics, Chemistry, and Mathematics.</p>
            </div>
            {!isBegusarai ? (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-14 w-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Hotel size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hostel & Results</h3>
                <p className="text-slate-600 leading-relaxed">Proven track record of JEE selections every year. Safe hostels available for {locationName} outstation students.</p>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-14 w-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Rigorous Testing</h3>
                <p className="text-slate-600 leading-relaxed">Weekly part tests and monthly cumulative tests based on the latest NTA patterns.</p>
              </div>
            )}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HelpCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Doubt Resolution</h3>
              <p className="text-slate-600 leading-relaxed">Dedicated doubt clearing sessions ensuring no student from {locationName} is left behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions (IIT-JEE)</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Why is LakshyaMarch the best for IIT-JEE aspirants from {locationName}?</h3>
              <p className="text-slate-600 leading-relaxed">
                With an elite faculty pool, high-quality study materials, and rigorous mock tests aligned with NTA standards, we provide the best ecosystem for JEE aspirants from {locationName}.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">When do the new JEE batches start for {locationName} students?</h3>
              <p className="text-slate-600 leading-relaxed">
                New batches for class 11th, 12th, and droppers commence in April and June. Register early via our Admission portal.
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
