/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // productionBrowserSourceMaps: true,
  images: {
    loader: "akamai",
    path: "",
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig
