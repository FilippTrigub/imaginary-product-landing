# NovaSphere v2 Landing Experience

Concept marketing site for the fictional NovaSphere v2 personal computing platform. The project ships several static HTML demos that showcase the product story, pricing, navigation system, and team.

## Project Overview
- `index.html` – primary landing page covering hero messaging, feature highlights, pricing tiers, product vision, company info, and a contact form.
- `header.html` – standalone demo of the sticky navigation header with dropdown menus, breadcrumb trail, and mobile menu behaviour.
- `team.html` – team spotlight page with profile cards for key leaders.
- `styles.css` – shared styling with responsive grid, typography, and component rules.
- `script.js` – lightweight JavaScript powering interactions such as mobile navigation toggles and smooth scrolling.
- `images/` – brand assets used across pages (logos, product artwork).

## Features
- Responsive layout built on semantic HTML and CSS grid/flexbox utilities.
- Product storytelling sections (Hero, Key Features, Pricing Plans, Product & Vision, About).
- Enhanced navigation pattern with dropdowns, sticky header, and breadcrumb support.
- Team page with hover animations and easily swappable profile content.
- Contact form markup ready to connect to a backend or static form service.

## Getting Started
1. Clone or download the repository.
2. Open `index.html` (or any page) directly in a modern browser, or serve the directory locally:
   ```bash
   npx serve
   ```
   Then visit the provided URL (defaults to `http://localhost:3000`).

## Customization Tips
- Replace placeholder imagery in `team.html` with local assets and update copy as needed.
- Adjust the feature set, pricing tiers, and vision statements in `index.html` to match your product narrative.
- Update brand colors, typography, or spacing tokens in `styles.css` for different visual identities.
- Connect the contact form in `index.html` to your preferred form handler or backend service for submissions.

## Notes
- Google Fonts (Montserrat) are loaded via CDN; ensure internet access when previewing.
- No production build tooling is required—these pages are ready to host on any static site service.
