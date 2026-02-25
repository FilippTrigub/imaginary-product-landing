module.exports = {
  reactStrictMode: true,
  env: {
    // Expose environment variables to the client
    NEXT_PUBLIC_FOOBAR: process.env.NEXT_PUBLIC_FOOBAR || null,
  },
  // Allow images from local sources
  images: {
    domains: ['localhost'],
  },
};

// If running with FOOBAR env var being checked too (though only NEXT_PUBLIC_ vars are accessible in browser)
const nextConfig = {
  reactStrictMode: true,
  env: {
    FOOBAR: process.env.FOOBAR || null,
    NEXT_PUBLIC_FOOBAR: process.env.NEXT_PUBLIC_FOOBAR || null,
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;