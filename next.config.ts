import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: allow Next assets when the site is opened by RFC1918 LAN IP (any subnet).
  // Your machine moved from 172.17.x (e.g. Docker) to 10.x (VPN/corp/home) — one wildcard per /8 or /16 range.
  allowedDevOrigins: ["10.*.*.*", "172.*.*.*", "192.168.*.*"],
};

export default nextConfig;
