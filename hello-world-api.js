/**
 * Hello World - Simple HTTP Server
 * NovaSphere API Demo
 * 
 * Run with: node hello-world-api.js
 * Then visit: http://localhost:3000
 */

const http = require('http');
const url = require('url');

const PORT = 3000;
const HOST = 'localhost';

// API endpoints
const routes = {
    '/': handleHome,
    '/api/hello': handleHelloAPI,
    '/api/greet': handleGreetAPI,
    '/api/time': handleTimeAPI,
    '/api/info': handleInfoAPI
};

// Route handlers
function handleHome(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                .endpoint {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 15px;
                    margin: 10px 0;
                    border-radius: 8px;
                }
                code {
                    background: rgba(0, 0, 0, 0.3);
                    padding: 2px 6px;
                    border-radius: 3px;
                }
                a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: bold;
                }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🌐 Hello World API Server</h1>
                <p>Welcome to the NovaSphere Hello World API Demo!</p>
                
                <h2>Available Endpoints:</h2>
                
                <div class="endpoint">
                    <strong>GET <a href="/api/hello">/api/hello</a></strong>
                    <p>Returns a simple "Hello World" JSON response</p>
                </div>
                
                <div class="endpoint">
                    <strong>GET <a href="/api/greet?name=YourName">/api/greet?name=YourName</a></strong>
                    <p>Returns a personalized greeting. Try: <a href="/api/greet?name=Developer">/api/greet?name=Developer</a></p>
                </div>
                
                <div class="endpoint">
                    <strong>GET <a href="/api/time">/api/time</a></strong>
                    <p>Returns the current server time</p>
                </div>
                
                <div class="endpoint">
                    <strong>GET <a href="/api/info">/api/info</a></strong>
                    <p>Returns server and Node.js information</p>
                </div>
                
                <h2>Example Usage:</h2>
                <pre><code>fetch('/api/hello')
  .then(res => res.json())
  .then(data => console.log(data));</code></pre>
            </div>
        </body>
        </html>
    `);
}

function handleHelloAPI(req, res) {
    const response = {
        message: 'Hello World!',
        status: 'success',
        timestamp: new Date().toISOString(),
        project: 'NovaSphere'
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
}

function handleGreetAPI(req, res) {
    const queryParams = url.parse(req.url, true).query;
    const name = queryParams.name || 'World';
    
    const response = {
        greeting: `Hello, ${name}!`,
        name: name,
        status: 'success',
        timestamp: new Date().toISOString()
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
}

function handleTimeAPI(req, res) {
    const now = new Date();
    
    const response = {
        timestamp: now.toISOString(),
        unix: Math.floor(now.getTime() / 1000),
        formatted: now.toLocaleString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        status: 'success'
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
}

function handleInfoAPI(req, res) {
    const response = {
        server: 'Hello World API Server',
        project: 'NovaSphere',
        version: '1.0.0',
        node: {
            version: process.version,
            platform: process.platform,
            architecture: process.arch
        },
        uptime: process.uptime(),
        memory: {
            used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ' MB',
            total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + ' MB'
        },
        status: 'success'
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
}

function handle404(req, res) {
    const response = {
        error: 'Not Found',
        message: `The endpoint ${req.url} does not exist`,
        status: 'error',
        availableEndpoints: Object.keys(routes)
    };
    
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response, null, 2));
}

// Create server
const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // Parse URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Route request
    const handler = routes[pathname] || handle404;
    handler(req, res);
    
    // Log request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
});

// Start server
server.listen(PORT, HOST, () => {
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║     Hello World API Server - NovaSphere Demo          ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    console.log(`🚀 Server running at http://${HOST}:${PORT}/`);
    console.log(`📡 API endpoints available at http://${HOST}:${PORT}/api/`);
    console.log('\nPress Ctrl+C to stop the server\n');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n👋 Shutting down server gracefully...');
    server.close(() => {
        console.log('✓ Server closed');
        process.exit(0);
    });
});

module.exports = server;
