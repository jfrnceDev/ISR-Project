import Link from 'next/link';
import Image from 'next/image';
import { StrapiFooterEntity } from '@/types/strapi-content-types';

interface FooterProps {
  footer: StrapiFooterEntity;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <h1></h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1">
            {footer.logo?.[0] && (
              <Image 
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${footer.logo[0].url}`}
                alt="Site Logo"
                width={130}
                height={40}
                className="h-10 w-auto mb-4"
              />
            )}
            <p className="text-gray-600 dark:text-gray-400 mt-4">{footer.tagline}</p>
            
            <div className="flex mt-6 space-x-4">
              {footer.socialLinks?.map((link, index: number) => (
                <Link 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel || link.label}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  {/* Note: Your API data doesn't show icon in socialLinks */}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Navigation columns */}
          {footer.navigationColumns?.map((column, columnIndex: number) => (
            <div key={columnIndex} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.url}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {footer.copyrightText}
          </p>
          
          <div className="flex flex-wrap mt-4 md:mt-0 space-x-6">
            {footer.legalLinks?.map((link, index: number) => (
              <Link 
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}