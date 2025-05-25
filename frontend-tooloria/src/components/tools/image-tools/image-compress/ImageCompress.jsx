"use client";

import React, { useState, useRef, useEffect } from "react";
import imageCompression from "browser-image-compression";
import { Info } from "lucide-react";

function Tooltip({ text }) {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setVisible(false);
      }
    }

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <span className="relative inline-block ml-1" ref={tooltipRef}>
      <Info
        className="inline w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500"
        onClick={() => setVisible((v) => !v)}
        aria-expanded={visible}
        aria-haspopup="true"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setVisible((v) => !v);
          }
        }}
      />
      {visible && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs
                     px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg z-50"
          role="tooltip"
        >
          {text}
        </span>
      )}
    </span>
  );
}

function CompressionOptions({ options, setOptions }) {
  const updateOption = (key, value) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mb-6 p-4 bg-bg/50 backdrop-blur-lg rounded shadow-sm max-w-3xl">
      <h2 className="text-xl font-semibold mb-4">Compression Settings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className="font-medium flex items-center">
            Max size (MB){" "}
            <Tooltip text="Target image size after compression (1 MB = 1024 KB)" />
          </span>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={options.maxSizeMB}
            onChange={(e) => updateOption("maxSizeMB", e.target.value)}
            className="w-full bg-transparent rounded border px-3 py-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </label>

        <label>
          <span className="font-medium flex items-center">
            Max width/height (px)
            <Tooltip text="Maximum resolution for either width or height (aspect ratio preserved)" />
          </span>
          <input
            type="number"
            min="100"
            value={options.maxWidthOrHeight}
            onChange={(e) => updateOption("maxWidthOrHeight", e.target.value)}
            className="w-full bg-transparent rounded border px-3 py-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </label>

        <label className="col-span-full">
          <span className="font-medium flex items-center">
            Quality
            <Tooltip text="Controls compression quality. Lower = smaller size, Higher = better quality" />
          </span>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.01"
            value={options.initialQuality}
            onChange={(e) => updateOption("initialQuality", e.target.value)}
            className="w-full mt-2"
          />
          <p className="text-sm mt-1">Current: {options.initialQuality}</p>
        </label>

        <label>
          <span className="font-medium flex items-center">
            Max iterations
            <Tooltip text="How many times to retry compression if file is still too big" />
          </span>
          <input
            type="number"
            min="1"
            value={options.maxIteration}
            onChange={(e) => updateOption("maxIteration", e.target.value)}
            className="w-full bg-transparent rounded border px-3 py-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </label>

        <label className="flex items-center gap-2 mt-2 col-span-full">
          <input
            type="checkbox"
            checked={options.alwaysKeepResolution}
            onChange={(e) =>
              updateOption("alwaysKeepResolution", e.target.checked)
            }
            className="h-4 w-4 rounded border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <span className="font-medium">
            Always keep resolution
            <Tooltip text="Prevent automatic downsizing of image resolution" />
          </span>
        </label>
      </div>
    </div>
  );
}

function CompressionResult({ originalFile, compressedFile }) {
  if (!originalFile) return null;

  const originalSizeKB = (originalFile.size / 1024).toFixed(2);
  const compressedSizeKB = compressedFile
    ? (compressedFile.size / 1024).toFixed(2)
    : null;

  const percentSaved = compressedFile
    ? Math.round(
        ((originalFile.size - compressedFile.size) / originalFile.size) * 100
      )
    : null;

  return (
    <section className="mt-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1 bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Original Image</h3>
        <img
          src={URL.createObjectURL(originalFile)}
          alt="Original"
          className="max-w-full rounded border"
        />
        <p className="mt-2 text-sm text-gray-600">{originalSizeKB} KB</p>
      </div>

      {compressedFile && (
        <div className="flex-1 bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">Compressed Image</h3>
          <img
            src={URL.createObjectURL(compressedFile)}
            alt="Compressed"
            className="max-w-full rounded border"
          />
          <p className="mt-2 text-sm text-gray-600">{compressedSizeKB} KB</p>
          <p className="mt-1 text-sm font-medium text-green-600">
            Original: {originalSizeKB} KB → Compressed: {compressedSizeKB} KB (
            {percentSaved}% smaller)
          </p>
          <a
            href={URL.createObjectURL(compressedFile)}
            download={`compressed-${compressedFile.name}`}
            className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download Compressed Image
          </a>
        </div>
      )}
    </section>
  );
}

export default function ImageCompressor() {
  const [originalFile, setOriginalFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressing, setCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const [options, setOptions] = useState({
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    initialQuality: 1,
    maxIteration: 10,
    alwaysKeepResolution: false,
  });

  async function compressImage() {
    if (!originalFile) return;
    setError("");
    setCompressedFile(null);
    try {
      setCompressing(true);
      const compressedBlob = await imageCompression(originalFile, {
        maxSizeMB: Number(options.maxSizeMB),
        maxWidthOrHeight: Number(options.maxWidthOrHeight),
        initialQuality: Number(options.initialQuality),
        maxIteration: Number(options.maxIteration),
        alwaysKeepResolution: options.alwaysKeepResolution,
        useWebWorker: true,
        onProgress: (p) => setProgress(p),
      });

      const compressed = new File([compressedBlob], originalFile.name, {
        type: compressedBlob.type,
      });

      setTimeout(() => {
        setProgress(0);
      }, 1000);

      setCompressedFile(compressed);
    } catch (err) {
      console.error(err);
      setError("Compression failed. Please try again.");
    } finally {
      setCompressing(false);
    }
  }

  function handleFileChange(e) {
    setCompressedFile(null);
    setError("");
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFile(file);
    }
  }

  // Drag & Drop Handlers
  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        setOriginalFile(file);
        setCompressedFile(null);
        setError("");
      } else {
        setError("Please drop a valid image file.");
      }
      e.dataTransfer.clearData();
    }
  }
  useEffect(() => {
    if (compressedFile) {
      const resultRef = document.getElementById("resultRef");
      if (resultRef) {
        resultRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [compressedFile]);

  return (
    <section className="sm:w-3xl w-full mx-auto p-6 bg-bg/50 backdrop-blur-lg rounded text-textMain shadow-lg border border-primary">
      <CompressionOptions options={options} setOptions={setOptions} />

      <div
        className={`mb-4 relative border-2 border-dashed rounded p-8 text-center cursor-pointer
          ${
            dragActive
              ? "border-primary bg-primary/20"
              : "border-textMuted hover:border-primary"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />
        <button
          type="button"
          className="px-4 py-2 w-[150px] bg-primary text-white rounded hover:bg-primary/80 transition select-none"
          onClick={() => {}}
        >
          Choose File
        </button>
        <p className="mt-2 select-none">
          {originalFile ? originalFile.name : "Or drag & drop an image here"}
        </p>
      </div>

      {originalFile && (
        <button
          onClick={compressImage}
          className="px-6 py-2 mt-2 w-[150px] bg-bg/50 text-white bg-primary rounded hover:bg-primary/80 transition"
          disabled={compressing}
        >
          {compressing ? "Compressing..." : "Compress"}
        </button>
      )}

      {progress > 0 && (
        <div className="relative w-full bg-gray-300 rounded h-6 my-4">
          <div
            className="bg-blue-600 h-6 rounded transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">
            {progress.toFixed(0)}%
          </span>
        </div>
      )}

      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div id="resultRef" />
      {originalFile && (
        <CompressionResult
          originalFile={originalFile}
          compressedFile={compressedFile}
        />
      )}
    </section>
  );
}
