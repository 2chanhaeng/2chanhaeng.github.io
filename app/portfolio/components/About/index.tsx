import { aboutListItems } from "./lib";
import AboutListItem from "./AboutListItem";

export default function About() {
  return (
    <section id="about" className="md:pl-8">
      <h2>About</h2>
      <ul className="grid grid-cols-[auto] items-center justify-center gap-2 text-xl mt-4">
        {aboutListItems.map((item) => (
          <AboutListItem key={item.href} {...item} />
        ))}
      </ul>
    </section>
  );
}
