// app/tools/page.jsx
import Link from 'next/link';
import { Button } from '@/components/ui';
import { toolCategories } from './toolsinfo';

// SEO Metadata for Tools Overview
export const metadata = {
  title: 'Free Online Tools for Service Centers | Tooloria',
  description: 'Complete collection of free digital tools for service centers and Lok Mitra Kendras. PDF tools, image editors, form generators, and utility tools - all free and secure.',
  keywords: [
    'service center tools',
    'lok mitra kendra tools',
    'free online tools',
    'pdf tools',
    'image tools',
    'form tools',
    'digital tools india',
    'government service tools'
  ],
  openGraph: {
    title: 'Free Digital Tools for Service Centers | Tooloria',
    description: 'Professional tools for Lok Mitra Kendras and service centers. Process PDFs, edit images, generate forms, and more.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tooloria.org/tools',
  },
};

// Structured data for Tools
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tooloria Digital Tools",
  "description": "Complete digital toolkit for service centers with PDF tools, image processing, form generation, and utilities",
  "url": "https://tooloria.org/tools",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "PDF Processing Tools",
    "Image Editing Tools", 
    "Form Generation Tools",
    "Utility Tools",
    "Batch Processing",
    "Offline Capability"
  ]
};

// Service center benefits
const benefits = [
  {
    title: "No Registration Required",
    description: "Start using tools immediately without creating accounts or providing personal information",
    icon: "🚀"
  },
  {
    title: "Works Offline",
    description: "Most tools work offline once loaded, perfect for areas with limited internet connectivity",
    icon: "📡"
  },
  {
    title: "Completely Free",
    description: "All tools are free forever with no hidden costs, premium plans, or usage limits",
    icon: "💰"
  },
  {
    title: "Privacy First",
    description: "All processing happens in your browser - your files never leave your device",
    icon: "🔒"
  },
  {
    title: "Mobile Friendly",
    description: "All tools work perfectly on smartphones, tablets, and desktop computers",
    icon: "📱"
  },
  {
    title: "Service Center Optimized",
    description: "Designed specifically for common workflows in Lok Mitra Kendras and service centers",
    icon: "🏢"
  }
];

// Popular workflows
const workflows = [
  {
    title: "Government Form Processing",
    steps: ["Upload documents", "Resize photos to required specs", "Merge PDFs", "Compress for submission"],
    tools: ["Image Resizer", "PDF Merger", "PDF Compressor"],
    icon: "📋"
  },
  {
    title: "Document Management",
    steps: ["Scan documents to images", "Convert images to PDF", "Split multi-page PDFs", "Organize files"],
    tools: ["Images to PDF", "PDF Splitter", "Image Compressor"],
    icon: "📄"
  },
  {
    title: "Digital Services",
    steps: ["Process customer documents", "Generate forms", "Create digital copies", "Archive files"],
    tools: ["Form Generator", "PDF Tools", "Image Tools"],
    icon: "💻"
  }
];

export default function ToolsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Free Digital Tools for Service Centers
              </h1>
              <p className="text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
                Complete toolkit for Lok Mitra Kendras and government service centers. 
                Process documents, edit images, generate forms, and serve customers efficiently.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ 100% Free</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ No Registration</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ Works Offline</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ Secure & Private</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tool Categories */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Choose Your Tool Category
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional-grade tools designed for service center workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {toolCategories.map((category, index) => (
                <Link key={index} href={category.href}>
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${category.color} text-white text-2xl`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {category.description}
                    </p>
                    
                    <div className="space-y-1 mb-4">
                      {category.tools.slice(0, 3).map((tool, toolIndex) => (
                        <div key={toolIndex} className="text-xs text-gray-500 dark:text-gray-400">
                          • {tool}
                        </div>
                      ))}
                      {category.tools.length > 3 && (
                        <div className="text-xs text-gray-400 dark:text-gray-500">
                          + {category.tools.length - 3} more
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-auto">
                      <Button className="w-full">
                        Explore {category.title}
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Service Centers Choose Tooloria
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Built specifically for the unique needs of government service centers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Workflows Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Common Service Center Workflows
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                See how our tools work together for typical service center tasks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{workflow.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {workflow.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                          {stepIndex + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Tools needed:</div>
                    <div className="flex flex-wrap gap-1">
                      {workflow.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Streamline Your Service Center?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of service centers already using Tooloria to serve customers more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tools/pdf">
                  <Button size="lg" className="px-8">
                    Start with PDF Tools
                  </Button>
                </Link>
                <Link href="/tools/image">
                  <Button variant="outline" size="lg" className="px-8">
                    Try Image Tools
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}