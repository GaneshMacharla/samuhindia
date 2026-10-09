import React from 'react';
import { ExternalLink, CheckCircle2, MessageSquare, Phone, Sparkles, FileText, GraduationCap, Gift, MapPin } from 'lucide-react';
import { businessInfo, GOOGLE_FORM_URL } from '../data/hubData';

export default function GoogleFormPortal() {
  return (
    <section id="register" className="py-20 lg:py-28 bg-gradient-to-b from-blue-950 via-[#0a2346] to-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-500/15 via-amber-400/15 to-blue-600/15 blur-3xl pointer-events-none rounded-full" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black mb-4 shadow-md">
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Official Google Registration Portal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Register With SILT Hub Today
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Whether you want to join as <span className="text-amber-300 font-bold">Faculty or Mentor</span>, enroll in our <span className="text-amber-300 font-bold">Skill Training &amp; Placement Tracks</span> (Free &amp; Chargeable options), or secure <span className="text-white font-bold">Student Coaching</span> for Higher School, Inter, or Higher Studies, complete your registration on our official Google Form.
          </p>
        </div>

        {/* Central Card */}
        <div className="relative bg-white/10 border-2 border-white/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Form Details & Instructions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Single Convenient Form For All Categories</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                One Form. Endless Opportunities.
              </h3>

              <div className="space-y-4 text-slate-200">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Faculty, Mentors &amp; Subject Experts
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                      Apply with your teaching specialization, experience, and available batch slots across Higher School (9th-10th), Inter, Degree, Medical, or Engg.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 mt-0.5">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Skill Training &amp; Placement (Free &amp; Chargeable)
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                      Enroll for select free foundational modules (Spoken English, digital literacy) or advanced professional career &amp; placement tracks on chargeable basis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Student Admissions &amp; Course Inquiries
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                      Select Higher School (9th &amp; 10th), Intermediate (11 &amp; 12), Board (CBSE / ICSE / TG State Board), or Higher Studies &amp; Entrances (JEE / NEET / EAPCET).
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Landmark reminder */}
              <div className="flex items-center gap-2 text-xs text-blue-200 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SILT Hub: Near New Market Metro Exit-D, Beside Gunj, Saleem Nagar, Malakpet</span>
              </div>

            </div>

            {/* Right Column: Prominent Direct Google Form Button Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6 text-slate-900 border-4 border-amber-400">
                
                {/* Glowing badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900 text-amber-300 text-xs font-black uppercase tracking-wider mx-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Registration</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-black text-blue-950">
                    Official Registration Form
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Directly hosted on Google Forms. Quick, secure, and accessible on any device.
                  </p>
                </div>

                {/* Primary Giant Google Form CTA Button (Sunny Gold) */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="google-form-main-btn"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-400/30 border border-amber-300 group"
                >
                  <span>Open Google Form</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Fallback & Instant Help */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <span className="text-xs text-slate-500 block font-bold">
                    Need instant consultation or assistance?
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={businessInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={businessInfo.phoneTel}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-blue-950 bg-slate-100 hover:bg-blue-50 border border-slate-200 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>Call Now</span>
                    </a>
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
