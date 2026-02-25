'use client';

export default function Home() {
  const foobarSet = process.env.NEXT_PUBLIC_FOOBAR !== undefined;

  return (
    <>
      {foobarSet && (
        <div className="env-banner">
          Environment variable NEXT_PUBLIC_FOOBAR is set to: {process.env.NEXT_PUBLIC_FOOBAR}
        </div>
      )}

      <div className="red-circle"></div>

      <header>
        <div className="container">
          <div className="logo">
            <span>NovaSphere v2</span>
          </div>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to NovaSphere v2</h1>
            <p>A modern, responsive web application with a beautiful red circle in the middle and environment-aware banners.</p>
            <div className="cta-buttons">
              <a href="#features" className="btn-primary">Learn More</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern and responsive design that looks great on all devices.</p>
            </div>
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Built with Next.js for optimal performance and speed.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🔧</div>
              <h3>Easy to Customize</h3>
              <p>Easily customize colors, fonts, and layout to match your brand.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <h2>About Us</h2>
            <p>NovaSphere v2 is a cutting-edge web application showcasing modern web development practices. This version features a prominent red circle in the middle of the page and displays environment variable status through a banner at the top.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2>Get in Touch</h2>
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
              <span>NovaSphere v2</span>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#">Documentation</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; 2025 NovaSphere Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
