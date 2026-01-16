/**
 * Hello World - Simple HTTP Server
 * NovaSphere Project
 * 
 * Run with: node hello-world-api.js
 * Access at: http://localhost:3000
 */

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

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
    
    // Route: Root
    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Hello World API - NovaSphere</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 50px auto;
                        padding: 20px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                    }
                    .container {
                        background: rgba(255, 255, 255, 0.1);
                        padding: 30px;
                        border-radius: 15px;
                        backdrop-filter: blur(10px);
                    }
                    h1 { margin-top: 0; }
                    code {
                        background: rgba(0, 0, 0, 0.3);
                        padding: 2px 6px;
                        border-radius: 3px;
                    }
                    a {
                        color: #ffd700;
                        text-decoration: none;
                    }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hello World API - NovaSphere</h1>
                    <p>Welcome to the Hello World HTTP Server!</p>
                    
                    <h2>Available Endpoints:</h2>
                    <ul>
                        <li><a href="/hello">/hello</a> - Simple hello message</li>
                        <li><a href="/hello?name=YourName">/hello?name=YourName</a> - Personalized greeting</li>
                        <li><a href="/api/hello">/api/hello</a> - JSON response</li>
                        <li><a href="/api/hello?name=YourName">/api/hello?name=YourName</a> - JSON with name</li>
                        <li><a href="/api/info">/api/info</a> - Server information</li>
                    </ul>
                    
                    <h2>Example Usage:</h2>
                    <pre><code>curl http://localhost:${PORT}/api/hello?name=Developer</code></pre>
                </div>
            </body>
            </html>
        `);
        return;
    }
    
    // Route: /hello
    if (pathname === '/hello' && req.method === 'GET') {
        const name = query.name || 'World';
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello ${name}!\nWelcome to NovaSphere`);
        return;
    }
    
    // Route: /api/hello
    if (pathname === '/api/hello' && req.method === 'GET') {
        const name = query.name || 'World';
        const response = {
            message: `Hello ${name}!`,
            timestamp: new Date().toISOString(),
            project: 'NovaSphere',
            version: '1.0.0'
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response, null, 2));
        return;
    }
    
    // Route: /api/info
    if (pathname === '/api/info' && req.method === 'GET') {
        const response = {
            server: 'Hello World API',
            project: 'NovaSphere',
            nodeVersion: process.version,
            platform: process.platform,
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            endpoints: [
                '/hello',
                '/hello?name=YourName',
                '/api/hello',
                '/api/hello?name=YourName',
                '/api/info'
            ]
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response, null, 2));
        return;
    }
    
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        error: 'Not Found',
        message: 'The requested endpoint does not exist',
        availableEndpoints: ['/', '/hello', '/api/hello', '/api/info']
    }, null, 2));
});

// Start server
server.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', '╔════════════════════════════════════════════╗');
    console.log('\x1b[36m%s\x1b[0m', '║                                            ║');
    console.log('\x1b[36m%s\x1b[0m', '║  Hello World API Server - NovaSphere       ║');
    console.log('\x1b[36m%s\x1b[0m', '║                                            ║');
    console.log('\x1b[36m%s\x1b[0m', '╚════════════════════════════════════════════╝');
    console.log('\x1b[32m%s\x1b[0m', `\n✓ Server running at http://localhost:${PORT}`);
    console.log('\x1b[33m%s\x1b[0m', '✓ Press Ctrl+C to stop\n');
    console.log('Available endpoints:');
    console.log(`  • http://localhost:${PORT}/`);
    console.log(`  • http://localhost:${PORT}/hello`);
    console.log(`  • http://localhost:${PORT}/api/hello`);
    console.log(`  • http://localhost:${PORT}/api/info`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n\x1b[33m%s\x1b[0m', 'Shutting down server...');
    server.close(() => {
        console.log('\x1b[32m%s\x1b[0m', '✓ Server closed');
        process.exit(0);
    });
});

module.exports = server;
