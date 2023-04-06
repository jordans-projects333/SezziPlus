const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
    appDir: true,
  },
};

// module.exports = withPWA(nextConfig);
module.exports = nextConfig