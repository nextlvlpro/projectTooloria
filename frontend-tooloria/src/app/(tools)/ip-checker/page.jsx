// app/ip-checker/page.jsx

import IPChecker from '@/components/ip-checker/IpChecker'

export const metadata = {
  title: 'Free IP Checker Online - Find My IP Address & Location | Tooloria',
  description:
    'Use Tooloria\'s free IP address checker and lookup tool to find your IPv4 or IPv6 address, ISP, and geolocation instantly. Works worldwide including US, UK, India, Canada & Australia.',
  openGraph: {
    title: 'Free IP Checker Online - Tooloria',
    description:
      'Instantly check your IP address, ISP info, and geolocation with Tooloria’s free IP lookup tool. Supports IPv4 and IPv6 worldwide.',
    url: 'https://tooloria.org/ip-checker',
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
    title: 'Free IP Checker Online - Tooloria',
    description:
      'Instantly check your IP address, ISP info, and geolocation with Tooloria’s free IP lookup tool.',
    images: ['https://tooloria.org/tooloriaLogo.png'],
  },
}

export default function IPCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Tooloria IP Checker',
            url: 'https://tooloria.org/ip-checker',
            description:
              'Free IP address checker and lookup tool to find your IPv4 or IPv6 address, ISP, and geolocation worldwide.',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'All',
            keywords:
              'IP checker, IP lookup tool, IP address checker, Find my IP address, What is my IP, IP geolocation, IP address lookup, IP location finder, IP tracker, Check IP address, Free IP checker online, IPv4 vs IPv6 checker, IP privacy checker',
            creator: {
              '@type': 'Organization',
              name: 'Tooloria',
              url: 'https://tooloria.org',
            },
          }),
        }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Free IP Checker &amp; IP Lookup Tool — Find Your IP Address &amp; Location
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Instantly check your IPv4 or IPv6 address, ISP info, and geolocation worldwide — including US, UK, India, Canada, and Australia.
          </p>
        </header>

        {/* IPChecker Component */}
        <IPChecker />

        {/* Optional SEO-rich content section */}
        <section className="mt-16 prose prose-neutral max-w-none px-2">
          <h2>What is My IP Address?</h2>
          <p>
            Your IP address is a unique identifier assigned to your device on the internet. It can be IPv4 or IPv6, depending on your network. This IP address is used for geolocation, ISP identification, and network communication.
          </p>

          <h2>How To Check IP Address Location</h2>
          <p>
            Our free IP lookup tool shows your IP address along with detailed geolocation data like country, city, timezone, and ISP. This helps with network troubleshooting, content customization, or privacy awareness.
          </p>

          <h2>IPv4 vs IPv6 Checker</h2>
          <p>
            IPv4 and IPv6 are two types of IP addresses. IPv4 is the most common, but IPv6 is the newer version designed to solve IPv4 address exhaustion. This tool detects which IP version you have.
          </p>

          <h2>Privacy &amp; Security Tips</h2>
          <ul>
            <li>Use a VPN to hide your IP address online.</li>
            <li>Check if your IP is exposed or leaking using our privacy checker.</li>
            <li>Be cautious sharing your IP address publicly.</li>
          </ul>
        </section>
      </main>
    </>
  )
}
