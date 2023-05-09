/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.cosmicjs.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        //port: '',
        //pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
