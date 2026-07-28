import React from 'react';
import { PageView } from '../types';
import { Wrench, MapPin, Phone, Mail, Shield, CheckCircle2, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: (serviceSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <footer className="bg-white text-gray-600 pt-16 pb-0 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div 
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 cursor-pointer group select-none inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:bg-blue-700 transition-all">
                <Wrench className="w-5 h-5 transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-blue-700 flex items-center">
                Who<span className="text-blue-500">Can</span>FixMyCar
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ml-2 shadow-sm">UK</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-normal">
              The UK's leading online vehicle repair comparison marketplace. We connect drivers with thousands of vetted local garages, mobile mechanics, and fast-fit specialists for transparent, competitive quotes.
            </p>
            
            {/* Trust indicators in footer */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-gray-700">15,300+ UK Garages</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-gray-700">RAC & AA Standards</span>
              </div>
            </div>

            {/* Partner Badges */}
            <div className="pt-2 flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <img src="assets/images/logos/trustpilot.svg" alt="Trustpilot 4.8 Stars" className="h-6 bg-gray-100 px-2 py-0.5 rounded" />
              <img src="assets/images/logos/rac.svg" alt="RAC Approved" className="h-6 rounded bg-gray-100 px-2 py-0.5" />
              <img src="assets/images/logos/aa.svg" alt="AA Approved" className="h-6 rounded bg-gray-100 px-2 py-0.5" />
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Vehicle Servicing', slug: 'servicing' },
                { label: 'MOT Comparison', slug: 'mot' },
                { label: 'Brake Repairs', slug: 'brakes' },
                { label: 'Car Diagnostics', slug: 'diagnostics' },
                { label: 'Clutch Replacement', slug: 'clutch' },
                { label: 'Timing Belt Replacement', slug: 'timing-belt' },
                { label: 'Air Conditioning Service', slug: 'ac' },
                { label: 'Tyres & Wheel Alignment', slug: 'tyres' }
              ].map((item) => (
                <li key={item.slug}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <span className="text-gray-400 group-hover:text-blue-600 transition-colors">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button onClick={() => { onNavigate('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-500 hover:text-blue-600 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('find-garage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-500 hover:text-blue-600 transition-colors">
                  Find a Garage Near Me
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-500 hover:text-blue-600 transition-colors">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-500 hover:text-blue-600 transition-colors">
                  About WhoCanFixMyCar
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-500 hover:text-blue-600 transition-colors">
                  Contact & Support
                </button>
              </li>
              <li>
                <button onClick={() => onOpenQuoteModal()} className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                  <span>Request Instant Quote</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              UK Support
            </h4>
            <div className="space-y-3.5 text-sm text-gray-500">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-gray-800">WhoCanFixMyCar</p>
                  <p className="text-xs text-gray-500 font-medium">United Kingdom Headquarters</p>
                  <p className="text-xs text-gray-400 mt-0.5">National Online Quote Service</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="tel:08000468310" className="hover:text-blue-600 transition-colors font-bold text-gray-800">
                  0800 046 8310 <span className="text-xs font-normal text-gray-400">(Freephone)</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:support@whocanfixmycar.co.uk" className="hover:text-blue-600 transition-colors text-xs font-medium">
                  support@whocanfixmycar.co.uk
                </a>
              </div>
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 space-y-1">
                  <p className="font-bold text-gray-800 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    UK Network Active
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium">Average quote response time: <strong className="text-gray-800">6 minutes</strong></p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Strip matching Design HTML */}
      <div className="bg-white border-t border-gray-100 px-4 sm:px-8 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
          <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gray-600 transition-colors">Privacy Policy</button>
          <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gray-600 transition-colors">Terms of Service</button>
          <button onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gray-600 transition-colors">Contact Support</button>
          <button onClick={() => { onNavigate('find-garage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gray-600 transition-colors">Garage Login</button>
        </div>
        <div>
          © {new Date().getFullYear()} WhoCanFixMyCar Ltd. Registered in the UK.
        </div>
      </div>
    </footer>
  );
};
