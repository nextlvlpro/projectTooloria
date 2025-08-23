import Link from 'next/link';
import { Button } from '@/components/ui';
import { imageTools } from '../toolsinfo';

// SEO Metadata for Image Tools Overview
export const metadata = {
  title: 'Image Tools - Free Online Photo Editor & Resizer | Tooloria',
  description: 'Complete collection of free image tools for service centers. Resize photos, compress images, convert formats, and edit pictures online. Perfect for Lok Mitra Kendras and government service centers.',
  keywords: [
    'image tools online',
    'photo editor free',
    'image resizer',
    'image compressor',
    'convert image format',
    'service center image tools',
    'lok mitra kendra tools',
    'free image editor'
  ],
  openGraph: {
    title: 'Free Image Tools for Service Centers | Tooloria',
    description: 'Professional image editing tools designed for service centers. Resize, compress, and convert images instantly.',
    type: 'website',
  },
};

// Structured data for Image Tools
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tooloria Image Tools",
  "description": "Free online image editing tools for service centers including image resizer, compressor, and format converter",
  "url": "https://tooloria.org/tools/image",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Image Resizer",
    "Image Compressor", 
    "Format Converter",
    "Batch Processing"
  ]
};

// Image tools data (server-side)


// Common use cases for service centers
const useCases = [
  {
    title: 'Document Photos',
    description: 'Resize and compress photos of documents for digital storage',
    icon: '📄'
  },
  {
    title: 'ID Card Photos',
    description: 'Crop and resize photos to standard ID card dimensions',
    icon: '🆔'
  },
  {
    title: 'Web Images',
    description: 'Optimize images for websites and online applications',
    icon: '🌐'
  },
  {
    title: 'Email Attachments',
    description: 'Compress images to reduce email attachment sizes',
    icon: '📧'
  }
];

export default function ImageToolsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Free Image Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Professional image editing tools designed for service centers. 
            Resize, compress, and convert images instantly - all free and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
              ✓ No Registration Required
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
              ✓ Works Offline
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              ✓ Completely Free
            </span>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {imageTools.map((tool, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                tool.status === 'available' ? 'hover:shadow-lg hover:-translate-y-1' : 'opacity-75'
              }`}
            >
              {tool.popular && (
                <div className="absolute -top-2 -right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {tool.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              {tool.status === 'available' ? (
                <Link href={tool.href}>
                  <Button className="w-full" variant="primary">
                    Use {tool.name}
                  </Button>
                </Link>
              ) : (
                <Button className="w-full" variant="ghost" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Use Cases Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Perfect for Service Centers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Common image processing tasks made simple for Lok Mitra Kendras and government service centers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-3">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Tooloria Image Tools?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Secure & Private</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">All processing happens in your browser. Images never leave your device.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Lightning Fast</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Instant processing with no upload delays or waiting time.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Mobile Friendly</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Works perfectly on desktop, tablet, and mobile devices.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Process Your Images?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Choose from our collection of professional image tools. All tools are free, secure, and designed specifically for service center needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/image/resize">
                <Button size="lg" className="px-8">
                  Start with Image Resizer
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" size="lg" className="px-8">
                  View All Tools
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}