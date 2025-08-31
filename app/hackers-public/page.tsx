export default async function Page() {
  return (
    <main className="h-svh aspect-[210/297] bg-black absolute text-white">
      <img
        src="/hackers-star.svg"
        className="absolute w-1/12 right-[15%] top-[15%] rotate-[-30deg]"
      />
      <img
        src="/hackers-star.svg"
        className="absolute w-1/12 left-[10%] top-1/2 rotate-[30deg]"
      />
      <img
        src="/hackers-star.svg"
        className="absolute w-1/12 right-[16%] bottom-[30%] rotate-[135deg]"
      />
      <img
        src="/hackers-star.svg"
        className="absolute w-1/12 left-[30%] bottom-[25%] rotate-[-135deg]"
      />
      <img
        src="/hackers-star.svg"
        className="absolute w-1/12 left-[5%] bottom-[5%] rotate-[-45deg]"
      />
      <img
        src="/hackers-star.svg"
        id="hackers-public-star"
        className="absolute w-1/12 right-[40%] top-[21%]"
      />
      <img
        src="/hackers-public.svg"
        className="w-2/3 absolute left-8 top-8"
        alt="Hackers' Public"
      />
      <img src="/hackers-ufo.svg" className="w-1/2 absolute right-8 top-1/4" />
      <p className="text-5xl absolute top-[30%] left-8">
        <span>1st MEETUP</span>
        <br />
        <span>@SEOUL</span>
      </p>
      <p className="text-3xl absolute top-[60%] left-[5%]">
        <span>2025. 09. 14. 15:00 KST</span>
        <br />
        <span>서울특별시 성동구 상원길 26</span>
        <br />
        <span>튜링의 사과</span>
      </p>

      <p className="text-xl absolute bottom-[8%] right-[5%] text-right">
        <span>
          <b>Code As A Canvas : 코드에서 예술작품이 되기까지</b>
        </span>
        <br />
        <span>(@jakeseo@hackers.pub)</span>
        <hr className="my-2 color-white w-1/2 ml-auto" />
        <span>
          <b>폰트는 어떻게 만들어지는가 - NeoDGM 사례로 살펴보는 개발 후일담</b>
        </span>
        <br />
        <span>(@dalgona@hackers.pub)</span>
      </p>
    </main>
  );
}
