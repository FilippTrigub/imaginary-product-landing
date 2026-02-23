import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// API endpoint to check if NEXT_PUBLIC_FOOBAR is set
app.get('/api/env-check', (req, res) => {
    res.json({
        foobarIsSet: !!process.env.NEXT_PUBLIC_FOOBAR
    });
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`NEXT_PUBLIC_FOOBAR is ${process.env.NEXT_PUBLIC_FOOBAR ? 'SET' : 'NOT SET'}`);
});
