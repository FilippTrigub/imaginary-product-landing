const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Endpoint to check for environment variables
app.get('/check-env', (req, res) => {
  const showBanner = !!(process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR);
  res.json({ showBanner });
});

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'header.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
