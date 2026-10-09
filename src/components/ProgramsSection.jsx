import React, { useState } from 'react';
import { BookOpen, ExternalLink, ArrowRight, Check, Gift, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { programs, businessInfo, GOOGLE_FORM_URL } from '../data/hubData';

export default function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

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
    if (activeCategory === 'Higher Studies') return prog.id === 'engineering' || prog.id === 'medical-allied' || prog.id === 'pharmacy' || prog.id === 'graduation-degree';
    if (activeCategory === 'Competitive Exams') return prog.id === 'competitive-exams';
    if (activeCategory === 'Skill & Placement') return prog.id === 'skill-placement' || prog.id === 'free-placement';
    return true;
  });

  return (
    <section id="courses" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Higher School (9th-10th) to Intermediate &amp; All Higher Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Courses &amp; Training Tracks
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Expert instruction, clear conceptual explanations, board &amp; university test series, and career placements all under one roof at SILT Hub Hyderabad.
          </p>
        </div>

        {/* Skill Training & Placement Special Feature Box */}
        <div id="skill-placement" className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 text-slate-950 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left relative overflow-hidden">
          <div id="free-course" className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider">
              <Gift className="w-4 h-4 text-amber-300" />
              <span>Skill Training &amp; Placement • Free &amp; Chargeable Programs</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
              Skill Training &amp; Placement Programs
            </h3>

            <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
              Equipping students, graduates, and job seekers with career-ready skills. <strong>Select foundational skill &amp; placement modules are completely free</strong>, while advanced specialized career tracks and job-ready bootcamps are provided on an <strong>affordable chargeable basis</strong> (all programs are not free).
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold">
              <span className="bg-slate-950/15 backdrop-blur-xs px-3 py-1 rounded-lg text-slate-950 border border-slate-950/20">
                ✓ Select Free Foundational Skilling
              </span>
              <span className="bg-slate-950/15 backdrop-blur-xs px-3 py-1 rounded-lg text-slate-950 border border-slate-950/20">
                ✓ Advanced Chargeable Career Tracks
              </span>
              <span className="bg-slate-950/15 backdrop-blur-xs px-3 py-1 rounded-lg text-slate-950 border border-slate-950/20">
                ✓ Resume &amp; Interview Placement Assistance
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-black bg-slate-950 text-amber-300 hover:bg-slate-900 active:scale-95 transition-all shadow-xl group"
            >
              <span>Register on Student Form</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Colorful Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`bg-white rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between p-6 group text-left hover:-translate-y-1 hover:shadow-2xl ${prog.theme.border}`}
            >
              <div>
                {/* Header Tag & Color Ribbon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-xl ${prog.theme.badgeBg}`}>
                    {prog.badge}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Batch
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-900 transition-colors leading-tight">
                  {prog.name}
                </h3>

                {/* Subtitle / Streams */}
                <div className="mt-1 text-xs font-bold text-slate-500">
                  {prog.tagline}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[50px]">
                  {prog.description}
                </p>

                {/* Branches Pill tags */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Covers / Branches
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
                    Key Features
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

              {/* Card Direct Google Form Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-black text-slate-900 bg-slate-100 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-xs"
                >
                  <span>Student Registration Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Assistance Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-900">
              Need personalized counseling or custom batch timings?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Connect directly with our counselors via WhatsApp or call for immediate assistance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-700" />
              <span>Call: {businessInfo.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
