// File: src/app/tools/utility/qr-generator/page.jsx
// Fixed - No event handlers passed to Server Components

import QRCodeGenerator from './components/QRCodeGenerator';
import ToolPageTemplate from '@/components/tools/ToolPageTemplate';
import { generateToolMetadata } from '@/utils/seo-utils';
import { createToolPageConfig } from '@/utils/tools-page-factory';

// Tool configuration
const toolConfig = {
  name: 'QR Code Generator',
  title: 'Free QR Code Generator - Create QR Codes Online | Tooloria',
  h1: 'Free QR Code Generator',
  description: 'Create custom QR codes instantly for URLs, WiFi passwords, contact info, and more. Perfect for service centers, businesses, and personal use. No registration required.',
  path: '/tools/utility/qr-generator',
  breadcrumbs: [
    { name: 'Home', href: '' },
    { name: 'Tools', href: '/tools' },
    { name: 'Utility Tools', href: '/tools/utility' },
    { name: 'QR Code Generator', href: '/tools/utility/qr-generator' }
  ],
  features: [
    'URL QR Codes',
    'WiFi QR Codes', 
    'Contact Cards (vCard)',
    'SMS & Email QR Codes',
    'Custom Colors & Sizes',
    'PNG & SVG Export'
  ],
  keywords: [
    'qr code generator',
    'create qr code online', 
    'free qr code maker',
    'wifi qr code',
    'service center qr codes'
  ]
};

// Generate page configuration using factory
const pageData = createToolPageConfig('qrGenerator', toolConfig, {
  // Custom sections specific to QR generator
  features: [
    {
      icon: '🔗',
      title: 'URL QR Codes',
      description: 'Create QR codes that direct to websites, landing pages, or any online resource.'
    },
    {
      icon: '📶', 
      title: 'WiFi QR Codes',
      description: 'Generate QR codes for easy WiFi sharing. Customers can connect instantly without typing passwords.'
    },
    {
      icon: '👤',
      title: 'Contact Info',
      description: 'Create vCard QR codes with phone numbers, emails, and addresses for easy contact sharing.'
    },
    {
      icon: '🎨',
      title: 'Custom Design', 
      description: 'Customize colors, add logos, and adjust error correction to match your brand.'
    },
    {
      icon: '📱',
      title: 'Multiple Formats',
      description: 'Download as PNG for printing or SVG for scalable graphics and professional use.'
    },
    {
      icon: '🔒',
      title: 'Privacy Focused',
      description: 'All processing happens locally in your browser. No data is sent to external servers.'
    }
  ],

  useCases: [
    {
      title: 'Customer WiFi Access',
      description: 'Create WiFi QR codes for easy customer internet access',
      tools: ['QR Code Generator'],
      icon: '📶'
    },
    {
      title: 'Government Service Links',
      description: 'Direct access to online forms and government portals',
      tools: ['QR Code Generator'],
      icon: '🔗'
    },
    {
      title: 'Contact Information',
      description: 'Share service center contact details instantly',
      tools: ['QR Code Generator'],
      icon: '👤'
    },
    {
      title: 'Process Instructions',
      description: 'Provide step-by-step guidelines via QR codes',
      tools: ['QR Code Generator'],
      icon: '📝'
    }
  ],

  examples: [
    {
      title: 'Customer WiFi',
      icon: '📶',
      details: [
        'Network: ServiceCenter_WiFi',
        'Password: welcome2024',
        'Security: WPA2',
        'Customers can scan and connect instantly'
      ],
      data: {
        type: 'wifi',
        ssid: 'ServiceCenter_WiFi',
        password: 'welcome2024',
        security: 'WPA'
      }
    },
    {
      title: 'Government Portal',
      icon: '🔗', 
      details: [
        'URL: https://serviceonline.gov.in',
        'Purpose: Direct access to forms',
        'Use case: Quick form access',
        'Perfect for service centers'
      ],
      data: {
        type: 'url',
        value: 'https://serviceonline.gov.in'
      }
    },
    {
      title: 'Contact Info',
      icon: '👤',
      details: [
        'Name: Lok Mitra Kendra',
        'Phone: +91-9876543210',
        'Email: info@lokmitra.gov.in',
        'Easy contact sharing'
      ],
      data: {
        type: 'vcard',
        name: 'Lok Mitra Kendra',
        phone: '+91-9876543210',
        email: 'info@lokmitra.gov.in',
        organization: 'Government Service Center'
      }
    }
  ],

  bestPractices: {
    dos: [
      'Use high contrast colors (black on white works best)',
      'Test QR codes on different devices before printing',
      'Keep URLs short and simple',
      'Use medium or high error correction for printed codes',
      'Place QR codes at eye level for easy scanning',
      'Include instructions like "Scan with phone camera"'
    ],
    donts: [
      'Don\'t use colors with low contrast',
      'Don\'t make QR codes too small (minimum 2cm x 2cm)',
      'Don\'t place on curved or reflective surfaces', 
      'Don\'t cover important parts of the QR code',
      'Don\'t use expired or broken links',
      'Don\'t forget to test before mass printing'
    ]
  },

  cta: {
    title: 'Ready to Create Your QR Codes?',
    description: 'Start generating professional QR codes for your service center today.',
    primaryButton: {
      text: 'Generate QR Code Now',
      href: '#qr-generator'
    },
    secondaryButton: {
      text: 'Explore Other Tools',
      href: '/tools/utility'
    }
  }
});

// SEO metadata using utility
export const metadata = generateToolMetadata(pageData.config);

export default function QRCodeGeneratorPage() {
  return (
    <ToolPageTemplate 
      config={pageData.config}
      howToSteps={pageData.howToSteps}
      features={pageData.features}
      useCases={pageData.useCases} 
      bestPractices={pageData.bestPractices}
      benefits={pageData.benefits}
      examples={pageData.examples}
      exampleType="qr-generator" // Pass type instead of handler
      cta={pageData.cta}
    >
      {/* Main QR Code Generator Component */}
      <QRCodeGenerator />
    </ToolPageTemplate>
  );
}