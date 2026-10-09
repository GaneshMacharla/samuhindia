import React from 'react';
import { ExternalLink, CheckCircle2, MessageSquare, Phone, Sparkles, GraduationCap, MapPin, Users, Building2, BookOpen, Star, ArrowRight } from 'lucide-react';
import {
  businessInfo,
  STUDENT_REGISTRATION_FORM_URL,
  FACULTY_REGISTRATION_FORM_URL,
  CLASSROOM_RENTAL_FORM_URL
} from '../data/hubData';

export default function GoogleFormPortal() {
  return (
    <section id="register" className="py-20 lg:py-28 bg-gradient-to-b from-blue-950 via-[#0a2346] to-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-amber-400/15 via-blue-500/15 to-emerald-400/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black mb-4 shadow-md">
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Official Google Registration Portals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Register With SILT Hub
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Fill your details on our official Google Forms. Student admissions are prioritized first, followed by faculty applications and classroom rental bookings.
          </p>
        </div>

        {/* 1. FIRST & PRIMARY: FEATURED STUDENT REGISTRATION FORM */}
        <div className="mb-10 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-amber-400 text-left relative overflow-hidden">
          {/* Top highlight badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
            <span>★ Priority #1 — Student Admissions &amp; Coaching</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Info & Stream Highlights */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-lg shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 leading-tight">
                    Student Registration Form
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-800 font-bold mt-1">
                    Higher School • Intermediate • Higher Studies • Competitive Exams • Skills
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Enroll for conceptual academic coaching, subject doubt clinics, and exam score booster batches at SILT Hub Malakpet. Get guided by experienced teachers and subject experts.
              </p>

              {/* Stream Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800 font-semibold pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Higher School:</strong> Class 9th &amp; 10th (CBSE / ICSE / State)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Intermediate:</strong> 11th &amp; 12th (MPC / BiPC / MEC / CEC)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Higher Studies:</strong> B.Tech, Medical, Pharmacy, Degree</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Entrances &amp; Skills:</strong> JEE, NEET, EAPCET, Soft Skills</span>
                </div>
              </div>
            </div>

            {/* Right Col: Prominent Gold CTA Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl flex flex-col justify-between space-y-5 border border-blue-900">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                  Official Google Registration
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Start Your Journey
                </h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Quick 2-minute registration. Directly accessible on mobile or PC.
                </p>
              </div>

              {/* Primary Massive Button */}
              <a
                href={STUDENT_REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="main-student-registration-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-400/30 border border-amber-300 group"
              >
                <span>Open Student Form</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="pt-2 border-t border-white/10 text-xs text-blue-200/80 font-mono">
                forms.gle/wgLcag7Eg7Hw3PVZ9
              </div>
            </div>

          </div>
        </div>

        {/* 2. REMAINING FORMS: FACULTY & CLASSROOM RENTAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Remaining Form A: Faculty & Mentor Registration */}
          <div className="bg-white/10 border-2 border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between text-left group hover:border-blue-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30">
                  Form #2 • Educators
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Faculty &amp; Mentor Form
                </h3>
                <p className="text-xs text-blue-200 font-semibold mt-1">
                  Experienced Teachers • Instructors • Subject Experts
                </p>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Join SILT Hub as a teaching faculty member or mentor across school, intermediate, engineering, medical, or competitive exam batches.
              </p>

              <div className="space-y-2 text-xs text-blue-100 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flexible batch timings &amp; schedules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct teaching opportunities</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
              <a
                href={FACULTY_REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="portal-faculty-registration-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-black text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-lg border border-blue-400 group-hover:scale-[1.02]"
              >
                <span>Open Faculty Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-blue-200/70 text-center font-mono">
                forms.gle/ECdK7qZhB1R6WVP29
              </p>
            </div>
          </div>

          {/* Remaining Form B: Classroom Space Rental */}
          <div className="bg-white/10 border-2 border-emerald-400/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between text-left group hover:border-emerald-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  Form #3 • Space Rental
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Classroom Rental Form
                </h3>
                <p className="text-xs text-emerald-300 font-semibold mt-1">
                  Looking for Class Rooms? Your Search Ends Here!
                </p>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Rent ready-to-teach air-conditioned classrooms &amp; cabins in Malakpet right next to New Market Metro Exit-D for your own batches.
              </p>

              <div className="space-y-2 text-xs text-blue-100 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hourly, daily &amp; monthly rentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Whiteboards, seating, Wi-Fi &amp; power backup</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
              <a
                href={CLASSROOM_RENTAL_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="portal-classroom-rent-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all shadow-lg border border-emerald-300 group-hover:scale-[1.02]"
              >
                <span>Open Classroom Rent Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-emerald-200/80 text-center font-mono">
                forms.gle/b3M4xQ1Vjqx4WypB7
              </p>
            </div>
          </div>

        </div>

        {/* Location & Instant Support Footer Strip */}
        <div className="mt-12 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200 text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Beside Gunj, Gate - 4, Saleem Nagar, Exit-D of New Market Metro Station, Malakpet, Hyderabad</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-white font-bold">Direct Assistance:</span>
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <span>•</span>
            <a
              href={businessInfo.phoneTel}
              className="inline-flex items-center gap-1 text-amber-300 hover:underline font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{businessInfo.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
