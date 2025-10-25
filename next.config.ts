import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    config.cache = false;
    return config;
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
