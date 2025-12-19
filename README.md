# NovaSphere

NovaSphere is a static landing page that showcases an imaginary product focused on next-generation personal computing and holographic interfaces.

**This repository** contains the site source (HTML, CSS, JS, and assets) used to render the NovaSphere landing pages.

**Quick summary**
- Lightweight, static site built with plain HTML/CSS/JavaScript
- Ready to serve from any static hosting provider (Vercel, Netlify, GitHub Pages, S3, etc.)
- Files of interest: `index.html`, `styles.css`, `script.js`, `header.html`, and `images/`

**Live preview**
- Open `index.html` in your browser, or serve the directory with a simple static server:
  - With Python: `python3 -m http.server 8000`
  - With Node (via npx): `npx http-server -c-1` or `npx serve`

**Recommended workflow**
- Clone the repo: `git clone <repo-url>`
- Change into the project directory: `cd <repo>`
- Serve locally (one of the commands above) and open `http://localhost:8000` (or the port shown)

**Project structure**
- `index.html` — main landing page
- `header.html` — reusable header fragment
- `styles.css` — site styles
- `script.js` — interactive behavior
- `images/` — image assets used on the site
- `team.html` — team / credits page

Getting around the code
- Styling is in `styles.css`; use class names present in the HTML files to find related rules.
- Interactive behavior and small UI effects are implemented in `script.js`.
- `header.html` is included to demonstrate a modular header fragment; it is referenced from the other HTML files.

Contributing
- This is a static design-focused repository. To contribute:
  1. Fork the repository and create a feature branch.
  2. Make HTML/CSS/JS changes locally and verify in your browser.
  3. Open a pull request describing the change.

License
- This project is provided as-is for demonstration purposes. No license specified.

Contact
- For questions about this demo site, open an issue in the repository.
