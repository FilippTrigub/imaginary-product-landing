const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

const envPayload = {
  FOOBAR: process.env.FOOBAR || '',
  NEXT_PUBLIC_FOOBAR: process.env.NEXT_PUBLIC_FOOBAR || ''
};

function injectEnvVars(content) {
  const envScript = `\n<script>window.FOOBAR=${JSON.stringify(envPayload.FOOBAR)};window.NEXT_PUBLIC_FOOBAR=${JSON.stringify(envPayload.NEXT_PUBLIC_FOOBAR)};</script>\n`;
  return content.replace('</head>', `${envScript}</head>`);
}

// Route for the main page
app.get('/', (req, res) => {
  // Read the header.html file
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  
  content = injectEnvVars(content);
  
  res.send(content);
});

// Route for team page
app.get('/team.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  
  content = injectEnvVars(content);
  
  res.send(content);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
