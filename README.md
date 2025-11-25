# NovaSphere v2 Landing Page

Immersive single-page marketing site for NovaSphere v2, an imaginary next-generation personal computing platform. The page highlights hardware capabilities, pricing tiers, company story, and a contact form with lightweight interactivity.

## Highlights
- Responsive layout with hero, feature grid, pricing plans, product vision, and footer sections.
- Smooth in-page navigation and scroll-triggered feature card animations implemented with vanilla JavaScript.
- Contact form mockup that provides instant confirmation to users (client-side only).
- Optimized typography and icons via Google Fonts plus emoji-based feature markers for quick visual scanning.

## Project Structure
- `index.html` — main landing page markup wired to all assets.
- `styles.css` — primary styling for layout, typography, colors, and responsive behavior.
- `script.js` — handles smooth scrolling, feature card animations, and contact form acknowledgement.
- `images/` — SVG logos and product illustrations used across the site.
- `header.html`, `team.html` — supporting HTML fragments/pages you can adapt for expansion.

## Getting Started
1. Clone or download the repository.
2. Open `index.html` directly in a browser **or** start a simple static server:
   ```bash
   # Option A: use Node's serve
   npx serve .

   # Option B: use Python
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:3000` (serve default) or `http://localhost:8000` (Python) to preview.

No build step is required; all assets are plain HTML/CSS/JS.

## Customization Tips
- Update hero copy, pricing tiers, or company details directly in `index.html`.
- Replace imagery in `images/` with your own SVG/PNG assets and update `alt` text for accessibility.
- Extend the animation behavior in `script.js` if you add new sections that should fade in on scroll.
- Adjust theme colors, typography scales, and spacing in `styles.css`; media queries are grouped near the bottom for quick tweaks.

## Contributing
Issues and pull requests are welcome. For larger changes, outline the proposed improvements to keep the fictitious NovaSphere experience cohesive.
