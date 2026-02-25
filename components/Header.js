import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/images/logo.svg" alt="NovaSphere Logo" />
          <span>NovaSphere v2</span>
        </div>
        <nav>
          <ul>
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#pricing">Pricing</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact" className="btn-primary">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
