#!/usr/bin/env node

/**
 * Hello World HTTP Server
 * A simple Node.js HTTP server that responds with "Hello, World!"
 * Run with: node hello-server.js
 * Then visit: http://localhost:3000
 */

const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Create the server
const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('X-Powered-By', 'NovaSphere');
    
    // Handle different routes
    if (req.url === '/') {
        res.statusCode = 200;
        res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World Server</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            text-align: center;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }
        h1 { font-size: 48px; margin: 0 0 20px 0; }
        p { font-size: 18px; margin: 10px 0; }
        .links { margin-top: 30px; }
        a {
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            margin: 0 10px;
            display: inline-block;
            transition: background 0.3s;
        }
        a:hover { background: rgba(255, 255, 255, 0.3); }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌟 Hello, World! 🌟</h1>
        <p>Welcome to the NovaSphere Hello World Server</p>
        <p>Server is running on port ${PORT}</p>
        <div class="links">
            <a href="/api">API Endpoint</a>
            <a href="/json">JSON Response</a>
            <a href="/about">About</a>
        </div>
    </div>
</body>
</html>
        `);
    } else if (req.url === '/api') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World! This is the API endpoint.');
    } else if (req.url === '/json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            message: 'Hello, World!',
            server: 'NovaSphere Hello Server',
            timestamp: new Date().toISOString(),
            version: '1.0.0'
        }, null, 2));
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About - Hello World Server</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        h1 { color: #667eea; }
        .back { margin-top: 20px; }
        a { color: #667eea; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>About This Server</h1>
    <p>This is a simple Hello World HTTP server built with Node.js.</p>
    <p>It demonstrates basic HTTP server functionality and routing.</p>
    <p><strong>Created for:</strong> NovaSphere Project</p>
    <div class="back">
        <a href="/">← Back to Home</a>
    </div>
</body>
</html>
        `);
    } else {
        res.statusCode = 404;
        res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 - Not Found</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
        }
        h1 { color: #e74c3c; font-size: 72px; margin: 0; }
        p { font-size: 24px; color: #666; }
        a { color: #667eea; text-decoration: none; }
    </style>
</head>
<body>
    <h1>404</h1>
    <p>Page not found</p>
    <a href="/">Go Home</a>
</body>
</html>
        `);
    }
    
    // Log the request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode}`);
});

// Start the server
server.listen(PORT, HOST, () => {
    console.log('='.repeat(60));
    console.log('  🌟 Hello World Server Started! 🌟');
    console.log('='.repeat(60));
    console.log(`  Server running at http://${HOST}:${PORT}/`);
    console.log(`  Local access: http://localhost:${PORT}/`);
    console.log('');
    console.log('  Available routes:');
    console.log('    - http://localhost:' + PORT + '/');
    console.log('    - http://localhost:' + PORT + '/api');
    console.log('    - http://localhost:' + PORT + '/json');
    console.log('    - http://localhost:' + PORT + '/about');
    console.log('');
    console.log('  Press Ctrl+C to stop the server');
    console.log('='.repeat(60));
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM, shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n\nReceived SIGINT, shutting down gracefully...');
    server.close(() => {
        console.log('Server closed. Goodbye!');
        process.exit(0);
    });
});
