// utils/imageUtils.js

/**
 * Resize an image using canvas
 * @param {File} file - The image file to resize
 * @param {number} targetWidth - Desired width (px)
 * @param {number} targetHeight - Desired height (px)
 * @param {boolean} maintainAspectRatio - Whether to preserve aspect ratio
 * @param {string} resizeMode - "custom" or "popular"
 */
export function resizeImage(file, targetWidth, targetHeight, maintainAspectRatio = true, resizeMode = "custom") {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      img.onload = () => {
        let { width, height } = img;
  
        // Maintain aspect ratio if required
        if (maintainAspectRatio && resizeMode === "custom") {
          const aspectRatio = width / height;
          if (targetWidth && !targetHeight) {
            targetHeight = Math.round(targetWidth / aspectRatio);
          } else if (targetHeight && !targetWidth) {
            targetWidth = Math.round(targetHeight * aspectRatio);
          } else if (targetWidth && targetHeight) {
            const widthRatio = targetWidth / width;
            const heightRatio = targetHeight / height;
            const ratio = Math.min(widthRatio, heightRatio);
            targetWidth = Math.round(width * ratio);
            targetHeight = Math.round(height * ratio);
          }
        }
  
        canvas.width = targetWidth;
        canvas.height = targetHeight;
  
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
  
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject("Canvas toBlob failed");
            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
  
            resolve({
              original: file,
              resized: resizedFile,
              originalSize: { width, height },
              newSize: { width: targetWidth, height: targetHeight },
              url: URL.createObjectURL(blob),
            });
          },
          file.type,
          0.9
        );
      };
  
      img.onerror = () => reject("Image load error");
      img.src = URL.createObjectURL(file);
    });
  }




  import Compressor from "compressorjs";

  
  
  /**
   * Get dimensions + size of an image File/Blob
   */
  export const getImageDimensions = (fileOrBlob) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height, size: fileOrBlob.size });
      };
      img.src = URL.createObjectURL(fileOrBlob);
    });
  };
  
  /**
   * Compress an image to a target KB using Compressor.js
   * - Preserves width/height
   * - Iteratively reduces quality until target size reached
   */
  export const compressImage = (file, targetKB) => {
    return new Promise((resolve, reject) => {
      let quality = 0.9;
  
      const tryCompress = () => {
        new Compressor(file, {
          quality,
          mimeType: "image/jpeg", // always export as jpeg for best compression
          convertSize: Infinity,
          success: async (result) => {
            const originalDims = await getImageDimensions(file);
            const newDims = await getImageDimensions(result);
  
            if (result.size / 1024 <= targetKB || quality <= 0.1) {
              resolve({
                original: file,
                resized: result,
                url: URL.createObjectURL(result),
                originalSize: originalDims,
                newSize: newDims,
              });
            } else {
              quality -= 0.1;
              tryCompress();
            }
          },
          error(err) {
            reject(err);
          },
        });
      };
  
      tryCompress();
    });
  };
  
  /**
   * Compress multiple images at once
   */
  export const compressImages = async (files, targetKB) => {
    const results = [];
    for (const file of files) {
      const compressed = await compressImage(file, targetKB);
      results.push(compressed);
    }
    return results;
  };
  
  