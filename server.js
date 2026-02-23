const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const foobarBanner = process.env.NEXT_PUBLIC_FOOBAR
    ? '<div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center; font-weight: bold;">foobar is set</div>'
    : '';

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NovaSphere - Landing Page</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          text-align: center;
          color: white;
          padding: 40px;
        }
        h1 {
          font-size: 3em;
          margin: 0 0 20px 0;
        }
        p {
          font-size: 1.2em;
          margin: 0;
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      ${foobarBanner}
      <div class="container">
        <h1>NovaSphere</h1>
        <p>Welcome to the NovaSphere landing page</p>
      </div>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}/\`);
});
