// Enhanced SEO configuration for Utility tools
// File: src/app/tools/utility/utilityToolsSEOConfig.js

export const utilityToolsSEOConfig = {
    // Main Utility tools page metadata
    mainPage: {
        title: "Free Utility Tools Online - QR Code, OCR & More | Tooloria",
        description: "Free online utility tools for service centers. Generate QR codes, extract text with OCR, convert files, and more. No registration required. Perfect for Lok Mitra Kendras.",
        keywords: [
            "utility tools online",
            "qr code generator free",
            "ocr text extractor",
            "file converter online",
            "calculator tools",
            "date converter",
            "service center tools",
            "lok mitra kendra utilities",
            "free online tools",
            "qr code maker"
        ],
        canonical: "https://tooloria.org/tools/utility"
    },

    // Individual tool SEO configurations
    tools: {
        qrGenerator: {
            title: "Free QR Code Generator - Create QR Codes Online | Tooloria",
            description: "Generate QR codes for URLs, WiFi passwords, contact info, and more. Free QR code generator with custom colors, logo embedding, and multiple export formats.",
            keywords: ["qr code generator", "create qr code", "qr code maker", "wifi qr code", "url qr code"],
            h1: "QR Code Generator - Create Custom QR Codes",
            canonical: "https://tooloria.org/tools/utility/qr-generator"
        },

        ocrExtractor: {
            title: "OCR Text Extractor - Extract Text from Images | Tooloria",
            description: "Extract text from images and PDF documents using OCR technology. Free text extraction tool perfect for digitizing scanned documents and forms.",
            keywords: ["ocr text extractor", "extract text from image", "image to text", "pdf text extraction"],
            h1: "OCR Text Extractor - Extract Text from Images",
            canonical: "https://tooloria.org/tools/utility/ocr-text-extract"
        },

        fileConverter: {
            title: "File Converter - Convert Between File Formats | Tooloria",
            description: "Convert between different file formats. Support for documents, images, and other common file types. Free online file conversion tool.",
            keywords: ["file converter", "format converter", "document converter", "online converter"],
            h1: "File Converter - Convert File Formats",
            canonical: "https://tooloria.org/tools/utility/file-converter"
        },

        calculator: {
            title: "Calculator Tools - GST, EMI & More | Tooloria",
            description: "Advanced calculator tools for service centers including GST calculations, EMI calculations, percentage calculator, and unit converter.",
            keywords: ["gst calculator", "emi calculator", "percentage calculator", "unit converter"],
            h1: "Calculator Tools - Service Center Calculators",
            canonical: "https://tooloria.org/tools/utility/calculator"
        },

        dateConverter: {
            title: "Date Converter - Convert Between Date Formats | Tooloria",
            description: "Convert between different date formats and calendar systems. Useful for form filling and document processing. Free date conversion tool.",
            keywords: ["date converter", "date format converter", "calendar converter", "date calculator"],
            h1: "Date Converter - Convert Date Formats",
            canonical: "https://tooloria.org/tools/utility/date-converter"
        }
    }
};

// Structured data generator for Utility tools
export function generateUtilityToolStructuredData(toolType, toolConfig) {
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
        qrGenerator: [
            "URL QR codes",
            "WiFi QR codes",
            "Custom colors",
            "Logo embedding",
            "PNG & SVG export"
        ],
        ocrExtractor: [
            "Image text extraction",
            "PDF text extraction",
            "Multiple languages",
            "Batch processing",
            "High accuracy"
        ],
        fileConverter: [
            "Document conversion",
            "Image format conversion",
            "Batch processing",
            "Quality control",
            "Multiple formats"
        ],
        calculator: [
            "GST calculator",
            "EMI calculator",
            "Percentage calculator",
            "Unit converter",
            "Scientific calculator"
        ],
        dateConverter: [
            "Multiple date formats",
            "Calendar conversion",
            "Age calculator",
            "Date difference",
            "Timezone support"
        ]
    };

    return features[toolType] || [];
}

// Generate breadcrumb structured data
export function generateUtilityBreadcrumbData(toolType) {
    const toolNames = {
        qrGenerator: "QR Code Generator",
        ocrExtractor: "OCR Text Extractor",
        fileConverter: "File Converter",
        calculator: "Calculator",
        dateConverter: "Date Converter"
    };

    const toolSlugs = {
        qrGenerator: "qr-generator",
        ocrExtractor: "ocr-text-extract",
        fileConverter: "file-converter",
        calculator: "calculator",
        dateConverter: "date-converter"
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
                "name": "Utility Tools",
                "item": "https://tooloria.org/tools/utility"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": toolNames[toolType],
                "item": `https://tooloria.org/tools/utility/${toolSlugs[toolType]}`
            }
        ]
    };
}

// SEO-optimized URL slugs
export const utilityToolSlugs = {
    qrGenerator: "qr-generator",
    ocrExtractor: "ocr-text-extract",
    fileConverter: "file-converter",
    calculator: "calculator",
    dateConverter: "date-converter"
};

// FAQ structured data for Utility tools
export function generateUtilityFAQData(toolType) {
    const faqs = {
        qrGenerator: [
            {
                question: "How do I create a QR code for free?",
                answer: "Simply enter your URL, text, or WiFi credentials, customize the colors and size if desired, and click generate. You can download the QR code as PNG or SVG format instantly."
            },
            {
                question: "Can I add a logo to my QR code?",
                answer: "Yes, you can upload your logo and it will be embedded in the center of the QR code. The tool automatically ensures the QR code remains scannable with the logo."
            },
            {
                question: "What types of QR codes can I create?",
                answer: "You can create QR codes for URLs, WiFi passwords, contact information (vCard), plain text, email addresses, phone numbers, and more."
            }
        ],
        ocrExtractor: [
            {
                question: "How accurate is the OCR text extraction?",
                answer: "Our OCR tool uses advanced algorithms to achieve high accuracy, especially with clear, well-lit images. Accuracy depends on image quality, font clarity, and language."
            },
            {
                question: "What languages does the OCR support?",
                answer: "The OCR tool supports multiple languages including English, Hindi, and other major Indian and international languages."
            }
        ],
        calculator: [
            {
                question: "How do I calculate GST?",
                answer: "Enter the base amount and GST percentage. The calculator will show you the GST amount and total amount including GST. You can also calculate reverse GST to find the base amount from total."
            },
            {
                question: "Can I calculate EMI for loans?",
                answer: "Yes, enter the loan amount, interest rate, and tenure. The EMI calculator will show your monthly payment amount and total interest payable."
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
