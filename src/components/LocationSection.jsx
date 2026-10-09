import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Train, Building, Copy, Check, ExternalLink } from 'lucide-react';
import { businessInfo, GOOGLE_MAPS_URL } from '../data/hubData';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessInfo.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <MapPin className="w-4 h-4 text-rose-600" />
            <span>Our Center Location in Hyderabad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Easy to Find. Steps from Metro Exit-D.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Conveniently situated right beside New Market Metro Station Exit-D in Malakpet Extension, Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card, Landmarks & Hours */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between text-left space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Building className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {businessInfo.name}
                  </h3>
                  <p className="text-xs text-blue-700 font-bold">
                    {businessInfo.category} • Malakpet
                  </p>
                </div>
              </div>

              {/* Exact Address formatted */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Exact Address:</span>
                </div>
                <div className="pl-6 text-slate-700 leading-relaxed space-y-0.5">
                  <p className="font-black text-slate-900">{businessInfo.address.line1}</p>
                  <p>{businessInfo.address.line2}</p>
                  <p>{businessInfo.address.line3}</p>
                  <p className="font-semibold text-slate-800">{businessInfo.address.city}, {businessInfo.address.state} - {businessInfo.address.pincode}</p>
                </div>

                <div className="pt-2 pl-6">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Landmark Guidance */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Metro Transit: </strong>
                    Take the Hyderabad Metro (Red Line) and alight at <strong>New Market Metro Station</strong>. Use <strong>Exit-D</strong> to reach immediately beside Gunj, Gate - 4.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Hub Timings: </strong>
                    {businessInfo.hours.summary}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Direct Contact: </strong>
                    <a href={businessInfo.phoneTel} className="text-blue-600 font-bold hover:underline">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call Center</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 min-h-[380px] sm:min-h-[440px]">
            {/* Top Bar for Map */}
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Malakpet Extension, Hyderabad (500036)</span>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1 font-bold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Card */}
            <div className="flex-1 relative w-full h-full min-h-[340px] bg-slate-100 flex flex-col justify-center items-center p-6 text-center">
              <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl text-left space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-xl bg-blue-100 text-blue-900 text-xs font-black uppercase tracking-wider">
                    Metro Station Exit-D
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Hyderabad Red Line
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    {businessInfo.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Near New Market Metro Station Exit-D, Beside Gunj, Gate - 4, Saleem Nagar Colony, Malakpet, Hyderabad
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block">Beside Gunj</span>
                    <span className="text-slate-500 text-[11px]">Gate - 4</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block">Metro Exit-D</span>
                    <span className="text-slate-500 text-[11px]">Immediate Walk-up</span>
                  </div>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Navigation (Google Maps)</span>
                </a>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="p-3.5 bg-white border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
              <span>📍 Beside Gunj, Saleem Nagar, Malakpet</span>
              <span className="font-bold text-slate-900">Exit-D Metro Direct Access</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
