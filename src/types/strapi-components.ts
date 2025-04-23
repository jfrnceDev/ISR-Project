import { StrapiMedia, StrapiRichText } from './strapi';

/**
 * SEO component interface
 */
export interface SEOComponent {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  shareImage: StrapiMedia;
  canonicalURL: string | null;
  metaRobots: string | null;
}

/**
 * Feature component interface
 */
export interface FeatureComponent {
  id: number;
  title: string;
  description: StrapiRichText[];
  icon: StrapiMedia;
  link: string | null;
  linkText: string | null;
  alignment: 'left' | 'center' | 'right' | null;
  featureImage: StrapiMedia[] | null;
  subtitle: string | null;
}

/**
 * Base link component interface
 */
export interface LinkComponent {
  id: number;
  label: string;
  url: string;
  isExternal: boolean;
  icon: StrapiMedia;
  ariaLabel: string | null;
}

/**
 * Header link component interface
 */
export interface HeaderLinkComponent extends LinkComponent {}

/**
 * Legal link component interface
 */
export interface LegalLinkComponent extends LinkComponent {}

/**
 * Social link component interface
 */
export interface SocialLinkComponent extends LinkComponent {}

/**
 * Navigation column component interface
 */
export interface NavigationColumnComponent {
  id: number;
  title: string;
  links: LinkComponent[];
}

/**
 * Pricing option component interface
 */
export interface PricingOptionComponent {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  buttonUrl: string;
}

/**
 * Content Section component interface
 */
export interface ContentSectionComponent {
  id: number;
  sectionTitle: string | null;
  sectionSubtitle: string | null;
  content: StrapiRichText[];
  sectionImage: StrapiMedia[];
  primaryButtonText: string | null;
  primaryButtonUrl: string | null;
  secondaryButtonText: string | null;
  secondaryButtonUrl: string | null;
  features: FeatureComponent[];
}

/**
 * Provider option component interface
 */
export interface ProviderOptionComponent {
  id: number;
  name: string;
  logo: StrapiMedia;
  description: StrapiRichText[];
  isActive: boolean;
  providerId: string;
}

/**
 * Testimonial component interface
 */
export interface TestimonialComponent {
  id: number;
  quote: string;
  author: string;
  position: string;
  companyName: string;
  avatar: StrapiMedia;
  rating: number;
}

/**
 * CTA Section component interface
 */
export interface CTASectionComponent {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage: StrapiMedia;
}

/**
 * FAQ section component interface
 */
export interface FAQSectionComponent {
  id: number;
  question: string;
  answer: StrapiRichText[];
}