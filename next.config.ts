import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the old /experience URL working now that it's a section on the home page.
  async redirects() {
    return [{ source: "/experience", destination: "/#experience", permanent: true }];
  },
};

export default nextConfig;
