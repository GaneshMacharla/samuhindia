import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Mail,
  MessageSquare,
  Clock,
  Train,
  Building,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Map as MapIcon,
  Image as ImageIcon
} from 'lucide-react';
import {
  businessInfo,
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_PLACE_URL,
  GOOGLE_MAPS_EMBED_URL
} from '../data/hubData';

export default function LocationSection() {
  const [addressCopied, setAddressCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [mapTab, setMapTab] = useState('embed'); // 'embed' | 'card'

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessInfo.address.full);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(businessInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <MapPin className="w-4 h-4 text-rose-600" />
            <span>Contact &amp; Center Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact Us &amp; Visit Center
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Conveniently situated in Malakpet, Hyderabad — just a <strong className="text-blue-950 font-bold">10-minute walk (approx. 500 m) from Exit-D, New Market Metro station</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Channels, Address & Social Profiles */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between text-left space-y-6">
            
            <div className="space-y-5">
              
              {/* Brand Header */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-950 text-white flex items-center justify-center shrink-0 shadow-md">
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

              {/* Exact Address formatted featuring Exit-D, New Market Metro station */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-700">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Center Address:</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {addressCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pl-6 text-slate-700 leading-relaxed space-y-0.5">
                  <p className="font-black text-blue-950 text-sm">
                    {businessInfo.address.metro}
                  </p>
                  <p>{businessInfo.address.line2}</p>
                  <p>{businessInfo.address.line3}</p>
                  <p className="font-semibold text-slate-800">
                    {businessInfo.address.city}, {businessInfo.address.state} - {businessInfo.address.pincode}
                  </p>
                </div>
              </div>

              {/* Official Email Channel */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-sm space-y-2">
                <div className="flex items-center justify-between font-bold text-blue-950">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Official Email:</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-600">
                  Please write an email to{' '}
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="font-black text-blue-900 hover:underline"
                  >
                    {businessInfo.email}
                  </a>{' '}
                  for all course enquiries, admissions, faculty applications, and room bookings.
                </p>

                <a
                  href={`mailto:${businessInfo.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline pt-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send email to {businessInfo.email} ↗</span>
                </a>
              </div>

              {/* Official WhatsApp Channel */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-sm space-y-2">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>WhatsApp Chat &amp; Enquiries:</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-mono font-bold">
                    {businessInfo.whatsappDisplay}
                  </span>
                </div>

                <p className="text-xs text-emerald-900/80">
                  Quick support on WhatsApp for batch schedules, student doubts, and classroom availability.
                </p>

                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline pt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Message on WhatsApp ↗</span>
                </a>
              </div>

              {/* Transit & Timings */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-1">
                <div className="flex items-start gap-2.5">
                  <Train className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Metro Transit: </strong>
                    Take the Hyderabad Metro (Red Line) to <strong>New Market Metro Station</strong>. From <strong>Exit-D</strong>, take an easy 10-minute walk (approx. 500 m) to Beside Gunj, Gate - 4, Saleem Nagar Colony.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Hub Timings: </strong>
                    {businessInfo.hours.summary}
                  </div>
                </div>
              </div>

              {/* Official Social Media Profiles (Instagram & X) */}
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 block">
                  Follow SILT Hub on Social Media
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  {/* Instagram */}
                  <a
                    href={businessInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-pink-400 hover:shadow-sm transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-900 block leading-tight">Instagram</span>
                      <span className="text-[10px] text-pink-600 font-semibold">{businessInfo.socials.instagramHandle}</span>
                    </div>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href={businessInfo.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-800 hover:shadow-sm transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-900 block leading-tight">X Profile</span>
                      <span className="text-[10px] text-slate-700 font-semibold">{businessInfo.socials.xHandle}</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map & Verified Google Profile Card */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white min-h-[440px]">
            
            {/* Top Bar for Map with Tabs */}
            <div className="p-3.5 sm:p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMapTab('embed')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                    mapTab === 'embed'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <MapIcon className="w-3.5 h-3.5" />
                  <span>Map View</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMapTab('card')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                    mapTab === 'card'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Verified Google Listing</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* View Body */}
            <div className="flex-1 relative w-full min-h-[360px] bg-slate-100">
              {mapTab === 'embed' ? (
                <>
                  <iframe
                    title="SAMUH INDIA Learning & Training Hub Location Map"
                    src={GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '360px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[360px]"
                  />

                  {/* Floating Action Card over Map */}
                  <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-200 text-left space-y-2 pointer-events-auto">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                      <span className="text-xs font-black text-slate-900">{businessInfo.shortName}</span>
                      <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full ml-auto">4.8★</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      Beside Gunj, Gate - 4, Saleem Nagar, Malakpet (10-min walk / 500 m from Exit-D Metro)
                    </p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-xs"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Navigate in Google Maps ↗</span>
                    </a>
                  </div>
                </>
              ) : (
                <div className="w-full h-full min-h-[360px] p-4 flex items-center justify-center bg-slate-900">
                  <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <img
                      src="/images/google-maps-card.png"
                      alt="SAMUH INDIA Learning & Training Hub Verified Google Profile"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-3 bg-white text-slate-900 flex items-center justify-between">
                      <span className="text-xs font-black">Google Verified Profile</span>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950"
                      >
                        Open Maps
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom info strip with Metro directions and reliable Maps button */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <div className="text-left space-y-0.5">
                <span className="font-bold text-slate-900 block">
                  📍 Beside Gunj, Gate - 4, Saleem Nagar Colony, Malakpet
                </span>
                <span className="text-blue-700 font-semibold">
                  10-minute walk (approx. 500 m) from Exit-D of New Market Metro
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-blue-950 text-amber-300 hover:bg-blue-900 transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Launch Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
