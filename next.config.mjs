/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
     images: {
    unoptimized: true, // ✅ disable next/image optimization for static export
  },
};

export default nextConfig;
