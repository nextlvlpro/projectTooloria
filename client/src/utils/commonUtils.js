export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const downloadImage = (result) => {
  const link = document.createElement("a");
  link.href = result.url;
  link.download = `resized_${result.original.name}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


export const fileNameShortener = (fileName) => {
  if (fileName.length <= 20) return fileName;
  return `${fileName.slice(0, 10)}...${fileName.slice(-10)}`;
};


