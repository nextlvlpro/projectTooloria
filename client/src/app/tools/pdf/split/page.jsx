// File: client/src/app/tools/pdf/split/page.jsx
import PDFSplitter from "./components/PDFSplitter";
import {
  pdfToolsSEOConfig,
  generatePDFToolStructuredData,
  generateBreadcrumbData,
  generatePDFFAQData,
} from "../pdfToolsSEOConfig";

// SEO metadata for PDF Splitter
export const metadata = {
  title: pdfToolsSEOConfig.tools.splitter.title,
  description: pdfToolsSEOConfig.tools.splitter.description,
  keywords: pdfToolsSEOConfig.tools.splitter.keywords,
  openGraph: {
    title: pdfToolsSEOConfig.tools.splitter.title,
    description: pdfToolsSEOConfig.tools.splitter.description,
    type: "website",
    url: pdfToolsSEOConfig.tools.splitter.canonical,
    images: [
      {
        url: "https://tooloria.org/images/pdf-splitter-tool.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Splitter Tool - Extract Pages from PDF Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pdfToolsSEOConfig.tools.splitter.title,
    description: pdfToolsSEOConfig.tools.splitter.description,
    images: ["https://tooloria.org/images/pdf-splitter-tool.jpg"],
  },
  alternates: {
    canonical: pdfToolsSEOConfig.tools.splitter.canonical,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PDFSplitterPage() {
  // Generate structured data
  const toolStructuredData = generatePDFToolStructuredData(
    "splitter",
    pdfToolsSEOConfig.tools.splitter
  );
  const breadcrumbData = generateBreadcrumbData("splitter");
  const faqData = generatePDFFAQData("splitter");

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
            {pdfToolsSEOConfig.tools.splitter.h1}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Split PDF documents into separate pages or extract specific page
            ranges instantly. Perfect for organizing government forms,
            separating document sections, and creating individual files from
            multi-page PDFs. All processing happens securely in your browser.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
              ✓ Extract Any Pages
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
              ✓ Page Range Selection
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              ✓ 100% Secure
            </span>
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full">
              ✓ No Registration
            </span>
          </div>
        </header>

        {/* PDF Splitter Component */}
        <PDFSplitter />

        {/* SEO Content Sections */}
        <section className="mt-16 space-y-12">
          {/* Why Use Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Choose Our PDF Splitter?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Completely Secure
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your PDF files never leave your device. All splitting happens
                  locally in your browser using advanced JavaScript processing,
                  ensuring complete privacy and security.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Extract pages instantly without waiting for uploads or
                  downloads from servers. Process large documents in seconds
                  with our optimized splitting algorithm.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Perfect Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintain original document quality, formatting, and metadata.
                  Every extracted page preserves fonts, images, and layouts
                  exactly as intended.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How to Split Your PDF
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Upload PDF
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Select your PDF file from your device or drag it into the
                  upload area.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Choose Pages
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Select individual pages or specify page ranges you want to
                  extract.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Split PDF
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Click split to process your PDF and create separate documents
                  instantly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Download Files
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Download individual PDF files or get all extracted pages in a
                  ZIP file.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Perfect for Service Centers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Government Forms
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Separate application forms, extract specific pages for
                  different departments
                </p>
              </div>

              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Educational Documents
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Extract transcripts, certificates, and individual pages from
                  academic records
                </p>
              </div>

              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Business Reports
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Split large reports into sections for different stakeholders
                </p>
              </div>
            

            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Medical Records
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Organize patient files, extract specific test results or
                prescriptions
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white dark:bg-gray-700 rounded-lg font-semibold text-gray-900 dark:text-white">
                  How do I extract specific pages from a PDF?
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <div className="mt-2 p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-lg">
                  Upload your PDF file, then use the page selector to choose
                  which pages you want to extract. You can select individual
                  pages (e.g., pages 1, 3, 5) or page ranges (e.g., pages 1-5,
                  10-15). Click split to create separate PDF files for your
                  selected pages.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white dark:bg-gray-700 rounded-lg font-semibold text-gray-900 dark:text-white">
                  Is there a limit on PDF file size or number of pages?
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <div className="mt-2 p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-lg">
                  There's no strict limit on file size or pages, but very large
                  files (over 100MB) may take longer to process. The tool is
                  optimized to handle most standard PDF documents efficiently in
                  your browser.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-white dark:bg-gray-700 rounded-lg font-semibold text-gray-900 dark:text-white">
                  Do split pages maintain the original quality?
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <div className="mt-2 p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-lg">
                  Yes! Our splitter preserves the original quality, formatting,
                  fonts, and images. The extracted pages are identical to the
                  original PDF pages with no compression or quality loss.
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
