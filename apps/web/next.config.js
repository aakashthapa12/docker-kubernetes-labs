/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack: (config, { isServer }) => {
    // Mark 'db' package as external so Next.js doesn't try to bundle Prisma client at build time
    if (isServer) {
      config.externals = [...(config.externals || []), 'db'];
    }
    return config;
  },
};

export default nextConfig;
