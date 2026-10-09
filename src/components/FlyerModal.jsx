import React from 'react';
import { X, Download, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/hubData';

export default function FlyerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="flyer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col text-left border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 id="flyer-modal-title" className="text-base font-bold text-brand-navy-900">
              Official SILT Hub Announcement Flyer
            </h3>
            <p className="text-xs text-slate-500">
              Samuh India Learning &amp; Training Hub • Malakpet, Hyderabad
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Body with Scroll */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-100 flex items-center justify-center">
          <img
            src="/images/silt-hub-flyer.jpg"
            alt="Official SILT Hub Flyer - Samuh India Learning & Training Hub"
            className="w-full max-w-lg rounded-xl shadow-md border border-slate-200 object-contain mx-auto"
          />
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href="/images/silt-hub-flyer.jpg"
              download="SILT-Hub-Hyderabad-Flyer.jpg"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Flyer</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-brand-navy-900 hover:bg-brand-navy-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal-300" />
              <span>Call: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
