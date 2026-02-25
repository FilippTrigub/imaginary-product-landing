import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Team({ envVariable }) {
  return (
    <div className="container">
      <Head>
        <title>NovaSphere v2 - Our Team</title>
        <meta name="description" content="Meet our amazing team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Environment Variable Banner */}
      {envVariable && <Banner envVar={envVariable} page="team"/>}
      
      <Header />

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
              <img src="images/logo.svg" alt="NovaSphere Logo" />
              <span>NovaSphere v2</span>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li><a href="/#features">Features</a></li>
                  <li><a href="/#pricing">Pricing</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="/#about">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="/#contact">Contact</a></li>
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
    </div>
  );
}

export async function getServerSideProps() {
  // Access environment variable on the server side
  const envVariable = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR || null;

  return {
    props: {
      envVariable,
    },
  };
}