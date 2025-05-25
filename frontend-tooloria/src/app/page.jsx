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
  openGraph: {
    title: "Tooloria — Your All-in-One Online Toolbox",
    description:
      "Explore Tooloria's free online tools to convert, format, and calculate easily. All in one place.",
    url: "https://tooloria.org",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png", // ⚠️ Make sure this image exists
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
      {/* ✅ Schema.org JSON-LD for enhanced SEO */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tooloria",
            url: "https://tooloria.org",
            description:
              "Your All-in-One Online Toolbox to convert, format, count, and more.",
            sameAs: ["https://www.linkedin.com/in/bhs12899/", "https://github.com/nextlvlpro"], // Add your social profiles
          }),
        }}
      />

      <main>
        <HeroSection />
        <ToolsGrid />
      </main>
      <Footer />
    </>
  );
}
