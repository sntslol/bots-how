import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bots.how" }],
        destination: "https://www.bots.how/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
