const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the landing page
app.get('/', (req, res) => {
    // Read the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading index.html:', err);
            return res.status(500).send('Internal Server Error');
        }
        
        // Check if NEXT_PUBLIC_FOOBAR environment variable is set
        const foobarSet = process.env.NEXT_PUBLIC_FOOBAR !== undefined && process.env.NEXT_PUBLIC_FOOBAR !== '';
        
        // Modify the HTML to show/hide the foobar banner based on the environment variable
        if (foobarSet) {
            // Replace the data-show attribute to show the banner
            const modifiedHtml = data.replace(
                '<div id="foobar-banner" class="foobar-banner hidden">',
                '<div id="foobar-banner" class="foobar-banner" data-show="true">'
            );
            res.send(modifiedHtml);
        } else {
            // Send the original HTML (banner will remain hidden)
            res.send(data);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`NEXT_PUBLIC_FOOBAR env var: ${process.env.NEXT_PUBLIC_FOOBAR || 'not set'}`);
});