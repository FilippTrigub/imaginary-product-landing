#!/usr/bin/env node

/**
 * Hello World - HTTP Server
 * NovaSphere Project
 * 
 * Run with: node hello-world-server.js
 * Visit: http://localhost:3000
 */

const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// HTML content for Hello World page
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World Server - NovaSphere</title>
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
            padding: 20px;
        }
        
        .container {
            background: white;
            padding: 60px 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 600px;
            animation: fadeIn 0.6s ease-out;
        }
        
        h1 {
            color: #667eea;
            font-size: 3.5em;
            margin-bottom: 20px;
            animation: slideDown 0.8s ease-out;
        }
        
        p {
            color: #666;
            font-size: 1.3em;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        
        .info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-top: 30px;
            text-align: left;
        }
        
        .info h3 {
            color: #764ba2;
            margin-bottom: 15px;
        }
        
        .info ul {
            list-style: none;
            padding-left: 0;
        }
        
        .info li {
            padding: 8px 0;
            color: #555;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .info li:last-child {
            border-bottom: none;
        }
        
        .badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            margin-top: 20px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌐 Hello World!</h1>
        <p>Welcome to the NovaSphere Hello World Server</p>
        <p>This page is served by a Node.js HTTP server</p>
        
        <div class="info">
            <h3>Server Information</h3>
            <ul>
                <li><strong>Server:</strong> Node.js HTTP Server</li>
                <li><strong>Port:</strong> ${PORT}</li>
                <li><strong>Status:</strong> Running ✓</li>
                <li><strong>Project:</strong> NovaSphere</li>
                <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
            </ul>
        </div>
        
        <span class="badge">Powered by Node.js</span>
    </div>
</body>
</html>
`;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Log request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    
    // Handle different routes
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    } else if (req.url === '/api/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello World!',
            project: 'NovaSphere',
            timestamp: new Date().toISOString(),
            status: 'success'
        }));
    } else if (req.url === '/api/greet' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            greeting: 'Hello World from NovaSphere!',
            version: '1.0.0'
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});

// Start server
server.listen(PORT, HOST, () => {
    console.log('\n╔════════════════════════════════════════════════════╗');
    console.log('║                                                    ║');
    console.log('║     🚀 Hello World Server Started!                ║');
    console.log('║                                                    ║');
    console.log('╚════════════════════════════════════════════════════╝\n');
    console.log(`  Server running at: http://localhost:${PORT}/`);
    console.log(`  API endpoint:      http://localhost:${PORT}/api/hello`);
    console.log(`  Greet endpoint:    http://localhost:${PORT}/api/greet`);
    console.log('\n  Press Ctrl+C to stop the server\n');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n\nShutting down server gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n\nShutting down server gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
