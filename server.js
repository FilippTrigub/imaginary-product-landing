const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

// Check for environment variables
const hasFoobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Serve index.html for root path, and other static files
    if (pathname === '/' || pathname === '/index.html') {
        // Read the index.html file and insert data attribute based on environment variable
        let htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
        
        // Inject the data attribute for environment variable status
        if (hasFoobar) {
            htmlContent = htmlContent.replace('<body>', `<body data-env-foobar-set="${hasFoobar}">`);
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    } 
    // Serve other static files
    else if (pathname.startsWith('/images/') || 
             pathname.endsWith('.css') || 
             pathname.endsWith('.js')) {
        
        let filePath = path.join(__dirname, pathname);
        
        // Handle image file extensions
        if (fs.existsSync(filePath)) {
            let contentType = 'text/plain';
            
            if (filePath.endsWith('.css')) contentType = 'text/css';
            else if (filePath.endsWith('.js')) contentType = 'application/javascript';
            else if (filePath.endsWith('.png') || filePath.endsWith('.jpg') || 
                     filePath.endsWith('.jpeg') || filePath.endsWith('.gif') || 
                     filePath.endsWith('.svg') || filePath.endsWith('.webp')) {
                contentType = 'image';
            } else {
                contentType = 'text/plain';
            }
            
            const content = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        } else {
            res.writeHead(404);
            res.end('File not found');
        }
    } 
    // Redirect to index for other routes
    else {
        let htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
        
        // Inject the data attribute for environment variable status
        if (hasFoobar) {
            htmlContent = htmlContent.replace('<body>', `<body data-env-foobar-set="${hasFoobar}">`);
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`NovaSphere server running on http://localhost:${port}`);
    if (hasFoobar) {
        console.log(`Environment variable detected: FOOBAR/NEXT_PUBLIC_FOOBAR = ${hasFoobar}`);
        console.log('Banner will be displayed on the webpage.');
    } else {
        console.log('No FOOBAR or NEXT_PUBLIC_FOOBAR environment variable set.');
        console.log('Banner will not be displayed.');
    }
});