import fs from "fs";

export function getAllChildrenDirectoryRecursive(path: string): string[] {
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
