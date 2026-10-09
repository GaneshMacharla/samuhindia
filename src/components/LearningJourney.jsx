import React from 'react';
import { learningSteps, businessInfo } from '../data/hubData';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function LearningJourney() {
  return (
    <section id="journey" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-50 border border-brand-teal-200 text-brand-teal-900 text-xs sm:text-sm font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-brand-teal-600" />
            Your Pathway to Success
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 tracking-tight">
            The Learning Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A simple, supportive 4-step roadmap to guide you from initial inquiry to real skill mastery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative text-left">
          {learningSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-card hover:border-brand-teal-400 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-brand-navy-900 text-brand-teal-300 font-extrabold text-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Stage {index + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-brand-navy-900 group-hover:text-brand-teal-700 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Visual Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-brand-teal-700 font-semibold">
                <span>Phase {index + 1} of 4</span>
                <Sparkles className="w-4 h-4 text-brand-amber-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-brand-navy-900 hover:bg-brand-navy-800 transition-all shadow-md shadow-brand-navy-900/10"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-4 h-4 text-brand-teal-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
