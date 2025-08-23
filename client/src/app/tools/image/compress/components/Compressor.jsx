"use client";

import { FileUpload, Button, Input } from "@/components/ui";
import React, { useState } from "react";
import PreviewImageResults from "@/components/ui/PreviewImageResults";
import { compressImage } from "@/utils/imageUtils";

// Popular govt compression targets in KB
const POPULAR_SIZES_KB = [
  { name: "PAN Card (NSDL)", sizeKB: 50, description: "Max 50 KB" },
  { name: "PAN Card (UTI)", sizeKB: 30, description: "Max 30 KB" },
  { name: "SSC Exam Photo", sizeKB: 20, description: "10–20 KB" },
  { name: "Aadhaar Upload", sizeKB: 200, description: "Up to 200 KB" },
  { name: "UPSC Photo", sizeKB: 40, description: "Max 40 KB" },
  { name: "Banking Exam", sizeKB: 80, description: "Max 80 KB" },
];

export default function ImageCompressor() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [mode, setMode] = useState("popular");
  const [targetSizeKB, setTargetSizeKB] = useState(50);
  const [processedImages, setProcessedImages] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileSelect = (files) => {
    setSelectedFiles(Array.isArray(files) ? files : [files]);
    setProcessedImages([]);
  };

  const clearFiles = () => {
    setSelectedFiles([]);
    setProcessedImages([]);
  };

  // Compression loop using compressorjs
  const getImageDimensions = (fileOrBlob) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height, size: fileOrBlob.size });
      };
      img.src = URL.createObjectURL(fileOrBlob);
    });
  };
 
  
  

  const handleCompress = async () => {
    if (selectedFiles.length === 0) return;

    setProcessing(true);
    setProcessedImages([]);

    try {
      const results = [];
      for (const file of selectedFiles) {
        const compressed = await compressImage(file, targetSizeKB);
        results.push(compressed);
      }
      setProcessedImages(results);
    } catch (error) {
      console.error("Compression error:", error);
      alert("Error compressing images. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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

      {/* Step 2: Choose Compression Size */}
      {selectedFiles.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Choose Compression Size
          </h2>

          {/* Mode Selection */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode("popular")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === "popular"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Popular Govt Sizes
            </button>
            <button
              onClick={() => setMode("custom")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === "custom"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Custom Size
            </button>
          </div>

          {mode === "popular" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {POPULAR_SIZES_KB.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setTargetSizeKB(option.sizeKB)}
                  className={`p-3 rounded-lg border text-left transition-colors ${
                    targetSizeKB === option.sizeKB
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                      : "border-gray-200 dark:border-gray-600 hover:border-primary-300"
                  }`}
                >
                  <div className="font-medium text-gray-900 dark:text-white">
                    {option.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {option.sizeKB} KB
                  </div>
                  {option.description && (
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {option.description}
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                label="Target Size (KB)"
                type="number"
                placeholder="e.g. 100"
                value={targetSizeKB}
                onChange={(e) => setTargetSizeKB(Number(e.target.value))}
              />
            </div>
          )}
        </div>
      )}

      {/* Step 3: Process Button */}
      {selectedFiles.length > 0 && (
        <div className="text-center">
          <Button
            onClick={handleCompress}
            loading={processing}
            size="lg"
            className="px-8"
          >
            {processing
              ? "Compressing..."
              : `Compress ${selectedFiles.length} Image${
                  selectedFiles.length > 1 ? "s" : ""
                }`}
          </Button>
        </div>
      )}

      {/* Step 4: Results */}
      {processedImages.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Compressed Images
          </h2>
          <div className="space-y-4">
            {processedImages.map((res, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {res.original.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatFileSize(res.original.size)} →{" "}
                    {formatFileSize(res.resized.size)}
                  </div>
                </div>
                <div className="space-x-2">
                <Button
                  onClick={() => setPreviewImage(res)}
                  variant="ghost"
                  size="sm"
                  className="text-primary-700 outline-none"
                >
                  Preview
                </Button>
                <Button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = res.url;
                    link.download = `compressed_${res.original.name}`;
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
      {previewImage && (
        <PreviewImageResults
          previewImage={previewImage}
          closePreview={() => setPreviewImage(null)}
        />
      )}
    </div>
  );
}
