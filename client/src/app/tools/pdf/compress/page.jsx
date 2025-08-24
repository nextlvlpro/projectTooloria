// File: src/app/tools/pdf/merge/page.jsx
import PDFCompressor from './components/PDFCompressor';
import { pdfToolsSEOConfig, generatePDFToolStructuredData, generateBreadcrumbData, generatePDFFAQData } from '../pdfToolsSEOConfig';

// SEO metadata for PDF Merger
export const metadata = {
  title: pdfToolsSEOConfig.tools.compress.title,
  description: pdfToolsSEOConfig.tools.compress.description,
  keywords: pdfToolsSEOConfig.tools.compress.keywords,
  openGraph: {
    title: pdfToolsSEOConfig.tools.compress.title,
    description: pdfToolsSEOConfig.tools.compress.description,
    type: 'website',
    url: pdfToolsSEOConfig.tools.compress.canonical,
    images: [{
      url: 'https://tooloria.org/images/pdf-compress-tool.jpg',
      width: 1200,
      height: 630,
      alt: 'Free PDF Compress Tool - Compress Multiple PDFs Online'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: pdfToolsSEOConfig.tools.compress.title,
    description: pdfToolsSEOConfig.tools.compress.description,
    images: ['https://tooloria.org/images/pdf-compress-tool.jpg']
  },
  alternates: {
    canonical: pdfToolsSEOConfig.tools.compress.canonical
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function PDFCompressPage() {
  // Generate structured data
  const toolStructuredData = generatePDFToolStructuredData('compress', pdfToolsSEOConfig.tools.compress);
  const breadcrumbData = generateBreadcrumbData('compress');
  const faqData = generatePDFFAQData('compress');

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* SEO-optimized Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {pdfToolsSEOConfig.tools.compress.h1}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Compress PDF documents instantly. Perfect for uploading to government portals and email attachments. All processing 
            happens securely in your browser - no uploads to servers.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
              ✓ Unlimited Files
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
              ✓ No File Size Limit
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              ✓ 100% Secure
            </span>
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full">
              ✓ No Registration
            </span>
          </div>
        </header>

        {/* PDF Merger Component */}
        <PDFCompressor />

        {/* SEO Content Sections */}
        <section className="mt-16 space-y-12">
          
          {/* Why Use Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Choose Our PDF Compressor?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Completely Secure</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your PDF files never leave your device. All merging happens locally in your browser 
                  using advanced JavaScript processing, ensuring complete privacy and security.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Compress PDFs instantly without waiting for uploads or downloads from servers. 
                  Process hundreds of pages in seconds with our optimized merging algorithm.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Perfect Compression</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our PDF compressor uses advanced algorithms to reduce file to specified size.
                </p>
              </div>
            </div>
          </div>


          {/* Use Cases Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Perfect for Service Centers & Government Work
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📋</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Application Forms</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Combine application forms with supporting documents for government submissions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🏛️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Lok Mitra Kendra</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Merge citizen documents and certificates for various government service applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💼</div>
                <div>
                  <h3 className="font-semibent text-gray-900 dark:text-white mb-1">Business Documents</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Combine invoices, contracts, and reports into comprehensive business packages.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎓</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Educational Records</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Merge transcripts, certificates, and marksheets for admission applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🏥</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Medical Reports</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Combine medical reports, prescriptions, and test results into single files.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📊</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Financial Documents</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Merge bank statements, tax documents, and financial records for loan applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
         
        </section>
      </div>
    </>
  );
}