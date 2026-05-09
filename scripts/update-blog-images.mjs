import fs from 'fs/promises';
import path from 'path';

const SITEMAP_URL = 'https://madcityhomeloans.com/post-sitemap.xml';
const OUTPUT_DIR = path.join(process.cwd(), 'content', 'blog');

async function extractImage(html) {
  const imgMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i);
  if (imgMatch) {
    return imgMatch[1];
  }
  return '';
}

async function run() {
  console.log('Fetching sitemap for images...');
  const sitemapRes = await fetch(SITEMAP_URL);
  const sitemapXml = await sitemapRes.text();

  const urlMatches = [...sitemapXml.matchAll(/<loc>(https:\/\/madcityhomeloans\.com\/[^<]+)<\/loc>/g)];
  const urls = urlMatches.map(m => m[1]);

  for (const url of urls) {
    try {
      const slugMatch = url.match(/madcityhomeloans\.com\/([^/]+)\/?$/);
      if (!slugMatch) continue;
      const slug = slugMatch[1];

      if (['latest-updates-events', 'strategic-partners', 'contact', 'services'].includes(slug)) continue;

      const filePath = path.join(OUTPUT_DIR, `${slug}.mdx`);
      
      // Check if file exists
      let fileContent;
      try {
        fileContent = await fs.readFile(filePath, 'utf-8');
      } catch (e) {
        continue; // File doesn't exist, skip
      }

      // If already has image, skip
      if (fileContent.includes('image: "')) {
        continue;
      }

      console.log(`Fetching image for: ${url}`);
      const res = await fetch(url);
      const html = await res.text();

      const image = await extractImage(html);

      if (image) {
        // Insert image into frontmatter
        const newContent = fileContent.replace('slug: "', `image: "${image}"\nslug: "`);
        await fs.writeFile(filePath, newContent, 'utf-8');
        console.log(`Updated image for: ${slug}.mdx`);
      } else {
        console.log(`No image found for: ${slug}.mdx`);
      }

      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error(`Failed to process ${url}:`, err.message);
    }
  }
  
  console.log('Image update complete!');
}

run();
