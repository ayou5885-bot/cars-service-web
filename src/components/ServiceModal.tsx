import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, AlertTriangle, Shield, Clock, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onTriggerQuote: (serviceSlug: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onTriggerQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden relative max-h-[90vh] flex flex-col"
      >
        {/* Banner header with image background */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 shrink-0 overflow-hidden">
          <img
            src={service.imagePath}
            alt={service.title}
            className="w-full h-full object-cover opacity-50 scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors z-10"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {service.category.toUpperCase()}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2">{service.title}</h3>
            <p className="text-sm text-slate-300 max-w-xl line-clamp-2 mt-1">{service.shortDescription}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
          
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                £
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-slate-400">UK Price Guide</p>
                <p className="text-sm font-extrabold text-slate-900">{service.priceEstimate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-slate-400">Time Required</p>
                <p className="text-sm font-extrabold text-slate-900">{service.timeEstimate}</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-slate-400">Warranty Protection</p>
                <p className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">{service.warrantyIncluded}</p>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Service Overview</h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Warning Symptoms */}
          {service.symptoms && service.symptoms.length > 0 && (
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
              <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Common Warning Signs & Symptoms</span>
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-950">
                {service.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What's Included */}
          {service.includedChecks && service.includedChecks.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-blue-600" />
                <span>What's Included in This Service</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.includedChecks.map((check, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Trigger */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-xs font-bold text-slate-500 uppercase">Ready to book?</p>
              <p className="text-sm font-bold text-slate-900">Compare quotes from top garages near your postcode</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onTriggerQuote(service.slug);
              }}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group shrink-0"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Quotes for {service.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
