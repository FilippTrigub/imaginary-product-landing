import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const [envValue, setEnvValue] = useState('');
  
  useEffect(() => {
    // Check for NEXT_PUBLIC_FOOBAR on the client side since it would be undefined on the server rendering
    const nextPublicValue = process.env.NEXT_PUBLIC_FOOBAR;
    
    // Since NEXT_PUBLIC_ variables are available client-side after hydration
    if (nextPublicValue || process.env.FOOBAR) {
      setShowBanner(true);
      setEnvValue(nextPublicValue || process.env.FOOBAR);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Red Circle Demo</title>
        <meta name="description" content="Big red circle demo with environment variable check" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Red Circle */}
      <div className="circle-container">
        <div className="red-circle"></div>
      </div>

      {/* Banner that appears when env var is set */}
      {showBanner && (
        <div className="banner fixed top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold">
          Environment Variable ACTIVE: {envValue}
        </div>
      )}

      {/* Additional content for demonstration */}
      <div className="p-8 mt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Red Circle with Environment Check</h1>
        <p className="text-xl text-center max-w-2xl mx-auto mb-10">
          This page displays a big red circle in the middle of the page. 
          If the FOOBAR or NEXT_PUBLIC_FOOBAR environment variable is set, a banner will appear at the top.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Current Status:</h2>
          <p className="mb-2">FOOBAR: {process.env.FOOBAR ? `"${process.env.FOOBAR}"` : 'not set'}</p>
          <p>NEXT_PUBLIC_FOOBAR: {typeof window !== 'undefined' && process.env.NEXT_PUBLIC_FOOBAR ? `"${process.env.NEXT_PUBLIC_FOOBAR}"` : 'not set'}</p>
        </div>
      </div>
    </div>
  );
}