import { stackListItems } from "./lib";
import StackList from "./StackList";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col gap-2 border-t border-fg/20 pt-8 md:px-8 md:border-t-0 md:pt-0 md:col-span-2"
    >
      <h2>Tech Stack</h2>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-[auto,1fr]">
        {stackListItems.map((stack) => (
          <StackList key={stack.name} {...stack} />
        ))}
      </div>
    </section>
  );
}
