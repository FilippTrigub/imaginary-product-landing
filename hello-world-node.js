#!/usr/bin/env node

// Hello World for Node.js environment

// Basic console output
console.log('Hello, World!');

// Using process
console.log(`Hello from Node.js ${process.version}!`);
console.log(`Running on ${process.platform}`);

// Async Hello World
async function asyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World (async)!');
        }, 100);
    });
}

asyncHello().then(message => console.log(message));

// HTTP Server Hello World
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
                    font-size: 3rem;
                }
            </style>
        </head>
        <body>
            <h1>Hello, World from Node.js Server!</h1>
        </body>
        </html>
    `);
});

// Only start server if this file is run directly
if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`\nServer running at http://localhost:${PORT}/`);
        console.log('Press Ctrl+C to stop the server');
    });
}

module.exports = { asyncHello };
