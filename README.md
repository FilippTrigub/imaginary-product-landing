# NovaSphere v2.0 - The Future of Personal Computing

![NovaSphere Logo](images/logo.svg)

A modern, responsive landing page showcasing NovaSphere v2.0, a revolutionary personal computing device featuring holographic interfaces, quantum processing, neural security, and infinite battery technology.

## 🌟 Project Overview

NovaSphere v2.0 is a conceptual product landing page demonstrating cutting-edge web design principles and modern HTML/CSS/JavaScript techniques. The website presents a futuristic computing device with an immersive user experience through clean design, smooth animations, and intuitive navigation.

## 📁 Project Structure

```
/vercel/sandbox/
├── index.html          # Main landing page
├── header.html         # Enhanced header navigation demo
├── team.html           # Team members page
├── styles.css          # Global styles and responsive design
├── script.js           # Interactive functionality
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
└── images/
    ├── logo.svg        # NovaSphere logo
    └── product.svg     # Product visualization
```

## 🎨 Features

### Main Landing Page (index.html)
- **Hero Section**: Eye-catching introduction with animated product image
- **Key Features Grid**: Showcases 4 core features with icons and descriptions
  - 🌐 Holographic Interface
  - ⚡ Quantum Processing
  - 🔒 Neural Security
  - 🔄 Infinite Battery
- **Pricing Plans**: Three-tier pricing structure (Standard, Pro, Enterprise)
- **Product & Vision Section**: Detailed product information with statistics and 5-year vision
- **About Section**: Company background and mission
- **Contact Form**: Interactive form for user inquiries
- **Responsive Footer**: Multi-column footer with navigation links and company information

### Enhanced Header (header.html)
- **Dropdown Navigation**: Multi-level navigation with Products and Company submenus
- **Breadcrumb Navigation**: Shows current page location
- **Sticky Header**: Remains visible while scrolling
- **Mobile Responsive**: Collapsible hamburger menu for mobile devices
- **Active States**: Highlights current page in navigation

### Team Page (team.html)
- **Team Grid**: Displays 4 key team members with photos and bios
- **Hover Effects**: Cards lift on hover for interactive feedback
- **Responsive Layout**: Adapts to different screen sizes

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with:
  - CSS Grid & Flexbox for layouts
  - CSS Variables for theming
  - Gradient backgrounds
  - Smooth transitions and animations
  - Media queries for responsive design
- **JavaScript (ES6+)**: Interactive features including:
  - Smooth scrolling navigation
  - Form validation and submission handling
  - Scroll-triggered animations
  - Mobile menu toggle
- **Google Fonts**: Montserrat font family (300, 400, 600, 700 weights)

## 🎯 Key Design Elements

### Color Scheme
- **Primary Gradient**: `#6e8efb` → `#a777e3` (Blue to Purple)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333` (Dark Gray)
- **Accent**: `#2d3748` (Dark Blue-Gray for footer)

### Typography
- **Font Family**: Montserrat (sans-serif)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Light Text**: Light weight (300)

### Animations
- **Floating Product**: 6-second infinite float animation on hero image
- **Hover Effects**: Transform and shadow transitions on cards
- **Scroll Animations**: Fade-in and slide-up effects on feature cards
- **Button Interactions**: Lift effect with enhanced shadows

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 992px (adjusted grid layouts)
- **Mobile**: < 768px (stacked layouts, hamburger menu)

### Mobile Optimizations
- Collapsible navigation menu
- Single-column layouts
- Touch-friendly button sizes
- Optimized font sizes
- Simplified grid structures

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd /vercel/sandbox
```

2. Open in browser:
```bash
# Simply open index.html in your browser
open index.html
# or
firefox index.html
# or
google-chrome index.html
```

### Local Development

For local development with live reload, you can use any static server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📄 Page Navigation

- **Home**: `index.html` - Main landing page
- **Enhanced Header Demo**: `header.html` - Navigation system showcase
- **Team**: `team.html` - Meet the team page
- **Features**: `index.html#features` - Product features section
- **Pricing**: `index.html#pricing` - Pricing plans
- **About**: `index.html#about` - Company information
- **Contact**: `index.html#contact` - Contact form

## 🎨 Customization

### Changing Colors
Edit the gradient values in `styles.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
}
```

### Modifying Content
- Update text content directly in HTML files
- Replace images in the `/images` directory
- Adjust team member information in `team.html`

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

## 🔧 JavaScript Functionality

### Smooth Scrolling
Automatically handles anchor link navigation with offset for fixed header.

### Form Handling
Contact form includes:
- Client-side validation
- Success message display
- Form reset after submission

### Scroll Animations
Feature cards fade in and slide up when scrolled into view.

### Mobile Menu
Toggle functionality for responsive navigation on mobile devices.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 License

© 2025 NovaSphere Inc. All rights reserved. Version 2.0

## 👥 Team

- **Sarah Chen** - CEO & Founder
- **Marcus Rodriguez** - Chief Technology Officer
- **Dr. Aisha Patel** - Head of Research
- **James Wilson** - Design Director

## 📞 Contact Information

**Address:**
123 Innovation Drive
Tech Valley, CA 94025
United States

**Phone:** (555) 123-4567
**Email:** info@novasphere.com

## 🎯 Future Enhancements

- Backend integration for contact form
- Product demo video integration
- Blog section
- Customer testimonials
- Interactive 3D product viewer
- Multi-language support
- Dark mode toggle
- Newsletter subscription
- Live chat support

## 🐛 Known Issues

- Navigation menu hidden on mobile (requires hamburger menu implementation)
- Form submission currently shows alert (needs backend integration)
- Placeholder images used for team members (replace with actual photos)

## 📚 Additional Resources

- [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

**Built with ❤️ by the NovaSphere Team**
