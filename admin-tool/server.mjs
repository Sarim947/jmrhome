import express from "express";
import multer from "multer";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import net from "node:net";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataPath = path.join(rootDir, "lib/data.js");
const publicImagesDir = path.join(rootDir, "public/assets/images");
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 30 * 1024 * 1024 } });

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use((request, response, next) => {
  if (!request.path.startsWith("/api/")) {
    response.setHeader("Cache-Control", "no-store");
  }
  next();
});
app.use(express.static(path.join(__dirname, "public"), { etag: false, lastModified: false }));

function slugify(value) {
  return String(value || "item")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

function jsString(value) {
  return JSON.stringify(String(value || ""));
}

function numberValue(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function requireText(fields, keys) {
  for (const key of keys) {
    if (!String(fields[key] || "").trim()) {
      throw new Error(`${key} is required.`);
    }
  }
}

function fieldAt(value, index, fallback = undefined) {
  if (Array.isArray(value)) return value[index] ?? fallback;
  return value ?? fallback;
}

async function getDataModule() {
  return import(`${pathToFileURL(dataPath).href}?t=${Date.now()}`);
}

async function readDataFile() {
  return fs.readFile(dataPath, "utf8");
}

async function writeDataFile(nextText) {
  await fs.mkdir(path.join(__dirname, "backups"), { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  await fs.copyFile(dataPath, path.join(__dirname, "backups", `data-${stamp}.js`));
  await fs.writeFile(dataPath, nextText);
}

async function saveWebp(file, targetDir, baseName, options = {}) {
  if (!file || !file.buffer?.length) return "";
  await fs.mkdir(targetDir, { recursive: true });
  const safeBase = slugify(baseName || file.originalname.replace(/\.[^.]+$/, ""));
  const filename = `${safeBase}-${Date.now().toString(36)}.webp`;
  const fullPath = path.join(targetDir, filename);
  const width = options.width || 1800;
  const height = options.height;
  const crop = options.crop;
  let pipeline = sharp(file.buffer).rotate();

  if (height && crop) {
    const metadata = await sharp(file.buffer).rotate().metadata();
    const sourceWidth = metadata.width || width;
    const sourceHeight = metadata.height || height;
    const targetRatio = width / height;
    const sourceRatio = sourceWidth / sourceHeight;
    const baseWidth = sourceRatio > targetRatio ? sourceHeight * targetRatio : sourceWidth;
    const baseHeight = sourceRatio > targetRatio ? sourceHeight : sourceWidth / targetRatio;
    const zoom = Math.max(1, Math.min(Number.parseFloat(crop.zoom) || 1, 3));
    const cropWidth = Math.max(1, Math.round(baseWidth / zoom));
    const cropHeight = Math.max(1, Math.round(baseHeight / zoom));
    const x = Math.max(0, Math.min(Number.parseFloat(crop.x) || 50, 100)) / 100;
    const y = Math.max(0, Math.min(Number.parseFloat(crop.y) || 50, 100)) / 100;
    const left = Math.round((sourceWidth - cropWidth) * x);
    const top = Math.round((sourceHeight - cropHeight) * y);

    pipeline = pipeline.extract({ left, top, width: cropWidth, height: cropHeight });
  }

  await pipeline
    .resize({ width, height, fit: height ? "cover" : "inside", position: "centre", withoutEnlargement: false })
    .webp({ quality: 86 })
    .toFile(fullPath);

  return `/assets/images/${path.relative(publicImagesDir, fullPath).split(path.sep).join("/")}`;
}

function insertAfterArrayStart(text, exportName, entry) {
  const marker = `export const ${exportName} = [`;
  const index = text.indexOf(marker);
  if (index === -1) throw new Error(`Could not find ${exportName}`);
  const insertAt = text.indexOf("\n", index) + 1;
  return `${text.slice(0, insertAt)}${entry}${text.slice(insertAt)}`;
}

function findClosingBracket(text, openIndex) {
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let i = openIndex; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  throw new Error("Could not find closing bracket");
}

function insertBeforeArrayEnd(text, exportName, entry) {
  const marker = `export const ${exportName} = [`;
  const index = text.indexOf(marker);
  if (index === -1) throw new Error(`Could not find ${exportName}`);
  const openIndex = text.indexOf("[", index);
  const closeIndex = findClosingBracket(text, openIndex);
  const prefix = text.slice(closeIndex - 2, closeIndex).trim() ? ",\n" : "";
  return `${text.slice(0, closeIndex)}${prefix}${entry}${text.slice(closeIndex)}`;
}

function insertProductIntoCollection(text, slug, entry) {
  const slugIndex = text.indexOf(`slug: ${jsString(slug)}`);
  if (slugIndex === -1) throw new Error(`Could not find product collection ${slug}`);
  const itemsIndex = text.indexOf("items:", slugIndex);
  const openIndex = text.indexOf("[", itemsIndex);
  const closeIndex = findClosingBracket(text, openIndex);
  const hasItems = text.slice(openIndex + 1, closeIndex).trim().length > 0;
  const prefix = hasItems ? ",\n" : "\n";
  const suffix = hasItems ? "" : "    ";
  return `${text.slice(0, closeIndex)}${prefix}${entry}${suffix}${text.slice(closeIndex)}`;
}

function findCollectionItemsRange(text, slug) {
  const slugIndex = text.indexOf(`slug: ${jsString(slug)}`);
  if (slugIndex === -1) throw new Error(`Could not find product collection ${slug}`);
  const itemsIndex = text.indexOf("items:", slugIndex);
  if (itemsIndex === -1) throw new Error(`Could not find items for product collection ${slug}`);
  const openIndex = text.indexOf("[", itemsIndex);
  const closeIndex = findClosingBracket(text, openIndex);
  return { openIndex, closeIndex };
}

function splitTopLevelItems(text, openIndex, closeIndex) {
  const ranges = [];
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;
  let start = openIndex + 1;

  for (let i = openIndex + 1; i <= closeIndex; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "{" || char === "[" || char === "(") depth += 1;
    if (char === "}" || char === "]" || char === ")") depth -= 1;

    if ((char === "," && depth === 0) || i === closeIndex) {
      let itemStart = start;
      let itemEnd = i === closeIndex ? i : i;
      while (itemStart < itemEnd && /\s/.test(text[itemStart])) itemStart += 1;
      while (itemEnd > itemStart && /\s/.test(text[itemEnd - 1])) itemEnd -= 1;
      if (itemStart < itemEnd) ranges.push({ start: itemStart, end: itemEnd });
      start = i + 1;
    }
  }

  return ranges;
}

function findProductItemRange(text, data, collectionSlug, productId) {
  const collection = data.productCollections.find((item) => item.slug === collectionSlug);
  if (!collection) throw new Error(`Could not find product collection ${collectionSlug}`);
  const productIndex = collection.items.findIndex((item) => String(item.id) === String(productId));
  if (productIndex === -1) throw new Error(`Could not find product ${productId}`);
  const { openIndex, closeIndex } = findCollectionItemsRange(text, collectionSlug);
  const ranges = splitTopLevelItems(text, openIndex, closeIndex);
  const range = ranges[productIndex];
  if (!range) throw new Error(`Could not locate product ${productId} in data file`);
  return range;
}

function replaceProductInText(text, data, collectionSlug, productId, entry) {
  const range = findProductItemRange(text, data, collectionSlug, productId);
  return `${text.slice(0, range.start)}${entry}${text.slice(range.end)}`;
}

function deleteProductFromText(text, data, collectionSlug, productId) {
  const range = findProductItemRange(text, data, collectionSlug, productId);
  let start = range.start;
  let end = range.end;
  while (end < text.length && /\s/.test(text[end])) end += 1;
  if (text[end] === ",") {
    end += 1;
  } else {
    while (start > 0 && /\s/.test(text[start - 1])) start -= 1;
    if (text[start - 1] === ",") start -= 1;
  }
  return `${text.slice(0, start)}${text.slice(end)}`;
}

function findCollectionObjectRange(text, slug) {
  const slugIndex = text.indexOf(`slug: ${jsString(slug)}`);
  if (slugIndex === -1) throw new Error(`Could not find product collection ${slug}`);

  let start = slugIndex;
  while (start >= 0 && text[start] !== "{") start -= 1;
  if (start < 0) throw new Error(`Could not find start of product collection ${slug}`);

  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let i = start; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return { start, end: i + 1 };
    }
  }

  throw new Error(`Could not find end of product collection ${slug}`);
}

function replaceObjectStringProperty(objectText, key, value) {
  const pattern = new RegExp(`(${key}:\\s*)(["'])(?:\\\\.|(?!\\2).)*\\2`);
  if (pattern.test(objectText)) {
    return objectText.replace(pattern, `$1${jsString(value)}`);
  }

  return objectText.replace(/\{\n/, `{\n    ${key}: ${jsString(value)},\n`);
}

function updateCollectionInText(text, slug, fields) {
  const range = findCollectionObjectRange(text, slug);
  let objectText = text.slice(range.start, range.end);

  if (fields.title !== undefined) objectText = replaceObjectStringProperty(objectText, "title", fields.title);
  if (fields.shortDesc !== undefined) objectText = replaceObjectStringProperty(objectText, "shortDesc", fields.shortDesc);
  if (fields.img !== undefined) objectText = replaceObjectStringProperty(objectText, "img", fields.img);

  return `${text.slice(0, range.start)}${objectText}${text.slice(range.end)}`;
}

function productEntry(fields, imagePath, productId = slugify(fields.name)) {
  const name = fields.name;
  return `      {
        id: ${jsString(productId)},
        name: ${jsString(name)},
        shortDesc: ${jsString(fields.shortDesc)},
        img: ${jsString(imagePath)},
        altText: ${jsString(fields.altText || `${name} custom entrance door`)},
        params: {
          style: ${jsString(fields.style || "Custom")},
          material: ${jsString(fields.material || "")},
          configuration: ${jsString(fields.configuration || "")},
          smartLock: ${jsString(fields.smartLock || "Optional")},
          size: ${jsString(fields.size || "")}
        },
        description: ${jsString(fields.description)}
      }`;
}

app.get("/api/state", async (request, response) => {
  const data = await getDataModule();
  response.json({
    collections: data.productCollections.map((item) => ({
      slug: item.slug,
      title: item.title,
      shortDesc: item.shortDesc,
      img: item.img,
      items: item.items.map((product) => ({
        id: product.id,
        name: product.name,
        shortDesc: product.shortDesc,
        img: product.img,
        altText: product.altText,
        params: product.params,
        description: product.description
      }))
    })),
    dailyCount: data.dailyWorks.length,
    inspirationCount: data.inspirationImages.length,
    blogCount: data.blogPosts.length
  });
});

app.post(
  "/api/daily",
  upload.fields([
    { name: "renderImage", maxCount: 1 },
    { name: "realImage", maxCount: 1 }
  ]),
  async (request, response) => {
    try {
      const fields = request.body;
      requireText(fields, ["name", "date", "description"]);
      if (!request.files.renderImage?.[0]) throw new Error("renderImage is required.");
      const data = await getDataModule();
      const id = Math.max(0, ...data.dailyWorks.map((item) => Number(item.id) || 0)) + 1;
      const base = slugify(`${fields.date}-${fields.name}`);
      const dailyImageOptions = { width: 1200, height: 1200 };
      const renderImg = await saveWebp(request.files.renderImage?.[0], path.join(publicImagesDir, "daily"), `${base}-render`, {
        ...dailyImageOptions,
        crop: { x: fields.renderImageCropX, y: fields.renderImageCropY, zoom: fields.renderImageCropZoom }
      });
      const realImg = await saveWebp(request.files.realImage?.[0], path.join(publicImagesDir, "daily"), `${base}-real`, {
        ...dailyImageOptions,
        crop: { x: fields.realImageCropX, y: fields.realImageCropY, zoom: fields.realImageCropZoom }
      });

      const entry = `  {
    id: ${id},
    name: ${jsString(fields.name)},
    date: ${jsString(fields.date)},
    description: ${jsString(fields.description)},
    realImg: ${jsString(realImg || renderImg)},
    renderImg: ${jsString(renderImg || realImg)},
    altText: ${jsString(fields.altText || `${fields.name} custom entrance door`)},
    designPhilosophy: ${jsString(fields.designPhilosophy)},
    structure: ${jsString(fields.structure)},
    surfaceFinish: ${jsString(fields.surfaceFinish)}
  },
`;

      await writeDataFile(insertAfterArrayStart(await readDataFile(), "dailyWorks", entry));
      response.json({ ok: true, message: "Daily Works item saved." });
    } catch (error) {
      response.status(500).json({ ok: false, error: error.message });
    }
  }
);

app.post(
  "/api/collection",
  upload.fields([{ name: "collectionImage", maxCount: 1 }]),
  async (request, response) => {
    try {
      const fields = request.body;
      requireText(fields, ["collectionSlug", "collectionTitle"]);
      const data = await getDataModule();
      const existingCollection = data.productCollections.find((item) => item.slug === fields.collectionSlug);
      if (!existingCollection) throw new Error(`Could not find product collection ${fields.collectionSlug}`);
      const imageDir = path.join(publicImagesDir, "products", fields.collectionSlug);
      const imagePath = await saveWebp(request.files.collectionImage?.[0], imageDir, `${fields.collectionTitle}-cover`, {
        width: 1200,
        height: 900,
        crop: { x: fields.collectionImageCropX, y: fields.collectionImageCropY, zoom: fields.collectionImageCropZoom }
      });

      const nextText = updateCollectionInText(await readDataFile(), fields.collectionSlug, {
        title: fields.collectionTitle,
        shortDesc: fields.collectionShortDesc || existingCollection.shortDesc || "",
        ...(imagePath ? { img: imagePath } : {})
      });

      await writeDataFile(nextText);
      response.json({ ok: true, message: "Collection card updated." });
    } catch (error) {
      response.status(500).json({ ok: false, error: error.message });
    }
  }
);

app.post(
  "/api/product-item",
  upload.fields([{ name: "productImage", maxCount: 1 }]),
  async (request, response) => {
    try {
      const fields = request.body;
      requireText(fields, ["collectionSlug", "productId", "name", "shortDesc"]);
      const data = await getDataModule();
      const collection = data.productCollections.find((item) => item.slug === fields.collectionSlug);
      if (!collection) throw new Error(`Could not find product collection ${fields.collectionSlug}`);
      const existingProduct = collection.items.find((item) => String(item.id) === String(fields.productId));
      if (!existingProduct) throw new Error(`Could not find product ${fields.productId}`);

      const imageDir = path.join(publicImagesDir, "products", fields.collectionSlug);
      const productImageOptions = { width: 1200, height: 900 };
      const nextImage = await saveWebp(request.files.productImage?.[0], imageDir, fields.name, {
        ...productImageOptions,
        crop: { x: fields.productImageCropX, y: fields.productImageCropY, zoom: fields.productImageCropZoom }
      });
      const entry = productEntry(
        {
          ...fields,
          description: fields.description || existingProduct.description || "",
          altText: fields.altText || existingProduct.altText || "",
          style: fields.style || existingProduct.params?.style || "",
          material: fields.material || existingProduct.params?.material || "",
          configuration: fields.configuration || existingProduct.params?.configuration || "",
          smartLock: fields.smartLock || existingProduct.params?.smartLock || "",
          size: fields.size || existingProduct.params?.size || ""
        },
        nextImage || existingProduct.img,
        fields.productId
      );
      const text = await readDataFile();
      const nextText = replaceProductInText(text, data, fields.collectionSlug, fields.productId, entry);

      await writeDataFile(nextText);
      response.json({ ok: true, message: "Product updated." });
    } catch (error) {
      response.status(500).json({ ok: false, error: error.message });
    }
  }
);

app.post("/api/product-item/delete", async (request, response) => {
  try {
    const fields = request.body;
    requireText(fields, ["collectionSlug", "productId"]);
    const data = await getDataModule();
    const text = await readDataFile();
    const nextText = deleteProductFromText(text, data, fields.collectionSlug, fields.productId);

    await writeDataFile(nextText);
    response.json({ ok: true, message: "Product deleted." });
  } catch (error) {
    response.status(500).json({ ok: false, error: error.message });
  }
});

app.post(
  "/api/product",
  upload.fields([
    { name: "productImage", maxCount: 1 },
    { name: "collectionImage", maxCount: 1 }
  ]),
  async (request, response) => {
    try {
      const fields = request.body;
      const newCollection = fields.collectionMode === "new";
      requireText(fields, ["name", "shortDesc"]);
      if (newCollection) requireText(fields, ["collectionTitle"]);
      const collectionSlug = newCollection ? slugify(fields.collectionTitle) : fields.collectionSlug;
      if (!collectionSlug) throw new Error("collectionSlug is required.");
      if (!request.files.productImage?.[0]) throw new Error("productImage is required.");
      const imageDir = path.join(publicImagesDir, "products", collectionSlug);
      const productImageOptions = { width: 1200, height: 900 };
      const productImg = await saveWebp(request.files.productImage?.[0], imageDir, fields.name, {
        ...productImageOptions,
        crop: { x: fields.productImageCropX, y: fields.productImageCropY, zoom: fields.productImageCropZoom }
      });
      if (!productImg) throw new Error("Product image is required.");
      const product = productEntry(fields, productImg);
      let text = await readDataFile();

      if (newCollection) {
        const collectionImg = await saveWebp(request.files.collectionImage?.[0], imageDir, `${fields.collectionTitle}-cover`, {
          ...productImageOptions,
          crop: { x: fields.collectionImageCropX, y: fields.collectionImageCropY, zoom: fields.collectionImageCropZoom }
        }) || productImg;
        const collection = `  {
    slug: ${jsString(collectionSlug)},
    title: ${jsString(fields.collectionTitle)},
    shortDesc: ${jsString(fields.collectionShortDesc || fields.shortDesc)},
    img: ${jsString(collectionImg)},
    items: [
${product}
    ]
  }`;
        text = insertBeforeArrayEnd(text, "productCollections", collection);
      } else {
        text = insertProductIntoCollection(text, collectionSlug, product);
      }

      await writeDataFile(text);
      response.json({ ok: true, message: "Product saved." });
    } catch (error) {
      response.status(500).json({ ok: false, error: error.message });
    }
  }
);

app.post("/api/inspiration", upload.array("images", 24), async (request, response) => {
  try {
    const fields = request.body;
    const data = await getDataModule();
    const start = data.inspirationImages.length + 1;
    const entries = [];

    for (const [index, file] of (request.files || []).entries()) {
      const title = fields.title || `Entry Study ${String(start + index).padStart(2, "0")}`;
      const base = `${title}-${index + 1}`;
      const src = await saveWebp(file, path.join(publicImagesDir, "inspiration"), base, { width: 1800 });
      const thumb = await saveWebp(file, path.join(publicImagesDir, "inspiration"), `${base}-thumb`, {
        width: 1000,
        height: 1000,
        crop: {
          x: fieldAt(fields.imagesCropX, index, 50),
          y: fieldAt(fields.imagesCropY, index, 50),
          zoom: fieldAt(fields.imagesCropZoom, index, 1)
        }
      });
      entries.push(`  {
    id: ${jsString(`inspiration-${Date.now().toString(36)}-${index + 1}`)},
    src: ${jsString(src)},
    thumb: ${jsString(thumb || src)},
    title: ${jsString(index === 0 ? title : `${title} ${index + 1}`)},
    doorType: ${jsString(fields.doorType || "Entrance Door")},
    project: ${jsString(fields.project || "Inspiration")},
    hoverText: ${jsString(fields.hoverText || fields.doorType || "Entrance Door")},
    altText: ${jsString(fields.altText || `${title} inspiration for a custom architectural entrance`)},
    layout: ${jsString(fields.layout || "normal")},
    span: ${numberValue(fields.span, 4)}
  }`);
    }

    if (!entries.length) throw new Error("At least one inspiration image is required.");
    await writeDataFile(insertBeforeArrayEnd(await readDataFile(), "inspirationImages", entries.join(",\n")));
    response.json({ ok: true, message: `${entries.length} inspiration image(s) saved.` });
  } catch (error) {
    response.status(500).json({ ok: false, error: error.message });
  }
});

async function findPort(start = 3010) {
  let lastError = null;

  for (let port = start; port <= 3099; port += 1) {
    const available = await new Promise((resolve) => {
      const server = net.createServer();
      server.unref();
      server.once("error", (error) => {
        lastError = error;
        resolve(false);
      });
      server.once("listening", () => server.close(() => resolve(true)));
      server.listen({ port, host: "localhost", exclusive: true });
    });
    if (available) return port;
  }

  if (lastError?.code === "EPERM") {
    throw new Error("Localhost listening was blocked by the current environment. Run npm run admin from your local terminal.");
  }

  throw new Error("No available admin port found from 3010 to 3099.");
}

const port = await findPort();
app.listen(port, "127.0.0.1", () => {
  console.log(`\nJMR Content Manager running at:\nhttp://localhost:${port}\n`);
});
