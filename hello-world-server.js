#!/usr/bin/env node

/**
 * Hello World HTTP Server
 * NovaSphere Demo - Simple web server that serves Hello World
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
            color: white;
        }
        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 60px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        h1 {
            font-size: 4em;
            margin-bottom: 20px;
            animation: pulse 2s infinite;
        }
        p {
            font-size: 1.3em;
            margin-bottom: 10px;
        }
        .info {
            margin-top: 30px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            font-size: 0.9em;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌍 Hello World! 🚀</h1>
        <p>Welcome to the NovaSphere Hello World Server</p>
        <p>This page is served by a Node.js HTTP server</p>
        <div class="info">
            <p><strong>Server Info:</strong></p>
            <p>Port: ${PORT}</p>
            <p>Node Version: ${process.version}</p>
            <p>Platform: ${process.platform}</p>
            <p>Timestamp: ${new Date().toISOString()}</p>
        </div>
    </div>
</body>
</html>
`;

// Create HTTP server
const server = http.createServer((req, res) => {
    const url = req.url;
    
    // Log request
    console.log(`[${new Date().toISOString()}] ${req.method} ${url}`);
    
    // Route handling
    if (url === '/' || url === '/index.html') {
        // Serve HTML page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    } else if (url === '/api/hello') {
        // Serve JSON API
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello World!',
            timestamp: new Date().toISOString(),
            server: 'NovaSphere Hello World Server',
            version: '1.0.0',
            nodeVersion: process.version
        }));
    } else if (url === '/api/greetings') {
        // Serve multiple language greetings
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            greetings: {
                english: 'Hello World!',
                spanish: '¡Hola Mundo!',
                french: 'Bonjour le Monde!',
                german: 'Hallo Welt!',
                italian: 'Ciao Mondo!',
                japanese: 'こんにちは世界!',
                chinese: '你好世界!',
                russian: 'Привет мир!',
                korean: '안녕하세요 세계!',
                hindi: 'नमस्ते दुनिया!'
            }
        }));
    } else if (url === '/health') {
        // Health check endpoint
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'healthy',
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        }));
    } else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});

// Start server
server.listen(PORT, HOST, () => {
    console.log('\n╔════════════════════════════════════════════════╗');
    console.log('║   Hello World Server - NovaSphere Demo        ║');
    console.log('╚════════════════════════════════════════════════╝\n');
    console.log(`✓ Server running at http://${HOST}:${PORT}/`);
    console.log(`✓ Node Version: ${process.version}`);
    console.log(`✓ Platform: ${process.platform}\n`);
    console.log('Available endpoints:');
    console.log(`  • http://localhost:${PORT}/              - HTML page`);
    console.log(`  • http://localhost:${PORT}/api/hello     - JSON API`);
    console.log(`  • http://localhost:${PORT}/api/greetings - Multi-language`);
    console.log(`  • http://localhost:${PORT}/health        - Health check`);
    console.log('\nPress Ctrl+C to stop the server\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n✓ Received SIGTERM, shutting down gracefully...');
    server.close(() => {
        console.log('✓ Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n✓ Received SIGINT, shutting down gracefully...');
    server.close(() => {
        console.log('✓ Server closed');
        process.exit(0);
    });
});
