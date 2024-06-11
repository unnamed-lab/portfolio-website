/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.sh",
        port: "",
      },

      {
        protocol: "https",
        hostname: "**.x.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "**.twitter.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "**.facebook.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "**.linkedin.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
