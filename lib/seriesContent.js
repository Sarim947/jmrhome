// Long-form editorial copy for the nine product series pages.
//
// Two blocks per series:
//   anatomy — how that system actually carries load, seals and fails. Written
//             against the confirmed specification for each series, so a pivot
//             page argues about floor bearings and a fire page argues about
//             tested assemblies.
//   specify — the decisions a buyer has to make and the order they have to make
//             them in. This is the part that earns the page a place in a
//             procurement conversation rather than a product gallery.
//
// No company claims appear here beyond the figures below, which came from the
// factory directly. Nothing about project counts, on-site measuring or
// installation support is stated, because none of it was confirmed.

export const factoryFacts = {
  figures: [
    { label: "Production base", value: "Wuyi, Jinhua" },
    { label: "Production floor area", value: "15,000 m²" },
    { label: "Production team", value: "300+" },
    { label: "Monthly capacity", value: "2,000 doors" }
  ],
  note: "Door production started in 2012. The plant holds ISO 9001 and ISO 14001, ships to more than 30 countries across the US, Australia and the Middle East, and runs a 72-hour salt-spray check on plated and coated hardware, which is 304 stainless on exterior specifications."
};

export const seriesContent = {
  "pivot-doors": {
    anatomy: {
      eyebrow: "Construction",
      heading: "How a Pivot Leaf Carrying 500 kg Is Actually Supported",
      intro:
        "A hinged door hangs from its jamb. A pivot door stands on a bearing set into the floor and is only restrained at the head, and that one change moves the entire load out of the wall and into the slab. It is why a pivot entrance can sit in an opening with no structural return, and why the first thing worth checking on a project is the floor rather than the frame.",
      items: [
        {
          title: "The load path runs through the floor",
          body:
            "Every kilogram of a 300 to 500 kg leaf lands on the bottom pivot. The top pivot resists sideways movement and nothing else, so the subfloor takes a concentrated point load on a plate not much wider than a hand. Over a screed on insulation, or a timber deck, that plate needs a load-spreading plate or a cast-in block before the sill is set. The frame itself carries no leaf weight at all, which is the reason a pivot leaf can run the full height of a room without a visible jamb."
        },
        {
          title: "Two hardware families, two different jobs",
          body:
            "Olang PL-01 is a floor-mounted set used where the head cannot take an anchor. FritsJurgens M+ pairs a floor bearing with a head bearing and adds adjustable closing speed and hydraulic damping. The choice follows leaf weight, leaf width and whether the head can be drilled. Where a leaf runs heavy and the head is available, the shared lateral restraint of a two-bearing set is the reason it becomes the default rather than an upgrade."
        },
        {
          title: "A 95 mm leaf has to survive its own wind load",
          body:
            "At 96 by 138 inches the leaf face is roughly 8.4 m². At a 1.0 kN/m² design pressure that is about 840 kg of lateral force on a panel weighing 300 to 500 kg, so the panel build matters as much as the pivot. A 2.0 mm aluminum wall over an internal subframe resists bowing; a bare sheet does not. This is why we ask for the wind zone and the orientation, not only the opening size."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "What Decides a Pivot Entrance Before the Drawing Does",
      intro:
        "Most pivot projects are lost at the sill, not at the design. The pivot position, the 20 mm drop sill and the finished floor level have to be fixed together, and each one constrains the other two.",
      items: [
        {
          title: "Start from the finished floor, not the opening",
          body:
            "The pivot set sits on the finished floor, and the 20 mm sill recess is cast or cut before the screed goes down. If the floor build-up is decided after the door is ordered, either the sill sits proud or the leaf has to be shortened at the factory. Fix the finished floor level first, then the sill detail, then the leaf height."
        },
        {
          title: "The pivot offset decides how the leaf sweeps",
          body:
            "An offset pivot at roughly 30/70 reduces the arc the leaf takes but throws the outer corner further than the leaf width suggests. A centre pivot sweeps more evenly and needs clearance roughly equal to half the leaf plus a margin on the swing side. Ask for the wall clearance on the swing side before the pivot position is drawn, because moving it later changes the drilling in the sill."
        },
        {
          title: "Send a plan, an elevation and the exposure",
          body:
            "A plan gives the wall thickness and the reveal. An elevation gives the head height and any transom. The exposure gives the wind zone. The facing choice, aluminum sheet, sintered stone or ballistic steel, can add weight in the hundreds of kilograms and therefore changes the hardware, so it belongs in the first conversation rather than the finish schedule."
        }
      ]
    }
  },

  "steel-entry-doors": {
    anatomy: {
      eyebrow: "Construction",
      heading: "What 1.0 mm Steel and Three Core Options Really Change",
      intro:
        "A steel entry door is a sandwich. The skin takes the impact, the core takes the sound and the fire performance, and the frame takes the hinge load. Changing any one of the three changes the other two, which is why a steel door should be specified as a build rather than as a photograph with a colour.",
      items: [
        {
          title: "The skin, and what galvanizing does at a cut edge",
          body:
            "Galvanized sheet keeps a zinc layer that sacrifices itself at scratches. Laser-cut and folded edges expose bare steel, so every cut has to be primed or turned inside a fold. At 1.0 mm a fold is both cheaper than a weld and better for the face: it stiffens without the heat distortion that shows up as a ripple once the door is painted."
        },
        {
          title: "Honeycomb, foam or MGO: three different jobs",
          body:
            "Aluminum honeycomb is the lightest option and holds a large leaf flat, but it adds almost no insulation. Water-based polyurethane foam fills the cavity, cuts sound transmission and adds thermal resistance. Fire-rated MGO board is the only one of the three that carries a rating period, and it is heavier, so the frame and hinge pattern change with it. Choose by what the entrance will be judged on."
        },
        {
          title: "The frame is 2.0 mm because hinges pull on a small area",
          body:
            "A hinge screw and a closer arm concentrate load into a patch of steel smaller than a credit card. Doubling the frame gauge to 2.0 mm lets a standard hinge pattern fix directly into the section without a welded reinforcing plate. On a lightweight frame that plate has to be added, and it has to be added before the frame is powder coated, not after."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "Choosing a Steel Entrance by Performance, Not by Photo",
      intro:
        "The core decision comes first because it sets the weight, and the weight sets the hinge, the closer and the frame reinforcement. Run the sequence in the wrong order and the sample has to be rebuilt.",
      items: [
        {
          title: "Core first, then weight, then hardware",
          body:
            "If the project needs a fire rating, the core is MGO and the weight follows. If sound is the driver, foam is the usual answer. If the leaf is oversized and flatness is the concern, honeycomb. Once the core is fixed the weight is predictable, and only then can the hinge pattern and closer be confirmed."
        },
        {
          title: "Finish is a durability decision on steel",
          body:
            "A wood-grain transfer sits on a powder base and has to wrap every edge and cut-out; a film that stops short of an edge is where it lifts first. On a south-facing elevation a dark base absorbs heat, and that is the exposure where a transfer film has the shortest life. Lighter tones or a fluorocarbon system are the safer answer on high-UV elevations."
        },
        {
          title: "Send the wall build-up, not just the size",
          body:
            "A 2.0 mm steel frame fixes into masonry, timber stud and steel stud in three different ways, and the reveal depth decides whether a subframe is needed at all. A door ordered on size alone usually arrives with a frame that cannot be anchored to what is actually on site."
        }
      ]
    }
  },

  "aluminum-entry-doors": {
    anatomy: {
      eyebrow: "Construction",
      heading: "Why 2.5 mm Wall and a PA66 Barrier Decide How Aluminum Ages",
      intro:
        "Aluminum does not rust, but it conducts heat and it moves with temperature. Wall thickness controls how straight the leaf stays over its span, and the thermal barrier controls whether the frame becomes a cold bridge through the wall.",
      items: [
        {
          title: "2.5 mm wall, and what it buys over span",
          body:
            "Deflection rises steeply with span, so a profile wall that looks rigid at 900 mm can visibly bow at 1.4 m. A 2.5 mm wall keeps the sightline straight on wide leaves and lets the leaf carry a heavier glazing unit without the frame taking a permanent set. On a narrow leaf the extra wall is dead weight; on a wide one it is the difference between a flush face and a curved one."
        },
        {
          title: "PA66 nylon, not a soft plastic strip",
          body:
            "Glass-fibre reinforced polyamide holds its shape through the thermal cycling a door sees between a sunlit face and a shaded reveal. A softer barrier creeps under the same cycle and the frame loses its register. The barrier also has to run continuously around the corners: an interrupted barrier gives the cold bridge straight back at the worst possible point."
        },
        {
          title: "Thermal movement is measurable at this scale",
          body:
            "Aluminum expands by roughly 23 µm per metre per kelvin. On a 3 m leaf facing a 40 K swing between a winter morning and a summer afternoon, that is close to 2.8 mm of movement. The glazing rebate, the bead and the clearances at the lock side all have to allow for it, or the leaf binds in one season and rattles in the other."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "Specifying an Aluminum Entrance for a Real Climate",
      intro:
        "An aluminum entrance is judged on three numbers that are usually quoted separately and only work together: the profile, the glazing and the sill detail.",
      items: [
        {
          title: "U-value belongs to the assembly, not the profile",
          body:
            "A thermally broken frame with an unbroken sill performs like an unbroken door. The frame, the glass, the spacer and the threshold each contribute, and the weakest of them sets the result. Ask what the sill detail is before accepting a U-value written against a profile."
        },
        {
          title: "Powder and fluorocarbon fail in different places",
          body:
            "Powder coat is the default and performs well inland. Fluorocarbon holds gloss and colour longer under UV and salt exposure. Both depend on the pretreatment more than the topcoat: a conversion coating applied correctly is what keeps a finish from failing at a cut edge rather than on the face."
        },
        {
          title: "Send the exposure with the elevation",
          body:
            "Orientation, coastal distance and the required U-value change the glass make-up, and the glass make-up changes the leaf weight and therefore the hardware. An elevation alone tells us the size; the exposure tells us whether the specification will still be right in five years. Where a project has elevations facing in different directions, the same frame should be expected to move differently on each, and the fixing detail should be allowed to differ with it."
        }
      ]
    }
  },

  "double-entry-doors": {
    anatomy: {
      eyebrow: "Construction",
      heading: "Where a Double Door Fails: the Centre Joint",
      intro:
        "Two leaves in one opening double the glass area and add a joint that nothing else in the entrance has. At 2280 mm overall we stop, and the reason is the joint rather than the frame.",
      items: [
        {
          title: "2280 mm is a hardware limit before a structural one",
          body:
            "Beyond that overall width the inactive leaf gets wide enough that flush bolts at head and foot can no longer hold it straight against wind pressure; the leaf starts to work as a lever on the astragal. Past this point a fixed panel with a single active leaf gives a better door than a wider pair, and it costs less in hardware. Where the drawing already shows something wider, the honest answer is a fixed panel beside a single leaf rather than a pair that will not stay closed."
        },
        {
          title: "Rebate, astragal or flush meeting stiles",
          body:
            "A rebated pair overlaps at the centre and is the most weathertight. An astragal adds a gasket but stands proud of the face. Flush meeting stiles give the cleanest elevation and seal the least. The choice should follow the exposure on the elevation, not the render: a west-facing entrance in driving rain and a sheltered porch do not need the same centre detail."
        },
        {
          title: "Equal or unequal is a traffic question",
          body:
            "A 50/50 pair reads formal and needs a clear width on both sides to move furniture through. A one-third to two-thirds split gives a wide everyday leaf and a narrow one for oversize loads, which is what most residential entrances actually want. On an unequal pair the lock goes in the wide leaf and the flush bolts in the narrow one. At 2,280 mm overall a two-thirds leaf is around 1,500 mm, which is at the upper end for a three-hinge set and is where a fourth hinge or a heavier closer stops being optional."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "Setting Up a Double Entrance in the Right Order",
      intro:
        "Three decisions cascade: which leaf opens, how the pair is split, and what is glazed. Each one changes the weight on the hinge side.",
      items: [
        {
          title: "Fix the active leaf first",
          body:
            "Which side opens, whether it swings inward or outward, and where the closer sits. This also fixes the handing, which cannot be changed after the frame is machined without a new frame."
        },
        {
          title: "Then the split, then the glazing",
          body:
            "Glazing one leaf only shifts weight to one side of the pair, and it is the hinge side that feels it. Decide the split before deciding which leaf takes glass, otherwise the hardware is specified against a weight that no longer exists. Settle the split on the drawing, before the profiles are cut, because a pair cannot be re-split once the stiles have been machined."
        },
        {
          title: "Send the reveal depth and the wall thickness",
          body:
            "A double frame in a deep reveal needs an extension piece, and an extension changes the head detail. Where the entrance sits between two wall returns, the opening has to be measured at the head, the sill and both jambs, because a pair will not close cleanly in an opening that is out of square."
        }
      ]
    }
  },
  "front-doors-with-glass": {
    anatomy: {
      eyebrow: "Construction",
      heading: "What 5 + 9A + 5 + 9A + 5 Actually Buys You, and What It Does Not",
      intro:
        "A glazed entrance is a wall with a door in it. Once the glass area passes roughly half the elevation, the thermal and acoustic behaviour of the whole opening is set by the glazing build rather than by the leaf, the frame or the hardware. The standard build here is 5 mm glass, a 9 mm sealed cavity, 5 mm glass, a second 9 mm cavity and 5 mm glass, 33 mm total. It is worth knowing exactly which of the three panes is doing the work.",
      items: [
        {
          title: "Two cavities are where the U-value comes from",
          body:
            "A sealed cavity resists heat flow because the gas inside it is still, and a low-emissivity face on one side of it does most of the remaining work. One cavity roughly halves the conductance of a single pane; a second cavity halves it again, but with diminishing returns, because the panes themselves and the frame still conduct. That is why the third pane is worth more on a cold elevation than on a mild one, and why the number printed on a glazing datasheet is a centre-of-glass figure that a whole entrance will never reach. The frame, the spacer and the perimeter are what pull the real assembly value up."
        },
        {
          title: "Condensation forms at the spacer, not in the middle of the pane",
          body:
            "The coldest point on any glazed door is the edge, where the two or three panes meet the spacer bar and the frame. Water beads at the bottom corners of the glass first, long before the centre mists, and that is an edge-temperature problem rather than a glass problem. A warm-edge spacer and an insulated frame perimeter lift that edge temperature by several degrees, which is the difference between a door that runs wet through a cold snap and one that stays dry at the same internal humidity."
        },
        {
          title: "Sound is set by the thinnest pane and by asymmetry",
          body:
            "Acoustic performance follows mass, but identical panes separated by identical cavities resonate at the same frequency and lose more low-frequency sound than their mass suggests. Asymmetric builds, or a laminated pane in place of one monolithic sheet, break that coincidence. A street-facing entrance and a garden-facing entrance in the same house should not automatically get the same build, because traffic noise and a quiet courtyard put different demands on the same 33 mm."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "Choosing a Glass Entrance by Exposure and Safety, Not by Clarity",
      intro:
        "Almost every glazed entrance that disappoints in service was specified from a photograph. The three decisions below are the ones that decide whether it still looks right in year five.",
      items: [
        {
          title: "Fix the glass area before the frame profile",
          body:
            "The proportion of glass to frame is what reads from the street, and it is set by the sightline width, not by the glass. Narrow sightlines need a stiffer frame to hold the same wind load, and a very tall narrow light needs either a horizontal transom or a thicker profile. Deciding the elevation first and the profile second means the frame is chosen to hold the drawing; deciding the profile first means the drawing gets reworked around a catalogue."
        },
        {
          title: "Safety glass is a height question with a code answer",
          body:
            "Glass in a door leaf, and glass within a defined distance of the finished floor, is treated as a safety location in most codes, which means toughened or laminated rather than annealed. Toughened breaks into small fragments; laminated holds in its frame after impact, which matters on an entrance for both security and for anyone who falls against it. Where a full-height light runs to the floor, laminated is usually the more defensible choice regardless of what the minimum requires."
        },
        {
          title: "Send the orientation, the overhang and the internal humidity",
          body:
            "A west-facing entrance under a deep overhang and an unshaded north-facing one at the same latitude behave very differently, and a heated interior at high humidity changes the dew point on the inner pane. All three are free to supply and none of them can be inferred from a dimensioned drawing. Without them the build is a reasonable default rather than a specified one, and the first winter is when the difference shows."
        }
      ]
    }
  },
  "front-doors-with-sidelights": {
    anatomy: {
      eyebrow: "Construction",
      heading: "Why a Sidelight Is Not a Window Standing Next to a Door",
      intro:
        "A sidelight entrance is one frame with one head line and one sill, and it has to be built and installed as a single unit. Treating the door and the fixed lights as three items that happen to stand side by side is what produces the stepped head, the wet threshold and the light that never quite aligns with the leaf. The standard build here is a 5 + 25A + 5 tempered insulated sidelight glazed into a shared frame, up to 1,800 mm wide per sidelight, with the height following the maximum door height of the series so the head stays level.",
      items: [
        {
          title: "A shared head line is a structural decision before it is a visual one",
          body:
            "Because the sidelight height is tied to the maximum door height of the series rather than to a fixed module, the head runs continuously across leaf and lights at any opening width. That only works if the head profile is one continuous member with the mullions anchored into it. Build the door as its own frame and the sidelights as separate frames and the two heads will differ by a few millimetres at best, and by a visible step once the wall settles."
        },
        {
          title: "The fixed panel needs its own drainage path",
          body:
            "Water that lands on a sidelight has to leave through a sill chamber and a weep path that belongs to the sidelight. If the fixed light drains into the door threshold, every storm pushes water across the door line and into the reveal. On this assembly the sidelight sill and the door sill are separate chambers in the same extrusion, which is why the threshold reads as one piece but does not behave as one gutter."
        },
        {
          title: "0.26 W/(m²·K) belongs to the assembly, and the leaf is the weak point",
          body:
            "A large fixed light with a wide cavity generally outperforms a door leaf, because the leaf cannot be 25 mm of sealed cavity and still be a door. So on a sidelight entrance the thermal weak point is almost always the leaf, not the glass beside it. Insulating the sidelight further while leaving the leaf as a standard build spends money where it changes the whole-opening figure least, which is a common way for a good specification to buy the wrong upgrade. A project that improves the glass and leaves an adequate thermally broken frame usually gains less than one that closes the perimeter detail, because the perimeter is where the assembly value is actually lost."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "Setting Out a Sidelight Entrance Before the Opening Is Built",
      intro:
        "The opening is usually built before the door is ordered, so the numbers have to be agreed in the right sequence. These three are the ones that cannot be changed later without reworking masonry.",
      items: [
        {
          title: "Total width first, then the split between leaf and lights",
          body:
            "The maximum overall width of the series is 2,280 mm, and each sidelight can run to 1,800 mm. Start from the total opening, subtract the leaf or pair, and what remains is divided between the sidelights. Doing it the other way, adding a door and two lights and hoping the total lands inside the opening, is how entrances end up with one sidelight wider than the other and a head line that no longer centres on the leaf."
        },
        {
          title: "Frame and lights in first, leaf hung last",
          body:
            "The frame, mullions and glazed sidelights are plumbed, squared and sealed as one unit before the leaf goes on. Hang the leaf first and the sidelights get built around a door that is already carrying its own weight and deflection, which is how a head line ends up stepped by two millimetres on one side. It also makes the final glazing and sealing far easier, because nothing is swinging on the frame while it is being worked on."
        },
        {
          title: "Send the reveal depth, the wall return and the finished floor",
          body:
            "A sidelight sits in the same reveal as the door, so the depth of that reveal decides whether an extension profile is needed, and a wall return on one side decides how the frame closes against it. The finished floor level fixes the sill recess. These are three separate measurements that drawings often collapse into one opening width, and each of them can force a different frame detail."
        }
      ]
    }
  },
  "modern-front-doors": {
    anatomy: {
      eyebrow: "Construction",
      heading: "The Surface Is the Design, and Four Finishes Age in Four Different Ways",
      intro:
        "On a modern entrance the panel is flat, the sightline is thin and there is no moulding to read. What is left is the surface, which means the finish is doing the design work and also taking the weather. The four finishes offered here, 3D-printed texture, fluorocarbon coating, powder coating and wood-grain transfer, are not four colours of the same thing. They differ in how they fail, how long they hold colour, and whether a damaged area can be repaired on site.",
      items: [
        {
          title: "Powder coating is a film, and a film chips at an edge",
          body:
            "A polyester powder is sprayed and cured into a continuous film typically 60 to 80 microns thick. It is hard, uniform and available in any colour, and it is the most economical way to get a flat matte face. Its weakness is mechanical rather than chemical: the film is thin enough that an impact at an arris exposes bare aluminium, and once that happens the coating cannot stop the exposed metal from oxidising under it. On a sheltered entrance it lasts well; on a coastal elevation it depends entirely on the substrate preparation beneath."
        },
        {
          title: "Fluorocarbon is a chemistry, and it holds colour under UV",
          body:
            "A fluorocarbon coating built on a high-ratio PVDF resin holds gloss and colour far longer than polyester under sustained ultraviolet, because the fluorine-carbon bond in the resin is not broken by the same wavelengths. It is applied thinner than powder, which makes surface preparation more critical, not less. The failure mode is chalking and slow colour shift over many years rather than chipping, and it is the finish to specify where a dark colour on a sun-facing elevation has to stay the same dark colour. Where that matters, the coating system should be named at inquiry rather than chosen from a card at order."
        },
        {
          title: "Texture and grain are layers, so wear shows at the handle first",
          body:
            "A printed three-dimensional texture or a wood-grain transfer gives depth that a single-colour coating cannot, and it hides handling marks and light scratches very well. The trade-off is that it is a layer on the face, so the places that wear are predictable: around the handle, along the leading edge, and where a bag or a key habitually touches. A deep scratch in a textured face cannot be polished out and cannot be touched in to match. On those finishes the sensible assumption is panel replacement rather than repair."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "Choosing a Modern Entrance Finish for the Climate It Will Live In",
      intro:
        "The swatch book answers the wrong question. On a flat panel, finish is a service-life decision that happens to be visible, and the three choices below are what determine whether the elevation still reads as designed after a decade.",
      items: [
        {
          title: "Choose by UV hours and salt, not by the sample",
          body:
            "A south or west elevation in a high-ultraviolet climate and a coastal site with salt-laden air are the two conditions that separate these finishes fastest. Powder coating is the right answer under an overhang or on a shaded elevation where cost matters and the face is protected. Fluorocarbon earns its premium where a saturated or dark colour faces the sun, because colour shift on a dark panel is far more visible than on a light one. A sample held indoors tells you nothing about either."
        },
        {
          title: "Ask what happens to the surface in year eight",
          body:
            "Every finish reaches a point where it needs attention, and the useful question is what attention costs. A powder-coated panel can be touched in locally with an air-dry repair and will read acceptably from a metre away. A fluorocarbon face is harder to blend and usually wants a full-leaf refinish. A textured or grained face generally wants a new panel. Deciding which of those you are prepared to live with is a more honest basis for the choice than a gloss reading at handover."
        },
        {
          title: "Send the elevation, the orientation and a full-height photo of the reveal",
          body:
            "Dark colours on a sun-facing leaf reach high surface temperatures and move more than light ones, and the same colour reads very differently in a shaded porch than in direct light. Where the entrance sits in a deep reveal, the leaf spends most of the day in shadow and the finish choice matters far less than the detail of the frame. A photograph of the reveal, taken at full height, says more about that than any drawing."
        }
      ]
    }
  },
  "arched-front-doors": {
    anatomy: {
      eyebrow: "Construction",
      heading: "Why a Rolled and Welded Arch Can Follow the Wall and a Moulded One Cannot",
      intro:
        "An arched entrance is only convincing if its curve matches the opening it fills. That is a geometry problem before it is a manufacturing one, and it is the reason the arch here is an aluminium tube rolled to radius and then welded rather than a shape pressed into a mould. A mould fixes one radius and charges for it before the first unit is made. A rolled tube takes whatever radius the drawing gives it, and pays for the set-up once.",
      items: [
        {
          title: "The radius comes off the machine, so it can match the building",
          body:
            "Rolling sets the curve by the distance between rollers, not by a tool. That means the springing height and the radius can be taken from a measured opening rather than adjusted to the nearest catalogue arch, which is what makes the difference on a renovation where the existing brickwork has its own rise. The cost is that a late change to the radius is a rebuild of the arch, not an edit to a file, so the curve has to be agreed before the tube is bent."
        },
        {
          title: "3.5 m is a transport limit before it is a structural one",
          body:
            "The maximum overall height, arch included, is 3.5 m; anything taller is reviewed individually. The reason is not that the frame cannot be built taller, it is that a 3.5 m assembly already exceeds what will pass upright through a container door, so it travels braced at an angle and is landed that way. Beyond that height the arch has to be split into sections with a joint across the curve, and a joint across an arch is always visible no matter how well it is made."
        },
        {
          title: "Curved glass sets the programme, not the frame",
          body:
            "Each radius needs its own bending mould, and that tooling is charged once per project regardless of how many lights are ordered. A curved sealed unit also has to be built from panes bent to the same radius and held in a spacer that follows the curve, so the lead time is driven by the bend and the unit rather than by the aluminium. Ordering the frame first and the glass afterwards means a second tooling cycle, which is where arched projects lose weeks."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "What to Send Us for an Arched Entrance",
      intro:
        "An arched opening cannot be specified from a photograph. Three pieces of information decide whether the frame arrives as the building intended.",
      items: [
        {
          title: "A radius, or three points on the curve",
          body:
            "Either the radius and the springing height, or the chord width and the rise, which we convert to a radius ourselves. A photo with a tape measure in it is a starting point for a conversation, not a specification, because the frame is rolled to a number and a wrong number is a wrong arch. Where the opening is existing and out of level, the rise should be measured at both ends, not only at the centre."
        },
        {
          title: "Say whether the arch is carrying load or only shaping the opening",
          body:
            "Under an existing masonry arch the frame sits below the structure and carries nothing, so the head detail is a closing trim. In a stud wall the opening has been cut to a shape and the frame has to be self-supporting, which changes the head section and the anchoring. The same elevation can be either, and the two are built differently."
        },
        {
          title: "Order the glass with the frame, not after it",
          body:
            "The bending mould is made to the frame radius, so glass ordered after the frame has landed means tooling the curve twice and accepting a second lead time on top of the first. Where a project has a firm handover date, the glass decision has to be made at the same meeting as the frame decision, even if the glass type is still open at that point."
        }
      ]
    }
  },
  "fire-rated-doors": {
    anatomy: {
      eyebrow: "Construction",
      heading: "120 Minutes Is a Tested Assembly, Not a Door Leaf",
      intro:
        "A fire rating is a result, and the result belongs to a specific set of components tested together in a specific wall. A leaf that contains a fire-rated core is not a fire door on its own. The assembly here is supplied as one tested set: leaf, frame, intumescent seals, self-closing hardware and glazing, rated to 120 minutes to the US UL standard. Understanding why the set has to stay together is what prevents a project from buying a rated door and installing an unrated opening.",
      items: [
        {
          title: "Substituting one component voids the configuration, not just the part",
          body:
            "A test report names the leaf, the frame, the seals, the closer, the hinges, the lock and the glazing. Change the closer for a different model with a different closing force and the assembly is no longer the one that was tested, even though every individual item still carries its own certification. This is why hardware schedules are agreed before the frame is machined: a change afterwards is a re-submittal, and on a rated opening a re-submittal is a programme item rather than paperwork."
        },
        {
          title: "MGO board is why a rated leaf can stay a door",
          body:
            "Magnesium oxide board is non-combustible and dimensionally stable under heat, which lets a rated leaf keep a normal thickness and a normal weight instead of becoming a slab. The core holds the leaf together while the intumescent strips on the edges expand to close the gap between leaf and frame. That expansion is the mechanism the rating depends on, and it only works within a designed gap tolerance, which is why a rated door is hung to a figure rather than to feel."
        },
        {
          title: "The wall is half of the assembly",
          body:
            "A rated door set in an unrated partition has no rating, and the junction between frame and wall is where these installations most often fail. The frame has to be anchored into a wall of the same or better rating, with the anchor type the test used, and the gap between frame and wall has to be closed with the specified material rather than sealant chosen on site. Positive latching matters too: the closer has to bring the leaf onto the latch from any opening angle, because a door that stands ajar has no rating at all."
        }
      ]
    },
    specify: {
      eyebrow: "Specifying",
      heading: "Documenting a Fire Rated Entrance Before Fabrication",
      intro:
        "Rated openings fail in procurement more often than in manufacture. The requirement has to be written down in the form the factory and the inspector can both use.",
      items: [
        {
          title: "Send the requirement, not the door",
          body:
            "A rating in minutes means nothing without the standard it was tested to, because 120 minutes to UL, to BS 476 part 22 and to EN 1634 are different tests with different furnace curves and different labels. The standard decides which certificate applies and therefore which assembly can be supplied. Where a project is being built to a US code, that has to be stated at inquiry rather than discovered at submittal."
        },
        {
          title: "Wall type and opening size belong on the same drawing",
          body:
            "Steel stud with two layers of board, masonry and cast concrete each need a different anchor and often a different frame profile. The opening size matters as much, because a rated opening that is wider or taller than the tested configuration needs either a transom or a sidelight that is itself part of the rated assembly. Supplying those as ordinary fixed lights is the most common way a compliant door ends up in a non-compliant opening."
        },
        {
          title: "Agree the hardware schedule before release",
          body:
            "Closer, hinges, lock, coordinator on pairs, and any glazing are each named components in the tested set, and each one has a limit on leaf weight and leaf width. Agreeing the schedule before the frame is machined keeps the order inside the tested configuration. Agreeing it afterwards usually means either a substituted component that falls outside the certificate or a second frame."
        }
      ]
    }
  }
};

export const seriesInstall = {
  "pivot-doors": {
    eyebrow: "On site",
    heading: "Where a Pivot Entrance Goes Wrong, and What Stops It",
    intro:
      "Pivot doors fail at three interfaces: the slab, the head and the weather. All three are outside the door itself, which is why they are the ones nobody owns on a project.",
    items: [
      {
        title: "The pivot plate lands on a screed that was never designed for it",
        body:
          "A 300 to 500 kg leaf puts a point load through a plate a little wider than a hand, and a floating screed over insulation will crack under it within a season. The plate needs to bear on the structural slab or on a cast-in block, and the 20 mm sill recess has to be formed before the screed is poured. Where the floor build-up is decided after the door is ordered, the only remaining options are a surface-mounted plate that stands proud of the finished floor or a leaf shortened at the factory."
      },
      {
        title: "The leaf is made to the nominal opening, and the reveal is not square",
        body:
          "A pivot leaf sweeps through a full quarter turn, so it needs clearance at the head and at the leading edge that a hinged door does not. If the opening is measured at one point only, and the reveal is out of plumb by five millimetres, the leaf binds at the top of the sweep and no amount of hardware adjustment recovers it. Measure the head, the sill and both jambs, and send the worst of the four rather than the average."
      },
      {
        title: "Driving rain reaches the floor bearing",
        body:
          "A floor pivot sits below the door line, which means water that gets past the leaf has somewhere to go that a hinged threshold does not. The 20 mm drop sill and the drainage path around the pivot pocket have to be built as designed rather than sealed over at the end of the job. Where an entrance faces the prevailing weather with no porch or canopy, that drainage detail matters more than the finish on the leaf."
      }
    ]
  },
  "steel-entry-doors": {
    eyebrow: "On site",
    heading: "Where a Steel Entrance Rusts or Binds, and Why",
    intro:
      "Galvanized steel is forgiving until someone cuts it, and a steel frame is rigid until someone grouts it before checking it. Almost every steel entrance failure on site starts with a step taken in the wrong order.",
    items: [
      {
        title: "A cut edge is an unprotected edge",
        body:
          "The zinc on a galvanized sheet protects the face, and at a cut or a drilled hole it protects the exposed steel only by sacrificial action over a short distance. A frame trimmed on site and left with bare edges will show rust blooming from those edges within a wet season, usually at the sill where water sits. Cut edges, site-drilled holes and any weld have to be dressed and coated before the frame is closed in, not after the rust appears."
      },
      {
        title: "The frame is grouted before it is checked",
        body:
          "A steel frame is strong enough that it will resist being pushed square once it has been packed and grouted solid. If it is set, packed and filled in one operation, a frame that was two millimetres out of wind stays two millimetres out of wind, and a multi-point lock that was tested on a true frame will not engage on it. Set, brace, check diagonals, then grout."
      },
      {
        title: "The core is decided after the frame is fixed",
        body:
          "On a project order the core can be aluminum honeycomb, water-based polyurethane foam or fire-rated MGO board, and those are not interchangeable once the leaf is built. Where a fire requirement arrives late in the programme, the leaf has to be remade rather than upgraded, and the frame may need a different rebate. Confirm the core at inquiry, alongside the wall type, so the leaf and the opening are designed together."
      }
    ]
  },
  "aluminum-entry-doors": {
    eyebrow: "On site",
    heading: "What Goes Wrong With an Aluminum Entrance in Service",
    intro:
      "Aluminum does not rust, so the failures that matter are mechanical and thermal rather than corrosive: a sill that holds water, a coating that is damaged by handling, and a frame that is fixed so tightly it cannot move.",
    items: [
      {
        title: "The sill chamber fills because nobody checked the drainage",
        body:
          "An aluminum threshold is a chamber with weep paths, and those paths are small. Sealant applied generously at the end of the installation is the usual reason they block, and the symptom appears months later as water standing in the sill and staining the reveal. The drainage slots have to be checked after sealing, not before, and the sill should be tested with a hose before the internal finishes go down. Where a threshold sits under a canopy and never sees driving rain, this check is usually skipped, and the omission stays invisible until the first storm arrives from an unusual direction."
      },
      {
        title: "Protective film is left on through a sunny week",
        body:
          "A factory-applied film protects a coated leaf in transit and becomes a problem the moment the leaf sits in direct sun. The adhesive migrates into the coating and leaves a ghost outline that no solvent removes without dulling the finish. Strip the film as soon as the leaf is hung, and if the entrance is going to stand on a sun-facing elevation for weeks before handover, strip it and cover the leaf with a breathable sheet instead."
      },
      {
        title: "Over-tight fixings stop the frame moving, so the frame bows",
        body:
          "Aluminum expands roughly twice as much as steel over the same temperature range, and a 3 m frame will move a few millimetres between a cold night and a hot afternoon. Fixings that clamp the profile hard to a rigid substrate convert that movement into bowing at mid-height, which then shows as a leaf that rubs in the middle of its swing and clears at head and sill. Slotted or clearance-fixed connections at one end are what allow the frame to move without changing shape. On a long elevation fixed hard at both ends, the bowing is often enough to change the sightline of the whole entrance, not only the operation of the leaf."
      }
    ]
  },
  "double-entry-doors": {
    eyebrow: "On site",
    heading: "Why a Pair Misbehaves When Each Leaf Is Fine on Its Own",
    intro:
      "Two leaves that each close correctly can still make a bad double door. The failures live in the joint between them, in the level across the threshold, and in the relationship between the two closers.",
    items: [
      {
        title: "The flush bolts are never engaged in normal use",
        body:
          "On an unequal pair the narrow leaf is held by flush bolts at head and foot, and on a busy residential entrance nobody wants to bend down twice a day. The leaf gets left on the latch, or on nothing, and the astragal takes the load instead. That is a hardware selection problem, not a user problem: where the second leaf will be used daily, it should carry its own lock rather than flush bolts."
      },
      {
        title: "The threshold is level at each jamb and not across the middle",
        body:
          "A pair meets in the centre, and a threshold that is out of level by three millimetres across 2,280 mm means the two leaves meet at an angle. The astragal then seals at one end and gaps at the other, and the gap moves with the weather as the leaves move. Check level across the full opening before the frame is packed, and correct the substrate rather than shimming the frame at the jambs only. Where the substrate cannot be corrected, a shallow former built into the threshold is a better answer than a shim, because a shimmed frame passes the error straight to the leaves."
      },
      {
        title: "The two closers fight each other",
        body:
          "On a pair, the active leaf closes onto the inactive one, so the two closers have to be coordinated: the inactive leaf must be held closed while the active leaf closes onto it. Set independently, the weaker closer loses and the pair stands slightly ajar at the centre. A coordinator, or a single closer with an adjustable sequence, is what makes a pair close as one door rather than two. A sequence set mechanically is still only a setting, so it has to be commissioned on site rather than assumed from the factory adjustment."
      }
    ]
  },
  "front-doors-with-glass": {
    eyebrow: "On site",
    heading: "How Glazing Fails After Handover, and What Prevents It",
    intro:
      "Most failed glazing units were not defective when they left the factory. They were stressed during installation, or exposed to something the specification never accounted for.",
    items: [
      {
        title: "The blocks are set too tight and the edge takes the load",
        body:
          "Glass has to sit on setting blocks that carry its weight at the correct points, with clearance at the edges so the pane can move inside the frame. Packed hard against the rebate, the edge becomes the bearing surface and any frame movement goes straight into the glass. A thermal crack almost always starts at an edge, and it almost always starts where a block was too tight or missing."
      },
      {
        title: "Sealant is applied to the glass edge before the frame is sealed",
        body:
          "The perimeter of a sealed unit is the part that fails first, and it is the part most exposed to site work. Solvent-based sealant or a cleaner run along the glass edge can attack the secondary seal, and the unit mists from the edge inwards a year later. Seal the frame to the wall first, protect the glass edge during finishing, and use a sealant that is compatible with the unit rather than whatever is on the van."
      },
      {
        title: "Solar gain arrives through a build that was specified for heat loss",
        body:
          "A glazed entrance chosen for its U-value can still overheat the room behind it, and a dark frame in direct sun reaches temperatures that a light one never sees. Where the glass area is large and the elevation is exposed, solar control and frame colour belong in the same conversation as the U-value. Specifying for winter and discovering the summer afterwards is the most common way a good glazing build disappoints."
      }
    ]
  },
  "front-doors-with-sidelights": {
    eyebrow: "On site",
    heading: "The Three Ways a Sidelight Entrance Loses Its Line",
    intro:
      "A sidelight entrance is judged on one thing above all: whether the head runs level and straight across the whole width. Everything that damages that impression is an installation sequence problem.",
    items: [
      {
        title: "The sidelights are glazed before the frame is plumb",
        body:
          "Glazing stiffens a frame, which sounds helpful until the frame was slightly out of plumb when the glass went in. From that point the frame cannot be adjusted, because the glass is now part of the structure. Plumb and square the whole frame with the mullions in place, brace it, and only then glaze the fixed lights."
      },
      {
        title: "The weep slots are sealed during finishing",
        body:
          "The sidelight sill drains through slots that are a few millimetres wide and sit exactly where a finishing trade wants to run a bead. Blocked, the sill holds water and the first sign is a damp patch at the bottom of the reveal rather than water on the floor. Mask the drainage path during finishing, and test the sill with water before the internal floor goes down."
      },
      {
        title: "The head line is set from the door head rather than the structure",
        body:
          "Where the opening is not level, the temptation is to set the frame head parallel to the door head, which is itself set to the finished floor. The result is a head line that is straight relative to the door and visibly out of level relative to the ceiling and the façade. On a wide entrance the head should follow the structure, and the door should be set to the frame."
      }
    ]
  },
  "modern-front-doors": {
    eyebrow: "On site",
    heading: "Keeping a Flat Panel Clean Through a Build Programme",
    intro:
      "A modern entrance has no moulding to hide a mark. On a flat, thin-sightline elevation every site handling error is legible, and the three below are the ones that show up on handover day.",
    items: [
      {
        title: "Protective film left on in the sun",
        body:
          "The same film that protects a coated panel in transit becomes a staining risk the moment the panel is in direct sun. Adhesive migrates into the coating and leaves a faint outline of the sheet that no solvent lifts without dulling the surface. Strip it on the day the leaf is hung; if the entrance has to stand unfinished for weeks, cover it with a breathable sheet instead of leaving the film on."
      },
      {
        title: "Site touch-up with the wrong sheen",
        body:
          "A matte face touched up with a gloss repair looks worse than the chip it was meant to hide, particularly in raking light. Where a repair is needed, the sheen matters as much as the colour, and on a textured or grained face neither can be matched in situ. Agree before handover which marks are acceptable as touched-in and which require a panel replacement, because that decision is much harder to make afterwards."
      },
      {
        title: "A fixing through the face",
        body:
          "Anything screwed through a flat aluminum face leaves a visible fastener, a thermal bridge and a corrosion point in one operation. Fixings belong behind the panel or in the frame, and where a site condition demands a face fixing, it should be agreed with the factory before the hole is drilled. On an insulated panel a face fixing also penetrates the thermal break, and the cold spot it creates is where condensation appears first."
      }
    ]
  },
  "arched-front-doors": {
    eyebrow: "On site",
    heading: "Protecting a Curve That Cannot Be Adjusted",
    intro:
      "An arch is the least forgiving element on the whole elevation. It is a welded assembly with one correct radius, and there is no site adjustment that recovers a wrong one.",
    items: [
      {
        title: "The radius is taken from a photograph",
        body:
          "A photograph flattens the curve and gives no scale, so a radius derived from one is an approximation at best. Where the opening is existing, the reliable inputs are the chord width and the rise at each end, measured off a string line. Where the arch is new, the drawing has the radius and it should be quoted as a number, because the tube is rolled to a figure rather than to an impression."
      },
      {
        title: "The arch is used as a lifting point",
        body:
          "A welded arch is stiff in its own plane and weak out of it, and a sling taken around the crown during unloading puts exactly the load it is least able to carry through the weld. Lift from the jambs or with a spreader, and keep the assembly upright in store. A seam that has opened a fraction of a millimetre during handling does not show until the frame is glazed and the light catches the weld."
      },
      {
        title: "The glass is measured after the arch is installed",
        body:
          "Measuring the opening once the frame is set seems like the careful approach, and on a curved light it costs a second set of bending tools and a second lead time. The frame radius is known when it is rolled; the glass should be ordered to that radius at that point. Where the opening tolerance is uncertain, the frame should be surveyed and confirmed before the glass is released, not after it is fixed."
      }
    ]
  },
  "fire-rated-doors": {
    eyebrow: "On site",
    heading: "How a Compliant Rated Door Becomes Non-Compliant",
    intro:
      "A rated assembly rarely fails because the wrong product was supplied. It fails because one component was changed, removed or packed differently during fit-out, and nobody recorded that the assembly had changed.",
    items: [
      {
        title: "The closer is replaced, or disconnected",
        body:
          "A closer with the wrong closing force is the most common substitution on a rated opening, and a closer wired open during fit-out and never reconnected is the most common omission. Either one takes the assembly outside its tested configuration, and both are invisible on a snagging walk because the door still closes by hand. Rated openings should be inspected at handover with the hardware schedule in hand, not by eye."
      },
      {
        title: "The frame is packed with whatever was on site",
        body:
          "The gap between a rated frame and a rated wall is part of the assembly, and the material that fills it is named in the test. Timber packers left in place, expanding foam, or a sealant chosen for its colour all change the detail. Where the wall is built after the frame, the junction should be closed with the specified material and recorded, because that is the line an inspector will look at."
      },
      {
        title: "The gap under the leaf is set for draughts, not for smoke",
        body:
          "A rated leaf is hung to a designed gap at the head and the jambs so that the intumescent strip can close it under heat, and the gap at the floor is a separate decision that affects smoke leakage. Adjusting a leaf to stop a draught, by packing a hinge or bending a strike, changes the gap the assembly was tested with. Where a door is whistling, the answer is the seal detail, not the hinge."
      }
    ]
  }
};

// The install notes are the third editorial block on the same pages. Merged here
// so a page imports one object and picks a part by name.
Object.entries(seriesInstall).forEach(([slug, block]) => {
  if (seriesContent[slug]) seriesContent[slug].install = block;
});
