// app/unit-converter/page.jsx
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Link from 'next/link'
import Loading from '@/app/loading'

const UnitConverter = dynamic(
  () => import('@/components/tools/unit-converter/UnitConverter'),
  { suspense: true }
)

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tooloria.org'

export const metadata = {
  title: 'Unit Converter – Tooloria',
  description:
    'Convert length units easily with our SEO-optimized unit converter tool.',
  alternates: { canonical: `${siteUrl}/unit-converter` },
}

export default function UnitConverterIndexPage() {
  return (
    <>
      {/* ─── Breadcrumbs + WebPage LD if you have them above ─── */}

      <main className="mx-auto px-6 space-y-12">
        {/* ─── 1. Tool UI ─────────────────────────── */}
        <section>
          <h1 className="text-4xl font-bold mb-4">Unit Converter</h1>
          <p className="mb-6 text-textMuted">
            Convert length units like meters, kilometers, miles, and feet.
          </p>
          <Suspense fallback={<Loading />}>
            <UnitConverter params={null} />
          </Suspense>
        </section>

        {/* ─── 2. ABOUT SECTION ─────────────────────────── */}
        <section id="about-unit-converter" className="max-w-3xl mx-auto space-y-4">
          <h2 className="heading-lg">About This Converter</h2>
          <p className="body text-textMuted">
            Tooloria’s Unit Converter lets you instantly convert between various length
            units—meters, kilometers, miles, feet, inches, and more. It’s built for
            accuracy (up to 6 decimal places) and performance, running entirely in
            your browser with no server delays or data collection.
          </p>
        </section>

        {/* ─── 3. RELATED CONVERTERS ─────────────────────────── */}
        <section id="related-converters" className="max-w-3xl mx-auto space-y-4">
          <h2 className="heading-lg">Explore Other Converters</h2>
          <ul className="list-disc pl-5 space-y-2 body">
            <li>
              <Link
                href="/unit-converter/area"
                className="text-textAccent hover:underline"
              >
                Area Converter
              </Link>
            </li>
            <li>
              <Link
                href="/unit-converter/mass"
                className="text-textAccent hover:underline"
              >
                Mass Converter
              </Link>
            </li>
            <li>
              <Link
                href="/unit-converter/volume"
                className="text-textAccent hover:underline"
              >
                Volume Converter
              </Link>
            </li>
            <li>
              <Link
                href="/unit-converter/temperature"
                className="text-textAccent hover:underline"
              >
                Temperature Converter
              </Link>
            </li>
            <li>
              <Link
                href="/unit-converter/time"
                className="text-textAccent hover:underline"
              >
                Time Converter
              </Link>
            </li>
            <li>
              <Link
                href="/unit-converter/digital"
                className="text-textAccent hover:underline"
              >
                Digital Storage Converter
              </Link>
            </li>
          </ul>
        </section>

        {/* ─── 4. FAQ SECTION ────────────────────────────── */}
        <section id="faq-unit-converter" className="max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border rounded p-4">
              <summary className="font-medium cursor-pointer">
                What units are supported?
              </summary>
              <p className="mt-2 body">
                You can convert between meters, kilometers, miles, yards, feet,
                inches, and centimeters. Future updates will add more categories!
              </p>
            </details>
            <details className="border rounded p-4">
              <summary className="font-medium cursor-pointer">
                How accurate are the results?
              </summary>
              <p className="mt-2 body">
                Conversions are accurate to six decimal places. All math is done
                client-side using standard SI and Imperial definitions.
              </p>
            </details>
            <details className="border rounded p-4">
              <summary className="font-medium cursor-pointer">
                Can I convert multiple values at once?
              </summary>
              <p className="mt-2 body">
                At the moment you can convert one value at a time. We’re planning a
                “batch convert” feature soon—stay tuned!
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* ─── 5. FAQPage JSON-LD ───────────────────────── */}
      <Script
        id="unitConverterFaqSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What units are supported?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'You can convert between meters, kilometers, miles, yards, feet, inches, and centimeters.',
                },
              },
              {
                '@type': 'Question',
                name: 'How accurate are the results?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Conversions are accurate to six decimal places, using standard SI and Imperial definitions.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I convert multiple values at once?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Currently you can convert one value at a time; batch conversion is coming soon!',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
