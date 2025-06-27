/* app/unit-converter/[category]/page.jsx
   ------------------------------------- */

   import { Suspense } from 'react';
   import dynamic from 'next/dynamic';
   import Script from 'next/script';
   import Loading from '@/app/loading';
   import Link from 'next/link';
   
   import {
     categoryMetadata,      // short SEO fields (description, keywords)
     categoryContentData,   // long-form About + faq
   } from '@/lib/categoryMetadata';
   
   /* lazy-load the interactive widget */
   const UnitConverter = dynamic(
     () => import('@/components/tools/unit-converter/UnitConverter'),
     { suspense: true }
   );
   
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tooloria.org';
   
   /* ------- 1. static params for SSG ------- */
   export async function generateStaticParams() {
     return Object.keys(categoryMetadata).map(category => ({ category }));
   }
   
   /* ------- 2. metadata for <head> --------- */
   export async function generateMetadata({ params }) {
     const { category } = await params;                       
     const meta = categoryMetadata[category] || { description: '', keywords: [] };
     const name = category.charAt(0).toUpperCase() + category.slice(1);
     const url  = `${siteUrl}/unit-converter/${category}`;
   
     return {
       title: `${name} Converter`,
       description: meta.description,
       alternates: { canonical: url },
       openGraph: {
         title: `${name} Converter | Tooloria`,
         description: meta.description,
         url,
         images: [{ url: 'https://tooloria.org/tooloriaLogo.png', width: 1200, height: 630, alt: 'Tooloria' }],
         type: 'website',
       },
       twitter: {
         card: 'summary_large_image',
         title: `${name} Converter | Tooloria`,
         description: meta.description,
         images: ['https://tooloria.org/tooloriaLogo.png'],
       },
       other: { keywords: meta.keywords.join(', ') },
     };
   }
   
   /* ------------- 3. actual page ------------ */
   export default async function CategoryPage({ params }) {
     const { category } = await params;                           
     const meta = categoryMetadata[category] || { description: '', keywords: [] };
     const long  = categoryContentData[category] || { aboutSectionText: '', faq: [] };
     const name  = category.charAt(0).toUpperCase() + category.slice(1);
     const url   = `${siteUrl}/unit-converter/${category}`;
   
     /* ---------------- schema --------------- */
     const faqJsonLd = {
       '@context': 'https://schema.org',
       '@type': 'FAQPage',
       mainEntity: long.faq.map(({ q, a }) => ({
         '@type': 'Question',
         name: q,
         acceptedAnswer: { '@type': 'Answer', text: a },
       })),
     };
   
     const breadcrumbJsonLd = {
       '@context': 'https://schema.org',
       '@type': 'BreadcrumbList',
       itemListElement: [
         { '@type': 'ListItem', position: 1, name: 'Home',          item: `${siteUrl}/` },
         { '@type': 'ListItem', position: 2, name: 'Unit Converter', item: `${siteUrl}/unit-converter` },
         { '@type': 'ListItem', position: 3, name,                   item: url },
       ],
     };
   
     return (
       <>
         {/* Breadcrumbs & FAQ structured data */}
         <Script id="breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
         {long.faq.length > 0 && (
           <Script id="faqSchema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
         )}
   
         <main className="mx-auto px-6 space-y-12">
           {/* —— converter UI —— */}
           <section>
             <h1 className="text-4xl font-bold mb-4">{name} Converter</h1>
             <p className="mb-6 text-textMuted">{meta.description}</p>
   
             <Suspense fallback={<Loading />}>
               <UnitConverter params={{ category }} />
             </Suspense>
           </section>
   
           {/* —— related links —— */}
           <section id="related-converters" className="max-w-3xl mx-auto space-y-4">
             <h2 className="heading-lg">Explore Other Converters</h2>
             <ul className="list-disc pl-5 space-y-2 body">
               {Object.keys(categoryMetadata).map(cat => (
                 <li key={cat}>
                   <Link href={`/unit-converter/${cat}`} className="text-textAccent hover:underline">
                     {cat.charAt(0).toUpperCase() + cat.slice(1)} Converter
                   </Link>
                 </li>
               ))}
             </ul>
           </section>
   
           {/* —— about section —— */}
           {long.aboutSectionText && (
             <section id="about" className="max-w-3xl mx-auto space-y-4">
               <h2 className="heading-lg">About {name} Converter</h2>
               <p className="body text-textMuted whitespace-pre-line">
                 {long.aboutSectionText}
               </p>
             </section>
           )}
   
           {/* —— on-page FAQ —— */}
           {long.faq.length > 0 && (
             <section id="faq" className="max-w-3xl mx-auto space-y-4 pb-12">
               <h2 className="heading-lg">Frequently Asked Questions</h2>
               {long.faq.map(({ q, a }) => (
                 <details key={q} className="border rounded p-4">
                   <summary className="font-medium cursor-pointer">{q}</summary>
                   <p className="mt-2 body">{a}</p>
                 </details>
               ))}
             </section>
           )}
         </main>
       </>
     );
   }
   