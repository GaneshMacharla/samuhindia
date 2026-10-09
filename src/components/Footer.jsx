import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Star, ExternalLink, Sparkles } from 'lucide-react';
import {
  businessInfo,
  STUDENT_REGISTRATION_FORM_URL,
  FACULTY_REGISTRATION_FORM_URL,
  CLASSROOM_RENTAL_FORM_URL,
  GOOGLE_MAPS_URL
} from '../data/hubData';

export default function Footer({ onOpenFlyerModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-100 pt-16 pb-28 md:pb-16 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-blue-900/80 text-left">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-400 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg border border-amber-300">
                SILT
              </div>
              <div>
                <span className="font-black text-lg text-white tracking-tight block">
                  {businessInfo.name}
                </span>
                <span className="text-xs text-amber-300 font-semibold">
                  {businessInfo.category} • Malakpet, Hyderabad
                </span>
              </div>
            </div>

            <p className="text-sm text-blue-200 leading-relaxed max-w-sm">
              "{businessInfo.tagline}" — {businessInfo.supportingText}
            </p>

            {/* Slogan Pill */}
            <div className="text-xs font-semibold text-amber-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{businessInfo.futureTagline}</span>
            </div>

            {/* Google Rating */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-xs text-left">
                <span className="font-bold text-white">4.8 / 5 Rating</span>
                <span className="text-blue-200 ml-1.5">• 4 Verified Google Reviews</span>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessInfo.phone}</span>
              </a>

              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {onOpenFlyerModal && (
                <button
                  type="button"
                  onClick={onOpenFlyerModal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-colors"
                >
                  <span>Launch Flyer</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Navigation & Registration Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navigation &amp; Registration
            </h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About SILT Hub
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href={STUDENT_REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline flex items-center gap-1 font-black"
                >
                  <span>★ Student Registration Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#skill-placement" className="hover:text-amber-300 transition-colors font-bold text-amber-400">
                  Skill &amp; Placement Tracks
                </a>
              </li>
              <li>
                <a
                  href={FACULTY_REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white hover:underline flex items-center gap-1"
                >
                  <span>Faculty Registration Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={CLASSROOM_RENTAL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Classroom Rental Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors">
                  Faculty &amp; Mentor Hiring
                </a>
              </li>
              <li>
                <a href="#classrooms" className="hover:text-white transition-colors">
                  Classrooms For Rent
                </a>
              </li>
              <li>
                <a href="#why-silt" className="hover:text-white transition-colors">
                  6 Core Pillars
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Metro Exit-D Location
                </a>
              </li>
            </ul>
          </div>

          {/* Official Location */}
          <div className="lg:col-span-4 space-y-3 text-sm">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Hub Location
            </h4>
            
            <div className="flex items-start gap-2.5 text-blue-100">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div className="leading-relaxed text-xs sm:text-sm">
                <p className="font-bold text-white">{businessInfo.address.line1}</p>
                <p>{businessInfo.address.line2}</p>
                <p>{businessInfo.address.line3}</p>
                <p>{businessInfo.address.city}, {businessInfo.address.state} - {businessInfo.address.pincode}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-blue-200 pt-2 border-t border-blue-900">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white">Hub Timings:</span>
                <p className="text-blue-300">{businessInfo.hours.summary}</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300 gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-blue-400">
              Beside Gunj, Saleem Nagar, Malakpet, Hyderabad. Direct access at Exit-D, New Market Metro.
            </p>
          </div>

          <div className="flex items-center gap-2 text-blue-200 font-semibold">
            <span>Building a Strong, Accessible Learning Ecosystem 🌱</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
