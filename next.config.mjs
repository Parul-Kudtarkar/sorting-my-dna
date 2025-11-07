/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  // If deploying to a subdirectory, uncomment and set the basePath
  // basePath: '/sorting-my-dna',
  // trailingSlash: true,
}

export default nextConfig
