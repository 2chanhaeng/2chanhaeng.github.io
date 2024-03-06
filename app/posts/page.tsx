import fs from "fs";
import Link from "next/link";

export default function PostsPage() {
  return (
    <main>
      <Posts />
    </main>
  );
}

function Posts() {
  const posts = getAllChildrenDirectoryRecursive("app/posts")
    .filter(exceptAppPosts)
    .filter(hasPageFile)
    .map((file) => <LinkToPost key={file} path={file} />);
  return <div>{posts}</div>;
}

function LinkToPost({ path }: { path: string }) {
  return <Link href={path}>{getLastOfPath(path)}</Link>;
}

const getLastOfPath = (path: string) => path.split("/").at(-1);
const exceptAppPosts = (path: string) => path !== "app/posts";
const hasPageFile = (path: string): boolean =>
  fs.existsSync(`${path}/page.tsx`) || fs.existsSync(`${path}/page.mdx`);

function getAllChildrenDirectoryRecursive(path: string): string[] {
  const children = fs
    .readdirSync(path)
    .map(addParent(path))
    .filter(isDirectory)
    .map(getAllChildrenDirectoryRecursive)
    .flat();
  return [path].concat(children);
}

const addParent = (parent: string) => (child: string) => `${parent}/${child}`;
const isDirectory = (path: string) => fs.statSync(path).isDirectory();
