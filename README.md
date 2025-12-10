# NovaSphere v2 Landing Experience

NovaSphere v2 is an imaginary product launch site that explores what a premium mixed-reality computing platform could look like. The project ships a polished landing page, an enhanced navigation demo, and a team overview page—all powered by vanilla HTML, CSS, and JavaScript so it can be dropped into any static hosting setup.

## Highlights
- **Immersive storytelling**: Hero messaging, feature grid, pricing tiers, and product vision sections tailored to futuristic hardware.
- **Interactive polish**: Smooth-scrolling navigation, animated feature cards, and a responsive sticky header keep the page feeling dynamic.
- **Reusable layouts**: A shared visual language across the landing page, enhanced header demo (`header.html`), and team page (`team.html`).
- **Ready-to-modify styling**: Centralized typography, color gradients, and responsive breakpoints in `styles.css`.

## Project Structure
- `index.html` – Main marketing page with hero, features, pricing, product vision, about, and contact sections.
- `header.html` – Standalone demo showcasing an advanced header with dropdown menus and breadcrumb navigation.
- `team.html` – Grid layout highlighting fictional NovaSphere team members.
- `styles.css` – Global design system including layout grids, component styling, gradients, and media queries.
- `script.js` – Smooth scrolling, contact form handling stub, and scroll-triggered feature card animations.
- `images/` – SVG assets for branding and device illustrations used throughout the pages.

## Getting Started
1. Clone or download this repository.
2. Launch the site:
   - Option A: Open `index.html` directly in your browser.
   - Option B (recommended for local testing): serve the project root with any static server, e.g.:
     ```bash
     npx serve .
     ```
3. Explore additional demos at `header.html` and `team.html`.

## Customization Tips
- Update colors or typography in `styles.css`—the gradients are defined near the top of the file for quick tweaks.
- Replace placeholder images in `team.html` with real assets by swapping the `src` attributes.
- Hook the contact form (`script.js`) to your backend or a service such as Formspree; the current implementation displays a client-side success alert only.
- Add or remove sections by following the structural patterns already in `index.html`; utility classes (e.g., `.container`, `.feature-card`) keep layout changes minimal.

## Suggested Next Steps
- Integrate a deployment workflow (e.g., Vercel, Netlify, GitHub Pages) for easy sharing.
- Expand content with FAQs, a technical specs page, or blog posts to flesh out the NovaSphere product universe.
- Layer in basic accessibility testing (keyboard nav, contrast checks) to ensure the futuristic UI is inclusive by default.
