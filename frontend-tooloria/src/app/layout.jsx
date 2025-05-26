import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import CookieConsent from "@/components/coockie-consent/CookieConsent";
import AdSenseLoader from "@/components/ads/google/AdSenseLoader";
import PlausibleAnalytics from "@/components/PlausibleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tooloria — Free Online Tools",
  description:
    "All-in-one free tools like unit converters, QR code generators, and more. No data tracking. Built for speed and simplicity.",
  keywords: [
    "online tools",
    "unit converter",
    "QR code generator",
    "free tools",
    "privacy tools",
    "Tooloria",
  ],
  openGraph: {
    title: "Tooloria — Free Online Tools",
    description:
      "All-in-one free tools like unit converters, QR code generators, and more. No data tracking.",
    url: "https://tooloria.org",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png",
        width: 1200,
        height: 630,
        alt: "Tooloria — Free Online Tools",
      },
    ],
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
        <link rel="icon" href="/tooloriaLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="All-in-one tools for your daily tasks like unit conversion, QR code generation, and more — free and privacy-friendly."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Tooloria" />
        <meta
          property="og:description"
          content="All-in-one tools for your daily tasks. No tracking. No nonsense."
        />
        <meta property="og:url" content="https://tooloria.org" />
        <meta
          property="og:image"
          content="https://tooloria.org/tooloriaLogo.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tooloria" />
        <meta
          name="twitter:description"
          content="All-in-one tools for daily use. Free, fast, and privacy-focused."
        />
        <meta
          name="twitter:image"
          content="https://tooloria.org/tooloriaLogo.png"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://tooloria.org" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen justify-between`}
      >
        <PlausibleAnalytics />
        <AdSenseLoader />
        <Navbar />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
