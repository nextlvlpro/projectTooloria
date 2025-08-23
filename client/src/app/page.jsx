import Link from "next/link";
import { Button } from "@/components/ui";

// SEO Metadata (Server-side)
export const metadata = {
  title:
    "Tooloria - Free Digital Tools for Service Centers & Lok Mitra Kendras",
  description:
    "Complete online toolkit for service centers in India. Free PDF tools, image editors, form fillers, and document processors. Perfect for Lok Mitra Kendras and government service centers.",
  keywords: [
    "service center tools",
    "lok mitra kendra",
    "digital tools india",
    "pdf merger",
    "image resizer",
    "form filling tools",
    "document processing",
    "government services",
    "online tools free",
  ],
  openGraph: {
    title: "Tooloria - Digital Tools for Service Centers",
    description:
      "Free online toolkit for service centers and Lok Mitra Kendras. PDF tools, image processing, form filling assistance and more.",
    url: "https://tooloria.org",
    siteName: "Tooloria",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tooloria.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tooloria - Digital Tools for Service Centers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tooloria - Digital Tools for Service Centers",
    description:
      "Free online toolkit for service centers. PDF tools, image processing, form filling assistance and more.",
    images: ["https://tooloria.org/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tooloria.org",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Tooloria",
  alternateName: "Tooloria Digital Tools",
  url: "https://tooloria.org",
  description:
    "Free digital toolkit for service centers and Lok Mitra Kendras with PDF tools, image processing, and form utilities",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "PDF Merger and Splitter",
    "Image Resizer and Compressor",
    "Form Generation Tools",
    "Document Converter",
    "File Compression Tools",
  ],
  author: {
    "@type": "Organization",
    name: "Tooloria Team",
  },
  provider: {
    "@type": "Organization",
    name: "Tooloria",
    url: "https://tooloria.org",
  },
};

// Tool categories data (server-side)
const toolCategories = [
  {
    title: "PDF Tools",
    icon: "📄",
    description: "Merge, split, compress and convert PDF files",
    tools: [
      "PDF Merger",
      "PDF Splitter",
      "PDF Compressor",
      "PDF to Images",
      "Images to PDF",
    ],
    href: "/tools/pdf",
    color: "bg-blue-500",
  },
  {
    title: "Image Tools",
    icon: "🖼️",
    description: "Resize, compress and edit images efficiently",
    tools: [
      "Image Resizer",
      "Image Compressor",
      "Format Converter",
      "Background Remover",
    ],
    href: "/tools/image",
    color: "bg-green-500",
  },
  {
    title: "Form Tools",
    icon: "📝",
    description: "Generate and fill forms automatically",
    tools: [
      "Form Generator",
      "Auto Fill",
      "Digital Signatures",
      "QR Generator",
    ],
    href: "/tools/form",
    color: "bg-purple-500",
  },
  {
    title: "Utility Tools",
    icon: "🔧",
    description: "Text extraction, converters and calculators",
    tools: [
      "OCR Text Extract",
      "File Converter",
      "Calculator",
      "Date Converter",
    ],
    href: "/tools/utility",
    color: "bg-orange-500",
  },
];

// Features data (server-side)
const features = [
  {
    title: "Completely Free",
    description:
      "All tools are free to use with no hidden costs, registration, or usage limits",
    icon: "💰",
  },
  {
    title: "Works Offline",
    description:
      "Most tools work offline once loaded. Perfect for areas with limited internet",
    icon: "🌐",
  },
  {
    title: "Secure & Private",
    description:
      "All processing happens in your browser. Files never leave your device",
    icon: "🔒",
  },
  {
    title: "Mobile Friendly",
    description: "Responsive design works on desktops, tablets and smartphones",
    icon: "📱",
  },
  {
    title: "Fast Processing",
    description:
      "Lightning-fast tools with no waiting time or file upload delays",
    icon: "⚡",
  },
  {
    title: "Service Center Ready",
    description: "Designed specifically for common tasks at Lok Mitra Kendras",
    icon: "🎯",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Tools for
              <span className="block text-yellow-300">Service Centers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Complete free toolkit for Lok Mitra Kendras and service centers.
              Process PDFs, edit images, fill forms, and serve customers
              efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tools">
                <Button
                  size="lg"
                  className="bg-white text-primary-800 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                >
                  Explore All Tools
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl"></div>
      </section>

      {/* Tool Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900" id="tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Tools for Every Need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From PDF processing to image editing, we have all the tools
              service centers need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-1">
                    {category.tools.slice(0, 3).map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="text-sm text-gray-500 dark:text-gray-400"
                      >
                        • {tool}
                      </div>
                    ))}
                    {category.tools.length > 3 && (
                      <div className="text-sm text-primary-500 font-medium">
                        +{category.tools.length - 3} more tools
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Service Centers Choose Tooloria
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built specifically for the needs of service centers and government
              assistance centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Service Centers
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Designed to help service centers work faster, serve more
              customers, and provide better service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Free to Use</div>
              <div className="text-sm opacity-75">No hidden costs ever</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Useful Tools</div>
              <div className="text-sm opacity-75">All in one place</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0%</div>
              <div className="text-lg opacity-90">Data Shared</div>
              <div className="text-sm opacity-75">Complete privacy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Available</div>
              <div className="text-sm opacity-75">Works offline too</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Service Center?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of service centers already using Tooloria to serve
            customers better. Start using our free tools today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 font-semibold px-8 py-4 text-lg"
              >
                Start Using Tools
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
