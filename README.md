# NovaSphere v2 Landing Page

A modern, responsive landing page showcasing NovaSphere v2 — a revolutionary personal computing device featuring holographic interfaces, quantum processing, and innovative technology.

## Overview

This project is the official landing page for NovaSphere v2, designed to present the product's key features, pricing plans, company vision, and engage potential customers. The site emphasizes the device's cutting-edge capabilities while providing clear pathways for pre-orders and inquiries.

## Features

- **Holographic Interface** — Interact with digital content in three dimensions
- **Quantum Processing** — Next-generation performance with minimal energy consumption
- **Neural Security** — Advanced biometric authentication that adapts to user patterns
- **Infinite Battery** — Revolutionary energy harvesting for weeks of runtime

## Project Structure

```
/
├── index.html           # Main landing page
├── header.html          # Reusable header component
├── team.html            # Team/staff page
├── styles.css           # Global styling
├── script.js            # Interactive functionality
├── images/              # Product and branding assets
└── README.md            # This file
```

## Sections

1. **Hero Section** — Product introduction with call-to-action buttons
2. **Features** — Grid showcasing four key product capabilities
3. **Pricing** — Three-tier pricing model (Standard, Pro, Enterprise)
4. **Product & Vision** — Detailed product information and 5-year roadmap
5. **About** — Company background and mission
6. **Contact** — Form for inquiries and pre-orders
7. **Footer** — Navigation links and company contact information

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 22+ (for local development/build processes, if applicable)
- Basic HTTP server for local testing

### Running Locally

1. Clone the repository:
```bash
git clone <repository-url>
cd novasphere
```

2. Open the landing page in your browser:
```bash
# Option 1: Direct file access
open index.html

# Option 2: Using a local server
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

## Technologies Used

- **HTML5** — Semantic markup and structure
- **CSS3** — Modern styling with responsive design
- **JavaScript** — Interactive elements and form handling
- **Google Fonts** — Montserrat font family for typography

## Responsive Design

The landing page is fully responsive and optimized for:
- Desktop browsers (1920px and above)
- Tablets (768px - 1024px)
- Mobile devices (320px - 767px)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Development

### Customization

To customize the landing page:

1. **Update content** — Edit `index.html` for text, pricing, and features
2. **Modify styles** — Update `styles.css` for colors, layouts, and typography
3. **Add interactivity** — Extend `script.js` for new interactions and animations

### Contact Form

The contact form is currently a frontend implementation. To make it functional, you'll need to:
- Connect it to a backend service (e.g., email service, API endpoint)
- Implement form validation and submission handling
- Set up email notifications

## Deployment

This is a static site that can be deployed to any static hosting service:
- **Vercel** — Recommended for seamless deployment
- **GitHub Pages**
- **Netlify**
- **AWS S3 + CloudFront**
- **Traditional web servers** (Apache, Nginx, etc.)

### Deploy to Vercel

1. Push to a Git repository
2. Connect to Vercel dashboard
3. Vercel automatically deploys on every push

## License

© 2025 NovaSphere Inc. All rights reserved.

## Contact

For inquiries about NovaSphere v2, please visit:
- **Website:** novasphere.com
- **Email:** info@novasphere.com
- **Address:** 123 Innovation Drive, Tech Valley, CA 94025
- **Phone:** (555) 123-4567

---

**Version:** 2.0
**Last Updated:** December 2025