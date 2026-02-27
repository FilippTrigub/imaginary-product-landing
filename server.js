const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add banner and red circle to HTML content
function addBannerToHtml(content, isHeaderPage = false) {
  let injectedHtml = '';
  
  // Add banner if environment variable is set
  if (foobar) {
    injectedHtml += `
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
  }
  
  // Add red circle styling and element
  injectedHtml += `
    <style>
      .big-red-circle {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background-color: #ff0000;
        border-radius: 50%;
        z-index: 999;
        box-shadow: 0 10px 40px rgba(255, 0, 0, 0.3);
      }
    </style>
  `;
  
  if (injectedHtml) {
    content = content.replace('</head>', `${injectedHtml}</head>`);
  }
  
  // Add the red circle element to the body
  const circleElement = `
    <div class="big-red-circle"></div>
  `;
  content = content.replace('<body>', `<body>${circleElement}`);
  
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
