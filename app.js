const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Check if NEXT_PUBLIC_FOOBAR is set
const foobarIsSet = !!process.env.NEXT_PUBLIC_FOOBAR;

const server = http.createServer((req, res) => {
    // Route for the landing page
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading page');
                return;
            }

            // Inject foobar status into the HTML
            const modifiedContent = content.replace(
                '</head>',
                `<script>window.__FOOBAR_SET__ = ${foobarIsSet};</script></head>`
            );

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(modifiedContent);
        });
        return;
    }

    // Return 404 for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`NEXT_PUBLIC_FOOBAR is ${foobarIsSet ? 'SET' : 'NOT SET'}`);
});
