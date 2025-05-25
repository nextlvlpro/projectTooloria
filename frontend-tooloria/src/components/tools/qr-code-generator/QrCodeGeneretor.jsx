'use client';

import { useState, useEffect, useRef } from "react";

function QRControls({
  text,
  setText,
  size,
  setSize,
  colorDark,
  setColorDark,
  colorLight,
  setColorLight,
}) {
  // Show warning if size is invalid
  const showWarning = size < 100 || size > 1024;

  return (
    <section
      className="flex flex-col gap-4
             bg-bg/30 backdrop-blur-md
             border border-bg/40
             shadow-lg rounded-2xl p-6 w-full"
    >
      <h1 className="heading-lg text-center text-primary">QR Code Generator</h1>

      <label className="flex flex-col gap-1">
        <span className="caption text-textMuted">Text or URL</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-3 border border-primary rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter text..."
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="caption text-textMuted">Size (px)</span>
        <input
          type="number"
          value={size}
          onChange={(e) => {
            // Allow empty string so user can clear input
            if (e.target.value === '') {
              setSize('');
              return;
            }
            const val = parseInt(e.target.value, 10);
            if (!isNaN(val)) {
              setSize(val);
            }
          }}
          className={`p-3 border rounded bg-transparent focus:outline-none focus:ring-2 ${
            showWarning ? "border-red-500 focus:ring-red-500" : "border-primary focus:ring-primary"
          }`}
          placeholder="100 - 1024"
        />
        {showWarning && (
          <p className="text-red-500 text-sm mt-1">
            Size should be between 100 and 1024 px.
          </p>
        )}
      </label>

      <div className="flex gap-6">
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-textMuted">Dark Color</span>
          <input
            type="color"
            value={colorDark}
            onChange={(e) => setColorDark(e.target.value)}
            className="w-10 h-10 rounded"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          <span className="text-textMuted">Light Color</span>
          <input
            type="color"
            value={colorLight}
            onChange={(e) => setColorLight(e.target.value)}
            className="w-10 h-10 rounded"
          />
        </label>
      </div>
    </section>
  );
}

function QRCodeRenderer({ text, size, colorDark, colorLight }) {
  const ref = useRef(null);

  // Clamp size for rendering only:
  const renderSize = Math.min(Math.max(size || 256, 100), 1024);

  useEffect(() => {
    if (!text || !ref.current) return;

    import("qr-creator").then((QRCode) => {
      const qr = QRCode.default || QRCode;
      ref.current.innerHTML = "";
      qr.render(
        {
          text,
          radius: 0.5,
          ecLevel: "H",
          fill: colorDark,
          background: colorLight,
          size: renderSize,
          mime: "image/png",
        },
        ref.current
      );
    });
  }, [text, renderSize, colorDark, colorLight]);

  const handleDownload = () => {
    const canvas = ref.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section
  className="flex flex-col items-center gap-4
             p-6
             bg-bg/30 backdrop-blur-md
             border border-bg/40
             shadow-lg rounded-2xl"
>
      <div
        style={{
          width: 256,
          height: 256,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          ref={ref}
          style={{
            width: renderSize,
            height: renderSize,
            maxWidth: "256px",
            maxHeight: "256px",
            transform: renderSize > 256 ? `scale(${256 / renderSize})` : "none",
            transformOrigin: "top left",
          }}
        />
      </div>

      <button
        onClick={handleDownload}
        className="px-6 py-2 rounded bg-primary text-white hover:bg-opacity-90 transition"
      >
        Download PNG
      </button>
    </section>
  );
}

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(256);
  const [colorDark, setColorDark] = useState("#000000");
  const [colorLight, setColorLight] = useState("#ffffff");

  return (
    <main className="bg-bg/50 backdrop-blur-lg text-textMain px-6 py-10 flex flex-col lg:flex-row gap-10 justify-center items-start max-w-7xl mx-auto">
      <div className="lg:w-1/2 w-full">
        <QRControls
          text={text}
          setText={setText}
          size={size}
          setSize={setSize}
          colorDark={colorDark}
          setColorDark={setColorDark}
          colorLight={colorLight}
          setColorLight={setColorLight}
        />
      </div>

      <div className="lg:w-1/2 w-full">
        {text ? (
          <QRCodeRenderer
            text={text}
            size={size}
            colorDark={colorDark}
            colorLight={colorLight}
          />
        ) : (
          <div className="bg-bg/50 backdrop-blur-lg rounded-2xl p-6 text-center text-textMuted italic shadow-md">
            Enter some text to generate a QR code.
          </div>
        )}
      </div>
    </main>
  );
}
