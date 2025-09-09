// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Optional for Vercel optimization
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Build ke waqt ESLint ignore karega
  },
  typescript: {
    ignoreBuildErrors: true, // TypeScript errors ignore karega
  },
};

export default nextConfig;
