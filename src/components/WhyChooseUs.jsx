import React from 'react';
import { GraduationCap, Lightbulb, TrendingUp, Target, Users, Trophy, Train, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { corePillars, businessInfo, GOOGLE_FORM_URL } from '../data/hubData';

export default function WhyChooseUs() {
  const iconMap = {
    faculty: GraduationCap,
    concepts: Lightbulb,
    personal: TrendingUp,
    exam: Target,
    career: Users,
    results: Trophy
  };

  const colorStyles = {
    blue: { bg: 'bg-blue-500/10 text-blue-600', badge: 'bg-blue-100 text-blue-900 border-blue-200' },
    amber: { bg: 'bg-amber-500/10 text-amber-600', badge: 'bg-amber-100 text-amber-900 border-amber-200' },
    purple: { bg: 'bg-purple-500/10 text-purple-600', badge: 'bg-purple-100 text-purple-900 border-purple-200' },
    rose: { bg: 'bg-rose-500/10 text-rose-600', badge: 'bg-rose-100 text-rose-900 border-rose-200' },
    teal: { bg: 'bg-teal-500/10 text-teal-600', badge: 'bg-teal-100 text-teal-900 border-teal-200' },
    emerald: { bg: 'bg-emerald-500/10 text-emerald-600', badge: 'bg-emerald-100 text-emerald-900 border-emerald-200' }
  };

  return (
    <section id="why-silt" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-black mb-3">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Better Teachers, Brighter Futures!</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Learn at SILT Hub?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Designed from the ground up to give every learner conceptual mastery, individual attention, and unmatched convenience.
          </p>
        </div>

        {/* 6 Core Pillars Grid from Flyer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {corePillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || GraduationCap;
            const style = colorStyles[pillar.color] || colorStyles.blue;
            return (
              <div
                key={pillar.id}
                className="p-7 sm:p-8 rounded-3xl bg-slate-50 hover:bg-white border-2 border-slate-200/90 hover:border-slate-900 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${style.bg}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full border ${style.badge}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-bold text-amber-600 mb-3">
                    {pillar.tagline}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified Hub Pillar</span>
                  </span>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <span>Register ↗</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metro Convenience Feature Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-brand-navy-900 to-slate-950 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-lg">
              <Train className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl font-black text-white">
                Zero Traffic Hassle: Steps from New Market Metro Exit-D
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Direct walk-up right at Exit-D, beside Gunj, Gate - 4, Saleem Nagar Colony, Malakpet. Safe, fast, and punctual commute.
              </p>
            </div>
          </div>

          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
