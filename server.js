const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

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

// Route for the main page (must come before static middleware)
app.get('/', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  content = addBannerToHtml(content, true);
  res.send(content);
});

// Route for header.html
app.get('/header.html', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  content = addBannerToHtml(content, true);
  res.send(content);
});

// Route for team page
app.get('/team.html', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  content = addBannerToHtml(content, false);
  res.send(content);
});

// Serve static files (must come after routes)
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});