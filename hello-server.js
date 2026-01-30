#!/usr/bin/env node
/**
 * Simple HTTP Server that serves Hello World
 * Run with: node hello-server.js
 */

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
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
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .container {
                    background: white;
                    padding: 40px 60px;
                    border-radius: 15px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    text-align: center;
                }
                h1 {
                    color: #667eea;
                    margin: 0 0 20px 0;
                }
                p {
                    color: #666;
                    margin: 10px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello, World! 🌍</h1>
                <p>Welcome to NovaSphere!</p>
                <p>This page is served by a simple Node.js HTTP server.</p>
                <p><strong>Server running on port ${PORT}</strong></p>
            </div>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log("=".repeat(50));
    console.log("Hello World HTTP Server");
    console.log("=".repeat(50));
    console.log(`Server is running at http://localhost:${PORT}/`);
    console.log("Press Ctrl+C to stop the server");
    console.log("=".repeat(50));
});
