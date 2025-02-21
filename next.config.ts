import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", //  DANGER: Allows ALL hostnames!
        // You might also want to include http if needed, but https is recommended.
        // port: '*',  // optional: allows all ports
        // pathname: '**', // optional: allows all paths
      },
    ],
  },
};

export default nextConfig;