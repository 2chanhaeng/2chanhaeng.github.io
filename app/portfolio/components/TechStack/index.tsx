import { stackListItems } from "./lib";
import StackList from "./StackList";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col gap-2 border-t border-fg/20 pt-8 md:px-8 md:border-t-0 md:border-l md:pt-0 md:col-span-2 lg:col-span-1"
    >
      <h2>Tech Stack</h2>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-[2fr,3fr]">
        {stackListItems.map((stack) => (
          <StackList key={stack.name} {...stack} />
        ))}
      </div>
    </section>
  );
}
