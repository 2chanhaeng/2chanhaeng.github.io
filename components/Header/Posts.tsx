import Link from "next/link";

export default function Posts() {
  return (
    <h3 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
      <Link href="/posts" className="hover:underline opacity-100">
        Posts
      </Link>
    </h3>
  );
}
