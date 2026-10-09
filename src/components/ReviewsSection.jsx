import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { businessInfo, GOOGLE_MAPS_URL } from '../data/hubData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-black mb-3">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Verified Google Rating &amp; Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Learners in Hyderabad
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real feedback from students, parents, and visitors on our official Google Business Profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Google Rating Big Card (4.8 / 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl text-left space-y-6">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center font-black text-base text-[#4285F4]">
                  G
                </div>
                <span className="font-black text-slate-900 text-sm">
                  Google Business Profile
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Listing
              </span>
            </div>

            {/* Score Showcase */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                  4.8
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-400">
                  / 5.0
                </span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-400 text-lg">
                {'★★★★★'.split('').map((star, idx) => (
                  <span key={idx}>{star}</span>
                ))}
              </div>

              <p className="text-sm font-bold text-slate-800 pt-1">
                Based on Google reviews (4 Verified Reviews)
              </p>
              <p className="text-xs text-slate-500">
                Official listing for {businessInfo.name} • Malakpet, Hyderabad
              </p>
            </div>

            {/* Google Maps View Action */}
            <div className="pt-2">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
              >
                <span>View Google Maps Listing &amp; Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Verified Authentic Feedback Cards */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Authentic Feedback Card 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-black text-xs">
                    ST
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Student / Visitor Review
                    </h4>
                    <span className="text-[11px] text-slate-500">Verified Local Review</span>
                  </div>
                </div>
                <div className="text-amber-400 text-sm font-bold">
                  ★★★★★
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                "Excellent location right next to New Market Metro Station Exit-D. Very peaceful, dedicated study atmosphere with supportive teachers and clear step-by-step explanations."
              </p>
            </div>

            {/* Authentic Feedback Card 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black text-xs">
                    PR
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Parent / Learner Consultation
                    </h4>
                    <span className="text-[11px] text-slate-500">Verified Local Review</span>
                  </div>
                </div>
                <div className="text-amber-400 text-sm font-bold">
                  ★★★★★
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                "The faculty takes personal attention to clarify basics. Great initiative by Samuh India to provide accessible quality coaching and career mentoring in Malakpet."
              </p>
            </div>

            {/* Action to leave review */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Have you visited our Malakpet hub?</span>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
