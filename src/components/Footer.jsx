import React from 'react';
import { Mail, MessageSquare, MapPin, Clock, Star, ExternalLink, Sparkles } from 'lucide-react';
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

            {/* Quick Contact & Social Buttons (Email, WhatsApp, Socials) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                title={`Email: ${businessInfo.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessInfo.email}</span>
              </a>

              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-pink-300 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 transition-colors"
                title="Instagram @silt.hub"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* X */}
              <a
                href={businessInfo.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                title="X @ProfSMH"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation: 3 Segments & Official Forms */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              The 3 Core Segments
            </h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="#students" className="hover:text-amber-300 transition-colors font-bold text-white flex items-center gap-1">
                  <span>I. For Students</span>
                </a>
              </li>
              <li className="pl-3 text-xs text-blue-300">
                <a href={STUDENT_REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline flex items-center gap-1">
                  <span>★ Student Registration Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-amber-300 transition-colors font-bold text-white flex items-center gap-1">
                  <span>II. For Faculty &amp; Mentors</span>
                </a>
              </li>
              <li className="pl-3 text-xs text-blue-300">
                <a href={FACULTY_REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <span>Faculty Registration Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#classrooms" className="hover:text-amber-300 transition-colors font-bold text-white flex items-center gap-1">
                  <span>III. Classrooms &amp; Campus</span>
                </a>
              </li>
              <li className="pl-3 text-xs text-blue-300">
                <a href={CLASSROOM_RENTAL_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline flex items-center gap-1 font-semibold">
                  <span>Classroom Rental Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2 border-t border-blue-900">
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Location
                </a>
              </li>
              {onOpenFlyerModal && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenFlyerModal}
                    className="text-amber-300 hover:underline text-xs"
                  >
                    View Official Announcement Flyer
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Official Location */}
          <div className="lg:col-span-4 space-y-3 text-sm">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Center Location
            </h4>
            
            <div className="flex items-start gap-2.5 text-blue-100">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div className="leading-relaxed text-xs sm:text-sm">
                <p className="font-extrabold text-amber-300">{businessInfo.address.metro}</p>
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
              Exit-D, New Market Metro station, Beside Gunj, Saleem Nagar, Malakpet, Hyderabad.
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
