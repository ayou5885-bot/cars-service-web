import React, { useState } from 'react';
import { SERVICES_DATA, GARAGES_DATA, REVIEWS_DATA, FAQS_DATA } from '../data/mockData';
import { ServiceItem, Garage, VRNLookupResult, PageView } from '../types';
import { VRNLookupBox } from '../components/VRNLookupBox';
import { ServiceCard } from '../components/ServiceCard';
import { GarageCard } from '../components/GarageCard';
import { ShieldCheck, Star, Clock, Wrench, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Sparkles, MapPin, Award, HeartHandshake, Zap, Users, PoundSterling } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onSelectService: (service: ServiceItem) => void;
  onTriggerQuote: (vehicleOrSlug?: VRNLookupResult | string, service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService, onTriggerQuote }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq1');

  const popularServices = SERVICES_DATA.filter(s => s.popular);
  const featuredGarages = GARAGES_DATA.slice(0, 3);
  const featuredReviews = REVIEWS_DATA.slice(0, 3);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleVRNQuote = (vehicle: VRNLookupResult, service?: string) => {
    onTriggerQuote(vehicle, service);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16 overflow-hidden">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-0 bg-white overflow-hidden">
        
        {/* Subtle decorative mesh background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-2 uppercase tracking-wider shadow-sm border border-blue-100"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 mr-1.5" />
              <span>Over 3 Million Repairs Comparisoned</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.08]"
            >
              Car repairs <br className="hidden sm:inline" />
              <span className="text-blue-600">simplified.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Compare quotes from trusted local garages and book online in seconds. Transparent pricing, verified reviews, and zero upfront fees.
            </motion.p>
          </div>

          {/* Interactive VRN Number Plate Lookup Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 sm:mt-12"
          >
            <VRNLookupBox onQuoteTrigger={handleVRNQuote} />
          </motion.div>

        </div>

        {/* Trust Indicators / Popular Services Bar from Design HTML */}
        <div className="mt-16 bg-gray-50 border-t border-b border-gray-100 px-4 sm:px-8 md:px-12 py-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">15,500+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Trusted Garages</span>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">4.8/5</span>
                <span className="text-xs text-emerald-600 uppercase tracking-widest font-semibold">Trustpilot Rating</span>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col text-center sm:text-left hidden sm:flex">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">£145</span>
                <span className="text-xs text-blue-600 uppercase tracking-widest font-semibold">Avg. Saving</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div 
                onClick={() => typeof onTriggerQuote === 'function' ? onTriggerQuote('servicing') : undefined}
                className="bg-white px-4 py-3 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm hover:border-blue-300 hover:shadow-md cursor-pointer transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-base">S</div>
                <span className="text-sm font-semibold text-gray-700">Servicing</span>
              </div>
              <div 
                onClick={() => typeof onTriggerQuote === 'function' ? onTriggerQuote('mot') : undefined}
                className="bg-white px-4 py-3 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm hover:border-blue-300 hover:shadow-md cursor-pointer transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-base">M</div>
                <span className="text-sm font-semibold text-gray-700">MOT</span>
              </div>
              <div 
                onClick={() => typeof onTriggerQuote === 'function' ? onTriggerQuote('brakes') : undefined}
                className="bg-white px-4 py-3 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm hover:border-blue-300 hover:shadow-md cursor-pointer transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-base">B</div>
                <span className="text-sm font-semibold text-gray-700">Brake Repairs</span>
              </div>
              <div 
                onClick={() => typeof onTriggerQuote === 'function' ? onTriggerQuote('diagnostics') : undefined}
                className="bg-white px-4 py-3 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm hover:border-blue-300 hover:shadow-md cursor-pointer transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-base">D</div>
                <span className="text-sm font-semibold text-gray-700">Diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
            The WhoCanFixMyCar Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Over 3 Million UK Drivers Trust Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We have modernized the vehicle repair experience with transparent technology, stringent garage vetting, and guaranteed fixed-price quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Transparent Fixed Pricing',
              desc: 'No hidden fees or unexpected bill shocks. Compare exact quote estimates side-by-side before you book your appointment online.',
              icon: <PoundSterling className="w-6 h-6 text-blue-600" />,
              badge: 'No Upfront Costs'
            },
            {
              title: 'Thousands of Trusted UK Garages',
              desc: 'From local independent specialists to RAC and AA approved service centres, every workshop is rigorously vetted for quality and trade qualifications.',
              icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
              badge: '15,300+ Workshops'
            },
            {
              title: 'Verified Customer Reviews',
              desc: 'Read real, unedited feedback from UK drivers who have had the exact same service performed at your local garage.',
              icon: <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
              badge: '100% Genuine'
            },
            {
              title: 'Fast Online Booking',
              desc: 'Reserve your date and time slot in less than 60 seconds. We send automatic confirmations via SMS and email directly to your phone.',
              icon: <Clock className="w-6 h-6 text-blue-600" />,
              badge: 'Instant Confirmation'
            },
            {
              title: 'Warranty Protected',
              desc: 'Under UK Block Exemption laws, all servicing adheres to manufacturer schedules using OE-approved parts, keeping your warranty fully intact.',
              icon: <Award className="w-6 h-6 text-indigo-600" />,
              badge: 'Manufacturer Approved'
            },
            {
              title: 'Dedicated Driver Support',
              desc: 'Our UK-based customer support team is available via phone and online chat to assist with any repair queries or booking adjustments.',
              icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
              badge: '0800 Freephone Support'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 text-left relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-blue-50 transition-colors flex items-center justify-center border border-gray-100">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. POPULAR SERVICES */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3.5 py-1.5 rounded-full">
                Car Repairs & Servicing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Popular UK Vehicle Services
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                Compare fixed prices for all routine maintenance, MOT testing, and mechanical diagnostic repairs.
              </p>
            </div>

            <button
              onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-extrabold text-sm group bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto"
            >
              <span>View All 14+ Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={(s) => onSelectService(s)}
                onInstantQuote={(slug) => typeof onTriggerQuote === 'function' ? onTriggerQuote(slug) : undefined}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left max-w-2xl">
              <span className="bg-amber-400 text-slate-950 text-xs font-extrabold uppercase px-3 py-1 rounded-full">
                Not sure what is wrong?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Book a Comprehensive Vehicle Diagnostic
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                If your check engine light is on or your car is making unusual noises, compare quotes from specialist diagnostic technicians with OBD-II computers.
              </p>
            </div>
            <button
              onClick={() => typeof onTriggerQuote === 'function' ? onTriggerQuote('diagnostics') : undefined}
              className="bg-white text-blue-900 hover:bg-blue-50 font-extrabold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-2 shrink-0 group"
            >
              <span>Book Diagnostics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-600" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. HOW IT WORKS (3 SIMPLE STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
            Stripe-Like Simple Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How WhoCanFixMyCar Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We take the stress out of car repairs. Get fixed quotes in three effortless steps without making phone calls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -z-0"></div>

          {[
            {
              step: '01',
              title: 'Enter Reg & Service',
              desc: 'Type your UK vehicle registration and postcode. Tell us what repair or servicing you require, or choose a diagnostic inspection.',
              icon: <Wrench className="w-7 h-7 text-blue-600" />
            },
            {
              step: '02',
              title: 'Compare Local Quotes',
              desc: 'Within minutes, receive up to 4 competitive fixed-price quote estimates from vetted local garages. Compare prices, distance, and verified reviews.',
              icon: <Users className="w-7 h-7 text-blue-600" />
            },
            {
              step: '03',
              title: 'Book Online & Pay Later',
              desc: 'Choose your preferred garage and select an appointment date online. You pay no money upfront—only settle when the job is completed.',
              icon: <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md relative z-10 flex flex-col items-center text-center space-y-5 hover:border-blue-500/40 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center relative shadow-inner">
                {item.icon}
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center shadow-md">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED UK GARAGES */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3.5 py-1.5 rounded-full">
                Verified Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured UK Partner Garages
              </h2>
              <p className="text-slate-600 text-base max-w-xl">
                Explore top-rated automotive workshops across London, Manchester, Birmingham, Leeds, and Bristol.
              </p>
            </div>

            <button
              onClick={() => { onNavigate('find-garage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-extrabold text-sm group bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto"
            >
              <span>Explore 1,200+ UK Garages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGarages.map((garage) => (
              <GarageCard
                key={garage.id}
                garage={garage}
                onInstantQuote={() => typeof onTriggerQuote === 'function' ? onTriggerQuote() : undefined}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS (TRUSTPILOT STYLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full border border-emerald-200 font-extrabold text-xs">
            <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>EXCELLENT 4.8 / 5.0 ON TRUSTPILOT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What UK Drivers Say About Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real feedback from verified vehicle repair bookings across England, Scotland, and Wales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredReviews.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
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
                    <p className="text-[11px] text-slate-500">{rev.location} • <strong className="text-slate-700">{rev.serviceType}</strong></p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. TRUST INDICATORS & MOT REMINDER */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-left">
              <span className="bg-blue-600 text-white text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full">
                Driver Protection
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Strict UK Automotive Quality Standards
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                We work alongside major UK motoring organizations and parts distributors to guarantee professional craftsmanship. Every garage adheres to Motor Codes customer service guidelines.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
                  <h5 className="font-extrabold text-sm text-white">OE Quality Parts</h5>
                  <p className="text-xs text-slate-400 mt-1">Bosch, Brembo, and LuK matching OEM specs.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <Award className="w-6 h-6 text-blue-400 mb-2" />
                  <h5 className="font-extrabold text-sm text-white">Block Exemption Valid</h5>
                  <p className="text-xs text-slate-400 mt-1">Manufacturer warranty remains 100% intact.</p>
                </div>
              </div>
            </div>

            {/* Partner Logos display */}
            <div className="bg-slate-800/60 p-8 sm:p-10 rounded-3xl border border-slate-700/80 text-center space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Recognized & Featured By
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-90">
                <img src="assets/images/logos/rac.svg" alt="RAC Approved" className="h-8 rounded bg-white/10 px-2 py-1" />
                <img src="assets/images/logos/aa.svg" alt="AA Approved" className="h-8 rounded bg-white/10 px-2 py-1" />
                <img src="assets/images/logos/trustpilot.svg" alt="Trustpilot" className="h-8 rounded bg-white/10 px-2 py-1" />
                <img src="assets/images/logos/motor-codes.svg" alt="Motor Codes" className="h-8 rounded" />
                <img src="assets/images/logos/bosch.svg" alt="Bosch Service" className="h-7" />
                <img src="assets/images/logos/press-bbc.svg" alt="BBC Press" className="h-7" />
                <img src="assets/images/logos/press-autoexpress.svg" alt="Auto Express" className="h-6" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
            Driver Queries Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about comparing repair quotes and online garage booking.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-white border-blue-500/40 shadow-lg' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-slate-900"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed"
                    >
                      <div className="pt-2 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. GOOGLE MAP COVERAGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-3">
          <div className="p-8 sm:p-10 text-white space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-blue-600 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full inline-block">
                Nationwide Coverage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                We Cover England, Scotland & Wales
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you are in central London, rural Yorkshire, or the Scottish Highlands, our interactive UK network locates vetted mechanics within miles of your postcode.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>London & South East: <strong>4,200+ Garages</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Midlands & North: <strong>6,800+ Garages</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Scotland & Wales: <strong>4,300+ Garages</strong></span>
              </div>
            </div>

            <button
              onClick={() => { onNavigate('find-garage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-colors text-center text-sm"
            >
              Open Interactive Garage Locator
            </button>
          </div>

          <div className="lg:col-span-2 min-h-[360px] relative bg-slate-800">
            {/* Embedded UK Map */}
            <iframe
              title="UK Coverage Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1534066911145!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f24df0ba68cd5!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 10. STRONG CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 rounded-3xl p-10 sm:p-16 text-white text-center overflow-hidden shadow-2xl shadow-blue-900/30">
          
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/30">
              Ready to Save Money?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Get Instant Fixed-Price Repair Quotes Now
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
              No phone calls, no haggling, no upfront payments. Just compare competitive UK garage prices in seconds.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => typeof onTriggerQuote === 'function' ? onTriggerQuote() : undefined}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-lg px-8 py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-slate-900" />
                <span>Compare Quotes Online</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => { onNavigate('find-garage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-2xl border border-white/30 backdrop-blur-md transition-all"
              >
                Browse UK Garage Directory
              </button>
            </div>

            <p className="text-xs text-blue-200 pt-2">
              🔒 FormSubmit Secured • 100% Free Service • Instant Email & SMS Delivery
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
