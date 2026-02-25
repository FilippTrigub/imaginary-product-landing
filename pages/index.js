import Head from 'next/head';
import { useEffect } from 'react';

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

export default function Home({ hasEnvVar = false, envVarValue = '' }) {
  // Mobile menu toggle functionality
  useEffect(() => {
    function toggleMobileMenu() {
      const navMenu = document.getElementById('nav-menu');
      if(navMenu) {
        navMenu.classList.toggle('active');
      }
    }

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.enhanced-nav');
      const toggle = document.querySelector('.mobile-menu-toggle');
      const menu = document.getElementById('nav-menu');

      if (nav && !nav.contains(event.target) && menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleAnchorClick);

    // Add toggleMobileMenu to global scope so button can access it
    window.toggleMobileMenu = toggleMobileMenu;

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleAnchorClick);
      delete window.toggleMobileMenu;
    };
  }, []);

  return (
    <div className="main-app">
      <Head>
        <title>NovaSphere - The Future of Personal Computing</title>
        <meta name="description" content="NovaSphere - Advanced holographic computing interfaces" />
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

      {/* Enhanced Header with Navigation */}
      <header className="enhanced-header">
        <div className="container">
          <div className="enhanced-logo">
            <img src="/images/logo.svg" alt="NovaSphere Logo" />
            <a href="/"><span>NovaSphere v2</span></a>
          </div>

          <nav className="enhanced-nav">
            <button className="mobile-menu-toggle" onClick={() => window.toggleMobileMenu && window.toggleMobileMenu()}>☰</button>
            <ul id="nav-menu">
              <li><a href="/" className="active">Home</a></li>

              <li className="dropdown">
                <a href="#">Products ▾</a>
                <div className="dropdown-content">
                  <a href="#features">Features</a>
                  <a href="#pricing">Pricing Plans</a>
                  <a href="#">Tech Specs</a>
                  <a href="#">Documentation</a>
                </div>
              </li>

              <li className="dropdown">
                <a href="#">Company ▾</a>
                <div className="dropdown-content">
                  <a href="#about">About Us</a>
                  <a href="/team">Our Team</a>
                  <a href="#">Careers</a>
                  <a href="#">News & Press</a>
                </div>
              </li>

              <li><a href="#">Support</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#contact" className="btn-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

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
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <h1>Enhanced Header with Navigation</h1>
          <p style={{ fontSize: "1.1em", color: "#666", marginBottom: "40px" }}>
            This page demonstrates the enhanced header with dropdown navigation for subpages.
          </p>

          <div style={{ background: "#f8f9fa", padding: "40px", borderRadius: "10px", textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
            <h3>Navigation Features:</h3>
            <ul style={{ lineHeight: 2, color: "#555" }}>
              <li><strong>Dropdown Menus:</strong> Products and Company sections with subpage links</li>
              <li><strong>Active States:</strong> Current page highlighting</li>
              <li><strong>Mobile Responsive:</strong> Collapsible mobile menu</li>
              <li><strong>Breadcrumb Navigation:</strong> Shows current page location</li>
              <li><strong>Sticky Header:</strong> Stays visible while scrolling</li>
              <li><strong>Smooth Animations:</strong> Hover effects and transitions</li>
            </ul>

            <h3 style={{ marginTop: "30px" }}>Available Subpages:</h3>
            <ul style={{ lineHeight: 2, color: "#555" }}>
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

      {/* Footer */}
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