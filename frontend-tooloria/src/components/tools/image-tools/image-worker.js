self.onmessage = async function (e) {
  const { file, width, height, maxSizeKB } = e.data;

  try {
    const bitmap = await createImageBitmap(file);
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bitmap, 0, 0, width, height);

    let quality = 0.9;
    let blob = await canvas.convertToBlob({ type: "image/jpeg", quality });
    const maxBytes = maxSizeKB * 1024;

    // Try to compress in loop until under max KB or quality too low
    while (blob.size > maxBytes && quality > 0.05) {
      quality -= 0.05;
      blob = await canvas.convertToBlob({ type: "image/jpeg", quality });
    }

    self.postMessage({ blob });
  } catch (err) {
    self.postMessage({ error: err.message });
  }
};
