const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const foobarSet = process.env.NEXT_PUBLIC_FOOBAR;
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
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f9fa;
        }
        .banner {
          background-color: #4CAF50;
          color: white;
          padding: 15px;
          text-align: center;
          font-weight: bold;
          font-size: 1.1em;
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
        header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
        }
        header p {
          font-size: 1.1em;
          opacity: 0.9;
        }
        main {
          padding: 60px 0;
        }
        section {
          margin: 40px 0;
          padding: 40px 0;
          border-bottom: 1px solid #e9ecef;
        }
        section:last-child {
          border-bottom: none;
        }
        h2 {
          font-size: 2em;
          margin-bottom: 20px;
          color: #667eea;
        }
        p {
          font-size: 1.05em;
          line-height: 1.8;
          color: #666;
          margin-bottom: 15px;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        .feature-card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .feature-card h3 {
          color: #667eea;
          margin-bottom: 10px;
          font-size: 1.3em;
        }
        footer {
          background-color: #333;
          color: white;
          padding: 40px 0;
          text-align: center;
          margin-top: 60px;
        }
      </style>
    </head>
    <body>
      ${foobarSet ? '<div class="banner">✓ foobar is set</div>' : ''}

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
            <p>NovaSphere represents the cutting edge of personal computing technology. With holographic interfaces and advanced computing capabilities, we're transforming how people interact with technology.</p>
          </section>

          <section>
            <h2>Key Features</h2>
            <div class="features">
              <div class="feature-card">
                <h3>Holographic Display</h3>
                <p>Experience technology through stunning 3D holographic interfaces that respond to your touch and gestures.</p>
              </div>
              <div class="feature-card">
                <h3>Advanced Processing</h3>
                <p>Powered by next-generation processors for lightning-fast performance and seamless multitasking.</p>
              </div>
              <div class="feature-card">
                <h3>Smart Integration</h3>
                <p>Seamlessly connects with all your devices and services for a unified computing experience.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>About Us</h2>
            <p>Founded with a vision to revolutionize personal computing, NovaSphere combines cutting-edge technology with intuitive design. Our team of experts is dedicated to bringing the future to your hands today.</p>
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
  console.log(`NovaSphere app listening at http://localhost:${port}`);
});
