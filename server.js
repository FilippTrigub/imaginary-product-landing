const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (but don't serve index.html automatically for /)
app.use(express.static(path.join(__dirname), {
  index: false
}));

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
console.log('Environment variables - FOOBAR:', process.env.FOOBAR, 'NEXT_PUBLIC_FOOBAR:', process.env.NEXT_PUBLIC_FOOBAR, 'Final foobar:', foobar);

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
        }
        .red-circle {
          top: calc(50% + 20px) !important;
        }` :
          `header {
          top: 40px !important;
        }
        .red-circle {
          top: calc(50% + 20px) !important;
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
  console.log('Processing / route, foobar:', foobar);
  content = addBannerToHtml(content, true);
  console.log('Content after adding banner includes env-banner:', content.includes('env-banner'));

  res.send(content);
});

// Route for header.html directly
app.get('/header.html', (req, res) => {
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