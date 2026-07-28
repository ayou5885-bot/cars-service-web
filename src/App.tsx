import React, { useState } from 'react';
import { PageView, ServiceItem, VRNLookupResult } from './types';
import { SERVICES_DATA } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceModal } from './components/ServiceModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FindGaragePage } from './pages/FindGaragePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [initialQuoteVehicle, setInitialQuoteVehicle] = useState<VRNLookupResult | null>(null);
  const [initialQuoteServiceSlug, setInitialQuoteServiceSlug] = useState<string>('servicing');
  const [activeServiceDetails, setActiveServiceDetails] = useState<ServiceItem | null>(null);

  const handleOpenQuoteModal = (vehicleOrSlug?: VRNLookupResult | string, serviceSlug?: string) => {
    if (typeof vehicleOrSlug === 'string') {
      setInitialQuoteVehicle(null);
      setInitialQuoteServiceSlug(vehicleOrSlug);
    } else if (vehicleOrSlug && typeof vehicleOrSlug === 'object') {
      setInitialQuoteVehicle(vehicleOrSlug);
      if (serviceSlug) setInitialQuoteServiceSlug(serviceSlug);
    } else {
      setInitialQuoteVehicle(null);
      setInitialQuoteServiceSlug('servicing');
    }
    setQuoteModalOpen(true);
  };

  const handleSelectServiceForDetails = (service: ServiceItem) => {
    setActiveServiceDetails(service);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Page View Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onSelectService={handleSelectServiceForDetails}
            onTriggerQuote={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={handleSelectServiceForDetails}
            onTriggerQuote={(slug) => handleOpenQuoteModal(slug)}
          />
        )}
        {currentPage === 'how-it-works' && (
          <HowItWorksPage
            onNavigate={(page) => setCurrentPage(page)}
            onTriggerQuote={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'find-garage' && (
          <FindGaragePage
            onTriggerQuote={(slug) => handleOpenQuoteModal(slug)}
          />
        )}
        {currentPage === 'reviews' && (
          <ReviewsPage
            onTriggerQuote={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={(page) => setCurrentPage(page)}
            onTriggerQuote={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quote Comparison Modal (FormSubmit to ayoub123123321321@gmail.com) */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialVehicle={initialQuoteVehicle}
        initialServiceSlug={initialQuoteServiceSlug}
      />

      {/* Service Details Breakdown Modal */}
      <ServiceModal
        service={activeServiceDetails}
        onClose={() => setActiveServiceDetails(null)}
        onTriggerQuote={(slug) => handleOpenQuoteModal(slug)}
      />

    </div>
  );
}
