const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

function addBannerToHtml(content, isHeaderPage = false) {
  const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
  
  console.log('addBannerToHtml called');
  console.log('foobar value:', foobar);
  console.log('Is truthy?', !!foobar);
  
  if (foobar) {
    console.log('Adding banner...');
    const bannerHtml = `
      <div id="env-banner" style="background-color: #ff6b6b; color: white; text-align: center; padding: 10px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 1001;">
        Environment Variable Set: ${foobar}
      </div>
    `;
    content = content.replace('</head>', `${bannerHtml}</head>`);
    console.log('Banner added, checking result:', content.includes('env-banner'));
  } else {
    console.log('No banner added - foobar is falsy');
  }
  return content;
}

app.get('/header.html', (req, res) => {
  const fs = require('fs');
  let content = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
  content = addBannerToHtml(content, true);
  res.send(content);
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
