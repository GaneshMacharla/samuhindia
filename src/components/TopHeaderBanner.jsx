import React from 'react';

export default function TopHeaderBanner() {
  return (
    <div className="bg-white border-b border-slate-200/80 py-2 sm:py-3 px-4 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a href="#" className="block transition-transform hover:scale-[1.01]">
          <img
            src="/images/silt-header-banner.jpg"
            alt="Samuh India Learning & Training (SILT) Hub - Learn | Train | Grow | Build Your Future • Better Teachers, Brighter Futures!"
            className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl h-auto object-contain mx-auto max-h-[85px] sm:max-h-[105px] md:max-h-[120px]"
            loading="eager"
          />
        </a>
      </div>
    </div>
  );
}
