import ImageCropper from "./components/ImageCropper";

export const metadata = {
  title: "Free Online Image Cropper Tool | Tooloria",
  description:
    "Crop images online for free with precision. No software needed — secure, fast, and works directly in your browser. Perfect for form-filling and government uploads.",
  keywords: [
    "image cropper",
    "crop image online",
    "free image crop tool",
    "Tooloria",
  ],
  openGraph: {
    title: "Free Online Image Cropper Tool | Tooloria",
    description:
      "Crop your images instantly online. 100% free and secure, works directly in your browser with no uploads.",
    url: "https://tooloria.org/image-cropper",
    siteName: "Tooloria",
    images: [
      {
        url: "/og-image-cropper.png",
        width: 1200,
        height: 630,
        alt: "Image Cropper - Tooloria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Hero Section */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Free Online Image Cropper
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Crop your images quickly and accurately in your browser. No downloads, no watermarks — fast, secure, and 100% free.
        </p>
      </header>

      {/* Tool Component */}
      <ImageCropper />

      {/* FAQ / Info Section */}
      <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">❓</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Can I crop multiple images?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Yes, you can upload and crop multiple images one by one.
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Are my images uploaded to a server?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              No, all cropping happens in your browser. Your files never leave your device.
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-3">💾</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Which file formats are supported?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              JPG, PNG, and WebP are supported for fast and reliable cropping.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
