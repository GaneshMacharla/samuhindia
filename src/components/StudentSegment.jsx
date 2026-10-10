import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Gift,
  Sparkles,
  Check,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';
import { programs, studentNeedsList, STUDENT_REGISTRATION_FORM_URL } from '../data/hubData';

export default function StudentSegment() {
  const [activeCategory, setActiveCategory] = useState('All Courses');

  const categories = [
    'All Courses',
    'Higher School (9th & 10th)',
    'Intermediate (11 & 12)',
    'Higher Studies',
    'Competitive Exams',
    'Skill & Placement'
  ];

  const filteredPrograms = programs.filter((prog) => {
    if (activeCategory === 'All Courses') return true;
    if (activeCategory === 'Higher School (9th & 10th)') return prog.id === 'school-education';
    if (activeCategory === 'Intermediate (11 & 12)') return prog.id === 'intermediate';
    if (activeCategory === 'Higher Studies')
      return (
        prog.id === 'engineering' ||
        prog.id === 'medical-allied' ||
        prog.id === 'pharmacy' ||
        prog.id === 'graduation-degree'
      );
    if (activeCategory === 'Competitive Exams') return prog.id === 'competitive-exams';
    if (activeCategory === 'Skill & Placement') return prog.id === 'skill-placement';
    return true;
  });

  return (
    <section id="students" className="py-20 lg:py-28 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEGMENT I HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-black mb-3 shadow-xs">
            <GraduationCap className="w-4 h-4 text-blue-700" />
            <span>Segment I • For Students</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Students Needs, Offerings &amp; Registrations
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Empowering every learner with conceptual clarity, board exam excellence, competitive entrance ranks, and job-ready skills under expert faculty.
          </p>
        </div>

        {/* PART 1: STUDENT NEEDS & CHALLENGES */}
        <div className="mb-16">
          <div className="text-left mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-lg">
              Addressing What Students Need Most
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Transforming Challenges into Academic Confidence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {studentNeedsList.map((need, idx) => {
              const icons = [Lightbulb, Target, TrendingUp, Award];
              const IconComponent = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-300 flex items-center justify-center font-black mb-4 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {need.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {need.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>SILT Hub Guarantee</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: OFFERINGS & COURSE SPECTRUM */}
        <div className="mb-16">
          <div className="text-left mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-lg">
              Complete Course &amp; Training Offerings
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Academic Spectrum from Higher School to Career
            </h3>
          </div>

          {/* Featured Skill Training & Placement Banner */}
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 text-slate-950 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider">
                <Gift className="w-4 h-4 text-amber-300" />
                <span>Skill Training &amp; Placement • Free &amp; Chargeable Options</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-black text-slate-950">
                Career Skilling &amp; Placement Initiative
              </h4>

              <p className="text-sm text-slate-900 font-medium leading-relaxed">
                Empowering college students, graduates, and job seekers. <strong>Select foundational skill &amp; placement modules are completely free</strong>, with comprehensive advanced career tracks and job-ready bootcamps provided on an <strong>affordable chargeable basis</strong>.
              </p>

              <div className="pt-1 flex flex-wrap gap-2 text-xs font-bold">
                <span className="bg-slate-950/15 px-3 py-1 rounded-lg text-slate-950 border border-slate-950/20">
                  ✓ Select Free Foundational Modules
                </span>
                <span className="bg-slate-950/15 px-3 py-1 rounded-lg text-slate-950 border border-slate-950/20">
                  ✓ Advanced Chargeable IT &amp; Career Tracks
                </span>
                <span className="bg-slate-950/15 px-3 py-1 rounded-lg text-slate-950 border border-slate-950/20">
                  ✓ Spoken English, Resume Building &amp; Mock Interviews
                </span>
              </div>
            </div>

            <a
              href={STUDENT_REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-black bg-slate-950 text-amber-300 hover:bg-slate-900 active:scale-95 transition-all shadow-lg"
            >
              <span>Register for Skilling</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-start gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-950 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className={`bg-white rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between p-6 group hover:-translate-y-1 hover:shadow-xl ${prog.theme.border}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-xl ${prog.theme.badgeBg}`}>
                      {prog.badge}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Active Batch
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-900 transition-colors leading-tight">
                    {prog.name}
                  </h4>

                  <div className="mt-1 text-xs font-bold text-slate-500">
                    {prog.tagline}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                    {prog.description}
                  </p>

                  {/* Branches Pill tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      Covers / Streams
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.branches.map((br, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                        >
                          {br}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {prog.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={STUDENT_REGISTRATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-xs group-hover:shadow-md"
                  >
                    <span>Register on Student Form</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: STUDENT REGISTRATION PORTAL */}
        <div className="bg-gradient-to-br from-blue-950 via-[#0a2346] to-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white text-left border-4 border-amber-400 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
              Student Registration Portal
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Enroll in SILT Hub Batches Today
            </h3>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-medium">
              Take the first step toward high scores, conceptual mastery, and a bright future. Submit your details on our official Google Registration Form.
            </p>

            {/* Simple 3-Step Enrollment Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                <span className="text-amber-300 font-black text-xs block mb-1">Step 01</span>
                <span className="text-xs font-bold text-white block">Fill Google Form</span>
                <span className="text-[11px] text-blue-200">Share your class, subject &amp; goals</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                <span className="text-amber-300 font-black text-xs block mb-1">Step 02</span>
                <span className="text-xs font-bold text-white block">Academic Counseling</span>
                <span className="text-[11px] text-blue-200">Meet subject experts near Metro Exit-D (500m)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                <span className="text-amber-300 font-black text-xs block mb-1">Step 03</span>
                <span className="text-xs font-bold text-white block">Batch Allotment</span>
                <span className="text-[11px] text-blue-200">Start learning in small cohorts (10-30)</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={STUDENT_REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="student-segment-google-form-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-400/25 border border-amber-300"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Open Student Registration Google Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <span className="text-xs text-blue-300 font-mono text-center sm:text-left">
                forms.gle/wgLcag7Eg7Hw3PVZ9
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
