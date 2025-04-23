/**
 * Base Strapi response interface
 */
export interface StrapiResponse<T> {
    data: T;
    meta: {
      pagination?: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
  /**
   * Base interface for Strapi entity attributes
   */
  export interface StrapiEntity<T> {
    id: number;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale?: string;
  }
  
  /**
   * Media interface for images and files
   */
  export interface StrapiMedia {
    id: number;
    name: string;
    alternativeText: string;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
      small?: {
        url: string;
        width: number;
        height: number;
      };
      medium?: {
        url: string;
        width: number;
        height: number;
      };
      large?: {
        url: string;
        width: number;
        height: number;
      };
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    documentId?: string;
  }
  
  /**
   * Type for Strapi block content (rich text)
   */
  export interface StrapiRichText {
    type: string;
    children: {
      type: string;
      text?: string;
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      strikethrough?: boolean;
      url?: string;
      children?: StrapiRichText['children'];
    }[];
  }