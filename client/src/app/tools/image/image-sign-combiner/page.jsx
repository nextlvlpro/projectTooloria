import ImageSignatureCombiner from "./components/ImageSignatureCombiner";

export const metadata = {
  title: "Image + Signature Combiner | Tooloria",
  description:
    "Easily merge your photo with your signature for online forms, exams, and government applications. 100% free, secure, and works in your browser.",
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Image + Signature Combiner
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Combine your photo and signature into one image for government forms,
          exams, banking, and more. No uploads — everything happens in your
          browser.
        </p>
      </section>

      {/* Tool Component */}
      <ImageSignatureCombiner />

      {/* Why Use Section */}
      <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Why Use Our Image + Signature Combiner?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🖼️</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Clean Layouts
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Merge side-by-side or top-bottom with perfect alignment.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Instant Processing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Works fully in your browser with no uploads or waiting time.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Private & Secure
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Your photo and signature never leave your device.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Can I use this for government exam forms?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Yes! This tool is designed for common requirements like SSC,
              UPSC, Banking exams, and university applications.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Will my images be uploaded anywhere?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              No. Everything is processed locally in your browser. Your images
              stay 100% private.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Which formats are supported?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              JPG, PNG, and WebP are supported for both photos and signatures.
              Output is saved as PNG by default.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
