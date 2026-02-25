import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Get environment variables
const foobarValue = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
const showBanner = !!foobarValue;

// MIME types mapping
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
};

// Banner HTML to inject
const bannerHtml = `
<div id="env-banner" style="background-color: #FFD700; color: #000; padding: 15px; text-align: center; font-weight: bold; border-bottom: 2px solid #FFA500;">
  ⚠️ Environment Variable Set: FOOBAR = ${foobarValue}
</div>
`;

// Inject banner into HTML
function injectBanner(htmlContent) {
  if (!showBanner) return htmlContent;

  // Find the body tag and inject banner after it
  const bodyMatch = htmlContent.match(/<body[^>]*>/i);
  if (bodyMatch) {
    const bodyTag = bodyMatch[0];
    return htmlContent.replace(bodyTag, bodyTag + bannerHtml);
  }

  return htmlContent;
}

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'header.html' : req.url);

  // Ensure we don't go outside the app directory
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  // Check if it's a directory, serve index.html or header.html
  try {
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'header.html');
    }
  } catch {
    // File doesn't exist, continue
  }

  // Get file extension
  const ext = path.extname(filePath).toLowerCase();
  const mimeType = mimeTypes[ext] || 'application/octet-stream';

  try {
    let content = fs.readFileSync(filePath);

    // For HTML files, inject the banner if env var is set
    if (ext === '.html') {
      content = injectBanner(content.toString());
    }

    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - File Not Found');
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Server Error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  if (showBanner) {
    console.log(`✓ Banner enabled: FOOBAR = "${foobarValue}"`);
  } else {
    console.log('✓ Banner disabled: No FOOBAR or NEXT_PUBLIC_FOOBAR environment variable');
  }
});
