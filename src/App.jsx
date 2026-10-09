import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUs from './components/WhyChooseUs';
import FacultyMentorSection from './components/FacultyMentorSection';
import GoogleFormPortal from './components/GoogleFormPortal';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import GoogleVerificationModal from './components/GoogleVerificationModal';
import FlyerModal from './components/FlyerModal';

export default function App() {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-amber-200 selection:text-slate-900">
      
      {/* 1. Header Navigation */}
      <Navbar onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Vibrant Hero Section */}
        <Hero onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. About SILT Hub & Mission */}
        <AboutSection onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

        {/* 5. Complete Course Spectrum with Category Filter & Free Graduate Course */}
        <ProgramsSection />

        {/* 6. Why Choose SILT Hub (6 Core Pillars from Flyer) */}
        <WhyChooseUs />

        {/* 7. Faculty, Mentors & Academic Partners Recruitment */}
        <FacultyMentorSection />

        {/* 8. Google Form Registration Hub (Pure Frontend, Zero Backend) */}
        <GoogleFormPortal />

        {/* 9. Verified Google Reviews */}
        <ReviewsSection />

        {/* 10. Center Location & Metro Exit-D Navigation */}
        <LocationSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

      {/* 12. Mobile Sticky Bottom Action Bar (Call | WhatsApp | Google Form) */}
      <MobileStickyBar />

      {/* 13. Official Launch Flyer Lightbox Modal */}
      <FlyerModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
      />

      {/* 14. Google Verification Modal */}
      <GoogleVerificationModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
      />
    </div>
  );
}
