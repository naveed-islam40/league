/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
