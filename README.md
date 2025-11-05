# NovaSphere v2

NovaSphere v2 reimagines personal computing through a cinematic single-page narrative that blends holographic interfaces, quantum-grade performance, and neural-first security into one cohesive product story.

## Why NovaSphere v2
- **Immersive launch experience** that guides visitors from hero reveal to conversion.
- **Futuristic visual language** featuring gradients, glassmorphism, and subtle motion cues.
- **Modular content** spanning features, pricing, testimonials, press, and leadership bios.
- **Lightweight implementation** powered by vanilla HTML, CSS, and JavaScript.

## Tech Snapshot
- **Frontend:** `index.html`, `styles.css`, `script.js`
- **Team Spotlight:** `team.html` with executive bios and imagery
- **Shared Assets:** `/images` for logos, art direction, and mockups
- **Alternate Header:** `header.html` for experimentation or A/B testing

## Project Structure
- `index.html` — Primary landing journey with anchored sections, CTAs, and footer contact.
- `team.html` — Dedicated leadership showcase linked from the main navigation.
- `styles.css` — Global theme, layout primitives, responsive rules, and animation tuning.
- `script.js` — Smooth scrolling helpers and viewport-triggered feature reveals.
- `images/` — SVG iconography, device renders, and supporting visuals.
- `header.html` — Optional header concept kept for inspiration or future iterations.

## Getting Started
This is a fully static project. Open `index.html` directly or serve the directory for a production-like experience.

```bash
npm install --global serve
serve .
```

Visit the printed URL (defaults to `http://localhost:3000`).

### Recommended Workflow
1. Duplicate the repo or create a new branch for brand-specific content.
2. Update copywriting, imagery, and pricing in `index.html` and `team.html`.
3. Adjust gradients, blur intensity, and breakpoints in `styles.css` to match your visual identity.
4. Extend `script.js` with analytics, form handling, or additional interactions as needed.

## Customization Ideas
- Swap hero media with device renders or product walkthrough videos.
- Replace placeholder headshots in `team.html` with production-ready photography.
- Localize text by duplicating sections and toggling via navigation anchors.
- Introduce feature-specific callouts, badges, or metrics using existing card components.

## Deployment
- **Static hosts:** Vercel, Netlify, GitHub Pages, or any CDN.
- **Edge optimizations:** Pre-compress assets, add cache headers, and inline critical CSS if desired.
- **Accessibility:** Validate color contrast and keyboard navigation when adapting the design.

## Contributing
Issues and pull requests are welcome. For sizable changes, open an issue first to outline goals and gather feedback.

## License
This concept project ships without a formal license. Reach out before using the assets in commercial contexts.
