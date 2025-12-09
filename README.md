# NovaSphere v2.0 - The Future of Personal Computing

![NovaSphere Logo](images/logo.svg)

A modern, responsive landing page showcasing NovaSphere, a revolutionary holographic computing device with quantum processing capabilities. This project demonstrates cutting-edge web design principles with smooth animations, intuitive navigation, and a beautiful gradient-based aesthetic.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with gradient accents and smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and animated feature cards
- **Product Showcase**: Comprehensive sections including features, pricing, team, and contact
- **Form Handling**: Contact form with client-side validation and submission handling
- **Accessibility**: Semantic HTML with proper ARIA labels and keyboard navigation support

## 📁 Project Structure

```
/vercel/sandbox/
├── index.html          # Main landing page
├── team.html           # Team members page
├── styles.css          # Global styles and responsive design
├── script.js           # Interactive functionality and animations
├── header.html         # Reusable header component
├── images/
│   ├── logo.svg        # NovaSphere logo
│   └── product.svg     # Product illustration
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd /vercel/sandbox
   ```

2. **Open in browser**
   
   Simply open `index.html` in your web browser:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Navigate to**
   ```
   http://localhost:8000
   ```

## 🎨 Design Features

### Color Palette
- **Primary Gradient**: `#6e8efb` → `#a777e3`
- **Background**: `#f8f9fa`, `#e6e9f0`
- **Text**: `#333` (primary), `#666` (secondary)
- **Accent**: `#2d3748` (footer)

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)

### Key Sections

1. **Hero Section**: Eye-catching introduction with animated product image
2. **Features Grid**: Four key features with icon-based cards
3. **Pricing Plans**: Three-tier pricing structure with featured plan
4. **Product & Vision**: Detailed product information with statistics
5. **About Section**: Company background and mission
6. **Contact Form**: Interactive form for user inquiries
7. **Team Page**: Dedicated page showcasing team members

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Montserrat font family
- **SVG Graphics**: Scalable vector images

## 🎯 Key Functionality

### Smooth Scrolling
```javascript
// Anchor links scroll smoothly to target sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Smooth scroll implementation
    });
});
```

### Scroll Animations
- Feature cards fade in and slide up as they enter the viewport
- Floating animation on hero product image
- Hover effects on cards and buttons

### Form Handling
- Client-side validation for required fields
- Success message on submission
- Form reset after submission

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 992px
- **Mobile**: Below 768px

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `styles.css`
3. Add interactivity in `script.js` if needed

### Modifying Content
- **Text**: Edit directly in HTML files
- **Images**: Replace files in `/images/` directory
- **Team Members**: Update `team.html` with new profiles

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 Pages

### Main Landing Page (`index.html`)
- Hero section with product showcase
- Features overview
- Pricing plans
- Product vision and statistics
- About section
- Contact form
- Footer with links

### Team Page (`team.html`)
- Team member profiles
- Individual bios and roles
- Consistent header and footer

## 🎭 ASCII Art

The project includes creative ASCII art in HTML comments:
- NovaSphere logo banner in `index.html`
- Team member illustrations in `team.html`

## 📊 Performance Optimizations

- Minimal external dependencies
- Optimized CSS with efficient selectors
- Lazy-loaded animations
- Compressed SVG graphics
- Mobile-first responsive design

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is a demonstration/portfolio piece. All rights reserved © 2025 NovaSphere Inc.

## 👥 Team

- **Sarah Chen** - CEO & Founder
- **Marcus Rodriguez** - Chief Technology Officer
- **Dr. Aisha Patel** - Head of Research
- **James Wilson** - Design Director

## 📞 Contact

- **Address**: 123 Innovation Drive, Tech Valley, CA 94025, United States
- **Phone**: (555) 123-4567
- **Email**: info@novasphere.com

## 🎉 Acknowledgments

- Google Fonts for Montserrat typography
- Inspiration from modern SaaS landing pages
- Community feedback and contributions

---

**Built with ❤️ for the future of computing**

*NovaSphere v2.0 - Where innovation meets imagination*
