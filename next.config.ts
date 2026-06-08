import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in the `out/` directory on `next build`.
  // Suitable for hosting on any static host (GitHub Pages, Netlify, S3, etc.).
  output: 'export',

  // Static export can't use the on-demand Image Optimization server, so
  // images are served as-is from the public/ folder.
  images: {
    unoptimized: true,
  },

  // Emit each route as its own folder with an index.html (e.g. /directions/
  // -> /directions/index.html), which is the most compatible layout for
  // static file hosts.
  trailingSlash: true,
};

export default nextConfig;
