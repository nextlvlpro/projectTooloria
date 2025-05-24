import HeroSection from "@/components/home/HeroSection";
import Script from "next/script";
import dynamic from 'next/dynamic'
import Footer from "@/components/home/Footer";

const ToolsGrid = dynamic(() => import('@/components/home/ToolsGrid'), {
  loading: () => <div>Loading...</div>,
})
export default function page() {
  return (
    <>
     <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Tooloria",
            "url": "https://tooloria.org",
            "description": "Your All-in-One Online Toolbox to convert, format, count, and more.",
          }),
        }}
      />
    <main className="">
      <HeroSection />
      <ToolsGrid />
    </main>
    <Footer />
    </>
  );
}
