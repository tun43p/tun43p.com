import { createEffect, createSignal, onMount, Show } from "solid-js";
import { flatten } from "@solid-primitives/i18n";

import { Dictionary, Locale, RawDictionary } from "./i18n";

import About from "./sections/about";
import Header from "./components/header";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function detectUserLocale(): Locale {
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === "fr" ? "fr" : "en";
}

function App() {
  const [locale, setLocale] = createSignal<Locale>(detectUserLocale());
  const [loading, setLoading] = createSignal(false);
  const [repos, setRepos] = createSignal<GitHubRepo[]>([]);
  const [dict, setDict] = createSignal<Dictionary | null>(null);

  async function fetchDictionary(locale: Locale): Promise<void> {
    setLoading(true);

    try {
      const module = await import(`./i18n/${locale}.ts`);
      const d: RawDictionary = module.dict;

      setDict(flatten(d));
    } finally {
      setLoading(false);
    }
  }

  createEffect(() => {
    fetchDictionary(locale());
  });

  onMount(async () => {
    setLoading(true);

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
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div class="w-full bg-amber-50">
      <Show
        when={!loading() && dict()}
        fallback={
          <div class="w-full min-h-screen flex justify-center items-center">
            <p class="text-4xl">Loading...</p>
          </div>
        }
      >
        <Header
          title="tun43p"
          locale={locale()}
          setLocale={setLocale}
          dict={dict()!}
        />
        <main>
          <About dict={dict()!} />
          <Projects projects={repos()} dict={dict()!} />
          <Contact dict={dict()!} />
        </main>
      </Show>
    </div>
  );
}

export default App;
