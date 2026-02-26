const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add banner to HTML content
function addBannerToHtml(content, isHeaderPage = false) {
  if (foobar) {
    const bannerHtml = `
      <div id="env-banner" style="background-color: #4CAF50; color: white; text-align: center; padding: 15px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 1001; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
        🔔 Environment Variable Active: FOOBAR="${foobar}"
      </div>
      <style>
        ${isHeaderPage ?
          `header.enhanced-header {
          top: 50px !important;
        }
        .page-breadcrumb {
          top: 50px !important;
        }` :
          `header {
          top: 50px !important;
        }`
        }
        body {
          padding-top: 50px;
        }
      </style>
    `;
    content = content.replace('</head>', `${bannerHtml}</head>`);
  }
  return content;
}

// Route for the main page
app.get('/', (req, res) => {
  // Read the header.html file
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  
  // Add banner if environment variable is set
  content = addBannerToHtml(content, true);
  
  res.send(content);
});

// Route for team page
app.get('/team.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  
  // Add banner if environment variable is set
  content = addBannerToHtml(content, false);
  
  res.send(content);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});