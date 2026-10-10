import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import StudentSegment from './components/StudentSegment';
import FacultyMentorSection from './components/FacultyMentorSection';
import ClassroomRentalSection from './components/ClassroomRentalSection';
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
      
      {/* 1. Header Navigation with 3 Segments & Quick CTAs */}
      <Navbar onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

      {/* Main Content Organized into 3 Core Segments */}
      <main className="flex-1">
        {/* 2. Hero Section featuring Exit-D New Market Metro & 3 Segments Navigator */}
        <Hero onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

        {/* 3. Verified Trust Strip */}
        <TrustStrip />

        {/* 4. SEGMENT I: Students Needs, Offerings & Registrations */}
        <StudentSegment />

        {/* 5. SEGMENT II: Faculty Requirements, Expectations & Registration */}
        <FacultyMentorSection />

        {/* 6. SEGMENT III: Classrooms (10-30 Capacity, 120-150 Slot Capacity, Lab, Pantry, Washrooms) */}
        <ClassroomRentalSection onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

        {/* 7. Verified Google Reviews */}
        <ReviewsSection />

        {/* 8. Contact Details with Address, Email, WhatsApp, Instagram & X Profiles, and Google Maps */}
        <LocationSection />
      </main>

      {/* 9. Footer */}
      <Footer onOpenFlyerModal={() => setIsFlyerModalOpen(true)} />

      {/* 10. Mobile Sticky Bottom Action Bar (Email Us | WhatsApp | Student Form) */}
      <MobileStickyBar />

      {/* 11. Official Launch Flyer Lightbox Modal */}
      <FlyerModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
      />

      {/* 12. Google Verification Modal */}
      <GoogleVerificationModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
      />
    </div>
  );
}
