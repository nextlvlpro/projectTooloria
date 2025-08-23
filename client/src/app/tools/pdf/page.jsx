// app/tools/pdf/page.jsx
import Link from 'next/link';
import { Button } from '@/components/ui';
import { pdfTools } from '../toolsinfo';

// SEO Metadata for PDF Tools Overview
export const metadata = {
  title: 'PDF Tools - Free Online PDF Editor & Processor | Tooloria',
  description: 'Complete collection of free PDF tools for service centers. Merge PDFs, split documents, compress files, and convert between formats online. Perfect for Lok Mitra Kendras and government service centers.',
  keywords: [
    'pdf tools online',
    'pdf merger free',
    'pdf splitter',
    'pdf compressor',
    'convert pdf to images',
    'images to pdf',
    'service center pdf tools',
    'lok mitra kendra tools',
    'free pdf editor'
  ],
  openGraph: {
    title: 'Free PDF Tools for Service Centers | Tooloria',
    description: 'Professional PDF processing tools designed for service centers. Merge, split, compress, and convert PDFs instantly.',
    type: 'website',
  },
};

// Structured data for PDF Tools
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tooloria PDF Tools",
  "description": "Free online PDF processing tools for service centers including PDF merger, splitter, compressor, and converters",
  "url": "https://tooloria.org/tools/pdf",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "PDF Merger",
    "PDF Splitter", 
    "PDF Compressor",
    "PDF to Images Converter",
    "Images to PDF Creator",
    "Batch Processing"
  ]
};

// Common use cases for service centers
const useCases = [
  {
    title: 'Government Forms',
    description: 'Merge application forms, split multi-page documents, and compress for online submission',
    icon: '📋'
  },
  {
    title: 'Document Processing',
    description: 'Combine certificates, split bulk documents, and organize paperwork efficiently',
    icon: '📄'
  },
  {
    title: 'Digital Archives',
    description: 'Convert documents to images for storage or create PDFs from scanned documents',
    icon: '🗃️'
  },
  {
    title: 'File Management',
    description: 'Compress large PDFs for email, organize documents, and manage file sizes',
    icon: '📂'
  }
];

export default function PDFToolsPage() {
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
            Free PDF Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Professional PDF processing tools designed for service centers. 
            Merge, split, compress, and convert PDF documents instantly - all free and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
              ✓ No Registration Required
            </span>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
              ✓ Works Offline
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              ✓ Batch Processing
            </span>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pdfTools.map((tool) => (
            <div key={tool.href} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{tool.icon}</div>
                {tool.popular && (
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
                {tool.status === 'coming-soon' && (
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {tool.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {tool.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {tool.features.map((feature, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                {tool.status === 'available' ? (
                  <Link href={tool.href}>
                    <Button className="w-full">
                      Use {tool.name}
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Perfect for Service Centers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Choose Our PDF Tools?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Secure & Private</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">All processing happens in your browser. PDFs never leave your device.</p>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Process Your PDFs?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Choose from our collection of professional PDF tools. All tools are free, secure, and designed specifically for service center needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/pdf/merge">
                <Button size="lg" className="px-8">
                  Start with PDF Merger
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