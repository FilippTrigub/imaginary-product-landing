export default function Banner({ envVar, page }) {
  return (
    <>
      <div 
        id="env-banner" 
        style={{
          backgroundColor: '#ff6b6b', 
          color: 'white', 
          textAlign: 'center', 
          padding: '10px', 
          fontWeight: 'bold', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          zIndex: 1001
        }}
      >
        Environment Variable Set: {envVar}
      </div>
      <style jsx>{`
        ${page === 'home' 
          ? `header.enhanced-header {
              top: 40px !important;
            }
            .page-breadcrumb {
              top: 40px !important;
            }`
          : `header {
              top: 40px !important;
            }`
        }
      `}</style>
    </>
  );
}