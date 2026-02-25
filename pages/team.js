import Head from 'next/head';

import { useEffect } from 'react';
import Head from 'next/head';

export default function Team({ hasEnvVar, envValue }) {
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
  
  return (
    <div className="container">
      <Head>
        <title>Our Team - NovaSphere</title>
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

      {/* Enhanced Header */}
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
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="page-breadcrumb" style={{ marginTop: hasEnvVar ? '100px' : '60px' }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Our Team</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ 
        padding: '100px 0 60px', 
        marginTop: hasEnvVar ? '40px' : '0',
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          padding: '0 20px' 
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '30px', 
            background: 'linear-gradient(135deg, #333, #6e8efb)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Our Amazing Team
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            marginBottom: '50px',
            lineHeight: '1.8'
          }}>
            Meet the talented professionals who make NovaSphere possible. 
            Each member brings unique skills and experiences to create exceptional products.
          </p>

          {/* Team Members Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            margin: '40px 0'
          }}>
            {[
              { name: "Alex Johnson", role: "CEO & Founder", emoji: "🚀" },
              { name: "Maria Garcia", role: "CTO", emoji: "💻" },
              { name: "James Wilson", role: "Head of Design", emoji: "🎨" },
              { name: "Sarah Chen", role: "Lead Developer", emoji: "⚙️" },
              { name: "Robert Davis", role: "Marketing Director", emoji: "📢" },
              { name: "Emily Brown", role: "Product Manager", emoji: "📊" }
            ].map((member, index) => (
              <div key={index} style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '30px 20px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {member.emoji}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '10px',
                  color: '#333'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#6e8efb',
                  fontWeight: '600'
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

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
                  <li><a href="/">Home</a></li>
                  <li><a href="/#features">Features</a></li>
                  <li><a href="/#pricing">Pricing</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/team">Our Team</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="/#contact">Contact</a></li>
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
            <br />123 Innovation Drive, Tech Valley, CA 94000
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