import Link from "next/link";
import { BLOG_NAME } from "@/lib/constants";

export default function Intro() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
      <Link href="/" className="hover:underline opacity-100">
        {BLOG_NAME}
      </Link>
      .
    </h2>
  );
}
