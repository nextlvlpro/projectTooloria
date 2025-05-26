// components/PlausibleAnalytics.tsx
'use client'

import Script from 'next/script'

export default function PlausibleAnalytics() {
  return (
    <>
      <Script
        defer
        data-domain="tooloria.org"
        src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments)
          }
        `}
      </Script>
    </>
  )
}
