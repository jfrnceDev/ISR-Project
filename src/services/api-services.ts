import { fetchAPI } from './strapi-client';
import { 
  StrapiPageEntity,
  StrapiCareerEntity,
  StrapiHomePageEntity,
  StrapiNavigationEntity,
  StrapiFooterEntity,
  StrapiPaymentPageEntity
} from '@/types/strapi-content-types';
import { StrapiResponse } from '@/types/strapi';

/**
 * Fetches homepage data from Strapi CMS
 */
export async function getHomePage() {
  try {
    // Fix: Use proper syntax with better formatting
    const response = await fetchAPI<StrapiResponse<StrapiHomePageEntity>>(
      '/home-page?populate=*'
    );
    console.log('Homepage data:', response);
    return response;
  } catch (error) {
    console.error('Failed to fetch homepage data:', error);
    throw error;
  }
}

/**
 * Fetches a specific page by slug
 */
export async function getPage(slug: string) {
    try {
      const response = await fetchAPI<StrapiResponse<StrapiPageEntity[]>>(
        `/pages?filters[slug]=${slug}&populate=*`
      );
      
      console.log(`Page data for slug "${slug}":`, response);
      return response;
    } catch (error) {
      try {
        const response = await fetchAPI<StrapiResponse<StrapiPageEntity[]>>(
          `/pages?filters[slug]=${encodeURIComponent(slug)}&populate=content`
        );
        return response;
      } catch (secondError) {
        console.error(`Failed to fetch page data for slug: ${slug}`, secondError);
        throw secondError;
      }
    }
  }

/**
 * Fetches all pages
 */
export async function getAllPages() {
  try {
    return await fetchAPI<StrapiResponse<StrapiPageEntity[]>>('/pages?populate=deep');
  } catch (error) {
    console.error('Failed to fetch pages:', error);
    throw error;
  }
}

/**
 * Fetches navigation data
 */
export async function getNavigation() {
  try {
    const response = await fetchAPI<StrapiResponse<StrapiNavigationEntity>>(
      '/navigation?populate[0]=logo&populate[1]=headerLinks&populate[2]=carouselTicker.carouselItemLogo'
    );
    console.log('Navigation data:', response);
    return response;
  } catch (error) {
    console.error('Failed to fetch navigation data:', error);
    throw error;
  }
}

/**
 * Fetches footer data
 */
export async function getFooter() {
    try {
      const response = await fetchAPI<StrapiResponse<StrapiFooterEntity>>('/footer?populate=*');
      console.log('Footer data:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch footer data:', error);
      throw error;
    }
  }

/**
 * Fetches careers data
 */
export async function getCareers() {
  try {
    const response = await fetchAPI<StrapiResponse<StrapiCareerEntity[]>>('/careers?populate=*');
    console.log('Careers data:', response);
    return response
  } catch (error) {
    console.error('Failed to fetch careers:', error);
    throw error;
  }
}

/**
 * Fetches a specific career by id
 */
export async function getCareer(id: number) {
  try {
    return await fetchAPI<StrapiResponse<StrapiCareerEntity>>(`/careers/${id}?populate=deep`);
  } catch (error) {
    console.error(`Failed to fetch career with id: ${id}`, error);
    throw error;
  }
}

/**
 * Fetches payment page data
 */
export async function getPaymentPage() {
  try {
    return await fetchAPI<StrapiResponse<StrapiPaymentPageEntity>>('/payment-page?populate=deep');
  } catch (error) {
    console.error('Failed to fetch payment page:', error);
    throw error;
  }
}