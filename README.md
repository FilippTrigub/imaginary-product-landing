# NovaSphere — Landing Pages (v2.0)

This repository contains the static landing pages for **NovaSphere v2.0**, an imaginary product that showcases a futuristic personal computing platform with holographic interfaces, quantum processing, and adaptive AI.

The site is a small static prototype intended to demonstrate layout, content, and visual design for a product marketing site.

Contents
- `index.html` — Main landing page with hero, features, pricing summary, product vision, contact form, and footer.
- `team.html` — Team page profiling the core team members.
- `header.html` — Enhanced header/navigation demo with dropdowns and breadcrumb example.
- `styles.css` — Global styles used across pages.
- `script.js` — Small interactive behaviors used by the pages.
- `images/` — SVG and image assets (logo, product illustrations).

Key Features (as described in the HTML)
- Holographic Interface — 3D/volumetric product concept and marketing content.
- Quantum Processing — Descriptive content about the device's performance.
- Neural Security — Biometric and adaptive security messaging.
- Product Vision — Roadmap / five-year vision and developer platform messaging.

Local Preview
To preview the static site locally, run a simple HTTP server from the project root and open a browser at the shown address.

- Using Python 3 (recommended):

  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000 in your browser
  ```

- Using Node (if you prefer a static server):

  ```bash
  # if you have a static server installed, e.g. serve
  npx serve . -l 8000
  # then open http://localhost:8000
  ```

Development Notes
- This is a static, client-side site — no build step is required.
- Edit `styles.css` for global styling changes and `script.js` for interactive behavior.
- Images are located in `images/`. SVGs are used for logo and product illustrations.

Testing & Previewing
- Use any modern browser to preview pages. The pages are responsive and include a mobile navigation demo in `header.html`.

Contributing
- This project is a small static prototype. If you want to extend it:
  - Keep markup semantic and accessible.
  - Add components in separate partial files if converting to a templating system.
  - Keep CSS scoped and avoid global overrides where possible.

Contact
- The demo includes a sample contact form markup; it is not wired to a backend. For real deployments, replace the form action with your backend endpoint or a form provider.

Credits
- Designed as a fictional demo for NovaSphere v2.0 (© 2025 NovaSphere Inc. in the demo content).
