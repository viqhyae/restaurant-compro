import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = "https://barcookbakery.com/site/";
const pages = [
  "?product_types=all-products",
  "?paged=2&product_types=all-products",
  "?paged=3&product_types=all-products",
  "?paged=4&product_types=all-products",
];

const categoryNames = {
  bun: "Bun",
  "classic-cake": "Classic Cake",
  "custom-cake": "Custom Cake",
  "croissant-danish": "Croissant & Danish",
  "europe-bread": "European Bread",
  signature: "Signature & Best Seller",
  toast: "Toast",
};

const decode = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&#038;", "&")
    .replaceAll("&#8217;", "'")
    .replaceAll("&nbsp;", " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const products = [];
for (const page of pages) {
  const response = await fetch(`${base}${page}`);
  if (!response.ok) throw new Error(`Unable to fetch catalogue page: ${page}`);
  const html = await response.text();
  const articles = html.matchAll(/<article[^>]+class="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g);

  for (const [, classes, article] of articles) {
    const url = article.match(/<a href="([^"]*\?product=[^"]+)"/)?.[1];
    const image = article.match(/<img itemprop="image"\s+src="([^"]+)"/)?.[1];
    const rawName = article.match(/<span itemprop="name">([\s\S]*?)<\/span>/)?.[1];
    const rawPrice = article.match(/<small itemprop="offers"[\s\S]*?<\/small>/)?.[0];
    if (!url || !image || !rawName) continue;

    const categoryKey = Object.keys(categoryNames).find((key) =>
      classes.includes(`product_types-${key}`),
    );
    products.push({
      name: decode(rawName),
      category: categoryNames[categoryKey] ?? "Bakery",
      url: decode(url),
      sourceImage: decode(image),
      ...(rawPrice ? { price: decode(rawPrice).replaceAll("$", "SGD $") } : {}),
    });
  }
}

const imageDir = "public/images/menu/catalogue";
await mkdir(imageDir, { recursive: true });
for (const [index, product] of products.entries()) {
  const productUrl = new URL(product.url);
  const slug = productUrl.searchParams.get("product") ?? `product-${index + 1}`;
  const extension = path.extname(new URL(product.sourceImage).pathname) || ".jpg";
  const fileName = `${String(index + 1).padStart(2, "0")}-${slug}${extension}`;
  const imageResponse = await fetch(product.sourceImage);
  if (!imageResponse.ok) throw new Error(`Unable to fetch image: ${product.sourceImage}`);
  await writeFile(path.join(imageDir, fileName), Buffer.from(await imageResponse.arrayBuffer()));
  product.image = `/images/menu/catalogue/${fileName}`;
  delete product.sourceImage;
}

const output = products;
await mkdir("src/data", { recursive: true });
await writeFile("src/data/products.json", `${JSON.stringify(output, null, 2)}\n`);
console.log(`Synced ${output.length} official Barcook catalogue products.`);
