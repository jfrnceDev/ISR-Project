import { getCareers } from "@/services/api-services";
import { StrapiCareerEntity } from "@/types/strapi-content-types";

/**
 * Controller for the career page
 * Follows MVC pattern by separating data fetching logic
 */
export async function getCareerPageData() {
  try {
    const careersData = await getCareers();
    
    return {
      careers: careersData?.data || [],
      success: true
    };
  } catch (error) {
    console.error("Error fetching career data:", error);
    return {
      careers: [],
      success: false,
      error
    };
  }
}