import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

export default nextConfig;
