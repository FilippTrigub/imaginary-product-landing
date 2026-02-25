// Client-side environment variable exposure
(function() {
  const foobar = process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR || '';
  window.FOOBAR_VALUE = foobar;
})();
