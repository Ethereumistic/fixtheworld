/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
  swcMinify: true,
  images: {
        formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discord.com',
        port: '',
      }
    ],
},
};

export default nextConfig;
