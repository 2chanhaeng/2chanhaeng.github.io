import { REPOSITORY } from "@/lib/constants";

export function Comments() {
  return (
    <script
      src="https://utteranc.es/client.js"
      // @ts-ignore
      repo={REPOSITORY}
      issue-term="pathname"
      theme="preferred-color-scheme"
      crossorigin="anonymous"
      async
    ></script>
  );
}
