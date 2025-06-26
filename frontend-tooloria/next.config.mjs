/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api-assets.clashofclans.com',
          },
        ],
      },
};

export default nextConfig;
