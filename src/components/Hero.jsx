import React from 'react';
import { Phone, MessageSquare, ExternalLink, Star, MapPin, CheckCircle2, Sparkles, GraduationCap, Eye, Gift } from 'lucide-react';
import { businessInfo, GOOGLE_FORM_URL } from '../data/hubData';

export default function Hero({ onOpenFlyerModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/80 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-blue-100">
      
      {/* Subtle geometric grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hub-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#003366" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hub-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Free Skilling & Placement Announcement Strip (Sunny Gold & Royal Blue) */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 shadow-md border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-blue-950 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
              <Gift className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-blue-950 text-amber-300 px-2 py-0.5 rounded-md">
                  Special Free Initiative
                </span>
                <span className="text-xs font-bold text-blue-950 hidden sm:inline">• Free for Graduates</span>
              </div>
              <p className="text-xs sm:text-sm font-black text-blue-950 mt-0.5">
                Free Skilling &amp; Placement Course offering to graduates at zero cost!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-blue-950 text-amber-300 hover:bg-blue-900 shadow-md transition-all active:scale-95"
            >
              <span>Enroll Free on Google Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badges Row */}
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-950 text-xs sm:text-sm font-bold shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Malakpet, Hyderabad</span>
                <span className="text-blue-300">•</span>
                <span className="text-blue-800">Exit-D Metro Station</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>4.8 / 5 Rating</span>
                <span className="text-amber-700/80 hidden sm:inline">(Google Verified)</span>
              </div>
            </div>

            {/* Motivational Slogan Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-900 text-amber-300 text-xs font-black uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{businessInfo.motto} • {businessInfo.heroPunchline}</span>
            </div>

            {/* Flyer Hook Main Headline (Royal Blue & Sunny Amber) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-blue-950 tracking-tight leading-[1.14]">
              Struggling to Understand Your Subjects?{' '}
              <span className="text-blue-600 block sm:inline">
                You’re Not Alone!
              </span>
            </h1>

            {/* Flyer Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium max-w-2xl">
              Get the right guidance from experienced <strong className="text-blue-950 font-bold">Teachers, Instructors, and Subject Experts</strong> at <strong className="text-blue-700">SILT Hub</strong> — for better understanding, higher scores, and a successful career!
            </p>

            {/* All Streams Pill */}
            <div className="p-3.5 rounded-2xl bg-white border border-blue-200 text-xs sm:text-sm text-slate-700 shadow-xs flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-blue-900 text-amber-300 font-black shrink-0 text-xs">
                School to Career
              </span>
              <span className="font-medium">School (1-10) • Inter (11 &amp; 12) • Engineering • Medical • Pharmacy • Competitive Exams (JEE/NEET) • Degree</span>
            </div>

            {/* CTAs: GOOGLE FORM ONLY */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* PRIMARY ACTION: DIRECT GOOGLE FORM (Bright Sunny Gold) */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-google-form-cta"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/30 border border-amber-300 group"
              >
                <span>Register on Google Form</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Call Now Button */}
              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-base font-bold text-blue-950 bg-white hover:bg-blue-50 border border-blue-200 shadow-xs active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call {businessInfo.phone}</span>
              </a>

              {/* Direct WhatsApp Button */}
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 active:scale-95 transition-all"
                title="Message on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Personalised Attention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Exam-Oriented Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Steps from Metro Exit-D</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Flyer Showcase (Bright Clean Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Flyer Showcase Card */}
              <div
                onClick={onOpenFlyerModal}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group cursor-pointer ring-1 ring-blue-100"
              >
                <img
                  src="/images/silt-hub-flyer.jpg"
                  alt="Official Samuh India Learning & Training (SILT) Hub Announcement Flyer"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Bottom Overlay with Lightbox Trigger */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between gap-2 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div className="text-left">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 block">
                      Official Launch Flyer
                    </span>
                    <h3 className="text-sm font-black text-slate-900">
                      SILT Hub Hyderabad
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenFlyerModal();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition-all shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Full</span>
                  </button>
                </div>
              </div>

              {/* Floating Google Rating Pill */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 bg-white rounded-2xl p-3 shadow-xl border border-slate-200 text-left max-w-[200px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black text-slate-900">4.8</span>
                  <div className="flex text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>
                <div className="text-[11px] font-bold text-slate-900 mt-0.5">
                  Google Business Profile
                </div>
                <div className="text-[10px] text-slate-500">
                  4 verified reviews • Malakpet
                </div>
              </div>

              {/* Floating Discussion Room Pill */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-200 text-left flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                  <img
                    src="/images/classroom-front.png"
                    alt="Classroom and study desks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-black text-blue-950">
                    Interactive Classroom
                  </div>
                  <div className="text-[11px] text-blue-700 font-semibold">
                    Beside Gunj, Metro Exit-D
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
