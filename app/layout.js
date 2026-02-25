import './style.css';

export const metadata = {
  title: 'NovaSphere - The Future of Personal Computing',
  description: 'NovaSphere landing page with holographic interfaces',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
