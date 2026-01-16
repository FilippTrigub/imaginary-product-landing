// Hello World - HTTP Server
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
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
                h1 {
                    color: #333;
                    margin: 0;
                }
                p {
                    color: #666;
                    margin-top: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello World!</h1>
                <p>From Node.js HTTP Server</p>
                <p>Request URL: ${req.url}</p>
            </div>
        </body>
        </html>
    `;
    
    res.end(html);
});

server.listen(port, hostname, () => {
    console.log(`Hello World server running at http://${hostname}:${port}/`);
});
