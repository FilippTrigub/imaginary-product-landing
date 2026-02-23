const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route for the main page
app.get('/', (req, res) => {
  // Read the NEXT_PUBLIC_FOOBAR environment variable
  const foobarValue = process.env.NEXT_PUBLIC_FOOBAR;

  // Read the index.html file
  let html = require('fs').readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  
  // Inject the javascript variable based on the environment variable
  const jsInjection = `
    <script>
      // Inject the environment variable status
      window.FOOBAR_STATUS = ${foobarValue ? '"set"' : 'null'};
      // Auto-display banner if foobar is set
      document.addEventListener('DOMContentLoaded', function() {
        if (window.FOOBAR_STATUS === 'set') {
          showFoobarBanner();
        }
      });
    </script>`;
  
  // Place the injection before closing body tag
  html = html.replace('</body>', `${jsInjection}\n  </body>`);
  
  res.send(html);
});

// Additional routes for other pages that might exist
app.get('/team.html', (req, res) => {
  const foobarValue = process.env.NEXT_PUBLIC_FOOBAR;
  let html = require('fs').readFileSync(path.join(__dirname, 'team.html'), 'utf8');
  
  const jsInjection = `
    <script>
      // Inject the environment variable status
      window.FOOBAR_STATUS = ${foobarValue ? '"set"' : 'null'};
    </script>`;
  
  html = html.replace('</body>', `${jsInjection}\n  </body>`);
  
  res.send(html);
});

app.get('/header.html', (req, res) => {
  const foobarValue = process.env.NEXT_PUBLIC_FOOBAR;
  let html = require('fs').readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  
  const jsInjection = `
    <script>
      // Inject the environment variable status
      window.FOOBAR_STATUS = ${foobarValue ? '"set"' : 'null'};
    </script>`;
  
  html = html.replace('</body>', `${jsInjection}\n  </body>`);
  
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`NEXT_PUBLIC_FOOBAR environment variable is: ${process.env.NEXT_PUBLIC_FOOBAR ? 'SET' : 'NOT SET'}`);
});