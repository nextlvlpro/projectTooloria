/* app/ip-checker/page.jsx
   ----------------------------------------------------------- */

   import IPChecker from '@/components/ipTools/ip-checker/IpChecker';
   import Link     from 'next/link';
   import Script   from 'next/script';
   
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tooloria.org';
   
   /* ───────── 1. page-level metadata ───────── */
   export async function generateMetadata() {
     return {
       title: 'IP Checker: What Is My IP? (IPv4 & IPv6)',
       description:
         'See your public IP, ISP & city in one click. No cookies, no logs—just your IPv4 / IPv6 plus geolocation.',
       alternates: { canonical: `${siteUrl}/ip-checker` },
       openGraph: {
         title: 'IP Checker – What Is My IP?',
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
           'Instantly view your IPv4/IPv6, ISP and geolocation. Zero tracking, works worldwide.',
         images: ['/tooloriaLogo.png'],
       },
       other: {
         keywords:
           'ip checker, what is my ip, find my ip address, ipv4 checker, ipv6 checker, ip geolocation, isp lookup, free ip checker online',
       },
     };
   }
   
   /* ───────── 2. FAQ array (single source) ───────── */
   const faqs = [
     {
       q: 'What is an IP address?',
       a:
         'An Internet Protocol (IP) address is a numerical label that allows data to reach your device on the network. Every phone, computer or IoT gadget connected to the internet has at least one public IP.',
     },
     {
       q: 'How is IPv6 different from IPv4?',
       a:
         'IPv4 uses 32-bit numbers (e.g. 192.0.2.1) and supports about 4.3 billion addresses. IPv6 uses 128-bit numbers (e.g. 2001:db8::1), offering 3.4 × 10³⁸ unique addresses plus built-in security and better routing.',
     },
     {
       q: 'Is IP geolocation precise?',
       a:
         'Country detection is usually > 99 % accurate. City-level data depends on how your ISP registers its blocks and can range from a few kilometres to tens of kilometres. Our tool never reveals your exact street address.',
     },
     {
       q: 'Do you store or log my IP?',
       a:
         'No. All look-ups happen in your browser. The number you see is rendered locally and discarded as soon as you close the page. Optional ads load from Google but receive no additional data from us.',
     },
     {
       q: 'How can I hide my IP address?',
       a:
         'Use a trustworthy VPN, Tor Browser or a corporate proxy. These services act as middlemen, so websites see the VPN IP instead of yours. Re-load this page after connecting to verify the change.',
     },
   ];
   
   /* ───────── 3. component ───────── */
   export default function IpCheckerPage() {
     /* build JSON-LD objects once */
     const faqJsonLd = {
       '@context': 'https://schema.org',
       '@type': 'FAQPage',
       mainEntity: faqs.map(({ q, a }) => ({
         '@type': 'Question',
         name: q,
         acceptedAnswer: { '@type': 'Answer', text: a },
       })),
     };
   
     const breadcrumbJsonLd = {
       '@context': 'https://schema.org',
       '@type': 'BreadcrumbList',
       itemListElement: [
         { '@type': 'ListItem', position: 1, name: 'Home',       item: `${siteUrl}/` },
         { '@type': 'ListItem', position: 2, name: 'IP Checker', item: `${siteUrl}/ip-checker` },
       ],
     };
   
     return (
       <>
         {/* ── structured data ───────────────── */}
         <Script id="breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
         <Script id="faq-schema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
                 'Free IP address checker and lookup tool for IPv4 and IPv6. No tracking, works worldwide.',
               applicationCategory: 'NetworkApplication',
               operatingSystem: 'All',
               browserRequirements: 'Requires JavaScript',
               creator: { '@type': 'Organization', name: 'Tooloria', url: siteUrl },
             }),
           }}
         />
   
         {/* ── optional (deferred) AdSense ── */}
         {/*
         <Script
           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
           strategy="lazyOnload"
         />
         */}
   
         {/* ── visible content ───────────────── */}
         <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
   
           {/* headline */}
           <header className="text-center space-y-4">
             <h1 className="text-4xl font-extrabold leading-tight text-primary">
               What Is&nbsp;My&nbsp;IP?
             </h1>
             <p className="text-lg text-textSecondary max-w-2xl mx-auto">
               Instantly show your public IPv4 or IPv6 address, ISP and city. Zero cookies. Zero logs.
             </p>
           </header>
   
           {/* answer box + tool */}
           <div className="bg-muted rounded-lg shadow-inner p-6 text-center space-y-6">
             <IPChecker /> {/* ← component prints the IP big and bold */}
           </div>
   
           {/* about (≈ 200 words) */}
           <section className="prose prose-neutral max-w-none text-textSecondary">
             <h2>How IP Geolocation Works<span className="sr-only"> — About</span></h2>
             <p>
               When your device connects to the internet, your Internet Service
               Provider assigns it a block of numbers registered with a Regional
               Internet Registry (RIR).  Public datasets from organisations like&nbsp;
               <a href="https://www.apnic.net" target="_blank" rel="noopener">APNIC</a>
               &nbsp;map those blocks to countries, and—if the ISP volunteers more
               detail—to cities or regions.  Our checker queries that dataset
               client-side, so the raw IP never touches Tooloria’s servers.  Because
               home routers often share a single public address among many
               devices (NAT), geolocation points to the ISP’s nearest hub rather than
               your exact house.  For mobile networks, the location may reflect the
               gateway city hundreds of kilometres away.  Businesses use static
               allocations, so the accuracy can be higher.  If you connect through a
               VPN, you will see the VPN provider’s exit node instead—handy to verify
               whether your tunnel is working.  No matter what, street-level details
               are never provided for privacy compliance.
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
   
           {/* internal link to full IP-lookup */}
           <div className="text-center pt-8">
             <Link
               href="/ip-lookup"
               className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition font-medium"
             >
               Need ASN &amp; blacklist info? – Open IP Lookup
             </Link>
           </div>
         </main>
       </>
     );
   }
   