const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Route for the main page (must be before static middleware)
app.get('/', (req, res) => {
    // Check for environment variables
    const hasFoobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

    // Read the HTML file
    let html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');

    // Inject the FOOBAR status into the HTML
    const metaTag = `<meta name="foobar" content="${hasFoobar ? 'true' : 'false'}">`;
    html = html.replace('</head>', `    ${metaTag}\n</head>`);

    res.send(html);
});

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
