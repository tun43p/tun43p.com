import About from "./sections/about";
import Header from "./components/header";
import Projects from "./sections/projects";
import Articles from "./sections/articles";
import Contact from "./sections/contact";

const navigationLinks: Link[] = [
  { name: "About", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Articles", url: "#articles" },
  { name: "Contact", url: "#contact" },
];

function App() {
  return (
    <div class="w-full bg-amber-50">
      <Header title="tun43p" links={navigationLinks} />
      <main>
        <About />
        <Projects />
        <Articles />
        <Contact />
      </main>
    </div>
  );
}

export default App;
