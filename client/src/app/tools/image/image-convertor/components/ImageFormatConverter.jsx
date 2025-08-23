"use client";

import { useState } from "react";
import { FileUpload, Button } from "@/components/ui";

const SUPPORTED_FORMATS = [
    { label: "JPG", mime: "image/jpeg", ext: "jpg" },
    { label: "PNG", mime: "image/png", ext: "png" },
    { label: "WebP", mime: "image/webp", ext: "webp" },
    { label: "AVIF", mime: "image/avif", ext: "avif" }, // modern efficient
    { label: "BMP", mime: "image/bmp", ext: "bmp" },     // legacy, very large
  ];

export default function ImageFormatConverter() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [targetFormat, setTargetFormat] = useState("image/jpeg");
  const [convertedImages, setConvertedImages] = useState([]);
  const [processing, setProcessing] = useState(false);

  const handleFileSelect = (files) => {
    setSelectedFiles(Array.isArray(files) ? files : [files]);
    setConvertedImages([]);
  };

  const clearFiles = () => {
    setSelectedFiles([]);
    setConvertedImages([]);
  };

  // Convert using canvas
  const convertFile = (file, targetMime, ext) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Conversion failed"));
            const convertedFile = new File(
              [blob],
              file.name.replace(/\.\w+$/, `.${ext}`),
              { type: targetMime }
            );
            resolve({
              original: file,
              resized: convertedFile, // unified naming
              url: URL.createObjectURL(convertedFile),
            });
          },
          targetMime,
          0.92 // default quality
        );
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleConvert = async () => {
    if (!selectedFiles.length) return;
    setProcessing(true);
    setConvertedImages([]);

    try {
      const results = [];
      const target = SUPPORTED_FORMATS.find((f) => f.mime === targetFormat);

      for (const file of selectedFiles) {
        const converted = await convertFile(file, target.mime, target.ext);
        results.push(converted);
      }

      setConvertedImages(results);
    } catch (err) {
      console.error("Conversion error:", err);
      alert("Conversion failed.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Step 1: Upload */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Upload Images
        </h2>
        <FileUpload
          multiple
          accept="image/*"
          onFileSelect={handleFileSelect}
          clearFileInstruction={clearFiles}
          placeholder="Drop image files here or click to browse"
          helper="Supports JPG, PNG, WebP. Multiple files allowed."
        />
      </div>

      {/* Step 2: Choose Format */}
      {selectedFiles.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Choose Output Format
          </h2>
          <div className="flex gap-4">
            {SUPPORTED_FORMATS.map((f) => (
              <button
                key={f.mime}
                onClick={() => setTargetFormat(f.mime)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  targetFormat === f.mime
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Convert Button */}
      {selectedFiles.length > 0 && (
        <div className="text-center">
          <Button
            onClick={handleConvert}
            loading={processing}
            size="lg"
            className="px-8"
          >
            {processing
              ? "Converting..."
              : `Convert ${selectedFiles.length} Image${
                  selectedFiles.length > 1 ? "s" : ""
                }`}
          </Button>
        </div>
      )}

      {/* Step 4: Results */}
      {convertedImages.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Converted Images
          </h2>
          <div className="space-y-4">
            {convertedImages.map((res, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {res.resized.name}
                  </div>
                </div>
                <div className="space-x-2">
                  <Button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = res.url;
                      link.download = res.resized.name;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
