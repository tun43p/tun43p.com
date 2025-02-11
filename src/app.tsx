import { createResource, createSignal, onMount } from "solid-js";
import { flatten, translator } from "@solid-primitives/i18n";

import { Dictionary, Locale, RawDictionary } from "./i18n";
import About from "./sections/about";
import Header from "./components/header";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
  const [locale, setLocale] = createSignal<Locale>("en");
  const [loading, setLoading] = createSignal(true);
  const [repos, setRepos] = createSignal<GitHubRepo[]>([]);

  async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    setLoading(true);
    const d: RawDictionary = (await import(`./i18n/${locale}.ts`)).dict;
    setLoading(false);

    return flatten(d);
  }

  const [dict] = createResource(locale, fetchDictionary);
  const t = translator(dict);

  onMount(async () => {
    try {
      const url = "https://api.github.com/users/tun43p/repos";

      const request = new Request(url, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      });

      const response = await fetch(request);
      const data = await response.json();

      const filteredData = data.filter((repo: any) => !repo.fork);
      const parsedRepos: GitHubRepo[] = filteredData.map((repo: any) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        createdAt: repo.created_at,
      }));

      setRepos(parsedRepos);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  });

  return (
    <div class="w-full bg-amber-50">
      {loading() ? (
        <div class="w-full min-h-screen flex justify-center items-center">
          <p class="text-4xl">Loading...</p>
        </div>
      ) : (
        <>
          <Header
            title="tun43p"
            locale={locale()}
            setLocale={setLocale}
            t={t}
          />
          <main>
            <About t={t} />
            <Projects projects={repos()} />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
