// src/lib/seo/metadata.js

export function generatePageMetadata({
  title = 'Tooloria - Free Online Tools',
  description = 'Tooloria provides useful online tools for developers and CSC/LMK form filling tasks.',
  url = 'https://tooloria.org',
  image = 'https://tooloria.org/favicon.ico',
}) {
  return {
    title,
    description,
    metadataBase: new URL('https://tooloria.org'),
    openGraph: {
      title,
      description,
      url,
      siteName: 'Tooloria',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
