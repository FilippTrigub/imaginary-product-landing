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
            opacity: 0.9;
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
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
        code {
            background: rgba(0, 0, 0, 0.3);
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌍 Hello World Server</h1>
        <p>Welcome to the Hello World HTTP Server!</p>
        <p>Server is running on Node.js ${process.version}</p>
        
        <div class="endpoints">
            <h3>Available Endpoints:</h3>
            <div class="endpoint">
                <code>GET /</code> - This page
            </div>
            <div class="endpoint">
                <code>GET /hello</code> - <a href="/hello">Plain text Hello World</a>
            </div>
            <div class="endpoint">
                <code>GET /json</code> - <a href="/json">JSON Hello World</a>
            </div>
            <div class="endpoint">
                <code>GET /api/greet/:name</code> - <a href="/api/greet/NovaSphere">Personalized greeting</a>
            </div>
            <div class="endpoint">
                <code>GET /time</code> - <a href="/time">Current server time</a>
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
    
    // Log request
    console.log(`${new Date().toISOString()} - ${req.method} ${pathname}`);
    
    // Route handling
    if (pathname === '/' || pathname === '/index.html') {
        // Home page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlResponse);
        
    } else if (pathname === '/hello') {
        // Plain text Hello World
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
        
    } else if (pathname === '/json') {
        // JSON Hello World
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello World!',
            timestamp: new Date().toISOString(),
            server: 'Node.js Hello World Server',
            version: process.version
        }, null, 2));
        
    } else if (pathname.startsWith('/api/greet/')) {
        // Personalized greeting
        const name = pathname.split('/api/greet/')[1] || 'World';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            greeting: `Hello ${decodeURIComponent(name)}!`,
            timestamp: new Date().toISOString()
        }, null, 2));
        
    } else if (pathname === '/time') {
        // Current time
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Server Time</title>
                <style>
                    body {
                        font-family: monospace;
                        background: #1a1a1a;
                        color: #00ff00;
                        padding: 40px;
                        text-align: center;
                    }
                    h1 { font-size: 3em; }
                    p { font-size: 1.5em; }
                </style>
            </head>
            <body>
                <h1>⏰ Server Time</h1>
                <p>${new Date().toLocaleString()}</p>
                <p>Unix Timestamp: ${Date.now()}</p>
            </body>
            </html>
        `);
        
    } else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 Not Found</title>
                <style>
                    body {
                        font-family: sans-serif;
                        background: #1a1a1a;
                        color: #ff4444;
                        padding: 40px;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>404 - Not Found</h1>
                <p>The requested path "${pathname}" was not found.</p>
                <p><a href="/" style="color: #4444ff;">Go back home</a></p>
            </body>
            </html>
        `);
    }
});

// Start server
server.listen(PORT, HOST, () => {
    console.log('\x1b[36m%s\x1b[0m', '='.repeat(60));
    console.log('\x1b[32m%s\x1b[0m', '🚀 Hello World Server Started!');
    console.log('\x1b[36m%s\x1b[0m', '='.repeat(60));
    console.log(`\x1b[33mServer running at:\x1b[0m http://${HOST}:${PORT}/`);
    console.log(`\x1b[33mNode Version:\x1b[0m ${process.version}`);
    console.log(`\x1b[33mPlatform:\x1b[0m ${process.platform}`);
    console.log('\x1b[36m%s\x1b[0m', '='.repeat(60));
    console.log('\x1b[90mPress Ctrl+C to stop the server\x1b[0m\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n\x1b[33m⚠ SIGTERM received, shutting down gracefully...\x1b[0m');
    server.close(() => {
        console.log('\x1b[32m✓ Server closed\x1b[0m');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n\x1b[33m⚠ SIGINT received, shutting down gracefully...\x1b[0m');
    server.close(() => {
        console.log('\x1b[32m✓ Server closed\x1b[0m');
        process.exit(0);
    });
});
