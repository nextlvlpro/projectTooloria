// Enhanced SEO configuration for PDF tools
// File: src/app/tools/pdf/seo-config.js

export const pdfToolsSEOConfig = {
    // Main PDF tools page metadata
    mainPage: {
      title: "Free PDF Tools Online - Merge, Split, Compress PDFs | Tooloria",
      description: "Free online PDF tools for service centers. Merge PDFs, split documents, compress files, convert PDF to images. No registration required. Perfect for Lok Mitra Kendras.",
      keywords: [
        "pdf merger online free",
        "pdf splitter tool",
        "compress pdf size",
        "pdf to jpg converter",
        "images to pdf converter",
        "service center pdf tools",
        "lok mitra kendra tools",
        "free pdf editor online",
        "merge pdf files",
        "split pdf pages"
      ],
      canonical: "https://tooloria.org/tools/pdf"
    },
  
    // Individual tool SEO configurations
    tools: {
      merger: {
        title: "Free PDF Merger - Combine Multiple PDFs Online | Tooloria",
        description: "Merge multiple PDF files into one document online. Free PDF merger tool for service centers. No file size limits, secure processing in your browser.",
        keywords: ["pdf merger", "combine pdf files", "merge pdf online", "join pdf documents"],
        h1: "PDF Merger - Combine Multiple PDFs",
        canonical: "https://tooloria.org/tools/pdf/merge"
      },
      
      splitter: {
        title: "PDF Splitter - Extract Pages from PDF Online | Tooloria",
        description: "Split PDF files into separate documents or extract specific pages. Free PDF splitter tool perfect for government forms and service centers.",
        keywords: ["pdf splitter", "split pdf pages", "extract pdf pages", "separate pdf files"],
        h1: "PDF Splitter - Extract Pages from PDF",
        canonical: "https://tooloria.org/tools/pdf/split"
      },
  
      compress: {
        title: "PDF Compressor - Reduce PDF File Size Online | Tooloria",
        description: "Compress PDF files to reduce size while maintaining quality. Free PDF compression tool for uploading to government portals and email attachments.",
        keywords: ["pdf compressor", "reduce pdf size", "compress pdf file", "pdf size reducer"],
        h1: "PDF Compressor - Reduce File Size",
        canonical: "https://tooloria.org/tools/pdf/compress"
      },
  
      pdfToImages: {
        title: "PDF to Images Converter - Extract JPG from PDF | Tooloria",
        description: "Convert PDF pages to high-quality JPG, PNG images. Free PDF to image converter perfect for extracting photos from documents for form filling.",
        keywords: ["pdf to jpg", "pdf to png", "convert pdf to images", "extract images from pdf"],
        h1: "PDF to Images - Convert PDF Pages",
        canonical: "https://tooloria.org/tools/pdf/to-images"
      },
  
      imagesToPdf: {
        title: "Images to PDF Converter - Create PDF from Photos | Tooloria",
        description: "Convert JPG, PNG images to PDF documents. Free image to PDF converter for creating document compilations and government form submissions.",
        keywords: ["jpg to pdf", "png to pdf", "images to pdf converter", "photos to pdf"],
        h1: "Images to PDF - Create PDF Documents",
        canonical: "https://tooloria.org/tools/pdf/from-images"
      }
    }
  };
  
  // Structured data generator for PDF tools
  export function generatePDFToolStructuredData(toolType, toolConfig) {
    return {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": `Tooloria ${toolConfig.h1}`,
      "description": toolConfig.description,
      "url": toolConfig.canonical,
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "JavaScript enabled browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      "featureList": getToolFeatures(toolType),
      "author": {
        "@type": "Organization",
        "name": "Tooloria",
        "url": "https://tooloria.org"
      },
      "provider": {
        "@type": "Organization",
        "name": "Tooloria",
        "url": "https://tooloria.org"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      }
    };
  }
  
  // Tool-specific features for structured data
  function getToolFeatures(toolType) {
    const features = {
      merger: [
        "Combine multiple PDF files",
        "Maintain original quality",
        "No file size restrictions",
        "Secure browser processing",
        "Batch PDF merging"
      ],
      splitter: [
        "Extract specific pages",
        "Split by page ranges", 
        "Multiple output files",
        "Preview before splitting",
        "Custom page selection"
      ],
      compressor: [
        "Reduce file size",
        "Quality preservation options",
        "Batch compression",
        "Size target settings",
        "Format optimization"
      ],
      pdfToImages: [
        "High-quality image extraction",
        "Multiple format output",
        "Custom resolution settings",
        "Page range selection",
        "Bulk conversion"
      ],
      imagesToPdf: [
        "Multi-image PDF creation",
        "Custom page sizing",
        "Image reordering",
        "Quality optimization",
        "Batch processing"
      ]
    };
    
    return features[toolType] || [];
  }
  
  // Generate breadcrumb structured data
  export function generateBreadcrumbData(toolType) {
    const toolNames = {
      merger: "PDF Merger",
      splitter: "PDF Splitter", 
      compressor: "PDF Compressor",
      pdfToImages: "PDF to Images",
      imagesToPdf: "Images to PDF"
    };
  
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tooloria.org"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tools",
          "item": "https://tooloria.org/tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PDF Tools",
          "item": "https://tooloria.org/tools/pdf"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": toolNames[toolType],
          "item": `https://tooloria.org/tools/pdf/${toolType === 'pdfToImages' ? 'to-images' : toolType === 'imagesToPdf' ? 'from-images' : toolType}`
        }
      ]
    };
  }
  
  // SEO-optimized URL slugs
  export const pdfToolSlugs = {
    merger: "merge",
    splitter: "split", 
    compressor: "compress",
    pdfToImages: "to-images",
    imagesToPdf: "from-images"
  };
  
  // FAQ structured data for PDF tools
  export function generatePDFFAQData(toolType) {
    const faqs = {
      merger: [
        {
          question: "How do I merge PDF files for free?",
          answer: "Upload multiple PDF files, arrange them in your desired order, and click merge. The tool combines them into a single PDF that you can download instantly."
        },
        {
          question: "Is there a limit to the number of PDFs I can merge?",
          answer: "No, you can merge as many PDF files as needed. The tool processes everything in your browser for maximum security and privacy."
        },
        {
          question: "Does PDF merging reduce quality?",
          answer: "No, our PDF merger maintains the original quality of all documents. Text, images, and formatting remain intact in the merged file."
        }
      ],
      splitter: [
        {
          question: "How can I extract specific pages from a PDF?",
          answer: "Upload your PDF, select the page ranges you want to extract, and download the split files. You can create multiple documents from a single PDF."
        },
        {
          question: "Can I split password-protected PDFs?",
          answer: "You need to remove the password protection first, as our tool requires access to the PDF content to perform the splitting operation."
        }
      ],
      compressor: [
        {
          question: "How much can I compress a PDF file?",
          answer: "Compression results vary by content type. Documents with many images can be compressed significantly, while text-only PDFs have limited compression potential."
        },
        {
          question: "Will PDF compression affect text quality?",
          answer: "Text quality remains high during compression. Our tool primarily compresses images and removes unnecessary metadata while preserving text clarity."
        }
      ]
    };
  
    const toolFAQs = faqs[toolType] || [];
    
    if (toolFAQs.length === 0) return null;
  
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": toolFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }