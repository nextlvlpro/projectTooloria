import ImageFormatConverter from "./components/ImageFormatConverter";

export const metadata = {
  title: "Free Online Image Format Converter - JPG, PNG, WebP | Tooloria",
  description:
    "Convert images between JPG, PNG, and WebP formats online for free. No software needed — secure, fast, and works in your browser. Perfect for form-filling and government uploads.",
  keywords: [
    "image format converter",
    "jpg to png",
    "png to jpg",
    "webp to jpg",
    "image converter online",
    "free image conversion tool",
    "Tooloria"
  ],
  openGraph: {
    title: "Free Online Image Format Converter - JPG, PNG, WebP | Tooloria",
    description:
      "Convert JPG, PNG, and WebP images instantly. 100% free and secure, works in your browser with no uploads.",
    url: "https://tooloria.org/image-format-converter",
    siteName: "Tooloria",
    images: [
      {
        url: "/og-image-format-converter.png", // optional preview banner if you have
        width: 1200,
        height: 630,
        alt: "Image Format Converter - Tooloria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Free Online Image Format Converter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Convert your images between <strong>JPG</strong>, <strong>PNG</strong>,
          and <strong>WebP</strong> formats instantly. No downloads, no watermarks —
          just fast and secure conversion in your browser.
        </p>
      </header>

      {/* Tool Component */}
      <ImageFormatConverter />

      {/* SEO content section */}
      <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
    Frequently Asked Questions
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="text-center">
      <div className="text-3xl mb-3">❓</div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
        Can I convert multiple images at once?
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Yes, you can upload and convert multiple images in one go.
      </p>
    </div>

    <div className="text-center">
      <div className="text-3xl mb-3">🔒</div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
        Are my images uploaded to a server?
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        No, everything happens in your browser. Your files never leave your device.
      </p>
    </div>

    <div className="text-center">
      <div className="text-3xl mb-3">💾</div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
        Which formats are supported?
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        JPG, PNG, and WebP are currently supported for fast and reliable conversion.
      </p>
    </div>
  </div>
</section>


    </main>
  );
}
