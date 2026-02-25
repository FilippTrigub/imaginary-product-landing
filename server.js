const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const SHOW_BANNER = process.env.FOOBAR !== undefined;

// Middleware to inject banner if FOOBAR env var is set
app.use((req, res, next) => {
  if (SHOW_BANNER && req.path.endsWith('.html')) {
    const originalSend = res.send;
    res.send = function(data) {
      if (typeof data === 'string' && data.includes('</body>')) {
        const bannerHTML = `
          <div id="env-banner" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
            color: white;
            padding: 12px 20px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideDown 0.3s ease-out;
          ">
            🚀 FOOBAR Environment Variable is Set: ${process.env.FOOBAR || 'true'}
          </div>
          <style>
            @keyframes slideDown {
              from {
                transform: translateY(-100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
            body {
              padding-top: 48px !important;
            }
          </style>
        `;
        data = data.replace('</body>', bannerHTML + '</body>');
      }
      originalSend.call(this, data);
    };
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Default route to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 NovaSphere server running on http://localhost:${PORT}`);
  if (SHOW_BANNER) {
    console.log(`📢 Banner enabled - FOOBAR=${process.env.FOOBAR}`);
  } else {
    console.log(`ℹ️  Banner disabled - FOOBAR not set`);
  }
});
