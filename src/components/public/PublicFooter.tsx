"use client";

import { INSTITUTE, PROGRAMS, FOOTER_CONTENT, NAV_LINKS, whatsappLink } from "@/lib/siteData";
import { GraduationCap, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";



const SocialIcon = ({ d, href, label, color }: { d: string; href: string; label: string; color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center hover:${color} transition-all duration-300 group shadow-sm hover:scale-110`}
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-slate-400 group-hover:fill-white transition-colors"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={d} />
    </svg>
  </a>
);

export default function PublicFooter() {
  const getSocialLinks = (data: any) => {
    const links = [];
    if (data.facebook) links.push({
      label: "Facebook",
      href: data.facebook,
      color: "bg-blue-600",
      d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    });
    if (data.instagram) links.push({
      label: "Instagram",
      href: data.instagram,
      color: "bg-pink-600",
      d: "M12.315 2c2.43 0 2.784.012 3.855.06 1.061.044 1.787.209 2.427.458a4.902 4.902 0 011.767 1.148 4.902 4.902 0 011.148 1.767c.249.64.414 1.366.458 2.427.048 1.071.06 1.425.06 3.855 0 2.43-.012 2.784-.06 3.855-.044 1.061-.209 1.787-.458 2.427a4.902 4.902 0 01-1.148 1.767 4.902 4.902 0 01-1.767 1.148c-.64.249-1.366.414-2.427.458-1.071.048-1.425.06-3.855.06-2.43 0-2.784-.012-3.855-.06-1.061-.044-1.787-.209-2.427-.458a4.902 4.902 0 01-1.767-1.148 4.902 4.902 0 01-1.148-1.767c-.249-.64-.414-1.366-.458-2.427-.048-1.071-.06-1.425-.06-3.855 0-2.43.012-2.784.06-3.855.044-1.061.209-1.787.458-2.427a4.902 4.902 0 011.148-1.767 4.902 4.902 0 011.767-1.148c.64-.249 1.366-.414 2.427-.458 1.071-.048 1.425-.06 3.855-.06zM12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.468A3.333 3.333 0 1115.333 12 3.333 3.333 0 0112 15.333zm5.338-8.351a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2z",
    });
    if (data.youtube) links.push({
      label: "YouTube",
      href: data.youtube,
      color: "bg-red-600",
      d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    });
    if (data.twitter) links.push({
      label: "Twitter/X",
      href: data.twitter,
      color: "bg-black",
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
    });
    return links;
  };

  const coachingLinks = getSocialLinks(INSTITUTE.social.coaching);
  const schoolLinks = getSocialLinks(INSTITUTE.social.school);

  return (
    <footer>
      {/* ─── SECTION 1: DARK FOOTER (Grid) ─── */}
      <div className="bg-slate-900/95 backdrop-blur-md text-slate-300 relative border-t-4 border-amber-500 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 group">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-black text-white tracking-tight leading-tight">{INSTITUTE.shortName} Education</p>
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-0.5">ESTD {INSTITUTE.established}</p>
                </div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-10">
                {INSTITUTE.tagline}
              </p>

              {/* Social Icons */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] mb-4 text-left">Coaching Social</h4>
                  <div className="flex flex-wrap gap-3">
                    {coachingLinks.map((social) => (
                      <SocialIcon key={social.label} {...social} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-4 text-left">School Social</h4>
                  <div className="flex flex-wrap gap-3">
                    {schoolLinks.map((social) => (
                      <SocialIcon key={social.label} {...social} />
                    ))}
                  </div>
                </div>

                {/* Portal Login CTA */}
                <div className="pt-6 border-t border-slate-800">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Portal Access</p>
                  <a
                    href="/login"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white text-xs font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                      <polyline points="10 17 15 12 10 7"/>
                      <line x1="15" y1="12" x2="3" y2="12"/>
                    </svg>
                    Login to Portal →
                  </a>
                </div>
              </div>
            </div>


            {/* Quick Links (New Section) */}
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Quick Navigation</h3>
              <ul className="grid grid-cols-1 gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-200 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group"
                    >
                      <div className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/admission" className="text-sm text-slate-200 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group">
                    <div className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                    Admission 2026-27
                  </Link>
                </li>
                <li>
                  <Link href="/scholarship" className="text-sm text-slate-200 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group">
                    <div className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                    Scholarship Exam
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-sm text-slate-200 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group">
                    <div className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                    Student Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/free-test" className="text-sm text-slate-200 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group">
                    <div className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                    Free Mock Test
                  </Link>
                </li>
                <li>
                  <Link href="/admission-counselling" className="text-sm text-slate-200 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group text-amber-400">
                    <div className="h-1 w-1 rounded-full bg-slate-700 group-hover:bg-amber-500 transition-colors" />
                    Admission Counselling
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Wings */}
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Academic Wings</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/begusarai-coaching" className="block group">
                    <span className="block text-sm font-bold text-sky-300 mb-0.5 leading-tight group-hover:text-sky-200 transition-colors">📍 Best Coaching in Begusarai</span>
                    <span className="text-xs text-slate-300 leading-relaxed">No. 1 Institute in Begusarai.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/iit-jee-coaching-begusarai" className="block group">
                    <span className="block text-sm font-bold text-blue-300 mb-0.5 leading-tight group-hover:text-blue-200 transition-colors">⚡ IIT-JEE Coaching Begusarai</span>
                    <span className="text-xs text-slate-300 leading-relaxed">Best JEE coaching in Begusarai, Bihar.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/neet-campaign" className="block group">
                    <span className="block text-sm font-bold text-rose-400 mb-0.5 leading-tight group-hover:text-rose-300 transition-colors">🎯 NEET 3 May Campaign</span>
                    <span className="text-xs text-slate-300 leading-relaxed">Special offline campaigning & demo classes.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/think-neet-test-series-begusarai" className="block group">
                    <span className="block text-sm font-bold text-emerald-400 mb-0.5 leading-tight group-hover:text-emerald-300 transition-colors">🔥 ThinkNEET Test Series</span>
                    <span className="text-xs text-slate-300 leading-relaxed">Most structured NEET test series in Begusarai.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/neet-coaching-begusarai" className="block group">
                    <span className="block text-sm font-bold text-emerald-300 mb-0.5 leading-tight group-hover:text-emerald-200 transition-colors">🩺 NEET Coaching Begusarai</span>
                    <span className="text-xs text-slate-300 leading-relaxed">Top NEET-UG coaching in Begusarai, Bihar.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/admission" className="block group">
                    <span className="block text-sm font-bold text-amber-300 mb-0.5 leading-tight group-hover:text-amber-200 transition-colors">📋 Admission 2026-27</span>
                    <span className="text-xs text-slate-300 leading-relaxed">Apply now — JEE, NEET &amp; School admissions open.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/scholarship" className="block group">
                    <span className="block text-sm font-bold text-rose-300 mb-0.5 leading-tight group-hover:text-rose-200 transition-colors">🎓 Scholarship Exam 2026</span>
                    <span className="text-xs text-slate-300 leading-relaxed">Win up to 100% fee waiver. Free registration.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="block group">
                    <span className="block text-sm font-bold text-indigo-300 mb-0.5 leading-tight group-hover:text-indigo-200 transition-colors">🏆 Hall of Fame</span>
                    <span className="text-xs text-slate-300 leading-relaxed">IIT, NIT &amp; NEET selections every year.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="block group">
                    <span className="block text-sm font-bold text-orange-300 mb-0.5 leading-tight group-hover:text-orange-200 transition-colors">🌟 Success Stories</span>
                    <span className="text-xs text-slate-300 leading-relaxed">Inspiring journeys of our top rankers.</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Visit */}
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Contact & Visit</h3>
              <ul className="space-y-5">
                <li className="flex gap-4 text-sm group">
                  <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 transition-colors">
                    <MapPin size={16} className="text-amber-400" />
                  </div>
                  <span className="text-slate-200 leading-relaxed text-[13px]">{INSTITUTE.address.full}</span>
                </li>
                {INSTITUTE.phones.map((ph) => (
                  <li key={ph} className="flex gap-4 text-sm items-center group">
                    <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 transition-colors">
                      <Phone size={15} className="text-amber-400" />
                    </div>
                    <a href={`tel:+91${ph}`} className="text-slate-200 hover:text-white font-mono transition-colors text-[13px]">
                      +91 {ph}
                    </a>
                  </li>
                ))}
                <li className="flex gap-4 text-sm items-center group">
                  <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 transition-colors">
                    <Mail size={15} className="text-amber-400" />
                  </div>
                  <span className="text-slate-200 text-[13px]">{INSTITUTE.email}</span>
                </li>
                <li className="flex gap-4 text-sm items-center group">
                  <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 transition-colors">
                    <Clock size={15} className="text-amber-400" />
                  </div>
                  <span className="text-slate-200 text-[13px]">{INSTITUTE.officeHours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 2: WHITE BACKGROUND (Informational & Legal) ─── */}
      <div className="bg-white text-slate-700 border-t border-slate-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="space-y-12">
            
            {/* Popular Locations (SEO) */}
            <div className="pb-8 border-b border-slate-100">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Top Coaching Centers in Bihar:</h4>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[13px] font-medium text-slate-500">
                <Link href="/khagaria-coaching" className="hover:text-blue-600 transition-colors">Khagaria Coaching</Link>
                <span className="text-slate-300">•</span>
                <Link href="/iit-jee-coaching-khagaria" className="hover:text-blue-600 transition-colors">IIT-JEE Khagaria</Link>
                <span className="text-slate-300">•</span>
                <Link href="/neet-coaching-khagaria" className="hover:text-blue-600 transition-colors">NEET Khagaria</Link>
                <span className="text-slate-300">•</span>
                <Link href="/samastipur-coaching" className="hover:text-blue-600 transition-colors">Samastipur Coaching</Link>
                <span className="text-slate-300">•</span>
                <Link href="/iit-jee-coaching-samastipur" className="hover:text-blue-600 transition-colors">IIT-JEE Samastipur</Link>
                <span className="text-slate-300">•</span>
                <Link href="/neet-coaching-samastipur" className="hover:text-blue-600 transition-colors">NEET Samastipur</Link>
                <span className="text-slate-300">•</span>
                <Link href="/lakhisarai-coaching" className="hover:text-blue-600 transition-colors">Lakhisarai Coaching</Link>
                <span className="text-slate-300">•</span>
                <Link href="/iit-jee-coaching-lakhisarai" className="hover:text-blue-600 transition-colors">IIT-JEE Lakhisarai</Link>
                <span className="text-slate-300">•</span>
                <Link href="/neet-coaching-lakhisarai" className="hover:text-blue-600 transition-colors">NEET Lakhisarai</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">Know about {INSTITUTE.shortName} LakshyaMarch</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-6xl">{FOOTER_CONTENT.knowAbout}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-[12px] font-black text-slate-900 mb-4 tracking-widest uppercase border-l-4 border-amber-500 pl-3">We Stand Out</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{FOOTER_CONTENT.standOut}</p>
              </div>

              <div>
                <h3 className="text-[12px] font-black text-slate-900 mb-4 tracking-widest uppercase border-l-4 border-blue-500 pl-3">Our Focus Areas</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{FOOTER_CONTENT.focusAreas}</p>
              </div>

              <div>
                <h3 className="text-[12px] font-black text-slate-900 mb-4 tracking-widest uppercase border-l-4 border-emerald-500 pl-3">What Makes Us Different</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{FOOTER_CONTENT.difference}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.2em] transition-all">
              <Link href="/privacy-policy" className="hover:text-blue-600 hover:tracking-[0.25em] transition-all duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-600 hover:tracking-[0.25em] transition-all duration-300">Terms & Conditions</Link>

            </div>
            <div className="text-right">
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
                © {new Date().getFullYear()} {INSTITUTE.name}. All rights reserved.
              </p>
              <p className="text-[9px] text-slate-300 font-medium uppercase tracking-[0.3em]">
                Made with ❤️ in {INSTITUTE.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
