# NovaSphere v2

> The future of personal computing, today.

A static marketing site showcasing NovaSphere v2: a next-generation computing platform featuring volumetric holographic displays, quantum-assisted processing, neural-grade security, and self-sustaining power systems.

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd novasphere-v2

# Serve locally
npx serve .
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
.
├── index.html      # Main landing page with product showcase and pricing
├── team.html       # Team spotlight page
├── header.html     # Reusable header component
├── styles.css      # Global styles and component definitions
├── script.js       # Interactive behaviors and animations
└── images/         # Product renders and brand assets
```

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - Scroll-triggered reveals and transitions
- **Modern Layout** - Flexbox-based grid system with BEM methodology
- **Zero Build** - Pure HTML/CSS/JS, no compilation required
- **Fast Loading** - Minimal dependencies, optimized assets

## Development

### Prerequisites

- Modern web browser
- Node.js 14+ (optional, for local server)

### Local Development

**Option 1: Simple HTTP Server**
```bash
npx serve .
```

**Option 2: Python Server**
```bash
python -m http.server 8000
```

**Option 3: VS Code Live Server**
Install the Live Server extension and click "Go Live" in the status bar.

### Editing Content

**Update Product Information**
Edit content directly in `index.html` - look for sections like:
- Hero section
- Features grid
- Pricing tiers
- CTA buttons

**Modify Styles**
All styling lives in `styles.css` with organized sections:
- CSS variables for theming
- Typography scale
- Component styles
- Utility classes

**Change Interactions**
Update `script.js` to modify:
- Scroll animations
- Navigation behavior
- Form handling

## Customization

### Branding

Replace images in the `images/` directory:
- Product renders
- Team photos
- Icons and logos

Maintain aspect ratios to preserve responsive layouts.

### Typography

Adjust the type scale in `styles.css`:
```css
:root {
  --font-primary: 'Inter', sans-serif;
  --scale-ratio: 1.25;
}
```

### Color Scheme

Update CSS custom properties:
```css
:root {
  --color-primary: #your-color;
  --color-accent: #your-accent;
}
```

## Deployment

### Recommended Platforms

**Vercel**
```bash
vercel
```

**Netlify**
```bash
netlify deploy --prod
```

**GitHub Pages**
Enable in repository settings under Pages section.

### Performance Optimization

Before deploying to production:

1. **Minify Assets**
   ```bash
   npx minify styles.css > styles.min.css
   npx minify script.js > script.min.js
   ```

2. **Optimize Images**
   - Compress with tools like TinyPNG or ImageOptim
   - Consider WebP format for better compression

3. **Enable Caching**
   Configure cache headers on your hosting platform

4. **Add Analytics**
   Insert tracking script before closing `</body>` tag

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork & Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Follow Conventions**
   - Use BEM naming for CSS classes
   - Maintain existing code style
   - Keep commits atomic and descriptive

3. **Test Changes**
   - Verify responsive behavior
   - Check cross-browser compatibility
   - Test all interactive elements

4. **Submit PR**
   - Include screenshots for visual changes
   - Reference related issues
   - Request review before merging

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

This project is a fictional concept created for demonstration purposes.

## Acknowledgments

NovaSphere v2 is an experimental portfolio piece exploring speculative technology and modern web design patterns.
