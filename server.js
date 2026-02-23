const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));

// Render landing page with foobar banner if env var is set
app.get('/', (req, res) => {
  const foobarBanner = process.env.NEXT_PUBLIC_FOOBAR
    ? '<div style="background-color: #ffd700; padding: 15px; text-align: center; font-weight: bold; margin-bottom: 20px;">✓ foobar is set</div>'
    : '';

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NovaSphere - Landing Page</title>
      <link rel="stylesheet" href="styles.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          color: #333;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 20px rgba(0,0,0,0.15);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .hero {
          padding: 60px 20px;
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .hero h1 {
          font-size: 2.5em;
          margin: 0 0 20px 0;
        }
        .hero p {
          font-size: 1.2em;
          opacity: 0.9;
        }
        .content {
          padding: 60px 20px;
        }
        .footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 20px;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      ${foobarBanner}
      <div class="header">
        <div class="container">
          <h1>NovaSphere v2</h1>
        </div>
      </div>

      <div class="hero">
        <div class="container">
          <h1>Welcome to NovaSphere</h1>
          <p>A modern landing page built with Express.js</p>
        </div>
      </div>

      <div class="content">
        <div class="container">
          <h2>About NovaSphere</h2>
          <p>This is a simple npm app that serves a landing page. It detects the NEXT_PUBLIC_FOOBAR environment variable and displays a banner if it's set.</p>
        </div>
      </div>

      <div class="footer">
        <div class="container">
          <p>&copy; 2025 NovaSphere Inc. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`NovaSphere landing page listening at http://localhost:${port}`);
});
