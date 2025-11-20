import ImageResizer from './components/Resize';
import {
  imageToolsSEOConfig,
  generateImageToolStructuredData,
  generateImageBreadcrumbData,
  generateImageFAQData,
} from "../imageToolsSEOConfig";

// SEO metadata for Image Resizer
export const metadata = {
  title: imageToolsSEOConfig.tools.resize.title,
  description: imageToolsSEOConfig.tools.resize.description,
  keywords: imageToolsSEOConfig.tools.resize.keywords,
  openGraph: {
    title: imageToolsSEOConfig.tools.resize.title,
    description: imageToolsSEOConfig.tools.resize.description,
    type: "website",
    url: imageToolsSEOConfig.tools.resize.canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: imageToolsSEOConfig.tools.resize.title,
    description: imageToolsSEOConfig.tools.resize.description,
  },
  alternates: {
    canonical: imageToolsSEOConfig.tools.resize.canonical,
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

export default function ImageResizerPage() {
  // Generate structured data
  const toolStructuredData = generateImageToolStructuredData(
    "resize",
    imageToolsSEOConfig.tools.resize
  );
  const breadcrumbData = generateImageBreadcrumbData("resize");
  const faqData = generateImageFAQData("resize");

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
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {imageToolsSEOConfig.tools.resize.h1}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Resize your images to popular sizes or custom dimensions. Perfect for social media,
            web use, and printing. All processing happens in your browser - your images stay private.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
              ✓ Multiple Images
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
              ✓ Popular Sizes
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              ✓ Custom Dimensions
            </span>
          </div>
        </div>

        {/* Image Resizer Component */}
        <ImageResizer />

        {/* Features Section */}
        <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Use Our Image Resizer?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Precise Sizing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Resize to exact pixel dimensions or popular preset sizes with perfect accuracy.
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

        {/* Popular Sizes Info */}
        <section className="mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Image Sizes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Social Media</div>
              <div className="text-gray-600 dark:text-gray-300">Instagram Post: 1080×1080</div>
              <div className="text-gray-600 dark:text-gray-300">Facebook Cover: 1200×630</div>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Web Images</div>
              <div className="text-gray-600 dark:text-gray-300">Thumbnail: 300×300</div>
              <div className="text-gray-600 dark:text-gray-300">Banner: 1920×480</div>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Documents</div>
              <div className="text-gray-600 dark:text-gray-300">A4 Page: 2480×3508</div>
              <div className="text-gray-600 dark:text-gray-300">ID Photo: 600×600</div>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">Display</div>
              <div className="text-gray-600 dark:text-gray-300">HD: 1920×1080</div>
              <div className="text-gray-600 dark:text-gray-300">4K: 3840×2160</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}