// FAQ sets for the four collection landing pages that are built from
// `productCollections` rather than their own route folder.
//
// These are the pages that were rendering no FAQ at all: essentials,
// elegant-steel-doors, doors-with-lites and steel-core-armored. Each set is
// written against that collection's own specification and finish, so the
// answers cannot be swapped between collections without becoming wrong.
//
// Only confirmed facts are used: the 1.0 mm leaf / 2.0 mm galvanized frame, the
// 2.5 mm aluminium wall with a PA66 nylon thermal break, the three core
// options (aluminium honeycomb, water-based PU foam, MGO board for fire), the
// 5+9A+5+9A+5 glazing build with an aluminium spacer, and the shared supply
// terms. No certification, project count or installation-support claim appears
// here, because none of it was confirmed.

export const collectionFaqs = {
  essentials: [
    {
      question: "What makes the Essentials collection different from your other collections?",
      answer:
        "Essentials is built around formats that repeat. The panels are fluted aluminium, heat-transfer wood grain or plain satin aluminium, and the hardware is a short list, so the same entrance can be carried across a whole building without the finish drifting between units. The other collections exist for a one-off architectural entrance where the design is drawn for a single opening."
    },
    {
      question: "Can the same design be repeated across every unit in a development?",
      answer:
        "Yes, and that is what the collection is for. One drawing and one approved sample govern the whole batch, so panel spacing, finish and hardware stay identical from the first door to the last. A 40HQ takes roughly 300 doors at 2050 by 950 mm, and production runs 30 to 45 days after the sample is signed off."
    },
    {
      question: "Is the wood grain real timber?",
      answer:
        "It is a heat-transfer wood grain applied to an aluminium or steel face, not a timber veneer. A veneer on an exterior entrance has to be re-coated and can lift at the edges; a transferred grain keeps the face dimensionally stable and can be matched to a physical sample you approve before production."
    },
    {
      question: "How is the leaf and frame actually built?",
      answer:
        "In steel the leaf face is 1.0 mm over a 2.0 mm galvanized frame; in aluminium the wall is 2.5 mm with a PA66 nylon thermal break. The core is aluminium honeycomb or water-based polyurethane foam, and an MGO board core replaces the foam where the project needs a fire-rated assembly."
    }
  ],

  "elegant-steel-doors": [
    {
      question: "What does the three-panel splicing actually refer to?",
      answer:
        "The face is divided into three fields, and the divisions are made by profile rather than printed or etched onto one sheet. That means the proportion of the three panels is a drawing decision you can set — equal thirds, a deep base panel with two shorter fields above, or a wide centre field that carries the pull handle."
    },
    {
      question: "Can the three panels use different materials?",
      answer:
        "Yes. Wood transfer, metallic coating, aluminium panel and steel can be combined on one leaf, which is how the mixed-metal designs in this collection are built. Because the finishes come from different processes, they have to be approved together on one physical sample rather than matched from separate swatches, or the two surfaces will read slightly different under daylight."
    },
    {
      question: "Is the raised pull handle structural or decorative?",
      answer:
        "It is fixed into reinforcement inside the leaf, so it has to be settled before the leaf is pressed. Handle length, position and fixing centres go on the drawing together with the panel layout, because moving the handle afterwards means opening a finished face."
    },
    {
      question: "Can the panel proportions be changed for my opening?",
      answer:
        "They can, within the limits of the leaf height and the hardware. Send the opening size and the proportion you want, and the three fields are set on the elevation before production. A very tall leaf needs an internal subframe regardless of panel layout, so the two get decided at the same time."
    }
  ],

  "doors-with-lites": [
    {
      question: "What glass goes into the lites?",
      answer:
        "The standard build is 5+9A+5+9A+5, a double-glazed unit with two 9 mm cavities. The cavities can be filled with air or argon, and Low-E or a metallic coating is available as a priced option rather than as standard. The spacer is aluminium, not warm-edge."
    },
    {
      question: "Why does the spacer choice matter on an entrance?",
      answer:
        "An aluminium spacer conducts heat across the edge of the unit, so the edge of the glass runs colder than the centre and any condensation shows at the bottom corners first. That is a property of the glazing build, not a defect, and it is the reason the sill detail and drainage under the lite matter as much as the glass itself."
    },
    {
      question: "How wide can the glass section be compared with the door?",
      answer:
        "A sidelight can be made up to 1.8 m wide, and its height follows the height of the door it sits beside — which differs between series. The width is therefore quoted against the specific door height rather than as a separate maximum, so give both dimensions together."
    },
    {
      question: "Is the frame thermal broken as well as the glass?",
      answer:
        "Yes. The aluminium profiles use a 2.5 mm wall with a PA66 nylon barrier between the inner and outer faces, so the frame is not one continuous conductor around the opening. That matters most on the head and sill, where the frame meets the wall and the interior finish."
    }
  ],

  "steel-core-armored": [
    {
      question: "What does 'steel core armored' mean in the build?",
      answer:
        "The face is steel rather than a composite skin: 1.0 mm on the leaf over a 2.0 mm galvanized frame. Behind it sits the core — aluminium honeycomb or water-based polyurethane foam, with MGO board substituted where the assembly has to be fire rated."
    },
    {
      question: "Can a historical or regency panel pattern be reproduced?",
      answer:
        "Yes, from a dimensioned elevation or a drawing of the existing door. The panel layout, moulding profile and recess depth are set on the elevation before the leaf is made, which is also why a photograph alone is not enough to quote from — the proportions have to be measured."
    },
    {
      question: "What finish is on the tiered mouldings?",
      answer:
        "A satin lacquer over the prepared steel, in the colour you approve from a sample. Because the mouldings and the flat fields are the same coating system, the sheen stays consistent across the steps rather than reading glossier on the raised edges."
    },
    {
      question: "How is corrosion handled on an exterior armored door?",
      answer:
        "The frame is galvanized steel, hardware on exterior specifications is 304 stainless, and plated and coated hardware goes through a 72-hour salt-spray check before it ships. The sill is a 304 stainless shell, so the bottom of the frame is not the part that gives trouble."
    }
  ]
};

export function faqsFor(slug) {
  return collectionFaqs[slug] ?? [];
}
