'use client';

import Image from 'next/image';
import Link from 'next/link';
import { StrapiRichText } from '@/types/strapi';

interface RichTextProps {
  content: StrapiRichText[];
}

export function RichText({ content }: RichTextProps) {
  if (!content || content.length === 0) return null;
  
  const renderNode = (node: any, index: number) => {
    switch (node.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4">
            {node.children.map((child: any, i: number) => renderChild(child, i))}
          </p>
        );
      case 'heading':
        const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={index} className="mb-4 font-bold">
            {node.children.map((child: any, i: number) => renderChild(child, i))}
          </HeadingTag>
        );
      case 'list':
        if (node.format === 'ordered') {
          return (
            <ol key={index} className="mb-4 pl-5 list-decimal">
              {node.children.map((child: any, i: number) => renderNode(child, i))}
            </ol>
          );
        }
        return (
          <ul key={index} className="mb-4 pl-5 list-disc">
            {node.children.map((child: any, i: number) => renderNode(child, i))}
          </ul>
        );
      case 'list-item':
        return (
          <li key={index}>
            {node.children.map((child: any, i: number) => renderChild(child, i))}
          </li>
        );
      case 'link':
        return (
          <Link 
            key={index} 
            href={node.url} 
            className="text-blue-600 hover:underline"
            target={node.url.startsWith('http') ? '_blank' : undefined}
            rel={node.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {node.children.map((child: any, i: number) => renderChild(child, i))}
          </Link>
        );
      case 'image':
        return (
          <div key={index} className="my-8">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${node.url}`}
              alt={node.alternativeText || ''}
              width={node.width || 800}
              height={node.height || 600}
              className="rounded-lg"
            />
            {node.caption && (
              <p className="text-sm text-center text-gray-600 mt-2">{node.caption}</p>
            )}
          </div>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 pl-4 italic my-4">
            {node.children.map((child: any, i: number) => renderChild(child, i))}
          </blockquote>
        );
      default:
        return null;
    }
  };
  
  const renderChild = (child: any, index: number) => {
    if (child.text) {
      let textElement = child.text;
      
      if (child.bold) {
        textElement = <strong key={index}>{textElement}</strong>;
      }
      
      if (child.italic) {
        textElement = <em key={index}>{textElement}</em>;
      }
      
      if (child.underline) {
        textElement = <u key={index}>{textElement}</u>;
      }
      
      if (child.strikethrough) {
        textElement = <s key={index}>{textElement}</s>;
      }
      
      return textElement;
    }
    
    // Recursively render complex children
    if (child.children) {
      return renderNode(child, index);
    }
    
    return null;
  };
  
  return (
    <div className="rich-text">
      {content.map((node, index) => renderNode(node, index))}
    </div>
  );
}