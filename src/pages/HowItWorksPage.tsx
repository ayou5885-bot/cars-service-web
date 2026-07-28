import React from 'react';
import { PageView } from '../types';
import { ShieldCheck, CheckCircle2, Award, Clock, Users, PoundSterling, Wrench, Sparkles, ArrowRight, Smartphone, Car, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface HowItWorksPageProps {
  onNavigate: (page: PageView) => void;
  onTriggerQuote: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onTriggerQuote }) => {
  const detailedSteps = [
    {
      step: '01',
      title: 'Enter Your Reg & Postcode',
      desc: 'Our system links directly with the DVLA vehicle database. Simply enter your UK registration number and postcode, and we instantly identify your exact make, model, engine specification, and MOT status.',
      icon: <Car className="w-8 h-8 text-blue-600" />,
      badge: 'DVLA Live Lookup',
      highlights: [
        'Automatic vehicle spec detection (engine size, fuel type)',
        'Zero manual form typing required',
        'We match OE manufacturer service schedules'
      ]
    },
    {
      step: '02',
      title: 'Select Your Repair Requirement',
      desc: 'Choose from routine interim/full servicing, statutory MOT comparison, or specialist repairs like clutch replacement, cambelts, or brake discs. Unsure what is wrong? Pick an engine diagnostic scan.',
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      badge: '14+ Service Categories',
      highlights: [
        'Fixed-price servicing and MOT menus',
        'Symptom-based diagnostic selection',
        'Optional courtesy car or while-you-wait filters'
      ]
    },
    {
      step: '03',
      title: 'Receive & Compare Instant Quotes',
      desc: 'Our matching algorithm instantly notifies accredited workshops within your radius. You receive up to 4 competitive, fixed-price quote estimates delivered directly via email and SMS.',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      badge: 'Up to 4 Quotes in Minutes',
      highlights: [
        'Compare prices side-by-side without phone calls',
        'Read genuine Trustpilot & verified customer reviews',
        'Verify distance and garage amenities (Wi-Fi, EV tech)'
      ]
    },
    {
      step: '04',
      title: 'Book Online & Pay Directly at the Garage',
      desc: 'Select your preferred garage and reserve your appointment slot online in one click. You pay zero booking fees or upfront deposits. Simply settle your bill directly with the mechanic once the job is complete.',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      badge: 'Zero Upfront Payment',
      highlights: [
        '100% free online reservation',
        'No credit card required to book',
        'Backed by our No Surprise Pricing Pledge'
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
          Seamless & Transparent
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Modernizing UK Vehicle Repairs
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Say goodbye to calling around dozens of workshops for price quotes. WhoCanFixMyCar puts you in control with transparent comparison technology and vetted local mechanics.
        </p>
        <div className="pt-2">
          <button
            onClick={onTriggerQuote}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all inline-flex items-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>Compare Free Quotes Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 4 Detailed Steps */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">The 4-Step Quote Process</h2>
          <p className="text-slate-500 text-sm mt-1">From number plate entry to confirmed garage appointment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedSteps.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-200">{item.step}</span>
                </div>
                
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-800 inline-block mb-2">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{item.title}</h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Advantages:</p>
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vetting & Quality Pledge Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 space-y-8 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-blue-600 text-white text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full inline-block">
            Our Quality Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Rigorous UK Garage Vetting Standards
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We do not accept every workshop onto our platform. Every garage in our network of 15,300+ workshops must pass our comprehensive 5-stage accreditation review.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Insurance Verification', desc: 'Proof of comprehensive public liability and motor trade insurance coverage.' },
            { title: 'Trade Qualifications', desc: 'Certified City & Guilds, IMI (Institute of the Motor Industry) or equivalent technician badges.' },
            { title: 'OE Parts Compliance', desc: 'Strict commitment to using Original Equipment matching parts and manufacturer fluids.' },
            { title: 'Transparent Invoicing', desc: 'No unauthorized extra charges without prior video/photo explanation and driver consent.' }
          ].map((standard, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                0{i+1}
              </div>
              <h4 className="font-extrabold text-base text-white">{standard.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{standard.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>In partnership with leading UK motoring bodies:</span>
          </div>
          <div className="flex items-center gap-6 opacity-90">
            <img src="assets/images/logos/rac.svg" alt="RAC" className="h-6 rounded bg-white/10 px-2 py-0.5" />
            <img src="assets/images/logos/aa.svg" alt="AA" className="h-6 rounded bg-white/10 px-2 py-0.5" />
            <img src="assets/images/logos/motor-codes.svg" alt="Motor Codes" className="h-6" />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center bg-blue-50 rounded-3xl p-10 sm:p-16 border border-blue-100 space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Ready to compare repair quotes?</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-base">
          Join over 3,000,000 drivers across the UK who have saved time and money by booking their car maintenance online.
        </p>
        <div className="pt-2">
          <button
            onClick={onTriggerQuote}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-xl shadow-blue-600/25 transition-all inline-flex items-center gap-2"
          >
            <span>Get Instant Free Quotes</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
};
