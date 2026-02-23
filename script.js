// Client-side JavaScript remains the same for now
// Server-side logic will inject the foobar status

function checkFoobarStatus() {
  // This is a placeholder as client-side JS cannot access server environment vars
  // Actual check will happen in the Node.js server and injected into the page
  console.log('Next Public Foobar Status:', window.FOOBAR_STATUS || 'Not defined');
  
  if(window.FOOBAR_STATUS && window.FOOBAR_STATUS === 'set') {
    showFoobarBanner();
  } else {
    alert('Environment variable NEXT_PUBLIC_FOOBAR not found or not set.');
  }
}

function showFoobarBanner() {
  const banner = document.getElementById('foobar-banner');
  banner.classList.remove('hidden');
  banner.innerHTML = '<p>Foobar is set!</p>';
}