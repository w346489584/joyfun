/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cloud.onlinegames.io'], // Allow images from game provider
  },
  // 静态导出配置
  trailingSlash: true, // 在页面URL末尾添加斜杠，有助于静态托管
  // 保留headers配置但添加注释表明它在静态导出时不会生效
  async headers() {
    // 注意：在静态导出时，这些头信息将不会生效
    // 需要在Cloudflare Pages设置中配置自定义头信息
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
  // 保留rewrites配置但添加注释表明它在静态导出时不会生效
  async rewrites() {
    // 注意：在静态导出时，这些重写规则将不会生效
    // 需要在Cloudflare Pages的_redirects文件中配置
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://cloud.onlinegames.io/:path*', // Proxy API requests to game provider
      },
    ];
  },
};

module.exports = nextConfig; 