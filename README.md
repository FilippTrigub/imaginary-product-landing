# NovaSphere v2

> The future of personal computing, today.

NovaSphere v2 is a concept marketing experience for a speculative holographic computing platform. The project ships as a static site built with vanilla HTML, CSS, and JavaScript to keep the stack lightweight and portable.

## Table of Contents

- [Highlights](#highlights)
- [Preview & Hosting](#preview--hosting)
- [Quick Start](#quick-start)
- [Project Layout](#project-layout)
- [Development Workflow](#development-workflow)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Optimization Checklist](#optimization-checklist)
- [Contributing](#contributing)
- [License & Attribution](#license--attribution)

## Highlights

- Responsive landing journey covering hero, feature grid, pricing, and narrative sections.
- Modular header include (`header.html`) reused across the landing and team views.
- Scroll-triggered animations and interactive behaviors powered by `script.js`.
- BEM-inspired CSS class naming with custom properties for easy theming.
- Zero-build workflow—no bundlers, frameworks, or runtime dependencies required.

## Preview & Hosting

- **Local preview** – Serve the project from any static file server (see [Quick Start](#quick-start)).
- **Suggested hosts** – Vercel, Netlify, GitHub Pages, or any static hosting provider.
- **Browser targets** – Latest two releases of Chrome/Edge, Firefox, Safari, plus iOS Safari and Chrome Android.

## Quick Start

```bash
git clone <repository-url>
cd novasphere-v2

# Launch a local server
npx serve .

# Visit the app
open http://localhost:3000
```

Alternative servers:

- `python -m http.server 8000`
- VS Code Live Server extension via the `Go Live` button

## Project Layout

```
.
├── index.html      # Main landing experience
├── team.html       # Team spotlight view
├── header.html     # Shared header/navigation include
├── styles.css      # Global styles, components, utilities
├── script.js       # Animation hooks and UI interactions
└── images/         # Logos, renders, and decorative art
```

## Development Workflow

- **Edit copy** – Update marketing messaging directly in `index.html` and `team.html`. Key sections include the hero narrative, feature cards, pricing tiers, and product vision story.
- **Adjust styling** – `styles.css` is organized into variables, base styles, components, and utilities. Follow the existing BEM naming patterns when introducing new blocks or elements.
- **Tune interactions** – `script.js` handles scroll reveals, navigation state, and lightweight UI behaviors. Extend existing functions for new animations or controls.
- **Swap assets** – Replace imagery inside `images/`. Maintain filenames and aspect ratios when possible to preserve layout assumptions.

### Content Tips

- Keep feature descriptions concise (2–3 sentences per card).
- Align pricing tiers and CTAs with the speculative product narrative.
- When adding sections, mirror the existing `section` + `container` structure for consistent spacing.

## Design System

- **Colors** – Customize CSS variables in the `:root` declaration to theme the experience without touching component rules.
- **Typography** – Montserrat is loaded via Google Fonts. Adjust scale or weights in the root variables or typography section.
- **Spacing** – Utility classes and container widths live near the top of `styles.css`. Reuse them to preserve rhythm across new content.
- **Components** – Buttons, cards, badges, and grids follow selectors like `.feature-card` and `.pricing-card`. Extend these patterns rather than introducing ad-hoc names.

## Deployment

Static hosting is sufficient. Popular options:

- **Vercel** – `vercel` and follow the prompts.
- **Netlify** – `netlify deploy --prod` after configuring a site.
- **GitHub Pages** – Enable Pages from the repository settings.

Ensure your host serves the repository root or the `index.html` entry point.

## Optimization Checklist

- Minify assets (`npx minify styles.css > styles.min.css`, `npx minify script.js > script.min.js`) before production, updating references as needed.
- Compress imagery with TinyPNG, ImageOptim, or Squoosh; consider WebP/AVIF exports for hero visuals.
- Configure cache headers on your host to leverage long-lived asset caching.
- Add analytics or tracking scripts before `</body>` if required for your deployment.

## Contributing

- Fork the repository and create a topic branch (e.g., `feature/add-new-section`).
- Follow existing formatting, naming, and accessibility patterns.
- Test across desktop and mobile breakpoints before submitting a pull request.
- Include screenshots or short screen recordings for visual updates.

## License & Attribution

- This project is a fictional concept produced for portfolio and demonstration purposes.
- NovaSphere, product imagery, and copy are speculative and not affiliated with any real brand.
