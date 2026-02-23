const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const SHOW_FOOBAR = process.env.NEXT_PUBLIC_FOOBAR;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading page');
        return;
      }

      // Inject foobar banner if env var is set
      let html = data;
      if (SHOW_FOOBAR) {
        const banner = '<div style="background: #ff6b6b; color: white; padding: 10px; text-align: center; font-weight: bold;">foobar is set</div>';
        html = html.replace('<body>', '<body>' + banner);
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  } else if (req.url === '/styles.css') {
    fs.readFile(path.join(__dirname, 'styles.css'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  if (SHOW_FOOBAR) {
    console.log('NEXT_PUBLIC_FOOBAR is set - banner will be displayed');
  }
});
