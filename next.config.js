/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cloud.onlinegames.io'], // Allow images from game provider
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // For iframe security
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://cloud.onlinegames.io/:path*', // Proxy API requests to game provider
      },
    ];
  },
};

module.exports = nextConfig; 