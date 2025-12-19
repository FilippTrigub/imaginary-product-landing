# NovaSphere — Landing Page

This repository contains a small static website for the NovaSphere project. It is a front-end landing page and example site intended for local preview and simple deployments.

**What this repo contains**
- `index.html` — Main landing page.
- `team.html` — Team page showcasing contributors.
- `header.html` — Shared header include used by pages.
- `styles.css` — Site styles.
- `script.js` — Client-side JavaScript.
- `images/` — Images used by the site.

**Quick start — Preview locally**
You can preview the site with any static file server. From the repository root run one of the following:

- With Node (`npx http-server`):
  - `npx http-server -c-1 . -p 8080`
- With Python 3 (`http.server`):
  - `python3 -m http.server 8080`

Then open `http://localhost:8080/` in your browser.

**Development notes**
- Edit pages: modify `index.html` or `team.html`.
- Shared header: `header.html` is included by pages to keep navigation consistent.
- Styles and scripts: update `styles.css` and `script.js` for UI and behavior changes.
- Images: add or replace assets in `images/`.

**Deployment**
- This is a static site and can be deployed to any statichosting (Vercel, Netlify, GitHub Pages, S3, etc.).
- For Vercel or Netlify, simply point the deploy target to the repository root; no build step is required.

**Project structure**
- `index.html` — Landing page (`index.html`).
- `team.html` — Team page (`team.html`).
- `header.html` — Reusable header include (`header.html`).
- `styles.css` — Global styles (`styles.css`).
- `script.js` — Client-side logic (`script.js`).
- `images/` — Image assets (`images/`).

**License & contact**
- This repository contains example content. Adapt and reuse as needed.
- For questions or suggested changes, open an issue or submit a pull request.
