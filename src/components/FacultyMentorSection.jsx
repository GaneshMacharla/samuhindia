import React from 'react';
import { Users, GraduationCap, ExternalLink, CheckCircle2, Mail, MessageSquare, Sparkles, HeartHandshake, Award, Clock, BookOpen } from 'lucide-react';
import { businessInfo, FACULTY_REGISTRATION_FORM_URL } from '../data/hubData';

export default function FacultyMentorSection() {
  const requirements = [
    {
      title: "Passion for Teaching",
      desc: "Genuine dedication to inspire learners, simplify difficult topics, and build real academic confidence."
    },
    {
      title: "Strong Subject Mastery",
      desc: "Deep conceptual foundations and proven competence in your academic stream or professional domain."
    },
    {
      title: "Clear Communication",
      desc: "Ability to break down complex theories, derivations, and formulas into engaging, student-friendly explanations."
    },
    {
      title: "Student-Centric Dedication",
      desc: "Commitment to conducting doubt clinics, tracking test performance, and providing personal guidance."
    }
  ];

  const expectations = [
    {
      title: "Small Cohorts (10 to 30 Students)",
      desc: "Enjoy teaching in intimate classrooms capped at 10–30 learners for effortless classroom engagement and true interaction."
    },
    {
      title: "Flexible Batch Slots",
      desc: "Select morning, evening, or weekend teaching slots tailored around your college, research, or work commitments."
    },
    {
      title: "Full Infrastructure Access",
      desc: "Air-conditioned classrooms, whiteboards, audio-visual aids, computer lab, private counseling rooms, and pantry."
    },
    {
      title: "Disciplined Academic Environment",
      desc: "Peaceful learning atmosphere steps from New Market Metro Exit-D, with complete administrative support."
    }
  ];

  const streams = [
    "Higher School (Class 9th & 10th - CBSE / ICSE / TG State Board)",
    "Intermediate (11th & 12th - MPC / BiPC / MEC / CEC)",
    "Engineering Disciplines (M1, M2, Core Branches & Polytechnic)",
    "Medical & Pharmacy Sciences (MBBS, BDS, D.Pharm, B.Pharm)",
    "Competitive Exams (JEE, NEET, EAPCET, UPSC, SSC, Banking)",
    "Graduation Subjects (BCA, B.Com, BBA, B.Sc, BA)",
    "Skill Training & Career Placement Mentors (Free & Chargeable Tracks)"
  ];

  return (
    <section id="faculty" className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden scroll-mt-16">
      
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEGMENT II HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold mb-4 backdrop-blur-md">
            <Users className="w-4 h-4 text-amber-300" />
            <span>Segment II • For Faculty &amp; Mentors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Faculty Requirements, Expectations &amp; Registration
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            SILT Hub is actively expanding its teaching, subject mentoring, and training panels across Hyderabad. Join our passionate educator community.
          </p>
        </div>

        {/* 2-Column Content Layout: Requirements & Expectations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          
          {/* Left Column: Requirements (What We Look For) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 block">
                      Part 1: What We Look For
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Faculty Requirements
                    </h3>
                  </div>
                </div>

                <div className="space-y-3.5 mt-4">
                  {requirements.map((req, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-white">{req.title}</h4>
                          <p className="text-xs text-blue-100 mt-1 leading-relaxed">{req.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Streams Tag List */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[11px] font-bold text-amber-300 block mb-2 uppercase tracking-wide">
                  Open Opportunities Across Streams:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {streams.map((stream, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold bg-white/10 text-blue-100 px-2.5 py-1 rounded-lg border border-white/15"
                    >
                      • {stream}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Expectations (What SILT Hub Provides) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-black">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-300 block">
                      Part 2: What SILT Hub Offers Educators
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Faculty Expectations &amp; Environment
                    </h3>
                  </div>
                </div>

                <div className="space-y-3.5 mt-4">
                  {expectations.map((exp, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-300/40 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-white">{exp.title}</h4>
                          <p className="text-xs text-blue-100 mt-1 leading-relaxed">{exp.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classroom sizes callout */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-xs text-amber-200">
                <span className="font-black text-amber-300 block text-sm mb-1">
                  10 to 30 Student Batch Focus
                </span>
                We deliberately cap classroom sizes at 10 to 30 students to provide an ideal teaching environment where faculty can interact directly with every student.
              </div>
            </div>
          </div>

        </div>

        {/* PART 3: FACULTY REGISTRATION PORTAL */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl text-left text-slate-900 border-4 border-amber-400 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-900 text-amber-300 text-xs font-black uppercase tracking-wider">
                Part 3: Faculty Registration Portal
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-blue-950 leading-tight">
                Submit Your Educator Profile Online
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Apply to teach with SILT Hub. Enter your subject specializations, qualifications, prior teaching experience, and preferred batch timings on our official Google Form.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={FACULTY_REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="faculty-registration-google-form-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-400/25 border border-amber-300 group"
                >
                  <GraduationCap className="w-5 h-5 text-slate-950" />
                  <span>Register as Faculty (Google Form)</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-xs text-slate-500 font-mono text-center sm:text-left">
                  forms.gle/ECdK7qZhB1R6WVP29
                </span>
              </div>
            </div>

            {/* Direct Academic Contact via Email / WhatsApp (No Phone) */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                Academic Queries &amp; Direct Contact:
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                For curriculum proposals or guest lecture discussions, please write an email to our academic desk or reach us on WhatsApp.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={`mailto:${businessInfo.email}?subject=Faculty%20Application%20Inquiry%20-%20SILT%20Hub`}
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-blue-950 bg-white hover:bg-blue-50 border border-slate-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span>{businessInfo.email}</span>
                </a>

                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Academic Desk</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
