#!/usr/bin/env python3
"""Cut each door design out of its studio backdrop.

The site renders these on a plain page background, so the grey wall and floor
have to go. A segmentation model on its own is not enough for this catalogue:

  * glazed panels are semi-transparent, so the model treats the glass as
    backdrop and punches a hole straight through the door;
  * a light threshold under the sill, or a soft shadow, can connect the door's
    own interior to the border, so a plain "fill enclosed holes" pass misses it.

So: seal thin gaps in the mask with a morphological close, flood from the border
to find what is genuinely outside, and force everything that is not outside to
full opacity. The model's soft edge is kept as-is, so no halo appears.

Writes WebP with alpha, trimmed to the door with a small uniform margin, and
keeps lib/cutoutImages.js in step with whatever is in the output folder — the
index grid reads that manifest, so a new cutout shows up without a code change.

    python3 scripts/cutout-doors.py                  # every design
    python3 scripts/cutout-doors.py jmr-3610          # one design
    python3 scripts/cutout-doors.py --manifest         # rewrite the manifest only
"""
import json
import os
import sys
from collections import deque

from PIL import Image, ImageDraw, ImageFilter
from rembg import new_session, remove

ROOT = "/Users/liuxun/Documents/Codex/jmrhabitat-site/jmrhome"
PUBLIC = os.path.join(ROOT, "public")
OUT_DIR = os.path.join(PUBLIC, "assets/images/products/cutouts")

MAX_W = 760
MARGIN = 0.04  # fraction of the longer trimmed side

# Two designs defeat the model, and in both cases no amount of post-processing
# rescues it: `jmr-3610` stands against a wall of almost the same tone as the
# leaf, so every threshold either keeps the wall or eats the door; the only
# straight-on shot of `celestial-bronze` is a workshop snapshot on a cluttered
# floor, so segmentation leaks background through the gaps in its cast face.
# Both are front-on photographs of a rectangular unit, so for these the frame is
# the silhouette: crop to the frame that was measured off the source, and keep
# the leaf inside it at full opacity. Source is overridden per entry because the
# published image for `celestial-bronze` is a night render that cannot be keyed.
# Two designs share a leaf with another entry in the same grid, and their own
# cutout files were deleted as duplicates: `jmr-2105` is the same door as
# `j-2008` shot in a different finish, and the `moonlight-3610` leaf is the one
# already cut as `jmr-3610`. Point them at the surviving file rather than
# letting the card fall back to the studio photo, which is a different shape.
CUTOUT_ALIASES = {
    "jmr-2105": "j-2008",
    "moonlight-3610": "jmr-3610",
    # classic-3670 and jmr-3670 are the same photograph (perceptual hash distance
    # 6/256), and hybrid-2103 is a re-shot of jmr-2103, so each pair shares one
    # cutout instead of shipping two cards of the same leaf.
    "classic-3670": "jmr-3670",
    "hybrid-2103": "jmr-2103",
}

GEOMETRIC = {
    "jmr-3610": {"box": (452, 86, 799, 847)},
    "celestial-bronze": {
        "box": (268, 161, 982, 1200),
        "src": "/assets/images/daily/Bronze Relic real.jpg",
    },
}


def reachable_from_border(mask):
    """Return a bytearray: 1 where the mask pixel is connected to the border."""
    w, h = mask.size
    px = mask.load()
    seen = bytearray(w * h)
    q = deque()

    def push(x, y):
        i = y * w + x
        if seen[i] or px[x, y] == 0:
            return
        seen[i] = 1
        q.append((x, y))

    for x in range(w):
        push(x, 0)
        push(x, h - 1)
    for y in range(h):
        push(0, y)
        push(w - 1, y)

    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h:
                push(nx, ny)
    return seen


def solidify(alpha, hard):
    """Force every pixel that is not outside the door to full opacity."""
    w, h = alpha.size
    r = max(9, int(max(w, h) * 0.02))
    if r % 2 == 0:
        r += 1
    r = min(r, 99)

    closed = hard.filter(ImageFilter.MaxFilter(r)).filter(ImageFilter.MinFilter(r))
    outside = reachable_from_border(closed)

    ap = alpha.load()
    cp = closed.load()
    out = alpha.copy()
    op = out.load()
    filled = 0
    for y in range(h):
        row = y * w
        for x in range(w):
            if outside[row + x]:
                continue
            if ap[x, y] < 255 and (ap[x, y] > 96 or cp[x, y]):
                op[x, y] = 255
                filled += 1
    return out, filled


def hard_mask(alpha):
    return alpha.point(lambda v: 255 if v > 96 else 0)


def trim(im, mask):
    bbox = mask.getbbox()
    im = im.crop(bbox)
    pad = int(max(im.size) * MARGIN)
    canvas = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    canvas.paste(im, (pad, pad), im)
    return canvas


def coverage(im):
    a = im.getchannel("A")
    w, h = a.size
    px = a.load()
    op = sum(1 for y in range(h) for x in range(w) if px[x, y] > 128)
    return 100.0 * op / (w * h)


def geometric_cut(im, box):
    """Take the door as the rectangle its frame encloses.

    A leaf has square corners, so an opaque rectangular alpha is the honest
    silhouette here. The crop is measured to the outside of the frame, which
    puts the backdrop outside the crop already.

    The mask is built one pixel inside the edge and blurred on that inset, so
    the outer pixels ramp to zero instead of sitting at full opacity. Without
    that ramp libwebp sees an all-opaque alpha, drops the channel, and the card
    renders as a hard grey rectangle against a white page.
    """
    x0, y0, x1, y1 = box
    x0, y0 = max(x0, 0), max(y0, 0)
    x1, y1 = min(x1, im.width), min(y1, im.height)
    crop = im.crop((x0, y0, x1, y1)).convert("RGBA")

    mask = Image.new("L", crop.size, 0)
    ImageDraw.Draw(mask).rectangle([1, 1, crop.width - 2, crop.height - 2], fill=255)
    crop.putalpha(mask.filter(ImageFilter.GaussianBlur(0.8)))
    return crop, coverage(crop)


MANIFEST = os.path.join(ROOT, "lib/cutoutImages.js")


def write_manifest():
    """Describe every cutout on disk for the index grid.

    Generated from the folder, not from the run, so a partial run (one design at
    a time) can never leave the manifest short of files that are already there.
    """
    sizes = {}
    for name in sorted(os.listdir(OUT_DIR)):
        if not name.endswith(".webp"):
            continue
        slug = name[: -len(".webp")]
        with Image.open(os.path.join(OUT_DIR, name)) as im:
            sizes[slug] = (name, *im.size)

    for slug, target in CUTOUT_ALIASES.items():
        if slug in sizes:
            continue  # a real file wins over the alias
        if target in sizes:
            sizes[slug] = sizes[target]
        else:
            print(f"alias {slug} -> {target}: target missing, skipped", flush=True)

    entries = []
    for slug in sorted(sizes):
        name, w, h = sizes[slug]
        entries.append(
            '  "%s": { src: "/assets/images/products/cutouts/%s", w: %d, h: %d },'
            % (slug, name, w, h)
        )
    body = "\n".join(entries)
    output = (
        "// Door cutouts on transparency, generated by scripts/cutout-doors.py.\n"
        "// 由脚本生成，勿手改：跑一次脚本，索引页就跟着更新。\n"
        "// The index grid renders these instead of the studio photo, so every\n"
        "// card shows the door alone on the page background.\n"
        "export const cutoutImages = {\n"
        f"{body}\n"
        "};\n\n"
        "export default cutoutImages;\n"
    )
    with open(MANIFEST, "w") as fh:
        fh.write(output)
    print(f"wrote lib/cutoutImages.js — {len(entries)} cutouts", flush=True)


def main(only=None):
    mapping = json.load(open("/tmp/imgmap.json"))
    os.makedirs(OUT_DIR, exist_ok=True)
    sessions = {}

    for slug, rel in mapping.items():
        if only and slug not in only:
            continue

        spec = GEOMETRIC.get(slug)
        if spec:
            src = os.path.join(PUBLIC, spec.get("src", rel).lstrip("/"))
            if not os.path.exists(src):
                print(slug, "MISSING", src, flush=True)
                continue
            cut, cov = geometric_cut(Image.open(src).convert("RGB"), spec["box"])
            if cut.width > MAX_W:
                ratio = MAX_W / cut.width
                cut = cut.resize((MAX_W, round(cut.height * ratio)), Image.LANCZOS)
            dst = os.path.join(OUT_DIR, slug + ".webp")
            cut.save(dst, "WEBP", quality=86, method=6)
            print(
                f"{slug:<24}{cut.width}x{cut.height:<10}cover={cov:5.1f}%  "
                f"{'geometric':<18}{os.path.getsize(dst)//1024}KB",
                flush=True,
            )
            continue

        src = os.path.join(PUBLIC, rel.lstrip("/"))
        if not os.path.exists(src):
            print(slug, "MISSING", src, flush=True)
            continue

        original = Image.open(src).convert("RGBA")
        best = None

        for model in ("isnet-general-use", "u2net"):
            if model not in sessions:
                sessions[model] = new_session(model)
            cut = remove(original, session=sessions[model])
            alpha = cut.getchannel("A")
            hard = hard_mask(alpha)
            solid, filled = solidify(alpha, hard)
            cut.putalpha(solid)
            solid_hard = hard_mask(solid)
            cut = trim(cut, solid_hard)
            cov = coverage(cut)
            if best is None or cov > best[0]:
                best = (cov, cut, model, filled)

        cov, cut, model, filled = best
        if cut.width > MAX_W:
            ratio = MAX_W / cut.width
            cut = cut.resize((MAX_W, round(cut.height * ratio)), Image.LANCZOS)

        dst = os.path.join(OUT_DIR, slug + ".webp")
        cut.save(dst, "WEBP", quality=86, method=6)
        print(
            f"{slug:<24}{cut.width}x{cut.height:<10}cover={cov:5.1f}%  "
            f"filled={filled:<7}{model:<18}{os.path.getsize(dst)//1024}KB",
            flush=True,
        )


if __name__ == "__main__":
    args = sys.argv[1:]
    if "--manifest" in args:
        write_manifest()
    else:
        main(set(args) or None)
        write_manifest()
