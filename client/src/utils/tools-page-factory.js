// File: src/utils/tools-page-factory.js
// Factory functions to generate consistent page content for all tool categories

import { structuredDataTemplates } from './seo-utils';

export const createToolCategoryConfig = (categoryType, tools) => {
  const configs = {
    pdf: {
      title: 'Free PDF Tools - Merge, Split, Compress PDFs | Tooloria',
      description: 'Complete collection of free PDF tools for service centers. Merge PDFs, split documents, compress files, and convert between formats. Perfect for Lok Mitra Kendras.',
      path: '/tools/pdf',
      breadcrumbs: [
        structuredDataTemplates.breadcrumbs.home,
        structuredDataTemplates.breadcrumbs.tools,
        structuredDataTemplates.breadcrumbs.pdf,
      ],
      features: [
        {
          icon: '🔄',
          title: 'Merge PDFs',
          description: 'Combine multiple PDF files into one document instantly'
        },
        {
          icon: '✂️', 
          title: 'Split PDFs',
          description: 'Extract specific pages or split into separate documents'
        },
        {
          icon: '🗜️',
          title: 'Compress Files',
          description: 'Reduce PDF file size while maintaining quality'
        },
        {
          icon: '🖼️',
          title: 'Convert Formats',
          description: 'Convert between PDF and image formats seamlessly'
        },
      ],
      useCases: [
        {
          title: 'Government Forms',
          description: 'Process and optimize documents for government portals and applications',
          tools: ['PDF Compressor', 'PDF Merger', 'PDF Splitter'],
          icon: '📋'
        },
        {
          title: 'Document Management',
          description: 'Organize, combine, and extract pages from official documents',
          tools: ['PDF Merger', 'PDF Splitter'],
          icon: '📄'
        },
        {
          title: 'Digital Archives',
          description: 'Convert documents for storage and create PDFs from scanned images',
          tools: ['Images to PDF', 'PDF to Images'],
          icon: '🗃️'
        },
        {
          title: 'File Optimization',
          description: 'Compress large PDFs for email and optimize file sizes',
          tools: ['PDF Compressor'],
          icon: '📂'
        }
      ],
      bestPractices: {
        dos: [
          'Always backup original files before processing',
          'Use compression for email attachments and uploads',
          'Test merged PDFs before submitting to portals',
          'Split large documents for easier management',
          'Keep file names descriptive and organized'
        ],
        donts: [
          'Don\'t process password-protected files without permission',
          'Don\'t over-compress files that need high quality',
          'Don\'t merge incompatible document types',
          'Don\'t forget to check page order after merging',
          'Don\'t ignore file size requirements for submissions'
        ]
      },
      faqs: [
        {
          question: 'Are PDF tools free to use?',
          answer: 'Yes, all PDF tools are completely free with no registration required and no usage limits.'
        },
        {
          question: 'Is my data secure when processing PDFs?',
          answer: 'All PDF processing happens locally in your browser. No files are uploaded to external servers.'
        },
        {
          question: 'What file size limits apply?',
          answer: 'File size is limited only by your device\'s memory. Larger files may take more time to process.'
        }
      ]
    },

    image: {
      title: 'Free Image Tools - Resize, Compress, Convert Images | Tooloria',
      description: 'Professional image editing tools for service centers. Resize images for forms, compress for web, convert formats, and optimize photos instantly.',
      path: '/tools/image',
      breadcrumbs: [
        structuredDataTemplates.breadcrumbs.home,
        structuredDataTemplates.breadcrumbs.tools,
        structuredDataTemplates.breadcrumbs.image,
      ],
      features: [
        {
          icon: '📏',
          title: 'Smart Resize',
          description: 'Resize images to exact dimensions for forms and applications'
        },
        {
          icon: '🗜️',
          title: 'Compress Images', 
          description: 'Reduce file size while maintaining visual quality'
        },
        {
          icon: '🔄',
          title: 'Format Conversion',
          description: 'Convert between JPG, PNG, WebP, and other formats'
        },
        {
          icon: '✍️',
          title: 'Combine Images',
          description: 'Merge photos with signatures for applications'
        }
      ],
      useCases: [
        {
          title: 'Form Applications',
          description: 'Resize photos to exact specifications for government forms',
          tools: ['Image Resizer', 'Image Compressor'],
          icon: '📋'
        },
        {
          title: 'Document Photos',
          description: 'Optimize images for passport, visa, and ID applications',
          tools: ['Image Resizer', 'Format Converter'],
          icon: '📷'
        },
        {
          title: 'Web Optimization',
          description: 'Compress images for websites and social media',
          tools: ['Image Compressor', 'Format Converter'],
          icon: '🌐'
        },
        {
          title: 'Professional Photos',
          description: 'Create job application and profile photos',
          tools: ['Background Remover', 'Image Resizer'],
          icon: '👔'
        }
      ],
      bestPractices: {
        dos: [
          'Always keep original high-resolution copies',
          'Use appropriate formats (JPG for photos, PNG for graphics)',
          'Compress images for web but maintain quality for print',
          'Check dimension requirements before resizing',
          'Test image quality after compression'
        ],
        donts: [
          'Don\'t over-compress images for important documents',
          'Don\'t resize images smaller than required dimensions',
          'Don\'t use low-quality images for official applications',
          'Don\'t forget to check file size limits',
          'Don\'t ignore aspect ratio when resizing'
        ]
      }
    },

    utility: {
      title: 'Free Utility Tools - QR Generator, OCR, Calculators | Tooloria',
      description: 'Essential utility tools for service centers. Generate QR codes, extract text from images, convert files, and use specialized calculators.',
      path: '/tools/utility',
      breadcrumbs: [
        structuredDataTemplates.breadcrumbs.home,
        structuredDataTemplates.breadcrumbs.tools,
        structuredDataTemplates.breadcrumbs.utility,
      ],
      features: [
        {
          icon: '🔗',
          title: 'QR Code Generator',
          description: 'Create custom QR codes for URLs, WiFi, contacts, and more'
        },
        {
          icon: '📖',
          title: 'Text Extraction',
          description: 'Extract text from images and PDF documents using OCR'
        },
        {
          icon: '🔄',
          title: 'File Converter',
          description: 'Convert between different file formats seamlessly'
        },
        {
          icon: '🧮',
          title: 'Calculators',
          description: 'Specialized calculators for GST, EMI, and service needs'
        }
      ],
      useCases: [
        {
          title: 'Customer Service',
          description: 'Create QR codes for WiFi access and contact information',
          tools: ['QR Code Generator'],
          icon: '📱'
        },
        {
          title: 'Document Processing',
          description: 'Extract text from scanned documents and images',
          tools: ['OCR Text Extractor', 'File Converter'],
          icon: '📄'
        },
        {
          title: 'Quick Calculations',
          description: 'Perform GST, EMI, and other business calculations',
          tools: ['Calculator', 'Date Converter'],
          icon: '🧮'
        },
        {
          title: 'Digital Workflow',
          description: 'Convert files and streamline document processing',
          tools: ['File Converter', 'Date Converter'],
          icon: '⚡'
        }
      ],
      bestPractices: {
        dos: [
          'Test QR codes before printing or sharing',
          'Use high contrast colors for QR codes',
          'Verify OCR results for accuracy',
          'Keep QR codes at readable sizes (minimum 2cm x 2cm)',
          'Double-check calculations for important transactions'
        ],
        donts: [
          'Don\'t use QR codes with low contrast colors',
          'Don\'t make QR codes too small to scan',
          'Don\'t rely solely on OCR without verification',
          'Don\'t forget to test QR codes on different devices',
          'Don\'t use complex URLs that create dense QR codes'
        ]
      }
    }
  };

  return {
    ...configs[categoryType],
    tools,
    toolsCount: {
      available: tools.filter(t => t.status === 'available').length,
      comingSoon: tools.filter(t => t.status === 'coming-soon').length,
      total: tools.length
    }
  };
};

// Generate common how-to steps for different tool types
export const generateHowToSteps = (toolType) => {
  const steps = {
    pdf: [
      {
        title: 'Select Tool',
        description: 'Choose the PDF tool you need from the available options'
      },
      {
        title: 'Upload Files',
        description: 'Select or drag and drop your PDF files to process'
      },
      {
        title: 'Configure',
        description: 'Adjust settings like quality, page ranges, or order'
      },
      {
        title: 'Process & Download',
        description: 'Click process and download your optimized PDFs'
      }
    ],

    image: [
      {
        title: 'Choose Tool',
        description: 'Select the image editing tool for your specific need'
      },
      {
        title: 'Upload Images',
        description: 'Add your images using the upload area or drag & drop'
      },
      {
        title: 'Adjust Settings',
        description: 'Set dimensions, quality, format, or other parameters'
      },
      {
        title: 'Save Results',
        description: 'Preview your changes and download the processed images'
      }
    ],

    utility: [
      {
        title: 'Select Utility',
        description: 'Choose from QR generator, OCR, calculator, or converter'
      },
      {
        title: 'Input Data',
        description: 'Enter your content, upload files, or input calculations'
      },
      {
        title: 'Customize',
        description: 'Adjust colors, sizes, formats, or calculation parameters'
      },
      {
        title: 'Get Results',
        description: 'Generate, calculate, or convert and save your results'
      }
    ],

    qrGenerator: [
      {
        title: 'Choose Type',
        description: 'Select what kind of QR code you want to create'
      },
      {
        title: 'Enter Content',
        description: 'Add your URL, text, WiFi details, or contact information'
      },
      {
        title: 'Customize',
        description: 'Adjust colors, size, and error correction level'
      },
      {
        title: 'Download',
        description: 'Save as PNG or SVG and use anywhere you need'
      }
    ]
  };

  return steps[toolType] || steps.utility;
};

// Generate benefits for different contexts
export const generateBenefits = (context = 'general') => {
  const benefits = {
    general: [
      {
        icon: '🔒',
        title: 'Privacy First',
        description: 'All processing happens locally in your browser. No data leaves your device.'
      },
      {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Instant processing with no waiting for uploads or downloads.'
      },
      {
        icon: '💰',
        title: 'Always Free',
        description: 'No subscriptions, no hidden costs, no registration required.'
      }
    ],

    serviceCenter: [
      {
        icon: '🏢',
        title: 'Service Center Optimized',
        description: 'Designed specifically for common government service workflows.'
      },
      {
        icon: '📱',
        title: 'Works Anywhere',
        description: 'Access from any device with a web browser - desktop, tablet, or mobile.'
      },
      {
        icon: '⚡',
        title: 'No Installation',
        description: 'Start using immediately without downloading or installing software.'
      },
      {
        icon: '🔒',
        title: 'Completely Secure',
        description: 'All processing happens offline in your browser for maximum privacy.'
      }
    ],

    professional: [
      {
        icon: '🎯',
        title: 'Professional Quality',
        description: 'Enterprise-grade tools that maintain document integrity and quality.'
      },
      {
        icon: '🚀',
        title: 'Batch Processing',
        description: 'Handle multiple files simultaneously to save time and increase efficiency.'
      },
      {
        icon: '📊',
        title: 'Format Support',
        description: 'Wide range of supported formats for maximum compatibility.'
      }
    ]
  };

  return benefits[context] || benefits.general;
};

// Factory function to create complete page configuration
export const createToolPageConfig = (toolType, toolConfig, customSections = {}) => {
  const baseConfig = {
    ...toolConfig,
    breadcrumbs: [
      structuredDataTemplates.breadcrumbs.home,
      structuredDataTemplates.breadcrumbs.tools,
      ...(toolConfig.breadcrumbs || [])
    ],
    // Add common FAQs if not provided
    faqs: toolConfig.faqs || [
      structuredDataTemplates.commonFAQs.privacy,
      structuredDataTemplates.commonFAQs.free,
      structuredDataTemplates.commonFAQs.offline,
      structuredDataTemplates.commonFAQs.registration
    ]
  };

  return {
    config: baseConfig,
    howToSteps: customSections.howToSteps || generateHowToSteps(toolType),
    benefits: customSections.benefits || generateBenefits('serviceCenter'),
    ...customSections
  };
};