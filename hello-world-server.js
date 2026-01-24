#!/usr/bin/env node

/**
 * HTTP Server Hello World
 * A simple HTTP server that responds with "Hello World"
 */

const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Set response headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('X-Powered-By', 'NovaSphere');
    
    // Route handling
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
            backdrop-filter: blur(10px);
        }
        h1 { font-size: 3em; margin: 0; }
        p { font-size: 1.2em; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
        <p>Welcome to NovaSphere HTTP Server</p>
        <p>Server is running on port ${PORT}</p>
    </div>
</body>
</html>
        `);
    } else if (req.url === '/api/hello') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            message: 'Hello World!',
            product: 'NovaSphere',
            timestamp: new Date().toISOString()
        }));
    } else {
        res.statusCode = 404;
        res.end('<h1>404 - Not Found</h1>');
    }
});

server.listen(PORT, HOST, () => {
    console.log('=================================');
    console.log('  Hello World HTTP Server');
    console.log('=================================');
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log(`API endpoint: http://${HOST}:${PORT}/api/hello`);
    console.log('Press Ctrl+C to stop the server');
    console.log('=================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM, shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\nReceived SIGINT, shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
