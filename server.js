const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add banner to HTML content
function addBannerToHtml(content, isHeaderPage = false) {
  if (foobar) {
    const bannerHtml = `
      <div id="env-banner" style="background-color: #ff6b6b; color: white; text-align: center; padding: 10px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 1001;">
        Environment Variable Set: ${foobar}
      </div>
      <style>
        ${isHeaderPage ?
          `header.enhanced-header {
          top: 40px !important;
        }
        .page-breadcrumb {
          top: 40px !important;
        }` :
          `header {
          top: 40px !important;
        }`
        }
      </style>
    `;
    content = content.replace('</head>', `${bannerHtml}</head>`);
  }
  return content;
}

// Routes MUST come before static middleware
app.get('/', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  content = addBannerToHtml(content, true);
  res.send(content);
});

app.get('/index.html', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  content = addBannerToHtml(content, true);
  res.send(content);
});

app.get('/header.html', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  content = addBannerToHtml(content, true);
  res.send(content);
});

app.get('/team.html', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  content = addBannerToHtml(content, false);
  res.send(content);
});

// Serve other static files (CSS, JS, images, etc.) - AFTER specific routes
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});