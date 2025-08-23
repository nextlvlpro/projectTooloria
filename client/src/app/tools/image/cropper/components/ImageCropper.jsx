"use client";

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";

/**
 * Helper: create cropped image from crop area
 */
const getCroppedImage = (imageSrc, cropAreaPixels) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = cropAreaPixels.width;
      canvas.height = cropAreaPixels.height;
      const ctx = canvas.getContext("2d");

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

      canvas.toBlob((blob) => {
        if (!blob) return reject("Canvas is empty");
        resolve(new File([blob], "cropped.png", { type: "image/png" }));
      }, "image/png");
    };
    image.onerror = () => reject("Image load error");
  });
};

export default function ImageCropper() {
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFileSelect = (file) => {
    if (file) {
      setImageFile(file);
      setImageSrc(URL.createObjectURL(file));
      setCroppedImage(null);
    }
  };

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCrop = async () => {
    if (!imageSrc || !croppedAreaPixels) return;
    setLoading(true);
    try {
      const file = await getCroppedImage(imageSrc, croppedAreaPixels);
      setCroppedImage({
        file,
        url: URL.createObjectURL(file),
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Upload */}
      <FileUpload
        accept="image/*"
        multiple={false}
        label="Upload Image to Crop"
        onFileSelect={onFileSelect}
      />

      {/* Cropper */}
      {imageSrc && (
        <div className="relative w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1} // square crop, change as needed
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
      )}

      {/* Zoom Slider */}
      {imageSrc && (
        <input
          type="range"
          min={1}
          max={3}
          step={0.01}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-full"
        />
      )}

      {/* Crop Button */}
      {imageSrc && (
        <Button onClick={handleCrop} loading={loading}>
          {loading ? "Cropping..." : "Crop Image"}
        </Button>
      )}

      {/* Result */}
      {croppedImage && (
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold">Cropped Image</h2>
          <img
            src={croppedImage.url}
            alt="Cropped"
            className="mx-auto rounded shadow max-w-full"
          />
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = croppedImage.url;
              link.download = croppedImage.file.name;
              link.click();
            }}
          >
            Download Cropped Image
          </Button>
        </div>
      )}
    </div>
  );
}
