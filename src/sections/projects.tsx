import Title from "../components/title";
import Text from "../components/text";
import { Dictionary } from "../i18n";

type Props = {
  projects: GitHubRepo[];
  dict: Dictionary;
};

export default function Projects({ projects, dict }: Props) {
  const title = dict["projects.title"];
  const phrase = dict["projects.phrase"];

  return (
    <section id="projects" class="w-full min-h-screen pt-18">
      <Title type="h1" text={title} class="pl-4" />
      <Text class="p-4 text-xl">{phrase}</Text>
      {projects
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map((project) => (
          <div class="p-4 border-b border-black lg:flex lg:justify-between lg:items-center hover:pl-12 hover:pr-12 transition-all">
            <div>
              <h2 class="text-2xl font-bold">{project.name}</h2>
              <a
                class="text-lg text-blue-500 hover:underline"
                href={project.url}
                target="_blank"
              >
                {project.url}
              </a>
            </div>
            <div class="flex flex-col lg:items-end lg:pt-0 pt-4">
              {project.description && (
                <Text class="text-lg">{project.description}</Text>
              )}
              <div class="flex lg:pt-0 pt-2">
                {project.language && <Text>{project.language}</Text>}
                <p class="pl-4">
                  Created at: {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
