// Per-design metadata used only by the /door-designs index grid.
//
// Two things live here that the product data does not carry in a usable form:
// a normalised model label (the `name` field mixes "Jmr-2003" and "Fusion #5843")
// and three search phrases per design, taken from that design's own specification
// rather than from a shared list.
//
// Kept out of lib/data.js so the source data stays exactly as the product side
// publishes it.

export const designIndexMeta = {
  "fusion-5843": {
    model: "Fusion 5843",
    keywords: ["thermal break aluminium entrance door", "fluted glass sidelight", "wood grain aluminium door"]
  },
  "j-0555": {
    model: "J-0555",
    keywords: ["anthracite aluminium front door", "champagne gold pull handle", "minimalist slab entrance door"]
  },
  "j-4244": {
    model: "J-4244",
    keywords: ["aluminium door with patterned glass", "matte black aluminium frame", "frosted glass entrance door"]
  },
  "classic-3670": {
    model: "Classic 3670",
    keywords: ["three panel aluminium front door", "solid panel entrance door", "classic aluminium door"]
  },
  "moonlight-3610": {
    model: "Moonlight 3610",
    keywords: ["integrated handle entrance door", "flush pull aluminium door", "satin finish front door"]
  },
  "hybrid-2103": {
    model: "Hybrid 2103",
    keywords: ["carved steel entrance door", "steel and aluminium hybrid", "mixed metal front door"]
  },
  "jt-02": {
    model: "JT-02",
    keywords: ["wood grain door with sidelight", "full height sidelight entrance", "narrow frontage front door"]
  },
  "j-2009": {
    model: "J-2009",
    keywords: ["fluted steel entrance door", "ribbed aluminium panel", "flush pull steel door"]
  },
  "j-2002": {
    model: "J-2002",
    keywords: ["wood grain steel front door", "timber look steel entrance", "heat transfer grain door"]
  },
  "j-2006": {
    model: "J-2006",
    keywords: ["full fluted steel door", "brushed gold pull handle", "deco fluted entrance door"]
  },
  "j-2007": {
    model: "J-2007",
    keywords: ["sandalwood grain steel door", "warm minimal front door", "wood effect steel entrance"]
  },
  "j-2015": {
    model: "J-2015",
    keywords: ["pressed pattern steel door", "graphic panel entrance door", "rail divided steel door"]
  },
  "jmr-2003": {
    model: "JMR-2003",
    keywords: ["sculpted handle steel door", "statement pull entrance door", "satin steel front door"]
  },
  "jmr-2103": {
    model: "JMR-2103",
    keywords: ["two tone steel entrance door", "metal and wood grain door", "panel grid front door"]
  },
  "jmr-2105": {
    model: "JMR-2105",
    keywords: ["carved line steel door", "horizontal groove entrance", "matte black pull steel door"]
  },
  "jmr-2110": {
    model: "JMR-2110",
    keywords: ["full width pull entrance door", "plain face steel front door", "bar handle architectural door"]
  },
  "j-2008": {
    model: "J-2008",
    keywords: ["textured steel entrance door", "architectural pull front door", "fine grain steel door"]
  },
  "j-2215": {
    model: "J-2215",
    keywords: ["flush lock entrance door", "handleless steel front door", "textured unbroken face door"]
  },
  "jmr-015": {
    model: "JMR-015",
    keywords: ["armored steel front door", "matte blue grey entrance", "two panel steel door"]
  },
  "jmr-018": {
    model: "JMR-018",
    keywords: ["radial brushed entrance door", "champagne gold aluminium door", "sunburst texture front door"]
  },
  "jmr-3107": {
    model: "JMR-3107",
    keywords: ["full height entrance door", "house number integrated door", "concealed hinge steel door"]
  },
  "j-2055": {
    model: "J-2055",
    keywords: ["wood grain armored door", "black pull steel entrance", "timber finish armored door"]
  },
  "jmr-3610": {
    model: "JMR-3610",
    keywords: ["shallow fluted steel door", "satin armored entrance door", "vertical rib textured door"]
  },
  "jmr-3618": {
    model: "JMR-3618",
    keywords: ["bronze steel entrance door", "metallic bronze front door", "sculpted handle armored door"]
  },
  "jmr-3670": {
    model: "JMR-3670",
    keywords: ["classical panel steel door", "ring knocker front door", "black panelled entrance door"]
  },
  "jmr-3672": {
    model: "JMR-3672",
    keywords: ["sage green front door", "green panelled steel door", "traditional panel entrance"]
  },
  "pivot-prime-5893": {
    model: "Pivot Prime 5893",
    keywords: ["oversized pivot door", "offset pivot entrance door", "wide aluminium pivot door"]
  },
  "j-5496": {
    model: "J-5496",
    keywords: ["oxidized metal front door", "3d printed texture door", "weathered look pivot door"]
  },
  "arched-neoclassical-entry": {
    model: "Arched Neoclassical",
    keywords: ["arched steel entrance door", "true radius arch door", "neoclassical front door"]
  },
  "jmr-2662": {
    model: "J-2662",
    keywords: ["unequal double steel door", "arched panel steel entrance door", "charcoal steel front door"]
  }
};

export function metaForDesign(slug) {
  return designIndexMeta[slug] ?? null;
}
