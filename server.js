const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main landing page
app.get('/', (req, res) => {
  const foobarSet = !!process.env.NEXT_PUBLIC_FOOBAR;
  res.send(generateHTML(foobarSet));
});

// Route for header page
app.get('/header.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'header.html'));
});

// Route for team page
app.get('/team.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'team.html'));
});

function generateHTML(foobarSet) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaSphere - Landing Page</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        .foobar-banner {
            background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-weight: 600;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    ${foobarSet ? '<div class="foobar-banner">✓ foobar is set</div>' : ''}

    <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); box-shadow: 0 2px 20px rgba(0,0,0,0.15); position: sticky; top: 0; z-index: 1000; padding: 15px 0;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5em; font-weight: 700; color: white; text-decoration: none;">NovaSphere</span>
            </div>
            <nav style="display: flex; align-items: center;">
                <ul style="display: flex; list-style: none; margin: 0; padding: 0; gap: 30px;">
                    <li><a href="/" style="color: white; text-decoration: none; font-weight: 500;">Home</a></li>
                    <li><a href="/header.html" style="color: white; text-decoration: none; font-weight: 500;">Navigation Demo</a></li>
                    <li><a href="/team.html" style="color: white; text-decoration: none; font-weight: 500;">Team</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section style="padding: 100px 0; text-align: center; background: linear-gradient(135deg, #f5f7fa, #e6e9f0);">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 20px; color: #333;">Welcome to NovaSphere</h1>
            <p style="font-size: 1.1rem; color: #666; margin-bottom: 40px;">A simple and elegant landing page showcasing modern web design</p>
            <a href="#" style="background: linear-gradient(135deg, #6e8efb, #a777e3); color: white; padding: 12px 24px; border-radius: 30px; font-weight: 600; display: inline-block; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(110, 142, 251, 0.4);">Get Started</a>
        </div>
    </section>

    <footer style="background-color: #2d3748; color: white; padding: 60px 0 20px; text-align: center;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <p>&copy; 2025 NovaSphere Inc. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
}

app.listen(port, () => {
  console.log(`Landing page app listening at http://localhost:${port}`);
  if (process.env.NEXT_PUBLIC_FOOBAR) {
    console.log('✓ Environment variable NEXT_PUBLIC_FOOBAR is set');
  }
});
