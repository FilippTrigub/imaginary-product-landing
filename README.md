# NovaSphere v2 Landing Page

NovaSphere is a concept experience exploring what a future, holographically powered personal computer could feel like. This repository contains the marketing landing page demo that highlights the product story, pricing plans, and contact touchpoints for the imaginary NovaSphere v2 release.

## Features
- Immersive hero section introducing the NovaSphere device and quick call-to-action buttons
- Feature grid detailing holographic interface, quantum processing, neural security, and infinite battery
- Pricing cards with tiered plans and a featured option for the Pro edition
- Product vision section with supporting stats, animated visuals, and long-term roadmap messaging
- About and contact sections with a functional (mock) form submission flow and smooth scrolling navigation

## Tech Stack
- HTML5 for semantic structure
- CSS3 with responsive layout utilities and custom animations (`styles.css`)
- Vanilla JavaScript for smooth scrolling, feature card animations, and client-side form handling (`script.js`)
- Google Fonts (Montserrat) and SVG/PNG assets in `images/`

## Getting Started
1. Clone or download this repository.
2. Serve the site locally with any static file server. A quick option is:
   ```bash
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000` in a browser to explore the landing page experience.

You can also use `npx serve` or any preferred development server if you already have Node.js installed.

## Project Structure
```
.
├── index.html       # Main landing page
├── team.html        # Optional team spotlight page referenced from navigation
├── header.html      # Standalone header markup (for templating experiments)
├── styles.css       # Global styles, layout rules, and component styling
├── script.js        # Smooth scrolling, form handling, and feature animations
├── images/          # Logo, product artwork, and supporting graphics
└── README.md        # Project overview and usage guide (this file)
```

## Customization Tips
- Update copy, pricing, or feature highlights directly in `index.html`.
- Swap out imagery in the `images/` directory to match your own branding.
- Extend animations and transitions within `styles.css` and `script.js`.
- If you integrate with a backend service for the contact form, replace the client-side alert with an API call.

## Deployment
Because the site is fully static, it can be deployed to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages, Amazon S3 + CloudFront) by uploading the repository contents.

## Contributing
Pull requests are welcome for enhancements, design refinements, or accessibility improvements. Please open an issue first to discuss significant changes.

## License
No license has been provided. Treat this project as all rights reserved unless you add a license of your own.
