import React from 'react';
import { Bell, Sparkles } from 'lucide-react';
import { STUDENT_REGISTRATION_FORM_URL } from '../data/hubData';

export default function TopNoticeTicker() {
  const notices = [
    { text: "Admissions Open for 2026-27 Batches — Higher School (9th-10th), Intermediate (CBSE / ICSE / State Board) & Higher Studies", highlight: true },
    { text: "Career Skilling: Select Free Skill Training & Placement Modules + Advanced IT Tracks", highlight: false },
    { text: "Classrooms on Rent Available for Faculty & Institutes (10 to 30 Student Batch Size • AC & Wi-Fi)", highlight: false },
    { text: "Location: Beside Gunj, Gate – 4, Saleem Nagar Colony, Malakpet (~500 m / 10-min walk from Exit-D Metro)", highlight: false },
    { text: "Submit your details online: Google Registration Form is now active", highlight: true },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-950 via-[#0a2346] to-blue-950 text-white text-xs border-b border-amber-400/30 overflow-hidden relative z-50">
      <div className="max-w-7xl mx-auto flex items-center h-9 px-3 sm:px-4">
        
        {/* Pinned Badge on Left */}
        <div className="flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black px-2.5 py-1 rounded-md shrink-0 z-10 shadow-sm text-[10px] sm:text-xs tracking-wider uppercase">
          <Sparkles className="w-3 h-3 text-slate-950 animate-spin" style={{ animationDuration: '4s' }} />
          <span>NOTICES</span>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative flex-1 overflow-hidden ml-3 group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-blue-100 font-medium cursor-default">
            
            {/* First Set */}
            {notices.map((notice, idx) => (
              <span key={`notice-1-${idx}`} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className={notice.highlight ? "text-amber-300 font-bold" : "text-blue-100"}>
                  {notice.text}
                </span>
              </span>
            ))}

            {/* Duplicate Set for Seamless Infinite Loop */}
            {notices.map((notice, idx) => (
              <span key={`notice-2-${idx}`} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className={notice.highlight ? "text-amber-300 font-bold" : "text-blue-100"}>
                  {notice.text}
                </span>
              </span>
            ))}

          </div>
        </div>

        {/* Quick Link on Right */}
        <div className="hidden md:flex items-center gap-1 shrink-0 ml-3 pl-3 border-l border-blue-800 text-[11px]">
          <a
            href={STUDENT_REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:text-amber-200 font-bold hover:underline"
          >
            Register Now ↗
          </a>
        </div>

      </div>
    </div>
  );
}
