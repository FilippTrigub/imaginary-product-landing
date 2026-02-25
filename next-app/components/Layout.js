import Head from 'next/head';
import Link from 'next/link';
import Banner from './Banner';

export default function Layout({ children, title = 'NovaSphere - The Future of Personal Computing' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Banner />

      {/* Enhanced Header with Navigation */}
      <header className="enhanced-header">
        <div className="container">
          <div className="enhanced-logo">
            <Link href="/">
              <img src="/images/logo.svg" alt="NovaSphere Logo" width={40} height={40} />
              <span>NovaSphere v2</span>
            </Link>
          </div>

          <nav className="enhanced-nav">
            <button className="mobile-menu-toggle" onClick={() => toggleMobileMenu()}>
              ☰
            </button>
            <ul id="nav-menu">
              <li><Link href="/" className="active">Home</Link></li>

              <li className="dropdown">
                <a href="#">Products ▾</a>
                <div className="dropdown-content">
                  <Link href="/#features">Features</Link>
                  <Link href="/#pricing">Pricing Plans</Link>
                  <a href="#">Tech Specs</a>
                  <a href="#">Documentation</a>
                </div>
              </li>

              <li className="dropdown">
                <a href="#">Company ▾</a>
                <div className="dropdown-content">
                  <Link href="/#about">About Us</Link>
                  <Link href="/team">Our Team</Link>
                  <a href="#">Careers</a>
                  <a href="#">News & Press</a>
                </div>
              </li>

              <li><Link href="#">Support</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="/#contact" className="btn-primary">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/images/logo.svg" alt="NovaSphere Logo" width={40} height={40} />
              <span>NovaSphere v2</span>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li><Link href="/#features">Features</Link></li>
                  <li><Link href="/#pricing">Pricing</Link></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Tech Specs</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/#about">About</Link></li>
                  <li><Link href="/team">Our Team</Link></li>
                  <li><a href="#">Careers</a></li>
                  <li><Link href="/#contact">Contact</Link></li>
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

      <script
        dangerouslySetInnerHTML={{
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
          `
        }}
      />
    </>
  );
}