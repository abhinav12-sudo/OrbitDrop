import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LAN IP changes with DHCP / network switches; allow the whole 172.17.x.x range.
  // Add another line (e.g. "192.168.*.*") if you test on a different subnet.
  allowedDevOrigins: ["172.17.*.*"],
};

export default nextConfig;
