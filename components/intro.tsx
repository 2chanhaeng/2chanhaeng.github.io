import { BLOG_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_NAME}.
      </h1>
      <h4 className="text-center text-lg mt-5 md:pl-8">
        이사 중...{" "}
        <a
          href="https://prev.chomu.dev/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          기존 블로그로 이동
        </a>
      </h4>
    </section>
  );
}
