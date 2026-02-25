import Head from 'next/head';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
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
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      const handleSubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);
        contactForm.reset();
      };

      contactForm.addEventListener('submit', handleSubmit);
      return () => contactForm.removeEventListener('submit', handleSubmit);
    }
  }, []);

  useEffect(() => {
    // Animation for feature cards on scroll
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

    // Set initial state for animation
    document.querySelectorAll('.feature-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.5s ease';
    });

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <>
      <Head>
        <title>NovaSphere v2 - The Future of Personal Computing</title>
        <meta name="description" content="NovaSphere - Revolutionizing personal computing with holographic interfaces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Banner />
      <Header />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>The Future of Personal Computing</h1>
            <p>
              Experience the next generation of technology with NovaSphere's revolutionary holographic
              interface and quantum processing capabilities.
            </p>
            <div className="cta-buttons">
              <a href="#features" className="btn-primary">Explore Features</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/product.svg" alt="NovaSphere Product" />
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Amazing Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>Ultra Fast</h3>
              <p>Experience lightning-fast performance powered by quantum processing technology.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🔒</div>
              <h3>Secure</h3>
              <p>Bank-level encryption and security features to keep your data safe and private.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Stunning holographic interface that adapts to your personal style and preferences.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🌐</div>
              <h3>Cloud Integration</h3>
              <p>Seamlessly sync your data across all devices with our advanced cloud technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">$29/mo</div>
              <ul>
                <li>Basic holographic interface</li>
                <li>5GB cloud storage</li>
                <li>Email support</li>
                <li>Regular updates</li>
              </ul>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
            <div className="pricing-card featured">
              <div className="badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">$79/mo</div>
              <ul>
                <li>Advanced holographic features</li>
                <li>100GB cloud storage</li>
                <li>Priority support</li>
                <li>Early access to features</li>
              </ul>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$199/mo</div>
              <ul>
                <li>Full holographic suite</li>
                <li>Unlimited cloud storage</li>
                <li>24/7 dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="product-vision">
        <div className="container">
          <div className="pv-grid">
            <div className="pv-content">
              <h2>Product & Vision</h2>
              <p>
                NovaSphere represents a paradigm shift in personal computing. Our holographic interface
                technology combines cutting-edge quantum processors with intuitive gesture controls.
              </p>

              <div className="pv-features">
                <div className="pv-feature">
                  <span className="emoji">⚡</span>
                  <span>Quantum Processing</span>
                </div>
                <div className="pv-feature">
                  <span className="emoji">🎯</span>
                  <span>Gesture Control</span>
                </div>
                <div className="pv-feature">
                  <span className="emoji">🧠</span>
                  <span>AI-Powered</span>
                </div>
                <div className="pv-feature">
                  <span className="emoji">🌈</span>
                  <span>Holographic UI</span>
                </div>
              </div>

              <div className="pv-cta">
                <a href="#pricing" className="btn-primary">View Pricing</a>
                <a href="#contact" className="btn-secondary">Request Demo</a>
              </div>

              <div className="pv-vision">
                <h4>Our Vision</h4>
                <p>
                  To revolutionize how humans interact with technology by creating an intuitive,
                  three-dimensional computing experience accessible to everyone.
                </p>
              </div>
            </div>

            <div className="pv-visual">
              <img src="/images/product.svg" alt="Product Device" className="device" />
              <div className="pv-stats">
                <div className="pv-stat">
                  <h4>10K+</h4>
                  <p>Active Users</p>
                </div>
                <div className="pv-stat">
                  <h4>99.9%</h4>
                  <p>Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About NovaSphere</h2>
          <div className="about-content">
            <p>
              Founded in 2024, NovaSphere is at the forefront of holographic computing technology.
              Our team of visionary engineers and designers are committed to creating the future of
              personal computing.
            </p>
            <p>
              We believe that technology should be intuitive, beautiful, and accessible to everyone.
              That's why we've developed NovaSphere - a revolutionary platform that combines quantum
              processing with holographic displays.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
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
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
