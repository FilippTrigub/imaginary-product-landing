#!/usr/bin/env node

/**
 * Hello World - HTTP Server
 * Simple Node.js server that serves Hello World
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
        // HTML response
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
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
        }
        .container {
            background: white;
            padding: 50px;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            text-align: center;
        }
        h1 {
            color: #667eea;
            font-size: 3em;
            margin: 0 0 20px 0;
        }
        p {
            color: #666;
            font-size: 1.2em;
        }
        .routes {
            margin-top: 30px;
            text-align: left;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
        }
        .routes h3 {
            color: #667eea;
            margin-top: 0;
        }
        .routes ul {
            list-style: none;
            padding: 0;
        }
        .routes li {
            padding: 8px 0;
        }
        .routes a {
            color: #667eea;
            text-decoration: none;
            font-weight: bold;
        }
        .routes a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World! 🌍</h1>
        <p>Welcome to the NovaSphere Hello World Server</p>
        <p>Server is running on port ${PORT}</p>
        
        <div class="routes">
            <h3>Available Routes:</h3>
            <ul>
                <li><a href="/">/</a> - This page</li>
                <li><a href="/hello">/hello</a> - Hello World HTML</li>
                <li><a href="/api/hello">/api/hello</a> - JSON response</li>
                <li><a href="/api/greet/YourName">/api/greet/:name</a> - Personalized greeting</li>
                <li><a href="/text">/text</a> - Plain text response</li>
            </ul>
        </div>
    </div>
</body>
</html>
        `);
    } else if (url === '/api/hello') {
        // JSON response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello World!',
            timestamp: new Date().toISOString(),
            server: 'NovaSphere Hello World Server',
            version: '1.0.0'
        }));
    } else if (url.startsWith('/api/greet/')) {
        // Dynamic greeting with name parameter
        const name = decodeURIComponent(url.split('/api/greet/')[1]);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: `Hello ${name}!`,
            timestamp: new Date().toISOString()
        }));
    } else if (url === '/text') {
        // Plain text response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    } else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>404 - Not Found</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f8f9fa;
        }
        h1 { color: #667eea; }
        a { color: #667eea; text-decoration: none; font-weight: bold; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The requested URL ${url} was not found on this server.</p>
    <p><a href="/">Go back to home</a></p>
</body>
</html>
        `);
    }
});

// Start server
server.listen(PORT, HOST, () => {
    console.log('\n╔════════════════════════════════════════════════╗');
    console.log('║   Hello World Server - NovaSphere Demo        ║');
    console.log('╚════════════════════════════════════════════════╝\n');
    console.log(`✓ Server running at http://${HOST}:${PORT}/`);
    console.log(`✓ Local access: http://localhost:${PORT}/`);
    console.log('\nAvailable endpoints:');
    console.log(`  • http://localhost:${PORT}/`);
    console.log(`  • http://localhost:${PORT}/hello`);
    console.log(`  • http://localhost:${PORT}/api/hello`);
    console.log(`  • http://localhost:${PORT}/api/greet/:name`);
    console.log(`  • http://localhost:${PORT}/text`);
    console.log('\nPress Ctrl+C to stop the server\n');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n✓ Server shutting down gracefully...');
    server.close(() => {
        console.log('✓ Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n\n✓ Server stopped by user');
    process.exit(0);
});
