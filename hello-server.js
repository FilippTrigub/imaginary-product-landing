#!/usr/bin/env node

// Simple HTTP server hello world
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
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
                h1 {
                    color: #333;
                    font-size: 48px;
                }
            </style>
        </head>
        <body>
            <h1>Hello, World! 🌍</h1>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Hello World server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop the server');
});
