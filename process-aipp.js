import sharp from 'sharp';
import fs from 'fs';

const file = { src: 'src/assets/AIPP.png', dest: 'src/assets/AIPP.webp' };

async function processImage() {
  if (!fs.existsSync(file.src)) {
    console.log(`File not found: ${file.src}`);
    return;
  }

  console.log(`Processing ${file.src}...`);

  const image = sharp(file.src);
  const { width, height } = await image.metadata();

  // Get raw pixel data
  const buffer = await image
    .ensureAlpha()
    .raw()
    .toBuffer();

  // Simple "remove white background" algorithm
  let changed = 0;
  for (let i = 0; i < buffer.length; i += 4) {
    const r = buffer[i];
    const g = buffer[i + 1];
    const b = buffer[i + 2];
    
    // Threshold for white.
    if (r > 230 && g > 230 && b > 230) {
      buffer[i + 3] = 0; // Set Alpha to 0 (transparent)
      changed++;
    }
  }
  console.log(`Made ${changed} pixels transparent.`);

  await sharp(buffer, { raw: { width, height, channels: 4 } })
    .webp()
    .toFile(file.dest);

  console.log(`Saved to ${file.dest}`);
}

processImage().catch(console.error);
