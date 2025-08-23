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
      title: "Form Tools",
      icon: "📝",
      description: "Generate and fill forms automatically",
      tools: [
        "Form Generator",
        "Auto Fill",
        "Digital Signatures",
        "QR Generator",
      ],
      href: "/tools/form",
      color: "bg-purple-500",
    },
    {
      title: "Utility Tools",
      icon: "🔧",
      description: "Text extraction, converters and calculators",
      tools: [
        "OCR Text Extract",
        "File Converter",
        "Calculator",
        "Date Converter",
      ],
      href: "/tools/utility",
      color: "bg-orange-500",
    },
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
      description: 'Combine your photo and signature into one image for government forms, exams, banking, and more. No server uploads — everything happens in your browser.',
      sidebarDescription: 'Combine your photo and signature into one image.',
      icon: '🖼️',
      features: ['Side-by-side or top-bottom layouts', 'Instant processing', 'Private & secure'],
      popular: false,
      status: 'available'
    },
    {
      name: 'Image Croper',
      href: '/tools/image/cropper',
      description: 'Crop images to specific dimensions. Perfect for editing photos and portraits.',
      sidebarDescription: 'Crop images to specific dimensions.',
      icon: '🖼️',
      features: ['Custom dimensions', 'Percentage scaling', 'Aspect ratio lock', 'Batch processing'],
      popular: false,
      status: 'available'
    },
    {
      name: 'Background Remover',
      href: '/tools/image/remove-bg',
      description: 'Automatically remove backgrounds from images using AI. Great for product photos and portraits.',
      sidebarDescription: 'Automatically remove backgrounds from images using AI.',
      icon: '🎭',
      features: ['AI-powered removal', 'Edge detection', 'Manual refinement', 'Transparent output'],
      popular: true,
      status: 'coming-soon'
    },
  ];