export function resizeAndCompressWithCanvas(file, width, height, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            resolve({ blob, url });
          } else {
            reject(new Error('Canvas blob creation failed'));
          }
        },
        'image/jpeg', // Or 'image/png'
        quality // 0.0 - 1.0
      );
    };

    img.onerror = (err) => reject(err);
    reader.onerror = (err) => reject(err);

    reader.readAsDataURL(file);
  });
}
