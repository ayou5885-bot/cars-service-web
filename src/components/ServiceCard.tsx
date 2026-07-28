import React from 'react';
import { ServiceItem } from '../types';
import { ChevronRight, Wrench, Shield, Star, Check, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onInstantQuote: (slug: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService, onInstantQuote }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'shield': return <Shield className="w-5 h-5 text-blue-600" />;
      case 'star': return <Star className="w-5 h-5 text-amber-500" />;
      case 'clock': return <Clock className="w-5 h-5 text-blue-600" />;
      case 'check': return <Check className="w-5 h-5 text-emerald-600" />;
      default: return <Wrench className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group"
    >
      {/* Image container */}
      <div 
        onClick={() => onSelectService(service)}
        className="relative h-48 w-full bg-gray-100 overflow-hidden cursor-pointer"
      >
        <img
          src={service.imagePath}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        
        {service.popular && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            Popular UK Choice
          </span>
        )}

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-xs font-bold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
            {service.priceEstimate}
          </span>
          <span className="text-[11px] font-medium text-gray-200">
            ⏱ {service.timeEstimate}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 
              onClick={() => onSelectService(service)}
              className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>{service.title}</span>
            </h4>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              {getIcon(service.iconName)}
            </div>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
          <button
            onClick={() => onSelectService(service)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-xs transition-colors text-center border border-gray-200/60"
          >
            Explore Specs
          </button>
          <button
            onClick={() => onInstantQuote(service.slug)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1 group/btn"
          >
            <span>Get Quotes</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
