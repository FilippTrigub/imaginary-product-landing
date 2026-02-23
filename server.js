const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to check if NEXT_PUBLIC_FOOBAR is set
app.get('/api/config', (req, res) => {
    res.json({
        foobarIsSet: !!process.env.NEXT_PUBLIC_FOOBAR
    });
});

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
