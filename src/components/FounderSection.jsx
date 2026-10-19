import React from 'react';
import {
  GraduationCap,
  Rocket,
  Shield,
  Train,
  Award,
  ExternalLink,
  Mail,
  MessageSquare,
  Sparkles,
  Quote,
  Target,
  Lightbulb,
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import { businessInfo, founderInfo } from '../data/hubData';

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900 text-amber-300 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Leadership &amp; Vision • Founder Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            About the Founder
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Meet the visionary leader driving the academic excellence, space-grade precision, and mentorship standards at SILT Hub.
          </p>
        </div>

        {/* Executive Profile Showcase Card */}
        <div className="bg-white rounded-3xl border border-blue-200/90 shadow-xl overflow-hidden mb-12">
          
          {/* Header Banner inside Card */}
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-6 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                {/* Founder Executive Portrait */}
                <div className="relative shrink-0 group">
                  <div className="w-24 h-28 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-2xl sm:rounded-3xl overflow-hidden border-3 sm:border-4 border-amber-400 shadow-2xl bg-slate-900 ring-4 ring-amber-400/25">
                    <img
                      src={founderInfo.image}
                      alt={founderInfo.imageAlt}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 border border-amber-300 shadow-md whitespace-nowrap">
                    Founder
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                      {founderInfo.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      {founderInfo.shortName}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-amber-300">
                    {founderInfo.designation}
                  </p>

                  <p className="text-xs sm:text-sm text-blue-200 font-medium">
                    {founderInfo.title}
                  </p>
                </div>
              </div>

              {/* Founder Social CTAs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2 md:pt-0">
                <a
                  href={founderInfo.xProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 shadow transition-all group"
                  title="Follow Prof. Syed Mujahed Hussaini on X"
                >
                  <svg className="w-4 h-4 fill-slate-950" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Connect on X {founderInfo.xHandle}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${businessInfo.email}?subject=Message%20for%20Prof.%20Syed%20Mujahed%20Hussaini%20-%20SILT%20Hub`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-blue-100 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email Office</span>
                </a>
              </div>

            </div>

            {/* Quick Metrics Badges Bar */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-amber-300 block">21+</span>
                <span className="text-xs text-blue-200 font-medium">Years Industry &amp; Higher Ed.</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-base sm:text-lg font-black text-white block">Ph.D. &amp; Postdoc</span>
                <span className="text-xs text-blue-200 font-medium">BITS Pilani &amp; HIT Shenzhen</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-base sm:text-lg font-black text-white block">ISRO Systems</span>
                <span className="text-xs text-blue-200 font-medium">Chandrayaan &amp; GSLV Mk III</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-base sm:text-lg font-black text-white block">Govt. of India</span>
                <span className="text-xs text-blue-200 font-medium">NCS Career Counsellor</span>
              </div>
            </div>

          </div>

          {/* Main Profile Content: Bio & Organizations */}
          <div className="p-6 sm:p-10 lg:p-12 text-left space-y-8">
            
            {/* The 3 Bio Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              {founderInfo.bioParagraphs.map((para, idx) => (
                <p key={idx} className="first-of-type:text-slate-900 first-of-type:font-semibold">
                  {para}
                </p>
              ))}
            </div>

            {/* Academic Pedigree & Distinguished Career Track (2 Columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
              
              {/* Column 1: Academic Pedigree */}
              <div className="p-5 sm:p-6 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-950 font-black text-base">
                  <div className="w-8 h-8 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span>Academic Qualifications &amp; Research</span>
                </div>

                <div className="space-y-3">
                  {founderInfo.degrees.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white border border-blue-100 shadow-xs flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-black text-blue-950 bg-blue-100 px-2 py-0.5 rounded-md">
                            {item.degree}
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            {item.institution}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Notable Professional Engineering & R&D Milestones */}
              <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/60 border border-amber-200/80 space-y-4">
                <div className="flex items-center gap-2.5 text-amber-950 font-black text-base">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span>High-Impact Engineering &amp; National R&amp;D</span>
                </div>

                <div className="space-y-3">
                  {founderInfo.organizations.map((org, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white border border-amber-200/60 shadow-xs flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-black text-blue-950">
                            {org.org}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                            {org.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          {org.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Motivation for SILT Hub (The Vision & Mission) */}
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white text-left relative overflow-hidden shadow-2xl border-4 border-amber-400/90">
          
          <div className="relative z-10 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-2">
                  Founder's Inspiration
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  {founderInfo.motivation.sectionTitle}
                </h3>
              </div>

              <div className="hidden md:flex items-center gap-2 text-amber-300 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Empowering Hyderabad's Future Generations</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed max-w-4xl">
              {founderInfo.motivation.summary}
            </p>

            {/* 4 Motivation Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {founderInfo.motivation.points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shrink-0">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {pt.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-200 leading-relaxed pl-8">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Vision Quote Callout */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 shadow-xl border border-amber-300">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-amber-800 shrink-0 mt-1 opacity-70" />
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                    The Guiding Vision of Prof. Syed Mujahed Hussaini
                  </span>
                  <blockquote className="text-base sm:text-xl font-black text-slate-950 leading-snug tracking-tight">
                    "{founderInfo.motivation.visionQuote}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Direct Connect Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={founderInfo.xProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Follow @ProfSMH on X</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${businessInfo.email}?subject=Collaboration%20or%20Mentorship%20Inquiry%20-%20Prof.%20Syed%20Mujahed%20Hussaini`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>Email: {businessInfo.email}</span>
                </a>

                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Academic Desk</span>
                </a>
              </div>

              <span className="text-xs text-blue-200 italic">
                Registered Career Counsellor • Ministry of Labour &amp; Employment, Govt. of India (NCS)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
