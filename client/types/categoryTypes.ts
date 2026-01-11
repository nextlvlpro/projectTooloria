import { ComponentType } from "react";

export type IconType = ComponentType<{ className?: string }>;


export interface ToolJsonLd {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  image?: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: "Web";
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
}


export interface SEOType {
  // Core
  title: string;
  description: string;
  canonical?: string;

  // Indexing control
  noIndex?: boolean;
  noFollow?: boolean;

  // Open Graph (Facebook, WhatsApp, LinkedIn, etc.)
  og?: {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    type?: "website" | "article" | "tool";
    siteName?: string;
    locale?: string;
  };

  // Twitter Card
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    image?: string;
    creator?: string;
  };

  // Structured Data (JSON-LD)
  structuredData?: Record<string, any>;

  // Advanced
  alternateLanguages?: Array<{
    hrefLang: string;
    url: string;
  }>;

  // For tools specifically
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;

  // Internal tagging (NOT for Google ranking)
  tags?: string[];
}


export interface Tool {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: IconType;
  seo: SEOType;
}

export interface MainCategory {
  id: number;
  name: string;
  slug: string;
  icon: IconType;
  tools: Tool[];
  seo: SEOType;
}
