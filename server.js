const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files but exclude HTML files so routes can handle them
app.use((req, res, next) => {
  // Skip static serving for HTML files and redirect them to route handlers
  if (req.path.endsWith('.html')) {
    return next();
  }
  express.static(path.join(__dirname))(req, res, next);
});

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add banner and red circle to HTML content
function addBannerToHtml(content, isHeaderPage = false) {
  let additions = '';

  if (foobar) {
    additions += `
      <div id="env-banner" style="background-color: #ff6b6b; color: white; text-align: center; padding: 10px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 1001;">
        Environment Variable Set: ${foobar}
      </div>`;
  }

  // Add the red circle
  additions += `
    <div id="red-circle" style="position: fixed; width: 200px; height: 200px; background-color: red; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 999;"></div>`;

  if (foobar) {
    additions += `
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
      </style>`;
  }

  content = content.replace('</head>', `${additions}</head>`);
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

// Route for header.html
app.get('/header.html', (req, res) => {
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