import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home({ envVariable }) {
  return (
    <div className="container">
      <Head>
        <title>NovaSphere v2 - Enhanced Header</title>
        <meta name="description" content="Enhanced navigation system with dropdowns" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {envVariable && <Banner envVar={envVariable} page="home"/>}
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="page-breadcrumb">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Enhanced Header Demo</span>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <section style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Enhanced Header with Navigation</h1>
          <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '40px' }}>
            This page demonstrates the enhanced header with dropdown navigation for subpages.
          </p>

          <div style={{ background: '#f8f9fa', padding: '40px', borderRadius: '10px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <h3>Navigation Features:</h3>
            <ul style={{ lineHeight: '2', color: '#555' }}>
              <li><strong>Dropdown Menus:</strong> Products and Company sections with subpage links</li>
              <li><strong>Active States:</strong> Current page highlighting</li>
              <li><strong>Mobile Responsive:</strong> Collapsible mobile menu</li>
              <li><strong>Breadcrumb Navigation:</strong> Shows current page location</li>
              <li><strong>Sticky Header:</strong> Stays visible while scrolling</li>
              <li><strong>Smooth Animations:</strong> Hover effects and transitions</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>Available Subpages:</h3>
            <ul style={{ lineHeight: '2', color: '#555' }}>
              <li><a href="/">Home</a> - Main landing page</li>
              <li><a href="/team">Team</a> - Meet our team members</li>
              <li><a href="#features">Features</a> - Product features section</li>
              <li><a href="#pricing">Pricing</a> - Pricing plans</li>
              <li><a href="#about">About</a> - Company information</li>
              <li><a href="#contact">Contact</a> - Contact form</li>
            </ul>
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
                  <li><a href="/team">Our Team</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Support Center</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Connect</h4>
                <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">Social Media</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; 2025 NovaSphere Inc. All rights reserved. Version 2.0
            <br />123 Innovation Drive, Tech Valley, CA 94000 | Phone: (555) 123-4567 | Email: info@novasphere.com
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