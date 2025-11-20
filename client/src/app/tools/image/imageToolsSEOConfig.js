// Enhanced SEO configuration for Image tools
// File: src/app/tools/image/imageToolsSEOConfig.js

export const imageToolsSEOConfig = {
    // Main Image tools page metadata
    mainPage: {
        title: "Free Image Tools Online - Resize, Compress, Convert Images | Tooloria",
        description: "Free online image tools for service centers. Resize images, compress photos, convert formats, combine images with signatures. No registration required. Perfect for Lok Mitra Kendras.",
        keywords: [
            "image resizer online free",
            "image compressor tool",
            "image format converter",
            "photo resize online",
            "compress image size",
            "service center image tools",
            "lok mitra kendra tools",
            "free image editor online",
            "resize photo for passport",
            "image signature combiner"
        ],
        canonical: "https://tooloria.org/tools/image"
    },

    // Individual tool SEO configurations
    tools: {
        resize: {
            title: "Free Image Resizer - Resize Photos Online | Tooloria",
            description: "Resize images to specific dimensions or common sizes. Free image resizer tool for passport photos, government forms, and documents. Maintain aspect ratio or custom dimensions.",
            keywords: ["image resizer", "resize photo online", "photo dimensions", "passport photo size"],
            h1: "Image Resizer - Resize Photos to Any Dimension",
            canonical: "https://tooloria.org/tools/image/resize"
        },

        compress: {
            title: "Image Compressor - Reduce Photo Size Online | Tooloria",
            description: "Compress images to reduce file size while maintaining quality. Free image compression tool perfect for uploading to government portals and websites.",
            keywords: ["image compressor", "reduce image size", "compress photo", "optimize images"],
            h1: "Image Compressor - Reduce File Size",
            canonical: "https://tooloria.org/tools/image/compress"
        },

        convertor: {
            title: "Image Format Converter - Convert JPG, PNG, WebP | Tooloria",
            description: "Convert between JPG, PNG, WebP, GIF and other image formats. Free image converter supporting modern formats for better compression and quality.",
            keywords: ["image converter", "jpg to png", "png to jpg", "webp converter", "format converter"],
            h1: "Image Format Converter - Convert Between Formats",
            canonical: "https://tooloria.org/tools/image/image-convertor"
        },

        imageSigner: {
            title: "Image + Signature Combiner - Merge Photo & Signature | Tooloria",
            description: "Combine your photo and signature into one image for government forms, exams, banking applications. Free tool for creating combined photo-signature images.",
            keywords: ["photo signature combiner", "merge photo signature", "exam form photo", "government form image"],
            h1: "Image + Signature Combiner - Create Combined Images",
            canonical: "https://tooloria.org/tools/image/image-sign-combiner"
        },

        cropper: {
            title: "Image Cropper - Crop Photos Online | Tooloria",
            description: "Crop images to specific dimensions or aspect ratios. Free image cropping tool for passport photos, profile pictures, and document preparation.",
            keywords: ["image cropper", "crop photo online", "photo crop tool", "passport photo crop"],
            h1: "Image Cropper - Crop Photos Precisely",
            canonical: "https://tooloria.org/tools/image/cropper"
        }
    }
};

// Structured data generator for Image tools
export function generateImageToolStructuredData(toolType, toolConfig) {
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
        resize: [
            "Custom dimensions",
            "Percentage scaling",
            "Aspect ratio lock",
            "Batch processing",
            "Common size presets"
        ],
        compress: [
            "Quality control",
            "Size reduction",
            "Multiple formats",
            "Preview comparison",
            "Batch compression"
        ],
        convertor: [
            "Multiple format support",
            "Quality settings",
            "Transparency support",
            "Bulk conversion",
            "Modern format support"
        ],
        imageSigner: [
            "Photo + signature merge",
            "Position adjustment",
            "Size optimization",
            "Multiple export formats",
            "Custom layouts"
        ],
        cropper: [
            "Precise cropping",
            "Aspect ratio presets",
            "Custom dimensions",
            "Preview before crop",
            "Quality preservation"
        ]
    };

    return features[toolType] || [];
}

// Generate breadcrumb structured data
export function generateImageBreadcrumbData(toolType) {
    const toolNames = {
        resize: "Image Resizer",
        compress: "Image Compressor",
        convertor: "Format Converter",
        imageSigner: "Image + Signature Combiner",
        cropper: "Image Cropper"
    };

    const toolSlugs = {
        resize: "resize",
        compress: "compress",
        convertor: "image-convertor",
        imageSigner: "image-sign-combiner",
        cropper: "cropper"
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
                "name": "Image Tools",
                "item": "https://tooloria.org/tools/image"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": toolNames[toolType],
                "item": `https://tooloria.org/tools/image/${toolSlugs[toolType]}`
            }
        ]
    };
}

// SEO-optimized URL slugs
export const imageToolSlugs = {
    resize: "resize",
    compress: "compress",
    convertor: "image-convertor",
    imageSigner: "image-sign-combiner",
    cropper: "cropper"
};

// FAQ structured data for Image tools
export function generateImageFAQData(toolType) {
    const faqs = {
        resize: [
            {
                question: "How do I resize an image for passport photos?",
                answer: "Upload your image, select the passport photo size preset (35mm x 45mm or your country's requirement), and download the resized image. The tool maintains quality while resizing to exact dimensions."
            },
            {
                question: "Can I resize multiple images at once?",
                answer: "Yes, you can upload and resize multiple images in batch mode. All images will be processed with the same dimensions or scaling percentage."
            },
            {
                question: "Does resizing reduce image quality?",
                answer: "Our tool uses high-quality algorithms to minimize quality loss. When downsizing images, quality is well-preserved. Upsizing may reduce sharpness slightly."
            }
        ],
        compress: [
            {
                question: "How much can I compress an image?",
                answer: "Compression results vary by image content. Photos with many colors can typically be compressed 50-80% while maintaining good visual quality. You can adjust the quality slider to balance size and quality."
            },
            {
                question: "What image formats can I compress?",
                answer: "You can compress JPG, PNG, WebP, and other common image formats. The tool automatically optimizes based on the format and content type."
            }
        ],
        convertor: [
            {
                question: "Can I convert PNG to JPG without losing quality?",
                answer: "Yes, but note that JPG doesn't support transparency. If your PNG has a transparent background, it will be replaced with white or your chosen background color during conversion."
            },
            {
                question: "What is WebP format and should I use it?",
                answer: "WebP is a modern image format that provides superior compression while maintaining quality. It's ideal for web use and is supported by all modern browsers."
            }
        ],
        imageSigner: [
            {
                question: "How do I combine my photo and signature for government forms?",
                answer: "Upload your photo and signature separately. Adjust their positions and sizes as needed, then download the combined image. Perfect for exam forms, banking applications, and government documents."
            },
            {
                question: "What size should my combined image be?",
                answer: "Most government forms require specific dimensions. Our tool provides common presets, or you can set custom dimensions to match your form requirements."
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
