import { ProjectProps } from "./Project";

export const projects: ProjectProps[] = [
  {
    name: "Secret Sky",
    introduction:
      "Secret Sky 는 Bluesky 를 기반으로 작성자가 원하는 사용자 간에 비밀글을 공유할 수 있는 웹 앱입니다.",
    descriptions: [
      "기본적으로 모든 글을 공개하는 Bluesky 에서 비밀글을 작성하고 싶은 사용자들을 위해 개발했습니다.",
      "배포하고 2개월 동안 약 2000개의 글이 작성되었으며, 평균적으로 하루에 80~100명 정도의 사용자가 접속하여 300회 정도의 뷰가 발생합니다.",
      "Frontend, Backend, DB 등 전반적인 개발을 담당했습니다.",
      "사용자가 작성한 글을 서버에서 암호화한 뒤 암호문은 Bluesky 에 업로드하고 앱의 DB 에는 글의 키만 저장하여 보안을 유지합니다.",
      "JWK 기반 Bluesky 의 OAuth 인증을 구현했습니다.",
      "그 외에 Bluesky API 와 연결해 무한 스크롤이 적용된 피드, 좋아요, 멘션, RT 등 SNS 의 기본적인 기능을 지원합니다.",
    ],
    techStacks: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Vercel",
    ],
    gitUrl: "https://github.com/2chanhaeng/secret-sky",
    deployUrl: "https://secret-sky.vercel.app/",
    startAt: "2025.01",
  },
  {
    name: "꾹꾹",
    introduction:
      "꾹꾹은 스탬프랠리를 즐겁게 진행할 수 있도록 돕는 웹 앱입니다.",
    descriptions: [
      "게임에서 일일 접속 이벤트 스탬프 랠리에서 영감을 받아 개발되었습니다.",
      "Frontend 전반과 Backend 일부를 담당했습니다.",
    ],
    techStacks: ["React", "TypeScript", "Tailwind CSS"],
    gitUrl: "https://github.com/ZZIPSA/kkuk-kkuk-fe",
    deployUrl: "https://kkuk-kkuk-fe.vercel.app",
    startAt: "2024.9",
    endAt: "2024.3",
    teams: 4,
  },
];
