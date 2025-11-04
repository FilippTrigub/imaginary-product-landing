# NovaSphere – The Future of Personal Computing

NovaSphere is a single-page marketing site for an imagined line of holographic, spatial-computing devices. The site highlights the product vision, team, and call-to-action through responsive layouts, layered imagery, and subtle animations.

## Features
- Full-bleed hero section with call-to-action buttons and layered background imagery.
- Feature highlight cards describing NovaSphere's holographic interaction model.
- Dedicated team page (`team.html`) reusing the shared navigation found in `header.html`.
- Responsive typography and layout rules defined in `styles.css` with breakpoint adjustments.
- Interactive scroll and tab effects powered by lightweight JavaScript in `script.js`.

## Tech Stack
- Static HTML (`index.html`, `team.html`, `header.html`).
- Modern CSS with custom properties and animation helpers (`styles.css`).
- Vanilla JavaScript for user interaction enhancements (`script.js`).
- Local assets stored under `images/`.

## Project Structure
```
.
├── header.html      # Shared navigation snippet included via templating
├── images/          # Product renders, background textures, team portraits
├── index.html       # Primary landing page
├── script.js        # Interaction logic (scroll effects, tab toggles)
├── styles.css       # Global styles and responsive rules
└── team.html        # Team spotlight page
```

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in your browser to explore the experience.
3. Visit `team.html` to view team-specific content.

For local development with live reload, you can serve the directory using any static server (e.g., `npx serve .` or Python's `python3 -m http.server`).

## Customization Tips
- Update copy and calls-to-action directly within `index.html` and `team.html`.
- Swap imagery by replacing assets in `images/`; keep filenames consistent or adjust `src` attributes.
- Tweak colors, gradients, and spacing tokens inside the root section of `styles.css`.
- Extend interactivity by adding modular functions to `script.js`.

## License
No license is specified. If you intend to reuse these assets or code, add an appropriate license file to clarify usage rights.
