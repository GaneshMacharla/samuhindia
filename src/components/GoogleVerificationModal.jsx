import React from 'react';
import { X, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { businessInfo } from '../data/hubData';

export default function GoogleVerificationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 id="modal-title" className="text-sm font-bold text-brand-navy-900">
              Verified Google Business Profile
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content with Image */}
        <div className="p-4 bg-slate-100/60 text-center space-y-3">
          <div className="max-h-[60vh] overflow-auto rounded-xl border border-slate-200 bg-white">
            <img
              src="/images/google-maps-card.png"
              alt="Google Maps Profile Screenshot for SAMUH INDIA"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-xs text-slate-500">
            Reference screenshot captured from the official Google Maps listing showing the verified rating (4.8★ with 4 reviews) and Malakpet location.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
          <a
            href={businessInfo.maps.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-teal-800"
          >
            <span>Open live on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-brand-navy-900 hover:bg-brand-navy-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
