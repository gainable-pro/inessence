import type { NextConfig } from "next";

process.env.NEXT_DISABLE_ESLINT = "1";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
