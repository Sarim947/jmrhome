/** @type {import('next').NextConfig} */
const SITE = "https://jmrhabitat.com";

const nextConfig = {
  async redirects() {
    return [
      // ── 旧集合 slug 更名（集合页仍在，仅换了更语义化的地址） ──────────────
      // classic-3670 / neoclassical-2250 / aluminum-glass-lite-doors 原本与门款设计
      // 页 slug 撞车，已改名，避免同一关键词两个可索引 URL 互相蚕食。
      {
        // 用绝对地址做目标：www + 尾斜杠的请求只需「去尾斜杠 → 一次性跳到规范域」共 2 跳，
        // 不再出现「去尾斜杠 → 站内跳转 → www 归一化」的 3 跳链。
        source: "/products/fusion-5843",
        destination: `${SITE}/products/doors-with-lites`,
        permanent: true
      },
      {
        source: "/products/classic-3670",
        destination: `${SITE}/products/elegant-steel-doors`,
        permanent: true
      },
      {
        source: "/products/neoclassical-2250",
        destination: `${SITE}/products/steel-core-armored`,
        permanent: true
      },
      {
        source: "/products/aluminum-glass-lite-doors",
        destination: `${SITE}/products/doors-with-lites`,
        permanent: true
      },

      // ── 已下线的单款集合 → 对应门款详情页（这两条是必需的重定向） ────────
      // 原来这两个 slug 既是「只有一个产品的集合」又是同名门款，造成重复 URL；
      // 集合已删除，旧地址必须指向唯一的设计详情页，否则变成 404。
      {
        source: "/products/moonlight-3610",
        destination: `${SITE}/door-designs/moonlight-3610`,
        permanent: true
      },
      {
        source: "/products/pivot-prime-5893",
        destination: `${SITE}/door-designs/pivot-prime-5893`,
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
