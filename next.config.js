/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  env: {
    MICROCMS_SERVICE_DOMAIN: process.env.MICEOCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
}

module.exports = nextConfig
