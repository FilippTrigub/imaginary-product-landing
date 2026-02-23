const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles.css', express.static(path.join(__dirname, 'styles.css')));

// Main landing page route
app.get('/', (req, res) => {
  const showBanner = process.env.NEXT_PUBLIC_FOOBAR ? true : false;
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaSphere - The Future of Personal Computing</title>
    <link rel="stylesheet" href="/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        .env-banner {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-weight: 600;
            font-size: 1.1rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    ${showBanner ? '<div class="env-banner">🎉 foobar is set</div>' : ''}
    
    <header>
        <div class="container">
            <div class="logo">
                <img src="/images/logo.svg" alt="NovaSphere Logo">
                <span>NovaSphere</span>
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
                <p>Experience the next generation of computing with NovaSphere's revolutionary holographic interface and AI-powered capabilities.</p>
                <div class="cta-buttons">
                    <a href="#features" class="btn-primary">Explore Features</a>
                    <a href="#pricing" class="btn-secondary">View Pricing</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="/images/product.svg" alt="NovaSphere Product">
            </div>
        </div>
    </section>

    <section id="features" class="features">
        <div class="container">
            <h2>Revolutionary Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="icon">🌐</div>
                    <h3>Holographic Interface</h3>
                    <p>Interact with your data in stunning 3D holographic displays that bring your work to life.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🤖</div>
                    <h3>AI-Powered</h3>
                    <p>Advanced machine learning algorithms that adapt to your workflow and boost productivity.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>Quantum-inspired processing delivers unprecedented speed and performance.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🔒</div>
                    <h3>Secure by Design</h3>
                    <p>Military-grade encryption and biometric authentication keep your data safe.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing" class="pricing">
        <div class="container">
            <h2>Choose Your Plan</h2>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <h3>Starter</h3>
                    <div class="price">$99<span style="font-size: 1rem;">/mo</span></div>
                    <ul>
                        <li>Basic holographic display</li>
                        <li>5GB cloud storage</li>
                        <li>Email support</li>
                        <li>1 user license</li>
                    </ul>
                    <a href="#contact" class="btn-secondary">Get Started</a>
                </div>
                <div class="pricing-card featured">
                    <div class="badge">Most Popular</div>
                    <h3>Professional</h3>
                    <div class="price">$199<span style="font-size: 1rem;">/mo</span></div>
                    <ul>
                        <li>Advanced holographic display</li>
                        <li>50GB cloud storage</li>
                        <li>Priority support</li>
                        <li>5 user licenses</li>
                        <li>AI assistant included</li>
                    </ul>
                    <a href="#contact" class="btn-primary">Get Started</a>
                </div>
                <div class="pricing-card">
                    <h3>Enterprise</h3>
                    <div class="price">$499<span style="font-size: 1rem;">/mo</span></div>
                    <ul>
                        <li>Premium holographic display</li>
                        <li>Unlimited cloud storage</li>
                        <li>24/7 dedicated support</li>
                        <li>Unlimited user licenses</li>
                        <li>Custom AI training</li>
                    </ul>
                    <a href="#contact" class="btn-secondary">Contact Sales</a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <h2>About NovaSphere</h2>
                <p>NovaSphere is at the forefront of personal computing innovation. Founded by a team of quantum computing researchers and AI specialists, we're dedicated to creating technology that transforms how people interact with digital information.</p>
                <p>Our mission is to make advanced computing accessible to everyone, combining cutting-edge holographic displays with intuitive AI-powered interfaces.</p>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2>Get in Touch</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn-primary">Send Message</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="/images/logo.svg" alt="NovaSphere Logo">
                    <span>NovaSphere</span>
                </div>
                <div class="footer-links">
                    <div class="link-group">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="link-group">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="link-group">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
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

            // Simple animation for feature cards on scroll
            const animateOnScroll = () => {
                const featureCards = document.querySelectorAll('.feature-card');
                featureCards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    if (cardPosition < screenPosition) {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }
                });
            };
            
            document.querySelectorAll('.feature-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.5s ease';
            });
            
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);
        });
    </script>
</body>
</html>
  `;
  
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`NovaSphere landing page running on http://localhost:${PORT}`);
  console.log(`NEXT_PUBLIC_FOOBAR is ${process.env.NEXT_PUBLIC_FOOBAR ? 'SET' : 'NOT SET'}`);
});
