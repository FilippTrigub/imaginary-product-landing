const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add banner and red circle to HTML content
function addBannerToHtml(content, isHeaderPage = false) {
  const circleHtml = `
    <div id="red-circle" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; background-color: red; border-radius: 50%; z-index: 999; box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);"></div>
  `;

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
    content = content.replace('</head>', `${bannerHtml}${circleHtml}</head>`);
  } else {
    content = content.replace('</head>', `${circleHtml}</head>`);
  }
  return content;
}

// Custom handler for HTML files to add banner and circle
app.get('/:file.html', (req, res) => {
  const filePath = path.join(__dirname, req.params.file + '.html');

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const isHeaderPage = content.includes('enhanced-header');
    content = addBannerToHtml(content, isHeaderPage);
    res.type('html').send(content);
  } catch (err) {
    res.status(404).send('File not found');
  }
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});