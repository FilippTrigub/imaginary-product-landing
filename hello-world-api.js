/**
 * Hello World - Simple HTTP Server
 * NovaSphere API Demo
 * 
 * Run with: node hello-world-api.js
 * Then visit: http://localhost:3000
 */

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

// Hello World API endpoints
const routes = {
    '/': handleHome,
    '/api/hello': handleHelloAPI,
    '/api/greet': handleGreetAPI,
    '/api/time': handleTimeAPI,
    '/health': handleHealth
};

function handleHome(req, res) {
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
                .endpoint {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 15px;
                    margin: 10px 0;
                    border-radius: 8px;
                }
                a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: bold;
                }
                a:hover { text-decoration: underline; }
                code {
                    background: rgba(0, 0, 0, 0.3);
                    padding: 2px 6px;
                    border-radius: 3px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🌐 Hello World API</h1>
                <p>Welcome to the NovaSphere Hello World API Server!</p>
                
                <h2>Available Endpoints:</h2>
                
                <div class="endpoint">
                    <strong>GET <a href="/api/hello">/api/hello</a></strong>
                    <p>Returns a simple Hello World JSON response</p>
                </div>
                
                <div class="endpoint">
                    <strong>GET <a href="/api/greet?name=NovaSphere">/api/greet?name=YourName</a></strong>
                    <p>Returns a personalized greeting</p>
                </div>
                
                <div class="endpoint">
                    <strong>GET <a href="/api/time">/api/time</a></strong>
                    <p>Returns current server time with greeting</p>
                </div>
                
                <div class="endpoint">
                    <strong>GET <a href="/health">/health</a></strong>
                    <p>Health check endpoint</p>
                </div>
                
                <h2>Example Usage:</h2>
                <code>curl http://localhost:${PORT}/api/hello</code>
            </div>
        </body>
        </html>
    `);
}

function handleHelloAPI(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: 'Hello World!',
        service: 'NovaSphere API',
        timestamp: new Date().toISOString()
    }, null, 2));
}

function handleGreetAPI(req, res) {
    const queryParams = url.parse(req.url, true).query;
    const name = queryParams.name || 'World';
    const language = queryParams.lang || 'en';
    
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo',
        it: 'Ciao'
    };
    
    const greeting = greetings[language] || greetings.en;
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        greeting: `${greeting} ${name}!`,
        language: language,
        timestamp: new Date().toISOString()
    }, null, 2));
}

function handleTimeAPI(req, res) {
    const now = new Date();
    const hour = now.getHours();
    let timeGreeting;
    
    if (hour < 12) {
        timeGreeting = 'Good Morning';
    } else if (hour < 18) {
        timeGreeting = 'Good Afternoon';
    } else {
        timeGreeting = 'Good Evening';
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        message: `${timeGreeting}, World!`,
        time: now.toISOString(),
        localTime: now.toLocaleString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }, null, 2));
}

function handleHealth(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        status: 'healthy',
        message: 'Hello World API is running!',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    }, null, 2));
}

function handle404(req, res) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        error: 'Not Found',
        message: 'The requested endpoint does not exist',
        availableEndpoints: Object.keys(routes)
    }, null, 2));
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
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    
    // Route request
    const handler = routes[pathname] || handle404;
    handler(req, res);
    
    // Log request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
});

// Start server
server.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🚀 Hello World API Server Started!');
    console.log('='.repeat(60));
    console.log(`Server running at: http://localhost:${PORT}`);
    console.log(`\nAvailable endpoints:`);
    Object.keys(routes).forEach(route => {
        console.log(`  - http://localhost:${PORT}${route}`);
    });
    console.log('\nPress Ctrl+C to stop the server');
    console.log('='.repeat(60));
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n\nShutting down gracefully...');
    server.close(() => {
        console.log('Server closed. Goodbye!');
        process.exit(0);
    });
});
