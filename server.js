import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(__dirname));

// Helper function to inject banner into HTML
function injectBanner(htmlContent) {
  const foobarValue = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

  if (!foobarValue) {
    return htmlContent;
  }

  const banner = `
    <div style="
      background-color: #4CAF50;
      color: white;
      padding: 15px;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      position: sticky;
      top: 0;
      z-index: 10000;
    ">
      ✓ Environment Variable Banner: FOOBAR = "${foobarValue}"
    </div>
  `;

  // Inject banner after opening body tag
  return htmlContent.replace(/<body[^>]*>/i, (match) => match + banner);
}

// Route for header.html
app.get('/', (req, res) => {
  const filePath = join(__dirname, 'header.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    res.send(injectBanner(data));
  });
});

// Route for team.html
app.get('/team', (req, res) => {
  const filePath = join(__dirname, 'team.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    res.send(injectBanner(data));
  });
});

// Catch-all for other requests (serve files directly)
app.get('*', (req, res) => {
  const filePath = join(__dirname, req.path);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Page not found');
      return;
    }
    // Check if it's an HTML file
    if (req.path.endsWith('.html')) {
      res.send(injectBanner(data));
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`NovaSphere server running at http://localhost:${PORT}`);
  if (process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR) {
    console.log(`✓ Banner will be displayed: FOOBAR = "${process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR}"`);
  }
});
