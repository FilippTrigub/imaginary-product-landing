import Link from 'next/link';

export default function Footer() {
  return (
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
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/#pricing">Pricing</Link></li>
                <li><Link href="#">FAQ</Link></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <ul>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2025 NovaSphere Inc. All rights reserved. Version 2.0
        </div>
      </div>
    </footer>
  );
}
