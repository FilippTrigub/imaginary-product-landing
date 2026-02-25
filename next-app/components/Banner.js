import React from 'react';

export default function Banner() {
  // Check for FOOBAR or NEXT_PUBLIC_FOOBAR environment variables
  const showBanner = process.env.FOOBAR !== undefined || process.env.NEXT_PUBLIC_FOOBAR !== undefined;
  
  if (!showBanner) return null;
  
  return (
    <div className="banner">
      Environment variable FOOBAR/NEXT_PUBLIC_FOOBAR is set
    </div>
  );
}