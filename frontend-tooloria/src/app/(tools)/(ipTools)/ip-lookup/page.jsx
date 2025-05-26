import IPLookup from '@/components/ipTools/ip-lookup/IpLookup'
import Link from 'next/link'

export const metadata = {
  title: 'IP Lookup Tool - Find IP Address Location & ISP | Tooloria',
  description:
    'Use Tooloria IP Lookup tool to find any IP address location, ISP, timezone, and more. Check IPv4 or IPv6 IP geolocation and network info for free.',
  keywords: [
    'IP checker',
    'IP lookup tool',
    'IP address checker',
    'Find my IP address',
    'What is my IP',
    'IP geolocation',
    'IP address lookup',
    'IP location finder',
    'IP tracker',
    'Check IP address',
    'Free IP checker online',
    'How to check IP address location',
    'IP address lookup by country',
    'Best IP geolocation tool',
    'VPN IP checker',
    'IP address lookup free tool',
    'How to hide my IP address',
    'IP lookup for website visitors',
    'Find IP address of a device',
    'IP checker for email sender',
    'IPv4 vs IPv6 checker',
    'IP address reverse lookup',
    'ISP lookup by IP',
    'IP address blacklist check',
    'IP address hosting provider lookup',
    'Hide IP address online',
    'Check if my IP is exposed',
    'IP privacy checker',
    'Anonymous IP lookup',
    'IP leak test tool',
  ],
  authors: [{ name: 'Tooloria', url: 'https://tooloria.org' }],
  openGraph: {
    title: 'IP Lookup Tool - Tooloria',
    description:
      'Check any IP address location, ISP, timezone & more with Tooloria’s free IP Lookup tool.',
    url: 'https://tooloria.org/ip-lookup',
    siteName: 'Tooloria',
    images: [
      {
        url: 'https://tooloria.org/tooloriaLogo.png',
        width: 800,
        height: 600,
        alt: 'Tooloria Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IP Lookup Tool - Tooloria',
    description:
      'Find geolocation, ISP, timezone of any IPv4 or IPv6 address with Tooloria’s IP Lookup tool.',
    images: ['https://tooloria.org/tooloriaLogo.png'],
    creator: '@Tooloria',
  },
  metadataBase: new URL('https://tooloria.org'),
}

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-bg text-textMain">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          IP Lookup Tool
        </h1>
        <p className="text-center max-w-xl mx-auto mb-10 text-muted-foreground">
          Enter any IPv4 or IPv6 address to find its geolocation, ISP, timezone,
          and more using our free and fast IP lookup service.
        </p>
        <IPLookup />
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
