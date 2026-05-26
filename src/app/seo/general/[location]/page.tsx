import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { districtData } from '@/lib/districtData';
import Link from 'next/link';
import { ArrowRight, Trophy, BookOpen, Hotel, Users, CheckCircle2 } from 'lucide-react';
import PublicNavbar from '@/components/public/PublicNavbar';
import PublicFooter from '@/components/public/PublicFooter';

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  const params: { location: string }[] = [];
  districtData.forEach(district => {
    // Add district itself
    params.push({ location: district.english.toLowerCase().replace(/[^a-z0-9]+/g, '-') });
    // Add all blocks
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
      ? `Best Coaching Institute in ${locationName} | ${INSTITUTE.name}`
      : `Best Coaching for ${locationName} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Looking for the best coaching in ${locationName}? ${INSTITUTE.name} provides top-tier education for IIT-JEE, NEET, and Foundation courses with expert faculty and proven results.`
      : `Are you from ${locationName}? Join ${INSTITUTE.name} in Begusarai for premium IIT-JEE & NEET coaching with top-tier hostel facilities and proven results.`,
  };
}

export default async function GeneralCoachingPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PublicNavbar />
      <div className="h-20 sm:h-24 bg-slate-900" />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-bold uppercase tracking-widest mb-6">
              #1 Coaching Institute
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Best Coaching for <span className="text-amber-400">{locationName}</span> Students
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-10">
              {isBegusarai 
                ? `Empowering students in ${locationName} to achieve their dreams in IIT-JEE, NEET, and Board Exams with proven teaching methodologies and top-tier faculty.`
                : `Looking for the best coaching? Just a short journey away, ${INSTITUTE.name} in Begusarai offers premium hostel facilities and a proven track record of top results for students from ${locationName}.`}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admission" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-amber-500/20 hover:scale-105">
                {isBegusarai ? 'Apply for Admission 2026' : 'Join Our Begusarai Campus'} <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105">
                {isBegusarai ? 'Contact Us' : 'Hostel Enquiry'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose <span className="text-blue-600">LakshyaMarch</span> in {locationName}?
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Faculty</h3>
              <p className="text-slate-600 leading-relaxed">Learn from highly experienced teachers dedicated to student success in {locationName}.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Material</h3>
              <p className="text-slate-600 leading-relaxed">Updated study materials, DPPs, and modules tailored for competitive exams.</p>
            </div>

            {!isBegusarai ? (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-14 w-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Hotel size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Hostel</h3>
                <p className="text-slate-600 leading-relaxed">Safe, secure, and study-friendly hostel accommodations available for students coming from {locationName}.</p>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-14 w-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Personalized Attention</h3>
                <p className="text-slate-600 leading-relaxed">Small batch sizes ensuring every student in {locationName} gets the attention they need.</p>
              </div>
            )}
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600 leading-relaxed">Consistent track record of top ranks in IIT-JEE and NEET from {locationName} region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Which is the best coaching choice for students in {locationName}?</h3>
              <p className="text-slate-600 leading-relaxed">
                {INSTITUTE.name} is recognized as the premier educational choice for students from {locationName}, delivering consistently high results in IIT-JEE, NEET, and Foundation courses.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">What courses does LakshyaMarch offer to students from {locationName}?</h3>
              <p className="text-slate-600 leading-relaxed">
                We offer targeted coaching for IIT-JEE (Main & Advanced), NEET-UG, and comprehensive Foundation courses for class 8th, 9th, and 10th students of {locationName}.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">How do I enroll at LakshyaMarch?</h3>
              <p className="text-slate-600 leading-relaxed">
                Students from {locationName} can apply directly through our website by visiting the Admission page, or they can register for our Scholarship Exam (LNAT) to avail up to 100% fee waiver.
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
