# NovaSphere v2 Landing Site

NovaSphere v2 is a fictional product launch site that explores what a next-generation personal computing experience might look like. The project highlights a premium marketing page with responsive layouts, smooth scrolling, animated feature cards, and a playful contact flow—all built with vanilla web technologies.

## Highlights
- Modern landing page with hero, product vision, pricing, and contact sections.
- Responsive layout powered by custom CSS and Google Fonts (Montserrat family).
- Smooth anchor scrolling, animated feature cards, and lightweight form handling in `script.js`.
- Additional demo header in `header.html` plus a standalone team page to showcase alternative layouts.

## Quick Start
1. Clone or download this repository.
2. Serve the project with any static web server:
   - `npx serve .`
   - or `python3 -m http.server 8000`
3. Open `http://localhost:3000` (or the port shown in your terminal) in a modern browser.

The pages are static HTML/CSS/JS, so you can also open `index.html` directly from the filesystem for a quick preview. Using a local server ensures fonts and relative asset paths behave as expected.

## Project Structure
```text
.
├── index.html        # Main landing page
├── header.html       # Enhanced header/navigation demo
├── team.html         # Team spotlight page variant
├── styles.css        # Global styles and responsive layout rules
├── script.js         # Scroll behaviors, form handler, and animations
├── images/           # SVG logos, device mockups, and background art
└── README.md
```

## Customizing
- **Branding:** Replace assets under `images/` and adjust the gradient variables near the top of `styles.css`.
- **Sections:** Duplicate or remove sections in `index.html`; the layout uses semantic containers and utility classes to keep edits intuitive.
- **Interactions:** Extend `script.js` if you need richer validation or API-backed forms—current logic stubs out the network call with an `alert`.

## Browser Support
The site targets evergreen browsers (latest Chrome, Edge, Firefox, Safari). For older browsers you may want to add fallbacks for the CSS gradients and smooth scroll behavior.

## License
No explicit license is included. Treat this project as reference material unless you add a license of your own.
