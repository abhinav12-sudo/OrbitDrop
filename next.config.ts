import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev assets when opening the site by LAN IP (e.g. phone / another PC).
  // Update the address if your machine gets a different IP.
  allowedDevOrigins: ["172.17.74.126"],
};

export default nextConfig;
