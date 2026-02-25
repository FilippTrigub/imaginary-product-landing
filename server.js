const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Function to inject environment variable into HTML content
function addEnvVarToHtml(content) {
  // Inject environment variable check into the page
  const envScript = `
    <script>
      // Environment variables exposed from server
      const NEXT_PUBLIC_FOOBAR = ${foobar ? `'${foobar}'` : 'null'};
      const FOOBAR = ${foobar ? `'${foobar}'` : 'null'};
    </script>
  `;
  content = content.replace('</head>', `${envScript}</head>`);
  return content;
}

// Route for the main page
app.get('/', (req, res) => {
  // Read the header.html file
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');

  // Add environment variables if set
  content = addEnvVarToHtml(content);

  res.send(content);
});

// Route for team page
app.get('/team.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');

  // Add environment variables if set
  content = addEnvVarToHtml(content);

  res.send(content);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});