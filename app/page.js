'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [foobarValue, setFoobarValue] = useState(null);

  useEffect(() => {
    // Get NEXT_PUBLIC_FOOBAR from environment or window
    const envValue = process.env.NEXT_PUBLIC_FOOBAR;
    setFoobarValue(envValue);
  }, []);

  const showBanner = !!foobarValue;

  return (
    <>
      {showBanner && (
        <div className="env-banner">
          Environment Variable FOOBAR is set: {foobarValue}
        </div>
      )}

      <header>
        <div className="container">
          <div className="logo">
            <img src="/logo.svg" alt="NovaSphere Logo" width={40} height={40} />
            <span>NovaSphere v2</span>
          </div>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact" className="btn-primary">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Experience the Future of Computing</h1>
            <p>NovaSphere brings you next-generation holographic interfaces and revolutionary computing technology.</p>
            <div className="cta-buttons">
              <a href="#features" className="btn-primary">Learn More</a>
              <a href="#contact" className="btn-secondary">Get Started</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/product.svg" alt="NovaSphere Product" />
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🔮</div>
              <h3>Holographic Display</h3>
              <p>Experience immersive 3D holographic interfaces that bring your work to life.</p>
            </div>
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Quantum processors deliver unprecedented speed and performance for any task.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🛡️</div>
              <h3>Ultra Secure</h3>
              <p>Military-grade encryption and biometric authentication protect your data.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🌍</div>
              <h3>Global Connected</h3>
              <p>Seamlessly connect with users worldwide with near-zero latency technology.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🤖</div>
              <h3>AI Powered</h3>
              <p>Advanced AI assistants learn your preferences and anticipate your needs.</p>
            </div>
            <div className="feature-card">
              <div className="icon">♿</div>
              <h3>Accessible</h3>
              <p>Designed for everyone with comprehensive accessibility features built-in.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$999</div>
              <ul>
                <li>Holographic Display (256 colors)</li>
                <li>Quantum Processor (2 cores)</li>
                <li>16GB RAM</li>
                <li>256GB Storage</li>
                <li>Basic AI Assistant</li>
              </ul>
              <a href="#contact" className="btn-secondary">Get Started</a>
            </div>
            <div className="pricing-card featured">
              <span className="badge">Most Popular</span>
              <h3>Professional</h3>
              <div className="price">$2,499</div>
              <ul>
                <li>Holographic Display (4K colors)</li>
                <li>Quantum Processor (8 cores)</li>
                <li>64GB RAM</li>
                <li>1TB Storage</li>
                <li>Advanced AI Assistant</li>
              </ul>
              <a href="#contact" className="btn-primary">Choose Plan</a>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$4,999+</div>
              <ul>
                <li>Holographic Display (8K)</li>
                <li>Quantum Processor (16 cores)</li>
                <li>128GB RAM</li>
                <li>2TB Storage</li>
                <li>Custom AI Solutions</li>
              </ul>
              <a href="#contact" className="btn-secondary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section className="product-vision">
        <div className="container">
          <div className="pv-grid">
            <div className="pv-content">
              <h2>Our Vision</h2>
              <p>NovaSphere represents a quantum leap in personal computing, combining cutting-edge quantum processors with immersive holographic interfaces.</p>
              <div className="pv-features">
                <div className="pv-feature">
                  <span className="emoji">✨</span>
                  <span>Next-Gen Technology</span>
                </div>
                <div className="pv-feature">
                  <span className="emoji">🚀</span>
                  <span>Future Ready</span>
                </div>
                <div className="pv-feature">
                  <span className="emoji">💡</span>
                  <span>Innovation Driven</span>
                </div>
                <div className="pv-feature">
                  <span className="emoji">🌟</span>
                  <span>Industry Leading</span>
                </div>
              </div>
              <div className="pv-vision">
                <h4>Our Mission</h4>
                <p>To revolutionize how humans interact with technology by creating intuitive, powerful, and accessible computing devices that empower creativity and productivity.</p>
              </div>
            </div>
            <div className="pv-visual">
              <img src="/product.svg" alt="NovaSphere Device" className="device" />
              <div className="pv-stats">
                <div className="pv-stat">
                  <h4>50x</h4>
                  <p>Faster</p>
                </div>
                <div className="pv-stat">
                  <h4>99.9%</h4>
                  <p>Uptime</p>
                </div>
                <div className="pv-stat">
                  <h4>∞</h4>
                  <p>Possibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <h2>About NovaSphere</h2>
            <p>Founded in 2024, NovaSphere is at the forefront of computing innovation. Our team of visionary engineers and designers are committed to creating technology that matters—technology that enhances human potential and opens new possibilities.</p>
            <p>With our revolutionary approach to quantum computing and holographic interfaces, we're not just building the future; we're redefining what's possible in personal computing.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById('name')).value;
            const email = (document.getElementById('email')).value;
            alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);
            e.currentTarget.reset();
          }}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.svg" alt="NovaSphere Logo" width={40} height={40} />
              <span>NovaSphere v2</span>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Tech Specs</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; 2025 NovaSphere Inc. All rights reserved. Version 2.0
          </div>
        </div>
      </footer>
    </>
  );
}
