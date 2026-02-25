import './globals.css';

export const metadata = {
  title: 'NovaSphere',
  description: 'NovaSphere v2 - Enhanced Header Navigation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
