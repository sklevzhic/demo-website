/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: 'serverless',
  typescript: { ignoreBuildErrors: false }
}

module.exports = nextConfig
