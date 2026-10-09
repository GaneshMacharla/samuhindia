import React from 'react';
import { Users, GraduationCap, ExternalLink, CheckCircle2, Phone, Sparkles, HeartHandshake } from 'lucide-react';
import { businessInfo, GOOGLE_FORM_URL } from '../data/hubData';

export default function FacultyMentorSection() {
  const qualifications = [
    { title: "Passion for Teaching", desc: "Genuine drive to inspire, explain clearly, and transform student confidence." },
    { title: "Strong Subject Knowledge", desc: "Deep conceptual depth and practical mastery in your academic or career domain." },
    { title: "Excellent Communication", desc: "Ability to simplify complex problems into easy, engaging explanations." },
    { title: "Commitment to Student Success", desc: "Dedication to guiding learners toward high scores and meaningful careers." }
  ];

  const streams = [
    "School Education (Class 1-10 CBSE / ICSE / State)",
    "Intermediate (MPC / BiPC / MEC / CEC)",
    "Engineering & Polytechnic Disciplines",
    "Medical & Pharmacy Sciences",
    "Competitive Exams (JEE, NEET, EAPCET, UPSC, SSC)",
    "Graduation Subjects (BCA, B.Com, BBA, B.Sc)",
    "Spoken English, Soft Skills & Placement Trainers"
  ];

  return (
    <section id="faculty" className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
      
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Academic Partnership &amp; Career Mentorship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Join Us as Faculty, Mentor or Academic Partner
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            SILT Hub is actively expanding its Teaching, Training, Skill Development &amp; Placement activities in Hyderabad. We invite experienced professionals, teachers, trainers, and mentors across all levels.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Who We Look For */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4 flex items-center gap-3">
                <HeartHandshake className="w-7 h-7 text-amber-300 shrink-0" />
                <span>What We Look For</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualifications.map((q, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{q.title}</h4>
                        <p className="text-xs text-blue-100 mt-1 leading-relaxed">{q.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities List */}
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-md">
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mb-3">
                Opportunities Across All Levels &amp; Specialisations
              </h4>
              <div className="flex flex-wrap gap-2">
                {streams.map((stream, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 text-white border border-white/15"
                  >
                    • {stream}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Form Registration Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-left text-slate-900 relative overflow-hidden border-4 border-amber-400">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900 text-amber-300 text-xs font-black uppercase tracking-wider mb-4">
                <span>Immediate Engagement</span>
              </div>

              <h3 className="text-2xl font-black text-blue-950">
                Faculty Registration Form
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submit your subject specialization, teaching experience, and preferred batch slots via our official Google Registration Form.
              </p>

              {/* DIRECT GOOGLE FORM LINK (Sunny Gold) */}
              <div className="mt-6 space-y-3">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-400/30 border border-amber-300 group"
                >
                  <GraduationCap className="w-5 h-5 text-slate-950" />
                  <span>Register on Google Form</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <p className="text-[11px] text-slate-500 text-center font-mono">
                  forms.gle/ECdK7qZhB1R6WVP29
                </p>
              </div>

              {/* Direct query line */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700">
                <span className="font-semibold">Have questions?</span>
                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:underline transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call {businessInfo.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
