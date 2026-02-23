const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the landing page
app.get('/', (req, res) => {
  // Read the index.html file
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Internal Server Error');
    }
    
    // Check if NEXT_PUBLIC_FOOBAR is set
    const foobarSet = process.env.NEXT_PUBLIC_FOOBAR ? 'true' : 'false';
    
    // Inject the environment variable information into the HTML
    let modifiedHtml = data;
    
    // Add script to set window.NEXT_PUBLIC_FOOBAR
    modifiedHtml = modifiedHtml.replace('</head>', `
    <script>
      window.NEXT_PUBLIC_FOOBAR = ${foobarSet};
    </script>
  </head>`);
    
    // Set data attribute on the banner element
    modifiedHtml = modifiedHtml.replace(
      '<div id="foobar-banner" class="foobar-banner" style="display: none;">',
      `<div id="foobar-banner" class="foobar-banner" style="display: none;" data-foobar-set="${foobarSet}">`
    );
    
    res.send(modifiedHtml);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`NEXT_PUBLIC_FOOBAR is ${process.env.NEXT_PUBLIC_FOOBAR ? 'set' : 'not set'}`);
});