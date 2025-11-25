# NovaSphere v2 Landing Page

NovaSphere v2 is a concept marketing site for a next-generation personal computing platform built around holographic interfaces, quantum-grade performance, and adaptive AI. The repository contains static assets (HTML, CSS, JavaScript, and imagery) that render the public-facing landing page and a couple of supporting demos for the fictional product.

---

## Highlights
- Responsive layout with persistent navigation, hero messaging, and floating product imagery.
- Feature, pricing, and product-vision sections that combine marketing copy with animated cards and call-to-action buttons.
- Contact form enhanced with smooth scrolling, client-side validation feedback, and lightweight animations.
- Additional demo pages (`header.html`, `team.html`) that showcase extended navigation patterns and a team roster component using the same design system.

---

## Tech Stack
- **HTML5** for semantic page structure across all site sections.
- **CSS3** (single `styles.css` file plus inline demo overrides) for theming, gradients, responsive grid layouts, and subtle motion.
- **Vanilla JavaScript** (`script.js`) for smooth in-page navigation, form handling, and scroll-triggered animations.
- **Google Fonts (Montserrat)** for typography delivered via `<link>` preconnect hints.

---

## Project Structure
- `index.html` – primary landing page with hero, features, pricing, vision, about, and contact sections.
- `header.html` – enhanced navigation demo with dropdown menus, sticky behavior, and breadcrumb trail.
- `team.html` – team spotlight page reusing the global header/footer and introducing a grid of team members.
- `styles.css` – global styles, layout utilities, buttons, card patterns, and responsive breakpoints.
- `script.js` – front-end interactions: smooth anchor scroll, contact form alert/reset, and feature-card entrance animations.
- `images/` – SVG logo, product illustration, and supporting art used throughout the pages.

---

## Getting Started
You only need a static file server to preview the site locally.

1. Clone the repository and move into the project directory:
   ```bash
   git clone https://github.com/your-org/novasphere-v2.git
   cd novasphere-v2
   ```
2. Launch any static server. Two common options:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve .
   ```
3. Open `http://localhost:8000` (or the port reported by your server) in your browser.

All pages reference relative assets, so you can navigate directly to `/team.html` or `/header.html` once the server is running.

---

## Customization Guide
- **Branding & Colors**: Update the gradient, button accents, and background shades in `styles.css`. Key tokens live near the top under the button and header sections.
- **Copy & CTAs**: Modify headings, blurbs, and pricing details directly inside the corresponding `.html` files. Each section is clearly annotated with IDs like `#features`, `#pricing`, and `#contact`.
- **Imagery**: Swap assets in the `images/` directory, then update `<img>` references in the HTML to point to new filenames.
- **Interactions**: Extend the smooth scrolling or form handling logic in `script.js`. For example, replace the placeholder alert with an API call or add analytics tracking.
- **Responsive Tweaks**: Adjust media queries toward the bottom of `styles.css` to refine breakpoints or mobile layout behavior.

---

## Deployment
Because the site is fully static, you can deploy it to any CDN or static host:
- Drag-and-drop the folder into Netlify, Render, or Cloudflare Pages.
- Serve via Vercel using a “Static” project configuration.
- Host on GitHub Pages by pointing the repository’s Pages configuration to the main branch.

Ensure the root includes `index.html` so the host serves it by default.

---

## Contributing
This is a fictional marketing site, but contributions that improve responsiveness, accessibility, or developer experience are welcome. Please submit a pull request with a clear description of the change and screenshots or GIFs when UI updates are involved.

---

© 2025 NovaSphere Inc. (fictional). Built for demo and educational purposes.
