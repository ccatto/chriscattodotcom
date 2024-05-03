/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  output: "standalone",
  
  // experimental: {
  //   serverActions: true,
  // },
  // images: {
  // domains: ['images.somedomain.com'],
  // remotePatters: [
  //     {
  //         protocol: 'https',
  //         hostname: 'images.pexels.com',
  //         port: '',
  //         pathname: '/photos/**'
  //     }
  // ]
  // }
};

module.exports = nextConfig;
