"use client";

import { FileUpload, Button, Input } from "@/components/ui";
import PreviewImageResults from "@/components/ui/PreviewImageResults";
import { downloadImage, formatFileSize } from "@/utils/commonUtils";
import { resizeImage } from "@/utils/imageUtils";
import React, { useState, useCallback } from "react";

// Popular image sizes for different use cases (Updated with government research)
const POPULAR_SIZES = [
  // Form Filling & Documents (Based on official government specifications)

  // Travel Documents
  {
    name: "Indian Passport",
    width: 354,
    height: 472,
    category: "Form Filling",
    description: "45mm × 35mm - MEA requirements",
  },
  {
    name: "US Visa",
    width: 600,
    height: 600,
    category: "Form Filling",
    description: "600×600 to 1200×1200 px - Square format",
  },
  {
    name: "UK Visa",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35mm × 45mm - Light grey background",
  },
  {
    name: "Canada Visa",
    width: 420,
    height: 540,
    category: "Form Filling",
    description: "Min 420×540 px - White background",
  },
  {
    name: "Schengen Visa",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35mm × 45mm - Light grey background",
  },

  // National Identity Documents
  {
    name: "PAN Card (NSDL)",
    width: 276,
    height: 197,
    category: "Form Filling",
    description: "35mm × 25mm - Max 50KB",
  },
  {
    name: "PAN Card (UTI)",
    width: 213,
    height: 213,
    category: "Form Filling",
    description: "Square format - Max 30KB",
  },
  {
    name: "Driving License",
    width: 420,
    height: 525,
    category: "Form Filling",
    description: "35mm × 45mm - Sarathi Portal",
  },
  {
    name: "Aadhaar Size",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35mm × 45mm approx - White background",
  },

  // Government Job Applications
  {
    name: "UPSC Photo",
    width: 350,
    height: 350,
    category: "Form Filling",
    description: "Square 350×350 to 1000×1000 px",
  },
  {
    name: "SSC Photo",
    width: 200,
    height: 230,
    category: "Form Filling",
    description: "35mm × 45mm - Traditional format",
  },
  {
    name: "Banking Exam (IBPS)",
    width: 200,
    height: 230,
    category: "Form Filling",
    description: "200×230 px - White background",
  },

  // Entrance Examinations
  {
    name: "JEE Main (NTA)",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35mm × 45mm - White mandatory",
  },
  {
    name: "NEET Photo",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "Passport size - White background",
  },
  {
    name: "GATE Photo",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35mm × 45mm - Face 60-70%",
  },

  // Civil Documents
  {
    name: "Birth Certificate",
    width: 276,
    height: 276,
    category: "Form Filling",
    description: "35×35mm - Some applications",
  },
  {
    name: "Birth Certificate Alt",
    width: 350,
    height: 350,
    category: "Form Filling",
    description: "Square format - Other applications",
  },
  {
    name: "Caste Certificate",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35×45mm - State portals",
  },
  {
    name: "Ration Card",
    width: 197,
    height: 276,
    category: "Form Filling",
    description: "25×35mm - Individual photos",
  },
  {
    name: "Income Certificate",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35×45mm - Domicile docs",
  },

  // University & Insurance
  {
    name: "University Application",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "35mm × 45mm - UGC/NTA standards",
  },
  {
    name: "LIC Photo",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "Standard passport size",
  },
  {
    name: "Scholarship Portal",
    width: 276,
    height: 354,
    category: "Form Filling",
    description: "Passport size - NSP requirements",
  },

  // Social Media
  {
    name: "Instagram Post",
    width: 1080,
    height: 1080,
    category: "Social Media",
  },
  {
    name: "Instagram Story",
    width: 1080,
    height: 1920,
    category: "Social Media",
  },
  {
    name: "Facebook Cover",
    width: 1200,
    height: 630,
    category: "Social Media",
  },
  {
    name: "Facebook Post",
    width: 1200,
    height: 1200,
    category: "Social Media",
  },
  {
    name: "Twitter Header",
    width: 1500,
    height: 500,
    category: "Social Media",
  },
  {
    name: "LinkedIn Banner",
    width: 1584,
    height: 396,
    category: "Social Media",
  },
  { name: "WhatsApp DP", width: 500, height: 500, category: "Social Media" },

  // Job Posting Sites
  {
    name: "LinkedIn Profile Photo",
    width: 400,
    height: 400,
    category: "Job Sites",
  },
  {
    name: "Naukri.com Profile",
    width: 300,
    height: 300,
    category: "Job Sites",
  },
  {
    name: "Monster Profile Photo",
    width: 200,
    height: 200,
    category: "Job Sites",
  },
  {
    name: "Indeed Profile Photo",
    width: 300,
    height: 300,
    category: "Job Sites",
  },
  { name: "Resume Photo", width: 300, height: 400, category: "Job Sites" },
  {
    name: "Job Application Photo",
    width: 600,
    height: 600,
    category: "Job Sites",
  },

  // Wallpapers
  {
    name: "Mobile Wallpaper",
    width: 1080,
    height: 1920,
    category: "Wallpapers",
  },
  { name: "HD Desktop", width: 1920, height: 1080, category: "Wallpapers" },
  { name: "4K Desktop", width: 3840, height: 2160, category: "Wallpapers" },
  {
    name: "Tablet Wallpaper",
    width: 2048,
    height: 1536,
    category: "Wallpapers",
  },
  {
    name: "Laptop Wallpaper",
    width: 1366,
    height: 768,
    category: "Wallpapers",
  },
  { name: "Widescreen", width: 2560, height: 1440, category: "Wallpapers" },
];

const CATEGORIES = [
  "Form Filling",
  "Custom",
  "Social Media",
  "Job Sites",
  "Wallpapers",
];

export default function ImageResizer() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [resizeMode, setResizeMode] = useState("popular");
  const [selectedSize, setSelectedSize] = useState(POPULAR_SIZES[0]);
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [processedImages, setProcessedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Form Filling");
  const [previewImage, setPreviewImage] = useState(null);

  // Filter sizes by category
  const filteredSizes = POPULAR_SIZES.filter(
    (size) => size.category === selectedCategory
  );

  // Handle file selection - we need to accumulate files ourselves
  const handleFileSelect = useCallback((newFiles) => {
    const newFilesArray = !!newFiles
      ? Array.isArray(newFiles)
        ? newFiles
        : [newFiles]
      : [];

    setSelectedFiles(newFilesArray);
    setProcessedImages([]); // Clear previous results when new files are added
  }, []);

  // Handle clearing files
  const clearFiles = useCallback(() => {
    setSelectedFiles([]);
    setProcessedImages([]);
    // Force re-render of FileUpload by changing key
    setFileUploadKey((prev) => prev + 1);
  }, []);

  const [fileUploadKey, setFileUploadKey] = useState(0);


  // Process all selected images
  const handleResize = async () => {
    if (selectedFiles.length === 0) return;

    setProcessing(true);
    setProcessedImages([]);

    try {
      let targetWidth, targetHeight;

      if (resizeMode === "popular") {
        targetWidth = selectedSize.width;
        targetHeight = selectedSize.height;
      } else {
        targetWidth = parseInt(customWidth) || null;
        targetHeight = parseInt(customHeight) || null;

        if (!targetWidth && !targetHeight) {
          alert("Please enter at least one dimension (width or height)");
          setProcessing(false);
          return;
        }
      }

      const results = [];

      // Process each file in selectedFiles array
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const result = await resizeImage(file, targetWidth, targetHeight, maintainAspectRatio, resizeMode);
        results.push(result);
      }
      setProcessedImages(results);
    } catch (error) {
      console.error("Error resizing images:", error);
      alert("Error resizing images. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  // Download single image
 

  // Download all images as ZIP
  const downloadAll = async () => {
    if (processedImages.length === 0) return;

    try {
      // Create ZIP file using JSZip-like functionality (client-side implementation)
      const zip = {
        files: {},
        generate: function () {
          // Simple ZIP implementation for browser
          return this.files;
        },
      };

      // For now, let's download files individually with a delay
      // In a production app, you'd want to use JSZip library
      let downloadCount = 0;

      for (const result of processedImages) {
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = result.url;
          link.download = `resized_${result.original.name}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          downloadCount++;
          if (downloadCount === processedImages.length) {
            // Show completion message after all downloads
            setTimeout(() => {
              alert(`Successfully downloaded ${downloadCount} resized images!`);
            }, 1000);
          }
        }, 200 * downloadCount); // Stagger downloads by 200ms
      }
    } catch (error) {
      console.error("Error downloading files:", error);
      alert("Error downloading files. Please try downloading individually.");
    }
  };

  // Format file size


  // Close preview modal
  const closePreview = () => {
    setPreviewImage(null);
  };

  // Handle keyboard events for modal
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closePreview();
    }
  }, []);

  // Add event listener for escape key
  React.useEffect(() => {
    if (previewImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [previewImage, handleKeyDown]);

  return (
    <div className="space-y-8">
      {/* File Upload */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Upload Images
        </h2>

        <FileUpload
          key={fileUploadKey}
          multiple={true}
          accept="image/*"
          onFileSelect={handleFileSelect}
          placeholder="Drop image files here or click to browse"
          helper="Supports JPG, PNG, WebP, GIF. Multiple files will be added to selection."
          clearFileInstruction={clearFiles}
        />

        {/* Simple clear button if files are selected */}
      </div>

      {/* Size Selection */}
      {selectedFiles.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Choose Size
          </h2>

          {/* Mode Selection */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setResizeMode("popular")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                resizeMode === "popular"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Popular Sizes
            </button>
            <button
              onClick={() => {
                setResizeMode("custom");
                setSelectedCategory("Custom");
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                resizeMode === "custom"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Custom Size
            </button>
          </div>

          {/* Popular Sizes */}
          {resizeMode === "popular" && (
            <div>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-4">
                {CATEGORIES.filter((cat) => cat !== "Custom").map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>

              {/* Size Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredSizes.map((size, index) => (
                  <button
                    key={`${size.name}-${size.width}x${size.height}-${index}`}
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      selectedSize === size
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                        : "border-gray-200 dark:border-gray-600 hover:border-primary-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {size.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {size.width} × {size.height}
                    </div>
                    {size.description && (
                      <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {size.description}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Custom Size */}
          {resizeMode === "custom" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Width (pixels)"
                  type="number"
                  placeholder="e.g. 1920"
                  value={customWidth}
                  onChange={(e) => setCustomWidth(e.target.value)}
                />
                <Input
                  label="Height (pixels)"
                  type="number"
                  placeholder="e.g. 1080"
                  value={customHeight}
                  onChange={(e) => setCustomHeight(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="aspect-ratio"
                  checked={maintainAspectRatio}
                  onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="aspect-ratio"
                  className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  Maintain aspect ratio (recommended)
                </label>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400">
                💡 Leave one dimension empty to auto-calculate based on aspect
                ratio
              </div>
            </div>
          )}
        </div>
      )}

      {/* Process Button */}
      {selectedFiles.length > 0 && (
        <div className="text-center">
          <Button
            onClick={handleResize}
            loading={processing}
            size="lg"
            className="px-8"
          >
            {processing
              ? "Resizing Images..."
              : `Resize ${selectedFiles.length} Image${
                  selectedFiles.length > 1 ? "s" : ""
                }`}
          </Button>
        </div>
      )}

      {/* Results */}
      {processedImages.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Resized Images ({processedImages.length})
            </h2>
            {processedImages.length > 1 && (
              <div className="flex gap-2">
                <Button
                  onClick={downloadAll}
                  variant="primary"
                  leftIcon={
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  }
                >
                  Download All ({processedImages.length})
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {processedImages.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={result.url}
                      alt={result.original.name}
                      className="w-16 h-16 object-cover rounded border cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setPreviewImage(result)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20 rounded">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {result.original.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {result.originalSize.width}×{result.originalSize.height} →{" "}
                      {result.newSize.width}×{result.newSize.height}+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {formatFileSize(result.original.size)} →{" "}
                      {formatFileSize(result.resized.size)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setPreviewImage(result)}
                    variant="ghost"
                    size="sm"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Preview
                  </Button>
                  <Button
                    onClick={() => downloadImage(result)}
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

      {/* Preview Modal */}
      <PreviewImageResults previewImage={previewImage} closePreview={closePreview} />
    </div>
  );
}
