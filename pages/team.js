import Head from 'next/head';

export async function getServerSideProps() {
  // Check for environment variables on server-side
  const hasEnvVar = !!process.env.FOOBAR || !!process.env.NEXT_PUBLIC_FOOBAR;
  const envVarValue = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

  return {
    props: {
      hasEnvVar,
      envVarValue
    }
  };
}

export default function Team({ hasEnvVar = false, envVarValue = '' }) {
  return (
    <div className="team-container">
      <Head>
        <title>NovaSphere v2 - Our Team</title>
        <meta name="description" content="Meet the team behind NovaSphere" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Banner component - conditionally rendered when environment variable is set */} 
      {hasEnvVar && (
        <div className="env-banner">
          <h3>Environment Variable Detected!</h3>
          <p>Variable Value: {envVarValue}</p>
        </div>
      )}

      <header>
        <div className="container">
          <div className="logo">
            <img src="/images/logo.svg" alt="NovaSphere Logo" />
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

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>The brilliant minds behind NovaSphere's revolutionary technology</p>

          <div className="team-grid">
            <div className="team-member">
              <img src="https://via.placeholder.com/200x200" alt="Sarah Chen" />
              <h3>Sarah Chen</h3>
              <div className="position">CEO & Founder</div>
              <p className="bio">Former quantum computing researcher at MIT, Sarah leads NovaSphere's vision of revolutionizing personal computing through innovative technology.</p>
            </div>

            <div className="team-member">
              <img src="https://via.placeholder.com/200x200" alt="Marcus Rodriguez" />
              <h3>Marcus Rodriguez</h3>
              <div className="position">Chief Technology Officer</div>
              <p className="bio">With 15 years of experience in holographic interfaces, Marcus oversees the technical development of NovaSphere's core technologies.</p>
            </div>

            <div className="team-member">
              <img src="https://via.placeholder.com/200x200" alt="Dr. Aisha Patel" />
              <h3>Dr. Aisha Patel</h3>
              <div className="position">Head of Research</div>
              <p className="bio">Leading our R&D department, Aisha brings expertise in neural networks and machine learning to advance our AI capabilities.</p>
            </div>

            <div className="team-member">
              <img src="https://via.placeholder.com/200x200" alt="James Wilson" />
              <h3>James Wilson</h3>
              <div className="position">Design Director</div>
              <p className="bio">Former lead designer at Apple, James ensures that NovaSphere's interface is both beautiful and intuitive for users.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/images/logo.svg" alt="NovaSphere Logo" />
              <span>NovaSphere v2</span>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li><a href="/">Features</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="/">About</a></li>
                  <li><a href="#">Careers</a></li>
              <li><a href="/">Contact</a></li>
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

      {/* Add custom styles for the banner */}
      <style jsx global>{`
        .env-banner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #ff6b6b;
          color: white;
          text-align: center;
          padding: 10px 20px;
          z-index: 1001;
          font-weight: bold;
          font-size: 1.1em;
        }
        
        .env-banner h3 {
          margin: 0;
          font-size: 1.2em;
          display: inline-block;
        }
        
        .env-banner p {
          margin: 0 0 0 15px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}