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
"mh-01": {"model":"MH-01","keywords":["Steel-core armored door","Contemporary textured","Equal double leaf (shown)"]},
"ht-01": {"model":"HT-01","keywords":["Aluminum entrance door","Classic glazed","Single leaf with four glass lites (shown)"]},
"ht-02": {"model":"HT-02","keywords":["Aluminum entrance door","Classic six-panel","Single leaf (shown)"]},
  "j-2211": { model: "J-2211", keywords: ["steel entrance", "fine fluting", "copper-tone accent"] },
  "j-2245": { model: "J-2245", keywords: ["steel entrance", "wood-look centre", "tall pull"] },
  "j-2218": { model: "J-2218", keywords: ["steel entrance", "gold-tone fluted accent", "grey finish"] },
  "jt-6001": { model: "JT-6001", keywords: ["stock-range model", "steel entrance", "vertical flutes"] },
  "jt-6002": { model: "JT-6002", keywords: ["stock-range model", "steel entrance", "patterned panel"] },
  "jt-6003": { model: "JT-6003", keywords: ["stock-range model", "steel entrance", "wood-look finish"] },
  "jt-6004": { model: "JT-6004", keywords: ["stock-range model", "steel entrance", "slatted relief"] },
  "pz-05": { model: "PZ-05", keywords: ["radial pattern", "single pivot leaf", "sculptural pull"] },
  "jt-27": { model: "JT-27", keywords: ["steel entrance", "vertical metallic accent", "recessed pull"] },
  "jmr-5801": { model: "JMR-5801", keywords: ["geometric relief", "double leaf", "gold-tone pulls"] },
  "jmr-3701": { model: "JMR-3701", keywords: ["horizontal accent", "dark texture", "recessed grip"] },
  "fusion-5843": {
    model: "Fusion 5843",
    keywords: ["aluminium door with one sidelight", "fluted glass entry door", "wood grain aluminium entrance"]
  },
  "j-0555": {
    model: "J-0555",
    keywords: ["anthracite aluminium front door", "champagne gold door pull", "aluminium front door with sidelight"]
  },
  "j-4244": {
    model: "J-4244",
    keywords: ["arched aluminium front door with glass", "frosted glass front door", "water wave privacy glass door"]
  },
  "jt-02": {
    model: "JT-02",
    keywords: ["wood grain aluminium front door", "front door with one sidelight", "full height glazed sidelight"]
  },
  "j-2009": {
    model: "J-2009",
    keywords: ["steel door with fluted aluminium panel", "flush pull steel front door", "vertical ribbed entrance door"]
  },
  "j-2002": {
    model: "J-2002",
    keywords: ["heat transfer wood grain steel door", "timber look steel front door", "minimalist vertical door handle"]
  },
  "j-2006": {
    model: "J-2006",
    keywords: ["fluted steel front door", "brushed gold pull handle door", "full surface vertical fluting"]
  },
  "j-2007": {
    model: "J-2007",
    keywords: ["sandalwood grain steel entrance door", "wood look steel front door", "slim vertical door pull"]
  },
  "j-2015": {
    model: "J-2015",
    keywords: ["patterned steel entrance door", "horizontal rail front door", "pressed geometric steel door"]
  },
  "jmr-2003": {
    model: "JMR-2003",
    keywords: ["sculpted handle steel entrance door", "satin metal front door", "raised architectural door pull"]
  },
  "jmr-2103": {
    model: "JMR-2103",
    keywords: ["two tone steel front door", "metal and wood grain entrance door", "steel door with wood look panel"]
  },
  "jmr-2110": {
    model: "JMR-2110",
    keywords: ["steel front door with horizontal pull", "plain metal entrance door", "architectural bar handle door"]
  },
  "j-2008": {
    model: "J-2008",
    keywords: ["textured steel entrance door", "integrated architectural door pull", "steel front door with aluminium trim"]
  },
  "j-2215": {
    model: "J-2215",
    keywords: ["flush lock steel entrance door", "steel front door with no visible lever", "textured architectural door face"]
  },
  "jmr-015": {
    model: "JMR-015",
    keywords: ["blue grey armored steel front door", "two panel steel entrance door", "matte blue gray door finish"]
  },
  "jmr-018": {
    model: "JMR-018",
    keywords: ["champagne gold steel core entrance door", "radial brushed door finish", "foam filled armored steel door"]
  },
  "jmr-3107": {
    model: "JMR-3107",
    keywords: ["steel entrance door with house number", "full height steel front door", "integrated number plaque door"]
  },
  "j-2055": {
    model: "J-2055",
    keywords: ["wood grain armored steel door", "black pull steel entrance door", "timber look armored front door"]
  },
  "jmr-3610": {
    model: "JMR-3610",
    keywords: ["subtle fluted steel front door", "satin finish steel entrance door", "vertical fluting armored door"]
  },
  "jmr-3618": {
    model: "JMR-3618",
    keywords: ["bronze steel entrance door", "metallic bronze front door", "sculpted handle armored door"]
  },
  "jmr-3670": {
    model: "JMR-3670",
    keywords: ["black steel front door with ring knockers", "classic panelled steel entrance door", "single or double steel door"]
  },
  "jmr-3672": {
    model: "JMR-3672",
    keywords: ["sage green steel entry door", "classic panelled green front door", "single or double panel entrance"]
  },
  "pivot-prime-5893": {
    model: "Pivot Prime 5893",
    keywords: ["oversized aluminium pivot front door", "offset pivot entrance door", "horizontal panel pivot door"]
  },
  "j-5496": {
    model: "J-5496",
    keywords: ["oxidized look aluminium pivot door", "3d printed entrance door texture", "pivot entrance door with sidelight"]
  },
  "arched-neoclassical-entry": {
    model: "Arched Neoclassical",
    keywords: ["custom arched steel front door", "cream neoclassical entrance door", "curved head steel entrance"]
  },
  "jmr-2662": {
    model: "J-2662",
    keywords: ["unequal double steel entrance door", "arched recessed door panels", "charcoal main and secondary leaf door"]
  }
};

export function metaForDesign(slug) {
  return designIndexMeta[slug] ?? null;
}
