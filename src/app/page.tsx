import Image from "next/image";
import Link from "next/link";
import { getHomePage } from "@/services/api-services";

// Enable ISR with a revalidation period of 60 seconds
export const revalidate = 60;

export default async function Home() {
  try {
    const homePageData = await getHomePage();

    if (!homePageData?.data) {
      throw new Error("Missing homepage data from Strapi");
    }

    const homepage = homePageData.data;

    return (
      <div className="min-h-screen bg-white text-black">
        {/* Hero Section with proper margins like the reference */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/2">
                {Array.isArray(homepage.heroImage) && homepage.heroImage[0] && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${homepage.heroImage[0].url}`}
                    alt={homepage.heroImage[0].alternativeText || "Hero image"}
                    width={homepage.heroImage[0].width || 600}
                    height={homepage.heroImage[0].height || 400}
                    className="rounded-lg w-full h-auto object-cover"
                    priority
                  />
                )}
              </div>

              {/* Right side - Content with more spacing */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#20123A]">
                  {homepage.heroTitle || "Let's ride"}
                </h1>
                <p className="text-md max-w-lg text-gray-700">
                  {homepage.heroSubtitle || "No matter where you're headed, we'll help you get there. On-demand, scheduled ahead, late night, or morning commute. Plus, get rewards on every ride."}
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    href={homepage.heroCtaLink || "#"}
                    className="bg-[#5C06E4] hover:bg-[#5105CC] text-white font-medium px-8 py-3 rounded-full transition-colors"
                  >
                    {homepage.heroButton1 || "Sign up to ride"}
                  </Link>
                  <Link
                    href={homepage.heroSecondaryCtaLink || "#"}
                    className="border-2 border-[#5C06E4] hover:bg-gray-50 text-[#5C06E4] font-medium px-8 py-3 rounded-full transition-colors"
                  >
                    {homepage.heroButton2 || "Learn more"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Second Section - Ready, set, go */}
        <section className="py-12 bg-[#5C06E4]/2">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
              {/* Right side - Image/Phone mockup */}
              {/* Temporary Using Section 1 Image */}
              <div className="w-full lg:w-1/2 rounded-full">
              {Array.isArray(homepage.heroImage) && homepage.heroImage[0] && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${homepage.heroImage[0].url}`}
                    alt={homepage.heroImage[0].alternativeText || "Hero image"}
                    width={homepage.heroImage[0].width || 600}
                    height={homepage.heroImage[0].height || 400}
                    className="rounded-lg w-full h-auto object-cover "
                    priority
                  />
                )}
              </div>

              {/* Left side - Content with feature list */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="text-[#5C06E4] uppercase font-medium">
                  {homepage.section?.[0].sectionSubtitle || "RIDE WITH LYFT"}
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  {homepage.section?.[0].sectionTitle || "Ready, set, go in just a few quick taps"}
                </h2>

                <p className="text-md text-gray-700">
                  {homepage.description[0].children[0].text}
                </p>

                {/* Feature list with icons */}
                <div className="pt-3 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V12L16 14" stroke="#5C06E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="10" stroke="#5C06E4" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{homepage.Feature?.[0].description[0].children[0].text}</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#5C06E4" strokeWidth="2" />
                        <path d="M16 2V6" stroke="#5C06E4" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 2V6" stroke="#5C06E4" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 10H21" stroke="#5C06E4" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{homepage.Feature?.[1].description[0].children[0].text}</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L15.5 8.5L23 9.5L17.5 15L19 22.5L12 19L5 22.5L6.5 15L1 9.5L8.5 8.5L12 1Z" stroke="#5C06E4" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{homepage.Feature?.[2].description[0].children[0].text}</h3>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    href={homepage.section?.[0].primaryButtonUrl || "#"}
                    className="bg-[#5C06E4] hover:bg-[#5105CC] text-white font-medium px-8 py-3 rounded-full transition-colors"
                  >
                    {homepage.section?.[0].primaryButtonText || "Sign up to ride"}
                  </Link>

                  <Link
                    href={homepage.section?.[0].secondaryButtonUrl || "#"}
                    className="border-2 border-[#5C06E4] hover:bg-gray-50 text-[#5C06E4] font-medium px-8 py-3 rounded-full transition-colors flex items-center gap-2"
                  >
                    {homepage.section?.[0].secondaryButtonText || "Learn more about riding with Lyft"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="#5C06E4" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 5L19 12L12 19" stroke="#5C06E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  } catch (error) {
    console.error("Error rendering homepage:", error);
    throw error;
  }
}