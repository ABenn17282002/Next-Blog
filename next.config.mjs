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

  // redirect設定
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      // Wildcard path matching
      {
        source: "/blog/:slug",
        destination: "/news/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
