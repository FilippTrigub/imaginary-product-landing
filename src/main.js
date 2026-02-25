import './styles.css';

// Check if FOOBAR or NEXT_PUBLIC_FOOBAR is set
const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR;

const app = document.createElement('div');
app.innerHTML = '<h1>NovaSphere landing page rebuilt in JS</h1>';

document.body.appendChild(app);

// Add banner if environment variable is set
if (foobar) {
  const banner = document.createElement('div');
  banner.className = 'env-banner';
  banner.textContent = `Environment Variable Set: ${foobar}`;
  document.body.prepend(banner);
}