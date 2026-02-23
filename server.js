const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const foobarBanner = process.env.NEXT_PUBLIC_FOOBAR ? '<div style="background-color: #4CAF50; color: white; padding: 15px; text-align: center; font-weight: bold;">foobar is set</div>' : '';

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaSphere - Landing Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
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
            position: sticky;
            top: 0;
            z-index: 1000;
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

        nav ul {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s ease;
        }

        nav a:hover {
            opacity: 0.8;
        }

        .hero {
            padding: 100px 0;
            background: linear-gradient(135deg, #f5f7fa, #e6e9f0);
            text-align: center;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #333, #667eea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 20px rgba(102, 126, 234, 0.6);
        }

        .features {
            padding: 80px 0;
            background-color: white;
        }

        .features h2 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 50px;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-card h3 {
            margin-bottom: 15px;
            color: #667eea;
        }

        footer {
            background-color: #2d3748;
            color: white;
            text-align: center;
            padding: 30px 0;
            margin-top: 60px;
        }
    </style>
</head>
<body>
    ${foobarBanner}

    <header>
        <div class="container">
            <div class="logo">NovaSphere</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="container">
            <h1>Welcome to NovaSphere</h1>
            <p>Experience the future of personal computing with cutting-edge technology and innovative design.</p>
            <a href="#contact" class="cta-button">Get Started</a>
        </div>
    </section>

    <section id="features" class="features">
        <div class="container">
            <h2>Key Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>🚀 High Performance</h3>
                    <p>Lightning-fast processing power for all your computing needs.</p>
                </div>
                <div class="feature-card">
                    <h3>💎 Premium Design</h3>
                    <p>Sleek and modern interface with intuitive user experience.</p>
                </div>
                <div class="feature-card">
                    <h3>🔒 Secure</h3>
                    <p>Enterprise-grade security to protect your data and privacy.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="hero">
        <div class="container">
            <h2 style="margin-bottom: 30px;">Get in Touch</h2>
            <p>Ready to experience NovaSphere? Contact us today!</p>
            <a href="mailto:info@novasphere.com" class="cta-button">Contact Us</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 NovaSphere Inc. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`NovaSphere app listening on port ${port}`);
});
