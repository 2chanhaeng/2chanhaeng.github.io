import { Base64Path } from "@/types/path";
import Link from "next/link";

export default function LinkToPost({ encoded, decoded }: Base64Path) {
  return <Link href={encodeURI(encoded)}>{getLastOfPath(decoded)}</Link>;
}

const getLastOfPath = (path: string) => path.split("/").at(-1) ?? "";
