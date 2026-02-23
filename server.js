const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('.'));

// Landing page route
app.get('/', (req, res) => {
  const foobarSet = process.env.NEXT_PUBLIC_FOOBAR ? true : false;

  res.send(`
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
          font-size: 1.1em;
        }
        ` : ''}

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.15);
        }

        header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
        }

        header p {
          font-size: 1.2em;
          opacity: 0.9;
        }

        main {
          padding: 60px 0;
        }

        section {
          margin-bottom: 60px;
        }

        section h2 {
          font-size: 2em;
          margin-bottom: 20px;
          color: #667eea;
        }

        section p {
          font-size: 1.1em;
          color: #555;
          margin-bottom: 15px;
        }

        footer {
          background: #333;
          color: white;
          padding: 40px 0;
          text-align: center;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      ${foobarSet ? '<div class="foobar-banner">✓ foobar is set</div>' : ''}

      <header>
        <div class="container">
          <h1>NovaSphere</h1>
          <p>The Future of Personal Computing</p>
        </div>
      </header>

      <main>
        <div class="container">
          <section>
            <h2>Welcome to NovaSphere</h2>
            <p>NovaSphere represents the next generation of personal computing with holographic interfaces and advanced computing technologies. Experience the future today.</p>
          </section>

          <section>
            <h2>Features</h2>
            <p>Cutting-edge technology designed for the modern user. Seamless integration, powerful performance, and intuitive design.</p>
          </section>

          <section>
            <h2>About</h2>
            <p>Founded on principles of innovation and excellence, NovaSphere is committed to pushing the boundaries of what's possible in personal computing.</p>
          </section>
        </div>
      </main>

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
  console.log(`NovaSphere landing page running at http://localhost:${port}`);
});
