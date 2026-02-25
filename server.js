import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  const foobarValue = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NovaSphere - Simple App</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      ${foobarValue ? `<div class="banner">Environment Variable Set: ${foobarValue}</div>` : ''}
      <div class="container">
        <h1>NovaSphere - The Future of Personal Computing</h1>
        <p>Welcome to our simple landing page application built with pnpm and Express.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
