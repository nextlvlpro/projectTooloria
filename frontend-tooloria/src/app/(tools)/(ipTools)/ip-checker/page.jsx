/* app/ip-checker/page.jsx
   ----------------------------------------------------------- */

   import Script from 'next/script';
   import Link   from 'next/link';
   import IPChecker from '@/components/ipTools/ip-checker/IpChecker';
   
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tooloria.org';
   
   /* ---------- 1. Page-specific metadata ---------- */
   export async function generateMetadata() {
     return {
       title: 'Free IP Checker – Find My IP Address & Location',
       description:
         "Use Tooloria's free IP address checker to instantly view your IPv4/IPv6, ISP and geolocation. Works worldwide.",
       alternates: { canonical: `${siteUrl}/ip-checker` },
       openGraph: {
         title: 'Free IP Checker Online – Tooloria',
         description:
           'Instantly check your IP address, ISP info and geolocation with Tooloria’s free IP lookup tool.',
         url: `${siteUrl}/ip-checker`,
         siteName: 'Tooloria',
         images: [
           { url: '/tooloriaLogo.png', width: 800, height: 600, alt: 'Tooloria Logo' },
         ],
         type: 'website',
       },
       twitter: {
         card: 'summary_large_image',
         title: 'Free IP Checker Online – Tooloria',
         description:
           'Instantly check your IP address, ISP info and geolocation with Tooloria’s free IP lookup tool.',
         images: ['/tooloriaLogo.png'],
       },
       other: {
         keywords:
           'IP checker, IP lookup, find my IP, IPv4 checker, IPv6 checker, IP geolocation, ISP lookup, free IP checker online',
       },
     };
   }
   
   /* ---------- 2. FAQ content (single source of truth) ---------- */
   const faqs = [
     {
       q: 'What is an IP address?',
       a: 'An IP address is a numerical label assigned to every device connected to a computer network that uses the Internet Protocol for communication. It identifies your device and allows data to reach you.',
     },
     {
       q: "What's the difference between IPv4 and IPv6?",
       a: 'IPv4 is the original 32-bit addressing scheme (e.g., 192.168.0.1) and supports about 4.3 billion unique addresses. IPv6 is a 128-bit scheme (e.g., 2001:0db8::1) designed to solve IPv4 exhaustion and improve routing and security.',
     },
     {
       q: 'How accurate is IP geolocation?',
       a: 'Country-level detection is usually >99 % accurate. City-level accuracy depends on your ISP and can vary from a few kilometres to tens of kilometres. Exact street addresses are not provided for privacy.',
     },
   ];
   
   /* ---------- 3. Page component ---------- */
   export default function IpCheckerPage() {
     return (
       <>
         {/* BreadcrumbList JSON-LD */}
         <Script
           id="breadcrumb"
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               '@context': 'https://schema.org',
               '@type': 'BreadcrumbList',
               itemListElement: [
                 { '@type': 'ListItem', position: 1, name: 'Home',        item: `${siteUrl}/` },
                 { '@type': 'ListItem', position: 2, name: 'IP Checker',  item: `${siteUrl}/ip-checker` },
               ],
             }),
           }}
         />
   
         {/* FAQPage JSON-LD */}
         <Script
           id="faq-schema"
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               '@context': 'https://schema.org',
               '@type': 'FAQPage',
               mainEntity: faqs.map(({ q, a }) => ({
                 '@type': 'Question',
                 name: q,
                 acceptedAnswer: { '@type': 'Answer', text: a },
               })),
             }),
           }}
         />
   
         {/* SoftwareApplication JSON-LD (unchanged) */}
         <Script
           id="software-schema"
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               '@context': 'https://schema.org',
               '@type': 'SoftwareApplication',
               name: 'Tooloria IP Checker',
               url: `${siteUrl}/ip-checker`,
               description:
                 'Free IP address checker and lookup tool to find your IPv4 or IPv6 address, ISP and geolocation.',
               applicationCategory: 'NetworkApplication',
               operatingSystem: 'All',
               creator: {
                 '@type': 'Organization',
                 name: 'Tooloria',
                 url: siteUrl,
               },
             }),
           }}
         />
   
         {/* ---------------- visible content ---------------- */}
         <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
   
           {/* HERO */}
           <header className="text-center space-y-4">
             <h1 className="text-4xl font-extrabold leading-tight text-primary">
               Free IP Checker &amp; IP Lookup Tool
             </h1>
             <p className="text-lg text-textSecondary max-w-2xl mx-auto">
               Instantly detect your IPv4 or IPv6, ISP details and approximate
               geolocation — worldwide.
             </p>
           </header>
   
           {/* TOOL */}
           <IPChecker />
   
           {/* ABOUT (≈ 200 words) */}
           <section className="prose prose-neutral max-w-none text-textMain">
             <h2 className="text-textMain">About this IP Checker</h2>
             <p>
               Every device on the internet carries an IP address—essentially the
               return address on every packet you send or receive.  Our checker
               displays that address in real time, along with the public
               information your ISP publishes: country, city, time-zone and
               (sometimes) organisation.  None of that data is stored by Tooloria;
               it is shown once in your browser and then discarded.  The tool
               recognises both IPv4 (e.g.&nbsp;203.0.113.42) and IPv6
               (e.g.&nbsp;2001:db8::1), so you can confirm whether your network
               has transitioned to the newer protocol.  Geolocation comes from
               regional internet registries and may be city-level accurate; street
               addresses are never revealed.  Use the checker to verify VPNs,
               troubleshoot region-locked content or simply learn how the web sees
               you.  Click “Copy” to place your IP on the clipboard or jump to our
               full&nbsp;
               <Link href="/ip-lookup" className="text-textAccent underline">
                 IP Lookup
               </Link>
               &nbsp;tool for detailed ASN and blacklist checks.
             </p>
           </section>
   
           {/* FAQ */}
           <section id="faq" className="max-w-3xl mx-auto space-y-4">
             <h2 className="heading-lg">Frequently Asked Questions</h2>
             {faqs.map(({ q, a }) => (
               <details key={q} className="border rounded p-4">
                 <summary className="font-medium cursor-pointer">{q}</summary>
                 <p className="mt-2 body">{a}</p>
               </details>
             ))}
           </section>
   
           {/* Internal link to related tool */}
           <div className="text-center pt-8">
             <Link href="/ip-lookup" className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition font-medium">
               Go to Full IP Lookup Tool
             </Link>
           </div>
         </main>
       </>
     );
   }
   