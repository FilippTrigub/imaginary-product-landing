const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add banner and red circle to HTML content
function addBannerToHtml(content, isHeaderPage = false) {
  let additions = '';
  
  // Add banner if environment variable is set
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
    additions += bannerHtml;
  }
  
  // Add red circle
  const redCircleHtml = `
    <div id="red-circle" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; background-color: #ff0000; border-radius: 50%; z-index: 999; pointer-events: none;"></div>
  `;
  additions += redCircleHtml;
  
  if (additions) {
    content = content.replace('</head>', `${additions}</head>`);
  }
  
  return content;
}

// Route for index.html
app.get('/index.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  
  // Add banner and red circle
  content = addBannerToHtml(content, false);
  
  res.send(content);
});

// Route for the main page (redirects to header.html)
app.get('/', (req, res) => {
  // Read the header.html file
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  
  // Add banner and red circle
  content = addBannerToHtml(content, true);
  
  res.send(content);
});

// Route for header.html
app.get('/header.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  
  // Add banner and red circle
  content = addBannerToHtml(content, true);
  
  res.send(content);
});

// Route for team page
app.get('/team.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  
  // Add banner and red circle
  content = addBannerToHtml(content, false);
  
  res.send(content);
});

// Serve static files (after routes to allow route handlers to take precedence)
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});