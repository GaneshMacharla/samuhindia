import React from 'react';
import { Mail, MessageSquare, ExternalLink, Star, MapPin, CheckCircle2, Sparkles, GraduationCap, Users, Building2, Eye, Gift } from 'lucide-react';
import { businessInfo, STUDENT_REGISTRATION_FORM_URL } from '../data/hubData';

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badges Row - Explicitly showing Exit-D, New Market Metro station */}
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-950 text-xs sm:text-sm font-bold shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Malakpet, Hyderabad</span>
                <span className="text-blue-300">•</span>
                <strong className="text-blue-900 font-extrabold">10-Min Walk from Metro Exit-D (~500 m)</strong>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold">
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

            {/* Flyer Hook Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-blue-950 tracking-tight leading-[1.15]">
              Struggling to Understand Concepts?{' '}
              <span className="text-blue-600 block sm:inline">
                You’re Not Alone!
              </span>
            </h1>

            {/* Flyer Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium max-w-2xl">
              Get the right guidance from experienced <strong className="text-blue-950 font-bold">Teachers, Instructors, and Subject Experts</strong> at <strong className="text-blue-700 font-extrabold">SILT Hub</strong> — for better understanding, higher scores, and a successful career!
            </p>

            {/* Skill Training & Placement Strip (Sunny Gold & Royal Blue) */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 shadow-md border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-950 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                  <Gift className="w-5 h-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-blue-950 text-amber-300 px-2 py-0.5 rounded-md">
                      Skill &amp; Placement
                    </span>
                    <span className="text-xs font-bold text-blue-950 hidden sm:inline">• Free &amp; Chargeable Options</span>
                  </div>
                  <p className="text-xs sm:text-sm font-black text-blue-950 mt-0.5">
                    Select Free Skill Training &amp; Placement modules + Chargeable Advanced Professional Tracks!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <a
                  href={STUDENT_REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-blue-950 text-amber-300 hover:bg-blue-900 shadow-md transition-all active:scale-95"
                >
                  <span>Register on Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3 Core Segments Jump Navigator */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <a
                href="#students"
                className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col"
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-blue-900 group-hover:text-amber-600 mb-1">
                  <GraduationCap className="w-4 h-4 text-blue-600 group-hover:text-amber-500" />
                  <span>I. Students</span>
                </div>
                <span className="text-[11px] text-slate-600 leading-snug">Needs, course offerings &amp; registration</span>
              </a>

              <a
                href="#faculty"
                className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col"
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-blue-900 group-hover:text-blue-600 mb-1">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>II. Faculty</span>
                </div>
                <span className="text-[11px] text-slate-600 leading-snug">Requirements, expectations &amp; join us</span>
              </a>

              <a
                href="#classrooms"
                className="p-3 rounded-2xl bg-white border border-blue-200 hover:border-emerald-400 hover:shadow-md transition-all group flex flex-col"
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-blue-900 group-hover:text-emerald-600 mb-1">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>III. Classrooms</span>
                </div>
                <span className="text-[11px] text-slate-600 leading-snug">10-30 batch size, 120-150 single-slot capacity</span>
              </a>
            </div>

            {/* CTAs: GOOGLE FORM & EMAIL & WHATSAPP (NO PHONE DISPLAY) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* PRIMARY ACTION: DIRECT STUDENT GOOGLE FORM */}
              <a
                href={STUDENT_REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-student-form-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/30 border border-amber-300 group"
              >
                <span>Student Registration Form</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Us Button (Instead of Phone Number) */}
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold text-blue-950 bg-white hover:bg-blue-50 border border-blue-200 shadow-xs active:scale-95 transition-all"
                title={`Write email to ${businessInfo.email}`}
              >
                <Mail className="w-4 h-4 text-blue-700" />
                <span>Write Email</span>
              </a>

              {/* Direct WhatsApp Button */}
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 active:scale-95 transition-all"
                title="Message on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Personalized Attention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Exam-Oriented Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>10-Min Walk from Metro Exit-D</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Flyer Showcase */}
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
                    Exit-D, New Market Metro
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
