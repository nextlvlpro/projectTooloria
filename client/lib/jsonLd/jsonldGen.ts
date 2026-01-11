import { ToolJsonLd } from "@/types/categoryTypes";

export function makeToolJsonLd(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
  isFree?: boolean;
}): ToolJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: params.name,
    description: params.description,
    url: params.url,
    image: params.image,
    applicationCategory: params.category ?? "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR"
    }
  };
}
