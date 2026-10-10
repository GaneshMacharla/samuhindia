import React from 'react';
import {
  Building2,
  CheckCircle2,
  ExternalLink,
  Mail,
  MessageSquare,
  Monitor,
  Users,
  Coffee,
  Sparkles,
  MapPin,
  ShieldCheck,
  DoorOpen,
  Wifi,
  Wind
} from 'lucide-react';
import { businessInfo, CLASSROOM_RENTAL_FORM_URL } from '../data/hubData';

export default function ClassroomRentalSection({ onOpenFlyerModal }) {
  const facilityCards = [
    {
      icon: Users,
      badge: "Batch Size: 10 to 30",
      title: "Classrooms for 10 to 30 Students",
      desc: "Thoughtfully sized classrooms designed for better concentration and close faculty-student interaction. No overcrowded halls — every learner gets personal attention.",
      color: "amber"
    },
    {
      icon: Building2,
      badge: "Capacity: 120 to 150",
      title: "120 to 150 Students in Single Slot",
      desc: "All together, 120 to 150 students can comfortably accommodate simultaneously across our multiple partitioned, air-conditioned rooms in a single time slot.",
      color: "blue"
    },
    {
      icon: Monitor,
      badge: "IT & Digital Skills",
      title: "Fully Equipped Computer Lab",
      desc: "Modern networked computer workstations with high-speed internet, ready for computer science courses, IT certifications, coding bootcamps, and online mock tests.",
      color: "indigo"
    },
    {
      icon: DoorOpen,
      badge: "1-on-1 Mentorship",
      title: "Private Counseling Rooms",
      desc: "Quiet, private consultation cabins dedicated to one-on-one student mentoring, personalized career guidance, doubt clarification desks, and parent meetings.",
      color: "purple"
    },
    {
      icon: Coffee,
      badge: "Refreshments",
      title: "Clean Refreshment Pantry",
      desc: "Dedicated pantry area equipped with hygienic filtered drinking water, tea/coffee facilities, and comfortable break space for faculty and students.",
      color: "rose"
    },
    {
      icon: ShieldCheck,
      badge: "Hygiene & Comfort",
      title: "Separate Washrooms for Girls & Boys",
      desc: "Clean, hygienic, well-maintained separate washrooms for girls and boys, ensuring safety, privacy, and full comfort throughout the day.",
      color: "emerald"
    }
  ];

  return (
    <section id="classrooms" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden scroll-mt-16">
      
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEGMENT III HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black mb-3 shadow-md">
            <Building2 className="w-4 h-4 text-slate-950" />
            <span>Segment III • Classrooms &amp; Campus Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Classrooms (10 to 30 Capacity) &amp; Complete Campus Facilities
          </h2>

          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Classroom sizes engineered for better concentration and faculty - students interaction. All together, 120 to 150 students can accommodate in a single slot at SILT Hub, a 10-minute walk (~500 m) from Exit-D, New Market Metro station.
          </p>
        </div>

        {/* 6 CORE FACILITY CARDS (ALL USER REQUESTED AMENITIES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {facilityCards.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white/10 border border-white/15 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md">
                      <Icon className="w-6 h-6 text-slate-950" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 text-amber-300 border border-white/15">
                      {fac.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {fac.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Available at SILT Hub</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2-Column Showcase: Photos & Rental Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual Flyer & Facility Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div
              onClick={() => onOpenFlyerModal && onOpenFlyerModal('classroom')}
              className="relative rounded-3xl overflow-hidden border-4 border-amber-400/60 shadow-2xl bg-blue-900 group cursor-pointer"
            >
              <img
                src="/images/silt-classrooms-flyer.jpg"
                alt="Looking for Class Rooms? Your Search Ends Here - SILT Education Hub Malakpet Hyderabad"
                className="w-full h-[380px] sm:h-[440px] object-contain bg-blue-950 p-2 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 shadow-md">
                <div className="text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 block">
                    10-Min Walk From Metro Exit-D
                  </span>
                  <p className="text-xs sm:text-sm font-black text-slate-900">
                    Classrooms (10-30 Students)
                  </p>
                </div>
                {onOpenFlyerModal && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenFlyerModal('classroom');
                    }}
                    className="px-3 py-1.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-xs cursor-pointer"
                  >
                    View Flyer
                  </button>
                )}
              </div>
            </div>

            {/* Micro facility preview thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl overflow-hidden border border-white/20 aspect-video">
                <img src="/images/classroom-front.png" alt="Classroom Desks (10-30 Seating)" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/20 aspect-video">
                <img src="/images/classroom-overview.png" alt="Classroom Cabins" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/20 aspect-video">
                <img src="/images/counseling-desk.png" alt="Private Counseling Room" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column: Classroom Space Rental Details & Google Form Card */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 border-4 border-amber-400 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-1">
                    Classroom Booking &amp; Rental
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-blue-950">
                    Looking for Class Rooms? Your Search Ends Here!
                  </h3>
                </div>
                <div className="text-xs font-bold text-slate-600 sm:text-right">
                  Hourly • Daily • Monthly
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Ideal for independent teachers, tutors, faculty, institutes, and workshop organizers. Rent ready-to-teach classrooms (10 to 30 students capacity) with full access to our computer lab, counseling rooms, pantry, and separate washrooms.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-semibold pt-1">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10 to 30 student class sizes</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>120 to 150 single-slot capacity</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Computer lab &amp; counseling rooms</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pantry &amp; separate washrooms</span>
                </div>
              </div>

              {/* Action Buttons: Google Form & WhatsApp & Email (No Phone) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={CLASSROOM_RENTAL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="classroom-rental-cta-btn"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-400/30 border border-amber-300 group"
                >
                  <Building2 className="w-5 h-5 text-slate-950" />
                  <span>Open Classroom Rental Form</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
                <span className="font-mono">forms.gle/b3M4xQ1Vjqx4WypB7</span>
                <a
                  href={`mailto:${businessInfo.email}?subject=Classroom%20Rental%20Inquiry`}
                  className="inline-flex items-center gap-1 font-bold text-blue-700 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email: {businessInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Amenities Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200">
              <span className="flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-amber-300" /> Air Conditioned
              </span>
              <span className="flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-amber-300" /> High-Speed Wi-Fi
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-300" /> 10-Min Walk from Metro Exit-D
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
