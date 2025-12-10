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

## 📄 Pages

### Main Landing Page (`index.html`)
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Features Section**: Four key product features with icons and descriptions
- **Pricing Section**: Three pricing tiers (Standard, Pro, Enterprise)
- **Product & Vision Section**: Detailed product information and company vision
- **About Section**: Company background and mission
- **Contact Section**: Contact form for inquiries
- **Footer**: Comprehensive site navigation and company information

### Team Page (`team.html`)
- **Team Grid**: Showcases four key team members
- **Member Profiles**: Photos, names, positions, and biographies
- **Responsive Layout**: Adapts to different screen sizes

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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Smooth scroll to target section
    });
});
```

### Animated Feature Cards
- Cards fade in and slide up as they enter the viewport
- Hover effects with elevation and shadow transitions

### Responsive Navigation
- Fixed header that stays visible during scroll
- Mobile-friendly navigation (hidden on small screens)

### Form Validation
- Client-side validation for required fields
- Success message on form submission
- Form reset after submission

## 📱 Responsive Breakpoints

- **Desktop**: > 992px (full layout)
- **Tablet**: 768px - 992px (adjusted grid layouts)
- **Mobile**: < 768px (single column, simplified navigation)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

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
- Update text content directly in HTML files
- Replace images in the `/images` directory
- Adjust team member information in `team.html`

## 📊 Performance Optimization

- **Minimal Dependencies**: No heavy frameworks or libraries
- **Optimized Images**: SVG format for scalable graphics
- **CSS Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Feature cards animate on scroll
- **Clean Code**: Well-organized and commented

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is a demonstration/portfolio piece. Feel free to use it as a template for your own projects.

## 👥 Team

- **Sarah Chen** - CEO & Founder
- **Marcus Rodriguez** - Chief Technology Officer
- **Dr. Aisha Patel** - Head of Research
- **James Wilson** - Design Director

## 📧 Contact

For inquiries about NovaSphere:
- **Address**: 123 Innovation Drive, Tech Valley, CA 94025, United States
- **Phone**: (555) 123-4567
- **Email**: info@novasphere.com

## 🙏 Acknowledgments

- Google Fonts for the Montserrat typeface
- Modern CSS techniques and best practices
- Responsive design principles

---

**Version**: 2.0  
**Last Updated**: December 2025  
**© 2025 NovaSphere Inc. All rights reserved.**
