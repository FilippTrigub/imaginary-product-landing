#!/usr/bin/env node

/**
 * Hello World HTTP Server
 * NovaSphere Project
 * 
 * A simple HTTP server that serves "Hello World" responses
 */

const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Create HTTP server
const server = http.createServer((req, res) => {
    const url = req.url;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle different routes
    if (url === '/' || url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World Server</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        h1 { font-size: 3em; margin-bottom: 20px; }
        p { font-size: 1.2em; }
        .routes {
            margin-top: 30px;
            text-align: left;
            background: rgba(0, 0, 0, 0.2);
            padding: 20px;
            border-radius: 10px;
        }
        .routes a {
            color: #fff;
            text-decoration: none;
            display: block;
            padding: 5px 0;
        }
        .routes a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
        <p>Welcome to NovaSphere HTTP Server</p>
        <div class="routes">
            <strong>Available Routes:</strong><br>
            <a href="/">/</a>
            <a href="/hello">/hello</a>
            <a href="/api/hello">/api/hello</a>
            <a href="/api/greet?name=YourName">/api/greet?name=YourName</a>
            <a href="/json">/json</a>
        </div>
    </div>
</body>
</html>
        `);
    } else if (url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello World!',
            project: 'NovaSphere',
            timestamp: new Date().toISOString(),
            server: 'Node.js HTTP Server'
        }, null, 2));
    } else if (url === '/api/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            greeting: 'Hello World!',
            status: 'success'
        }));
    } else if (url.startsWith('/api/greet')) {
        const urlParams = new URL(url, `http://${req.headers.host}`);
        const name = urlParams.searchParams.get('name') || 'World';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            greeting: `Hello ${name}!`,
            status: 'success'
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start server
server.listen(PORT, HOST, () => {
    console.log('\x1b[36m%s\x1b[0m', '╔════════════════════════════════════════════╗');
    console.log('\x1b[36m%s\x1b[0m', '║   Hello World HTTP Server Started!        ║');
    console.log('\x1b[36m%s\x1b[0m', '╚════════════════════════════════════════════╝');
    console.log(`\n🚀 Server running at:`);
    console.log(`   Local:   http://localhost:${PORT}`);
    console.log(`   Network: http://${HOST}:${PORT}`);
    console.log(`\n📝 Available routes:`);
    console.log(`   /              - HTML Hello World page`);
    console.log(`   /hello         - HTML Hello World page`);
    console.log(`   /json          - JSON response`);
    console.log(`   /api/hello     - API endpoint`);
    console.log(`   /api/greet     - Personalized greeting`);
    console.log(`\n✨ Press Ctrl+C to stop the server\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n👋 Shutting down server...');
    server.close(() => {
        console.log('✓ Server closed');
        process.exit(0);
    });
});
