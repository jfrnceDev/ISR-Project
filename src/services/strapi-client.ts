import axios from 'axios';

const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const token = process.env.STRAPI_API_TOKEN;

/**
 * Fetches data from Strapi API with proper authentication
 */
export const fetchAPI = async <T>(path: string, options = {}): Promise<T> => {
    console.log(`[Strapi] Fetching ${strapiURL}/api${path}`);
    
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      ...options,
    };
    
    try {
      const response = await axios.get(`${strapiURL}/api${path}`, mergedOptions);
      console.log(`[Strapi] Success: ${path} (${response.status})`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(`[Strapi] Error ${error.response.status} for ${path}:`, error.response.data);
      } else {
        console.error('[Strapi] Error:', error);
      }
      throw error;
    }
  };