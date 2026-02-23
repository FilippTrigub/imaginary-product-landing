const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const hasFoobar = process.env.NEXT_PUBLIC_FOOBAR ? 'true' : 'false';

    const html = `<!DOCTYPE html>
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
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }

        .banner {
            background-color: #ff6b6b;
            color: white;
            padding: 20px;
            text-align: center;
            font-weight: 600;
            font-size: 18px;
        }

        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
        }

        header h1 {
            font-size: 48px;
            margin-bottom: 10px;
        }

        header p {
            font-size: 18px;
            opacity: 0.9;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        .landing-section {
            text-align: center;
            margin-bottom: 60px;
        }

        .landing-section h2 {
            font-size: 36px;
            margin-bottom: 20px;
            color: #667eea;
        }

        .landing-section p {
            font-size: 18px;
            color: #666;
            margin-bottom: 20px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 40px;
            border-radius: 30px;
            border: none;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            display: inline-block;
            text-decoration: none;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 20px rgba(102, 126, 234, 0.6);
        }

        footer {
            background-color: #333;
            color: white;
            padding: 30px 20px;
            text-align: center;
            margin-top: 60px;
        }
    </style>
</head>
<body>
    ${hasFoobar === 'true' ? '<div class="banner">⚡ foobar is set</div>' : ''}

    <header>
        <h1>NovaSphere</h1>
        <p>The Future of Personal Computing</p>
    </header>

    <div class="container">
        <div class="landing-section">
            <h2>Welcome to NovaSphere</h2>
            <p>Experience the next generation of computing with our holographic interfaces and advanced technologies. Bringing the future to your fingertips today.</p>
            <button class="btn-primary">Get Started</button>
        </div>

        <div class="landing-section">
            <h2>Why Choose NovaSphere?</h2>
            <p>We combine cutting-edge technology with intuitive design to create an unparalleled computing experience. From advanced AI integration to seamless cloud connectivity, NovaSphere is built for the future.</p>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 NovaSphere Inc. All rights reserved.</p>
    </footer>
</body>
</html>`;

    res.end(html);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
