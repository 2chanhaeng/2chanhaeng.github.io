import { BLOG_NAME } from "@/lib/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link
          href="/"
          className="hover:underline"
          style={{
            opacity: 1,
          }}
        >
          {BLOG_NAME}
        </Link>
        .
      </h2>
    </header>
  );
}
