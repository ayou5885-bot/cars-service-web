import React from 'react';
import { Garage } from '../types';
import { MapPin, Star, ShieldCheck, Zap, Check, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface GarageCardProps {
  garage: Garage;
  onSelectGarage?: (garage: Garage) => void;
  onInstantQuote: (service?: string) => void;
}

export const GarageCard: React.FC<GarageCardProps> = ({ garage, onInstantQuote }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group"
    >
      {/* Image & Badges header */}
      <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
        <img
          src={garage.imagePath}
          alt={garage.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
          {garage.isVerified && (
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Verified UK Partner</span>
            </span>
          )}
          {garage.isEvSpecialist && (
            <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-300" />
              <span>EV Certified</span>
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-xs">{garage.rating}</span>
            <span className="text-[10px] text-gray-200">({garage.reviewCount} reviews)</span>
          </div>
          <span className="text-xs font-bold text-amber-300 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg">
            From £{garage.startingPrice}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {garage.name}
          </h4>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="truncate">{garage.address}, <strong>{garage.city}</strong></span>
          </div>
          
          {/* Amenities pill list */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {garage.amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="bg-gray-50 text-gray-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-gray-200/60">
                <Check className="w-3 h-3 text-emerald-600" />
                <span>{amenity}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
          <div className="text-xs text-gray-500">
            <span className="block font-medium">Distance:</span>
            <strong className="text-gray-800">{garage.distanceMiles} miles away</strong>
          </div>
          <button
            onClick={() => onInstantQuote()}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-1 group/btn"
          >
            <span>Request Quote</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
