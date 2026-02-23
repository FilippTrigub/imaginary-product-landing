const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const foobarBanner = process.env.NEXT_PUBLIC_FOOBAR
      ? '<div style="background: #4CAF50; color: white; padding: 15px; text-align: center; font-weight: bold;">foobar is set</div>'
      : '';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .content {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      background: white;
      border-radius: 10px;
      padding: 60px 40px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      text-align: center;
      max-width: 600px;
      width: 100%;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
      font-size: 2.5em;
    }
    p {
      color: #666;
      font-size: 1.1em;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 5px;
      transition: transform 0.3s ease;
      border: none;
      font-size: 1em;
      cursor: pointer;
    }
    .button:hover {
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  ${foobarBanner}
  <div class="content">
    <div class="container">
      <h1>Welcome to NovaSphere</h1>
      <p>Your landing page is ready to go. This is a simple, clean landing page built with Node.js and served with a basic HTTP server.</p>
      <button class="button" onclick="alert('Welcome!')">Get Started</button>
    </div>
  </div>
</body>
</html>`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Landing page server is running at http://localhost:${PORT}`);
});
