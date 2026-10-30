/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Une seule adresse officielle : www.allonuisibleidf.fr redirige vers allonuisibleidf.fr (redirection permanente)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.allonuisibleidf.fr' }],
        destination: 'https://allonuisibleidf.fr/:path*',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
