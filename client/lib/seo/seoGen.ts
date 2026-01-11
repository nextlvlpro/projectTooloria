import type { Metadata } from "next";
import type { SEOType } from "@/types/categoryTypes";

const SITE_NAME = "Tooloria";
const SITE_URL = "https://tooloria.org";

export function generateSeoMetadata(seo: SEOType): Metadata {
  const title = seo.title;
  const description = seo.description;

  const canonicalUrl = seo.canonical
    ? seo.canonical
    : SITE_URL;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
      languages: seo.alternateLanguages?.reduce((acc, lang) => {
        acc[lang.hrefLang] = lang.url;
        return acc;
      }, {} as Record<string, string>)
    },

    robots: {
      index: seo.noIndex ? false : true,
      follow: seo.noFollow ? false : true,
      googleBot: {
        index: seo.noIndex ? false : true,
        follow: seo.noFollow ? false : true
      }
    },

    openGraph: seo.og
      ? {
          title: seo.og.title ?? title,
          description: seo.og.description ?? description,
          url: canonicalUrl,
          siteName: seo.og.siteName ?? SITE_NAME,
          images: seo.og.image
            ? [
                {
                  url: seo.og.image,
                  alt: seo.og.imageAlt ?? title
                }
              ]
            : undefined,
          type: seo.og.type === "article" ? "article" : "website",
          locale: seo.og.locale ?? "en_US"
        }
      : undefined,

    twitter: seo.twitter
      ? {
          card: seo.twitter.card ?? "summary_large_image",
          title: seo.twitter.title ?? title,
          description: seo.twitter.description ?? description,
          images: seo.twitter.image ? [seo.twitter.image] : undefined,
          creator: seo.twitter.creator
        }
      : undefined
  };
}
