const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Check for NEXT_PUBLIC_FOOBAR env var
const foobarIsSet = !!process.env.NEXT_PUBLIC_FOOBAR;

// Landing page route
app.get('/', (req, res) => {
  const foobarBanner = foobarIsSet
    ? '<div style="background-color: #FFD700; padding: 20px; text-align: center; font-weight: bold; color: #000;">foobar is set</div>'
    : '';

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaSphere - The Future of Personal Computing</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 0;
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
        }

        header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5em;
            font-weight: 700;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 30px;
            transition: opacity 0.3s ease;
        }

        nav a:hover {
            opacity: 0.8;
        }

        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 100px 0;
            text-align: center;
        }

        .hero h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2em;
            margin-bottom: 40px;
        }

        .btn-primary {
            background: white;
            color: #667eea;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            transition: all 0.3s ease;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 15px rgba(0,0,0,0.2);
        }

        .features {
            padding: 80px 0;
        }

        .features h2 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 60px;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }

        .feature-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            text-align: center;
        }

        .feature-card h3 {
            margin-bottom: 15px;
            color: #667eea;
        }

        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 40px 0;
            margin-top: 80px;
        }
    </style>
</head>
<body>
    ${foobarBanner}

    <header>
        <div class="container">
            <div class="logo">NovaSphere</div>
            <nav>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>The Future of Personal Computing</h1>
            <p>Experience the next generation of holographic interfaces and advanced computing</p>
            <a href="#contact" class="btn-primary">Get Started</a>
        </div>
    </section>

    <section id="features" class="features">
        <div class="container">
            <h2>Key Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>Holographic Display</h3>
                    <p>Experience stunning holographic projections with crystal-clear visuals</p>
                </div>
                <div class="feature-card">
                    <h3>Advanced Processing</h3>
                    <p>Lightning-fast processing power for demanding applications</p>
                </div>
                <div class="feature-card">
                    <h3>Seamless Integration</h3>
                    <p>Works perfectly with all your existing devices and services</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 NovaSphere Inc. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`NovaSphere landing page running at http://localhost:${PORT}`);
  console.log(`NEXT_PUBLIC_FOOBAR is ${foobarIsSet ? 'SET' : 'NOT SET'}`);
});
