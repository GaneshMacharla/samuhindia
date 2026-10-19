import React from 'react';
import { Mail, MessageSquare, ExternalLink, Star, MapPin, CheckCircle2, Sparkles, GraduationCap, Users, Building2, Eye, Gift, Train } from 'lucide-react';
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
            
            {/* Location & Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-950 text-xs sm:text-sm font-bold shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Malakpet, Hyderabad</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-300 text-blue-950 text-xs sm:text-sm font-black shadow-xs">
                <Train className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>New Market Metro station Exit-D</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>4.8 / 5 Rating</span>
                <span className="text-amber-700/80 hidden sm:inline">(Google Verified)</span>
              </div>
            </div>

            {/* Brand Logo & Headline Group */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden border-2 sm:border-3 border-blue-900 shadow-xl bg-white p-1 shrink-0 group">
                <img
                  src={businessInfo.logo}
                  alt={businessInfo.logoAlt}
                  className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1.5 text-left">
                {/* About Our Hub Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-blue-900 text-amber-300 text-xs font-black uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>About Our Hub • Premier Education Centre</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-blue-950 tracking-tight leading-[1.15]">
                  SAMUH INDIA{' '}
                  <span className="text-blue-600 block sm:inline">
                    Learning &amp; Training Hub
                  </span>
                </h1>
              </div>
            </div>

            {/* About Our Hub Narrative */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/95 border border-blue-200/90 shadow-md space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed font-medium max-w-2xl text-left">
              <p>
                <strong className="text-blue-950 font-black">SAMUH INDIA Learning &amp; Training Hub</strong>, a premier Education Centre, offers traditional classroom teaching, skill training, and career counseling for a holistic learning experience. Our expert teachers and trainers provide personalized coaching for students seeking subject knowledge, computer training, professional skills, and more. We have expertise from <strong className="text-blue-900 font-bold">High School to PG &amp; Ph.D. levels</strong>.
              </p>
              <p className="text-slate-600">
                We offer our <strong className="text-blue-950 font-bold">classrooms and infrastructure on rental basis</strong> to fulfill the needs of teachers for effective teaching. As a top-notch education centre in Hyderabad, we empower individuals to achieve their academic and professional goals. Visit us today and discover a new way of learning. We are very close to <strong className="text-blue-950 font-bold">New Market Metro Station Exit-D</strong> in Malakpet, Hyderabad, Telangana!
              </p>

              {/* Quick Pillars Highlight Tags from Text */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Classroom Teaching &amp; Coaching</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Computer &amp; Professional Skills</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>High School to PG &amp; Ph.D.</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-50 text-purple-900 border border-purple-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Classrooms on Rental Basis</span>
                </span>
              </div>

              {/* Founder Leadership Callout */}
              <div className="pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <img
                    src="/images/prof-syed-mujahed-hussaini.jpg"
                    alt="Prof. Syed Mujahed Hussaini"
                    className="w-7 h-7 rounded-full object-cover object-top border-2 border-amber-400 shadow-xs shrink-0"
                  />
                  <span>
                    Founded by <strong className="text-blue-950 font-bold">Prof. Syed Mujahed Hussaini</strong> (Ph.D. BITS Pilani • Ex-ISRO)
                  </span>
                </div>
                <a
                  href="#founder"
                  className="font-bold text-blue-700 hover:text-blue-950 hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Founder Profile &amp; Vision →</span>
                </a>
              </div>
            </div>

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
                <span>Exit-D, New Market Metro</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Flyer Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Flyer Showcase Card - Featuring New Official Launch Flyer */}
              <div
                onClick={() => onOpenFlyerModal && onOpenFlyerModal('hub')}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group cursor-pointer ring-1 ring-blue-100"
              >
                <img
                  src="/images/silt-learning-hub-flyer.jpg"
                  alt="Official SAMUH INDIA Learning & Training Hub Announcement Flyer - Classroom Rental, Study Centre, Coworking Space, For Trainers"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Bottom Overlay with Lightbox Trigger */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between gap-2 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div className="text-left">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 block">
                      Official Launch Announcement
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-slate-900">
                      SAMUH INDIA Hub • Malakpet
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenFlyerModal && onOpenFlyerModal('hub');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition-all shrink-0 cursor-pointer"
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
