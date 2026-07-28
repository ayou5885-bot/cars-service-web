import React, { useState } from 'react';
import { PageView } from '../types';
import { Shield, Wrench, Phone, Menu, X, ChevronRight, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: (serviceSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; id: PageView }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Find a Garage', id: 'find-garage' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: PageView) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md group-hover:bg-blue-700 transition-all">
              <Wrench className="w-5 h-5 transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-blue-700 flex items-center">
                Who<span className="text-blue-500">Can</span>FixMyCar
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ml-2 shadow-sm">UK</span>
              </span>
              <span className="text-[11px] font-medium text-gray-500 tracking-wide">
                UK's #1 Repair Comparison Marketplace
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:08000468310" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors group px-3 py-1.5 rounded-lg hover:bg-gray-50"
              title="Call UK Customer Support"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Freephone Support</span>
                <span className="font-bold text-gray-800 group-hover:text-blue-600">0800 046 8310</span>
              </div>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:bg-blue-700 transition-all flex items-center gap-1.5 hover:-translate-y-0.5"
            >
              <span>Get Free Quotes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-blue-600 text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm md:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <CheckCircle2 className="w-4 h-4 text-white/90" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:08000468310"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Support: 0800 046 8310</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
            >
              <span>Get Free Quotes Online</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
