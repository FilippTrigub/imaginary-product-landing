const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add banner and red circle to HTML content
function addBannerAndCircleToHtml(content, isHeaderPage = false) {
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

  // Add red circle to the body
  const circleHtml = `
    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; background-color: red; border-radius: 50%; z-index: 999;"></div>
  `;
  content = content.replace('</body>', `${circleHtml}</body>`);

  return content;
}

// Middleware to intercept HTML requests and inject content
app.use((req, res, next) => {
  const originalSend = res.send;

  res.send = function(data) {
    if (typeof data === 'string' && data.includes('</body>')) {
      // This is HTML content
      const isHeaderPage = req.path === '/' || req.path === '/header.html';
      data = addBannerAndCircleToHtml(data, isHeaderPage);
    }
    return originalSend.call(this, data);
  };

  next();
});

// Route for the main page
app.get('/', (req, res) => {
  // Read the header.html file
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  res.send(content);
});

// Route for header.html
app.get('/header.html', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  res.send(content);
});

// Route for team.html
app.get('/team.html', (req, res) => {
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  res.send(content);
});

// Serve static files (images, CSS, JS, etc.)
app.use(express.static(path.join(__dirname), {
  ignore: ['*.html']
}));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});