const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the main.js file that includes the environment variable
app.get('/main.js', (req, res) => {
    let mainJsContent = `// Check if NEXT_PUBLIC_FOOBAR environment variable is set
// In a browser environment, we can't directly access Node.js environment variables,
// so we'll use a simple approach: if the variable is set in the server,
// it will be passed to the client-side JavaScript

// For this simple demo, we'll check if the variable exists in the global scope
// or we can use a data attribute set by the server
if (typeof window.NEXT_PUBLIC_FOOBAR !== 'undefined' && window.NEXT_PUBLIC_FOOBAR) {
    const foobarBanner = document.getElementById('foobar-banner');
    if (foobarBanner) {
        foobarBanner.style.display = 'block';
    }
}

// Simple landing page content
const app = document.createElement('div');
app.innerHTML = '<h1>NovaSphere landing page rebuilt in JS</h1>';
document.body.appendChild(app);`;
    
    // Add the environment variable to the JavaScript
    if (process.env.NEXT_PUBLIC_FOOBAR) {
        mainJsContent = `window.NEXT_PUBLIC_FOOBAR = "${process.env.NEXT_PUBLIC_FOOBAR}";\n` + mainJsContent;
    }
    
    res.type('application/javascript').send(mainJsContent);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`NEXT_PUBLIC_FOOBAR is ${process.env.NEXT_PUBLIC_FOOBAR ? 'set' : 'not set'}`);
});