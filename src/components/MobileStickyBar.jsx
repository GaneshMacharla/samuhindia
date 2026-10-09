import React from 'react';
import { Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { businessInfo, GOOGLE_FORM_URL } from '../data/hubData';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Now Button */}
        <a
          href={businessInfo.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-blue-50 text-blue-950 font-bold text-[11px] active:scale-95 transition-all border border-slate-200"
        >
          <Phone className="w-4 h-4 text-blue-700 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-[11px] active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Student Registration Form Direct Button (Sunny Gold) */}
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] active:scale-95 transition-all shadow-md border border-amber-300"
        >
          <ExternalLink className="w-4 h-4 mb-0.5" />
          <span>Student Form</span>
        </a>

      </div>
    </div>
  );
}
