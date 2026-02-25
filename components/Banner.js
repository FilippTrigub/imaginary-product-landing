export default function Banner() {
  const showBanner = process.env.NEXT_PUBLIC_FOOBAR || process.env.FOOBAR;

  if (!showBanner) {
    return null;
  }

  return (
    <div style={{
      backgroundColor: '#ffd700',
      color: '#000',
      padding: '15px 20px',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '1rem',
      borderBottom: '3px solid #ffb700',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      🔔 Environment Variable Detected: FOOBAR or NEXT_PUBLIC_FOOBAR is set
    </div>
  );
}
