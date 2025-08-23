// app/tools/pdf/merge/page.jsx
import PDFMerger from './components/PDFMerger';

export const metadata = {
  title: 'PDF Merger - Combine Multiple PDFs Online | Tooloria',
  description: 'Free online PDF merger tool. Combine multiple PDF files into one document instantly. Perfect for service centers, government applications, and document management. No software needed.',
  keywords: [
    'pdf merger',
    'combine pdf online',
    'merge pdf files',
    'pdf combiner',
    'join pdf documents',
    'pdf merger free',
    'service center pdf tools',
    'merge pdf no registration'
  ],
  openGraph: {
    title: 'Free PDF Merger Tool | Tooloria',
    description: 'Combine multiple PDF files into one document instantly. Perfect for service centers and document management.',
    type: 'website',
  },
};

// Structured data for PDF Merger
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tooloria PDF Merger",
  "description": "Free online tool to combine multiple PDF files into a single document",
  "url": "https://tooloria.org/tools/pdf/merge",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "featureList": [
    "Combine multiple PDFs",
    "Drag and drop reordering",
    "Batch processing",
    "Maintain document quality",
    "No file size limits"
  ]
};

export default function PDFMergerPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            PDF Merger
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Combine multiple PDF files into a single document instantly. Perfect for merging contracts, 
            reports, applications, and other documents. All processing happens in your browser - your files stay private.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
              ✓ Multiple PDFs
            </span>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
              ✓ Drag to Reorder
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              ✓ Instant Processing
            </span>
          </div>
        </div>

        {/* CSR PDF Merger Component */}
        <PDFMerger />

        {/* Benefits Section */}
        <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Use Our PDF Merger?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Merge PDFs in seconds with no upload delays. Process multiple files instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Preserve Quality</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Maintain original document quality, formatting, and metadata in merged files.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All processing happens in your browser. Your PDF files never leave your device.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                How many PDFs can I merge?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                You can merge as many PDF files as needed. There are no artificial limits on file count.
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Are my PDFs uploaded to a server?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                No, all merging happens in your browser. Your PDF files never leave your device.
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                What file formats are supported?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Only PDF files are supported. All standard PDF versions and formats work perfectly.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Perfect for Service Centers:
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <li>• Combine application forms and supporting documents</li>
              <li>• Merge certificates, licenses, and official papers</li>
              <li>• Create complete document packages for submissions</li>
              <li>• Organize customer paperwork efficiently</li>
              <li>• Prepare documents for digital archiving</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}