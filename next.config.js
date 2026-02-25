/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FOOBAR: process.env.FOOBAR,
    NEXT_PUBLIC_FOOBAR: process.env.NEXT_PUBLIC_FOOBAR,
  },
};

module.exports = nextConfig;