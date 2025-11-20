// File: src/app/tools/toolsinfo.js
export const toolCategories = [
  {
    title: "PDF Tools",
    icon: "📄",
    description: "Merge, split, compress and convert PDF files",
    tools: [
      "PDF Merger",
      "PDF Splitter", 
      "PDF Compressor",
      "PDF to Images",
      "Images to PDF",
    ],
    href: "/tools/pdf",
    color: "bg-blue-500",
  },
  {
    title: "Image Tools",
    icon: "🖼️",
    description: "Resize, compress and edit images efficiently", 
    tools: [
      "Image Resizer",
      "Image Compressor",
      "Format Converter",
      "Background Remover",
    ],
    href: "/tools/image",
    color: "bg-green-500",
  },
  {
    title: "Utility Tools",
    icon: "🔧",
    description: "QR codes, text extraction, converters and calculators",
    tools: [
      "QR Code Generator",
      "OCR Text Extract", 
      "File Converter",
      "Calculator",
      "Date Converter",
    ],
    href: "/tools/utility",
    color: "bg-orange-500",
  },
  // {
  //   title: "Form Tools",
  //   icon: "📝",
  //   description: "Generate and fill forms automatically",
  //   tools: [
  //     "Form Generator",
  //     "Auto Fill",
  //     "Digital Signatures",
  //     "Document Templates",
  //   ],
  //   href: "/tools/form",
  //   color: "bg-purple-500",
  // },
];

export const utilityTools = [
  {
    name: 'QR Code Generator',
    href: '/tools/utility/qr-generator',
    description: 'Create QR codes for URLs, WiFi passwords, contact info, and more. Customize colors, add logos, and download in multiple formats.',
    sidebarDescription: 'Generate custom QR codes instantly.',
    icon: '🔗',
    features: ['URL QR codes', 'WiFi QR codes', 'Custom colors', 'Logo embedding', 'PNG & SVG export'],
    popular: true,
    status: 'available'
  },
  {
    name: 'OCR Text Extractor',
    href: '/tools/utility/ocr-text-extract',
    description: 'Extract text from images and PDF documents. Perfect for digitizing scanned documents and forms.',
    sidebarDescription: 'Extract text from images and PDFs.',
    icon: '📖',
    features: ['Image text extraction', 'PDF text extraction', 'Multiple languages', 'Batch processing'],
    popular: true,
    status: 'coming-soon'
  },
  {
    name: 'File Converter',
    href: '/tools/utility/file-converter',
    description: 'Convert between different file formats. Support for documents, images, and other common file types.',
    sidebarDescription: 'Convert between file formats.',
    icon: '🔄',
    features: ['Document conversion', 'Image format conversion', 'Batch processing', 'Quality control'],
    popular: false,
    status: 'coming-soon'
  },
  {
    name: 'Calculator',
    href: '/tools/utility/calculator',
    description: 'Advanced calculator for service center needs including GST calculations, EMI calculations, and more.',
    sidebarDescription: 'Service center calculator tools.',
    icon: '🧮',
    features: ['GST calculator', 'EMI calculator', 'Percentage calculator', 'Unit converter'],
    popular: false,
    status: 'coming-soon'
  },
  {
    name: 'Date Converter',
    href: '/tools/utility/date-converter',
    description: 'Convert between different date formats and calendar systems. Useful for form filling and document processing.',
    sidebarDescription: 'Convert between date formats.',
    icon: '📅',
    features: ['Multiple date formats', 'Calendar conversion', 'Age calculator', 'Date difference'],
    popular: false,
    status: 'coming-soon'
  }
];

export const imageTools = [
  {
    name: 'Image Resizer',
    href: '/tools/image/resize',
    description: 'Resize images to specific dimensions, or common sizes. Maintain aspect ratio or stretch to exact dimensions.',
    sidebarDescription: 'Resize images to specific dimensions.',
    icon: '📏',
    features: ['Custom dimensions', 'Percentage scaling', 'Aspect ratio lock', 'Batch processing'],
    popular: true,
    status: 'available'
  },
  {
    name: 'Image Compressor', 
    href: '/tools/image/compress',
    description: 'Reduce image file size while maintaining visual quality. Perfect for web use and email attachments.',
    sidebarDescription: 'Reduce image file size.',
    icon: '🗜️',
    features: ['Quality control', 'Size reduction', 'Multiple formats', 'Preview comparison'],
    popular: true,
    status: 'available'
  },
  {
    name: 'Format Converter',
    href: '/tools/image/image-convertor',
    description: 'Convert between JPG, PNG, WebP, GIF and other image formats. Supports modern formats for better compression.',
    sidebarDescription: 'Convert between JPG, PNG, WebP, GIF and other image formats.',
    icon: '🔄',
    features: ['Multiple formats', 'Quality settings', 'Transparency support', 'Bulk conversion'],
    popular: false,
    status: 'available'
  },
  {
    name: 'Image + Signature Combiner',
    href: '/tools/image/image-sign-combiner',
    description: 'Combine your photo and signature into one image for government forms, exams, banking, and more.',
    sidebarDescription: 'Combine photo and signature.',
    icon: '✍️',
    features: ['Photo + signature merge', 'Position adjustment', 'Size optimization', 'Multiple export formats'],
    popular: true,
    status: 'available'
  },
  {
    name: 'Background Remover',
    href: '/tools/image/background-remover',
    description: 'Remove backgrounds from images automatically. Perfect for creating passport photos and professional headshots.',
    sidebarDescription: 'Remove image backgrounds.',
    icon: '🎯',
    features: ['AI background removal', 'Manual editing', 'Transparent PNG export', 'Batch processing'],
    popular: true,
    status: 'coming-soon'
  }
];

export const pdfTools = [
  {
    name: 'PDF Merger',
    href: '/tools/pdf/merge',
    description: 'Combine multiple PDF files into a single document. Arrange pages in any order and merge instantly.',
    sidebarDescription: 'Combine multiple PDFs into one.',
    icon: '📋',
    features: ['Multiple file upload', 'Drag to reorder', 'Quality preservation', 'Instant processing'],
    popular: true,
    status: 'available'
  },
  {
    name: 'PDF Splitter',
    href: '/tools/pdf/split',
    description: 'Split PDF files into separate documents or extract specific pages. Great for separating chapters, forms, or document sections.',
    sidebarDescription: 'Split PDF into separate files.',
    icon: '✂️',
    features: ['Page range selection', 'Individual pages', 'Batch extraction', 'Preview pages'],
    popular: true,
    status: 'available'
  },
  {
    name: 'PDF Compressor',
    href: '/tools/pdf/compress',
    description: 'Reduce PDF file size while maintaining quality. Essential for email attachments and meeting file size requirements for online submissions.',
    sidebarDescription: 'Reduce PDF file size.',
    icon: '🗜️',
    features: ['Smart compression', 'Quality control', 'Size preview', 'Batch processing'],
    popular: true,
    status: 'available'
  },
  {
    name: 'Images to PDF',
    href: '/tools/pdf/from-images',
    description: 'Create PDF documents from multiple images. Ideal for scanning documents, creating photo albums, or combining images into a single PDF.',
    sidebarDescription: 'Create PDF from images.',
    icon: '📑',
    features: ['Multiple image formats', 'Page ordering', 'Size optimization', 'Custom margins'],
    popular: false,
    status: 'coming-soon'
  },
  {
    name: 'PDF to Images',
    href: '/tools/pdf/to-images',
    description: 'Convert PDF pages to JPG, PNG, or WebP images. Perfect for creating thumbnails, presentations, or extracting specific pages as images.',
    sidebarDescription: 'Convert PDF pages to images.',
    icon: '🖼️',
    features: ['Multiple formats', 'Custom resolution', 'Page selection', 'Batch conversion'],
    popular: false,
    status: 'coming-soon'
  },
];

// Common use cases for service centers
export const serviceCenterUseCases = [
  {
    title: 'Government Forms',
    description: 'Process and optimize documents for government portals and applications',
    tools: ['PDF Compressor', 'Image Resizer', 'PDF Merger'],
    icon: '📋'
  },
  {
    title: 'Digital Documentation',
    description: 'Convert physical documents to digital formats for storage and sharing',
    tools: ['OCR Text Extract', 'Images to PDF', 'QR Code Generator'],
    icon: '📄'
  },
  {
    title: 'Customer Services',
    description: 'Quick tools for helping customers with common digital tasks',
    tools: ['Image Compressor', 'File Converter', 'Calculator'],
    icon: '🏢'
  },
  {
    title: 'Photo Processing',
    description: 'Prepare photos for various applications and requirements',
    tools: ['Image Resizer', 'Background Remover', 'Format Converter'],
    icon: '📷'
  }
];

// Export all tools for easy access
export const allTools = [
  ...pdfTools,
  ...imageTools,
  ...utilityTools
];

// Get tools by status
export const getAvailableTools = () => allTools.filter(tool => tool.status === 'available');
export const getComingSoonTools = () => allTools.filter(tool => tool.status === 'coming-soon');
export const getPopularTools = () => allTools.filter(tool => tool.popular === true);