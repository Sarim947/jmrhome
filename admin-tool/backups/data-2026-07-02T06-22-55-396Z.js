export const featuredProducts = [
  {
    id: 1,
    name: "Hybrid #2103",
    series: "Fusion",
    shortDesc: "Multi-material layering, precision carving.",
    img: "/assets/images/products/Hybrid material mixed door.jpg",
    params: {
      style: "Modern",
      material: "Steel + Aluminum",
      configuration: "Single or double",
      smartLock: "Optional",
      size: "Up to 1800x2500mm"
    },
    description:
      "Featuring a central carved aluminum panel with heat transfer wood grain, flanked by reinforced steel plates."
  },
  {
    id: 2,
    name: "Classic #3670",
    series: "Armored",
    shortDesc: "Classical splicing, elegant three-grid design.",
    img: "/assets/images/products/Classic Grid door.jpg",
    params: {
      style: "Classic",
      material: "Aluminum 3-Panel",
      configuration: "Single or double",
      smartLock: "Optional",
      size: "Up to 2080x3000mm"
    },
    description:
      "A timeless armor-spliced design featuring minimalist three-tier panels and high-grade aluminum construction."
  },
  {
    id: 3,
    name: "Pivot Prime #5893",
    series: "Minimalist",
    shortDesc: "Offset pivot, minimalist lines, grand entrance.",
    img: "/assets/images/products/Pivot Prime door.jpg",
    params: {
      style: "Ultra Modern",
      material: "High-grade Aluminum",
      configuration: "Single pivot door",
      smartLock: "Optional",
      size: "Up to 2100x3600mm"
    },
    description:
      "An offset pivot door designed for maximum use of large spaces, featuring clean horizontal lines for high-end residential entries."
  },
  {
    id: 4,
    name: "Fusion #5843",
    series: "Luminous",
    shortDesc: "Thermal break system, glass integration, natural light.",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    params: {
      style: "Modern Eco-Industrial",
      material: "Thermal Break Aluminum + Glass",
      configuration: "Single door with sidelite",
      smartLock: "Optional",
      size: "Up to 1800x3000mm"
    },
    description:
      "A high-performance thermal break system combining fluted glass for transparency with the natural warmth of wood grain and sleek metal accents."
  },
  {
    id: 5,
    name: "Neoclassical #2250",
    series: "Neoclassical",
    shortDesc: "Tiered moldings, refined regency aesthetics.",
    img: "/assets/images/products/British panel door.jpg",
    params: {
      style: "Modern British Neoclassical",
      material: "Steel + Aluminum profile",
      configuration: "Single door",
      smartLock: "Optional + Round knob",
      size: "Up to 1980x2500mm"
    },
    description:
      "A sophisticated modern regency design featuring dual recessed panels with tiered moldings, finished in a deep petroleum blue satin lacquer."
  },
  {
    id: 6,
    name: "Moonlight #3610",
    series: "Minimalist",
    shortDesc: "Integrated handle, satin metallic finish, tech-luxury.",
    img: "/assets/images/products/Modern Grey door.jpg",
    params: {
      style: "Modern Minimalist",
      material: "Satin Aluminum",
      configuration: "Single armored door",
      smartLock: "Optional",
      size: "Up to 2080x3000mm"
    },
    description:
      "A sleek tech-luxury entrance featuring a Moonlight Silver satin finish and a distinctive vertical integrated handle."
  }
];

export const productCollections = [
  {
    slug: "essentials",
    title: "Essentials Collection",
    shortDesc: "Multi-family housing, refined finishes.",
    img: "/assets/images/products/steel/Steel2009.jpg",
    items: [
      productItem("J-2009", "/assets/images/products/steel/Steel2009.jpg", "Vertical fluted aluminum panel.", "A modern steel entrance door featuring vertical fluted aluminum accents."),
      productItem("J-2002", "/assets/images/products/steel/Steel2002.jpg", "Heat transfer wood grain.", "A mid-range steel entrance door featuring premium heat transfer wood grain and a vertical minimalist handle."),
      productItem("J-2006", "/assets/images/products/steel/Steel2006.jpg", "Vertical fluted textures, brushed gold handle.", "A premium steel entrance door with full-surface vertical fluted textures and a striking brushed gold handle."),
      productItem("J-2007", "/assets/images/products/steel/Steel2007.jpg", "Sandalwood wood grain.", "A premium steel entrance door distinguished by its rich sandalwood wood grain finish."),
      productItem("J-2015", "/assets/images/products/steel/Steel2015.jpg", "Pressed pattern, timeless design.", "A versatile steel entrance door featuring a subtle pressed pattern for a clean, timeless design.")
    ,
      {
        id: "jt-02",
        name: "JT-02",
        shortDesc: " Scandinavian Wood Grain Finish",
        img: "/assets/images/products/essentials/jt-02-mqqerx58.webp",
        altText: "Modern Entry Door with Sidelight & Wood Grain Finish",
        params: {
          style: "Minimalist Modern",
          material: "Aluminum",
          configuration: "Single or Double",
          smartLock: "Optional",
          size: "Up to 2180x3000"
        },
        description: "The main panel features a large area of warm wood grain finish. Its delicate and inviting horizontal textures break the icy coldness of traditional steel or iron doors. The surface is partitioned by evenly parallel, micro-grooved horizontal lines, visually expanding the door's width and giving the entire facade a more solid, grounded, and dignified presence."
      }]
  },
  {
    slug: "classic-3670",
    title: "Elegant Steel Doors",
    shortDesc: "Classical splicing, elegant three-grid design.",
    img: "/assets/images/products/Classic Grid door.jpg",
    items: [
      productItem("Jmr-2003", "/assets/images/products/elegant collection/jmr2003.jpg", "Sculptural raised pull handle.", "Modern steel entrance door with sculptural aluminum handle and textured architectural metal detailing."),
      productItem("Jmr-2103", "/assets/images/products/elegant collection/jmr2103.jpg", "Mixed metal finish integration.", "Combining wood transfer finishes, metallic coatings, aluminum panels, and steel into a refined multi-material composition."),
      productItem("Jmr-2105", "/assets/images/products/elegant collection/jmr2105.jpg", "Bold black metal handle.", "Defined by bold carved linear detailing and a refined black pull handle."),
      productItem("Jmr-2110", "/assets/images/products/elegant collection/jmr2110.jpg", "Horizontal statement pull handle.", "A horizontal architectural handle and precision fluted aluminum detailing."),
      productItem("JDH-01", "/assets/images/products/elegant collection/jmrDH01.jpg", "Textured steel, refined handle pairing.", "Modern steel entrance door with integrated sculptural handle and brushed architectural metal detailing."),
      productItem("JDH-02", "/assets/images/products/elegant collection/jmrDH02.jpg", "Architectural flush lock system.", "Layered textured surfaces and a refined horizontal metallic accent.")
    ]
  },
  {
    slug: "pivot-prime-5893",
    title: "Oversized Pivot",
    shortDesc: "Offset pivot, minimalist lines, grand entrance.",
    img: "/assets/images/products/pivot-prime-5893/oversized-pivot-cover-mqqb8sao.webp",
    items: [featuredProducts[2]]
  },
  {
    slug: "fusion-5843",
    title: "Doors with lites",
    shortDesc: "Glass integration, natural light.",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    items: [featuredProducts[3],
      {
        id: "j-4244",
        name: "J-4244",
        shortDesc: "French Classical",
        img: "/assets/images/products/fusion-5843/j-4244-mqqco64v.webp",
        altText: "J-4244 arch customized door",
        params: {
          style: "Minimalist Modern",
          material: "Aluminum",
          configuration: "Single or Double ",
          smartLock: "Optional",
          size: "Up to 2180x3000mm"
        },
        description: "Featuring a matte black aluminum frame complemented by tempered patterned glass—including water wave, rain, or frosted textures—this design ensures homeowner privacy while maintaining a high-end aesthetic appeal."
      },
      {
        id: "j-0555",
        name: "J-0555",
        shortDesc: "Modern Minimalist",
        img: "/assets/images/products/fusion-5843/j-0555-mqqcu0ru.webp",
        altText: "J-0555",
        params: {
          style: "Modern Minimalist",
          material: "Aluminum",
          configuration: "Single or Double",
          smartLock: "Optional",
          size: "Up to 2280x3000"
        },
        description: "Dominated by a matte anthracite gray or charcoal finish, the main body is complemented by a long, vertical brushed champagne gold/brass handle at its center. This bold contrast between minimalist dark shades and radiant metal serves as a defining statement of modern luxury design."
      },
      {
        id: "j-0226",
        name: "J-0226",
        shortDesc: "German Modern Entry Door with Vertical Glass Cutout",
        img: "/assets/images/products/fusion-5843/j-0226-mqqdplxd.webp",
        altText: "Entry Door with Vertical Glass Cutout",
        params: {
          style: "German Modern",
          material: "Aluminum ",
          configuration: "Single or Double",
          smartLock: "Optional",
          size: "Up to 1180x3000"
        },
        description: "Premier choice for German Bauhaus architecture, perfectly matching contemporary homes with a strict minimalist aesthetic. The square handle echo the round lock cylinder, highlighting the mechanical beauty of the hardware."
      },
      {
        id: "j-5496",
        name: "J-5496",
        shortDesc: "Italian Modern Luxury Pivot Entry Door with Rust Look Finish",
        img: "/assets/images/products/fusion-5843/j-5496-mqqec8xv.webp",
        altText: "faux-oxidized metal finish 3D printing",
        params: {
          style: "Italian Modern",
          material: "Aluminum",
          configuration: "Single or Double",
          smartLock: "Optional",
          size: "Up to 1180x3000"
        },
        description: "The main panel features an artistic, mottled faux-oxidized metal finish achieved through 3D printing, revealing a premium texture where raw nature meets high design. Clean horizontal lines evenly divide the surface, breaking the monotony of a single slab while adding layered depth and a sense of architectural order. A bold, vertical black handlebar seamlessly blends with the dark, rusted texture."
      }]
  },
  {
    slug: "neoclassical-2250",
    title: "Steel Core Armored",
    shortDesc: "Tiered moldings, refined regency aesthetics.",
    img: "/assets/images/products/British panel door.jpg",
    items: [
      productItem("Jmr-015", "/assets/images/products/armored/jmr015.jpg", "Double-panel, blue-gray finish.", "Classic double-panel detailing and a smooth matte blue-gray finish."),
      productItem("Jmr-018", "/assets/images/products/armored/jmr018.jpg", "Radial textured, integrated sculptural handle.", "Intricate radial textured detailing with a monochromatic champagne-gold finish."),
      productItem("Jmr-3107", "/assets/images/products/armored/jmr3107.jpg", "Customizable house number plaque, concealed handles.", "Full-height wall panel design with integrated brushed gold detailing."),
      productItem("Jmr-3358", "/assets/images/products/armored/jmr3358.jpg", "Natural woodgrain, elongated pull handle.", "Rich natural woodgrain finishes with contrasting matte black metal accents."),
      productItem("Jmr-3610", "/assets/images/products/armored/jmr3610.jpg", "Subtle vertical fluted detailing.", "Sleek monochromatic finish with subtle vertical fluted detailing."),
      productItem("Jmr-3618", "/assets/images/products/armored/jmr3618.jpg", "Metallic bronze finish, artistic handle.", "Warm metallic bronze finish with sculptural artistic handle."),
      productItem("Jmr-3670", "/assets/images/products/armored/jmr3670.jpg", "Classic panel detailing, decorative ring knockers.", "Elegant classic panel detailing in a deep matte black finish."),
      productItem("Jmr-3672", "/assets/images/products/armored/jmr3672.jpg", "Classical panel detailing in soft sage green.", "Refined classical panel detailing in a soft sage green finish.")
    ]
  },
  {
    slug: "moonlight-3610",
    title: "Moonlight #3610",
    shortDesc: "Integrated handle, satin metallic finish, tech-luxury.",
    img: "/assets/images/products/Modern Grey door.jpg",
    items: [featuredProducts[5]]
  }
];

export const dailyWorks = [
  {
    id: 107,
    name: "Ocean Wave Smart LED",
    date: "2026-06-10",
    description: "An ultra-modern dual-panel-crafted ocean wave metal relief. Equipped with horizontal handles integrated with ambient blue LED illumination.",
    realImg: "/assets/images/daily/2026-06-10-ocean-wave-smart-led-real-mqpywamj.webp",
    renderImg: "/assets/images/daily/2026-06-10-ocean-wave-smart-led-render-mqpywajs.webp",
    altText: "Modern Ocean Wave Texture Armored Entrance Door with LED Handle",
    designPhilosophy: "\"Rhythm of Water\" - Inspired by the natural flow of ocean waves. The fluid textures symbolize wealth and flexibility, while the embedded blue light ray provides a guiding beacon of home and advanced security.",
    structure: "Steel Core Armored",
    surfaceFinish: "Metallic Painting"
  },
  {
    id: 106,
    name: "Diamond Armor Elite",
    date: "2026-06-23",
    description: "Armored entrance door featuring a stunning, precision-cut diamond geometric pattern on bronze relief. ",
    realImg: "/assets/images/daily/2026-06-23-diamond-armor-elite-real-mqpxnkgj.webp",
    renderImg: "/assets/images/daily/2026-06-23-diamond-armor-elite-render-mqpxnkdz.webp",
    altText: "Luxury Diamond Pattern Armored Entrance Door",
    designPhilosophy: "\"Eternal Brilliance\" - Inspired by the architectural brilliance of diamond cutting. The geometric facets catch light from every angle, symbolizing unyielding security and timeless luxury.",
    structure: "Full Aluminum Profile",
    surfaceFinish: "Brushed champagne gold by metallic painting"
  },
  {
    id: 101,
    name: "Anthracite Tech Dual",
    date: "2026-04-1",
    description: "Modern German industrial entrance with symmetrical vertical fluting and integrated architectural casing.",
    realImg: "/assets/images/daily/Modern industrial door real.jpg",
    renderImg: "/assets/images/daily/Modern industrial door render.jpg",
    designPhilosophy: "Technical minimalist approach emphasizing armored security and architectural permanence through clean geometry.",
    structure: "Steel",
    surfaceFinish: "Fine-textured metallic fluorocarbon coating"
  },
  {
    id: 102,
    name: "Ethereal Impression",
    date: "2026-05-11",
    description: "An artistic avant-garde entrance featuring a seamless landscape mural and a bespoke sculptural butterfly handle.",
    realImg: "/assets/images/daily/Fine Art door real.jpg",
    renderImg: "/assets/images/daily/Fine Art door render.jpg",
    designPhilosophy: "Simplicity meets sophistication - where every detail is meticulously crafted for the modern urban dweller.",
    structure: "Full Aluminum profile system",
    surfaceFinish: "Textured matte black with anti-fingerprint coating"
  },
  {
    id: 103,
    name: "Walnut Accent Elite",
    date: "2025-04-5",
    description: "An asymmetrical Italian-inspired entrance balancing expansive natural wood textures with a bold vertical metallic band.",
    realImg: "/assets/images/daily/Walnut Accent Elite real.jpg",
    renderImg: "/assets/images/daily/Walnut Accent Elite render.jpg",
    designPhilosophy: "Merging the organic warmth of timber with the structural precision of carbon-toned metal for a sophisticated residential facade.",
    structure: "Steel Core Armored",
    surfaceFinish: "Walnut wood grain paired with Matte Carbon Grey fluorocarbon-coated steel"
  },
  {
    id: 104,
    name: "Arch Neoclassical",
    date: "2025-04-9",
    description: "A refined French-European entrance featuring elegant arched moldings and personalized brass detailing.",
    realImg: "/assets/images/daily/Arch new classic door real.jpg",
    renderImg: "/assets/images/daily/Arch new classic door render.jpg",
    designPhilosophy: "Bridging 19th-century European architectural grace with 21st-century smart security functionality.",
    structure: "Steel",
    surfaceFinish: "Satin-finish lacquer in Creamy Off-White on a high-density smooth substrate"
  },
  {
    id: 105,
    name: "Celestial Bronze",
    date: "2025-5-27",
    description: "A sculptural luxury entry defined by radiant bronze textures and minimalist architectural framing.",
    realImg: "/assets/images/daily/Bronze Relic real.jpg",
    renderImg: "/assets/images/daily/Bronze Relic render.jpg",
    designPhilosophy: "Blending gallery-scale spatial composition with artisanal bronze craftsmanship, creating an immersive arrival experience.",
    structure: "Thermal break",
    surfaceFinish: "Handcrafted patinated bronze with sculpted sunburst relief texture"
  }
];

export const projectCases = [
  {
    id: "dubai-villa-pivot-entry",
    title: "Modern Villa Pivot Entrance",
    category: "Villa",
    doorType: "Pivot Door",
    location: "Dubai, UAE",
    date: "2026.05",
    img: "/assets/images/daily/Modern industrial door real.jpg",
    description: "Oversized dark metal entrance with architectural casing for a private villa facade."
  },
  {
    id: "hangzhou-art-villa-entry",
    title: "Artistic Villa Entrance",
    category: "Villa",
    doorType: "Art Door",
    location: "Hangzhou, China",
    date: "2026.04",
    img: "/assets/images/daily/Fine Art door real.jpg",
    description: "Custom artistic surface and sculptural handle designed as a residential focal point."
  },
  {
    id: "riyadh-walnut-residence",
    title: "Walnut Accent Residence",
    category: "Residential",
    doorType: "Armored Door",
    location: "Riyadh, Saudi Arabia",
    date: "2025.11",
    img: "/assets/images/daily/Walnut Accent Elite real.jpg",
    description: "Warm wood grain and carbon metal pairing for a high-end private residential project."
  },
  {
    id: "paris-arched-townhouse",
    title: "Arched Townhouse Entry",
    category: "Residential",
    doorType: "Classic Door",
    location: "Paris, France",
    date: "2025.09",
    img: "/assets/images/daily/Arch new classic door real.jpg",
    description: "Neoclassical arched entrance with personalized detailing and smart security hardware."
  },
  {
    id: "doha-bronze-hotel-suite",
    title: "Bronze Luxury Suite Entry",
    category: "Hotel",
    doorType: "Luxury Door",
    location: "Doha, Qatar",
    date: "2025.08",
    img: "/assets/images/daily/Bronze Relic real.jpg",
    description: "Bronze textured statement door developed for a premium hospitality interior."
  },
  {
    id: "melbourne-apartment-steel",
    title: "Apartment Steel Door Upgrade",
    category: "Apartment",
    doorType: "Steel Door",
    location: "Melbourne, Australia",
    date: "2025.07",
    img: "/assets/images/products/steel/Steel2009.jpg",
    description: "Multi-unit apartment entrance upgrade with durable steel structure and refined finish."
  },
  {
    id: "singapore-commercial-glass",
    title: "Commercial Glass Entry",
    category: "Commercial",
    doorType: "Glass Door",
    location: "Singapore",
    date: "2025.06",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    description: "Thermal break aluminum and glass system for a modern commercial entrance."
  },
  {
    id: "california-custom-armored",
    title: "Custom Armored Residence",
    category: "Villa",
    doorType: "Armored Door",
    location: "California, USA",
    date: "2025.05",
    img: "/assets/images/products/armored/jmr3670.jpg",
    description: "Classical armored entrance with deep matte finish and decorative hardware details."
  }
];

export const blogPosts = [
  {
  id: 202,
  title: "Why Architects Are Choosing Wood-Look Aluminum Entry Doors Instead of Solid Wood",
  date: "2026-05-11",
  excerpt:
    "Why wood-look aluminum entry doors are becoming a smarter alternative to solid wood for luxury homes, oversized entrances, and custom architectural projects.",
  img: "/assets/images/blog/wood-look-aluminum-entry-doors/hero.jpg",
  href: "/blog/wood-look-aluminum-entry-doors"
},
  {
    id: 201,
    title: "Pivot Door vs Traditional Front Door: Which Is Better for Modern Homes?",
    date: "2026-04-1",
    excerpt:
      "Comparing pivot doors and traditional hinged front doors from design and engineering perspectives to help you choose the right solution.",
    img: "/assets/images/blog/card-pivot.jpg",
    href: "/blog/pivot-vs-traditional"
  },
  {
    id: 203,
    title: "JMR's Dual-City Showcase in Middle East: Defining 2026 Bespoke Projects from Dubai to Riyadh",
    date: "2026-01-12",
    excerpt:
      "A December 2025 event review from Dubai and Riyadh, highlighting JMR's bespoke project solutions, smart manufacturing, and Middle East project support.",
    img: "/assets/images/blog/middle-east-showcase/showcase-1.jpg",
    href: "/blog/middle-east-showcase"
}
];

// Inspiration 图片更新说明：
// 1. 把新图片放到 public/assets/images/inspiration/ 文件夹。
// 2. src 写成 /assets/images/inspiration/图片文件名。
// 3. hoverText 是鼠标悬停时右下角黑色 bar 显示的两个词。
// 4. altText 是给搜索引擎和无障碍阅读器看的图片描述，建议写清楚门型、材质、场景。
// 5. layout 可选 hero、wide、tall、square、normal，用来标记图片类型。
// 6. span 控制图片宽度，当前是 12 列网格：3 小图，4 普通，5 中图，6 大图，7 主视觉。
// 7. 想调整页面顺序，直接调整数组里的图片顺序，不会随机排序。
export const inspirationImages = [
  {
    id: "inspiration-20260613-01",
    src: "/assets/images/inspiration/20260613_1_final.webp",
    title: "Entry Study 01",
    doorType: "Pivot Door",
    project: "Inspiration",
    hoverText: "Pivot Door",
    altText: "Pivot door inspiration for a modern luxury entrance facade",
    layout: "hero",
    span: 7
  },
  {
    id: "inspiration-20260613-02",
    src: "/assets/images/inspiration/20260613_2_final.webp",
    title: "Entry Study 02",
    doorType: "Armored Door",
    project: "Inspiration",
    hoverText: "Armored Door",
    altText: "Armored entrance door inspiration with a refined architectural facade",
    layout: "wide",
    span: 5
  },
  {
    id: "inspiration-arch-classic",
    src: "/assets/images/inspiration/Arch new classic door render.jpg",
    title: "Arch Neoclassical",
    doorType: "Classic Door",
    project: "Paris Townhouse",
    hoverText: "Classic Door",
    altText: "Classic arched cream entrance door on a Paris townhouse stone facade",
    layout: "square",
    span: 3
  },
  {
    id: "inspiration-20260613-03",
    src: "/assets/images/inspiration/20260613_3_final.webp",
    title: "Entry Study 03",
    doorType: "Walnut Entry",
    project: "Inspiration",
    hoverText: "Walnut Entry",
    altText: "Walnut entry door inspiration for a warm contemporary residence",
    layout: "normal",
    span: 4
  },
  {
    id: "inspiration-fine-art",
    src: "/assets/images/inspiration/Fine Art door render.jpg",
    title: "Ethereal Impression",
    doorType: "Art Door",
    project: "Gallery Villa",
    hoverText: "Art Door",
    altText: "Art entrance door with decorative surface design for a gallery villa",
    layout: "square",
    span: 3
  },
  {
    id: "inspiration-20260613-04",
    src: "/assets/images/inspiration/20260613_4_final.webp",
    title: "Entry Study 04",
    doorType: "Glass Door",
    project: "Inspiration",
    hoverText: "Glass Door",
    altText: "Glass entrance door inspiration for a clean modern exterior",
    layout: "wide",
    span: 5
  },
  {
    id: "inspiration-20260613-05",
    src: "/assets/images/inspiration/20260613_5_final.webp",
    title: "Entry Study 05",
    doorType: "Pivot Door",
    project: "Inspiration",
    hoverText: "Pivot Door",
    altText: "Modern pivot door inspiration for a high-end residential entrance",
    layout: "normal",
    span: 4
  },
  {
    id: "inspiration-bronze",
    src: "/assets/images/inspiration/Bronze Relic render.jpg",
    title: "Celestial Bronze",
    doorType: "Bronze Door",
    project: "Hotel Suite",
    hoverText: "Bronze Door",
    altText: "Bronze luxury entrance door with sculptural surface detailing",
    layout: "square",
    span: 3
  },
  {
    id: "inspiration-20260613-06",
    src: "/assets/images/inspiration/20260613_6_final.webp",
    title: "Entry Study 06",
    doorType: "Armored Door",
    project: "Inspiration",
    hoverText: "Armored Door",
    altText: "Armored door inspiration for a premium villa entrance",
    layout: "wide",
    span: 6
  },
  {
    id: "inspiration-walnut",
    src: "/assets/images/inspiration/Walnut Accent Elite render.jpg",
    title: "Walnut Accent Elite",
    doorType: "Walnut Entry",
    project: "Private Residence",
    hoverText: "Walnut Entry",
    altText: "Walnut accent entrance door for a private contemporary residence",
    layout: "square",
    span: 3
  },
  {
    id: "inspiration-20260613-07",
    src: "/assets/images/inspiration/20260613_7_final.webp",
    title: "Entry Study 07",
    doorType: "Fusion Door",
    project: "Inspiration",
    hoverText: "Fusion Door",
    altText: "Fusion material entrance door inspiration with modern facade details",
    layout: "hero",
    span: 6
  },
  {
    id: "inspiration-20260613-08",
    src: "/assets/images/inspiration/20260613_8_final.webp",
    title: "Entry Study 08",
    doorType: "Steel Door",
    project: "Inspiration",
    hoverText: "Steel Door",
    altText: "Steel entrance door inspiration for a modern architectural project",
    layout: "normal",
    span: 4
  },
  {
    id: "inspiration-20260613-09",
    src: "/assets/images/inspiration/20260613_9_final.webp",
    title: "Entry Study 09",
    doorType: "Modern Door",
    project: "Inspiration",
    hoverText: "Modern Door",
    altText: "Modern entrance door inspiration with clean luxury exterior styling",
    layout: "normal",
    span: 5
  },
  {
    id: "inspiration-20260613-10",
    src: "/assets/images/inspiration/20260613_10_final.webp",
    title: "Entry Study 10",
    doorType: "Villa Door",
    project: "Inspiration",
    hoverText: "Villa Door",
    altText: "Villa entrance door inspiration for a high-end residential facade",
    layout: "wide",
    span: 7
  }
];

function productItem(name, img, shortDesc, description) {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    shortDesc,
    img,
    params: {
      style: "Minimalist Modern",
      material: "Steel + Aluminum Honeycomb",
      configuration: "Single or double",
      smartLock: "Optional",
      size: "Up to 1980x2500mm"
    },
    description
  };
}
