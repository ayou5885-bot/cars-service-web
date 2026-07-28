import React, { useState } from 'react';
import { GARAGES_DATA, UK_CITIES } from '../data/mockData';
import { Garage } from '../types';
import { GarageCard } from '../components/GarageCard';
import { MapPin, Search, ShieldCheck, Zap, Star, Filter, Wrench, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface FindGaragePageProps {
  onTriggerQuote: (service?: string) => void;
}

export const FindGaragePage: React.FC<FindGaragePageProps> = ({ onTriggerQuote }) => {
  const [selectedCity, setSelectedCity] = useState('All UK Locations');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterEvOnly, setFilterEvOnly] = useState(false);
  const [filterMotOnly, setFilterMotOnly] = useState(false);
  const [minRating, setMinRating] = useState<number>(0);

  const filteredGarages = GARAGES_DATA.filter((garage) => {
    const matchesCity = selectedCity === 'All UK Locations' || garage.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesSearch = garage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          garage.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          garage.postcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          garage.servicesOffered.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesEv = !filterEvOnly || garage.isEvSpecialist;
    const matchesMot = !filterMotOnly || garage.isMotStation;
    const matchesRating = garage.rating >= minRating;

    return matchesCity && matchesSearch && matchesEv && matchesMot && matchesRating;
  });

  return (
    <div className="py-12 sm:py-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
          UK Garage Directory
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Find Vetted Local Garages Near You
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Search our nationwide network of 15,300+ accredited UK workshops, MOT testing centres, and EV repair specialists.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto pt-2">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 mt-1" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by garage name, postcode (e.g. E8 2LX), or service..."
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

      {/* Filter Controls Bar */}
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* City Filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {UK_CITIES.slice(0, 7).map((city) => {
              const isActive = selectedCity === city;
              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>

          {/* Toggle Switches */}
          <div className="flex items-center gap-4 flex-wrap shrink-0">
            <label className="flex items-center gap-2 cursor-pointer select-none bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors">
              <input
                type="checkbox"
                checked={filterEvOnly}
                onChange={(e) => setFilterEvOnly(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>EV Specialists Only</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors">
              <input
                type="checkbox"
                checked={filterMotOnly}
                onChange={(e) => setFilterMotOnly(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>MOT Testing Stations</span>
            </label>
          </div>
        </div>

        {/* Active Filters count summary */}
        <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
          <span>
            Showing <strong className="text-slate-900 font-bold">{filteredGarages.length}</strong> verified garages in <strong className="text-slate-900 font-bold">{selectedCity}</strong>
          </span>
          {(selectedCity !== 'All UK Locations' || filterEvOnly || filterMotOnly || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCity('All UK Locations');
                setSearchQuery('');
                setFilterEvOnly(false);
                setFilterMotOnly(false);
              }}
              className="text-blue-600 hover:underline font-bold"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Garages Grid */}
      {filteredGarages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGarages.map((garage) => (
            <GarageCard
              key={garage.id}
              garage={garage}
              onInstantQuote={() => onTriggerQuote()}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
          <MapPin className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-slate-800">No garages found in {selectedCity} with these filters</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Try resetting your filters or search by postcode to view accredited workshops nearby.
          </p>
          <button
            onClick={() => {
              setSelectedCity('All UK Locations');
              setSearchQuery('');
              setFilterEvOnly(false);
              setFilterMotOnly(false);
            }}
            className="bg-blue-600 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md"
          >
            Show All UK Garages
          </button>
        </div>
      )}

      {/* Interactive Map Notice */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-left max-w-2xl">
          <span className="bg-blue-600 text-white text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">
            Are you a garage owner?
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Join the UK's Largest Garage Network
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Partner with WhoCanFixMyCar to receive high-intent job inquiries in your postcode. Zero subscription fees—only pay a small lead commission when you secure a customer.
          </p>
        </div>
        <button
          onClick={() => onTriggerQuote()}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-lg transition-all shrink-0"
        >
          Register Your Workshop
        </button>
      </div>

    </div>
  );
};
