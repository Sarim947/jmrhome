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
    ]
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
    title: "Pivot Prime #5893",
    shortDesc: "Offset pivot, minimalist lines, grand entrance.",
    img: "/assets/images/products/Pivot Prime door.jpg",
    items: [featuredProducts[2]]
  },
  {
    slug: "fusion-5843",
    title: "Fusion #5843",
    shortDesc: "Thermal break system, glass integration, natural light.",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    items: [featuredProducts[3]]
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
    id: 101,
    name: "Anthracite Tech Dual",
    date: "2025-04-1",
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
    date: "2025-04-3",
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

export const blogPosts = [
  {
    id: 201,
    title: "Pivot Door vs Traditional Front Door: Which Is Better for Modern Homes?",
    date: "2025-05-15",
    excerpt:
      "Comparing pivot doors and traditional hinged front doors from design and engineering perspectives to help you choose the right solution.",
    img: "/assets/images/blog/card-pivot.jpg",
    href: "/blog/pivot-vs-traditional"
  },
  {
    id: 202,
    title: "Security Innovations 2025",
    date: "2025-03-25",
    excerpt: "Smart locks and multi-point systems.",
    img: "https://placehold.co/600x400/e5e7eb/9ca3af?text=Blog+2"
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
