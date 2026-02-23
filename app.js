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
            background: linear-gradient(135deg, #FF006E 0%, #FF1493 25%, #8338EC 50%, #00D9FF 75%, #3A86FF 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(255, 0, 110, 0.5), 0 0 30px rgba(51, 214, 159, 0.3);
            position: relative;
            overflow: hidden;
            animation: gradientShift 8s ease infinite;
            background-size: 200% 200%;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background:
                radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 20, 147, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 30% 30%, rgba(131, 56, 236, 0.15) 0%, transparent 50%);
            pointer-events: none;
            animation: shimmer 6s ease-in-out infinite;
        }

        @keyframes shimmer {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }

        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            animation: colorShift 6s infinite;
            background: linear-gradient(90deg, #FFFF00, #00D9FF, #FF1493, #00FF00, #FFFF00);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        @keyframes colorShift {
            0% { background-position: 0% center; text-shadow: 0 2px 10px rgba(255, 255, 0, 0.6); }
            25% { text-shadow: 0 2px 10px rgba(0, 217, 255, 0.6); }
            50% { background-position: 100% center; text-shadow: 0 2px 10px rgba(255, 20, 147, 0.6); }
            75% { text-shadow: 0 2px 10px rgba(0, 255, 0, 0.6); }
            100% { background-position: 0% center; text-shadow: 0 2px 10px rgba(255, 255, 0, 0.6); }
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.95;
            position: relative;
            z-index: 1;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
            background: linear-gradient(135deg, rgba(255, 20, 147, 0.08) 0%, rgba(0, 217, 255, 0.08) 25%, rgba(131, 56, 236, 0.08) 50%, rgba(50, 255, 126, 0.08) 75%, rgba(255, 223, 0, 0.08) 100%);
        }

        .section {
            margin-bottom: 60px;
            padding: 40px;
            border-radius: 15px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.5) 100%);
            border-left: 5px solid #FF006E;
            box-shadow: 0 4px 15px rgba(255, 0, 110, 0.15);
            transition: all 0.3s ease;
        }

        .section:nth-child(2) {
            border-left-color: #00D9FF;
            box-shadow: 0 4px 15px rgba(0, 217, 255, 0.15);
        }

        .section:nth-child(3) {
            border-left-color: #8338EC;
            box-shadow: 0 4px 15px rgba(131, 56, 236, 0.15);
        }

        .section:nth-child(4) {
            border-left-color: #32FF7E;
            box-shadow: 0 4px 15px rgba(50, 255, 126, 0.15);
        }

        .section:hover {
            transform: translateX(5px);
            box-shadow: 0 8px 25px rgba(255, 0, 110, 0.25);
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(240, 248, 255, 0.8) 100%);
        }

        .section h2 {
            font-size: 2em;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #FF006E 0%, #8338EC 50%, #3A86FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section p {
            font-size: 1.1em;
            color: #555;
            line-height: 1.8;
        }

        .footer {
            background: linear-gradient(135deg, #1A1A3E 0%, #2A1A4E 25%, #1A3A52 50%, #2A4A3E 75%, #1A3A4A 100%);
            color: white;
            text-align: center;
            padding: 40px 20px;
            border-top: 4px solid;
            border-image: linear-gradient(90deg, #FF006E, #00D9FF, #8338EC, #32FF7E) 1;
            position: relative;
            animation: footerGlow 6s ease-in-out infinite;
        }

        @keyframes footerGlow {
            0%, 100% { box-shadow: inset 0 0 20px rgba(255, 0, 110, 0.1); }
            50% { box-shadow: inset 0 0 20px rgba(0, 217, 255, 0.1); }
        }

        .footer::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 0, 110, 0.15), rgba(0, 217, 255, 0.15), transparent);
            pointer-events: none;
            animation: gradientFlow 8s ease infinite;
        }

        @keyframes gradientFlow {
            0% { opacity: 0.5; }
            50% { opacity: 0.8; }
            100% { opacity: 0.5; }
        }

        .footer p {
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
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
