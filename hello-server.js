#!/usr/bin/env node

// Hello World HTTP Server
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World Server</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
            text-align: center;
            background: white;
            padding: 50px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 {
            color: #667eea;
            font-size: 3em;
            margin: 0;
        }
        p {
            color: #666;
            font-size: 1.2em;
            margin-top: 20px;
        }
        .info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-top: 30px;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
        <p>This is a Node.js HTTP Server</p>
        <div class="info">
            <strong>Server Info:</strong><br>
            Hostname: ${hostname}<br>
            Port: ${port}<br>
            Request URL: ${req.url}<br>
            Method: ${req.method}
        </div>
    </div>
</body>
</html>
    `;
    
    res.end(html);
});

server.listen(port, hostname, () => {
    console.log(`Hello World Server running at http://${hostname}:${port}/`);
    console.log('Press Ctrl+C to stop the server');
});
