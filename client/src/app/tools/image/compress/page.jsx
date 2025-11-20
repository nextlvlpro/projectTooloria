import ImageCompressor from './components/Compressor';
import {
  imageToolsSEOConfig,
  generateImageToolStructuredData,
  generateImageBreadcrumbData,
  generateImageFAQData,
} from "../imageToolsSEOConfig";

// SEO metadata for Image Compressor
export const metadata = {
  title: imageToolsSEOConfig.tools.compress.title,
  description: imageToolsSEOConfig.tools.compress.description,
  keywords: imageToolsSEOConfig.tools.compress.keywords,
  openGraph: {
    title: imageToolsSEOConfig.tools.compress.title,
    description: imageToolsSEOConfig.tools.compress.description,
    type: "website",
    url: imageToolsSEOConfig.tools.compress.canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: imageToolsSEOConfig.tools.compress.title,
    description: imageToolsSEOConfig.tools.compress.description,
  },
  alternates: {
    canonical: imageToolsSEOConfig.tools.compress.canonical,
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

export default function ImageCompressorPage() {
  // Generate structured data
  const toolStructuredData = generateImageToolStructuredData(
    "compress",
    imageToolsSEOConfig.tools.compress
  );
  const breadcrumbData = generateImageBreadcrumbData("compress");
  const faqData = generateImageFAQData("compress");

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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {imageToolsSEOConfig.tools.compress.h1}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Compress your images to required KB sizes for forms and applications.
            Perfect for SSC, UPSC, PAN, Aadhaar, and more. All processing happens
            in your browser – your images stay private.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
              ✓ Multiple Images
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
              ✓ Popular Govt Sizes
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              ✓ Custom KB Size
            </span>
          </div>
        </div>

        {/* CSR Compressor Component */}
        <ImageCompressor />


        <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Use Our Image Resizer?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Close to Precise Sizing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Resize to close to popular preset sizes with perfect accuracy. exact compression is not possible due to image compresion complexity
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Batch Processing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Process multiple images at once with the same settings to save time.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All processing happens in your browser. Your images never leave your device.
              </p>
            </div>
          </div>
        </section>

        {/* Extra info sections can be added later (why use, govt size list, etc.) */}
      </div>
    </>
  );
}
