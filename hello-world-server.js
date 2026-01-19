// Simple HTTP server that responds with Hello World
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World Server</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    color: white;
                }
                .container {
                    text-align: center;
                    padding: 2rem;
                }
                h1 {
                    font-size: 4rem;
                    margin: 0;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }
                p {
                    font-size: 1.5rem;
                    margin-top: 1rem;
                }
                .info {
                    margin-top: 2rem;
                    font-size: 1rem;
                    opacity: 0.8;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello, World!</h1>
                <p>Welcome to the Node.js HTTP Server</p>
                <div class="info">
                    <p>Server running on port ${PORT}</p>
                    <p>Request URL: ${req.url}</p>
                    <p>Method: ${req.method}</p>
                </div>
            </div>
        </body>
        </html>
    `;
    
    res.end(html);
});

server.listen(PORT, () => {
    console.log(`Hello World server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});

module.exports = server;
