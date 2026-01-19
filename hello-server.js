#!/usr/bin/env node

// Simple HTTP server hello world
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello World Server</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: #f0f0f0;
                }
                .container {
                    text-align: center;
                    padding: 40px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                h1 { color: #333; }
                p { color: #666; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello, World! 🌍</h1>
                <p>This is a Node.js HTTP server</p>
                <p>Request URL: ${req.url}</p>
                <p>Method: ${req.method}</p>
            </div>
        </body>
        </html>
    `;
    
    res.end(html);
});

server.listen(PORT, () => {
    console.log(`Hello World server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop the server');
});
