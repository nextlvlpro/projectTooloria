import IPLookup from '@/components/ipTools/ip-lookup/IpLookup'
import Link from 'next/link'

export const metadata = {
  title: 'IP Lookup - Find IP Address Location, ISP & Blacklist | Tooloria',
  description: 'Find the location, ISP, blacklist status and more for any IP address. Tooloria’s free IP Lookup tool works for IPv4 and IPv6. No signup, instant results!',
  keywords: [
    'IP lookup', 'IP address location', 'IP blacklist check', 'IP geolocation', 'ISP lookup', 'IPv4', 'IPv6', 'IP finder', 'IP tracker', 'Check IP address', 'Free IP lookup', 'IP address checker'
    // ...rest of your current keywords
  ],
  authors: [{ name: 'Tooloria', url: 'https://tooloria.org' }],
  openGraph: {
    title: 'IP Lookup - Find IP Address Location & Blacklist | Tooloria',
    description: 'Free IP Lookup: find location, ISP, and blacklist status of any IP address. IPv4 & IPv6 supported. No signup, instant results!',
    url: 'https://tooloria.org/ip-lookup',
    siteName: 'Tooloria',
    images: [
      {
        url: 'https://tooloria.org/tooloriaLogo.png', // Prefer a screenshot for higher CTR if possible
        width: 800,
        height: 600,
        alt: 'Tooloria IP Lookup Demo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IP Lookup - Find IP Address Location & Blacklist | Tooloria',
    description: 'Lookup location, ISP, blacklist status and more for any IP address. Free, instant results. IPv4 & IPv6 supported.',
    images: ['https://tooloria.org/tooloriaLogo.png'], // Swap for tool screenshot if possible
    creator: '@Tooloria',
  },
  metadataBase: new URL('https://tooloria.org'),
}


const faqs = [
  {
    q: "What is an IP address lookup?",
    a: "IP address lookup lets you find information about any IP, including geolocation, ISP, timezone, and blacklist status."
  },
  {
    q: "Can I check if an IP address is blacklisted?",
    a: "Yes! Tooloria's IP Lookup checks common blacklists and instantly shows if an IP is listed."
  }
];

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-bg text-textMain">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-primary">
          IP Lookup Tool
        </h1>
        <h2 className="text-2xl font-bold mt-10 mb-4 text-center">
          Free IP Search Tool
        </h2>
        <p className="text-center max-w-xl mx-auto mb-10 text-textSecondary">
          Enter any IPv4 or IPv6 address to get instant IP geolocation, ISP finder info, blacklist check, timezone and more with our free IP lookup service.
        </p>
        <IPLookup />
      </section>
      <section className="max-w-3xl mx-auto space-y-4 my-10">
        <h2 className="heading-lg">
          Why Use Tooloria’s IP Lookup?
        </h2>
        <ul className="list-disc list-inside mt-4 mb-8 text-base">
        <li>Geolocate any IP address worldwide</li>
        <li>Check blacklist status across major databases</li>
        <li>See ISP, hosting provider, timezone, and more</li>
        <li>Supports both IPv4 and IPv6</li>
        <li>No signup, no tracking, 100% free</li>
      </ul>
      </section>
      <section>
      <section id="faq" className="max-w-3xl mx-auto space-y-4">
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          {faqs.map(({ q, a }) => (
            <details key={q} className="border rounded p-4">
              <summary className="font-medium cursor-pointer">{q}</summary>
              <p className="mt-2 body">{a}</p>
            </details>
          ))}
        </section>

      </section>
      
      <section className="text-center my-12">
          <h3 className="text-2xl font-semibold mb-2">Want to lookup you own IP address?</h3>
          <p className="mb-4 max-w-xl mx-auto text-textSecondary">
            Click the button below to lookup your own IP address.
          </p>
          <Link href="/ip-checker">
            <div className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition font-medium">
              Go to IP Lookup Tool
            </div>
          </Link>
        </section>
     
    </main>
  )
}
