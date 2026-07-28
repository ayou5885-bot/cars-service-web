import React, { useState } from 'react';
import { VRN_DATABASE } from '../data/mockData';
import { VRNLookupResult } from '../types';
import { Search, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VRNLookupBoxProps {
  onQuoteTrigger: (vehicle: VRNLookupResult, service?: string) => void;
  defaultService?: string;
}

export const VRNLookupBox: React.FC<VRNLookupBoxProps> = ({ onQuoteTrigger, defaultService = 'servicing' }) => {
  const [regInput, setRegInput] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService);
  const [postcode, setPostcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [stepText, setStepText] = useState('');
  const [lookupSuccess, setLookupSuccess] = useState<VRNLookupResult | null>(null);

  const cleanReg = (val: string) => val.toUpperCase().replace(/[^A-Z0-9]/g, '');

  const handleSimulateLookup = (e?: React.FormEvent, customReg?: string) => {
    if (e) e.preventDefault();
    const targetReg = cleanReg(customReg || regInput);
    if (!targetReg) {
      alert('Please enter your UK vehicle registration number (e.g. AB72 XYM)');
      return;
    }

    setLoading(true);
    setLookupSuccess(null);
    setStepText('Interrogating DVLA Vehicle Register...');

    setTimeout(() => {
      setStepText('Verifying MOT & Tax compliance status...');
      setTimeout(() => {
        const result = VRN_DATABASE[targetReg] || {
          ...VRN_DATABASE['DEFAULT'],
          reg: customReg || regInput.toUpperCase()
        };
        setLoading(false);
        setLookupSuccess(result);
        
        // Brief pause to show celebration before opening quote modal
        setTimeout(() => {
          onQuoteTrigger(result, selectedService);
        }, 800);
      }, 600);
    }, 600);
  };

  const demoChips = [
    { label: 'AB72 XYM', title: 'BMW 320d M Sport (2022)' },
    { label: 'LD21 KPF', title: 'VW Golf 1.5 TSI (2021)' },
    { label: 'VK23 RTO', title: 'Tesla Model Y EV (2023)' }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-2xl shadow-blue-900/10 max-w-3xl mx-auto text-left relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live DVLA Database Connected</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>No Obligation Quotes</span>
        </div>
      </div>

      <form onSubmit={handleSimulateLookup} className="space-y-6">
        
        {/* UK Number Plate Input */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
            1. Enter Your Vehicle Registration (VRN)
          </label>
          <div className="relative flex items-stretch">
            
            {/* UK Blue Strip */}
            <div className="w-12 sm:w-16 bg-blue-700 text-white flex flex-col items-center justify-center rounded-l-2xl border-2 border-r-0 border-black font-extrabold select-none shrink-0 shadow-inner">
              <div className="text-[10px] leading-tight text-amber-300 font-black">UK</div>
              <div className="text-sm tracking-tighter">🇬🇧</div>
            </div>

            {/* Plate Input field */}
            <input
              type="text"
              value={regInput}
              onChange={(e) => setRegInput(e.target.value.toUpperCase())}
              placeholder="ENTER REG"
              maxLength={8}
              className="w-full bg-amber-400 text-slate-950 font-mono font-black text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] uppercase px-4 sm:px-6 py-4 border-2 border-l-0 border-black rounded-r-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/40 placeholder:text-amber-600/70 shadow-inner transition-all text-center sm:text-left"
            />
          </div>

          {/* Quick Demo Shortcuts */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="text-xs font-medium text-slate-500">Demo shortcuts:</span>
            {demoChips.map(chip => (
              <button
                key={chip.label}
                type="button"
                onClick={() => {
                  setRegInput(chip.label);
                  handleSimulateLookup(undefined, chip.label);
                }}
                className="text-xs font-bold font-mono bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors flex items-center gap-1"
                title={chip.title}
              >
                <span>{chip.label}</span>
                <span className="font-sans text-[10px] font-normal text-slate-500 hidden sm:inline">({chip.title})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Service & Postcode Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
              2. Required Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
            >
              <option value="servicing">Vehicle Servicing (Interim / Full)</option>
              <option value="mot">MOT Comparison & Testing</option>
              <option value="brakes">Brake Repairs (Discs & Pads)</option>
              <option value="diagnostics">Car Diagnostics (Warning Lights)</option>
              <option value="clutch">Clutch Replacement & Flywheel</option>
              <option value="timing-belt">Timing Belt & Water Pump</option>
              <option value="tyres">Tyres & Wheel Alignment</option>
              <option value="ac">Air Conditioning Service</option>
              <option value="battery">Battery Replacement</option>
              <option value="exhaust">Exhaust Repairs & Silencer</option>
              <option value="suspension">Suspension & Steering</option>
              <option value="engine">Engine Repairs & Gaskets</option>
              <option value="bodywork">Bodywork & Dent Repair</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
              3. UK Postcode (for local quotes)
            </label>
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="e.g. SW1A 1AA or M5 3FD"
              maxLength={8}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all uppercase placeholder:normal-case"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-80 text-white font-extrabold text-base py-4 px-8 rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-3 group hover:-translate-y-0.5"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>{stepText}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Compare Local Garage Quotes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

      </form>

      {/* Lookup Success Feedback animation */}
      <AnimatePresence>
        {lookupSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-900"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Vehicle Successfully Identified</p>
                <p className="font-extrabold text-sm text-slate-900">
                  {lookupSuccess.year} {lookupSuccess.make} {lookupSuccess.model}
                </p>
              </div>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs bg-emerald-200 text-emerald-900 px-2.5 py-1 rounded-full font-bold">
                MOT Valid: {lookupSuccess.motExpiry}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Average saving of <strong>£145</strong> vs Main Dealers</span>
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-blue-500" />
          <span><strong>15,300+</strong> Vetted UK Garages</span>
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-amber-500" />
          <span><strong>100% Free</strong> To Use</span>
        </span>
      </div>

    </div>
  );
};
