import Title from "../components/title";
import Text from "../components/text";
import { NullableTranslator } from "@solid-primitives/i18n";
import { Dictionary } from "../i18n";

type Props = {
  projects: GitHubRepo[];
  t: NullableTranslator<Dictionary, string>;
};

export default function Projects({ projects, t }: Props) {
  return (
    <section id="projects" class="w-full min-h-screen pt-18">
      {t("projects.title") && (
        <Title type="h1" text={t("projects.title")!} class="pl-4" />
      )}
      {t("projects.phrase") && (
        <Text class="p-4 text-xl">{t("projects.phrase")!}</Text>
      )}
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
