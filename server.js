const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Check if FOOBAR or NEXT_PUBLIC_FOOBAR is set
const foobarValue = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

// Custom middleware to inject banner for HTML files
app.use((req, res, next) => {
  // Only intercept HTML file requests
  if (req.path === '/' || req.path.endsWith('.html')) {
    const filePath = req.path === '/' ? path.join(__dirname, 'index.html') : path.join(__dirname, req.path);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return next();
      }

      // Inject banner if environment variable is set
      if (foobarValue) {
        const banner = `<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 20px; text-align: center; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.2);">🌟 Environment Variable Active: FOOBAR = <strong>${foobarValue}</strong></div>`;
        data = data.replace('<body>', '<body>' + banner);
      }

      res.type('text/html').send(data);
    });
  } else {
    next();
  }
});

// Serve static files for other assets
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  if (foobarValue) {
    console.log(`Environment variable FOOBAR is set to: ${foobarValue}`);
  }
});
