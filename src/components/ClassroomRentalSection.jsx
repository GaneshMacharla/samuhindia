import React from 'react';
import { Building2, CheckCircle2, ExternalLink, Phone, MessageSquare, Clock, MapPin, Sparkles, Wifi, ShieldCheck, Users } from 'lucide-react';
import { businessInfo, CLASSROOM_RENTAL_FORM_URL, GOOGLE_MAPS_URL } from '../data/hubData';

export default function ClassroomRentalSection({ onOpenFlyerModal }) {
  const amenities = [
    { title: "Ready-To-Use Classrooms", desc: "Whiteboards, teacher podiums, and comfortable partitioned student seating." },
    { title: "Metro Station Exit-D", desc: "Beside Gunj, Gate-4, Saleem Nagar — 30 seconds walk from New Market Metro." },
    { title: "Flexible Rental Slots", desc: "Rent hourly, batch-wise, daily, or on a monthly recurring schedule." },
    { title: "High-Speed Wi-Fi & Power", desc: "Uninterrupted connectivity, high-speed internet, and power backup." },
    { title: "Quiet & Academic Ambiance", desc: "Disciplined, air-conditioned environment free from commercial noise." },
    { title: "Discussion & Counseling Cabins", desc: "Private cabins for 1-on-1 parent meetings, doubt desks, and test evaluations." }
  ];

  return (
    <section id="classrooms" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black mb-3 shadow-md">
            <Building2 className="w-4 h-4 text-slate-950" />
            <span>Classroom Spaces for Rent • Malakpet, Hyderabad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Looking for Class Rooms?{' '}
            <span className="text-amber-300 block sm:inline">Your Search Ends Here!</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            SILT Education Hub offers fully equipped, prime classrooms and coaching spaces for independent teachers, tutors, faculty, institutes, and workshop organizers right beside New Market Metro Exit-D.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual Flyer & Facility Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-4 border-amber-400/60 shadow-2xl bg-blue-900 group">
              <img
                src="/images/silt-classrooms-flyer.jpg"
                alt="Looking for Class Rooms? Your Search Ends Here - SILT Education Hub Malakpet Hyderabad"
                className="w-full h-[400px] sm:h-[480px] object-contain bg-blue-950 p-2 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 shadow-md">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 block">
                    Classroom Space Available
                  </span>
                  <p className="text-xs sm:text-sm font-black">
                    Beside Gunj, Malakpet Metro
                  </p>
                </div>
                {onOpenFlyerModal && (
                  <button
                    type="button"
                    onClick={onOpenFlyerModal}
                    className="px-3 py-1.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-xs"
                  >
                    View Flyer
                  </button>
                )}
              </div>
            </div>

            {/* Micro facility preview thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl overflow-hidden border border-white/20 aspect-video">
                <img src="/images/classroom-front.png" alt="Classroom Desks" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/20 aspect-video">
                <img src="/images/classroom-overview.png" alt="Classroom Cabins" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/20 aspect-video">
                <img src="/images/counseling-desk.png" alt="Discussion Table" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column: Amenities & Booking Form CTA Card */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-300" />
                <span>Why Host Your Batches at SILT Hub?</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-blue-100 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Classroom Rental Google Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 border-4 border-amber-400 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-1">
                    Instant Classroom Booking
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-blue-950">
                    Official Classroom Rental Form
                  </h4>
                </div>
                <div className="text-xs font-bold text-slate-600 sm:text-right">
                  Hourly • Daily • Monthly
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fill the quick Google Form with your batch requirements, preferred timing slots, student count, and subject details. We will assign the best suited classroom for your schedule.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={CLASSROOM_RENTAL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="classroom-rental-cta-btn"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-400/30 border border-amber-300 group"
                >
                  <Building2 className="w-5 h-5 text-slate-950" />
                  <span>Open Classroom Rent Form</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-mono">
                <span>forms.gle/b3M4xQ1Vjqx4WypB7</span>
                <a href={businessInfo.phoneTel} className="font-sans font-bold text-blue-700 hover:underline">
                  Call: {businessInfo.phone}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
