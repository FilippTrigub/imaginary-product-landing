# NovaSphere v2.0 - The Future of Personal Computing

![NovaSphere Logo](images/logo.svg)

A modern, responsive landing page showcasing NovaSphere, a revolutionary holographic computing device with quantum processing capabilities. This project demonstrates contemporary web design principles with smooth animations, intuitive navigation, and a clean, professional aesthetic.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that adapts seamlessly to desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, gradient-based design with smooth animations and transitions
- **Interactive Elements**: Smooth scrolling navigation, animated feature cards, and hover effects
- **Product Showcase**: Comprehensive sections including features, pricing, team, and contact information
- **Form Handling**: Contact form with client-side validation and submission handling
- **Accessibility**: Semantic HTML structure with proper ARIA labels and keyboard navigation support

## 📁 Project Structure

```
/vercel/sandbox/
├── index.html          # Main landing page
├── team.html           # Team members page
├── header.html         # Reusable header component
├── styles.css          # Global styles and responsive design
├── script.js           # Interactive functionality and animations
├── README.md           # Project documentation
├── .gitignore          # Git ignore configuration
└── images/
    ├── logo.svg        # NovaSphere logo
    └── product.svg     # Product illustration
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd /vercel/sandbox
   ```

2. **Open the project**:
   - **Option 1**: Simply open `index.html` in your web browser
   - **Option 2**: Use a local development server:
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server -p 8000
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the site**:
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 📄 Pages

### Main Landing Page (`index.html`)
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Features Section**: Four key product features with icons and descriptions
- **Pricing Section**: Three pricing tiers (Standard, Pro, Enterprise)
- **Product & Vision Section**: Detailed product information and company vision
- **About Section**: Company background and mission
- **Contact Section**: Contact form for inquiries
- **Footer**: Navigation links, contact information, and legal links

### Team Page (`team.html`)
- Showcases the four key team members:
  - Sarah Chen - CEO & Founder
  - Marcus Rodriguez - Chief Technology Officer
  - Dr. Aisha Patel - Head of Research
  - James Wilson - Design Director

## 🎨 Design System

### Color Palette
- **Primary Gradient**: `#6e8efb` → `#a777e3`
- **Background**: `#f8f9fa`
- **Text**: `#333` (primary), `#666` (secondary)
- **White**: `#ffffff`
- **Dark**: `#2d3748` (footer)

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)

### Components
- **Buttons**: Primary (gradient) and Secondary (outlined)
- **Cards**: Feature cards, pricing cards, team member cards
- **Forms**: Styled input fields with focus states
- **Navigation**: Fixed header with smooth scroll

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Montserrat font family
- **SVG**: Scalable vector graphics for logo and product images

## ✨ Key Features Implementation

### Smooth Scrolling
```javascript
// Implemented in script.js
// Smooth scroll to anchor links with offset for fixed header
```

### Animated Feature Cards
```javascript
// Cards fade in and slide up as they enter viewport
// Uses Intersection Observer pattern
```

### Responsive Grid Layouts
```css
/* Auto-fit grid system for features, pricing, and team */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

### Floating Animation
```css
/* Hero image floats with CSS keyframe animation */
@keyframes float { /* ... */ }
```

## 📱 Responsive Breakpoints

- **Desktop**: > 992px (full layout)
- **Tablet**: 768px - 992px (adjusted grid)
- **Mobile**: < 768px (single column, simplified navigation)

## 🔧 Customization

### Changing Colors
Edit the CSS variables or gradient values in `styles.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any interactive functionality in `script.js`

### Modifying Content
- **Text**: Edit directly in HTML files
- **Images**: Replace files in `/images/` directory
- **Team Members**: Update the team grid in `team.html`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📈 Performance Optimization

- Minimal external dependencies
- Optimized CSS with efficient selectors
- Lazy-loaded animations (triggered on scroll)
- SVG images for scalability without quality loss
- Preconnect to Google Fonts for faster loading

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is a demonstration/portfolio piece. All rights reserved © 2025 NovaSphere Inc.

## 📧 Contact

For questions or feedback about this project:

- **Email**: info@novasphere.com
- **Phone**: (555) 123-4567
- **Address**: 123 Innovation Drive, Tech Valley, CA 94025, United States

## 🙏 Acknowledgments

- Google Fonts for the Montserrat typeface
- Modern CSS Grid and Flexbox for layout capabilities
- The web development community for best practices and inspiration

---

**Version**: 2.0  
**Last Updated**: December 2025  
**Status**: Active Development

Built with ❤️ by the NovaSphere team
