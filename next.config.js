/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 30,
  poweredByHeader: false,
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
