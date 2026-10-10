import React from 'react';
import { Star, MapPin, Clock, ShieldCheck, GraduationCap, Gift } from 'lucide-react';
import { businessInfo, GOOGLE_FORM_URL } from '../data/hubData';

export default function TrustStrip() {
  return (
    <div className="bg-blue-50/70 text-slate-800 py-4 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
          
          {/* Trust Metric 1: Verified Google Rating */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shrink-0 shadow-xs">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">4.8 / 5</span>
                <span className="text-amber-500 text-xs">★★★★★</span>
              </div>
              <p className="text-[11px] text-slate-600 font-semibold">
                Google Business Profile
              </p>
            </div>
          </div>

          {/* Trust Metric 2: Skill & Placement Programs */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
              <Gift className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs sm:text-sm font-black text-emerald-800 block">
                Skill &amp; Placement
              </span>
              <p className="text-[11px] text-slate-600 font-medium">
                Free &amp; Chargeable Options
              </p>
            </div>
          </div>

          {/* Trust Metric 3: Metro Proximity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-800 shrink-0 shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs sm:text-sm font-black text-blue-950 block">
                Metro Connected
              </span>
              <p className="text-[11px] text-slate-600 font-medium">
                10-Min Walk (~500 m) from Metro Exit-D
              </p>
            </div>
          </div>

          {/* Trust Metric 4: Direct Google Form */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 border border-amber-500 flex items-center justify-center text-slate-950 shrink-0 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-black text-blue-900 hover:text-blue-700 underline block"
              >
                Register Online ↗
              </a>
              <p className="text-[11px] text-slate-600 font-medium">
                Google Form Portal
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
