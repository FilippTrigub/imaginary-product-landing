# NovaSphere v2 Landing Page

NovaSphere is an imaginary next-generation personal computing device that blends holographic interfaces with adaptive AI. This repository hosts the marketing landing page for the Version 2.0 reveal site.

## Highlights
- Responsive single-page site built with semantic HTML5, CSS3, and a sprinkle of JavaScript.
- Hero section, feature grid, pricing table, product vision narrative, and contact form.
- Shared header/footer partials (`header.html`, `team.html`) for experimentation with reusable markup.
- Lightweight assets in `images/` (SVG illustrations, logo) to showcase the product concept.

## Quick Start
1. Clone or download the repository.
2. Open `index.html` directly in a modern browser **or** start a simple static server:
   ```bash
   # Option A: Python 3
   python -m http.server 8000

   # Option B: Node.js
   npx serve .
   ```
3. Visit `http://localhost:8000` (or the port shown) to browse the site.

## Project Structure
- `index.html` – main landing page with hero, features, pricing, vision, about, and contact sections.
- `styles.css` – global layout, typography, responsive breakpoints, and component styling.
- `script.js` – placeholder for interactive behavior (currently minimal).
- `header.html`, `team.html` – supplementary HTML fragments for experimentation or future expansion.
- `images/` – SVG product illustration, logo, and supporting artwork.

## Customizing the Page
- **Branding:** Replace assets in `images/` and update copy in `index.html` to reflect your product.
- **Styling:** Adjust colors, typography, and layout tokens in `styles.css`. Media queries start near the bottom of the file.
- **Interactions:** Extend `script.js` for animations, form handling, or analytics hooks.
- **Content Sections:** Duplicate the feature/pricing cards in `index.html` to add more offerings or testimonials.

## Deployment
Because the project is static, you can deploy it on any static hosting platform (e.g., Vercel, Netlify, GitHub Pages, S3 + CloudFront). Upload the repository contents or connect the platform to this repo for automatic deployments.

## License
NovaSphere is a fictitious brand; use this project freely for learning or demonstration purposes.
