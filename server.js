const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to add environment variables to HTML content
function addEnvVarsToHtml(content) {
  if (foobar) {
    const envScript = `
      <script>
        window.ENV_FOOBAR = '${foobar.replace(/'/g, "\\'")}';
        window.ENV_NEXT_PUBLIC_FOOBAR = '${foobar.replace(/'/g, "\\'")}';
      </script>
    `;
    content = content.replace('</head>', `${envScript}</head>`);
  }
  return content;
}

// Route for the main page
app.get('/', (req, res) => {
  // Read the header.html file
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');

  // Add environment variables if set
  content = addEnvVarsToHtml(content);

  res.send(content);
});

// Route for team page
app.get('/team.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');

  // Add environment variables if set
  content = addEnvVarsToHtml(content);

  res.send(content);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});