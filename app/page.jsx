'use client';

export default function Home() {
  const foobar = process.env.NEXT_PUBLIC_FOOBAR;

  return (
    <>
      {foobar && (
        <div style={{
          backgroundColor: '#ff6b6b',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          fontWeight: 'bold',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1001,
        }}>
          Environment Variable Set: {foobar}
        </div>
      )}

      <div className="red-circle"></div>

      <main>
        <section className="hero" style={foobar ? { paddingTop: '200px' } : {}}>
          <div className="container">
            <div className="hero-content">
              <h1>Welcome to NovaSphere</h1>
              <p>Experience the future of web development with our cutting-edge solutions.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon">⚡</div>
                <h3>Lightning Fast</h3>
                <p>Optimized for speed and performance</p>
              </div>
              <div className="feature-card">
                <div className="icon">🔒</div>
                <h3>Secure</h3>
                <p>Enterprise-grade security features</p>
              </div>
              <div className="feature-card">
                <div className="icon">📱</div>
                <h3>Responsive</h3>
                <p>Works perfectly on all devices</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing">
          <div className="container">
            <h2>Pricing</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Starter</h3>
                <div className="price">$29</div>
                <ul>
                  <li>10 projects</li>
                  <li>Basic support</li>
                  <li>1 team member</li>
                </ul>
                <button className="btn-primary">Choose Plan</button>
              </div>
              <div className="pricing-card featured">
                <div className="badge">POPULAR</div>
                <h3>Professional</h3>
                <div className="price">$79</div>
                <ul>
                  <li>Unlimited projects</li>
                  <li>Priority support</li>
                  <li>5 team members</li>
                </ul>
                <button className="btn-primary">Choose Plan</button>
              </div>
              <div className="pricing-card">
                <h3>Enterprise</h3>
                <div className="price">Custom</div>
                <ul>
                  <li>Custom solutions</li>
                  <li>Dedicated support</li>
                  <li>Unlimited team members</li>
                </ul>
                <button className="btn-primary">Contact Us</button>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="about-content">
              <h2>About Us</h2>
              <p>
                NovaSphere is a leading platform for innovative web solutions. We help businesses
                transform their digital presence with cutting-edge technology and expert guidance.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span>NovaSphere</span>
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
            <p>&copy; 2025 NovaSphere Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
