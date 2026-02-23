const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route for landing page
app.get('/', (req, res) => {
  const foobarSet = process.env.NEXT_PUBLIC_FOOBAR ? 'true' : 'false';
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaSphere - Landing Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .foobar-banner {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            text-align: center;
            font-weight: 600;
            font-size: 1.1rem;
        }
    </style>
</head>
<body>
    ${foobarSet === 'true' ? '<div class="foobar-banner">✓ foobar is set</div>' : ''}
    <div id="app"></div>
    <script src="main.js"></script>
</body>
</html>`;
  res.send(html);
});

app.listen(port, () => {
  console.log(`NovaSphere landing page running at http://localhost:${port}`);
});
