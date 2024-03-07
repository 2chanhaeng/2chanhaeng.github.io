import fs from "fs";
import LinkToPost from "../LinkToPost";
import { getAllChildrenDirectoryRecursive } from "./actions";

export default function PostList() {
  const posts = getAllChildrenDirectoryRecursive("app/posts")
    .filter(exceptAppPosts)
    .filter(hasPageFile)
    .sort()
    .reverse()
    .map(removeApp)
    .map((path) => (
      <li key={path}>
        <LinkToPost path={path} />
      </li>
    ));
  return <ul>{posts}</ul>;
}

const removeApp = (path: string) => path.replace("app/", "");
const exceptAppPosts = (path: string) => path !== "app/posts";
const hasPageFile = (path: string): boolean =>
  fs.existsSync(`${path}/page.tsx`) || fs.existsSync(`${path}/page.mdx`);
