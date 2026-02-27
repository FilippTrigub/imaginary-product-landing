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
    const envVarName = process.env.FOOBAR ? 'FOOBAR' : 'NEXT_PUBLIC_FOOBAR';
    const bannerHtml = `
      <div id="env-banner" style="background-color: #4CAF50; color: white; text-align: center; padding: 15px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 10000; box-shadow: 0 2px 10px rgba(0,0,0,0.2); font-family: 'Montserrat', sans-serif; font-size: 16px;">
        ✓ Environment Variable "${envVarName}" is set to: ${foobar}
      </div>
      <style>
        ${isHeaderPage ? 
          `header.enhanced-header {
          top: 55px !important;
        }
        .page-breadcrumb {
          margin-top: 55px;
        }
        body {
          padding-top: 55px;
        }` : 
          `header {
          top: 55px !important;
        }
        body {
          padding-top: 55px;
        }`
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
