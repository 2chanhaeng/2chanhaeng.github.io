import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getAllChildrenDirectoryRecursive(path: string): string[] {
  const children = fs.readdirSync(path).map(addParent(path));
  const childrenDirectories = children
    .filter(isDirectory)
    .map(getAllChildrenDirectoryRecursive)
    .flat();
  const mdxs = children.filter(isMdx);
  return mdxs.concat(childrenDirectories);
}

const addParent = (parent: string) => (child: string) => `${parent}/${child}`;
const isDirectory = (path: string) => fs.statSync(path).isDirectory();
const isMdx = (path: string) => path.endsWith(".mdx");

export function getPostSlugs() {
  return getAllChildrenDirectoryRecursive(postsDirectory).map((path) =>
    path.replace(postsDirectory + "/", "")
  );
}

export function getPostBySlug(slugs: string[]) {
  console.log("slug", slugs);
  slugs.push(slugs.pop()!.replace(/\.mdx$/, ""));
  const realSlug = slugs.map(decodeURIComponent).join("/");
  console.log("realSlug", realSlug);
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  console.log("fullPath", fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  console.log("slugs", slugs);
  const posts = slugs
    .filter((slug) => slug.endsWith(".mdx"))
    .map((slug) => slug.split("/"))
    .map(getPostBySlug)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
