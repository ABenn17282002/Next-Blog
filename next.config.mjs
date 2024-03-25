/** @type {import('next').NextConfig} */
const nextConfig = {
  // imageの読み込み
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
