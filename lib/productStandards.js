// Confirmed directly by the owner in the Upload Products chat, Nov 13/16 2026.
// Millimetres, width × height, outside frame dimensions; not clear passage.
export const productStandards = {
  aluminumUnspecified: { name: "Aluminum Doors (profile to specification)", single: [1200, 3500], unequal: [1600, 3500], double: [2300, 3500] },
  steel: { name: "Steel Entry Doors", single: [1180, 2500], unequal: [1580, 2500], double: [2180, 2500] },
  armored: { name: "Steel-Core Armored Doors", single: [1200, 3000], unequal: [1600, 3000], double: [2200, 3000] },
  thermalAluminum: { name: "Thermal-Break Aluminum Doors", single: [1200, 3500], unequal: [1600, 3500], double: [2300, 3500] },
  aluminum: { name: "Non-Thermal-Break Aluminum Doors", single: [1200, 3500], unequal: [1600, 3500], double: [2300, 3500] },
  arched: { name: "Arched Entrance Doors", single: [1200, 3500], unequal: [1600, 3500], double: [2300, 3500] },
  pivot: { name: "Pivot Doors", single: [2440, 3550], unequal: null, double: null, singleOnly: true }
};

export const formatFrameSize = (size) => size ? `${size[0]} × ${size[1]} mm` : "Confirm with our team";

export function sizeFamilyFor(design) {
  if (design.collections.includes("pivot-doors")) return "pivot";
  if (design.collections.includes("arched-front-doors")) return "arched";
  if (design.collections.includes("steel-core-armored")) return "armored";
  if (/steel/i.test(design.params.material)) return "steel";
  return /non-thermal/i.test(design.params.material) ? "aluminum" : /thermal break/i.test(design.params.material) ? "thermalAluminum" : "aluminumUnspecified";
}

export const seriesSizeFamilies = {
  "pivot-doors": ["pivot"],
  "steel-entry-doors": ["steel"],
  "steel-core-armored": ["armored"],
  "elegant-steel-doors": ["steel"],
  "essentials": ["steel", "thermalAluminum"],
  "aluminum-entry-doors": ["thermalAluminum", "aluminum"],
  "arched-front-doors": ["arched"],
  "double-entry-doors": ["steel", "armored", "thermalAluminum", "aluminum"],
  "modern-front-doors": ["steel", "armored", "thermalAluminum", "aluminum"],
  "front-doors-with-glass": ["steel", "armored", "thermalAluminum", "aluminum", "arched"],
  "front-doors-with-sidelights": ["steel", "armored", "thermalAluminum", "aluminum", "pivot"],
  "doors-with-lites": ["thermalAluminum", "aluminum", "arched", "pivot"]
};
