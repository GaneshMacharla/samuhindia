import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Menu, X, ExternalLink, Star, Sparkles } from 'lucide-react';
import { businessInfo, STUDENT_REGISTRATION_FORM_URL } from '../data/hubData';

export default function Navbar({ onOpenFlyerModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'I. Students', href: '#students' },
    { name: 'II. Faculty', href: '#faculty' },
    { name: 'III. Classrooms & Campus', href: '#classrooms' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100 py-2.5 text-slate-800'
            : 'bg-white border-b border-slate-200/80 py-3.5 text-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name (Royal Blue & Sunny Gold) */}
            <a href="#" className="flex items-center gap-3 group text-left">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-900 flex items-center justify-center text-amber-400 font-black shadow-md shadow-blue-900/15 transition-transform group-hover:scale-105 shrink-0 border border-blue-800">
                <span className="text-sm sm:text-base font-black tracking-tight">SILT</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-black text-base sm:text-lg text-blue-950 tracking-tight leading-tight">
                    SILT Hub
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-700 border border-amber-300">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> 4.8★
                  </span>
                </div>
                <span className="text-[11px] text-blue-700 font-semibold tracking-wide">
                  Samuh India Learning &amp; Training
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (The 3 Segments + Contact) */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs (Email, WhatsApp, Socials, Student Register) */}
            <div className="hidden sm:flex items-center gap-2">
              {/* Instagram Profile */}
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-xl text-pink-600 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition-colors"
                title="Instagram Profile @silt.hub"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* X Profile */}
              <a
                href={businessInfo.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                title="X (Twitter) Profile @ProfSMH"
                aria-label="X Profile"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Email Us CTA */}
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                title={`Email: ${businessInfo.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden xl:inline">Email Us</span>
              </a>

              {/* View Flyer Button */}
              {onOpenFlyerModal && (
                <button
                  type="button"
                  onClick={onOpenFlyerModal}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Flyer</span>
                </button>
              )}

              {/* PRIMARY CTA: DIRECT STUDENT GOOGLE FORM */}
              <a
                href={STUDENT_REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md shadow-amber-400/25 border border-amber-300"
              >
                <span>Student Register</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={STUDENT_REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-black text-slate-950 bg-amber-400 sm:hidden"
              >
                Register
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
                <a
                  href={STUDENT_REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-center font-black text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Student Registration Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {onOpenFlyerModal && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenFlyerModal();
                    }}
                    className="w-full py-2.5 rounded-xl text-center font-bold text-blue-900 bg-blue-50 border border-blue-200 text-xs"
                  >
                    View Official Announcement Flyer
                  </button>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-blue-50 text-blue-900 border border-blue-200"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>Email Us</span>
                  </a>
                  <a
                    href={businessInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Social Links Row */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={businessInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-pink-600"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={businessInfo.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-800"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>X Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
