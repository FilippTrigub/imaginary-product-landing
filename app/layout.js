import '../styles.css';

export const metadata = {
  title: 'Big Red Circle',
  description: 'A Next.js app with a big red circle',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
