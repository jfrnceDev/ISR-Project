import Link from "next/link";
import { notFound } from "next/navigation";
import { getCareerPageData } from "@/controllers/careerController";

// Enable ISR with revalidation period
export const revalidate = 60;

export default async function CareerPage() {
  try {
    // Use the controller to fetch data
    const { careers, success, error } = await getCareerPageData();
    
    if (!success) {
      console.error("Failed to load career data:", error);
      return notFound();
    }
    
    return (
      <div className="container mx-auto px-4 py-16">        
        {careers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careers.map((career) => (
              <div 
                key={career.id} 
                className="border rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                {/* Use career data from Strapi with null checks */}
                {career.title && (
                  <h2 className="text-xl font-semibold mb-2">{career.title}</h2>
                )}
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                  {career.location && (
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{career.location}</span>
                    </div>
                  )}
                  
                  {career.department && (
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      <span>{career.department}</span>
                    </div>
                  )}
                </div>
                
                {/* Show description if available */}
                {career.description && career.description[0]?.children?.[0]?.text && (
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {career.description[0].children[0].text}
                  </p>
                )}
                
                {/* Use link from data with fallback to ID-based URL */}
                <Link 
                  href={career.applicationLink || `/career/${career.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md inline-block transition-colors"
                >
                  {career.button || ""}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-lg bg-gray-50 dark:bg-gray-800">
            {/* Empty state with no hardcoded text */}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering career page:", error);
    return notFound();
  }
}