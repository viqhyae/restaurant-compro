import { readFile, writeFile, mkdir } from 'node:fs/promises';

const file = 'src/app/page.tsx';
let source = await readFile(file, 'utf8');
const urls = [...new Set(source.match(/https:\/\/images\.unsplash\.com\/[^"\s]+/g))];
await mkdir('public/images', { recursive: true });
const credits = [];
for (const url of urls) {
  const parsed = new URL(url);
  const name = `${parsed.pathname.slice(1)}-${parsed.searchParams.get('w')}.jpg`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  await writeFile(`public/images/${name}`, Buffer.from(await response.arrayBuffer()));
  source = source.replaceAll(url, `/images/${name}`);
  credits.push({ file: name, source: url, usage: 'Unsplash reference photography; not official Barcook imagery' });
}
await writeFile(file, source);
await writeFile('public/images/sources.json', JSON.stringify(credits, null, 2) + '\n');
console.log(`Localized ${urls.length} images.`);
