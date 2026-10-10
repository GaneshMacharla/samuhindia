import React, { useState, useEffect } from 'react';
import { X, Download, Mail, MessageSquare, ExternalLink, GraduationCap, Building2 } from 'lucide-react';
import { businessInfo, STUDENT_REGISTRATION_FORM_URL, CLASSROOM_RENTAL_FORM_URL } from '../data/hubData';

export default function FlyerModal({ isOpen, onClose, initialTab = 'student' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const currentFlyer =
    activeTab === 'student'
      ? {
          src: '/images/silt-student-flyer.jpg',
          alt: 'Official SILT Hub Student Announcement Flyer - Learn Better, Score Higher',
          downloadName: 'SILT-Student-Coaching-Flyer.jpg',
          title: 'Official Student Announcement Flyer',
          desc: 'Admissions, academic coaching, key subjects & exam preparation',
          formUrl: STUDENT_REGISTRATION_FORM_URL,
          formBtnText: 'Student Registration Form'
        }
      : {
          src: '/images/silt-classrooms-flyer.jpg',
          alt: 'SILT Education Hub Classroom Spaces Available Flyer - Malakpet Hyderabad',
          downloadName: 'SILT-Classrooms-Space-Flyer.jpg',
          title: 'Classroom on Rent Announcement Flyer',
          desc: 'Modern classrooms (10-30 students) for teachers, tutors & institutions',
          formUrl: CLASSROOM_RENTAL_FORM_URL,
          formBtnText: 'Classrooms Registration Form'
        };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="flyer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col text-left border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 id="flyer-modal-title" className="text-base font-bold text-blue-950">
              {currentFlyer.title}
            </h3>
            <p className="text-xs text-slate-500">
              {currentFlyer.desc}
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

        {/* Tab Switcher */}
        <div className="px-5 py-2.5 bg-slate-100/90 border-b border-slate-200 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('student')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'student'
                ? 'bg-amber-400 text-slate-950 shadow-sm border border-amber-300'
                : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Flyer</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('classroom')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'classroom'
                ? 'bg-blue-900 text-white shadow-sm border border-blue-800'
                : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Classroom on Rent Flyer</span>
          </button>
        </div>

        {/* Modal Image Body with Scroll */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-100 flex items-center justify-center min-h-[300px]">
          <img
            src={currentFlyer.src}
            alt={currentFlyer.alt}
            className="w-full max-w-lg rounded-xl shadow-md border border-slate-200 object-contain mx-auto"
          />
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={currentFlyer.src}
              download={currentFlyer.downloadName}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <a
              href={currentFlyer.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 border border-amber-300 transition-all shadow-xs"
            >
              <span>{currentFlyer.formBtnText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${businessInfo.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
