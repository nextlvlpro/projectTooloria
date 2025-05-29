// app/page.jsx

import HeroSection from "@/components/home/HeroSection";
import Script from "next/script";
import dynamic from "next/dynamic";
import Footer from "@/components/home/Footer";

const ToolsGrid = dynamic(() => import("@/components/home/ToolsGrid"), {
  loading: () => <div>Loading...</div>,
});

// ✅ Metadata for Home Page
export const metadata = {
  title: "Tooloria — Your All-in-One Online Toolbox",
  description:
    "Convert, format, count, and more — all in one place. Tooloria helps you get things done fast. Explore free online tools.",
  keywords: [
    "Tooloria",
    "online tools",
    "qr code generator",
    "unit converter",
    "text tools",
    "number tools",
    "formatting tools",
    "free utilities",
  ],
  alternates: {
    canonical: "https://tooloria.org/",
  },
  openGraph: {
    title: "Tooloria — Your All-in-One Online Toolbox",
    description:
      "Explore Tooloria's free online tools to convert, format, and calculate easily. All in one place.",
    url: "https://tooloria.org/",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png",
        width: 1200,
        height: 630,
        alt: "Tooloria Home",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tooloria — Your All-in-One Online Toolbox",
    description:
      "Free online tools to convert, format, and calculate quickly. Tooloria simplifies your tasks.",
    images: ["https://tooloria.org/tooloriaLogo.png"],
  },
};

export default function Page() {
  return (
    <>
     <main>
        <HeroSection />
        <ToolsGrid />

        {/* ─── 1. ABOUT SECTION ─────────────────────────── */}
        <section id="about" className="max-w-3xl mx-auto my-16 space-y-4">
          <h2 className="heading-lg">About Tooloria</h2>
          <p className="body text-textMuted">
            Tooloria is your all-in-one, free online toolbox: from unit converters (length, weight, volume, temperature, time, digital storage, and more) to QR code generators, image compressors, IP lookups, and beyond. No signup. No tracking. Just instant, privacy-focused utilities built for speed and simplicity.
          </p>
        </section>

        {/* ─── 2. FAQ SECTION ────────────────────────────── */}
        <section id="faq" className="max-w-3xl mx-auto my-16">
          <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border rounded p-4">
              <summary className="font-medium cursor-pointer">Do I need an account to use these tools?</summary>
              <p className="mt-2 body">
                No—all tools on Tooloria are completely free and require no registration or login.
              </p>
            </details>

            <details className="border rounded p-4">
              <summary className="font-medium cursor-pointer">How many tools are available?</summary>
              <p className="mt-2 body">
                We currently offer 20+ tools, including converters for length, mass, volume, time, and more—each built to be fast and accurate.
              </p>
            </details>

            <details className="border rounded p-4">
              <summary className="font-medium cursor-pointer">Is my data tracked or stored?</summary>
              <p className="mt-2 body">
                Absolutely not. Tooloria does not collect or store any personal data—everything runs client-side or via stateless server APIs.
              </p>
            </details>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─── 3. FAQPage JSON-LD ───────────────────────── */}
      <Script
        id="faqSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need an account to use these tools?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No—all tools on Tooloria are completely free and require no registration or login.",
                },
              },
              {
                "@type": "Question",
                name: "How many tools are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We currently offer 20+ tools, including converters for length, mass, volume, time, and more—each built to be fast and accurate.",
                },
              },
              {
                "@type": "Question",
                name: "Is my data tracked or stored?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Absolutely not. Tooloria does not collect or store any personal data—everything runs client-side or via stateless server APIs.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
