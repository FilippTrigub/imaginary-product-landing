import http from 'http';

const foobarSet = process.env.NEXT_PUBLIC_FOOBAR ? true : false;

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
            font-family: 'Montserrat', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        ${foobarSet ? `
        .foobar-banner {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-weight: 600;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        ` : ''}

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
        }

        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        .section {
            margin-bottom: 60px;
        }

        .section h2 {
            font-size: 2em;
            margin-bottom: 20px;
            color: #667eea;
        }

        .section p {
            font-size: 1.1em;
            color: #666;
            line-height: 1.8;
        }

        .footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 40px 20px;
        }

        .footer p {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    ${foobarSet ? '<div class="foobar-banner">✓ foobar is set</div>' : ''}

    <header class="header">
        <h1>NovaSphere</h1>
        <p>The Future of Personal Computing</p>
    </header>

    <div class="container">
        <section class="section">
            <h2>Welcome to NovaSphere</h2>
            <p>
                NovaSphere is an imaginary product that features holographic interfaces and advanced computing technologies.
                This landing page showcases the essence of innovation and technological excellence.
            </p>
        </section>

        <section class="section">
            <h2>Key Features</h2>
            <p>
                Explore cutting-edge features designed for the future:
                Holographic displays for immersive user experience, advanced computing capabilities,
                intuitive gesture controls, and seamless integration with modern workflows.
            </p>
        </section>

        <section class="section">
            <h2>Innovation at Scale</h2>
            <p>
                NovaSphere represents the pinnacle of technological achievement, combining hardware
                excellence with software sophistication to deliver an unparalleled computing experience.
            </p>
        </section>
    </div>

    <footer class="footer">
        <p>&copy; 2025 NovaSphere Inc. All rights reserved.</p>
        <p>The Future of Personal Computing</p>
    </footer>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`NovaSphere landing page app is running on http://localhost:${PORT}`);
});
