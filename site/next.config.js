/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Tide Networks',
    description: 'Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://TideNetworks.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
