import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPage, getAllPages } from '@/services/api-services';
import { RichText } from '@/components/ui/RichText';
import Link from 'next/link';
import { Metadata } from 'next';
import { StrapiPageEntity } from '@/types/strapi-content-types';

// Enable ISR with a longer revalidation period for static pages
export const revalidate = 600;

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const pageData = await getPage(params.slug);
    
    if (!pageData.data.length) {
      return {
        title: 'Page Not Found',
      };
    }
    
    const page = pageData.data[0];
    const seo = page.seo;
    
    return {
      title: seo?.metaTitle || page.title,
      description: seo?.metaDescription,
      keywords: seo?.keywords,
      robots: seo?.metaRobots,
      alternates: {
        canonical: seo?.canonicalURL,
      },
    };
  } catch (error) {
    return {
      title: 'Page',
    };
  }
}

export async function generateStaticParams() {
  try {
    const pagesData = await getAllPages();
    return pagesData.data.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const pageData = await getPage(params.slug);
    
    if (!pageData.data.length) {
      return notFound();
    }
    
    const page = pageData.data[0];
    
    return (
      // User1
      <div className="min-h-screen">
        {/* Header Section with Title and Featured Image */}
        <header className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{page.title}</h1>
            {page.subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{page.subtitle}</p>
            )}
            
            {page.headerImage?.[0] && (
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden mt-8">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${page.headerImage[0].url}`}
                  alt={page.headerImage[0].alternativeText || page.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          {/* Main Content */}
          {page.content && page.content.length > 0 && (
            <article className="prose max-w-none dark:prose-invert mb-16">
              <RichText content={page.content} />
            </article>
          )}
          
          {/* CTA Section - Render if available */}
          {page.ctaSection && (
            <section className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl my-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{page.ctaSection.title}</h2>
              <p className="text-lg mb-6">{page.ctaSection.subtitle}</p>
              <Link 
                href={page.ctaSection.buttonUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg inline-block"
              >
                {page.ctaSection.buttonText}
              </Link>
            </section>
          )}
          
          {/* Features Section - Render if available */}
          {page.features && page.features.length > 0 && (
            <section className="my-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {page.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border bg-white dark:bg-gray-800 shadow-sm flex flex-col ${
                      feature.alignment === "center" ? "items-center text-center" :
                      feature.alignment === "right" ? "items-end text-right" : ""
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <RichText content={feature.description} />
                    
                    {feature.link && (
                      <Link
                        href={feature.link}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-4 inline-flex items-center"
                      >
                        {feature.linkText || 'Learn more'} 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* FAQ Section - Render if available */}
          {page.faqSection && page.faqSection.length > 0 && (
            <section className="my-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {page.faqSection.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <div className="text-gray-600 dark:text-gray-300">
                      <RichText content={faq.answer} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Testimonials Section - Render if available */}
          {page.testimonials && page.testimonials.length > 0 && (
            <section className="my-16 bg-gray-50 dark:bg-gray-900 py-12 px-4 rounded-xl">
              <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {page.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}, {testimonial.companyName}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Provider Options - Render if available */}
          {page.providerOptions && page.providerOptions.length > 0 && (
            <section className="my-16">
              <h2 className="text-3xl font-bold mb-8">Available Options</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {page.providerOptions.map((provider, index) => (
                  <div key={index} className="border p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{provider.name}</h3>
                    <RichText content={provider.description} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error fetching page with slug: ${params.slug}`, error);
    return notFound();
  }
}