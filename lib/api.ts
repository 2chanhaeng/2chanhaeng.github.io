import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Post } from "@/interfaces/post";
import {
  DEFAULT_AUTHOR as author,
  DEFAULT_IMAGE as ogImage,
} from "@/lib/constants";

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

export function getPostBySlug(slugs: string[]): Post {
  slugs.push(slugs.pop()!.replace(/\.mdx$/, ""));
  const realSlug = slugs.map(decodeURIComponent).join("/");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content, author, ogImage } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith(".mdx"))
    .map((slug) => slug.split("/"))
    .map(getPostBySlug)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
