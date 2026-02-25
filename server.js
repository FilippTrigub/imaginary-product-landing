const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const FOOBAR = process.env.FOOBAR;

// Serve static files
app.use(express.static(__dirname));

// Inject banner script if FOOBAR is set
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to check if banner should be shown
app.get('/api/banner', (req, res) => {
  res.json({ showBanner: !!FOOBAR, message: FOOBAR || '' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (FOOBAR) {
    console.log(`FOOBAR is set: "${FOOBAR}" - Banner will be displayed`);
  } else {
    console.log('FOOBAR is not set - No banner will be displayed');
  }
});
