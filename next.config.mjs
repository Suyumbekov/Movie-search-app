/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "os.alipayobjects.com",
        port: "",
        pathname: "/rmsportal/**",
      },
    ],
  },
};

export default nextConfig;
