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
- **Dark Footer**: `#2d3748`

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)

### Components
- **Buttons**: Primary (gradient) and Secondary (outlined) styles
- **Cards**: Feature cards, pricing cards, and team member cards
- **Forms**: Styled input fields with focus states
- **Navigation**: Fixed header with smooth scroll behavior

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Google Fonts**: Montserrat font family
- **SVG**: Scalable vector graphics for logo and product images

## ✨ Key Features Implementation

### Smooth Scrolling
Navigation links smoothly scroll to their target sections with offset for the fixed header.

### Animated Feature Cards
Feature cards fade in and slide up as they enter the viewport using scroll-based animations.

### Floating Product Image
The hero product image has a subtle floating animation using CSS keyframes.

### Responsive Grid Layouts
All sections use CSS Grid with `auto-fit` and `minmax()` for responsive column layouts.

### Form Validation
Contact form includes HTML5 validation and JavaScript submission handling.

## 📱 Responsive Breakpoints

- **Desktop**: > 992px (full layout)
- **Tablet**: 768px - 992px (adjusted grid columns)
- **Mobile**: < 768px (single column layout, simplified navigation)

## 🔧 Customization

### Changing Colors
Edit the color values in `styles.css`:
```css
/* Primary gradient */
background: linear-gradient(135deg, #6e8efb, #a777e3);

/* Background color */
background-color: #f8f9fa;
```

### Modifying Content
- **Text Content**: Edit directly in `index.html` and `team.html`
- **Images**: Replace files in the `images/` directory
- **Pricing**: Update pricing cards in the pricing section

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation links in the header

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 License

© 2025 NovaSphere Inc. All rights reserved.

## 🤝 Contributing

This is a demonstration project for NovaSphere, an imaginary product. For educational and portfolio purposes.

## 📧 Contact

For inquiries about this project:
- **Email**: info@novasphere.com
- **Phone**: (555) 123-4567
- **Address**: 123 Innovation Drive, Tech Valley, CA 94025, United States

## 🎯 Future Enhancements

- [ ] Add mobile hamburger menu
- [ ] Implement dark mode toggle
- [ ] Add product demo video section
- [ ] Create blog/news section
- [ ] Add customer testimonials
- [ ] Implement newsletter subscription
- [ ] Add multi-language support
- [ ] Integrate with backend API for form submissions
- [ ] Add loading animations
- [ ] Implement lazy loading for images

---

**Built with ❤️ for the future of computing**
