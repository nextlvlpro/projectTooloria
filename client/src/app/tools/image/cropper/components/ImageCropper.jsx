"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";

/**
 * Helper: create cropped image from crop area
 */
const getCroppedImage = (imageSrc, cropAreaPixels, format = "png", quality = 1) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = cropAreaPixels.width;
      canvas.height = cropAreaPixels.height;
      const ctx = canvas.getContext("2d");

      // Enable image smoothing for better quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(
        image,
        cropAreaPixels.x,
        cropAreaPixels.y,
        cropAreaPixels.width,
        cropAreaPixels.height,
        0,
        0,
        cropAreaPixels.width,
        cropAreaPixels.height
      );

      const mimeType = `image/${format}`;
      canvas.toBlob((blob) => {
        if (!blob) return reject("Canvas is empty");
        resolve(new File([blob], `cropped.${format}`, { type: mimeType }));
      }, mimeType, quality);
    };
    image.onerror = () => reject("Image load error");
  });
};

/**
 * Helper: get common aspect ratios
 */
const getAspectRatios = () => [
  { label: "Free", value: null },
  { label: "Square (1:1)", value: 1 },
  { label: "Portrait (3:4)", value: 3/4 },
  { label: "Landscape (4:3)", value: 4/3 },
  { label: "Wide (16:9)", value: 16/9 },
  { label: "Instagram Post (1:1)", value: 1 },
  { label: "Instagram Story (9:16)", value: 9/16 },
  { label: "Facebook Cover (16:9)", value: 16/9 },
  { label: "Passport Photo (1:1.4)", value: 1/1.4 },
];

/**
 * Helper: format file size
 */
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

export default function EnhancedImageCropper() {
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImages, setCroppedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState(1); // Default square
  const [outputFormat, setOutputFormat] = useState("png");
  const [quality, setQuality] = useState(0.9);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const aspectRatios = getAspectRatios();

  const onFileSelect = (file) => {
    if (file) {
      setImageFile(file);
      setImageSrc(URL.createObjectURL(file));
      setCroppedImages([]);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setRotation(0);
    }
  };

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCrop = async () => {
    if (!imageSrc || !croppedAreaPixels) return;
    setLoading(true);
    
    try {
      const file = await getCroppedImage(imageSrc, croppedAreaPixels, outputFormat, quality);
      const newCroppedImage = {
        id: Date.now(),
        file,
        url: URL.createObjectURL(file),
        aspectRatio: selectedAspectRatio,
        format: outputFormat,
        size: file.size,
      };
      
      setCroppedImages(prev => [newCroppedImage, ...prev]);
    } catch (err) {
      console.error("Crop error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (croppedImage) => {
    const link = document.createElement("a");
    link.href = croppedImage.url;
    link.download = croppedImage.file.name;
    link.click();
  };

  const handleDownloadAll = () => {
    croppedImages.forEach((img, index) => {
      setTimeout(() => handleDownload(img), index * 100);
    });
  };

  const removeCroppedImage = (id) => {
    setCroppedImages(prev => prev.filter(img => img.id !== id));
  };

  const resetTool = () => {
    // Keep the original image but reset all cropping settings
    setCroppedImages([]);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    setCroppedAreaPixels(null);
    setSelectedAspectRatio(1);
    setOutputFormat("png");
    setQuality(0.9);
    setShowAdvanced(false);
  };

  const clearAll = () => {
    // This completely clears everything including the uploaded image
    setImageFile(null);
    setImageSrc(null);
    setCroppedImages([]);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    setCroppedAreaPixels(null);
    setSelectedAspectRatio(1);
    setOutputFormat("png");
    setQuality(0.9);
    setShowAdvanced(false);
    
    // Clear the file input as well
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* File Upload */}
      <FileUpload
        accept="image/*"
        multiple={false}
        label="Upload Image to Crop"
        onFileSelect={onFileSelect}
        helper="Supported formats: JPG, PNG, WebP, GIF"
      />

      {/* Controls */}
      {imageSrc && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Aspect Ratio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Aspect Ratio
              </label>
              <select
                value={selectedAspectRatio || ''}
                onChange={(e) => setSelectedAspectRatio(e.target.value === '' ? null : parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                {aspectRatios.map((ratio) => (
                  <option key={ratio.label} value={ratio.value || ''}>
                    {ratio.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Output Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Output Format
              </label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="png">PNG (Best Quality)</option>
                <option value="jpeg">JPEG (Smaller Size)</option>
                <option value="webp">WebP (Modern)</option>
              </select>
            </div>
          </div>

          {/* Advanced Controls Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="mb-4"
          >
            {showAdvanced ? "Hide" : "Show"} Advanced Controls
          </Button>

          {/* Advanced Controls */}
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {/* Quality Slider (for JPEG/WebP) */}
              {outputFormat !== 'png' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Quality: {Math.round(quality * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={quality}
                    onChange={(e) => setQuality(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
                  />
                </div>
              )}

              {/* Rotation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rotation: {rotation}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={rotation}
                  onChange={(e) => setRotation(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
                />
              </div>
            </div>
          )}

          {/* Zoom Control */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Zoom: {Math.round(zoom * 100)}%
            </label>
            <input
              type="range"
              min={1}
              max={3}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleCrop} loading={loading} disabled={!croppedAreaPixels}>
              {loading ? "Cropping..." : "Crop Image"}
            </Button>
            
            <Button variant="outline" onClick={resetTool}>
              Reset Crop
            </Button>

            <Button variant="ghost" onClick={clearAll} className="text-red-600 hover:text-red-700 dark:text-red-400">
              Clear All
            </Button>
            
            {croppedImages.length > 0 && (
              <Button variant="secondary" onClick={handleDownloadAll}>
                Download All ({croppedImages.length})
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Cropper Interface */}
      {imageSrc && (
        <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={selectedAspectRatio}
            rotation={rotation}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            cropShape="rect"
            showGrid={true}
            style={{
              containerStyle: {
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
              },
            }}
          />
        </div>
      )}

      {/* Results Gallery */}
      {croppedImages.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Cropped Images ({croppedImages.length})
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {croppedImages.map((croppedImage) => (
              <div key={croppedImage.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={croppedImage.url}
                    alt="Cropped"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 space-y-1">
                  <div>Format: {croppedImage.format.toUpperCase()}</div>
                  <div>Size: {formatFileSize(croppedImage.size)}</div>
                  {croppedImage.aspectRatio && (
                    <div>Ratio: {aspectRatios.find(r => r.value === croppedImage.aspectRatio)?.label}</div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleDownload(croppedImage)}
                    className="flex-1"
                  >
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeCroppedImage(croppedImage.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    ×
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      {!imageSrc && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            How to use the Image Cropper:
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Upload an image using the file selector above</li>
            <li>• Choose your preferred aspect ratio (square, portrait, landscape, etc.)</li>
            <li>• Drag the crop area and adjust zoom to select the region</li>
            <li>• Use advanced controls for rotation and quality settings</li>
            <li>• Click "Crop Image" to generate the cropped version</li>
            <li>• Download individual images or all at once</li>
          </ul>
        </div>
      )}
    </div>
  );
}