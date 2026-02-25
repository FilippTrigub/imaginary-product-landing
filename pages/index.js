import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';

export default function Home({ hasEnvVar, envValue }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Apply the has-env-banner class to body when env var is set
  useEffect(() => {
    if (hasEnvVar) {
      document.body.classList.add('has-env-banner');
    } else {
      document.body.classList.remove('has-env-banner');
    }
    
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('has-env-banner');
    };
  }, [hasEnvVar]);

  // Check for mobile menu click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        const menu = document.getElementById('nav-menu');
        if (menu && menu.classList.contains('active')) {
          menu.classList.remove('active');
          setIsMobileMenuOpen(false);
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    const menu = document.getElementById('nav-menu');
    if (menu) {
      menu.classList.toggle('active');
      setIsMobileMenuOpen(prev => !prev);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>NovaSphere v2 - Enhanced Header Navigation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Environment Banner */}
      {hasEnvVar && (
        <div 
          id="env-banner" 
          style={{
            backgroundColor: '#ff0000', 
            color: 'white', 
            textAlign: 'center', 
            padding: '20px', 
            fontWeight: 'bold', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            zIndex: 1001,
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            fontSize: '18px'
          }}
        >
          Environment Variable "FOOBAR" is set to: {envValue}
        </div>
      )}

      {/* Enhanced Header with Navigation */}
      <header 
        className="enhanced-header" 
        style={{ 
          top: hasEnvVar ? '60px' : '0',
          position: hasEnvVar ? 'fixed' : 'sticky'
        }}
      >
        <div className="container">
          <div className="enhanced-logo">
            <img src="/images/logo.svg" alt="NovaSphere Logo" />
            <a href="/"><span>NovaSphere v2</span></a>
          </div>

          <nav className="enhanced-nav" ref={navRef}>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              ☰
            </button>
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
      <div className="page-breadcrumb" style={{ marginTop: hasEnvVar ? '100px' : '60px' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Enhanced Header Demo</span>
          </div>
        </div>
      </div>

      {/* Big Red Circle in the Middle */}
      <div className="circle-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: hasEnvVar ? 'calc(100vh - 200px)' : 'calc(100vh - 160px)',
        marginTop: hasEnvVar ? '200px' : '160px',
        transition: 'all 0.3s ease-in-out'
      }}>
        <div className="big-red-circle" style={{
          width: '400px',
          height: '400px',
          backgroundColor: '#FF0000',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 20px 40px rgba(255, 0, 0, 0.6)',
          position: 'relative',
          border: '8px solid #cc0000',
          transition: 'all 0.3s ease-in-out',
          animation: 'pulse 2s infinite'
        }}>
          <style jsx>{`
            @keyframes pulse {
              0% {
                transform: scale(1);
                box-shadow: 0 20px 40px rgba(255, 0, 0, 0.6);
              }
              50% {
                transform: scale(1.05);
                box-shadow: 0 25px 50px rgba(255, 0, 0, 0.8);
              }
              100% {
                transform: scale(1);
                box-shadow: 0 20px 40px rgba(255, 0, 0, 0.6);
              }
            }
            
            .big-red-circle:hover {
              transform: scale(1.05);
              box-shadow: 0 25px 50px rgba(255, 0, 0, 0.8);
            }
            
            .circle-container {
              transition: all 0.3s ease-in-out;
            }
          `}</style>
          <span style={{
            color: '#ffffff',
            fontSize: '28px',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            padding: '20px',
            zIndex: 1
          }}>
            BIG RED CIRCLE
          </span>
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
    </div>
  );
}

export async function getServerSideProps() {
  // Check if FOOBAR or NEXT_PUBLIC_FOOBAR is set
  const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;
  
  return {
    props: {
      hasEnvVar: !!foobar,  // Convert to boolean to ensure security
      envValue: foobar || ''  // Only pass the value if available
    }
  };
}