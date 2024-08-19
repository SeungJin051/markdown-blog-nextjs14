/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'www.notion.so',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'developer.android.com',
      'i.pinimg.com',
      'programmers.co.kr',
      'image.yes24.com',
      'data:image',
      'littledeep.com',
      'images.velog.io',
      'media.vlpt.us',
      'images.unsplash.com',
      'gaussian37.github.io',
      'www.juicymedia.co.uk',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
