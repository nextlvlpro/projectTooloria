'use client'

import { useEffect, useState } from 'react'
import IpInfo from '../IpInfo'

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
    <IpInfo ipData={ipData} copied={copied} copyToClipboard={copyToClipboard} />
  )
}
