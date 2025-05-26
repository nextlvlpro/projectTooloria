'use client'

import { useEffect, useState } from 'react'

export default function IPChecker() {
  const [ipData, setIpData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function fetchIP() {
      try {
        const res = await fetch('https://ipwho.is/')
        const data = await res.json()
        if (data.success) {
          setIpData(data)
          setError(null)
        } else {
          setError('Failed to load IP data.')
        }
      } catch (err) {
        setError('Failed to load IP data.')
        console.error('Error fetching IP info:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchIP()
  }, [])

  const copyToClipboard = () => {
    if (!ipData?.ip) return
    navigator.clipboard.writeText(ipData.ip).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (loading) {
    return (
      <div className="text-center text-muted-foreground py-8">
        Loading IP data...
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {error}
      </div>
    )
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-bg text-textMain space-y-5 max-w-md mx-auto border border-border">
      <h2 className="text-3xl font-semibold text-center mb-4">🔍 Your IP Info</h2>

      <p className="flex items-center justify-center gap-3">
        <strong>IP Address:</strong> {ipData.ip}
        <button
          onClick={copyToClipboard}
          className="ml-2 px-3 py-1 text-sm font-medium bg-primary text-white rounded hover:bg-primary/90 transition"
          aria-label="Copy IP address"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </p>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <p><strong>Type:</strong> {ipData.type}</p>
        <p><strong>Continent:</strong> {ipData.continent} ({ipData.continent_code})</p>
        <p><strong>Country:</strong> {ipData.country} {ipData.flag?.emoji}</p>
        <p><strong>Region:</strong> {ipData.region} ({ipData.region_code})</p>
        <p><strong>City:</strong> {ipData.city}</p>
        <p><strong>Postal Code:</strong> {ipData.postal}</p>
        <p><strong>Calling Code:</strong> +{ipData.calling_code}</p>
        <p><strong>Capital:</strong> {ipData.capital}</p>
        <p><strong>ISP:</strong> {ipData.connection?.isp || 'Unknown'}</p>
        <p><strong>Organization:</strong> {ipData.connection?.org || 'Unknown'}</p>
        <p><strong>ASN:</strong> {ipData.connection?.asn || 'N/A'}</p>
        <p><strong>Domain:</strong> {ipData.connection?.domain || 'N/A'}</p>
        <p><strong>Timezone:</strong> {ipData.timezone?.id} ({ipData.timezone?.abbr})</p>
        <p><strong>Local Time:</strong> {new Date(ipData.timezone?.current_time).toLocaleString()}</p>
      </div>

      {ipData.latitude && ipData.longitude && (
        <div className="mt-6 rounded overflow-hidden border border-border shadow-sm">
          <iframe
            title="IP Location Map"
            width="100%"
            height="280"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${ipData.latitude},${ipData.longitude}&z=12&output=embed`}
            allowFullScreen
            className="rounded"
          />
        </div>
      )}
    </div>
  )
}
