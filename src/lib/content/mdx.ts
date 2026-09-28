import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export function getContentDir(subdir: string) {
  return path.join(process.cwd(), "src/content", subdir);
}

export function readMdxFiles<T extends object>(
  subdir: string
): Array<{ slug: string; data: T; content: string }> {
  const dir = getContentDir(subdir);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data, content } = matter(raw);
    return { slug, data: data as T, content };
  });
}

export function getReadingTime(content: string): string {
  return readingTime(content).text;
}
