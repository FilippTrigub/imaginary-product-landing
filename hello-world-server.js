#!/usr/bin/env node

/**
 * Hello World HTTP Server
 * A simple web server that serves Hello World in various formats
 */

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// HTML template for Hello World
const htmlResponse = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World Server</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }
        .container {
            text-align: center;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            max-width: 600px;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            margin: 10px 0;
        }
        .endpoints {
            margin-top: 30px;
            text-align: left;
            background: rgba(0, 0, 0, 0.2);
            padding: 20px;
            border-radius: 10px;
        }
        .endpoint {
            margin: 10px 0;
            padding: 10px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
        }
        a {
            color: #ffd700;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Hello World Server</h1>
        <p>Welcome to the NovaSphere Hello World HTTP Server!</p>
        <p>Server is running on port ${PORT}</p>
        
        <div class="endpoints">
            <h3>Available Endpoints:</h3>
            <div class="endpoint">
                <strong>GET /</strong> - This page
            </div>
            <div class="endpoint">
                <strong>GET /hello</strong> - Plain text Hello World
            </div>
            <div class="endpoint">
                <strong>GET /json</strong> - JSON Hello World
            </div>
            <div class="endpoint">
                <strong>GET /api/greet/:name</strong> - Personalized greeting
            </div>
            <div class="endpoint">
                <strong>GET /time</strong> - Hello World with timestamp
            </div>
        </div>
    </div>
</body>
</html>
`;

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // Route handling
    if (pathname === '/' || pathname === '/index.html') {
        // HTML response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlResponse);
        
    } else if (pathname === '/hello') {
        // Plain text response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
        
    } else if (pathname === '/json') {
        // JSON response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello World!',
            server: 'NovaSphere Hello World Server',
            timestamp: new Date().toISOString(),
            version: '1.0.0'
        }));
        
    } else if (pathname.startsWith('/api/greet/')) {
        // Personalized greeting
        const name = pathname.split('/api/greet/')[1] || 'World';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            greeting: `Hello ${decodeURIComponent(name)}!`,
            timestamp: new Date().toISOString()
        }));
        
    } else if (pathname === '/time') {
        // Hello World with time
        const now = new Date();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head>
                    <title>Hello World - Time</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            text-align: center;
                        }
                        h1 { font-size: 3em; }
                        p { font-size: 1.5em; }
                    </style>
                </head>
                <body>
                    <div>
                        <h1>Hello World! 🌍</h1>
                        <p>Current time: ${now.toLocaleString()}</p>
                        <p>Timestamp: ${now.getTime()}</p>
                    </div>
                </body>
            </html>
        `);
        
    } else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: 'Not Found',
            message: 'The requested endpoint does not exist',
            availableEndpoints: ['/', '/hello', '/json', '/api/greet/:name', '/time']
        }));
    }
    
    // Log request
    console.log(`[${new Date().toISOString()}] ${req.method} ${pathname} - ${res.statusCode}`);
});

// Start server
server.listen(PORT, HOST, () => {
    console.log('\x1b[36m%s\x1b[0m', '='.repeat(60));
    console.log('\x1b[32m%s\x1b[0m', '🚀 Hello World Server Started!');
    console.log('\x1b[36m%s\x1b[0m', '='.repeat(60));
    console.log(`\x1b[33mServer running at:\x1b[0m http://${HOST}:${PORT}/`);
    console.log(`\x1b[33mLocal access:\x1b[0m http://localhost:${PORT}/`);
    console.log('\x1b[36m%s\x1b[0m', '='.repeat(60));
    console.log('\x1b[32mAvailable endpoints:\x1b[0m');
    console.log(`  GET  /              - HTML Hello World page`);
    console.log(`  GET  /hello         - Plain text Hello World`);
    console.log(`  GET  /json          - JSON Hello World`);
    console.log(`  GET  /api/greet/:name - Personalized greeting`);
    console.log(`  GET  /time          - Hello World with timestamp`);
    console.log('\x1b[36m%s\x1b[0m', '='.repeat(60));
    console.log('\x1b[90mPress Ctrl+C to stop the server\x1b[0m\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n\x1b[33mReceived SIGTERM, shutting down gracefully...\x1b[0m');
    server.close(() => {
        console.log('\x1b[32m✓ Server closed\x1b[0m');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n\x1b[33mReceived SIGINT, shutting down gracefully...\x1b[0m');
    server.close(() => {
        console.log('\x1b[32m✓ Server closed\x1b[0m');
        process.exit(0);
    });
});

module.exports = server;
