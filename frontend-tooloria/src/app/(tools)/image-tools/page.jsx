import dynamic from "next/dynamic";
import { generatePageMetadata } from "@/components/shared/metadataGen";
import ImageToolsLanding from "@/components/tools/image-tools/ImageToolsLanding";
import StructuredData from "@/components/shared/JsonLdGen";

export const metadata = generatePageMetadata({
  title: 'Resize & Compress Images for Forms – Tooloria',
  description:
    'Resize and compress images to predefined pixel and KB sizes for CSC, LMK, PAN, Passport, and other government forms. No cropping required.',
  url: 'https://tooloria.org/image-tools',
  image: 'https://tooloria.org/favicon.ico',
});

 const faq = [
    {
      question: 'How do I resize an image for PAN or Passport form?',
      answer:
        'Select from our predefined sizes like 213x213 pixels for PAN or 350x350 for Passport. Upload your photo and download instantly.',
    },
    {
      question: 'Can I compress an image to exactly 20 KB or 100 KB?',
      answer:
        'Yes, choose predefined compression sizes or enter a custom target size in kilobytes. Our tool will automatically optimize it.',
    },
  ];



export default function ImageToolsLandingPage() {
  return (
    <>
        <ImageToolsLanding/>
        <StructuredData faq={faq} />
    </>
  )
}