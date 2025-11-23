# NovaSphere v2.0 - Product Landing Page

A modern, responsive landing page for NovaSphere, a revolutionary personal computing device featuring holographic interfaces, quantum processing, and neural security.

## 🚀 Project Overview

NovaSphere v2.0 is a multi-page marketing website showcasing a futuristic computing device. The site features a clean, modern design with smooth animations, responsive layouts, and an intuitive navigation system.

## 📁 Project Structure

```
/vercel/sandbox/
├── index.html          # Main landing page
├── team.html           # Team members page
├── header.html         # Enhanced header navigation demo
├── styles.css          # Global styles and responsive design
├── script.js           # Interactive functionality
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
└── images/
    ├── logo.svg        # NovaSphere logo
    └── product.svg     # Product image
```

## ✨ Features

### Main Landing Page (`index.html`)
- **Hero Section**: Eye-catching introduction with animated product image
- **Key Features**: Grid layout showcasing 4 main product features
  - Holographic Interface
  - Quantum Processing
  - Neural Security
  - Infinite Battery
- **Pricing Plans**: Three-tier pricing structure (Standard, Pro, Enterprise)
- **Product & Vision**: Detailed product information with statistics and 5-year vision
- **About Section**: Company background and mission
- **Contact Form**: Interactive form with validation
- **Sticky Header**: Fixed navigation with smooth scrolling
- **Responsive Footer**: Multi-column layout with company information

### Team Page (`team.html`)
- Team member profiles with photos and bios
- 4 key team members:
  - Sarah Chen (CEO & Founder)
  - Marcus Rodriguez (CTO)
  - Dr. Aisha Patel (Head of Research)
  - James Wilson (Design Director)
- Hover effects on team cards
- Consistent header and footer navigation

### Enhanced Header (`header.html`)
- Dropdown navigation menus
- Mobile-responsive hamburger menu
- Breadcrumb navigation
- Active page highlighting
- Smooth transitions and animations

## 🎨 Design Features

- **Color Scheme**: Purple gradient theme (#6e8efb to #a777e3)
- **Typography**: Montserrat font family (Google Fonts)
- **Animations**: 
  - Floating product image
  - Scroll-triggered feature card animations
  - Hover effects on buttons and cards
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 992px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Grid and Flexbox layouts
  - CSS animations and transitions
  - Custom properties and gradients
- **Vanilla JavaScript**: 
  - Smooth scrolling
  - Form validation
  - Scroll animations
  - Mobile menu toggle

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd /vercel/sandbox
```

2. Open the project:
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. Navigate to `http://localhost:8000` in your browser

## 📄 Page Navigation

- **Home**: `index.html` - Main landing page
- **Team**: `team.html` - Meet the team
- **Header Demo**: `header.html` - Enhanced navigation showcase

### Internal Links
- `#features` - Product features section
- `#pricing` - Pricing plans
- `#about` - About the company
- `#contact` - Contact form
- `#product-vision` - Product vision section

## 🎯 Key Sections

### Hero Section
Introduces NovaSphere v2.0 with compelling headline and call-to-action buttons for demo and pre-order.

### Features Grid
Four-column responsive grid highlighting:
- 🌐 Holographic Interface
- ⚡ Quantum Processing
- 🔒 Neural Security
- 🔄 Infinite Battery

### Pricing Plans
Three pricing tiers with feature comparisons:
- **Standard**: $999 - Base device with 1-year warranty
- **Pro**: $1,499 - Enhanced device with 2-year warranty (Most Popular)
- **Enterprise**: $2,499 - Premium device with unlimited storage

### Product & Vision
Two-column layout featuring:
- Product benefits and features
- Technical specifications
- 5-year company vision
- Call-to-action buttons

## 📱 Responsive Breakpoints

- **Desktop**: > 992px (Full grid layouts)
- **Tablet**: 768px - 992px (Adjusted grids)
- **Mobile**: < 768px (Single column, hamburger menu)

## 🎨 Color Palette

- **Primary Gradient**: `linear-gradient(135deg, #6e8efb, #a777e3)`
- **Background**: `#f8f9fa`
- **Text**: `#333` (primary), `#666` (secondary)
- **Footer**: `#2d3748`
- **Accent**: `#6e8efb`

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
}
```

### Adding New Sections
Follow the existing section structure:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2>Section Title</h2>
        <!-- Content here -->
    </div>
</section>
```

### Modifying Navigation
Update the navigation in the `<header>` section of each HTML file.

## 📞 Contact Information

- **Address**: 123 Innovation Drive, Tech Valley, CA 94025, United States
- **Phone**: (555) 123-4567
- **Email**: info@novasphere.com

## 📝 License

© 2025 NovaSphere Inc. All rights reserved. Version 2.0

## 🤝 Contributing

This is a demonstration project. For actual contributions, please follow standard Git workflow:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🐛 Known Issues

- Team member images use placeholder URLs (`via.placeholder.com`)
- Contact form doesn't actually send emails (client-side only)
- Some navigation links are placeholder (`#`)

## 🔮 Future Enhancements

- [ ] Backend integration for contact form
- [ ] Real team member photos
- [ ] Blog section
- [ ] Product documentation pages
- [ ] Customer testimonials
- [ ] Video demo integration
- [ ] Multi-language support
- [ ] Dark mode toggle

## 📚 Resources

- **Font**: [Montserrat on Google Fonts](https://fonts.google.com/specimen/Montserrat)
- **Icons**: Emoji-based (no external dependencies)
- **Images**: SVG format for scalability

---

**Built with ❤️ for the future of personal computing**
