const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('.'));

// Route to serve the main page
app.get('/', (req, res) => {
    // Read the environment variable
    const foobarValue = process.env.NEXT_PUBLIC_FOOBAR;
    const isFoobarSet = !!foobarValue;

    // Read the HTML file
    let htmlContent = require('fs').readFileSync('./index.html', 'utf8');
    
    // If foobar is set, inject the banner
    if (isFoobarSet) {
        htmlContent = htmlContent.replace(
            '<div id="foobar-banner" class="banner hidden">',
            '<div id="foobar-banner" class="banner visible">'
        );
    }

    res.send(htmlContent);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`NEXT_PUBLIC_FOOBAR is: ${process.env.NEXT_PUBLIC_FOOBAR ? 'SET' : 'NOT SET'}`);
});