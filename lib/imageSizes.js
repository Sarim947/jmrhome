// 图片固有尺寸表（由 scripts/gen-image-sizes.mjs 生成，勿手改）
// 用于给 <img> 补 width/height，避免布局抖动，并让浏览器按真实像素渲染。
const IMAGE_SIZES = {
  "/assets/images/blog/card-pivot.jpg": { w: 1251, h: 834 },
  "/assets/images/blog/historic-front-doors-modern-performance/larimer-square-historic-district.webp": { w: 1600, h: 886 },
  "/assets/images/blog/middle-east-showcase/showcase-1.jpg": { w: 1200, h: 1200 },
  "/assets/images/blog/smart-entry-door-future/jmr-smart-entry-door-card.webp": { w: 1200, h: 800 },
  "/assets/images/blog/wood-look-aluminum-entry-doors/hero.jpg": { w: 4001, h: 2251 },
  "/assets/images/daily/Bronze Relic real.jpg": { w: 1251, h: 1251 },
  "/assets/images/daily/Bronze Relic render.jpg": { w: 1251, h: 1251 },
  "/assets/images/daily/Fine Art door real.jpg": { w: 601, h: 601 },
  "/assets/images/daily/Modern industrial door real.jpg": { w: 601, h: 601 },
  "/assets/images/daily/Walnut Accent Elite real.jpg": { w: 601, h: 601 },
  "/assets/images/products/British panel door.jpg": { w: 601, h: 451 },
  "/assets/images/products/armored/jmr015.jpg": { w: 1251, h: 939 },
  "/assets/images/products/armored/jmr018.jpg": { w: 1251, h: 939 },
  "/assets/images/products/armored/jmr3107.jpg": { w: 1251, h: 939 },
  "/assets/images/products/armored/jmr3358.jpg": { w: 1251, h: 939 },
  "/assets/images/products/armored/jmr3610.jpg": { w: 1251, h: 939 },
  "/assets/images/products/armored/jmr3618.jpg": { w: 1251, h: 939 },
  "/assets/images/products/armored/jmr3670.jpg": { w: 1251, h: 939 },
  "/assets/images/products/armored/jmr3672.jpg": { w: 1251, h: 939 },
  "/assets/images/products/elegant collection/jmr2003.jpg": { w: 1251, h: 939 },
  "/assets/images/products/elegant collection/jmr2103.jpg": { w: 1251, h: 939 },
  "/assets/images/products/elegant collection/jmr2105.jpg": { w: 1251, h: 939 },
  "/assets/images/products/elegant collection/jmr2110.jpg": { w: 1251, h: 939 },
  "/assets/images/products/elegant collection/jmrDH01.jpg": { w: 1251, h: 939 },
  "/assets/images/products/elegant collection/jmrDH02.jpg": { w: 1251, h: 939 },
  "/assets/images/products/hires/arched-neoclassical.webp": { w: 1448, h: 1086 },
  "/assets/images/products/hires/classic-3670.webp": { w: 1600, h: 1200 },
  "/assets/images/products/hires/fusion-5843.webp": { w: 1600, h: 1200 },
  "/assets/images/products/hires/hybrid-2103.webp": { w: 1600, h: 1200 },
  "/assets/images/products/hires/j-0555.webp": { w: 1200, h: 896 },
  "/assets/images/products/hires/j-2002.webp": { w: 1448, h: 1086 },
  "/assets/images/products/hires/j-2006.webp": { w: 1448, h: 1086 },
  "/assets/images/products/hires/j-2007.webp": { w: 1448, h: 1086 },
  "/assets/images/products/hires/j-2009.webp": { w: 1200, h: 896 },
  "/assets/images/products/hires/j-2015.webp": { w: 1448, h: 1086 },
  "/assets/images/products/hires/j-4244.webp": { w: 1600, h: 1200 },
  "/assets/images/products/hires/j-5496.webp": { w: 1448, h: 1086 },
  "/assets/images/products/hires/jt-02.webp": { w: 1448, h: 1086 },
  "/assets/images/products/hires/moonlight-3610.webp": { w: 1600, h: 1200 },
  "/assets/images/products/hires/pivot-prime-5893.webp": { w: 1600, h: 1200 },
};

export function imageSize(src) {
  return IMAGE_SIZES[src] ?? null;
}

export default IMAGE_SIZES;
