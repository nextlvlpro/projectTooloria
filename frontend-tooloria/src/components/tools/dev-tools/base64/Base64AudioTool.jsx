"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Base64AudioTool() {
  const [isEncode, setIsEncode] = useState(true);
  const [base64Text, setBase64Text] = useState("");
  const [decodedAudioURL, setDecodedAudioURL] = useState(null);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const audioRef = useRef(null);

  useEffect(() => {
    setIsEncode(pathname === "/dev-tools/base64-audio-encode");
  }, [pathname]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      setBase64Text(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleDecode = () => {
    try {
      const byteString = atob(base64Text.trim());
      const byteArray = new Uint8Array([...byteString].map((c) => c.charCodeAt(0)));
      const blob = new Blob([byteArray], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      setDecodedAudioURL(url);
    } catch (err) {
      alert("Invalid Base64 audio string.");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(base64Text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Copy failed.");
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="heading-lg text-primary">
        {isEncode ? "Encode Audio to Base64" : "Decode Base64 to Audio"}
      </h2>

      {isEncode ? (
        <>
          <div>
            <h3 className="font-semibold text-textMain mb-1">Step 1: Upload Audio File</h3>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="file-input file:bg-primary file:text-white file:border-none file:px-4 file:py-2 file:rounded-lg file:cursor-pointer"
            />
          </div>

          {base64Text && (
            <>
              <div>
                <h3 className="font-semibold text-textMain mb-1">Step 2: Base64 Output</h3>
                <textarea
                  className="w-full p-4 rounded-xl bg-muted text-textMain border border-primary"
                  rows={6}
                  value={base64Text}
                  readOnly
                />
              </div>
              <button
                onClick={copyToClipboard}
                className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-opacity-90 transition w-fit"
              >
                {copied ? "Copied!" : "Copy Base64"}
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <div>
            <h3 className="font-semibold text-textMain mb-1">Step 1: Paste Base64 Audio</h3>
            <textarea
              value={base64Text}
              onChange={(e) => setBase64Text(e.target.value)}
              placeholder="Paste Base64 string of audio..."
              rows={6}
              className="w-full p-4 rounded-xl bg-muted text-textMain border border-primary"
            />
          </div>
          <button
            onClick={handleDecode}
            className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-opacity-90 transition w-fit"
          >
            Decode & Play
          </button>

          {decodedAudioURL && (
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-textMain">Step 2: Preview & Download</h3>
              <audio controls src={decodedAudioURL} ref={audioRef} className="w-full" />
              <a
                href={decodedAudioURL}
                download="decoded-audio.mp3"
                className="bg-primary text-white px-6 py-2 rounded-xl w-fit hover:bg-opacity-90 transition"
              >
                Download Audio
              </a>
            </div>
          )}
        </>
      )}
    </section>
  );
}
