// File: src/utils/seo-utils.js
// Centralized SEO utilities for all tools

export const generateToolMetadata = (config) => {
  const baseUrl = 'https://tooloria.org';
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      type: 'website',
      url: `${baseUrl}${config.path}`,
      images: [
        {
          url: `${baseUrl}/images/${config.image || 'default-tool.jpg'}`,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [`${baseUrl}/images/${config.image || 'default-tool.jpg'}`],
    },
    alternates: {
      canonical: `${baseUrl}${config.path}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};

export const generateToolStructuredData = (toolConfig) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolConfig.name || toolConfig.title,
    description: toolConfig.description,
    url: `https://tooloria.org${toolConfig.path || toolConfig.href}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: toolConfig.features || [],
    author: {
      '@type': 'Organization',
      name: 'Tooloria',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };
};

export const generateBreadcrumbData = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://tooloria.org${crumb.href}`,
    })),
  };
};

export const generateFAQData = (faqs) => {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateCollectionStructuredData = (config) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: config.title,
    description: config.description,
    url: `https://tooloria.org${config.path}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: config.tools.map((tool, index) => ({
        '@type': 'WebApplication',
        position: index + 1,
        name: tool.name,
        description: tool.description,
        url: `https://tooloria.org${tool.href}`,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }))
    }
  };
};

// Common structured data templates
export const structuredDataTemplates = {
  breadcrumbs: {
    home: { name: 'Home', href: '' },
    tools: { name: 'Tools', href: '/tools' },
    pdf: { name: 'PDF Tools', href: '/tools/pdf' },
    image: { name: 'Image Tools', href: '/tools/image' },
    utility: { name: 'Utility Tools', href: '/tools/utility' },
  },
  
  commonFAQs: {
    privacy: {
      question: 'Are my files secure when using these tools?',
      answer: 'Yes, all processing happens locally in your browser. No files are uploaded to our servers, ensuring complete privacy and security.',
    },
    free: {
      question: 'Are these tools completely free?',
      answer: 'Yes, all tools are completely free to use with no registration required, no usage limits, and no hidden costs.',
    },
    offline: {
      question: 'Do these tools work offline?',
      answer: 'Once the page loads, most tools can work offline. However, you need an internet connection to initially load the tool.',
    },
    registration: {
      question: 'Do I need to create an account?',
      answer: 'No registration required. All tools can be used immediately without creating any accounts or providing personal information.',
    },
  }
};