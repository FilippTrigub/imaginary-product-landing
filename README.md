# NovaSphere — Static Landing Page

A small, dependency-free static marketing site for the fictional NovaSphere product. This repository contains plain HTML, CSS, and JavaScript files intended to be edited directly and served from any static host.

## What’s included

- index.html — Main landing page
- header.html — Reusable header/navigation snippet
- team.html — Team / about page
- styles.css — Global styles (edit to adjust look-and-feel)
- script.js — Small client-side helpers (smooth scrolling, UI behavior)
- images/ — SVG assets used by the site (logo.svg, product.svg)

## Quick local preview

Serve the directory with a simple static HTTP server and open http://localhost:8000.

- Python 3 (recommended, no install required):

  python3 -m http.server 8000

- Node.js (using http-server):

  npm install -g http-server
  http-server -c-1 -p 8000

Adjust the port as needed.

## Development notes

- No build step or package manager required — edit the HTML/CSS/JS files directly.
- Keep UI concerns in styles.css and behavior in script.js to maintain separation of concerns.
- header.html is a fragment included for convenience when composing pages; it is not dynamically injected by a build tool.
- SVGs in /images are safe to edit or replace for branding.

## Browser testing & accessibility

- Test in modern evergreen browsers (Chrome, Firefox, Edge, Safari).
- Preserve semantic HTML (heading order, alt text for images) when editing.
- Use browser DevTools to inspect layout, responsiveness, and console errors.

## Contributing

This is a small example project. To propose changes, open an issue or submit a pull request with a clear description and steps to reproduce.

## Sandbox environment

Commands run in a sandbox using Amazon Linux 2023 with dnf and Node.js 22. Python 3 is available if needed.

## License

This repository is a demo. Add a LICENSE file with your chosen license if you plan to publish or reuse this code.
