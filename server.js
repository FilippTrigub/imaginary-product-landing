const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FOOBAR_SET = process.env.NEXT_PUBLIC_FOOBAR ? true : false;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code, 'utf-8');
      }
    } else {
      // Inject banner script into HTML files
      if (extname === '.html') {
        let htmlContent = content.toString();
        const bannerScript = `
<script>
  window.FOOBAR_SET = ${FOOBAR_SET};
</script>`;
        htmlContent = htmlContent.replace('</head>', bannerScript + '</head>');
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(htmlContent, 'utf-8');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`NEXT_PUBLIC_FOOBAR is ${FOOBAR_SET ? 'SET' : 'NOT SET'}`);
});
