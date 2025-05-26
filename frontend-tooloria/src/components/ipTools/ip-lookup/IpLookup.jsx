'use client'

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {isIP} from 'is-ip'
import IpInfo from '../IpInfo'
import Link from 'next/link'

export default function IpLookup() {
  const searchParams = useSearchParams();
  const [ipInput, setIpInput] = useState("");
  const [ipData, setIpData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copiedTimeout, setCopiedTimeout] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Run on mount: check for ?ip= param
  useEffect(() => {
    const ip = searchParams.get("ip");
    if (ip && isIP(ip)) {
      setIpInput(ip);
    }
  }, [searchParams]);

  // Lookup automatically when input is valid
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (isIP(ipInput)) {
        handleLookup(ipInput);
      } else if (ipInput.length > 0) {
        setError("Invalid IP address format");
        setIpData(null);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [ipInput]);

  const handleLookup = async (ip) => {
    setLoading(true);
    setError(null);
    setIpData(null);

    try {
      const res = await fetch(`https://ipwho.is/${ip}`);
      const data = await res.json();

      if (data.success) {
        router.replace(`/ip-lookup?ip=${ip}`, { scroll: false });
        setIpData(data);
      } else {
        setError("IP address not found.");
      }
    } catch (err) {
      console.error("Lookup error:", err);
      setError("Error fetching IP data.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ipData.ip);
    setCopied(true);
    if (copiedTimeout) clearTimeout(copiedTimeout);
    const timeout = setTimeout(() => setCopied(false), 2000);
    setCopiedTimeout(timeout);
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-8 bg-bg rounded-xl shadow-lg border border-primary space-y-4">
      <h1 className="text-2xl font-bold text-center">🔍 IP Lookup Tool</h1>

      <input
        type="text"
        value={ipInput}
        onChange={(e) => setIpInput(e.target.value)}
        placeholder="start typing..."
        className="w-full px-4 py-2 border rounded bg-bg text-textMain border-primary"
      />
      {error && <p className="text-red-500">{error}</p>}
      {ipData && (
        <IpInfo
          ipData={ipData}
          copied={copied}
          copyToClipboard={copyToClipboard}
        />
      )}
    </div>
  );
}
