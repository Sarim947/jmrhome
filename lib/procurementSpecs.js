// Procurement data for the product pages.
//
// Every value in this file was supplied by the factory. Nothing here is
// inferred from the marketing copy: if a figure was not confirmed, the row is
// left out rather than filled with a plausible number, because these tables are
// read by buyers and quoted back in RFQs.
//
// Two layers:
//   sharedSupplyTerms  — commercial terms, identical across every series
//   procurementSpecs   — per-series technical rows, because the nine series are
//                        built from different systems (pivot vs steel vs
//                        thermal-break aluminum vs rated assemblies) and a single
//                        generic table would be wrong for at least seven of them.

export const sharedSupplyTerms = [
  [
    "Minimum order quantity",
    "1 door for seven series. Steel Entry and Fire Rated: 1 door for custom orders, 5 doors for project orders."
  ],
  ["Sample lead time", "25 days"],
  ["Production lead time", "30–45 days"],
  ["Container loading", "Approx. 300 doors per 40HQ (2050 × 950 mm single leaf)"],
  ["Factory inspection", "Third-party factory inspection welcome"],
  ["Trade terms", "FOB Shanghai / Ningbo; Yiwu warehouse handover; DDP available"],
  [
    "Warranty",
    "3 years on structure; 1 year on hardware and electronic lock components"
  ]
];

export const procurementSpecs = {
  "pivot-doors": {
    heading: "Pivot Door Specifications and Ordering",
    lead: "A pivot leaf carries its whole weight on two floor-and-head pivots, so the hardware has to be matched to the finished leaf rather than picked from a catalogue. These are the standard build figures we quote from; anything outside them is priced as a custom variant.",
    rows: [
      ["Leaf and frame", "95 mm leaf, 95 mm frame, 2.0 mm aluminum wall"],
      ["Sill", "20 mm drop sill as standard; custom sill profiles on request"],
      ["Leaf weight", "300–500 kg per leaf"],
      ["Pivot hardware", "Olang PL-01 or FritsJurgens M+, selected to the final leaf size and weight"],
      ["Leaf facing", "Aluminum sheet, sintered stone or ballistic steel"],
      ["Glazing", "Tempered, Low-E, frosted, ice-pattern, laminated or insulated units"],
      ["Size range", "48 × 80 in to 96 × 138 in per leaf"]
    ]
  },

  "steel-entry-doors": {
    heading: "Steel Entry Door Specifications and Ordering",
    lead: "Steel entry doors are quoted by sheet thickness and frame build, because those two numbers decide the weight, the security performance and the freight cost per door.",
    rows: [
      ["Door leaf", "1.0 mm galvanized steel sheet"],
      ["Frame", "2.0 mm galvanized steel"],
      ["Configuration", "Single or double leaf, with or without glass"],
      ["Glazing", "Clear, Low-E, frosted or laminated"],
      ["Finish", "Wood-grain transfer, powder coat or custom finish"]
    ]
  },

  "aluminum-entry-doors": {
    heading: "Aluminum Entry Door Specifications and Ordering",
    lead: "Aluminum systems are specified by profile wall thickness and thermal barrier. Both are stated below so a specifier can check them against a project's thermal and structural requirements before requesting a quotation.",
    rows: [
      ["Profile wall", "2.5 mm aluminum"],
      ["Thermal break", "PA66 nylon thermal barrier"],
      ["Configuration", "Single leaf, double leaf or pivot entry"],
      ["Glazing", "Specified per project"]
    ]
  },

  "double-entry-doors": {
    heading: "Double Entry Door Specifications and Ordering",
    lead: "Double doors are limited by overall width first and by leaf split second — the split decides which leaf carries the lock and how the two leaves meet at the centre.",
    rows: [
      ["Maximum overall width", "2280 mm"],
      ["Leaf split", "Equal or unequal leaves to project requirement"],
      ["Operation", "Hinged, active and inactive leaf"],
      ["Material", "Aluminum or steel"],
      ["Glazing", "Optional in one or both leaves"]
    ]
  },

  "front-doors-with-glass": {
    heading: "Glass Entrance Door Specifications and Ordering",
    lead: "Glazing is quoted as a full make-up rather than a single glass name, since the cavity and pane build decide the thermal and acoustic result as much as the glass type does.",
    rows: [
      ["Standard glazing", "5 + 9A + 5 + 9A + 5 triple glazing, 33 mm total"],
      ["Glass types", "Clear, Low-E, frosted, ice-pattern, laminated or insulated units"],
      ["Layout", "Vertical lite, full-height panel, or door plus sidelight"],
      ["Operation", "Hinged or pivot"],
      ["Material", "Aluminum or steel"]
    ]
  },

  "front-doors-with-sidelights": {
    heading: "Entrance System Specifications and Ordering",
    lead: "A door with sidelights is measured as one assembly, not as a door plus two extras. The overall width and the U-value below both refer to the complete entrance set.",
    rows: [
      ["Sidelight glazing", "5 + 25A + 5 tempered insulated glass"],
      ["U-value", "0.26 W/(m²·K)"],
      ["Maximum overall width", "2280 mm"],
      ["Configuration", "Single or double sidelight, with or without transom"],
      ["Material", "Aluminum or steel"]
    ]
  },

  "modern-front-doors": {
    heading: "Modern Entrance Door Specifications and Ordering",
    lead: "On a flush modern leaf the surface finish is the design, so the finish process is specified explicitly rather than left as a colour reference.",
    rows: [
      [
        "Surface finish",
        "3D-printed texture, fluorocarbon coating, powder coating or wood-grain transfer"
      ],
      ["Material", "Aluminum or steel"],
      ["Configuration", "Single leaf, double leaf or pivot"],
      ["Glazing", "Optional; clear, Low-E, frosted or laminated"]
    ]
  },

  "arched-front-doors": {
    heading: "Arched Door Specifications and Ordering",
    lead: "The arch is formed from a rolled tube rather than cut from a flat sheet, which is what allows a radius to follow the head of an existing opening instead of a fixed catalogue curve.",
    rows: [
      ["Arch construction", "Aluminum tube rolled to radius, then welded"],
      ["Arch profiles", "Semicircular, segmented, elliptical or bespoke radius"],
      ["Material", "Steel or aluminum, including thermal-break aluminum"],
      ["Glazing", "Arched or rectangular glazing per design"],
      [
        "Finish",
        "Powder coat, fluorocarbon coating, wood-grain transfer or hand-applied patina"
      ]
    ]
  },

  "fire-rated-doors": {
    heading: "Fire Rated Door Specifications and Ordering",
    lead: "A rated entrance is certified as a complete assembly — leaf, frame, seals, closer and glazing together. The rating below applies to the assembly we build, not to a leaf bought on its own.",
    rows: [
      ["Fire rating", "120 minutes"],
      ["Test standard", "US UL"],
      ["Material", "Steel or aluminum systems"],
      ["Configuration", "Single or double leaf"],
      [
        "Rated assembly",
        "Leaf, frame, intumescent seals, self-closing hardware and glazing supplied as one tested set"
      ]
    ]
  }
};

// The four multi-design collection pages mix systems, so each one borrows the
// specification of the leaf system that dominates its product mix.
export const collectionSpecMap = {
  essentials: "steel-entry-doors",
  "elegant-steel-doors": "steel-entry-doors",
  "doors-with-lites": "front-doors-with-glass",
  "steel-core-armored": "steel-entry-doors"
};

export const specificationNote =
  "Figures above are our standard build. Where a project falls outside them, we quote a custom variant against your drawings rather than build to the nearest catalogue size.";

/**
 * A door design can belong to several collections, and a few of them list a
 * design-family slug alongside the real ones. Walk the list and return the first
 * value that resolves to a specification, so the block never disappears because
 * of ordering in the data file.
 */
export function resolveSpecSeries(candidates = []) {
  for (const candidate of candidates) {
    if (procurementSpecs[candidate]) return candidate;
    if (collectionSpecMap[candidate]) return collectionSpecMap[candidate];
  }
  return null;
}
