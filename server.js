const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Check for environment variables
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Route for the main page
app.get('/', (req, res) => {
  // Read the header.html file
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  
  // Replace the placeholder with actual environment variable value
  if (foobar) {
    content = content.replace('{{ENV_VAR_VALUE}}', foobar);
  }
  
  res.send(content);
});

// Route for team page
app.get('/team.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  
  res.send(content);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (foobar) {
    console.log(`Environment variable detected: ${foobar}`);
  }
});
