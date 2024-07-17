/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: 'https://images.unsplash.com/**',
            },
            {
                protocol: 'https',
                hostname: 'localhost:3000',
                port: '',
                pathname: '',
              },
          ],
    }
};

export default nextConfig;
