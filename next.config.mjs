// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.simpleicons.org', 'localhost', 'whopstats.vercel.app'],
//   },
// };

// export default nextConfig;

import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['cdn.simpleicons.org', 'localhost', 'whopstats.vercel.app'],
  },
};

const withMDX = createMDX({});

// 将 MDX 配置与 Next.js 配置合并
export default withMDX(nextConfig);
