import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  const foobarSet = process.env.NEXT_PUBLIC_FOOBAR ? true : false;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Landing Page</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          color: #333;
        }
        ${foobarSet ? `.banner {
          background-color: #ffc107;
          color: #333;
          padding: 15px 20px;
          text-align: center;
          font-weight: 600;
          border-bottom: 2px solid #ff9800;
        }` : ''}
        .container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        .content {
          background: white;
          border-radius: 10px;
          padding: 60px 40px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          max-width: 600px;
        }
        h1 {
          font-size: 2.5em;
          margin-bottom: 20px;
          color: #667eea;
        }
        p {
          font-size: 1.1em;
          line-height: 1.6;
          color: #666;
        }
      </style>
    </head>
    <body>
      ${foobarSet ? '<div class="banner">foobar is set</div>' : ''}
      <div class="container">
        <div class="content">
          <h1>Welcome to Landing Page</h1>
          <p>This is a simple npm app that serves a landing page.</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
