const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const SHOW_BANNER = process.env.FOOBAR !== undefined;

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles.css', express.static(path.join(__dirname, 'styles.css')));
app.use('/script.js', express.static(path.join(__dirname, 'script.js')));

// Banner HTML to inject
const bannerHTML = `
<div id="foobar-banner" style="
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  padding: 15px 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  position: relative;
  z-index: 9999;
">
  🎉 FOOBAR Environment Variable is Active! 🎉
</div>
`;

// Middleware to inject banner into HTML responses
function injectBanner(htmlContent) {
  if (!SHOW_BANNER) return htmlContent;
  
  // Inject banner right after opening <body> tag
  return htmlContent.replace(/<body([^>]*)>/, `<body$1>${bannerHTML}`);
}

// Serve HTML files with banner injection
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    res.send(injectBanner(data));
  });
});

app.get('/team.html', (req, res) => {
  const filePath = path.join(__dirname, 'team.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    res.send(injectBanner(data));
  });
});

app.get('/header.html', (req, res) => {
  const filePath = path.join(__dirname, 'header.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    res.send(injectBanner(data));
  });
});

app.listen(PORT, () => {
  console.log(`🚀 NovaSphere server running on http://localhost:${PORT}`);
  if (SHOW_BANNER) {
    console.log('✅ FOOBAR banner is ENABLED');
  } else {
    console.log('ℹ️  FOOBAR banner is disabled (set FOOBAR env var to enable)');
  }
});
