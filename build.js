const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log(`  ${src} -> ${dest}`);
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

// Clean dist
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true });
}
ensureDir(DIST);

console.log('Building NovaSphere static site...\n');

// Copy HTML files
const htmlFiles = ['index.html', 'header.html', 'team.html'];
for (const file of htmlFiles) {
  if (fs.existsSync(file)) {
    copyFile(file, path.join(DIST, file));
  }
}

// Copy CSS
copyFile('styles.css', path.join(DIST, 'styles.css'));

// Copy JS
const jsFiles = ['script.js', 'main.js'];
for (const file of jsFiles) {
  if (fs.existsSync(file)) {
    copyFile(file, path.join(DIST, file));
  }
}

// Copy images directory
if (fs.existsSync('images')) {
  copyDir('images', path.join(DIST, 'images'));
}

console.log('\nBuild complete! Output in dist/');
