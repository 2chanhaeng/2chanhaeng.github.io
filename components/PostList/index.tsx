import fs from "fs";
import { Base64Path } from "@/types/path";
import { encodeB64 } from "@/utils/b64";
import LinkToPost from "../LinkToPost";
import { getAllChildrenDirectoryRecursive } from "./actions";

export default function PostList() {
  const rawPosts = getAllChildrenDirectoryRecursive("app/posts")
    .filter(exceptAppPosts)
    .filter(hasPageFile)
    .map((path) => {
      const paths = path.split("/");
      const last = paths.pop() ?? "";
      paths.push(encodeB64(last));
      return { encoded: paths.join("/"), decoded: path };
    })
    .sort()
    .reverse();
  rawPosts.forEach(({ encoded, decoded }) => {
    try {
      fs.renameSync(decoded, encoded);
    } catch (e) {
      console.error(`Error renaming ${decoded} to ${encoded}: ${e}`);
    }
  });
  const posts = rawPosts.map(removeAppPaths).map(({ encoded, decoded }) => (
    <li key={decoded}>
      <LinkToPost encoded={encoded} decoded={decoded} />
    </li>
  ));
  return <ul>{posts}</ul>;
}

const removeApp = (path: string) => path.replace("app/", "");
const removeAppPaths = ({ encoded, decoded }: Base64Path) => ({
  encoded: removeApp(encoded),
  decoded: removeApp(decoded),
});
const exceptAppPosts = (path: string) => path !== "app/posts";
const hasPageFile = (path: string): boolean =>
  fs.existsSync(`${path}/page.tsx`) || fs.existsSync(`${path}/page.mdx`);
