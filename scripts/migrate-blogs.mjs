import fs from 'fs/promises';
import path from 'path';

const SITEMAP_URL = 'https://madcityhomeloans.com/post-sitemap.xml';
const OUTPUT_DIR = path.join(process.cwd(), 'content', 'blog');

async function extractContent(html) {
  // Extract Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  let title = titleMatch ? titleMatch[1].replace(' | Wisconsin Home Professionals', '').trim() : 'Untitled';
  title = title.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&');

  // Extract Meta Description
  let description = '';
  const descMatch = html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/i) || 
                    html.match(/<meta[^>]+property="og:description"[^>]+content="([^"]+)"/i);
  if (descMatch) {
    description = descMatch[1].replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&');
  }

  // Extract Article Content
  let content = '';
  
  if (html.includes('elementor-widget-theme-post-content')) {
    const startSplit = html.split(/class="[^"]*elementor-widget-theme-post-content[^"]*"[^>]*>/);
    if (startSplit.length > 1) {
      const endSplit = startSplit[1].split(/<div[^>]*class="[^"]*elementor-widget-post-navigation|<footer|<\/main>/i);
      content = endSplit[0].replace(/(<\/div>\s*)+$/, '');
    }
  } else {
    const contentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<(footer|section|aside|\/article)/i);
    if (contentMatch) {
      content = contentMatch[1];
    } else {
      const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
      if (articleMatch) {
        content = articleMatch[1];
      }
    }
  }

  // Very basic HTML to Markdown cleanup (we can just leave it as HTML inside MDX, or clean it up slightly)
  // For safety, we will just wrap the HTML in a markdown file. MDX supports raw HTML.
  // We'll strip scripts and styles just in case
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  return { title, description, content };
}

async function run() {
  console.log('Fetching sitemap...');
  const sitemapRes = await fetch(SITEMAP_URL);
  const sitemapXml = await sitemapRes.text();

  const urlMatches = [...sitemapXml.matchAll(/<loc>(https:\/\/madcityhomeloans\.com\/[^<]+)<\/loc>/g)];
  const urls = urlMatches.map(m => m[1]);

  console.log(`Found ${urls.length} URLs in sitemap.`);

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const url of urls) {
    try {
      const slugMatch = url.match(/madcityhomeloans\.com\/([^/]+)\/?$/);
      if (!slugMatch) continue;
      const slug = slugMatch[1];

      // Skip non-blog paths if any snuck in
      if (['latest-updates-events', 'strategic-partners', 'contact', 'services'].includes(slug)) continue;

      console.log(`Fetching: ${url}`);
      const res = await fetch(url);
      const html = await res.text();

      const { title, description, content } = await extractContent(html);

      // Create Frontmatter
      const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
slug: "${slug}"
date: "${new Date().toISOString().split('T')[0]}"
---

${content}
`;

      const filePath = path.join(OUTPUT_DIR, `${slug}.mdx`);
      await fs.writeFile(filePath, mdxContent, 'utf-8');
      console.log(`Saved: ${slug}.mdx`);

      // Polite delay
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error(`Failed to process ${url}:`, err.message);
    }
  }
  
  console.log('Migration complete!');
}

run();
