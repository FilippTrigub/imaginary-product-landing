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
      <div id="env-banner" style="background-color: #ff6b6b; color: white; text-align: center; padding: 14px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 1001; font-size: 1.1em; letter-spacing: 0.5px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
        &#9888; Environment Variable Set: ${foobar}
      </div>
      <style>
        ${isHeaderPage ? 
          `header.enhanced-header {
          top: 44px !important;
        }
        .page-breadcrumb {
          top: 44px !important;
        }` : 
          `header {
          top: 44px !important;
        }`
        }
      </style>
    `;
    content = content.replace('<body>', `<body>${bannerHtml}`);
  }
  return content;
}

// Route for the main page
app.get('/', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  content = addBannerToHtml(content, true);
  res.send(content);
});

// Route for header.html (so banner injection works instead of static serving)
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

// Serve static files (after explicit routes so banner injection works)
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
