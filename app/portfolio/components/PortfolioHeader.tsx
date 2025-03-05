export default function PortfolioHeader() {
  return (
    <section className="aspect-video bg-cover flex flex-col items-center justify-center relative col-span-full">
      <div className="absolute size-full bg-cover bg-cover-image dark:brightness-[.2725] dark:contrast-[1.75] -z-10 transition ease-in-out duration-1000" />
      <h1 className="text-center">이찬행</h1>
      <p className="text-center text-2xl font-extrabold">Frontend Developer</p>
      <p className="text-center text-lg font-extrabold">
        사용자의 경험을 중요하게 생각하는 프론트엔드 개발자 이찬행입니다.
      </p>
    </section>
  );
}
