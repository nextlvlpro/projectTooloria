import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

// Optimize Inter font loading
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://tooloria.org'),
  title: {
    default: 'Tooloria - Digital Tools for Service Centers',
    template: '%s | Tooloria'
  },
  description: 'Complete toolkit for Lok Mitra Kendras and service centers. Free online tools for PDF processing, image editing, form filling, and document management.',
  keywords: ['service center tools', 'lok mitra kendra', 'pdf tools', 'image tools', 'form filling', 'digital tools india'],
  authors: [{ name: 'Tooloria Team' }],
  creator: 'Tooloria',
  publisher: 'Tooloria',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tooloria.org',
    siteName: 'Tooloria',
    title: 'Tooloria - Digital Tools for Service Centers',
    description: 'Free online toolkit for service centers. PDF tools, image processing, form filling assistance and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tooloria - Digital Tools for Service Centers',
    description: 'Free online toolkit for service centers. PDF tools, image processing, form filling assistance and more.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://tooloria.org',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon', 
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Viewport meta tag for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        {children}
      </body>
    </html>
  )
}