import React from 'react';
import { PageView } from '../types';
import { ShieldCheck, Award, Wrench, Users, CheckCircle2, Sparkles, ArrowRight, HeartHandshake, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onTriggerQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onTriggerQuote }) => {
  return (
    <div className="py-12 sm:py-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
          Our Mission
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Bringing Trust & Transparency to UK Car Repairs
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Founded with a simple vision: drivers shouldn't have to guess if they are paying a fair price for vehicle maintenance. We built the UK's premier automotive comparison marketplace.
        </p>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <span className="bg-blue-600 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full inline-block">
            The WhoCanFixMyCar Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why We Re-engineered the Garage Experience
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            For decades, finding a reliable mechanic meant relying on word of mouth or driving from workshop to workshop asking for manual estimates. Technical jargon and opaque pricing created friction and distrust.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            WhoCanFixMyCar changed everything. By creating a digital bridge between UK drivers and vetted local garages, we introduced instant side-by-side quote comparison, verified customer reviews, and fixed-price menus that protect consumers while supporting hardworking local mechanics.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-black text-blue-600">3,000,000+</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5">UK Drivers Supported</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-black text-emerald-600">15,300+</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5">Vetted Workshops</div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 h-96 sm:h-[450px]">
          <img
            src="assets/images/gallery/workshop-1.jpg"
            alt="UK Workshop Standards"
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="bg-emerald-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
              OE Quality Guaranteed
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold">Modern Automotive Engineering</h4>
            <p className="text-xs sm:text-sm text-slate-300">Equipped with advanced diagnostic technology for modern ICE, hybrid, and electric vehicles.</p>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Excellence */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Four Core Principles</h2>
          <p className="text-slate-500 text-sm mt-1">What separates our platform from traditional automotive directories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Total Transparency',
              desc: 'Every quote displays exact breakdowns of labour and parts. No surprise extras without prior driver approval.',
              icon: <Globe className="w-6 h-6 text-blue-600" />
            },
            {
              title: 'Vetted Quality',
              desc: 'Garages must carry valid public liability insurance and professional trade accreditations to remain active.',
              icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
            },
            {
              title: 'Zero Upfront Fees',
              desc: 'We never take your money when you book online. You pay the garage directly once you are satisfied with the repairs.',
              icon: <Award className="w-6 h-6 text-amber-500" />
            },
            {
              title: 'UK Driver Support',
              desc: 'Our dedicated customer care team in the UK assists with any questions or dispute resolutions.',
              icon: <HeartHandshake className="w-6 h-6 text-rose-600" />
            }
          ].map((pillar, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Press & Accreditations Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-10 sm:p-14 border border-slate-800 text-center space-y-8 shadow-xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Industry Recognition
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Featured Across Leading UK Motoring Press
          </h3>
          <p className="text-slate-400 text-sm">
            Recognized for transforming consumer rights and pricing standards in the British automotive maintenance sector.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-90 pt-4 border-t border-slate-800">
          <img src="assets/images/logos/rac.svg" alt="RAC" className="h-8 rounded bg-white/10 px-2 py-0.5" />
          <img src="assets/images/logos/aa.svg" alt="AA" className="h-8 rounded bg-white/10 px-2 py-0.5" />
          <img src="assets/images/logos/trustpilot.svg" alt="Trustpilot" className="h-8 rounded bg-white/10 px-2 py-0.5" />
          <img src="assets/images/logos/motor-codes.svg" alt="Motor Codes" className="h-8 rounded" />
          <img src="assets/images/logos/press-bbc.svg" alt="BBC" className="h-7" />
          <img src="assets/images/logos/press-autoexpress.svg" alt="Auto Express" className="h-6" />
          <img src="assets/images/logos/press-whatcar.svg" alt="What Car" className="h-7" />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-blue-50 rounded-3xl p-10 sm:p-16 border border-blue-100 space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Join the smart way to repair your car</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-base">
          Get free quotes in minutes from accredited mechanics right in your neighborhood.
        </p>
        <div className="pt-2">
          <button
            onClick={onTriggerQuote}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-xl shadow-blue-600/25 transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>Compare Free Quotes Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
};
