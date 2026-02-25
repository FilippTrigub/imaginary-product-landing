const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const FOOBAR = process.env.FOOBAR;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to inject banner if FOOBAR is set
app.use((req, res, next) => {
  if (req.path === '/' || req.path === '/index.html') {
    const indexPath = path.join(__dirname, 'public', 'index.html');

    if (FOOBAR) {
      fs.readFile(indexPath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).send('Error loading page');
        }

        const banner = `
        <div style="background-color: #ff6b6b; color: white; padding: 15px; text-align: center; font-weight: bold; position: fixed; top: 0; left: 0; right: 0; z-index: 10000; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
          FOOBAR is set: ${FOOBAR}
        </div>
        <div style="height: 50px;"></div>
      `;

        const modifiedHtml = data.replace('<body>', '<body>' + banner);
        res.send(modifiedHtml);
      });
    } else {
      res.sendFile(indexPath);
    }
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  if (FOOBAR) {
    console.log(`FOOBAR is set to: ${FOOBAR}`);
  }
});
