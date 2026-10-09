import React, { useState } from 'react';
import { MapPin, CheckCircle2, Phone, MessageSquare, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { businessInfo, centerPhotos, GOOGLE_MAPS_URL } from '../data/hubData';

export default function AboutSection({ onOpenFlyerModal }) {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-xs sm:text-sm font-black mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            About SILT Hub
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Learn | Train | Grow | Build Your Future
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-bold">{businessInfo.name}</strong> is an Education &amp; Career Development initiative located in Malakpet, Hyderabad, expanding high-impact Teaching, Training, Skill Development &amp; Placement activities.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Real Photo Showcase with Flyer */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-900 group">
              <img
                src={centerPhotos[activePhoto].src}
                alt={centerPhotos[activePhoto].alt}
                className="w-full h-[340px] sm:h-[420px] object-cover object-top transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-left flex items-end justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-xl bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1">
                    {centerPhotos[activePhoto].tag}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white drop-shadow">
                    {centerPhotos[activePhoto].caption}
                  </p>
                </div>
                {centerPhotos[activePhoto].isFlyer && onOpenFlyerModal && (
                  <button
                    type="button"
                    onClick={onOpenFlyerModal}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-white text-slate-950 hover:bg-slate-100 shadow-lg transition-all"
                  >
                    View Full
                  </button>
                )}
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {centerPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhoto(idx)}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all aspect-[4/3] ${
                    activePhoto === idx
                      ? 'border-amber-500 ring-2 ring-amber-400/40 shadow-md scale-105'
                      : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center italic">
              Verified announcement flyer &amp; actual center facilities in Malakpet, Hyderabad
            </p>
          </div>

          {/* Core Values & Pillars */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Our Vision For Hyderabad</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Building an Accessible Learning Ecosystem 🌱
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Join us in building a strong, accessible, and future-focused learning ecosystem to build a better nation. Located right beside New Market Metro Station Exit-D (Beside Gunj, Saleem Nagar), we remove the barriers to quality education.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Higher School to Higher Studies Spectrum
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Coaching across Higher School (9th &amp; 10th CBSE, ICSE, TG State Board), Intermediate (11th &amp; 12th), and all Higher Studies (Degree, Engineering, Medical, Pharmacy, and Competitive exams).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Skill Training &amp; Placement (Free &amp; Chargeable)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Select foundational skill training &amp; placement modules offered free of cost, with advanced professional career tracks on an affordable chargeable basis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Instant Metro Transit Access
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Located immediately at Metro Exit-D, ensuring safe, punctual, and weather-proof transit across Hyderabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>Get Metro Directions</span>
              </a>

              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hub: {businessInfo.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
