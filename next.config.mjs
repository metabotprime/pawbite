/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pawbite-zeta.vercel.app' }],
        destination: 'https://www.pawbite.com/:path*',
        permanent: true,
      },
      {
        source: '/learn/cosequin-vs-pawbite-hip-joint',
        destination: '/vs/vs-cosequin',
        statusCode: 301,
      },
      {
        source: '/learn/petlab-vs-pawbite-probiotic',
        destination: '/vs/vs-petlab',
        statusCode: 301,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
