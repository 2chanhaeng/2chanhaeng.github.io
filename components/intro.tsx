import { BLOG_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight">
        {BLOG_NAME}.
      </h1>
      <h2 className="text-center text-2xl mt-5 md:mb-3">이사 중...</h2>

      <Link
        href="https://prev.chomu.dev/"
        className="underline hover:text-blue-600 duration-200 transition-colors"
      >
        기존 블로그로 이동
      </Link>
    </section>
  );
}
