import About from "./sections/about";
import Header from "./components/header";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import { createSignal, onMount } from "solid-js";

const navigationLinks: Link[] = [
  { name: "About", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

function App() {
  const [loading, setLoading] = createSignal(true);
  const [repos, setRepos] = createSignal<GitHubRepo[]>([]);

  onMount(async () => {
    const url = "https://api.github.com/users/tun43p/repos";

    const request = new Request(url, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    const response = await fetch(request);
    const data = await response.json();

    console.log(data);

    const filteredData = data.filter((repo: any) => !repo.fork);
    const parsedRepos: GitHubRepo[] = filteredData.map((repo: any) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      language: repo.language,
      createdAt: new Date(repo.created_at).toLocaleDateString(),
    }));

    setRepos(parsedRepos);
    setLoading(false);
  });

  return (
    <div class="w-full bg-amber-50">
      {loading() ? (
        <div class="w-full min-h-screen flex justify-center items-center">
          <p class="text-4xl">Loading...</p>
        </div>
      ) : (
        <>
          <Header title="tun43p" links={navigationLinks} />
          <main>
            <About />
            <Projects projects={repos()} />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
