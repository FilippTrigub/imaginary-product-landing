import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Check environment variables after the component mounts
    // Since next.js runs both client-side and server-side, we'll check here
    if (typeof window !== 'undefined') {
      // Client side checks for both environment vars
      if (process.env.NEXT_PUBLIC_FOOBAR || window.process_env?.NEXT_PUBLIC_FOOBAR) {
        setShowBanner(true);
      } else {
        // Also try checking for window.NEXT_PUBLIC_FOOBAR if set differently
        if (window.NEXT_PUBLIC_FOOBAR) {
          setShowBanner(true);
        }
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>NovaSphere v2 - Enhanced Header Navigation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          .enhanced-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            box-shadow: 0 2px 20px rgba(0,0,0,0.15);
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 15px 0;
          }

          .enhanced-header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .enhanced-logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .enhanced-logo img {
            width: 40px;
            height: 40px;
          }

          .enhanced-logo span {
            font-size: 1.5em;
            font-weight: 700;
            color: white;
            text-decoration: none;
          }

          .enhanced-nav {
            display: flex;
            align-items: center;
          }

          .enhanced-nav ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 30px;
          }

          .enhanced-nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 8px 16px;
            border-radius: 5px;
            transition: all 0.3s ease;
            position: relative;
          }

          .enhanced-nav a:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-1px);
          }

          .enhanced-nav a.active {
            background-color: rgba(255, 255, 255, 0.2);
            font-weight: 600;
          }

          .enhanced-nav .dropdown {
            position: relative;
          }

          .enhanced-nav .dropdown-content {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            min-width: 200px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-radius: 8px;
            padding: 10px 0;
            margin-top: 5px;
          }

          .enhanced-nav .dropdown:hover .dropdown-content {
            display: block;
          }

          .enhanced-nav .dropdown-content a {
            color: #333;
            padding: 10px 20px;
            display: block;
            border-radius: 0;
          }

          .enhanced-nav .dropdown-content a:hover {
            background-color: #f8f9fa;
            transform: none;
          }

          .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5em;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .enhanced-nav ul {
              display: none;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background: rgba(102, 126, 234, 0.95);
              flex-direction: column;
              padding: 20px;
              gap: 15px;
              border-radius: 0 0 10px 10px;
            }

            .enhanced-nav ul.active {
              display: flex;
            }

            .mobile-menu-toggle {
              display: block;
            }

            .enhanced-nav .dropdown-content {
              position: static;
              display: block;
              background: rgba(255, 255, 255, 0.1);
              box-shadow: none;
              margin-top: 10px;
              border-radius: 5px;
            }

            .enhanced-nav .dropdown-content a {
              color: white;
              padding-left: 40px;
            }
          }

          .page-breadcrumb {
            background-color: #f8f9fa;
            padding: 15px 0;
            border-bottom: 1px solid #e9ecef;
          }

          .breadcrumb {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #666;
            font-size: 0.9em;
          }

          .breadcrumb a {
            color: #667eea;
            text-decoration: none;
          }

          .breadcrumb a:hover {
            text-decoration: underline;
          }

          .breadcrumb-separator {
            color: #ccc;
          }

          .center-red-circle-container {
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: -1;
          }

          .big-red-circle {
            width: 400px;
            height: 400px;
            background-color: red;
            border-radius: 50%;
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
          }
          
          .env-var-banner {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: #ff6b6b;
            color: white;
            text-align: center;
            padding: 12px 0;
            font-weight: bold;
            z-index: 9999;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .banner-content {
            padding: 0 20px;
          }
        `}</style>
      </Head>

      {showBanner && (
        <div className="env-var-banner">
          <div className="banner-content">
            Environment variable FOOBAR or NEXT_PUBLIC_FOOBAR is set!
          </div>
        </div>
      )}

      {/* Big red circle positioned in the center */}
      <div className="center-red-circle-container">
        <div className="big-red-circle"></div>
      </div>

      {/* Enhanced Header with Navigation */}
      <header className="enhanced-header">
        <div className="container">
          <div className="enhanced-logo">
            <img src="/images/logo.svg" alt="NovaSphere Logo" />
            <a href="#"><span>NovaSphere v2</span></a>
          </div>

          <nav className="enhanced-nav">
            <button className="mobile-menu-toggle" onClick={() => toggleMobileMenu()}>☰</button>
            <ul id="nav-menu">
              <li><a href="#" className="active">Home</a></li>

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
            <a href="#">Home</a>
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

          <div style={{ 
            background: '#f8f9fa', 
            padding: '40px', 
            borderRadius: '10px', 
            textAlign: 'left', 
            maxWidth: '800px', 
            margin: '0 auto'
          }}>
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
              <li><a href="#">Home</a> - Main landing page</li>
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

      <script dangerouslySetInnerHTML={{
        __html: `
          function toggleMobileMenu() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('active');
          }

          // Close mobile menu when clicking outside
          document.addEventListener('click', function(event) {
            const nav = document.querySelector('.enhanced-nav');
            const toggle = document.querySelector('.mobile-menu-toggle');
            const menu = document.getElementById('nav-menu');

            if (!nav.contains(event.target) && menu.classList.contains('active')) {
              menu.classList.remove('active');
            }
          });

          // Smooth scrolling for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });
        `
      }} />
    </div>
  );
}