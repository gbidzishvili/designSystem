/// <reference lib="webworker" />
import imageCompression from 'browser-image-compression';


// Helper function to convert base64 to Blob

addEventListener("message", async ({ data }: any) => {
  try {
    // stop thread for 5s
    const start = Date.now();
  while (Date.now() - start < 2000) {}
    const options = {
      maxSizeMB: 1, 
      maxWidthOrHeight: 200, 
      useWebWorker: false 
    };
    const base64 = data.bytes;
    const blob = await fetch(base64).then(res => res.blob());
    const file = new File([blob], "paint.png", { type: blob.type });
    const compressedFile = await imageCompression(file, options);
    const reader = new FileReader();
    reader.onloadend = () => {
      postMessage(reader.result?.toString()); 
    };
    reader.readAsDataURL(compressedFile);
  } catch (error) {
    console.error('Error compressing image:', error);
    postMessage(null); 
  }
});