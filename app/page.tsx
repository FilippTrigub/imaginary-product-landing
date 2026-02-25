'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('');

  useEffect(() => {
    // Check for environment variables on client side
    const foobarValue = process.env.NEXT_PUBLIC_FOOBAR;

    if (foobarValue) {
      setShowBanner(true);
      setBannerMessage(`Environment Variable Set: ${foobarValue}`);
    }
  }, []);

  return (
    <>
      {showBanner && (
        <div id="env-banner">
          {bannerMessage}
        </div>
      )}

      <header style={showBanner ? { marginTop: '50px' } : {}}>
        <div className="container">
          <div className="logo">
            <span>🚀 NovaSphere</span>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero" style={showBanner ? { paddingTop: '180px' } : {}}>
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to NovaSphere</h1>
            <p>A vibrant and colorful web experience designed to inspire and engage.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div style={{
              width: '100%',
              height: '300px',
              background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '4rem',
            }}>
              ✨
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🎨</div>
              <h3>Colorful Design</h3>
              <p>Vibrant colors and gradients that make your experience visually stunning.</p>
            </div>
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Built with Next.js for optimal speed and responsiveness.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📱</div>
              <h3>Responsive</h3>
              <p>Works perfectly on all devices and screen sizes.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security and privacy protection.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🌐</div>
              <h3>Global Reach</h3>
              <p>Connect with users around the world seamlessly.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>Easy Deployment</h3>
              <p>Deploy instantly with Vercel integration.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$9</div>
              <p style={{ marginBottom: '20px', color: '#666' }}>/month</p>
              <ul>
                <li>Basic features</li>
                <li>5 GB storage</li>
                <li>Email support</li>
                <li>1 user account</li>
              </ul>
              <button className="btn-primary">Choose Plan</button>
            </div>
            <div className="pricing-card featured">
              <div className="badge">POPULAR</div>
              <h3>Professional</h3>
              <div className="price">$29</div>
              <p style={{ marginBottom: '20px', color: '#666' }}>/month</p>
              <ul>
                <li>Advanced features</li>
                <li>100 GB storage</li>
                <li>Priority support</li>
                <li>5 user accounts</li>
              </ul>
              <button className="btn-primary">Choose Plan</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <p style={{ marginBottom: '20px', color: '#666' }}>Contact us</p>
              <ul>
                <li>All features</li>
                <li>Unlimited storage</li>
                <li>24/7 support</li>
                <li>Unlimited accounts</li>
              </ul>
              <button className="btn-primary">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
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
              <span>🚀 NovaSphere</span>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#security">Security</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#careers">Careers</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#privacy">Privacy</a></li>
                  <li><a href="#terms">Terms</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 NovaSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
