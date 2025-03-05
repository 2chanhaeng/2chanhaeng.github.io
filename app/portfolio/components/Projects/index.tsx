import { projects } from "./lib";
import Project from "./Project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="col-span-full grid grid-cols-1 md:grid-cols-2 p-4 gap-4 border-t border-fg/20"
    >
      <h2 className="col-span-full">Projects</h2>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </section>
  );
}
