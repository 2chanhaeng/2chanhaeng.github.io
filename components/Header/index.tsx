import Intro from "./Intro";
import Posts from "./Posts";
import GitHub from "./GitHub";

export default function Header() {
  return (
    <header className="flex items-center gap-2 m-4">
      <Intro />
      &gt;
      <Posts />
      <GitHub />
    </header>
  );
}
