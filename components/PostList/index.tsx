import fs from "fs";
import LinkToPost from "../LinkToPost";
import { getAllChildrenDirectoryRecursive } from "./actions";

export default function PostList() {
  const posts = getAllChildrenDirectoryRecursive("app/posts")
    .filter(exceptAppPosts)
    .filter(hasPageFile)
    .map(removeApp)
    .map((file) => <LinkToPost key={file} path={file} />);
  return <div>{posts}</div>;
}

export const removeApp = (path: string) => path.replace("app/", "");
export const exceptAppPosts = (path: string) => path !== "app/posts";
export const hasPageFile = (path: string): boolean =>
  fs.existsSync(`${path}/page.tsx`) || fs.existsSync(`${path}/page.mdx`);
