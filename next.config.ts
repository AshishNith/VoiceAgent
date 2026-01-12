import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  transpilePackages: [
    '@livekit/components-react',
    '@livekit/components-core',
    '@radix-ui/react-select',
    '@radix-ui/react-toggle',
  ],
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
