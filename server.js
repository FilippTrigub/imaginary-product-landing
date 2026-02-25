const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Load environment variables

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Handle the main page
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }

      // Check for environment variables
      const hasEnvVar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
      
      // Insert the environment variable information into the HTML
      let processedHtml = data;
      
      if (hasEnvVar) {
        // Replace the hidden class from banner if we detect the env variable
        processedHtml = processedHtml.replace(
          'id="env-banner" class="env-banner hidden"',
          'id="env-banner" class="env-banner"'
        );
      } else {
        // Optionally add the 'hidden' class if it's not already there
        processedHtml = processedHtml.replace(
          'id="env-banner" class="env-banner"',
          'id="env-banner" class="env-banner hidden"'
        );
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(processedHtml);
    });
  }
  // Handle CSS files
  else if (req.url.endsWith('.css')) {
    const filePath = path.join(__dirname, req.url.substring(1));
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  }
  // Handle image files
  else if (req.url.startsWith('/images/')) {
    const filePath = path.join(__dirname, req.url.substring(1));
    const ext = path.extname(filePath);
    const contentType = {
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif'
    }[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  }
  // Handle JavaScript files
  else if (req.url.endsWith('.js')) {
    const filePath = path.join(__dirname, req.url.substring(1));
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(data);
    });
  }
  // Default fallback
  else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Environment variables:');
  console.log('- FOOBAR:', process.env.FOOBAR ? 'SET' : 'NOT SET');
  console.log('- NEXT_PUBLIC_FOOBAR:', process.env.NEXT_PUBLIC_FOOBAR ? 'SET' : 'NOT SET');
});