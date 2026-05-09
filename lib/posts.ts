import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

// Simple frontmatter parser
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(fileContent);
  
  if (!match) return { data: {}, content: fileContent };

  const frontmatterRaw = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  
  const data: Record<string, string> = {};
  frontmatterRaw.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    // Remove surrounding quotes if they exist
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1).replace(/\\"/g, '"');
    }
    data[key] = value;
  });

  return { data, content };
}

export function getSortedPostsData(): Omit<BlogPost, 'content'>[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = parseFrontmatter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '2026-01-01',
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    return -1;
  });
}

export function getPostData(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = parseFrontmatter(fileContents);

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || '2026-01-01',
    content,
  };
}
