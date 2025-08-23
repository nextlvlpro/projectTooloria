import { downloadImage, formatFileSize } from '@/utils/commonUtils'
import React from 'react'
import { Button } from './Button'

export default function PreviewImageResults({previewImage, closePreview}) {
    console.log(previewImage);
    
  return (
   <>
        {previewImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              onClick={closePreview}
              variant="error"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>

            {/* Image Comparison */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-6xl max-h-[90vh] overflow-auto">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {previewImage.original.name}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Click and drag to compare • Press ESC to close
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Original Image */}
                <div className="text-center">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Original
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                    <img
                      src={URL.createObjectURL(previewImage.original)}
                      alt="Original"
                      className="max-w-full max-h-96 mx-auto rounded shadow-md"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <div className="font-medium">
                      {previewImage?.originalSize?.width} ×{" "}
                      {previewImage?.originalSize?.height} pixels
                    </div>
                    <div>
                      File size: {formatFileSize(previewImage.original.size)}
                    </div>
                  </div>
                </div>

                {/* Resized Image */}
                <div className="text-center">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Resized
                  </h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                    <img
                      src={previewImage.url}
                      alt="Resized"
                      className="max-w-full max-h-96 mx-auto rounded shadow-md"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <div className="font-medium">
                      {previewImage?.newSize?.width || previewImage?.originalSize?.width} ×{" "}
                      {previewImage?.newSize?.height || previewImage?.originalSize?.height} pixels
                    </div>
                    <div>
                      File size: {formatFileSize(previewImage?.resized?.size)}
                    </div>
                    <div className="text-green-600 dark:text-green-400">
                      {previewImage?.resized?.size < previewImage?.original?.size
                        ? `${Math.round(
                            (1 -
                              previewImage.resized.size /
                                previewImage.original.size) *
                              100
                          )}% smaller`
                        : `${Math.round(
                            (previewImage?.resized?.size /
                              previewImage?.original?.size -
                              1) *
                              100
                          )}% larger`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <Button
                  onClick={() => downloadImage(previewImage)}
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
                  Download Resized Image
                </Button>
                <Button onClick={closePreview} variant="outline">
                  Close Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
   </>
  )
}
