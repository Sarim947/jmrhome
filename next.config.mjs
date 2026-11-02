/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // 用绝对地址做目标：www + 尾斜杠的请求只需「去尾斜杠 → 一次性跳到规范域」共 2 跳，
        // 不再出现「去尾斜杠 → 站内跳转 → www 归一化」的 3 跳链。
        source: "/products/fusion-5843",
        destination: "https://jmrhabitat.com/products/aluminum-glass-lite-doors",
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co"
      }
    ]
  }
};

export default nextConfig;
