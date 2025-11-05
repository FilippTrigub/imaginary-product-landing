# NovaSphere v2 Marketing Site

NovaSphere v2 imagines a paradigm shift in personal computing: volumetric holographic displays, quantum-assisted processing, neural-grade security, and self-sustaining power. This repository hosts the static marketing experience that communicates the product story and vision.

## Overview

- `index.html` – flagship landing page with product narrative, pricing, and lead capture.
- `header.html` – shared header fragment injected across secondary pages.
- `team.html` – spotlight on the visionary team behind NovaSphere v2.
- `styles.css` – global layout, typography, and component styling.
- `script.js` – smooth scrolling, reveal animations, and minor UI helpers.
- `images/` – hero renders, iconography, and branding assets.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` directly in a browser for a quick preview, or run a lightweight static server for live reload:
   ```bash
   npx serve .
   ```
3. Edit HTML, CSS, or JS files and refresh your browser to see updates.

### Suggested Tooling

- Install the Live Server extension (VS Code or similar) for auto-refresh.
- Use a CSS preprocessor or PostCSS locally if you plan to add advanced styling workflows.

## Customization Tips

- Replace assets in `images/` with your own renders; maintain consistent dimensions to preserve layout.
- Update CTA links, pricing tiers, and copy directly in `index.html`.
- Mirror any global navigation edits in `header.html` and `team.html` to keep pages in sync.
- Keep the typography scale defined in `styles.css` to retain visual hierarchy.

## Deployment

- Host on any static provider (Vercel, Netlify, GitHub Pages, S3) without additional build steps.
- Ensure relative asset paths remain intact when uploading.
- Minify `styles.css` and `script.js` and enable caching headers for optimal performance.
- Consider adding analytics or form integrations by injecting scripts at the end of `index.html`.

## Contributing

1. Fork the repository and create a feature branch.
2. Align new components with existing naming conventions (BEM-style classes, flexbox grid).
3. Provide before/after screenshots for visual tweaks in your pull request.
4. Request review from another contributor prior to merging.

---

_NovaSphere v2 is a fictional concept crafted for experimentation and portfolio storytelling._
