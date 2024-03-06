import fs from "fs";

export default function PostsPage() {
  return (
    <main>
      <Posts />
    </main>
  );
}

function Posts() {
  const posts = getAllChildrenDirectoryRecursive("app/posts")
    .filter((path) => path !== "app/posts")
    .filter(
      (path: string): boolean =>
        fs.existsSync(`${path}/page.tsx`) || fs.existsSync(`${path}/page.mdx`)
    )
    .map((file) => {
      return (
        <div key={file}>
          <a href={file.replace("app", "")}>{file}</a>
        </div>
      );
    });

  return <div>{posts}</div>;
}

function getAllChildrenDirectoryRecursive(directoryPath: string): string[] {
  const allChildren = fs
    .readdirSync(directoryPath)
    .map((child) => `${directoryPath}/${child}`)
    .filter((path) => fs.statSync(path).isDirectory())
    .map((path) => getAllChildrenDirectoryRecursive(path));
  return [directoryPath].concat(allChildren.flat());
}
