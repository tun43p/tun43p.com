import Title from "../components/title";

const projects = [
  {
    name: "tun43p",
    description:
      "My personal website, built with Vite, Tailwind CSS, and TypeScript.",
    url: "https://github.com/tun43p/tun43p.com",
  },
  {
    name: "sample-1",
    description: "Sample project 1 description.",
    url: "https://github.com/tun43p",
  },
  {
    name: "sample-2",
    description: "Sample project 2 description.",
    url: "https://github.com/tun43p",
  },
  {
    name: "sample-3",
    description: "Sample project 3 description.",
    url: "https://github.com/tun43p",
  },
];

export default function Projects() {
  return (
    <section id="projects" class="w-full min-h-screen pt-18">
      <Title type="h1" text="Projects" class="pl-4" />
      {projects.map((project) => (
        <div class="p-4 border-b border-black flex justify-between items-center">
          <h2 class="text-2xl font-bold">{project.name}</h2>
          <div>
            <p class="text-lg">{project.description}</p>
            <a class="text-lg text-blue-500 hover:underline" href={project.url}>
              {project.url}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
