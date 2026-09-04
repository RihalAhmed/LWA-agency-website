const fs = require('fs');
const path = require('path');
const sharp = require('d:/Antigravity/The Luxury Watch Agency/node_modules/sharp');

const rootDir = 'd:/Antigravity/The Luxury Watch Agency';
const appDir = path.join(rootDir, 'app');
const publicDir = path.join(rootDir, 'public');

// Read the original icon.svg
const rawSvg = fs.readFileSync(path.join(appDir, 'icon.svg'), 'utf8');
const innerSvg = rawSvg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');

// 1:1 Square 512x512 SVG with luxury radial black background and centered gold crown emblem
// The inner SVG is 163x128. Scaling by 2.454 gives 400x314.1.
// Centered at X=(512-400)/2 = 56, Y=(512-314.1)/2 = 98.95 ≈ 99.
const squareSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="luxury_bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#14110b"/>
      <stop offset="65%" stop-color="#050505"/>
      <stop offset="100%" stop-color="#000000"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" fill="url(#luxury_bg)"/>
  <g transform="translate(56, 99) scale(2.454)">
    ${innerSvg}
  </g>
</svg>`;

// Function to convert raw RGBA pixels to Windows DIB for ICO format
async function pngToDib(pngBuf, width, height) {
  const { data } = await sharp(pngBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const andRowSize = Math.ceil(width / 32) * 4;
  const andMaskSize = andRowSize * height;
  const xorSize = width * height * 4;
  
  const dibHeader = Buffer.alloc(40);
  dibHeader.writeUInt32LE(40, 0); // biSize
  dibHeader.writeInt32LE(width, 4); // biWidth
  dibHeader.writeInt32LE(height * 2, 8); // biHeight (doubled for ICO)
  dibHeader.writeUInt16LE(1, 12); // biPlanes
  dibHeader.writeUInt16LE(32, 14); // biBitCount
  dibHeader.writeUInt32LE(0, 16); // biCompression = BI_RGB
  dibHeader.writeUInt32LE(xorSize + andMaskSize, 20); // biSizeImage
  dibHeader.writeInt32LE(0, 24); // biXPelsPerMeter
  dibHeader.writeInt32LE(0, 28); // biYPelsPerMeter
  dibHeader.writeUInt32LE(0, 32); // biClrUsed
  dibHeader.writeUInt32LE(0, 36); // biClrImportant

  const xorData = Buffer.alloc(xorSize);
  for (let y = 0; y < height; y++) {
    const srcRow = y;
    const dstRow = height - 1 - y; // bottom-up
    for (let x = 0; x < width; x++) {
      const srcIdx = (srcRow * width + x) * 4;
      const dstIdx = (dstRow * width + x) * 4;
      xorData[dstIdx] = data[srcIdx + 2];     // Blue
      xorData[dstIdx + 1] = data[srcIdx + 1]; // Green
      xorData[dstIdx + 2] = data[srcIdx];     // Red
      xorData[dstIdx + 3] = data[srcIdx + 3]; // Alpha
    }
  }
  const andMask = Buffer.alloc(andMaskSize, 0);
  return Buffer.concat([dibHeader, xorData, andMask]);
}

// Build standard multi-size .ico file
async function buildIco(sizes, baseSvgBuf) {
  const images = [];
  for (const size of sizes) {
    const pngBuf = await sharp(baseSvgBuf).resize(size, size).png().toBuffer();
    const dibBuf = await pngToDib(pngBuf, size, size);
    images.push({ size, dibBuf });
  }

  let offset = 6 + images.length * 16;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(images.length, 4); // Count

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 0);
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.dibBuf.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    entries.push(entry);
    offset += img.dibBuf.length;
  }

  return Buffer.concat([header, ...entries, ...images.map(i => i.dibBuf)]);
}

async function main() {
  console.log('Generating comprehensive favicon suite...');
  const svgBuf = Buffer.from(squareSvg);

  // 1. Generate ICO containing 16x16, 32x32, 48x48
  const icoBuf = await buildIco([16, 32, 48], svgBuf);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuf);
  console.log('Created favicon.ico in /public and /app (16, 32, 48px)');

  // 2. Generate PNG sizes
  const sizes = [
    { name: 'icon-48x48.png', size: 48 },
    { name: 'icon-96x96.png', size: 96 },
    { name: 'icon-144x144.png', size: 144 },
    { name: 'icon-192x192.png', size: 192 },
    { name: 'icon-512x512.png', size: 512 },
    { name: 'icon.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const item of sizes) {
    const outBuf = await sharp(svgBuf).resize(item.size, item.size).png({ compressionLevel: 9 }).toBuffer();
    fs.writeFileSync(path.join(publicDir, item.name), outBuf);
    console.log(`Created public/${item.name} (${item.size}x${item.size})`);
  }

  // Also write app/icon.png and app/apple-icon.png for Next.js App Router conventions
  const icon512 = await sharp(svgBuf).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon512);
  const apple180 = await sharp(svgBuf).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), apple180);
  console.log('Created app/icon.png and app/apple-icon.png');

  // Update app/icon.svg to be 1:1 square
  fs.writeFileSync(path.join(appDir, 'icon.svg'), squareSvg);
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), squareSvg);
  console.log('Updated app/icon.svg and public/icon.svg to square 1:1 (512x512)');

  // 3. Create public/site.webmanifest
  const manifest = {
    name: "The Luxury Watch Agency",
    short_name: "LWA",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    start_url: "/"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Created public/site.webmanifest');

  console.log('All favicon assets generated successfully!');
}

main().catch(console.error);
