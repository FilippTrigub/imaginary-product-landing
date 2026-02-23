const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const hasFoobar = !!process.env.NEXT_PUBLIC_FOOBAR;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NovaSphere Landing Page</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .banner {
          background-color: #4CAF50;
          color: white;
          padding: 12px;
          text-align: center;
          font-weight: 600;
        }

        .container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .content {
          text-align: center;
          color: white;
          max-width: 600px;
        }

        h1 {
          font-size: 3em;
          margin-bottom: 20px;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
        }

        p {
          font-size: 1.2em;
          line-height: 1.6;
          opacity: 0.95;
        }
      </style>
    </head>
    <body>
      ${hasFoobar ? '<div class="banner">✓ foobar is set</div>' : ''}
      <div class="container">
        <div class="content">
          <h1>🚀 NovaSphere</h1>
          <p>The Future of Personal Computing</p>
        </div>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Landing page running on http://localhost:${PORT}`);
});
