require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve main page with environment variable banner
app.get('/', (req, res) => {
  const foobarValue = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
  const hasFoobar = !!foobarValue;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NovaSphere</title>
      <link rel="stylesheet" href="styles.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
      <style>
        ${hasFoobar ? `
          .env-banner {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            text-align: center;
            font-weight: 600;
            font-size: 1.1em;
            z-index: 2000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          }
          body {
            padding-top: 70px;
          }
        ` : ''}
      </style>
    </head>
    <body>
      ${hasFoobar ? `<div class="env-banner">🌟 Environment Variable FOOBAR is set to: ${foobarValue}</div>` : ''}

      <header>
        <div class="container">
          <div class="logo">
            <span>NovaSphere v2</span>
          </div>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact" class="btn-primary">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>The Future of Personal Computing</h1>
            <p>Experience the next generation of holographic interfaces and advanced computing technologies with NovaSphere.</p>
            <div class="cta-buttons">
              <a href="#contact" class="btn-primary">Get Started</a>
              <a href="#features" class="btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="container">
          <h2>Features</h2>
          <div class="feature-grid">
            <div class="feature-card">
              <div class="icon">🎨</div>
              <h3>Holographic Display</h3>
              <p>Advanced holographic technology for immersive visual experiences.</p>
            </div>
            <div class="feature-card">
              <div class="icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Ultra-responsive performance with cutting-edge processors.</p>
            </div>
            <div class="feature-card">
              <div class="icon">🔒</div>
              <h3>Secure</h3>
              <p>Military-grade encryption for your data and privacy.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="pricing" id="pricing">
        <div class="container">
          <h2>Pricing Plans</h2>
          <div class="pricing-grid">
            <div class="pricing-card">
              <h3>Starter</h3>
              <div class="price">$299</div>
              <ul>
                <li>Basic holographic display</li>
                <li>8GB RAM</li>
                <li>256GB Storage</li>
              </ul>
              <a href="#contact" class="btn-primary">Get Started</a>
            </div>
            <div class="pricing-card featured">
              <div class="badge">POPULAR</div>
              <h3>Professional</h3>
              <div class="price">$599</div>
              <ul>
                <li>Full holographic display</li>
                <li>16GB RAM</li>
                <li>512GB Storage</li>
                <li>Premium support</li>
              </ul>
              <a href="#contact" class="btn-primary">Get Started</a>
            </div>
            <div class="pricing-card">
              <h3>Enterprise</h3>
              <div class="price">Custom</div>
              <ul>
                <li>Custom configuration</li>
                <li>Dedicated support</li>
                <li>Advanced features</li>
                <li>Volume discounts</li>
              </ul>
              <a href="#contact" class="btn-primary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div class="container">
          <div class="about-content">
            <h2>About NovaSphere</h2>
            <p>NovaSphere is a revolutionary computing platform that brings the future of technology to your hands today. Founded in 2025, we are committed to pushing the boundaries of what's possible in personal computing.</p>
            <p>Our team of innovative engineers and designers work tirelessly to create products that not only meet your needs but exceed your expectations.</p>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="container">
          <h2>Get in Touch</h2>
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <span>NovaSphere v2</span>
            </div>
            <div class="footer-links">
              <div class="link-group">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                </ul>
              </div>
              <div class="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="copyright">
            &copy; 2025 NovaSphere Inc. All rights reserved.
          </div>
        </div>
      </footer>

      <script>
        document.addEventListener('DOMContentLoaded', () => {
          // Smooth scrolling for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);

              if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            });
          });

          // Form submission handling
          const contactForm = document.querySelector('.contact-form');
          if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
              e.preventDefault();
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              alert(\`Thank you, \${name}! Your message has been received. We will contact you at \${email} shortly.\`);
              this.reset();
            });
          }
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`NovaSphere app running at http://localhost:${PORT}`);
  if (process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR) {
    console.log(`✓ FOOBAR environment variable is set: ${process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR}`);
  }
});
