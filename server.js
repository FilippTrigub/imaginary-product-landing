import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const indexPath = path.join(__dirname, 'index.html');

    try {
      let content = fs.readFileSync(indexPath, 'utf-8');

      // Check if FOOBAR env var is set and inject banner
      if (process.env.FOOBAR) {
        const banner = `
          <div style="
            background-color: #ff6b6b;
            color: white;
            padding: 20px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            border-bottom: 3px solid #cc5555;
            z-index: 10000;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
          ">
            ⚠️ FOOBAR environment variable is set
          </div>
          <div style="padding-top: 80px;"></div>
        `;

        const bodyMatch = content.match(/<body[^>]*>/i);
        if (bodyMatch) {
          content = content.replace(bodyMatch[0], bodyMatch[0] + banner);
        } else {
          content = banner + content;
        }
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    } catch (error) {
      res.writeHead(500);
      res.end('Error reading index.html');
    }
  } else if (req.url.startsWith('/styles.css')) {
    const cssPath = path.join(__dirname, 'styles.css');
    try {
      const content = fs.readFileSync(cssPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.url.startsWith('/script.js')) {
    const jsPath = path.join(__dirname, 'script.js');
    try {
      const content = fs.readFileSync(jsPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.url.startsWith('/images/')) {
    const imagePath = path.join(__dirname, req.url);
    try {
      const content = fs.readFileSync(imagePath);
      res.writeHead(200);
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.url === '/header.html') {
    const headerPath = path.join(__dirname, 'header.html');
    try {
      const content = fs.readFileSync(headerPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.url === '/team.html') {
    const teamPath = path.join(__dirname, 'team.html');
    try {
      const content = fs.readFileSync(teamPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('Not found');
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
