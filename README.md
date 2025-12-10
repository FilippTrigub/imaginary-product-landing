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

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: `#6e8efb` to `#a777e3` (Blue to Purple)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333` (Dark Gray)
- **Accents**: Various shades for depth and hierarchy

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)

### Animations
- **Floating Effect**: Hero image with smooth vertical animation
- **Scroll Animations**: Feature cards fade in on scroll
- **Hover Effects**: Cards lift and shadows intensify on hover
- **Smooth Scrolling**: Anchor links scroll smoothly to sections

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Montserrat font family
- **SVG Graphics**: Scalable vector images for logo and product

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 992px
- **Mobile**: Below 768px

## 🔧 Customization

### Changing Colors
Edit the CSS variables or gradient values in `styles.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
}
```

### Modifying Content
Update text content directly in `index.html` and `team.html`:
```html
<h1>Your Custom Heading</h1>
<p>Your custom description</p>
```

### Adding New Sections
Follow the existing section structure:
```html
<section class="your-section">
    <div class="container">
        <h2>Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Sarah Chen** - CEO & Founder
- **Marcus Rodriguez** - Chief Technology Officer
- **Dr. Aisha Patel** - Head of Research
- **James Wilson** - Design Director

## 📧 Contact

**NovaSphere Inc.**
- Address: 123 Innovation Drive, Tech Valley, CA 94025, United States
- Phone: (555) 123-4567
- Email: info@novasphere.com

## 🙏 Acknowledgments

- Google Fonts for the Montserrat typeface
- Placeholder images from via.placeholder.com
- Inspiration from modern SaaS landing pages

## 📈 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement backend API for contact form
- [ ] Add blog section
- [ ] Create customer testimonials section
- [ ] Add product demo video
- [ ] Implement newsletter subscription
- [ ] Add multi-language support
- [ ] Integrate analytics tracking

---

**Version**: 2.0  
**Last Updated**: December 2025  
**Status**: Active Development

© 2025 NovaSphere Inc. All rights reserved.
