import Layout from '../components/Layout';

export default function Home() {
  return (
      <Layout>
        {/* Breadcrumb Navigation */}
        <div className="page-breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-separator">›</span>
              <span>Main Landing Page</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>NovaSphere: The Future of Personal Computing</h1>
              <p>Experience revolutionary holographic interfaces powered by quantum computing technology. Step into a world where your imagination becomes reality.</p>
              <div className="cta-buttons">
                <Link href="#features" className="btn-primary">Explore Our Technology</Link>
                <Link href="#contact" className="btn-secondary">Get Early Access</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/product.svg" alt="NovaSphere Holographic Interface" width={600} height={400} />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <h2>Innovative Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon">🔮</div>
                <h3>Holographic Display</h3>
                <p>3D interfaces that respond to gestures and voice commands, bringing your digital world to life.</p>
              </div>

              <div className="feature-card">
                <div className="icon">⚡</div>
                <h3>Quantum Processing</h3>
                <p>Unprecedented computational power utilizing quantum principles for complex problem solving.</p>
              </div>

              <div className="feature-card">
                <div className="icon">🔒</div>
                <h3>Privacy First</h3>
                <p>Advanced encryption protocols ensure your data remains secure in our distributed network.</p>
              </div>

              <div className="feature-card">
                <div className="icon">🌐</div>
                <h3>Cross-Platform Integration</h3>
                <p>Seamlessly connect with all your existing devices in a unified ecosystem.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product &Vision Section */}
        <section id="vision" className="product-vision">
          <div className="container">
            <div className="pv-grid">
              <div className="pv-content">
                <h2>Revolutionary Computing Experience</h2>
                <p>At NovaSphere, we envision a future where the boundary between digital and physical worlds disappears. Our cutting-edge technology brings your virtual experiences into reality.</p>

                <div className="pv-features">
                  <div className="pv-feature">
                    <span className="emoji">🎨</span>
                    <span>Creative</span>
                  </div>
                  <div className="pv-feature">
                    <span className="emoji">🚀</span>
                    <span>Powerful</span>
                  </div>
                  <div className="pv-feature">
                    <span className="emoji">🔄</span>
                    <span>Adaptive</span>
                  </div>
                  <div className="pv-feature">
                    <span className="emoji">🌍</span>
                    <span>Connected</span>
                  </div>
                  <div className="pv-feature">
                    <span className="emoji">📱</span>
                    <span>Intuitive</span>
                  </div>
                  <div className="pv-feature">
                    <span className="emoji">🛡️</span>
                    <span>Secure</span>
                  </div>
                </div>

                <div className="pv-cta">
                  <button className="btn-primary">Join Waitlist</button>
                  <button className="btn-secondary">Demo Video</button>
                </div>

                <div className="pv-stats">
                  <div className="pv-stat">
                    <h4>Preorders</h4>
                    <p>50,000+</p>
                  </div>
                  <div className="pv-stat">
                    <h4>Funding Raised</h4>
                    <p>$50M Series A</p>
                  </div>
                </div>

                <div className="pv-vision">
                  <h4>Our Vision</h4>
                  <p>We aim to create an era where computing is as natural and intuitive as the physical world around us. Through our holographic interfaces and quantum processing capabilities, NovaSphere will fundamentally change how humans interact with technology.</p>
                </div>
              </div>
              <div className="pv-visual">
                <img className="device" src="/images/product.svg" alt="NovaSphere device showcase" width={400} height={300}/>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing">
          <div className="container">
            <h2>Flexible Plans</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Explorer</h3>
                <div className="price">$1,299</div>
                <ul>
                  <li>NovaSphere Device</li>
                  <li>256GB Storage</li>
                  <li>Standard Support</li>
                  <li>Basic Feature Set</li>
                </ul>
                <button className="btn-secondary">Select Plan</button>
              </div>

              <div className="pricing-card featured">
                <span className="badge">POPULAR</span>
                <h3>Creator</h3>
                <div className="price">$1,999</div>
                <ul>
                  <li>Everything in Explorer</li>
                  <li>1TB Storage</li>
                  <li>Premium Support</li>
                  <li>Advanced Features</li>
                  <li>Priority Access</li>
                </ul>
                <button className="btn-primary">Select Plan</button>
              </div>

              <div className="pricing-card">
                <h3>Enterprise</h3>
                <div className="price">Custom</div>
                <ul>
                  <li>Unlimited Devices</li>
                  <li>Dedicated Support</li>
                  <li>White-Glove Setup</li>
                  <li>Tailored Solutions</li>
                  <li>Custom Feature Dev</li>
                </ul>
                <button className="btn-secondary">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <h2>About NovaSphere</h2>
              <p>Founded in 2022 with a mission to revolutionize personal computing, NovaSphere brings together the brightest minds in quantum computing, holographic interfaces, and artificial intelligence.</p>
              <p>Our team of industry veterans and innovative researchers are developing technologies that will define the next decade of human-computer interaction. We believe computing should be intuitive, immersive, and transformative.</p>
              <p>Join us in pioneering a new era of computing where the impossible becomes everyday reality.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-form">
              <h2>Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
  );
}