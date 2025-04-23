import type { Schema, Struct } from '@strapi/strapi';

export interface CarouselTickerCarouselTicker extends Struct.ComponentSchema {
  collectionName: 'components_carousel_ticker_carousel_tickers';
  info: {
    description: '';
    displayName: 'CarouselTicker';
  };
  attributes: {
    carouselItemLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    carouselItemTitle: Schema.Attribute.String;
  };
}

export interface CtaSectionCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_cta_section_cta_sections';
  info: {
    description: '';
    displayName: 'CTASection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FaqSectionFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_faq_section_faq_sections';
  info: {
    description: '';
    displayName: 'FAQSection';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface FeatureFeatures extends Struct.ComponentSchema {
  collectionName: 'components_feature_features';
  info: {
    description: '';
    displayName: 'feature';
    icon: 'stack';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    description: Schema.Attribute.Blocks;
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderLinksHeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_links_header_links';
  info: {
    description: '';
    displayName: 'headerLinks';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageImagesHomepageImages extends Struct.ComponentSchema {
  collectionName: 'components_homepage_images_homepage_images';
  info: {
    description: '';
    displayName: 'homepageImages';
  };
  attributes: {
    homepageImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LegalLinksLegalLinks extends Struct.ComponentSchema {
  collectionName: 'components_legal_links_legal_links';
  info: {
    description: '';
    displayName: 'LegalLinks';
    icon: 'link';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavigationColumnsNavigationColumns
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_columns_navigation_columns';
  info: {
    displayName: 'navigationColumns';
  };
  attributes: {};
}

export interface PricingOptionsPricingOptions extends Struct.ComponentSchema {
  collectionName: 'components_pricing_options_pricing_options';
  info: {
    description: '';
    displayName: 'pricingOptions';
    icon: 'priceTag';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    currency: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'feature.features', true>;
    frequency: Schema.Attribute.Enumeration<['monthly', 'yearly', 'one-time']>;
    isActive: Schema.Attribute.Boolean;
    isPopular: Schema.Attribute.Boolean;
    price: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

export interface ProviderOptionsProviderOptions extends Struct.ComponentSchema {
  collectionName: 'components_provider_options_provider_options';
  info: {
    description: '';
    displayName: 'ProviderOptions';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    isActive: Schema.Attribute.Boolean;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    providerId: Schema.Attribute.String;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    feature: Schema.Attribute.Component<'feature.features', true>;
    primaryButtonText: Schema.Attribute.String;
    primaryButtonUrl: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
    sectionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    description: '';
    displayName: 'socialLinks';
    icon: 'link';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface TestimonialsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_testimonials';
  info: {
    description: '';
    displayName: 'testimonials';
    icon: 'pencil';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    companyName: Schema.Attribute.String;
    position: Schema.Attribute.String;
    qoute: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'carousel-ticker.carousel-ticker': CarouselTickerCarouselTicker;
      'cta-section.cta-section': CtaSectionCtaSection;
      'faq-section.faq-section': FaqSectionFaqSection;
      'feature.features': FeatureFeatures;
      'header-links.header-links': HeaderLinksHeaderLinks;
      'homepage-images.homepage-images': HomepageImagesHomepageImages;
      'legal-links.legal-links': LegalLinksLegalLinks;
      'navigation-columns.navigation-columns': NavigationColumnsNavigationColumns;
      'pricing-options.pricing-options': PricingOptionsPricingOptions;
      'provider-options.provider-options': ProviderOptionsProviderOptions;
      'section.section': SectionSection;
      'shared.seo': SharedSeo;
      'social-links.social-links': SocialLinksSocialLinks;
      'testimonials.testimonials': TestimonialsTestimonials;
    }
  }
}
