const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create images directory in dist
const imagesDistDir = path.join(distDir, 'images');
if (!fs.existsSync(imagesDistDir)) {
  fs.mkdirSync(imagesDistDir, { recursive: true });
}

// Copy files
const filesToCopy = [
  'index.html',
  'header.html',
  'team.html',
  'styles.css',
  'script.js',
  'main.js'
];

console.log('Building static site...');

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file}`);
  } else {
    console.log(`⚠ Warning: ${file} not found, skipping`);
  }
});

// Copy images
const imagesDir = path.join(__dirname, 'images');
if (fs.existsSync(imagesDir)) {
  const images = fs.readdirSync(imagesDir);
  images.forEach(image => {
    const src = path.join(imagesDir, image);
    const dest = path.join(imagesDistDir, image);
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied images/${image}`);
  });
}

console.log('\n✓ Build complete! Static files are in the dist/ directory');
