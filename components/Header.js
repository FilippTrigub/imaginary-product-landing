import Link from 'next/link';

export default function Header() {
  const toggleMobileMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
  };

  // Close mobile menu when clicking outside
  if (typeof window !== 'undefined') {
    document.addEventListener('click', function(event) {
      const nav = document.querySelector('.enhanced-nav');
      const toggle = document.querySelector('.mobile-menu-toggle');
      const menu = document.getElementById('nav-menu');

      if (!nav.contains(event.target) && menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });

    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors.length > 0) {
      anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
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
        });
      });
    }
  }

  return (
    <header className="enhanced-header">
      <div className="container">
        <div className="enhanced-logo">
          <img src="/images/logo.svg" alt="NovaSphere Logo" />
          <Link href="/"><span>NovaSphere v2</span></Link>
        </div>

        <nav className="enhanced-nav">
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>☰</button>
          <ul id="nav-menu">
            <li><Link href="/" className="active">Home</Link></li>

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
                <Link href="/team">Our Team</Link>
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
  );
}