# NovaSphere v2.0

A modern, responsive landing page for NovaSphere - a futuristic personal computing device featuring holographic interfaces, quantum processing, and revolutionary energy technology.

## Overview

This project showcases a product landing page built with clean HTML, CSS, and vanilla JavaScript. It demonstrates modern web development practices with responsive design, smooth animations, and an engaging user experience.

## Features

### Product Highlights
- **Holographic Interface** - 3D interactive digital content
- **Quantum Processing** - High-performance, energy-efficient computing
- **Neural Security** - Advanced biometric authentication
- **Infinite Battery** - Revolutionary energy harvesting technology

### Website Capabilities
- Fully responsive design optimized for all screen sizes
- Smooth scroll navigation with anchor links
- Animated feature cards on scroll
- Interactive pricing tiers (Standard, Pro, Enterprise)
- Contact form with validation
- Team member showcase page
- Modern typography using Montserrat font family
- Clean, professional styling with hover effects

## Project Structure

```
.
├── index.html          # Main landing page
├── team.html           # Team member showcase
├── styles.css          # Global styles
├── script.js           # Interactive functionality
├── header.html         # Reusable header component
└── images/             # Logo and product images
    ├── logo.svg
    └── product.svg
```

## Pages

### Main Landing Page (index.html)
- Hero section with product introduction
- Key features showcase
- Pricing plans (3 tiers)
- Product & Vision section with 5-year roadmap
- About section
- Contact form
- Comprehensive footer

### Team Page (team.html)
- Meet the team section
- Four key team members with bios
- CEO & Founder, CTO, Head of Research, Design Director

## Technology Stack

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with flexbox and grid layouts
- **JavaScript (Vanilla)** - No frameworks, pure DOM manipulation
- **Google Fonts** - Montserrat font family

## Setup and Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for best experience)

### Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd novasphere
```

2. Open directly in browser:
```bash
# Simply open the index.html file in your browser
open index.html
```

Or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## Features Breakdown

### Smooth Scrolling
Click any navigation link to smoothly scroll to the corresponding section with a header offset for optimal viewing.

### Form Handling
The contact form includes basic validation and submission handling. Currently displays an alert message (production version would integrate with a backend API).

### Scroll Animations
Feature cards fade in and slide up as they enter the viewport, creating an engaging scroll experience.

### Responsive Design
The layout adapts seamlessly across devices:
- Desktop: Full multi-column layouts
- Tablet: Adjusted grid columns
- Mobile: Single-column stacked layout

## Customization

### Updating Content
- Edit HTML files to modify text content
- Update `styles.css` for design changes
- Modify `script.js` for behavioral changes

### Color Scheme
Primary colors used:
- Primary: `#6C63FF` (purple-blue)
- Secondary: `#4CAF50` (green)
- Neutral: Various grays for text and backgrounds

### Images
Replace placeholder images in the `/images` directory:
- `logo.svg` - Company logo
- `product.svg` - Product showcase image
- Team photos use placeholder.com (replace with actual photos)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Minimal dependencies (no frameworks)
- Optimized CSS with efficient selectors
- Lazy-loading compatible structure
- Fast load times

## Future Enhancements

Potential features to add:
- Backend integration for contact form
- Product demo video modal
- Blog section
- Customer testimonials
- Newsletter signup
- Multi-language support
- Dark mode toggle

## Contributing

This is a demonstration project. Feel free to fork and customize for your own projects.

## License

Copyright 2025 NovaSphere Inc. All rights reserved.

---

**Version:** 2.0
**Last Updated:** 2025-12-19
**Status:** Active Development
