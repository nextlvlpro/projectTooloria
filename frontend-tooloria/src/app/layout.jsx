// app/layout.jsx  – _root_ layout for every route
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import CookieConsent from "@/components/coockie-consent/CookieConsent";
import AdSenseLoader from "@/components/ads/google/AdSenseLoader";
import PlausibleAnalytics from "@/components/PlausibleAnalytics";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tooloria.org";

/* ---------- 𝟙  Global metadata (used by every page) ---------- */
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: { default: "Tooloria — Free Online Tools", template: "%s | Tooloria" },

  description:
    "All-in-one free tools like unit converters, QR code generators and more. No data tracking. Built for speed and simplicity.",
  
    alternates: { canonical: siteUrl },
  
    openGraph: {
      title: "Tooloria — Free Online Tools",
      description: "All-in-one free tools like unit converters, QR code generators and more.",
      url: siteUrl,
      siteName: "Tooloria",
      images: [{ url: "https://tooloria.org/tooloriaLogo.png", width: 1200, height: 630, alt: "Tooloria" }],
      type: "website",
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Tooloria — Free Online Tools",
      description: "No signup. No tracking. Just fast, useful tools.",
      images: ["https://tooloria.org/tooloriaLogo.png"],
    },
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Pre-connect so Google Fonts starts downloading sooner */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/tooloriaLogo.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen justify-between`}
      >
        {/* --- global UI / analytics --- */}
        <PlausibleAnalytics />
        <AdSenseLoader />
        <Navbar />
        <CookieConsent />

        {/* --- page content --- */}
        {children}
      </body>
    </html>
  );
}
