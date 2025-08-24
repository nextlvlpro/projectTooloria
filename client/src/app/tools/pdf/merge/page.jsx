// File: src/app/tools/pdf/merge/page.jsx
import PDFMerger from './components/PDFMerger';
import { pdfToolsSEOConfig, generatePDFToolStructuredData, generateBreadcrumbData, generatePDFFAQData } from '../pdfToolsSEOConfig';

// SEO metadata for PDF Merger
export const metadata = {
  title: pdfToolsSEOConfig.tools.merger.title,
  description: pdfToolsSEOConfig.tools.merger.description,
  keywords: pdfToolsSEOConfig.tools.merger.keywords,
  openGraph: {
    title: pdfToolsSEOConfig.tools.merger.title,
    description: pdfToolsSEOConfig.tools.merger.description,
    type: 'website',
    url: pdfToolsSEOConfig.tools.merger.canonical,
    images: [{
      url: 'https://tooloria.org/images/pdf-merger-tool.jpg',
      width: 1200,
      height: 630,
      alt: 'Free PDF Merger Tool - Combine Multiple PDFs Online'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: pdfToolsSEOConfig.tools.merger.title,
    description: pdfToolsSEOConfig.tools.merger.description,
    images: ['https://tooloria.org/images/pdf-merger-tool.jpg']
  },
  alternates: {
    canonical: pdfToolsSEOConfig.tools.merger.canonical
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

export default function PDFMergerPage() {
  // Generate structured data
  const toolStructuredData = generatePDFToolStructuredData('merger', pdfToolsSEOConfig.tools.merger);
  const breadcrumbData = generateBreadcrumbData('merger');
  const faqData = generatePDFFAQData('merger');

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
            {pdfToolsSEOConfig.tools.merger.h1}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Combine multiple PDF documents into a single file instantly. Perfect for merging 
            government forms, applications, and documents for service centers. All processing 
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
        <PDFMerger />

        {/* SEO Content Sections */}
        <section className="mt-16 space-y-12">
          
          {/* Why Use Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Choose Our PDF Merger?
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
                  Merge PDFs instantly without waiting for uploads or downloads from servers. 
                  Process hundreds of pages in seconds with our optimized merging algorithm.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Perfect Quality</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintain original document quality, formatting, and metadata. Text stays sharp, 
                  images remain crisp, and all interactive elements are preserved.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How to Merge PDF Files
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Upload PDFs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Select multiple PDF files from your computer or drag and drop them into the upload area.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Arrange Order</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Drag and drop to reorder your PDF files exactly how you want them in the final document.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Merge Files</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Click the merge button and watch as your PDFs are combined into a single document instantly.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h3 className="font-semibent text-gray-900 dark:text-white mb-2">Download Result</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Download your merged PDF file immediately. The combined document is ready for use or sharing.
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
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  How do I merge PDF files for free?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Upload multiple PDF files, arrange them in your desired order, and click merge. 
                  The tool combines them into a single PDF that you can download instantly. Everything 
                  is processed in your browser for maximum security.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Is there a limit to the number of PDFs I can merge?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No, you can merge as many PDF files as needed. The tool processes everything in 
                  your browser, so the only limit is your device's memory capacity. Most computers 
                  can easily handle hundreds of documents.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Does PDF merging reduce quality?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No, our PDF merger maintains the original quality of all documents. Text, images, 
                  and formatting remain intact in the merged file. The tool preserves all content 
                  exactly as it appears in the source files.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Can I merge password-protected PDFs?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Currently, password-protected PDFs need to have their protection removed before 
                  merging. You can use our PDF tools to remove passwords first, then merge the 
                  unlocked documents.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Is my data secure when merging PDFs online?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, completely secure. All PDF merging happens locally in your web browser using 
                  JavaScript. Your files never get uploaded to any server, ensuring complete privacy 
                  and security of your sensitive documents.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}