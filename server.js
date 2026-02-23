const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const foobarSet = process.env.NEXT_PUBLIC_FOOBAR ? 'true' : 'false';
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaSphere Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        ${foobarSet === 'true' ? `
        .foobar-banner {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #4CAF50;
            color: white;
            padding: 15px;
            text-align: center;
            font-weight: 600;
            z-index: 1000;
        }
        body {
            padding-top: 50px;
        }
        ` : ''}
        .container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            padding: 60px;
            text-align: center;
            max-width: 600px;
            width: 100%;
        }
        h1 {
            color: #667eea;
            font-size: 2.5em;
            margin-bottom: 20px;
        }
        p {
            color: #666;
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.3s ease;
        }
        .button:hover {
            transform: translateY(-2px);
        }
        .env-info {
            margin-top: 40px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            text-align: left;
        }
        .env-info p {
            margin: 5px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            color: #333;
        }
    </style>
</head>
<body>
    ${foobarSet === 'true' ? '<div class="foobar-banner">✓ foobar is set</div>' : ''}
    <div class="container">
        <h1>NovaSphere</h1>
        <p>Welcome to the NovaSphere landing page</p>
        <p>This is a simple npm app showing your landing page with environment variable detection.</p>
        <a href="#" class="button">Get Started</a>
        <div class="env-info">
            <p><strong>Environment Status:</strong></p>
            <p>NEXT_PUBLIC_FOOBAR: ${foobarSet}</p>
        </div>
    </div>
</body>
</html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`NovaSphere app running on http://localhost:${PORT}`);
});
