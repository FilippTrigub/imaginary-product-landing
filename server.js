const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/env', (req, res) => {
  res.json({ FOOBAR: process.env.NEXT_PUBLIC_FOOBAR });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'header.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
