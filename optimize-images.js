import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = './src/assets';
const OUTPUT_DIR = './src/assets/optimized';
const PRODUCT_DIRS = ['products', 'hero', 'clients', 'bog'];
const MAX_WIDTH = 800; // Maximum width for product images
const QUALITY = 80; // Image quality (0-100)

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Process all images in the specified directories
async function processImages() {
  console.log('Starting image optimization...');
  
  for (const dir of PRODUCT_DIRS) {
    const dirPath = path.join(ASSETS_DIR, dir);
    const outputDirPath = path.join(OUTPUT_DIR, dir);
    
    // Skip if directory doesn't exist
    if (!fs.existsSync(dirPath)) {
      console.log(`Directory ${dirPath} doesn't exist, skipping...`);
      continue;
    }
    
    // Create output directory
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }
    
    // Process all images in the directory
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const outputFilePath = path.join(outputDirPath, file.replace(/\.\w+$/, '.webp'));
      
      // Skip directories
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      // Skip non-image files
      if (!/\.(png|jpg|jpeg|gif|webp|avif)$/i.test(file)) {
        continue;
      }
      
      try {
        // Get image info
        const metadata = await sharp(filePath).metadata();
        const width = Math.min(metadata.width, MAX_WIDTH);
        
        // Optimize and save image
        await sharp(filePath)
          .resize(width) // Resize to max width while maintaining aspect ratio
          .webp({ quality: QUALITY }) // Convert to WebP format
          .toFile(outputFilePath);
        
        // Get size information
        const originalSize = fs.statSync(filePath).size;
        const optimizedSize = fs.statSync(outputFilePath).size;
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
        
        console.log(`Optimized: ${file} (${reduction}% reduction) [${(originalSize/1024/1024).toFixed(2)}MB → ${(optimizedSize/1024/1024).toFixed(2)}MB]`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
  
  console.log('Image optimization complete!');
}

processImages().catch(console.error); 