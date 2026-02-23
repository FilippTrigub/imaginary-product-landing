const app = document.createElement('div');
app.innerHTML = `
  <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center;">
    <h1 style="margin: 0; font-size: 2.5rem;">NovaSphere</h1>
    <p style="margin: 10px 0 0 0; font-size: 1.2rem; opacity: 0.9;">The Future of Personal Computing</p>
  </header>
  <main style="max-width: 800px; margin: 60px auto; padding: 0 20px; text-align: center;">
    <p style="font-size: 1.1rem; color: #666; line-height: 1.8; margin-bottom: 40px;">
      Welcome to NovaSphere, the next generation of computing experiences with holographic interfaces and advanced technologies.
    </p>
    <div style="display: flex; gap: 15px; justify-content: center;">
      <button style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 30px; border-radius: 30px; font-size: 1rem; cursor: pointer; font-weight: 600;">Get Started</button>
      <button style="background: transparent; color: #667eea; border: 2px solid #667eea; padding: 10px 28px; border-radius: 30px; font-size: 1rem; cursor: pointer; font-weight: 600;">Learn More</button>
    </div>
  </main>
  <footer style="background: #2d3748; color: white; padding: 40px 20px; text-align: center; margin-top: 60px;">
    <p style="margin: 0;">&copy; 2025 NovaSphere Inc. All rights reserved.</p>
  </footer>
`;
app.style.minHeight = '100vh';
app.style.display = 'flex';
app.style.flexDirection = 'column';
document.body.appendChild(app);
