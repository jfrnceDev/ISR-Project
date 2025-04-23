import { ReactInstance } from 'react';
import { StrapiEntity, StrapiMedia, StrapiRichText } from './strapi';
import {
  SEOComponent,
  FeatureComponent,
  HeaderLinkComponent,
  LegalLinkComponent,
  NavigationColumnComponent,
  PricingOptionComponent,
  ProviderOptionComponent,
  SocialLinkComponent,
  TestimonialComponent,
  CTASectionComponent,
  FAQSectionComponent,
  ContentSectionComponent
} from './strapi-components';

/**
 * Page content type interface
 */
export interface Page {
  id: number;
  documentId: string;
  title: string;
  subtitle?: string;
  slug: string;
  content: StrapiRichText[];
  description?: StrapiRichText[]; 
  featuredImage?: StrapiMedia[];
  headerImage?: StrapiMedia[];
  icon?: StrapiMedia[];
  ctaSection?: CTASectionComponent;
  features?: FeatureComponent[];
  faqSection?: FAQSectionComponent[];
  testimonials?: TestimonialComponent[];
  providerOptions?: ProviderOptionComponent[];
  seo?: SEOComponent;
  locale: string;
  localizations: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Career content type interface
 */
export interface Career {
  id: number;
  documentId: string;
  title: string;
  description: null | Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  requirements: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  location: string;
  department: string;
  applicationLink: string;
  isActive: boolean | null;
  publishDate: string;
  locale: string;
  localizations: Array<never>;
  seo: null | {
    id: number;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    metaRobots: string;
    canonicalURL: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  button: string;
}

/**
 * Home page content type interface
 */
export interface HomePage {
  id: number;
  documentId: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroCtaLink: string;
  description: StrapiRichText[];
  heroImage: Array<{
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: null | Record<string, unknown>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }>;
  Feature: Array<{
    id: number;
    title: string;
    description: Array<{
      type: string;
      children: Array<{
        type: string;
        text: string;
      }>;
    }>;
    link: string;
    linkText: string;
    alignment: 'left' | 'center' | 'right';
  }>;
  aboutSectionTitle: string;
  aboutSectionContent: string;
  seo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalURL: string;
    metaRobots: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroButton1: string;
  heroButton2: string;
  heroSecondaryCtaLink: string;
  section: ContentSectionComponent[];
}

/**
 * Navigation content type interface
 */
export interface Navigation {
  id: number;
  documentId: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
  locale: string;
  localizations: any[];
  logo: StrapiMedia[];
  headerLinks?: {
    label: string;
    url: string;
    ariaLabel?: string;
  }[];
  carouselTicker?: {
    id: number;
    carouselItemTitle: string;
    carouselItemLogo?: StrapiMedia;
  }[];
}


/**
 * Footer content type interface
 */
export interface Footer {
  id: number;
  documentId: string;
  copyrightText: string;
  tagline: string;
  locale: string;
  logo: Array<{
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }>;
  legalLinks: Array<{
    id: number;
    label: string;
    url: string;
    ariaLabel: string;
    isExternal: boolean | null;
  }>;
  socialLinks: Array<{
    id: number;
    label: string;
    url: string;
    ariaLabel: string;
    isExternal: boolean | null;
  }>;
  navigationColumns: Array<{
    id: number;
    title: string;
    links: Array<{
      id: number;
      label: string;
      url: string;
      isExternal: boolean | null;
    }>;
  }>;
  localizations: Array<unknown>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Payment page content type interface
 */
export interface PaymentPage {
  title: string;
  subtitle: string;
  description: StrapiRichText[];
  providerOptions: ProviderOptionComponent[];
  successTitle: string;
  successMessage: StrapiRichText[];
  errorMessage: StrapiRichText[];
  seo: SEOComponent;
}

/**
 * Type definitions for Strapi entity responses
 */
export type StrapiPageEntity = Page;
export type StrapiCareerEntity = Career;
export type StrapiHomePageEntity = HomePage;
export type StrapiNavigationEntity = Navigation;
export type StrapiFooterEntity = Footer;
export type StrapiPaymentPageEntity = StrapiEntity<PaymentPage>;

// Collection type arrays
export type StrapiPages = StrapiEntity<Page>[];
export type StrapiCareers = StrapiEntity<Career>[];