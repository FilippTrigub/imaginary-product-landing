const express = require('express');
const next = require('next');
const path = require('path');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Serve static assets (images, fonts, CSS, etc.)
  server.use('/images', express.static(path.join(__dirname, 'public/images')));

  // Custom route for API calls if needed
  server.get('/api/env', (req, res) => {
    const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
    res.json({ foobar });
  });

  // Pass all other routes to Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});