const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Inject environment variable into HTML
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

// API endpoint to check env var
app.get('/api/config', (req, res) => {
  res.json({
    foobarSet: !!process.env.NEXT_PUBLIC_FOOBAR
  });
});

app.listen(PORT, () => {
  console.log(`NovaSphere landing page running on http://localhost:${PORT}`);
  console.log(`NEXT_PUBLIC_FOOBAR is ${process.env.NEXT_PUBLIC_FOOBAR ? 'SET' : 'NOT SET'}`);
});
