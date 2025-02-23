/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "ui-avatars.com",
      hostname: "panel.unolo.com",
    }]
  }
};

export default nextConfig;
