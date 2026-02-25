import '@/styles.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}