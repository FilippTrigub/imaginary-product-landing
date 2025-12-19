# NovaSphere v2.0 - Landing Page

A modern, responsive landing page for NovaSphere, a fictional futuristic personal computing device featuring holographic interfaces and quantum processing technology.

## 🚀 Project Overview

NovaSphere v2.0 is a fully-featured product landing page showcasing an imaginary revolutionary computing device. The website demonstrates modern web design principles with smooth animations, responsive layouts, and an intuitive user experience.

## ✨ Features

### Pages
- **Main Landing Page** (`index.html`) - Complete product showcase with:
  - Hero section with animated product image
  - Key features grid with hover effects
  - Pricing plans (Standard, Pro, Enterprise)
  - Product & Vision section with statistics
  - About section
  - Contact form with validation
  
- **Team Page** (`team.html`) - Meet the team behind NovaSphere with:
  - Team member profiles
  - Role descriptions
  - Professional bios

- **Enhanced Header Demo** (`header.html`) - Navigation system showcase featuring:
  - Dropdown menus for Products and Company sections
  - Sticky header with smooth scrolling
  - Mobile-responsive hamburger menu
  - Breadcrumb navigation
  - Active state indicators

### Design Elements
- **Modern Gradient Design** - Purple/blue gradient color scheme
- **Smooth Animations** - Floating product images, hover effects, scroll animations
- **Responsive Layout** - Mobile-first design that adapts to all screen sizes
- **Custom Typography** - Google Fonts (Montserrat) for clean, modern look
- **Interactive Components** - Dropdown navigation, form validation, smooth scrolling

### Technical Features
- Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- CSS Grid and Flexbox for responsive layouts
- Custom CSS animations and transitions
- Form handling with JavaScript validation
- Scroll-triggered animations for feature cards
- Mobile-responsive navigation with hamburger menu
- SVG logo and product images

## 📁 Project Structure

```
/vercel/sandbox/
├── index.html          # Main landing page
├── team.html           # Team members page
├── header.html         # Enhanced navigation demo
├── styles.css          # Global styles and responsive design
├── script.js           # Interactive functionality
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
└── images/
    ├── logo.svg        # NovaSphere logo
    └── product.svg     # Product device image
```

## 🎨 Design System

### Color Palette
- **Primary Gradient**: `#6e8efb` → `#a777e3`
- **Background**: `#f8f9fa`
- **Text**: `#333` (primary), `#666` (secondary)
- **Footer**: `#2d3748`

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)

### Components
- **Buttons**: Primary (gradient) and Secondary (outlined)
- **Cards**: Feature cards, pricing cards, team member cards
- **Forms**: Contact form with styled inputs and validation
- **Navigation**: Fixed header with dropdown menus

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Installation

1. Clone or download the repository:
```bash
git clone <repository-url>
cd vercel/sandbox
```

2. Open the project:
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server -p 8000
     
     # Using PHP
     php -S localhost:8000
     ```

3. Navigate to `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

- **Desktop**: > 992px (full layout)
- **Tablet**: 768px - 992px (adjusted grid layouts)
- **Mobile**: < 768px (stacked layouts, hamburger menu)

## 🎯 Key Sections

### Hero Section
- Eye-catching headline and subheadline
- Call-to-action buttons (Watch Demo, Pre-order Now)
- Animated floating product image

### Features Section
- 4 key features with icons:
  - 🌐 Holographic Interface
  - ⚡ Quantum Processing
  - 🔒 Neural Security
  - 🔄 Infinite Battery

### Pricing Section
- 3 pricing tiers: Standard ($999), Pro ($1,499), Enterprise ($2,499)
- Featured "Most Popular" badge on Pro plan
- Detailed feature lists for each tier

### Product & Vision Section
- Product philosophy and vision statement
- 4 highlighted features with emojis
- Device statistics (3D Display, Latency, Battery)
- 5-year vision roadmap

### Contact Section
- Functional contact form with fields:
  - Name (required)
  - Email (required)
  - Message (required)
- JavaScript form validation and submission handling

## 🛠️ Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
/* Primary gradient colors */
background: linear-gradient(135deg, #6e8efb, #a777e3);
```

### Modifying Content
- **Text Content**: Edit directly in HTML files
- **Images**: Replace files in `/images/` directory
- **Pricing**: Update pricing cards in `index.html`
- **Team Members**: Modify team grid in `team.html`

### Adding New Pages
1. Create new HTML file
2. Copy header and footer from existing pages
3. Link stylesheet: `<link rel="stylesheet" href="styles.css">`
4. Link script: `<script src="script.js"></script>`
5. Update navigation links in all pages

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This is a demonstration project for educational purposes. All content is fictional.

## 👥 Fictional Team

- **Sarah Chen** - CEO & Founder
- **Marcus Rodriguez** - Chief Technology Officer
- **Dr. Aisha Patel** - Head of Research
- **James Wilson** - Design Director

## 📞 Contact Information (Fictional)

- **Address**: 123 Innovation Drive, Tech Valley, CA 94025, United States
- **Phone**: (555) 123-4567
- **Email**: info@novasphere.com

## 🎨 ASCII Art Credits

The project includes creative ASCII art in HTML comments showcasing:
- NovaSphere logo and branding
- Team member representations
- Navigation system diagrams
- Product visualization

---

**Version**: 2.0  
**Last Updated**: December 2025  
**Status**: Demo/Educational Project

Built with ❤️ using HTML, CSS, and JavaScript
