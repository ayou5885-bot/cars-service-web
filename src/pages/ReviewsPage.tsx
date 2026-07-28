import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/mockData';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ReviewsPageProps {
  onTriggerQuote: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onTriggerQuote }) => {
  const [filterService, setFilterService] = useState('All');

  const servicesList = ['All', 'Clutch Replacement', 'Full Service & MOT', 'Brake Discs & Pads', 'Timing Belt & Water Pump', 'Air Conditioning Re-gas', 'Engine Diagnostics'];

  const filteredReviews = filterService === 'All' 
    ? REVIEWS_DATA 
    : REVIEWS_DATA.filter(r => r.serviceType.toLowerCase().includes(filterService.toLowerCase()) || filterService.toLowerCase().includes(r.serviceType.toLowerCase()));

  return (
    <div className="py-12 sm:py-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full border border-emerald-200 font-extrabold text-xs shadow-sm">
          <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
          <span>VERIFIED BY TRUSTPILOT & MOTOR CODES</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Over 3,000,000 UK Drivers Served
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Read genuine feedback from drivers across England, Scotland, and Wales who compared local garage prices on our platform.
        </p>
      </div>

      {/* Trust Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-200/80">
        {[
          { label: 'Fast Quote Comparison', icon: '⚡' },
          { label: 'Trusted UK Garages', icon: '🛡️' },
          { label: 'Honest Fixed Pricing', icon: '💷' },
          { label: 'Easy Online Booking', icon: '📱' },
          { label: 'Professional Service', icon: '🔧' },
          { label: 'Excellent Experience', icon: '⭐' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm text-center space-y-1">
            <span className="text-xl block">{item.icon}</span>
            <span className="font-extrabold text-xs text-slate-800 block">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Trustpilot Score Card */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-2 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight">4.8 out of 5.0 Trust Score</h3>
          <p className="text-slate-300 text-sm max-w-xl">
            Based on publicly verified driver feedback after job completion. Garages are rated on pricing accuracy, punctuality, and communication.
          </p>
        </div>

        <div className="flex items-center gap-6 bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
          <img src="assets/images/logos/trustpilot.svg" alt="Trustpilot" className="h-8 bg-white/10 px-3 py-1 rounded" />
          <div className="border-l border-slate-700 pl-6 text-left">
            <p className="text-xs font-bold uppercase text-slate-400">Verified Reviews</p>
            <p className="text-lg font-extrabold text-white">100% Genuine</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap border-b border-slate-200 pb-4">
        {servicesList.map((srv) => {
          const isActive = filterService === srv;
          return (
            <button
              key={srv}
              onClick={() => setFilterService(srv)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {srv}
            </button>
          );
        })}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReviews.map((rev) => (
          <motion.div
            key={rev.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6 relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-semibold">{rev.date}</span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block">
                  {rev.serviceType}
                </span>
                <h4 className="font-extrabold text-sm text-slate-900 mt-1">{rev.vehicle}</h4>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <div>
                  <h5 className="font-extrabold text-sm text-slate-900 flex items-center gap-1">
                    <span>{rev.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 inline" />
                  </h5>
                  <p className="text-[11px] text-slate-500">{rev.location} • Booked at <strong className="text-slate-700">{rev.garageName}</strong></p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-blue-50 rounded-3xl p-10 sm:p-16 border border-blue-100 space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Experience our 5-star service for yourself</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-base">
          Get free quotes for your vehicle in less than 2 minutes. Pay nothing until your car repair is finished.
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
