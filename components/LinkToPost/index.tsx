import Link from "next/link";

export default function LinkToPost({ path }: { path: string }) {
  return (
    <Link prefetch href={path}>
      {getLastOfPath(path)}
    </Link>
  );
}

const getLastOfPath = (path: string) => path.split("/").at(-1) ?? "";
