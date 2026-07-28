import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem, ServiceCategory } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { Search, Wrench, Shield, CheckCircle2, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onTriggerQuote: (serviceSlug: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onTriggerQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | ServiceCategory>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs: { id: 'all' | ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: SERVICES_DATA.length },
    { id: 'servicing', label: 'Servicing & Tyres', count: SERVICES_DATA.filter(s => s.category === 'servicing').length },
    { id: 'mot', label: 'MOT Comparison', count: SERVICES_DATA.filter(s => s.category === 'mot').length },
    { id: 'repairs', label: 'Mechanical Repairs', count: SERVICES_DATA.filter(s => s.category === 'repairs').length },
    { id: 'diagnostics', label: 'Car Diagnostics', count: SERVICES_DATA.filter(s => s.category === 'diagnostics').length }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
          Complete Automotive Catalogue
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Compare UK Vehicle Repair & Servicing Prices
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Select your repair requirement below to inspect detailed OE checklists, UK average cost guides, and compare instant quotes from local garages.
        </p>

        {/* Search Input Bar */}
        <div className="relative max-w-xl mx-auto pt-2">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 mt-1" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search repairs (e.g. clutch, cambelt, brakes, air con...)"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white font-semibold text-slate-800 text-base shadow-lg shadow-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 mt-1 text-xs text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap border-b border-slate-200 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isActive ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              onInstantQuote={onTriggerQuote}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
          <Wrench className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-slate-800">No services found matching "{searchQuery}"</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Try searching for general keywords like "servicing", "engine", or "brakes", or contact our support team for bespoke repair inquiries.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
            className="bg-blue-600 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Why Book Via Platform Guarantee */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="space-y-2 md:col-span-1">
          <span className="bg-blue-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full">
            Driver Peace of Mind
          </span>
          <h3 className="text-2xl font-extrabold">Block Exemption Compliant</h3>
          <p className="text-slate-400 text-sm">Under EU & UK law, you are not restricted to main dealers for warranty-valid vehicle maintenance.</p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm">OE Approved Parts Only</h5>
              <p className="text-xs text-slate-400 mt-1">Our network uses Original Equipment matching parts from brands like Bosch, LuK, and Brembo.</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm">12 Month Minimum Warranty</h5>
              <p className="text-xs text-slate-400 mt-1">Every job is backed by a minimum 12-month or 12,000-mile parts and labour guarantee.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
