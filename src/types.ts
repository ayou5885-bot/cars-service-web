export type ServiceCategory = 'servicing' | 'mot' | 'repairs' | 'diagnostics';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  priceEstimate: string;
  timeEstimate: string;
  imagePath: string;
  iconName: string;
  popular: boolean;
  symptoms: string[];
  includedChecks: string[];
  warrantyIncluded: string;
}

export interface Garage {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  postcode: string;
  distanceMiles: number;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  isMotStation: boolean;
  isEvSpecialist: boolean;
  startingPrice: number;
  amenities: string[];
  servicesOffered: string[];
  openingHours: string;
  phone: string;
  imagePath: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  serviceType: string;
  garageName: string;
  vehicle: string;
  comment: string;
  avatar: string;
  verifiedBadge: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'booking' | 'garages';
}

export interface VRNLookupResult {
  reg: string;
  make: string;
  model: string;
  year: number;
  fuelType: string;
  engineSize: string;
  motExpiry: string;
}

export interface QuoteFormState {
  fullName: string;
  email: string;
  phone: string;
  vehicleRegistration: string;
  vehicleMake: string;
  vehicleModel: string;
  requiredService: string;
  postcode: string;
  preferredDate: string;
  additionalNotes: string;
}

export type PageView = 'home' | 'services' | 'how-it-works' | 'find-garage' | 'reviews' | 'about' | 'contact';
