# NovaSphere v2 Landing Page

NovaSphere v2 imagines what personal computing could feel like when holograms, adaptive AI, and sustainable power blend into a single device. This repo contains the public marketing site that introduces the product, its feature set, pricing tiers, and company story.

## Highlights
- Responsive landing page with hero, feature grid, pricing comparison, product vision, and contact form sections
- Shared navigation/footer across pages (`index.html`, `team.html`) styled with a modern Montserrat type stack
- Lightweight client-side script (`script.js`) for interactive touches and accessibility refinements
- Modular CSS architecture (`styles.css`) with utility classes and component-specific styling
- Inline SVG assets and emoji accents to reinforce the futuristic brand language

## Tech Stack
- Static HTML5 templates
- CSS3 with custom properties and responsive layout primitives (Flexbox & CSS Grid)
- Vanilla JavaScript for progressive enhancement

No build step is required—assets are hand-authored and ready to ship.

## Project Structure
```
.
├── index.html          # Main marketing page
├── team.html           # Team spotlight page
├── header.html         # Shared header markup (optional include)
├── styles.css          # Global styles and component rules
├── script.js           # Front-end interaction helpers
├── images/             # Logo and product illustrations (SVG/PNG)
└── README.md
```

## Run Locally
Because this is a static site, you can preview it with any local web server.

```bash
# Option 1: Python (ships with most environments)
python -m http.server 3000

# Option 2: Node.js via npx (no install needed)
npx serve .
```

Then open `http://localhost:3000` (or the URL printed in your terminal) in your browser.

If you prefer, you can double-click `index.html` to open it directly, though some browsers restrict local font loading without a server.

## Customization Tips
- Update copy and CTAs directly within the HTML sections; most blocks are annotated with semantic IDs (`#features`, `#pricing`, `#product-vision`, etc.) for quick navigation.
- Replace assets under `images/` with brand-ready logos, background textures, or device renders while keeping the same filenames to avoid template changes.
- Expand `script.js` if you need richer interactions (form submission, analytics hooks) while keeping the baseline accessible for users without JavaScript.

## Deployment
Any static hosting provider (Vercel, Netlify, GitHub Pages, S3 + CloudFront, etc.) can serve the site as-is. Upload the repository contents, ensure caching rules allow fonts and SVGs, and you're live.

---

NovaSphere is a concept project created for showcasing futuristic product storytelling and front-end craftsmanship. Feel free to fork, remix, and adapt it for your own experiments.
