const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const indexPath = path.join(__dirname, 'index.html');
const stylesPath = path.join(__dirname, 'styles.css');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(indexPath, 'utf8', (err, html) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
        return;
      }

      const banner = process.env.NEXT_PUBLIC_FOOBAR
        ? '<div class="banner">foobar is set</div>'
        : '';

      const body = html.replace('<!--FOOBAR_BANNER-->', banner);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(body);
    });
    return;
  }

  if (req.url === '/styles.css') {
    fs.readFile(stylesPath, (err, css) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(css);
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
