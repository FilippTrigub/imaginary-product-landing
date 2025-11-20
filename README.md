# NovaSphere v2.0 - Landing Page

A modern, responsive landing page for NovaSphere, a fictional revolutionary personal computing device featuring holographic interfaces and quantum processing technology.

## 🚀 Overview

This project showcases a complete product landing page built with vanilla HTML, CSS, and JavaScript. It demonstrates modern web design principles, smooth animations, and responsive layouts suitable for marketing a cutting-edge technology product.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Animated feature cards on scroll
  - Interactive contact form with validation
  - Hover effects on pricing cards and buttons
- **Multiple Pages**:
  - Main landing page (`index.html`)
  - Team page (`team.html`)
- **Sections Include**:
  - Hero section with call-to-action
  - Feature showcase with grid layout
  - Pricing tiers (Standard, Pro, Enterprise)
  - Product vision and statistics
  - About section
  - Contact form
  - Comprehensive footer

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Google Fonts**: Montserrat font family for typography
- **SVG Graphics**: Scalable vector images for logo and product visuals

## 📁 Project Structure

```
/vercel/sandbox/
├── index.html          # Main landing page
├── team.html           # Team members page
├── header.html         # Header component (if used)
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
└── images/
    ├── logo.svg        # NovaSphere logo
    └── product.svg     # Product image
```

## 🚦 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for best experience)

### Installation & Running

1. **Clone or download this repository**

2. **Option A: Open directly in browser**
   ```bash
   # Simply open the HTML file
   open index.html
   # or double-click index.html in your file explorer
   ```

3. **Option B: Use a local development server (recommended)**
   
   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```
   
   Using Node.js:
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run server
   http-server -p 8000
   # Then visit http://localhost:8000
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   # Then visit http://localhost:8000
   ```

4. **Navigate to the pages**:
   - Main page: `http://localhost:8000/index.html`
   - Team page: `http://localhost:8000/team.html`

## 🎨 Customization

### Changing Colors

Edit the CSS variables or color values in `styles.css`:
- Primary colors are used for buttons and accents
- Background colors can be modified in section-specific classes

### Modifying Content

- **Text Content**: Edit directly in `index.html` and `team.html`
- **Images**: Replace files in the `images/` directory
- **Pricing**: Update pricing cards in the `#pricing` section
- **Features**: Modify feature cards in the `#features` section

### Adding New Sections

1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any interactive behavior in `script.js`

## 📱 Responsive Breakpoints

The design adapts to different screen sizes:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 Key Components

### Navigation
- Fixed header with smooth scroll navigation
- Responsive menu (can be enhanced with mobile hamburger menu)

### Hero Section
- Eye-catching headline and subheadline
- Call-to-action buttons
- Product image showcase

### Features Grid
- 4-column responsive grid
- Icon-based feature cards
- Hover animations

### Pricing Cards
- Three-tier pricing structure
- Featured "Most Popular" badge
- Clear feature lists and CTAs

### Contact Form
- Client-side form validation
- Success message on submission
- Clean, accessible form design

## 🔧 Future Enhancements

Potential improvements for this project:
- [ ] Add mobile hamburger menu
- [ ] Implement backend for contact form
- [ ] Add video demo section
- [ ] Include customer testimonials
- [ ] Add blog/news section
- [ ] Implement dark mode toggle
- [ ] Add loading animations
- [ ] Include FAQ accordion
- [ ] Add newsletter signup
- [ ] Implement analytics tracking

## 📄 License

This is a demonstration project for a fictional product. Feel free to use this code as a template for your own projects.

## 👥 Credits

**NovaSphere Team** (Fictional):
- Sarah Chen - CEO & Founder
- Marcus Rodriguez - Chief Technology Officer
- Dr. Aisha Patel - Head of Research
- James Wilson - Design Director

---

**Version**: 2.0  
**Last Updated**: November 2025  
**© 2025 NovaSphere Inc.** - All rights reserved (Fictional Company)
